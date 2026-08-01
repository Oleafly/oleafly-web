---

title: "Wymuś lub odmów podziału strony"
description: "nowa strona, wyczyść stronę, miękki podział strony, nopagebreak."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Wymuś lub odmów podziału strony

LaTeX decyduje, gdzie kończą się strony. W większości przypadków decyzja jest słuszna, ale czasami trzeba ją uchylić: nagłówek sekcji widnieje na dole strony, tabela pojawia się o jeden wiersz za późno lub chcesz, aby każdy rozdział raportu zaczynał się od nowa. LaTeX udostępnia do tego niewielki zestaw poleceń, począwszy od twardego rozkazu po uprzejmą sugestię.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Ciężkie przerwy

`\newpage` natychmiast kończy bieżącą stronę i rozpoczyna nową. Jest to najtępsze narzędzie, którego będziesz najczęściej używać podczas rysowania.

`\clearpage` robi to samo, ale najpierw opróżnia wszystkie oczekujące elementy zmiennoprzecinkowe. Rysunki i tabele w LaTeX-ie są zmiennoprzecinkowe: dryfują tam, gdzie algorytm znajdzie miejsce, czasami do stron po miejscu, w którym je zapisałeś. `\clearpage` zmusza wszystkie elementy float, które do tej pory znalazły się w kolejce, na stronę przed przejściem dalej, więc jest to właściwe polecenie na końcu rozdziału lub przed sekcją, w której nie chcesz maruderów. Jeśli na końcu dokumentu wydaje się, że cyfry się piętrzą, lekarstwem jest zwykle dobrze umieszczone `\clearpage`; zobacz [dlaczego figury się poruszają](/learn/figure-wrong-position/), aby poznać całą historię.

`\cleardoublepage` idzie o krok dalej w dokumentach dwustronnych: po opróżnieniu elementów pływających zapewnia, że ​​następna strona będzie stroną prawą (nieparzystą), w razie potrzeby wstawiając pustą stronę po lewej stronie. Rozdziały książek tradycyjnie otwierają się po prawej stronie, a klasa „książka” wywołuje to w każdym „rozdziale”.

## Miękkie prośby

`\pagebreak[n]` nie wydaje polecenia. Pyta. Opcjonalna liczba od 0 do 4 określa siłę: `\pagebreak[1]` oznacza „przerwa tutaj byłaby miła”, `\pagebreak[4]` oznacza „przerwa tutaj, kropka”. Wartości środkowe pozwalają LaTeXowi porównać twoje życzenie z własną oceną odstępów, co zwykle tworzy lepiej wyglądające strony niż twarde `\newpage`, ponieważ `\pagebreak` rozciąga treść, aby wypełnić stronę, zamiast pozostawiać lukę.

`\nopagebreak` jest żądaniem odwrotnym: zniechęca do przerwania w tym miejscu. Przydaje się zaraz po nagłówku lub przed krótką listą, którą chcesz zachować wraz z jej wprowadzeniem. Podobnie jak `\pagebreak` akceptuje opcjonalną siłę od 0 do 4.

## Kiedy w ogóle po nie sięgać

Częstym błędem jest przesypywanie wersji roboczej `\nową stroną' w celu poprawienia układu, a następnie obserwowanie, jak każda poprawka staje się błędna w miarę powiększania się tekstu. Podziały stron zależą od wszystkiego, co je poprzedza, dlatego ręczne podziały, które dzisiaj wyglądają idealnie, mogą po kolejnej poprawce pozostawić w połowie pustą stronę. Rozsądny tok pracy polega na napisaniu najpierw całego dokumentu i dodaniu przerw dopiero w ostatnim przebiegu, preferując miękkie `\pagebreak[3]` zamiast twardych poleceń, wszędzie tam, gdzie można negocjować dokładne położenie.