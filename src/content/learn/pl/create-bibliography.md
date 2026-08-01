---

title: "Zbuduj trwały plik .bib"
description: "Typy wpisów, wymagane pola, stabilne klucze."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Zbuduj trwały plik .bib

Plik `.bib` to mała, tekstowa baza danych zawierająca wszystko, co możesz zacytować. Każdy wpis ma typ, klucz i zestaw pól, a ten sam plik może służyć każdej napisanej przez Ciebie pracy przez lata. Odrobina dyscypliny w wyborze typów, wypełnianiu pól i kluczach nazw pozwala zaoszczędzić prawdziwego bólu później, gdy styl dziennika nagle wymaga pola, którego nigdy nie zapisałeś.

## Anatomia wpisu

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

Słowo po `@` jest typem wpisu, który mówi stylowi, jakiego rodzaju jest to praca i jakich pól się spodziewać. `knuth84` to klucz cytowania, uchwyt, który wpisujesz w `\cite{...}`. Wszystko inne jest polem. W polu „autor” używana jest forma „Ostatni, pierwszy”, dzięki czemu styl umożliwia niezawodne skracanie i sortowanie nazw, a w polu „strony” używany jest podwójny łącznik, który LaTeX ustawia jako myślnik zakresu stron.

## Typy wpisów, których faktycznie potrzebujesz

Sześć typów obejmuje prawie całą twórczość akademicką. Użyj `@article` w przypadku artykułów w czasopismach, `@inproceedings` w przypadku artykułów konferencyjnych i warsztatowych, `@book` w przypadku książek, `@phdthesis` w przypadku rozpraw doktorskich, `@techreport` w przypadku raportów instytucjonalnych i wielu przeddruków oraz `@misc` w przypadku czegokolwiek innego, w tym oprogramowania i stron internetowych. Wybór odpowiedniego typu ma znaczenie, ponieważ style formatują każdy z nich inaczej: wpis „@inproceedings” wymaga „tytułu książki” (nazwy konferencji), podczas gdy „@artykuł” wymaga „dziennika”.

## Pola wymagane i dlaczego walidatorzy narzekają

Każdy typ ma wymagane pola, a brak jednego z nich jest najczęstszą przyczyną zniekształcenia wpisu bibliograficznego lub wyświetlenia ostrzeżenia w systemie backend. W przypadku „@artykułu” podstawowymi elementami są „autor”, „tytuł”, „czasopismo” i „rok”; dla „@w postępowaniu”, „autora”, „tytułu”, „tytułu książki” i „roku”. Brak „roku” lub „autora” to klasyczna porażka, ponieważ style roku autora dosłownie nie mogą bez nich skonstruować etykiety cytatu. Opcjonalne pola, takie jak „tom”, „strony”, „doi” i „wydawca” sprawiają, że wpisy są bardziej przydatne, więc zapisz je, mając przed sobą źródło. Za pomocą [walidatora BibTeX](/tools/bibtex-validator/) możesz sprawdzić cały plik na raz.

## Klucze, które przetrwają dekadę

Klucze cytatów są wieczne. Każde `\cite{knuth84}` w każdej wersji roboczej, notatce i slajdzie odnosi się do dokładnie tego ciągu, więc zmiana nazwy klucza oznacza wyłapanie każdego użycia. Wybierz konwencję, taką jak „authorYEAR” lub „authorYEARkeyword”, stosuj ją od pierwszego dnia i nigdy nie „czyść” kluczy w ustalonej bazie danych. Jeśli zarządzasz referencjami w Zotero, wtyczka Better BibTeX może wygenerować i przypiąć dla Ciebie stabilne klucze; zobacz [Zotero do pliku .bib](/learn/zotero-latex/). Aby połączyć plik z dokumentem, zacznij od [Od klucza .bib do cytowania w tekście](/learn/add-citations/).