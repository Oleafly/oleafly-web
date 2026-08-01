---

title: "Marginesy w jednym pakiecie"
description: "geometria rozmiaru strony, marginesów, przesunięcia oprawy."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Marginesy w jednym pakiecie

Domyślne marginesy LaTeX-a wyglądają ogromne, szczególnie na papierze A4. Jest to zgodne z projektem: ustawienia domyślne zakładają wygodną długość wiersza wynoszącą około 66 znaków, co jest idealne do czytania, ale rzadko jest to wymagane przez szablon uniwersytecki, czasopismo lub własny gust. Zamiast ręcznie dostosowywać pół tuzina długości na niskim poziomie, konfigurujesz stronę za pomocą pakietu `geometry` i opisujesz żądany układ w prosty sposób.

## Dwa sposoby, w jakie będziesz z niego korzystać

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

Pierwsza forma jest szybka: `margin=1in` ustawia wszystkie cztery marginesy na jeden cal w jednej opcji, a geometria ponownie oblicza szerokość i wysokość tekstu, aby dopasować. Jest to standardowy wygląd „pracy amerykańskiej” i rozsądny domyślny wygląd wersji roboczych.

Druga forma wyjaśnia wszystko. „a4paper” deklaruje fizyczny rozmiar papieru (użyj „papieru listowego” w przypadku listu amerykańskiego). Bez tego geometria dziedziczy niezależnie od przyjętej klasy dokumentu, która może nie odpowiadać oczekiwaniom przeglądarki plików PDF lub drukarki. Opcje „górny”, „dolny”, „lewy” i „prawy” ustawiają każdy margines niezależnie, dzięki czemu układy asymetryczne są równie łatwe jak układy symetryczne. Możesz dowolnie mieszać jednostki: `in`, `cm`, `mm` i `pt`, wszystkie działają.

Wszystko dzieje się w preambule, przed `\begin{document}`. Geometria raz odczytuje swoje opcje i wyprowadza z nich cały układ strony, dlatego jest mniej podatna na błędy niż ręczne strojenie.

## Przesunięcie oprawy dla drukowanych kopii

Jeśli dokument będzie drukowany i oprawiony, margines wewnętrzny wymaga dodatkowego miejsca, aby tekst nie zniknął w grzbiecie. Dodaj do opcji „bindingoffset=0.5cm”, a geometria przesunie blok tekstu na zewnątrz na każdej stronie. W dokumencie „dwustronnym” następuje prawidłowe przesunięcie między lewą i prawą stroną, co jest żmudne w przypadku ręcznego przesuwania prawej strony.

## Czego nie robić

Unikaj mieszania geometrii z ręcznym `\setlength{\textwidth}{...}`, chyba że wiesz dlaczego. Układ strony LaTeX-a to sieć o wzajemnie zależnych długościach (`\textwidth`, `\oddsidemargin`, `\headheight` i przyjaciele), a geometria zarządza nimi wszystkimi jako jednym spójnym systemem. Zmiana jednej długości bezpośrednio po załadowaniu geometrii zwykle powoduje niezgodność pozostałych i kończy się na tekście przekraczającym stronę lub marginesach różniących się od żądanych. Jeśli potrzebujesz zmiany w połowie dokumentu, geometria zapewnia dokładnie to `\newgeometry{...}` i `\restoregeometry`.

Jedna uwaga, zanim cokolwiek dostroisz: jeśli piszesz dla czasopisma lub konferencji, plik zajęć koduje już wymagane marginesy, a dodanie geometrii na górze prawdopodobnie naruszy format przesyłania. Zaoszczędź dostosowywanie marginesów w dokumentach, w których Ty decydujesz o układzie, takich jak praca dyplomowa, notatki czy CV, i sprawdź najpierw, co już daje Ci Twoja [klasa dokumentu](/learn/document-skeleton/).