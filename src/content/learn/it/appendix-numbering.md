---

title: "Appendici che si rinumerano in modo pulito"
description: "appendice, capitoli A/B, contatori che rimangono coerenti."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Appendici che si rinumerano in modo pulito

Un'appendice contiene materiale che supporta il testo principale ma lo interromperebbe: lunghe dimostrazioni, strumenti di rilevazione, tabelle aggiuntive, dettagli implementativi. I lettori si aspettano che le appendici contengano le lettere A, B, C anziché continuare con i numeri dei capitoli, e si aspettano che il materiale all'interno segua l'esempio, quindi una figura nell'Appendice A è la Figura A.1, non la Figura 47. In LaTeX si tratta di un singolo passaggio, non di un lavoro di ristrutturazione.

## L'interruttore

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` è una dichiarazione, non un ambiente: non c'è niente da chiudere. Dal punto in cui appare, i contatori di sezionamento si azzerano e passano alle lettere. Nelle classi "report" e "book", ogni "\chapter" successivo diventa Appendice A, Appendice B e così via, e una "\section" interna diventa A.1. Scrivi ancora solo il testo della tua intestazione; l'etichetta "Appendice A" e le scritte provengono dalla classe, esattamente come facevano i numeri dei capitoli prima del cambio.

In `article`, che non ha capitoli, `\appendix` viene invece rinominato `\section`: la prima sezione dopo diventa Appendice A. Tutto a valle rimane coerente automaticamente. L'indice elenca i titoli con lettere e una `\label` posta in un'appendice si risolve attraverso `\ref` in "A" o "A.2" senza alcuna gestione speciale.

## Cosa si rinumera e cosa no

Nel "rapporto" e nel "libro", le figure, le tabelle e le equazioni sono numerate all'interno dei capitoli, quindi prendono la lettera gratuitamente: la prima figura dell'Appendice B è la Figura B.1. In "article" questi contatori percorrono continuamente l'intero documento e "\appendix" non li tocca, quindi la numerazione delle equazioni continua semplicemente. Questo è normale per un articolo breve; combattilo solo se una sede richiede esplicitamente numeri con prefisso A.

## Quando vuoi di più

Il pacchetto `appendice` aggiunge perfezionamenti che mancano al semplice interruttore. Il suo ambiente `appendici` può stampare la parola "Appendice" in ogni intestazione e nel sommario (`\usepackage[toc,titletoc,titolo]{appendice}`) e può inserire una pagina separatore che annuncia le appendici. Per una tesi il cui modello non lo gestisce già, queste opzioni evitano il lavoro manuale.

Un errore comune è scrivere tu stesso l'etichetta nell'intestazione, come in `\chapter{Appendice A: Prove extra}`. La classe aggiunge la propria etichetta, quindi l'output recita "Appendice A Appendice A: Prove extra". Dai all'intestazione solo il titolo e lascia che il meccanismo di numerazione faccia il suo lavoro. Se hai una singola appendice, la sola "Appendice A" è una questione di stile; la maggior parte dei luoghi lo accettano e alcuni preferiscono un `\chapter*{Appendice}` senza lettere.