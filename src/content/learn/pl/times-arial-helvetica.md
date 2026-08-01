---

title: "Times, Arial, stosy podobne do Helvetica"
description: "W czasopismach wciąż proszą o mapowania newtx, Helvet lub Fontspec."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Stosy Times, Arial, Helvetica

Wytyczne czasopism i konferencji nadal rutynowo wymagają Timesa w przypadku tekstu podstawowego lub Arialu w przypadku liczb, mimo że te czcionki przestały być pierwszym wyborem estetycznym. W LaTeX-ie istnieją dwa sposoby spełnienia takiego wymagania, a to, który z nich zastosuje, zależy od silnika. Klasyczny pdfLaTeX nie może załadować rzeczywistych plików Times New Roman ani Arial, dlatego używa klonów zgodnych z systemem metrycznym, dostarczanych w pakietach. XeLaTeX i LuaLaTeX ładują prawdziwe czcionki systemowe poprzez `fontspec`.

## Trasa paczki

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` przełącza czcionkę tekstu na klon Timesa, a `newtxmath` zapewnia dopasowanie matematyczne. Parowanie ma znaczenie: zmień tylko czcionkę tekstu, a równania pozostaną w domyślnym trybie Computer Modern. Akapit Timesa obok Computer Modern Matematyka jest natychmiast widoczny. `newtx` jest utrzymywanym następcą starych pakietów `times` i `txfonts`, których powinieneś unikać w nowych dokumentach. Stare stosy pozostawiły matematykę nieprzekonwertowaną, a niektóre tworzą czcionki bitmapowe opisane w [rozmazany tekst w przeglądarce PDF](/learn/fuzzy-font-pdf/).

„helvet” zapewnia klon Helvetica jako rodzinę bezszeryfową, która również zastępuje Arial, ponieważ Arial został zaprojektowany tak, aby odpowiadał metrykom Helvetica. Załadowanie nie powoduje zmiany czcionki dokumentu, ponieważ w tekście podstawowym używana jest rodzina szeryfowa. Linia `\renewcommand{\familydefault}{\sfdefault}` wykonuje ten przełącznik: `\familydefault` to rodzina, której LaTeX używa do zwykłego tekstu, a ustawienie jej na `\sfdefault` sprawia, że ​​cały dokument przypomina Helveticę. Pomiń tę linię, jeśli potrzebujesz tylko nagłówków bezszeryfowych lub etykiet rysunków. Jeśli Helvetica obok Twojej czcionki tekstowej jest nieco większa, `\usepackage[scaled=0.92]{helvet}` dostosowuje ją.

## Trasa specyfikacji czcionki

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

W XeLaTeX lub LuaLaTeX „fontspec” adresuje czcionki według nazwy i ładuje je z systemu operacyjnego, co ustawia prawdziwą czcionkę Times New Roman jako rodzinę główną (szeryfową), a prawdziwy Arial jako rodzinę bezszeryfową. Czcionki muszą być faktycznie zainstalowane na komputerze. To denerwuje, gdy dokument jest przesyłany między komputerami lub do CI. Czcionka dołączana do projektu pozwala uniknąć tego problemu, jak pokazano w [pliku czcionki obok projektu](/learn/install-custom-font/). Matematyka to znowu osobna sprawa, obsługiwana przez `unicode-math` lub przez dodanie `newtxmath` obok. Kompromisy związane z silnikiem omówiono w artykule [dlaczego ludzie przechodzą na XeLaTeX](/learn/when-use-xelatex/).

## Ogólna zasada

Przed wybraniem którejkolwiek trasy sprawdź, czy plik zajęć danego obiektu już ustawia czcionki. Większość tak. Układanie własnych pakietów czcionek na klasie, która przemawiała, powoduje w najlepszym przypadku ostrzeżenia. Dodawaj pakiety czcionek tylko do dokumentów, których klasa pozostawia wybór Tobie.