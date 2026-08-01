---

title: "Ottieni un TeX funzionante su qualsiasi sistema operativo"
description: "Oleafly con un motore in bundle o un'installazione completa di TeX Live / MiKTeX."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Ottieni un TeX funzionante su qualsiasi sistema operativo

Scrivere LaTeX localmente richiede un sistema TeX: il motore che compila il sorgente più le migliaia di pacchetti da cui dipendono i documenti. Ci sono due modi sensati per ottenerne uno. Una è un'applicazione con il motore integrato, che ti consente di compilare in pochi minuti. L'altra è una distribuzione TeX completa, che installa la completa toolchain da riga di comando che qualsiasi editor può utilizzare. Entrambi i percorsi terminano nello stesso posto: un file `.tex` che si trasforma in PDF sul tuo computer.

## Percorso A: un'app con il motore incluso

Scarica [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) per Mac, Windows o Linux. Raggruppa il motore Tectonic, quindi non esiste un'installazione TeX separata da gestire: apri l'app, crei un progetto e compili. Quando un documento utilizza un pacchetto che non è presente, Tectonic lo recupera su richiesta, il che richiede una connessione di rete la prima volta che un determinato pacchetto viene utilizzato e nulla successivamente. Questo percorso è adatto a chiunque voglia scrivere articoli invece di amministrare un'installazione TeX, e lascia i normali file `.tex` e `.bib` su disco che qualsiasi altro strumento può leggere.

## Percorso B: una distribuzione TeX completa

L'installazione di una distribuzione fornisce `pdflatex`, `xelatex`, `lualatex` e il gestore pacchetti come comandi di sistema. Su un Mac, installa MacTeX, che è TeX Live in pacchetto per macOS; se il download di più gigabyte non è gradito, BasicTeX è un piccolo nucleo che estendi tramite TeX Live Utility in caso di necessità. Su Windows, MiKTeX è la scelta comune e può installare al volo i pacchetti mancanti durante la compilazione, mentre TeX Live funziona altrettanto bene. Su Linux, installa `texlive-full` dal tuo gestore pacchetti per tutto in una volta, o uno schema più piccolo come `texlive-latex-extra` più lo strumento `tlmgr` per aggiungere pacchetti in un secondo momento. L'installazione completa richiederà del tempo e diversi gigabyte di spazio su disco.

## Verifica l'installazione

Apri un terminale e chiedi a un motore la sua versione:

```bash
pdflatex --version
# or
xelatex --version
```

Un banner di versione significa che la toolchain è sul tuo percorso ed è pronta. Un errore che dice che il comando non è stato trovato di solito significa che le modifiche del programma di installazione al PERCORSO non hanno ancora avuto effetto; riavviare il terminale o disconnettersi e riconnettersi a Windows, risolve il problema.

## Quale strada intraprendere

Scegli l'app se stai iniziando o desideri semplicemente il percorso più breve per un PDF compilato. Scegli una distribuzione completa se hai bisogno di motori specifici, build da riga di comando o integrazione con un editor esistente. I due coesistono senza conflitti, quindi iniziare con il Percorso A e aggiungere successivamente il Percorso B non costa nulla. In ogni caso, il passo successivo è lo stesso: compila [il tuo primo documento](/learn/first-document/).