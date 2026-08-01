---

title: "Spiegazione di ogni \\\\comando nell'universo LaTeX"
description: "Il riferimento globale: centinaia di comandi e ambienti LaTeX, dal kernel ad amsmath, hyperref, TikZ, biblatex e Beamer, ciascuno spiegato in una riga."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Spiegazione di ogni \comando nell'universo LaTeX

Questa pagina definisce ogni comando e ambiente LaTeX che appare in qualsiasi lezione su Oleafly Learn, oltre al vocabolario standard più ampio che incontrerai nei documenti reali. Kernel, amsmath, hyperref, graphicx, booktabs, biblatex, TikZ, Beamer e i pacchetti effettivamente caricati dai ricercatori. Scorri per categoria o cerca nella pagina con Ctrl/Cmd-F il comando che hai appena incontrato. Ogni voce è una riga: cosa fa e, dove conta, da quale pacchetto proviene.

## Classi e configurazione del documento

| Comando | Cosa fa |
| --- | --- |
| `\documentclass{articolo}` | Prima riga di ogni documento: sceglie il layout generale; articolo è la scelta predefinita per i documenti. |
| `\documentclass{rapporto}` | Classe per report più lunghi: aggiunge `\chapter` e inizia l'abstract su una propria pagina. |
| `\documentclass{libro}` | Classe per libri: capitoli, impaginazione fronte/retro, fronte/principale/retro. |
| `\documentclass{lettera}` | Classe per la corrispondenza, con comandi `\opening`, `\closing` e indirizzi. |
| `\documentclass{proiettore}` | Classe per presentazioni di diapositive costruite da ambienti `frame`. |
| `\documentclass[11pt,a4paper]{articolo}` | Opzioni comuni delle classi: dimensione del carattere (10pt, 11pt, 12pt), carta (a4paper, letterpaper), `twocolumn`, `twoside`, `landscape`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Carica un pacchetto nel preambolo per aggiungere funzionalità. |
| `\usepackage[margin=1in]{geometria}` | Imposta i margini della pagina e il formato della carta (geometria). |
| `\titolo{...}` | Memorizza il titolo del documento, stampato successivamente da "\maketitle". |
| `\autore{...}` | Memorizza l'elenco degli autori per `\maketitle`; separare più autori con "\and". |
| `\e` | Separatore tra i nomi degli autori all'interno di `\author{...}`. |
| `\data{...}` | Memorizza la data mostrata da `\maketitle`; `\date{}` lo nasconde, `\date{\today}` mostra oggi. |
| `\oggi` | Stampa la data corrente in fase di compilazione. |
| `\maketitle` | Stampa il cartiglio da "\title", "\author" e "\date". |
| `\grazie{...}` | Allega una nota a piè di pagina al titolo o al nome dell'autore, ad es. per finanziamenti o informazioni di contatto. |
| `\istituto{...}` | Comando di affiliazione dell'autore utilizzato da Beamer e dalla classe Springer LNCS. |
| `\inst{1}` | Indicatore di apice di affiliazione negli elenchi degli autori LNCS e Beamer: "Ada Lovelace\inst{1}". |
| `\parole chiave{...}` | Stampa l'elenco delle parole chiave del documento nell'editoreclassi come acmart e llncs. |
| `\indirizzo{...}` | classe lettera: memorizza l'indirizzo del mittente per la carta intestata. |
| `\firma{...}` | letter class: memorizza il nome stampato sotto la chiusura. |
| `\opening{Caro ...}` | letter class: stampa il saluto e inizia il corpo della lettera. |
| `\closing{Cordiali saluti,}` | letter class: stampa il blocco di firma e di firma. |
| `\LaTeX` | Stampa il logo LaTeX con le lettere sollevate e abbassate. |
| `\TeX` | Stampa il logo TeX con la E abbassata. |
| `\input{file}` | Incolla un altro file .tex al suo posto, come se lo avessi digitato lì. |
| `\include{capitolo1}` | Inserisce un file di capitoli che inizia su una nuova pagina; abilita le compilazioni parziali tramite `\includeonly`. |
| `\includeonly{capitolo1,capitolo3}` | Elenco di preamboli che limita quali file `\include` vengono effettivamente compilati. |
| `\hypersetup{...}` | Configura le opzioni hyperref come i colori dei collegamenti e i metadati PDF. |
| `\AtBeginDocument{...}` | Esegue il codice subito dopo `\begin{document}`, utile per la configurazione tardiva. |
| `\AtEndDocument{...}` | Esegue il codice appena prima della fine del documento. |
| `\makeatletter` | Rende temporaneamente "@" una lettera in modo da poter utilizzare o applicare patch ai comandi interni. |
| `\makeaother` | Ripristina `@` alla normalità dopo "\makeatletter". |
| `\typeout{...}` | Stampa un messaggio nel registro di compilazione e nel terminale, utile per il debug. |
| `\proteggere` | Protegge un comando fragile all'interno di un argomento in movimento come `\caption` o `\section`. |
| `\listfiles` | Comando di preambolo che registra ogni file caricato e la sua versione, per segnalazioni di bug. |

## Struttura e sezionamento

