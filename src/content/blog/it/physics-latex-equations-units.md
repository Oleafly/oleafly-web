---

title: "Tesi di fisica: equazioni, unità e sanità mentale multi-file"
description: "Notazione, siunitx, progetti multicapitolo, journal trap a due colonne e abitudini di compilazione offline per studenti di fisica e astronomia."
date: 2026-06-20
tags: [physics, thesis, math]
---

I manoscritti di fisica contengono più matematica per pagina rispetto alla maggior parte dei campi. Va bene
finché un capitolo finito a metà interrompe l'intera compilazione perché un'etichetta è stata spostata,
o fino a quando ogni coautore non inventa una diversa convenzione sui vettori in grassetto.

Si tratta di una configurazione pratica per capitoli di master/dottorato, note di collaborazione e diario
proposte che necessitano ancora di due colonne.

## File multipli dall'inizio

Anche una tesi breve beneficia di un file root e il capitolo include:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Usa `\includeonly{capitoli/metodi}` durante la bozza in modo da non ricostruire
tre capitoli per risolvere un'equazione. Dettagli:
[un file root, molti capitoli](/learn/split-chapter-files/).

Mantieni le figure in "figure/cap2/" e dai nomi alle equazioni con etichette che riconoscano i capitoli
(`eq:ch2-hamiltonian`) quindi le fusioni non entrano in collisione.

## Le unità non sono testo

Scrivi `$v = 3.0\,\mathrm{m\,s^{-1}}$` a mano se devi, oppure carica `siunitx`
e utilizzare `\qty{3.0}{m.s^{-1}}`. I diari differiscono per spaziatura e spazi sottili; scegliere
un percorso del pacchetto e attenersi ad esso. Gli stili misti sembrano due autori che mai
incontrato.

Per le tabelle di valori, i tipi di colonna "siunitx" allineano i decimali e mantengono le unità
intestazioni coerenti. Non mescolare `m/s` e `ms^{-1}` nello stesso foglio senza a
motivo indicato nei metodi.

## Dirac, vettori e convenzioni audaci

I gruppi quantistici e di materia condensata spesso necessitano della notazione di Dirac. Pacchetti come
`fisica` o macro dedicate per `\ket`, `\bra`, `\braket` battere ad hoc
combinazioni di angoli. I gruppi di meccanica classica discutono su grassetto vs freccia
vettori. Documentare la convenzione nel preambolo e rifiutare eccezioni ad hoc
metà capitolo.

Vedi [Notazione Dirac](/learn/physical-braket/) e [bold math](/learn/bold-math/).

Definire gli operatori una volta (`\DeclareMathOperator`) quindi gli operatori differenziali e
le funzioni con nome non si spostano nel carattere.

## Numerazione e rimandi

Equazioni numeriche che citerai; lasciare il resto non numerato. Una pagina di
"(1)(2)(3)..." è più difficile da leggere di un breve racconto con due righe contrassegnate.
Usa `\eqref` per equazioni ed etichette stabili. Controllo dei riferimenti a livello di progetto
rileva un'etichetta eliminata prima che lo faccia l'advisor.

Teoremi e lemmi (se li usi) dovrebbero condividere uno schema di numerazione chiaro
il resto del modello del dipartimento. Vedi anche
[teoremi e dimostrazioni](/impara/teoremi-dimostrazioni/).

## Trappole del diario a due colonne

APS, IOP e classi simili modificano il comportamento float. Una cifra che sembrava bella
in "articolo" può rifiutarsi di sedersi accanto al paragrafo che lo cita. Compilare
contro la vera lezione in anticipo, non il fine settimana prima della presentazione.

Impostazioni predefinite che aiutano:

- larghezza della figura circa `0,45\textwidth` o `\columnwidth` in due colonne
- figure larghe come "figura*" (spesso solo nella parte superiore della pagina)
- derivazioni lunghe in `multiline` / `split` o spostate in un'appendice

Non ridurre il carattere dell'equazione finché non diventa illeggibile. Avviso dei revisori.

## Figure: grafici e schemi

Esporta i grafici come PDF da matplotlib/gnuplot/Root quando puoi. I PNG raster lo sono
per fotografie e immagini del rilevatore, a dpi sufficienti. Gli schemi possono essere TikZ o
grafica vettoriale esterna; mantieni la fonte nel repository. Ritaglia gli spazi bianchi prima
"\includegraphics".

## Offline quando la rete del laboratorio muore

Le linee di luce e le camere bianche non sono note per il Wi‑Fi stabile.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) spedisce il
compilatori e mantiene SyncTeX, l'area di lavoro PDF e l'anteprima matematica locali. Ogni
project è un vero Git con checkpoint automatici, quindi una modifica errata dell'equazione è una di queste
ripristinare. Il PDF viene comunque creato quando un editor del browser non viene caricato.

Puoi assemblare uno stack offline simile con TeX Live, un visualizzatore PDF e Git by
mano. In ogni caso, la tesi non dovrebbe dipendere da un captive Portal per la ricompilazione
capitolo tre.

## Collaborazione

Possiedi i capitoli per autore quando possibile. Condividi un foglio di annotazione. Esegui il documento completo
viene compilato settimanalmente in modo che i riferimenti tra capitoli falliscano presto. Telecomando Git privato per
risultati non pubblicati; pubblico solo quando la politica di collaborazione lo consente.

## Appendici e materiale supplementare

Le derivazioni lunghe e le trame extra appartengono ad un'appendice o ad un supplemento separato
PDF quando il diario è a due colonne e limitato in pagine. Riferimento incrociato esplicito
("vedi Appendice B") con etichette reali. Non dare per scontato che l'arbitro aprirà una zip
di figure sciolte senza didascalie.

## Quando il consulente modifica su carta

Applica il markup al sorgente TeX lo stesso giorno, se puoi. Le pile di carta diventano vecchie.
Se due consulenti segnalano notazioni contrastanti, aggiorna il foglio di preambolo e invia un
PDF con notazione di una pagina in modo che l'argomento non venga riproposto in ogni bozza.

## Pre-invio

Foglio di notazione completo, vettori e parentesi graffe/ket coerenti, unità tramite un unico sistema
("siunitx" o uno stile manuale concordato). I capitoli dovrebbero includere in modo pulito con
Risoluzione di `\ref`/`\eqref`. Compila il vero diario o la lezione di tesi senza font
sorprese. Le figure soddisfano le regole dpi e colore; le didascalie stanno da sole. Archivio
sorgente e PDF con un hash di commit per la versione inviata.

Scrivere di fisica è già abbastanza difficile. La toolchain dovrebbe rimanere noiosa.