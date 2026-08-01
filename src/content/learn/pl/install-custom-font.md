---

title: "Plik czcionki obok projektu"
description: "Fontspec Ścieżka dla lokalnych rodzin otf lub ttf."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Plik czcionki obok projektu

Załóżmy, że Twoja praca wykorzystuje czcionkę, która nie jest zainstalowana na każdym komputerze, na którym kiedykolwiek ją skompilujesz: laptopie współautora, uniwersyteckim serwerze kompilacji lub Twoim własnym komputerze po ponownej instalacji. Instalowanie czcionek w całym systemie na każdym z nich jest delikatne i czasami niedozwolone. Umieść pliki czcionek w folderze projektu i zamiast tego wskaż je `fontspec`, aby dokument miał własną typografię. Wymaga to XeLaTeX lub LuaLaTeX, ponieważ „fontspec” nie działa w pdfLaTeX. Powody opisano w artykule [dlaczego ludzie przechodzą na XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Co robi każdy klawisz

`\setmainfont{MyFont}` deklaruje główną rodzinę tekstów i nadaje jej nazwę bazową używaną do tworzenia nazw plików. `Path = ./fonts/` mówi `fontspec`, aby szukał plików w folderze `fonts` wewnątrz projektu, względem głównego pliku `.tex`, zamiast pytać system operacyjny. `Extension = .otf` określa typ pliku raz, więc nie trzeba go powtarzać dla każdego pliku. Użyj `.ttf`, jeśli to jest to, co masz.

Pozostałe klawisze odwzorowują kształty czcionek na pliki. W każdym przypadku `*` rozwija się do nazwy podstawowej, więc `UprightFont = *-Regular` jest przekształcane na `MyFont-Regular.otf`, podobnie jak `MyFont-Bold.otf` i `MyFont-Italic.otf`. Nazwy te muszą dokładnie odpowiadać rzeczywistym nazwom plików, łącznie z wielkością liter, ponieważ na serwerach Linux wielkość liter ma znaczenie, nawet jeśli system lokalny to wybacza. Jeśli rodzina ma pogrubioną kursywę, dodaj `BoldItalicFont = *-BoldItalic`. Kształt, którego nie mapujesz, jest kształtem, którego dokument nie może użyć: bez linii `BoldFont`, `\textbf` nie ma na co się przełączyć, a kompilator ostrzega, że ​​pogrubiony kształt jest niezdefiniowany.

Ta sama składnia działa w przypadku innych rodzin, więc `\setsansfont` i `\setmonofont` akceptują identyczne bloki opcji dla lokalnej czcionki bezszeryfowej lub czcionki kodowej.

## Licencjonowanie i przenośność

Wysyłaj pliki czcionek z projektem tylko wtedy, gdy licencja umożliwia redystrybucję. Zezwalają na to licencje otwarte, takie jak licencja SIL Open Font License, a czcionki z czcionek Google zazwyczaj się do tego kwalifikują, ale czcionki komercyjne zwykle zabraniają przekazywania kopii współpracownikom. W takim przypadku każda maszyna potrzebuje własnej licencjonowanej kopii i należy udokumentować to wymaganie w pliku Readme projektu.

Częstym błędem jest cicha niezgodność pomiędzy zadeklarowanymi nazwami a plikami, często po zmianie nazwy folderu lub pobraniu wagi o innej nazwie. Kompilacja kończy się komunikatem „Nie można znaleźć czcionki„ MyFont-Regular ”. Kiedy tak się stanie, porównaj oczekiwaną nazwę pliku błędu znak po znaku z zawartością folderu i potwierdź, że ścieżka „Ścieżka” nadal wskazuje miejsce, w którym znajdują się pliki. Ponieważ dołączony silnik Tectonic firmy Oleafly jest oparty na XeTeX, ten lokalny wzorzec projektu działa tam bez instalacji czcionek systemowych.