---

title: "Gotowość do pracy z kamerą bez paniki"
description: "Deanonimizuj, dodaj fundusze, osadzaj czcionki i osiągnij limit stron: lista kontrolna wersji ostatecznej."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Gotowość do pracy z kamerą bez paniki

Przyjęty! Po uroczystości nadchodzi ostatni termin: przygotowanie aparatu. Nazwa jest reliktem czasów, gdy wydawcy fotografowali Twoje strony do druku. Dziś oznacza to ostateczną wersję, która trafia do postępowania, dokładnie w takiej postaci, w jakiej czytelnicy będą ją widzieć na zawsze. Żaden redaktor nie poprawia później twoich literówek. Ta część należy do ciebie.

## Co się zmienia między przesłaniem a gotowością do aparatu

Przesłana przez Ciebie wersja została dostosowana do potrzeb recenzentów. Kamera jest gotowa do trwałego nagrywania, a kilka rzeczy ulega zmianie:

| Pozycja | Przesłana wersja | Gotowy do aparatu |
|---|---|---|
| Nazwiska autorów | Ukryte (podwójnie ślepe) | Prawdziwe nazwiska, przynależności, e-maile |
| Podziękowania | Pominięte | Dofinansowanie, granty, podziękowania |
| Limit stron | Limit przeglądu | Często +1 strona, ale dokładnie |
| Blok praw autorskich | Symbol zastępczy lub brak | Blok wydawniczy, DOI, ISBN |
| Autocytowania | Osoba trzecia („Smith i in.”) | Potrafi powiedzieć „nasza wcześniejsza praca” |
| Obalanie obietnic | Obiecał | Właściwie dostarczone |

Deanonimizacja to coś więcej niż ponowne dodanie nazwisk. Wyszukaj u źródła każde miejsce, w którym napisałeś o swojej tożsamości; zobacz [anonimizację w przypadku podwójnie ślepej recenzji](/learn/anonymization-double-blind/), aby poznać zwykłe kryjówki, a następnie odwróć je wszystkie.

## Jeszcze raz dokładny limit stron

Limity dostępności kamer są egzekwowane przez wydawców, a nie tylko przewodniczących, a dodatkowa treść (blok autorski, podziękowania) pochłania miejsce. Jeśli nagle skończy Ci się sześć linijek, zrób to uczciwie: zawęź prozę i liczby, zamiast nadużywać poleceń dotyczących odstępów. Techniki opisane w [limitach stron bez przestępstw](/learn/page-limits-without-crimes/) mają tutaj podwójne zastosowanie, ponieważ wydawcy sprawdzają formatowanie.

## Czcionki muszą być osadzone

To jest ten, który gryzie ludzi. Wydawcy przeprowadzają automatyczne kontrole, a głównym powodem odrzucenia są niezagnieżdżone czcionki, zwykle przemycane w postaci rysunku PDF wyeksportowanego z narzędzia do drukowania. Sprawdź w `pdffonts yourpaper.pdf`: każda czcionka powinna zawierać napis „emb: tak”. Jeśli tak się nie stanie, winowajcą jest prawie zawsze postać; wyeksportuj go ponownie z osadzonymi czcionkami lub jako poprawnie wygenerowany plik PDF.

## Ostateczna korekta: najpierw referencje

Odniesienia są tam, gdzie koncentruje się entropia. Zanim prześlesz:

- [ ] NIE "??" cytaty lub niezdefiniowane odniesienia w logu
- [ ] Każdy wpis bibliograficzny ma miejsce, rok i tytuł o odpowiedniej wielkości liter
- [ ] Nazwiska autorów są pisane poprawnie (ludzie zauważają swoje własne imię i nazwisko)
- [ ] Cytaty dotyczące wyłącznie arXiv zaktualizowane do opublikowanych wersji, jeśli istnieją
- [ ] Adresy URL w odniesieniach nadal są rozpoznawane

Następnie przeczytaj raz na głos całą gazetę. Jest powolny i działa.

## Dziwactwa związane z przesyłaniem źródła

Większość wydawców chce źródła LaTeX-a, a nie tylko pliku PDF, a ich systemy kompilacji są wybredne: dołączaj plik .bbl, unikaj niestandardowych pakietów, przestrzegaj układu plików. Wyeksportuj czysty źródłowy plik ZIP (Oleafly robi to w jednym kroku) i przed przesłaniem przetestuj go od zera w pustym folderze. Jeśli plik zostanie zbudowany tylko z powodu niepotrzebnego pliku na twoim komputerze, system wydawcy się o tym dowie.

## Jednorazowa lista kontrolna

- [ ] Imiona, powiązania, e-maile przywrócone i poprawne
- [ ] Dodano numery podziękowań i wpłat
- [ ] Blokada praw autorskich / informacja DOI wklejona z e-maila wydawcy
- [ ] Limit stron dokładnie spełniony
- [ ] `pdffonts` pokazuje wszystkie osadzone czcionki
- [ ] Korekta referencji
- [ ] Czyste źródło ZIP kompiluje się od zera
- [ ] Przesłano, mając wolny dzień

Potem już na stałe. Czas pomyśleć o [przedstawieniu tego](/learn/present-your-paper/).