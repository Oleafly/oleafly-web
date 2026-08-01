---

title: "Quel pacchetto non è installato"
description: "tlmgr, MiKTeX e recupero su richiesta con Tectonic o Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Quel pacchetto non è installato

Prima o poi la compilazione si interrompe con una riga come `! Errore LaTeX: file "siunitx.sty" non trovato". Il messaggio significa esattamente quello che dice: il tuo documento ha richiesto un pacchetto, tramite `\usepackage{siunitx}`, e il compilatore non è riuscito a trovare il file `.sty` del pacchetto sulla tua macchina. Non c'è niente che non va nel tuo documento. Le distribuzioni LaTeX non forniscono tutti i pacchetti per impostazione predefinita e la correzione dipende dalla distribuzione eseguita.

##TeX Live

TeX Live, la distribuzione standard su Linux e macOS (come MacTeX), include un gestore di pacchetti chiamato `tlmgr`. Installa il pacchetto mancante da un terminale:

```
tlmgr install siunitx
```

Se è stato installato TeX Live completo, ovvero molti gigabyte, è già tutto presente e questo errore non dovrebbe verificarsi. Di solito appare con gli schemi di installazione più piccoli "base" o "piccoli". Tieni presente che l'argomento di `tlmgr` è il nome del pacchetto, non il nome del file, quindi nessuna estensione `.sty`.

## MiKTeX

MiKTeX, comune su Windows, ha due meccanismi. La sua funzionalità di installazione al volo rileva il file mancante durante la compilazione e si offre di recuperarlo, richiedendolo o procedendo automaticamente a seconda delle impostazioni. In alternativa, apri la console MiKTeX, vai alla scheda Pacchetti, cerca il pacchetto e installalo lì. Se l'installazione al volo sembra bloccare la compilazione, di solito è in attesa di una finestra di dialogo di conferma nascosta dietro un'altra finestra.

## Tettonica

Il motore Tectonic, che Oleafly raggruppa, salta il passaggio manuale: i pacchetti vengono scaricati su richiesta durante la compilazione e atterrano nella cache locale del motore. La prima compilazione che utilizza `siunitx` lo recupera; le compilazioni successive riutilizzano la cache. La prima esecuzione può richiedere più tempo durante il download delle dipendenze ed è necessaria una connessione di rete.

## Durante l'installazione il problema non viene risolto

Se il gestore dei pacchetti segnala che tale pacchetto non esiste, controlla l'ortografia rispetto alla pagina del pacchetto su CTAN, l'archivio centrale dei pacchetti LaTeX su ctan.org. Due disallineamenti rappresentano i casi più ostinati. Innanzitutto, il file e il pacchetto possono avere nomi diversi, perché un pacchetto di distribuzione può contenere diversi file `.sty`. Il problema viene risolto cercando in CTAN il nome esatto del file `.sty` dal messaggio di errore. In secondo luogo, l'errore a volte nomina un file del tuo progetto, come un file di classe che un modello ha dimenticato di includere, e nessun gestore di pacchetti può fornirlo. Il file deve provenire da qualunque posizione provenga dal modello.

Un'ultima nota su un vecchio consiglio: scaricare un file `.sty` solitario da Internet nella cartella del progetto funziona, poiché LaTeX cerca prima la directory corrente, ma congela il pacchetto in una versione casuale e lo nasconde dagli aggiornamenti. Preferisci il gestore pacchetti e mantieni il trucco della copia manuale per le emergenze in prossimità delle scadenze.