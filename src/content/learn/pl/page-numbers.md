---

title: "Numery stron włączone lub wyłączone"
description: "zwykły, pusty, rzymsko-arabski, pomijając cyfry na stronie tytułowej."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Numery stron włączone lub wyłączone

Numery stron pojawiają się domyślnie w „artykule”: klasy standardowe używają stylu „zwykłej” strony, w którym numery są wyśrodkowane na dole każdej strony. Zwykle jest to w porządku i nigdy o tym nie myślisz. Trzy sytuacje, w których o tym myślisz, to ukrycie numeru na stronie tytułowej, całkowite wyłączenie numeracji i przełączanie między cyframi rzymskimi i arabskimi w dłuższym dokumencie.

## Ukrywanie numeru na stronie tytułowej

Strona tytułowa z samotną „1” na dole wygląda na niedokończoną. Poprawka polega na umieszczeniu jednej linii zaraz po ustawieniu tytułu:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` zmienia styl strony tylko dla bieżącej strony, a `pusty` jest stylem wbudowanym, który nie wyświetla niczego w nagłówku ani stopce. Kolejność ma znaczenie: musi następować po `\maketitle` na tej samej stronie, ponieważ `\maketitle` samo w sobie resetuje styl strony. Pamiętaj, że strona nadal się liczy; następna strona będzie miała numer 2. Jeśli użyjesz `\begin{titlepage}...\end{titlepage}` zamiast `\maketitle`, numer zostanie pominięty i następna strona zacznie się od 1.

## Style i systemy numeracji

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Te dwie pary poleceń kontrolują różne rzeczy, a mieszanie ich to klasyczne potknięcie. `\pagestyle{...}` kontroluje miejsce pojawienia się liczby i to, co ją otacza: „zwykły” podaje numer stopki wyśrodkowany, „pusty” usuwa nagłówki i stopki ze wszystkich stron, począwszy od tego miejsca. Nie mówi nic o tym, jak wygląda liczba.

`\pagenumbering{...}` kontroluje sposób zapisywania liczby: `roman` daje i, ii, iii, podczas gdy `arabski` daje 1, 2, 3. Istnieją również `Roman` dla I, II, III i `alph` dla a, b, c, chociaż będziesz je rzadko potrzebować. `\pagenumbering` resetuje także licznik stron do 1. To resetowanie jest funkcją, a nie błędem: dzięki niemu praca dyplomowa może numerować przedmowę od i do vi, a następnie rozpocząć rozdział pierwszy na stronie 1.

Jeśli chcesz mieć pełną kontrolę nad umiejscowieniem, np. numerem w rogu lub w połączeniu z bieżącym tytułem, to jest to zadanie pakietu FancyHDR, a nie tych wbudowanych. Zobacz [bieganie głowami i nogami](/learn/headers-footers/).

## Częsty błąd

Napisanie `\pagestyle{empty}`, gdy miałeś na myśli `\thispagestyle{empty}`, powoduje ciche usunięcie numerów z całego dokumentu i możesz tego nie zauważyć, dopóki recenzent nie zapyta, dlaczego Twoje strony są nienumerowane. Zapamiętaj zasadę: `\thispagestyle` to wyjątek obejmujący jedną stronę, `\pagestyle` to przełącznik obejmujący cały dokument.

Temat przewodni pracy magisterskiej: [Przewodnik rzymski/arabski](/learn/front-materia-page-numbers/).