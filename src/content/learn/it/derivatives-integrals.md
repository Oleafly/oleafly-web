---

title: "Derivati ​​e integrali"
description: "Derivate ordinarie e parziali, integrali definiti, spazi sottili prima dei differenziali."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Derivate e integrali

La notazione di calcolo è il luogo in cui LaTeX inizia a guadagnare terreno. Le frazioni derivate impilate, i segni integrali con limiti e i punti sulle variabili sono tutti uno o due comandi ciascuno. Questa lezione copre la manciata di comandi che producono quasi tutte le derivate e gli integrali che scriverai mai, oltre alla piccola abitudine di spaziatura che separa la carta lucida dalle bozze.

## Derivati

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Una derivata ordinaria è semplicemente una frazione: `\frac{dy}{dx}` somma `dy` su `dx`. Per le derivate parziali, scambia `d` con `\partial`, che stampa il simbolo parziale riccio; `\frac{\partial f}{\partial x}` è la forma standard. I parziali di ordine superiore seguono lo stesso schema, ad esempio `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` fornisce il simbolo del gradiente e poiché è un simbolo ordinario puoi elevarlo come qualsiasi altra cosa: `\nabla^2 f` per il laplaciano. Per la notazione compatta, `f'(x)` usa direttamente la chiave dell'apostrofo e LaTeX converte uno o più segni `'` in numeri primi correttamente rilevati. La notazione punto di Newton per le derivate temporali deriva dai comandi di accento `\dot{x}` e `\ddot{x}`, che posizionano uno o due punti sull'argomento.

Una scelta di stile: alcune riviste vogliono il differenziale `d` in posizione verticale, scritto `\mathrm{d}`. Se il tuo lo fa, definisci `\newcommand{\dd}{\mathrm{d}}` una volta nel preambolo e scrivi `\frac{\dd y}{\dd x}` in modo da poter invertire la scelta in seguito.

## Integrali

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` è il segno integrale e la familiare sintassi dell'apice e del pedice attribuisce i limiti: `_a` per il limite inferiore, `^b` per quello superiore. Nella matematica in linea i limiti si trovano accanto al segno per mantenere la linea compatta; nella matematica di visualizzazione si trovano ancora accanto al segno degli integrali (a differenza delle somme), che è la convenzione standard. Gli integrali doppi e tripli hanno i propri comandi, `\iint` e `\iiint`, che distanziano correttamente i segni ripetuti, insieme a `\oint` per gli integrali di contorno.

Il `\,` prima di `dx` è uno spazio sottile. Senza di esso, "f(x)dx" fa scorrere l'integrando direttamente nel differenziale e l'occhio deve districarli. Lo spazio sottile è una convenzione ampiamente seguita, quindi prendine un'abitudine: integrando, poi `\,`, poi il differenziale.

## Provalo ed è un errore comune

Questi frammenti vengono visualizzati durante la digitazione in [live playground](/live/), che è un modo rapido per controllare uno stack derivato prima che venga inserito in un documento; vedere [nozioni di base sulla modalità matematica](/learn/math-mode/) se i delimitatori `$` e `\[` sono ancora nuovi.

L'errore più comune qui è digitare i derivati ​​di stile `d/dx` con una barra nella matematica di visualizzazione dove si voleva un `\frac` impilato, o dimenticare le parentesi graffe sui limiti di più caratteri: `\int_a^b+1` inserisce solo la `b` nell'apice. Scrivi `\int_a^{b+1}` in modo che venga sollevata l'intera espressione.