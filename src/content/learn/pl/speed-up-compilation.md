---

title: "Krótsze oczekiwanie na plik PDF"
description: "Dane robocze, tylko w zestawie, uzewnętrznienie TikZ, lokalny procesor."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Krótsze oczekiwanie na plik PDF

Praca dyplomowa, której napisanie zajmuje dziewięćdziesiąt sekund, zmienia sposób, w jaki piszesz. Przestajesz rekompilować po drobnych edycjach, błędy piętrzą się niezauważone, a pętla sprzężenia zwrotnego, która sprawia, że ​​LaTeX jest przyjemny, znika. Zanim zaczniesz optymalizować, dowiedz się, kiedy mija czas. W większości długich dokumentów nie liczba pakietów, ale garść ciężkich zasobów, przede wszystkim duże obrazy i złożone obrazy TikZ, dominują w kompilacji. Poniższe techniki atakują je bezpośrednio.

## Pomiń liczby podczas rysowania

Opcja `draft` powoduje, że LaTeX zastępuje każdy obraz pustym prostokątem o tym samym rozmiarze, co pozwala zachować układ i podziały stron, pomijając przetwarzanie obrazu:

```latex
\documentclass[draft]{article}
```

„Przeciąg” na poziomie klasy oznacza również przepełnione linie czarnymi paskami, co niektórzy uważają za przydatne, a inni za hałaśliwe. Aby ograniczyć efekt do obrazów, zamiast tego przekaż opcję do pakietu jako `\usepackage[draft]{graphicx}` lub do pojedynczego winowajcy za pomocą `\includegraphics[draft]{...}`. Pamiętaj, aby go usunąć przed udostępnieniem pliku PDF, ponieważ wersja robocza wygląda na uszkodzoną dla każdego, kto nie zna tej opcji. Niezależnie od trybu roboczego, zmniejsz raz ogromne zdjęcia, jak opisano w [upuść figurę](/learn/insert-images/), ponieważ 40-megabajtowy obraz kosztuje Cię wiecznie przy każdej kompilacji.

## Skompiluj tylko bieżący rozdział

Jeśli rozdziały znajdują się w oddzielnych plikach pobranych za pomocą polecenia „\include”, polecenie „\includeonly” ogranicza kompilację do plików, które podasz:

```latex
\includeonly{chapters/04-results}
```

Umieść to w preambule, a LaTeX skompiluje właśnie ten rozdział, czytając pliki `.aux` pozostałych, tak aby numery stron i odniesienia do reszty dokumentu pozostały w przybliżeniu prawidłowe. Jest to największa pojedyncza oszczędność w przypadku pracy dyplomowej, rutynowo zamieniająca minutę w sekundy. Działa tylko z `\include`, a nie z `\input`, co jest jednym z powodów strukturyzowania długich dokumentów zgodnie z opisem w [dzielenie dokumentu na pliki](/learn/split-chapter-files/).

## Buforuj drogie zdjęcia

Obrazy TikZ są rysowane od nowa przy każdej kompilacji. Biblioteka `zewnętrzna', załadowana `\usetikzlibrary{external}` i `\tikzexternalize`, kompiluje każdy obraz do własnego pliku PDF raz i wykorzystuje go ponownie do czasu zmiany kodu. Konfiguracja ma ostre krawędzie, a ręczna alternatywa polegająca na przenoszeniu dużych obrazów do samodzielnych plików działa równie dobrze; oba są omówione w [samodzielnym TikZ do formatu PDF lub PNG](/learn/tikz-export/).

## Mniej przejść, szybsze prasowanie

Bibliografia i rozpoznawanie odsyłaczy wymagają wielu przebiegów, ale podczas pisania prozy rzadko ich potrzebujesz, więc wystarczy jeden szybki przebieg, a pełna sekwencja może poczekać do momentu sprawdzenia bibliografii. Sprzęt i lokalizacja również mają znaczenie: lokalny silnik kompiluje się na Twoim własnym procesorze bez przesyłania i kolejkowania, tak właśnie uruchamia kompilacje Oleafly.

Zastosuj `\includeonly` i razem szkicuj rysunki, a nawet duża praca dyplomowa zwykle wraca w ciągu kilku sekund, czyli w momencie, w którym zaczynasz ponowną kompilację po każdym akapicie.