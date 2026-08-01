---

title: "Podkreślenie bez walki z czcionką"
description: "textbf, textit, emph, mono i dlaczego emph zagnieżdża się lepiej niż zakodowana na stałe kursywa."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Podkreślenie bez walki z czcionką

Nacisk w LaTeX-ie pochodzi z małego zestawu poleceń, z których każde przyjmuje tekst, którego dotyczy problem, jako argument w nawiasach klamrowych. LaTeX oddziela dwa pomysły, które łączy większość edytorów tekstu: zastosowanie określonego kroju pisma i zaznaczenie zakresu zgodnie z podkreśleniem. Wiedza o tym, które polecenie wykonuje, zapewnia spójność dokumentów w przypadku zmiany stylów.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Polecenia

`\textbf` ustawia pogrubienie, standardowe traktowanie silnego podkreślenia i słów kluczowych w definicjach. `\textit` bezpośrednio ustawia kursywę. `\texttt` przełącza na czcionkę maszynową o stałej szerokości, konwencję nazw plików, poleceń i identyfikatorów kodu w bieżącym tekście. `\textsc` ustawia kapitaliki, typowe dla nazwisk autorów w bibliografiach i dla akronimów, które w innym przypadku dominowałyby w wierszu tekstu.

`\podkreślenie` istnieje, ale zasługuje na komentarz w przykładzie. Podkreślenie zastępuje kursywę w epoce maszyn do pisania, a w LaTeX-ie ma również problem mechaniczny: podkreślony tekst jest umieszczany w ramce, więc nie może przerywać linii, a długo podkreślona fraza przekracza margines. W typografii drukowanej kursywa pełni funkcję podkreślania.

Polecenia zagnieżdżają się, więc `\textbf{\textit{bold italic}}` łączy oba, gdy czcionka udostępnia twarz.

## Dlaczego \emf

`\emph` oznacza znaczenie, a nie wygląd: mówi „podkreśl to” i pozwala kontekstowi zdecydować, jak to zrobić. W tekście pionowym drukuje kursywę. Wewnątrz tekstu, który jest już zapisany kursywą, zostaje on ponownie ustawiony pionowo, dzięki czemu podkreślenie w obrębie podkreślenia pozostaje widoczne. Zakodowane na stałe „\textit” w tekście kursywą po prostu pozostaje kursywą, a wewnętrzne podkreślenie znika. Zaznaczanie zamiaru procentuje również później. Klasa lub pakiet może na nowo zdefiniować wygląd wyróżnienia w jednym miejscu, bez konieczności wprowadzania zmian w całym dokumencie.

Praktyczna zasada: używaj `\emph` dla podkreślenia nacisku w prozie, a `\textit` rezerwuj dla rzeczy, które tradycyjnie pisane są kursywą niezależnie od kontekstu, takich jak tytuły książek, zwroty obce i nazwy gatunków.

## Granice i nawyki

Wszystkie te polecenia działają w trybie tekstowym i niewłaściwie zachowują się w formułach. Pogrubione symbole matematyczne wymagają `\mathbf` lub `\boldsymbol`, ujętych w [bold math](/learn/bold-math/). Powstrzymaj się od nakładania nacisków, bo gdy wszystko jest odważne, nic się nie wyróżnia. Twórz nagłówki za pomocą poleceń strukturalnych, takich jak `\sekcja`, a nie ręcznego pogrubienia, ponieważ struktura zasila również spis treści i zakładki PDF. [Większy i mniejszy typ](/learn/font-size/) podaje ten sam argument w przypadku rozmiarów czcionek.