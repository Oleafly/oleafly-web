---

title: "Zdjęcie tablicy do źródła"
description: "Przycinaj, OCR lub multimodalnie, kompiluj, naprawiaj indeksy na oko."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Zdjęcie tablicy do źródła

Wyprowadzenie na tablicy, zeskanowana strona notatek z wykładów, równanie w pliku PDF, z którego nie można skopiować: ręczne przepisywanie matematyki do LaTeX-a jest powolne i podatne na błędy. Nowoczesne narzędzia potrafią większość z tego zrobić ze zdjęcia. Konwersja jest teraz naprawdę dobra, ale wynik traktuj jako wersję roboczą, a nie gotową transkrypcję. Poniższy przepływ pracy jest oparty na tym.

## Zacznij od lepszego zdjęcia

Jakość obrazu ma większy wpływ na wynik niż wybór narzędzia. Strzelaj prosto, a nie pod kątem, ponieważ przekrzywione linie bazowe powodują, że indeksy dolne i górne są niejednoznaczne. Uzyskaj równomierne oświetlenie bez odblasków na tablicy i przytnij ściśle do pojedynczego równania, które chcesz, ponieważ otaczające diagramy i zabłąkane znaki stają się halucynacyjnymi symbolami. Jeśli zdjęcie ma trzy równania, przytnij je do trzech obrazów i przekonwertuj je pojedynczo; wyniki dla poszczególnych równań są stale lepsze niż wyniki dla poszczególnych równań.

## Konwertuj za pomocą posiadanego narzędzia

Do tego zadania służą trzy rodzaje narzędzi. Dedykowane usługi OCR z równaniami są dokładne przy czystych danych wejściowych. Ogólne modele multimodalne akceptują obraz na czacie i zwracają LaTeX, gdy zostaniesz o to poproszony, a ty możesz odpowiedzieć „drugi indeks dolny powinien brzmieć j, a nie i”, aby uzyskać poprawioną wersję. Oleafly ma wbudowaną funkcję przetwarzania obrazu na LaTeX, działającą za pośrednictwem własnego klucza API u dowolnego skonfigurowanego dostawcy, dzięki czemu fragment może przejść ze zrzutu ekranu do źródła bez opuszczania edytora. Aby zapoznać się z konfiguracją, zobacz [Konfiguracja AI](/docs/ai-setup/). Po uzyskaniu wyraźnych danych wejściowych te trzy podejścia są zbieżne, dlatego też powyższe porady dotyczące zdjęć mają większe znaczenie niż decyzja dotycząca narzędzia.

## Skompiluj natychmiast

Wklej wynik do swojego dokumentu w środowisku „równania” i skompiluj, zanim zrobisz cokolwiek innego. Błędy konwersji dzielą się na dwa rodzaje, a kompilator wychwytuje pierwszy rodzaj: niezrównoważone nawiasy klamrowe, niedopasowane ograniczniki „lewy” i „prawy” oraz nieznane polecenia, wszystkie kończą się głośnym niepowodzeniem, a poprawki są mechaniczne. [Brakujący znak dolara](/learn/missing-dollar/) obejmuje najczęstsze z tych błędów.

## Następnie sprawdź matematykę

Drugi rodzaj błędów kompiluje się doskonale i jest błędny. Przeczytaj wyrenderowane równanie w porównaniu z oryginalnym symbolem po symbolu, ze szczególnym uwzględnieniem miejsc, w których konwersja jest niezawodna: indeksy dolne i górne, gdzie małe glify zacierają się i `x_i` staje się `x_j`; liczby pierwsze i kapelusze, które znikają lub migrują; pary podobne do siebie, takie jak `1`, `l` i `I` lub `\rho` i `p`; i ogranicza sumy i całki. To właśnie te szczegóły zmieniają znaczenie formuły, pozostawiając ją wiarygodną typograficznie. Dwie minuty porównania na równanie to cały koszt i jest to znacznie tańsze niż znalezienie przez recenzenta błędnego indeksu w druku.