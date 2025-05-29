import { test, expect } from '@playwright/test'
import HomePage from '../pages/home.page';

test.describe("Home Page", () => {
    let homePage; /** @type {HomePage} */

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto('https://practice.sdetunicorns.com/');
      });

test('Verify Home page has title', async ({ page }) => {

    await page.goto('https://practice.sdetunicorns.com/');
    const pageTitle = page.title();
    console.log(pageTitle);
// Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(homePage.homePageTitle);
    await page.close();
});

test('Verify About page has title', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/about/');
    const pageTitle = page.title();
    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
})
    
test('Click Get started with CSS selector', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');
    // Click the button
    //await page.locator('#get-started').click();
    await homePage.getStartedBtn.click()
    // Verify URL is click
    await expect(page).toHaveURL(/.#get-started/);
    
})

test('Text Selector - Find the heading text on page', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/');
    // Click the button
    //const headingText = await page.locator('text=Think different. Make different.')
    const headingText = await homePage.headingText
    // Verify heading Text is visible
    await expect(headingText).toBeVisible();
})

test('Work with multiple elements on the page - Verify menu bar links', async ({ page }) => {
    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
    ];
    
    await page.goto('https://practice.sdetunicorns.com/');
    // Click the button
    //const menuNavLinks = await page.locator('#zak-primary-menu li[id*=menu]')
    const menuNavLinks = await homePage.menuNavLinks
    const menuNavLinksSpecific = await page.locator('#zak-primary-menu li[id*=menu]').nth(3)

    //Print out all the links
    for (const el of await menuNavLinks.elementHandles()) {
        console.log(await el.textContent());
    }

    // Verify Navigation link Text is visible
    expect(await menuNavLinks.allTextContents()).toEqual(expectedLinks);
   // expect(await menuNavLinksSpecific.allTextContents()).toEqual("Blog");
})
    
    
});