"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const frontendHerokuLoginPage_1 = __importDefault(require("./frontendHerokuLoginPage"));
const frontendHerokuLandingPage_1 = __importDefault(require("./frontendHerokuLandingPage"));
class POManager {
    constructor(page) {
        this.page = page;
        this.frontendHerokuLoginPage = new frontendHerokuLoginPage_1.default(page);
        this.frontentHerokuLandingPage = new frontendHerokuLandingPage_1.default(page);
    }
    getFrontendHerokuLoginPage() {
        return this.frontendHerokuLoginPage;
    }
    getFrontentHerokuLandingPage() {
        return this.frontentHerokuLandingPage;
    }
}
exports.default = POManager;
