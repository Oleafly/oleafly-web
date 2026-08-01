---

title: "Prace z chemii w LaTeX-ie: wzory, schematy i jednostki SI"
description: "Reakcje z mhchem, strukturami, tablicami doświadczalnymi, jednostkami SI, bibliografiami i prywatnymi szkicami dla studentów chemii i inżynierii chemicznej."
date: 2026-06-22
tags: [chemistry, research]
---

Chemicy zwykle pojawiają się w LaTeX-ie z jednego z dwóch powodów: czasopismo nalega,
lub współpracownik już działa w ten sposób. Tak czy inaczej wyglądają punkty bólu
znane: schematy reakcji, etykiety izotopów, tabele warunków i a
bibliografia wypełniona czasopismami i patentami.

W tym przewodniku omówiono raporty licencjackie począwszy od pierwszych zgłoszeń do czasopism. Tak będzie
nie zastępuje ChemDraw w przypadku złożonych produktów naturalnych. Będzie przechowywać rękopis
oraz część eksperymentalna z walki z kompilatorem.

## Reakcje z mhchem

„mhchem” jest typową odpowiedzią dla wzorów i reakcji:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Przypnij wersję 4, aby składnia nie dryfowała pomiędzy współautorami ani pomiędzy Overleaf
i lokalna instalacja TeX-a. Dłuższy opis przejścia:
[wzory chemiczne](/nauka/notacja-chemiczna/).

Schematy wieloetapowe z odczynnikami powyżej i poniżej strzałki wymagają więcej niż
wbudowane `\ce`. mhchem obsługuje formuły; układ często wymaga schematu dziennika
otoczenie lub postać zewnętrzna. Nie wciskaj dwudziestoetapowej syntezy całkowitej
w szereg wbudowanych linii chemicznych.

## Struktury: chemfig lub rysunki zewnętrzne

`chemfig` rysuje proste struktury w czystym TeX-ie i przechowuje wszystko
wektor-lokalny. Złożone produkty naturalne są prawie zawsze lepsze niż ChemDraw,
Marvin lub podobny, wyeksportowany do pliku PDF, a następnie „\includegraphics”. Preferuj wektorowy plik PDF
nad zrzutem ekranu PNG, aby linie łączące pozostały ostre w druku i w dwóch kolumnach
układ.

Nazwij pliki według złożonego identyfikatora (`cmpd-12.pdf`). Zachowaj edytowalne źródło ChemDraw
w archiwum laboratorium, nawet jeśli git przechowuje tylko plik PDF, który trafia do gazety.

## Sekcje eksperymentalne i długie tabele

Tabele warunków (temperatura, rozpuszczalnik, wydajność, obciążenie katalizatorem) działają dobrze
z `booktabs` i często `siunitx` dla kolumn numerycznych:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Jeśli tabela zajmuje więcej czasu niż strona, przed upływem terminu przełącz się na opcję „longtable”.
tydzień, a nie po tym, jak czasopismo narzeka na czcionki 7-punktowe. Podpis powinien mówić
co oznacza „wydajność” (izolowany, NMR, GC), aby czytelnicy nie zgadywali.

## Jednostki i fragmenty spektroskopii

Wybierz styl jednostki i trzymaj się go: `siunitx` lub ręcznie `\mathrm`, jeśli grupa
już się na to zgodził. Fragmenty NMR i HRMS w sekcjach eksperymentalnych to:
często zwykły tekst z ostrożnymi odstępami. Nie wymyślaj kruchego języka makro
w połowie pracy, chyba że laboratorium już ją udostępniło.

Raportuj znaczące liczby w taki sam sposób, w jaki robi to notatnik. LaTeX chętnie wydrukuje
fałszywa precyzja, jeśli ją wpiszesz.

## Schematy a liczby

