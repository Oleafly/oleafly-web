---

title: "IEEE-formaat in de praktijk"
description: "IEEEtran-conferentie- en dagboekmodi, auteursblokken en valstrikken met twee kolommen."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# IEEE-formaat in de praktijk

IEEE-locaties, van kleine workshops tot toonaangevende tijdschriften, delen één klassenbestand: `IEEEtran`. Leer het één keer en er gaan honderden locaties open.

## Conferentie versus dagboekmodus

Dezelfde klasse produceert verschillende lay-outs, afhankelijk van de opties:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

De conferentiemodus geeft u de klassieke uitstraling: 10pt tijden, twee kolommen, standaard geen paginanummers. De dagboekmodus verandert de lay-out van de titel, voegt biografieën van de auteur toe aan het einde en past de spatiëring aan. Gebruik altijd de modus waar jouw locatie om vraagt, deze zijn niet uitwisselbaar. Voor de bredere vergelijking tussen IEEE en ACM, zie [ACM, IEEE, and Friends](/learn/acm-ieee-and-friends/).

## Auteurs op de IEEE-manier

De conferentiemodus heeft zijn eigen auteursmarkering. Vecht er niet tegen met `\\` en handmatig centreren:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` bevat namen, `\IEEEauthorblockA` bevat affiliaties en `\and` scheidt auteurs in kolommen.

## Wonen met twee kolommen

In de lay-out met twee kolommen lopen beginners vast. De regels:

| Probleem | Repareren |
|---|---|
| Brede figuur of tafel | Gebruik `figure*` / `table*`, zweeft naar de bovenkant van een pagina |
| Overloop van lange vergelijkingen | Breek het, bekijk de tactieken met twee kolommen in [één kolom of twee](/learn/one-column-or-two/) |
| Kolommen op de laatste pagina zijn ongelijk | Balanceer ze handmatig met `\IEEEtriggeratref` of het `balance` pakket |
| URL loopt in de marge | `\usepackage{url}` of `xurl` voor een betere verwerking |

Over de float-omgevingen met ster kan niet worden onderhandeld voor brede inhoud:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Merk op dat `figur*` plaatsing van `[h]` weigert, het zweeft altijd naar de bovenkant van de pagina. Plan daarvoor in plaats van ertegen te vechten.

## Bibliografie

IEEE gebruikt numerieke citaten met zijn eigen BibTeX-stijl:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

De overeenkomende `IEEEtran.bst` wordt met de klasse meegeleverd. Vervang het niet door 'gewoon' of 'ieeetr', merken recensenten op, en de checklist voor camera's zal het hoe dan ook opvangen.

## Waar u de echte sjabloon kunt krijgen

Begin altijd bij de officiële bron: de IEEE Template Selector op ieee.org, of de eigen auteurskitpagina van de conferentie. Organisatoren van conferenties patchen soms de sjabloon (copyrightvermelding, extra voetteksten), zodat de versie van de locatie het wint van een generieke kopie. Oleafly's [sjabloongalerij](/templates/) bevat een conferentiestarter in IEEE-stijl die kant-en-klaar op de meegeleverde Tectonic-engine wordt gecompileerd, handig voor het opstellen voordat u de officiële kit erbij haalt.

## Algemene valkuilenchecklist

- Compileer met pdfLaTeX-compatibele code, IEEEtran dateert van vóór fontspec en verwacht klassieke engine
- Voeg geen 'geometrie' toe en wijzig de marges niet, de klasse stelt ze precies in
- `\IEEEpeerreviewmaketitle` is nodig na `\maketitle` in sommige tijdschriftinzendingen
- Als de sjabloonfouten op uw computer voorkomen, sorteer deze dan zoals elke [broken template](/learn/fix-broken-template/)