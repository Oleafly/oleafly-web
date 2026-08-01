---

title: "Nieokreślona sekwencja sterująca"
description: "Nieznane nazwy poleceń: literówki, brakujące pakiety, zły silnik."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Niezdefiniowana sekwencja sterująca

## Objaw

Kompilacja kończy się znakiem `! Niezdefiniowana sekwencja kontrolna. Dziennik pokazuje następnie linię, w której to się wydarzyło, podzieloną na dwie części: wszystko, co TeX odczytał, aż do błędnego polecenia, w jednym wierszu, a reszta wiersza źródłowego poniżej. Ostatnim znacznikiem w górnej linii jest polecenie, którego TeX nie rozpoznał, co sprawia, że ​​jest to jeden z łatwiejszych do precyzyjnego zlokalizowania błędów.

## Dlaczego tak się dzieje

Sekwencja sterująca to wszystko, co zaczyna się od ukośnika odwrotnego. TeX nie ma ustalonego słownictwa: polecenia istnieją tylko dlatego, że zdefiniowały je jądro, klasa dokumentu, pakiet lub twoje własne `\nowe polecenie`. Kiedy TeX odczytuje ukośnik odwrotny, po którym następuje nazwa, której nic nie zdefiniowało, nie może odgadnąć, co masz na myśli, i zatrzymuje się. Błąd nigdy nie polega na tym, że polecenie jest ogólnie „złe”. Chodzi o to, że ta nazwa jest nieznana w tym dokumencie, w tym momencie, w tym silniku.

## Napraw to w trzech kontrolach

Najpierw sprawdź pisownię. W większości przypadków `\texbf` zamiast `\textbf`, `\lable` zamiast `\label` lub zbłąkana spacja dzieląca nazwę na dwóch kontach. Numer wiersza dziennika prowadzi bezpośrednio do literówki.

Jeśli pisownia jest prawidłowa, prawdopodobnie brakuje pakietu definiującego. `\includegraphics` nie robi nic bez `\usepackage{graphicx}`, `\toprule` potrzebuje `booktabs`, a `\SI` potrzebuje `siunitx`. Najbardziej boli to, gdy kopiujesz fragment z innego dokumentu lub odpowiedzi modela: pojawił się tekst główny, ale linia preambuły nie. Znajdź, który pakiet definiuje polecenie w [Wyjaśnienie każdego polecenia](/learn/every-command-explained/), dodaj linię `\usepackage` i skompiluj ponownie. Jeśli sam pakiet nie jest zainstalowany, zobacz [Zainstaluj brakujący pakiet](/learn/install-missing-package/).

Jeśli pakiet jest załadowany, a błąd nadal występuje, podejrzewaj silnik. Niektóre polecenia istnieją tylko w określonym silniku: `\fontspec` i jego odpowiedniki wymagają XeLaTeX lub LuaLaTeX i umrą pod pdfLaTeX z dokładnie tym błędem. Szablony, które określają silnik w swojej dokumentacji, zwykle robią to z tego powodu. [Który silnik dla tego projektu](/learn/engines-compared/) wyjaśnia różnice.

## Dwa dziwactwa, które warto poznać

Kolejność ma znaczenie: polecenie użyte przed linią `\usepackage`, która ją definiuje, jest w tym momencie nadal niezdefiniowane, więc ładowanie pakietu należy kontynuować w preambule, powyżej `\begin{document}`. A jeden błąd często ukrywa drugi, ponieważ po odzyskaniu TeX-a może on błędnie odczytać wszystko, co następuje. Napraw pierwszą niezdefiniowaną sekwencję kontrolną w dzienniku, skompiluj ponownie i dopiero wtedy spójrz, co pozostało.