---

title: "Studenci inżynierii: szablony IEEE i ACM bez weekendu bólu"
description: "Zacznij od prawdziwego pliku zajęć, przetrwaj dwukolumnowe zmiennoprzecinkowe i równania, zdobądź odpowiednie odniesienia i wersjonuj artykuł, zanim będzie gotowy do kamery."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

Szablony IEEE i ACM nie stanowią opcjonalnej dekoracji. Są poddaniem
formatować. Zaczynając od losowego pliku zip, który ktoś ponownie przesłał trzy lata temu, tak to wygląda
spędzasz noc przed ostatecznym terminem, zmieniając nazwy czcionek i goniąc
„niezdefiniowana sekwencja sterująca” w klasie, której nigdy nie miałeś zamiaru edytować.

Dotyczy to projektów kursów, prac projektowych dla seniorów i pierwszej konferencji
zgłoszenia.

## Zacznij od oficjalnej klasy

Pobierz zajęcia i przykład ze stowarzyszenia lub strony konferencji
*w tym roku*. Umieść `.cls`, dowolny `.bst` i przykładowy `.tex` w swoim projekcie
korzeń. Skompiluj raz, zanim napiszesz choć jedno oryginalne zdanie, aby wiedzieć, że
środowisko działa.

[Galeria szablonów](/templates/) Oleafly i bezpłatna aplikacja instalacyjna zawierają to
śledź popularne miejsca (IEEE, ACM i przyjaciele), a następnie kompiluj za pomocą pakietu
silnik i wcześniej wyłapuj uszkodzone referencje i cytaty w edytorze projektu
gotowy do użycia aparatu. Nadal sprawdź w odniesieniu do zaproszenia do składania dokumentów na ten rok: kolumna
zmiana liczby, limitu stron i stylu bibliografii.

Jeśli konferencja dostarcza zmodyfikowaną klasę, użyj jej, a nie ogólnego IEEEtran
z pamięci.

## Dwukolumnowe reguły zmiennoprzecinkowe

W trybie dwukolumnowym szerokie cyfry używają słowa „figura*” i często pojawiają się tylko na
górę strony. Umieść pływak w pobliżu pierwszego odniesienia i ustaw szerokość na
`\columnwidth` lub `\textwidth` celowo. Podfigury umieszczone obok siebie wymagają ostrożności
szerokości lub wykraczają poza margines.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Jeśli pływak ucieknie trzy strony dalej, zmniejsz go lub podziel panele przed walką
`[H]` przez godzinę: [umieszczenie pływaka](/learn/figure-wrong-position/).

## Równania w wąskich kolumnach

Długie wyprowadzenia przerywają `\szerokość kolumny`. Użyj „multline” lub „split” albo przesuń
wyprowadzenie w załączniku. Nie zmniejszaj czcionki równania aż do linii
jest nieczytelny; zauważają recenzenci. Licz tylko równania, które faktycznie cytujesz.

Algorytmy należą do środowisk „algorytmicznych”/„algorytmicznych” o rozmiarze
kolumna, a nie zrzuty ekranu IDE.

## Referencje

Style numeryczne IEEE i style ACM nie zgadzają się co do szczegółów. Skorzystaj z bibliografii
styl, z którym dostarczany jest szablon. Nie wymyślaj hybrydy roku autora i
numery nawiasów.

Zanim kamera będzie gotowa, sprawdź poprawność pliku .bib pod kątem brakujących pól:
[Walidator BibTeX](/tools/bibtex-validator/). Eksport naukowców jest nieuporządkowany; czysty
klucze („autor: rok: słowo kluczowe”) i popraw tytuły, które pojawiły się WIELKIMI LITERAMI.

Cytuj zbiory danych i oprogramowanie, gdy miejsce tego oczekuje. Brakujący DOI jest łatwiejszy
naprawić teraz, niż w oknie portalu „aktualizuj gotowość aparatu”.

## Limity stron bez przestępstw

Limity stron są rzeczywiste. Nie zgniatać marginesów poniżej szablonu, ustawić
`\scriptsize` dla całej sekcji wyników lub ukryj tekst wewnątrz dużych cyfr.
Wytnij zawartość. Przenieś próbki i dodatkowe wykresy do dodatku lub rozszerzonego arXiv
wersję, jeśli połączenie na to pozwala. Zadbaj o czytelność zgłoszenia. Dłuższa lista kontrolna:
[limity stron bez przestępstw](/learn/page-limits-without-crimes/).

## Kontrola wersji jest teraz częścią raportu laboratoryjnego

Zarówno starsze projekty, jak i artykuły konferencyjne korzystają z zatwierdzeń po każdym
pomyślna kompilacja. Redaktor naukowy, np
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) przechowuje prawdziwy Git
obok plików PDF, SyncTeX i diagnostyki na żywo, aby nie wysyłać plików ZIP
pliki o nazwie `submission_really_final.zip`. Prywatne piloty nie są publikowane
pracuj poza publicznym GitHubem, dopóki nie pozwolą na to zasady.

Oznacz lub wyślij wiadomość o dokładnym zatwierdzeniu przesłanym do portalu.

## Przepływy pracy zespołu

Własne sekcje autorstwa studenta. Jedna osoba jest właścicielem `.bib` i pliku klasy. Połącz
poprzez żądania ściągnięcia, jeśli grupa jest wystarczająco duża. Skompiluj pełny plik PDF w formacie a
harmonogram, więc integracja nie odbywa się tylko poprzedniego wieczoru.

Jeśli członek zespołu edytuje tylko program Word, wyeksportuj dla niego i zachowaj TeX jako źródło:
[współautorzy posługujący się tylko językiem Word](/learn/collaborator-uses-word/).

## Tydzień gotowości aparatu

Instrukcje gotowe do użycia w aparacie często różnią się od formatu recenzji, dlatego pobierz je ponownie
oni. Zaktualizuj blok autora, finansowanie i formularze dotyczące praw autorskich IEEE/ACM jako
wymagane. Skompiluj ponownie z ostatecznymi opcjami klasy (często różnymi od
recenzja). Sprawdź każdą figurę pod kątem dpi i czcionek; osadzaj czcionki w pliku PDF, jeśli
portal tego wymaga. Następnie prześlij plik PDF i dowolny plik zip źródłowy wymagany przez portal
zarchiwizuj oba.

## Blok autorski i przynależność

Bloki autorskie IEEE/ACM są wybredne: równe oceny wkładu, wielokrotne
stowarzyszeń, dzięki agencjom finansującym. Skopiuj autora przykładowego pliku
ostrożnie zaznaczaj i zastępuj tekst. Wymyślenie własnego stosu „dziękuję” to:
częste źródło niedopełnionych pól i brakujących przecinków w pliku PDF.

## Ślepa recenzja

Jeśli rozmowa jest podwójnie ślepa, usuń nazwiska, fundusze identyfikujące laboratorium i
samocytuje stwierdzenie „w naszej poprzedniej pracy”. Włącz je ponownie, aby były gotowe do użycia w aparacie.
Zachowaj opcję klasy „ślepej” lub mały plik przełączający, aby nie edytować ręcznie
tożsamość w sześciu miejscach.

## Konkluzja

Zacznij od oficjalnej klasy, przestrzegaj układu dwukolumnowego i dopasowuj
styl bibliografii, z którym dostarczany jest szablon. Wersja wszystkiego. The
treści inżynieryjne są wystarczająco trudne bez fałszywego szablonu z 2019 r.