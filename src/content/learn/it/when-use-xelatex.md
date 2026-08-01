---

title: "Perché le persone passano a XeLaTeX"
description: "Caratteri di sistema, script complessi, modelli di specifiche dei caratteri."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Perché le persone passano a XeLaTeX

LaTeX è un linguaggio, ma diversi motori lo compilano e differiscono in ciò che possono fare. Il motore tradizionale è pdfLaTeX, mentre i due moderni sono XeLaTeX e LuaLaTeX. Il motivo principale per cui le persone passano a XeLaTeX sono i caratteri: pdfLaTeX utilizza solo caratteri confezionati appositamente per TeX, mentre XeLaTeX carica qualsiasi carattere OpenType o TrueType installato sul tuo sistema, indirizzato con il suo nome ordinario.

## I tre motivi per cambiare

Il primo è l'accesso diretto ai caratteri di sistema. Con il pacchetto `fontspec`, la scelta del carattere è una riga leggibile e non è necessario che esista alcun pacchetto di caratteri specifico per TeX per il carattere tipografico desiderato. Sia che l'obiettivo sia `\setmainfont{Inter}` per un aspetto moderno o Times New Roman per i requisiti di un giornale, il meccanismo è lo stesso:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` richiede XeLaTeX o LuaLaTeX; sotto pdfLaTeX si verifica semplicemente un errore. I caratteri possono anche viaggiare all'interno della cartella del progetto anziché nel sistema, come mostrato in [un file di caratteri accanto al progetto](/learn/install-custom-font/).

Il secondo è Unicode nativo e script complessi. XeLaTeX legge direttamente l'input UTF-8 e gestisce i sistemi di scrittura che pdfLaTeX non può, inclusi arabo, devanagari, cinese, giapponese e coreano, con una forma adeguata e, attraverso il pacchetto "polyglossia", corretta sillabazione e direzione per lingua. Se il tuo documento mescola script o anche solo cita un nome con segni diacritici insoliti, solo questo decide il motore.

Il terzo sono i modelli che decidono per te. Molti moderni modelli di CV, tesi e presentazioni caricano `fontspec` o `polyglossia` nelle prime righe e tali modelli vengono compilati solo su XeLaTeX o LuaLaTeX. Se un modello scaricato fallisce immediatamente con un errore che menziona `fontspec`, la soluzione è cambiare motore, non modificare il modello.

## A cosa rinunci

I compromessi sono modesti ma reali. Alcuni pacchetti specifici di pdfLaTeX non sono applicabili, in particolare l'espansione dei caratteri di `microtype`, che XeLaTeX supporta solo parzialmente. Anche le compilazioni vengono eseguite un po' più lentamente. Alcune pipeline di riviste più vecchie presuppongono ancora pdfLaTeX, quindi controlla le istruzioni della sede prima di inviare un manoscritto creato con XeLaTeX. LuaLaTeX condivide il carattere e le funzionalità Unicode e aggiunge lo scripting Lua. Tra i due, scegli il modello o il nome della sede. I documenti costruiti su `fontspec` solitamente vengono compilati su entrambi.

## Scegliere in pratica

Una regola ragionevole è utilizzare pdfLaTeX quando il modello di una sede lo targetizza e XeLaTeX per tutto ciò in cui scegli i caratteri: tesi, CV, diapositive e documenti multilingue. Il motore in bundle di Oleafly è basato su XeTeX (Tectonic), quindi i documenti `fontspec` vengono compilati lì senza alcuna configurazione del motore. L'errore comune è mischiare le epoche, ad esempio caricare `fontspec` insieme a pacchetti di font solo pdfLaTeX come `newtxtext`. Scegli un sistema di caratteri per documento e la domanda del motore per lo più risponderà da sola.