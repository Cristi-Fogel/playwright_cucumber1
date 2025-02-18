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
const test_1 = require("@playwright/test");
const urlBuilder_1 = require("../../utils/urlBuilder");
(0, test_1.test)("Response validation on heroku - 200", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    // Define the API endpoint and parameters
    const apiEndpoint = (0, urlBuilder_1.getURL)("siteBackendURL", "responseOK");
    // Make the API request
    const response = yield request.get(apiEndpoint);
    // Validate the status code
    (0, test_1.expect)(response.status()).toBe(200);
    // // Optionally, log the response for debugging
    // console.log(`Response received: ${await response.text()}`);
}));
(0, test_1.test)("Response validation on heroku - 301", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const apiEndpoint = (0, urlBuilder_1.getURL)("siteBackendURL", "responseMoved");
    const response = yield request.get(apiEndpoint);
    (0, test_1.expect)(response.status()).toBe(301);
}));
(0, test_1.test)("Response validation on heroku - 400", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const apiEndpoint = (0, urlBuilder_1.getURL)("siteBackendURL", "responseNotFound");
    const response = yield request.get(apiEndpoint);
    (0, test_1.expect)(response.status()).toBe(400);
}));
(0, test_1.test)("Response validation on heroku - 500", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const apiEndpoint = (0, urlBuilder_1.getURL)("siteBackendURL", "responseServerError");
    const response = yield request.get(apiEndpoint);
    (0, test_1.expect)(response.status()).toBe(500);
}));
