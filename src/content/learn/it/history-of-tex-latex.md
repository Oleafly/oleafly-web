---

title: "TeX, LaTeX e 45 anni di bellissimi documenti"
description: "Come uno scienziato informatico infastidito nel 1978 costruì il sistema di composizione su cui la ricerca continua ancora."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX e 45 anni di bellissimi documenti

Ogni strumento che utilizzerai per scrivere articoli discende dalla frustrazione di un uomo per le brutte bozze. La storia è breve e spiega molto sul perché la scrittura di ricerca funziona in questo modo.

## 1978: Knuth si arrabbia

Donald Knuth, uno scienziato informatico di Stanford, stava scrivendo la sua epica serie di libri *The Art of Computer Programming*. Quando l’editore passò dalla tradizionale tipografia metallica ai primi sistemi digitali, le nuove bozze apparivano terribili, soprattutto quelle matematiche. La risposta di Knuth fu gloriosamente sproporzionata: mise in pausa i libri e passò anni a costruire il proprio sistema di composizione, **TeX** (pronunciato "tech", la X è un chi greco), pubblicandolo nel 1978.

TeX era un programma che accettava testo semplice con comandi di markup e produceva pagine tipograficamente eccellenti: spaziatura matematica perfetta, interruzioni di riga eleganti dei paragrafi, tutto funziona. Knuth alla fine ne ha congelato il nucleo e offre un controllo di taglia per ogni bug trovato. Ne sono stati rivendicati pochissimi.

##1984: Lamport lo rende utilizzabile

Raw TeX è potente ma di basso livello, come il linguaggio assembly per le pagine. Nel 1984 Leslie Lamport (in seguito vincitore del Premio Turing per i sistemi distribuiti) pubblicò **LaTeX**, un livello amichevole in alto: invece di posizionare le cose manualmente si scrive `\section{Introduzione}` e `\cite{knuth78}` e si lascia che sia il sistema a gestire la numerazione, i riferimenti e il layout. LaTeX è ciò che quasi tutti intendono oggi quando dicono di "scrivere in TeX". Il tuo [primo documento](/learn/first-document/) è un documento LaTeX.

## Perché è sopravvissuto a quattro decenni

Gli elaboratori di testi andavano e venivano; LaTeX è rimasto, per noiosi, ottimi motivi:

- **Matematica.** Niente riesce a comporre bene le equazioni, comunque. Vedi [modalità matematica](/learn/math-mode/).
- **Testo normale.** Un file .tex del 1985 si apre oggi e funziona in modo pulito con il controllo della versione.
- **Automazione.** Numerazione, riferimenti incrociati e bibliografie funzionano solo a 300 pagine.
- **Modelli.** Gli editori codificano il loro esatto stile house come file di classe, quindi ogni invio risulta identico. Questo è il motivo per cui [ACM, IEEE e amici](/learn/acm-ieee-and-friends/) ti forniscono tutti modelli .tex e perché i giornali vogliono ancora sorgenti .tex da poter compilare nel proprio layout.

## La famiglia dei motori, in un soffio

Il motore TeX originale ha generato successori moderni: **pdfTeX** ha aggiunto l'output PDF diretto, **XeTeX** ha aggiunto Unicode e caratteri di sistema e **LuaTeX** ha aggiunto un linguaggio di scripting all'interno del motore. Per lo più scegli semplicemente quello che il tuo modello si aspetta. Le differenze pratiche riguardano [quale motore per questo progetto](/learn/engines-compared/).

##2023: entra Typst

**Typst** è il primo serio sfidante moderno: un nuovo linguaggio di composizione costruito da zero con una sintassi più pulita, compilazione istantanea e messaggi di errore più semplici. È davvero piacevole e cresce rapidamente. I suoi limiti sono l'altro lato della forza di LaTeX: quarant'anni di pacchetti e, soprattutto, l'accettazione da parte degli editori. Oggi le sedi vogliono .tex, quindi LaTeX rimane il linguaggio di invio mentre Typst è adorabile per note, report e qualsiasi cosa di cui controlli l'output. Oleafly compila LaTeX, Typst e Markdown fianco a fianco, così puoi usarli dove brilla senza cambiare app.

## L'asporto

TeX è il motore, LaTeX il linguaggio che tutti scrivono, Typst il giovane rivale e i diari il motivo per cui la vecchia guardia persiste. Dove questi si inseriscono tra Overleaf, editori e gestori di riferimento è l'argomento di [il toolbox per la scrittura della ricerca, allora e adesso](/learn/research-tools-landscape/).