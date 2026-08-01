---

title: "Wrzuć figurę"
description: "Graphicx, szerokość, ścieżki, PDF vs PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Wrzuć figurę

LaTeX nie ma wbudowanej obsługi obrazów. Całość pochodzi z pakietu `graphicx`, który udostępnia polecenie `\includegraphics` i zgodnie z konwencją obraz jest opakowany w środowisko `figure`, dzięki czemu może zawierać podpis i liczbę. Oto wzór, którego będziesz używać setki razy:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Co robi każda linia

Linia `\usepackage{graphicx}` znajduje się w preambule, przed `\begin{document}` i musi pojawić się tylko raz, niezależnie od liczby uwzględnionych obrazów.

Środowisko `figure` sprawia, że ​​obraz unosi się w powietrzu, co oznacza, że ​​LaTeX wybiera miejsce, w którym wyląduje, zamiast przybijać go dokładnie do tego miejsca w tekście. Litery `[htbp]` oznaczają Twoje preferencje dotyczące rozmieszczenia: `h` oznacza miejsce, w którym pojawia się kod, `t` oznacza górę strony, `b` oznacza dół strony, a `p` oznacza oddzielną stronę zmiennoprzecinkową. LaTeX wypróbowuje je w tej kolejności i wybiera pierwszą, która tworzy przyzwoitą stronę. Jeśli Twoja figurka dryfuje w zaskakujące miejsce, jest to normalne zachowanie pływaka i [gdzie faktycznie lądują pływaki](/learn/position-figures/) wyjaśnia, jak z nią negocjować.

`\centring` centruje obraz poziomo w bloku tekstowym. `width=0,8\textwidth` skaluje obraz do 80 procent szerokości tekstu, zachowując jego proporcje, co prawie zawsze jest lepsze niż określenie bezwzględnego rozmiaru w centymetrach, ponieważ dostosowuje się, jeśli zmieniają się marginesy dokumentu. Ścieżka pliku jest względna w stosunku do katalogu głównego projektu, więc `figures/pipeline.pdf` oznacza folder `figures` obok głównego pliku `.tex'. Na koniec `\caption` drukuje numerowany podpis, a `\label` zapisuje numer, aby `\ref{fig:pipeline}` mógł zacytować go z tekstu. Etykieta musi znajdować się po podpisie z powodów opisanych w [podpisach i etykietach](/learn/captions-labels/).

## Jakiego formatu pliku użyć

Preferuj format PDF w przypadku wszelkich materiałów wektorowych, czyli wykresów, diagramów i schematów blokowych, ponieważ grafika wektorowa pozostaje ostra przy każdym powiększeniu i dowolnym rozmiarze wydruku. W przypadku zrzutów ekranu i innych obrazów opartych na pikselach używaj formatu PNG. JPG jest akceptowalny w przypadku zdjęć, w których artefakty kompresji są niewidoczne. Unikaj w ogóle umieszczania treści zawierających dużo tekstu w postaci zrzutów ekranu, ponieważ rozmazują się one w druku i nie można ich przeszukiwać.

Zmień także rozmiar dużych zdjęć przed ich dołączeniem. 12-megapikselowe zdjęcie wyświetlane przy szerokości 8 centymetrów powoduje rozdęcie pliku PDF i spowalnia każdą kompilację, podczas gdy wersja zmniejszona do około 300 dpi w wydrukowanym rozmiarze wygląda identycznie.

## Błąd, którego należy unikać

Nie walcz z pływakiem już pierwszego dnia, żądając samego „[h]”. LaTeX często odmawia, po czym przenosi figurę i wszystko, co się za nią kryje, do końca rozdziału. Napisz `[htbp]`, umieść kod graficzny w pobliżu akapitu, który jako pierwszy się do niego odnosi, i pozwól, aby liczby i odniesienia wykonały śledzenie za Ciebie.