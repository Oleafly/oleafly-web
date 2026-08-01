---

title: "Współautor bez aktywnego kursora"
description: "Poprawki, foldery współdzielone plus Git i posiadanie oddzielnych plików rozdziałów."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Współautor bez aktywnego kursora

Wspólne edytowanie w czasie rzeczywistym, podczas którego obserwujesz ruch kursora współautora, to model sprzedawany przez redaktorów w chmurze. Wiele dobrych prac powstaje bez tego. Kiedy autorzy pracują lokalnie, niezawodnym wzorcem jest współpraca asynchroniczna oparta na Git: każda osoba edytuje na swoim własnym komputerze, a zmiany są celowo scalane, a nie znak po znaku. Wymaga nieco większej koordynacji i odwdzięcza się pracą w trybie offline, pełną historią i brakiem zależności od niczyjego serwera.

## Git jako szkielet

Standardowa konfiguracja to wspólne repozytorium, zwykle w GitHub, z którego wszyscy pobierają pliki i do którego przesyłają dalej. Każdy autor pracuje w sesjach: pobieraj najnowszy stan, zapisuj, zatwierdzaj, wypychaj. Ponieważ LaTeX to zwykły tekst, Git automatycznie łączy równoległe zmiany w różnych częściach artykułu, a konfiguracja zajmuje kilka minut. [Umieść artykuł w GitHubie](/learn/sync-with-github/) obejmuje to. Kiedy jeden ze współpracowników nie może lub nie chce korzystać z hosta Git, poprawki wypełniają lukę: `git format-patch` zamienia zatwierdzenia w małe pliki, które możesz wysłać e-mailem, a odbiorca stosuje je za pomocą `git am`, zachowując autorstwo i historię nienaruszone. Jest to stary przepływ pracy i nadal działa wszędzie tam, gdzie działa poczta elektroniczna.

Hybryda działa również, gdy współautor nalega na zsynchronizowany folder: dla wygody przechowuj udostępnioną kopię w Dropbox lub Syncthing, ale pozwól jednej osobie zarządzać historią Git i wykonywać scalanie. Nie kieruj bieżących pobrań Git dwóch osób do tego samego zsynchronizowanego folderu, ponieważ konflikty synchronizacji wewnątrz katalogu `.git` powodują uszkodzenie repozytoriów.

## Podziel dokument według plików

Scalanie staje się rzadkie, gdy ludzie rzadko dotykają tego samego pliku. Podziel rękopis tak, aby każdy rozdział lub sekcja znajdowała się w osobnym pliku, pobranym z cienkiego pliku `main.tex` za pomocą `\input{chapters/methods}`. Mechanika jest dostępna w [Podziel dokument na pliki](/learn/split-chapter-files/). Następnie przypisz własność: każdy współautor szkicuje we własnych plikach, a jeden integrator zajmuje się preambułą, połączeniem i ostatecznym odczytaniem, aby zapewnić spójność notacji i tonu. Odzwierciedla to sposób, w jaki zespoły programistyczne unikają wzajemnego deptania, i działa z tych samych powodów.

## Co właściwie idzie nie tak

Błędem, którego należy unikać, jest to, że dwie osoby edytują ten sam akapit w tym samym oknie czasowym. Git oznaczy to jako konflikt, a konflikty LaTeX-owe są czytelne, ale żmudne do rozwiązania, więc najtańszym rozwiązaniem jest rozwiązanie społecznościowe: szybka wiadomość mówiąca „Dziś jestem na wstępie” zapobiega prawie wszystkim z nich. Dwa nawyki pisania redukują resztę. Zachowaj jedno zdanie w każdym wierszu źródłowym, aby równoległe edycje sąsiadujących ze sobą zdań w ogóle nie kolidowały ze sobą, i wyciągaj bezpośrednio przed każdą sesją pisania, aby zawsze edytować najnowszy tekst.