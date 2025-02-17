import { Given, When, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import playwright, { Browser, Page, BrowserContext } from 'playwright';
import POManager from '../../pageObjects/POManager';
import { getURL } from '../../utils/urlBuilderJS';
import { validationStrings } from '../../validationStrings';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let poManager: POManager;

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

When('I enter username {string} and password {string}', async function (username: string, password: string) {
    await this.loginPage.login(username, password);
});

When('I click on the login button', async function () {
    await this.loginPage.loginButton.click();
});

Then('I should see a successful login message', async function () {
    const loginMessage = await this.landingPage.getLoginMessage();
    await expect(loginMessage).toBe(validationStrings.login.successMessage);
});

Then('I should see an error message', async function () {
    const errorMessage = await this.loginPage.getErrorMessage();
    await expect(errorMessage).toContain(validationStrings.login.errorMessage);
});

After(async function () {
    await browser.close();
});
