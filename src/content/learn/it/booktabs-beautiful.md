---

title: "Tabelle a tre regole"
description: "toprule, midrule, bottomrule e saltare le linee verticali."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Tabelle a tre regole

Apri un qualsiasi diario ben composto e guarda le tabelle. Quasi tutti seguono lo stesso disegno: una regola in alto, una regola sotto l'intestazione, una regola in basso e nient'altro. Nessuna linea verticale, nessuna griglia. Questo è lo stile "booktabs", che prende il nome dal pacchetto che lo implementa, e il passaggio ad esso è solitamente il più grande aggiornamento visivo che puoi apportare alle tabelle LaTeX. Il pacchetto fornisce tre comandi che si associano alle tre regole:

```latex
\toprule
...
\midrule
...
\bottomrule
```

In una tabella completa appaiono così:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Cosa sostituiscono le regole

Senza `booktabs`, le persone disegnano linee con `\hline` e barre verticali nella specificazione della colonna, come in `{|l|c|c|}`. Il risultato è una gabbia: ogni cella racchiusa in una scatola, con il testo angusto rispetto alle regole perché `\hline` non aggiunge respiro. I comandi "booktabs" sostituiscono "\hline" con regole che contengono un riempimento verticale incorporato, e "\toprule" e "\bottomrule" sono leggermente più pesanti di "\midrule", quindi la tabella ha una cornice visibile e una divisione interna più leggera. Quella spaziatura e differenza di peso è l'intero trucco. I dati hanno spazio, l'intestazione è chiaramente separata e nulla compete con i numeri.

Le regole verticali vengono semplicemente omesse. L'allineamento delle colonne mostra già al lettore dove finisce una colonna e inizia quella successiva, e le linee verticali per lo più aggiungono inchiostro senza aggiungere chiarezza. La documentazione di "booktabs" arriva addirittura a rifiutarsi di supportarli.

## Regole parziali per intestazioni raggruppate

Quando un'intestazione si estende su più colonne, ad esempio "Punteggi" che si trova sopra Precisione e F1, utilizza `\cmidrule` per sottolineare solo quelle colonne:

```latex
\cmidrule(lr){2-3}
```

L'intervallo "{2-3}" indica quali colonne copre la regola e l'opzione "(lr)" taglia leggermente le estremità sinistra e destra in modo che le regole vicine non si uniscano in un'unica lunga riga. Questo si accoppia con `\multicolumn`, mostrato in [celle che si estendono su righe o colonne](/learn/merged-cells/).

## Numeri e allineamento

Una tabella di misurazioni si legge meglio quando i punti decimali sono allineati. Il pacchetto "siunitx" fornisce un tipo di colonna "S" che allinea automaticamente i numeri sul marcatore decimale, quindi "0.9" e "0.88" si posizionano correttamente uno sotto l'altro anche con conteggi di cifre diversi. Vale la pena adottarlo una volta che le tabelle contengono dati reali.

L'errore comune è mescolare i sistemi: un `\hline` qui, un `\midrule` là e una specifica di colonna con le barre rimaste da un modello. Scegli lo stile a tre regole e applicalo a ogni tabella del documento. La coerenza è la maggior parte di ciò che rende lo stile intenzionale. Una guida completa al `table` float circostante si trova in [una tabella che assomiglia a un tavolo di carta](/learn/create-table/).