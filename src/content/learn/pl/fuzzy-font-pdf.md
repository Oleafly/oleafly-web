---

title: "Rozmazany tekst w przeglądarce plików PDF"
description: "Wpisz 3 mapy bitowe, czcionki konturowe, figury wektorowe."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Rozmazany tekst w przeglądarce plików PDF

Twój plik PDF kompiluje się czysto, ale tekst na ekranie wygląda na miękki lub postrzępiony, a powiększanie pogarsza zamiast poprawiać. Twojemu widzowi nic się nie stało. Dokument zawiera czcionki bitmapowe. Zamiast przechowywać kształty liter jako skalowalne kontury, przechowuje je jako siatki pikseli renderowane w jednej stałej rozdzielczości. W terminologii PDF są to czcionki Type 3. Drukują się akceptowalnie na papierze w rozdzielczości, dla której zostały wygenerowane, dlatego problem przetrwał dziesięciolecia, ale na ekranach rozmazują się przy każdym poziomie powiększenia innym niż natywny. Nowoczesne formaty konturów (Type 1, TrueType, OpenType) skalują się płynnie, ponieważ kształty są krzywymi matematycznymi.

## Potwierdzenie diagnozy

Powiększanie to szybki test: czcionki konturowe pozostają ostre jak brzytwa przy 800 procentach, a bitmapy rozpuszczają się w widocznych pikselach. Dla pewności otwórz właściwości dokumentu w przeglądarce plików PDF i spójrz na panel czcionek. W programie Adobe Reader jest to opcja Plik, następnie Właściwości, Czcionki, a każda czcionka wymieniona jako „Typ 3” jest mapą bitową. Ta kontrola ma znaczenie nie tylko ze względów estetycznych, ponieważ arXiv i wielu wydawców odrzucają zgłoszenia zawierające czcionki Type 3.

## Skąd pochodzą bitmapy i jakie są poprawki

Typowym źródłem jest stara konfiguracja czcionki. Bardzo stare instalacje TeX-owe renderowały Computer Modern poprzez METAFONT na bitmapy, a niektóre starsze pakiety i starożytne stosy z ery `\usepackage{times}` nadal pobierają warianty bitmap. Napraw to, zastępując starsze polecenia czcionek nowoczesnym stosem:

```latex
\usepackage{newtxtext,newtxmath}
```

Daje to zarys Timesa z pasującą matematyką, jak opisano szczegółowo w [Times, Arial, stosy podobne do Helvetica](/learn/times-arial-helvetica/). Jeśli chcesz mieć domyślny wygląd zamiast Timesa, `\usepackage{lmodern}` zamienia Computer Modern na jego następcę w zarysie, Latin Modern. Kompilacja z XeLaTeX lub LuaLaTeX i `fontspec` całkowicie omija ten problem, ponieważ te silniki używają czcionek systemu OpenType, które z założenia są konturami. Nowoczesny silnik, taki jak Tectonic oparty na XeTeX, który jest dostarczany przez Oleafly, nie generuje samodzielnie tekstu typu 3; kiedy się tam pojawia, czcionka bitmapowa jest dostarczana poprzez dołączoną grafikę.

## Wersja obrazkowa tego samego problemu

Rozmyty tekst w pliku PDF nie zawsze jest czcionką dokumentu. Jeśli akapity są ostre, ale etykiety wewnątrz wykresu są niewyraźne, sama figura jest obrazem rastrowym, zazwyczaj zrzutem ekranu w formacie PNG przedstawiającym wykres lub diagram wyeksportowany w rozdzielczości ekranu. Lekarstwem jest ten sam pomysł, o jeden poziom wyżej: wyeksportuj figury jako wektor PDF z narzędzia do kreślenia, tak aby ich tekst również był konturami. Wskazówki dotyczące formatu znajdują się w [upuść rysunek](/learn/insert-images/).

Po dokonaniu jakichkolwiek poprawek sprawdź ponownie panel czcionek, zamiast ufać swoim oczom przy domyślnym powiększeniu. Pojedynczy wpis typu 3 pozostawiony przez jedną figurkę lub jedną paczkę wystarczy, aby zgłoszenie zostało odrzucone.