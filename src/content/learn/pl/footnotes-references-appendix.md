---

title: "Przypisy, odniesienia i dodatki: kto co robi"
description: "Gdzie są miejsca na marginesie, dowody i dodatkowe materiały i kto je faktycznie czyta."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Przypisy, odniesienia i dodatki: kto co robi

Artykuł ma trzy miejsca, w których można umieścić materiał, który nie należy do głównego nurtu, a każde z nich ma inne zadanie. Umieść odpowiednią treść we właściwym miejscu, a czytelnicy pozostaną zorientowani. Połącz je, a Twój papier będzie czytany jak szuflada na śmieci.

## Przypisy: grzeczność na bok

Przypis oznacza coś, co warto powiedzieć, ale nie warto przerywać zdania: adres URL, wyjaśnienie, zastrzeżenie, „dziękujemy recenzentowi za tę obserwację”.

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Używaj ich oszczędnie. Artykuł z przypisem do akapitu to artykuł kłócący się sam ze sobą. Jeśli treść jest istotna, wypromuj ją w tekście. Jeśli jest to wcześniejsza praca, którą można zacytować, należy ją zamiast tego umieścić w źródłach. Niektóre miejsca zakazują przypisów do adresów URL na rzecz odpowiednich cytatów, więc sprawdź szablon.

## Referencje: ślad dowodów

Cytując jakąś pracę, wskazujesz na dowody stojące za twierdzeniem: tam ustalono ten fakt, tę metodę wprowadzili oni, ten zbiór danych pochodzi stąd. Lista referencyjna to pełna mapa tego, na czym się opierasz, a recenzenci dokładnie ją sprawdzają, zarówno pod kątem brakujących wpisów, jak i twierdzeń przypiętych do cytatów, które w rzeczywistości ich nie potwierdzają.

W LaTeX-ie mechanika jest automatyczna: `\cite{key}` w tekście, wpis w pliku `.bib` i lista wyświetla się sama.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

Pełny proces obejmuje [dodawanie cytatów](/learn/add-citations/) i [tworzenie bibliografii](/learn/create-bibliography/). Oleafly może wypełnić wpis .bib z wyszukiwania DOI, co pobija ręcznie wpisywane listy autorów.

## Dodatek: pomieszczenie przelewowe

Dodatek zawiera materiały, które wspierają artykuł, ale mogłyby przerwać jego bieg: pełne dowody, dodatkowe tabele wyników, siatki hiperparametrów, szablony podpowiedzi, dokumentacja zbioru danych. Zasadą jest, że artykuł główny musi występować samodzielnie. Czytelnika, który nigdy nie otwiera dodatku, należy jednak przekonać; czytelnik, który ją otworzy, powinien znaleźć każdy obiecany szczegół.

```latex
\appendix
\section{Full proofs}
```

Po `\dodatku` sekcje automatycznie otrzymują litery A, B, C.

## Materiał uzupełniający: poza plikiem PDF

Materiał uzupełniający to wszystko, czego w ogóle nie da się zapisać w pliku PDF: kod, dane, filmy, interaktywne demonstracje. Wiele miejsc gromadzi je jako osobny plik z własnymi ograniczeniami rozmiaru. Potraktuj to jako część swojej historii powtarzalności i odwołuj się do niego wyraźnie w sekcji poświęconej metodom, aby czytelnicy wiedzieli, że istnieje.

## Kto właściwie co czyta

| Część | Zachowanie recenzenta |
|---|---|
| Przypisy | Czytane mimochodem, szybko zapominane |
| Referencje | Przeskanowano w poszukiwaniu brakujących prac, szczególnie ich własnych |
| Dodatek | Otwarte, gdy wymaga sprawdzenia roszczenie w gazecie |
| Uzupełniające | Otwarte przez jednego recenzenta, który uruchamia Twój kod |

Co to oznacza w praktyce: nigdy nie ukrywaj niczego istotnego w przypisie lub załączniku. Recenzenci oceniają tekst główny, a stwierdzenie „odpowiedź znajduje się w Dodatku F” ani razu nie złagodziło recenzji. Umieść najlepszy materiał tam, gdzie znajdzie go skimmer, i pozwól tylnej materii robić to, co potrafi najlepiej: spokojnie trzymać paragony.