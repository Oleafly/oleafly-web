---

title: "Format IEEE w praktyce"
description: "Tryby konferencji i czasopism IEEEtran, bloki autorskie i dwukolumnowe błędy."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Format IEEE w praktyce

Miejsca IEEE, od małych warsztatów po flagowe czasopisma, współdzielą jeden plik klasowy: `IEEEtran`. Naucz się tego raz, a otworzą się setki miejsc.

## Konferencja a tryb dziennika

Ta sama klasa tworzy różne układy w zależności od opcji:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Tryb konferencyjny zapewnia klasyczny wygląd: 10 pkt Times, dwie kolumny, domyślnie bez numeracji stron. Tryb dziennika zmienia układ tytułów, dodaje biografie autorów na końcu i poprawia odstępy. Zawsze korzystaj z trybu, o który prosi Twoje miejsce, nie można ich stosować zamiennie. Aby zapoznać się z szerszym porównaniem IEEE i ACM, zobacz [ACM, IEEE i przyjaciele](/learn/acm-ieee-and-friends/).

## Autorzy w sposób IEEE

Tryb konferencji ma swój własny znacznik autora. Nie walcz z tym za pomocą `\\` i ręcznego centrowania:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` przechowuje nazwiska, `\IEEEauthorblockA` przechowuje przynależności, a `\and` dzieli autorów na kolumny.

## Życie z dwiema kolumnami

Układ dwukolumnowy to miejsce, w którym utkną nowicjusze. Zasady:

| Problem | Napraw |
|---|---|
| Szeroka figura lub stół | Użyj `figura*` / `tabela*`, przenosi na górę strony |
| Przepełnienie długiego równania | Przełam to, zobacz taktykę dwóch kolumn w [jednej lub dwóch kolumnach](/learn/one-column-or-two/) |
| Nierówne kolumny ostatniej strony | Zrównoważ je ręcznie za pomocą `\IEEEtriggeratref` lub pakietu `balance` |
| Adres URL biegnie do marginesu | `\usepackage{url}` lub `xurl` dla lepszego łamania |

Środowiska oznaczone gwiazdką nie podlegają negocjacjom w przypadku szerokiej zawartości:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Zauważ, że `figura*` nie pozwala na umieszczenie `[h]`, zawsze przesuwa się na górę strony. Zaplanuj to, zamiast z tym walczyć.

## Bibliografia

IEEE używa cytatów numerycznych w swoim własnym stylu BibTeX:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Pasujący plik `IEEEtran.bst` jest dostarczany z klasą. Nie zastępuj słów „plain” ani „ieeetr”, zauważają recenzenci, a lista kontrolna gotowa do użycia aparatu i tak to wykryje.

## Skąd zdobyć prawdziwy szablon

Zawsze zaczynaj od oficjalnego źródła: IEEE Template Selector na ieee.org lub strony z zestawem autorów konferencji. Organizatorzy konferencji czasami łatają szablon (informacja o prawach autorskich, dodatkowe stopki), dzięki czemu wersja obiektu wygrywa z wersją ogólną. [Galeria szablonów](/templates/) Oleafly zawiera starter konferencji w stylu IEEE, który kompiluje się od razu na dołączonym silniku Tectonic i jest przydatny do tworzenia wersji roboczej przed upuszczeniem oficjalnego zestawu.

## Lista kontrolna typowych problemów

- Kompiluj z kodem zgodnym z pdfLaTeX, IEEEtran jest starszy od specyfikacji czcionek i oczekuje klasycznych silników
- Nie dodawaj `geometrii` ani nie zmieniaj marginesów, klasa ustawia je dokładnie
- `\IEEEpeerreviewmaketitle` jest wymagane po `\maketitle` w niektórych artykułach w czasopismach
- Jeśli szablon na Twoim komputerze zawiera błędy, segreguj go jak każdy [uszkodzony szablon](/learn/fix-broken-template/)