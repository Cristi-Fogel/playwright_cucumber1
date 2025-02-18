import { Page, Locator } from 'playwright';
import {test, expect} from '@playwright/test';

class FrontentHerokuLandingPage {
    private page: Page;
    private loginMessageOk: Locator;
    private logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginMessageOk = page.locator('h4.subheader');
        this.logoutButton = page.locator('a[href="/logout"]');
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }

    async getLoginMessage() {
        return (await this.loginMessageOk.textContent()) || '';
    }
}

export default FrontentHerokuLandingPage;
