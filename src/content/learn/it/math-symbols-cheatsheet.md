---

title: "Carta da scrivania simbolo"
description: "Accenti, operatori grandi, set di numeri e delimitatori elastici su un'unica pagina."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Carta da scrivania simbolo

Questa pagina è una scheda di riferimento piuttosto che una lezione. Accenti, grandi operatori, insiemi di numeri e delimitatori che coprono la maggior parte della matematica quotidiana, tutto in un unico posto. Ogni comando qui funziona solo in modalità matematica e gli insiemi di numeri necessitano di `\usepackage{amssymb}` nel preambolo. Per l'alfabeto greco e le relazioni di base, vedere [Simboli greci e quotidiani](/learn/greek-letters/). Per sapere come funziona la modalità matematica, inizia con [nozioni di base sulla modalità matematica](/learn/math-mode/).

## Accenti

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Comando | Rende come | Significato convenzionale |
| --- | --- | --- |
| `\cappello{x}` | x con accento circonflesso | Stimatori, vettori unitari, operatori |
| `\bar{x}` | x con barra | Campione significa, coniugati complessi |
| `\tilde{x}` | x con tilde | Approssimazioni, variabili trasformate |
| `\vec{x}` | x con freccia | Vettori |
| `\dot{x}`, `\ddot{x}` | uno o due punti | Derivate prime e seconde |
| `\widehat{xyz}`, `\overline{xyz}` | accento allungato | Accenti su espressioni con più lettere |

Gli accenti semplici si adattano a una singola lettera; le varianti "wide" e "over" si estendono per coprire tutto ciò che è tra le parentesi graffe.

## Grandi operatori

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Comando | Significato |
| --- | --- |
| `\somma_{i=1}^n` | Somma con limiti inferiore e superiore |
| `\prod_{i=1}^n` | Prodotto |
| `\int_a^b` | Integrale definito |
| `\oint` | Integrale di contorno |
| `\lim_{x \to 0}` | Limite |
| `\max_{x}`, `\inf_{x}` | Massimo, minimo su una variabile |

I limiti si attaccano con la normale sintassi dell'apice e del pedice, racchiusi quando più lunghi di un carattere. Nella matematica di visualizzazione, le somme, i prodotti e i limiti posizionano i loro limiti sopra e sotto il simbolo. Gli integrali tengono il loro da parte. Questa è la convenzione standard.

## Set di numeri

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Questi sono i numeri naturali, interi, razionali, reali e complessi in grassetto sulla lavagna. L'alfabeto `\mathbb` e i suoi parenti sono trattati in [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Delimitatori

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` e `\right` aumentano il loro delimitatore all'altezza del materiale racchiuso, quindi le parentesi attorno a una frazione alta la avvolgono invece di ritagliarla all'altezza del testo. Devono venire in coppia. Per mostrare solo un lato, chiudi con `\right.` e il partner invisibile soddisfa l'abbinamento. Le parentesi graffe sono caratteri speciali, quindi le parentesi graffe impostate vengono scritte `\{` e `\}`. Le parentesi angolari per i prodotti interni sono "\langle" e "\rangle", mai i segni di minore e maggiore della tastiera, che sono simboli di relazione con forma e spaziatura sbagliate.

Qualsiasi riga di questa carta può essere incollata nel [parco giochi live](/live/) per vedere il modulo renderizzato accanto alla fonte.