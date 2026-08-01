---

title: "Postać, która ucieka z sekcji"
description: "Bariery pływające, rozmiar i rozmieszczenie w ostateczności."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# Postać uciekająca z sekcji

Umieszczasz cyfrę na końcu Części 4, a ona drukuje się w środku Sekcji 5 lub łączy się z trzema innymi na końcu rozdziału. Liczby to elementy zmiennoprzecinkowe: LaTeX traktuje ich położenie w źródle jako punkt początkowy, a nie docelowy, i przesuwa je, aby strony były pełne. Pływaki również muszą pojawiać się w odpowiedniej kolejności, więc jedna figurka, której nie można umieścić, blokuje każdą figurkę znajdującą się za nią. Ogólny system rozmieszczania jest opisany w [gdzie faktycznie lądują pływaki](/learn/position-figures/). Ta lekcja to drabina eskalacji, gdy pływak kończy się w miejscu, którego nie możesz zaakceptować.

## Krok pierwszy: sprawdź opcje rozmieszczenia

Upewnij się, że w środowisku jest napisane `[htbp]`, a nie samo `[h]`. Litery zezwalają na umieszczenie float tutaj, na górze strony, na dole lub na dedykowanej stronie float. Przyznanie tylko `h` jest najczęstszą przyczyną niekontrolowanej liczby, ponieważ gdy na bieżącej stronie nie ma już miejsca, LaTeX nie ma nigdzie legalnego miejsca i przenosi liczbę zmiennoprzecinkową do przodu w nieskończoność.

## Krok drugi: przenieś kod

Pływak może dryfować później niż jego pozycja źródłowa, ale nigdy wcześniej. Jeżeli rysunek pojawia się za późno, przesuń środowisko wyżej w źródle, najlepiej tuż przed akapitem zawierającym jego pierwszy `\ref`. Ta jedna zmiana rozwiązuje zaskakującą liczbę skarg dotyczących miejsc docelowych.

## Krok trzeci: ogrodź sekcję

Pakiet `placeins` udostępnia `\FloatBarrier`, polecenie wymuszające umieszczenie wszystkich oczekujących elementów zmiennoprzecinkowych, zanim tekst będzie kontynuowany:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Umieść barierę na końcu sekcji, a żadna figurka z tej sekcji nie przedostanie się do następnej. LaTeX może wstawić dodatkową przestrzeń pionową w celu przepłukania pływaków, co jest zwykle akceptowalną ceną w pobliżu podziału sekcji.

## Krok czwarty: młotek H

Pakiet `float` dodaje specyfikator przez duże `H`, który całkowicie usuwa float:

```latex
\usepackage{float}
\begin{figure}[H]
```

Cyfra „[H]” jest drukowana dokładnie tam, gdzie znajduje się jej kod, np. duży akapit. Kosztem jest to, że LaTeX nie jest już w stanie zrównoważyć strony wokół niej, więc możesz otrzymać dużą pustą lukę, gdy figura nie mieści się na pozostałej przestrzeni. Traktuj to jako ostateczność w przypadku jednego lub dwóch upartych pływaków, a nie rozwiązanie domyślne.

## Krok piąty: zmniejsz sylwetkę

Bardzo duże elementy zmiennoprzecinkowe są odkładane, ponieważ na niewielu stronach jest dla nich miejsce. Zmniejszenie `width=0,9\textwidth` do `0,7\textwidth` lub przycięcie białych znaków z pliku obrazu często pozwala LaTeXowi na umieszczenie figury, którą zepchnięto na koniec rozdziału.

Jeden nawyk, który warto zachować: wykonaj to strojenie raz, gdy tekst będzie stabilny. Każdy dodany lub usunięty akapit powoduje przetasowanie stron, więc operacja umieszczania podczas pisania wymaga wysiłku, który będziesz musiał powtórzyć.