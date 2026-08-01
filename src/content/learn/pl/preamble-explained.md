---

title: "Wszystko powyżej zaczyna się{dokument}"
description: "Pakiety, metadane i kolejność ładowania: co należy w preambule, a co nie."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Wszystko powyżej zaczyna się{dokument}

Wszystko pomiędzy `\documentclass{...}` i `\begin{document}` jest **preambułą**. Nie generuje widocznego tekstu. Konfiguruje przebieg. Czcionki, marginesy, pakiety, niestandardowe polecenia i metadane dokumentu znajdują się tutaj, dlatego preambuła dojrzałego artykułu jest często dłuższa niż jej wprowadzenie. Kiedy już wiesz, co robi każda linia, skopiowany szablon przestaje być magiczny i staje się listą kontrolną.

## Anatomia

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Opcje w `\documentclass` ustawiają globalne wartości domyślne: `11pt` to podstawowy rozmiar czcionki, od którego skalowane są wszystkie inne elementy, a `a4paper` określa rozmiar papieru. Dwie linie kodowania są towarzyszami historycznymi: „inputenc” informuje silnik, że plik źródłowy to UTF-8, a „fontenc” wybiera kodowanie czcionek, tak aby znaki akcentowane były prawdziwymi glifami, a nie złożonymi. Obecny LaTeX zakłada już wprowadzanie danych w formacie UTF-8, więc w nowych dokumentach te linie będą pomijane, ale są one nieszkodliwe i szablony zachowują je ze względu na kompatybilność.

Środkowy blok ładuje pakiety możliwości. [geometry](/learn/margins-geometry/) ustawia marginesy w jednej opcji, `amsmath` i `amssymb` zapewniają środowiska matematyczne i symbole potrzebne prawie każdemu dokumentowi technicznemu, `graphicx` umożliwia `\includegraphics` dla rysunków, a `booktabs` zapewnia reguły, które sprawiają, że tabele wyglądają profesjonalnie. Wreszcie, [hyperref](/learn/hyperlinks/) umożliwia kliknięcie odnośników i cytatów i jest celowo ładowane jako ostatnie, ponieważ na nowo definiuje wewnętrzne elementy wielu innych pakietów.

Linie `\title`, `\author` i `\date` przechowują jedynie metadane. Nic nie zostanie wydrukowane, dopóki w ciele nie pojawi się `\maketitle`, dlatego w ogóle mogą one znajdować się w preambule.

## Praktyczne zasady

Kilka nawyków utrzymuje preambuły w zdrowiu. Załaduj jedną paczkę na zadanie i unikaj układania paczek w stosy, które walczą na tym samym terytorium, na przykład na dwa sposoby ustalania marginesów. Zachowaj hyperref na końcu, z kilkoma udokumentowanymi wyjątkami, takimi jak sprytny, który musi nastąpić po nim. Umieść opcje obejmujące cały dokument w opcjach klasy, zamiast je rozpraszać, więc `11pt` lub `twocolumn` jest deklarowane raz, gdzie każdy może je zobaczyć. A kiedy [niestandardowe makra](/learn/custom-commands/) przerosną kilka wierszy, przenieś je do pliku `.sty`, aby wiele dokumentów mogło mieć ten sam zestaw definicji.

Najbardziej użyteczna dyscyplina jest negatywna: jeśli nie wiesz, dlaczego znajduje się tam linia preambuły, dowiedz się, zanim Twój dokument będzie od niej zależał. Skopiowane preambuły gromadzą martwe linie, a martwe linie są miejscem, w którym ukrywają się konflikty pakietów. Zobacz także [szkielet dokumentu](/learn/document-skeleton/) i [porównanie silników](/learn/engines-compared/).