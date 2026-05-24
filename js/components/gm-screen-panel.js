/**
 * js/components/gm-screen-panel.js — GM Shield Panel Component
 *
 * Creates and manages collapsible panels for the Digital GM Screen.
 * Panel state (open/collapsed) is persisted in localStorage so the
 * GM's preferred layout is preserved between sessions.
 *
 * Storage key format: "gmshield.panel.{systemSlug}.{panelId}"
 */

import { renderTable } from './table-renderer.js';

const STORAGE_PREFIX = 'gmshield.panel';

/**
 * Creates a full panel element from a panel data definition.
 *
 * @param {Object} panelData   - Panel definition from JSON (id, title, icon, tables, default_open).
 * @param {string} systemSlug  - Active system slug, used for localStorage keys.
 * @returns {HTMLElement}      - The .panel DOM element, ready to be inserted into the GM Screen grid.
 */
export function createPanel(panelData, systemSlug) {
  const storageKey  = `${STORAGE_PREFIX}.${systemSlug}.${panelData.id}`;
  const savedState  = localStorage.getItem(storageKey);

  // Determine initial open/collapsed state:
  // 1. Use saved preference if available
  // 2. Fall back to panel definition's default_open field
  // 3. Default to true (open)
  const isOpen = savedState !== null
    ? savedState === 'open'
    : (panelData.default_open ?? true);

  // Build panel element
  const panel = document.createElement('div');
  panel.className = `panel${isOpen ? '' : ' panel--collapsed'}`;
  panel.dataset.panelId = panelData.id;

  // --- Header ---
  const header = document.createElement('div');
  header.className = 'panel__header';
  header.setAttribute('role', 'button');
  header.setAttribute('aria-expanded', String(isOpen));
  header.setAttribute('aria-controls', `panel-body-${panelData.id}`);
  header.tabIndex = 0;

  const titleEl = document.createElement('span');
  titleEl.className = 'panel__title';
  if (panelData.icon) {
    const iconEl = document.createElement('span');
    iconEl.className = 'panel__icon';
    iconEl.setAttribute('aria-hidden', 'true');
    iconEl.textContent = panelData.icon;
    titleEl.appendChild(iconEl);
  }
  titleEl.appendChild(document.createTextNode(panelData.title));

  const toggleEl = document.createElement('span');
  toggleEl.className = 'panel__toggle';
  toggleEl.setAttribute('aria-hidden', 'true');
  toggleEl.textContent = '▾';

  header.appendChild(titleEl);
  header.appendChild(toggleEl);

  // --- Body ---
  const body = document.createElement('div');
  body.className = 'panel__body';
  body.id = `panel-body-${panelData.id}`;

  // Render all tables into the panel body
  panelData.tables.forEach(tableData => {
    const tableEl = renderTable(tableData, { compact: true, showTitle: false });
    body.appendChild(tableEl);
  });

  panel.appendChild(header);
  panel.appendChild(body);

  // --- Toggle behavior ---
  function toggle() {
    const collapsed = panel.classList.toggle('panel--collapsed');
    const open = !collapsed;
    header.setAttribute('aria-expanded', String(open));
    localStorage.setItem(storageKey, open ? 'open' : 'collapsed');
  }

  header.addEventListener('click', toggle);
  header.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });

  return panel;
}

/**
 * Initializes all panels on the GM Screen page.
 * Reads panel definitions from a JSON data file and renders them into the grid.
 *
 * @param {Array}       panelDataArray - Array of panel definitions from JSON.
 * @param {HTMLElement} gridContainer  - The .gm-screen__panels grid element.
 * @param {string}      systemSlug     - Active system slug.
 */
export function initGmScreen(panelDataArray, gridContainer, systemSlug) {
  gridContainer.innerHTML = '';

  panelDataArray.forEach(panelData => {
    const panelEl = createPanel(panelData, systemSlug);
    gridContainer.appendChild(panelEl);
  });
}
