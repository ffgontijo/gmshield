# ⚔️ GM Shield

> **A free, open-source digital toolkit for tabletop RPG players and Game Masters.**
> Quick Starts to get you playing fast. Digital GM Screens to keep sessions flowing.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-blue)
![Language](https://img.shields.io/badge/language-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![Made with love](https://img.shields.io/badge/made%20with-%E2%9D%A4%EF%B8%8F%20for%20the%20RPG%20community-red)

---

## What is GM Shield?

GM Shield is a passion project built by a tabletop RPG enthusiast for the RPG community.

It addresses two of the most common barriers people face when getting into tabletop roleplaying:

1. **"I want to play, but the rulebook is massive and I don't know where to start."**
   → The **Quick Start** section gives you exactly what you need to sit down and play, nothing more.

2. **"As the GM, I spend half my session searching through pages trying to find a table."**
   → The **Digital GM Screen** puts every reference you need in front of you, instantly.

GM Shield is not a replacement for official rulebooks. It is a gateway — a free, well-organized, and accessible entry point that helps new players and Game Masters get into the hobby faster, and helps experienced GMs run sessions more smoothly.

> This project is a **fan work**. It does not reproduce, sell, or distribute copyrighted material. All content is original explanatory and educational material created by the project. We deeply respect the authors and publishers of every system covered here.

---

## Features

### 📖 Quick Start Guides

A Quick Start for each supported RPG system, designed to get someone playing in one reading session.

- Core concepts explained clearly with examples
- Character creation walkthrough, step by step
- Essential rules: tests, combat, special mechanics
- Key tables and reference charts
- GM tips for running a first session
- Printable version included — clean layout, no fluff

### 🛡️ Digital GM Screens

A digital reference tool that replaces the physical GM screen at the table.

- All the tables a GM needs, organized by category
- Compact panel layout — designed to avoid scrolling
- Optimized for laptop, iPad, and tablet use during sessions
- Fast navigation between sections
- Collapsible panels for custom workflow

---

## Supported Systems

| System | Quick Start | GM Screen | Status |
|--------|-------------|-----------|--------|
| Star Wars: The Roleplaying Game (WEG REUP) | ✅ | ✅ | 🔨 In development |
| Dungeons & Dragons 5th Edition | 📋 Planned | 📋 Planned | — |
| Call of Cthulhu | 📋 Planned | 📋 Planned | — |
| Ordem Paranormal RPG | 📋 Planned | 📋 Planned | — |
| Dragonbane | 📋 Planned | 📋 Planned | — |

> Star Wars WEG REUP is the pilot system. Its implementation defines the templates, standards, and workflow for all future systems.

---

## Who Is This For?

**New players** who want to understand a system quickly, without reading 300+ pages before their first session.

**New Game Masters** who need a reliable reference and a practical starting point to run their first adventure.

**Experienced GMs** who want a fast, clean digital reference tool they can actually use at the table.

**Brazilian RPG players**, specifically — many of the systems covered here have little or no material available in Portuguese. GM Shield provides original Portuguese-language content for systems that have historically been inaccessible to non-English speakers.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 |
| Styling | Modular CSS3 with custom properties |
| Behavior | Vanilla JavaScript (ES6+) |
| Data | JSON files per system |
| Print | Dedicated `print.css` stylesheet |
| Hosting | GitHub Pages (static) |

No build step. No bundler. No framework required to contribute or run locally. Just open `index.html` in a browser.

> Future versions may adopt a static site generator (Astro or Eleventy) as the project scales. The data structure and templates are designed with that migration in mind.

---

## Project Structure

```
gm-shield/
│
├── index.html                  # Landing page
├── README.md                   # This file
│
├── docs/                       # Project documentation
│   ├── VISION.md               # Full vision, audience, and goals
│   ├── TECHNICAL.md            # Architecture and development guide
│   ├── STYLE-GUIDE.md          # Visual identity and design tokens
│   ├── CONTENT-GUIDE.md        # How to write Quick Starts and GM Screens
│   ├── SYSTEM-TEMPLATE.md      # Step-by-step guide to adding a new system
│   ├── PRINT-GUIDELINES.md     # How to produce print-ready versions
│   └── CONTRIBUTING.md         # How to contribute to the project
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── fonts/
│
├── css/
│   ├── base/
│   │   ├── reset.css
│   │   ├── typography.css
│   │   ├── variables.css
│   │   └── layout.css
│   ├── components/
│   │   ├── cards.css
│   │   ├── tables.css
│   │   ├── navigation.css
│   │   ├── buttons.css
│   │   ├── panels.css
│   │   └── print.css
│   └── systems/
│       ├── star-wars-weg-reup.css
│       ├── dnd5e.css
│       ├── call-of-cthulhu.css
│       └── ordem-paranormal.css
│
├── js/
│   ├── core/
│   │   ├── app.js
│   │   ├── router.js
│   │   ├── navigation.js
│   │   ├── print.js
│   │   └── theme-loader.js
│   ├── components/
│   │   ├── system-card.js
│   │   ├── quickstart-section.js
│   │   ├── gm-screen-panel.js
│   │   ├── table-renderer.js
│   │   └── search.js
│   └── utils/
│       ├── formatters.js
│       ├── responsive.js
│       └── validators.js
│
├── systems/
│   ├── star-wars-weg-reup/
│   │   ├── index.html
│   │   ├── quickstart.html
│   │   ├── gm-screen.html
│   │   ├── data/
│   │   │   ├── system-info.json
│   │   │   ├── rules.json
│   │   │   ├── tables.json
│   │   │   ├── combat.json
│   │   │   ├── conditions.json
│   │   │   └── examples.json
│   │   └── docs/
│   │       └── notes.md
│   └── shared/
│       ├── templates/
│       │   ├── system-home-template.html
│       │   ├── quickstart-template.html
│       │   └── gm-screen-template.html
│       └── schemas/
│           ├── system.schema.json
│           ├── quickstart.schema.json
│           └── gm-screen.schema.json
│
└── downloads/
    ├── pdf/
    ├── printable-html/
    └── exports/
```

---

## Getting Started (Local Development)

No dependencies. No installation required.

```bash
# Clone the repository
git clone https://github.com/ffgontijo/gmshield.git

# Navigate to the project folder
cd gmshield

# Open in your browser
open index.html
```

For a better local development experience with live reload:

```bash
python3 -m http.server 8080
# Then open: http://localhost:8080
```

---

## Roadmap

### Phase 1 — Foundation (Current)
- [ ] Project documentation and standards
- [ ] Base HTML/CSS/JS architecture
- [ ] Design system and component library
- [ ] Star Wars WEG REUP: Quick Start
- [ ] Star Wars WEG REUP: Digital GM Screen
- [ ] Print/PDF export for Quick Start

### Phase 2 — Expansion
- [ ] Landing page with system selection
- [ ] Call of Cthulhu: Quick Start + GM Screen
- [ ] D&D 5e: Quick Start + GM Screen
- [ ] Search functionality within Quick Starts
- [ ] Responsive improvements for mobile

### Phase 3 — Community
- [ ] Ordem Paranormal: Quick Start + GM Screen
- [ ] Contribution documentation and process
- [ ] Community submission pipeline
- [ ] GitHub Pages deployment

---

## Contributing

GM Shield welcomes contributions from the RPG community. Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) before submitting anything.

The most important thing: all content must be **original**. Do not reproduce text, tables, or mechanics verbatim from official rulebooks.

---

## License

This project is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

All references to Star Wars, Dungeons & Dragons, Call of Cthulhu, and other RPG systems are trademarks of their respective owners. This project is not affiliated with, endorsed by, or licensed by any of these rights holders.

---

## Author

Built with care by a tabletop RPG player who wanted better tools at the table.

> *"The best GM screen is the one that keeps you in the story."*

---

*GM Shield — From the community, for the community.*
