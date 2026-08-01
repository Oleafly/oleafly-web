---

title: "Notacja Diraca"
description: "pakiet biustonoszy, biustonoszy i elementów matrix."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Notacja Diraca

Mechanika kwantowa zapisuje stany jako kety, ich dualności jako staniki, a produkty wewnętrzne jako pary w nawiasach. Ręczne budowanie notacji z `\lange`, `|` i `\rangle` działa, ale jest żmudne, a ograniczniki nie rosną wraz z zawartością. Pakiet `braket` udostępnia polecenia, które składają notację i dopasowują wszystko do rozmiaru.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Co robi każde polecenie

`\braket{\psi|\phi}` ustawia pełny iloczyn wewnętrzny: nawiasy kątowe na zewnątrz, pionową kreskę pomiędzy dwoma stanami, wszystkie o tej samej wysokości. Z dwoma słupkami `\braket{\psi|A|\phi}` staje się elementem macierzy operatora A pomiędzy dwoma stanami, czyli formą używaną do wartości oczekiwanych i obliczeń zaburzeń. Pakiet zawiera także `\bra{\psi}` i `\ket{\phi}` dla obu połówek. Goły ket to zwykły sposób nazywania stanu w prozie.

`\set{\vec{x}|x > 0}` to bonus z tego samego pakietu: notacja konstruktora zestawów z nawiasami klamrowymi i środkową kreską, przydatna znacznie poza fizyką.

Rozmiar jest prawdziwym powodem korzystania z opakowania. Umieść ułamek lub sumę w `\braket`, a nawiasy i słupki zostaną odpowiednio rozciągnięte. Ręcznie zbudowany `\langle ... \rangle` wymaga `\left` i `\right` na każdym ograniczniku i nadal ma tendencję do utraty proporcji.

## Alternatywy i sąsiedzi

Pakiet `physics` oferuje podobny zestaw, zawierający `\bra`, `\ket`, `\ev` dla wartości oczekiwanych i `\mel` dla elementów macierzy, a także skróty dla pochodnych i komutatorów. Obydwa pakiety definiują `\bra` i `\ket`, więc wybierz jeden dla każdego dokumentu, zamiast ładować oba. W szablonie, w którym nie można dodawać pakietów, `\lange \psi | \phi \rangle` z `\left`/`\right` wokół dużej zawartości daje ten sam wynik przy większej liczbie wpisań.

W przypadku diagramów Feynmana, które często znajdują się w tych samych dokumentach, pakiety takie jak `tikz-feynman` są kompilowane na TikZ; to osobna umiejętność rysowania, bliższa duchowi [diagramy przemienne](/learn/comutative-diagrams/) niż cokolwiek na tej stronie.

Częstym błędem jest wpisywanie `<\psi|\phi>` ze znakami kąta klawiatury. Są to relacje mniejsze i większe niż, więc LaTeX rozdziela je w celu porównania i rysuje na niewłaściwej wysokości. Prawdziwe nawiasy Diraca pochodzą z `\lange` i `\rangle` lub, lepiej, z powyższych poleceń. Różnica jest widoczna już w momencie ustawienia obu form obok siebie w [live placu zabaw](/live/).