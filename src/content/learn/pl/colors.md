---

title: "Kolor, który przetrwa wydruk"
description: "xcolor, specyfikacje HTML i używanie koloru jako sygnału, gdy czasopisma przechodzą do skali szarości."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Kolor, który przetrwa wydruk

Kolor w LaTeX-ie pochodzi z jednego pakietu, `xcolor`. Zapewnia nazwane kolory, dokładne specyfikacje kolorów, pola tła i sposób na zdefiniowanie własnej palety. Tekst podstawowy w czasopismach jest prawie zawsze czarny, więc potrzebujesz go rzadziej, niż mogłoby się wydawać. Nadal procentuje w postaci slajdów, wersji roboczych z widocznymi adnotacjami i wszystkiego, co musi pasować do palety organizacji.

## Polecenia

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` koloruje tylko tekst w drugim argumencie, używając jednej z predefiniowanych nazw xcolor; „czerwony”, „niebieski”, „szary”, „turkusowy” i kilkadziesiąt innych działają od razu po wyjęciu z pudełka. Jeśli nazwa nie jest wystarczająco precyzyjna, opcjonalny model „[HTML]” akceptuje sześciocyfrowy kod szesnastkowy, taki sam, jaki podaje projektant stron internetowych lub przewodnik stylistyczny, dzięki czemu „2563EB” dokładnie odtwarza określony kolor niebieski. Zauważ, że xcolor chce, aby cyfry szesnastkowe były wielkie i bez `#`.

`\colorbox{gray!15}{highlighted}` maluje tło za tekstem, zamiast kolorować sam tekst. Argument „gray!15” pokazuje składnię mieszania xcolor: 15 części szarości zmieszanych z 85 częściami bieli, co daje blady odcień, który można odczytać jako podkreślenie. Ta sama składnia działa wszędzie tam, gdzie oczekiwany jest kolor i można go łączyć w łańcuchy, jak w przypadku „niebieski!50!czarny” dla ciemnego błękitu.

## Zdefiniuj raz, używaj wszędzie

`\definecolor{brand}{HTML}{2563EB}` rejestruje Twoją własną nazwę. Po tej linii `\textcolor{brand}{...}` działa jak każdy wbudowany kolor, a wartość szesnastkowa znajduje się dokładnie w jednym miejscu. Gdy zmienia się paleta, edytujesz jedną linię preambuły, zamiast przeszukiwać dokument w postaci surowych kodów szesnastkowych. Ten sam pomysł co w przypadku [niestandardowych makr](/learn/custom-commands/): zdefiniuj raz, używaj ponownie wszędzie.

## Skala szarości jest nadal realna

Używaj koloru jako sygnału, a nie dekoracji i załóż, że niektórzy czytelnicy go nie zobaczą. Wiele czasopism wciąż drukuje się w skali szarości, gdzie czerwony i niebieski zapadają się w podobne odcienie szarości, a znaczna część czytelników cierpi na jakąś formę wady widzenia kolorów. Praktyczna zasada: kolor może wzmacniać wyróżnienie, ale nigdy nie powinien być jedynym elementem, który go niesie. Połącz kolorowy tekst z pogrubieniem lub symbolem i połącz kolorowe linie fabuły z wyraźnymi znacznikami lub wzorami kresek.

Jeszcze jedna rzecz na temat zasięgu. Ręczne kolorowanie nagłówków lub tekstu głównego szybko sprawia, że ​​dokument wygląda jak domowy, a wewnątrz szablonu miejsca i tak zostanie przywrócony. Zachowaj ręczny kolor dla miejsc, które coś znaczą, na przykład zaznaczenie zmian w wersji żądanych przez recenzenta, i usuń go przed wersją ostateczną.