---

title: "Elenchi degli autori, ordine et al."
description: "Cosa et al. mezzi, convenzioni sull'ordine degli autori per campo e il meccanismo del credito."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Elenchi degli autori, ordine ed et al.

L'elenco degli autori sembra la parte più semplice di un articolo. In realtà è un piccolo registro dei crediti denso con regole specifiche per il campo. Fraintenderlo è un classico errore da principiante.

## Cosa "et al." significa

"Et al." è latino, abbreviazione di *et alii*, "e altri". Quando una citazione dice "Vaswani et al. 2017", significa Vaswani più gli autori rimanenti, senza nome per brevità. È una convenzione di citazione, non un giudizio: gli altri autori contano altrettanto, semplicemente non c'è spazio per elencare ogni volta otto nomi.

Gli stili di citazione vengono troncati meccanicamente. Molti stili nominano fino a due o tre autori, quindi passano a "First et al." oltre quello. Il tuo stile bibliografico lo gestisce automaticamente, il che è un motivo in più per [lasciare che BibTeX gestisca le citazioni](/learn/add-citations/) invece di digitarle a mano.

## L'ordine dell'autore è un codice e il codice varia in base al campo

| Convenzione | Dove | Come leggerlo |
|---|---|---|
| Il primo autore ha fatto di più | La maggior parte di CS, biologia, medicina | La prima posizione è il premio |
| L'ultimo autore è il PI | Scienze di laboratorio, gran parte di ML | Autore senior che guida il gruppo e il finanziamento |
| Alfabetico | Teoria CS, matematica, economia | L'ordine non contiene alcuna informazione |

Questo è importante quando si leggono i CV attraverso i campi: una posizione centrale in un campo in ordine alfabetico non dice nulla, mentre in un campo del primo autore segnala un ruolo di supporto. In caso di dubbi su un articolo specifico, non dedurre troppo. Quando scrivi il tuo, concorda l'ordine in anticipo, idealmente prima che inizi la scrittura. Le controversie sull'ordine dell'autore al momento della presentazione sono un genere davvero miserabile di dramma accademico.

## Il cast di simboli di supporto

I blocchi degli autori moderni contengono annotazioni aggiuntive:

- **Autore corrispondente**, spesso contrassegnato dal simbolo di una busta o da un asterisco: la persona che gestisce l'invio e risponde alle email dei lettori.
- **Pari contributo**, solitamente un pugnale o un asterisco con una nota a piè di pagina come "Questi autori hanno contribuito in parti uguali." Comune quando due persone co-dirigono veramente il lavoro.
- **Affiliazioni**, abbinate ai numeri in apice quando gli autori abbracciano più istituzioni.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Ciascuna classe della sede ha il proprio markup dell'autore, quindi copia il modello dal modello. I meccanismi generali dell'argomento principale si trovano nella [lezione sul frontespizio](/learn/title-page/).

## ORCID: il tuo ID permanente

I nomi si scontrano e cambiano. Un iD ORCID è un identificatore persistente (un numero di 16 cifre su orcid.org) che ti segue attraverso i cambi di nome, le istituzioni e ogni J. Smith nel tuo campo. Molte riviste ora ne richiedono uno dall'autore corrispondente. Registrati una volta, allegalo ai contributi e il record della tua pubblicazione rimarrà inequivocabile per tutta la vita.

## L'unica regola che non cambia mai

Qualunque sia la convenzione di ordinamento, la paternità stessa ha una norma condivisa: tutti quelli elencati hanno contribuito in modo significativo al lavoro e tutti coloro che hanno contribuito in modo significativo sono elencati. La paternità di doni e la paternità di fantasmi sono entrambe una cattiva condotta nella maggior parte dei codici etici. L'ordine è la politica; l'elenco è integrità.