---

title: "Makra, które zapewniają uczciwość zapisu"
description: "newcommand, NewDocumentCommand, udostępniony plik makr."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Makra, które zapewniają uczciwość zapisu

W każdej pracy występuje powtarzający się zapis: liczby rzeczywiste, operator oczekiwań, wartość bezwzględna ze słupkami o odpowiedniej wielkości. Jeśli wpiszesz `\mathbb{R}` w czterdziestu miejscach, a Twój doradca później wybierze `\mathbf{R}`, będziesz miał czterdzieści zmian do wprowadzenia i jedną pominiesz. Makro zamienia tę notację w jedno nazwane polecenie, zdefiniowane raz. Zmień definicję, a cały dokument będzie następujący. W ten sposób zachowuje się uczciwość zapisu: źródło nie może utracić synchronizacji ze sobą.

## Definiowanie poleceń za pomocą nowego polecenia

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

Pierwsza definicja jest najprostsza: `\R` jest teraz czystym skrótem i wpisanie `\R` gdziekolwiek daje `\mathbb{R}`.

Druga forma przyjmuje argument. Znak „[1]” po nazwie deklaruje, że „\E” akceptuje jeden argument, a „#1” oznacza miejsce, w którym ten argument ląduje w rozwinięciu. Zatem `\E{X}` staje się `\mathbb{E}\left[X\right]`. Definicja pozwala na więcej niż tylko zwięzłość: para `\left[` i `\right]` powoduje, że nawiasy powiększają się, dopasowując się do zawartości, więc `\E{\frac{X}{n}}` automatycznie otrzymuje wysokie nawiasy. Makro `\abs` robi to samo z `\lvert` i `\rvert`, poprawną parą pionowych kresek oznaczających wartość bezwzględną. Można zadeklarować maksymalnie dziewięć argumentów i odnosić się do nich jako od „#1” do „#9”.

Jeśli polecenie już istnieje, `\nowe polecenie` odmawia jego przedefiniowania i kończy się wyświetlaniem błędu, który chroni Cię przed cichym złamaniem czegoś. Aby celowo zastąpić istniejące polecenie, użyj zamiast niego `\renewcommand`.

## Nowoczesny interfejs

Obecny LaTeX zawiera również bogatsze polecenie definicji:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` używa ciągu znaków specyfikacji argumentu zamiast liczby. Tutaj `mm` oznacza dwa obowiązkowe argumenty, więc `\citepair{knuth84}{lamport94}` cytuje oba klucze. Język specyfikacji idzie dalej niż `\newcommand`: `o` deklaruje opcjonalny argument w nawiasach kwadratowych, `s` wykrywa wariant gwiazdki, a `O{default}` nadaje opcjonalnemu argumentowi wartość domyślną. Jeśli szukasz czegoś więcej niż proste podstawienie, sięgnij po ten interfejs.

## Podziel się definicjami

Zachowaj plik „macros.sty” współdzielony między rozdziałami. Umieść swoje definicje w tym jednym pliku, załaduj go `\usepackage{macros}` z każdego dokumentu, a każdy rozdział pracy dyplomowej, a także slajdy i wersja papierowa, wszystkie są zgodne w notacji. Kiedy współpracownik dołącza, czyta jeden krótki plik, aby poznać Twoje konwencje, zamiast odtwarzać je na podstawie tekstu. To naturalnie łączy się z [konfiguracją wielu plików](/learn/split-chapter-files/).

Wskazówka dotycząca nazewnictwa: nadawaj makrom znaczące nazwy, takie jak `\abs` lub `\norm`, a nie nazwy oparte na wyglądzie, takie jak `\bigbars`. Nazwa powinna informować, co oznacza zapis, tak aby definicja mogła dowolnie zmieniać jej wygląd. I powstrzymaj się od definiowania makra dla czegoś, czego używasz dwa razy; wypłata zaczyna się około trzeciego użycia.