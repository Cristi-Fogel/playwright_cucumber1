const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const playwright = require('playwright');
const POManager = require('../../pageObjects/POManager');
const { getURL } = require('../../utils/urlBuilderJS');
const validationStrings = require('../../validationStrings');

let browser, context, page, poManager;

Given('I open the login page', async function () {
    browser = await playwright.chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    poManager = new POManager(page);

    this.loginPage = poManager.getFrontendHerokuLoginPage();
    this.landingPage = poManager.getFrontentHerokuLandingPage();

    await this.loginPage.navigate(getURL("herokuURL", "loginPageHeroku"));
    await expect(page).toHaveTitle("The Internet");
});

When('I enter username {string} and password {string}', async function (username, password) {
    await this.loginPage.login(username, password);
});

Then('I should see a successful login message', async function () {
    const loginMessage = await this.landingPage.getLoginMessage();
    await expect(loginMessage).toBe(validationStrings.login.successMessage);
});

Then('I should see an error message', async function () {
    const errorMessage = await this.loginPage.getErrorMessage();
    await expect(errorMessage).toContain(validationStrings.login.errorMessage);
});
