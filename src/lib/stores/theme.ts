import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { safeGetItem, safeSetItem } from '$lib/utils/storage';

export type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
	if (!browser) return 'dark';

	const saved = safeGetItem('theme') as Theme | null;
	if (saved && (saved === 'dark' || saved === 'light')) {
		return saved;
	}

	// 시스템 설정 확인
	if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light';
	}

	return 'dark';
}

function createThemeStore() {
	const { subscribe, set } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		set: (theme: Theme) => {
			if (browser) {
				safeSetItem('theme', theme);
				// HTML 클래스 업데이트
				document.documentElement.classList.remove('dark', 'light');
				document.documentElement.classList.add(theme);
			}
			set(theme);
		},
		toggle: () => {
			let current: Theme = 'dark';
			subscribe((t) => (current = t))();
			const next = current === 'dark' ? 'light' : 'dark';
			if (browser) {
				safeSetItem('theme', next);
				document.documentElement.classList.remove('dark', 'light');
				document.documentElement.classList.add(next);
			}
			set(next);
		},
		init: () => {
			if (browser) {
				const theme = getInitialTheme();
				document.documentElement.classList.add(theme);
				set(theme);
			}
		}
	};
}

export const theme = createThemeStore();
