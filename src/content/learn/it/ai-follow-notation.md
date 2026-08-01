---

title: "Assegna al modello la tua tabella dei simboli"
description: "Macro e un breve elenco di notazioni in modo che le variabili rimangano stabili."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Assegna al modello la tua tabella dei simboli

Chiedi a un modello di abbozzare o rivedere un testo matematico e la prosa di solito ritorna bene mentre la notazione va alla deriva. Il tuo vettore `\vect{x}` restituisce come `\mathbf{x}` in un paragrafo e `\vec{x}` in un altro. L'aspettativa che scrivi come `\E[X]` ritorna come `\mathbb{E}(X)`. Ogni variante viene compilata, quindi nessun errore. L'incoerenza si manifesta solo quando un lettore nota lo stesso oggetto scritto in tre modi diversi. Il modello ha visto tutte le convenzioni di notazione esistenti e, senza istruzioni, esempi di tutte. Datemelo esplicitamente.

## Le macro rendono la notazione applicabile

Il lavoro di base è indipendente dall'intelligenza artificiale e vale comunque la pena farlo: instradare ogni simbolo ricorrente attraverso una macro, in modo che la fonte dica `\vect{x}` anziché `\boldsymbol{x}` grezzo. Ciò dà a ciascun concetto un nome, ti consente di ridisegnare l'intero documento modificando una definizione e fornisce al modello un piccolo vocabolario a cui attenersi invece di inventare varianti. La definizione delle macro è trattata in [Comandi personalizzati](/learn/custom-commands/).

## Cosa incollare nel prompt

Accanto alla tua richiesta effettiva, includi un blocco di notazione compatto: le definizioni delle macro più un commento per riga che indica a cosa serve ciascuna.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Quindi dichiara direttamente il vincolo: "Utilizza solo queste macro per questi concetti. Non introdurre nuove notazioni per qualsiasi cosa elencata e se hai bisogno di un simbolo che non è elencato, dillo invece di inventarne uno." I modelli seguono istruzioni concrete e verificabili molto meglio di un vago "abbina il mio stile". Per un articolo completo, mantieni il blocco come breve commento di notazione vicino al preambolo in modo che rimanga aggiornato e pronto per essere incollato.

## Verificare meccanicamente

Il livello macro rende il controllo economico. Se ogni vettore deve essere `\vect{...}`, qualsiasi `\mathbf{` o `\vec{` grezzo nell'output del modello è una violazione che puoi trovare con una ricerca di testo invece di rileggere i calcoli. Esegui quella ricerca su tutto ciò che incolli, correggi i ritardatari e la notazione rimane uniforme, indipendentemente dal numero di modifiche assistite dal modello che arrivano sul foglio.

## All'interno di Oleafly

L'[assistente in Oleafly](/learn/oleafly-ai/) legge i file di progetto, incluso il preambolo in cui risiedono le tue macro, quindi di solito raccoglie i comandi definiti senza che gli venga detto. L'istruzione esplicita aiuta ancora: vedere che una macro esiste è più debole che sentirsi dire che è obbligatoria. Aggiungi una riga alla tua richiesta ("usa le macro di notazione dal preambolo") e rivedi la differenza rosso/verde prima delle modifiche. Ciò continua ad allontanarsi dalla fonte.