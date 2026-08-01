---

title: "Diagramy przemienne"
description: "Strzałki i etykiety tikz-cd bez zupy współrzędnych."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Diagramy przemienne

Diagram przemienny to siatka obiektów połączonych oznaczonymi strzałkami, standardowy obraz w teorii kategorii, algebrze i topologii. Raw TikZ może go narysować, ale umieszczanie każdego węzła według współrzędnych jest powolne i kruche. Pakiet `tikz-cd` otacza TikZ składnią przypominającą macierz: układasz obiekty jak tabelę i opisujesz każdą strzałkę według jej kierunku.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Czytanie składni

Siatka działa jak macierz: „&” oddziela kolumny, a „\\” oddziela wiersze, więc na tym diagramie A i B znajdują się w górnym rzędzie, a C i D na dole. Każda `\strzałka[...]` należy do komórki, w której jest zapisana i wskazuje na nią. Pierwszą opcją jest kierunek, pisany za pomocą liter `r`, `l`, `u` i `d`: `\arrow[r]` przesuwa się o jedną komórkę w prawo, `\arrow[d]` o jedną komórkę w dół. Litery łączą się i powtarzają dla przekątnych i dłuższych odcinków, więc „rd” oznacza jeden stopień w dół w prawo, a „rr” obejmuje dwie kolumny.

Etykieta w cudzysłowie wskazuje strzałkę. Domyślnie znajduje się po jednej stronie; liczba pierwsza po cudzysłowie zamykającym, jak w przypadku „g”, odwraca ją na drugą stronę. W tym przykładzie liczby pierwsze utrzymują wszystkie cztery etykiety na zewnątrz kwadratu, co jest zwykle czystym układem.

## Więcej opcji strzałek

Dalsze opcje układają się po kierunku i etykiecie, aby zmienić styl strzałki. „hak” zagina ogon w strzałkę inkluzyjną, „dwie głowy” podwaja główkę w celu uzyskania surjekcji, „przerywana” oznacza mapę, którą potwierdzasz, a nie zakładasz, a „Strzałka w prawo” tworzy strzałkę z podwójnym trzonkiem używaną do naturalnych transformacji. Typowa strzałka właściwości uniwersalnej brzmi `\arrow[rd, przerywana, "\istnieje u"']`. Kiedy diagram wydaje się ciasny, pomocne są opcje odstępów w środowisku, na przykład `\begin{tikzcd}[kolumna sep=large]`.

## Uwagi praktyczne

`tikz-cd` ładuje sam TikZ, więc nie jest potrzebna osobna linia `\usepackage{tikz}`, a diagramy kompilują się przy użyciu standardowego silnika i bez zewnętrznego narzędzia do rysowania. Najczęstszym błędem konstrukcyjnym jest nierówna siatka: wiersze z różną liczbą separatorów „&” przesuwają obiekty do niewłaściwych kolumn, a strzałki lądują w dziwnych miejscach. Zacznij od kwadratu roboczego, takiego jak ten powyżej, powiększaj go o jeden wiersz lub kolumnę na raz i w miarę upływu czasu ponownie kompiluj. Diagramy są znacznie łatwiejsze do debugowania wzrokowo niż ze źródła, a [plac zabaw na żywo](/live/) informuje o tym podczas pisania.