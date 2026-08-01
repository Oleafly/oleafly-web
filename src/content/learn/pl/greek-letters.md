---

title: "Symbole greckie i codzienne"
description: "alfa do Omega, a także operatory i relacje, które wpisujesz codziennie."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# Symbole greckie i codzienne

Większość symboli, które wpisujesz na co dzień, to litery greckie oraz kilka operatorów i relacji. Wszystkie działają w ten sam sposób: ukośnik odwrotny i nazwa symbolu, tylko w trybie matematycznym. Ta strona to zestaw codzienny. [Ściągawka dotycząca symboli matematycznych](/learn/math-symbols-cheatsheet/) jest pełniejszym źródłem informacji.

## Grecki (tryb matematyczny)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Komenda z małymi literami podaje małe litery: `\alpha`, `\beta`, `\gamma`. Zastąp wielką literą pierwszą literę polecenia: `\Gamma`, `\Delta`, `\Omega`. Nie każda wielka litera istnieje jako polecenie, ponieważ niektóre greckie litery są identyczne z literami łacińskimi. Wielka alfa to po prostu A, więc nie ma `\Alfa`. To samo dotyczy wersji beta, epsilon i kilku innych. Zamiast tego wpisz literę łacińską.

Kilka liter ma różne formy z przedrostkiem `var`. `\epsilon` jest formą księżycową, a `\varepsilon` kręconą. `\theta` i `\vartheta`, `\phi` i `\varphi`, `\rho` i `\vartheta` różnią się w ten sam sposób. Żadna forma nie jest bardziej poprawna. Wybierz ten, który preferuje Twoja dziedzina i używaj go konsekwentnie w całym dokumencie.

Wszystkie te polecenia są poleceniami trybu matematycznego, więc grecka litera w bieżącym tekście jest zapisywana jako `$\alpha$`. Samo „\alpha” w tekście zatrzymuje kompilację z powodu błędu opisanego w [Wstawiono brakujący dolar](/learn/missing-dollar/).

## Operatorzy codzienni i relacje

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

Pierwsza linia to arytmetyka i porównanie: `\pm` dla plus-minus, `\cdot` dla kropki mnożenia, `\times` dla krzyża, `\div` dla dzielenia, następnie `\leq`, `\geq` i `\neq` dla porównań, `\około` dla przybliżonej równości i `\equiv` dla identyczności lub kongruencji. Druga linia to ustawiony język: `\in` dla członkostwa, `\subset` i `\subseteq` dla przechowywania, `\cup` i `\cap` dla sumy i przecięcia oraz `\emptyset` dla pustego zbioru. Trzecia część obejmuje strzałki i analizę: „\to” dla zwykłej strzałki w granicach i typach funkcji, „\mapsto” dla miejsca, do którego zmierza element, „\Rightarrow” dla implikacji, „\infty” dla nieskończoności oraz „\partial” i „\nabla” dla pochodnych cząstkowych i gradientów, które są w pełni omówione w [pochodnych i całekach](/learn/derivatives-integrals/).

Odstępy wokół tego wszystkiego są automatyczne. LaTeX wie, że „\leq” jest relacją, a „\cup” jest operacją binarną i odpowiednio rozdziela je, co jest dobrym powodem, aby używać poleceń zamiast wklejać symbole Unicode. Nazwy zapamiętują się najszybciej, gdy wpiszesz kilka formuł w [placu zabaw na żywo](/live/) i obejrzysz ich renderowanie.