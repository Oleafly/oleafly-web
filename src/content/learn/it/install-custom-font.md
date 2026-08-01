---

title: "Un file di caratteri accanto al progetto"
description: "fontspec Percorso per le famiglie otf o ttf locali."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Un file di caratteri accanto al progetto

Supponiamo che la tua tesi utilizzi un carattere che non è installato su tutte le macchine che la compileranno: il laptop di un coautore, un server di compilazione universitario o il tuo computer dopo una reinstallazione. L'installazione del carattere a livello di sistema su ciascuno di essi è fragile e talvolta non consentita. Inserisci i file dei caratteri nella cartella del progetto e punta invece su di essi `fontspec`, in modo che il documento contenga la propria tipografia. Ciò richiede XeLaTeX o LuaLaTeX, poiché `fontspec` non funziona con pdfLaTeX. I motivi sono trattati in [perché le persone passano a XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Cosa fa ogni tasto

`\setmainfont{MyFont}` dichiara la famiglia di testo principale e le assegna il nome base utilizzato per creare i nomi dei file. `Path = ./fonts/` dice a `fontspec` di cercare i file in una cartella `fonts` all'interno del progetto, relativa al file `.tex` principale, invece di chiedere al sistema operativo. "Extension = .otf" indica il tipo di file una volta, quindi non è necessario ripeterlo per file. Usa `.ttf` se è quello che hai.

I restanti tasti mappano le forme dei caratteri sui file. In ognuno di essi, `*` si espande nel nome di base, quindi `UprightFont = *-Regular` si risolve in `MyFont-Regular.otf`, e allo stesso modo `MyFont-Bold.otf` e `MyFont-Italic.otf`. Questi nomi devono corrispondere esattamente ai nomi dei file effettivi, comprese le maiuscole, poiché il maiuscolo/minuscolo è importante sui server Linux anche quando il sistema locale lo perdona. Se la famiglia ha il corsivo grassetto, aggiungi `BoldItalicFont = *-BoldItalic`. Una forma che non mappi è una forma che il documento non può utilizzare: senza la riga `BoldFont`, `\textbf` non ha nulla a cui passare e il compilatore avverte che la forma in grassetto non è definita.

La stessa sintassi funziona per le altre famiglie, quindi `\setsansfont` e `\setmonofont` accettano blocchi di opzioni identici per un sans-serif locale o un font di codice.

## Licenza e portabilità

Spedisci i file dei font con il progetto solo se la licenza consente la ridistribuzione. Le licenze aperte come la SIL Open Font License lo consentono e i caratteri di Google Fonts generalmente si qualificano, ma i caratteri commerciali di solito vietano di passare copie ai collaboratori, nel qual caso ogni macchina necessita della propria copia con licenza e dovresti documentare tale requisito nel file leggimi del progetto.

L'errore comune è una mancata corrispondenza silenziosa tra i nomi dichiarati e i file, spesso dopo aver rinominato la cartella o scaricato un peso con un nome diverso. La compilazione si interrompe quindi con "Impossibile trovare il carattere 'MyFont-Regular'". Quando ciò accade, confronta carattere per carattere il nome file previsto per l'errore con il contenuto della cartella e verifica che il "Percorso" punti ancora a dove risiedono i file. Poiché il motore Tectonic in bundle di Oleafly è basato su XeTeX, questo modello locale del progetto funziona lì senza l'installazione di caratteri di sistema.