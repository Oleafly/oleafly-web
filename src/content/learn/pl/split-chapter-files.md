---

title: "Jeden plik główny, wiele rozdziałów"
description: "uwzględnij vs dane wejściowe, uwzględnij tylko i pisz po jednym rozdziale na raz."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Jeden plik główny, wiele rozdziałów

Praca nad pracą dyplomową w pojedynczym pliku .tex staje się nieprzyjemna w okolicach drugiego rozdziału: przewijanie zastępuje myślenie, a każda kompilacja wszystko przetwarza. Standardowym lekarstwem jest jeden plik główny, który przechowuje klasę i preambułę, a każdy rozdział znajduje się w osobnym pliku. Plik główny łączy je ze sobą.

## Plik główny

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` to jedyny plik, jaki kiedykolwiek skompilowałeś. Każde `\include` nazywa inny plik bez rozszerzenia `.tex`, używając ukośników na każdej platformie i pobiera jego zawartość w tym miejscu. Same pliki rozdziałów zawierają tylko treść, zazwyczaj zaczynającą się od `\chapter{...}`. Nie mają własnego środowiska `\documentclass` ani `document`, ponieważ są fragmentami tego dokumentu, a nie dokumentami.

## uwzględnij a dane wejściowe

Obydwa polecenia dołączania zachowują się inaczej i różnice decydują, którego i gdzie użyć. `\include` rozpoczyna nową stronę przed materiałem, który pasuje do rozdziałów i zapisuje oddzielny plik `.aux` dla każdego dołączonego pliku, co umożliwia selektywną kompilację. `\input` to zwykła wklejka tekstowa: bez podziału strony, bez oddzielnego `.aux` i może być zagnieżdżona w innym wejściu. To sprawia, że ​​`\input` jest właściwym narzędziem w przypadku fragmentów mniejszych niż rozdział, takich jak duża tabela przechowywana w osobnym pliku lub współdzielony [plik makr](/learn/custom-commands/). Jedną z zasad strukturalnych, o których należy pamiętać, jest to, że `\include` nie może być zagnieżdżone w dołączonym pliku, podczas gdy `\input` może być użyte w dowolnym miejscu.

## Pisanie jednego rozdziału na raz

```latex
\includeonly{chapters/methods}
```

Umieszczone w preambule polecenie `\includeonly` mówi LaTeXowi, aby przetwarzał tylko wymienione pliki, jednocześnie czytając zapisane dane `.aux` wszystkich pozostałych. Kompilacja przebiega znacznie szybciej, a ponieważ etykiety i liczniki stron pozostałych rozdziałów są odtwarzane z plików `.aux`, odsyłacze i numeracja w pisanym rozdziale pozostają prawidłowe. Ta druga połowa jest powodem, dla którego wolimy to niż komentowanie linii `\include', co całkowicie zapomina o pozostałych rozdziałach i zamienia każde `\ref` w nie na `??`.

W przypadku pełnych kompilacji skomentuj linię `\includeonly` i zawsze uruchamiaj pełną kompilację przed udostępnieniem pliku PDF, ponieważ nieaktualne dane `.aux` mogą być opóźnione w stosunku do zmian wprowadzonych w wykluczonych rozdziałach. Aby dowiedzieć się, które pliki w powstałym folderze są Twoje i które zostały wygenerowane, zobacz [pliki w prawdziwym projekcie](/learn/latex-file-types/).