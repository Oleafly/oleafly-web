---

title: "Umieść artykuł na GitHubie"
description: "Init, ignoruj ​​pliki Aux, prywatne repo, nawyki, które utrzymują łączenie współautorów przy zdrowych zmysłach."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Umieść artykuł na GitHubie

Manuskrypt LaTeX-owy to zwykły tekst, co sprawia, że ​​idealnie pasuje do Gita. Każda wersja robocza staje się zatwierdzeniem, do którego możesz wrócić, każda zmiana jest widoczna jako różnica na poziomie linii, a GitHub udostępnia kopię poza witryną oraz umożliwia współautorom pobranie bieżącego stanu. Nic z tego nie wymaga zaawansowanego Gita. W artykule potrzeba może pięciu poleceń, używanych konsekwentnie.

## Konfiguracja początkowa

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Uruchom to raz w folderze projektu. Krok `.gitignore` ma większe znaczenie niż się wydaje. Każda kompilacja regeneruje pliki `.aux`, `.log`, `.out`, `.toc` i `.synctex.gz`, a ich zatwierdzenie ukrywa twoje rzeczywiste zmiany pod szumem komputera i tworzy bezsensowne konflikty scalania między współautorami. Śledź tylko to, czego jesteś autorem: źródła `.tex`, bazę danych `.bib`, rysunki i wszelkie pliki klas lub stylów, które przekazałeś Ci z miejsca. Plik PDF jest również produktem kompilacji. Większość zespołów pomija go i tworzy lokalnie, chociaż dołączenie go do oznaczonej wersji jest rozsądnym sposobem na zamrożenie przesłanej wersji. Zachowaj repozytorium jako prywatne, dopóki praca nie stanie się publiczna. Niepublikowany rękopis nie jest przedmiotem indeksowania.

## Nawyki, które utrzymują współautorów przy zdrowych zmysłach

Wprowadź w każdym przypadku jedną logiczną zmianę, taką jak „popraw wprowadzenie do sekcji 3” lub „dodaj tabelę ablacji”. Historię czyta się wówczas jak historię gazety, a złą redakcję można cofnąć bez dodatkowych szkód. Pociągnij przed rozpoczęciem sesji pisania i pchnij, gdy przestaniesz. Konflikty scalania rosną wraz z czasem, jaki gałęzie spędzają osobno. Nigdy nie pchaj na siłę udostępnionej gałęzi, gdy współautorzy ją wyciągną: to pisze historię na nowo pod ich stopami. Trzymaj duże artefakty binarne (zbiory danych, filmy) poza repozytorium papierowym. Połącz się z archiwum lub użyj osobnego repozytorium danych. Git przechowuje każdą wersję każdego pliku binarnego na zawsze.

Jeden nawyk charakterystyczny dla LaTeX-a: pisanie jednego zdania w każdym wierszu źródłowym sprawia, że ​​różnice są znacznie bardziej czytelne, ponieważ edycja jednego słowa jest widoczna jako zmiana w jednej linijce, a nie w zmienionym akapicie.

## Jak Oleafly pasuje

Każdy projekt Oleafly jest zwykłym folderem na dysku, więc te polecenia działają na nim bez zmian. Aplikacja może również automatycznie utworzyć zatwierdzenie Git po każdej udanej kompilacji, co zapewnia precyzyjną siatkę bezpieczeństwa pomiędzy celowymi zatwierdzeniami. Zobacz [Historia Git](/docs/git-history/). Aby poznać wzorce współpracy oparte na tym, w tym wymianę poprawek i własność rozdziałów, zobacz [Współautor bez aktywnego kursora](/learn/offline-collaboration/).