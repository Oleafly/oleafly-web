---

title: "Formato ACM in pratica"
description: "La classe acmart: sigconf, metadati, revisione anonima e sorprese alla prima compilazione."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Il formato ACM in pratica

ACM ha consolidato tutti i suoi modelli in un'unica classe, "acmart", nel 2017. Una classe, molti volti: l'opzione del formato decide se riceverai un documento di conferenza a due colonne o un articolo di giornale a colonna singola.

## Scegli l'opzione di formato

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` è ciò che desideri per quasi tutte le conferenze ACM. Il CFP della sede nomina l'opzione esatta; fidati più dell'abitudine. Se stai ancora decidendo tra le famiglie di sedi, [ACM, IEEE e amici](/learn/acm-ieee-and-friends/) le confronta.

## I metadati sono obbligatori

A differenza di IEEEtran, acmart rifiuta di apparire corretto (e l'editore rifiuta di accettarlo) senza i suoi blocchi di metadati:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

I concetti CCS provengono da un selettore sul sito web ACM che genera sia la riga XML che quella `\ccsdesc`. Incollateli alla lettera. Le parole chiave vanno in "\keywords", non in astratto. Il blocco del formato di riferimento ACM (quella casella di citazione grigia a pagina uno) viene generato automaticamente da "\acmConference", "\acmYear" e amici, che l'editore compila o verifica al momento della fotocamera.

## Invio in doppio cieco

La maggior parte delle conferenze ACM vengono esaminate in modo anonimo. Un'opzione lo gestisce:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

"anonymous" nasconde autori e affiliazioni, "review" aggiunge numeri di riga per i revisori. Spegnili entrambi per essere pronti per la fotocamera. La classe gestisce i meccanismi, ma l'anonimizzazione è più grande di una bandiera. Vedi [doppio cieco fatto bene](/learn/anonymization-double-blind/).

## Citazioni: numerate o autore-anno

acmart utilizza natbib sotto e supporta entrambi gli stili:

| Opzione | Risultato |
|---|---|
| predefinito | Numerato: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Anno-autore: (Lovelace, 1843) |

Alcuni SIG impongono l'anno dell'autore (CHI storicamente), altri sono numerati. Ancora: decide la PCP.

## Sorprese alla prima compilazione

acmart è affamato di pacchetti. Aspettatevi questi su una nuova configurazione:

- **Caratteri Libertine.** La classe carica Linux Libertine e Biolinum più `newtxmath`. Su un'installazione minima di TeX questi arrivano come download la prima volta che compili. Il motore Tectonic in bundle di Oleafly li recupera automaticamente al primo utilizzo, quindi la compilazione iniziale richiede più tempo della seconda. E' normale, non è un problema.
- **Regole rigorose per il float.** acmart blocca alcuni pacchetti (come `titlesec`) in modo definitivo e genererà errori se li carichi.
- **`\authorsaddresses{}`** silenzia il fastidioso footer "indirizzi degli autori" nelle bozze.

Se un pacchetto non riesce davvero a risolversi, la soluzione è la solita: [installa il pacchetto mancante](/learn/install-missing-package/).

## Dove trovarlo

Scarica il modello ufficiale dalle pagine degli autori di acm.org o dal sito della tua conferenza e mantieni aggiornato `acmart.cls`. ACM lo aggiorna più volte all'anno e i controlli pronti per la fotocamera vengono eseguiti rispetto alla versione più recente.