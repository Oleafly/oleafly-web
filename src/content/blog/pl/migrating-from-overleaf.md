---

title: "Lata na Overleaf, wówczas lokalna przestrzeń badawcza"
description: "Overleaf uczynił współpracujący LaTeX głównym nurtem, a bezpłatne konta nadal mierzą współpracę, historię, sztuczną inteligencję i czas kompilacji. Gdzie przeglądarka pozostaje cienka (wznowienia, rozwidlenia, eksport, praca na wielu silnikach) i jaki wolny lokalny obszar roboczy na dysku wypełnia."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Przez lata [Overleaf](https://www.overleaf.com/) było domyślną odpowiedzią na pytanie „jak w ogóle uruchomić LaTeX?” Udostępnij link. Obserwuj kursor współautora. Kompiluj w chmurze. Ta rampa jest autentyczna. W przypadku papierowych sprintów dla wielu graczy nadal tak jest.

Kiedy już tam zamieszkasz, aby napisać pracę dyplomową, pakiet dotyczący rynku pracy lub napisać długą solową wersję, darmowy produkt zaczyna wydawać się mały. Jeden współpracownik. Historia mierzona w godzinach. AI liczona dziennie. Kompiluj limity czasu. Git i pełna historia kryją się za płatnymi planami lub licencją kampusową, którą tracisz po wyjściu. Przeglądarka doskonale sprawdza się jako przeglądarka ze współdzielonym buforem. Nigdy nie został zbudowany jako pełna przestrzeń robocza do celów badawczych: CV ze sprawdzeniem ATS, rozwidlenie projektu, eksport do wielu formatów, Typst obok LaTeX-a, tygodnie offline, nieograniczona historia lokalna.

Oto, gdzie Overleaf nadal zarabia na otwartej karcie, gdzie kończy się bezpłatny poziom i zakres produktów oraz co się zmienia, gdy te zwykłe pliki zostaną udostępnione w bezpłatnej aplikacji komputerowej ([Oleafly](https://github.com/Oleafly/Oleafly)), którą pobierzesz raz.

## Które lata na Overleaf faktycznie cię kupiły

**Zalety, które nadal obowiązują**

- Możliwość edytowania, komentowania i czatowania w czasie rzeczywistym przez wielu użytkowników - nadal najlepsza opcja dla „trzech osób, jednego streszczenia, dziś wieczorem”
- Zerowa instalacja dla współautora, który zawsze otworzy tylko link
- Ogromna galeria szablonów i pamięć mięśniowa wydawcy / instytucji
- Licencje Campus SSO i witryny, dzięki którym płatne funkcje czują się swobodnie, gdy jesteś na terenie kampusu
- Przełącznik wizualny/kodowy i dopracowanie, które nauczyło dziedzinę, co oznacza „LaTeX online”.

**Gdzie pozostaje cienki (szczególnie wolny)**

Opublikowane plany indywidualne (sprawdź ponownie [Cennik na okładce](https://www.overleaf.com/user/subscription/plans); liczby się przesuwają):

| Bezpłatne | Płatne / organizacja |
| --- | --- |
| **1 współpracownik** na projekt | 10 (Student/Standard) lub nieograniczona (Pro) |
| **5 zastosowań AI dziennie** | Wyższe metry; pełny Asystent na płatnym; Pro = maksymalna sztuczna inteligencja |
| **Podstawowy limit czasu kompilacji** | **24×** podstawowy limit czasu |
| **Historia: ostatnie 24 godziny** | Pełna historia |
| Integracje (Git/GitHub, Dropbox, Zotero/Mendeley,…) | Premium na wielu planach |
| Student ~8–10 USD/mies. · Standard ~17–21 USD/mc · Pro ~33–42 USD/mc · uczelnie: kontakt sprzedaż | |

Zatem darmowy poziom jest prawdziwym edytorem do pracy w chmurze głównie w pojedynkę. Zamienia się w wersję demonstracyjną, gdy potrzebujesz drugiego współautora, wersji z ostatniego miesiąca, dłuższych kompilacji lub więcej niż pięciu podpowiedzi AI.

Istnieje druga kwestia, która nie dotyczy ściany płatniczej: do czego służy produkt. Overleaf optymalizuje pod kątem wspólnych dokumentów LaTeX w przeglądarce. Jest słabszy jako miejsce do:

- Posiadaj portfolio artykułów, prac dyplomowych, plakatów i życiorysów z rozwidleniem i pochodzeniem
- Eksportuj ten sam projekt do programów Word, HTML, Markdown, PowerPoint (Beamer), EPUB bez konieczności korzystania z innych narzędzi
- Uruchom wstępną inspekcję ATS/dostępności, zanim aplikacja o pracę opuści Twoje ręce
- Trzymaj Typst i Markdown obok LaTeX-a w jednej bibliotece i jednym modelu Git
- Pracuj w trybie offline w samolocie lub w zamkniętej sieci szpitalnej
- Używaj sztucznej inteligencji z własnym kluczem lub modelem lokalnym, z każdą edycją jako różnicą zatwierdzenia
- Traktuj historię jak prawdziwego Gita, którego możesz otwierać w terminalu na zawsze

To są problemy biurka badawczego. Na odwrocie zoptymalizowano najpierw pod kątem gry wieloosobowej; reszta biurka nigdy nie miała takiej samej wagi.

## Pisanie na papierze: obie strony

**Strona na odwrocie.** Udostępnianie wersji roboczej w połowie akapitu przebiega bezproblemowo. Komentarze są aktywne w dokumencie. Dla grup, które nigdy nie dotkną Gita, jest to cały produkt. Redaktor jest kompetentny. Podgląd jest odpowiedni dla większości artykułów. Nigdy nie jesteś osobą, która musi instalować TeX Live dla studenta.

**Tam, gdzie pisanie na papierze wciąż boli.** Inteligencja obejmująca cały projekt jest ograniczona w porównaniu z stacjonarnym edytorem badań zbudowanym wokół pełnego indeksu: zmiana nazwy makra w poszczególnych rozdziałach, sprawdzanie na żywo `\cref` i cytowań z wieloma klawiszami, widoki struktury na 200-stronicowym drzewie, podgląd KaTeX podczas pisania, gramatyka ignorująca `\polecenia`. Darmowe przekroczenia limitu czasu kompilacji dotyczą skomplikowanych tez. Darmowa historia wyparowuje po jednym dniu. Tak naprawdę nie można przenieść wersji przesłanej do gałęzi eksperymentu w taki sam sposób, w jaki forkujesz repozytorium — duplikujesz projekt w chmurze i masz nadzieję, że pamiętasz, która jest która.

**Strona liściasta.** Artykuł jest wieloplikowym projektem na dysku. Przejście do definicji w całym projekcie, referencje, zmiana nazwy, diagnostyka ref/cite na żywo (w tym niechlujna rodzina `\eqref` / `\cref`), widoki struktur, uzupełnienia zdefiniowanych makr za pomocą rzeczywistych kształtów argumentów, TexLab/Tinymist, jeśli są dostępne, podglądy matematyczne na żywo, offline Harper + Hunspell tylko w prozie. Obszar roboczy PDF z odpornym na przestarzałe oprogramowanie SyncTeX, rozkładówki i zdejmowane okno. Automatyczna kompilacja na procesorze z humanizowanymi błędami. CI na skalę książkową (~6200 linii) to sposób testowania edytora.

**Jak ludzie to zwykle dzielą.** Współtworzenie na żywo pozostaje w Overleaf. Głębokie tworzenie wielu plików, tygodnie offline, nieograniczona kompilacja lokalna i przenoszenie historii lokalnie. Wiele osób robi jedno i drugie na tych samych zwykłych plikach.

## Życiorysy i dokumenty czytane przez maszyny

Na odwrocie utworzymy klasę CV. To, co nie sprawdzi się dobrze, to traktowanie pliku PDF dotyczącego rynku pracy jako produktu: szablonów dostosowanych do ATS, deterministycznego tekstu do wyboru i panelu Preflight, który pokazuje, co faktycznie widzi ekstrakt w stylu parsera (nazwa, sekcje, ryzyko) – z wynikami, na których możesz działać. Twórcy CV w Internecie sprzedają tę historię za miesięczną opłatą i układem pułapek w swoich SaaS.

Oleafly dostarcza szablony zorientowane na CV, Preflight i darmowy Git, więc „życiorys branżowy”, „życiorys akademicki” i „stypendium” to rozwidlone projekty z pełną historią — a nie trzy kopie w chmurze o nazwie `cv_final_v4`.

Jeśli jedynym efektem jest udostępniona praca, pomiń tę sekcję. Jeśli będziesz także wysyłać aplikacje z tego samego biurka, szybko zauważysz różnicę.

## Rozwidlanie, klonowanie, pochodzenie

Istnieje „projekt kopiowania” w chmurze. To, czego chcą biura badawcze, jest bliższe rozwidleniu git: pełna historia, widoczny rodowód, eksperyment bez dotykania drzewa gotowego do użycia kamery. Biblioteka Oleafly traktuje projekty jak książki na półce; fork kopiuje projekt i jego historię w Git; pochodzenie jest widoczne na karcie. Przepływy pracy w stylu klonowania za pośrednictwem GitHub push/pull są bezpłatne.

Historia bezpłatna na odwrocie to 24 godziny. Płatna historia jest lepsza; nadal jest to oś czasu usługi, a nie repo, które przechowujesz w przypadku śmierci konta.

## Eksport i przekazanie

Portale czasopism chcą plików PDF i często źródła ZIP. PI chcą Worda. Strony z kursami wymagają plików PDF. Rozmowy wymagają slajdów. Książki chcą EPUB. Świat Overleaf składa się głównie z plików PDF z chmury LaTeX oraz źródła pobierania. Dotyczy to dużej części środowiska akademickiego.

Menu eksportu Oleafly jest kontekstowe: zawsze PDF i źródłowy zip; Word, HTML, Markdown, zwykły tekst za pośrednictwem zarządzanego Pandoc; PowerPoint z Beamera; EPUB dla projektów przypominających książki; figure PNG ścieżki dla projektów graficznych. Wierność jest różna (szczerze mówiąc, jeśli chodzi o złożony LaTeX → DOCX), ale ścieżka jest dostępna w aplikacji i bezpłatna.

## AI, z licznikiem w świetle dziennym

Na drugiej stronie gratis: pięć zastosowań AI dziennie. Płatne plany podnoszą limit i odblokowują Asystenta. Organizacje mogą wyłączyć sztuczną inteligencję dla wszystkich.

Oleafly: AI domyślnie wyłączona. Twój klucz lub Ollama. Dziewięciu dostawców, jeśli chcesz być hostowany. Agent może edytować, kompilować, czytać logi, sprawdzać tekst PDF, przeszukiwać literaturę. Każdy zapis jest różnicą zatwierdzającą; usunięcie wymaga wyraźnego potwierdzenia; Najpierw punkt kontrolny Git. Inline Ask-AI. MCP dla klientów zewnętrznych. Nie sprzedajemy Ci tokenów.

Hostowana wygoda z dziennym limitem i drabinką subskrypcji lub przynieś własny model i zmiany, które można sprawdzić. Wybierz model zaufania, który możesz wyjaśnić laboratorium lub IRB.

## Rzeczywistość wielosilnikowa

Na odwrocie znajduje się chmura LaTeX (i znajomych). Typst ma swoją własną historię internetową gdzie indziej. Notatki Markdown są dostępne w jeszcze innym narzędziu.

Oleafly obsługuje LaTeX (Tectonic), Typst i Markdown w jednej bibliotece, z zarządzanymi kompilatorami, jednym modelem Git i jedną powierzchnią PDF. Szablony filtrują według silnika. To inny kształt produktu – biurko badawcze, a nie kolejna zakładka LaTeX.

## Offline, prywatność, własność

Przeglądarka: brak sieci, brak edytora. Wersje robocze znajdują się na ich serwerach zgodnie z ich warunkami. Eksport jest Twoim wyjściem, dopóki tak nie jest (dostęp do konta, zmiany planu, ukończenie studiów).

Lokalny obszar roboczy: zwykłe foldery, prawdziwy Git, edycja offline i kompilacje w pamięci podręcznej, opcjonalny ścisły tryb offline. Brak konta Oleafly. Brak telemetrii produktu. Sieć pakietów, cytatów, hostowanej sztucznej inteligencji, GitHub i aktualizacji — kiedy o to poprosisz.

## Gdzie Overleaf wciąż wygrywa

- W tej godzinie pisanie i komentowanie na żywo przez wielu użytkowników
- Współautorzy instalacji zerowej
- Instytucjonalne logowanie jednokrotne i „każdy ma już odkładkę”
- Nawyki wydawcy, które domyślnie otwierają projekt w chmurze

W planach jest tryb wieloosobowy na żywo dla Oleafly. Do tego czasu Git będzie ścieżką współpracy lub zachowasz Overleaf na czas sprintu na żywo, a lokalną aplikację na cały tydzień. Ponieważ wszystko jest zwykłymi plikami, przełączanie się tam i z powrotem jest nudną infrastrukturą, a nie projektem migracji.

## Miejsce, w którym dostępna jest bezpłatna lokalna przestrzeń do pracy

- Pełna głębokość edytora (indeks projektu, makra, struktura, podgląd matematyczny, korekta uwzględniająca prozę, serwery językowe)
- Obszar roboczy PDF z odpornym na przestarzałe oprogramowanie SyncTeX
- Prawdziwy Git + bezpłatna synchronizacja GitHub + rozwidlenie projektu z historią
- Typst + Markdown obok LaTeX-a
- Wyszukiwanie/wklejanie/importowanie cytatów, tworzenie diagramów, inspekcja wstępna, eksport do wielu formatów
- Sztuczna inteligencja pod Twoimi kluczami z różnicami w zatwierdzaniu - lub w pełni lokalna
- 0 $ na zawsze, AGPL, pobierz raz

## Tabela migawek

| | Na drugiej stronie bezpłatnie | Płatne na odwrocie / kampus | Liściaste |
| --- | --- | --- | --- |
| Koszt | Lejek 0 $ | 8–42 USD + miesięcznie lub licencja na witrynę | **0 $ na zawsze** (AGPL) |
| Konto | Wymagane | Wymagane | Brak |
| Tryb wieloosobowy w czasie rzeczywistym | Tak (1 bezpłatna współpraca) | Więcej współpracy | Plan działania; dzisiaj = Git |
| Historia | 24 godziny | Pełny (plan) | Pełny Git na dysku |
| Git/GitHub | Premium | Premium | Wbudowany, bezpłatny |
| Kompiluj | Serwer, podstawowy limit czasu | 24× przekroczenie limitu czasu | Lokalnie, Twój sprzęt |
| Nieaktywny | Nie | Nie | Tak (pakiety buforowane) |
| Silniki | Pierwsza chmura LaTeX-owa | Pierwsza chmura LaTeX-owa | LaTeX + Typst + Markdown |
| Inteligencja projektu | Przeglądarka | Przeglądarka | Pełna wieloplikowa głębokość IDE |
| PDF / SyncTeX | Podgląd przeglądarki | Podgląd przeglądarki | Pełny obszar roboczy + nieaktualna mapa |
| sztuczna inteligencja | 5 zastosowań/dzień | Dozowany / maks. | Twój klucz lub Ollama; różnice w homologacji |
| Wznów / lot wstępny ATS | Zrób to sam | Zrób to sam | Wbudowany |
| Widelec z historią | Skopiuj projekt | Skopiuj projekt | Widelec biblioteki + pełny Git |
| Eksport | PDF + źródło | PDF + źródło | PDF, źródło, DOCX, HTML, MD, PPTX, EPUB… |
| Szablony | Duży zestaw chmur | Duży zestaw chmur | 23 pakiety + 99 pakietów + niestandardowe |
| Strona główna danych | Ich serwery | Ich serwery | Twój dysk |

## Próbuję obu bez dramatów

1. Spakuj źródło Overleaf.
2. Zainstaluj Oleafly z
   [strona z wydaniami](https://github.com/Oleafly/Oleafly/releases/latest).
3. Importuj; skompiluj raz; napisz przez jeden dzień na prawdziwym papierze lub CV.
4. Zachowaj projekt Overleaf dla dowolnego trybu wieloosobowego na żywo, którego nadal potrzebujesz.

Tectonic wciąż może natknąć się na ciężkie zajęcia z wydawców — zgłoś je; kształtują plan działania. Większość artykułów i prac w stylu ACM/IEEE/Elsevier jest w porządku.

## Zamykanie

Overleaf zapracował na swoją dekadę. Darmowy tryb wieloosobowy nadal wydaje się magiczny, gdy trzy osoby potrzebują dziś tego samego akapitu. Jeśli chodzi o własność, głęboką edycję, widelce, eksport, pracę na wielu silnikach, nieograniczoną historię i sztuczną inteligencję, którą kontrolujesz, darmowe lokalne biuro jest bardziej uczciwe. Pobierz Oleafly raz, zachowaj Overleaf na sprinty na żywo, jeśli nadal ich potrzebujesz, i decyduj się na prawdziwych dokumentach, a nie na matrycy funkcji.