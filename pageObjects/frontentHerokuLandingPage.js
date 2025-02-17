const {test, expect, Locator} = require('@playwright/test');

class FrontentHerokuLandingPage {
    constructor(page) {
        this.page = page;
        this.loginMessageOk = page.locator('h4.subheader');
        this.logoutButton = page.locator('a[href="/logout"]');
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async getLoginMessage() {
        return (await this.loginMessageOk.textContent()) || '';
    }
}

module.exports = FrontentHerokuLandingPage;