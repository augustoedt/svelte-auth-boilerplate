import { test } from '@playwright/test';
import { expect } from 'vitest';

test('does not register if there are validation errors', async ({
	page
}) => {
	await page.goto('http://localhost:5173/register');

	await page.fill('#email', 'test@test.com');
	await page.fill('#name', 'test');
	await page.fill('#password', 'testing');
	await page.fill('#confirmPassword', 'testing2');
	await page.click('button');

	// await page.waitForSelector(".error-message");
});
