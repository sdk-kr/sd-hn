# SvelteKit + Cloudflare Pages 템플릿

다국어 지원, AdSense, 다크 테마가 포함된 SvelteKit 템플릿

## 기능

- ✅ SvelteKit + TypeScript
- ✅ Tailwind CSS (다크 테마)
- ✅ 다국어 지원 (영어, 한국어, 일본어, 중국어)
- ✅ Cloudflare Pages 배포
- ✅ Cloudflare KV 캐시 (선택)
- ✅ Google AdSense 컴포넌트
- ✅ localStorage 안전 래퍼

## 시작하기

```bash
# 1. 템플릿 복사
gh repo create my-app --template sdk-kr/sveltekit-template

# 2. 의존성 설치
cd my-app
npm install

# 3. 개발 서버 실행
npm run dev
```

## TODO (새 프로젝트 시작 시)

1. `package.json` - name 변경
2. `wrangler.toml` - name 변경
3. `src/routes/+layout.svelte` - 로고, 도메인, 네비게이션 변경
4. `src/lib/i18n/translations.ts` - 번역 추가
5. `src/lib/components/AdSense.svelte` - AdSense ID 변경

## 배포

```bash
# GitHub에 푸시하면 Cloudflare Pages에서 자동 배포
git push origin main
```

## 폴더 구조

```
src/
├── lib/
│   ├── components/
│   │   └── AdSense.svelte      # 광고 컴포넌트
│   ├── i18n/
│   │   ├── index.ts            # 언어 스토어
│   │   └── translations.ts     # 번역 데이터
│   └── utils/
│       └── storage.ts          # localStorage 래퍼
├── routes/
│   ├── +layout.svelte          # 전역 레이아웃
│   ├── +page.server.ts         # 리다이렉트
│   └── [lang]/
│       ├── +layout.svelte      # 언어별 레이아웃
│       ├── +layout.ts          # 언어 파라미터
│       └── +page.svelte        # 홈페이지
└── app.css                     # Tailwind + 커스텀 색상
```

## 라이선스

MIT
