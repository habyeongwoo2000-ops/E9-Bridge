import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* E9-Bridge 프론트엔드 (React + Vite)

   · 개발: npm run dev:web (루트) → http://localhost:5173
     /api 로 가는 요청은 같은 컴퓨터의 Express 백엔드(4000번)로 넘깁니다.
     백엔드는 루트에서 npm run dev:api 로 켭니다.
   · 배포: Vercel 이 루트 vercel.json 의 buildCommand 로 이 폴더를 빌드해
     frontend/dist 를 그대로 올립니다.

   빌드 결과의 JS·CSS 는 dist/static/ 에 둡니다. public/assets/ (사진·아이콘)와
   이름이 섞이지 않게 하려는 것입니다. */
export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
    proxy: {
      '/api': { target: process.env.API_URL || 'http://localhost:4000', changeOrigin: false }
    }
  },
  preview: { port: 4173 },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
    chunkSizeWarningLimit: 900
  }
});
