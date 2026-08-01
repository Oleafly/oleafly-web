---

title: "Twierdzenia i bloki dowodowe"
description: "style amsthm, wspólne liczniki, znaczniki końca próby."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Twierdzenia i bloki dowodowe

Pismo matematyczne opiera się na numerowanych stwierdzeniach: twierdzeniach, lematach i definicjach, z których każde jest wyodrębnione z tekstu i ponumerowane, aby można było je cytować w późniejszych dowodach. Pakiet `amsthm` dostarcza maszynę. Deklarujesz rodzaje bloków, jakich potrzebuje dokument w preambule, a następnie używasz ich jak zwykłych środowisk.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Deklarowanie środowisk

`\newtheorem{theorem}{Twierdzenie}[sekcja]` tworzy środowisko `twierdzenia`. Pierwszy argument to nazwa środowiska, którą będziesz pisać, drugi to tekst nagłówka, który zostanie wydrukowany, a końcowe „[sekcja]” wiąże numerację z sekcjami, więc trzecim twierdzeniem z sekcji 2 jest Twierdzenie 2.3, a licznik resetuje się przy każdej nowej sekcji.

`\newtheorem{lemma}[teorem]{Lemat}` umieszcza opcjonalny argument w innym miejscu, gdzie oznacza on coś innego: `[twierdzenie]` mówi, że lematy dzielą licznik twierdzeń zamiast zachować własny. Wspólny licznik tworzy pojedynczą sekwencję, Twierdzenie 2.1, po którym następuje Lemat 2.2. Łatwiej to śledzić niż ciągi równoległe, w których istnieją zarówno Lemat 2.1, jak i Twierdzenie 2.1.

`\theoremstyle` ustawia wygląd każdej deklaracji, która po nim następuje. Styl „zwykły” drukuje treść kursywą, co jest tradycyjnym podejściem do twierdzeń, lematów i twierdzeń. Styl „definicji” utrzymuje ciało w pozycji pionowej, co pasuje do definicji i przykładów. Trzeci styl, „uwaga”, jest jeszcze lżejszy i pasuje do notatek i obserwacji. Pogrupuj swoje deklaracje według stylu, którego każda z nich powinna używać.

## Używanie bloków

Opcjonalny argument środowiska wypisuje nazwę po nagłówku, więc `\begin{theorem}[opcjonalna nazwa]` daje coś w rodzaju Twierdzenia 2.4 (Fubini). Środowisko „Proof” drukuje nagłówek Proof kursywą i kończy się znakiem końca korekty, małym kwadratem ustawionym równo z prawą stroną.

`\qedhere` zmienia położenie tego kwadratu, gdy dowód nie kończy się zwykłym tekstem. Jeśli ostatnią linią dowodu jest wyświetlane równanie, automatyczna ocena spadnie na pustą linię poniżej. Wpisanie „\qedhere” na wyświetlaczu powoduje umieszczenie kwadratu w osobnej linii równania. Kiedy dowód kończy się zwykłym tekstem, jak w przykładzie, polecenie jest nieszkodliwe, ale niepotrzebne.

Bloki twierdzeń są ponumerowanymi obiektami jak inne, więc `\label{thm:main}` wewnątrz środowiska i `Twierdzenie~\ref{thm:main}` w tekście działają zgodnie ze zwykłymi regułami dwuprzebiegowymi opisanymi w [liczby i wskaźniki do równań](/learn/number-equations/). Częstym błędem w deklaracji jest umieszczenie każdego środowiska w `\theoremstyle{plain}`, co powoduje ustawienie definicji wieloakapitowych kursywą. Trzymaj definicje i przykłady w stylu „definicja”.