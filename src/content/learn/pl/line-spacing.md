---

title: "Pojedyncze, pół, podwójne"
description: "setspace dla całego dokumentu lub bloku lokalnego."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Pojedynczy, pół, podwójny

Domyślnie LaTeX ustawia tekst z pojedynczym odstępem, a odległość między wierszami jest dostosowana do czcionki. Tak wygląda gotowa książka, ale wiele dokumentów musi być luźniejszych: regulamin prac dyplomowych często wymaga półtora lub podwójnego odstępu, a czasopisma wymagają stosowania rękopisów z podwójnymi odstępami, aby recenzenci mieli miejsce na bazgroły. Zmień odstępy między wierszami za pomocą pakietu `setspace`. Dostosowuje tekst podstawowy bez przerywania części dokumentu, które powinny zachować pojedynczy odstęp.

## Odstępy w całym dokumencie

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Załaduj pakiet w preambule, a następnie wydaj jedną z trzech deklaracji. `\onehalfspacing` ustawia odstęp w całym dokumencie na półtora wiersza, `\doublespacing` podwaja go, a `\singlespacing` powraca do normalnego stanu, co jest przydatne, jeśli w połowie trzeba się przełączyć. Deklaracje zaczynają obowiązywać od miejsca, w którym się pojawiają, więc umieszczenie ich w preambule obejmuje wszystko.

Powodem, dla którego warto używać setspace, zamiast bawić się ręcznie przy `\baselinestretch` lub `\linespread`, jest to, co celowo pozostawia w spokoju: przypisy, podpisy rysunków i tabel oraz elementy zmiennoprzecinkowe pozostają z pojedynczymi odstępami, czego dokładnie oczekują wytyczne pracy i konwencja typograficzna. Naiwne globalne rozciągnięcie spowodowałoby również podwójne odstępy w przypisach, a to źle się czyta.

Jeśli potrzebujesz współczynnika, którego skróty nie obejmują, `\setstretch{1.25}` akceptuje dowolny mnożnik. Zauważ, że „podwójne odstępy” w sensie edytora tekstu odpowiadają rozciągnięciu około 1,66 w języku LaTeX, a „\podwójne odstępy” już to uwzględniają, więc powstrzymaj się od pisania „\setstretch{2}”, chyba że przepisy dosłownie tego wymagają.

## Odstępy tylko dla jednego bloku

Czasami tylko część dokumentu wymaga innego odstępu: długi cytat, strona z oświadczeniem lub streszczenie, które musi być rozmieszczone podwójnie, a reszta nie.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

Środowisko `spacing` stosuje podany współczynnik rozciągnięcia, tutaj 1,2, tylko do tekstu pomiędzy `\begin` i `\end`, a następnie przywraca to, co obowiązywało wcześniej. Pakiet udostępnia także gotowe środowiska typu „singlespace” i „doublespace” dla typowych przypadków. Ponieważ zakres zmiany zależy od środowiska, nie można zapomnieć o przełączeniu się z powrotem, co jest typowym trybem niepowodzenia polegającym na wystawianiu samych deklaracji w połowie dokumentu.

## Słowo ostrzeżenia

Nie używaj odstępów między wierszami, aby uzyskać liczbę stron. Rozciąganie do wersji 1.1 w celu wydłużenia wyglądu papieru to najstarsza sztuczka w książce, a miejsca o rygorystycznym formatowaniu przeprowadzają automatyczne kontrole, które wyłapują ten błąd. [Przewodnik po limitach stron](/learn/page-limits-without-crimes/) opisuje legalne alternatywy. Zapisz ustawioną przestrzeń do celów, do których jest przeznaczona: spełnienia wyraźnych wymagań dotyczących odstępów, a następnie przełącz się z powrotem na pojedyncze odstępy w wersji przystosowanej do kamery.