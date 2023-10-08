// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
	page.on('console', msg => {
		console.log(msg.text())
	});

	test.setTimeout(70000);
	await page.goto('/');
	
	await expect(page).toHaveTitle(/Page Title/);
	const memory = await expect(page.getByTestId('memory')).toHaveText('Memory', {
		timeout: 60000,
	});
	console.log(memory);
});
