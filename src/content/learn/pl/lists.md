---

title: "Punktory, liczby i listy definicji"
description: "wyszczególnianie, wyliczanie, opisywanie, zagnieżdżanie i niestandardowe etykiety elementów."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Punktory, liczby i listy definicji

Listy w LaTeX-ie to środowiska: otwierasz je za pomocą `\begin{...}`, zamykasz za pomocą `\end{...}` i zaznaczasz każdy wpis `\item`. Następnie LaTeX zajmuje się numeracją, punktorami, wcięciami i odstępami. Chodzi o tę ostatnią część. Nigdy nie przenumerujesz niczego ręcznie, a jeśli usuniesz trzeci wpis z listy numerowanej, wpisy od czwartego do dziesiątego po cichu zmienią się od trzeciego do dziewiątego.

## Trzy środowiska listowe

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

Opcja „itemize” tworzy nieuporządkowaną listę punktowaną i jest właściwym wyborem, gdy wpisy nie mają kolejności, np. lista założeń. „wylicz” numerację automatycznie dla każdego wpisu, co jest potrzebne w przypadku kroków następujących po sobie lub elementów, do których planujesz się odwołać. Możesz nawet umieścić `\label` po `\elementze` w wyliczeniu i później odwołać się do jego numeru za pomocą `\ref`, tak samo jak w przypadku sekcji.

„opis” jest najmniej znanym z trzech, ale bardzo przydatnym. Każdy `\item` przyjmuje opcjonalny argument w nawiasach kwadratowych i argument ten jest drukowany pogrubioną czcionką jako etykieta z tekstem definicji po nim. Jest to naturalne środowisko dla glosariuszy, list oznaczeń lub dowolnej struktury „termin: wyjaśnienie”.

## Zagnieżdżanie

Środowiska zagnieżdżane dla list wielopoziomowych. Umieść kompletny blok `\begin{itemize} ... \end{itemize}` wewnątrz `\item` zewnętrznej listy, a LaTeX automatycznie doda do niego wcięcie i zamieni symbol punktora. To samo działa w przypadku polecenia „enumerate”, gdzie zagnieżdżanie zmienia styl numeracji na każdym poziomie: najpierw cyfry arabskie, potem litery, a na końcu cyfry rzymskie. LaTeX obsługuje cztery poziomy zagnieżdżenia, czyli więcej niż potrzebuje jakikolwiek czytelny dokument. Jeśli znajdziesz się na głębokości trzech poziomów, materiałem prawdopodobnie będzie zamiast tego proza ​​lub stół.

## Etykiety niestandardowe

Dowolny pojedynczy element może zastąpić swój własny znacznik opcjonalnym argumentem: `\item[(a)]` wyświetla „(a)” zamiast punktora lub liczby. Jest to przydatne w jednorazowych przypadkach, ale jeśli chcesz zmienić styl całej listy, ręczna zmiana każdego elementu pokonuje automatyzację. W tym celu załaduj pakiet `enumitem`, który pozwala Ci pisać takie rzeczy jak `\begin{enumerate}[label=(\alph*)]`, aby ponownie oznaczyć całą listę w jednym miejscu, a także daje możliwość zawężenia odstępów w pionie.

Częstym błędem początkujących jest pozostawienie pustej linii pomiędzy wpisami `\item` w nadziei na ich rozmieszczenie. Pusta linia jest nieszkodliwa wewnątrz listy, ale nie robi nic wizualnie. Odstępy są kontrolowane przez samo środowisko listy lub przez opcje `enumitem`. Jeszcze jedno: każde środowisko listowe musi zawierać co najmniej jeden `\item` przed jakimkolwiek tekstem, w przeciwnym razie pojawi się mylący błąd „Coś jest nie tak - być może brakuje \item”. Możesz eksperymentować ze wszystkimi trzema środowiskami na [żywym placu zabaw](/live/).