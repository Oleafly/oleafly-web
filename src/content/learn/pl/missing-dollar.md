---

title: "Wstawiono brakujący dolar"
description: "Indeks dolny i polecenia matematyczne, które wyciekły do ​​trybu tekstowego."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Wprowadzono brakujący dolar

„Wstawiony brakujący $” to najczęstszy błąd LaTeX-a, a jego nazwa wprowadza w błąd: LaTeX nie prosi cię o wydanie pieniędzy, ale informuje, że w trybie tekstowym pojawiła się wyłącznie składnia matematyczna. Wstawia sam `$`, aby go odzyskać, kontynuuje kompilację i często pozostawia dziwne kursywy w dalszej części tekstu, więc wiadomość zasługuje na prawdziwą naprawę, a nie na wzruszenie ramionami.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Co to powoduje

Dwa znaki i klasa poleceń należą wyłącznie do trybu matematycznego. Podkreślenie `_` i daszka `^` tworzą indeksy dolne i górne, a polecenia takie jak `\alpha`, `\frac` i `\leq` tworzą symbole matematyczne. Każdy z nich w postaci zwykłego tekstu powoduje błąd. Klasycznym przypadkiem jest identyfikator zawierający podkreślenie, taki jak nazwa pliku lub nazwa genu: `DNA_seq` w zdaniu przechodzi na `_`.

Rozwiązanie zależy od tego, co miałeś na myśli. Jeśli znak podkreślenia jest znakiem dosłownym, należy go zmienić: `DNA\_seq` drukuje nazwę z prawdziwym podkreśleniem. Jeśli miałeś na myśli indeks dolny, to miałeś na myśli matematykę, więc zawiń wyrażenie: `$x_i$` ustawia x z indeksem dolnym i, kursywą matematyczną z odpowiednimi odstępami. Pełna lista znaków wymagających zmiany znaczenia w tekście ma [osobną lekcję](/learn/special-characters/), a same ograniczniki matematyczne opisano w [podstawach trybu matematycznego](/learn/math-mode/).

## Gdy dziennik wskazuje dziwne miejsce

Zgłoszony numer linii oznacza miejsce, w którym LaTeX zauważył problem, niekoniecznie miejsce, w którym został on spowodowany. Typowym winowajcą jest wcześniej niezamknięte `$`: otworzyłeś tryb matematyczny i nigdy go nie zamknąłeś, więc LaTeX działał w trybie matematycznym, dopóki coś nie wymusiło problemu, często na końcu akapitu. Pusta linia wewnątrz wyświetlacza matematycznego powoduje ten sam błąd, ponieważ podziały akapitów są niedozwolone w trybie matematycznym. Jeśli więc oflagowana linia wygląda niewinnie, przeszukaj w górę w poszukiwaniu nieparzystej liczby znaków dolara i sprawdź, czy każdemu `\[` odpowiada pasujący `\]`.

Wyróżnianie składni to szybki sposób na wykrycie niekontrolowanej sytuacji: dowolny edytor LaTeX-a koloruje obszary matematyczne w różny sposób, więc akapit, który nagle wyświetla się w kolorze matematycznym, już na pierwszy rzut oka wskazuje niezamkniętego dolara.

Ostatnia uwaga: ponieważ LaTeX odtwarza się poprzez wstawienie brakującego `$`, plik PDF często nadal się tworzy. Nie traktuj pliku PDF jako dowodu, że błąd był nieszkodliwy. Odzyskane dane wyjściowe zwykle zawierają zabłąkaną kursywę lub zniekształcone odstępy w miejscu, w którym powinien znajdować się tekst, więc napraw źródło, dopóki dziennik nie będzie czysty.