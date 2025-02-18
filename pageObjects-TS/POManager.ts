import FrontendHerokuLoginPage from './frontendHerokuLoginPage';
import FrontentHerokuLandingPage from './frontendHerokuLandingPage';
import { Page } from 'playwright';

class POManager {
    private page: Page;
    private frontendHerokuLoginPage: FrontendHerokuLoginPage;
    private frontentHerokuLandingPage: FrontentHerokuLandingPage;

    constructor(page: Page) {
        this.page = page;
        this.frontendHerokuLoginPage = new FrontendHerokuLoginPage(page);
        this.frontentHerokuLandingPage = new FrontentHerokuLandingPage(page);
    }

    getFrontendHerokuLoginPage() {
        return this.frontendHerokuLoginPage;
    }

    getFrontentHerokuLandingPage() {
        return this.frontentHerokuLandingPage;
    }
}

export default POManager;
