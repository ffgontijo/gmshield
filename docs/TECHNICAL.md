# GM Shield — Technical Specification

> *Version 1.0 — Architecture & Development Guide*

---

## Philosophy

GM Shield is built on three technical principles:

**1. Simplicity first.**
The project must be runnable by opening a single HTML file in a browser. No build step, no Node.js, no package manager required.

**2. Content separated from code.**
System rules, tables, and examples live in JSON files. The HTML and JavaScript are responsible only for rendering that content.

**3. Designed for future migration.**
The folder structure, data schemas, and component patterns are designed so the project can be migrated to a static site generator (Astro, Eleventy) without a major rewrite.

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Markup | Semantic HTML5 | No build step, universal browser support |
| Styling | Modular CSS3 with custom properties | Theming via CSS variables, no preprocessor needed |
| Behavior | Vanilla JavaScript (ES6+) | Zero dependencies, future-proof |
| Data | JSON | Human-readable, easy to edit, trivially parseable |
| Print | `print.css` media query stylesheet | Decoupled from screen styles |
| Hosting | GitHub Pages | Free, static, version-controlled |

---

## Design System

### CSS Custom Properties (Variables)

All visual values are defined as CSS custom properties in `css/base/variables.css`. No hardcoded color, font size, or spacing value should appear anywhere else.

#### Global Variables

```css
:root {
  /* Typography */
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-ui: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Type Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Layout */
  --container-max: 1200px;
  --panel-gap: 1rem;
  --border-radius: 4px;

  /* Transitions */
  --transition-fast: 120ms ease;
  --transition-base: 200ms ease;
}
```

#### System Theme Variables

Each system overrides a fixed set of semantic variables. Components never reference a color directly — only a semantic variable.

```css
/* css/systems/star-wars-weg-reup.css */
:root {
  --system-primary: #FFE81F;
  --system-primary-dark: #B8A200;
  --system-secondary: #1A1A2E;
  --system-accent: #E63946;
  --system-bg: #0D0D1A;
  --system-bg-card: #1A1A2E;
  --system-bg-panel: #16213E;
  --system-text: #E8E8E8;
  --system-text-muted: #9B9BAA;
  --system-text-heading: #FFE81F;
  --system-border: #2E2E4E;
  --system-border-accent: #FFE81F;
}
```

---

## Data Architecture

### JSON File Structure per System

#### `system-info.json`
```json
{
  "id": "star-wars-weg-reup",
  "name": "Star Wars: The Roleplaying Game",
  "subtitle": "Revised, Expanded and Updated",
  "publisher": "West End Games (Fan Revision)",
  "year": "1987 (REUP: 2015)",
  "language": "pt-BR",
  "description": "...",
  "theme": "star-wars-weg-reup",
  "status": "active"
}
```

#### `tables.json`
```json
{
  "version": "1.0",
  "tables": [
    {
      "id": "difficulty-numbers",
      "title": "Níveis de Dificuldade",
      "columns": ["Nível", "Número"],
      "rows": [
        ["Muito Fácil", "6"],
        ["Fácil", "11"],
        ["Moderado", "15"],
        ["Difícil", "20"],
        ["Muito Difícil", "25"],
        ["Heroico", "30"]
      ]
    }
  ]
}
```

#### `combat.json`
Combat-specific reference data: actions, modifiers, ranges, damage tables, conditions.

#### `rules.json`
Core mechanics structured by section, each with optional examples.

#### `conditions.json`
Status effects and their mechanical consequences.

#### `examples.json`
Named play examples used in the Quick Start for illustration.

---

## GM Screen: Layout Rules

These rules are non-negotiable.

**No vertical scrolling on standard screens.**
On a 1024px-wide or wider screen, the GM Screen must display all essential content without requiring the user to scroll down the page.

**Panel-based layout.**
Content is divided into named, collapsible panels. Each panel covers one category: Difficulty Numbers, Combat Actions, Damage Chart, Conditions, etc.

**Collapsible panels.**
Each panel can be collapsed to show only its title. The GM's last-used configuration is remembered via `localStorage`.

**Responsive grid.**
Large screens: 3–4 columns. Tablet: 2 columns. Small screens: single column with scrolling re-enabled.

**No decorative elements that consume space.**
Every pixel must either display information or serve navigation.

---

## Code Standards

### HTML
- Semantic elements everywhere: `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`
- `data-*` attributes for JavaScript hooks — never `class` or `id` for JS behavior
- No inline styles

### CSS
- All colors and spacing through CSS custom properties — never hardcoded values
- BEM naming: `.block__element--modifier`
- One file per component
- No `!important`

### JavaScript
- No frameworks or libraries
- Single-responsibility functions
- JSDoc comment on every public function
- Rendering separated from data logic

### Comments
Comments explain *why*, not *what*.

```javascript
// Good: explains a non-obvious decision
// GM Screen panels store their collapsed state in localStorage so the
// GM's layout persists between sessions without requiring a login.
savePanel(panelId, state);

// Bad: explains what the code already says
// Save the panel
savePanel(panelId, state);
```

---

## Commit Message Convention

This project uses Conventional Commits:

| Prefix | When to use |
|--------|-------------|
| `docs:` | Documentation changes |
| `feat:` | New feature or new system |
| `fix:` | Bug or content correction |
| `style:` | Visual change, no behavior change |
| `refactor:` | Code restructuring |
| `content:` | System content addition or update |

---

## Deployment

GM Shield is hosted on GitHub Pages as a fully static site.

1. Push to `main` branch
2. GitHub Pages automatically deploys
3. Available at `https://ffgontijo.github.io/gmshield/`

---

*GM Shield — Built to last, built to be understood.*
