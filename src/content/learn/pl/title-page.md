---

title: "Bloki tytułowe i strony tytułowe"
description: "maketitle dla artykułów, strona tytułowa dla prac dyplomowych i raportów."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Bloki tytułowe i strony tytułowe

Artykuł otwiera się z tabelką tytułową: tytuł, autorzy, data, umieszczoną u góry pierwszej strony. Pracę rozpoczyna się pełną stroną tytułową, ułożoną zgodnie ze specyfikacją uniwersytetu. LaTeX traktuje je jako dwa różne problemy. Pierwsze jest zautomatyzowane przez `\maketitle`, a drugie to puste płótno zwane środowiskiem `titlepage`.

## Blok tytułowy

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Pierwsze trzy polecenia przechowują tylko metadane. Po uruchomieniu nic nie pojawia się w pliku PDF, dlatego mogą znajdować się w preambule. `\maketitle`, umieszczony po `\begin{document}`, oznacza moment złożenia przechowywanego bloku. Wewnątrz `\author` znak `\\` przerywa linię (zwykły sposób umieszczania afiliacji pod nazwiskiem), a `\and` oddziela wielu autorów, tak aby byli oni umieszczeni obok siebie. `\date{\today}` wypisuje datę dowolnego dnia, który skompilujesz. Wpisz `\data{}` z pustymi nawiasami, aby całkowicie pominąć linię daty. Całkowite pominięcie `\data` nadal powoduje wyświetlenie dzisiejszej daty.

W klasie „artykuł” blok znajduje się na górze pierwszej strony, a tekst znajduje się poniżej. W „raporcie” i „książce” ma własną stronę. Zajęcia w czasopismach i konferencjach zastępują tę maszynę własnymi poleceniami dotyczącymi powiązań, e-maili i identyfikatorów ORCID, dlatego w szablonie miejsca należy postępować zgodnie z jego przykładowym plikiem, a nie standardowymi poleceniami.

## Ręcznie zbudowana strona tytułowa

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

Środowisko „strona tytułowa” zapewnia jedną nienumerowaną stronę i pełną ręczną kontrolę, czego zwykle wymagają przepisy dotyczące pracy dyplomowej. Każdy element przykładu zasługuje na swoje miejsce. „\centrowanie” skupia wszystko, co następuje w środowisku. `\vspace*{2cm}` przesuwa tytuł w dół od górnej krawędzi. Forma oznaczona gwiazdką ma znaczenie, ponieważ nieoznaczona gwiazdką „\vspace” u góry strony jest odrzucana. Nawiasy klamrowe wokół `{\Large ...}` zmieniają rozmiar czcionki tak, aby kończyła się tam, gdzie kończy się grupa, a `\\[1em]` przerywa linię, dodając pod nią dodatkową spację. `\vfill` wstawia rozciągliwą przestrzeń, która pochłania pozostałą wysokość, więc informacja o stopniu i data lądują na dole strony, niezależnie od długości tytułu.

Użyj jednego lub drugiego mechanizmu. Połączenie `\maketitle` ze środowiskiem `titlepage` daje dwie strony tytułowe, a klasyczny błąd dla początkujących jest tą cichą: definiuje `\title` i `\author`, ale zapomina o `\maketitle`, więc dokument kompiluje się czysto, bez żadnego tytułu. [Lekcja dotycząca szkieletu dokumentu](/learn/document-skeleton/) pokazuje, gdzie blok mieści się w pliku jako całości.