<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { getBlogPost, getAllBlogPosts } from '$lib/data/blog-posts';
	$: lang = ($page.params.lang || 'en') as Locale;
	$: slug = $page.params.slug;
	$: post = getBlogPost(slug);
	$: allPosts = getAllBlogPosts();
	$: currentIndex = allPosts.findIndex((p) => p.slug === slug);
	$: prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
	$: nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
	const labels = { en: { backToBlog: 'Back to Blog', prevPost: 'Previous', nextPost: 'Next', notFound: 'Post not found', notFoundDesc: 'The blog post does not exist.' }, ko: { backToBlog: '블로그로 돌아가기', prevPost: '이전 글', nextPost: '다음 글', notFound: '글을 찾을 수 없습니다', notFoundDesc: '블로그 글이 존재하지 않습니다.' }, ja: { backToBlog: 'ブログに戻る', prevPost: '前の記事', nextPost: '次の記事', notFound: '記事が見つかりません', notFoundDesc: 'ブログ記事は存在しません。' }, zh: { backToBlog: '返回博客', prevPost: '上一篇', nextPost: '下一篇', notFound: '文章未找到', notFoundDesc: '博客文章不存在。' } };
	$: t = labels[lang] || labels.en;
</script>
<svelte:head>
	{#if post}
		<title>{post.title[lang] || post.title.en} - QR.sd.gy</title>
		<meta name="description" content={post.description[lang] || post.description.en} />
		{@html `<script type="application/ld+json">${JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": post.title[lang] || post.title.en,
			"description": post.description[lang] || post.description.en,
			"datePublished": post.date,
			"author": { "@type": "Organization", "name": "SDKLABS" },
			"publisher": { "@type": "Organization", "name": "SDKLABS" },
			"mainEntityOfPage": { "@type": "WebPage", "@id": `https://qr.sd.gy/${lang}/blog/${slug}` }
		})}</script>`}
		{@html `<script type="application/ld+json">${JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{ "@type": "ListItem", "position": 1, "name": "Home", "item": `https://qr.sd.gy/${lang}` },
				{ "@type": "ListItem", "position": 2, "name": "Blog", "item": `https://qr.sd.gy/${lang}/blog` },
				{ "@type": "ListItem", "position": 3, "name": post.title[lang] || post.title.en, "item": `https://qr.sd.gy/${lang}/blog/${slug}` }
			]
		})}</script>`}
	{:else}
		<title>{t.notFound}</title>
	{/if}
</svelte:head>
<div class="max-w-3xl mx-auto px-4 py-12">
	{#if post}
		<a href="/{lang}/blog" class="inline-flex items-center gap-2 text-gray-600 dark:text-dark-400 hover:text-violet-500 transition-colors mb-8"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>{t.backToBlog}</a>
		<article>
			<header class="mb-8"><div class="flex items-center gap-3 mb-4"><span class="px-3 py-1 text-xs font-medium bg-violet-500/10 text-violet-500 rounded-full">{post.category}</span><span class="text-sm text-gray-500 dark:text-dark-400">{post.date}</span></div><h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-dark-100 mb-4">{post.title[lang] || post.title.en}</h1><p class="text-xl text-gray-600 dark:text-dark-400">{post.description[lang] || post.description.en}</p></header>
			<div class="prose prose-lg dark:prose-invert max-w-none prose-a:text-violet-500 prose-code:text-violet-500">{@html (post.content[lang] || post.content.en).replace(/^### (.*$)/gm, '<h3>$1</h3>').replace(/^## (.*$)/gm, '<h2>$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/^\- (.*$)/gm, '<li>$1</li>').replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>').replace(/\n\n/g, '</p><p>')}</div>
		</article>
		<nav class="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700"><div class="flex justify-between gap-4">{#if prevPost}<a href="/{lang}/blog/{prevPost.slug}" class="flex-1 p-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-violet-500"><span class="text-sm text-gray-500">{t.prevPost}</span><p class="text-gray-900 dark:text-dark-100 font-medium truncate">{prevPost.title[lang] || prevPost.title.en}</p></a>{:else}<div class="flex-1"></div>{/if}{#if nextPost}<a href="/{lang}/blog/{nextPost.slug}" class="flex-1 p-4 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg hover:border-violet-500 text-right"><span class="text-sm text-gray-500">{t.nextPost}</span><p class="text-gray-900 dark:text-dark-100 font-medium truncate">{nextPost.title[lang] || nextPost.title.en}</p></a>{:else}<div class="flex-1"></div>{/if}</div></nav>
	{:else}<div class="text-center py-20"><h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-4">{t.notFound}</h1><p class="text-gray-600 dark:text-dark-400 mb-8">{t.notFoundDesc}</p><a href="/{lang}/blog" class="px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600">{t.backToBlog}</a></div>{/if}
</div>
