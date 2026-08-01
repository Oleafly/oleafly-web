---

title: "Tabele z trzema regułami"
description: "górna, środkowa, dolna i pomijanie linii pionowych."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tabele z trzema regułami

Otwórz dowolny dobrze napisany dziennik i spójrz na tabele. Prawie wszystkie mają ten sam projekt: reguła na górze, reguła pod nagłówkiem, reguła na dole i nic więcej. Żadnych pionowych linii, żadnej siatki. Jest to styl „booktabs”, nazwany na cześć pakietu, który go implementuje, a przejście na niego jest zwykle największym wizualnym ulepszeniem, jakiego można dokonać w tabelach LaTeX. Pakiet zawiera trzy polecenia, które odpowiadają trzem regułom:

```latex
\toprule
...
\midrule
...
\bottomrule
```

W pełnej tabeli wyglądają one następująco:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Co zastępują zasady

Bez `booktabs' ludzie rysują linie z `\hline` i pionowymi kreskami w specyfikacji kolumny, jak w `{|l|c|c|}`. Rezultatem jest klatka: każda komórka zamknięta w ramce, z tekstem ciasnym wbrew regułom, ponieważ „\hline” nie daje miejsca na wytchnienie. Polecenia `booktabs` zastępują `\hline` regułami z wbudowanym pionowym dopełnieniem, a `\toprule` i `\bottomrule` są nieco cięższe niż `\midrule`, więc tabela ma widoczną ramę i jaśniejszy podział wewnętrzny. Ta różnica w odstępach i wadze to cała sztuczka. Na dane jest miejsce, nagłówek jest wyraźnie oddzielony i nic nie może konkurować z liczbami.

Reguły pionowe są po prostu pomijane. Wyrównanie kolumn już pokazuje czytelnikowi, gdzie kończy się jedna kolumna, a zaczyna następna, a linie pionowe w większości dodają atramentu, nie zwiększając przejrzystości. Dokumentacja `booktabs' posuwa się tak daleko, że odmawia ich wspierania.

## Częściowe reguły dla zgrupowanych nagłówków

Kiedy nagłówek obejmuje kilka kolumn, na przykład „Wyniki” znajdujące się powyżej dokładności i F1, użyj `\cmidrule`, aby podkreślić tylko te kolumny:

```latex
\cmidrule(lr){2-3}
```

Zakres `{2-3}` określa, które kolumny obejmuje reguła, a opcja `(lr)` przycina nieco lewy i prawy koniec, tak aby sąsiednie reguły nie łączyły się w jedną długą linię. To łączy się z `\multicumn`, pokazanym w [komórkach obejmujących wiersze lub kolumny](/learn/merged-cells/).

## Liczby i wyrównanie

Tabelę miar czyta się najlepiej, gdy punkty dziesiętne pokrywają się. Pakiet `siunitx` udostępnia typ kolumny `S`, który automatycznie wyrównuje liczby na znaczniku dziesiętnym, dzięki czemu liczby `0,9` i `0,88` są poprawnie umieszczone pod sobą, nawet przy różnej liczbie cyfr. Warto to zastosować, gdy w tabelach znajdują się prawdziwe dane.

Częstym błędem jest mieszanie systemów: „\hline” tutaj, „\midrule” tam i jedna kolumna ze słupkami pozostałymi z szablonu. Wybierz styl trzech reguł i zastosuj go do każdej tabeli w dokumencie. Spójność to przede wszystkim to, co sprawia, że ​​styl wygląda przemyślanie. Pełny opis otaczającego pływaka `table` znajduje się w [tabeli wyglądającej jak papierowy stół](/learn/create-table/).