Wiele czasopism chemicznych odróżnia schematy (reakcje) od liczb (wykresy,
ORTEP, widma). Użyj środowisk dostarczanych przez klasę dziennika (`schemat`,
`figura`), więc numeracja odpowiada produkcji. Odniesienie krzyżowe z `\ref` i stabilne
etykiety („sch:redukcja”, „fig:ortep-1”).

## Bezpieczeństwo przeciągu

Niepublikowane trasy i partnerzy przemysłowi zamieniają redaktorów działających wyłącznie w chmurze w
pytanie polityczne, a nie tylko pytanie dotyczące wygody. Zachowanie `.tex` i cyfr
bo zwykłe pliki na dysku z Gitem są nudne w użyteczny sposób.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) to lokalny
redaktor ds. badań: dołączone kompilatory, sprawdzanie referencji i cytowań w całym projekcie, offline
pisownia i gramatyka tylko w prozie (więc klucze `\ce` i cite nie są oznaczone jako
„literówki”), prawdziwe punkty kontrolne Git, opcjonalna sztuczna inteligencja, która edytuje tylko poprzez zatwierdzenie
różnice. Brak konta. Wersja robocza nie potrzebuje zewnętrznego redaktora.
Sieć służy do pakietów, wyszukiwania cytatów lub sztucznej inteligencji, jeśli je włączysz.

## Cytuj właściwą literaturę podstawową

Bibliografie chemiczne opierają się w dużej mierze na czasopismach i patentach. Eksport z Zotero
lub EndNote do pliku `.bib` ze stabilnymi kluczami, a następnie sprawdź wcześniej brakujące pola
przesłanie: [walidator BibTeX](/tools/bibtex-validator/). Puste bibliografie
prawie zawsze są błędem ścieżki lub backendu, a nie brakującymi cytatami.

Style czasopism są różne (ACS, RSC, Springer). Użyj stylu bibliograficznego the
szablon jest dostarczany z. Nie sklejaj cyfry i roku autora w jednym
preambuła.

## Współpraca

W miarę możliwości twórz sekcje według poszczególnych osób. Jedna osoba jest właścicielem `.bib`. Zgadzam się
Wersja mhchem i format eksportu struktury z góry. Kiedy kilka eksperymentalnych
sekcje rozwijają się równolegle, co tydzień kompiluj pełny plik PDF, aby zapewnić integrację
niespodzianki pojawiają się wcześnie.

## Lista kontrolna przed przesłaniem

Warto przejść ostatnie:

- przypięta wersja mhchem; formuły kompilują się bez ostrzeżeń
  ignorowanie.
- Tam, gdzie to możliwe, struktury są wektorami; identyfikatory złożone pasują do tekstu, schematów,
  i SI.
- Tabele wykorzystują styl trzech reguł; jednostki spójne; plony określone w tytule
  lub notatki.
- Numeracja schematów/rysunków odpowiada klasie dziennika.
- Zatwierdzono `.bib`; styl pasuje do szablonu.
- Wrażliwe trasy pozostają w folderze lokalnym z kontrolą dostępu zgodną z laboratorium
  polityka.

## Listy kontrolne SI i czasopism

Wiele czasopism chemicznych publikuje listy kontrolne autorów (rozdzielczość grafiki, spis treści
wielkość grafiki, złożona charakterystyka). Przejrzyj plik PDF przed rysowaniem
schematy. Zły współczynnik proporcji grafiki TOC jest głupim powodem dla administratora
odrzucenie.

## Informacje dodatkowe

SI często ma swój własny szablon lub reguły nagłówków. Zachowaj źródła SI w tym samym miejscu
repo jako główny dokument z wyraźnymi nazwami plików. Gdy dziennik wymaga pełnego
charakteryzacji, sprawdź, czy rzeczywiście każda liczba złożona w tekście głównym
pojawia się w SI.

Formatowanie chemiczne jest trudne, ponieważ obiekty są gęste. Poznaj reakcje
i tabele po prawej stronie, a część eksperymentalna brzmi jak staranna praca, a nie a
wklej z notatnika PDF.