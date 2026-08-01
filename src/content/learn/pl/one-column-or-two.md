---

title: "Jedna kolumna lub dwie"
description: "Dlaczego układy różnią się w zależności od miejsca, jaki wpływ mają dwie kolumny na liczby i równania oraz kto decyduje."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Jedna kolumna lub dwie

Otwórz dziesięć gazet, a zobaczysz dwa plemiona: gęste dwukolumnowe strony, które wyglądają jak papier gazetowy, i zwiewne jednokolumnowe strony, które wyglądają jak książka. Żadne nie jest lepsze. Każdy ewoluował z jakiegoś powodu, a wybór prawie nigdy nie należy do ciebie.

## Dlaczego miejsca się różnią

Układy dwukolumnowe to tradycja konferencji, która narodziła się, gdy drukowano materiały, a budżety stron były napięte. Wąskie kolumny mieszczą więcej słów na stronie, a krótkie linie są łatwiejsze do skanowania. Większość konferencji CS (ACM, IEEE i przyjaciele) nadal z nich korzysta.

W czasopismach, przeddrukach i pracach dyplomowych dominują układy jednokolumnowe. Dają swobodę równaniom, rysunkom i tabelom i są bardziej przyjazne do czytania długich formularzy. Serwery preprintów i wiele ośrodków ML przekształciły się w jedną kolumnę, częściowo właśnie z tego powodu.

| Układ | Typowy dom | Osobowość |
|---|---|---|
| Dwukolumnowe | Materiały konferencyjne | Gęsty, możliwy do zeskanowania, z ograniczoną liczbą stron |
| Jedna kolumna | Czasopisma, preprinty, prace dyplomowe | Obszerny, czytelny, przyjazny dla równań |

## Jaki wpływ mają dwie kolumny na liczby

W dokumencie dwukolumnowym zwykła „figura” mieści się w jednej kolumnie, która często jest zbyt wąska, aby można było ją szczegółowo przedstawić. Wariant oznaczony gwiazdką obejmuje obie kolumny:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Ta sama sztuczka dla szerokich tabel z `table*`. Jeden haczyk: elementy pływające oznaczone gwiazdką zazwyczaj lądują na górze strony i nie można ich umieścić na dole ani tutaj, więc zaplanuj swoje szerokie figury wcześniej. Podstawy wymiarowania znajdziesz w [wstawianiu obrazów](/learn/insert-images/).

## Równania stają się ciasne

Kolumna o szerokości około 3,3 cala jest nieprzyjaznym miejscem dla długich równań. W artykułach dwukolumnowych będziesz częściej łamać równania, bardziej agresywnie skracać i opierać się na środowiskach wielowierszowych. Jeśli Twój artykuł zawiera wiele równań i masz możliwość wyboru miejsca, pojedyncza kolumna pozwoli Ci zaoszczędzić prawdziwy czas formatowania. Zobacz [tryb matematyczny](/learn/math-mode/), aby zapoznać się z narzędziami.

## Ekrany i czytniki ekranu wolą jedną kolumnę

W przypadku wszystkiego, co nie jest formalnym przesłaniem w formie papierowej (raporty, dokumentacja, życiorysy, wstępne wydruki, które ludzie będą czytać na laptopach i telefonach), wygrywa pojedyncza kolumna. Pliki PDF nie zmieniają układu, więc strony z dwiema kolumnami zmuszają czytniki ekranu i ekstraktory tekstu do odgadnięcia kolejności czytania, a także zmuszają ludzi do przewijania w górę i w dół każdej strony. Systemy analizujące CV są znane z mieszania układów wielokolumnowych. Zarezerwuj dwie kolumny dla miejsc, które ich wymagają.

## Klasa dokumentu decyduje za Ciebie

Oto relaksująca część: prawie nigdy nie konfigurujesz tego ręcznie. Miejsce przekazuje Ci zajęcia lub szablon wraz z układem.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Napisz treść raz, a zmiana szablonów przeniesie wszystko na nowo. Do tego właśnie służy LaTeX: to samo źródło kompiluje się do dwukolumnowej wersji konferencyjnej i jednokolumnowej wersji wstępnej ze zmianą w jednej linijce. Trzymaj figury w formatach wektorowych, a równania w standardowych środowiskach, a zamiana układu będzie prawie bezbolesna.