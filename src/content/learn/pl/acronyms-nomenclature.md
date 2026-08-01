---

title: "Akronimy i listy symboli"
description: "glosariusze – dodatkowy szkic lub ręcznie utworzona lista, jeśli to wystarczy."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Akronimy i listy symboli

Długie dokumenty kumulują skróty, a konwencje wokół nich są rygorystyczne. Akronim jest zapisywany w całości przy pierwszym użyciu, później skracany, a praca dyplomowa zwykle wymaga wykazu skrótów na początku. Utrzymanie tego ręcznie zawodzi w przewidywalny sposób. Zmieniasz kolejność dwóch rozdziałów, następuje pierwsze użycie i nagle „ML” pojawia się trzy strony przed „uczeniem maszynowym (ML)”. Pakiet „glossaries-extra” śledzi pierwsze użycie.

## Automatyczna trasa

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

Opcja `acronym` włącza obsługę akronimów, a `\makeglossaries` włącza maszynę zbierającą wpisy podczas kompilacji. Każdy `\nowyakronim` przyjmuje trzy argumenty: klucz, który wpiszesz w tekście, krótką formę i długą formę. Zdefiniuj je wszystkie w preambule lub w oddzielnym pliku, który `\wprowadzasz', tak aby znajdowały się w jednym miejscu.

W treści nigdy nie wpisujesz samego akronimu:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Pierwsze `\gls{ml}` w dokumencie wypisuje „uczenie maszynowe (ML)”, a każde kolejne wypisuje tylko „ML”. Ponieważ pakiet śledzi użycie, a nie położenie w źródle, rozszerzenie następuje po pierwszym użyciu, gdziekolwiek przeniesie go Twoja restrukturyzacja. `\printglossaries` drukuje zebraną listę skrótów, gdziekolwiek ją umieścisz, zazwyczaj po spisie treści. Powiązane polecenia omawiają gramatykę wokół tego: `\glspl` dla liczby mnogiej, `\Gls` dla początku zdania pisanego wielką literą.

Haczyk polega na konstrukcji. Pomiędzy przebiegami LaTeX-a musi zostać uruchomiony pomocnik `makeglossaries`, aby posortować i sformatować wpisy, w przeciwnym razie `\printglossaries` po cichu nic nie wyświetli. Pełne konfiguracje latexmk radzą sobie z tym automatycznie. Prostsze potoki mogą nie być, a dodatkowe słowniki oferują dla nich rozwiązanie awaryjne. Jeśli Twoja lista uparcie nie chce się pojawić, pierwszym podejrzanym jest brakujący bieg pomocniczy, znacznie wyprzedzający błąd w dokumencie.

## Ręcznie zbudowana trasa

W przypadku prostej listy symboli często wystarcza ręcznie utrzymywane środowisko „opisu”:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Każdy `\item[...]` wypisuje swój argument w nawiasie jako pogrubioną etykietę z następującym wyjaśnieniem, które ma dokładnie kształt listy notacji. Nie ma śledzenia pierwszego użycia, ale lista symboli rzadko go potrzebuje; niezależnie od tego, symbole są definiowane tam, gdzie pojawiają się po raz pierwszy w matematyce.

Szczera rada jest taka, aby dopasować narzędzie do skali. Papier zawierający pięć akronimów jest łatwiejszy do zarządzania ręcznie. 200-stronicowa praca dyplomowa z czterdziestoma już nie, a tam pakiet wielokrotnie zwraca koszty instalacji. [Lekcja o listach](/learn/lists/) opisuje środowisko „opisu” bardziej szczegółowo.