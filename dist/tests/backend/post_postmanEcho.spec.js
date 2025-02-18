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
(0, test_1.test)("POST request with auth header and body example validation - 200", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    // Define the API endpoint
    const apiEndpoint = (0, urlBuilder_1.getURL)("postmanEchoURL", "postmanEchoPost");
    // console.log(apiEndpoint)
    // Define the request payload
    const payload = {
        title: "foo",
        body: "bar",
        userId: 1,
    };
    // Define the headers
    const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer YOUR_ACCESS_TOKEN_HERE`, // Replace with your actual token
    };
    // Make the POST request with headers
    const response = yield request.post(apiEndpoint, {
        headers,
        data: payload,
    });
    // Validate the status code
    (0, test_1.expect)(response.status()).toBe(200);
    // Optionally, validate the response body
    const responseBody = yield response.json();
    (0, test_1.expect)(responseBody).toHaveProperty("data");
    //data nested under a data{} array, so accessing it directly for validation from the responseBody
    // console.log(`Form Data: ${JSON.stringify(responseBody)}`);
    (0, test_1.expect)(responseBody.data).toHaveProperty("title", "foo");
    (0, test_1.expect)(responseBody.data).toHaveProperty("body", "bar");
    (0, test_1.expect)(responseBody.data).toHaveProperty("userId", 1);
    // Log the response for debugging
    // console.log(`Response received: ${JSON.stringify(responseBody, null, 2)}`);
}));
