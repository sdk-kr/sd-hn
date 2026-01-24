<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	interface FAQ {
		question: string;
		answer: string;
	}

	const content = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'FAQ',
			description: 'Find answers to common questions about SDK.xyz image tools.',
			faqs: [
				{
					question: 'What is SDK.xyz?',
					answer: 'SDK.xyz is a collection of free, fast, and privacy-focused image tools that run directly in your browser. We offer tools like Image Compressor, Resizer, Format Converter, Cropper, and more.'
				},
				{
					question: 'Is SDK.xyz free to use?',
					answer: 'Yes, all tools on SDK.xyz are completely free to use. There are no hidden fees, subscriptions, or premium features. We support the service through minimal advertising.'
				},
				{
					question: 'Are my images safe?',
					answer: 'Absolutely. All image processing happens entirely in your browser. Your images never leave your device and are never uploaded to our servers. Your privacy is our priority.'
				},
				{
					question: 'What image formats are supported?',
					answer: 'We support PNG, JPG/JPEG, and WebP formats. Our Format Converter tool allows you to convert between these formats easily.'
				},
				{
					question: 'How does the Image Compressor work?',
					answer: 'Our Image Compressor uses advanced browser-based compression algorithms to reduce file size while maintaining image quality. You can adjust the quality slider to find the perfect balance between size and quality.'
				},
				{
					question: 'Is there a file size limit?',
					answer: 'We recommend images under 50MB for optimal performance. Since all processing happens in your browser, very large files may cause slower processing depending on your device.'
				},
				{
					question: 'Can I process multiple images at once?',
					answer: 'Yes! Most of our tools support batch processing. You can upload multiple images and process them all at once.'
				},
				{
					question: 'Which browsers are supported?',
					answer: 'SDK.xyz works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience.'
				},
				{
					question: 'Can I use SDK.xyz on mobile?',
					answer: 'Yes, SDK.xyz is fully responsive and works on mobile devices. However, processing very large images on mobile may be slower due to device limitations.'
				},
				{
					question: 'How can I report a bug or suggest a feature?',
					answer: 'We welcome your feedback! Please send bug reports or feature suggestions to support@sdk.xyz. We actively review all submissions.'
				}
			] as FAQ[]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: 'FAQ',
			description: 'SDK.xyz 이미지 도구에 대한 일반적인 질문에 대한 답변을 찾아보세요.',
			faqs: [
				{
					question: 'SDK.xyz란 무엇인가요?',
					answer: 'SDK.xyz는 브라우저에서 직접 실행되는 무료, 빠른, 개인정보 보호 중심의 이미지 도구 모음입니다. 이미지 압축, 크기 조절, 포맷 변환, 자르기 등 다양한 도구를 제공합니다.'
				},
				{
					question: 'SDK.xyz는 무료인가요?',
					answer: '네, SDK.xyz의 모든 도구는 완전히 무료입니다. 숨겨진 비용, 구독료, 프리미엄 기능이 없습니다. 최소한의 광고를 통해 서비스를 지원하고 있습니다.'
				},
				{
					question: '제 이미지는 안전한가요?',
					answer: '물론입니다. 모든 이미지 처리는 브라우저에서 완전히 이루어집니다. 이미지는 기기를 떠나지 않으며 서버로 업로드되지 않습니다. 개인정보 보호가 우선입니다.'
				},
				{
					question: '어떤 이미지 포맷을 지원하나요?',
					answer: 'PNG, JPG/JPEG, WebP 포맷을 지원합니다. 포맷 변환 도구를 사용하여 쉽게 포맷을 변환할 수 있습니다.'
				},
				{
					question: '이미지 압축은 어떻게 작동하나요?',
					answer: '이미지 압축기는 고급 브라우저 기반 압축 알고리즘을 사용하여 이미지 품질을 유지하면서 파일 크기를 줄입니다. 품질 슬라이더를 조절하여 크기와 품질 사이의 완벽한 균형을 찾을 수 있습니다.'
				},
				{
					question: '파일 크기 제한이 있나요?',
					answer: '최적의 성능을 위해 50MB 미만의 이미지를 권장합니다. 모든 처리가 브라우저에서 이루어지므로 기기에 따라 매우 큰 파일은 처리가 느려질 수 있습니다.'
				},
				{
					question: '여러 이미지를 한 번에 처리할 수 있나요?',
					answer: '네! 대부분의 도구는 일괄 처리를 지원합니다. 여러 이미지를 업로드하고 한 번에 처리할 수 있습니다.'
				},
				{
					question: '어떤 브라우저를 지원하나요?',
					answer: 'SDK.xyz는 Chrome, Firefox, Safari, Edge를 포함한 모든 최신 브라우저에서 작동합니다. 최상의 경험을 위해 브라우저의 최신 버전을 사용하는 것을 권장합니다.'
				},
				{
					question: '모바일에서 사용할 수 있나요?',
					answer: '네, SDK.xyz는 완전히 반응형이며 모바일 기기에서 작동합니다. 다만, 기기 제한으로 인해 모바일에서 매우 큰 이미지를 처리하면 느려질 수 있습니다.'
				},
				{
					question: '버그를 보고하거나 기능을 제안하려면 어떻게 하나요?',
					answer: '피드백을 환영합니다! 버그 보고 또는 기능 제안은 support@sdk.xyz로 보내주세요. 모든 제출물을 적극적으로 검토합니다.'
				}
			] as FAQ[]
		},
		ja: {
			title: 'よくある質問',
			subtitle: 'FAQ',
			description: 'SDK.xyz 画像ツールに関する一般的な質問への回答をご覧ください。',
			faqs: [
				{
					question: 'SDK.xyz とは何ですか？',
					answer: 'SDK.xyz は、ブラウザで直接動作する無料、高速、プライバシー重視の画像ツールのコレクションです。画像圧縮、リサイズ、フォーマット変換、切り抜きなど、多くのツールを提供しています。'
				},
				{
					question: 'SDK.xyz は無料ですか？',
					answer: 'はい、SDK.xyz のすべてのツールは完全に無料でご利用いただけます。隠れた料金、サブスクリプション、プレミアム機能はありません。最小限の広告でサービスをサポートしています。'
				},
				{
					question: '私の画像は安全ですか？',
					answer: 'もちろんです。すべての画像処理はブラウザで完全に行われます。画像はデバイスから離れることはなく、サーバーにアップロードされることもありません。プライバシーが優先です。'
				},
				{
					question: 'どの画像形式がサポートされていますか？',
					answer: 'PNG、JPG/JPEG、WebP形式をサポートしています。フォーマット変換ツールを使って、これらの形式間で簡単に変換できます。'
				},
				{
					question: '画像圧縮はどのように機能しますか？',
					answer: '画像圧縮ツールは、高度なブラウザベースの圧縮アルゴリズムを使用して、画像の品質を維持しながらファイルサイズを縮小します。品質スライダーを調整して、サイズと品質の完璧なバランスを見つけることができます。'
				},
				{
					question: 'ファイルサイズの制限はありますか？',
					answer: '最適なパフォーマンスのために、50MB未満の画像を推奨します。すべての処理がブラウザで行われるため、デバイスによっては非常に大きなファイルの処理が遅くなる場合があります。'
				},
				{
					question: '複数の画像を一度に処理できますか？',
					answer: 'はい！ほとんどのツールはバッチ処理をサポートしています。複数の画像をアップロードして、一度にすべて処理できます。'
				},
				{
					question: 'どのブラウザがサポートされていますか？',
					answer: 'SDK.xyz は Chrome、Firefox、Safari、Edge を含むすべての最新ブラウザで動作します。最高の体験のために、ブラウザの最新バージョンを使用することをお勧めします。'
				},
				{
					question: 'モバイルで使用できますか？',
					answer: 'はい、SDK.xyz は完全にレスポンシブで、モバイルデバイスで動作します。ただし、デバイスの制限により、モバイルで非常に大きな画像を処理すると遅くなる場合があります。'
				},
				{
					question: 'バグを報告したり、機能を提案するにはどうすればよいですか？',
					answer: 'フィードバックを歓迎します！バグ報告や機能提案は support@sdk.xyz までお送りください。すべての送信を積極的にレビューしています。'
				}
			] as FAQ[]
		},
		zh: {
			title: '常见问题',
			subtitle: 'FAQ',
			description: '查找有关 SDK.xyz 图片工具的常见问题解答。',
			faqs: [
				{
					question: '什么是 SDK.xyz？',
					answer: 'SDK.xyz 是一系列免费、快速、注重隐私的图片工具，直接在您的浏览器中运行。我们提供图片压缩、调整大小、格式转换、裁剪等众多工具。'
				},
				{
					question: 'SDK.xyz 是免费的吗？',
					answer: '是的，SDK.xyz 上的所有工具都是完全免费使用的。没有隐藏费用、订阅或高级功能。我们通过最少的广告来支持服务。'
				},
				{
					question: '我的图片安全吗？',
					answer: '绝对安全。所有图片处理完全在您的浏览器中进行。您的图片永远不会离开您的设备，也永远不会上传到我们的服务器。隐私是我们的首要任务。'
				},
				{
					question: '支持哪些图片格式？',
					answer: '我们支持 PNG、JPG/JPEG 和 WebP 格式。您可以使用格式转换工具轻松在这些格式之间转换。'
				},
				{
					question: '图片压缩是如何工作的？',
					answer: '图片压缩器使用先进的基于浏览器的压缩算法来减小文件大小，同时保持图片质量。您可以调整质量滑块，找到大小和质量之间的完美平衡。'
				},
				{
					question: '有文件大小限制吗？',
					answer: '为了获得最佳性能，我们建议图片大小在 50MB 以下。由于所有处理都在浏览器中进行，根据您的设备，处理非常大的文件可能会较慢。'
				},
				{
					question: '可以一次处理多张图片吗？',
					answer: '可以！我们大多数工具都支持批量处理。您可以上传多张图片并一次性处理它们。'
				},
				{
					question: '支持哪些浏览器？',
					answer: 'SDK.xyz 适用于所有现代浏览器，包括 Chrome、Firefox、Safari 和 Edge。我们建议使用最新版本的浏览器以获得最佳体验。'
				},
				{
					question: '可以在手机上使用吗？',
					answer: '可以，SDK.xyz 完全响应式，可在移动设备上使用。但是，由于设备限制，在移动设备上处理非常大的图片可能会较慢。'
				},
				{
					question: '如何报告错误或建议功能？',
					answer: '我们欢迎您的反馈！请将错误报告或功能建议发送至 support@sdk.xyz。我们积极审查所有提交内容。'
				}
			] as FAQ[]
		}
	};

	$: t = content[lang] || content.en;

	let openIndex: number | null = null;

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>{t.title} - SDK.xyz</title>
	<meta name="description" content={t.description} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-4xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-xl text-amber-500 mb-8">{t.subtitle}</p>

	<p class="text-lg text-gray-700 dark:text-dark-300 mb-12">
		{t.description}
	</p>

	<div class="space-y-4">
		{#each t.faqs as faq, index}
			<div class="border border-gray-200 dark:border-dark-700 rounded-lg overflow-hidden">
				<button
					class="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
					on:click={() => toggle(index)}
					aria-expanded={openIndex === index}
				>
					<span class="font-medium text-gray-900 dark:text-dark-100">{faq.question}</span>
					<svg
						class="w-5 h-5 text-amber-500 transform transition-transform duration-200 {openIndex === index ? 'rotate-180' : ''}"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</button>
				{#if openIndex === index}
					<div class="px-6 py-4 bg-white dark:bg-dark-900">
						<p class="text-gray-700 dark:text-dark-300">{faq.answer}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
