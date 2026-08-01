---

title: "Simboli greci e quotidiani"
description: "da alfa a Omega, oltre agli operatori e alle relazioni digitate quotidianamente."
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

# Simboli greci e quotidiani

La maggior parte dei simboli che digiti quotidianamente sono lettere greche più una manciata di operatori e relazioni. Funzionano tutti allo stesso modo: una barra rovesciata più il nome del simbolo, solo in modalità matematica. Questa pagina è l'impostazione giornaliera. Il [cheatsheet dei simboli matematici](/learn/math-symbols-cheatsheet/) è il riferimento più completo.

## Greco (modalità matematica)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Un comando minuscolo restituisce la lettera minuscola: `\alpha`, `\beta`, `\gamma`. Rendere maiuscola la prima lettera del comando per la maiuscola: `\Gamma`, `\Delta`, `\Omega`. Non tutte le maiuscole esistono come comando, perché alcune maiuscole greche sono identiche alle lettere latine. L'alfa maiuscola è solo A, quindi non esiste "\Alpha". Lo stesso vale per beta, epsilon e molti altri. Digitare invece la lettera latina.

Alcune lettere hanno forme varianti con il prefisso "var". `\epsilon` è la forma lunata e `\varepsilon` quella riccia. `\theta` e `\vartheta`, `\phi` e `\varphi`, `\rho` e `\varrho` differiscono allo stesso modo. Nessuna delle due forme è più corretta. Scegli quello che preferisci nel tuo campo e usalo in modo coerente attraverso il documento.

Tutti questi sono comandi in modalità matematica, quindi una lettera greca nel testo corrente viene scritta "$\alpha$". Un semplice `\alpha` nel testo interrompe la compilazione con l'errore coperto in [Dollaro mancante inserito](/learn/missing-dollar/).

## Operatori e relazioni quotidiane

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

La prima riga è aritmetica e di confronto: `\pm` per più-meno, `\cdot` per un punto di moltiplicazione, `\times` per una croce, `\div` per divisione, quindi `\leq`, `\geq` e `\neq` per i confronti, `\ approx` per uguaglianza approssimativa e `\equiv` per identità o congruenza. La seconda riga è il linguaggio degli insiemi: `\in` per l'appartenenza, `\subset` e `\subseteq` per il contenimento, `\cup` e `\cap` per unione e intersezione e `\emptyset` per l'insieme vuoto. Il terzo riguarda le frecce e l'analisi: `\to` per una freccia semplice nei limiti e nei tipi di funzione, `\mapsto` per dove va un elemento, `\Rightarrow` per implicazione, `\infty` per infinito e `\partial` e `\nabla` per derivate parziali e gradienti, che ricevono una trattazione completa in [derivati ​​e integrali](/learn/derivatives-integrals/).

La spaziatura attorno a tutti questi è automatica. LaTeX sa che `\leq` è una relazione e che `\cup` è un'operazione binaria, e li spazia di conseguenza, il che è un buon motivo per usare i comandi invece di incollare simboli Unicode. I nomi vengono visualizzati più velocemente digitando alcune formule nel [parco giochi live](/live/) e osservandole mentre vengono renderizzate.