---

title: "Postacie, które niszczą źródło"
description: "Jak wpisać procent, dolar, ampersand, podkreślenie i nawiasy klamrowe bez przerywania linii."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Postacie, które psują źródło

LaTeX rezerwuje kilka codziennych znaków jako składnię i wpisanie takiego, w którym masz na myśli znak dosłowny, albo zatrzymuje kompilację, albo po cichu manipuluje danymi wyjściowymi. Każda zarezerwowana postać ma ucieczkę, a cały zestaw mieści się w jednym małym stoliku.

| Char | Kod |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## Co robią postacie bez ucieczki

`%` rozpoczyna komentarz, więc wszystko od niego do końca linii jest odrzucane. Jest to typowy błąd „moje zdanie zniknęło”: wpisz 50% w raporcie, a reszta wiersza zniknie bez żadnego błędu. `$` przełącza tryb matematyczny, więc zabłąkany dyskretnie pisze kursywą tekst lub zgłasza błędy daleko od literówki. `&` to zakładka wyrównania w tabelach i blokach `align`; poza nimi kończy się niepowodzeniem z „Zakładką Niewłaściwie umieszczone wyrównanie”. `#` oznacza parametry makra. `_` i `^` należą do trybu matematycznego i w tekście wywołują „Wstawiony brakujący $”, co [ma swoją własną lekcję](/learn/missing-dollar/). `~` jest spacją nierozdzielającą, więc tylda wpisana w adresie URL lub ścieżce cicho staje się spacją. `\` rozpoczyna każde polecenie i dlatego nie może samo uciec: `\\` jest podziałem wiersza, a znak dosłowny wymaga `\textbackslash`.

## Ucieczka w praktyce

W przypadku pierwszych sześciu znaków ucieczka jest przedrostkiem ukośnika odwrotnego i działa tak samo w przypadku innych poleceń:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Zauważ, że podkreślenie wymaga ucieczki nawet wewnątrz `\texttt`. Po dwóch znakach ucieczki w stylu polecenia, `\textasciitilde` i `\textbackslash`, powinno następować `{}` lub spacja, gdy następna litera pojawia się, aby nazwa polecenia nie połykała kolejnego słowa.

W przypadku całych fragmentów kodu, ścieżek lub adresów URL całkowicie pomiń zmianę ucieczki. `\verb|...|` i środowisko `verbatim` wypisują swoją zawartość dokładnie tak, jak została wpisana, z rozbrojeniem wszystkich znaków specjalnych, a `\url{...}` pakietu `url` obsługuje łącza zakończone tyldami.

Postacie, które gryzą najmocniej, to te, które ponoszą porażkę po cichu, a na tej liście znajduje się `%`. Wklejony tekst jest zwykle przyczyną: adresy URL, polecenia powłoki i dane finansowe zawierają znaki zastrzeżone. Kiedy w pliku PDF brakuje jakiegoś zdania, przeszukaj ten wiersz źródła pod kątem samego znaku „%”, a dopiero potem czegokolwiek innego.