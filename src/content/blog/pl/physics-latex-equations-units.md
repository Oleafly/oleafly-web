---

title: "Zadania z fizyki: równania, jednostki i rozsądek wieloplikowy"
description: "Notacja, siunitx, projekty wielorozdziałowe, dwukolumnowe pułapki dzienników i nawyki kompilacji offline dla studentów fizyki i astronomii."
date: 2026-06-20
tags: [physics, thesis, math]
---

Manuskrypty fizyki zawierają więcej matematyki na stronie niż większość dziedzin. To w porządku
dopóki w połowie ukończony rozdział nie przerwie całej kompilacji, ponieważ jedna etykieta została przeniesiona,
lub dopóki każdy współautor nie wymyśli innej konwencji pogrubionych wektorów.

Jest to praktyczna konfiguracja dla rozdziałów magisterskich/doktoranckich, notatek dotyczących współpracy i dziennika
zgłoszenia, które nadal wymagają dwóch kolumn.

## Wiele plików od początku

Nawet krótka praca dyplomowa korzysta z pliku głównego, a rozdział zawiera:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Użyj `\includeonly{chapters/methods}` podczas tworzenia wersji roboczej, aby nie przebudowywać
trzy rozdziały, aby rozwiązać jedno równanie. Szczegóły:
[jeden plik główny, wiele rozdziałów](/learn/split-chapter-files/).

Trzymaj figury pod `figures/ch2/` i nazywaj równania etykietami uwzględniającymi rozdziały
(`eq:ch2-hamiltonian`), więc połączenia nie kolidują.

## Jednostki nie są tekstem

Jeśli musisz, napisz ręcznie `$v = 3,0\,\mathrm{m\,s^{-1}}$` lub załaduj `siunitx`
i użyj `\qty{3,0}{m.s^{-1}}`. Czasopisma różnią się odstępami i cienkimi przestrzeniami; wybrać
jedną ścieżkę pakietu i trzymaj się jej. Mieszane style wyglądają jak dwóch autorów, którzy nigdy
spotkałem.

W przypadku tabel wartości kolumny typu „siunitx” wyrównują miejsca dziesiętne i zachowują jednostkę
nagłówki spójne. Nie mieszaj `m/s` i `ms^{-1}` w tym samym papierze bez a
powód podany w metodach.

## Dirac, wektory i pogrubione konwencje

Grupy kwantowe i grupy materii skondensowanej często wymagają notacji Diraca. Pakiety takie jak
`fizyka` lub dedykowane makra dla `\ket`, `\bra`, `\braket` beat ad-hoc
kombinacje kątów. Grupy mechaniki klasycznej spierają się o pogrubienie kontra strzałkę
wektory. Udokumentuj konwencję w preambule i odrzuć wyjątki ad hoc
połowa rozdziału.

Zobacz [notację Diraca](/learn/physics-braket/) i [pogrubioną matematykę](/learn/bold-math/).

Zdefiniuj operatory raz (`\DeclareMathOperator`), aby operatory różnicowe i
nazwane funkcje nie zmieniają czcionki.

## Numeracja i odsyłacze

Równania liczbowe, które zacytujesz; resztę pozostaw bez numeru. Strona z
„(1)(2)(3)...” jest trudniejszy do odczytania niż krótka narracja z dwoma oznakowanymi linijkami.
Do równań i stabilnych etykiet używaj `\eqref`. Sprawdzanie referencji w całym projekcie
łapie usuniętą etykietę zanim zrobi to doradca.

Twierdzenia i lematy (jeśli z nich korzystasz) powinny mieć wspólny przejrzysty schemat numeracji
reszta szablonu działu. Zobacz także
[twierdzenia i dowody](/learn/theorems-proofs/).

## Dwukolumnowe pułapki dziennika

Klasy APS, IOP i podobne zmieniają zachowanie float. Postać, która wyglądała dobrze
w „artykule” może odmówić zasiadania obok akapitu, który go cytuje. Skompiluj
z prawdziwymi klasami wcześniej, a nie w weekend przed złożeniem zgłoszenia.

Wartości domyślne, które pomagają:

- szerokość cyfry około `0,45\textwidth` lub `\columnwidth` w przypadku dwóch kolumn
- szerokie cyfry jako `figura*` (często tylko na górze strony)
- długie wyprowadzenia w `multline` / `split` lub przeniesione do załącznika

Nie zmniejszaj czcionki równań, dopóki nie stanie się nieczytelna. Recenzenci zauważają.

## Ryciny: wykresy i schematy

Eksportuj wykresy jako PDF z matplotlib/gnuplot/Root, kiedy tylko możesz. Rastrowe pliki PNG są
dla zdjęć i obrazów z detektora, przy wystarczającej rozdzielczości. Schematy mogą być TikZ lub
zewnętrzna grafika wektorowa; zachowaj źródło w repozytorium. Przytnij białe znaki wcześniej
`\includegraphics`.

## Offline, gdy sieć laboratoryjna ulegnie awarii

Linie świetlne i pomieszczenia czyste nie są znane ze stabilnej sieci Wi-Fi.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) dostarcza
kompilatory i przechowuje SyncTeX, obszar roboczy PDF i podgląd matematyki lokalnie. Każdy
projekt to prawdziwy Git z automatycznymi punktami kontrolnymi, więc zła edycja równania to jedna z nich
przywrócić. Plik PDF jest nadal tworzony, gdy edytor przeglądarki nie ładuje się.

Podobny stos offline możesz utworzyć za pomocą TeX Live, przeglądarki plików PDF i Git by
ręka. Tak czy inaczej, rekompilacja pracy dyplomowej nie powinna zależeć od portalu przechwytującego
rozdział trzeci.

## Współpraca

W miarę możliwości twórz własne rozdziały według autora. Udostępnij arkusz notatek. Uruchom pełny dokument
kompiluje się co tydzień, więc odniesienia między rozdziałami zawodzą wcześnie. Prywatny pilot Git dla
niepublikowane wyniki; publiczne tylko wtedy, gdy pozwala na to polityka współpracy.

## Załączniki i materiały uzupełniające

Długie wyprowadzenia i dodatkowe wykresy znajdują się w załączniku lub odrębnym suplemencie
PDF, gdy czasopismo jest dwukolumnowe i ma ograniczoną liczbę stron. Wyraźne odniesienie
(„patrz Załącznik B”) z prawdziwymi etykietami. Nie zakładaj, że sędzia otworzy zamek błyskawiczny
luźnych postaci, bez podpisów.

## Gdy doradca edytuje na papierze

Jeśli możesz, zastosuj znaczniki do źródła TeX-a tego samego dnia. Stosy papieru stają się nieaktualne.
Jeśli dwóch doradców zaznaczy sprzeczny zapis, zaktualizuj arkusz preambuły i wyślij
jednostronicowy zapis w formacie PDF, więc argument nie jest ponownie rozpatrywany w każdej wersji roboczej.

## Przed złożeniem

Arkusz notacji jest kompletny, wektory i biustonosze/komplety spójne, jednostki w jednym systemie
(„siunitx” lub uzgodniony styl ręczny). Rozdziały powinny zawierać czysto
`\ref`/`\eqref` rozwiązanie. Skompiluj prawdziwy dziennik lub zajęcia dyplomowe bez czcionki
niespodzianki. Ryciny spełniają zasady dpi i kolorów; napisy są samodzielne. Archiwum
źródłowe i plik PDF z hashem zatwierdzenia dla przesłanej wersji.

Pisanie fizyki jest wystarczająco trudne. Łańcuch narzędzi powinien pozostać nudny.