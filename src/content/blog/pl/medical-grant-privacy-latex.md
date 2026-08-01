---

title: "Pisanie badań klinicznych i grantów: prywatność, wersje robocze z możliwością śledzenia i LaTeX offline"
description: "Dlaczego autorzy projektów medycznych, zdrowia publicznego i grantodawców przejmują się miejscem przechowywania wersji roboczej i tym, jak lokalny redaktor badawczy korzystający z prawdziwego Gita kompiluje w trybie offline i żadne konto nie pasuje do cykli recenzji."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Manuskrypty kliniczne i opisy grantów często zawierają nawet wrażliwe szczegóły
zanim deidentyfikacja będzie ostateczna. Przekazywanie każdego naciśnięcia klawisza stronie trzeciej
Editor jest decyzją polityczną w równym stopniu, jak preferencje dotyczące narzędzi. IRB, wykorzystanie danych
umowy, a szpitalny IT nie przejmuje się tym, że edytor w chmurze był wygodny
23:00.

Ten post dotyczy pisania i składu w sposób, który możesz wyjaśnić
zgodność. Traktuj to jako poradę dotyczącą przepływu pracy, a nie ocenę prawną.

## Zwykłe pliki są łatwiejsze do uzasadnienia

Folder z rozszerzeniem .tex i liczbami może znajdować się na zaszyfrowanym dysku, w szpitalu
obraz laptopa lub maszyny ze szczeliną powietrzną. Można wskazać zgodność na ścieżce.
Projekty przeglądarek wymagają zaufania do modelu dostępu dostawcy, ścieżki eksportu i
lista podprocesorów.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) jest zbudowany tak
sposób celowo: brak konta, brak telemetrii produktu, projekty jak zwykłe foldery
z prawdziwym repozytorium Git. [Strona prywatności](/privacy/) jest krótka, ponieważ
dokument nie potrzebuje do istnienia serwera Oleafly. Sieć jest przeznaczona dla Ciebie
take (pakiety, opcjonalne wyszukiwanie cytowań, hostowana sztuczna inteligencja, jeśli ją włączysz, GitHub),
nie dla każdego naciśnięcia klawisza wersji roboczej.

Jeśli zasady zabraniają sztucznej inteligencji w chmurze, wyłącz asystenta lub skieruj go na lokalną osobę
modelka. Edytor, pętla kompilacji i Git nadal działają.

## Śledź zmiany bez korzystania z programu Word

Dostawcy PI nadal proszą o „śledzenie zmian”. W LaTeX-ie zwykle oznacza to
Historia Git plus komentarze w formacie PDF od współautorów lub krótki eksport do programu Word dla pliku
osoba, która nie chce niczego instalować. Zachowaj `.tex` jako źródło prawdy;
zobacz [współautorzy, którzy mówią tylko w programie Word](/learn/collaborator-uses-word/).

W Oleafly każdy projekt jest repozytorium Git od pierwszego dnia: automatycznymi punktami kontrolnymi
po udanych kompilacjach i bezczynnych edycjach, porównania obok siebie jednym kliknięciem
przywróć, opcjonalny GitHub, jeśli chcesz mieć prywatny pilot. Można rozwidleć całość
pakiet aplikacji do drugiego projektu (pełna historia), aby spróbować ryzykownego cięcia
bez dotykania przesłanej kopii. Jeśli korzystasz z opcjonalnego asystenta AI, to
punkty kontrolne przed pierwszą edycją i wprowadza zmiany tylko po zatwierdzeniu
różnice.

Nazwij zatwierdzenia po celach lub sekcjach („aim2-methods-cut”), aby PI mógł przeglądać
historię bez czytania różnic jak inżynier oprogramowania.

## Tryb offline jest przydatny w szpitalach

Sieci kliniczne blokują losowe domeny SaaS. Lokalny kompilator ciągle pisze
możliwe pomiędzy sesjami EHR. Oleafly wysyła Tectonic (i Typst) w aplikacji;
pamięć podręczna pakietów po pierwszym użyciu, a tryb offline może odmówić połączenia z siecią
kompilator. Sprawdzanie pisowni i gramatyka działają lokalnie w prozie (pomijają polecenia i
matematyka). Są to ograniczenia, na których zwykle zależy szpitalnemu działowi IT, a więc lokalne
redaktorzy badań pojawiają się często.

