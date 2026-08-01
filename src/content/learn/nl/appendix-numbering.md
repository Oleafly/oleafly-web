---

title: "Bijlagen die netjes hernummerd zijn"
description: "bijlage, A/B-hoofdstukken, tellers die consistent blijven."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Bijlagen die netjes hernummerd worden

Een bijlage bevat materiaal dat de hoofdtekst ondersteunt maar deze zou onderbreken: lange proefdrukken, onderzoeksinstrumenten, extra tabellen, implementatiedetails. Lezers verwachten dat de bijlagen de letters A, B, C zullen hebben in plaats van dat ze doorgaan met de hoofdstuknummers, en verwachten dat het materiaal daarin hetzelfde zal volgen. Daarom is een figuur in bijlage A Figuur A.1, niet Figuur 47. In LaTeX is dat een enkele overstap, geen herstructureringsklus.

## De schakelaar

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` is een declaratie, geen omgeving: er valt niets af te sluiten. Vanaf het punt waar dit verschijnt, worden de snijtellers gereset en schakelen ze over naar letters. In de klassen 'report' en 'book' wordt elk '\hoofdstuk' erna Bijlage A, Bijlage B, enzovoort, en een '\sectie' daarbinnen wordt A.1. U schrijft nog steeds alleen uw eigen koptekst; het label "Bijlage A" en de letters komen uit de klas, precies zoals de hoofdstuknummers vóór de overstap.

In `artikel`, dat geen hoofdstukken heeft, krijgt `\appendix` in plaats daarvan de naam `\sectie`: de eerste sectie daarna wordt Bijlage A. Alles stroomafwaarts blijft automatisch consistent. De inhoudsopgave vermeldt de koppen met letters, en een `\label` die in een bijlage is geplaatst, wordt via `\ref` omgezet in "A" of "A.2" zonder enige speciale behandeling.

## Wat hernummert en wat niet

In 'rapport' en 'boek' zijn figuren, tabellen en vergelijkingen binnen hoofdstukken genummerd, zodat ze de letter gratis kunnen lezen: het eerste cijfer van bijlage B is figuur B.1. In 'article' lopen deze tellers continu door het hele document en '\appendix' raakt ze niet, dus de nummering van vergelijkingen gaat gewoon door. Dat is normaal voor een kort artikel; bestrijd het alleen als een locatie expliciet om A-voorvoegselnummers vraagt.

## Als je meer wilt

Het `appendix`-pakket voegt verfijningen toe die de gewone schakelaar mist. Zijn `appendices`-omgeving kan het woord "Appendix" in elke kop en in de inhoudsopgave (`\usepackage[toc,titletoc,title]{appendix}`) afdrukken, en kan een scheidingspagina invoegen waarop de bijlagen worden aangekondigd. Voor een proefschrift waarvan het sjabloon dit nog niet regelt, besparen deze opties handmatig gehannes.

Een veelgemaakte fout is het zelf in de kop schrijven van het label, zoals in `\hoofdstuk{Bijlage A: Extra proefdrukken}`. De klasse voegt een eigen label toe, zodat de uitvoer luidt "Bijlage A Bijlage A: Extra proefdrukken". Geef de kop alleen de titel en laat de nummeringsmachine zijn werk doen. Als u slechts één appendix heeft, is de enige 'Appendix A' een stijlvraag; de meeste locaties accepteren het, en sommige geven de voorkeur aan een ongeletterde `\chapter*{Appendix}`.