---

title: "pt, em, szerokość tekstu"
description: "Faktycznie ustawione jednostki bezwzględne i względem czcionki."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, szerokość tekstu

Prawie każde polecenie układu w LaTeX-ie ma określoną długość: odstęp w pionie, szerokość obrazu, marginesy, grubość linii. Długość to liczba plus jednostka, a wybór jednostki decyduje o tym, czy układ będzie się dostosowywał w przypadku zmiany rozmiaru czcionki lub geometrii strony, czy też psuje dzień, w którym to się dzieje.

| Jednostka | Znaczenie |
| --- | --- |
| `pt` | Punkt (podstawa) |
| „em” | Szerokość względna czcionki |
| `były` | Wysokość względna czcionki |
| `cm` / `mm` / `cal` | Absolutny |
| `\szerokość tekstu` | Szerokość bloku tekstu |
| `\szerokość linii` | Szerokość bieżącej kolumny/ministrony |

## Jednostki bezwzględne i względne

`pt` to punkt drukarki, podstawowa jednostka TeX-a. Rozmiary czcionek i wiele wewnętrznych ustawień domyślnych podano w punktach, a jeden cal to 72,27 punktu według obliczeń TeX-a. „cm”, „mm” i „in” to znane jednostki bezwzględne, odpowiednie, gdy wymaganie jest rzeczywiście fizyczne, np. obowiązkowy jednocalowy margines.

Skala `em` i `ex` z bieżącą czcionką: em to w przybliżeniu rozmiar czcionki wyrażony jako szerokość, a ex to mniej więcej wysokość małej litery x. Ich zaletą jest proporcjonalność. `\vspace{1em}` pozostaje spójny wizualnie, jeśli dokument zostanie zmieniony z 10pt na 12pt, gdzie zakodowany na stałe `\vspace{12pt}` staje się zbyt ciasny lub zbyt luźny.

## Długości podane w dokumencie

`\textwidth` to szerokość bloku tekstowego strony. `\linewidth` to szerokość bieżącego kontenera, która w zwykłym tekście jest równa `\textwidth`, ale zawęża się wewnątrz ministrony, listy lub kolumny. Przecinek z przodu skaluje którykolwiek z nich i jest to standardowy sposób określania rozmiaru cyfr:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

Pierwsza linia wstawia jeden em przestrzeni pionowej. Drugie ustawienie ustawia obraz na połowę szerokości bloku tekstu, więc jeśli marginesy kiedykolwiek się zmienią, figura przeskaluje się wraz z nimi i nigdy nie przekroczy marginesu. Wewnątrz ministrony lub układu dwukolumnowego preferuj opcję „0,5\linewidth”, ponieważ „\textwidth” jest szersza niż faktycznie dostępna przestrzeń.

Długości są również regulowane. `\setlength{\parindent}{0pt}` usuwa wcięcia akapitu i to samo polecenie dostosowuje długość większości układów.

Częstym błędem jest podawanie liczb w centymetrach. Działa to do momentu zmiany klasy dokumentu, formatu papieru czy marginesów i wtedy każda figura wymaga ręcznego dostrojenia. Szerokości wyrażone jako ułamki `\textwidth` lub `\linewidth` przetrwają wszystkie te zmiany w nienaruszonym stanie, dlatego szablony używają ich prawie wyłącznie.