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
Object.defineProperty(exports, "__esModule", { value: true });
class FrontendHerokuLoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button.radius:has-text("Login")');
        this.errorMessage = page.locator('#flash-messages');
        this.logoutMessage = page.locator('div.flash.success');
        this.loginMessageOk = page.locator('h4.subheader');
    }
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usernameInput.fill(username);
            yield this.passwordInput.fill(password);
            yield this.loginButton.click();
        });
    }
    getErrorMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.errorMessage.textContent()) || '';
        });
    }
    getLogoutSuccessMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.logoutMessage.textContent()) || '';
        });
    }
}
exports.default = FrontendHerokuLoginPage;
