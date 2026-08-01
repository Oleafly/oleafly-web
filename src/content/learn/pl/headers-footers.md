---

title: "Biegające głowy i nogi"
description: "fantazyjne wzory hdr dla tytułu i numeru strony."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Biegające głowy i stopy

Ruchoma głowa to pasek tekstu u góry każdej strony, a biegnąca stopka to jego odpowiednik na dole. W książce lub pracy dyplomowej zwykle zawierają tytuł rozdziału i numer strony. W przesłanym artykule może znajdować się krótka wersja tytułu, autorów lub nic. Wbudowane style strony LaTeX-a („zwykły”, „pusty”, „nagłówki”) obejmują podstawy, ale gdy potrzebujesz konkretnej kombinacji, takiej jak tytuł po lewej stronie i numer strony po prawej, sięgnij po pakiet `fancyhdr`.

## Standardowy przepis

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Każda linia tutaj ma jedno zadanie. `\usepackage{fancyhdr}` ładuje pakiet w preambule. `\pagestyle{fancy}` przełącza cały dokument na konfigurowalny styl FancyHDR. `\fancyhf{}` czyści każde pole nagłówka i stopki, co ma znaczenie, ponieważ Fancyhdr dostarcza wartości domyślne (numer strony i znaczniki sekcji), których prawie nigdy nie należy mieszać z własnymi. Zaczynając od czystej karty, unikniesz niespodzianek.

Kolejne dwie linie ponownie wypełniają pola. `\fancyhead[L]{Short title}` umieszcza tekst dosłowny w lewym miejscu nagłówka, a `\fancyhead[R]{\thepage}` umieszcza numer bieżącej strony w prawym miejscu. `\thepage` to polecenie, które rozwija się do numeru strony, dzięki czemu jest automatycznie aktualizowane na każdej stronie. Jeśli wolisz umieścić rzeczy na dole, istnieje pasujące `\fancyfoot[L/C/R]{...}`.

Na koniec `\headrulewidth` kontroluje cienką poziomą linię pod nagłówkiem. Ustawienie na „0,4pt” rysuje linię włosa; ustaw go na `0pt`, aby całkowicie usunąć regułę. Istnieje również `\footrulewidth`, którego wartość domyślna wynosi zero.

## Dokumenty dwustronne

Jeśli twoja klasa dokumentu używa `twoside` (domyślnie dla `book`), strony są naprzemiennie parzyste i nieparzyste, a nagłówki zwykle odzwierciedlają się nawzajem. Fancyhdr radzi sobie z tym za pomocą selektorów parzystych/nieparzystych: `\fancyhead[LE,RO]{\thepage}` umieszcza numer strony po lewej stronie stron parzystych i po prawej stronie stron nieparzystych, czyli tam, gdzie znajdzie go kciuk czytelnika. Można to połączyć z `\leftmark` i `\rightmark`, które przechowują tytuły bieżących rozdziałów i sekcji, aby odtworzyć klasyczny układ książki.

## Strony rozdziałów i pusty wygląd

Strony otwierające rozdziały ignorują Twój fantazyjny styl, ponieważ `\chapter` wywołuje `\thispagestyle{plain}` za kulisami. Jest to zamierzone i większość projektów to zachowuje. Jeśli chcesz, żeby te strony były puste, dodaj `\fancypagestyle{plain}{\fancyhf{}}`, aby na nowo zdefiniować, co oznacza „zwykły”.

Jedno typowe ostrzeżenie, którego można się spodziewać: Fancyhdr może narzekać, że `\headheight` jest za mały. Poprawka jest dokładnie taka, jak sugeruje komunikat, na przykład `\setlength{\headheight}{14pt}` w preambule lub przekazanie `headheight=14pt` do [pakietu geometrii](/learn/margins-geometry/), jeśli już go używasz. Jest to rezerwacja układu, a nie błąd, ale wyciszenie pozwala zachować czysty dziennik i uczciwą siatkę bazową.