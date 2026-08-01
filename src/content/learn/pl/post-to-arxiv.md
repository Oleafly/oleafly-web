---

title: "Publikacja pierwszego przedruku arXiv"
description: "Potwierdzenie, kategorie, czyszczenie źródła, licencje i cykl ogłoszeń."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Publikowanie pierwszego przedruku arXiv

Opublikowanie w arXiv powoduje, że Twoja praca staje się publiczna, możliwa do cytowania i oznaczona znacznikiem czasu. Proces ten ma kilka dziwactw, które zaskakują wszystkich za pierwszym razem. Jeśli nie przeczytałeś [czym jest arXiv](/learn/what-is-arxiv/), zacznij od tego, a potem wróć.

## Poparcie: bramkarz przy drzwiach

Nowi zgłaszający w większości kategorii potrzebują wsparcia od uznanego autora arXiv. Jeśli Twoje konto korzysta z akademickiego adresu e-mail i masz współautorów z historią arXiv, często dzieje się to automatycznie lub szybko. W przeciwnym razie zapytaj swojego doradcę lub współautora; system podaje kod polecający umożliwiający ich wysłanie. Załatw to na kilka dni przed planowanym opublikowaniem, a nie wieczorem.

## Wybierz kategorie

arXiv jest podzielony na moderowane kategorie, takie jak `cs.LG` (uczenie maszynowe), `cs.CL` (obliczenia i język), `math.OC` (optymalizacja), `stat.ML`. Wybierasz jedną kategorię główną i opcjonalnie kilka drugorzędnych. Sprawdź, gdzie znajdują się cytowane przez Ciebie artykuły i śledź je. Kategoria podstawowa określa, która lista mailingowa ogłasza Twoją pracę, a zatem decyduje, kto zobaczy ją jako pierwszą.

## arXiv chce Twojego źródła, a nie pliku PDF

To jest ten duży. Jeśli artykuł został napisany w LaTeX-ie, arXiv wymaga źródła LaTeX-a, a nie tylko pliku PDF. Ich system AutoTeX kompiluje go na ich serwerach i tę kompilację pobierają czytelnicy. Konsekwencje:

- Każdy plik, którego potrzebujesz w artykule, musi znajdować się w przesyłanym pliku: rysunki, plik `.bbl` (arXiv nie obsługuje BibTeX-a, więc dołącz wygenerowany plik `.bbl`), pliki stylów, które nie są standardowe.
- Jeśli nie skompiluje się w ich systemie, naprawiasz to, dopóki tak się nie stanie.

## Najpierw wyczyść źródło

Twoje komentarze są dostarczane ze źródłem i każdy może je pobrać. Projekt notatki mówiący: „% TODO: czy to twierdzenie w ogóle jest prawdziwe?” zostanie upubliczniony. Przed przesłaniem:

- [ ] Usuń komentarze. Narzędzie `arxiv-latex-cleaner` automatyzuje to i usuwa również nieużywane pliki.
- [ ] Usuń nieużywane rysunki i stare sekcje
- [ ] Sprawdź, czy nie występują wstydliwe nazwy plików (`final_v7_ACTUALLY_final.tex`)
- [ ] Skompiluj raz oczyszczoną kopię od zera

Pomocna jest tutaj praca w projekcie wspieranym przez Git: w Oleafly możesz rozgałęzić punkt kontrolny, wyczyścić źródło i porównać z oryginałem, aby przed wyeksportowaniem pliku ZIP upewnić się, że nic istotnego się nie zmieniło.

## Licencje

arXiv poprosi Cię o wybranie licencji. Minimalna licencja tylko na arXiv jest powszechną domyślną opcją i zapewnia otwarte opcje w przypadku czasopism. CC BY jest bardziej liberalna. Jeśli artykuł jest kierowany do konkretnego wydawcy, sprawdź jego zasady dotyczące przeddruku, zanim wybierzesz coś nieodwołalnego.

## Cykl ogłoszeń i jego folklor

arXiv publikuje nowe artykuły partiami, według ustalonego harmonogramu w dni powszednie z ostatecznym terminem składania wniosków. Artykuły przesłane zaraz po upływie terminu składania wniosków pojawiają się na górze następnej listy, a mały przemysł chałupniczy zajmujący się folklorem twierdzi, że artykuły z czołowych miejsc cieszą się większym zainteresowaniem. Może. Nie trać z tego powodu snu; dobre streszczenie ma o wiele większe znaczenie niż pozycja na liście.

## Wersje: v1, v2 i po akceptacji

Twój pierwszy post ma wersję 1 i jest trwały: możesz dodawać wersje, ale nigdy ich nie usuwaj. Opublikuj wersję 2, gdy wprowadzisz rzeczywiste ulepszenia, zazwyczaj wersję zaakceptowaną po [recenzji](/learn/peer-review-explained/). Po akceptacji zaktualizuj kopię arXiv o zawartość gotową do kamery (zgodnie z polityką wydawcy) i dodaj DOI lub miejsce w polu odniesienia czasopisma. Czytelnicy będą Ci za to wdzięczni.