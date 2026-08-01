---

title: "Bord, script, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm en wanneer elk alfabet verschijnt."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Bord, script, Fraktur

Wiskunde gebruikt meer dan één alfabet. De reële getallen krijgen een op het schoolbord vetgedrukte R, een Lagrangiaan krijgt een kalligrafische L, een Lie-algebra krijgt een Fraktur g, en elk van deze is een apart commando in LaTeX in plaats van een lettertype dat je inschakelt. Bij consistent gebruik vertellen de alfabetten de lezer wat voor soort object een letter noemt, voordat de omringende zin dat doet.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## De vier alfabetten

| Commando | Kijk | Typisch gebruik |
| --- | --- | --- |
| `\mathbb{R}` | Schoolbord | Nummersets |
| `\mathcal{L}` | Kalligrafisch | Lagrangianen, verlies |
| `\mathfrak{g}` | Fraktuur | Leugenalgebra's |
| `\mathrm{d}` | Rechtop | Differentiëlen, operatornamen |

`\mathbb` produceert vetgedrukte letters op het bord, de dubbel aangeslagen letters worden bijna uitsluitend gebruikt voor getallensets: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Het komt uit het `amssymb`-pakket en heeft alleen betrekking op hoofdletters. Het lettertype heeft geen alfabet in kleine letters, dus een argument in kleine letters drukt verkeerde symbolen af ​​of niets bruikbaars.

`\mathcal` geeft kalligrafische hoofdletters, de gebruikelijke keuze voor Lagrangianen, verliesfuncties en families van verzamelingen. Het heeft ook alleen betrekking op hoofdletters, en het werkt in de kern van LaTeX zonder extra pakket.

`\mathfrak`, ook van `amssymb`, is Fraktur, waarbij beide naamvallen beschikbaar zijn. Kleine letters Fraktur noemt Lie-algebra's, en de hoofdletters verschijnen in de algebra en verzamelingenleer, onder andere voor idealen en kardinalen.

`\mathrm` is geen decoratief alfabet, maar een overstap naar rechtopstaand Romeins binnen wiskunde. Het is het juiste hulpmiddel voor alles dat uit notatie bestaat in plaats van uit een variabele: het verschil in `\mathrm{d}x`, eenheden of tekstuele sublabels zoals `x_{\mathrm{max}}`. Voor benoemde operatoren zoals tr en rank is er een beter mechanisme, beschreven in [operators die je een keer hebt uitgevonden](/learn/argmin-argmax/).

## Praktische opmerkingen

Als `\mathcal` er te duidelijk uitziet voor jouw doel, voegt het pakket `mathrsfs` `\mathscr` toe, een sierlijker script dat vaak wordt gebruikt voor schoven en sigma-algebra's. De twee kunnen naast elkaar bestaan ​​en verschillende objecten in hetzelfde papier aanduiden.

De veelgemaakte fout is dat deze alfabetten als decoratie worden beschouwd. Elk ervan heeft op de meeste gebieden een conventionele betekenis, en een lezer die `\mathbb{A}` ziet, verwacht iets dat op een set lijkt en een nummerachtige smaak heeft. Controleer de conventies van uw veld voordat u letters toekent, en zodra deze zijn toegewezen, behoudt u één alfabet per object voor het hele document. Alle vier worden binnen enkele seconden naast elkaar weergegeven in de [live speeltuin](/live/).