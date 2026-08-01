---

title: "Quale motore per questo progetto"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, caratteri, adattamento del diario."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Quale motore per questo progetto

Un motore è il programma che trasforma effettivamente il tuo sorgente `.tex` in un PDF. LaTeX stesso è un livello macro che viene eseguito sopra uno e ce ne sono diversi tra cui scegliere. Accettano quasi gli stessi documenti, ma differiscono nel modo in cui gestiscono testo e caratteri Unicode e un modello scritto per un motore può fallire completamente sotto un altro. Scegli una volta per progetto e mantienilo.

| Motore | Unicode | Caratteri di sistema | Note |
| --- | --- | --- | --- |
| pdfLaTeX | Parziale | No | Compatibilità massima del journal |
| XeLaTeX | Sì | Sì (`fontspec`) | Ottimo per documenti poliglotti |
| LuaLaTeX | Sì | Sì | Moderno, scriptabile |
| Tettonica | Xe-like | Sì | Recupero automatico del pacchetto; Oleafly predefinito |

## A cosa serve ciascun motore

pdfLaTeX è il discendente diretto del TeX originale e rimane il presupposto predefinito della maggior parte delle riviste, conferenze e sistemi di invio. È antecedente a Unicode, quindi l'input accentato necessita delle convenzioni `inputenc` e i caratteri sono limitati a caratteri TeX appositamente confezionati. In cambio, è veloce e universalmente supportato e decenni di modelli lo prendono di mira.

XeLaTeX legge UTF-8 in modo nativo e, tramite il pacchetto `fontspec`, utilizza qualsiasi font installato sul tuo sistema per nome, come `\setmainfont{Georgia}`. Ciò lo rende la scelta pratica per documenti che mescolano script, per lingue diverse da quelle dell'Europa occidentale e per chiunque abbia requisiti di carattere specifici. [Quando utilizzare XeLaTeX](/learn/when-use-xelatex/) va più in profondità.

LuaLaTeX offre lo stesso supporto Unicode e font e incorpora il linguaggio di scripting Lua, quindi i pacchetti possono calcolare cose in fase di compilazione che prima erano impossibili. È il successore a lungo termine tra i motori tradizionali, al prezzo di compilazioni un po' più lente.

Tectonic è una versione moderna e autonoma del motore XeTeX. La sua caratteristica distintiva è la gestione automatica delle dipendenze: quando un documento necessita di un pacchetto che non hai, Tectonic lo scarica su richiesta invece di fallire. Oleafly raggruppa Tectonic come motore predefinito esattamente per questo motivo, quindi una nuova installazione compila documenti del mondo reale senza alcuna amministrazione TeX.

## Come decidere

Segui il modello. Se una classe di giornale o un modello di tesi documenta un motore, utilizza quello. I modelli codificano i presupposti del motore in modi che emergono come errori confusi altrove, come descritto in [File di lezioni universitarie che non verranno compilati](/learn/fix-broken-template/). Se il documento è tuo da zero, la regola pratica è semplice: pdfLaTeX quando una sede conservativa compilerà i tuoi sorgenti e XeLaTeX, LuaLaTeX o Tectonic quando hai bisogno di Unicode reale o caratteri reali. Qualunque cosa tu scelga, mantienila per tutta la durata del documento. Piccole differenze di spaziatura e carattere rendono il passaggio a metà progetto uno scarso utilizzo del tempo.