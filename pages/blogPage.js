export default class BlogPage {
    constructor(page) {
        this.page = page;
        this.url = 'https://practice.sdetunicorns.com/blog/';
        this.recentPosts = page.locator('#recent-posts-3 li');
    }

    async navigate() {
        await this.page.goto(this.url);
      }
}