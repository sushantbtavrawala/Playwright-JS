class ContactPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('//*[@id="evf-277-field_ys0GeZISRs-1"]');
        this.emailId = page.locator('//*[@id="evf-277-field_LbH5NxasXM-2"]');
        this.contactNum = page.locator('//*[@id="evf-277-field_66FR384cge-3"]');
        this.submitBtn = page.locator('//*[@id="evf-submit-277"]');
        this.confirmationMessage = page.locator('text="Thanks for contacting us! We will be in touch with you shortly"')
    }
}

export default ContactPage;