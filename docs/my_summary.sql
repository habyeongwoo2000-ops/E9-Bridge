-- E9-Bridge — "내 정보 한눈에" (로그인 개인화) + 캄보디아어·네팔어 추가
-- lang_sync.sql 다음에 실행하세요. 여러 번 실행해도 안전합니다.
--
-- 1) 내 정보 요약
--    로그인한 사람이 기한 계산 · 사유 자가진단 · 출국 정산에 넣은 "입력값"만 저장합니다.
--    결과 문장은 저장하지 않습니다(화면이 고른 언어로 다시 계산합니다).
--    { "deadline": {leave, apply, at}, "reason": {q1,q2,q3,at}, "payout": {exit, ins, elig, at} }
alter table eum_users add column if not exists my_summary jsonb;

-- 2) 요약 메일 하루 횟수 제한 (받는 이메일 주소는 저장하지 않습니다)
alter table eum_users add column if not exists mail_day   date;
alter table eum_users add column if not exists mail_count int not null default 0;

-- 3) 지원 언어를 ko · en · vi · id · km(캄보디아) · ne(네팔) 로 바꿉니다.
--    예전에 th 로 저장된 값이 있어도 막히지 않도록 th 는 남겨 둡니다(새로 저장되지는 않습니다).
alter table eum_users add column if not exists lang text;   -- lang_sync.sql 을 안 돌렸어도 괜찮게
alter table eum_users drop constraint if exists eum_users_lang_ck;
alter table eum_users add constraint eum_users_lang_ck
  check (lang is null or lang in ('ko','en','vi','id','km','ne','th'));

alter table eum_posts drop constraint if exists eum_posts_orig_lang_check;
alter table eum_posts add constraint eum_posts_orig_lang_check
  check (orig_lang in ('ko','en','vi','id','km','ne','th'));

-- qna 표를 쓰고 있다면(qna_schema.sql) 질문 언어 제약도 함께 바꿉니다. 표가 없으면 건너뜁니다.
do $$ begin
  alter table qna drop constraint if exists qna_asked_lang_check;
  alter table qna add constraint qna_asked_lang_check
    check (asked_lang in ('ko','en','vi','id','km','ne','th'));
exception when undefined_table then null; end $$;
