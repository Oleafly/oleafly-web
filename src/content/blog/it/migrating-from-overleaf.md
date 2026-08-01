---

title: "Anni sul retro, poi uno spazio di lavoro di ricerca locale"
description: "Il retro ha reso LaTeX collaborativo mainstream e gli account gratuiti continuano a misurare collaborazioni, cronologia, intelligenza artificiale e tempo di compilazione. Dove il browser rimane sottile (curriculum, fork, esportazione, lavoro multi-motore) e cosa riempie uno spazio di lavoro locale gratuito sul tuo disco."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Per anni, [Retro](https://www.overleaf.com/) è stata la risposta predefinita alla domanda "come faccio ad avviare LaTeX?" Condividi un collegamento. Guarda il cursore di un coautore. Compila nel cloud. Quella rampa è autentica. Per gli sprint cartacei multiplayer, lo è ancora.

Una volta che vivi lì per una tesi, un pacchetto per il mercato del lavoro o una lunga riscrittura da solista, il prodotto gratuito inizia a sembrare piccolo. Un collaboratore. Storia misurata in ore. L'intelligenza artificiale veniva contata al giorno. Compilare i timeout. Git e la cronologia completa si trovano dietro piani a pagamento o una licenza del campus che perdi quando te ne vai. Il browser è eccellente essendo un browser con un buffer condiviso. Non è mai stato costruito come uno spazio di lavoro di ricerca completo: curriculum con controlli ATS, biforcazione del progetto, esportazione multiformato, Typst accanto a LaTeX, settimane offline, cronologia locale illimitata.

È qui che Overleaf guadagna ancora la scheda aperta, dove il livello gratuito e l'ambito del prodotto si esauriscono e cosa cambia quando quei file semplici risiedono in un'app desktop gratuita ([Oleafly](https://github.com/Oleafly/Oleafly)) scaricata una volta.

## Quali anni sul retro ti hanno effettivamente comprato

**Pro che valgono ancora**

- Modifica, commenti e chat multiutente in tempo reale: ancora l'opzione migliore per "tre persone, un abstract, stasera"
- Installazione zero per un coautore che aprirà sempre e solo un collegamento
- Enorme galleria di modelli ed editore/memoria muscolare istituzionale
- SSO del campus e licenze del sito che rendono gratuite le funzionalità a pagamento mentre sei nel campus
- Cambio visivo/codice e perfezionamento che hanno insegnato sul campo cosa significa "LaTeX online".

**Dove rimane sottile (soprattutto gratis)**

Piani individuali pubblicati (ricontrolla [Prezzi sul retro](https://www.overleaf.com/user/subscription/plans); i numeri si spostano):

| Gratuito | Pagato/org |
| --- | --- |
| **1 collaboratore** per progetto | 10 (Student/Standard) o illimitato (Pro) |
| **5 utilizzi AI/giorno** | Metri più alti; Assistente completo a pagamento; Pro = IA massima |
| **Timeout di compilazione di base** | **24×** timeout base |
| **Cronologia: ultime 24 ore** | Storia completa |
| Integrazioni (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium su molti piani |
| Studente ~$8–10/mese · Standard ~$17–21/mese · Pro ~$33–42/mese · università: contattare l'ufficio vendite | |

Quindi il livello gratuito è un vero editor per il lavoro cloud prevalentemente in solitario. Si trasforma in una demo nel momento in cui hai bisogno di un secondo coautore, della versione del mese scorso, di compilazioni più lunghe o di più di cinque solleciti AI.

C’è una seconda sottigliezza che non riguarda il paywall: a cosa serve il prodotto. Il retro ottimizza per documenti LaTeX collaborativi in ​​un browser. È più debole come luogo in cui:

- Possedere un portfolio di documenti, tesi, poster e curriculum con biforcazioni e lignaggio
- Esporta lo stesso progetto in Word, HTML, Markdown, PowerPoint (Beamer), EPUB senza ricorrere ad altri strumenti
- Esegui il preflight ATS/accessibilità prima che una domanda di lavoro lasci le tue mani
- Mantieni Typst e Markdown accanto a LaTeX sotto una libreria e un modello Git
- Lavora offline su un aereo o su una rete ospedaliera bloccata
- Utilizza l'intelligenza artificiale con la tua chiave o modello locale, con ogni modifica come differenza di approvazione
- Tratta la cronologia come un vero Git che puoi aprire in un terminale per sempre

Questi sono problemi del banco di ricerca. Sul retro ottimizzato prima per il multiplayer; il resto della scrivania non ha mai avuto lo stesso peso.

## Scrittura su carta: entrambi i lati

**Lato sul retro.** Condividere una bozza cartacea a metà paragrafo è semplice. Commenti in diretta sul doc. Per i gruppi che non toccheranno mai Git, questo è l'intero prodotto. L'editore è competente. L'anteprima va bene per la maggior parte degli articoli. Non sei mai la persona che deve installare TeX Live per gli studenti universitari.

**Dove scrivere su carta fa ancora male.** L'intelligenza a livello di progetto è limitata accanto a un editor di ricerca desktop costruito attorno a un indice completo: rinomina una macro tra i capitoli, controllo in tempo reale di `\cref` e citazioni multi-chiave, visualizzazioni strutturate su un albero di 200 pagine, KaTeX visualizza l'anteprima durante la digitazione, grammatica che ignora `\commands`. I timeout di compilazione gratuiti mordono tesi complesse. La cronologia gratuita evapora dopo un giorno. Non puoi veramente eseguire il fork di una versione di invio in un ramo dell'esperimento nel modo in cui esegui il fork di un repository: duplichi un progetto nel cloud e speri di ricordare quale è quale.

**Lato Oleafly.** Il documento è un progetto multi-file su disco. Go-to-definition a livello di progetto, riferimenti, ridenominazione, diagnostica di ref/cite in tempo reale (inclusa la disordinata famiglia `\eqref` / `\cref`), visualizzazioni di strutture, completamenti per macro definite con forme di argomenti reali, TexLab/Tinymist quando disponibile, anteprime matematiche in tempo reale, Harper + Hunspell offline solo in prosa. Area di lavoro PDF con SyncTeX tollerante agli obsoleti, spread, finestra staccabile. Compila automaticamente sulla tua CPU con errori umanizzati. CI su scala libro (~6.200 righe) è il modo in cui viene testato l'editor.

**Come di solito le persone lo dividono.** La creazione condivisa dal vivo rimane sul retro. Creazione approfondita di più file, settimane offline, compilazione locale illimitata e spostamento locale della cronologia. Molte persone fanno entrambe le cose sugli stessi file semplici.

## Curriculum vitae e documenti letti dalle macchine

Sul retro verrà compilato un curriculum di classe. Ciò che non farà bene è trattare il PDF del mercato del lavoro come un prodotto: modelli orientati all’ATS, testo selezionabile deterministico e un pannello di preflight che mostra ciò che un estratto in stile parser vede effettivamente (nome, sezioni, rischi), con punteggi su cui puoi agire. I creatori di curriculum Web vendono quella storia per una tariffa mensile e intrappolano il layout nel loro SaaS.

Oleafly fornisce modelli orientati al curriculum, Preflight e Git gratuito, quindi "CV di settore", "CV accademico" e "fellowship" sono progetti biforcati con cronologia completa, non tre copie cloud denominate "cv_final_v4".

Se il tuo unico risultato è un documento condiviso, salta questa sezione. Se spedisci anche applicazioni dalla stessa scrivania, noterai rapidamente il divario.

## Biforcazione, clonazione, lignaggio

Esiste un "progetto di copia" cloud. Ciò che vogliono i banchi di ricerca è più vicino a un fork di git: storia completa, discendenza visibile, sperimentazione senza toccare l'albero pronto per la fotocamera. La biblioteca di Oleafly tratta i progetti come libri su uno scaffale; fork copia il progetto e la sua cronologia Git; il lignaggio è mostrato sulla carta. I flussi di lavoro in stile clone tramite GitHub push/pull sono gratuiti.

La cronologia gratuita sul retro è di 24 ore. La cronologia a pagamento è migliore; è ancora una sequenza temporale del servizio, non un repository che conservi se l'account muore.

## Esportazione e trasferimento

I portali delle riviste richiedono PDF e spesso un file zip di origine. Gli investigatori privati ​​vogliono Word. I siti dei corsi vogliono il PDF. I discorsi vogliono diapositive. I libri vogliono l'EPUB. Il mondo sul retro è principalmente PDF dal cloud LaTeX più la fonte di download. Ciò copre gran parte del mondo accademico.

Il menu di esportazione di Oleafly è sensibile al contesto: PDF e zip sorgente sempre; Word, HTML, Markdown, testo semplice tramite Pandoc gestito; PowerPoint da Proiettore; EPUB per progetti simili a libri; figura Percorsi PNG per progetti di immagini. La fedeltà varia (sii onesto riguardo al complesso LaTeX → DOCX), ma il percorso è in-app e gratuito.

## AI, con il misuratore alla luce del giorno

Sul retro gratuito: cinque utilizzi dell'IA al giorno. I piani a pagamento aumentano il limite e sbloccano l'Assistente. Le organizzazioni possono disabilitare l'IA per tutti.

Oleafly: AI disattivata per impostazione predefinita. La tua chiave o Ollama. Nove fornitori quando vuoi essere ospitato. L'agente può modificare, compilare, leggere registri, controllare testo PDF, effettuare ricerche nella letteratura. Ogni scrittura è una differenza di approvazione; le eliminazioni necessitano di una conferma distinta; Prima il checkpoint Git. Chiedi-AI in linea. MCP per clienti esterni. Non ti vendiamo token.

Comodità ospitata con un limite giornaliero e una scala di abbonamento oppure modello "porta il tuo" e modifiche ispezionabili. Scegli il modello di fiducia che puoi spiegare a un laboratorio o a un IRB.

## Realtà multimotore

Sul retro c'è una nuvola LaTeX (e amici). Typst ha la sua storia web altrove. Le note di Markdown risiedono in un altro strumento.

Oleafly esegue LaTeX (Tectonic), Typst e Markdown in un'unica libreria, con compilatori gestiti, un modello Git, una superficie PDF. I modelli filtrano per motore. Si tratta di una forma di prodotto diversa: banco di ricerca, non un'altra scheda LaTeX.

## Offline, privacy, proprietà

Browser: nessuna rete, nessun editor. Le bozze vivono sui loro server secondo i loro termini. L'esportazione è la tua via di fuga finché non lo è più (accesso all'account, modifiche al piano, laurea).

Area di lavoro locale: cartelle semplici, Git reale, modifica offline e compilazioni memorizzate nella cache, modalità offline rigorosa opzionale. Nessun account Oleafly. Nessuna telemetria del prodotto. Rete per pacchetti, citazioni, AI ospitata, GitHub, aggiornamenti, quando lo chiedi.

## Dove il retro vince ancora

- Digitazione e commenti multiutente dal vivo quest'ora
- Coautori a installazione zero
- SSO istituzionale e "tutti hanno già il retro"
- Abitudini dell'editore che aprono un progetto cloud per impostazione predefinita

Il multiplayer live per Oleafly è sulla tabella di marcia. Fino ad allora, Git è il percorso di collaborazione, oppure mantieni Overleaf per lo sprint live e l'app locale per la settimana profonda. Poiché tutto è costituito da semplici file, il passaggio avanti e indietro è un'infrastruttura noiosa piuttosto che un progetto di migrazione.

## Dove uno spazio di lavoro locale gratuito porta avanti

- Profondità completa dell'editor (indice del progetto, macro, struttura, anteprima matematica, correzione in prosa, server linguistici)
- Area di lavoro PDF con SyncTeX tollerante agli obsoleti
- Real Git + sincronizzazione GitHub gratuita + fork del progetto con cronologia
- Digitazione + Markdown accanto a LaTeX
- Ricerca/incolla/importazione di citazioni, composizione di diagrammi, verifica preliminare, esportazione multiformato
- AI sotto le tue chiavi con differenze di approvazione o completamente locale
- $ 0 per sempre, AGPL, scarica una volta

## Tabella delle istantanee

| | Retro libero | Sul retro a pagamento / campus | Oliva |
| --- | --- | --- | --- |
| Costo | Imbuto $ 0 | $8–$42+/mese o licenza del sito | **$0 per sempre** (AGPL) |
| Conto | Obbligatorio | Obbligatorio | Nessuno |
| Multigiocatore in tempo reale | Sì (1 collaborazione gratuita) | Altre collaborazioni | Tabella di marcia; oggi = Git |
| Storia | 24 ore | Completo (piano) | Git completo su disco |
| Git/GitHub | Premio | Premio | Integrato, gratuito |
| Compila | Server, timeout di base | 24× timeout | Locale, il tuo hardware |
| Non in linea | No | No | Sì (pacchetti memorizzati nella cache) |
| Motori | LaTeX-prima nuvola | LaTeX-prima nuvola | LaTeX + Typst + Markdown |
| Intelligenza del progetto | A livello di browser | A livello di browser | Profondità IDE multi-file completa |
| PDF/SyncTeX | Anteprima del browser | Anteprima del browser | Area di lavoro completa + mappa obsoleta |
| AI | 5 usi/giorno | Misurato / massimo | La tua chiave o Ollama; differenze di approvazione |
| Riprendi / prevolo ATS | Fai da te | Fai da te | Costruito nel |
| Forchetta con storia | Copia progetto | Copia progetto | Fork della libreria + Git completo |
| Esporta | PDF + fonte | PDF + fonte | PDF, sorgente, DOCX, HTML, MD, PPTX, EPUB… |
| Modelli | Set di nuvole grandi | Set di nuvole grandi | 23 bundle + 99 confezioni + personalizzato |
| Dati casa | I loro server | I loro server | Il tuo disco |

## Provarli entrambi senza drammi

1. Comprimi la fonte sul retro.
2. Installa Oleafly da
   [pagina delle versioni](https://github.com/Oleafly/Oleafly/releases/latest).
3. Importazione; compilare una volta; scrivere per un giorno su un vero foglio o riprendere.
4. Mantieni il progetto Overleaf per qualsiasi multiplayer live di cui hai ancora bisogno.

La tettonica può ancora inciampare sulle classi di editori pesanti: segnalale; danno forma alla tabella di marcia. La maggior parte degli articoli e delle tesi in stile ACM/IEEE/Elsevier vanno bene.

## Chiusura

Il retro ha guadagnato il suo decennio. Il multiplayer gratuito sembra ancora magico quando tre persone hanno bisogno dello stesso paragrafo stasera. Per proprietà, editing approfondito, fork, esportazioni, lavoro multi-motore, cronologia illimitata e intelligenza artificiale che controlli, un desk locale gratuito è la soluzione più onesta. Scarica Oleafly una volta, mantieni Overleaf per gli sprint live se ne hai ancora bisogno e decidi da documenti reali piuttosto che da una matrice di funzionalità.