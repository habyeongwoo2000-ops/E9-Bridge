/* 내 컴퓨터에서 백엔드를 켜는 파일입니다. (Vercel 에서는 쓰지 않습니다)

   npm run dev   → 파일을 고치면 자동으로 다시 켜집니다
   npm start     → 그냥 켭니다

   backend/.env 파일이 있으면 그 안의 환경변수를 읽습니다(Node 20.12 이상).
   .env 는 절대 깃허브에 올리지 마세요(.gitignore 에 들어 있습니다). */

const fs = require('fs');
const path = require('path');

const envFile = path.join(__dirname, '..', '.env');
try {
  if (typeof process.loadEnvFile === 'function' && fs.existsSync(envFile)) process.loadEnvFile(envFile);
} catch (e) {
  console.warn('.env 를 읽지 못했습니다:', e && e.message);
}

const app = require('./app');
const PORT = Number(process.env.PORT || 4000);

app.listen(PORT, function () {
  console.log('E9-Bridge API → http://localhost:' + PORT + '/api/health');
});
