---

title: "Note, riferimenti e appendici: chi fa cosa"
description: "Dove appartengono le digressioni, le prove e il materiale in eccesso e chi li legge effettivamente."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Note, riferimenti e appendici: chi fa cosa

Un documento ha tre posti in cui inserire il materiale che non appartiene al flusso principale e ciascuno ha un lavoro distinto. Metti il ​​contenuto giusto nel posto giusto e i lettori rimarranno orientati. Mescolali e il tuo giornale si legge come un cassetto della spazzatura.

## Note a piè di pagina: la cortesia a parte

Una nota a piè di pagina è per qualcosa che vale la pena dire ma che non vale la pena interrompere la frase per: un URL, un chiarimento, un avvertimento, un "ringraziamo un revisore per questa osservazione".

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Usateli con parsimonia. Un articolo con una nota a piè di pagina per paragrafo è un articolo che discute con se stesso. Se il contenuto è essenziale, promuovilo nel testo. Se si tratta di un lavoro precedente citabile, appartiene invece ai riferimenti. E alcune sedi vietano le note a piè di pagina per gli URL a favore di citazioni corrette, quindi controlla il modello.

## Riferimenti: la pista delle prove

Quando citi un'opera, indichi le prove dietro un'affermazione: questo fatto è stato accertato lì, questo metodo è stato introdotto da loro, questo set di dati viene da qui. L'elenco di riferimento è la mappa completa di ciò su cui stai costruendo e i revisori lo controllano attentamente, sia per le voci mancanti che per le affermazioni fissate a citazioni che in realtà non li supportano.

In LaTeX la meccanica è automatica: `\cite{key}` nel testo, una voce nel file `.bib` e la lista si visualizza da sola.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

Il flusso di lavoro completo è in [aggiunta di citazioni](/learn/add-citations/) e [creazione di una bibliografia](/learn/create-bibliography/). Oleafly può compilare una voce `.bib` da una ricerca DOI, che batte gli elenchi degli autori digitati manualmente.

## Appendice: la stanza degli overflow

L'appendice contiene materiale che supporta l'articolo ma ne interromperebbe il flusso: prove complete, tabelle di risultati extra, griglie di iperparametri, modelli di prompt, documentazione del set di dati. La regola è che il documento principale deve essere autonomo. Un lettore che non apre mai l'appendice dovrebbe comunque convincersi; un lettore che lo apre dovrebbe trovare tutti i dettagli che gli sono stati promessi.

```latex
\appendix
\section{Full proofs}
```

Dopo "\appendice", le sezioni si scrivono automaticamente con A, B, C.

## Materiale supplementare: esterno al PDF

Il materiale supplementare è tutto ciò che non può assolutamente vivere in un PDF: codice, dati, video, demo interattive. Molte sedi lo raccolgono come caricamento separato con i propri limiti di dimensione. Trattalo come parte della tua storia sulla riproducibilità e fai riferimento esplicitamente ad esso dalla sezione del metodo in modo che i lettori sappiano che esiste.

## Chi legge effettivamente cosa

| Parte | Comportamento del revisore |
|---|---|
| Note a piè di pagina | Letto di sfuggita, dimenticato in fretta |
| Riferimenti | Scansione per lavori mancanti, in particolare il proprio |
| Appendice | Aperto quando è necessario verificare un reclamo nel documento |
| Supplementare | Aperto dall'unico revisore che esegue il codice |

Cosa significa in pratica: non nascondere mai nulla di essenziale in una nota a piè di pagina o in un'appendice. I revisori giudicano il testo principale e "la risposta era nell'Appendice F" non ha mai ammorbidito una recensione. Metti il ​​tuo materiale migliore dove la scrematura lo troverà e lascia che il retro faccia ciò che sa fare meglio: tenere in silenzio le ricevute.