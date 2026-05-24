# GM Shield — Content Guide

> *How to write Quick Starts and Digital GM Screens for GM Shield*

---

## The Two Content Types

| | Quick Start | GM Screen |
|---|---|---|
| **Purpose** | Teach the system | Reference during play |
| **Reader state** | Learning | Already knows the game |
| **Reading style** | Linear, start to finish | Non-linear, jump to section |
| **Tone** | Welcoming, clear, encouraging | Direct, dense, efficient |
| **Examples** | Many | None or minimal |

---

## Writing a Quick Start

### Goal

A person who has never played the system should be able to read the Quick Start and sit down and play a first session — as a player or GM — without consulting the original rulebook.

### Structure

Every GM Shield Quick Start follows this structure:

1. **What Is This Game?** (1–2 paragraphs)
   Short description of the system, what kind of stories it tells, what makes it different.

2. **What You Need to Play**
   Dice, players, a GM, paper, pencils.

3. **The Core Mechanic** (most important section)
   The fundamental resolution system, explained completely, with at least two concrete examples.

4. **Characters**
   Attributes, skills, stats. How to read a character sheet. Brief character creation overview.

5. **Tests and Actions**
   Rolling dice, difficulty numbers, success and failure, opposed rolls.

6. **Combat** (condensed)
   How a combat round works. How to hit, how damage works, what happens when you get hurt.

7. **Special Mechanics**
   What defines this system. For Star Wars WEG REUP: Wild Die, Force Points, Dark Side. For Call of Cthulhu: Sanity. For D&D 5e: Advantage/Disadvantage.

8. **Running Your First Session** (GM section)
   Practical advice: how to set difficulties, when to ask for rolls, how to handle failure.

9. **Quick Reference** (last page)
   One-page summary of the most-used tables and numbers. Must fit on one printed page.

### Writing Style

**Use plain language.**
If you can say it in ten words, do not use twenty.

**Show before you tell.**
Every mechanical concept must be followed by a concrete example.

```
Example of good example writing:

"The GM picks a difficulty number. If your roll equals or beats it, you succeed.

Example: Han Solo is piloting the Millennium Falcon through an asteroid field.
The GM decides this is Very Difficult (25). Han's Mechanical attribute is 4D.
He rolls four six-sided dice and gets 3, 5, 6, 4 — a total of 18.
That's less than 25. The Falcon clips a rock. Things just got worse."
```

**Never condescend.**
Explain things clearly without implying the reader is slow.

**Be encouraging.**
The reader is trying something new. Make them feel like they can do this.

### What to Leave Out

- Full skill lists (cover the 10 most common)
- Optional rules and variants
- Extended lore beyond what is needed to understand the game
- Edge cases and exceptions
- Anything not needed for a first session

### On Intellectual Property

You must not reproduce text from official rulebooks.

What to do:
- Understand the rule thoroughly
- Write your own explanation from scratch
- Use your own examples, not ones from the book
- Present reference tables as your own explanatory summary

Ask yourself: "Would the original author recognize their own words?" If yes, rewrite it.

---

## Writing a GM Screen

### Goal

The GM must be able to find any reference value in under five seconds. That is the only goal.

### Structure

**Required panels for every system:**

- Core Mechanic Summary (one-sentence recap + key roll formula)
- Difficulty Numbers
- Combat Actions (what a character can do in a round)
- Attack Modifiers
- Damage / Wound Chart
- Conditions / Status Effects
- Common Skill Uses (15 most frequently rolled skills)
- NPCs / Minions (quick stats for common enemies)

**System-specific panels** for mechanics GMs reference frequently.
For Star Wars WEG REUP: Wild Die Results, Force Point Rules, Scale Modifiers, Starship Combat Summary.

### Writing Style

**No prose. Tables only.**
The GM Screen is not a reading document. Every section must be a table, numbered list, or definition list.

**No examples.**
The GM already knows what the rule means. They just need the number.

**No footnotes or caveats.**
If a rule requires qualification, you have included too much of it.

### Example: Correct GM Screen Content

```
DIFFICULTY NUMBERS

Very Easy        6
Easy            11
Moderate        15
Difficult       20
Very Difficult  25
Heroic          30
```

```
DAMAGE RESULTS  (damage roll minus strength roll)

1–3    Stunned          -1D to all rolls for 2 rounds
4–8    Wounded          -1D to all rolls; cumulative
9–12   Incapacitated    Cannot act; needs assistance
13–15  Mortally Wounded Dying; needs immediate care
16+    Killed
```

---

## Language Policy

**System content** (Quick Starts and GM Screens): written in **Brazilian Portuguese (pt-BR)**.

**Project documentation** (`/docs`): written in **English** for international accessibility and portfolio use.

Keep a terminology reference in the system's `docs/notes.md`. Use consistent terms throughout — if it's "Dificuldade" in one place, it's "Dificuldade" everywhere.

---

## Quality Checklist

### Quick Start
- [ ] A complete newcomer can follow it without external help
- [ ] Every mechanical concept has at least one example
- [ ] No text reproduced verbatim from official materials
- [ ] Print version renders cleanly
- [ ] All terminology is consistent
- [ ] Quick Reference fits on one printed page

### GM Screen
- [ ] All content fits without vertical page scroll at 1024px
- [ ] Every table is complete and accurate
- [ ] No prose paragraphs anywhere
- [ ] Tested on laptop and tablet layouts
- [ ] All panels collapse correctly

---

*GM Shield — Content that respects the reader's time.*
