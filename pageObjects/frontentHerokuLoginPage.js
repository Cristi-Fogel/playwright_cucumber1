const {test, expect, Locator, Page} = require('@playwright/test');


 class FrontendHerokuLoginPage{ 
    constructor(page){
        this.page = page;
        this.usernameInput  = page.locator('#username');
        this.passwordInput  = page.locator('#password');
        this.loginButton    = page.locator('button.radius:has-text("Login")');
        this.errorMessage   = page.locator('flash-messages');
        this.logoutMessage  = page.locator('div.flash.success');
        this.loginMessageOk = page.locator('h4.subheader');
    }

    async navigate(url) {
        await this.page.goto(url);
    }
    
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async getErrorMessage() {
        return (await this.errorMessage.textContent()) || '';
    }
    
    async getLogoutSuccessMessage(){
        return  (await this.logoutMessage.textContent()) || '';
    }
}

// export default FrontendHerokuLoginPage;
module.exports = FrontendHerokuLoginPage;