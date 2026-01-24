import { locales, type Locale } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const lang = params.lang as Locale;

	if (!locales.includes(lang)) {
		throw error(404, 'Language not supported');
	}

	return {
		lang
	};
};
