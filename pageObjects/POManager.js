const FrontendHerokuLoginPage = require('./frontentHerokuLoginPage');
const FrontentHerokuLandingPage = require('./frontentHerokuLandingPage');

class POManager {
    constructor(page) {
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

module.exports = POManager;
