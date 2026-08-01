---

title: "Tydzień pisania w Oleafly"
description: "Biblioteka, szablony, kompilacja, SyncTeX, cytaty, historia Git, opcjonalna sztuczna inteligencja."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Tydzień pisania w Oleafly

Tak na co dzień wygląda praca w Oleafly – od pustego projektu po wersję roboczą, którą można wysłać współautorowi. Aplikacja nie wymaga konta ani serwera: projekt to folder zawierający pliki `.tex`, `.bib` i figurki na dysku, a wszystko poniżej działa w tym folderze.

## Dzień pierwszy: zacznij od szablonu

Utwórz projekt w Bibliotece, pusty lub z [szablonu](/templates/) dla popularnych formatów, takich jak artykuły IEEE i ACM lub szkielet pracy dyplomowej. Szablon umożliwia natychmiastową kompilację dokumentu z opcjami klas i preambułą, co jest lepsze niż składanie preambuły linia po linii pierwszego dnia. Naciśnij raz kompilację, aby potwierdzić, że otrzymasz plik PDF, zanim cokolwiek napiszesz.

## Środek tygodnia: pętla zapisu i kompilacji

Większość tygodnia to pętla pomiędzy edytorem a panelem PDF. Edytor automatycznie uzupełnia polecenia, środowiska oraz etykiety i klucze cytatów istniejące w projekcie, a polecenia z ukośnikiem wstawiają większe struktury, takie jak rysunki i tabele, bez zapamiętywania ich schematów. Kompiluj często, ponieważ nowy błąd w tekście, który napisałeś dwie minuty temu, jest łatwy do umieszczenia, podczas gdy błąd pojawiający się po południu zmian już nie. SyncTeX łączy oba panele: kliknij akapit w pliku PDF, aby przejść do wiersza źródłowego, lub przeskocz ze źródła do pliku PDF, co ma największe znaczenie podczas przeglądania określonych stron długiego dokumentu.

## Cytaty na bieżąco

Zachowaj plik `.bib` w projekcie i cytuj za pomocą `\cite{...}` podczas pisania, pozwalając autouzupełnianiu dostarczyć klucze. Dodawanie referencji w czasie pisania jest tanie. Rekonstrukcja trzech tygodni „potrzebnych cytatów” nie jest. Jeśli wpisy pochodzą z Zotero lub z eksportu wydawcy, [walidator BibTeX](/tools/bibtex-validator/) wyłapuje brakujące pola, zanim pojawią się jako dziwnie wyglądające odniesienia. Pełny potok opisano w [Od klucza .bib do cytowania w tekście](/learn/add-citations/).

## Historia bez ceremonii

Oleafly może automatycznie rejestrować zatwierdzenie Git po każdej udanej kompilacji, więc tydzień pozostawia po sobie oś czasu ze stanami roboczymi, które możesz sprawdzić lub do których możesz wrócić. Gdy wersja robocza będzie warta udostępnienia, wypchnij folder do prywatnego repozytorium GitHub; [Umieść artykuł w GitHubie](/learn/sync-with-github/) pokazuje konfigurację.

## Opcjonalnie: asystent

Jeśli dodasz klucz API dla dostawcy hostowanego lub skierujesz aplikację do lokalnego Ollama, asystent może odpowiedzieć na pytania dotyczące Twojego projektu, zaproponować zmiany poza różnicami w zatwierdzeniu i skompilować, aby sprawdzić własną pracę. Opcjonalnie: każdy powyższy krok działa bez niego. Szczegóły znajdziesz w [Asystent w Oleafly](/learn/oleafly-ai/), a szersze założenia projektowe aplikacji znajdziesz w [Pierwsze kroki](/docs/getting-started/) i [Filozofia](/docs/philosophy/).