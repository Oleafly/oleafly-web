---

title: "Pierwsza talia Beamera"
description: "Motyw, ramka tytułowa, konspekt, jeden slajd wyników."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Pierwsza talia Beamera

Beamer to standardowa klasa dokumentów LaTeX przeznaczona do prezentacji. Zamiast stron dokument tworzy slajdy i wszystko, co już wiesz, zostaje przeniesione: ta sama matematyka, te same liczby, te same polecenia bibliograficzne. Praktyczną korzyścią dla autorów artykułów jest ponowne wykorzystanie. Równania i diagramy TikZ z rękopisu wklejono do dyskusji bez zmian. Oto minimalna, ale kompletna talia:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Ramki, nie strony

Podstawową jednostką jest klatka, a każde środowisko „klatki” staje się jednym slajdem. Opcjonalny argument w nawiasach klamrowych, np. `\begin{frame}{Results}`, ustawia tytuł slajdu. Pierwszy slajd używa skrótu `\frame{\titlepage}`, gdzie `\titlepage` renderuje metadane zadeklarowane w preambule przez `\title` i `\author`. Możesz także dodać `\instytut` i `\data`, a pojawią się one w tym samym układzie. Ramka mieści zauważalnie mniej niż strona, czyli mniej więcej 128 mm na 96 mm płótna, więc nadmiar treści jest oznaką rozłożenia materiału na dwie ramki, a nie zmniejszenia czcionki.

## Motywy i konspekt

`\usetheme{Madrid}` wybiera kompletny projekt wizualny: kolory, paski nagłówka i stopki oraz sposób rysowania tytułów klatek. Beamer dostarcza dziesiątki motywów. „Madryt”, „Berlin” i celowo zwykły „domyślny” to częste wybory, a zamiana motywu to zmiana w jednej linijce, która zmienia styl całej talii. Wiele konferencji i laboratoriów rozpowszechnia własne tematy. W takim przypadku upuść plik stylu tej osoby do projektu i nazwij go tutaj.

Ramka konspektu wywołuje tabelę treści, która wyszczególnia przekrojową strukturę przemówienia. Jeden haczyk: zawiera listę poleceń `\sekcja`, a ten minimalny przykład nie ma żadnego, więc kontur będzie pusty, dopóki nie dodasz linii takich jak `\sekcja{Metoda}` pomiędzy klatkami. Sekcje w programie Beamer nie drukują nagłówków na slajdach; istnieją, aby ustrukturyzować konspekt i elementy nawigacyjne wyświetlane w niektórych motywach.

## Treść na slajdach

Wewnątrz ramki „itemize” działa tak samo jak w każdym dokumencie, a każdy „\item” staje się punktorem. Slajdy tolerują znacznie mniej tekstu niż papier, więc jeśli to możliwe, trzymaj elementy w pojedynczych wierszach i umieszczaj szczegóły w tym, co mówisz. Ryciny, tabele i obliczenia działają również w ramkach, chociaż dane wyjściowe Beamera nie są renderowane w podglądach na stronie, więc skompiluj talię, aby je zobaczyć.

Najczęstszym wczesnym błędem jest dosłowna treść: `\verb` i listy kodów włamują się do zwykłych ramek ze względu na sposób, w jaki ramki przetwarzają ich zawartość. Rozwiązaniem jest delikatna opcja zapisana jako `\begin{frame}[fragile]` w dowolnej ramce zawierającej kod. Po przygotowaniu talii kolejnym narzędziem do nauki jest odkrywanie krok po kroku, opisane w [odsłanianie linii po kliknięciu](/learn/beamer-overlays/).