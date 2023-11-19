import { expect, test } from '@playwright/test';

test('index page has expected to have register login and home on navbar', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByLabel('layout-navbar')).toBeVisible();
	await expect(page.getByLabel('layout-navbar').getByText('Home')).toBeVisible();
	await expect(page.getByLabel('layout-navbar').getByText('Login')).toBeVisible();
	await expect(page.getByLabel('layout-navbar').getByText('Register')).toBeVisible();
});
