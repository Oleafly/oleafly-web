---

title: "Studenci matematyki: twierdzenia, dowody i zapis, który pozostaje spójny"
description: "style amsthm, numeracja lematów, higiena makr, długie wyprowadzenia i nawyki wieloplikowe w przypadku zapisów z matematyki czystej i stosowanej."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Prace matematyczne składają się z notacji i struktury dowodowej. LaTeX jest domyślny, ponieważ oba
staje się bolesne w programie Word, gdy argument trwa dłużej niż strona. Kompilator jest
nie ta trudna część. Spójność to: numery twierdzeń, które przeskakują po wstawieniu a
lemat, litera „V”, która oznacza trzy różne rzeczy i dowody, które opuszczają
Znak QED pływający w następnej linii.

Jest to praktyczna konfiguracja do zajęć, notatek arXiv i rozdziałów pracy dyplomowej.
Ukradnij to, czego potrzebujesz; ignoruj ​​resztę, aż zacznie boleć.

## amsthm wcześnie, przed pierwszym lematem

Załaduj `amsthm`, zanim wymyślisz ad hoc pogrubione „Twierdzenie”. nagłówki:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Numerowanie według sekcji zapewnia stabilność odniesień po wstawieniu materiału powyżej a
wynik. Wspólne liczniki („[twierdzenie]”) dla lematów i twierdzeń są powszechne
w czystej matematyce; dokumenty stosowane czasami numerują wszystko niezależnie. Wybierz jeden
i trzymaj się go przez cały dokument.

Lekcja: [bloki twierdzeń i dowodów](/learn/theorems-proofs/).

## Dowody, które kończą się czysto

Użyj środowiska „proof”, aby znacznik końca testu znalazł się we właściwym miejscu:

```latex
\begin{proof}
  ...
\end{proof}
```

Jeśli ostatnia linia jest wyświetlanym równaniem, zakończ znakiem `\qedhere`, aby tak było w ramce
nie sierota w następnym wierszu. Dowody zagnieżdżone (twierdzenie wewnątrz dowodu) działają
lepsze jako środowiska „twierdzące” z własnymi krótkimi dowodami niż wcięte
proza, która nigdy się nie kończy.

W przypadku zadań domowych, w których instruktor chce ręcznie zaznaczonych kroków, nadal używaj LaTeX-a
czysty plik PDF do przesłania, ale szczegółowe prace zapisz w osobnym pliku notatek, aby to zrobić
nie usuwaj jedynej poprawnej linii podczas przepisywania.

## Higiena makro

Zdefiniuj symbole raz:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Jeśli dwa pojęcia mają tę samą literę, należy je ujednoznacznić za pomocą makr (`\VectSpace` vs
`\RandomVar`) zamiast ponownego użycia `V` z różnymi czcionkami. Współautorzy tego nie zrobią
zgadnij, która czcionka oznacza który obiekt. Kiedy arkusz notatek wyrasta poza ekran,
umieść go w `notation.tex` i `\input`, aby wszyscy edytowali jeden plik.

Narzędzia AI uwielbiają wymyślać nowe symbole. Jeśli go używasz, wklej do niego blok makro
monit i zażądaj, aby używał tylko zdefiniowanych nazw. Obowiązuje ta sama dyscyplina
bez AI: nowy symbol → dodaj do arkusza → następnie wpisz.

## Wyrównaj dla długich wyprowadzeń

„align” i „split” zapewniają czytelność obliczeń wieloliniowych. Linie numeryczne dotyczą tylko Ciebie
będzie cytować z `\eqref`. Ściana ponumerowanych równań jest trudniejsza do przestrzegania niż a
krótka narracja z dwoma oznakowanymi linijkami.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

W przypadku pojedynczego równania wielowierszowego, które powinno zawierać jedną liczbę, użyj opcji „split”.
wewnątrz „równania”. W przypadku przypadków „przypadki” lub „wyrównane” zastępują samodzielnie wykonaną tablicę
rury.

