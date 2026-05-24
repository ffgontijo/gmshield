# GM Shield — Print Guidelines

> *How to produce print-ready Quick Start documents*

---

## Overview

Every Quick Start in GM Shield has a print version. It must be:

- **Clean**: no navigation, no buttons, no UI chrome
- **Readable**: fonts at proper size, sufficient contrast, adequate margins
- **Complete**: all content from the screen version
- **Page-aware**: sections do not orphan, tables do not break awkwardly

Print styles live in `css/components/print.css` and are applied via `@media print`.

---

## CSS Print Rules

### What to Hide

```css
@media print {
  nav,
  .navigation,
  .print-button,
  .download-button,
  footer,
  [data-print="hidden"] {
    display: none !important;
  }
}
```

### Page Setup

```css
@media print {
  @page {
    size: A4;
    margin: 2cm 2.5cm;
  }
}
```

### Typography

```css
@media print {
  body {
    font-size: 11pt;
    line-height: 1.5;
    color: #000000;
    background: #ffffff;
  }

  h1 { font-size: 22pt; }
  h2 { font-size: 16pt; }
  h3 { font-size: 13pt; }
}
```

### Page Break Rules

```css
@media print {
  /* Never break immediately after a heading */
  h1, h2, h3, h4 {
    page-break-after: avoid;
    break-after: avoid;
  }

  /* Never break inside a table */
  table {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Never break inside an example block */
  .example {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* Force a new page before major chapters */
  .section-chapter {
    page-break-before: always;
    break-before: always;
  }
}
```

### Color for Print

All critical information must be distinguishable without color.

```css
@media print {
  :root {
    --system-primary: #000000;
    --system-bg: #ffffff;
    --system-text: #000000;
    --system-border: #888888;
  }

  th {
    background: none;
    border-bottom: 2pt solid #000000;
    font-weight: bold;
  }
}
```

---

## The Quick Reference Page

The Quick Reference is the last page of every Quick Start. It must:

- Fit on exactly **one page** (A4)
- Contain only tables and values — no prose
- Use a smaller font size (9pt–10pt)
- Be labeled clearly as a reference card

```css
.quick-reference {
  column-count: 2;
  column-gap: 1cm;
}

@media print {
  .quick-reference {
    page-break-before: always;
    font-size: 9pt;
  }
}
```

---

## Testing Print Output

Always test in at least two browsers before publishing.

**Chrome:**
1. Press `Ctrl+P`
2. Destination: "Save as PDF"
3. Paper size: A4
4. Margins: Default

**What to verify:**
- [ ] Navigation and UI elements do not appear
- [ ] No section heading appears at the bottom of a page without content below it
- [ ] No tables are split mid-row across pages
- [ ] Quick Reference fits on one page
- [ ] Font sizes are comfortable to read
- [ ] Table borders are visible

---

## Generating PDF Downloads

1. Open the Quick Start in Chrome
2. Print to PDF (steps above)
3. Save as `[system-slug]-quickstart.pdf`
4. Place in `downloads/pdf/`

The Download button on the Quick Start page links to this file.

---

*GM Shield — Every Quick Start should look as good on paper as on screen.*
