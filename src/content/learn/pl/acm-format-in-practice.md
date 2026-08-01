---

title: "Format ACM w praktyce"
description: "Klasa acmart: sigconf, metadane, anonimowa recenzja i niespodzianki przy pierwszej kompilacji."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Format ACM w praktyce

W 2017 r. firma ACM połączyła wszystkie swoje szablony w jedną klasę „acmart”. Jedna klasa, wiele twarzy: opcja formatu decyduje o tym, czy otrzymasz artykuł konferencyjny w dwóch kolumnach, czy artykuł w jednej kolumnie.

## Wybierz opcję formatu

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` jest tym, czego potrzebujesz dla prawie każdej konferencji ACM. CFP obiektu podaje dokładną opcję; zaufaj temu zamiast przyzwyczajenia. Jeśli nadal wybierasz między rodzinami miejsc, [ACM, IEEE i przyjaciele](/learn/acm-ieee-and-friends/) porównują je.

## Metadane są obowiązkowe

W przeciwieństwie do IEEEtran, acmart nie wygląda dobrze (a wydawca nie chce tego zaakceptować) bez bloków metadanych:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Koncepcje CCS pochodzą z selektora na stronie internetowej ACM, który generuje zarówno linie XML, jak i `\ccsdesc`. Wklej je dosłownie. Słowa kluczowe umieszczane są w `\słowach kluczowych`, a nie w streszczeniu. Blok formatu referencyjnego ACM (szare pole cytatu na pierwszej stronie) jest generowany automatycznie z `\acmConference`, `\acmYear` i znajomych, które wydawca wypełnia lub sprawdza w momencie gotowości kamery.

## Przesyłanie z podwójną ślepą próbą

Większość konferencji ACM recenzuje je anonimowo. Jedna opcja sobie z tym radzi:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Opcja „anonimowy” ukrywa autorów i afiliacje, opcja „recenzja” dodaje numery wierszy dla recenzentów. Odłącz oba, aby były gotowe do użycia z aparatem. Klasa obsługuje mechanikę, ale anonimizacja jest większa niż flaga. Zobacz [double-blind zrobione dobrze](/learn/anonymization-double-blind/).

## Cytaty: numerowane lub rok autora

Acmart używa pod spodem natbib i obsługuje oba style:

| Opcja | Wynik |
|---|---|
| domyślny | Numerowane: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Rok autora: (Lovelace, 1843) |

Niektóre SIG wymagają roku autora (historycznie CHI), inne numerowane. Powtórzę: WPRyb decyduje.

## Niespodzianki przy pierwszej kompilacji

Acmart potrzebuje pakietów. Spodziewaj się ich w nowej konfiguracji:

- **Czcionki Libertine.** Klasa ładuje Linux Libertine i Biolinum plus `newtxmath`. W przypadku minimalnej instalacji TeX-a są one pobierane przy pierwszej kompilacji. Dołączony silnik Tectonic firmy Oleafly pobiera je automatycznie przy pierwszym użyciu, więc początkowa kompilacja trwa dłużej niż druga. To normalne, a nie zawieszenie.
- **Ścisłe zasady float.** acmart blokuje niektóre pakiety (takie jak `titlesec`) i powoduje błąd podczas ich ładowania.
- **`\authorsaddresses{}`** wycisza dokuczliwą stopkę „adresy autorów” w wersjach roboczych.

Jeśli pakiet rzeczywiście nie zostanie rozwiązany, rozwiązaniem jest zwykle: [zainstaluj brakujący pakiet](/learn/install-missing-package/).

## Gdzie to zdobyć

Pobierz oficjalny szablon ze stron autorów acm.org lub strony swojej konferencji i aktualizuj `acmart.cls`. ACM zmienia go kilka razy w roku, a gotowość kamery sprawdza najnowszą wersję.