import { test, expect } from '@playwright/test'
import ShopPage from '../pages/shopPage';

test.describe("Shop Page", () => {
let shopPage; /** @type {HomePage} */

    test.beforeEach(async ({ page }) => {
        shopPage = new ShopPage(page);
        await shopPage.navigate();
        await expect(page).toHaveURL(/shop/);
    });

test('Shop Page - Search the item on the page', async ({ page }) => {
    await shopPage.searchItemName('watch')
    await shopPage.searchBtn.click();
})
    
test('Shop Page - capture the search items name and value', async ({ page }) => {
    //await shopPage.searchItemName('watch')
    //await shopPage.searchBtn.click();

    const productCards = page.locator('li.product');
    const count = await productCards.count();
    console.log(`Total products found: ${count}`);

  for (let i = 0; i < count; i++) {
    const name = await productCards.nth(i).locator('h2.woocommerce-loop-product__title').innerText();
    const price = await productCards.nth(i).locator('span.price span.woocommerce-Price-amount').first().innerText();
    console.log(`Product ${i + 1}: ${name} - ${price}`);
  }

  expect(count).toBeGreaterThan(0);
})
    
    
});