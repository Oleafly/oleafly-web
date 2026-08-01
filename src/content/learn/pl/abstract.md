---

title: "Blok abstrakcyjny"
description: "rozmieszczenie abstrakcyjnego środowiska dla zajęć z artykułów i czasopism."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Blok abstrakcyjny

Streszczenie to krótkie podsumowanie, które znajduje się pomiędzy tytułem a pierwszą sekcją. Prawie każde miejsce tego wymaga. LaTeX zapewnia mu dedykowane środowisko, zamiast pozwalać ci na sfałszowanie go za pomocą pogrubionego nagłówka. Klasa musi wiedzieć, który tekst jest streszczeniem, aby klasy dziennika mogły go napisać w odrębnym stylu (często mniejszym i z wcięciem), a systemy przesyłania mogły go automatycznie wyodrębnić.

## Środowisko

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Wszystko pomiędzy `\begin{abstract}` i `\end{abstract}` staje się blokiem abstrakcyjnym. W standardowej klasie „artykuł” pojawia się jako akapit z zawężonym nagłówkiem pod tytułem. Napisz w nim zwykłą prozę. Wbudowana matematyka jest w porządku, ale pomiń wszystko, co jest ciężkie: żadnych cytatów, jeśli miejsce ich zabrania, żadnych przypisów, żadnych niezdefiniowanych akronimów. Streszczenia często pojawiają się samodzielnie w bazach danych i wynikach wyszukiwania, z dala od reszty artykułu.

## Dokąd to zmierza

Umieść po `\maketitle` (lub zgodnie z wymogami klasy dziennika). Zwykle kolejność na górze artykułu to `\maketitle`, następnie streszczenie i na końcu `\section{Wprowadzenie}`. Środowisko musi znajdować się po `\begin{document}`, ponieważ generuje dane wyjściowe; umieszczenie go w preambule jest błędem kompilacji.

Zajęcia dziennikarskie i konferencyjne często zmieniają tę umowę, a ich szablony wygrywają z domyślnymi. Niektóre klasy, w tym kilka wariantów ACM i IEEE, wymagają deklaracji zadeklarowanej przed `\maketitle`, aby móc umieścić ją we własnym układzie tytułu. Inne całkowicie zastępują środowisko poleceniem takim jak `\abstract{...}`. Praktyczna zasada: jeśli używasz szablonu miejsca, umieść streszczenie tam, gdzie umieszcza je przykładowy plik szablonu i nie walcz z klasą. [Lekcja bloków tytułowych](/learn/title-page/) omawia maszynerię `\maketitle`, na której się zawiesza.

## Zajęcia bez streszczenia

Klasa „książka” nie definiuje w ogóle abstrakcyjnego środowiska, opierając się na teorii, że książki mają zamiast tego przedmowy. Jeśli potrzebujesz takiego w pracy magisterskiej w stylu raportu, klasa `report` obsługuje tę funkcję lub możesz ustawić wyśrodkowany, nienumerowany nagłówek, po którym następuje normalny akapit, co naprawdę robi środowisko.

Jeden częsty błąd: pozostawienie pustej linii pomiędzy `\maketitle` a streszczeniem jest w porządku, ale pozostawienie pustego streszczenia nie jest błędem kompilacji, więc zapomniany element zastępczy, taki jak „TODO”, jest wysyłany do recenzentów częściej, niż ktokolwiek przyznaje. Skompiluj, spójrz na pierwszą stronę pliku PDF i przeczytaj tam streszczenie przynajmniej raz przed przesłaniem. Aby dowiedzieć się, co właściwie powinno zawierać streszczenie, a nie dokąd zmierza, zobacz [jak napisać streszczenie](/learn/write-an-abstract/).