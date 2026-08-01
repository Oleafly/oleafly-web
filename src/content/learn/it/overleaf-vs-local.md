---

title: "Progetto del browser e cartella su disco"
description: "La comodità del cloud rispetto alla proprietà locale, al lavoro offline e al Git reale."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Progetto browser e cartella su disco

Quando inizi a scrivere LaTeX devi affrontare una decisione anticipata: il tuo progetto vive in una scheda del browser sul server di qualcun altro o in una cartella sul tuo disco? Entrambi i modelli producono lo stesso PDF. Differiscono in chi detiene la fonte, cosa succede quando la rete si interrompe e quanta parte della toolchain circostante controlli.

## Cosa ti offre ogni modello

| | Nuvola (ad esempio sul retro) | Locale (Oleafly, TeX Live) |
| --- | --- | --- |
| Impostazione | Istantaneo, niente da installare | Una installazione |
| Non in linea | Limitato | La modifica funziona sempre; le compilazioni vengono eseguite con i pacchetti memorizzati nella cache |
| Privacy | Il provider memorizza i tuoi progetti | I file rimangono sul disco |
| Git | Attraverso un ponte di sincronizzazione | Nativo, un vero e proprio repository nella cartella |
| Collaborazione | Cursori in tempo reale | Git, patch, cartelle condivise |
| Costo | Livello gratuito più abbonamenti | Gratuito |

Un progetto cloud è una riga in un database che il servizio esegue per te. Un progetto locale è una directory che puoi aprire in un file manager, copiare su un'unità USB, cercare con qualsiasi strumento e versione con il normale Git. Questa differenza sembra astratta finché una scadenza non coincide con un’interruzione, una modifica del paywall o un volo.

## Quando il cloud è la scelta giusta

Il co-editing in tempo reale è il vero vantaggio del cloud. Se tre coautori devono scrivere nello stesso paragrafo durante l'ultima ora prima di una scadenza e nessuno di loro installerà software, un editor del browser è la risposta pratica. Niente di locale attualmente sostituisce i cursori simultanei.

## Quando il locale è la scelta giusta

Il locale vince quando la bozza è sensibile o non pubblicata, quando lavori su aerei o reti limitate, quando le cifre e i dati sono grandi o quando desideri una cronologia delle versioni che non dipenda da un livello di abbonamento. Un repository Git locale registra le tue modifiche indipendentemente dal fatto che un servizio esista o meno domani e la stessa cartella funziona con un terminale, un editor di codice o il clone di un collaboratore.

Oleafly è costruito per il lato locale di questa tabella: il compilatore viene fornito all'interno dell'app, i progetti sono cartelle semplici con cronologia Git reale e l'intelligenza artificiale opzionale viene eseguita con la tua chiave. Un confronto più lungo si trova sul [blog](/blog/local-first-vs-cloud-latex-editors/) e i documenti trattano [come i due modelli possono lavorare insieme](/docs/why-oleafly/) tramite GitHub.