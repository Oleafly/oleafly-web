---

title: "Akapity, przerwy i pusta przestrzeń"
description: "Puste linie, wymuszone przerwy, vspace i polecenia dotyczące odstępów, które warto znać."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Akapity, przerwy i pusta przestrzeń

W edytorze tekstu kształtujesz akapity, naciskając klawisz Enter i obserwując luki. LaTeX działa inaczej: tekst źródłowy opisuje strukturę, a kompilator decyduje o odstępach. Kiedy już wiesz, jak LaTeX rozpoczyna akapit i jak go zastąpić, gdy zajdzie taka potrzeba, unikniesz problemów z formatowaniem, które zwykle mają z tym początkujący.

## Jak działają akapity

Pusty wiersz w źródle rozpoczyna nowy akapit. To jest cała zasada. Jedna pusta linia lub pięć, to nie ma znaczenia; LaTeX zwija je w pojedynczy podział akapitu. Podobnie pojedynczy podział wiersza w źródle jest traktowany jak zwykła spacja, więc możesz zawijać tekst źródłowy na dowolną szerokość i dowolnie go zmieniać, bez zmiany wyniku.

Polecenie `\par` oznacza dokładnie to samo, co pusta linia. Rzadko będziesz go pisać samodzielnie, ale zobaczysz go w makrach i plikach klas, gdzie dosłowna pusta linia jest niewygodna do napisania.

`\\` to coś zupełnie innego: wymusza podział wiersza w bieżącym akapicie, bez rozpoczynania nowego. Nowa linia nie ma wcięcia akapitu ani dodatkowej przestrzeni w pionie. Istnieje w miejscach, w których ważne są podziały wierszy, takich jak adresy, poezja i wiersze tabeli. Używanie go do kończenia zwykłych akapitów jest klasycznym błędem początkujących, ponieważ tworzy akapit, który tak naprawdę nigdy się nie kończy, a LaTeX może narzekać, że „nie ma tu końca wiersza”, gdy dwa z nich się kumulują.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Dodawanie przestrzeni pionowej

Czasami potrzebna jest celowa przerwa, na przykład przed blokiem podpisu lub pomiędzy logicznymi częściami strony tytułowej.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` wstawia dokładnie taką odległość w pionie, o jaką prosisz, w dowolnej jednostce znanej LaTeXowi (`em`, `pt`, `cm` i tak dalej). Trzy polecenia pomijania to wstępnie ustawione wartości: `\smallskip`, `\medskip` i `\bigskip` wstawiają małe, średnie i duże przerwy, których rozmiary są zdefiniowane przez klasę dokumentu, co zapewnia ich spójność w całym dokumencie. Preferuj przeskoki zamiast ręcznie dostrojonych wartości `\vspace`, ponieważ dostosowują się one, jeśli zmienisz klasę lub rozmiar czcionki.

Jeden przydatny szczegół: `\vspace` na górze strony jest dyskretnie usuwana, ponieważ LaTeX zakłada, że ​​rozciągnięta przestrzeń na granicach strony jest niezamierzona. Jeśli naprawdę potrzebujesz go zachować, użyj `\vspace*{1em}` z gwiazdką.

## Odstęp pomiędzy wszystkimi akapitami

Nie spamuj `\\`, aby zrobić odstęp między akapitami. Jeśli chcesz, aby każdy akapit był oddzielony spacją, a nie wcięciem, jest to decyzja projektowa obejmująca cały dokument: ustaw ją raz w preambule za pomocą pakietu `parskip` lub ponownie rozważ, czy nagłówki i struktura lepiej oddają separację. Zobacz [wcięcie akapitu](/learn/paragraph-indent/), aby zapoznać się z drugą połową tego kompromisu.