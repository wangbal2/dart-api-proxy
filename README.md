# DART API Proxy Backend

Node.js Express 기반 DART(전자공시시스템) API 프록시 서버입니다.

## 개요

이 서버는 DART Open API를 프록시하여 CORS 문제를 해결하고, 프론트엔드에서 직접 DART API를 호출할 수 있도록 합니다.

## 기술 스택

- Node.js
- Express.js
- Axios
- CORS

## 환경 변수 설정

```
DART_API_KEY=your_dart_api_key_here
PORT=3000
```

## API 엔드포인트

| 엔드포인트 | 설명 |
|-----------|------|
| GET /health | 서버 상태 확인 |
| GET /api/company?name={기업명} | 기업 검색 |
| GET /api/list | 공시 목록 조회 |
| GET /api/fnlttSinglAcntAll | 재무정보 조회 |
| GET /api/dart/:endpoint | 범용 DART API 프록시 |

## GitHub 업로드 방법

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/dart-api-proxy.git
git push -u origin main
```

## Render 배포 가이드

1. [Render](https://render.com)에 로그인
2. New + > Web Service 선택
3. GitHub 저장소 연결
4. 설정:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Environment Variables에 `DART_API_KEY` 추가
6. Deploy 클릭

## 로컬 실행

```bash
npm install
DART_API_KEY=your_key npm start
```

개발 모드:
```bash
npm run dev
```

## 라이선스

MIT
