---

title: "LaTeX do prac związanych z uczeniem maszynowym bez bałaganu w notacjach"
description: "Arkusze notacji, tabele ablacji, algorytmy, rysunki z przebiegów szkoleniowych i Git obok papieru od pierwszego szkicu arXiv do gotowości do kamery."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Większość artykułów ML zawodzi w ten sam sposób w LaTeX: matematyka jest w porządku na stronie trzeciej i
niespójne na stronie dwunastej. Strata wynosi `L` w jednej sekcji, `\mathcal{L}` w
inny, a pogrubione wektory pojawiają się tylko wtedy, gdy autor sobie przypomniał. Recenzenci
zauważyć, nawet jeśli tego nie komentują.

Jest to praktyczny przewodnik dla studentów piszących prace warsztatowe, konferencyjne
zgłoszeń i rozdziałów prac dyplomowych, które mają wspólne DNA z kodem szkoleniowym.

## Wybierz arkusz notatek pierwszego dnia

Zanim napiszesz pokrewną pracę, napisz dwadzieścia linii makr:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Wklej ten blok do każdej gałęzi współautora. Kiedy model wymyśla nowy symbol,
najpierw dodaj go do arkusza, a następnie użyj. The
[Lekcja AI podążającej za notacją](/learn/ai-follow-notation/) to ten sam pomysł z
model języka w pętli: model musi przestrzegać arkusza, a nie wymyślać czcionki.

Podgląd matematyki na żywo w edytorze badań pomaga złapać `\mathcal{L}` i
`L` nie są tym samym obiektem podczas pisania.

## Stoły, które przetrwają montaż kamery

Tabele ablacji rosną, aż spadną ze strony. Preferuj „zakładki” z nr
linie pionowe, „siunitx” dla wyrównanych miejsc dziesiętnych i podpis stwierdzający
metryka i podział (ImageNet, CIFAR, w domenie vs OOD). Jeśli stół rozciąga się
stron, użyj wcześniej opcji „longtable” zamiast zmniejszać czcionkę do 7 pkt.

Kreator wizualny pomaga w pierwszym szkicu: plik
[generator tabel](/tools/table-generator/) działa w przeglądarce. Ostatni stół
nadal powinien nazwać metrykę w podpisie i zdefiniować ± jako std lub se.

Jeśli miejsce na to pozwala, zgłaszaj wartości początkowe i zakresy hiperparametrów w tabelach w załączniku.
Główne tabele pozostają skanowalne.

## Algorytmy i listy

Pseudokod należy do „algorithm2e” lub „algorithmicx”, a nie do stałej przestrzeni
akapit. Prawdziwe fragmenty szkoleniowe należą do „listingów” lub „wybitych” z rozszerzeniem
ustawiony język, aby recenzenci mogli przeglądać. Staraj się, aby główny artykuł był krótki; wstaw pełną konfigurację
w załączniku lub link do repo ze skrótem zatwierdzenia.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Algorytmy liczbowe, które cytujesz. Nie umieszczaj pięciu stron PyTorch w pliku PDF.

## Dane z TensorBoard i matplotlib

Eksportuj pliki PDF lub SVG, kiedy tylko możesz. Rastrowe pliki PNG w rozdzielczości 300 dpi są odpowiednie dla interfejsu użytkownika
zrzuty ekranu, a nie wykresy liniowe. Przytnij białe znaki przed `\includegraphics`. Jeśli
pływak ucieka do następnej sekcji, ustal rozmiar i położenie przed walką z „[H]”.
przez godzinę: [umieszczenie pływaka](/learn/figure-wrong-position/).

Ablacje wielopanelowe: buduj w TeX-ie z „podpisem” lub komponuj zewnętrznie i
Dołącz jeden plik PDF. Zachowaj spójny kolor „naszych” na figurach, więc skimmery
naucz się raz legendy.

## Dwukolumnowe zajęcia konferencyjne

Klasy w stylu NeurIPS, ICML, ICLR i CVPR zmieniają marginesy i zasady pływania.
Kompiluj wcześniej z oficjalną klasą. Limity stron są rzeczywiste; nie miażdż
czcionki. Przenieś próbki i dodatkowe ablacje do załącznika lub dodatkowego pliku PDF, kiedy
połączenie pozwala.

## Powiązane prace i cytaty

Używaj stabilnych kluczy cytowania i czystego eksportu Scholar. Zatwierdź plik `.bib`:
[Walidator BibTeX](/tools/bibtex-validator/). Zacytuj kod i zbiory danych
zależeć od. Rok autora a liczba zależy od miejsca; użyj szablonu
styl, a nie hybryda.

## Git obok papieru

Każda zmiana architektury powinna być zatwierdzeniem, które możesz nazwać. Traktuj papier i
kod jako ten sam projekt, a nie dwa osobne nawyki tworzenia kopii zapasowych.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) prowadzi gazetę
w prawdziwym repozytorium Git obok edytora obsługującego projekt z podglądem matematyki na żywo,
referencje między plikami, uzupełnianie cytowań i SyncTeX PDF. To pasuje do kodu ML
już żyje. Połącz go z [ściągawką](/learn/cheatsheet/), gdy zapomnisz
składnia w terminie.

Oznacz zatwierdzenie pasujące do przesłanego pliku OpenReview lub CMT. Będziesz tego chciał
podczas zaprzeczania.

## Obalenie i gotowość do kamery

Okna na obalenie są krótkie. Zachowaj gałąź lub folder na „eksperymenty obalające”
aby nie zanieczyszczać przesłanego źródła PDF. Gotowość do aparatu często pozwala na
dodatkowa strona; używaj go dla przejrzystości, a nie do zrzucania każdego nieudanego uruchomienia.

## Szerszy wpływ i ograniczenia

Nawet jeśli miejsce wymaga krótkiego akapitu dotyczącego wpływu społecznego lub ograniczeń,
napisz to prostym językiem. LaTeX nie zapisze niejasnego akapitu. Umieść negatyw
wyniki, które możesz pochwalić się w załączniku, jeśli limit strony głównej jest napięty,
i powiedz, że zrobiłeś to w tekście głównym, aby recenzenci nie zakładali, że je ukryłeś.

## Przed przesłaniem

Sprawdź, czy arkusz notacji jest spójny we wszystkich sekcjach, główne tabele są takie same
czytelny z nazwanymi i ± zdefiniowanymi metrykami, a także cytowane są algorytmy i liczby
w porządku. Potwierdź, że oficjalna klasa kompiluje się w ramach limitu stron bez czcionki
przestępstw, plik `.bib` jest czysty i zawiera cytowany kod i dane, podobnie jak skrót zatwierdzenia
zapisane dla przesłanego pliku PDF.

Eksperymenty ML są już wystarczająco głośne. Zachowaj ciszę w zapisach i tabelach.