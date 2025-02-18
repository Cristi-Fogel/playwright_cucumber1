"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getURL = getURL;
const config_1 = require("../config");
/**
 * Constructs the full URL for a given base and path.
 * @param site - The base URL key.
 * @param path - The path key.
 * @returns The complete URL.
 */
function getURL(site, path) {
    // Validate that the site and path keys are valid
    if (!config_1.baseURLs[site]) {
        throw new Error(`Site URL not found: ${site}`);
    }
    if (!config_1.paths[path]) {
        throw new Error(`Path not found: ${path}`);
    }
    return `${config_1.baseURLs[site]}${config_1.paths[path]}`;
}
