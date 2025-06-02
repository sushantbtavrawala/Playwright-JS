export default class ShopPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://practice.sdetunicorns.com/shop/';
        this.searchInput = page.locator('#woocommerce-product-search-field-0');
        this.searchBtn = page.locator('button[type="submit"]')
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async searchItemName(itemName) {
        await this.searchInput.fill(itemName);
    }

    async searchBtn() {
        await this.searchBtn();
    }
}