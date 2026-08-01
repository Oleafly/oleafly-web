---

title: "Formule e strutture chimiche"
description: "Reazioni mhchem e uno schizzo di chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Formule e strutture chimiche

La notazione chimica combatte le impostazioni predefinite di LaTeX. La modalità matematica mette in corsivo i simboli degli elementi come se fossero variabili e la modalità testo non ha alcun pedice. Due pacchetti dividono il lavoro. "mhchem" compone formule e reazioni partendo dalla semplice notazione chimica, mentre "chemfig" disegna diagrammi strutturali.

## Formule e reazioni con mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

L'opzione "version=4" seleziona la sintassi corrente. Tutto ciò che è chimico va dentro `\ce{...}`, che legge il suo contenuto nel modo in cui lo scrive un chimico. In `\ce{H2O}` il 2 diventa automaticamente un pedice e i simboli degli elementi rimangono in posizione verticale, come richiede la convenzione. Nella reazione, il segno "+" ottiene la spaziatura corretta, il segno "->" diventa una freccia di reazione e il 2 prima di CO viene riconosciuto come coefficiente stechiometrico, quindi rimane a grandezza naturale sulla linea di base.

La stessa notazione si ingrandisce. Le cariche corrono come apici, quindi `\ce{SO4^2-}` fornisce solfato con la sua carica 2-. Gli stati della materia si trovano tra parentesi, come in `\ce{H2O(l)}`; le frecce di equilibrio si scrivono `<=>`; e `\ce{^{14}C}` inserisce un numero isotopico prima del simbolo. `\ce` funziona sia in modalità testo che matematica, quindi una formula può essere inserita in una frase senza delimitatori aggiuntivi.

## Strutture con chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` disegna strutture da un codice lineare compatto. Gli atomi sono scritti come i loro simboli e "-" traccia un legame con l'atomo successivo. Un numero tra parentesi imposta la direzione del legame in incrementi di 45 gradi in senso antiorario da est: "[2]" punta verso l'alto e "[6]" verso il basso. Le parentesi aprono i rami dell'atomo corrente, quindi "C(-[2]H)(-[6]H)" fa crescere un idrogeno verso l'alto e uno verso il basso mentre la catena principale continua verso destra. L'esempio è il metano disegnato piatto: un carbonio centrale legato a quattro idrogeni. I legami doppi e tripli sono scritti `=` e `~` ed esiste una sintassi dell'anello dedicata per le strutture cicliche e aromatiche.

## Note pratiche

Mantieni i due strumenti nelle loro corsie. Utilizza "mhchem" per tutto ciò che si legge da sinistra a destra come una formula o un'equazione e "chemfig" quando il punto è la geometria della molecola. Entrambi si compilano con un motore LaTeX standard e nessun programma di disegno esterno.

Il solito errore dei principianti è scrivere formule in modalità matematica semplice. `$H_2O$` viene compilato, ma imposta la H e la O in corsivo come variabili, il che è sbagliato per convenzione. `\ce{H2O}` produce la forma verticale con meno digitazione. Entrambi i pacchetti possono essere provati nel [parco giochi live](/live/).