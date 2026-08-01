---

title: "Samodzielny TikZ do formatu PDF lub PNG"
description: "samodzielna klasa i udostępnianie pamięci podręcznych na zewnątrz."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Samodzielny TikZ do formatu PDF lub PNG

Obraz TikZ zwykle znajduje się w papierze, ale często potrzebujesz diagramu jako własnego pliku: aby użyć go ponownie na slajdzie, przekazać współautorowi pracującemu w programie Word, przesłać go tam, gdzie wymagany jest plik PNG lub po prostu uniknąć ponownej kompilacji kosztownego rysunku przy każdej kompilacji dokumentu. Do tego właśnie służy „samodzielna” klasa dokumentów. Składa jedno zdjęcie na stronie przycięte do rozmiaru obrazu:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Do czego służą opcje klas

Opcja `tikz` ładuje pakiet TikZ i informuje `standalone`, aby ściśle przyciął stronę wyjściową wokół `tikzpicture`, tak aby wynikowy plik PDF był dokładnie tak duży jak rysunek, bez marginesów strony. Opcja „border=2pt” dodaje dwupunktową poduszkę ze wszystkich stron, co zapobiega obcinaniu pociągnięć dokładnie na obwiedni przez przeglądających lub drukarek. Skompiluj ten plik jak każdy dokument, a wynikiem będzie mały, mocno przycięty plik PDF zawierający tylko diagram.

Wolę ten plik PDF, ponieważ jest wektorowy: skaluje się do dowolnego rozmiaru bez rozmycia. Upuszczenie go do innego dokumentu za pomocą `\includegraphics` działa zgodnie z opisem w [strona PDF jako grafika](/learn/include-pdf-as-figure/). Jeśli naprawdę wymagana jest kopia rastrowa, skonwertuj skompilowany plik PDF, zamiast odtwarzać rysunek. Narzędzia wiersza poleceń, takie jak `pdftoppm -png -r 300 figure.pdf figure` tworzą plik PNG o rozdzielczości 300 dpi, a `pdf2svg` lub Inkscape tworzą plik SVG. Eksportuj w rozdzielczości 300 dpi lub większej, jeśli plik PNG zostanie wydrukowany.

## Buforowanie obrazów przy użyciu metody externalize

W dużym dokumencie obrazy TikZ są przerysowywane przy każdej kompilacji, a kilka skomplikowanych wątków może zdominować czas kompilacji. Biblioteka „zewnętrzna” rozwiązuje ten problem, kompilując raz każdy obraz do własnego pliku PDF, a następnie ponownie wykorzystując plik z pamięci podręcznej, aż do zmiany kodu obrazu:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

Opcja `prefix` przechowuje wygenerowane pliki w ich własnym folderze. Eksternalizacja uruchamia kompilator w trybie, który powoduje powstawanie podkompilacji, więc wymaga włączonej funkcji ucieczki powłoki i słabo współdziała z niektórymi konfiguracjami. Jeśli będzie z tobą walczyć, przenieś każdy duży obraz do osobnego, „samodzielnego” pliku i dołącz skompilowane pliki PDF. Daje to takie samo buforowanie ręczne, przy mniejszej liczbie maszyn. Ogólnie czasy kompilacji są ujęte w [krótszym oczekiwaniu na plik PDF](/learn/speed-up-compilation/).

Jeden powszechny błąd zasługuje na ostrzeżenie: nie rób zrzutów ekranu wyrenderowanego diagramu, aby uzyskać plik PNG. Zrzuty ekranu rejestrują rozdzielczość ekranu, która wygląda akceptowalnie na podglądzie slajdu i jest niewyraźna wszędzie indziej. Konwertuj z pliku PDF, gdzie możesz wybrać rozdzielczość.