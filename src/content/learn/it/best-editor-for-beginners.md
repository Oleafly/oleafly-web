---

title: "Scegli un editor che aprirai effettivamente"
description: "Ciò di cui hanno bisogno i principianti: un compilatore, un'anteprima, SyncTeX e file che rimangono sul disco."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Scegli un editor che aprirai effettivamente

Il miglior editor LaTeX per un principiante non è il più potente. È quello che ti porta da un file vuoto a un PDF compilato con il minimo attrito. La compilazione anticipata e spesso conta più di ogni singola funzionalità. Quattro funzionalità coprono ciò di cui hai bisogno fin dal primo giorno.

Innanzitutto, la compilazione dovrebbe funzionare senza installare manualmente una distribuzione TeX multi-gigabyte. In secondo luogo, desideri un'anteprima PDF affiancata con SyncTeX, quindi un clic nel PDF passa alla riga di origine corrispondente e viceversa. Terzo, i tuoi file dovrebbero essere semplici `.tex` sul disco, quindi puoi comprimerli, inviarli via email o inserirli in Git senza una fase di esportazione. Quarto, gli errori dovrebbero arrivare come messaggi leggibili, non solo come log TeX grezzo.

## Le opzioni realistiche

| Redattore | Impostazione | Funziona offline | Note |
| --- | --- | --- | --- |
| Oliva | Scarica l'applicazione | Modifica sempre; le compilazioni utilizzano i pacchetti memorizzati nella cache | Motore in bundle, cronologia Git, AI opzionale con chiave personalizzata |
| TeXShop / TeXworks | Installa prima una distribuzione TeX | Sì | Minimo e affidabile |
| Codice VS + Workshop LaTeX | Installa prima una distribuzione TeX | Sì | Una buona soluzione se lavori già in VS Code |
| Sul retro | Crea un account nel browser | Limitato | Installazione zero; i progetti vivono sui loro server |

Le due righe centrali condividono un costo nascosto: prima che l'editor sia utile, devi installare e gestire TeX Live o MiKTeX tu stesso. È qui che molti principianti si fermano. L'opzione del browser rimuove la configurazione ma sposta i file in un account. I compromessi sono trattati in modo più approfondito in [progetto del browser vs cartella su disco](/learn/overleaf-vs-local/).

## Un valore predefinito ragionevole

Se desideri file locali senza amministrazione TeX, inizia con [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): il compilatore viene fornito all'interno dell'app e scarica i pacchetti la prima volta che un documento ne ha bisogno. Qualunque editor tu scelga, abbinalo al [tutorial sul primo documento](/learn/first-document/) e tieni il [cheatsheet](/learn/cheatsheet/) a portata di mano. Oggi l'editor conta meno della compilazione della tua prima pagina.