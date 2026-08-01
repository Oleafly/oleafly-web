---

title: "Przepełnione poziome pudełko"
description: "Linie wystające na margines i kiedy należy się tym przejmować."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Przepełnione poziome pudełko

## Objaw

Dziennik zgłasza coś w rodzaju „Przepełniony \hbox (14,2 pkt. za szeroki) w akapicie w liniach 87–92”, a w pliku PDF jedna linia tego akapitu wystaje na prawy margines. Dokument nadal się kompiluje, ponieważ jest to raczej ostrzeżenie niż błąd, ale wystająca linia jest widoczna w druku i recenzenci to zauważają. W trybie roboczym (`\documentclass[draft]{...}`) LaTeX oznacza każdego sprawcę czarnym prostokątem, co ułatwia jego wykrycie.

## Dlaczego tak się dzieje

TeX dzieli akapity na linie, ważąc każdy możliwy punkt przerwania i wybierając układ z najmniejszą całkowitą „złością”, gdzie zło mierzy, jak bardzo spacje w linii musiały się rozciągnąć lub skurczyć. Czasami nie istnieje żaden akceptowalny układ: długi adres URL w ogóle nie zawiera punktów przerwania, wbudowana matematyka jest traktowana jako prawie niemożliwa do złamania lub długie słowo nie ma wpisu związanego z dzieleniem wyrazów. Zamiast rozciągać przestrzenie poza swoją tolerancję i tworzyć widocznie nierówną linię, TeX pozwala linii biec długo i informuje Cię o tym. Przepełnione pole oznacza, że ​​TeX nie chce uczynić akapitu brzydkim w inny sposób.

## Poprawki, od najlepszego do najgłupszego

Najlepszym rozwiązaniem jest redakcja. Przeformułowanie zdania, odsunięcie długiego słowa od końca wiersza lub podzielenie jednego zdania na dwa zwykle usuwa problem bez żadnego kodu, a często i tak poprawia prozę.

W przypadku adresów URL zawiń adres w `\url{...}` z pakietu `url` lub `hyperref`, aby mógł łamać ukośniki i kropki, i załaduj pakiet `xurl`, gdy potrzebujesz przerw na prawie każdym znaku. W przypadku szerokiej formuły wbudowanej wyświetl ją lub użyj środowiska, które można podzielić, takiego jak „multline” z „amsmath”, gdy samo równanie jest za długie dla linii.

Dwa ulepszenia na poziomie preambuły są pomocne na całym świecie. Załadowanie „mikrotypu” powoduje, że znaki wystają ułamkowo i nieznacznie rozszerzają czcionki, co rozwiązuje wiele marginalnych przypadków bez zauważania. Ustawienie prawidłowego języka dokumentu za pomocą „babel” lub „poliglossia” zapewnia TeXowi właściwe wzorce dzielenia wyrazów, ponieważ słowo, którego nie może podzielić, jest słowem, którego nie może podzielić.

## Kiedy się tym przejmować

Liczba podana w ostrzeżeniu oznacza przekroczenie. Wszystko poniżej 2 punktów jest niewidoczne dla czytelników i można je bezpiecznie zignorować w wersji roboczej. Warto naprawić dziesiątki punktów, zanim ktokolwiek inny zobaczy plik PDF. Rozsądny przepływ pracy polega na ignorowaniu przepełnionych pól podczas pisania, a następnie przeszukaniu dziennika przed przesłaniem i naprawieniu garści, która pozostała, najpierw największej. Oprzyj się „niechlujstwu” i innym sztuczkom związanym z globalną tolerancją: zamieniają kilka wystających linii na luźne, nierówne odstępy w całym dokumencie.