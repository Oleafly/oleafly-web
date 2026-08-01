---

title: "Strony rzymskie, potem arabskie"
description: "Numeracja spraw głównych, której komisje wciąż oczekują."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Strony rzymskie, a potem arabskie

Otwórz prawie dowolną pracę dyplomową lub podręcznik, a zobaczysz tę samą konwencję: strona tytułowa, streszczenie, spis treści i podziękowania są ponumerowane i, ii, iii małymi cyframi rzymskimi, a następnie pierwszy prawdziwy rozdział zaczyna się od strony 1 zwykłymi cyframi arabskimi. Sprawę frontową traktuje się jako odrębną, wstępną sekwencję, a szkoły wyższe wyraźnie sprawdzają tę konwencję. W LaTeX-ie potrzebne są dokładnie dwa polecenia.

## Wzór

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` robi dwie rzeczy na raz: przełącza styl cyfr na małe litery rzymskie i resetuje licznik stron do 1, więc strona tytułowa staje się stroną i. Wszystko, co umieścisz po nim, zazwyczaj `\maketitle`, streszczenie, [spis treści](/learn/table-of-contents/) i wszelkie listy rysunków lub tabel, otrzymają numery ii, iii, iv i tak dalej.

Następnie, bezpośrednio przed pierwszym rozdziałem, `\pagenumbering{arabic}` przełącza styl z powrotem i ponownie resetuje licznik, tak więc `\chapter{Wprowadzenie}` otwiera się na nowej stronie 1. Resetowanie o to właśnie chodzi: bez tego wprowadzenie zaczynałoby się mniej więcej od strony 7, czego nie oczekują komisje ani konwencje cytowań.

Ponieważ `\chapter` w klasach `book` i `report` zawsze rozpoczyna nową stronę, nie potrzebujesz jawnego `\newpage` przed przełącznikiem. W klasie bez rozdziałów najpierw dodałbyś `\clearpage`, aby zmiana numeracji nie znalazła się w połowie strony.

## Zajęcia, które zrobią to za Ciebie

Niektóre zajęcia dyplomowe udostępniają `\frontmatter` / `\mainmatter` / `\backmatter`. Pochodzą one z klasy „książka” i stanowią wyższy poziom wyrażenia tego samego. `\frontmatter` przełącza na numerację rzymską i sprawia, że ​​rozdziały stają się nienumerowane (więc przedmowa nie otrzymuje etykiety „Rozdział 1”). `\mainmatter` przełącza na język arabski i przywraca ponumerowane rozdziały. `\backmatter` ponownie wyłącza numerację rozdziałów dla materiału przypominającego dodatek na końcu. Jeśli szablon twojej uczelni jest zbudowany na `booku` lub `pamiętniku`, preferuj te polecenia zamiast surowego `\numerowania stron`, ponieważ szablon może przyczepić do nich dodatkowe zachowanie, takie jak różne nagłówki na pierwszej stronie. Te dwa podejścia nie są ze sobą sprzeczne, ale nie ma powodu, aby stosować oba.

## Jedna rzecz do sprawdzenia

Strony ponumerowane rzymsko powinny zgadzać się ze spisem treści. Jeśli streszczenie wyświetla się jako strona „iv” w ToC, ale jest drukowane jako „2”, typową przyczyną jest wywołanie `\pagenumbering` umieszczone po treści, którą miało obejmować, lub brakująca druga kompilacja: numery stron w ToC pochodzą z pliku `.aux`, więc przed oceną, czy numeracja jest prawidłowa, musisz [skompilować dwukrotnie](/learn/compile-to-pdf/). Skompiluj, skompiluj ponownie, a następnie porównaj ToC z rzeczywistymi stronami.