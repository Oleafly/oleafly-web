---

title: "Operatory, które wymyślisz raz"
description: "DeclareMathOperator dla argmin, argmax i podobnych nazw."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Operatory, które wymyślisz raz

LaTeX zawiera nazwane operatory, takie jak `\sin`, `\log` i `\max`, które są drukowane pionowo z zachowaniem odpowiednich odstępów wokół nich. Nie jest dostarczany z `\argmin` ani `\argmax`, mimo że dokumenty optymalizacyjne używają ich stale. Jeśli w trybie matematycznym wpiszesz „argmin” jako zwykłe litery, LaTeX potraktuje to jako iloczyn sześciu zmiennych: litery zostaną zapisane kursywą, ściśnięte razem, bez odstępów operatorowych. Zadeklaruj operatora samodzielnie, jednorazowo, w preambule.

## Deklarowanie operatora

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Oto, co robi każdy element. `\DeclareMathOperator` pochodzi z `amsmath` i tworzy nowe polecenie, którego argument jest ustawiony jako tekst operatora: pionowe litery rzymskie, z zasadami odstępów, które LaTeX ma już zastosowanie do `\max` i `\lim`. Pierwszy argument to nazwa polecenia, które wpiszesz, drugi to tekst, który faktycznie zostanie wydrukowany. `\,` wewnątrz `arg\,min` wstawia cienką spację pomiędzy dwoma słowami, co lepiej się czyta niż łączenie ich razem.

Gwiazdka po `\DeclareMathOperator` ma znaczenie. Deklaracja oznaczona gwiazdką sprawia, że ​​operator zachowuje się jak `\lim`: w matematyce wyświetlania wszystko, co dołączysz za pomocą `_`, znajduje się bezpośrednio pod operatorem, zamiast kończyć się w jego prawym dolnym rogu. To jest dokładnie to, czego chcesz dla `\argmin_\theta`, gdzie optymalizowana zmienna powinna pojawić się poniżej. Bez gwiazdy indeks dolny pozostaje z boku, co jest konwencją w przypadku operatorów takich jak `\log_2`. W matematyce wbudowanej indeks dolny pozostaje z boku w obu kierunkach, aby uniknąć rozciągania wysokości linii.

## Ponowne użycie wzoru

Ta sama technika dotyczy dowolnego operatora używanego w Twojej dziedzinie, o którym LaTeX nie wie. Kilka typowych:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Zauważ, że `\tr`, `\rank` i `\diag` nie są oznaczone gwiazdką, ponieważ ich indeksy dolne, jeśli takie występują, znajdują się z boku. Gwiazdkę otrzymują tylko operatory typu limit, takie jak `\esssup`.

Deklarowanie operatorów w preambule zamiast wpisywania `\mathrm{argmin}` w linii opłaca się podwójnie. Notacja pozostaje spójna w całym dokumencie, a jeśli dziennik poprosi o inny rendering, zmieniasz jedną linię, zamiast przeszukiwać każde równanie. Wypróbuj deklarację i linię wyświetlania razem na [żywym placu zabaw](/live/), aby zobaczyć, jak zachowuje się położenie indeksu dolnego oznaczonego gwiazdką.

Częsty błąd: deklarowanie operatora, którego nazwa koliduje z istniejącym poleceniem, np. `\max` lub `\deg`. LaTeX zatrzyma się z „już zdefiniowanym” błędem. Wybierz nową nazwę lub użyj `\renewcommand` tylko wtedy, gdy naprawdę zamierzasz zastąpić oryginalną.