"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
const POManager_1 = __importDefault(require("../../pageObjects-TS/POManager"));
const urlBuilderTS_1 = require("../../utils/urlBuilderTS");
const validationStrings_1 = require("../../validationStrings");
let browser;
let context;
let page;
let poManager;
(0, cucumber_1.Given)('I open the login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        browser = yield playwright.chromium.launch({ headless: false });
        context = yield browser.newContext();
        page = yield context.newPage();
        poManager = new POManager_1.default(page);
        this.loginPage = poManager.getFrontendHerokuLoginPage();
        this.landingPage = poManager.getFrontentHerokuLandingPage();
        yield this.loginPage.navigate((0, urlBuilderTS_1.getURL)("herokuURL", "loginPageHeroku"));
        yield (0, test_1.expect)(page).toHaveTitle("The Internet");
    });
});
(0, cucumber_1.When)('I enter username {string} and password {string}', function (username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.loginPage.login(username, password);
    });
});
(0, cucumber_1.When)('I click on the login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.loginPage.loginButton.click();
    });
});
(0, cucumber_1.Then)('I should see a successful login message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const loginMessage = yield this.landingPage.getLoginMessage();
        yield (0, test_1.expect)(loginMessage).toBe(validationStrings_1.validationStrings.login.successMessage);
    });
});
(0, cucumber_1.Then)('I should see an error message', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const errorMessage = yield this.loginPage.getErrorMessage();
        yield (0, test_1.expect)(errorMessage).toContain(validationStrings_1.validationStrings.login.errorMessage);
    });
});
(0, cucumber_1.After)(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield browser.close();
    });
});
