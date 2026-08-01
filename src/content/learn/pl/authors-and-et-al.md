---

title: "Listy autorów, kolejność i et al."
description: "Co i in. środki, konwencje porządku autorskiego według dziedzin i mechanizm kredytowy."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Listy autorów, kolejność i et al.

Lista autorów wygląda jak najprostsza część artykułu. W rzeczywistości jest to gęsta, mała księga kredytowa z zasadami specyficznymi dla danej dziedziny. Błędne odczytanie tego jest klasycznym błędem nowicjusza.

## Co „i in.” oznacza

„I in.” to łacina, skrót od *et alii*, „i inni”. Kiedy w cytacie jest napisane „Vaswani i in. 2017”, oznacza to Vaswaniego i pozostałych autorów, których nazwiska nie są wymieniane ze względu na zwięzłość. To konwencja cytowania, a nie ocena: pozostali autorzy są równie ważni, po prostu nie ma miejsca na wymienianie za każdym razem ośmiu nazwisk.

Style cytatów są obcinane mechanicznie. Wiele stylów wymienia maksymalnie dwóch lub trzech autorów, a następnie przełącza się na „First i in.”. poza tym. Twój styl bibliografii obsługuje to automatycznie, co jest kolejnym powodem, dla którego warto [pozwolić BibTeXowi zarządzać cytatami](/learn/add-citations/), zamiast wpisywać je ręcznie.

## Kolejność autorów to kod, a kod różni się w zależności od pola

| Konwencja | Gdzie | Jak to czytać |
|---|---|---|
| Pierwszy autor zrobił najwięcej | Większość CS, biologii, medycyny | Pierwsze miejsce to nagroda |
| Ostatnim autorem jest PI | Nauki laboratoryjne, duża część ML | Starszy autor kierujący grupą i finansowaniem |
| Alfabetycznie | Teoria CS, matematyka, ekonomia | Zamówienie nie zawiera żadnych informacji |

Ma to znaczenie przy czytaniu CV między polami: środkowa pozycja w polu porządku alfabetycznego nic nie mówi, natomiast w polu pierwszego autora sygnalizuje rolę pomocniczą. Jeśli masz wątpliwości co do konkretnego artykułu, nie wyciągaj zbytnich wniosków. Pisząc samodzielnie, ustal kolejność już wcześniej, najlepiej przed rozpoczęciem pisania. Spory dotyczące kolejności autorów w momencie składania prac to naprawdę żałosny gatunek dramatu akademickiego.

## Wspierająca obsada symboli

Współczesne bloki autorskie zawierają dodatkowe adnotacje:

- **Autor do korespondencji**, często oznaczony symbolem koperty lub gwiazdką: osoba, która zajmuje się przesłaniem i odpowiada na e-mail czytelnika.
- **Równy wkład**, zwykle sztylet lub gwiazdka z przypisem typu „Ci autorzy wnieśli równy wkład”. Często zdarza się, gdy pracą rzeczywiście współkierują dwie osoby.
- **Afiliacje**, dopasowane liczbami w indeksie górnym, jeśli autorzy obejmują instytucje.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Każda klasa miejsca ma swój własny znacznik autora, więc skopiuj wzór z szablonu. Ogólna mechanika zagadnień głównych znajduje się w [lekcji na stronie tytułowej](/learn/title-page/).

## ORCID: Twój stały identyfikator

Nazwy zderzają się i zmieniają. Identyfikator ORCID to trwały identyfikator (16-cyfrowy numer na orcid.org), który podąża za Tobą podczas zmian nazwiska, instytucji i każdego J. Smitha w Twojej dziedzinie. Wiele czasopism wymaga obecnie informacji od odpowiedniego autora. Zarejestruj się raz, dołącz go do zgłoszeń, a Twój zapis publikacji pozostanie jednoznaczny na całe życie.

## Jedna zasada, która nigdy się nie zmienia

Bez względu na konwencję porządkowania, samo autorstwo ma wspólną normę: wszyscy wymienieni na liście wnieśli znaczący wkład w dzieło i wszyscy, którzy wnieśli znaczący wkład, są wymienieni. Autorstwo prezentów i autorstwo duchów są niewłaściwe w większości kodeksów etycznych. Porządek jest polityką; lista jest integralna.