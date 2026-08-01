---

title: "Editor LaTeX local-first e cloud: cosa scambi effettivamente"
description: "Gli editor di Cloud LaTeX scambiano la proprietà per comodità. Local-first significa file su disco, un vero editor di ricerca, vero Git, lavoro offline e rete solo per le azioni che intraprendi, oltre a ciò che appartiene ancora al browser."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Gli editor di Cloud LaTeX hanno vinto per un semplice motivo: zero setup. Apri una scheda, compila.
Per anni questo è stato il modo più semplice per combattere una distribuzione TeX su a
laptop, e molte persone ancora lo preferiscono.

Tuttavia, l'installazione non è più la parte difficile per la maggior parte dei documenti. I motori piacciono
Tectonic può essere spedito all'interno di un'app desktop e prelevare pacchetti su richiesta, quindi
installazione e compilazione è all'incirca il tempo necessario per creare un account cloud. Il
La domanda che vale la pena porsi è: cosa ti compra ancora l'abbonamento e cosa tu
consegnare per questo.

## A cosa rinunci nel cloud

Il tuo manoscritto si trova nel database di qualcun altro. L'esportazione di solito funziona, fino a quando
i piani cambiano, un'azienda viene acquisita o una funzionalità scompare, mentre il tuo
la scadenza rimane fissa.

La crittografia a riposo tiene lontani gli estranei. Il servizio stesso può ancora vedere
bozze, sovvenzioni e risultati inediti che passano attraverso la sua infrastruttura.

La latenza è un altro costo silenzioso. Una sequenza di tasti gestita sulla tua macchina è quasi
sempre più scattante. Le code di compilazione e i timeout del livello gratuito vengono visualizzati solo quando il file
build non è tuo.

Offline è l'altro divario. Su un volo, nel seminterrato di un ospedale o in un luogo sicuro
lab senza rete aperta, un editor del browser è solo una scheda vuota.

Alcuni editor ospitati inseriscono anche la cronologia completa, le modifiche al tracciamento o la sincronizzazione Git/GitHub
dietro i livelli a pagamento. A Git locale non interessa quale piano hai acquistato.

## Cosa cambia local-first

I progetti sono semplici file in una cartella che puoi aprire. La storia può essere reale
ispezionare da qualsiasi terminale. La compilazione viene eseguita sulla CPU senza coda. I tuoi file
e la cronologia Git non dipendono dal mantenimento dell'integrità dell'account fornitore.

La digitazione multiutente dal vivo è ancora il punto in cui vincono gli strumenti del browser. Molte ricerche
le settimane sembrano diverse: redazione solista, viaggi, reti limitate, voglia
proprietà o che necessitano di un editor di documenti completo che indicizzi l'intero progetto.
I laboratori già si ramificano e aprono richieste pull per il codice. I documenti possono utilizzare lo stesso
modello asincrono per i coautori che non devono condividere un cursore.

## La rete esiste ancora (di proposito)

Gli strumenti locali continuano a cercare pacchetti di primo utilizzo, pacchetti di modelli, citazioni
metadati, AI ospitata se la accendi, telecomandi Git e aggiornamenti. Il punto è
l'impostazione predefinita: le compilazioni in bozza e memorizzate nella cache rimangono su disco.

Progetti, metadati, build e cronologia Git risiedono localmente. La rete viene eseguita quando
intraprendi un'azione che ne ha bisogno. La modifica e la compilazione memorizzata nella cache dovrebbero funzionare
non in linea. Incolla un DOI o abilita un modello cloud e quelle richieste arriveranno dove vuoi
li hanno mirati. Ditelo chiaramente in qualsiasi articolo sulla privacy invece di fingere
la rete non accade mai.

## La pila attorno a un foglio

Una settimana di ricerca non è quasi mai "solo un editore". Di solito è un mix di:

- ambiente di scrittura con vera intelligenza di progetto
- Distribuzione TeX e manutenzione dei pacchetti
- Visualizzatore PDF con SyncTeX
- Client Git e host remoto
- ricerca delle citazioni e igiene della bibliografia
- Strumenti grammaticali e ortografici
- diagramma o figura pipeline
- scadenze e altri strumenti collaterali

Uno spazio di lavoro di ricerca locale è utile quando questi pezzi si trovano insieme
progetto in cartella semplice: un editor sensibile al progetto (riferimenti, citazioni, macro, struttura,
anteprima matematica, correzione offline), compilazione supervisionata, area di lavoro PDF con
SyncTeX tollerante allo stantio, checkpoint Git automatici, importazione ed esportazione, preflight
prima dell'invio, agente opzionale che deve mostrare le differenze.

## Dove si inserisce Oleafly

[Oleafly](https://github.com/Oleafly/Oleafly) è creato per quella categoria: gratuito,
spazio di lavoro desktop open source per LaTeX, Typst e Markdown. In bundle
compilatori. Libreria di progetti con fork e ricerca. Editor a livello di progetto
intelligence (definizione, riferimenti, ridenominazione, controlli ref/cite in tempo reale, struttura
visualizzazioni, le tue macro con forme di argomento, TexLab/Tinymist quando disponibile). Vivi
anteprime di matematica. Harper e Hunspell offline solo in prosa. PDF integrato con
SyncTeX bidirezionale che esegue ancora la mappatura mentre è in sospeso una ricostruzione. Vero Git con
checkpoint automatici e GitHub opzionale. Cerca e incolla citazioni. Diagramma
Compositore per TikZ modificabile. Verifica preliminare. AI opzionale con approvazione controllata con la tua chiave
o Ollama locale.

La [pagina sulla privacy](/privacy/) è volutamente corta: nessun account Oleafly, no
telemetria del prodotto. Le bozze vivono sulla tua macchina. AI ospitata, ricerca di citazioni e
GitHub comunica con questi servizi in base alle loro politiche, con le tue chiavi e il tuo file
azioni.

Se vuoi un piccolo assaggio senza installare, il [browser gratuito
tools](/tools/) viene eseguito sul lato client. L'app desktop è il luogo in cui l'intelligenza,
compilazione, cronologia e albero del progetto si incontrano effettivamente.

## Quando la nuvola vince ancora

Rimani nel browser quando il prodotto è la creazione condivisa in tempo reale, quando a
collaboratore non installerà nulla, o quando già il tuo istituto
standardizzato su un editor ospitato per l'invio.

Abbina lo strumento alla settimana che hai effettivamente. Se hai bisogno di multiutente live
digitando, rimani nel browser (o usa Git quando i coautori possono lavorare in modo asincrono). Se tu
si preoccupano maggiormente della proprietà, della profondità offline e di un editor di ricerca locale completo,
mantieni il manoscritto come file su disco, crea il PDF sul tuo computer e conservalo
la cronologia in un repository che qualsiasi strumento Git può aprire.