---

title: "Pliki w prawdziwym projekcie"
description: ".tex, .bib, .cls, .sty i wygenerowane śmieci, których nie powinieneś popełniać."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Pliki w prawdziwym projekcie

Otwórz folder dowolnego prawdziwego projektu LaTeX po kompilacji, a znajdziesz znacznie więcej plików, niż napisałeś. Zaskakuje to większość początkujących, a strach przed usunięciem niewłaściwej rzeczy powoduje, że foldery są zaśmiecone na zawsze. Rozróżnienie, które wyjaśnia sprawę: niektóre pliki są źródłami, które edytujesz, niektóre są stylami dostarczanymi przez szablon lub pakiet, a reszta jest generowaną przestrzenią bazową, którą kompilator odtwarza przy każdym uruchomieniu.

## Pliki, które piszesz

Twoje pliki `.tex` zawierają właściwy dokument: tekst, sekcje, rysunki i dane matematyczne. Plik `.bib` to baza danych bibliograficznych, w której znajduje się jeden wpis na artykuł lub książkę, którą możesz cytować; możesz go utrzymywać ręcznie lub eksportować za pomocą menedżera referencji, takiego jak Zotero. Są to pliki, które warto wykonać kopię zapasową i poddać kontroli wersji, ponieważ wszystko inne można z nich odbudować.

## Pliki, które otrzymasz od szablonu

Plik `.cls` definiuje klasę dokumentu, czyli rzecz, którą nadajesz w `\documentclass{...}`. Czasopisma i konferencje wysyłają swoje własne, więc każde zgłoszenie wygląda identycznie i prawie nigdy go nie edytujesz. Plik `.sty` to pakiet: makra i ustawienia wielokrotnego użytku załadowane za pomocą `\usepackage`. Sam napiszesz taki tylko wtedy, gdy będziesz chciał udostępnić niestandardowe polecenia w kilku dokumentach. Plik `.bst` opisuje styl cytowania BibTeX-a i zwykle jest po prostu przesyłany do miejsca wydarzenia.

## Pliki tworzone przez kompilator

Plik `.aux` przechowuje dane odsyłaczy i cytatów pomiędzy przebiegami kompilacji; nigdy go nie edytuj i możesz go usunąć, ponieważ następna kompilacja przepisze go. Plik `.log` rejestruje wszystko, co zrobił kompilator i warto go otwierać tylko wtedy, gdy coś pójdzie nie tak. Plik `.pdf` to plik wyjściowy, który faktycznie chciałeś.

| Rozszerzenie | Rola | Edytować ręcznie? |
| --- | --- | --- |
| `.tex` | Dokumenty źródłowe i rozdziały | Tak |
| `.bib` | Baza bibliograficzna | Tak (lub eksport z Zotero) |
| `.cls` | Klasa dokumentu | Rzadko szablony dostawców |
| `.sty` | Pakiety / pliki stylów | Podczas pisania własnych makr |
| `.bst` | Styl BibTeX-a | Rzadko |
| `.aux` | Dane porównawcze | **Nie:** wygenerowano |
| `.log` | Dziennik kompilatora | Przeczytaj podczas debugowania |
| `.pdf` | Wyjście | Zobacz / prześlij |

## Układ projektu, który się skaluje

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Jeden plik „main.tex” na najwyższym poziomie pełni funkcję punktu wejścia, rozdziały znajdują się w osobnych folderach i są przeciągane za pomocą plików „\input” lub „\include”, obrazy umieszczane są w „figures/”, a bibliografia pozostaje w jednym „refs.bib”. Ten układ można łatwo dostosować, niezależnie od tego, czy projekt jest czterostronicowym artykułem, czy tezą. [Podzielone pliki rozdziałów](/learn/split-chapter-files/) pokazuje, jak poszczególne elementy się łączą.

Jeśli używasz Gita, dodaj `*.aux`, `*.log` i inne wygenerowane pliki do `.gitignore`, aby Twoja historia śledziła tylko prawdziwe źródło. Projekty Oleafly to zwykłe foldery na dysku, więc ta rada ma tam zastosowanie bez zmian. Najczęstszym błędem jest błąd odwrotny: podczas polowania na dziwny błąd kompilacji, usunięcie plików `.aux` jest często rozwiązaniem, ponieważ przestarzały plik z uszkodzonego uruchomienia może zatruć każdą następną kompilację.