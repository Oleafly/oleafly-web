---

title: "Równania, które nie pasują"
description: "mnożyć i dzielić, gdy miara jest zbyt wąska."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Równania, które nie będą pasować

Wcześniej czy później wyprowadzenie tworzy równanie szersze niż blok tekstu, a LaTeX pozwoli mu wysunąć się na margines, zamiast zgadywać, gdzie je podzielić. Dwa środowiska „amsmath” pozwalają na samodzielne umieszczenie przerwy: „multline” dla pojedynczego długiego wyrażenia i „split” dla przerwy, która powinna pozostać wyrównana.

## wieloliniowy

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

„multline” pasuje do jednej długiej formuły bez naturalnego punktu wyrównania. Wybierasz przerwę za pomocą `\\`, a środowisko zajmuje się układem: pierwsza linia jest ustawiona równo z lewej, ostatnia z prawej, a wszystkie środkowe linie są wyśrodkowane. Całe wyrażenie otrzymuje jeden numer równania, umieszczony w ostatniej linii. Konwencja polega na przerywaniu przed operatorem binarnym, więc „+” otwiera linię kontynuacji i czytelnik na pierwszy rzut oka widzi, że wyrażenie jest kontynuowane.

## podział

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

Opcja „split” również generuje pojedynczą liczbę, ale wyrównuje jej linie w taki sam sposób, jak robi to polecenie „align”, gdzie znak „&” oznacza punkt wyrównania. Nie jest to samodzielne środowisko; żyje w „równaniu” lub innym środowisku wyświetlania, które dostarcza liczbę. Tutaj „&” znajduje się przed znakiem równości w pierwszym wierszu, a kontynuacja zaczyna się od „&\quad”, pustego punktu wyrównania, po którym następuje kwadrat spacji, tak więc wcięcie drugiego wiersza znajduje się tuż za znakiem równości. To wcięcie mówi czytelnikowi, że jest to nadal prawa strona, a nie nowe równanie.

## Wybieranie między nimi

Użyj „multline”, gdy równanie jest jedną długą sumą bez struktury wartej wyrównania. Użyj „split”, gdy znajduje się znak równości, pod którym powinna wisieć kontynuacja. Jeśli masz kilka naprawdę oddzielnych równań, żadne z nich nie jest poprawne; to jest zadanie na „wyrównanie”, omówione w [wielowierszowych równaniach, które układają się w jedną całość](/learn/align-equations/).

Zanim sięgniesz po którykolwiek z nich, rozważ przepisanie matematyki. Nadanie nazwy podwyrażeniu w poprzednim zdaniu, rozkład na czynniki lub podzielenie na dwa równania często pozwala uzyskać kontrolę nad szerokością i jest również lepiej czytelny. Wolę to niż zmniejszanie typu. Wyświetlacz ściśnięty tak, aby pasował, prawie zawsze czyta się gorzej niż czysta przerwa.

Jeden błąd, o którym warto wiedzieć: „split” użyte samodzielnie, bez otaczającego go „równania”, kończy się komunikatem „Błąd amsmath pakietu”. Najpierw zawiń, a potem skompiluj. Z obydwoma środowiskami można szybko eksperymentować na [żywym placu zabaw](/live/).