import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		reporters: ['verbose'],
		environment: 'jsdom',
		setupFiles: ['vitest/cleanupDom.ts', 'vitest/registerMatchers.ts'],
		restoreMocks: true
	}
});
