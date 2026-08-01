---

title: "Beyond LaTeX Workshop: un editor di ricerca sulla tua macchina"
description: "Un editor di ricerca appositamente creato con intelligenza a livello di progetto, SyncTeX, correzione di bozze offline, compilatori in bundle, Git reale e citazioni. VS Code + LaTeX Workshop possiede ancora ricette, telecomando e il mercato delle estensioni."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) in VS Code è eccellente. Libero, MIT, mantenuto con cura. Se la tua settimana si basa su ricette di compilazione in formato libero, texdoc, Docker/WSL/remote, Live Share o il marketplace con estensione completa, mantieni quello stack. È costruito per quella vita.

Questo post è per quando desideri un'app incentrata sui documenti: documenti multi-file, compilatori, PDF, Git, citazioni, figure e correzione di bozze già collegati insieme. Gratuito e open source (AGPL). LaTeX, Typst, Markdown. Cartelle semplici. Nessun conto.

Mappa delle funzionalità e scorciatoie: [Proveniente da LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## L'editore

CodeMirror 6 con un indice a livello di progetto su LaTeX, Typst, Markdown e BibTeX.

Cosa ottieni effettivamente ogni giorno:

- Vai alla definizione, trova riferimenti, rinomina etichette e macro (avvisi di collisione)
- Controlli in tempo reale per riferimenti non funzionanti, citazioni errate, include mancanti (`\cref`, `\eqref`, riferimenti di intervallo, ...)
- Viste locali + struttura del progetto; filtra e salta
- Completamenti per chiavi, percorsi e macro definiti dal tuo progetto (`\newcommand`, forme di argomenti xparse)
- Supporto per `.tex`, `.ltx`, `.sty`, `.cls`; frammenti di argomenti; controlli ambientali
- TexLab per LaTeX (configurazione opt-in); Tinymist spedisce per Typst
- Diagnostica unificata: sintassi, compilazione, servizio linguistico, riferimenti, citazioni, ortografia, grammatica
- Anteprime matematiche KaTeX dal vivo; la fonte rimane modificabile
- Harper + Hunspell offline solo in prosa (comandi e matematica mascherati)
- Modalità visiva per strutture comuni; Vim; comandi barra; schede multifile
- Il completamento dei comandi in base al pacchetto da un ampio corpus arriva dopo (dati MIT di LaTeX Workshop, forniti con attribuzione)

Area di lavoro PDF: scorrimento continuo, pagine affiancate, ricerca, struttura, finestra staccabile. SyncTeX bidirezionale tra file di capitoli. La mappatura funziona ancora mentre è in sospeso una ricostruzione. L'ultimo PDF valido rimane attivo. Annulla il set di sorgenti compilato e l'anteprima può diventare corrente senza una ricompilazione completa.

CI su scala di libro: manoscritto di circa 6.200 righe, matematica multifamiliare, capitoli, citazioni, correzione di bozze, budget prestazionali su scorrimento/digitazione/incolla/annulla/completa/ricompila/SyncTeX.

LaTeX Workshop è una potente estensione in un IDE generale. Oleafly spedisce questo ciclo di documenti già assemblato, quindi non stai collegando lo stesso stack dalle impostazioni e dalle scelte del mercato ogni semestre.

## Compilatori nell'app

Tectonic (LaTeX) e Typst vengono forniti con l'app. Ribasso tramite Pandoc gestito quando ne hai bisogno. Per prima cosa compilare la cache dei pacchetti; successivamente, le build memorizzate nella cache funzionano offline. La modalità offline può bloccare il compilatore nella cache.

Compilazione automatica (rimbalzato, cancellabile, ultime vittorie). Ricompilazione `Cmd/Ctrl-Invio`. Pulsante di arresto. Carte di errore umanizzate sulla linea. Ultimo PDF valido durante l'esecuzione di una build più recente.

Ricette, catene latexmk, shell-escape e `.latexmkrc` personalizzati rimangono nella timoneria di LaTeX Workshop. La maggior parte dei documenti e delle tesi necessitano solo di un motore supervisionato affidabile.

Modelli: 23 principianti in bundle (IEEE, ACM, Elsevier, Beamer, tesi, curriculum, Typst Blanks, ...) più 99 in pacchetti scaricabili. Salva qualsiasi progetto come modello. Generazione opzionale di modelli AI quando viene impostato un modello.

## Libreria, Git, strumenti di ricerca

Progetti come libri: colore della copertina, badge del motore, lignaggio del fork, anteprima al passaggio del mouse dell'ultima pagina PDF, segnalibri, ricerca `/docs` in ogni documento. Fork conserva la cronologia completa di Git per una riscrittura rischiosa accanto alla copia di invio.

Vero Git dal primo giorno. Staging, differenze affiancate (albero di lavoro modificabile), scarta, ripristina. Checkpoint automatici dopo compilazioni riuscite e modifiche inattive; L'intelligenza artificiale esegue il checkpoint prima della prima scrittura. GitHub facoltativo (PAT o OAuth del flusso del dispositivo). Il terminale "git log" corrisponde all'app.

Incolla DOI / arXiv / titolo → dedupe → `.bib` → `\cite`. Importazione batch BibTeX, RIS, EndNote, Zotero RDF. Ricerca di citazioni su arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Compositore di diagrammi per TikZ modificabile. Validatore, tabelle, equazioni, ricerca di laboratorio, scadenze, PDF-to-LaTeX, image-to-LaTeX con un modello di visione.

## IA opzionale

Spento finché non lo configuri. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Chiavi crittografate su disco. Le richieste vanno al fornitore che hai scelto.

L'assistente modifica, compila, legge i registri, estrae testo PDF, ricerca la letteratura, mantiene i piani. Le scritture sono differenze di approvazione. Le eliminazioni necessitano di una conferma separata. Ask-AI in linea su una selezione. MCP di loopback per Claude Code, Cursor e amici. Con l'intelligenza artificiale disattivata, l'editor, la compilazione, Git e le citazioni continuano a funzionare.

## Verifica preliminare, esportazione, privacy

Preflight: struttura, riferimenti non definiti, etichette duplicate, anteprima di estrazione in stile parser, risultati orientati allo screen reader. Ogni indicatore di rischio viene fornito con un contesto sufficiente per poterlo verificare da solo invece di fidarsi di un punteggio della scatola nera.

Esporta: PDF sempre; DOCX/HTML/Markdown quando Pandoc è disponibile; PowerPoint per i mazzi; EPUB per libri; ZIP di origine per il trasferimento.

Nessun account Oleafly. Nessuna telemetria del prodotto. I rapporti sugli arresti anomali aprono un problema GitHub precompilato che esamini. Rete per pacchetti, modelli, AI ospitata, citazioni, aggiornamenti, GitHub. La modifica, la compilazione memorizzata nella cache, la grammatica, il controllo ortografico e Git locale funzionano offline.

## Quando LaTeX Workshop è ancora adatto

- Ricette in formato libero, latexmk, shell-escape, `.latexmkrc`
- texdoc nell'editor
- Docker, WSL, sviluppo remoto
- Condivisione dal vivo e modifica multiutente dal vivo
- Vivere all'interno del mercato VS Code per il lavoro non documentale

Oleafly è una versione beta pubblica. I pesanti file di classe dell'editore possono ancora far scattare Tectonic; segnalateli.

## Provalo

1. Scarica da
   [pagina delle versioni](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS firmato/autenticato; Windows può utilizzare SmartScreen una volta).
2. Importa il tuo `.tex`, `.bib` e le figure (o inizia da un modello).
3. Compila una volta, poi scrivi su un vero foglio per un giorno.

Mantieni VS Code installato. Gli stessi file funzionano in entrambe le app. Se una giornata su un vero giornale va meglio in Oleafly, sposta più progetti; se le ricette e il telecomando vincono comunque per un determinato albero, lascia quell'albero in Workshop.