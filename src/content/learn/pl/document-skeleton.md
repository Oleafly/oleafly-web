---

title: "Szkielet, który możesz wykorzystać ponownie"
description: "Klasa, preambuła, tytuł, sekcje, bibliografia: kształt niemal każdej pracy."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Szkielet, którego możesz użyć ponownie

Po usunięciu zawartości prawie każdy dokument LaTeX-owy ma ten sam szkielet: deklarację klasy, wstęp do konfiguracji i treść pomiędzy `\begin{document}` i `\end{document}`. Kiedy już poznasz ten kształt, rozpocznij nowy projekt, wklejając szkielet, zmieniając tytuł i pisząc.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Czytanie od góry do dołu: `\documentclass[11pt]{article}` wybiera typ dokumentu i ustawia jako opcję podstawowy rozmiar czcionki. Wszystko inne w projekcie wypływa z tego wyboru. Region pomiędzy linią klasy a `\begin{document}` to [preambuła](/learn/preamble-explained/), gdzie ładowane są pakiety i przechowywane metadane, takie jak `\title' i `\author`. `\begin{document}` oznacza początek widocznej treści, `\maketitle` ustawia przechowywaną tabelkę tytułową, a treść stanowi sekcje, rysunki i ewentualnie bibliografię. `\end{document}` zamyka dokument. Wszystko po nim jest dyskretnie ignorowane, co czasami powoduje ukrycie fragmentu tekstu, który ktoś wkleił w niewłaściwym miejscu.

## Wybór klas

| Klasa | Użyj |
| --- | --- |
| `artykuł` | Prace, prace domowe, notatki |
| `raport` | Dłuższe raporty z rozdziałami |
| `książka` | Książki i wiele prac |
| „rzutnik” | Slajdy |

Zajęcia nie są kosmetyczne; zmienia istniejące polecenia. `artykuł` nie ma `\rozdziału', więc wklejenie do niego rozdziałów pracy dyplomowej natychmiast kończy się niepowodzeniem. „raport” dodaje rozdziały i nadaje tytułowi własną stronę. „książka” zakłada druk dwustronny i otwiera rozdziały na stronach prawych. `beamer` restrukturyzuje wszystko wokół ramek slajdów. Czasopisma i konferencje oferują własne zajęcia, a kiedy piszesz dla miejsca, jego zajęcia całkowicie zastępują tę decyzję.

Za większość złamanych szkieletów odpowiadają dwa błędy. Tekst umieszczony przed `\begin{document}` powoduje wyświetlenie błędu „Brak \begin{document}”, ponieważ preambuła może jedynie konfigurować, a nigdy nie być drukowana. A brakujący `\end{document}` powoduje, że kompilator czeka na końcu pliku z nieprzydatnym komunikatem o końcu wprowadzania. Jeśli którykolwiek z nich się pojawi, sprawdź ramkę dokumentu, zanim zaczniesz podejrzewać zawartość.

Łuski szkieletu. Czterostronicowa notatka utrzymuje treść w linii; praca dyplomowa przenosi każdy rozdział do własnego pliku i pobiera go z katalogu głównego, jak pokazano w [podzielonych plikach rozdziałów](/learn/split-chapter-files/). Ramka wokół nich nie zmienia się.