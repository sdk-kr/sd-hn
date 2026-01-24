<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content = {
		en: {
			title: 'About SDK.xyz',
			subtitle: 'Free Image Tools',
			description: 'SDK.xyz provides free, fast, and privacy-focused image tools that work directly in your browser. No uploads, no servers - just instant image processing.',
			features: {
				title: 'Our Tools',
				items: [
					'Image Compressor - Reduce file size while maintaining quality',
					'Image Resizer - Resize images to any dimensions',
					'Format Converter - Convert between PNG, JPG, and WebP',
					'Image Cropper - Crop images to exact dimensions',
					'Rotate & Flip - Rotate or flip images easily',
					'Add Watermark - Add text or image watermarks',
					'Image to Base64 - Convert images to Base64 strings',
					'Images to PDF - Combine multiple images into PDF'
				]
			},
			privacy: {
				title: 'Privacy First',
				text: 'All image processing happens entirely in your browser. Your images never leave your device and are never uploaded to any server. We take your privacy seriously.'
			},
			contact: {
				title: 'Contact',
				text: 'For questions or feedback, please contact us at hello@sdk.xyz'
			}
		},
		ko: {
			title: 'SDK.xyz 소개',
			subtitle: '무료 이미지 도구',
			description: 'SDK.xyz는 브라우저에서 바로 작동하는 무료, 빠른, 개인정보 보호 중심의 이미지 도구를 제공합니다. 업로드 없이, 서버 없이 - 즉시 이미지 처리.',
			features: {
				title: '도구 소개',
				items: [
					'이미지 압축 - 품질을 유지하면서 파일 크기 줄이기',
					'이미지 크기 조절 - 원하는 크기로 이미지 조절',
					'포맷 변환 - PNG, JPG, WebP 간 변환',
					'이미지 자르기 - 원하는 영역으로 이미지 자르기',
					'회전 및 뒤집기 - 이미지 회전 및 뒤집기',
					'워터마크 추가 - 텍스트 또는 이미지 워터마크 추가',
					'이미지 → Base64 - 이미지를 Base64로 변환',
					'이미지 → PDF - 여러 이미지를 PDF로 합치기'
				]
			},
			privacy: {
				title: '개인정보 보호 우선',
				text: '모든 이미지 처리는 브라우저에서 완전히 이루어집니다. 이미지가 기기를 떠나거나 서버로 업로드되지 않습니다. 개인정보 보호를 중요하게 생각합니다.'
			},
			contact: {
				title: '연락처',
				text: '문의사항이나 피드백은 hello@sdk.xyz로 연락해 주세요.'
			}
		},
		ja: {
			title: 'SDK.xyz について',
			subtitle: '無料画像ツール',
			description: 'SDK.xyzは、ブラウザで直接動作する無料、高速、プライバシー重視の画像ツールを提供します。アップロード不要、サーバー不要 - 即座に画像処理。',
			features: {
				title: 'ツール紹介',
				items: [
					'画像圧縮 - 品質を維持しながらファイルサイズを縮小',
					'画像リサイズ - 画像を任意のサイズに変更',
					'フォーマット変換 - PNG、JPG、WebP間で変換',
					'画像切り抜き - 画像を正確なサイズに切り抜き',
					'回転と反転 - 画像を簡単に回転・反転',
					'透かし追加 - テキストや画像の透かしを追加',
					'画像→Base64 - 画像をBase64に変換',
					'画像→PDF - 複数の画像をPDFに結合'
				]
			},
			privacy: {
				title: 'プライバシー優先',
				text: 'すべての画像処理はブラウザで完全に行われます。画像はデバイスから離れることなく、サーバーにアップロードされることもありません。プライバシーを重視しています。'
			},
			contact: {
				title: 'お問い合わせ',
				text: 'ご質問やフィードバックは hello@sdk.xyz までご連絡ください。'
			}
		},
		zh: {
			title: '关于 SDK.xyz',
			subtitle: '免费图片工具',
			description: 'SDK.xyz 提供免费、快速、注重隐私的图片工具，直接在您的浏览器中运行。无需上传，无需服务器 - 即时图片处理。',
			features: {
				title: '工具介绍',
				items: [
					'图片压缩 - 在保持质量的同时减小文件大小',
					'图片调整大小 - 将图片调整到任意尺寸',
					'格式转换 - PNG、JPG、WebP 格式互转',
					'图片裁剪 - 裁剪图片到精确尺寸',
					'旋转和翻转 - 轻松旋转或翻转图片',
					'添加水印 - 添加文字或图片水印',
					'图片转 Base64 - 将图片转换为 Base64',
					'图片转 PDF - 将多张图片合并为 PDF'
				]
			},
			privacy: {
				title: '隐私优先',
				text: '所有图片处理完全在您的浏览器中进行。图片永远不会离开您的设备，也永远不会上传到任何服务器。我们非常重视您的隐私。'
			},
			contact: {
				title: '联系我们',
				text: '如有问题或反馈，请联系 hello@sdk.xyz'
			}
		}
	};

	$: t = content[lang] || content.en;
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

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.features.title}</h2>
		<ul class="space-y-3">
			{#each t.features.items as item}
				<li class="flex items-start gap-3 text-gray-700 dark:text-dark-300">
					<span class="text-amber-500 mt-1">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					</span>
					<span>{item}</span>
				</li>
			{/each}
		</ul>
	</section>

	<section class="mb-10">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.privacy.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.privacy.text}</p>
	</section>

	<section>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-dark-100 mb-4">{t.contact.title}</h2>
		<p class="text-gray-700 dark:text-dark-300">{t.contact.text}</p>
	</section>
</div>
