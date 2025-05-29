import {test, expect } from '@playwright/test'

test.describe("Blog Page", () => {
test('Blog Post - Verify recent posts links and count the word', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/blog/');

    await expect(page).toHaveURL(/blog/);
    // Click the button
    const menuNavLinks = await page.locator('#recent-posts-3 li')
    const count = await menuNavLinks.count()

    //assert total count is 5
    await expect(count).toEqual(5)
    console.log("Total Posts - " + count)

    for (let i = 0; i < count; i++){
        const element = await menuNavLinks.nth(i).textContent();
        const charCount = await element.trim().replace(/\s+/g,'').length;

        console.log(element + charCount);
        await expect(charCount).toBeGreaterThan(10)
    }
})
});