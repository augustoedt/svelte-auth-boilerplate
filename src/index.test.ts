import Hello from '$lib/components/Hello.svelte';
import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});

	it('renders hello into the document', () => {
		document.body.innerHTML =
			'<h1>Hello, world!</h1>';
		expect(document.body).toHaveTextContent(
			'Hello, world!'
		);
	});

	it('renders hello into the document', () => {
		render(Hello, { name: 'world' });
		expect(document.body).toHaveTextContent(
			'Hello, world!'
		);
	});

	it('renders hello, svelte', () => {
		render(Hello, { name: 'Svelte' });
		expect(document.body).toHaveTextContent(
			'Hello, Svelte!'
		);
	});
});
