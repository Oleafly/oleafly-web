---

title: "Jaki silnik do tego projektu"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, czcionki, dopasowanie dziennika."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Który silnik dla tego projektu

Silnik to program, który faktycznie przekształca źródło `.tex` w plik PDF. Sam LaTeX jest warstwą makr, która działa na jednej, a jest ich kilka do wyboru. Akceptują prawie te same dokumenty, ale różnią się sposobem obsługi tekstu i czcionek Unicode, a szablon napisany dla jednego silnika może całkowicie zawieść w innym. Wybierz jeden raz na projekt i trzymaj się go.

| Silnik | Unikod | Czcionki systemowe | Notatki |
| --- | --- | --- | --- |
| pdfLaTeX | Częściowe | Nie | Maksymalna kompatybilność dziennika |
| XeLaTeX | Tak | Tak (`fontspec`) | Świetne dla dokumentów poliglotycznych |
| LuaLaTeX | Tak | Tak | Nowoczesne, skryptowe |
| Tektonika | Podobny do Xe | Tak | Automatyczne pobieranie pakietów; Oleafly domyślne |

## Do czego służy każdy silnik

pdfLaTeX jest bezpośrednim następcą oryginalnego TeX-a i pozostaje domyślnym założeniem większości czasopism, konferencji i systemów przesyłania. Jest starszy od Unicode, więc akcentowane dane wejściowe wymagają konwencji „inputenc”, a czcionki są ograniczone do specjalnie spakowanych czcionek TeX. W zamian jest szybki i powszechnie obsługiwany, a dziesięciolecia szablonów są dla niego ukierunkowane.

XeLaTeX natywnie czyta UTF-8 i poprzez pakiet `fontspec` używa dowolnej czcionki zainstalowanej w systemie według nazwy, takiej jak `\setmainfont{Georgia}`. To sprawia, że ​​jest to praktyczny wybór w przypadku dokumentów zawierających różne skrypty, w przypadku języków innych niż zachodnioeuropejskie i dla każdego, kto ma określone wymagania dotyczące czcionek. [Kiedy używać XeLaTeX](/learn/when-use-xelatex/) idzie głębiej.

LuaLaTeX oferuje tę samą obsługę Unicode i czcionek oraz osadza język skryptowy Lua, dzięki czemu pakiety mogą obliczać w czasie kompilacji rzeczy, które wcześniej były niemożliwe. Jest to długoterminowy następca tradycyjnych silników, kosztem nieco wolniejszych kompilacji.

Tectonic to nowoczesna, samodzielna wersja silnika XeTeX. Jego cechą wyróżniającą jest automatyczna obsługa zależności: gdy dokument potrzebuje pakietu, którego nie masz, Tectonic pobiera go na żądanie, zamiast kończyć się niepowodzeniem. Właśnie z tego powodu Oleafly dołącza Tectonic jako swój domyślny silnik, więc nowa instalacja kompiluje dokumenty ze świata rzeczywistego bez żadnej administracji TeX-owej.

## Jak podjąć decyzję

Postępuj zgodnie z szablonem. Jeśli zajęcia w czasopiśmie lub szablon pracy dyplomowej dokumentują silnik, użyj go. Szablony kodują założenia silnika w sposób, który w innym miejscu może ujawnić mylące błędy, jak opisano w [Pliki klas uniwersyteckich, które nie zostaną skompilowane](/learn/fix-broken-template/). Jeśli dokument jest Twój od zera, ogólna zasada jest prosta: pdfLaTeX, gdy źródła skompiluje konserwatywne miejsce, oraz XeLaTeX, LuaLaTeX lub Tectonic, gdy potrzebujesz prawdziwego Unicode lub prawdziwych czcionek. Cokolwiek wybierzesz, pozostań przy tym przez cały okres ważności dokumentu. Subtelne odstępy i różnice w czcionkach sprawiają, że przełączanie w połowie projektu jest marnym wykorzystaniem czasu.