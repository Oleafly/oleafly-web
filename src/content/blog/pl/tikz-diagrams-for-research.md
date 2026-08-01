---

title: "Diagramy badawcze w TikZ, gdy PowerPoint tego nie wytnie"
description: "Kiedy rysować potoki, automaty i diagramy przemienne w TeX-ie, aby zmienić kolor na potrzeby czasopisma, zachować ostrość w druku i żyć jako źródło w repozytorium."
date: 2026-07-08
tags: [tikz, figures, research]
---

Diagramy programu PowerPoint w pliku PDF stają się rozmytymi prostokątami. Diagramy TikZ pozostają
wektor, dopasuj czcionki dokumentu i pokoloruj ponownie, gdy czasopismo wymaga skali szarości
albo inny akcent. Handel jest bardziej stromy w pierwszej godzinie. Potem mały
zmiany dotyczą różnic tekstowych, a nie archeologii zrzutów ekranu.

Nie potrzebujesz TikZ dla każdej figury. Fotografie, surowe ramy mikroskopów i
gęste wykresy z matplotlib zwykle pozostają w formacie PDF/PNG. Użyj TikZ, gdy
figura to struktura: rurociągi, automaty, skrzynki architektury, diagramy kategorii,
proste drzewa.

## Zacznij od małego

Potok z trzema węzłami uczy modelu:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Nazwij węzły. Połącz za pomocą `--` lub wyraźnych kotwic (`(a.east)`). Wolę krewnego
umieszczenie („prawo=a”) nad magicznymi współrzędnymi, których nigdy nie będziesz pamiętać.
Lekcje: [pierwsze zdjęcie TikZ](/learn/tikz-intro/),
[węzły i strzałki](/learn/tikz-nodes-arrows/).

## Style przewyższają jednorazowe opcje

Zdefiniuj style raz, aby każde pole pasowało:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Kiedy dziennik prosi o grubsze linie lub monochromatyczne, zmień styl, a nie
dwadzieścia węzłów. Koloruj nazwanymi kolorami lub małym makrem palety, aby móc je zamieniać
akcenty bez kodów szesnastkowych.

## CS i inżynieria: pasujące schematy blokowe

Użyj biblioteki `pozycjonowania` (`below=of`, `right=of`), aby pola dzieliły siatkę.
Ręczne współrzędne bezwzględne to sposób, w jaki diagramy gniją po wstawieniu jednego węzła. Zachowaj
tekst krótki; umieść szczegóły w tytule. Przewodnik:
[wyrównane schematy blokowe](/learn/tikz-flowchart/).

W przypadku szkiców sieci neuronowych lub systemów należy oddzielić „bloki” od „adnotacji”.
Adnotacje mogą składać się z mniejszych węzłów czcionki bez obramowań, dzięki czemu główna ścieżka pozostaje niezmieniona
czytelny przy szerokości dwóch kolumn.

## Matematyka i teoria: diagramy przemienne

`tikz-cd` to zwykła ścieżka do diagramów w stylu kategorii bez umieszczania każdego
węzeł ręcznie:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Przewodnik: [diagramy przemienne](/learn/diagramy przemienne/). Dla drzew i
istnieją diagramy dowodowo-teoretyczne, istnieją wyspecjalizowane biblioteki; zacznij od prostych rzeczy przed tobą
importuj połowę CTAN.

## Eksternalizacja i kompilacja czasu

Artykuł zawierający dwadzieścia figurek TikZ spowolni pełne kompilacje. Opcje:

- Umieść każdą figurę w osobnym pliku i `\wprowadź` ją.
- Użyj „zewnętrznej” biblioteki, aby obrazy stały się buforowanymi plikami PDF.
- Wersja robocza z `\tikzexternaldisable`, gdy interesuje Cię tylko proza.

Eksport do slajdów: skompiluj „samodzielny” dokument TikZ do formatu PDF, przekonwertuj do formatu PNG
tylko wtedy, gdy narzędzie pokładowe nie może pobrać pliku PDF. Zachowaj plik .tex jako źródło prawdy.

## Narzędzia canvas a ręcznie napisany TikZ

Niektóre edytory badań zawierają płótno diagramu, które emituje edytowalny TikZ (dla
przykład Diagram Composer firmy Oleafly: rysuj, poprawiaj kod, kompiluj rysunek,
wstaw). Jest to przydatne w przypadku geometrii, którą można przeciągać. Ręcznie pisany TikZ wciąż wygrywa
dla ciasnych diagramów przemiennych i wysoce regularnych siatek. Tak czy inaczej, zatwierdź
Źródło TikZ, nie tylko PNG.

## Zachowaj diagramy w repozytorium

Przechowuj źródła rysunków obok papieru:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Kiedy dziennik chce grubszych linii, edytujesz źródło i rekompilujesz. Kiedy A
współautor „poprawia” zrzut ekranu w narzędziu slajdu, straciłeś jedyny
wersja edytowalna.

## Typowe tryby awarii

Przepełnienie w dwóch kolumnach jest powszechne. Skaluj za pomocą `\resizebox` w ostateczności;
najpierw przeprojektuj pod kątem szerokości. Niedopasowanie czcionki to kolejna kwestia: preferuj dokument domyślny
czcionki zamiast zakodowanych na stałe rodzin czcionek w TikZ, chyba że czasopismo tego wymaga.
Sprawdź kontrast do rozmów, bo niewidoczna szarość na projektorach to klasyka
pułapka. A nieopisane strzałki zmuszają podpis do wyjaśnienia każdej krawędzi, co oznacza
schemat jest niekompletny.

## Warstwy i nakładki

W przypadku wykładów i artykułów, które mają wspólny rysunek, zbuduj diagram warstwami: podstawa
najpierw pola, potem strzałki, a na koniec etykiety. Skomentuj warstwy podczas debugowania
umiejscowienie. Nakładki Beamera (`\pause`, `\onslide`) mogą ujawnić krok potoku
krok z tego samego źródła TikZ, jeśli nazwy węzłów będą stabilne.

## Dostępność i drukowanie

Nie koduj znaczenia tylko w kolorze czerwonym i zielonym. Użyj także stylu kształtu lub linii.
Sprawdź rysunek w skali szarości. Podpisy powinny nadal mieć sens, jeśli czytelnik taki jest
dla osób niewidomych na kolory lub drukujących na czarno-białej drukarce laboratoryjnej.

## Przepływ pracy, który działa

Szkicuj na papierze przez trzydzieści sekund, a następnie zbuduj najmniejszy TikZ, który pokazuje
twierdzić. Zdefiniuj style raz i używaj ich ponownie. Kompiluj samą figurę, aż do skutku
wygląda dobrze, wrzuć to do gazety i pozwól, aby podpis zawierał tę tezę. Popełnij
plik .tex.

PowerPoint nadaje się na jednorazowe spotkanie laboratoryjne. W przypadku pliku PDF dziennik zostanie wydrukowany,
źródło wektora, które możesz ponownie pokolorować, pokonuje kolejną rundę „czy możesz wysłać plik edytowalny
plik?”