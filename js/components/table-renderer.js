/**
 * js/components/table-renderer.js — GM Shield Table Renderer
 *
 * Reads table definitions from JSON data and renders them as HTML.
 * This is the core rendering engine for all reference tables in both
 * the Quick Start and the GM Screen.
 *
 * Data format expected (from tables.json / combat.json):
 * {
 *   id:      "difficulty-numbers",
 *   title:   "Níveis de Dificuldade",
 *   columns: ["Nível", "Número"],
 *   rows:    [["Muito Fácil", "6"], ["Fácil", "11"], ...],
 *   note:    "Optional note shown below the table." (optional)
 * }
 */

/**
 * Renders a single table definition as a DOM element.
 *
 * @param {Object} tableData - Table definition object from JSON.
 * @param {Object} [options]
 * @param {boolean} [options.compact=false] - Use compact row padding (for GM Screen).
 * @param {boolean} [options.showTitle=true] - Whether to show the table title bar.
 * @returns {HTMLElement} A fully-formed .ref-table wrapper element.
 */
export function renderTable(tableData, options = {}) {
  const { compact = false, showTitle = true } = options;

  const wrapper = document.createElement('div');
  wrapper.className = `ref-table${compact ? ' ref-table--compact' : ''}`;
  wrapper.dataset.tableId = tableData.id;

  // Title bar (optional)
  if (showTitle && tableData.title) {
    const title = document.createElement('span');
    title.className = 'ref-table__title';
    title.textContent = tableData.title;
    wrapper.appendChild(title);
  }

  // Build the <table>
  const table = document.createElement('table');
  table.setAttribute('role', 'table');
  table.setAttribute('aria-label', tableData.title ?? 'Reference table');

  // Header row
  if (tableData.columns?.length) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    tableData.columns.forEach(col => {
      const th = document.createElement('th');
      th.setAttribute('scope', 'col');
      th.textContent = col;
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);
  }

  // Body rows
  const tbody = document.createElement('tbody');
  tableData.rows.forEach(rowData => {
    const tr = document.createElement('tr');
    rowData.forEach(cellData => {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  wrapper.appendChild(table);

  // Optional note below the table
  if (tableData.note) {
    const note = document.createElement('p');
    note.className = 'ref-table__note';
    note.textContent = tableData.note;
    wrapper.appendChild(note);
  }

  return wrapper;
}

/**
 * Renders all tables from a panels array into a target container element.
 * Used to populate a GM Screen panel or a Quick Start section with multiple tables.
 *
 * @param {Array}  panels    - Array of panel objects from JSON.
 * @param {HTMLElement} container - DOM element to render into.
 * @param {Object} [options] - Passed through to renderTable().
 */
export function renderPanels(panels, container, options = {}) {
  container.innerHTML = '';

  panels.forEach(panel => {
    panel.tables.forEach(tableData => {
      const tableEl = renderTable(tableData, options);
      container.appendChild(tableEl);
    });
  });
}
