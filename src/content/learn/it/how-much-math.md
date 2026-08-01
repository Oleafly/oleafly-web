---

title: "Di quanta matematica ha bisogno un articolo"
description: "Notazione come precisione, disciplina dei simboli, quando numerare le equazioni e coerenza."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# Di quanta matematica ha bisogno un documento

Esattamente quanto richiedono le tue affermazioni, e non un simbolo di più. La matematica in un articolo non è un segnale di sofisticazione; è uno strumento di precisione. Gli articoli meglio scritti utilizzano la notazione dove la prosa sarebbe ambigua e la prosa dove la notazione sarebbe rumore.

## La notazione è precisione, non decorazione

Scrivere $f: \mathcal{X} \to \mathcal{Y}$ quando il lettore ha bisogno di conoscere esattamente il dominio e il codominio. Scrivi "il modello mappa le immagini sulle etichette" quando non lo fanno. Un paragrafo che potrebbe essere un inglese semplice ma è reso come una zuppa di simboli non sembra rigoroso, sembra evasivo e i revisori lo traducono nuovamente per verificare se viene effettivamente affermato qualcosa. Prima di formalizzare un'affermazione, chiedersi: la versione in simboli esclude una lettura errata consentita dalla versione in prosa? In caso contrario, mantieni la prosa.

## Definisci ogni simbolo una volta, quindi non ridefinirlo mai

La memoria di lavoro del lettore è la tua risorsa più scarsa. La disciplina:

- Introdurre ogni simbolo al primo utilizzo: "sia $n$ il numero di campioni."
- Un significato per simbolo per l'intero foglio. Se $\alpha$ è un tasso di apprendimento nella Sezione 3, non può essere un livello di significatività nella Sezione 5.
- Per documenti ricchi di notazioni, una piccola tabella di notazione si ripaga presto.

| Abitudine | Effetto sul lettore |
|---|---|
| Simbolo definito al primo utilizzo | Non deve mai cercare all'indietro |
| Un simbolo, un significato | Non indovinare mai il contesto |
| Tabella di notazione | Ha una mappa per l'intero foglio |

## Numera le equazioni solo quando le fai riferimento

Un numero di equazione è una promessa: "riporteremo su questo". Numerare tutto seppellisce le equazioni che contano sotto quelle che non lo fanno.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Fatevi riferimento con `\eqref{eq:loss}`. Per i calcoli di visualizzazione che non citi mai, usa `\[ ... \]` o gli ambienti contrassegnati da asterisco e salta il numero. Il meccanismo dei riferimenti è trattato in [riferimenti incrociati](/learn/cross-references/).

## Ambienti di teoremi, tutto d'un fiato

Se il tuo articolo dimostra qualcosa, racchiudi le affermazioni negli ambienti "teorema", "lemma" e "dimostrazione" invece di mettere in grassetto "Teorema 1" a mano: si numerano, fanno riferimenti incrociati in modo pulito e segnalano esattamente ciò che viene affermato rispetto a ciò che è un commento. La configurazione e l'utilizzo vivono in [teoremi e dimostrazioni](/learn/teoremi-prove/).

## La coerenza è metà dell'opera

Scegli le convenzioni e mantienile per l'intero articolo:

- Vettori in grassetto ($\mathbf{x}$) o con freccia, mai entrambi.
- Matrici maiuscole grassetto, scalari corsivo minuscolo.
- Imposta su lavagna o calligrafica ($\mathbb{R}$, $\mathcal{D}$), in modo coerente.
- Stessa convenzione nelle figure e nelle tabelle del testo.

Le macro personalizzate rendono la coerenza economica: definisci `\newcommand{\vx}{\mathbf{x}}` una volta e un cambio di notazione tardivo è una modifica di una riga invece di una ricerca su tutto il foglio.

## Calibrazione in base alla sede

Una sede teorica si aspetta dichiarazioni formali e prove complete. Una sede applicata si aspetta una configurazione chiara del problema e forse una funzione di perdita. Leggi tre documenti accettati dalla sede di destinazione e abbina la loro densità. Per i meccanismi di scrittura di tutto ciò, inizia con [modalità matematica](/learn/math-mode/) e mantieni il [cheatsheet dei simboli matematici](/learn/math-symbols-cheatsheet/) aperto in una scheda.