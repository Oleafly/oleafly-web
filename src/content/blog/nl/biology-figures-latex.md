---

title: "Biologische en biowetenschappelijke artikelen: figuren, platen met meerdere panelen en coauteurs"
description: "Praktische LaTeX voor wet-lab en computationele biologie: cijfers met meerdere panelen, resolutie, aanvullingen, statistische notatie en samenwerking zonder elkaar te overschrijven."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Levenswetenschappelijke manuscripten staan ​​op de eerste plaats. Recensenten strijken eerder over het bord dan zij
lees je proza, zodat de figuur de claim moet overbrengen zonder met de hand te zwaaien
het onderschrift. LaTeX gaat daar prima mee om als je cijfers als eersteklas beschouwt
projectbestanden in plaats van iets dat u om 02.00 uur vóór de aanvulling plakt
deadline.

Wet-lab- en computationele groepen stuiten op dezelfde puinhoop: panelen zonder gedeelde panelen
schaalbalken, JPEG-artefacten op blots, supplementen die niet kunnen worden gecompileerd, en a
tientallen coauteurs die één paragraaf bewerken. Hieronder ziet u wat er daadwerkelijk werkt.

## Figuren met meerdere panelen

Recensenten verwachten (a)(b)(c) panelen onder één onderschrift. U kunt:

1. Bouw de plaat buiten TeX (Illustrator, Inkscape, Fiji-export) en laat vallen
   in een enkele PDF of PNG, of
2. Samenvoegen in TeX met `subcaption` wanneer elk paneel een eigen bestand is:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Verwijs in tekst alleen naar panelen als Figuur~\ref{fig:exp}a als de dagboekstijl is gebruikt
staat het toe. Veel locaties geven de voorkeur aan "Figuur 2A", waarbij één schema wordt toegepast
overal. Meer over dat patroon:
[panelen a, b, c](/learn/subfigures-abc/).

Geef bestanden een consistente naam (`fig03_western_a.pdf`), zodat niemand iets uitvindt
`final_gel_NEW.png` de week van inzending.

## Resolutie, kleur en bestandsformaten

Bewaar microscopie-archieven als TIFF of PDF met hoge resolutie. Voor de papieren PDF
zelf, gebruik vectorafbeeldingen voor schema's en PNG/PDF met voldoende dpi
rastergegevens. Sla JPEG-on-line-annotaties en gels over. Compressie-artefacten
gelezen als slordige wetenschap, zelfs als het experiment prima is.

Controleer de kleurladingen en printregels voordat u een palet met zes kleuren ontwerpt
werkt alleen op uw gekalibreerde monitor. Sommige tijdschriften willen CMYK; anderen converteren
slecht zonder te vragen. Wanneer ze grijswaardenveilige versies van key
cijfers, geef ze die.

Plaats schaalbalken en intensiteitseenheden op het paneel, niet alleen in het bijschrift. Als
cijfers voor herindelingen van de productie, ingebedde schaalbalken blijven bestaan; Opmerkingen met alleen bijschriften
vaak niet.

## Schema's versus datapanelen

Houd 'cartoon van het traject' gescheiden van 'kwantificering van de vlek'.
Cartoons kunnen TikZ of externe vectorillustraties zijn. Datapanelen moeten dichtbij blijven
de analyse-export, zodat u deze opnieuw kunt genereren wanneer een revisor dat wil
verschillende normalisatie. Noteer het pad van het analysescript in de bijschriften of in een
reproduceerbaarheidssupplement wanneer het tijdschrift dit toestaat.

## Supplementen die nog steeds compileren

Reusachtige tafels, extra gels en filmstills horen thuis in een eigen supplement
document of een duidelijke bijlage. Een paar regels die kopzorgen besparen:

Labels moeten uniek zijn als hoofd- en supplementen één compilatie delen. Als dat zo is
afzonderlijke projecten, schrijf "Figuur S3" in platte tekst en vertrouw niet op `\ref`
over PDF's. Houd een korte lijst bij van welke beweringen in de hoofdtekst waar naar verwijzen
aanvulling op items, zodat er niets drijft.

Een supplement dat de week van indiening niet samenstelt, is nog steeds uw eigendom
probleem, zelfs als de hoofd-PDF er schoon uitziet.

## Chaos met meerdere auteurs

Biologische artikelen hebben vaak veel coauteurs met verschillende LaTeX-vaardigheidsniveaus. Eigen
bestanden per sectie (`results.tex`, `methods.tex`, `figs.tex`), samenvoegen
Git, en beslis wie de `.bib` onderhoudt (één persoon of een gedeelde Zotero-groep
exporteren).

Een lokale projectmap is gemakkelijker te zippen voor een bijdrager dan een cloud
project waartoe ze na hun afstuderen de toegang verliezen. Echte Git-geschiedenis verslaat e-mail
bijlagen met de naam `manuscript_JM_edits_FINAL.docx` die iemand terug converteert
met de hand naar TeX. Controlepunt na succesvolle compilatie; herstellen bij een samenvoeging
gaat fout; houd een privé-afstandsbediening.

Als sommige coauteurs alleen Word bewerken, exporteer dan DOCX of PDF voor hen en behoud `.tex`
als bron van waarheid. Zie
[coauteurs die alleen Word spreken](/learn/collaborator-uses-word/).

## Methoden en statistische notatie

Definieer statistische macro's één keer, zodat p-waarden niet verschijnen als zowel `$p$` als
`p=` in hetzelfde artikel:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Vermeld de test-, n- en meervoudige vergelijkingscorrectie in methoden of tabel
notities, niet alleen in een figuurlegende die tijdens de productie wordt bijgesneden. Dicht
papers profiteren van een korte notatielijst. Live ref/citaat inchecken a
onderzoeksredacteur vangt een `\ref` naar een verwijderd panel op voordat de recensent dat doet.

## Bijschriften die de claim dragen

Een goed onderschrift zegt wat er is gemeten, in welk systeem en wat de lezer heeft gedaan
zou moeten merken. Vermijd 'Zie tekst'. Dump geen methoden in het bijschrift that
horen thuis in het methodengedeelte. Paneelletters (vetgedrukt of tussen haakjes) moeten
passen bij de huisstijl.

## Controlelijst vóór indiening van cijfers

Voordat je op Verzenden drukt, loop je de cijfers één keer door:

- Elke hoofdfiguur geciteerd in volgorde (of welke volgorde het tijdschrift ook toestaat).
- Panelen gelabeld; schaalbalken waar ze ertoe doen.
- Geen JPEG-rommel op kwantitatieve panelen.
- Supplement compileert; S-nummers zijn niet herschikt.
- Kleurbeleid gecontroleerd; bestandsgroottes onder portaallimieten.
- Bronafbeeldingen en scripts nog vindbaar in het project- of labarchief.

## Westerns, gels en contrast

Verwerk blots voor de PDF niet te veel. Tijdschriften en lezers letten op contrast
spellen. Bewaar onbewerkte bestanden in het laboratoriumarchief en verzend panelen die overeenkomen met wat de
kwantificering gebruikt. Als u panelen opnieuw rangschikt, update dan elk paneel in de tekst
brief dezelfde dag, niet "later".

## Films en interactieve supplementen

Wanneer het tijdschrift films toestaat, presenteer ze dan op de manier waarop ze instructies geven en plaats een
nog steeds plus bijschrift in de PDF. Wees daarbij niet afhankelijk van een persoonlijke cloudkoppeling
overlijdt na afstuderen.

Cijfers vormen de ruggengraat van deze artikelen. LaTeX is slechts het frame. Zorg ervoor
het frame is niet wat faalt de avond vóór de indiening.