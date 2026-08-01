---

title: "Podwójne zaślepienie zrobione prawidłowo"
description: "Co anonimizować, jak się cytować i metadane, które Cię zdradzają."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Podwójnie zaślepione zrobione dobrze

Podwójnie ślepa recenzja oznacza, że ​​recenzenci nie wiedzą, kto napisał artykuł. Błędne podanie to jeden z niewielu błędów formatowania, który może spowodować odrzucenie artykułu bez przeczytania, dlatego anonimizację traktuj jako listę kontrolną, a nie atmosferę.

## Co musi odejść

| Pozycja | Co robić |
|---|---|
| Nazwiska i afiliacje autorów | Usuń lub zamień na „Anonimowy autor(zy)” |
| Podziękowania | Usuń do przesłania (fundatorzy i współpracownicy identyfikują Cię) |
| Linki do repo i projektów | Zamień na anonimowy link, patrz poniżej |
| Dane specyficzne dla instytucji | „klaster naszego uniwersytetu” bije „klaster GPU Stanford” |
| Sformułowanie „Nasza wcześniejsza praca” | Przepisz w trzeciej osobie, patrz poniżej |
| Loga, znaki wodne, nagłówki | Usuń wszystko, co ma nazwę grupy lub laboratorium |

Wiele klas automatyzuje pierwszy wiersz. W przypadku klasy ACM jest to jedna z opcji:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Inne miejsca udostępniają wariant zgłoszenia swojego szablonu. Miejsca [IEEEtran](/learn/ieee-format-in-practice/) często po prostu proszą o pominięcie bloku autora.

## Cytowanie własnej pracy

Zasada jest prosta: cytuj siebie dokładnie tak, jak cytowałbyś nieznajomego.

Źle: „W naszej poprzedniej pracy [7] pokazaliśmy…”
Po prawej: „Lovelace i wsp. [7] wykazali…”

Nie pomijaj własnych, odpowiednich dokumentów. Recenzenci oczekują cytowania ewidentnie powiązanych prac, a podejrzana luka może zdeanonimizować Cię równie skutecznie jak imię i nazwisko. Jedynym wyjątkiem są naprawdę niepublikowane prace, które zamiast tego można przesłać jako anonimowy materiał uzupełniający.

## Anonimowe artefakty

Recenzenci coraz częściej oczekują kodu i danych. Linki do GitHuba są radioaktywne: nazwa użytkownika jest tam widoczna. Opcje, które działają:

- Usługi stworzone w tym celu (anonymous.4open.science jest standardem branżowym)
- Świeże repozytorium na jednorazowym koncie z wyczyszczoną historią zatwierdzeń
- Dodatkowy plik zip przesłany wraz ze zgłoszeniem, z nazwiskami autorów usuniętymi z nagłówków plików i notatników

Przed przesłaniem sprawdź zip: pliki licencji, `AUTORZY`, metadane notatnika i zakodowane na stałe ścieżki do katalogów domowych (`/home/ada/...`) wszystkie nazwy wycieków.

## Wypadki, które Cię zdradzają

Tekst artykułu jest anonimowy, ale plik PDF może nie być:

- **Metadane PDF.** Pole Autor często jest automatycznie wypełniane w systemie. Sprawdź w `pdfinfo` lub we właściwościach dokumentu przeglądarki i wyczyść je za pomocą `\hypersetup{pdfauthor={}}`.
- **Nazwy plików.** `lovelace-sigconf-final.pdf` cofa wszystko. Nadaj mu nazwę „paper.pdf” lub numer zgłoszenia.
- **Źródła rysunków.** Wykresy wyeksportowane z narzędzi mogą zawierać nazwy użytkowników w metadanych lub w widocznej ścieżce na zrzucie ekranu.
- **Przedruki.** Wysyłanie do arXiv przed przesłaniem jest dozwolone w wielu miejscach, a w innych zabronione. CFP mówi, które. Przeczytaj to. To jest [część wyboru miejsca](/learn/choose-your-venue/).

## Gotowy do aparatu odwraca go z powrotem

Po akceptacji wszystko wraca: imiona, przynależności, podziękowania, prawdziwy link do repo i sformułowanie w pierwszej osobie, jeśli ci się podoba. Zaplanuj godzinę na przepustkę deanonimizującą. Dotyka większej liczby miejsc, niż pamiętasz, a [lista kontrolna gotowa do użycia aparatu](/learn/first-paper-roadmap/) to moment, w którym można złapać maruderów.