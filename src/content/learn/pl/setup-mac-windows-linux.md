---

title: "Uzyskaj działający TeX na dowolnym systemie operacyjnym"
description: "Oleafly z dołączonym silnikiem lub pełną instalacją TeX Live / MiKTeX."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Zdobądź działający TeX na dowolnym systemie operacyjnym

Lokalne pisanie LaTeX-a wymaga systemu TeX: silnika kompilującego źródło oraz tysięcy pakietów, od których zależą dokumenty. Istnieją dwa rozsądne sposoby, aby je zdobyć. Jedną z nich jest aplikacja z wbudowanym silnikiem, dzięki której kompilacja trwa kilka minut. Druga to pełna dystrybucja TeX-a, która instaluje kompletny zestaw narzędzi wiersza poleceń, z którego może korzystać każdy edytor. Obie ścieżki kończą się w tym samym miejscu: plik `.tex` zamieniający się w plik PDF na Twoim komputerze.

## Ścieżka A: aplikacja z dołączonym silnikiem

Pobierz [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) na komputery Mac, Windows lub Linux. Zawiera silnik Tectonic, więc nie trzeba zarządzać oddzielną instalacją TeX-a: otwierasz aplikację, tworzysz projekt i kompilujesz. Kiedy dokument korzysta z pakietu, którego nie ma, Tectonic pobiera go na żądanie, co wymaga połączenia sieciowego przy pierwszym użyciu danego pakietu, a potem już nic. Ta ścieżka jest odpowiednia dla każdego, kto chce pisać artykuły, a nie administrować instalacją TeX-a i pozostawia na dysku zwykłe pliki `.tex` i `.bib`, które może odczytać każde inne narzędzie.

## Ścieżka B: pełna dystrybucja TeX-a

Zainstalowanie dystrybucji udostępnia `pdflatex`, `xelatex`, `lualatex` i menedżera pakietów jako polecenia systemowe. Na komputerze Mac zainstaluj MacTeX, który jest pakietem TeX Live dla systemu macOS; jeśli pobieranie wielu gigabajtów jest niepożądane, BasicTeX to mały rdzeń, który można rozszerzać za pomocą TeX Live Utility w miarę potrzeb. W systemie Windows najczęściej wybieranym rozwiązaniem jest MiKTeX, który umożliwia instalację brakujących pakietów na bieżąco podczas kompilacji, podczas gdy TeX Live działa równie dobrze. W systemie Linux zainstaluj `texlive-full` z menedżera pakietów od razu dla wszystkiego lub mniejszy schemat, taki jak `texlive-latex-extra` plus narzędzie `tlmgr` do późniejszego dodawania pakietów. Spodziewaj się, że pełna instalacja zajmie trochę czasu i zajmie kilka gigabajtów dysku.

## Sprawdź instalację

Otwórz terminal i poproś silnik o jego wersję:

```bash
pdflatex --version
# or
xelatex --version
```

Baner wersji oznacza, że ​​zestaw narzędzi jest na Twojej ścieżce i jest gotowy. Błąd informujący, że polecenie nie zostało znalezione, zwykle oznacza, że ​​zmiany instalatora w ścieżce nie zostały jeszcze zastosowane; ponowne uruchomienie terminala lub wylogowanie się i ponowne zalogowanie w systemie Windows rozwiązuje problem.

## Którą ścieżkę wybrać

Wybierz aplikację, jeśli dopiero zaczynasz lub po prostu chcesz mieć najkrótszą drogę do skompilowanego pliku PDF. Wybierz pełną dystrybucję, jeśli potrzebujesz określonych silników, kompilacji z wiersza poleceń lub integracji z istniejącym edytorem. Obydwie współistnieją bez konfliktów, więc rozpoczęcie od Ścieżki A i późniejsze dodanie Ścieżki B nic nie kosztuje. Tak czy inaczej, następny krok jest taki sam: skompiluj [swój pierwszy dokument](/learn/first-document/).