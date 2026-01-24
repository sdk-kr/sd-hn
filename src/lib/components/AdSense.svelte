<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// 광고 유형
	export let type: 'sidebar' | 'infeed' | 'article' | 'horizontal' = 'article';
	export let className: string = '';

	// 광고 슬롯 설정 (나중에 실제 슬롯 ID로 교체)
	const adConfig = {
		sidebar: {
			style: 'display:block',
			format: 'auto',
			responsive: true,
			class: 'w-full min-h-[250px]'
		},
		infeed: {
			style: 'display:block',
			format: 'fluid',
			responsive: true,
			class: 'w-full'
		},
		article: {
			style: 'display:block; text-align:center;',
			format: 'auto',
			responsive: true,
			class: 'w-full min-h-[100px]'
		},
		horizontal: {
			style: 'display:block',
			format: 'horizontal',
			responsive: true,
			class: 'w-full min-h-[90px]'
		}
	};

	$: config = adConfig[type];

	onMount(() => {
		if (browser) {
			try {
				// @ts-ignore
				(window.adsbygoogle = window.adsbygoogle || []).push({});
			} catch (e) {
				console.error('AdSense error:', e);
			}
		}
	});
</script>

<div class="adsense-container {className}">
	{#if browser}
		<ins
			class="adsbygoogle {config.class}"
			style={config.style}
			data-ad-client="ca-pub-2456249131797827"
			data-ad-format={config.format}
			data-full-width-responsive={config.responsive}
		></ins>
	{/if}
</div>

<style>
	.adsense-container {
		overflow: hidden;
	}

	/* 광고 로딩 중 또는 없을 때 최소 높이 유지 */
	.adsense-container:empty {
		min-height: 0;
	}
</style>
