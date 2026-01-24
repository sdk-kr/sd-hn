// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

// Cloudflare KV 타입
interface KVNamespace {
	get(key: string, options?: { type?: 'text' }): Promise<string | null>;
	get(key: string, options: { type: 'json' }): Promise<unknown | null>;
	get(key: string, options: { type: 'arrayBuffer' }): Promise<ArrayBuffer | null>;
	get(key: string, options: { type: 'stream' }): Promise<ReadableStream | null>;
	put(
		key: string,
		value: string | ArrayBuffer | ReadableStream,
		options?: { expiration?: number; expirationTtl?: number; metadata?: unknown }
	): Promise<void>;
	delete(key: string): Promise<void>;
	list(options?: { prefix?: string; limit?: number; cursor?: string }): Promise<{
		keys: { name: string; expiration?: number; metadata?: unknown }[];
		list_complete: boolean;
		cursor?: string;
	}>;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			env?: {
				NEWS_CACHE?: KVNamespace;
			};
		}
	}
}

export {};
