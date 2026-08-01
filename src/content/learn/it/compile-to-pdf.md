---

title: "Perché compili più di una volta"
description: "File ausiliari, passaggi bibliografici e perché i riferimenti vengono stampati ?? alla prima corsa."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Perché compili più di una volta

Prima o poi compilerai un documento, aprirai il PDF e troverai `??` dove dovrebbe esserci un numero di figura o una citazione. Niente è rotto. Una singola compilazione è un passaggio sul file e alcune informazioni non possono essere realmente conosciute in un passaggio.

Ecco il problema in miniatura. A pagina 2 scrivi "vedi Figura \ref{fig:results}", ma quella figura finisce a pagina 7. Quando il motore compone la pagina 2, non ha ancora raggiunto la pagina 7, quindi non ha idea di quale numero otterrà la figura. Lo stesso vale per il sommario, che necessita del numero di pagina di ogni sezione prima ancora che la prima pagina sia terminata.

## Come il motore lo risolve

Un motore LaTeX legge il tuo file `.tex`, risolve ogni macro e scrive un PDF. Accanto al PDF scrive anche piccoli file di supporto: `.aux` per etichette e citazioni, `.toc` per il sommario, `.bbl` per la bibliografia formattata. Questi file sono note che il motore lascia per se stesso in futuro.

1. Al primo passaggio, il motore compone il testo e scrive ogni "\label" e "\cite" che incontra nel file ".aux", stampando "??" ovunque abbia bisogno di un numero che non conosce ancora.
2. Se citi qualcosa, uno strumento bibliografico (bibtex o biber) legge il file `.aux`, cerca ogni citazione nel tuo database `.bib` e scrive l'elenco di riferimenti formattato in un file `.bbl`.
3. Al secondo e talvolta al terzo passaggio, il motore rilegge i file di supporto, quindi i riferimenti incrociati, le voci del sommario e le etichette delle citazioni alla fine si risolvono in numeri reali.

Le configurazioni moderne eseguono questi passaggi automaticamente, quindi in pratica raramente digiti tu stesso i comandi. Ma conoscere il ciclo spiega il sintomo: un nuovo `??` dopo aver aggiunto un'etichetta o una citazione significa semplicemente che i file di supporto non sono ancora stati aggiornati e un'altra compilazione risolve il problema.

## Motori in una linea ciascuno

Diversi programmi possono svolgere il ruolo di "motore". pdfLaTeX è la scelta classica con il più ampio supporto per journal. XeLaTeX aggiunge Unicode completo e ti consente di utilizzare i caratteri installati sul tuo sistema. LuaLaTeX parla anche Unicode e incorpora un linguaggio di scripting per pacchetti avanzati. Tectonic è un motore moderno che scarica i pacchetti su richiesta la prima volta che ne hai bisogno. Oleafly lo raggruppa in modo che un nuovo progetto venga compilato senza prima installare una distribuzione TeX.

Per la maggior parte dei documenti le differenze contano poco; scegli ciò che il tuo modello o la tua sede si aspetta e vai avanti. Vedi [motori confrontati](/learn/engines-compared/) quando devi scegliere deliberatamente.

## Quando qualcosa effettivamente fallisce

Una compilazione fallita scarica un lungo registro e l'istinto naturale è quello di leggerlo dal basso verso l'alto. Resisti. Leggi il primo errore nel registro e correggi solo quello; gli errori successivi sono molto spesso rumori a cascata causati dal primo. Se i riferimenti continuano a stampare `??` dopo due compilazioni consecutive riuscite, il solito colpevole è un errore di battitura nel nome `\label` o `\ref` piuttosto che un passaggio mancato.