class HomePage {
    constructor(page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.homeLink = page.locator('//*[@id="menu-item-489"]')
        this.headingText = page.locator('text=Think different. Make different.');
        this.menuNavLinks = page.locator('#zak-primary-menu li[id*=menu]');
        this.cartLink = page.locator("//a[@class='cart-page-link' and contains(@href, '/cart/')]");
        this.homePageTitle = "Practice E-Commerce Site – SDET Unicorns"
    }
}

export default HomePage;