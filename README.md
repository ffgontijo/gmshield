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

## Live Demo

🌐 **[gmshield.ffgontijo.com](https://gmshield.ffgontijo.com)** — hosted on a ZimaOS home server

---

## Supported Systems

| System | Quick Start | GM Screen | Status |
|--------|-------------|-----------|--------|
| Star Wars: The Roleplaying Game (WEG REUP) | ✅ | 🔨 | 🔨 In development |
| Dungeons & Dragons 5th Edition | 📋 | 📋 | Planned |
| Call of Cthulhu | 📋 | 📋 | Planned |
| Ordem Paranormal RPG | 📋 | 📋 | Planned |
| Dragonbane | 📋 | 📋 | Planned |

---

## Features

### 📖 Quick Start Guides
- Core concepts explained clearly with examples
- Character creation walkthrough, step by step
- Essential rules: tests, combat, special mechanics
- Key tables and reference charts
- GM tips for running a first session
- Printable version — clean PDF-ready layout

### 🛡️ Digital GM Screens
- All reference tables in collapsible panels
- Designed to avoid scrolling — fits on one screen
- Optimized for laptop, iPad, and tablet use during sessions
- Panel state remembered via localStorage

---

## Who Is This For?

**New players** who want to understand a system without reading 300+ pages first.

**New Game Masters** who need a practical starting point to run their first adventure.

**Experienced GMs** who want a fast digital reference tool at the table.

**Brazilian RPG players** — GM Shield creates original Portuguese-language content for systems with no official pt-BR material (Star Wars WEG, for example).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | Semantic HTML5 |
| Styling | Modular CSS3 with custom properties |
| Behavior | Vanilla JavaScript (ES6+) |
| Data | JSON files per system |
| Print | Dedicated `print.css` stylesheet |
| Hosting | GitHub Pages (static) + ZimaOS home server |

No build step. No bundler. No framework. Just open `index.html` in a browser.

---

## Project Structure

```
gm-shield/
│
├── index.html                  # Landing page
├── README.md
│
├── docs/                       # Project documentation
│   ├── VISION.md
│   ├── TECHNICAL.md
│   ├── CONTENT-GUIDE.md
│   ├── SYSTEM-TEMPLATE.md
│   ├── CONTRIBUTING.md
│   └── PRINT-GUIDELINES.md
│
├── css/
│   ├── base/                   # reset, variables, typography, layout
│   ├── components/             # navigation, cards, tables, panels, buttons, print
│   └── systems/                # per-system theme overrides
│
├── js/
│   ├── core/                   # app, theme-loader, navigation, print, router
│   ├── components/             # table-renderer, gm-screen-panel, system-card
│   └── utils/                  # formatters, validators
│
├── systems/
│   ├── star-wars-weg-reup/     # ← Pilot system
│   │   ├── quickstart.html
│   │   ├── gm-screen.html
│   │   └── data/               # rules.json, tables.json, combat.json, conditions.json
│   └── shared/
│       ├── templates/          # HTML templates for new systems
│       └── schemas/            # JSON schemas (data contracts)
│
└── downloads/
    └── pdf/                    # Generated Quick Start PDFs
```

---

## Development Workflow

This project uses a three-tier workflow:

```
Local (Windows)  →  git push  →  GitHub  →  git pull  →  ZimaOS Server
```

### Local → GitHub

```bash
git add .
git commit -m "feat: description of what changed"
git push
```

### GitHub → ZimaOS Server

```bash
# Connect to ZimaOS terminal (web terminal at 192.168.15.x)
bash /DATA/Sites/gmshield/update.sh
```

The update script runs `git fetch origin && git reset --hard origin/main` — always produces a clean, conflict-free sync.

---

## Getting Started (Local Development)

```bash
git clone https://github.com/ffgontijo/gmshield.git
cd gmshield
python3 -m http.server 8080
# Open: http://localhost:8080
```

No dependencies. No installation.

---

## Roadmap

### Phase 1 — Foundation ✅
- [x] Project documentation and standards
- [x] Base HTML/CSS/JS architecture
- [x] Design system and component library
- [x] Landing page (epic grimoire aesthetic)
- [x] Star Wars WEG REUP: Quick Start

### Phase 2 — In Progress 🔨
- [ ] Star Wars WEG REUP: Digital GM Screen
- [ ] Star Wars WEG REUP: PDF download
- [ ] GitHub Pages deployment

### Phase 3 — Expansion
- [ ] Call of Cthulhu: Quick Start + GM Screen
- [ ] D&D 5e: Quick Start + GM Screen
- [ ] Ordem Paranormal: Quick Start + GM Screen

### Phase 4 — Community
- [ ] Dragonbane support
- [ ] Contribution pipeline
- [ ] Community submission process

---

## Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) before submitting anything.

All content must be **original**. Do not reproduce text, tables, or mechanics verbatim from official rulebooks.

---

## License

[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

All references to Star Wars, Dungeons & Dragons, Call of Cthulhu, and other RPG systems are trademarks of their respective owners. This project is not affiliated with, endorsed by, or licensed by any of these rights holders.

---

## Author

Built with care by a tabletop RPG player who wanted better tools at the table.

> *"The best GM screen is the one that keeps you in the story."*

---

*GM Shield — From the community, for the community.*