## Odsyłacze, które przetrwają zmianę kolejności

Nigdy nie pisz „według Twierdzenia 2.3” jako czystego tekstu. Użyj `\ref` lub, z `cleveref`,
`\cref{thm:main}`. Etykiety znajdują się po podpisie lub wierszu tytułu twierdzenia, a nie
wcześniej. Jeśli dwa rozdziały mają takie same etykiety, jak „thm:main”, należy je poprzedzić rozdziałem
(`ch3-thm:main`) lub podczas łączenia plików otrzymasz ciche, niewłaściwe cele.

Pomocne jest przejście do definicji w całym projekcie i sprawdzanie uszkodzonych referencji na żywo w przypadku wielu plików
tezy. To teraz normalne terytorium redaktorów naukowych, a nie luksus.

## Notatki i tezy składające się z wielu plików

Nawet długi zestaw zadań domowych jest łatwiejszy dzięki plikowi głównemu i wkładom sekcji. Tezy
prawie zawsze chcę dodać „\include” do każdego rozdziału i „\includeonly” podczas tworzenia wersji roboczej
rozdział na raz. Trzymaj cyfry pod `figures/ch3/`, aby zmienić kolejność rozdziałów
nie burzyć ścieżek.

Kompilacja pełnej pracy dyplomowej przebiega powoli. Tryb szkicowania postaci, uzewnętrzniaj ciężki TikZ i
kiedy tylko możesz, skompiluj tylko ten rozdział, który edytujesz. Zobacz
[podzielone pliki rozdziałów](/learn/split-chapter-files/) i
[przyspiesz kompilację](/dowiedz się/przyspiesz-kompilację/).

## Gdy plik PDF jest przekazywany

Zajęcia nadal wymagają nudnej powłoki: marginesy zgodnie z programem nauczania, numery stron,
tytuł naukowy, a czasami oświadczenie o rzetelności akademickiej. The
[krótka instrukcja](/learn/cheatsheet/) omawia ten temat, dzięki czemu możesz poświęcić mu uwagę
dowód.

Zachowaj źródło. Zaznaczony plik PDF bez `.tex` to ślepy zaułek, gdy pojawia się kolejny problem
set ponownie wykorzystuje tę samą preambułę. Folder lokalny z historią Git (lub plikiem research
edytor, który kompiluje dla Ciebie punkty kontrolne) przewyższa `final_v3_really.pdf` w pliku
pulpit.

## Zanim prześlesz

Upewnij się, że twierdzenia i lematy mają spójny schemat numeracji, każdy symbol w nich
treść jest zdefiniowana w arkuszu makra, a dowody wykorzystują `dowód` / `\qedtutaj`
gdzie potrzeba. Numeruj tylko równania, które cytujesz. Wszystkie odnośniki powinny być
`\ref`/`\cref`, a nie liczby zakodowane na stałe. Otwórz plik PDF raz: osadzanie czcionek, marginesy
dopasować do briefu.

## Praca domowa a papier

W przypadku zadań domowych przejrzystość przewyższa pomysłowość opakowania. W przypadku rozdziału pracy magisterskiej lub pracy dyplomowej
zainwestuj raz w konfigurację twierdzenia i arkusz makr, a następnie użyj ich ponownie. Nie odbudowuj
numeracja w połowie projektu, ponieważ post na blogu sugerował inny styl.

## Udostępnianie współautorom

Wyślij plik PDF do przeczytania i repozytorium (lub zip ze źródłami) do edycji. Jeśli
współautor zwraca tylko zeskanowane znaczniki, stosuje je tego samego dnia i zatwierdza. Nieświeży
stosy papieru to sposób, w jaki dwie osoby „rozwiązują” ten sam lemat w różny sposób.

Po tej pracy konfiguracyjnej LaTeX w większości znika i możesz pomyśleć o matematyce.