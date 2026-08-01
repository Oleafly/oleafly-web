---

title: "Wyjaśniono każde \\\\polecenie we wszechświecie LaTeX"
description: "Globalne odniesienie: setki poleceń i środowisk LaTeX, od jądra po amsmath, hyperref, TikZ, biblatex i Beamer, każde wyjaśnione w jednym wierszu."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Wyjaśnienie każdego polecenia we wszechświecie LaTeX

Ta strona definiuje każde polecenie i środowisko LaTeX, które pojawia się w dowolnej lekcji w Oleafly Learn, a także szersze standardowe słownictwo, które znajdziesz w prawdziwych artykułach. Kernel, amsmath, hyperref, graphx, booktabs, biblatex, TikZ, Beamer i pakiety faktycznie ładowane przez badaczy. Przeglądaj według kategorii lub przeszukaj stronę za pomocą klawiszy Ctrl/Cmd-F w poszukiwaniu polecenia, które właśnie poznałeś. Każdy wpis to jedna linijka: co robi i gdzie ma to znaczenie, z jakiego pakietu pochodzi.

## Klasy dokumentów i konfiguracja

| Polecenie | Co to robi |
| --- | --- |
| `\documentclass{artykuł}` | Pierwsza linia każdego dokumentu: wybiera ogólny układ; artykuł jest domyślnym wyborem dla artykułów. |
| `\documentclass{raport}` | Klasa dla dłuższych raportów: dodaje `\rozdział` i rozpoczyna streszczenie na własnej stronie. |
| `\documentclass{książka}` | Zajęcia dla książek: rozdziały, układ dwustronny, treść przód/główny/tył. |
| `\documentclass{litera}` | Klasa do korespondencji, z poleceniami `\otwieranie`, `\zamykanie` i adresowaniem. |
| `\documentclass{beamer}` | Klasa do prezentacji slajdów zbudowanych ze środowisk „ramkowych”. |
| `\documentclass[11pt,a4paper]{artykuł}` | Typowe opcje klas: rozmiar czcionki (10pt, 11pt, 12pt), papier (papier a4, papier listowy), `twocolumn`, `twoside`, `level`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Ładuje pakiet w preambule, aby dodać funkcje. |
| `\usepackage[margin=1in]{geometria}` | Ustawia marginesy strony i rozmiar papieru (geometrię). |
| `\tytuł{...}` | Przechowuje tytuł dokumentu wydrukowany później przez `\maketitle`. |
| `\autor{...}` | Przechowuje listę autorów dla `\maketitle`; oddziel wielu autorów za pomocą `\and`. |
| `\i` | Separator między nazwiskami autorów wewnątrz `\author{...}`. |
| `\data{...}` | Przechowuje datę pokazaną przez `\maketitle`; `\data{}` to ukrywa, `\date{\today}` pokazuje dzisiaj. |
| `\dzisiaj` | Drukuje bieżącą datę w czasie kompilacji. |
| `\maketitle` | Drukuje blok tytułowy z `\title`, `\author` i `\date`. |
| `\dzięki{...}` | Dołącza przypis do tytułu lub nazwiska autora, np.: w celu uzyskania finansowania lub informacji kontaktowych. |
| `\instytut{...}` | Polecenie przynależności autora używane przez Beamera i klasę Springer LNCS. |
| `\inst{1}` | Znacznik indeksu górnego przynależności na listach autorów LNCS i Beamer: `Ada Lovelace\inst{1}`. |
| `\słowa kluczowe{...}` | Drukuje listę słów kluczowych artykułu w wydawcyklasy takie jak acmart i llncs. |
| `\adres{...}` | klasa listu: przechowuje adres nadawcy dla papieru firmowego. |
| `\podpis{...}` | klasa litery: przechowuje nazwę wydrukowaną pod zamknięciem. |
| `\otwieranie{Szanowni Państwo...}` | klasa listu: drukuje powitanie i rozpoczyna treść listu. |
| `\closing{Z poważaniem,}` | klasa listu: drukuje blok podpisu i podpisu. |
| `\LaTeX` | Drukuje logo LaTeX z podwyższonymi i opuszczonymi literami. |
| `\TeX` | Drukuje logo TeX z obniżonym E. |
| `\input{plik}` | Wkleja w miejsce inny plik .tex, tak jakbyś go tam wpisał. |
| `\include{rozdział1}` | Wprowadza plik rozdziału rozpoczynający się od nowej strony; umożliwia częściową kompilację poprzez `\includeonly`. |
| `\includeonly{rozdział1,rozdział3}` | Lista preambuł ograniczająca, które pliki `\include' faktycznie się kompilują. |
| `\hipersetup{...}` | Konfiguruje opcje hiperrefów, takie jak kolory łączy i metadane PDF. |
| `\AtBeginDocument{...}` | Uruchamia kod zaraz po `\begin{document}`, przydatny przy późniejszej konfiguracji. |
| `\AtEndDocument{...}` | Uruchamia kod tuż przed zakończeniem dokumentu. |
| `\makealettetter` | Tymczasowo zamienia `@` na literę, dzięki czemu możesz używać lub łatać wewnętrzne polecenia. |
| `\makeatother` | Przywraca `@` do normalnego stanu po `\makeatletter`. |
| `\wpisz{...}` | Drukuje komunikat do dziennika kompilacji i terminala, przydatny do debugowania. |
| `\chronić` | Chroni delikatne polecenie wewnątrz ruchomego argumentu, takiego jak `\caption` lub `\section`. |
| `\listfiles` | Polecenie preambuły rejestrujące każdy załadowany plik i jego wersję w celu uzyskania raportów o błędach. |

## Struktura i podział

| Polecenie | Co to robi |
| --- | --- |
| `\część{...}` | Podział na najwyższym poziomie, powyżej rozdziałów, w zajęciach z książek i raportów. |
| `\rozdział{...}` | Numerowane nagłówki rozdziałów w klasach książek i raportów (nie w artykule). |
| `\sekcja{...}` | Numerowany nagłówek najwyższego poziomu w artykule. |
| `\podsekcja{...}` | Numerowany nagłówek jeden poziom poniżej „\sekcji”. |
| `\podsekcja{...}` | Numerowany nagłówek jeden poziom poniżej „\podsekcji”. |
| `\akapit{...}` | Nagłówek najniższego poziomu: pogrubiony tytuł na początku akapitu. |
| `\akapit{...}` | Jeden poziom poniżej „\akapitu”, rzadko potrzebny. |
| `\sekcja*{...}` | Sekcje oznaczone gwiazdką umożliwiają wydrukowanie nagłówka bez numeru lub wpisu spisu treści. |
| `\dodatek` | Przełącza numerację, tak aby kolejne rozdziały lub sekcje stały się Dodatkami A, B, C. |
| `\strona dodatku` | Drukuje oddzielną stronę rozdzielającą „Dodatki” (pakiet załączników). |
| `\spis treści` | Drukuje spis treści utworzony na podstawie poleceń podziału. |
| `\listoffigures` | Drukuje listę podpisów wszystkich rysunków wraz z numerami stron. |
| `\listoftables` | Drukuje listę wszystkich tytułów tabeli wraz z numerami stron. |
| `\frontmat` | Przełącznik klasy książki dla stron przed treścią: numery stron rzymskich, rozdziały nienumerowane. |
| `\główna sprawa` | Książka-klasa wróć do głównej treści: arabskie numery stron, numerowane rozdziały. |
| `\zagadka` | Przełącznik klasy książki dla stron końcowych: rozdziały przestają być numerowane. |
| `\addcontentsline{toc}{rozdział}{...}` | Ręcznie dodaje wpis do spisu treści (lub wykazu rycin/tabel). |
| `\addtocontents{toc}{...}` | Zapisuje dowolny materiał (np. odstępy) w pliku zawartości. |
| `\setcounter{secnum głębokość} {3}` | Kontroluje głębokość podziału numerów. |
| `\setcounter{toc głębokość} {2}` | Kontroluje głębokość spisu treści. |

## Definiowanie poleceń i środowisk

| Polecenie | Co to robi |
| --- | --- |
| `\nowe polecenie{\R}{\mathbb{R}}` | Definiuje własne polecenie; błędy, jeśli nazwa już istnieje. |
| `\renewcommand{...}{...}` | Redefiniuje istniejące polecenie; błędy, jeśli ich nie ma. |
| `\podaj polecenie{...}{...}` | Definiuje polecenie tylko wtedy, gdy nie zostało jeszcze zdefiniowane; w przeciwnym razie po cichu nic nie zrobi. |
| `\Nowe polecenie dokumentu` | Nowoczesna definicja poleceń z elastycznymi opcjonalnymi argumentami (LaTeX3/xparse). |
| `\newenvironment{nazwa}kod początkowy}kod końcowy}` | Definiuje własne środowisko z kodem uruchamianym na `\begin` i `\end`. |
| `\renewenvironment{nazwa}{...}{...}` | Na nowo definiuje istniejące środowisko. |
| `\zapewnienie{...}` | Sprawia, że ​​zawartość matematyczna makra działa zarówno w trybie matematycznym, jak i poza nim. |
| `\DeclareMathOperator{\E}{E}` | Definiuje pionową nazwę operatora; forma oznaczona gwiazdką nakłada ograniczenia poniżej (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Formularz z gwiazdką: operator przyjmuje poniższe limity w matematyce wyświetlania (amsmath). |
| `\nowe twierdzenie{lemat}{Lemat}` | Deklaruje środowisko podobne do twierdzenia (amsthm). |
| `\foo` | Przykładowa nazwa makra zdefiniowanego przez użytkownika w lekcji `\newcommand`, a nie prawdziwego polecenia LaTeX. |
| `\abs{x}` | Przykładowe makro zdefiniowane przez użytkownika z lekcji poleceń niestandardowych, które ustawia słupki wartości bezwzględnej. |
| `\mat{A}` | Przykładowe makro zdefiniowane przez użytkownika z lekcji poleceń niestandardowych dla pogrubionego symbolu matrycy. |
| `\vect{v}` | Przykładowe makro zdefiniowane przez użytkownika z lekcji poleceń niestandardowych dla pogrubionego symbolu wektorowego. |
| `\set{...}` | Przykładowe makro zdefiniowane przez użytkownika z lekcji poleceń niestandardowych, które składa zestaw nawiasów klamrowych o odpowiednim rozmiarze. |
| `\citepair` | Przykładowe makro pomocnicze cytowania zdefiniowane przez użytkownika z lekcji na temat poleceń niestandardowych, a nie standardowe polecenie. |
| `\E` | Przykładowy operator zdefiniowany przez użytkownika dla oczekiwań, zwykle definiowany za pomocą`\DeclareMathOperator` lub `\nowe polecenie`. |
| `\R` | Przykładowe makro zdefiniowane przez użytkownika dla liczb rzeczywistych: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Nazwy operatorów dla arg max / arg min, zdefiniowane w tym kursie za pomocą `\DeclareMathOperator*`, więc indeksy dolne znajdują się poniżej. |

## Liczniki i długości

| Polecenie | Co to robi |
| --- | --- |
| `\newcounter{przykłady}` | Tworzy nowy licznik, opcjonalnie resetowany przez rodzica: `\newcounter{examples}[sekcja]`. |
| `\setcounter{strona}{1}` | Ustawia wartość licznika, tutaj ponownie uruchamiając numerowanie stron. |
| `\addtocounter{przykłady}{2}` | Dodaje wartość do licznika bez drukowania czegokolwiek. |
| `\licznik kroków{przykłady}` | Zwiększa licznik o jeden. |
| `\refstepcounter{przykłady}` | Zwiększa licznik i ustawia go jako cel dla następnej `\label`. |
| `\wartość{przykłady}` | Odczytuje wartość licznika do wykorzystania w działaniach arytmetycznych lub porównaniach. |
| `\arabski{przykłady}` | Drukuje licznik w postaci cyfr arabskich: 1, 2, 3. |
| `\roman{przykłady}`, `\Roman{przykłady}` | Drukuje licznik w postaci małych lub wielkich cyfr rzymskich. |
| `\alph{przykłady}`, `\Alph{przykłady}` | Drukuje licznik jako małe lub wielkie litery. |
| `\fnsymbol{przypis}` | Drukuje licznik jako symbole przypisów: gwiazdka, sztylet itd. |
| `\newlength{\mygap}` | Tworzy nowy rejestr długości. |
| `\setlength{\parskip}{6pt}` | Przypisuje wartość do rejestru długości. |
| `\addtolength{\textheight}{1cm}` | Dodaje do istniejącej długości. |
| `\settowidth{\mygap}{text}` | Ustawia długość na naturalną szerokość tekstu. |
| `\parindent` | Długość wcięcia akapitu pierwszego wiersza; ustawić za pomocą `\setlength{\parindent}{0pt}`. |
| `\parskip` | Długość pionowej przerwy między akapitami; ustawić za pomocą `\setlength`. |
| `\szerokość linii` | Długość bieżącej linii, przydatna do zmiany rozmiaru: `width=\linewidth`. |
| `\szerokość tekstu` | Długość szerokości bloku pełnego tekstu na stronie. |
| `\wysokość tekstu` | Długość wysokości bloku pełnego tekstu na stronie. |
| `\szerokość kolumny` | Szerokość jednej kolumny w układzie wielokolumnowym. |
| `\baselineskip` | Odległość pionowa pomiędzy liniami bazowymi kolejnych linii. |
|`\linespread{1.3}` | Skaluje interlinię (odstępy między wierszami) dla całego dokumentu; potrzebuje `\selectfont` lub polecenia size, aby zadziałało. |

## Akapity, podziały wierszy i dzielenie wyrazów

| Polecenie | Co to robi |
| --- | --- |
| `\\` | Kończy bieżący wiersz wewnątrz akapitów, tabel i tablic. |
| `\\[6pt]` | Podział wiersza z dodatkową pionową spacją po nim. |
| `\nowa linia` | Przerywa wiersz bez uzasadnienia i bez podziału strony. |
| `\podział linii` | Żąda tutaj uzasadnionego podziału wiersza; opcjonalne `[0-4]` ustawia naleganie. |
| `\nolinebreak` | Zniechęca do łamania linii w tym miejscu. |
| `\par` | Kończy akapit w taki sam sposób, jak pusta linia w źródle. |
| `\bez wcięcia` | Pomija wcięcie pierwszego wiersza następnego akapitu. |
| `\wcięcie` | Wymusza wcięcie pierwszego wiersza tam, gdzie w przeciwnym razie byłoby ono wyłączone. |
| `\-` | Zaznacza dozwolony punkt dzielenia wyrazów wewnątrz słowa. |
| `\łączenie{zestaw danych}` | Lista preambuł ucząca LaTeX-a, jak dzielić określone słowa. |
| `\niechlujny` | Rozluźnia zasady dotyczące odstępów, dzięki czemu linie łatwiej się łamią, co pozwala uniknąć przepełnień pól. |
| `\wybredny` | Przywraca ścisłe zasady odstępów po `\sloppy`. |
| `\raggedright` | Wyrównuje następujący tekst do lewej zamiast go justować. |
| `\raggedleft` | Wyrównuje następujący tekst do prawej. |
| `\centrowanie` | Centruje wszystko, co następuje w bieżącej grupie, np. wizerunek postaci. |
| `\ta sama strona` | Zniechęca do łamania stron w bieżącej grupie. |
| `\enlargethispage{\baselineskip}` | Sprawia, że ​​tylko bieżąca strona jest nieco wyższa, aby wcisnąć jeszcze jedną linię. |
| `~` | Spacja nierozdzielająca: „Rysunek ~ 1” utrzymuje liczbę w tej samej linii. |

## Odstępy

| Polecenie | Co to robi |
| --- | --- |
| `\quad` | Wstawia poziomą spację o szerokości dużej litery M. |
| `\qquad` | Wstawia dwukrotnie większą spację od `\quad`. |
| `\enspace` | Wstawia połowę `\quad` poziomej przestrzeni. |
| `\hspace{1cm}` | Wstawia odstęp poziomy; znika przy przerwaniu linii. |
| `\hspace*{1cm}` | Przestrzeń pozioma, która przetrwa nawet przy przerwaniu linii. |
| `\vspace{1cm}` | Wstawia odstęp pionowy o podanej długości. |
| `\vspace*{1cm}` | Pionowa przestrzeń, która przetrwa nawet przy podziale strony. |
| `\smallskip` | Wstawia małą pionową przerwę między akapitami. |
| `\medskip` | Wstawia średnią pionową przerwę między akapitami. |
| `\bigskip` | Wstawia dużą pionową przerwę między akapitami. |
| `\hfill` | Rozciągliwa pozioma przestrzeń, która odsuwa treść od siebie, aby wypełnić linię. |
| `\vfill` | Rozciągliwa pionowa przestrzeń, która odsuwa treść od siebie, aby wypełnić stronę. |
| `\wypełnienie kropki` | Wypełnia pozostałą linię kropkami, tak jak w przypadku menu lub linii zawartości. |
| `\hrulefill` | Wypełnia pozostałą linię linią poziomą. |
| `\rozciągnięcie{2}` | Klej rozciągliwy z ciężarkiem, zapewniający proporcjonalne rozstawy: `\hspace{\stretch{2}}`. |
| `\wypełnij` | Jednostka rozciągliwa długość; `\hspace{\fill}` jest tym, do czego rozwija się `\hfill`. |
| `\fantom{tekst}` | Zajmuje dokładnie miejsce swojego argumentu, ale nic nie wyświetla. |
| `\hphantom{tekst}` | Zajmuje tylko szerokość argumentu, z zerową wysokością. |
| `\vfantom{tekst}` | Zajmuje tylko wysokość swojego argumentu, z zerową szerokością. |
| `\rozbicie{...}` | Wypisuje swój argument, ale udaje, że ma zerową wysokość i głębokość. |
| `\rozpora` | Niewidoczne podparcie na wysokości normalnej linii, aby wyrównać wysokość rzędów. |
| `\rozpórka matematyczna` | Rozpórka w trybie matematycznym wielkości nawiasu, służąca do wyrównywania rodników i ułamków. |

## Pudełka i zasady

| Polecenie | Co to robi |
| --- | --- |
| `\mbox{...}` | Niezniszczalne poziome pudełko; utrzymuje również swoją zawartość w jednej linii. |
| `\makebox[3cm][r]{...}` | Pudełko o zadanej szerokości z wybranym wyrównaniem (l, c, r, s). |
| `\fbox{...}` | Rysuje ramkę wokół zawartości. |
| `\framebox[3cm][c]{...}` | Pudełko oprawione w ramkę o ustalonej szerokości z wybranym ustawieniem. |
| `\parbox{5cm}{...}` | Ramka akapitu: minikolumna tekstu o podanej szerokości. |
| `\raisebox{2pt}{...}` | Przesuwa jego zawartość w górę (lub w dół o ujemną długość). |
| `\reguła{2cm}{0,4pt}` | Rysuje wypełniony prostokąt; koń pociągowy do niestandardowych linii. |
| `\colorbox{żółty}{...}` | Umieszcza tekst na kolorowym tle (xcolor). |
| `\fcolorbox{czerwony}{żółty}{...}` | Kolorowe pudełko z kolorową ramką (xcolor). |

## Strony, numeracja i nagłówki

| Polecenie | Co to robi |
| --- | --- |
| `\nowastrona` | Kończy bieżącą stronę i rozpoczyna nową. |
| `\clearpage` | Rozpoczyna nową stronę po pierwszym opróżnieniu wszystkich oczekujących rycin i tabel. |
| `\cleardoublepage` | Podobnie jak `\clearpage`, ale zapewnia również, że następna strona będzie stroną po prawej stronie (nieparzystą). |
| `\podział strony` | Żąda podziału strony w tym miejscu, rozciągając stronę do pełnej wysokości. |
| `\nopagebreak` | Zniechęca do łamania strony w tym miejscu. |
| `\numerowanie stron{roman}` | Ustawia styl numeru strony (arabski, rzymski, rzymski, alfa, alfa), resetując licznik na 1. |
| `\pagestyle{fantazyjne}` | Ustawia bieżący styl nagłówka/stopki (zwykły, pusty, nagłówki, moje nagłówki, fantazyjny) dla wszystkich kolejnych stron. |
| `\thispagestyle{pusty}` | Zastępuje styl nagłówka/stopki tylko dla bieżącej strony. |
| `\strona` | Drukuje numer bieżącej strony; używane wewnątrz nagłówków i stopek. |
| `\marginpar{...}` | Umieszcza notatkę na marginesie strony obok bieżącego wiersza. |
| `\fancyhf{}` | Czyści wszystkie pola nagłówka i stopki fantazyjnego hdr przed ustawieniem własnych. |
| `\fancyhead[R]{...}` | Ustawia pole nagłówka fantazyjnego hdr, tutaj po prawej stronie. |
| `\fancyfoot[C]{\strona}` | Ustawia fantazyjne pole stopki hdr, tutaj wyśrodkowany numer strony. |
| `\szerokość reguły nagłówka` | makro FancyHdr dla grubości reguły nagłówka; odnów do 0pt, aby usunąć linię. |
| `\szerokość reguły stopy` | makro FancyHdr dla grubości reguły stopki, domyślnie 0pt. |
| `\newgeometry{margin=2cm}` | Zmienia geometrię strony w połowie dokumentu (geometrię). |
| `\przywrócenie geometrii` | Wraca do geometrii preambuły po `\newgeometry` (geometria). |

## Znaki specjalne

Dziesięć znaków zarezerwowanych i sposób ich drukowania oraz popularne symbole tekstowe.

| Polecenie | Co to robi |
| --- | --- |
| `\%` | Drukuje znak procentu (puste `%` rozpoczyna komentarz). |
| `\&` | Drukuje znak ampersand (pusty znak „&” jest separatorem kolumn tabeli). |
| `\#` | Drukuje skrót (pusty „#” oznacza argumenty makra). |
| `\_` | Drukuje podkreślenie (puste `_` to indeks matematyczny). |
| `\{` i `\}` | Drukuj nawiasy klamrowe (grupa nawiasów klamrowych). |
| `\$` | Drukuje znak dolara (puste `$` przełącza tryb matematyczny). |
| `\textbackslash` | Drukuje ukośnik odwrotny w tekście. |
| `\textasciitilde` | Drukuje tyldę w tekście (puste `~` to spacja nierozdzielająca). |
| `\textasciicircum` | Drukuje karetkę w tekście (puste `^` to indeks górny matematyczny). |
| `\pasek tekstowy` | Drukuje pionową kreskę w tekście. |
| `\textless`, `\textwiększy` | Wydrukuj poprawnie < i > w trybie tekstowym. |
| `\ldots`, `\kropki` | Elipsa z prawidłowymi odstępami; `\dots` dostosowuje się w trybie matematycznym (amsmath). |
| `\tekstelipsa` | Wielokropek w trybie tekstowym, w którym `\kropki` korzystają z obliczeń poza matematyką. |
| `\textemdash`, `\textendash` | Nazwane polecenia dla em i en pauza (to samo wyjście co `---` i `--`). |
| `\textquotedblleft`, `\textquotedblright` | Kręcone podwójne cudzysłowy (zwykle pisane jako pary backtick i pary apostrofów). |
| `\guillemetleft`, `\guillemetright` | Francuskie cudzysłowy kątowe (starsza pisownia: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Sztylet i podwójny sztylet w tekście, wspólne dla afiliacji autora. |
| `\S` | Znak sekcji, jak w S 2.1 dokumentu prawnego. |
| `\P` | Znak akapitu (pilcrow). |
| `\funtów` | Znak funta brytyjskiego. |
| `\euro` | Znak euro (pakiet eurosym; jądro udostępnia również `\texteuro`). |
| `\prawa autorskie` | Znak praw autorskich. |
| `\tekst zarejestrowany` | Zarejestrowany znak towarowy. |
| `\tekstznak towarowy` | Znak towarowy. |
| `\stopień tekstowy` | Znak stopnia: `25\text Degree C`. |
| `\tekstmu` | Pionowe mikroznak dla tekstu, takiego jak mikrony. |
| `\textperthousand` | Znak promila. |

## Akcenty i litery specjalne

Dla akcentów tekstowych z epoki pdfLaTeX; przy użyciu wejścia XeLaTeX/LuaLaTeX i UTF-8 zwykle można po prostu wpisać znak.

| Polecenie | Co to robi |
| --- | --- |
| `\'{e}` | Ostry akcent: e-ostry jak w kawiarni z akcentem. |
| `` \`{e} `` | Gróbowy akcent. |
| `\^{o}` | Okrągły akcent. |
| `\"{u}` | Przegłos/diereza. |
| `\~{n}` | Akcent tyldy, jak w języku hiszpańskim n-tylda. |
| `\c{c}` | Cedilla, jak po francusku c-cedilla. |
| `\v{s}` | Caron (hacek), powszechny w nazwach czeskich i chorwackich. |
| `\H{o}` | Węgierski podwójny ostry akcent. |
| `\k{a}` | Ogonek, jak po polsku a-ogonek. |
| `\b{o}` | Akcent barowy. |
| `\d{u}` | Akcent kropkowy, używany w transliteracji. |
| `\r{a}` | Akcent pierścionka, jak w skandynawskim a-ringu. |
| `\u{o}` | Brewowy akcent. |
| `\.{o}` | Akcent kropkowy. |
| `\t{oo}` | Akcent krawatowy łączący dwie litery. |
| `\i`, `\j` | Bez kropki i oraz j, do układania akcentów: `\'{\i}`. |
| `\ae`, `\AE` | Ligatura ae, małe i wielkie litery. |
| `\oe`, `\OE` | Ligatura oe, jak w twórczości francuskiej. |
| `\ss` | Niemieckie ostre s (eszett). |
| `\o`, `\O` | Przekreślone o, jak w nazwach duńskich i norweskich. |
| `\l`, `\L` | Polski przecięty l. |
| `\aa`, `\AA` | Pierścień A jako samodzielny list, jak w imieniu Angstroma. |

## Czcionki i rozmiary

| Polecenie | Co to robi |
| --- | --- |
| `\textbf{...}` | Pogrubiony tekst. |
| `\textit{...}` | Tekst kursywą. |
| `\emfa{...}` | Wyróżnienie dopasowujące się do kontekstu: kursywa w tekście pionowym, pionowa w tekście kursywą. |
| `\textsc{...}` | Tekst małymi literami. |
| `\texttt{...}` | Tekst maszynowy (monospace), odpowiedni do kodu i nazw plików. |
| `\textrm{...}` | Tekst rodzinny rzymski (szeryfowy). |
| `\textsf{...}` | Tekst rodziny bezszeryfowej. |
| `\textmd{...}` | Średnia (normalna) waga, cofanie pogrubione. |
| `\textup{...}` | Kształt pionowy, cofanie kursywy lub ukośne. |
| `\textsl{...}` | Pochylony (ukośny) kształt, różniący się od prawdziwej kursywy. |
| `\textnormal{...}` | Przywraca domyślną czcionkę dokumentu w jednym kroku. |
| `\podkreślenie{...}` | Podkreśla tekst; używaj oszczędnie, nacisk jest zwykle `\emph`. |
| `\rmfamily`, `\sffrodzina`, `\ttfamily` | Deklaracje przełączające rodzinę czcionek (serif, sans, mono) do momentu zakończenia grupy. |
| `\bfseria`, `\mdseria` | Deklaracje przechodząc na pogrubienie lub powrót do średniej wagi. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Deklaracje zmieniające kształt: kursywa, ukośne, kapitaliki, pionowe. |
| `\normalna czcionka` | Deklaracja resetująca rodzinę, serię i kształt do wartości domyślnych. |
| `\em` | Forma deklaracji `\emph`: `{\em like this}`. |
| `\mały` | Najmniejsze z dziesięciu poleceń rozmiaru. |
| `\rozmiar skryptu` | Drugi najmniejszy rozmiar, mniej więcej wielkości indeksu dolnego. |
| `\rozmiar przypisu` | Rozmiar używany w przypisach. |
| `\mały` | Nieco mniejszy niż normalnie. |
| `\normalny rozmiar` | Podstawowy rozmiar dokumentu. |
| `\duży`, `\Duży`, `\DUŻY` | Jeden, dwa i trzy kroki większe niż normalnie. |
| `\ogromny`, `\Ogromny` | Dwa największe rozmiary standardowe. |
| `\fontsize{14}{17}\selectfont` | Ustawia dowolny rozmiar czcionki i pominięcie linii bazowej, a następnie aktywuje je. |
| `\wybierz czcionkę` | Aktywuje oczekujący atrybut czcionkizmiany (NFSS). |
| `\textsuperscript{...}` | Podniesiony mały tekst, jak w znacznikach 1. lub w stylu przypisu. |
| `\textsubscript{...}` | Obniżono mały tekst w trybie tekstowym. |
| `\domyślna rodzina` | Makro zawierające domyślną rodzinę czcionek; odnów go, aby zmienić czcionkę całego dokumentu. |
| `\sfdomyślny` | Makro nazewnictwo rodziny bezszeryfowej; `\renewcommand{\familydefault}{\sfdefault}` powoduje, że dokument nie jest zapisany. |
| `\setmainfont{...}` | Ustawia czcionkę główną według nazwy w XeLaTeX lub LuaLaTeX (specyfikacja czcionki). |
| `\setsansfont{...}` | Ustawia czcionkę bezszeryfową według nazwy w XeLaTeX lub LuaLaTeX (specyfikacja czcionki). |
| `\setmonofont{...}` | Ustawia czcionkę o stałej szerokości według nazwy w XeLaTeX lub LuaLaTeX (specyfikacja czcionki). |

## Kolor (xcolor)

| Polecenie | Co to robi |
| --- | --- |
| `\textcolor{czerwony}{...}` | Koloruje fragment tekstu. |
| `\kolor{niebieski}` | Formularz deklaracji: koloruje wszystko aż do zakończenia grupy. |
| `\definecolor{brand}{HTML}{2F6F4F}` | Definiuje nazwany kolor do późniejszego użycia. |
| `\pagecolor{grey!10}` | Ustawia kolor tła całej strony. |
| `\rowcolor{grey!20}` | Koloruje jeden wiersz tabeli (xcolor z opcją `table`, poprzez colortbl). |
| `\cellcolor{grey!20}` | Koloruje jedną komórkę tabeli (colortbl). |
| `\rowcolors{2}{szary!10}{biały}` | Naprzemienne kolory wierszy, zaczynając od danego wiersza (opcja xcolor `table`). |

## Grafika (grafikax)

| Polecenie | Co to robi |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Wstawia plik obrazu; kluczowe opcje: `szerokość`, `wysokość`, `skala`, `kąt`, `przycięcie`+`klip`, `strona`. |
| `\graphicspath{{figures}}` | Informuje LaTeX-a, w których folderach należy szukać plików obrazów. |
| `\rotatebox[origin=c]{90}{...}` | Obraca jego zawartość o kąt. |
| `\scalebox{0.8}{...}` | Skaluje jego zawartość o współczynnik. |
| `\resizebox{5cm}{!}{...}` | Zmienia rozmiar zawartości do docelowej szerokości i/lub wysokości; `!` zachowuje proporcje. |
| `\reflectbox{...}` | Odzwierciedla jego zawartość w poziomie. |
| `\includepdf[pages=-]{paper.pdf}` | Wstawia całe strony z innego pliku PDF (pdfpages). |

## Wejście do trybu matematycznego

| Polecenie | Co to robi |
| --- | --- |
| `$...$` | Wbudowana matematyka w zdaniu. |
| `\(...\)` | Oficjalne wbudowane ograniczniki matematyczne LaTeX-a, odpowiadające `$...$`. |
| `\[...\]` | Nienumerowane równanie wyświetlane w osobnej linii. |
| `$$...$$` | Zwykła matematyka wyświetlająca TeX; odradzane w LaTeX-ie, użyj zamiast tego `\[...\]`. |
| `x^2`, `x_i` | `^` tworzy indeksy górne, a `_` tworzy indeksy dolne; nawiasy klamrowe w skryptach wieloznakowych: `x^{10}`. |

## Matematyka: litery greckie

Wszystko to działa tylko w trybie matematycznym. Istnieją formy wielkie, w których grecka stolica różni się od łacińskiej.

| Polecenie | Co to robi |
| --- | --- |
| `\alfa` `\beta` `\gamma` `\delta` | Greckie litery alfa, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Greckie litery epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Greckie litery jota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Greckie litery xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Greckie litery upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Wielkie greckie litery od gamma do pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Wielkie greckie litery od Sigma do Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Odmienne formy epsilon (kręconego, którego używa większość dokumentów), theta i pi. |
| `\varrho` `\varsigma` `\varphi` | Odmienne formy rho, sigma (końcowe słowo) i phi (otwarte kręcone). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Warianty greckie z wielkimi literami i kursywą ( amsmath ). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Pozostałe warianty greckie pisane kursywą i wielkimi literami ( amsmath ). |

## Matematyka: operatory binarne

| Polecenie | Co to robi |
| --- | --- |
| `\pm`, `\mp` | Znaki plus-minus i minus-plus. |
| `\czasy` | Krzyżyk mnożenia, używany również do wymiarów takich jak 3 x 3. |
| `\div` | Znak podziału (obelus). |
| `\cdot` | Wyśrodkowana kropka do mnożenia. |
| `\ast`, `\star`, `\bullet`, `\circ` | Operatory gwiazdek, gwiazdek, pocisków i małych okręgów; `\circ` to także złożenie funkcji. |
| `\oplus`, `\ominus` | Plus w kółku (suma bezpośrednia, XOR) i minus w kółku. |
| `\otimes`, `\oslash`, `\odot` | Czasy w kółku (iloczyn tensorowy), ukośnik w kółku, kropka w kółku. |
| `\klin`, `\vee` | Klin (logiczne AND, produkt zewnętrzny) i Vee (logiczne OR, połączenie). |
| `\kraina`, `\lor` | Aliasy `\wedge` i `\vee` nazwane ze względu na ich logiczny odczyt. |
| `\cap`, `\kubek` | Ustaw znaki skrzyżowania i związku. |
| `\setminus` | Ukośnik odwrotny różnicy ustawień: `A \setminus B`. |
| `\plus` | Unia z plusem dla unii wielokrotnej lub rozłącznej. |
| `\sqcap`, `\sqcup` | Kwadratowa czapka i kubek, spotykają się i łączą w teorii sieci. |
| `\amalg` | Połączenie (produkt odwrócony), stosowane w przypadku produktów towarzyszących. |
| `\sztylet`, `\dsztylet` | Sztylet i podwójny sztylet jako operatory matematyczne, np. koniuguj transpozycję `A^\sztylet`. |
| `\duży trójkątw górę`, `\duży trójkąt w dół` | Operatory trójkątne, np. różnica symetryczna. |
| `\trójkątlewy`, `\trójkątprawy` | Trójkąty boczne, np. normalna relacja podgrup. |

## Matematyka: relacje

| Polecenie | Co to robi |
| --- | --- |
| `\równoważnik`, `\le` | Znak mniejszości lub równości („\le” to krótki alias). |
| `\geq`, `\ge` | Znak większości lub równości („\ge” to krótki alias). |
| `\neq`, `\ne` | Znak różny (`\ne` to krótki alias). |
| `\ll`, `\gg` | Znaki znacznie mniejsze i znacznie większe niż. |
| `\około` | W przybliżeniu znak równości. |
| `\sym` | Relacja tyldy, czytana jako „jest rozpowszechniana jako” lub „jest podobna do”. |
| `\simeq` | Znak równości asymptotycznie (tylda nad równymi). |
| `\cong` | Znak przystający do (tylda nad dwoma taktami), używany do izomorfizmu. |
| `\równoważnik` | Znak identyczny z (potrójnym słupkiem), używany również do oznaczania zgodności. |
| `\propto` | Proporcjonalny do podpisu. |
| `\asymp` | Relacja asymptotycznie równoważna (krzywe skumulowane). |
| `\doteq` | Znak równości z kropką, czytany jako „zbliża się” lub „jest zdefiniowany jako”. |
| `\prec`, `\succ` | Poprzedza i następuje po relacjach, zakrzywionych porządkach. |
| `\preceq`, `\succeq` | Poprzedza lub równa się i udaje się lub równa. |
| `\podzbiór`, `\podzbiór` | Właściwy podzbiór i znaki podzbioru lub równości. |
| `\supset`, `\supseteq` | Właściwy znak nadzbioru i znak nadzbioru lub znaku równości. |
| `\sqsubseteq`, `\sqsupseteq` | Relacje podzbiorów kwadratowych i nadzbiorów używane do porządkowania informacji. |
| `\in`, `\notin` | Przynależność zbioru i jej negacja: `x \in A`. |
| `\ni` | Odwrócone członkostwo: zbiór zawiera element. |
| `\vdash`, `\dashv` | Kołowrót „udowodnił” i jego odwrotność. |
| `\modele` | Podwójny kołowrotek, znaczenie semantyczne. |
| `\przestępca` | Relacja prostopadłości/niezależności. |
| `\równoległe` | Relacja prętów równoległych. |
| `\środek` | Pionowy pasek z odstępami między relacjami, jak w notacji konstruktora zestawów lub „podziałów”. |
| `\nie` | Neguje następującą relację poprzez nadrukowanie ukośnika: `\not\subset`. |

## Matematyka: strzałki

| Polecenie | Co to robi |
| --- | --- |
| `\do`, `\rightarrow` | Strzałka w prawo, jak w przypadku typów funkcji `f: A \do B` i granic `x \do 0`. |
| `\gets`, `\leftarrow` | Strzałka w lewo, używana również do przypisania w pseudokodzie. |
| `\strzałka w lewo` | Dwugłowa pojedyncza strzała. |
| `\Strzałka w prawo` | Podwójna strzałka w prawo, czytaj jako „sugeruje”. |
| `\Leftarrow` | Podwójna strzałka w lewo, czytaj jako „sugeruje”. |
| `\Strzałka w lewo` | Podwójna dwukierunkowa strzałka, czytana jako „wtedy i tylko wtedy, gdy”. |
| `\implikuje`, `\implikuje` | Rozdzielone `\Rightarrow` i `\Leftarrow` dla logiki (amsmath). |
| `\iff` | Rozdzielone `\Leftrightarrow` dla „jeśli i tylko wtedy, gdy”. |
| `\mapsto` | Strzałka do mapowania z końcówką słupkową: `x \mapsto x^2`. |
| `\longmapsto` | Długa wersja `\mapsto`. |
| `\hookrightarrow` | Strzałka w prawo z haczykowatym ogonem, do wtrąceń/osadzeń. |
| `\rightharpoonup` | Prawy harpun (półstrzałka), używany do słabej zbieżności. |
| `\rightleftharpoons` | Sparowane przeciwstawne harpuny, jak w równowadze chemicznej. |
| `\leadsto` | Falista strzałka w prawo „prowadzi do” (amssymb). |
| `\uparrow`, `\downarrow` | Strzałki w górę i w dół. |
| `\strzałka w górę` | Dwugłowa strzałka pionowa. |
| `\W górę`, `\W dół`, `\Strzałka w górę` | Podwójne pionowe strzałki. |
| `\blisko`, `\searrow` | Ukośne strzałki na północny wschód i południowy wschód, np. zwiększanie/zmniejszanie do limitu. |
| `\wróbel`, `\nwróbel` | Ukośne strzałki na południowy zachód i północny zachód. |
| `\longrightarrow`, `\longleftarrow` | Długie pojedyncze strzałki. |
| `\Longleftarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Długie podwójne strzałki. |
| `\xrightarrow{f}` | Rozszerzalna strzałka w prawo z etykietą na górze, rosnąca w celu dopasowania (amsmath). |
| `\xleftarrow{f}` | Rozszerzalna strzałka w lewo z etykietą na górze (amsmath). |

## Matematyka: duzi operatorzy

| Polecenie | Co to robi |
| --- | --- |
| `\suma_{i=1}^{n}` | Znak sumowania z granicami. |
| `\prod_{i=1}^{n}` | Znak produktu z limitami. |
| `\coprod` | Znak współproduktu (produktu odwróconego). |
| `\int_0^1` | Znak całki z granicami. |
| `\iint` | Znak podwójnej całki (amsmath). |
| `\iiint` | Potrójny znak całki (amsmath). |
| `\punkt` | Znak całki konturowej (pętla zamknięta). |
| `\bigcap`, `\bigcup` | Duże przecięcie i suma nad rodziną zbiorów. |
| `\bigsqcup` | Kubek duży kwadratowy (zjednoczenie rozłączne). |
| `\bigvee`, `\bigwedge` | Duży OR i duży AND nad zestawem indeksów. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Duży okrąg plus, czasy i kropka dla indeksowanych sum i iloczynów struktur. |
| `\biguplus` | Duża unia z plusem nad zestawem indeksów. |
| `\limity` | Wymusza następujące indeksy górne/dolne operatora powyżej i poniżej: `\int\limits_0^1`. |
| `\nolimits` | Wymusza indeksy dolne/górne na bok zamiast na górze i na dole. |

## Matematyka: ograniczniki i rozmiar

| Polecenie | Co to robi |
| --- | --- |
| `\lewo(...\prawo)` | Para ograniczników o automatycznym rozmiarze, która rośnie, aby dopasować się do jej zawartości. |
| `\lewy.` i `\prawy.` | Niewidzialny partner, gdy potrzebna jest tylko jedna strona pary o odpowiednim rozmiarze, jak w przypadku słupków oceny. |
| `\środek|` | Środkowy ogranicznik między `\lewym` i `\prawym' automatycznie dopasowywanym rozmiarem (jak w przypadku prawdopodobieństwa warunkowego). |
| `\big( \Big( \bigg( \Bigg(` | Ograniczniki o ręcznie zmienianym rozmiarze, od nieco dużych do bardzo dużych. |
| `\bigl(...\bigr)` | Rozmiar ograniczników z prawidłowymi odstępami otwierania/zamykania (także `\Bigl`, `\biggl`, `\Biggl`). |
| `\lpodłoga`, `\rpodłoga` | Wsporniki podłogowe. |
| `\lceil`, `\rceil` | Wsporniki sufitowe. |
| `\lange`, `\rangle` | Ograniczniki lewego i prawego nawiasu kątowego. |
| `\|` | Podwójny ogranicznik pionowych słupków (słupki normalne). |
| `\lvert`, `\rvert` | Słupki wartości bezwzględnych z prawidłowymi odstępami między ogranicznikami (amsmath). |
| `\lPionek`, `\rPionek` | Podwójne pręty dla norm, z prawidłowym odstępem ograniczników (amsmath). |
| `\ukośnik odwrotny` | Ukośnik odwrotny jako symbol matematyczny lub ogranicznik. |

## Matematyka: akcenty i dekoracje

| Polecenie | Co to robi |
| --- | --- |
| `\kapelusz{x}` | Mały kapeluszowy akcent nad jednym symbolem. |
| `\check{x}` | Akcent Caron (odwrócony kapelusz). |
| `\breve{x}` | Akcent breve (zaokrąglony). |
| `\ostry{x}`, `\grób{x}` | Ostre i poważne akcenty w matematyce. |
| `\tylda{x}` | Akcent tyldy nad jednym symbolem. |
| `\bar{x}` | Krótki słupek nad jednym symbolem. |
| `\vec{v}` | Mała strzałka nad jednym symbolem. |
| `\kropka{x}`, `\ddot{x}` | Jedna lub dwie kropki nad symbolem, wspólne dla pochodnych czasu. |
| `\dddot{x}` | Trzy kropki nad symbolem (amsmath). |
| `\matematyka{x}` | Akcent pierścieniowy nad symbolem. |
| `\widehat{abc}` | Szeroki kapelusz rozciągający się na kilka symboli. |
| `\widetilde{abc}` | Szeroka tylda rozciągająca się na kilka symboli. |
| `\overrightarrow{AB}` | Rozciągnięcie prawej strzałki na wyrażenie, jak w wektorach od A do B. |
| `\overleftarrow{AB}` | Rozciąganie strzałki w lewo nad wyrażeniem. |
| `\overline{x + y}` | Linia nad całym wyrażeniem. |
| `\podkreślenie{x + y}` | Linia pod całym wyrażeniem (działa również w tekście). |
| `\overbrace{...}^{n}` | Nawias poziomy nad wyrażeniem, z opcjonalną etykietą na górze. |
| `\podkreślenie{...}_{n}` | Poziomy nawias pod wyrażeniem, z opcjonalną etykietą pod spodem. |
| `\overset{!}{=}` | Umieszcza symbol nad innym, np. „musi być równy” (amsmath). |
| `\underset{i}{\max}` | Umieszcza symbol pod innym (amsmath). |
| `\stackrel{\text{def}}{=}` | Starsze polecenie jądra umieszczające symbol nad relacją. |
| `\boldsymbol{\beta}` | Odważna matematyka, która pogrubia również greckie litery i symbole (amsmath). |
| `\pierwszy` | Symbol główny; `x'` jest zwykłym skrótem dla `x^{\prime}`. |

## Matematyka: operatory podobne do logów

Całość złożona pionowo, z zachowaniem odpowiednich odstępów; te, które przyjmują limity, umieszczają indeksy dolne poniżej w matematyce wyświetlacza.

| Polecenie | Co to robi |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Podstawowe funkcje trygonometryczne. |
| `\sec`, `\csc` | Sieczna i cosekansowa. |
| `\arcsin`, `\arccos`, `\arctan` | Odwrotne funkcje trygonometryczne. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Funkcje hiperboliczne. |
| `\exp`, `\ln`, `\log`, `\lg` | Wykładnicze i logarytmy („\lg” to logarytm o podstawie 2 lub 10 zgodnie z konwencją). |
| `\det`, `\dim`, `\ker`, `\deg` | Wyznacznik, wymiar, jądro, stopień. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Największy wspólny dzielnik, zbiory hom, argument złożony, prawdopodobieństwo. |
| `\lim_{x \do 0}` | Operator limitu, w pozycji pionowej z indeksem dolnym poniżej w matematyce wyświetlacza. |
| `\limsup`, `\liminf` | Ogranicz lepsze i gorsze. |
| `\inf`, `\nad` | Operatory Infimum i Supremum, pisane pionowo. |
| `\min`, `\max` | Operatory minimalne i maksymalne, zapisane pionowo z limitami poniżej w matematyce wyświetlacza. |
| `\bmod` | Binarny operator mod z odstępami między operatorami: `a \bmod n`. |
| `\pmod{n}` | Nawias końcowy „(mod n)”. |
| `\mod{n}` | Końcowy „mod n” bez nawiasów (amsmath). |
| `\nazwa operatora{lcm}` | Jednorazowa nazwa operatora w formie pionowej bez deklaracji preambuły (amsmath). |
| `\nazwa operatora*{ess\,sup}` | Operator jednorazowy, który przyjmuje poniższe limity (amsmath). |

## Matematyka: ułamki zwykłe, dwumiany i układanie w stosy

| Polecenie | Co to robi |
| --- | --- |
| `\frac{a}{b}` | Ułamek skumulowany: licznik nad mianownikiem. |
| `\dfrac{a}{b}` | Ułamek wymuszony do pełnego rozmiaru wyświetlacza, nawet wbudowanego (amsmath). |
| `\tfrac{a}{b}` | Ułamek zmuszony do małego rozmiaru wbudowanego, nawet w matematyce wyświetlania (amsmath). |
| `\cfrac{a}{b}` | Ciąg dalszy ułamka z pełnowymiarowymi zagnieżdżonymi poziomami (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Pierwiastek kwadratowy; opcjonalny argument daje n-ty pierwiastek. |
| `\binom{n}{k}` | Współczynnik dwumianu w nawiasach (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Wymuszone dwumiany rozmiaru wyświetlacza i rozmiaru tekstu (amsmath). |
| `{n \wybierz k}` | Zwykły prymityw dwumianowy TeX; odradzane w LaTeX-ie, użyj `\binom`. |
| `{a \over b}` | Zwykły prymitywny ułamek TeX; odradzane w LaTeX-ie, użyj `\frac`. |
| `{a \na górze b}` | Zwykły prymitywny sposób układania TeX-a bez paska; odradzamy, użyj `\substack` lub `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Ogólny kreator frakcji za `\frac`, `\binom` i przyjaciółmi (amsmath). |
| `\substack{i < n \\ j < m}` | Wielowierszowy indeks dolny pod dużym operatorem (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Dołącza indeksy do wszystkich czterech rogów dużego operatora (amsmath). |
| `\prescript{a}{b}{X}` | Lewe indeksy super/dolne, jak w notacji izotopowej (narzędzia matematyczne). |

## Matematyka: odstępy i style

| Polecenie | Co to robi |
| --- | --- |
| `\,` | Cienka przestrzeń matematyczna, jak między liczbą a jej jednostką. |
| `\:` | Średnia przestrzeń matematyczna. |
| `\;` | Gruba przestrzeń matematyczna. |
| `\!` | Ujemna cienka przestrzeń, przyciągająca symbole bliżej. |
| `\quad`, `\qquad` | Przestrzenie one-em i two-em, w matematyce lub tekście. |
| `\ styl wyświetlania` | Wymusza pełny rozmiar matematyczny wyświetlacza, np. duże ograniczenia wewnątrz wbudowanej matematyki. |
| `\styl tekstu` | Wymusza zmianę rozmiaru matematyki wbudowanej w wyświetlaną matematykę. |
| `\styl_skryptu`, `\stylskryptu` | Wymuszanie rozmiaru indeksu dolnego i podrzędnego. |

## Matematyka: litery, alfabety i różne symbole

| Polecenie | Co to robi |
| --- | --- |
| `\mathbb{R}` | Tablica pogrubione litery dla zestawów liczb (amssymb). |
| `\mathbf{x}` | Pogrubione, pionowe litery w matematyce, wspólne dla wektorów i macierzy. |
| `\mathcal{L}` | Kaligraficzne wielkie litery, np. strata lub Lagranżian. |
| `\mathfrak{g}` | Litery frakturowe, używane w algebrze i logice. |
| `\mathscr{F}` | Pisz wielkimi literami, bardziej zawiłymi niż `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Litery pionowe (rzymskie) w matematyce dla jednostek i nazw wieloliterowych. |
| `\matit{diff}` | Identyfikator składający się z kursywy, składający się z wielu liter i odstępów przypominających słowa. |
| `\mathsf{T}`, `\mathtt{x}` | Litery bezszeryfowe i maszyny do pisania w matematyce. |
| `\bm{\beta}` | Pogrubione symbole matematyczne, alternatywa dla `\boldsymbol` (pakiet bm). |
| `\text{if } x > 0` | Normalny tekst w pozycji pionowej w matematyce z odpowiednimi odstępami (amsmath). |
| `\infty` | Znak nieskończoności. |
| `\częściowy` | Znak pochodnej częściowej (kręconej d). |
| `\nabla` | Operator Nabla (del) dla gradientów i rozbieżności. |
| `\hbar` | Zredukowana stała Plancka, h ze słupkiem. |
| `\ell` | W skrypcie mała litera l, używana w celu uniknięcia pomylenia z cyfrą 1. |
| `\wp` | Weierstrassa str. |
| `\Re`, `\Jestem` | Symbole części rzeczywistych i urojonych (Fraktur R i I). |
| `\alef` | Aleph, dla nieskończonych kardynałów. |
| `\pusty zbiór` | Pusty znak zestawu. |
| `\varnic` | Bardziej okrągły wariant pustego zbioru preferowany przez wielu autorów (amssymb). |
| `\kąt` | Symbol kąta. |
| `\zmierzony kąt` | Symbol zmierzonego kąta z łukiem (amssymb). |
| `\trójkąt` | Symbol trójkąta. |
| `\kwadrat`, `\czarny kwadrat` | Otwarte i wypełnione kwadraty; wypełniony często kończy się próbami (amssymb). |
| `\diament`, `\pastylka` | Mały operator diamentowy; symbol pastylki (amssymb dla tego ostatniego). |
| `\góra`, `\bot` | Górne (prawda) i dolne (fałsz/nieokreślone) symbole. |
| `\forall`, `\istnieje` | Uniwersalny („dla wszystkich”)i kwantyfikatory egzystencjalne („istnieje”). |
| `\istnieje` | Zanegowany kwantyfikator egzystencjalny (amssymb). |
| `\neg` | Logiczny znak NIE. |
| `\dlatego`, `\ponieważ` | Znaki z trzema kropkami „dlatego” i „ponieważ” (amssymb). |
| `\płaski`, `\naturalny`, `\ostry` | Awarie muzyczne, używane również w zapisie matematycznym. |
| `\surd` | Nagi radykalny symbol bez argumentu. |
| `\znacznik wyboru` | Znacznik wyboru (amssymb). |
| `\cdots` | Kropki wyśrodkowane, pomiędzy operatorami: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Kropki pionowe i ukośne, głównie w matrycach. |
| `\dotsb`, `\dotsc` | Kropki semantyczne: pomiędzy operatorami binarnymi i pomiędzy przecinkami (amsmath). |

## Narzędzia wyświetlające amsmath i mathtools

| Polecenie | Co to robi |
| --- | --- |
| `\tag{...}` | Zastępuje automatyczny numer równania własną etykietą (amsmath). |
| `\tag*{...}` | Podobnie jak `\tag`, ale bez otaczających go nawiasów (amsmath). |
| `\notag` | Pomija numer równania w jednym wierszu numerowanego środowiska (amsmath). |
| `\nieliczba` | Starszy synonim `\notag`. |
| `\liczbaw{równaniu}{sekcja}` | Liczby równań na sekcję: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Przerywa blok wyrównania linią tekstu o pełnej szerokości, zachowując wyrównanie (amsmath). |
| `\krótkiintertekst{...}` | Podobnie jak `\intertext` z mniejszą ilością miejsca w pionie (narzędzia matematyczne). |
| `\allowdisplaybreaks` | Umożliwia wyświetlanie wielowierszowe rozbijania stron (amsmath). |
| `\przerwa w wyświetlaniu` | Żąda podziału strony w tym momencie wyświetlacza (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Pozwala na zwisanie szerokich limitów operatora, aby nie rozpychały treści (narzędzia matematyczne). |
| `\mathclap{...}` | Treść matematyczna o zerowej szerokości dla szerokich dolnych/nadpisów (narzędzia matematyczne). |
| `\coloneqq` | Dwukropek oznacza znak definicji := z poprawnymi odstępami (narzędzia matematyczne). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Definiuje makro ogranicznika z gwiazdkowanym formularzem automatycznego rozmiaru (mathtools). |
| `\eqref{równ.:strata}` | Drukuje numer równania wraz z nawiasami (amsmath). |
| `\qedu` | Przesuwa kwadrat końca dowodu na bieżącą linię, np. po wyświetlonym równaniu (amsthm). |

## Środowiska matematyczne

| Środowisko | Co to robi |
| --- | --- |
| „równanie” | Jedno wyświetlane, ponumerowane równanie. |
| `równanie*` | Jedno wyświetlane, nienumerowane równanie (amsmath). |
| `wyrównaj` | Wiele wyświetlanych równań ustawionych przy znakach „&”, każde ponumerowane (amsmath). |
| `wyrównaj*` | Wyrównane równania bez liczb (amsmath). |
| „zbierać” | Wiele wyśrodkowanych równań bez wyrównania, każde ponumerowane (amsmath). |
| `alignat` | Wyrównane równania z ręcznie kontrolowanymi odstępami między kolumnami (amsmath). |
| `flalig` | Wyrównane równania przesunięte na lewy i prawy margines (amsmath). |
| `podział` | Dzieli jedno długie równanie wzdłuż wyrównanych linii pod jedną liczbą, wewnątrz „równania” (amsmath). |
| `wieloliniowe` | Jedno długie równanie podzielone na linie: pierwsza linia po lewej stronie, ostatnia linia po prawej (amsmath). |
| „wyrównane”, „zebrane” | Wersje funkcji „align/gather” z blokami konstrukcyjnymi, których można używać na innym wyświetlaczu (amsmath). |
| `podrównania` | Numeruje znajdujące się w środku równania jako 1a, 1b, 1c (amsmath). |
| „przypadki” | Rozróżnienie wielkości liter pogrupowane w nawiasy klamrowe, jak w przypadku funkcji fragmentarycznych ( amsmath ). |
| `przypadki` | `cases` z wpisami w stylu wyświetlania, dzięki czemu ułamki zachowują pełny rozmiar (narzędzia matematyczne). |
| `macierz` | Goła macierz bez ograniczników (amsmath). |
| `pmatrix` | Macierz ujęta w nawiasy (amsmath). |
| `bmacierz` | Macierz ujęta w nawiasy kwadratowe (amsmath). |
| `Bmatrix` | Macierz ujęta w nawiasy klamrowe (amsmath). |
| `vmatrix` | Macierz owinięta w pionowe słupki, standardowy zapis wyznacznika (amsmath). |
| `Vmatrix` | Matryca owinięta w podwójne pręty (amsmath). |
| `mała matryca` | Kompaktowa matryca dostosowana do użytku inline (amsmath). |
| `tablica` | Siatka w trybie matematycznym z wyrównaniem według kolumn, matematyczny kuzyn „tabelarycznego”. |
| „równowaga” | Stare środowisko równań z trzema kolumnami; zniechęcony, odstępy są nieprawidłowe, użyj `align`. |

## Odsyłacze i linki

| Polecenie | Co to robi |
| --- | --- |
| `\label{fig:setup}` | Nazywa miejsce (równanie, rysunek, przekrój), aby można było się do niego odwołać. |
| `\ref{fig:setup}` | Drukuje numer oznaczonego elementu. |
| `\pageref{fig:setup}` | Drukuje numer strony, na której znajduje się etykieta. |
| `\cref{fig:setup}` | Automatycznie drukuje numer ORAZ nazwę jego typu: 'rys. 1' (sprytny). |
| `\Cref{fig:setup}` | Początek zdania pisany wielką literą: „Rysunek 1” (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Drukuje zakres: 'eqs. 1 do 4' (sprytny). |
| `\labelcref{fig:setup}` | Drukuje tylko numer etykiety w stylu sprytny, bez nazwy typu (cleveref). |
| `\vref{fig:setup}` | Odniesienie plus automatyczna fraza „na następnej stronie”, jeśli zajdzie taka potrzeba (varioref). |
| `\autoref{fig:setup}` | odnośnik wpisany w hyperref: „Rysunek 1” z powiązanym całym wyrażeniem. |
| `\nameref{sec:intro}` | Drukuje tekst tytułu sekcji, do której się odwołuje (hiperref). |
| `\href{https://example.com}tekst linku}` | Tworzy klikalny link z niestandardowym tekstem (hiperref). |
| `\url{https://example.com}` | Tworzy adres URL czcionką maszynową i umożliwia jego kliknięcie. |
| `\hyperref[sec:intro]{ta sekcja}` | Tworzy dowolne łącze tekstowe do etykiety (hiperref). |
| `\hipertarget{miejsce}{...}` | Tworzy nazwany cel łącza w dowolnym miejscu dokumentu (hiperref). |
| `\hiperłącze{miejsce}{tekst}` | Linki do `\hypertarget` (hyperref). |
| `\sekcja fantomowa` | Tworzy kotwicę, dzięki czemu linki do nienumerowanych nagłówków trafiają we właściwe miejsce (hiperref). |
| `\texorpdfstring{$\alfa$}{alfa}` | Zapewnia alternatywę dla matematyki w nagłówkach w postaci zwykłego tekstu, dzięki czemu zakładki PDF zachowują ważność (hiperref). |
| `\pdfbookmark[1]{Tytuł}{nazwa}` | Dodaje ręczny wpis w zakładce PDF (hiperref). |

## Cytaty i bibliografia

| Polecenie | Co to robi |
| --- | --- |
| `\cite{knuth1984}` | Cytuje wpis bibliograficzny według klucza. |
| `\nocite{klucz}` | Dodaje wpis do bibliografii bez powoływania się na niego w tekście; `\nocite{*}` dodaje wszystko. |
| `\citep{knuth1984}` | Cytat w nawiasie „(Knuth, 1984)” w stylu roku autorskiego natbib. |
| `\citet{knuth1984}` | Cytat tekstowy „Knuth (1984)” w stylu roku autorskiego natbib. |
| `\citeauthor{knuth1984}` | Drukuje tylko nazwiska autorów (natbib i biblatex). |
| `\citeyear{knuth1984}` | Drukuje tylko rok (natbib i biblatex). |
| `\citealp{knuth1984}` | natbib Cytat w nawiasach bez nawiasów, do tworzenia własnych. |
| `\citealt{knuth1984}` | natbib cytat tekstowy bez nawiasów przez cały rok. |
| `\parencite{knuth1984}` | Cytat w nawiasie z biblatexu, odpowiednik `\citep`. |
| `\textcite{knuth1984}` | Cytat tekstowy biblatex, odpowiednik `\citet`. |
| `\autocite{knuth1984}` | cytat biblatex zgodny z preferowaną formą stylu (nawias, przypis itp.). |
| `\footcite{knuth1984}` | Biblatex cytat umieszczony w przypisie. |
| `\fullcite{knuth1984}` | Drukuje w tekście pełny tekst bibliografii wpisu (biblatex). |
| `\citetitle{knuth1984}` | Drukuje tytuł pracy (biblatex). |
| `\bibliografia{ref.}` | BibTeX: drukuje listę referencyjną z pliku .bib. |
| `\bibliographystyle{plainnat}` | BibTeX: wybiera format referencyjny; klasyczne style obejmują zwykły, unsrt, alfa, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: rejestruje plik .bib w preambule. |
| `\printbibliografia` | biblatex: drukuje listę referencyjną w miejscu jej umieszczenia. |
| `\bibitem{klucz}` | Jeden odręczny wpis w środowisku „bibliografii”. |
| `bibliografia` (środowisko) | Napisane ręcznielista referencyjna używana, gdy całkowicie pomijasz BibTeX. |

## Elementy pływające, figury i tabele

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| „figura” (środowisko) | Pływający pojemnik na obraz i podpis; LaTeX wybiera ostateczną pozycję. |
| `figura*` (środowisko) | Rysunek obejmujący obie kolumny w dokumencie dwukolumnowym. |
| `stół` (środowisko) | Pływający pojemnik na tabelę z podpisem; LaTeX wybiera ostateczną pozycję. |
| `stół*` (środowisko) | Tabela obejmująca obie kolumny w dokumencie dwukolumnowym. |
| `\begin{figure}[htbp]` | Wskazówki dotyczące rozmieszczenia: tutaj, na górze, na dole, własna strona; `!` łagodzi zasady, `[H]` (pakiet typu float) oznacza dokładnie tutaj. |
| `tabelaryczny` (środowisko) | Rzeczywista siatka wierszy i kolumn: komórki podzielone znakami „&”, wiersze zakończone znakiem „\\”. |
| `tabelaryczny*` (środowisko) | Tabelaryczne rozciągnięte do określonej szerokości całkowitej. |
| `tabularx` (środowisko) | Tabela o stałej szerokości, której kolumny „X” dzielą pozostałą przestrzeń (tabularx). |
| `tablica` (środowisko) | Siatka w trybie matematycznym z wyrównaniem według kolumn. |
| `longtable` (środowisko) | Tabela, która może być podzielona na strony, z powtarzającymi się nagłówkami (longtable). |
| `ministrona` (środowisko) | Ministrona o stałej szerokości wewnątrz strony, służąca do umieszczania treści obok siebie. |
| `podfigura` (środowisko) | Jeden podpanel z własnym podpisem, np. (a) i (b), wewnątrz rysunku (podpis). |
| `wrapfigure` (środowisko) | Rysunek z otaczającym go tekstem głównym (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (środowiska) | Elementy pływające obrócone o 90 stopni na własną stronę (obracanie). |
| „krajobraz” (środowisko) | Obraca całe strony do poziomu, z automatycznym obracaniem strony PDF (pdflscape). |
| „trójczęściowy” (środowisko) | Zawija tabelę tak, aby przypisy dolne były wyrównane z szerokością tabeli (trójczęściowy). |
| `notatki` (środowisko) | Lista notatek pod trzyczęściową tabelą, oznaczona jako `\tnote{a}`. |
| „regulator” (środowiskoi `\regulbox`) | Skaluje, zmienia rozmiar lub przycina dowolną zawartość za pomocą opcji klucz-wartość (pole regulacji). |
| `\podpis{...}` | Dodaje numerowany podpis do rysunku lub tabeli; wstaw po nim `\label`. |
| `\podpis*{...}` | Podpis bez numeru lub wpisu na liście (pakiet napisów). |
| `\captionsetup{...}` | Konfiguruje czcionki napisów, etykiety i odstępy (pakiet podpisów). |
| `\toprula` | Ciężka linijka na górze stołu z zakładkami. |
| `\ruła środkowa` | Średnia reguła między nagłówkiem a treścią tabeli zakładek. |
| `\reguła dolna` | Ciężka linijka na dole stołu z zakładkami. |
| `\cmidrule(lr){2-3}` | Reguła częściowa obejmująca wybrane kolumny (zakładki). |
| `\przestrzeń dodawania` | Mały dodatkowy pionowy odstęp między rzędami zakładek zamiast reguły. |
| `\hline` | Pozioma linia o pełnej szerokości w zwykłej tabeli; Reguły booktabs zwykle wyglądają lepiej. |
| `\cline{2-3}` | Linia pozioma obejmująca wybrane kolumny w zwykłej tabeli. |
| `\vline` | Pionowa linia w tym miejscu wiersza tabeli; Specyfikatory kolumny `|` są zwykłym sposobem. |
| `\wielokolumnowe{2}{c}Nagłówek}` | Łączy komórki w kolumnach w jednym wierszu. |
| `\wielowierszowe{2}{*}etykieta}` | Łączy komórki w pionie w wierszach (wiele wierszy). |
| `\tablicastretch` | Współczynnik wysokości wiersza tabeli; ustaw za pomocą `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Długość wypełnienia po obu stronach kolumny tabelarycznej. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Definiuje specyfikator kolumny wielokrotnego użytku (pakiet tablicowy). |
| `\endfirsthead` | longtable: oznacza koniec nagłówka pokazanego tylko na pierwszej stronie. |
| `\koniec` | longtable: oznacza koniec nagłówka powtarzany na każdej kolejnej stronie. |
| `\koniec` | longtable: oznacza koniec stopki wyświetlanej przy każdym podziale strony. |
| `\końcowastopa` | longtable: oznacza koniec stopki pokazanej tylko na samym końcu. |
|`\Bariera pływakowa` | Zatrzymuje pływaki dryfujące obok tego punktu (placeiny). |

## Przypisy

| Polecenie | Co to robi |
| --- | --- |
| `\przypis{...}` | Umieszcza notatkę na dole strony, oznaczoną automatycznym numerem. |
| `\przypis` | Drukuje tylko znacznik przypisu w miejscach, gdzie `\footnote` nie jest dozwolone. |
| `\tekst przypisu{...}` | Dostarcza tekst wcześniejszego `\footnotemark`. |

## Twierdzenia i dowody

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| `\nowe twierdzenie{lemat}{Lemat}` | Deklaruje środowisko podobne do twierdzenia (amsthm). |
| `\nowe twierdzenie*{uwaga}{Uwaga}` | Deklaruje nienumerowane środowisko przypominające twierdzenie (amsthm). |
| `\teoremstyle{definicja}` | Ustawia wygląd (zwykły, definicja, uwaga) dla następujących deklaracji `\newtheorem` (amsthm). |
| `twierdzenie` (środowisko) | Numerowany blok twierdzeń, utworzony przez `\newtheorem{theorem}{Theorem}`. |
| „dowód” (środowisko) | Blok próbny, który drukuje „Dowód”. i kończy się kwadratem QED (amsthm). |

## Dosłowne informacje, kod i listy

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| `\czasownik|kod|` | Dosłownie: drukuje dokładnie to, co wpisałeś, rozdzielając dowolnym powtarzającym się znakiem. |
| „dosłownie” (środowisko) | Blok tekstu wydrukowany dokładnie tak, jak został napisany, czcionką maszynową. |
| `\verbatiminput{plik.txt}` | Drukuje cały plik dosłownie (pakiet Verbatim). |
| `lstlisting` (środowisko) | Lista kodów źródłowych z opcjonalnym podświetlaniem składni (listy). |
| `\lstinline|kod|` | Wbudowany fragment kodu w stylu aukcji (listingi). |
| `\lstset{język=Python}` | Konfiguruje domyślne ustawienia aukcji: język, numeracja, kolory (listingi). |
| `\lstinputlisting{script.py}` | Składa cały plik źródłowy jako listę (listy). |
| „wybity” (środowisko) | Podświetlone bloki kodu zasilane pigmentami; potrzebuje `-shell-escape` w czasie kompilacji (minted). |
| `\mintinline{python}|kod|` | Podświetlony kod wbudowany (wybity). |

## Beamer (slajdy)

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| „rama” (środowisko) | Jeden slajd Beamera: `\begin{frame}{Tytuł slajdu} ... \end{frame}`. |
| `\ramka{...}` | Formularz slajdów Beamera z jednym poleceniem; środowisko `frame` jest zwykłym sposobem. |
| `\tytuł ramki{...}` | Ustawia tytuł slajdu z wnętrza ramki. |
| `\podtytuł{...}` | Ustawia mniejszy napis pod tytułem klatki. |
| `\strona tytułowa` | Beamer: wewnątrz ramki drukuje slajd tytułowy na podstawie metadanych tytułu. |
| `\spis treści[bieżąca sekcja]` | Zarys slajdu podkreślający sekcję, w której się znajdujesz. |
| `\pauza` | Beamer: odkrywa resztę kadru w następnym kroku slajdu. |
| `\onslide<2->` | Treść pojawia się począwszy od danego etapu nakładki. |
| `\tylko<2>{...}` | Treść istnieje tylko w podanych krokach i nie zajmuje miejsca gdzie indziej. |
| `\odkryj<2->{...}` | Treść jest niewidoczna przed swoim krokiem, ale zawsze rezerwuje swoją przestrzeń. |
| `\widoczny<2->{...}`, `\niewidoczny<2>{...}` | Pokaż lub ukryj treść poszczególnych kroków bez zmiany układu. |
| `\alarm{...}` | Wyróżnia tekst kolorem alertu motywu, zwykle czerwonym. |
| `blok` (środowisko) | Pole z tytułem w standardowym kolorze motywu. |
| `alertblock` (środowisko) | Pole zatytułowane w kolorze alertu, zawierające ostrzeżenia lub kluczowe punkty. |
| `przykładowy blok` (środowisko) | Pole zatytułowane w przykładowym kolorze, najczęściej zielonym. |
| `kolumny` (środowisko) i `\kolumna{0.5\textwidth}` | Regiony układu obok siebie na slajdzie. |
| `\usetheme{Madryt}` | Beamer: wybiera temat prezentacji w preambule. |
| `\usecolortheme{konik morski}` | Zamienia tylko paletę kolorów motywu. |
| `\usefonttheme{serif}` | Zamienia tylko wybrane czcionki motywu. |
| `\setbeamertemplate{symbole nawigacyjne}{}` | Zastępuje jeden element motywu, usuwając w tym przypadku ikony nawigacji. |
|`\setbeamercolor{tytuł}{fg=czarny}` | Zastępuje jeden kolor motywu. |
| `\uwaga{...}` | Notatki prelegenta dołączone do ramki, wyświetlane tylko w wynikach notatek. |

## TikZ i diagramy

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| `tikzpicture` (środowisko) | Płótno na rysunki TikZ; wszystkie polecenia `\draw` i `\node` trafiają do niego. |
| `\tikz` | Jednorazowy obraz w wierszu: `\tikz \draw (0,0) okrąg (2pt);`. |
| `\rysuj (0,0) -- (1,1);` | Polecenie ścieżki TikZ, które rysuje linie i kształty; opcje takie jak `[gruby, czerwony, ->]'' stylizuj. |
| `\wypełnij` | Polecenie ścieżki TikZ, które wypełnia kształt zamiast go głaskać. |
| `\filldraw` | Polecenie ścieżki TikZ, które zarówno wypełnia, jak i obrysowuje kształt. |
| `\cień` | Polecenie ścieżki TikZ, które wypełnia gradientem. |
| `\klip` | Ścieżka TikZ, która ogranicza wszystkie późniejsze rysunki do jej wnętrza. |
| `\ścieżka` | Ścieżka TikZ, która oblicza współrzędne bez rysowania, np. do umieszczania węzłów. |
| `\węzeł w (0,0) {etykieta};` | Polecenie TikZ, które umieszcza tekst lub kształty we współrzędnych. |
| `\współrzędna (a) w (1,2);` | Nazywa punkt do ponownego użycia w późniejszych ścieżkach. |
| `\foreach \i w {1,...,5}` | Pętla powtarzająca kod rysowania na liście (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | W nowoczesny sposób definiuje style TikZ wielokrotnego użytku. |
| `\tikzstyle` | Składnia starej definicji stylu; przestarzałe, użyj `\tikzset`. |
| `\usetikzlibrary{pozycjonowanie}` | Ładuje dodatkowe funkcje TikZ w preambule. |
| `\macierz` (TikZ) | Dopasowany do siatki układ węzłów wewnątrz obrazu tikz. |
| `tikzcd` (środowisko) | Siatka diagramów przemiennych; komórki podzielone przez `&` (tikz-cd). |
| `\strzałka[r, "f"]` | Rysuje strzałkę między komórkami na diagramie przemiennym tikz-cd. |

## Jednostki (siunitx)

| Polecenie | Co to robi |
| --- | --- |
| `\num{12345.678}` | Formatuje liczbę z zachowaniem prawidłowego grupowania cyfr i znaczników dziesiętnych. |
| `\ilość{9,8}{\metr\na\sekundę\kwadrat}` | Liczba z jednostką, z prawidłowymi odstępami (nazwa siunitx v3). |
| `\jednostka{\kilo\gram}` | Sama jednostka (nazwa siunitx v3). |
| `\SI{9,8}{\metr\na\sekundę\kwadrat}` | v2 nazwa `\qty`; wciąż szeroko spotykany w gazetach. |
| `\si{\kilo\gram}` | v2 nazwa `\jednostki`. |
| `\sissetup{...}` | Globalna konfiguracja siunitx. |
| `\DeclareSIUnit{\parsec}{pc}` | Definiuje jednostkę niestandardową (siunitx). |

## Glosariusze i akronimy

| Polecenie | Co to robi |
| --- | --- |
| `\gls{svm}` | Drukuje glosariusz lub akronim, rozwijając go przy pierwszym użyciu (glosariusze). |
| `\Gls{svm}` | Początek zdania pisany wielką literą (glosariusze). |
| `\glspl{svm}` | Liczba mnoga hasła (glosariusze). |
| `\newglossaryentry{drzewo}{nazwa=drzewo, opis={...}}` | Deklaruje termin słownikowy (glosariusze). |
| `\newacronym{svm}{SVM}maszyna wektorów pomocniczych}` | Deklaruje akronim za pomocą krótkich i długich form (glosariusze). |
| `\acrshort{svm}`, `\acrlong{svm}` | Wymuszaj formę krótką lub długą niezależnie od pierwszego użycia (glosariusze). |
| `\makeglosariusze` | Polecenie preambuły aktywujące przetwarzanie glosariusza/akronimu (glosariusze). |
| `\printglosariusz` | Drukuje jedną listę glosariuszy w miejscu jej umieszczenia (glosariusze). |
| `\printglosariusze` | Drukuje listę glosariuszy i akronimów w miejscu ich umieszczenia (glosariusze). |

## Algorytmy i pseudokod

Polecenia słów kluczowych pochodzą z algpseudocode (algorithmicx); „algorytm” float je otacza.

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| „algorytm” (środowisko) | Pływający kontener na pseudokod, z podpisem i numerem (algorytm). |
| „algorytmiczne” (środowisko) | Sama treść pseudokodu zawierająca polecenia słów kluczowych (algpseudocode). |
| `\Stan` | Jedna linia instrukcji pseudokodu. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Słowa kluczowe bloku warunkowego. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Zapętlaj słowa kluczowe w zakresie lub zestawie. |
| `\Podczas{...}`, `\EndWhile` | Słowa kluczowe pętli while. |
| `\Funkcja{Nazwa}{argumenty}`, `\EndFunction` | Blok definicji funkcji. |
| `\Procedura{Nazwa}{argumenty}`, `\KoniecProcedury` | Blok definicji procedury. |
| `\Powrót` | Słowo kluczowe return. |
| `\Komentarz{...}` | Komentarz wyrównany do prawej linii pseudokodu. |
| `\Wymagaj`, `\Zapewnij` | Linie warunków wstępnych i końcowych na górze algorytmu. |

## Pakiety językowe, cytowania i redakcyjne

| Polecenie | Co to robi |
| --- | --- |
| `\selectlanguage{niemiecki}` | Zmienia aktywny język: dzielenie wyrazów, podpisy, daty (babel). |
| `\język obcy{francuski} {...}` | Składa krótki fragment zgodnie z zasadami innego języka (babel). |
| `\cytuj{...}` | Kontekstowe cudzysłowy, które prawidłowo zagnieżdżają i lokalizują (csquotes). |
| `\todo{Napraw to}` | Notatka na marginesie oznaczająca pracę do wykonania (todonotes). |
| `\listoftodos` | Drukuje listę wszystkich notatek do zrobienia (todonotes). |
| `\brakująca figura{...}` | Pole zastępcze dla figury, której jeszcze nie stworzyłeś (todonotes). |
| `\xspace` | Na końcu makra dodaje spację, chyba że następuje po niej znak interpunkcyjny (xspace). |
| `\patchcmd{\cmd}{znajdź}zamień}{ok}nie powiodło się}` | Poprawia definicję istniejącego makra (etoolbox). |
| `\apptocmd`, `\pretocmd` | Dołącz lub dodaj kod do istniejącego makra (etoolbox). |
| `\newtoggle{draft}`, `\toggletrue{draft}`, `\iftoggle{draft}{...}{...}` | Lekkie flagi logiczne (etoolbox). |

## Pakiety układu i typografii w jednej linii

| Pakiet lub polecenie | Co to robi |
| --- | --- |
| `\setstretch{1.25}` | Ustawia dokładny współczynnik odstępu między wierszami (setspace). |
| `\podwójna spacja` | Przełącza na podwójne odstępy między wierszami (setspace). |
| `\połowa odstępu` | Przełącza na odstęp między wierszami wynoszący półtora (setspace). |
| `\pojedyncze odstępy` | Przełącza z powrotem na pojedyncze odstępy między wierszami (setspace). |
| `odstęp` (środowisko) | Ustawia niestandardowy współczynnik odstępu między wierszami dla swojej zawartości (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Zmienia wygląd nagłówka sekcji (titlesec). |
| `\titlespace{\section}{0pt}{12pt}{6pt}` | Dostosowuje odstęp wokół nagłówka (titlesec). |
| `\setlist[itemize]{noitemsep}` | Konfiguruje odstępy między listami i etykiety globalnie lub na poziomie (enumitem). |
| `pietruszka` (opakowanie) | Przełącza dokument tak, aby blokował akapity: odstęp pomiędzy, bez wcięć. |
| `mikrotyp` (pakiet) | Subtelne wysunięcie i poszerzenie poprawiające wyjustowanie; po prostu to załaduj. |
| `multicole` (środowisko) | Zrównoważony tekst wielokolumnowy bez opcji klasy dwukolumnowej (multicol). |

## Chemia, fizyka i notacja dziedzinowa

| Polecenie | Co to robi |
| --- | --- |
| `\ce{H2O}` | Składa wzór chemiczny lub reakcję (mhchem). |
| `\chemfig{...}` | Rysuje diagram struktury chemicznej (chemfig). |
| `\braket{\phi|\psi}` | Składa się z notacji bra-ket Diraca z paskami o automatycznym rozmiarze (nawias). |

## Polecenia klasy wydawcy

| Polecenie lub środowisko | Co to robi |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formatuje blok nazwiska autora w obszarze tytułu konferencji IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran: formatuje blok afiliacji autora w obszarze tytułu konferencji IEEE. |
| `\ccsdesc[500]{...}` | acmart: deklaruje jedną koncepcję ACM CCS dla klasyfikacji artykułu. |
| `CCSXML` (środowisko) | acmart: przechowuje czytelny maszynowo koncept ACM CCS XML z narzędzia klasyfikacyjnego ACM. |
| `\Uniwersytet{...}` | Polecenie metadanych specyficzne dla klasy widoczne w szablonach prac dyplomowych, a nie w standardowym LaTeX. |

## Środowiska ogólnie

Środowisko to region otwierany za pomocą `\begin{name}` i zamykany za pomocą `\end{name}`; wszystko pomiędzy nimi ma zachowanie tego środowiska. Pełna historia znajduje się w [polecenia vs środowiska](/learn/commands-environments/). Te ogólnego przeznaczenia:

| Środowisko | Co to robi |
| --- | --- |
| `dokument` | Treść każdego dokumentu znajduje się pomiędzy `\begin{document}` a `\end{document}`. |
| „abstrakcyjne” | Drukuje streszczenie artykułu ze standardowym nagłówkiem i układem zajęć. |
| `strona tytułowa` | Owija ręcznie wykonaną pełną stronę tytułową; strona jest nienumerowana. |
| `centrum` | Wyśrodkowuje zawartość w poziomie. |
| `równo-lewo` | Wyrównuje zawartość do lewej, poszarpana do prawej. |
| „flushright” | Wyrównuje zawartość do prawej, nierówną do lewej. |
| „wyszczególnić” | Lista punktowana; każdy wpis zaczyna się od `\item`. |
| „wyliczyć” | Lista numerowana; każdy wpis zaczyna się od `\item`. |
| `opis` | Lista oznaczona; wpisy zaczynają się od `\item[Label]`. |
| `\przedmiot` | Rozpoczyna jeden wpis w listach wyszczególnień, wyliczeń lub opisów. |
| „cytat” | Blok z wcięciem w przypadku krótkich cytatów, bez wcięcia akapitu. |
| „cytat” | Blok wcięty w przypadku dłuższych cytatów, z wcięciami akapitowymi. |
| `wiersz` | Wcięty blok dla poezji, gdzie `\\` kończy każdą linię wersetu. |
| „niechlujny” | Akapity składane ze swobodnym łamaniem wierszy, forma środowiska „\niechlujny”. |
| `lista` | Ogólny kreator list, z którego definiowane są pozycje i przyjaciele. |
| `trivlist` | Lista bez etykiet i marginesów, używana wewnątrz definicji makr. |
| `zawartość pliku` | Zapisuje swoją treść do pliku w czasie kompilacji, np. aby wysłać plik .bib wewnątrz pliku .tex. |
| „załączniki” | Zawija rozdziały dodatku, włączając `\appendixpage` i narzędzia dla poszczególnych dodatków (pakiet dodatków). |

## Gdzie dalej iść

Ta strona to słownik. Lekcje to gramatyka. Aby uzyskać jednostronicowy plik gotowy do wklejenia, pozostaw [ściągawkę](/learn/cheatsheet/) otwartą. Aby zapoznać się z różnicą między blokami `\command{...}` i `\begin{...}`, przeczytaj [polecenia a środowiska](/learn/commands-environments/). W przypadku symbolu, który możesz sobie wyobrazić, ale nie możesz go nazwać, użyj [symboli matematycznych](/learn/math-symbols-cheatsheet/). Aby zobaczyć, jak wygląda dowolne polecenie trybu matematycznego, wklej je do [podglądu na żywo](/live/) i zobacz, jak się renderuje.