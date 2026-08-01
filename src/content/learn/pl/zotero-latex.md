---

title: "Zotero do pliku .bib"
description: "Lepszy BibTeX, automatyczny eksport, klucze, które przetrwają maszyny."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero do pliku .bib

Zotero jest bardzo dobry w zbieraniu referencji: pobiera metadane i pliki PDF z przycisku przeglądarki i umożliwia przeszukiwanie wszystkiego. Z drugiej strony LaTeX czyta tylko pliki `.bib`. Pomostem pomiędzy nimi jest wtyczka Better BibTeX. Zamienia kolekcję Zotero w plik `.bib`, który pozostaje aktualny i, co równie ważne, zapewnia stabilność kluczy cytowań, dzięki czemu polecenia `\cite` nigdy się nie psują.

## Dlaczego wbudowany eksport nie wystarczy

Zotero może samodzielnie eksportować BibTeX, ale za każdym razem ponownie generuje klucze cytowań, a klucz zmieniający się z `knuth_literate_1984` na `knuth_literate_1984-1` dyskretnie przerywa każde `\cite`, w którym użyto starej nazwy. Eksport jest również jednorazową migawką, więc plik staje się nieaktualny w momencie dodania papieru. Better BibTeX rozwiązuje oba problemy: klucze są generowane na podstawie wybranej przez Ciebie formuły, można je przypiąć, aby nigdy się nie zmieniały, a eksport może się automatycznie odświeżać.

## Konfigurowanie potoku

Najpierw zainstaluj Better BibTeX ze strony internetowej poprzez Narzędzia Zotero, okno dialogowe Wtyczki, a następnie uruchom ponownie Zotero. Po drugie, wybierz formułę klucza cytatu w preferencjach Better BibTeX. Wzorzec generujący klucze takie jak „knuth1984” lub „knuth1984literate” jest łatwy do wpisania i łatwy do rozpoznania w źródle. Po trzecie, kliknij prawym przyciskiem myszy kolekcję należącą do Twojej pracy, wybierz Eksportuj kolekcję, wybierz format Better BibTeX i zaznacz opcję „Bądź na bieżąco” przed zapisaniem pliku w folderze projektu jako, powiedzmy, `refs.bib`. Od tego momentu dodanie lub edycja elementu w Zotero spowoduje przepisanie pliku w ciągu kilku sekund.

Na koniec skieruj swój dokument na wyeksportowany plik z `\bibliography{refs}` lub `\addbibresource{refs.bib}`, dokładnie tak, jak w przypadku ręcznie pisanej bazy danych. Okablowanie opisano w artykule [Od klucza .bib do cytowania w tekście](/learn/add-citations/).

## Podział pracy

Traktuj Zotero jako główną bazę danych, a plik `.bib` jako wygenerowany artefakt znajdujący się w repozytorium artykułu. Zatwierdzenie `.bib` obok `.tex` oznacza, że ​​współautor lub Ty na innym komputerze możesz skompilować artykuł bez konieczności instalowania Zotero. Nie edytuj ręcznie wyeksportowanego pliku. Następny automatyczny eksport zastępuje zmiany. Zamiast tego napraw metadane w Zotero, a poprawka zostanie zastosowana. Jeśli po wyeksportowaniu wpis nadal wygląda błędnie, przeprowadź go przez [walidator BibTeX](/tools/bibtex-validator/), aby zobaczyć, z którego pola styl jest niezadowolony.

Jeden nawyk zapobiega większości przyszłych problemów: gdy klucz pojawi się w rękopisie, przypnij go w Better BibTeX (kliknij element prawym przyciskiem myszy, Better BibTeX, Przypnij klucz BibTeX). Przypięte klucze przetrwają zmiany formuł, ruchy maszyn i reorganizacje bibliotek, a właśnie to musi zrobić klucz cytowania.