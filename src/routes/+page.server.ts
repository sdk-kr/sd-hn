import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	// Detect browser language for better UX, default to 'en' for crawlers
	const acceptLang = request.headers.get('accept-language') || '';
	const preferred = acceptLang.split(',')[0]?.split('-')[0]?.toLowerCase();
	const supported = ['en', 'ko', 'ja', 'zh'];
	const lang = supported.includes(preferred) ? preferred : 'en';
	throw redirect(301, `/${lang}`);
};