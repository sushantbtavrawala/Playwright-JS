import {test, expect } from '@playwright/test'

test.describe("Contact Page", () => {
test('Contact - Add information on contact page', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/contact/');
    await expect(page).toHaveURL(/contact/);
    
    await page.fill('//*[@id="evf-277-field_ys0GeZISRs-1"]', 'myFirstName');
    await page.fill('//*[@id="evf-277-field_LbH5NxasXM-2"]', 'abc@yopmail.com');
    await page.fill('//*[@id="evf-277-field_66FR384cge-3"]', '89878787877676');
    await page.locator('//*[@id="evf-submit-277"]').click();

    const successMessage = await page.locator('text="Thanks for contacting us! We will be in touch with you shortly"')
    await expect(successMessage).toBeVisible();
    })
});