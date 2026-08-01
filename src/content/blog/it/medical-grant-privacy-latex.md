---

title: "Scrittura clinica e di sovvenzione: privacy, bozze tracciabili e LaTeX offline"
description: "Perché gli autori di studi medici, sanitari e di sovvenzione si preoccupano di dove è archiviata la bozza e di come un editore di ricerca locale con Git reale, compilazione offline e nessun account si adatti ai cicli di revisione."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

I manoscritti clinici e le narrazioni delle sovvenzioni spesso includono anche dettagli sensibili
prima che la deidentificazione sia definitiva. Affidare ogni tasto premuto a una terza parte
l'editor è una decisione politica tanto quanto una preferenza sugli strumenti. IRB, utilizzo dei dati
accordi e all'IT ospedaliero non interessa che un editor cloud sia conveniente
23:00.

Questo post riguarda la stesura e la composizione in un modo che puoi spiegare
conformità. Consideralo come un consiglio sul flusso di lavoro, non come una revisione legale.

## È più facile ragionare sui file semplici

Una cartella di `.tex` e figure può trovarsi all'interno di un disco crittografato, un ospedale
immagine di un laptop o di una macchina con air gap. Puoi indirizzare la conformità verso un percorso.
I progetti browser richiedono l'attendibilità del modello di accesso, del percorso di esportazione e dei file di un fornitore
elenco dei subresponsabili del trattamento.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) è costruito così
in modo mirato: nessun account, nessuna telemetria del prodotto, progetti come normali cartelle
con un vero repository Git. La [pagina sulla privacy](/privacy/) è breve perché il
document non ha bisogno che esista un server Oleafly. La rete è per le tue azioni
take (pacchetti, ricerca di citazioni opzionale, AI ospitata se la abiliti, GitHub),
non per ogni tasto premuto della bozza.

Se la politica vieta l'intelligenza artificiale nel cloud, lascia l'assistente spento o indirizzalo verso una persona locale
modello. L'editor, il ciclo di compilazione e Git funzionano ancora.

## Tieni traccia delle modifiche senza vivere in Word

Gli investigatori privati ​​di Grant chiedono ancora "cambiamenti di traccia". In LaTeX questo di solito significa
Cronologia Git più commenti PDF dei coautori o una breve esportazione in Word per il file
persona che si rifiuta di installare qualsiasi cosa. Mantieni `.tex` come fonte di verità;
vedere [coautori che parlano solo Word](/learn/collaborator-uses-word/).

In Oleafly ogni progetto è un repository Git fin dal primo giorno: checkpoint automatici
dopo compilazioni riuscite e modifiche inattive, differenze affiancate, con un clic
ripristino, GitHub opzionale quando desideri un telecomando privato. Puoi biforcarne un intero
pacchetto dell'applicazione in un secondo progetto (cronologia completa) per tentare un taglio rischioso
senza toccare la copia inviata. Se utilizzi l'assistente AI opzionale, esso
checkpoint prima della prima modifica e apporta modifiche solo tramite approvazione
diff.

Il nome si impegna dopo gli obiettivi o le sezioni (`aim2-methods-cut`) in modo che un PI possa scremare
la storia senza leggere le differenze come un ingegnere del software.

## Offline è utile negli ospedali

Le reti cliniche bloccano i domini SaaS casuali. Un compilatore locale continua a scrivere
possibile tra le sessioni dell'EHR. Oleafly fornisce Tectonic (e Typst) nell'app;
i pacchetti vengono memorizzati nella cache dopo il primo utilizzo e la modalità offline può rifiutare la rete per i file
compilatore. Il controllo ortografico e la grammatica vengono eseguiti localmente sulla prosa (saltano i comandi e
matematica). Questi sono i vincoli di cui solitamente si preoccupa l'IT ospedaliero, quindi a livello locale
i redattori della ricerca vengono spesso.

SyncTeX e un PDF accanto all'origine sono importanti quando si fissa un limite di pagine
presso un computer della stazione infermieristica con Wi-Fi inaffidabile.

## Modelli, limiti di pagina e verifica preliminare

I modelli in stile NIH e di fondazione riguardano margini, caratteri e limiti di pagina.
La geometria e i pacchetti di caratteri contano più delle macro intelligenti. Compilare in PDF e
controlla il conteggio delle pagine dopo ogni taglio importante, non la notte prima del portale
chiude. Inizia da un modello noto nella galleria quando si adatta; corrispondono ancora
l'attuale FOA per caratteri, margini e struttura (obiettivi specifici come una pagina
significa una pagina).

Quando il PDF deve sopravvivere a un lettore automatico (curriculum, alcuni istituzionali
portali), Preflight mostra la struttura e i risultati dell'estrazione in stile parser
prima di inviare. Questi sono segnali di rischio euristici che puoi leggere e su cui agire.

## Collaborazione multi-PI

Propri file per sezione o obiettivo. Una persona possiede il master `.bib` o condiviso
Esportazione del gruppo Zotero. Concordare se i coautori modificano TeX o restituiscono commenti PDF.
Telecomandi privati solo su host Git istituzionali approvati quando la politica lo richiede
esso; non tutte le bozze di sovvenzione appartengono a GitHub pubblico.

## Gestori della bibliografia

I gruppi Zotero condivisi esportano un `.bib` che più PI possono aggiornare. Importa in
il progetto, incolla i DOI quando aggiungi nuove citazioni e convalida i campi mancanti
prima dell'invio in modo che gli anni non vengano visualizzati come "[?]" nel PDF assemblato:
[Validatore BibTeX](/tools/bibtex-validator/). Oleafly completa e controlla
chiavi di citazione contro la bibliografia del progetto mentre scrivi, così rotte
Le chiavi `\cite` vengono visualizzate prima del log.

## Dati e PHI

Non inserire mai dati identificabili del paziente in figure o didascalie destinate a a
repo che altri possono clonare. Utilizza schemi non identificati. Conserva qualsiasi cosa
sensibile sotto gli stessi controlli del set di dati clinici, non accanto al
diagramma dei metodi pubblici.

## Cosa non è questo

Il local-first è ancora sottoposto alla revisione dell'IRB, agli accordi sull'utilizzo dei dati e
deidentificazione. Attiva l'IA ospitata o spingi un telecomando e alcuni byte lasceranno il file
macchina in base alle politiche di tali servizi. Ciò che cambia local-first è l'impostazione predefinita
percorso per redigere una narrativa sensibile: una cartella che controlli, un editor che
funziona offline e la cronologia può essere ripristinata senza chiedere al fornitore un file
esportazione.

## Configurazione iniziale pratica

1. Creare un progetto locale; abilitare la compilazione offline una volta che i pacchetti vengono memorizzati nella cache.
2. Lasciare l'IA disattivata a meno che la politica e il team non concordino un fornitore.
3. Remoto privato solo su un host approvato.
4. Proprietà della sezione e unico titolare della bibliografia.
5. Controlli del conteggio delle pagine dopo ogni taglio importante agli obiettivi e alla strategia di ricerca.

Scrivi come se un responsabile della conformità ti chiedesse dove si trovava la bozza. Se la risposta
è "una cartella sul laptop crittografato, cronologia Git locale, privata facoltativa
remoto", sei più in forma di "un account su un servizio che non abbiamo mai
revisionato."