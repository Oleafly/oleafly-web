---

title: "Zatrzymanie awaryjne i kłótnia o ucieczkę"
description: "Fatalne przerwanie z powodu brakujących końcówek, nawiasów klamrowych lub złych dołączeń."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Argument zatrzymania awaryjnego i ucieczki

## Objaw

Kompilacja umiera od razu. Dziennik kończy się znakiem `! Zatrzymanie awaryjne.” lub wyświetla „Uciekający argument?”, po którym następuje długi odcinek własnego tekstu, często z towarzyszącą linią, taką jak „Plik zakończył się podczas skanowania przy użyciu \textbf” lub „Akapit zakończył się przed ukończeniem \foo”. W przeciwieństwie do większości błędów LaTeX-a, w ogóle nie ma pliku PDF, a zgłaszany numer wiersza często wskazuje na koniec pliku, a nie na prawdziwy błąd.

## Dlaczego tak się dzieje

Obydwa komunikaty wynikają z tego samego problemu: TeX zaczął czytać coś, co musi zostać zamknięte, i osiągnął koniec wejścia, zanim przybył token zamykający. Kiedy napiszesz `\textbf{`, TeX zbierze wszystko aż do pasującego `}` jako argumentu. Jeśli ten nawias nigdy nie nadejdzie, TeX będzie połykał tekst przez akapity i sekcje, aż do wyczerpania pliku. „Uciekający argument” to TeX pokazujący, co przełknął. „Zatrzymanie awaryjne” oznacza poddanie się TeX-a, ponieważ nie może on kontynuować pracy bez brakującego elementu. Brakujący `\end{document}`, niezamknięte środowisko lub `\input' pliku, który nie istnieje, powoduje ten sam stan terminala.

## Jak znaleźć prawdziwą lokalizację

Nie ufaj numerowi linii; wskazuje, gdzie TeX-owi zabrakło danych wejściowych, a nie gdzie zaczęła się nierównowaga. Zamiast tego przeczytaj blok „Uciekający argument?” w dzienniku. Pierwsze kilka słów połkniętego tekstu informuje, gdzie w dokumencie rozpoczął się błąd, a wiersz „Plik zakończył się podczas skanowania, użycie ...” określa polecenie, którego argument nigdy nie został zamknięty. Wyszukaj to polecenie w pobliżu cytowanego tekstu i policz jego nawiasy klamrowe.

Jeśli dziennik nie jest pomocny, przeszukaj dokument binarnie. Skomentuj drugą połowę treści (lub zawiń ją w `\iffalse ... \fi`) i skompiluj ponownie. Jeśli błąd zniknie, problem leży w usuniętej połowie; zmniejszaj o połowę, aż do wyodrębnienia błędnego akapitu. Brzmi to prymitywnie, ale w przypadku dużego dokumentu w kilku kompilacjach znajduje się samotny brakujący nawias klamrowy.

## Zwykli podejrzani

Sprawdź, czy w pobliżu pogrubienia, kursywy, przypisów i podpisów znajduje się `{` bez `}`, ponieważ te polecenia przyjmują ręcznie wpisywane nawiasy klamrowe. Sprawdź, czy każdemu `\begin{...}` odpowiada `\end{...}` o tej samej nazwie środowiska. Upewnij się, że plik kończy się na `\end{document}` i że każde `\input` i `\include` nazywają plik istniejący w tej ścieżce. Redaktorzy pomagają tutaj: Oleafly podświetla pasujące nawiasy klamrowe i pary środowisk podczas pisania, co wychwytuje większość z nich, zanim kompilator je zobaczy.