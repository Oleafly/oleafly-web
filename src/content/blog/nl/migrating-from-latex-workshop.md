---

title: "Beyond LaTeX Workshop: een onderzoekseditor op uw machine"
description: "Een speciaal gebouwde onderzoekseditor met projectbrede intelligentie, SyncTeX, offline proeflezen, gebundelde compilers, echte Git en citaten. VS Code + LaTeX Workshop is nog steeds eigenaar van recepten, afstandsbediening en de uitbreidingsmarktplaats."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) in VS Code is uitstekend. Gratis, MIT, zorgvuldig onderhouden. Als uw week draait op vrije compileerrecepten, texdoc, Docker/WSL/remote, Live Share of de marktplaats met volledige uitbreidingen, bewaar die stapel dan. Het is gebouwd voor dat leven.

Dit bericht is bedoeld als je een document-eerste app wilt: papieren met meerdere bestanden, compilers, PDF, Git, citaten, cijfers en proeflezen die al met elkaar zijn verbonden. Gratis en open source (AGPL). LaTeX, Typst, Markdown. Gewone mappen. Geen rekening.

Functiekaart en snelkoppelingen: [Afkomstig van LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## De redacteur

CodeMirror 6 met een projectbrede index voor LaTeX, Typst, Markdown en BibTeX.

Wat je eigenlijk dagelijks krijgt:

- Ga naar definitie, zoek referenties, hernoem labels en macro's (clash-waarschuwingen)
- Live controles op kapotte refs, slechte citaten, ontbrekende include's (`\cref`, `\eqref`, bereikreferenties, ...)
- Lokale + projectstructuurweergaven; filteren en springen
- Aanvullingen voor sleutels, paden en macro's die uw project definieert (`\newcommand`, xparse argumentvormen)
- `.tex`, `.ltx`, `.sty`, `.cls` ondersteuning; argumentfragmenten; omgevingscontroles
- TexLab voor LaTeX (opt-in-installatie); Tinymist wordt geleverd voor Typst
- Uniforme diagnostiek: syntaxis, compileren, taalservice, refs, citaten, spelling, grammatica
- Live KaTeX-wiskundevoorbeelden; bron blijft bewerkbaar
- Harper + Hunspell alleen offline op proza (opdrachten en wiskunde gemaskeerd)
- Visuele modus voor gemeenschappelijke structuren; Vim; slash-opdrachten; tabbladen met meerdere bestanden
- Pakketbewuste opdrachtvoltooiing vanuit een groot corpus komt als volgende terecht (MIT-gegevens van LaTeX Workshop, verkocht met attributie)

PDF-werkruimte: continu scrollen, spreads, zoeken, overzicht, afneembaar venster. Bidirectionele SyncTeX over hoofdstukbestanden. Het in kaart brengen werkt nog steeds terwijl een herbouw in behandeling is. Laatste goede PDF blijft staan. Maak de gecompileerde bronset ongedaan en de preview kan actueel blijven zonder een volledige hercompilatie.

CI op boekschaal: manuscript van ~6.200 regels, wiskunde voor meerdere gezinnen, hoofdstukken, citaten, proeflezen, prestatiebudgetten voor scrollen/type/plakken/ongedaan maken/voltooien/opnieuw compileren/SyncTeX.

LaTeX Workshop is een sterke uitbreiding in een algemene IDE. Oleafly verzendt deze documentlus al samengesteld, zodat u niet elk semester dezelfde stapel vanuit instellingen en marktplaatskeuzes hoeft te bedraden.

## Compilers in de app

Tectonic (LaTeX) en Typst worden met de app meegeleverd. Prijsverlaging via beheerd Pandoc wanneer u het nodig heeft. Compileer eerst cachepakketten; daarna werken in de cache opgeslagen builds offline. De offlinemodus kan de compiler aan de cache vergrendelen.

Automatisch compileren (debounced, annuleerbaar, laatste overwinningen). `Cmd/Ctrl-Enter` opnieuw compileren. Stop-knop. Gehumaniseerde foutkaarten op de lijn. Laatste goede PDF terwijl een nieuwere build wordt uitgevoerd.

Recepten, latexmk-ketens, shell-escape en aangepaste `.latexmkrc` blijven in de stuurhut van LaTeX Workshop. De meeste papers en scripties hebben alleen een betrouwbare, begeleide engine nodig.

Sjablonen: 23 gebundelde starters (IEEE, ACM, Elsevier, Beamer, scriptie, cv's, Typst blanks, …) plus 99 in downloadbare pakketten. Sla elk project op als sjabloon. Optioneel genereren van AI-sjablonen wanneer een model is ingesteld.

## Bibliotheek, Git, onderzoekstools

Projecten als boeken: omslagkleur, enginebadge, afstammingslijn, hovervoorbeeld van de laatste PDF-pagina, bladwijzers, `/docs` zoeken in elk document. Fork bewaart de volledige Git-geschiedenis voor een riskante herschrijving naast de ingezonden kopie.

Echte Git vanaf dag één. Staging, side-by-side diffs (werkboom bewerkbaar), weggooien, herstellen. Automatische controlepunten na succesvolle compilaties en inactieve bewerkingen; AI voert het controlepunt uit vóór de eerste schrijfbewerking. GitHub optioneel (PAT of device-flow OAuth). Terminal `git log` komt overeen met de app.

Plak DOI / arXiv / titel → dedupe → `.bib` → `\cite`. Batchimport BibTeX, RIS, EndNote, Zotero RDF. Citation Search in arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Diagramcomponist voor bewerkbare TikZ. Validator, tabellen, vergelijkingen, laboratoriumonderzoek, deadlines, PDF-naar-LaTeX, afbeelding-naar-LaTeX met een visiemodel.

## Optionele AI

Uit totdat u het configureert. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Sleutels gecodeerd op schijf. Aanvragen gaan naar de door u gekozen aanbieder.

De assistent redigeert, compileert, leest logboeken, extraheert pdf-tekst, zoekt literatuur, houdt plannen bij. Schrijfbewerkingen zijn goedkeuringsverschillen. Voor verwijderingen is een aparte bevestiging nodig. Inline Ask-AI op een selectie. Loopback MCP voor Claude Code, Cursor en vrienden. Als AI is uitgeschakeld, werken de editor, het compileren, Git en citaten nog steeds.

## Preflight, exporteren, privacy

Preflight: structuur, ongedefinieerde referenties, dubbele labels, extractievoorbeeld in parserstijl, op schermlezers gerichte bevindingen. Elke risicovlag wordt geleverd met voldoende context zodat u deze zelf kunt controleren in plaats van te vertrouwen op een black-box-score.

Exporteren: PDF altijd; DOCX/HTML/Markdown wanneer Pandoc beschikbaar is; PowerPoint voor decks; EPUB voor boeken; bron-ZIP voor overdracht.

Geen Oleafly-account. Geen producttelemetrie. Crashrapporten openen een vooraf ingevuld GitHub-probleem dat u beoordeelt. Netwerk voor pakketten, sjablonen, gehoste AI, citaten, updates, GitHub. Bewerken, compileren in de cache, grammatica, spellingcontrole en lokale Git werken offline.

## Als LaTeX Workshop nog past

- Recepten in vrije vorm, latexmk, shell-escape, `.latexmkrc`
- texdoc in de editor
- Docker, WSL, ontwikkeling op afstand
- Live delen en live bewerken voor meerdere gebruikers
- Leven op de VS Code-marktplaats voor niet-documentwerk

Oleafly is een publieke bèta. Zware uitgeversklassebestanden kunnen nog steeds Tectonic laten struikelen; rapporteer ze.

## Probeer het

1. Downloaden van de
   [releasepagina](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS ondertekend/notarieel bekrachtigd; Windows mag één keer SmartScreen).
2. Importeer uw `.tex`, `.bib` en cijfers (of begin met een sjabloon).
3. Eén keer compileren en dan een dag op echt papier schrijven.

Houd VS Code geïnstalleerd. Dezelfde bestanden werken in beide apps. Als een dag op een echt papier beter gaat in Oleafly, verplaats dan meer projecten; als recepten en afstandsbediening nog steeds winnen voor een bepaalde boom, laat die boom dan in Workshop staan.