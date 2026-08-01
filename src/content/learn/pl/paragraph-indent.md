---

title: "Wcięcie lub odstęp między akapitami"
description: "parindent, parskip, noindent dla pojedynczej linii."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Wcięcie lub odstęp między akapitami

Typografia ma dwa standardowe sposoby pokazania, gdzie kończy się jeden akapit, a zaczyna następny: wciśnij pierwszy wiersz każdego nowego akapitu lub pozostaw pionowe odstępy między akapitami bez wcięć. W książkach i czasopismach prawie zawsze używa się tego pierwszego. Strony internetowe i dokumenty biznesowe korzystają z drugiego. LaTeX domyślnie stosuje konwencję książkową, wstawiając wcięcie w każdym akapicie z wyjątkiem pierwszego po nagłówku sekcji, bez dodatkowych odstępów między akapitami. Jeśli chcesz inny styl, zmieniasz dwie długości.

## Dwie długości, które kontrolują wszystko

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` to szerokość wcięcia pierwszego wiersza. Ustawienie na `0pt` z `\setlength` powoduje usunięcie wcięć ze wszystkich stron. `\parskip` to odstęp w pionie pomiędzy akapitami, zwykle zero (plus niewielkie rozciągnięcie); ustawienie go na „0.8em” daje widoczną przerwę, nieco mniejszą niż pełna pusta linia. Jednostka `em` skaluje się wraz z rozmiarem czcionki, dzięki czemu odstępy są proporcjonalne, jeśli później zmienisz [rozmiar czcionki](/learn/font-size/). Umieść obie linie w preambule, a cały dokument będzie zgodny ze stylem blokowym.

Jeśli pójdziesz tą drogą, miej świadomość, że sama zmiana `\parskip` rozciąga także przestrzeń wokół nagłówków sekcji, elementów list i spisu treści, ponieważ one również są zbudowane z akapitów. W przypadku czegokolwiek dłuższego niż krótka notatka, ładowanie zamiast tego pakietu `parskip` (`\usepackage{parskip}`) stosuje ten sam styl podczas łatania tych efektów ubocznych.

## Pomijanie pojedynczego wcięcia

Pojedynczy akapit: wstaw `\noindent` na samym początku, przed pierwszym słowem. Eliminuje to wcięcie tylko dla tego jednego akapitu i jest przydatne po wyświetlonym równaniu, liście kodów lub tabeli, gdy następujący tekst jest kontynuacją tej samej myśli, a nie nowym akapitem. Odwrotna sytuacja, wymuszanie wcięcia tam, gdzie LaTeX je pomija (np. pierwszy akapit po nagłówku), jest obsługiwana przez mały pakiet „indentfirst”, a nie przez ręczną poprawkę.

Skoro już tu jesteśmy: nowy akapit w LaTeX-u jest tworzony przez pustą linię w źródle, a nie przez `\\`. Polecenie `\\` powoduje podział wiersza w tym samym akapicie, a użycie go do fałszywego odstępu między akapitami powoduje pojawienie się ostrzeżeń o niedopełnieniu i nierównych odstępach. [Lekcja o akapitach i znakach nowej linii](/learn/paragraphs-newlines/) w pełni omawia to rozróżnienie.

## Wybierz jeden styl i przytrzymaj go

Wybierz styl pietruszki z wcięciem **lub** i zachowaj spójność. Te dwie konwencje są alternatywami, a nie warstwami: akapity z wcięciem i dużymi odstępami między nimi wyglądają jak szkic, a wcięcie zerowe i zerowe odstępy sprawiają, że czytelnik w ogóle nie jest w stanie zobaczyć, gdzie zaczyna się akapit. Jeśli piszesz do czasopisma lub na konferencję, nie zmieniaj żadnej długości; plik klasy implementuje już wybór wydawcy, a Twoje zastąpienie będzie pierwszą rzeczą, którą przywróci edytor układu.