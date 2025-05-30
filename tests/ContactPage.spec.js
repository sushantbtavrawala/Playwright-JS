import { test, expect } from '@playwright/test'
import ContactPage from '../pages/contactPage';

test.describe("Contact Page", () => {
    let contactPage; /** @type {ContactPage} */
    
    test.beforeEach(async ({ page }) => {
        contactPage = new ContactPage(page);
    });


test('Contact - Add information on contact page', async ({ page }) => {
    await page.goto('https://practice.sdetunicorns.com/contact/');
    await expect(page).toHaveURL(/contact/);
    
    await contactPage.firstName.fill('myFirstName');
    await contactPage.emailId.fill('abc@yopmail.com');
    await contactPage.contactNum.fill('89878787877676');
    await contactPage.submitBtn.click();

    const successMessage = await contactPage.confirmationMessage
    await expect(successMessage).toBeVisible();
    })
});