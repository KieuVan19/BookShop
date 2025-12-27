export class MyAccountPage {
    constructor(page) {
        this.page = page;
        this.userNameLocator = page.locator("//p/strong");
    }
    
    async getUserName() {
        return await this.userNameLocator.textContent();
    }
}