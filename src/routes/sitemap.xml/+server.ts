import type { RequestHandler } from './$types';

const SITE = 'https://qr.sd.gy';
const LANGS = ['en', 'ko', 'ja', 'zh'];

// 2026-10-16: 사이트 전체 색인 제외 — sitemap 을 비운다.
// 전수 측정 결과 148p 중 83%가 400단어 미만(중앙값 156)이고 도구 페이지도 86~141단어다.
// qr.sd.gy 는 sd.gy 의 서브도메인이라 애드센스가 sd.gy 와 함께 평가하므로,
// 정리된 sd.gy 본체(46p·중앙값 1,638단어)를 끌어내린다.
// 전 페이지 noindex 메타(app.html)와 짝을 이룬다. 콘텐츠 보강 시 되돌린다.
const PAGES: string[] = [];

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = LANGS.flatMap((lang) =>
		PAGES.map(
			(page) => `
	<url>
		<loc>${SITE}/${lang}${page}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
	).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
