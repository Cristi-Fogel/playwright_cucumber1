const { baseURLs, paths } = require("../config");

/**
 * Constructs the full URL for a given base and path.
 * @param site - The base URL key.
 * @param path - The path key.
 * @returns The complete URL.
 */

function getURL(site, path) {
  return `${baseURLs[site]}${paths[path]}`;
}

module.exports = { getURL };