# Contributing to GM Shield

First: thank you for considering a contribution to GM Shield. This project exists because people who love RPGs are willing to spend their time building something useful for the community.

---

## What You Can Contribute

### Content
- **New system**: A complete Quick Start and GM Screen for a system not yet covered
- **System improvement**: Corrections, clarifications, or additions to existing content
- **Translation**: Quick Starts are written in Brazilian Portuguese. Translations to other languages are welcome
- **Quick Reference pages**: Standalone printable reference cards

### Technical
- **Bug fixes**: Something broken, misrendering, or misbehaving
- **Responsive improvements**: Layout issues on specific screen sizes
- **Print improvements**: Issues with print/PDF output
- **Accessibility**: Missing labels, low contrast, keyboard navigation problems

### Documentation
- Corrections or clarifications to any file in `/docs`
- Additional examples in the Content Guide or Technical Spec

---

## What We Do Not Accept

- Verbatim reproduction of any copyrighted text, rules, or tables from official rulebooks
- Content that promotes, links to, or enables piracy of official materials
- Cosmetic changes with no functional improvement
- PRs that add a system without completing all steps in `SYSTEM-TEMPLATE.md`
- New JavaScript dependencies without prior discussion

---

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create a branch** for your contribution

```bash
# New system:
git checkout -b system/system-name

# Bug fix:
git checkout -b fix/brief-description

# Documentation:
git checkout -b docs/brief-description
```

4. Make your changes
5. Test your changes
6. Commit with a clear message
7. Open a Pull Request

---

## Commit Message Format

```
feat: add Call of Cthulhu Quick Start
fix: correct wound threshold values in SW combat table
docs: update print guidelines with Chrome PDF instructions
content: add starship combat panel to SW GM Screen
```

Avoid vague messages like "fix stuff", "update", or "changes".

---

## Open an Issue Before Major Work

If you are planning to add a new system or change the architecture, **open an Issue first**. This prevents duplicate work and lets the project author give early feedback.

For small fixes and corrections, a PR without a prior issue is fine.

---

## Code of Conduct

- Feedback on PRs must be constructive and specific
- Disagreements must be resolved through discussion, not pressure
- Content accuracy disputes must be resolved by reference to official rules, not opinion

---

## Questions?

Open a Discussion on GitHub.

---

*Thank you for contributing to GM Shield.*
