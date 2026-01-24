<script lang="ts">
	import { locale, type Locale } from '$lib/i18n';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	// URL의 언어에 따라 locale 스토어 업데이트
	$: locale.set(data.lang as Locale);
</script>

<slot />
