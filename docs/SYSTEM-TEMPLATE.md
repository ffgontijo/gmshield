# GM Shield — Adding a New System

> *Step-by-step guide for contributors adding a new RPG system to GM Shield*

---

## Before You Start

Confirm:
1. You have access to the official rules of the system
2. You understand the content policy (no verbatim reproduction of copyrighted text)
3. The system is not already in progress (check open Issues on GitHub)
4. You have read `docs/CONTENT-GUIDE.md` completely

Open a GitHub Issue titled `[System] System Name — Adding Support` before starting work.

---

## Step 1: Create the System Folder

System slugs are lowercase and hyphen-separated.

```bash
mkdir -p systems/your-system-name/data
mkdir -p systems/your-system-name/docs
```

Examples: `star-wars-weg-reup`, `call-of-cthulhu`, `dnd5e`, `ordem-paranormal`

---

## Step 2: Copy the HTML Templates

```bash
cp systems/shared/templates/system-home-template.html    systems/your-system-name/index.html
cp systems/shared/templates/quickstart-template.html     systems/your-system-name/quickstart.html
cp systems/shared/templates/gm-screen-template.html      systems/your-system-name/gm-screen.html
```

---

## Step 3: Create the Data Files

Create in `systems/your-system-name/data/`:

| File | Contents |
|------|----------|
| `system-info.json` | Name, publisher, year, description, theme slug |
| `rules.json` | Core mechanics structured by section |
| `tables.json` | All reference tables |
| `combat.json` | Combat rules, actions, modifiers, damage chart |
| `conditions.json` | Status effects and consequences |
| `examples.json` | Reusable play examples for the Quick Start |

---

## Step 4: Create the Visual Theme

Create `css/systems/your-system-name.css` with all `--system-*` variable overrides.

```css
:root {
  --system-primary: #XXXXXX;
  --system-primary-dark: #XXXXXX;
  --system-secondary: #XXXXXX;
  --system-accent: #XXXXXX;
  --system-bg: #XXXXXX;
  --system-bg-card: #XXXXXX;
  --system-bg-panel: #XXXXXX;
  --system-text: #XXXXXX;
  --system-text-muted: #XXXXXX;
  --system-text-heading: #XXXXXX;
  --system-border: #XXXXXX;
  --system-border-accent: #XXXXXX;
}
```

Theme identity guidelines:
- D&D 5e: warm parchment, medieval gold, deep burgundy
- Star Wars WEG REUP: deep space dark, Star Wars yellow, Imperial red
- Call of Cthulhu: muted sepia, aged paper, shadow green
- Ordem Paranormal: urban dark, electric blue, occult purple

Every text color must pass WCAG AA contrast ratio (4.5:1 minimum).

---

## Step 5: Add System to the Index

In `index.html`, add the new system to the system cards grid.

---

## Step 6: Write the Quick Start

Follow `docs/CONTENT-GUIDE.md`. Must cover:
1. What the game is
2. What you need to play
3. The core mechanic
4. Characters
5. Tests and actions
6. Combat (essential only)
7. Special mechanics
8. Running your first session
9. Quick Reference (one printable page)

---

## Step 7: Write the GM Screen Content

Follow `docs/CONTENT-GUIDE.md`. Must include at minimum:
- Core Mechanic Summary
- Difficulty Numbers
- Combat Actions
- Attack Modifiers
- Damage/Wound Chart
- Conditions/Status Effects
- Common Skill Uses

---

## Step 8: Test

### Functional
- [ ] All pages load without console errors
- [ ] All panels collapse and expand
- [ ] Theme loads correctly

### Layout
- [ ] Quick Start reads cleanly at 1200px, 768px, 480px
- [ ] GM Screen fits without vertical scroll at 1024px
- [ ] GM Screen reorganizes correctly at 768px

### Print
- [ ] No navigation elements in print preview
- [ ] Tables do not break across pages
- [ ] Quick Reference fits on one page

### Content
- [ ] No verbatim text from official rulebooks
- [ ] Consistent terminology throughout
- [ ] All tables accurate and complete
- [ ] Every concept in Quick Start has an example
- [ ] GM Screen has no prose paragraphs

---

## Step 9: Create System Notes

Create `systems/your-system-name/docs/notes.md` with:
- Terminology reference
- Design decisions (why certain rules were simplified)
- Known gaps
- Sources used

---

## Submitting

1. Fork the repository
2. Create branch: `system/your-system-name`
3. Complete all steps and pass all tests
4. Open a Pull Request referencing the original Issue

---

*GM Shield — Built by the community, one system at a time.*
