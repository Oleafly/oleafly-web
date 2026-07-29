---
title: "Chemical formulas and structures"
description: "mhchem reactions and a chemfig sketch."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Chemical formulas and structures

Chemical notation fights LaTeX's defaults. Math mode italicizes element symbols as if they were variables, and text mode has no subscripts at all. Two packages divide the work. `mhchem` typesets formulas and reactions from plain chemist's notation, and `chemfig` draws structural diagrams.

## Formulas and reactions with mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

The `version=4` option selects the current syntax. Everything chemical goes inside `\ce{...}`, which reads its contents the way a chemist writes them. In `\ce{H2O}` the 2 becomes a subscript automatically and the element symbols stay upright, as convention requires. In the reaction, the `+` gets proper spacing, `->` becomes a reaction arrow, and the 2 before CO is recognized as a stoichiometric coefficient, so it stays full size on the baseline.

The same notation scales up. Charges ride as superscripts, so `\ce{SO4^2-}` gives sulfate with its 2- charge. States of matter attach in parentheses, as in `\ce{H2O(l)}`; equilibrium arrows are written `<=>`; and `\ce{^{14}C}` places an isotope number before the symbol. `\ce` works in both text and math mode, so a formula can sit in a sentence with no extra delimiters.

## Structures with chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` draws structures from a compact linear code. Atoms are written as their symbols, and `-` draws a bond to the next atom. A bracketed number sets the bond's direction in steps of 45 degrees counterclockwise from east: `[2]` points straight up and `[6]` straight down. Parentheses open branches from the current atom, so `C(-[2]H)(-[6]H)` grows one hydrogen upward and one downward while the main chain continues to the right. The example is methane drawn flat: a central carbon bonded to four hydrogens. Double and triple bonds are written `=` and `~`, and there is a dedicated ring syntax for cyclic and aromatic structures.

## Practical notes

Keep the two tools in their lanes. Use `mhchem` for anything that reads left to right as a formula or an equation, and `chemfig` when the geometry of the molecule is the point. Both compile with a standard LaTeX engine and no external drawing program.

The usual beginner mistake is writing formulas in bare math mode. `$H_2O$` compiles, but it sets the H and the O in italics like variables, which is wrong by convention. `\ce{H2O}` produces the upright form with less typing. Both packages are available to try in the [live playground](/live/).
