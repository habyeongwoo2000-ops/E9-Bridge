[CmdletBinding()]
param(
    [guid]$SessionId = [guid]::Empty,
    [ValidateRange(0, 24)][int]$MaxRetries = 6,
    [ValidateRange(1, 86400)][int]$RetrySeconds = 3600
)

$ErrorActionPreference = 'Stop'
$project = (Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')).Path
$codex = Join-Path $env:LOCALAPPDATA 'E9Bridge-Codex/node_modules/.bin/codex.cmd'
if (!(Test-Path -LiteralPath $codex -PathType Leaf)) {
    $codex = (Get-Command codex.cmd -CommandType Application | Select-Object -First 1).Source
}
$runDirectory = Join-Path $project '.codex-run'
New-Item -ItemType Directory -Path $runDirectory -Force | Out-Null
$lock = [IO.File]::Open((Join-Path $runDirectory 'run.lock'), 'OpenOrCreate', 'ReadWrite', 'None')
$registeredCore = $env:CODEX_WINDOWS_REGISTERED_CORE

try {
    # A standalone CLI process uses its local Windows sandbox executor.
    $env:CODEX_WINDOWS_REGISTERED_CORE = $null
    Push-Location -LiteralPath $project
    try {
        for ($attempt = 0; $attempt -le $MaxRetries; $attempt++) {
            $arguments = @('-a', 'never', '-s', 'workspace-write', 'exec')
            if ($SessionId -ne [guid]::Empty) {
                $arguments += @('resume', $SessionId.ToString())
            }
            $arguments += @('--skip-git-repo-check', '--json', '-')

            $prompt = 'Read docs/codex-handoff.md and perform the current milestone. Verify the current files first and report the exact remaining blockers.'
            if ($SessionId -ne [guid]::Empty) {
                $prompt = 'Continue the same milestone from docs/codex-handoff.md. Inspect partial changes and resume unfinished work. Stop if a user decision or a missing prerequisite blocks the milestone.'
            }

            $usageLimited = $false
            $logPath = Join-Path $runDirectory ("{0}-{1}.jsonl" -f (Get-Date -Format 'yyyyMMdd-HHmmssfff'), $attempt)
            Write-Host "Codex attempt $($attempt + 1). Events: $logPath"
            $prompt | & $codex @arguments | ForEach-Object {
                $line = $_
                Add-Content -LiteralPath $logPath -Value $line -Encoding UTF8
                try { $event = ConvertFrom-Json -InputObject $line -ErrorAction Stop }
                catch { return }

                if ($event.type -eq 'thread.started') {
                    $SessionId = [guid]$event.thread_id
                    Set-Content -LiteralPath (Join-Path $runDirectory 'session-id.txt') -Value $SessionId.ToString() -Encoding ASCII
                    Write-Host "Session: $SessionId"
                }
                if ($event.type -eq 'error' -or $event.type -eq 'turn.failed') {
                    $message = @($event.message, $event.error.message, $event.error.code) -join ' '
                    if ($message -match '(?i)usage_limit_reached|(?:hit|reached) your (?:codex )?usage limit') {
                        $usageLimited = $true
                    }
                    Write-Host $message.Trim()
                }
                if ($event.type -eq 'item.completed' -and $event.item.type -eq 'agent_message') {
                    Write-Host $event.item.text
                }
            }
            $result = $LASTEXITCODE
            if ($result -eq 0 -or !$usageLimited -or $SessionId -eq [guid]::Empty -or $attempt -eq $MaxRetries) {
                exit $result
            }
            Write-Host "Usage limit reached. Retrying session $SessionId in $RetrySeconds seconds."
            Start-Sleep -Seconds $RetrySeconds
        }
    } finally {
        Pop-Location
    }
} finally {
    $env:CODEX_WINDOWS_REGISTERED_CORE = $registeredCore
    $lock.Dispose()
}
