---

title: "Pakiety, które walczą ze sobą"
description: "hyperref na końcu, sprytny po, przestarzałe pary, minimalna liczba przykładów."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Pakiety, które walczą ze sobą

Pakiety LaTeX-owe mogą swobodnie definiować nawzajem swoje polecenia, a wiele z nich robi to celowo. W ten sposób „hyperref” zamienia każde odsyłacz w łącze. Oznacza to również, że dwa pakiety mogą załatać to samo polecenie z niezgodnymi założeniami, a wynik waha się od zwykłego błędu, takiego jak „Polecenie \przypis już zdefiniowany” lub „Kolizja opcji dla pakietu xcolor” do wyniku, który jest dyskretnie błędny. Konflikty prawie zawsze pojawiają się zaraz po dodaniu pakietu do wcześniej działającej preambuły, co jest jednocześnie największą wskazówką.

## Kolejność ładowania to połowa sukcesu

Wiele konfliktów rozwiązuje się wyłącznie na podstawie kolejności, ponieważ ostatnie słowo należy do załadowanego później pakietu. Najważniejsza zasada: załaduj „hyperref” pod koniec preambuły. Przepisuje duże części mechanizmu odsyłaczy LaTeX-a, a pakiety ładowane po nim mogą cofnąć te poprawki. Krótka lista wyjątków musi pojawić się jeszcze później, a tą, którą faktycznie spotkasz, jest „cleveref”, który ma znajdować się na wierzchu „hyperref” i musi zostać załadowany po nim:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Kiedy dokumentacja pakietu określa położenie względem innego pakietu, uwierz w to. Te notatki istnieją, ponieważ ktoś już natrafił na konflikt, który ty będziesz mieć.

## Przestarzałe pakiety i ich zamienniki

Niektóre konflikty wynikają z ładowania martwego pakietu obok jego następcy. Nie łącz `epsfig` z `graphicx`, `subfigure` z `subcaption` ani starych podkładek `times` i `mathptmx` z nowoczesnymi pakietami czcionek, takimi jak `newtxtext`. Stare szablony są zwykłym źródłem: ładują wszystko, co było aktualne w momencie pisania szablonu, a na górze dodajesz nowoczesny odpowiednik. Usuń przestarzały i zachowaj zamiennik. Pakiet `nag` może oznaczyć nieaktualne użycie w czasie kompilacji.

## Opcje kolidują

„Konflikt opcji dla pakietu X” oznacza, że ​​pakiet został załadowany dwukrotnie z różnymi opcjami, często raz przez klasę dokumentu za Twoimi plecami. Nie możesz załadować go ponownie z nowymi opcjami, ale możesz wprowadzić opcje, zanim ktokolwiek je załaduje: wstaw `\PassOptionsToPackage{table}{xcolor}` przed `\documentclass`, a opcje zostaną scalone z tym, co nastąpi wczytanie jako pierwsze.

## Wyodrębnij na podstawie minimalnego przykładu

Jeśli przyczyna nie jest oczywista, zbuduj minimalny działający przykład: dokument zawierający tylko `\documentclass`, dwa podejrzane pakiety i `\begin{document}...\end{document}` z jednym wierszem tekstu. Jeśli błąd się powtórzy, zmień kolejność ładowania i opcje, aż tak się stanie. Jeśli się nie odtworzy, dodaj pozostałe pakiety z powrotem na pół, aż powróci. To wyszukiwanie binarne łączy się w kilku kompilacjach i daje wyraźną parę do wyszukania. Ta sama technika ratuje odziedziczone preambuły, jak opisano w [Pliki klas uniwersyteckich, które nie zostaną skompilowane](/learn/fix-broken-template/).