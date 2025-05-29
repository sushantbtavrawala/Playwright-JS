import {test, expect } from '@playwright/test'

test.describe("Shop Page", () => {
test('Shop Page - Add items to the cart', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/shop/');

    await expect(page).toHaveURL(/shop/);
    
})
});