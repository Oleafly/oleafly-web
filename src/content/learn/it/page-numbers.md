---

title: "Numeri di pagina attivati ​​o disattivati"
description: "semplice, vuoto, romano contro arabo, sopprimendo i numeri sul frontespizio."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Numeri di pagina attivati ​​o disattivati

I numeri di pagina appaiono per impostazione predefinita in `article`: le classi standard utilizzano lo stile di pagina `plain`, che centra il numero in fondo a ogni pagina. Di solito va bene e non ci pensi mai. Le tre situazioni in cui ci pensi sono nascondere il numero sul frontespizio, disattivare completamente la numerazione e passare dai numeri romani a quelli arabi in un documento più lungo.

## Nascondere il numero sul frontespizio

Un frontespizio con un solo "1" in basso sembra incompiuto. La correzione è una riga posizionata subito dopo l'impostazione del titolo:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` cambia lo stile della pagina solo per la pagina corrente e `empty` è lo stile integrato che non stampa nulla nell'intestazione o nel piè di pagina. L'ordine è importante: deve venire dopo `\maketitle` sulla stessa pagina, perché è `\maketitle` stesso a resettare lo stile della pagina. Tieni presente che la pagina conta ancora; la pagina successiva sarà numerata 2. Se usi `\begin{titlepage}...\end{titlepage}` invece di `\maketitle`, il numero verrà soppresso e la pagina successiva inizierà da 1.

## Stili e sistemi di numerazione

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Queste due coppie di comandi controllano cose diverse e mescolarle è il classico inciampo. `\pagestyle{...}` controlla dove appare il numero e cosa lo circonda: `plain` dà il numero del piè di pagina centrato, `empty` rimuove intestazioni e piè di pagina da ogni pagina da quel punto in poi. Non dice nulla su come appare il numero.

`\pagenumbering{...}` controlla come viene scritto il numero: `roman` produce i, ii, iii, mentre `arabic` produce 1, 2, 3. Esistono anche `Roman` per I, II, III e `alph` per a, b, c, anche se raramente ne avrai bisogno. `\pagenumbering` inoltre reimposta il contatore delle pagine su 1. Questo ripristino è una funzionalità, non un bug: è ciò che consente a una tesi di numerare la prefazione da i a vi e quindi di iniziare il capitolo uno a pagina 1.

Se vuoi il pieno controllo sul posizionamento, come il numero in un angolo o abbinato a un titolo corrente, questo è il lavoro del pacchetto fancyhdr piuttosto che di questi integrati. Vedi [teste e piedi in corsa](/learn/headers-footers/).

## L'errore comune

Scrivendo `\pagestyle{empty}` quando volevi dire `\thispagestyle{empty}` rimuovi silenziosamente i numeri dall'intero documento e potresti non notarlo finché un revisore non ti chiederà perché le tue pagine non sono numerate. Ricorda la regola: `\thispagestyle` è un'eccezione di una pagina, `\pagestyle` è un passaggio a livello di documento.

Fronte tesi: [Guida romano/arabo](/learn/front-matter-page-numbers/).