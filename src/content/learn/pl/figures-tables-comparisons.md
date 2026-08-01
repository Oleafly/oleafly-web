---

title: "Artykuł stanowią ilustracje, tabele i porównania"
description: "Podpisy na wynos, tabele porównawcze, wykresy a tabele i spójność wizualna."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Na papierze znajdują się rysunki, tabele i porównania

Oto jak zapracowany recenzent faktycznie czyta Twoją pracę: streszczenie, następnie przeglądanie wszystkich rycin i tabel, a na koniec być może tekst. Jeśli Twoje elementy wizualne opowiadają historię same w sobie, wygrałeś połowę recenzji, zanim przeczytany zostanie chociaż jeden akapit. Zaprojektuj je tak, jakby były papierem. Dla wielu czytelników tak.

## Każda figura wymaga podpisu na wynos

Podpis „Wyniki zbioru danych A” marnuje najcenniejszą nieruchomość w gazecie. Podpis mówiący: „Nasza metoda (niebieska) odpowiada wartości bazowej za połowę kosztów; różnica zwiększa się wraz z rozmiarem modelu” mówi recenzentowi dokładnie, jakie wnioski wyciągnąć. Zapisz podpisy jako twierdzenia, a następnie pozwól, aby postać je udowodniła. Czytelnik powinien być w stanie przeczytać tylko podpisy i zrekonstruować argumentację. Mechanika podpisów i numeracji jest dostępna w [podpisach i etykietach](/learn/captions-labels/).

## Tabele porównawcze: ulubione przez recenzentów

W artykułach empirycznych dominują dwa wzorce tabel:

**Tabela wartości wyjściowych.** Twoja metoda w porównaniu z wcześniejszą pracą, po jednym rzędzie w każdym, najlepsze liczby pogrubione. Uwzględnij oczywiste linie bazowe, nawet jeśli przegrają mocno. Pominięcie dobrze znanej wartości bazowej można odczytać jako ukrycie czegoś.

**Macierz znaczników wyboru.** Możliwości z boku, metody u góry, znaczniki wyboru tam, gdzie metoda ma właściwość. Umiejscawia Twoją pracę w jednym miejscu:

| Zdolność | Przeor A | Przeor B | Nasz |
|---|---|---|---|
| Nie ma potrzeby przekwalifikowywania | tak | nie | tak |
| Działa na dużą skalę | nie | tak | tak |
| Otwarte źródło | nie | nie | tak |

Zachowaj uczciwość. Recenzenci znają sztuczkę polegającą na wybieraniu wierszy, w przypadku których Twoja metoda wygrywa.

## Działka czy stół?

Użyj wykresu, gdy kształt jest komunikatem: trend, skrzyżowanie, krzywa skalowania. Użyj tabeli, gdy przekazem są dokładne liczby: wyniki testów porównawczych, z którymi wszyscy będą porównywać. W razie wątpliwości zapytaj, co czytelnik z tym zrobi. Jeśli podają numer, tabelę. Jeśli opiszą trend, spiskuj.

## Spójność to wiarygodność

Małe wizualne niespójności cicho sygnalizują nieostrożność:

- Ta sama rodzina czcionek i rozmiar na wszystkich rysunkach, zbliżony do rozmiaru tekstu głównego po skalowaniu.
- Ten sam kolor dla tej samej metody na każdym wykresie. Jeśli Twoja metoda jest niebieska na rysunku 2, jest niebieska wszędzie.
- Te same konwencje i jednostki etykiet osi w całym tekście.
- Czytelne w rozmiarze wydruku. Jeśli musisz powiększyć, aby przeczytać etykietę zaznaczenia, jest ona za mała.

Jeśli to możliwe, eksportuj formaty wektorowe (PDF, SVG) zamiast zrzutów ekranu. Wykresy bitmapowe z rozmytym tekstem to najszybszy sposób na uzyskanie nieoszlifowanego wyglądu.

## Budowanie ich w LaTeX-ie

Umieszczanie, zmienianie rozmiaru i zarządzanie systemem pływającym opisano w artykule [wstawianie obrazów](/learn/insert-images/), a czyszczenie tabel w artykule [tworzenie tabel](/learn/create-table/). W przypadku diagramów, szkiców architektury i schematów blokowych TikZ tworzy grafikę wektorową dokładnie pasującą do czcionek dokumentu. Zacznij od [wprowadzenia do TikZ](/learn/tikz-intro/). Jeśli pisanie ręczne w TikZ wydaje się powolne, Diagram Composer firmy Oleafly może pomóc w wizualnym szkicowaniu danych TikZ, które następnie można udoskonalić w kodzie.

## Audyt pięciominutowy

Przed przesłaniem sprawdź, czy recenzent odwraca się: czytaj tylko podpisy, w podanej kolejności. Czy opowiadają całą historię? Czy jest coś odważnego, kolorowego lub oznaczonego gwiazdką bez wyjaśnienia? Czy nieznajomy wiedziałby, która metoda jest Twoja w każdej postaci? Napraw to, co się nie udało, a następnie prześlij.