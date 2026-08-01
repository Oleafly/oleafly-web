---

title: "Pliki zajęć uniwersyteckich, które nie zostaną skompilowane"
description: "Triage: pierwszy błąd, silnik, przestarzałe pakiety, wyszukiwanie binarne."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-25
---

# Pliki zajęć uniwersyteckich, które nie zostaną skompilowane

Szablony prac uniwersyteckich są szczególnym rodzajem starszego kodu. Pewien absolwent napisał plik zajęć piętnaście lat temu przeciwko ówczesnej dystrybucji TeX-a, ukończył szkołę i pozostawił go zamrożonym, podczas gdy ekosystem LaTeX-a rozwijał się. Kiedy dzisiaj pobierasz plik `universitythesis.cls' i kończy się to wyświetlaniem ekranu błędów, klasa zwykle nie jest tak bardzo uszkodzona, jak utknięta w czasie. Tryby awarii są jednak przewidywalne, a stała kolejność segregacji rozwiązuje większość z nich.

## Zacznij od pierwszego błędu

Kaskady błędów LaTeX-a: jedno niezdefiniowane polecenie na początku klasy może spowodować dziesiątki dalszych błędów, które nic nie znaczą. Przewiń dziennik do pierwszej linii zaczynającej się od „!”, napraw to i skompiluj ponownie, zanim zaczniesz czytać cokolwiek innego. Powtarzanie tej pętli często usuwa zastraszającą ścianę błędów w trzech lub czterech przejściach. Jeżeli pierwszym błędem jest nieznane polecenie, diagnostyka przeprowadza [Niezdefiniowana sekwencja sterująca](/learn/undefiniowana-sekwencja-kontrolna/).

## Sprawdź silnik

Wiele szablonów zakłada określony silnik i dziwnie zawodzi w każdym innym. Klasa ładująca `fontspec` lub ustawiająca czcionki według nazwy wymaga XeLaTeX lub LuaLaTeX; klasa zbudowana wokół prymitywów specyficznych dla `pdftex` może zawieść w obu przypadkach. Poszukaj komentarza u góry pliku zajęć lub wiersza instrukcji uniwersytetu zawierającego nazwę zamierzonego silnika i dopasuj go przed debugowaniem czegokolwiek innego. Różnice podsumowano w sekcji [Który silnik dla tego projektu](/learn/engines-compared/).

## Zmodernizuj to, nad czym masz kontrolę

Stare szablony ładują przestarzałe pakiety, których nowoczesne zamienniki są już w Twojej dystrybucji, a następnie para walczy; [Pakiety, które walczą ze sobą](/learn/package-conflikty/) zawiera listę klasycznych kombinacji. Skuteczną strategią jest pozostawienie samego pliku klasy w spokoju, ponieważ obowiązują tam wymagania dotyczące formatowania uniwersytetu, i zmodernizowanie tylko własnej preambuły: usuń przestarzałe linie `\usepackage`, załaduj `hyperref` z opóźnieniem i unikaj ponownego ładowania wszystkiego, co klasa już załadowała.

## Przeszukiwanie binarne preambuły

Gdy błąd nie pozwala na sprawdzenie, skomentuj drugą połowę preambuły i skompiluj ponownie. Jeśli błąd zniknie, wyzwalacz znajduje się w skomentowanej połowie; przywróć połowę i powtórz. Kilka kompilacji izoluje pojedynczą linię, w której występuje błąd, co jest znacznie szybsze niż wnioskowanie o preambule, której nie napisałeś.

## Szukaj, zanim będziesz cierpieć

Każdy student na tym uniwersytecie kompiluje te same zajęcia, więc prawie na pewno Twój błąd wystąpił już wcześniej. Wyszukaj dokładny komunikat o błędzie wraz z nazwą pliku zajęć i sprawdź, czy uniwersytet lub kolejny student posiada poprawiony fork w GitHub. Korzystanie z utrzymywanego widelca, jeśli taki istnieje, jest lepsze od samodzielnego naprawiania znanych błędów.