SyncTeX i plik PDF obok źródła mają znaczenie, gdy ustalasz limit stron
na komputerze stacji pielęgniarskiej z zawodnym Wi-Fi.

## Szablony, limity stron i inspekcja wstępna

Szablony w stylu NIH i szablony podstawowe dotyczą marginesów, czcionek i tytułów stron.
Pakiety geometrii i czcionek mają większe znaczenie niż sprytne makra. Skompiluj do formatu PDF i
sprawdzaj liczbę stron po każdej większej cięciu, a nie w noc przed portalem
zamyka się. Zacznij od znanego szablonu w galerii, jeśli pasuje; nadal pasuje
aktualne FOA dotyczące czcionek, marginesów i struktury (Cele szczegółowe jako jedna strona
oznacza jedną stronę).

Kiedy plik PDF musi przetrwać czytnik maszynowy (życiorysy, niektóre pliki instytucjonalne).
portale), inspekcja wstępna pokazuje strukturę i wyniki ekstrakcji w stylu analizatora składni
zanim prześlesz. Są to heurystyczne sygnały ryzyka, które możesz odczytać i na podstawie których możesz podjąć działania.

## Współpraca wielu PI

Własne pliki według sekcji lub celu. Jedna osoba jest właścicielem głównego pliku `.bib` lub jest współdzielona
Eksport grupy Zotero. Zgadzam się, czy współautorzy edytują TeX, czy zwracają komentarze w formacie PDF.
Prywatne urządzenia zdalne tylko na zatwierdzonych instytucjonalnych hostach Git, jeśli wymagają tego zasady
to; nie każda wersja robocza dotacji należy do publicznego GitHuba.

## Menedżerowie bibliografii

Współdzielone grupy Zotero eksportują plik .bib, który może odświeżyć wiele PI. Importuj do
projektu, wklej DOI podczas dodawania nowych cytatów i sprawdź brakujące pola
przed przesłaniem, aby lata nie pojawiały się jako „[?]” w złożonym pliku PDF:
[Walidator BibTeX](/tools/bibtex-validator/). Oleafly uzupełnia i sprawdza
klucze cytowań w stosunku do bibliografii projektu podczas pisania, więc są zepsute
Klucze `\cite` pojawiają się przed dziennikiem.

## Liczby i PHI

Nigdy nie umieszczaj danych pacjenta umożliwiających identyfikację na rysunkach lub podpisach przeznaczonych dla:
repo, które inni mogą klonować. Użyj niezidentyfikowanych schematów. Przechowuj wszystko nieruchomo
wrażliwe pod tymi samymi kontrolami, co zbiór danych klinicznych, a nie obok
diagram metod publicznych.

## Co to nie jest

Opcja „najpierw lokalnie” nadal podlega przeglądowi IRB, umowom o wykorzystaniu danych i
deidentyfikacja. Włącz hostowaną sztuczną inteligencję lub naciśnij pilota, a niektóre bajty opuszczą
maszynę zgodnie z zasadami tych usług. Zmiany wprowadzane lokalnie są ustawieniami domyślnymi
ścieżka do napisania wrażliwej narracji: kontrolowany przez ciebie folder, edytor
działa w trybie offline, a historię można przywrócić bez konieczności proszenia o to sprzedawcę
eksport.

## Praktyczna konfiguracja początkowa

1. Utwórz projekt lokalny; włącz kompilację offline po buforowaniu pakietów.
2. Zostaw sztuczną inteligencję wyłączoną, chyba że zasady i zespół uzgodnią dostawcę.
3. Prywatny pilot tylko na zatwierdzonym hoście.
4. Własność sekcji i jeden właściciel bibliografii.
5. Sprawdzanie liczby stron po każdym większym cięciu celów i strategii badawczej.

Napisz tak, jakby specjalista ds. zgodności zapytał, gdzie znajduje się projekt. Jeśli odpowiedź
to „folder na zaszyfrowanym laptopie, historia Git lokalna, opcjonalnie prywatna
Remote”, jesteś w lepszej kondycji niż „konto w serwisie, którego nigdy nie mieliśmy
recenzowane.”