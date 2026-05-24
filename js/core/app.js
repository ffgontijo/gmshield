/**
 * js/core/app.js — GM Shield Application Entry Point
 *
 * Initializes the application on DOMContentLoaded.
 * Orchestrates module loading and boot sequence.
 */

import { loadSystemTheme } from './theme-loader.js';
import { initNavigation }  from './navigation.js';

/**
 * Reads the active system slug from a data attribute on <body>.
 * Pages that belong to a system must set: <body data-system="star-wars-weg-reup">
 * The home page (index.html) does not set this attribute.
 *
 * @returns {string|null} The system slug, or null if on the home page.
 */
function getActiveSystem() {
  return document.body.dataset.system ?? null;
}

/**
 * Boot sequence. Called once on DOMContentLoaded.
 */
async function init() {
  const systemSlug = getActiveSystem();

  // Load system-specific CSS theme if we're inside a system page.
  if (systemSlug) {
    await loadSystemTheme(systemSlug);
  }

  // Initialize global navigation behavior.
  initNavigation(systemSlug);
}

document.addEventListener('DOMContentLoaded', init);
