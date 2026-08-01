---

title: "La figura che fugge dalla sezione"
description: "Barriere galleggianti, dimensioni e posizionamento di ultima istanza."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# La figura che fugge dalla sezione

Metti una figura alla fine della Sezione 4 e questa viene stampata a metà della Sezione 5, oppure si accumula con altre tre alla fine del capitolo. Le figure sono float: LaTeX tratta la loro posizione nell'origine come un punto di partenza, non come una destinazione, e le sposta per mantenere le pagine piene. Anche i galleggianti devono apparire in ordine, quindi una figura che non può essere posizionata blocca tutte le figure dietro di essa. Il sistema generale di posizionamento è trattato in [dove atterrano effettivamente i galleggianti](/learn/position-figures/). Questa lezione è la scala di escalation per quando un float finisce in un posto che non puoi accettare.

## Passo uno: controlla le opzioni di posizionamento

Assicurati che l'ambiente indichi "[htbp]", non solo "[h]". Le lettere concedono il permesso di posizionare il float qui, nella parte superiore di una pagina, in fondo o su una pagina float dedicata. Concedere solo "h" è la causa più comune di una cifra fuori controllo, perché quando la pagina corrente non ha spazio, LaTeX non ha spazio legale da nessuna parte e porta avanti il ​​float indefinitamente.

## Passaggio due: sposta il codice

Un galleggiante può spostarsi più tardi rispetto alla sua posizione di origine ma mai prima. Se la figura appare troppo tardi, sposta l'ambiente in alto nel sorgente, idealmente subito prima del paragrafo contenente il suo primo `\ref`. Questa modifica risolve una percentuale sorprendente di reclami sul posizionamento.

## Fase tre: recintare la sezione

Il pacchetto `placeins` fornisce `\FloatBarrier`, un comando che forza il posizionamento di tutti i float in sospeso prima che il testo continui:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Metti la barriera alla fine di una sezione e nessuna figura da quella sezione potrà penetrare in quella successiva. LaTeX può inserire spazio verticale aggiuntivo per svuotare i float, che di solito è un prezzo accettabile vicino a un'interruzione di sezione.

## Fase quattro: il martello H

Il pacchetto `float` aggiunge uno specificatore "H" maiuscola che rimuove completamente il float:

```latex
\usepackage{float}
\begin{figure}[H]
```

Una cifra "[H]" viene stampata esattamente dove si trova il suo codice, come un grande paragrafo. Il costo è che LaTeX non riesce più a bilanciare la pagina attorno ad esso, quindi potresti ottenere un ampio spazio vuoto quando la figura non si adatta allo spazio rimanente. Trattatelo come ultima risorsa per uno o due float ostinati, non come impostazione predefinita.

## Passaggio cinque: rimpicciolire la figura

I float molto grandi vengono posticipati perché poche pagine hanno spazio per essi. Ridurre `width=0.9\textwidth` a `0.7\textwidth`, o tagliare gli spazi bianchi dal file immagine, spesso consente a LaTeX di posizionare una figura che aveva spinto alla fine del capitolo.

Un'abitudine che vale la pena mantenere: esegui questa accordatura una volta, dopo che il testo è stabile. Ogni paragrafo che aggiungi o elimini rimescola le pagine, quindi l'operazione di posizionamento durante la stesura è uno sforzo che dovrai ripetere.