---

title: "Papier, od góry do dołu"
description: "Piesza wycieczka po każdej części artykułu badawczego i jednym zadaniu, jakie wykonuje każda część."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Papier, od góry do dołu

Artykuły badawcze wyglądają zastraszająco, dopóki nie zorientujesz się, że są złożone z tych samych tuzinów części, mniej więcej w tej samej kolejności, za każdym razem. Kiedy już poznasz zadanie każdej części, możesz szybciej czytać artykuły i pisać je, nie wpatrując się w pustą stronę. Oto wycieczka.

## Sprawa frontu

| Część | To jedno zadanie |
|---|---|
| Tytuł | Spraw, aby prawy czytelnik przestał przewijać. |
| Autorzy | Powiedz, kto wykonał daną pracę i do kogo wysłać e-mail. |
| Streszczenie | Sprzedaj cały artykuł na 150-250 słów. |
| Słowa kluczowe | Pomóż wyszukiwarkom i indeksatorom poprawnie zapisać Cię. |

Tytuł i streszczenie stanowią większość rekrutacji. Dziewięćdziesiąt procent Twoich potencjalnych czytelników nie zobaczy nic więcej, dlatego [streszczenie dostaje własną lekcję](/learn/write-an-abstract/) i [strona tytułowa ma własną mechanikę LaTeX-ową](/learn/title-page/).

## Ciało

| Część | To jedno zadanie |
|---|---|
| Wprowadzenie | Wyjaśnij, dlaczego problem jest ważny i jaki wkład wnosisz. |
| Powiązana praca | Umieść swoją pracę wśród wszystkiego, co było wcześniej. |
| Metoda | Opisz, co zrobiłeś wystarczająco dokładnie, aby je odtworzyć. |
| Eksperymenty / wyniki | Pokaż dowody na to, że metoda działa. |
| Dyskusja | Uczciwie interpretuj dowody, także tam, gdzie są słabe. |
| Wniosek | Przeformułuj wniosek i wskaż, co będzie dalej. |

Ciało jest argumentem wypowiadanym etapami: tutaj jest problem, tutaj jest nasz pomysł, tutaj jest dowód, że działa, oto co to oznacza. Jeśli sekcja nie rozwija tego argumentu, jest dopełnieniem. Więcej informacji na temat każdego z nich znajdziesz w [wprowadzenie i prace pokrewne](/learn/introduction-and-bound-work/) i [sekcje maszynowni](/learn/methods-results-discussion/).

## Sprawa pleców

| Część | To jedno zadanie |
|---|---|
| Podziękowania | Podziękuj fundatorom, pomocnikom i recenzentom wersji roboczych. |
| Referencje | Wymień wszystkie źródła, które cytowałeś, sformatowane zgodnie z zasadami miejsca. |
| Dodatek | Przechowuj próbki, dodatkowe tabele i szczegóły, które zakłócałyby przepływ. |
| Materiał uzupełniający | Przenoś kod, dane i filmy, które nie mieszczą się w pliku PDF. |

Referencje nie są ozdobą, są dowodem, na którym opierają się Twoje twierdzenia. Zobacz [przypisy, odniesienia i dodatki](/learn/footnotes-references-appendix/), aby dowiedzieć się, kto co czyta, oraz [cytaty](/learn/add-citations/), aby zapoznać się z mechaniką LaTeX-a.

## Szkielet w LaTeX-ie

Większość z nich jest mapowana bezpośrednio na polecenia, które już znasz:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Polecenia podziału na sekcje obsługują numerację i spis treści zgodnie z opisem w [sekcje i struktura](/learn/sections/).

## Gdzie dalej iść

Jeśli nie masz doświadczenia z artykułami jako gatunkiem, zacznij od [czym właściwie jest artykuł naukowy](/learn/what-is-a-research-paper/). Jeśli masz zamiar coś napisać, reszta tej ścieżki omawia każdą część w kolejności, od [abstraktów](/learn/write-an-abstract/) do [ile matematyki faktycznie potrzebujesz](/learn/how-much-math/). Przeczytaj fragment, w którym utknąłeś, napisz go, powtórz.