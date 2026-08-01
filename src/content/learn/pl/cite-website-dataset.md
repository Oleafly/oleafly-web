---

title: "Strony internetowe, filmy, zbiory danych"
description: "wpisy misc/online i daty dostępu dla wrażliwych adresów URL."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Strony internetowe, filmy, zbiory danych

BibTeX został zaprojektowany w latach 80. XX wieku dla czasopism, książek i materiałów konferencyjnych, więc nie ma natywnej koncepcji strony internetowej, filmu na YouTube ani zbioru danych w Zenodo. Nadal musisz stale cytować te rzeczy, a standardowym obejściem jest wpis typu `@misc`, który akceptuje prawie dowolną kombinację pól i pozwala stylowi wydrukować je w rozsądny sposób.

## Wzorzec @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Liczą się tu trzy szczegóły. Podwójne nawiasy wokół `{{Oleafly Contributors}}` mówią BibTeXowi, aby traktował cały ciąg znaków jako jedną dosłowną nazwę; bez nich analizowałby „Współpracownicy” jako nazwisko i skracałby resztę do „O. Współtwórcy”. Pole `howpublished` jest zwykłym miejscem adresu URL w klasycznym BibTeX-ie, a zawinięcie adresu w `\url{...}` powoduje jego wpisanie czcionką o stałej szerokości i pozwala na czyste dzielenie wierszy (w tym celu załaduj pakiet `url` lub `hyperref`). Pole „notatka” zawiera datę dostępu, która ma znaczenie, ponieważ zawartość sieci zmienia się i znika. Ta data informuje czytelników, którą wersję strony faktycznie widziałeś.

## Alternatywa biblatex: @online

Jeśli Twój dokument korzysta z biblatexu, istnieje dedykowany typ. Wpis `@online` zajmuje odpowiednie pola `url` i `urldate`, zatem tym samym źródłem stają się `url = {https://oleafly.com}` i `urldate = {2026-07-24}`, a styl formatuje datę dostępu za Ciebie. Preferuj opcję `@online`, jeśli obsługuje ją styl bibliografii, i wybierz opcję `@misc`, gdy musisz zachować kompatybilność z klasycznym plikiem `.bst`. Różnice między tymi dwoma systemami opisano w [Klasycznym BibTeX-ie lub biblatex](/learn/bibtex-vs-biblatex/).

## Zbiory danych i oprogramowanie

Zbiory danych i wydania kodu zasługują na coś więcej niż nagi adres URL, jeśli istnieje DOI. Repozytoria takie jak Zenodo i Figshare mint DOI, dzięki czemu cytat może przetrwać dowolną konfigurację hostingu. Umieść DOI w polu „doi” lub w „howpublished” jako „\url{https://doi.org/10.5281/...}” w przypadku stylów klasycznych. Dołącz informację o wersji, gdy artefakt będzie aktualizowany, ponieważ „zestaw danych”, który czytelnik pobierze w ciągu pięciu lat, może nie być tym, który analizowałeś. Wiele projektów publikuje również preferowane cytaty, często w pliku `CITATION.cff` w repozytorium. Korzystanie z tego jest zarówno grzeczne, jak i dokładniejsze niż samodzielne zgadywanie pól.

## Filmy i inne dziwne źródła

W przypadku filmu wideo wpisz kanał lub twórcę w polu „autor”, tytuł filmu w polu „tytuł”, platformę i adres URL w polu „howpublished”, rok przesłania w polu „rok” i datę dostępu w polu „notatka”. Ogólna zasada dotycząca wszystkiego, co niezwykłe, jest taka sama: uchwyć, kto to stworzył, jak się nazywa, gdzie czytelnik może to znaleźć i kiedy szukałeś, a „@misc” bezpiecznie przeniesie to wszystko w dowolnym stylu.