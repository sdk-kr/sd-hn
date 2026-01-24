/**
 * localStorage 안전 래퍼
 * 개인정보 보호 모드나 localStorage 접근 불가 시에도 안전하게 동작
 */

import { browser } from '$app/environment';

/**
 * localStorage에서 안전하게 값을 가져옴
 */
export function safeGetItem(key: string): string | null {
	if (!browser) return null;

	try {
		return localStorage.getItem(key);
	} catch (e) {
		console.warn(`Failed to get localStorage item "${key}":`, e);
		return null;
	}
}

/**
 * localStorage에 안전하게 값을 저장
 */
export function safeSetItem(key: string, value: string): boolean {
	if (!browser) return false;

	try {
		localStorage.setItem(key, value);
		return true;
	} catch (e) {
		console.warn(`Failed to set localStorage item "${key}":`, e);
		return false;
	}
}

/**
 * localStorage에서 안전하게 값을 삭제
 */
export function safeRemoveItem(key: string): boolean {
	if (!browser) return false;

	try {
		localStorage.removeItem(key);
		return true;
	} catch (e) {
		console.warn(`Failed to remove localStorage item "${key}":`, e);
		return false;
	}
}

/**
 * Date 직렬화 헬퍼: Date 객체를 ISO 문자열로 변환
 */
export function serializeDate(date: Date | undefined): string | undefined {
	return date?.toISOString();
}

/**
 * Date 역직렬화 헬퍼: ISO 문자열을 Date 객체로 변환
 */
export function deserializeDate(dateStr: string | undefined): Date | undefined {
	if (!dateStr) return undefined;
	const date = new Date(dateStr);
	return isNaN(date.getTime()) ? undefined : date;
}
