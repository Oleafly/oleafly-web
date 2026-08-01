---

title: "Warsztat Beyond LaTeX: edytor badań na Twojej maszynie"
description: "Specjalnie zaprojektowany edytor badań z inteligencją obejmującą cały projekt, SyncTeX, korektą offline, dołączonymi kompilatorami, prawdziwym Git i cytatami. Warsztat VS Code + LaTeX nadal jest właścicielem przepisów, usług zdalnych i rynku rozszerzeń."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[Warsztaty LaTeX](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) w VS Code są doskonałe. Bezpłatny, MIT, starannie utrzymany. Jeśli Twój tydzień opiera się na przepisach kompilowanych w dowolnej formie, texdoc, Docker/WSL/remote, Live Share lub rynku z pełnym rozszerzeniem, zachowaj ten stos. Jest stworzony do takiego życia.

Ten post jest przeznaczony dla osób, które chcą mieć aplikację skupiającą się przede wszystkim na dokumentach: wieloplikowe dokumenty, kompilatory, pliki PDF, Git, cytaty, liczby i korekty już połączone ze sobą. Darmowe i otwarte oprogramowanie (AGPL). LaTeX, Typst, Markdown. Zwykłe foldery. Brak konta.

Mapa funkcji i skróty: [Pochodzi z warsztatu LaTeX](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## Redaktor

CodeMirror 6 z indeksem obejmującym cały projekt w LaTeX, Typst, Markdown i BibTeX.

Co tak naprawdę otrzymujesz na co dzień:

- Przejdź do definicji, znajdź odniesienia, zmień nazwy etykiet i makr (ostrzeżenia o kolizjach)
- Sprawdza na żywo uszkodzone referencje, złe cytaty, brakujące dołączenia (`\cref`, `\eqref`, referencje zakresu,…)
- Lokalne + widoki struktury projektu; filtruj i skacz
- Uzupełnienia kluczy, ścieżek i makr zdefiniowanych w projekcie (`\nowe polecenie`, kształty argumentów xparse)
- obsługa `.tex`, `.ltx`, `.sty`, `.cls`; fragmenty argumentów; kontrole środowiskowe
- TexLab dla LaTeX (konfiguracja opcjonalna); Statki Tinymist dla Typst
- Ujednolicona diagnostyka: składnia, kompilacja, obsługa językowa, referencje, cytaty, ortografia, gramatyka
- Podgląd matematyczny KaTeX na żywo; źródło pozostaje edytowalne
- Harper + Hunspell offline, tylko w prozie (zamaskowane polecenia i matematyka)
- Tryb wizualny dla typowych struktur; Krzepa; polecenia ukośnika; zakładki z wieloma plikami
- Następnie następuje wykonywanie poleceń uwzględniających pakiety z dużego korpusu (dane MIT z warsztatu LaTeX, sprzedawane z podaniem źródła)

Obszar roboczy PDF: ciągłe przewijanie, rozkładówki, wyszukiwanie, konspekt, zdejmowane okno. Dwukierunkowy SyncTeX pomiędzy plikami rozdziałów. Mapowanie nadal działa, dopóki trwa przebudowa. Ostatni dobry plik PDF pozostaje aktualny. Cofnij operację do skompilowanego zestawu źródeł, a podgląd będzie mógł być aktualny bez pełnej ponownej kompilacji.

CI w skali książkowej: rękopis ~6200 wierszy, matematyka wielorodzinna, rozdziały, cytaty, korekta, budżety wydajnościowe podczas przewijania/wpisywania/wklejania/cofywania/kompletowania/rekompilacji/SyncTeX.

Warsztat LaTeX jest silnym rozszerzeniem ogólnego środowiska IDE. Oleafly dostarcza tę pętlę dokumentów już zmontowaną, więc nie podłączasz tego samego stosu z ustawień i wyborów z rynku co semestr.

## Kompilatory w aplikacji

Tectonic (LaTeX) i Typst są dostarczane z aplikacją. Markdown poprzez zarządzany Pandoc, kiedy go potrzebujesz. Najpierw skompiluj pakiety pamięci podręcznych; następnie kompilacje w pamięci podręcznej działają w trybie offline. Tryb offline może zablokować kompilator w pamięci podręcznej.

Automatyczna kompilacja (odrzucona, możliwa do anulowania, najnowsze wygrane). Ponowna kompilacja `Cmd/Ctrl-Enter`. Przycisk zatrzymania. Humanizowane karty błędów na linii. Ostatni dobry plik PDF podczas działania nowszej kompilacji.

Przepisy, łańcuchy lateksowe, ucieczki z muszli i niestandardowe `.latexmkrc` pozostają w sterówce Warsztatu LaTeX. Większość artykułów i prac dyplomowych wymaga jedynie niezawodnego nadzorowanego silnika.

Szablony: 23 pakiety startowe (IEEE, ACM, Elsevier, Beamer, praca dyplomowa, życiorysy, blankiety Typst,…) plus 99 w pakietach do pobrania. Zapisz dowolny projekt jako szablon. Opcjonalne generowanie szablonów AI podczas konfigurowania modelu.

## Biblioteka, Git, narzędzia badawcze

Projekty w formie książek: kolor okładki, plakietka silnika, pochodzenie wideł, podgląd ostatniej strony PDF po najechaniu myszką, zakładki, wyszukiwanie `/docs` w każdym dokumencie. Fork przechowuje pełną historię Git na wypadek ryzykownego przepisania obok kopii przesłanej.

Prawdziwy Git od pierwszego dnia. Staging, różnice obok siebie (edytowalne drzewo robocze), odrzuć, przywróć. Automatyczne punkty kontrolne po udanych kompilacjach i bezczynnych edycjach; AI uruchamia punkt kontrolny przed pierwszym zapisem. GitHub opcjonalnie (PAT lub OAuth przepływu urządzeń). Terminal „git log” pasuje do aplikacji.

Wklej DOI / arXiv / tytuł → dedupe → `.bib` → `\cite`. Import zbiorczy BibTeX, RIS, EndNote, Zotero RDF. Wyszukiwanie cytatów w arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Diagram Composer do edytowalnego TikZ. Walidator, tabele, równania, przeszukiwanie laboratoriów, terminy, konwersja plików PDF do LaTeX, obraz do LaTeX z modelem wizyjnym.

## Opcjonalna sztuczna inteligencja

Wyłączone, dopóki go nie skonfigurujesz. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Klucze zaszyfrowane na dysku. Żądania trafiają do wybranego przez Ciebie dostawcy.

Asystent edytuje, kompiluje, czyta logi, wyodrębnia tekst PDF, przeszukuje literaturę, prowadzi plany. Zapisy są różnicami zatwierdzania. Usunięcie wymaga osobnego potwierdzenia. Inline Ask-AI na zaznaczeniu. Loopback MCP dla Claude Code, kursora i przyjaciół. Przy wyłączonej sztucznej inteligencji edytor, kompilacja, Git i cytaty nadal działają.

## Preflight, eksport, prywatność

Preflight: struktura, niezdefiniowane referencje, zduplikowane etykiety, podgląd ekstrakcji w stylu parsera, wyniki zorientowane na czytnik ekranu. Każda flaga ryzyka ma wystarczający kontekst, abyś mógł ją sprawdzić samodzielnie, zamiast ufać wynikowi czarnej skrzynki.

Eksport: zawsze w formacie PDF; DOCX/HTML/Markdown, gdy dostępny jest Pandoc; PowerPoint dla talii; EPUB dla książek; źródłowy ZIP do przekazania.

Brak konta Oleafly. Brak telemetrii produktu. Raporty o awariach otwierają wstępnie wypełniony problem GitHub, który przeglądasz. Sieć pakietów, szablonów, hostowanej sztucznej inteligencji, cytatów, aktualizacji, GitHub. Edycja, kompilacja w pamięci podręcznej, gramatyka, sprawdzanie pisowni i lokalny Git działają w trybie offline.

## Kiedy warsztat LaTeX nadal pasuje

- Przepisy dowolne, latexmk, ucieczka z powłoki, `.latexmkrc`
- texdoc w edytorze
- Docker, WSL, zdalny rozwój
- Udostępnianie na żywo i edycja na żywo dla wielu użytkowników
- Życie na rynku VS Code w zakresie pracy nie związanej z dokumentami

Oleafly jest publiczną wersją beta. Ciężkie pliki klasy wydawcy nadal mogą potknąć się o Tectonic; zgłoś je.

## Spróbuj

1. Pobierz z
   [strona z wydaniami](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS podpisany/potwierdzony notarialnie; Windows może raz skorzystać z SmartScreen).
2. Zaimportuj pliki `.tex`, .bib` i figury (lub zacznij od szablonu).
3. Skompiluj raz, a potem pisz przez jeden dzień na prawdziwym papierze.

Zachowaj zainstalowany kod VS. Te same pliki działają w obu aplikacjach. Jeśli dzień na prawdziwym papierze pójdzie lepiej w Oleafly, przenieś więcej projektów; jeśli przepisy i pilot nadal wygrywają dla danego drzewa, zostaw to drzewo w Warsztacie.