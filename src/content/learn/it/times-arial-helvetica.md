---

title: "Times, Arial, stack tipo Helvetica"
description: "I giornali di mappatura newtx, helvet o fontspec lo richiedono ancora."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, stack tipo Helvetica

Le linee guida di riviste e conferenze richiedono ancora abitualmente Times per il corpo del testo o Arial per le cifre, decenni dopo che quei caratteri hanno smesso di essere la prima scelta estetica di chiunque. In LaTeX ci sono due modi per soddisfare tale requisito e quale dei due si applica dipende dal tuo motore. Il classico pdfLaTeX non può caricare i file Times New Roman o Arial effettivi, quindi utilizza cloni compatibili con la metrica forniti come pacchetti. XeLaTeX e LuaLaTeX caricano i caratteri di sistema reali tramite `fontspec`.

## Il percorso del pacchetto

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

"newtxtext" cambia il carattere del testo in un clone di Times e "newtxmath" fornisce la matematica corrispondente. L'abbinamento è importante: cambia solo il carattere del testo e le equazioni rimangono nel Computer Modern predefinito. Un paragrafo del Times accanto a Computer Modern math è immediatamente visibile. "newtx" è il successore mantenuto dei vecchi pacchetti "times" e "txfonts", che dovresti evitare nei nuovi documenti. I vecchi stack lasciavano la matematica non convertita e alcuni producono i caratteri bitmap descritti in [testo sfocato nel visualizzatore PDF](/learn/fuzzy-font-pdf/).

"helvet" fornisce un clone di Helvetica come famiglia sans-serif, che sostituisce anche Arial, poiché Arial è stato progettato per corrispondere alle metriche di Helvetica. Il caricamento non modifica il carattere del documento, poiché il corpo del testo utilizza la famiglia serif. La riga `\renewcommand{\familydefault}{\sfdefault}` esegue questo cambiamento: `\familydefault` è la famiglia che LaTeX usa per il testo ordinario, e impostandola su `\sfdefault` rende l'intero documento simile a Helvetica. Ometti quella riga se hai bisogno solo di intestazioni sans-serif o etichette di figure. Se Helvetica è leggermente grande accanto al carattere del testo, `\usepackage[scaled=0.92]{helvet}` lo allinea.

## Il percorso fontspec

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

In XeLaTeX o LuaLaTeX, `fontspec` indirizza i font per nome e li carica dal sistema operativo, quindi imposta il Times New Roman autentico come famiglia principale (serif) e l'Arial autentico come famiglia sans. I caratteri devono essere effettivamente installati sulla macchina. Ciò morde quando un documento si sposta tra computer o in CI. Un font che viaggia con il progetto evita il problema, come mostrato in [un file di font accanto al progetto](/learn/install-custom-font/). La matematica è ancora una volta una questione separata, gestita da "unicode-math" o mantenendo accanto "newtxmath". I compromessi del motore sono trattati in [perché le persone passano a XeLaTeX](/learn/when-use-xelatex/).

## La regola pratica

Prima di scegliere uno dei percorsi, controlla se il file della classe della sede imposta già i caratteri. La maggior parte lo fa. Impilare i propri pacchetti di caratteri sopra una classe che ha parlato produce nella migliore delle ipotesi avvisi. Aggiungi pacchetti di caratteri solo ai documenti la cui classe lascia a te la scelta.