| Comando | Cosa fa |
| --- | --- |
| `\parte{...}` | Divisione di livello più alto, sopra i capitoli, in classi di libri e relazioni. |
| `\capitolo{...}` | Intestazione di capitolo numerata nelle classi di libri e relazioni (non nell'articolo). |
| `\sezione{...}` | Intestazione di primo livello numerata in un articolo. |
| `\sottosezione{...}` | Intestazione numerata un livello sotto "\section". |
| `\sottosottosezione{...}` | Intestazione numerata un livello sotto "\subsection". |
| `\paragrafo{...}` | Intestazione di livello più basso: un titolo in grassetto all'inizio di un paragrafo. |
| `\sottoparagrafo{...}` | Un livello sotto `\paragraph`, raramente necessario. |
| `\sezione*{...}` | La sezione con stelle stampa l'intestazione senza numero o voce di sommario. |
| `\appendice` | Cambia la numerazione in modo che i capitoli o le sezioni successivi diventino Appendice A, B, C. |
| `\appendicepagina` | Stampa una pagina divisoria "Appendici" separata (pacchetto appendici). |
| `\sommario` | Stampa il sommario, creato dai comandi di sezionamento. |
| `\listoffigures` | Stampa un elenco di tutte le didascalie con i numeri di pagina. |
| `\listoftables` | Stampa un elenco di tutte le didascalie della tabella con i numeri di pagina. |
| `\frontmatter` | Cambio di classe libro per le pagine di pre-contenuto: numeri di pagina romani, capitoli non numerati. |
| `\mainmatter` | La classe del libro torna al contenuto principale: numeri di pagina in arabo, capitoli numerati. |
| `\backmatter` | Cambio di classe libro per le pagine finali: i capitoli smettono di essere numerati. |
| `\addcontentsline{toc}{capitolo}{...}` | Aggiunge manualmente una voce al sommario (o un elenco di figure/tabelle). |
| `\addtocontents{toc}{...}` | Scrive materiale arbitrario (come la spaziatura) in un file di contenuti. |
| `\setcounter{secnum Depth}{3}` | Controlla la profondità dei numeri di sezionamento. |
| `\setcounter{toc Depth}{2}` | Controlla la profondità del sommario. |

## Definizione di comandi e ambienti

| Comando | Cosa fa |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Definisce il tuo comando; errori se il nome esiste già. |
| `\renewcommand{...}{...}` | Ridefinisce un comando esistente; errori se non esiste. |
| `\providecommand{...}{...}` | Definisce un comando solo se non è già definito; altrimenti silenziosamente non fa nulla. |
| `\NewDocumentCommand` | Definizione di comandi moderna con argomenti opzionali flessibili (LaTeX3/xparse). |
| `\newenvironment{nome}{codice iniziale}{codice finale}` | Definisce il proprio ambiente con il codice eseguito in "\begin" e "\end". |
| `\renewenvironment{nome}{...}{...}` | Ridefinisce un ambiente esistente. |
| `\ensuremath{...}` | Fa sì che il contenuto matematico di una macro funzioni sia all'interno che all'esterno della modalità matematica. |
| `\DeclareMathOperator{\E}{E}` | Definisce il nome di un operatore verticale; la forma con asterisco pone i limiti sotto (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Forma con asterisco: l'operatore prende i limiti di seguito nella matematica di visualizzazione (amsmath). |
| `\nuovoteorema{lemma}{Lemma}` | Dichiara un ambiente simile a un teorema (amsthm). |
| `\foo` | Nome di esempio per una macro definita dall'utente nella lezione `\newcommand`, non un vero comando LaTeX. |
| `\abs{x}` | Esempio di macro definita dall'utente dalla lezione sui comandi personalizzati che compone le barre dei valori assoluti. |
| `\mat{A}` | Esempio di macro definita dall'utente dalla lezione sui comandi personalizzati per un simbolo di matrice in grassetto. |
| `\vect{v}` | Esempio di macro definita dall'utente dalla lezione sui comandi personalizzati per un simbolo vettoriale in grassetto. |
| `\set{...}` | Esempio di macro definita dall'utente dalla lezione sui comandi personalizzati che compone le parentesi graffe. |
| `\citepair` | Esempio di macro helper per citazione definita dall'utente dalla lezione sui comandi personalizzati, non un comando standard. |
| `\E` | Esempio di operatore definito dall'utente per l'aspettativa, generalmente definito con`\DeclareMathOperator` o `\newcommand`. |
| `\R` | Esempio di macro definita dall'utente per i reali: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Nomi degli operatori per arg max / arg min, definiti in questo corso con `\DeclareMathOperator*` quindi i pedici si trovano sotto. |

## Contatori e lunghezze

| Comando | Cosa fa |
| --- | --- |
| `\newcounter{esempi}` | Crea un nuovo contatore, facoltativamente reimpostato da un genitore: `\newcounter{examples}[section]`. |
| `\setcounter{pagina}{1}` | Imposta il valore di un contatore, qui riavviando i numeri di pagina. |
| `\addtocounter{esempi}{2}` | Aggiunge un valore a un contatore senza stampare nulla. |
| `\stepcounter{esempi}` | Incrementa un contatore di uno. |
| `\refstepcounter{esempi}` | Incrementa un contatore e lo rende il bersaglio per il successivo `\label`. |
| `\value{esempi}` | Legge il valore di un contatore da utilizzare in aritmetica o nei confronti. |
| `\arabo{esempi}` | Stampa un contatore in numeri arabi: 1, 2, 3. |
| `\roman{esempi}`, `\Roman{esempi}` | Stampa un contatore come numeri romani minuscoli o maiuscoli. |
| `\alph{esempi}`, `\Alph{esempi}` | Stampa un contatore in lettere minuscole o maiuscole. |
| `\fnsimbolo{nota a piè di pagina}` | Stampa un contatore come simboli di nota a piè di pagina: asterisco, pugnale e così via. |
| `\newlength{\mygap}` | Crea un nuovo registro di lunghezza. |
| `\setlength{\parskip}{6pt}` | Assegna un valore a un registro di lunghezza. |
| `\addtolength{\textheight}{1cm}` | Aggiunge una lunghezza esistente. |
| `\settowidth{\mygap}{testo}` | Imposta la lunghezza sulla larghezza naturale del testo. |
| `\parindent` | Lunghezza del rientro del paragrafo della prima riga; impostato con `\setlength{\parindent}{0pt}`. |
| `\parskip` | Lunghezza dello spazio verticale tra i paragrafi; impostato con `\setlength`. |
| `\larghezza della linea` | Lunghezza della riga corrente, utile per il dimensionamento: `width=\linewidth`. |
| `\larghezza del testo` | Lunghezza della larghezza del blocco di testo completo sulla pagina. |
| `\textight` | Lunghezza dell'altezza del blocco di testo completo sulla pagina. |
| `\larghezzacolonna` | Larghezza di una colonna in un layout a più colonne. |
| `\baselineskip` | Distanza verticale tra le linee di base di linee consecutive. |
|`\linespread{1.3}` | Ridimensiona l'interlinea (interlinea) per l'intero documento; necessita di `\selectfont` o di un comando di dimensione per avere effetto. |

## Paragrafi, interruzioni di riga e sillabazione

| Comando | Cosa fa |
| --- | --- |
| `\\` | Termina la riga corrente all'interno di paragrafi, tabelle e matrici. |
| `\\[6pt]` | Interruzione di riga con spazio verticale aggiuntivo dopo di essa. |
| `\nuova riga` | Interrompe la riga senza giustificarla e senza consentire un'interruzione di pagina. |
| `\linebreak` | Richiede qui un'interruzione di riga giustificata; l'opzione "[0-4]" imposta l'insistenza. |
| `\nolinebreak` | Scoraggia un'interruzione di riga a questo punto. |
| `\par` | Termina il paragrafo, come una riga vuota nel sorgente. |
| `\noindent` | Sopprime il rientro della prima riga del paragrafo successivo. |
| `\indent` | Forza il rientro della prima riga dove altrimenti verrebbe soppresso. |
| `\-` | Contrassegna un punto di sillabazione consentito all'interno di una parola. |
| `\sillabazione{insieme di dati}` | Elenco di preamboli che insegna a LaTeX come sillabare parole specifiche. |
| `\sciatto` | Allenta le regole di spaziatura in modo che le linee si rompano più facilmente, evitando scatole troppo piene. |
| `\pignolo` | Ripristina rigide regole di spaziatura dopo "\sloppy". |
| `\raggedright` | Allinea a sinistra il testo seguente invece di giustificarlo. |
| `\raggedleft` | Allinea a destra il testo seguente. |
| `\centramento` | Centra tutto ciò che segue all'interno del gruppo corrente, ad es. l'immagine di una figura. |
| `\stessapagina` | Scoraggia le interruzioni di pagina all'interno del gruppo corrente. |
| `\enlargethispage{\baselineskip}` | Rende solo la pagina corrente un po' più alta, per inserire un'altra riga. |
| `~` | Spazio unificatore: "Figura~1" mantiene il numero sulla stessa riga. |

## Spaziatura

| Comando | Cosa fa |
| --- | --- |
| `\quad` | Inserisce uno spazio orizzontale della larghezza di una M maiuscola. |
| `\qquad` | Inserisce il doppio dello spazio di `\quad`. |
| `\enspace` | Inserisce mezzo `\quad` di spazio orizzontale. |
| `\hspazio{1cm}` | Inserisce spazio orizzontale; scompare all'interruzione di riga. |
| `\hspazio*{1cm}` | Spazio orizzontale che sopravvive anche all'interruzione di riga. |
| `\vspazio{1cm}` | Inserisce uno spazio verticale di una determinata lunghezza. |
| `\vspazio*{1cm}` | Spazio verticale che sopravvive anche a un'interruzione di pagina. |
| `\smallskip` | Inserisce un piccolo spazio verticale tra i paragrafi. |
| `\medskip` | Inserisce uno spazio verticale medio tra i paragrafi. |
| `\bigskip` | Inserisce un ampio spazio verticale tra i paragrafi. |
| `\hriempi` | Spazio orizzontale elastico che allontana il contenuto per riempire la linea. |
| `\vriempi` | Spazio verticale elastico che allontana il contenuto per riempire la pagina. |
| `\puntoriempire` | Riempie la riga rimanente con punti, come in un menu o in una riga di contenuto. |
| `\hrulefill` | Riempie la linea rimanente con una riga orizzontale. |
| `\allungamento{2}` | Colla elastica con peso, per spaziatura proporzionale: `\hspace{\stretch{2}}`. |
| `\riempire` | La lunghezza elastica dell'unità; `\hspace{\fill}` è ciò in cui si espande `\hfill`. |
| `\fantasma{testo}` | Occupa esattamente lo spazio del suo argomento ma non stampa nulla. |
| `\hphantom{testo}` | Occupa solo la larghezza del suo argomento, con altezza zero. |
| `\vfantasma{testo}` | Occupa solo l'altezza del suo argomento, con larghezza zero. |
| `\smash{...}` | Stampa il suo argomento ma finge che abbia altezza e profondità pari a zero. |
| `\strut` | Supporto invisibile all'altezza di una linea normale, per uniformare le altezze delle file. |
| `\mathstrut` | La modalità matematica ha le dimensioni di una parentesi, per allineare radicali e frazioni. |

## Scatole e regole

| Comando | Cosa fa |
| --- | --- |
| `\mbox{...}` | Scatola orizzontale infrangibile; mantiene anche il suo contenuto su una riga. |
| `\makebox[3cm][r]{...}` | Riquadro di larghezza impostata con allineamento scelto (l, c, r, s). |
| `\fbox{...}` | Disegna una cornice attorno al suo contenuto. |
| `\framebox[3cm][c]{...}` | Scatola incorniciata di larghezza stabilita con allineamento scelto. |
| `\parbox{5cm}{...}` | Una casella di paragrafo: una mini colonna di testo della larghezza specificata. |
| `\raisebox{2pt}{...}` | Sposta il suo contenuto verso l'alto (o verso il basso con una lunghezza negativa). |
| `\regola{2cm}{0.4pt}` | Disegna un rettangolo pieno; il cavallo di battaglia per le linee personalizzate. |
| `\colorbox{giallo}{...}` | Mette il testo su un riquadro di sfondo colorato (xcolor). |
| `\fcolorbox{rosso}{giallo}{...}` | Scatola colorata con cornice colorata (xcolor). |

## Pagine, numerazione e intestazioni

| Comando | Cosa fa |
| --- | --- |
| `\nuovapagina` | Termina la pagina corrente e ne inizia una nuova. |
| `\clearpage` | Avvia una nuova pagina dopo aver prima svuotato tutte le figure e le tabelle in sospeso. |
| `\cleardoublepage` | Come `\clearpage` ma garantisce anche che la pagina successiva sia una pagina a destra (dispari). |
| `\pagebreak` | Richiede un'interruzione di pagina a questo punto, allungando la pagina a tutta altezza. |
| `\nopagebreak` | Scoraggia un'interruzione di pagina a questo punto. |
| `\pagenumbering{romano}` | Imposta lo stile del numero di pagina (arabo, romano, romano, alph, alph), reimpostando il contatore su 1. |
| `\pagestyle{fantasia}` | Imposta lo stile dell'intestazione/piè di pagina corrente (semplice, vuoto, intestazioni, mieintestazioni, fantasia) per tutte le pagine successive. |
| `\thispagestyle{vuoto}` | Sostituisce lo stile dell'intestazione/piè di pagina solo per la pagina corrente. |
| `\lapagina` | Stampa il numero di pagina corrente; utilizzato all'interno di intestazioni e piè di pagina. |
| `\marginpar{...}` | Inserisce una nota nel margine della pagina accanto alla riga corrente. |
| `\fancyhf{}` | Cancella tutti i campi di intestazione e piè di pagina di fancyhdr prima di impostarne uno personalizzato. |
| `\fancyhead[R]{...}` | Imposta un campo di intestazione fancyhdr, qui quello a destra. |
| `\fancyfoot[C]{\thepage}` | Imposta un campo footer fancyhdr, qui un numero di pagina centrato. |
| `\headrulewidth` | macro fancyhdr per lo spessore del filetto di intestazione; rinnovare a 0pt per rimuovere la linea. |
| `\footrulewidth` | macro fancyhdr per lo spessore del filetto del piè di pagina, 0pt per impostazione predefinita. |
| `\newgeometry{margin=2cm}` | Modifica la geometria della pagina a metà documento (geometria). |
| `\ripristinageometria` | Ritorna alla geometria del preambolo dopo "\newgeometry" (geometria). |

## Caratteri speciali

I dieci caratteri riservati e come stamparli, oltre ai simboli di testo comuni.

| Comando | Cosa fa |
| --- | --- |
| `\%` | Stampa un segno di percentuale (il semplice `%` inizia un commento). |
| `\&` | Stampa una e commerciale (il semplice `&` è il separatore di colonna della tabella). |
| `\#` | Stampa un hash (il semplice `#` contrassegna gli argomenti della macro). |
| `\_` | Stampa un carattere di sottolineatura (il semplice `_` è un pedice matematico). |
| `\{` e `\}` | Stampa le parentesi graffe (gruppo parentesi nude). |
| `\$` | Stampa il simbolo del dollaro (il semplice simbolo `$` attiva/disattiva la modalità matematica). |
| `\textbackslash` | Stampa una barra rovesciata nel testo. |
| `\textasciitilde` | Stampa una tilde nel testo (il semplice `~` è uno spazio unificatore). |
| `\textasciicircum` | Stampa un segno di accento circonflesso nel testo (il semplice `^` è un apice matematico). |
| `\barra di testo` | Stampa una barra verticale nel testo. |
| `\textless`, `\textgreater` | Stampa < e > correttamente in modalità testo. |
| `\ldots`, `\dots` | Puntini di sospensione con spaziatura corretta; `\dots` si adatta in modalità matematica (amsmath). |
| `\textellipsis` | I puntini di sospensione in modalità testo che `\dots` utilizza al di fuori della matematica. |
| `\textemdash`, `\textendash` | Comandi con nome per em e en dash (stesso output di `---` e `--`). |
| `\textquotedblleft`, `\textquotedblright` | virgolette doppie graffe (solitamente digitate come coppie di apici rovesciati e coppie di apostrofi). |
| `\guillemetleft`, `\guillemetright` | Virgolette francesi (ortografia più vecchia: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Pugnale e doppio pugnale nel testo, comuni per le affiliazioni degli autori. |
| `\S` | Segno di sezione, come in S 2.1 di un documento legale. |
| `\P` | Segno di paragrafo (pilcrow). |
| `\libbre` | Segno della sterlina britannica. |
| `\euro` | Segno dell'euro (pacchetto eurosym; il kernel fornisce anche `\texteuro`). |
| `\copyright` | Segno di diritto d'autore. |
| `\testoregistrato` | Segno di marchio registrato. |
| `\texttrademark` | Segno del marchio. |
| `\testogrado` | Segno di laurea: `25\testogrado C`. |
| `\textmu` | Micro verticalefirmare per testo come micron. |
| `\testopermille` | Segno per mille. |

## Accenti e lettere speciali

Per accenti di testo dell'era pdfLaTeX; con l'input XeLaTeX/LuaLaTeX e UTF-8 di solito puoi semplicemente digitare il carattere.

| Comando | Cosa fa |
| --- | --- |
| `\'{e}` | Accento acuto: e-acuto come bar con accento. |
| `` \`{e} `` | Accento grave. |
| `\^{o}` | Accento circonflesso. |
| `\"{u}` | Umlaut/dieresi. |
| `\~{n}` | Accento della tilde, come nella n-tilde spagnola. |
| `\c{c}` | Cedilla, come in francese c-cedilla. |
| `\v{s}` | Caron (hacek), comune nei nomi cechi e croati. |
| `\H{o}` | Doppio accento acuto ungherese. |
| `\k{a}` | Ogonek, come in polacco a-ogonek. |
| `\b{o}` | Accento da bar. |
| `\d{u}` | Accento punto sotto, usato nella traslitterazione. |
| `\r{a}` | Accento dell'anello, come nell'a-ring scandinavo. |
| `\u{o}` | Accento breve. |
| `\.{o}` | Accento punto sopra. |
| `\t{oo}` | Accento di cravatta che unisce due lettere. |
| `\i`, `\j` | I e j senza punto, per impilare gli accenti: `\'{\i}`. |
| `\ae`, `\AE` | La legatura ae, minuscola e maiuscola. |
| `\oe`, `\OE` | La legatura oe, come nell'opera francese. |
| `\ss` | S diesis tedesca (eszett). |
| `\o`, `\O` | O barrata, come nei nomi danesi e norvegesi. |
| `\l`, `\L` | Polacco barrato l. |
| `\aa`, `\AA` | A-ring come lettera autonoma, come nel nome di Angstrom. |

## Caratteri e dimensioni

| Comando | Cosa fa |
| --- | --- |
| `\textbf{...}` | Testo in grassetto. |
| `\testo{...}` | Testo corsivo. |
| `\emph{...}` | Enfasi che si adatta al contesto: corsivo nel testo verticale, verticale nel testo corsivo. |
| `\textsc{...}` | Testo in maiuscoletto. |
| `\texttt{...}` | Testo a macchina da scrivere (monospazio), adatto per codice e nomi di file. |
| `\textrm{...}` | Testo della famiglia romana (serif). |
| `\textsf{...}` | Testo della famiglia Sans-serif. |
| `\textmd{...}` | Peso medio (normale), annullamento in grassetto. |
| `\textup{...}` | Forma eretta, corsivo annullato o inclinato. |
| `\textsl{...}` | Forma inclinata (obliqua), distinta dal vero corsivo. |
| `\textnormal{...}` | Ripristina il carattere predefinito del documento in un solo passaggio. |
| `\sottolineato{...}` | Sottolinea il testo; usare con parsimonia, l'enfasi è solitamente "\emph". |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Dichiarazioni che cambiano la famiglia di caratteri (serif, sans, mono) fino alla fine del gruppo. |
| `\bfseries`, `\mdseries` | Dichiarazioni che passano al grassetto o tornano al peso medio. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Le dichiarazioni cambiano forma: corsivo, obliquo, maiuscoletto, verticale. |
| `\normalfont` | Dichiarazione che ripristina i valori predefiniti di famiglia, serie e forma. |
| `\em` | Forma di dichiarazione di `\emph`: `{\em così}`. |
| `\piccolo` | Il più piccolo dei dieci comandi di dimensione. |
| `\scriptsize` | Seconda dimensione più piccola, approssimativamente di dimensioni pedice. |
| `\footnotesize` | La dimensione utilizzata per le note a piè di pagina. |
| `\piccolo` | Leggermente più piccolo del normale. |
| `\dimensionenormale` | La dimensione base del documento. |
| `\grande`, `\grande`, `\grande` | Uno, due e tre passi più grandi del normale. |
| `\enorme`, `\enorme` | Le due dimensioni standard più grandi. |
| `\fontsize{14}{17}\selectfont` | Imposta una dimensione del carattere arbitraria e un salto della linea di base, quindi lo attiva. |
| `\selectfont` | Attiva l'attributo del carattere in sospesocambiamenti (NFSS). |
| `\textsuperscript{...}` | Testo piccolo in rilievo, come nel primo o nei marcatori in stile nota a piè di pagina. |
| `\textsubscript{...}` | Testo piccolo ridotto in modalità testo. |
| `\familydefault` | Macro che contiene la famiglia di caratteri predefinita; rinnovarlo per cambiare il carattere dell'intero documento. |
| `\sfdefault` | Macro che nomina la famiglia sans-serif; `\renewcommand{\familydefault}{\sfdefault}` rende il documento sans. |
| `\setmainfont{...}` | Imposta il carattere del corpo principale in base al nome in XeLaTeX o LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Imposta il carattere sans-serif per nome in XeLaTeX o LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Imposta il carattere a spaziatura fissa per nome in XeLaTeX o LuaLaTeX (fontspec). |

## Colore (xcolore)

| Comando | Cosa fa |
| --- | --- |
| `\textcolor{rosso}{...}` | Colora una porzione di testo. |
| `\color{blu}` | Modulo di dichiarazione: colora tutto fino alla fine del gruppo. |
| `\definecolor{brand}{HTML}{2F6F4F}` | Definisce un colore con nome per un uso successivo. |
| `\pagecolor{grigio!10}` | Imposta il colore di sfondo dell'intera pagina. |
| `\rowcolor{grigio!20}` | Colora una riga della tabella (xcolor con l'opzione `table`, tramite colortbl). |
| `\cellcolor{grigio!20}` | Colora una cella della tabella (colortbl). |
| `\rowcolors{2}{grigio!10}{bianco}` | Colori delle righe alternati a partire da una determinata riga (opzione xcolor `table`). |

## Grafica (graphicx)

| Comando | Cosa fa |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Inserisce un file immagine; opzioni chiave: `larghezza`, `altezza`, `scala`, `angolo`, `ritaglio`+`clip`, `pagina`. |
| `\graphicspath{{figure/}}` | Indica a LaTeX in quali cartelle cercare i file immagine. |
| `\rotatebox[origin=c]{90}{...}` | Ruota il suo contenuto di un angolo. |
| `\scalebox{0.8}{...}` | Ridimensiona il suo contenuto in base a un fattore. |
| `\resizebox{5cm}{!}{...}` | Ridimensiona i contenuti in base alla larghezza e/o all'altezza di destinazione; `!` mantiene le proporzioni. |
| `\reflectbox{...}` | Specchia il suo contenuto orizzontalmente. |
| `\includepdf[pages=-]{paper.pdf}` | Inserisce intere pagine da un altro PDF (pdfpages). |

## Accesso alla modalità matematica

| Comando | Cosa fa |
| --- | --- |
| `$...$` | Matematica in linea all'interno di una frase. |
| `\(...\)` | Delimitatori matematici in linea ufficiali di LaTeX, equivalenti a "$...$". |
| `\[...\]` | Equazione visualizzata non numerata sulla propria riga. |
| `$$...$$` | Matematica di visualizzazione TeX semplice; sconsigliato in LaTeX, utilizzare invece `\[...\]`. |
| `x^2`, `x_i` | `^` crea apici e `_` crea pedici; parentesi graffe per script multicarattere: `x^{10}`. |

## Matematica: lettere greche

Tutti questi funzionano solo in modalità matematica. Esistono forme maiuscole dove la capitale greca differisce da quella latina.

| Comando | Cosa fa |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Lettere greche alfa, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Lettere greche epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Lettere greche iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Lettere greche xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Lettere greche ipsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Lettere greche maiuscole da Gamma a Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Lettere greche maiuscole da Sigma a Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Forme varianti di epsilon (quello riccio utilizzato dalla maggior parte dei giornali), theta e pi. |
| `\varrho` `\varsigma` `\varphi` | Forme varianti di rho, sigma (parola finale) e phi (riccio aperto). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Varianti greche corsivo maiuscolo (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Le restanti varianti greche maiuscole corsive (amsmath). |

## Matematica: operatori binari

| Comando | Cosa fa |
| --- | --- |
| `\pm`, `\mp` | Segni più-meno e meno-più. |
| `\times` | Croce di moltiplicazione, utilizzata anche per dimensioni come 3 x 3. |
| `\div` | Segno di divisione (obelus). |
| `\cdot` | Punto centrato per la moltiplicazione. |
| `\ast`, `\star`, `\bullet`, `\circ` | Operatori asterisco, stella, punto elenco e cerchio piccolo; `\circ` è anche composizione di funzioni. |
| `\oplus`, `\ominus` | Più cerchiato (somma diretta, XOR) e meno cerchiato. |
| `\otimes`, `\oslash`, `\odot` | Tempi cerchiati (prodotto tensoriale), barra cerchiata, punto cerchiato. |
| `\cuneo`, `\vee` | Cuneo (AND logico, prodotto esterno) e V (OR logico, unione). |
| `\terra`, `\lor` | Alias ​​di `\wedge` e `\vee` chiamati così per la loro lettura logica. |
| `\cap`, `\tazza` | Imposta i segnali di intersezione e unione. |
| `\setmeno` | Imposta la barra rovesciata della differenza: `A \setminus B`. |
| `\uplus` | Unione con un più, per unione multiinsieme o disgiunta. |
| `\sqcap`, `\sqcup` | Tappo e coppa quadrati si incontrano e si uniscono nella teoria del reticolo. |
| `\amalg` | Amalgamazione (prodotto capovolto), utilizzata per coprodotti. |
| `\dagger`, `\ddagger` | Pugnale e doppio pugnale come operatori matematici, ad es. trasposizione coniugata `A^\pugnale`. |
| `\bigtriangleup`, `\bigtriangledown` | Operatori triangolari, ad es. differenza simmetrica. |
| `\triangleleft`, `\triangleright` | Triangoli laterali, ad es. normale relazione di sottogruppo. |

## Matematica: relazioni

| Comando | Cosa fa |
| --- | --- |
| `\leq`, `\le` | Segno di minore o uguale (`\le` è l'alias breve). |
| `\geq`, `\ge` | Segno di maggiore o uguale (`\ge` è l'alias breve). |
| `\neq`, `\ne` | Segno diverso (`\ne` è l'alias breve). |
| `\ll`, `\gg` | Segni molto meno e molto più grande. |
| `\circa` | Segno approssimativamente uguale. |
| `\sim` | Relazione tilde, letta come 'è distribuito come' o 'è simile a'. |
| `\simeq` | Segno asintoticamente uguale (tilde sopra uguale). |
| `\cong` | Segno congruente a (tilde su due barre), utilizzato per l'isomorfismo. |
| `\equiv` | Segno identico a (tripla barra), utilizzato anche per congruenza. |
| `\propto` | Segno proporzionale a. |
| `\asimp` | Relazione asintoticamente equivalente (curve stacked). |
| `\doteq` | Segno di uguale con un punto, letto come 'si avvicina' o 'si definisce come'. |
| `\prec`, `\succ` | Precede e segue le relazioni, gli ordinamenti curvi. |
| `\preceq`, `\succeq` | Precede o è uguale e succede o è uguale. |
| `\subset`, `\subseteq` | Sottoinsieme proprio e segni di sottoinsieme o uguale. |
| `\supset`, `\supseteq` | Superset proprio e segni di superset o uguale. |
| `\sqsubseteq`, `\sqsupseteq` | Relazioni di sottoinsieme e superinsieme quadrati, utilizzate per l'ordine delle informazioni. |
| `\in`, `\notin` | Imposta l'appartenenza e la sua negazione: `x \in A`. |
| `\ni` | Appartenenza invertita: l'insieme contiene l'elemento. |
| `\vdash`, `\dashv` | Il tornello 'dimostra' e il suo rovescio. |
| `\modelli` | Doppio tornello, implicazione semantica. |
| `\perp` | Relazione perpendicolare/indipendenza. |
| `\parallelo` | Relazione delle barre parallele. |
| `\metà` | Barra verticale con spaziatura delle relazioni, come nella notazione del set-builder o nelle "divisioni". |
| `\non` | Nega la seguente relazione sovrascrivendo una barra: `\not\subset`. |

## Matematica: frecce

| Comando | Cosa fa |
| --- | --- |
| `\a`, `\rightarrow` | Freccia destra, come nella funzione digita `f: A \to B` e limita `x \to 0`. |
| `\gets`, `\leftarrow` | Freccia sinistra, utilizzata anche per l'assegnazione in pseudocodice. |
| `\leftrightarrow` | Freccia singola a due punte. |
| `\Freccia Destra` | Doppia freccia destra, letta come "implica". |
| `\Freccia sinistra` | Doppia freccia sinistra, letta come "è implicito da". |
| `\Leftrightarrow` | Doppia freccia bidirezionale, letta come 'se e solo se'. |
| `\implica`, `\implicito` | `\Rightarrow` e `\Leftarrow` distanziati per la logica (amsmath). |
| `\iff` | `\Leftrightarrow` distanziato per "se e solo se". |
| `\mapsto` | Freccia di mappatura con una barra in coda: `x \mapsto x^2`. |
| `\longmapsto` | Versione lunga di `\mapsto`. |
| `\hookrightarrow` | Freccia destra con coda a gancio, per inclusioni/incorporamenti. |
| `\rightharpoonup` | Arpione destro (mezza freccia), utilizzato per la convergenza debole. |
| `\rightleftharpoons` | Arpioni opposti accoppiati, come nell'equilibrio chimico. |
| `\leadsto` | Freccia destra ondulata, "conduce a" (amssymb). |
| `\freccia su`, `\freccia giù` | Frecce verso l'alto e verso il basso. |
| `\freccia sugiù` | Freccia verticale a doppia punta. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Frecce verticali a doppia linea. |
| `\nearrow`, `\searrow` | Frecce diagonali nord-est e sud-est, ad es. aumentare/diminuire fino a un limite. |
| `\swarrow`, `\nwarrow` | Frecce diagonali sud-ovest e nord-ovest. |
| `\longrightarrow`, `\longleftarrow` | Frecce singole lunghe. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Doppie frecce lunghe. |
| `\xrightarrow{f}` | Freccia destra estensibile con un'etichetta in alto, che cresce per adattarsi (amsmath). |
| `\xleftarrow{f}` | Freccia sinistra estensibile con un'etichetta in alto (amsmath). |

## Matematica: grandi operatori

| Comando | Cosa fa |
| --- | --- |
| `\sum_{i=1}^{n}` | Segno di sommatoria con limiti. |
| `\prod_{i=1}^{n}` | Segno del prodotto con limiti. |
| `\coprod` | Segno di coprodotto (prodotto capovolto). |
| `\int_0^1` | Segno integrale con limiti. |
| `\iint` | Doppio segno integrale (amsmath). |
| `\iiiint` | Triplo segno integrale (amsmath). |
| `\oint` | Segno integrale del contorno (anello chiuso). |
| `\bigcap`, `\bigcup` | Grande intersezione e unione su una famiglia di insiemi. |
| `\bigsqcup` | Grande coppa quadrata (unione disgiunta). |
| `\bigvee`, `\bigwedge` | Grande OR e grande AND su un set di indici. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Più, tempi e punto cerchiati grandi per somme indicizzate e prodotti di strutture. |
| `\biguplus` | Grande unione con più su un set di indici. |
| `\limiti` | Forza i seguenti sub/apici dell'operatore sopra e sotto: `\int\limits_0^1`. |
| `\nolimits` | Forza i sub/apice lateralmente invece che sopra e sotto. |

## Matematica: delimitatori e dimensionamento

| Comando | Cosa fa |
| --- | --- |
| `\sinistra( ... \destra)` | Coppia di delimitatori con dimensioni automatiche che crescono per adattarsi al contenuto. |
| `\sinistra.` e `\destra.` | Partner invisibile quando si desidera solo un lato di una coppia di dimensioni, come nelle barre di valutazione. |
| `\medio|` | Delimitatore centrale con dimensione automatica tra "\left" e "\right" (come nella probabilità condizionale). |
| `\big( \Big( \bigg( \Bigg(` | Delimitatori dimensionati manualmente, da leggermente grandi a molto grandi. |
| `\bigl(...\bigr)` | Delimitatori dimensionati con spaziatura apertura/chiusura corretta (anche `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Staffe da pavimento. |
| `\lceil`, `\rceil` | Staffe a soffitto. |
| `\langle`, `\rangle` | Delimitatori di parentesi angolari sinistra e destra. |
| `\|` | Doppia barra verticale delimitatrice (barre normali). |
| `\lvert`, `\rvert` | Barre con valori assoluti con spaziatura dei delimitatori corretta (amsmath). |
| `\lVert`, `\rVert` | Doppie barre per norme, con corretta spaziatura dei delimitatori (amsmath). |
| `\barra rovesciata` | Barra rovesciata come simbolo matematico o delimitatore. |

## Matematica: accenti e decorazioni

| Comando | Cosa fa |
| --- | --- |
| `\cappello{x}` | Piccolo accento del cappello su un simbolo. |
| `\check{x}` | Accento di Caron (cappello rovesciato). |
| `\breve{x}` | Accento breve (arrotondato). |
| `\acute{x}`, `\grave{x}` | Accenti acuti e gravi in ​​matematica. |
| `\tilde{x}` | Accento della tilde su un simbolo. |
| `\bar{x}` | Barra corta su un simbolo. |
| `\vec{v}` | Piccola freccia sopra un simbolo. |
| `\dot{x}`, `\ddot{x}` | Uno o due punti sopra un simbolo, comune per le derivate del tempo. |
| `\dddot{x}` | Tre punti sopra un simbolo (amsmath). |
| `\mathring{x}` | Accento dell'anello su un simbolo. |
| `\widehat{abc}` | Cappello largo che si estende su diversi simboli. |
| `\widetilde{abc}` | Tilde ampia che si estende su diversi simboli. |
| `\overrightarrow{AB}` | Allungamento della freccia destra su un'espressione, come nei vettori da A a B. |
| `\overleftarrow{AB}` | Allungamento della freccia sinistra su un'espressione. |
| `\overline{x + y}` | Linea su un'intera espressione. |
| `\underline{x + y}` | Riga sotto un'intera espressione (funziona anche nel testo). |
| `\overbrace{...}^{n}` | Parentesi graffa orizzontale sopra un'espressione, con un'etichetta opzionale nella parte superiore. |
| `\underbrace{...}_{n}` | Parentesi graffa orizzontale sotto un'espressione, con un'etichetta opzionale sottostante. |
| `\overset{!}{=}` | Posiziona un simbolo sopra un altro, ad es. 'deve essere uguale' (amsmath). |
| `\underset{i}{\max}` | Posiziona un simbolo sotto un altro (amsmath). |
| `\stackrel{\text{def}}{=}` | Comando del kernel precedente che impila un simbolo su una relazione. |
| `\boldsymbol{\beta}` | Matematica in grassetto che mette in grassetto anche lettere e simboli greci (amsmath). |
| `\prime` | simbolo primo; "x" è la solita abbreviazione di "x^{\prime}". |

## Matematica: operatori simili a log

Tutto composto in verticale con la spaziatura corretta; quelli che prendono i limiti inseriscono i pedici sotto nella matematica di visualizzazione.

| Comando | Cosa fa |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Le funzioni trigonometriche fondamentali. |
| `\sec`, `\csc` | Secante e cosecante. |
| `\arcsin`, `\arccos`, `\arctan` | Funzioni trigonometriche inverse. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Funzioni iperboliche. |
| `\exp`, `\ln`, `\log`, `\lg` | Esponenziale e logaritmi (`\lg` è log in base 2 o 10 per convenzione). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinante, dimensione, nucleo, grado. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Massimo comun divisore, hom-set, argomento complesso, probabilità. |
| `\lim_{x \to 0}` | Operatore limite, verticale con il pedice sottostante nella matematica di visualizzazione. |
| `\limsup`, `\liminf` | Limite superiore e inferiore. |
| `\inf`, `\sup` | Operatori inferiore e superiore, composti in posizione verticale. |
| `\min`, `\max` | Operatori minimo e massimo, composti in posizione verticale con i limiti inferiori nella matematica di visualizzazione. |
| `\bmod` | Operatore mod binario con spaziatura tra gli operatori: `a \bmod n`. |
| `\pmod{n}` | Finale tra parentesi '(mod n)'. |
| `\mod{n}` | Finale 'mod n' senza parentesi (amsmath). |
| `\nomeoperatore{lcm}` | Nome dell'operatore verticale una tantum senza dichiarazione di preambolo (amsmath). |
| `\nomeoperatore*{ess\,sup}` | Operatore una tantum che accetta i limiti inferiori (amsmath). |

## Matematica: frazioni, binomi e impilamento

| Comando | Cosa fa |
| --- | --- |
| `\frac{a}{b}` | Frazione impilata: numeratore su denominatore. |
| `\dfrac{a}{b}` | Frazione forzata alla dimensione di visualizzazione completa, anche in linea (amsmath). |
| `\tfrac{a}{b}` | Frazione forzata a dimensioni ridotte in linea, anche nella matematica di visualizzazione (amsmath). |
| `\cfrac{a}{b}` | Frazione continua con livelli annidati a grandezza naturale (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Radice quadrata; l'argomento facoltativo fornisce un'ennesima radice. |
| `\binom{n}{k}` | Coefficiente binomiale tra parentesi (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Binomi forzati dimensione display e dimensione testo (amsmath). |
| `{n \scegli k}` | Primitiva binomiale TeX semplice; sconsigliato in LaTeX, utilizzare `\binom`. |
| `{a \over b}` | Primitiva di frazione TeX semplice; sconsigliato in LaTeX, utilizzare `\frac`. |
| `{a \in cima a b}` | Primitiva di impilamento di TeX semplice senza barra; sconsigliato, utilizzare `\substack` o `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Costruttore generale di frazioni dietro `\frac`, `\binom` e amici (amsmath). |
| `\substack{i < n \\ j < m}` | Pedice su più righe sotto un grande operatore (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Associa gli indici a tutti e quattro gli angoli di un grande operatore (amsmath). |
| `\prescript{a}{b}{X}` | Apice/pedice di sinistra, come nella notazione isotopica (strumenti matematici). |

## Matematica: spaziatura e stili

| Comando | Cosa fa |
| --- | --- |
| `\,` | Spazio matematico sottile, come tra un numero e la sua unità. |
| `\:` | Spazio matematico medio. |
| `\;` | Spazio matematico spesso. |
| `\!` | Spazio sottile negativo, che avvicina i simboli. |
| `\quad`, `\qquad` | Spazi da uno e due em, in matematica o testo. |
| `\displaystyle` | Forza il dimensionamento matematico di visualizzazione completo, ad es. grandi limiti nella matematica in linea. |
| `\stile` | Forza il dimensionamento della matematica in linea all'interno della matematica di visualizzazione. |
| `\scriptstyle`, `\scriptscriptstyle` | Forza il dimensionamento dei pedici e dei pedici. |

## Matematica: lettere, alfabeti e simboli vari

| Comando | Cosa fa |
| --- | --- |
| `\mathbb{R}` | Lettere in grassetto da lavagna per set di numeri (amssymb). |
| `\mathbf{x}` | Lettere verticali in grassetto in matematica, comuni per vettori e matrici. |
| `\mathcal{L}` | Lettere maiuscole calligrafiche, ad es. una perdita o lagrangiana. |
| `\mathfrak{g}` | Lettere Fraktur, usate in algebra e logica. |
| `\mathscr{F}` | Scrivi lettere maiuscole, più curve di `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Lettere verticali (romane) in matematica, per unità e nomi composti da più lettere. |
| `\mathit{diff}` | Identificatore di più lettere corsivo con spaziatura simile a una parola. |
| `\mathsf{T}`, `\mathtt{x}` | Lettere sans-serif e macchina da scrivere in matematica. |
| `\bm{\beta}` | Simboli matematici in grassetto, un'alternativa a `\boldsymbol` (pacchetto bm). |
| `\testo{se } x > 0` | Testo verticale normale all'interno della matematica con spaziatura corretta (amsmath). |
| `\infty` | Segno dell'infinito. |
| `\parziale` | Segno di derivata parziale (d riccio). |
| `\nabla` | Operatore Nabla (del) per gradienti e divergenza. |
| `\hbar` | Costante di Planck ridotta, h con una barra. |
| `\ell` | Script l minuscolo, utilizzato per evitare confusione con la cifra 1. |
| `\wp` | Weierstrass p. |
| `\Re`, `\Im` | Simboli delle parti reali e immaginarie (Fraktur R e I). |
| `\aleph` | Aleph, per infiniti cardinali. |
| `\emptyset` | Segno di set vuoto. |
| `\nulla` | Variante più rotonda con insieme vuoto che molti autori preferiscono (amssymb). |
| `\angolo` | Simbolo dell'angolo. |
| `\misuraangolo` | Simbolo dell'angolo misurato con un arco (amssymb). |
| `\triangolo` | Simbolo del triangolo. |
| `\square`, `\blacksquare` | Quadrati aperti e pieni; quello riempito spesso conclude le dimostrazioni (amssymb). |
| `\diamante`, `\losanga` | Piccolo operatore di diamanti; simbolo della losanga (amssymb per quest'ultimo). |
| `\top`, `\bot` | Simboli superiore (vero) e inferiore (falso/non definito). |
| `\forall`, `\esiste` | Universale ("per tutti")ed esistenziali (“esiste”) quantificatori. |
| `\nesiste` | Quantificatore esistenziale negato (amssymb). |
| `\neg` | Segno logico NOT. |
| `\quindi`, `\perché` | Tre punti "quindi" e "perché" sono segni (amssymb). |
| `\piatto`, `\naturale`, `\sharp` | Alterazioni musicali, usate anche nella notazione matematica. |
| `\surd` | Simbolo radicale nudo e senza argomento. |
| `\segno di spunta` | Segno di spunta (amsymb). |
| `\cdots` | Punti centrati, tra operatori: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Punti verticali e diagonali, principalmente in matrici. |
| `\dotsb`, `\dotsc` | Punti semantici: tra operatori binari e tra virgole (amsmath). |

## strumenti di visualizzazione di amsmath e mathtools

| Comando | Cosa fa |
| --- | --- |
| `\tag{...}` | Sostituisce il numero dell'equazione automatica con la tua etichetta (amsmath). |
| `\tag*{...}` | Come `\tag` ma senza le parentesi circostanti (amsmath). |
| `\notag` | Sopprime il numero dell'equazione su una riga di un ambiente numerato (amsmath). |
| `\nessunnumero` | Sinonimo più vecchio di "\notag". |
| `\numberwithin{equazione}{sezione}` | Equazioni numeriche per sezione: (2.1), (2.2) (amsmath). |
| `\intertesto{...}` | Interrompe un blocco di allineamento con una riga di testo a larghezza intera, mantenendo l'allineamento (amsmath). |
| `\shortintertext{...}` | Come `\intertext` con meno spazio verticale (mathtools). |
| `\allowdisplaybreaks` | Consente di suddividere le visualizzazioni su più righe su più pagine (amsmath). |
| `\displaybreak` | Richiede un'interruzione di pagina a questo punto di un display (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Consente agli operatori ampi limiti di sporgenza in modo che non allontanino il contenuto (strumenti matematici). |
| `\mathclap{...}` | Contenuti matematici di larghezza zero, per sotto/sovrascrizioni ampie (strumenti matematici). |
| `\coloneqq` | Segno di definizione di due punti-uguale := con spaziatura corretta (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Definisce una macro delimitatrice con un modulo di ridimensionamento automatico contrassegnato da stelle (mathtools). |
| `\eqref{eq:perdita}` | Stampa un numero di equazione con le sue parentesi (amsmath). |
| `\qedqui` | Sposta il riquadro di fine prova sulla riga corrente, ad es. dopo un'equazione visualizzata (amsthm). |

## Ambienti matematici

| Ambiente | Cosa fa |
| --- | --- |
| "equazione" | Un'equazione visualizzata e numerata. |
| `equazione*` | Un'equazione visualizzata e non numerata (amsmath). |
| "allineare" | Più equazioni visualizzate allineate ai segni "&", ciascuna numerata (amsmath). |
| `allinea*` | Equazioni allineate senza numeri (amsmath). |
| `raccogliere` | Equazioni multiple centrate senza allineamento, ciascuna numerata (amsmath). |
| `allineare` | Equazioni allineate con spaziatura tra le colonne controllata manualmente (amsmath). |
| `flalign` | Equazioni allineate spostate ai margini sinistro e destro (amsmath). |
| `dividere` | Divide una lunga equazione su linee allineate sotto un singolo numero, all'interno di "equazione" (amsmath). |
| `multilinea` | Una lunga equazione spezzata su più righe: prima riga a sinistra, ultima riga a destra (amsmath). |
| `allineato`, `riunito` | Versioni predefinite di align/gather utilizzabili all'interno di un altro display (amsmath). |
| `sottoequazioni` | Numera le equazioni all'interno come 1a, 1b, 1c (amsmath). |
| `casi` | Distinzioni di casi raggruppate tra parentesi graffe, come nelle funzioni a tratti (amsmath). |
| `dcases` | "casi" con voci in stile visualizzazione in modo che le frazioni rimangano a grandezza naturale (strumenti matematici). |
| `matrice` | Matrice nuda senza delimitatori (amsmath). |
| `pmatrice` | Matrice racchiusa tra parentesi (amsmath). |
| `bmatrice` | Matrice racchiusa tra parentesi quadre (amsmath). |
| `Bmatrice` | Matrice racchiusa tra parentesi graffe (amsmath). |
| `vmatrice` | Matrice avvolta in barre verticali, notazione determinante standard (amsmath). |
| `Vmatrice` | Matrice avvolta in doppie barre (amsmath). |
| `piccolamatrice` | Matrice compatta dimensionata per l'utilizzo in linea (amsmath). |
| "array" | Griglia in modalità matematica con allineamento per colonna, il cugino matematico di "tabellare". |
| `eqnarray` | Vecchio ambiente di equazioni a tre colonne; scoraggiato, la sua spaziatura è sbagliata, usa "align". |

## Riferimenti incrociati e collegamenti

| Comando | Cosa fa |
| --- | --- |
| `\label{fig:setup}` | Nomina un punto (equazione, figura, sezione) in modo che tu possa fare riferimento ad esso. |
| `\ref{fig:setup}` | Stampa il numero di un articolo etichettato. |
| `\pageref{fig:setup}` | Stampa il numero di pagina in cui si trova l'etichetta. |
| `\cref{fig:setup}` | Stampa automaticamente il numero E il nome del tipo: 'fig. 1' (intelligente). |
| `\Cref{fig:setup}` | `\cref` in maiuscolo per l'inizio di una frase: 'Figura 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Stampa un intervallo: 'eqs. 1 a 4' (cleveref). |
| `\labelcref{fig:setup}` | Stampa solo il numero dell'etichetta in stile Cleveref, senza il nome del tipo (cleveref). |
| `\vref{fig:setup}` | Riferimento più una frase automatica "nella pagina successiva" quando necessario (varioref). |
| `\autoref{fig:setup}` | riferimento digitato di hyperref: "Figura 1", con l'intera frase collegata. |
| `\nameref{sec:intro}` | Stampa il testo del titolo della sezione di riferimento (hyperref). |
| `\href{https://example.com}{testo del collegamento}` | Crea un collegamento cliccabile con testo personalizzato (iperref). |
| `\url{https://esempio.com}` | Impone un URL in formato macchina da scrivere e lo rende selezionabile. |
| `\hyperref[sec:intro]{quella sezione}` | Crea un collegamento testuale arbitrario a un'etichetta (iperrif). |
| `\hypertarget{spot}{...}` | Crea una destinazione di collegamento denominata in qualsiasi punto del documento (iperrif). |
| `\hyperlink{spot}{testo}` | Collegamenti a un `\hypertarget` (hyperref). |
| `\sezionefantasma` | Crea un'ancora in modo che i collegamenti alle intestazioni non numerate arrivino nel posto giusto (iperrif). |
| `\texorpdfstring{$\alpha$}{alpha}` | Fornisce un'alternativa in testo semplice per la matematica nei titoli in modo che i segnalibri PDF rimangano validi (iperref). |
| `\pdfbookmark[1]{Titolo}{nome}` | Aggiunge una voce manuale nei segnalibri PDF (iperref). |

## Citazioni e bibliografia

| Comando | Cosa fa |
| --- | --- |
| `\cite{knuth1984}` | Cita una voce bibliografica per chiave. |
| `\nocite{chiave}` | Aggiunge una voce alla bibliografia senza citarla nel testo; `\nocite{*}` aggiunge tutto. |
| `\citep{knuth1984}` | Citazione tra parentesi '(Knuth, 1984)' nello stile anno-autore natbib. |
| `\citet{knuth1984}` | Citazione testuale 'Knuth (1984)' in stile autore-anno natbib. |
| `\citeauthor{knuth1984}` | Stampa solo i nomi degli autori (natbib e biblatex). |
| `\citeyear{knuth1984}` | Stampa solo l'anno (natbib e biblatex). |
| `\citealp{knuth1984}` | natbib citazione tra parentesi senza parentesi, per costruirne una propria. |
| `\citealt{knuth1984}` | natbib citazione testuale senza parentesi intorno all'anno. |
| `\parencite{knuth1984}` | la citazione tra parentesi di biblatex, l'analogo di `\citep`. |
| `\textcite{knuth1984}` | la citazione testuale di biblatex, l'analogo di `\citet`. |
| `\autocite{knuth1984}` | citazione biblatex che segue la forma preferita dello stile (parentesi, nota a piè di pagina, ecc.). |
| `\footcite{knuth1984}` | citazione biblatex posta in nota. |
| `\fullcite{knuth1984}` | Stampa in linea il testo completo della bibliografia della voce (biblatex). |
| `\citetitle{knuth1984}` | Stampa il titolo dell'opera (biblatex). |
| `\bibliografia{riferimenti}` | BibTeX: stampa l'elenco di riferimento da un file .bib. |
| `\bibliographystyle{plainnat}` | BibTeX: sceglie il formato di riferimento; gli stili classici includono plain, unsrt, alpha, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: registra un file .bib nel preambolo. |
| `\printbibliography` | biblatex: stampa l'elenco dei riferimenti dove lo inserisci. |
| `\bibitem{chiave}` | Una voce scritta a mano all'interno di un ambiente "thebibliography". |
| `thebibliography` (ambiente) | Scritto a manoelenco di riferimento utilizzato quando si salta completamente BibTeX. |

## Float, figure e tabelle

| Comando o ambiente | Cosa fa |
| --- | --- |
| `figura` (ambiente) | Contenitore mobile per un'immagine più didascalia; LaTeX sceglie la posizione finale. |
| `figura*` (ambiente) | Figura che si estende su entrambe le colonne in un documento a due colonne. |
| `tabella` (ambiente) | Contenitore mobile per una tabella più didascalia; LaTeX sceglie la posizione finale. |
| `tabella*` (ambiente) | Tabella che si estende su entrambe le colonne in un documento a due colonne. |
| `\begin{figura}[htbp]` | Suggerimenti per il posizionamento: qui, in alto, in basso, nella propria pagina; `!` rilassa le regole, `[H]` (pacchetto float) significa esattamente qui. |
| `tabellare` (ambiente) | La vera griglia di righe e colonne: celle divise da "&", le righe terminano con "\\". |
| `tabellare*` (ambiente) | Tabella allungata fino a una larghezza totale specificata. |
| `tabularx` (ambiente) | Tabella a larghezza fissa le cui colonne "X" condividono lo spazio rimanente (tabularx). |
| `array` (ambiente) | Griglia in modalità matematica con allineamento per colonna. |
| `longtable` (ambiente) | Tabella che può essere suddivisa su più pagine, con intestazioni ripetute (longtable). |
| `minipagina` (ambiente) | Mini pagina a larghezza fissa all'interno della pagina, utilizzata per affiancare i contenuti. |
| `sottofigura` (ambiente) | Un sottopannello con la propria didascalia, come (a) e (b), all'interno di una figura (sottodidascalia). |
| `wrapfigure` (ambiente) | Figura con corpo del testo che la avvolge (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (ambienti) | I float vengono ruotati di 90 gradi sulla propria pagina (rotazione). |
| `paesaggio` (ambiente) | Ruota intere pagine in orizzontale, con la pagina PDF ruotata automaticamente (pdflscape). |
| `trepartita` (ambiente) | Avvolge una tabella in modo che le note a piè di pagina siano allineate alla larghezza della tabella (tabella in tre parti). |
| `tablenotes` (ambiente) | Le note sono elencate sotto una tabella in tre parti, contrassegnata con `\tnote{a}`. |
| "adjustbox" (ambientee `\adjustbox`) | Ridimensiona, ridimensiona o ritaglia qualsiasi contenuto con opzioni di valori-chiave (casella di regolazione). |
| `\didascalia{...}` | Aggiunge una didascalia numerata a una figura o tabella; inserisci `\label` dopo. |
| `\didascalia*{...}` | Didascalia senza numero o voce di elenco (pacchetto di didascalie). |
| `\captionsetup{...}` | Configura i caratteri, le etichette e la spaziatura dei sottotitoli (pacchetto sottotitoli). |
| `\toprule` | Regola pesante nella parte superiore di una tabella di libri. |
| `\midrule` | Regola media tra l'intestazione e il corpo di una tabella booktabs. |
| `\bottomrule` | Regola pesante nella parte inferiore di una tabella di libri. |
| `\cmidrule(lr){2-3}` | Regola parziale che si estende su colonne selezionate (booktabs). |
| `\addlinespace` | Piccolo spazio verticale extra tra le righe delle schede dei libri, invece di una regola. |
| `\hline` | Linea orizzontale a tutta larghezza in un tabulare semplice; le regole di booktabs di solito sembrano migliori. |
| `\cline{2-3}` | Linea orizzontale che attraversa le colonne selezionate in una tabella semplice. |
| `\vline` | Linea verticale in questo punto di una riga della tabella; gli specificatori di colonna "|" sono il solito modo. |
| `\multicolonna{2}{c}{Intestazione}` | Unisce le celle tra le colonne di una riga. |
| `\multirow{2}{*}{Label}` | Unisce le celle verticalmente su più righe (più righe). |
| `\arraystretch` | Fattore per l'altezza della riga della tabella; impostato con `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Lunghezza della spaziatura interna su ciascun lato di una colonna tabulare. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Definisce un identificatore di colonna riutilizzabile (pacchetto di array). |
| `\endfirsthead` | longtable: segna la fine dell'intestazione mostrata solo sulla prima pagina. |
| `\endhead` | longtable: segna la fine dell'intestazione ripetuta su ogni pagina successiva. |
| `\endfoot` | longtable: segna la fine del piè di pagina mostrato ad ogni interruzione di pagina. |
| `\endlastfoot` | longtable: segna la fine del piè di pagina mostrato solo alla fine. |
|`\FloatBarrier` | Arresta i galleggianti che vanno alla deriva oltre questo punto (placeins). |

##Note a piè di pagina

| Comando | Cosa fa |
| --- | --- |
| `\nota{...}` | Mette una nota a fondo pagina, contrassegnata da un numero automatico. |
| `\nota a piè di pagina` | Stampa solo l'indicatore della nota a piè di pagina, per i luoghi in cui `\footnote` non è consentito. |
| `\footnotetext{...}` | Fornisce il testo per un `\footnotemark` precedente. |

## Teoremi e dimostrazioni

| Comando o ambiente | Cosa fa |
| --- | --- |
| `\nuovoteorema{lemma}{Lemma}` | Dichiara un ambiente simile a un teorema (amsthm). |
| `\nuovoteorema*{osservazione}{Osservazione}` | Dichiara un ambiente simile a un teorema non numerato (amsthm). |
| `\theoremstyle{definizione}` | Imposta l'aspetto (semplice, definizione, commento) per le seguenti dichiarazioni `\newtheorem` (amsthm). |
| `teorema` (ambiente) | Blocco di teoremi numerati, creato da `\newtheorem{theorem}{Theorem}`. |
| `prova` (ambiente) | Blocco di prova che stampa "Prova". e termina con il quadrato QED (amsthm). |

## Verbatim, codice ed elenchi

| Comando o ambiente | Cosa fa |
| --- | --- |
| `\verbo|codice|` | Verbatim in linea: stampa esattamente ciò che scrivi, delimitato da qualsiasi carattere ripetuto. |
| `verbatim` (ambiente) | Blocco di testo stampato esattamente come digitato, con carattere macchina da scrivere. |
| `\verbatiminput{file.txt}` | Stampa un intero file parola per parola (pacchetto letterale). |
| `lstlisting` (ambiente) | Elenco del codice sorgente con evidenziazione della sintassi opzionale (elenchi). |
| `\lstinline|codice|` | Snippet di codice incorporato nello stile delle inserzioni (elenchi). |
| `\lstset{lingua=Python}` | Configura le impostazioni predefinite degli elenchi: lingua, numerazione, colori (elenchi). |
| `\lstinputlisting{script.py}` | Composta un intero file sorgente come un elenco (elenchi). |
| `coniato` (ambiente) | Blocchi di codice evidenziati basati su Pygments; necessita di `-shell-escape` in fase di compilazione (coniato). |
| `\mintinline{python}|codice|` | Codice evidenziato in linea (coniato). |

## Proiettore (diapositive)

| Comando o ambiente | Cosa fa |
| --- | --- |
| `frame` (ambiente) | Una diapositiva di Beamer: `\begin{frame}{Titolo diapositiva} ... \end{frame}`. |
| `\frame{...}` | Modulo diapositiva a comando singolo di Beamer; l'ambiente `frame` è il solito modo. |
| `\frametitle{...}` | Imposta il titolo della diapositiva dall'interno di una cornice. |
| `\framesubtitle{...}` | Imposta un sottotitolo più piccolo sotto il titolo del fotogramma. |
| `\pagina titolo` | Beamer: all'interno di una cornice, stampa la diapositiva del titolo dai metadati del titolo. |
| `\tabella dei contenuti[sezionecorrente]` | Diapositiva di contorno che evidenzia la sezione in cui ti trovi. |
| `\pausa` | Proiettore: rivela il resto dell'inquadratura nella fase successiva della diapositiva. |
| `\onslide<2->` | Il contenuto viene visualizzato da un determinato passaggio di sovrapposizione in poi. |
| `\solo<2>{...}` | Il contenuto esiste solo nei passaggi indicati e non occupa spazio altrove. |
| `\uncover<2->{...}` | Il contenuto è invisibile prima del suo passaggio ma riserva sempre il suo spazio. |
| `\visibile<2->{...}`, `\invisibile<2>{...}` | Mostra o nascondi il contenuto in determinati passaggi senza modificare il layout. |
| `\alert{...}` | Evidenzia il testo nel colore di avviso del tema, solitamente rosso. |
| `blocco` (ambiente) | Casella con titolo nel colore standard del tema. |
| `alertblock` (ambiente) | Casella con titolo nel colore dell'avviso, per avvisi o punti chiave. |
| `exampleblock` (ambiente) | Casella con titolo nel colore dell'esempio, solitamente verde. |
| `colonne` (ambiente) e `\column{0.5\textwidth}` | Aree di layout affiancate su una diapositiva. |
| `\usetheme{Madrid}` | Beamer: sceglie il tema della presentazione nel preambolo. |
| `\usecolortheme{cavalluccio marino}` | Scambia solo la tavolozza dei colori del tema. |
| `\usefonttheme{serif}` | Scambia solo le scelte dei caratteri del tema. |
| `\setbeamertemplate{simboli di navigazione}{}` | Sostituisce un elemento del tema, rimuovendo in questo caso le icone di navigazione. |
|`\setbeamercolor{titolo}{fg=nero}` | Sostituisce un colore del tema. |
| `\nota{...}` | Note del relatore allegate a una cornice, mostrate solo nell'output delle note. |

## TikZ e diagrammi

| Comando o ambiente | Cosa fa |
| --- | --- |
| `tikzpicture` (ambiente) | Tela per disegni TikZ; tutti i comandi `\draw` e `\node` vanno al suo interno. |
| `\tikz` | Immagine in linea one-shot: `\tikz \draw (0,0) cerchio (2pt);`. |
| `\draw (0,0) -- (1,1);` | Comando del percorso TikZ che disegna linee e forme; opzioni come `[spesso, rosso, ->]` gli danno uno stile. |
| `\riempire` | Comando del percorso TikZ che riempie una forma invece di accarezzarla. |
| `\filldraw` | Comando del percorso TikZ che riempie e delinea una forma. |
| `\ombra` | Comando del percorso TikZ che si riempie con una sfumatura. |
| `\clip` | Percorso TikZ che limita tutti i disegni successivi al suo interno. |
| `\percorso` | Percorso TikZ che calcola le coordinate senza disegnare, ad es. per posizionare i nodi. |
| `\nodo in (0,0) {etichetta};` | Comando TikZ che posiziona testo o forme alle coordinate. |
| `\coordinata (a) in (1,2);` | Nomina un punto da riutilizzare nei percorsi successivi. |
| `\foreach \i in {1,...,5}` | Ciclo che ripete il codice di disegno su un elenco (TikZ/pgffor). |
| `\tikzset{miostile/.style={...}}` | Definisce gli stili TikZ riutilizzabili in modo moderno. |
| `\tikzstyle` | Sintassi di definizione dello stile vecchio; deprecato, utilizzare `\tikzset`. |
| `\usetikzlibrary{posizionamento}` | Carica funzionalità extra di TikZ nel preambolo. |
| `\matrice` (TikZ) | Disposizione allineata alla griglia dei nodi all'interno di un tikzpicture. |
| `tikzcd` (ambiente) | Griglia per schemi commutativi; celle divise da "&" (tikz-cd). |
| `\freccia[r, "f"]` | Disegna una freccia tra le celle in un diagramma commutativo tikz-cd. |

## Unità (siunitx)

| Comando | Cosa fa |
| --- | --- |
| `\num{12345.678}` | Formatta un numero con il raggruppamento di cifre e i contrassegni decimali corretti. |
| `\qtà{9,8}{\metro\per\secondo\quadrato}` | Numero con unità, spaziato correttamente (nome siunitx v3). |
| `\unità{\chilo\grammo}` | Solo unità (nome siunitx v3). |
| `\SI{9.8}{\metro\per\secondo\quadrato}` | nome v2 di `\qty`; ancora ampiamente visto nei giornali. |
| `\si{\chilo\grammo}` | nome v2 di `\unit`. |
| `\sisetup{...}` | Configurazione globale siunitx. |
| `\DeclareSIUnit{\parsec}{pc}` | Definisce un'unità personalizzata (siunitx). |

## Glossari e acronimi

| Comando | Cosa fa |
| --- | --- |
| `\gls{svm}` | Stampa una voce di glossario o di acronimo, espandendola al primo utilizzo (glossari). |
| `\Gls{svm}` | Forma maiuscola per l'inizio della frase (glossari). |
| `\glspl{svm}` | Forma plurale della voce (glossari). |
| `\newglossaryentry{albero}{nome=albero, descrizione={...}}` | Dichiara un termine del glossario (glossari). |
| `\newacronym{svm}{SVM}{supporto macchina vettoriale}` | Dichiara un acronimo con forme brevi e lunghe (glossari). |
| `\acrshort{svm}`, `\acrlong{svm}` | Forza la forma breve o lunga indipendentemente dal primo utilizzo (glossari). |
| `\makeglossaries` | Comando di preambolo che attiva l'elaborazione del glossario/acronimo (glossari). |
| `\printglossary` | Stampa un elenco di glossari nella posizione in cui lo inserisci (glossari). |
| `\printglossaries` | Stampa il glossario e l'elenco degli acronimi dove lo inserisci (glossari). |

## Algoritmi e pseudocodice

I comandi con parole chiave provengono da algpseudocode (algorithmicx); il float dell'algoritmo li avvolge.

| Comando o ambiente | Cosa fa |
| --- | --- |
| `algoritmo` (ambiente) | Contenitore mobile per pseudocodice, con didascalia e numero (algoritmo). |
| `algoritmico` (ambiente) | Il corpo dello pseudocodice stesso, che contiene la parola chiave comandi (algpseudocodice). |
| `\Stato` | Una riga di istruzioni di pseudocodice. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Parole chiave con blocco condizionale. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Ripeti le parole chiave su un intervallo o un set. |
| `\While{...}`, `\EndWhile` | Parole chiave del ciclo while. |
| `\Function{Nome}{arg}`, `\EndFunction` | Blocco di definizione della funzione. |
| `\Procedure{Nome}{argomenti}`, `\EndProcedure` | Blocco di definizione della procedura. |
| `\Ritorno` | La parola chiave di ritorno. |
| `\Commento{...}` | Commento allineato a destra su una riga di pseudocodice. |
| `\Richiedi`, `\Assicura` | Righe di precondizioni e postcondizioni nella parte superiore di un algoritmo. |

## Pacchetti linguistici, di citazioni e editoriali

| Comando | Cosa fa |
| --- | --- |
| `\selectlingua{tedesco}` | Cambia la lingua attiva: sillabazione, didascalie, date (babel). |
| `\lingua straniera{francese}{...}` | Impone un breve passaggio secondo le regole di un'altra lingua (babele). |
| `\enquote{...}` | Virgolette sensibili al contesto che si annidano e localizzano correttamente (virgolette cs). |
| `\todo{Risolvi questo problema}` | Nota a margine che segnala il lavoro da fare (todonotes). |
| `\listoftodos` | Stampa un elenco di tutte le note todo (todonotes). |
| `\missingfigure{...}` | Casella segnaposto per una figura non ancora realizzata (todonotes). |
| `\xspazio` | Alla fine di una macro, aggiunge uno spazio a meno che non segua la punteggiatura (xspace). |
| `\patchcmd{\cmd}{trova}{sostituisci}{ok}{fail}` | Corregge la definizione di una macro esistente (etoolbox). |
| `\apptocmd`, `\pretocmd` | Aggiungi o anteponi il codice a una macro esistente (etoolbox). |
| `\newtoggle{bozza}`, `\toggletrue{bozza}`, `\iftoggle{bozza}{...}{...}` | Flag booleani leggeri (etoolbox). |

## Pacchetti di layout e tipografia in una riga

| Pacchetto o comando | Cosa fa |
| --- | --- |
| `\setstretch{1.25}` | Imposta un esatto fattore di interlinea (setspace). |
| `\doublespacing` | Passa all'interlinea doppia (setspace). |
| `\onehalfspacing` | Passa all'interlinea di un metro e mezzo (setspace). |
| `\singlespacing` | Ritorna all'interlinea singola (setspace). |
| `spaziatura` (ambiente) | Imposta un fattore di interlinea personalizzato per i suoi contenuti (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Riprogetta l'aspetto di un'intestazione di sezione (titlesec). |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` | Regola lo spazio attorno a un'intestazione (titlesec). |
| `\setlist[itemize]{noitemsep}` | Configura la spaziatura dell'elenco e le etichette a livello globale o per livello (enumitem). |
| `parskip` (pacchetto) | Cambia il documento in paragrafi bloccati: spazio tra, nessun rientro. |
| `microtipo` (pacchetto) | Protrusione ed espansione sottili che migliorano la giustificazione; basta caricarlo. |
| `multicols` (ambiente) | Testo a più colonne bilanciato senza l'opzione della classe a due colonne (multicol). |

## Chimica, fisica e notazione di dominio

| Comando | Cosa fa |
| --- | --- |
| `\ce{H2O}` | Impone una formula chimica o una reazione (mhchem). |
| `\chemfig{...}` | Disegna un diagramma della struttura chimica (chemfig). |
| `\braket{\phi|\psi}` | Impone la notazione bra-ket di Dirac con barre dimensionate automaticamente (braket). |

## Comandi della classe editore

| Comando o ambiente | Cosa fa |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formatta un blocco del nome dell'autore nell'area del titolo della conferenza IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran: formatta un blocco di affiliazione dell'autore nell'area del titolo della conferenza IEEE. |
| `\ccsdesc[500]{...}` | acmart: dichiara un concetto ACM CCS per la classificazione dell'articolo. |
| `CCSXML` (ambiente) | acmart: contiene l'XML dei concetti ACM CCS leggibili dalla macchina dallo strumento di classificazione ACM. |
| `\Università{...}` | Comando di metadati specifico della classe visto nei modelli di tesi, non LaTeX standard. |

## Ambienti in generale

Un ambiente è una regione aperta con `\begin{name}` e chiusa con `\end{name}`; tutto tra i due ottiene il comportamento di quell'ambiente. La storia completa è in [comandi e ambienti](/learn/commands-environments/). Quelli di uso generale:

| Ambiente | Cosa fa |
| --- | --- |
| "documento" | Il corpo di ogni documento si trova tra `\begin{document}` e `\end{document}`. |
| `astratto` | Stampa l'abstract del documento con l'intestazione e il layout standard della classe. |
| `frontespizio` | Avvolge un frontespizio completo fatto a mano; la pagina non è numerata. |
| `centro` | Centra il contenuto orizzontalmente. |
| `flushleft` | Allinea a sinistra il suo contenuto, irregolare a destra. |
| `a destra` | Allinea a destra il suo contenuto, irregolare a sinistra. |
| `articolare` | Elenco puntato; ogni voce inizia con "\item". |
| `enumerare` | Elenco numerato; ogni voce inizia con "\item". |
| `descrizione` | Elenco etichettato; le voci iniziano con "\item[Label]". |
| `\oggetto` | Avvia una voce all'interno degli elenchi di dettaglio, enumerazione o descrizione. |
| "citazione" | Blocco rientrato per citazioni brevi, nessun rientro di paragrafo. |
| "citazione" | Blocco rientrato per citazioni più lunghe, con rientri di paragrafo. |
| `verso` | Blocco rientrato per la poesia, dove `\\` termina ogni verso. |
| `sciattopar` | I paragrafi sono composti con interruzioni di riga rilassate, la forma ambientale di `\sloppy`. |
| `lista` | Il generatore di elenchi generali da cui vengono definiti gli elementi e gli amici. |
| `trivlista` | Elenco scarno senza etichette o margini, utilizzato all'interno delle definizioni delle macro. |
| `contenuto del file` | Scrive il suo corpo in un file in fase di compilazione, ad es. per spedire un .bib all'interno del .tex. |
| `appendici` | Racchiude i capitoli dell'appendice, abilitando `\appendixpage` e gli strumenti per appendice (pacchetto appendix). |

## Dove andare dopo

Questa pagina è il dizionario. Le lezioni sono la grammatica. Per una pagina pronta per essere incollata, tieni [il cheatsheet](/learn/cheatsheet/) aperto. Per la differenza tra i blocchi `\command{...}` e `\begin{...}`, leggi [comandi e ambienti](/learn/commands-environments/). Per un simbolo che puoi immaginare ma non puoi nominare, usa [simboli matematici](/learn/math-symbols-cheatsheet/). Per vedere come appare qualsiasi comando in modalità matematica, incollalo nell'[anteprima live](/live/) e guardalo renderizzare.