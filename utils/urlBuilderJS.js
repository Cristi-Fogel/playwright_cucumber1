const { baseURLs, paths } = require('./config.js');

/**
 * Constructs the full URL for a given base and path.
 * @param site - The base URL key.
 * @param path - The path key.
 * @returns The complete URL.
 */

function getURL(site, path) {
  // Validate that the site and path keys are valid
  if (!baseURLs[site]) {
    throw new Error(`Site URL not found: ${site}`);
  }
  if (!paths[path]) {
    throw new Error(`Path not found: ${path}`);
  }
  return `${baseURLs[site]}${paths[path]}`;
}

module.exports = { getURL };