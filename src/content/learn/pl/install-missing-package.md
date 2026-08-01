---

title: "Ten pakiet nie jest zainstalowany"
description: "tlmgr, MiKTeX i pobieranie na żądanie za pomocą Tectonic lub Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Ten pakiet nie jest zainstalowany

Wcześniej czy później kompilacja kończy się linią typu `! Błąd LaTeX: Nie znaleziono pliku siunitx.sty. Komunikat oznacza dokładnie to, co mówi: Twój dokument prosił o pakiet poprzez `\usepackage{siunitx}`, a kompilator nie mógł znaleźć pliku `.sty` pakietu na Twoim komputerze. Z Twoim dokumentem nic się nie dzieje. Dystrybucje LaTeX-a nie dostarczają domyślnie wszystkich pakietów, a poprawka zależy od uruchomionej dystrybucji.

## TeX na żywo

TeX Live, standardowa dystrybucja dla systemu Linux i macOS (jako MacTeX), zawiera menedżera pakietów o nazwie `tlmgr`. Zainstaluj brakujący pakiet z terminala:

```
tlmgr install siunitx
```

Jeśli zainstalowano pełny TeX Live, czyli wiele gigabajtów, wszystko już jest i ten błąd nie powinien się pojawić. Zwykle pojawia się z mniejszymi, „podstawowymi” lub „małymi” schematami instalacji. Zauważ, że argumentem `tlmgr` jest nazwa pakietu, a nie nazwa pliku, zatem nie ma rozszerzenia `.sty`.

## MiKTeX-a

MiKTeX, powszechny w systemie Windows, ma dwa mechanizmy. Funkcja instalacji „w locie” wykrywa brakujący plik podczas kompilacji i oferuje jego pobranie, wyświetlając monit lub kontynuując automatycznie, w zależności od ustawień. Alternatywnie otwórz konsolę MiKTeX, przejdź do zakładki Pakiety, wyszukaj pakiet i tam go zainstaluj. Jeśli wydaje się, że instalacja w locie zawiesza kompilację, zwykle czeka na okno dialogowe potwierdzenia ukryte za innym oknem.

## Tektonika

Silnik Tectonic, który Oleafly łączy w pakiety, pomija krok ręczny: pakiety są pobierane na żądanie podczas kompilacji i lądują w lokalnej pamięci podręcznej silnika. Pierwsza kompilacja używająca `siunitx` pobiera go; później kompiluje ponownie wykorzystuje pamięć podręczną. To pierwsze uruchomienie może potrwać dłużej podczas pobierania zależności i wymaga połączenia sieciowego.

## Instalacja tego nie naprawia

Jeśli menedżer pakietów zgłosi, że taki pakiet nie istnieje, sprawdź pisownię na stronie pakietu w CTAN, centralnym archiwum pakietów LaTeX na ctan.org. Większość uporczywych przypadków stanowią dwie niedopasowania. Po pierwsze, plik i pakiet mogą mieć różne nazwy, ponieważ pakiet dystrybucyjny może zawierać kilka plików `.sty`. Rozwiązuje ten problem przeszukanie CTAN pod kątem dokładnej nazwy pliku `.sty` z komunikatu o błędzie. Po drugie, błąd czasami powoduje nazwę pliku z twojego własnego projektu, na przykład pliku klasy, o którym zapomniałeś dołączyć w szablonie, a żaden menedżer pakietów nie może go dostarczyć. Plik musi pochodzić skądkolwiek szablon.

Ostatnia uwaga do starej rady: pobranie pojedynczego pliku .sty z Internetu do folderu projektu działa, ponieważ LaTeX przeszukuje najpierw bieżący katalog, ale blokuje ten pakiet w losowej wersji i ukrywa go przed aktualizacjami. Preferuj menedżera pakietów i stosuj sztuczkę ręcznego kopiowania w sytuacjach awaryjnych, gdy zbliżają się terminy.