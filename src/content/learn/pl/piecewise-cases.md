---

title: "Definicje fragmentaryczne"
description: "Środowisko przypadków dla warunków w ramach jednej funkcji."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Definicje fragmentaryczne

Funkcja fragmentaryczna udostępnia różne formuły w różnych częściach swojej dziedziny: wartość bezwzględna, aktywacja ReLU, harmonogram przedziału podatkowego. Konwencja składu to pojedynczy, wysoki lewy nawias klamrowy z jednym wierszem na przypadek, przy czym każdy wiersz przedstawia formułę i warunek, w którym ma ona zastosowanie. Pakiet `amsmath` udostępnia środowisko `cases`, które tworzy dokładnie taki układ bez konieczności ręcznego doboru nawiasów klamrowych.

## Środowisko przypadków

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Czytanie wiersz po wierszu: całość znajduje się w `\[ ... \]`, więc jest to matematyka wyświetlana w osobnej linii. `f(x) =` to zwykła matematyka, a następnie `\begin{cases}` otwiera fragmentaryczny blok. Wewnątrz każdego wiersza znajdują się dwie kolumny oddzielone znakiem „&”: po lewej stronie formuła, po prawej warunek. Wiersze kończą się znakiem „\\”, z tą różnicą, że ostatni wiersz go nie potrzebuje. Podczas kompilacji LaTeX rysuje lewy nawias klamrowy na tyle wysoki, aby obejmował oba wiersze i wyrównuje formuły w jednej kolumnie, a warunki w drugiej.

Znak „&” robi tutaj naprawdę dobrą robotę. Bez tego każdy wiersz byłby pojedynczą kroplą, a warunki nie byłyby ułożone pionowo. Dzięki temu `x^2` i `-x` dzielą lewą krawędź, a `x \ge 0` i `x < 0` mają wspólną lewą krawędź, co sprawia, że ​​definicję można skanować.

Aby to się skompilowało, muszą być spełnione dwie rzeczy. Po pierwsze, `\usepackage{amsmath}` w preambule, ponieważ `cases` nie jest częścią rdzenia LaTeX-a. Po drugie, środowisko musi znajdować się w trybie matematycznym. `cases` tworzy treść matematyczną, ale nie otwiera samodzielnie trybu matematycznego. Jeśli któregoś z nich brakuje, zostanie wyświetlony komunikat „Niezdefiniowane przypadki środowiskowe” lub „Wstawiono brakujące $”. To drugie wyjaśniono w [Wstawiono brakujący dolar](/learn/missing-dolar/).

## Dodawanie słów

Większość publikowanych fragmentarycznie definicji zawiera słowo „jeśli” i często końcowe „w przeciwnym razie”. Ponieważ kolumna warunku działa w trybie matematycznym, zwykłe słowa wymagają `\text{...}`, aby były zapisane czcionką dokumentu z odpowiednimi odstępami:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Zwróć uwagę na spację wewnątrz `\text{if }`. Tryb matematyczny ignoruje wpisywane spacje, ale spacje wewnątrz `\text` są rzeczywiste, więc umieszczenie ich przed nawiasem zamykającym oddziela „if” od następującego po nim warunku.

## Warianty i częsty błąd

Jeśli formuły są długimi ułamkami i wyglądają na ciasne, pakiet `mathtools` oferuje `dcases`, zamiennik, który ustawia każdą formułę w stylu wyświetlania. Istnieją również „przypadki” dla sytuacji lustrzanego odbicia, w których orteza znajduje się po prawej stronie.

Najczęstszym błędem jest zapominanie o `\\` pomiędzy wierszami, co powoduje ciche łączenie dwóch przypadków w jedną długą linię. Jeśli skompilowane dane wyjściowe pokazują warunki przechodzące w formuły, najpierw policz podziały wierszy. Możesz eksperymentować ze środowiskiem na żywo na [placu zabaw](/live/).