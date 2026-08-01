---

title: "Strona PDF jako grafika"
description: "zawiera grafikę z wyborem stron i strony pdf dla załączników."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Strona PDF jako grafika

PDF to najlepszy format rysunków, jaki może wykorzystać LaTeX. W przeciwieństwie do formatu PNG lub JPG plik PDF przechowuje dane wektorowe, dzięki czemu linie i etykiety pozostają ostre przy każdym poziomie powiększenia, a zawarte w nich czcionki przemieszczają się wraz z plikiem. Narzędzia takie jak Matplotlib, Inkscape i Draw.io eksportują pliki PDF, co oznacza, że ​​diagram narysowany w innym miejscu można przenieść bezpośrednio do dokumentu. Ale pliki PDF mają jedną wadę, której nie mają obrazy: plik PDF może zawierać wiele stron i musisz powiedzieć LaTeXowi, którą chcesz.

## Wyciąganie jednej strony z wielostronicowego pliku PDF

`\includegraphics` pakietu `graphicx` akceptuje opcję `page` obok zwykłych kluczy zmiany rozmiaru:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Tutaj `page=1` wybiera pierwszą stronę `diagram.pdf`, a `width=\textwidth` skaluje tę stronę do pełnej szerokości bloku tekstu. Jeśli pominiesz „stronę”, LaTeX po cichu użyje pierwszej strony, co zwykle jest tym, czego chcesz, ale może cię zaskoczyć, gdy skrypt kreślący zapisze kilka cyfr w jednym pliku. Możesz dołączyć ten sam plik PDF kilka razy z różnymi wartościami „stron”, raz na środowisko figur, każdy z własnym podpisem i etykietą.

Zawiń polecenie w normalne środowisko „figure”, tak aby otrzymało podpis i numer, dokładnie tak samo, jak w przypadku [dowolnego innego obrazu](/learn/insert-images/). Dołączona strona jest przycięta do własnej ramki ograniczającej, więc jeśli źródłowy plik PDF ma duże marginesy, figura będzie wyglądać na wypełnioną. Wyeksportuj ponownie z ciasną ramką ograniczającą lub przytnij ją jednorazowo za pomocą narzędzia takiego jak „pdfcrop”, zamiast walczyć z białymi znakami za pomocą ujemnych odstępów.

## Wstawianie całych dokumentów za pomocą stron pdf

Czasami w ogóle nie chcesz figury. Chcesz, aby całe strony zostały umieszczone w dokumencie dosłownie: dodatkowy plik PDF, podpisany formularz, opublikowany kwestionariusz w załączniku do pracy. Takie jest zadanie pakietu `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

Wartość `pages=-` oznacza każdą stronę. Możesz także wpisać `pages=2-5` dla zakresu lub `pages={1,3,7}` dla określonej listy. Każda wstawiona strona wypełnia własną stronę wyjściową, zachowuje swój oryginalny układ i uczestniczy w numeracji stron dokumentu, dzięki czemu dodatek jest czytany w sposób ciągły. Dodaj opcję `pagecommand={}`, jeśli nagłówki lub stopki z klasy dokumentu są drukowane na górze wstawionych stron i chcesz je ukryć lub dostosować.

## Które narzędzie do jakiego zadania

Użyj `\includegraphics[page=...]`, jeśli zawartość pliku PDF powinna zachowywać się jak figura, co oznacza, że ​​unosi się w powietrzu, ma podpis i odniesienia z tekstu. Użyj `\includepdf`, jeśli strony powinny stać samodzielnie w pełnym rozmiarze. Częstym błędem jest używanie `pdfpages` do diagramu, co daje pełną stronę bez podpisów i odwołań, której nie można zacytować za pomocą `\ref`. Jeśli czytelnicy kiedykolwiek zobaczą „patrz rysunek 3”, należy to do środowiska figur.