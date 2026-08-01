---

title: "Projekt przeglądarki a folder na dysku"
description: "Wygoda w chmurze w porównaniu z własnością lokalną, pracą offline i prawdziwym Gitem."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Projekt przeglądarki a folder na dysku

Kiedy zaczynasz pisać LaTeX-a, stajesz przed decyzją: czy Twój projekt będzie umieszczony w zakładce przeglądarki na cudzym serwerze, czy w folderze na Twoim własnym dysku? Obydwa modele generują ten sam plik PDF. Różnią się tym, kto przechowuje źródło, co się dzieje, gdy sieć przestaje działać i jaką część otaczającego zestawu narzędzi kontrolujesz.

## Co daje każdy model

| | Chmura (np. na odwrocie) | Lokalnie (Oleafly, TeX Live) |
| --- | --- | --- |
| Konfiguracja | Natychmiastowe, nic do instalowania | Jedna instalacja |
| Nieaktywny | ograniczona | Edycja zawsze działa; kompiluje uruchamiane z pakietami buforowanymi |
| Prywatność | Dostawca przechowuje Twoje projekty | Pliki pozostają na Twoim dysku |
| Git | Przez most synchronizacji | Natywny, prawdziwe repozytorium w folderze |
| Współpraca | Kursory czasu rzeczywistego | Git, poprawki, foldery współdzielone |
| Koszt | Poziom bezpłatny plus subskrypcje | Bezpłatne |

Projekt w chmurze to wiersz w bazie danych renderowany za Ciebie przez usługę. Projekt lokalny to katalog, który możesz otworzyć w menedżerze plików, skopiować na dysk USB, przeszukać dowolnym narzędziem i wersję za pomocą zwykłego Gita. Ta różnica wydaje się abstrakcyjna, dopóki ostateczny termin nie zbiegnie się z awarią, zmianą paywalla lub lotem.

## Kiedy chmura jest właściwym wyborem

Prawdziwą zaletą chmury jest współedytowanie w czasie rzeczywistym. Jeśli trzech współautorów musi wpisać ten sam akapit w ostatniej godzinie przed upływem terminu i żaden z nich nie zainstaluje oprogramowania, praktycznym rozwiązaniem będzie edytor przeglądarki. Obecnie nic lokalnego nie zastępuje jednoczesnych kursorów.

## Kiedy lokalność jest właściwym wyborem

Lokalnie wygrywa, gdy wersja robocza jest poufna lub niepublikowana, gdy pracujesz na samolotach lub w sieciach z ograniczeniami, gdy liczby i dane są duże lub gdy chcesz, aby historia wersji była niezależna od poziomu subskrypcji. Lokalne repozytorium Git rejestruje Twoje zmiany niezależnie od tego, czy jutro będzie dostępna jakakolwiek usługa, czy nie, a ten sam folder działa z terminalem, edytorem kodu lub klonem współpracownika.

Oleafly jest zbudowany dla lokalnej strony tej tabeli: kompilator jest dostarczany wewnątrz aplikacji, projekty to zwykłe foldery z prawdziwą historią Git, a opcjonalna sztuczna inteligencja działa z własnym kluczem. Dłuższe porównanie znajduje się na [blogu](/blog/local-first-vs-cloud-latex-editors/), a dokumentacja opisuje [jak te dwa modele mogą ze sobą współpracować](/docs/why-oleafly/) w GitHubie.