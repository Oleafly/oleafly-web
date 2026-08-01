---

title: "pt, em, larghezza del testo"
description: "Unità assolute e relative ai caratteri effettivamente impostate."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, larghezza del testo

Quasi ogni comando di layout in LaTeX richiede una lunghezza: spazio verticale, larghezza dell'immagine, margini, spessore delle linee. Una lunghezza è un numero più un'unità e la scelta dell'unità decide se il layout si adatta quando cambia la dimensione del carattere o la geometria della pagina o se si interrompe il giorno in cui lo fa.

| Unità | Significato |
| --- | --- |
| `pt` | Punto (base) |
| `loro` | Larghezza relativa al carattere |
| "ex" | Altezza relativa al carattere |
| `cm` / `mm` / `pollici` | Assoluto |
| `\larghezza del testo` | Larghezza del blocco di testo |
| `\larghezza della linea` | Larghezza della colonna/minipagina corrente |

## Unità assolute e relative

"pt" è il punto della stampante, l'unità base di TeX. Le dimensioni dei caratteri e molte impostazioni predefinite interne sono espresse in punti e un pollice equivale a 72,27 pt secondo i calcoli di TeX. "cm", "mm" e "in" sono le unità assolute familiari, appropriate quando un requisito è veramente fisico, come un margine obbligatorio di un pollice.

`em` e `ex` si adattano al carattere corrente: un em è all'incirca la dimensione del carattere espressa come larghezza e un ex è circa l'altezza di una x minuscola. Il loro vantaggio è la proporzionalità. Un `\vspace{1em}` rimane visivamente coerente se il documento passa dal tipo 10pt al tipo 12pt, dove un `\vspace{12pt}` codificato diventa troppo stretto o troppo largo.

## Lunghezze fornite dal documento

"\textwidth" è la larghezza del blocco di testo della pagina. "\linewidth" è la larghezza del contenitore corrente, che equivale a "\textwidth" nel testo normale ma si restringe all'interno di una minipagina, un elenco o una colonna. Un decimale davanti scala uno dei due, e questo è il modo standard per dimensionare le cifre:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

La prima riga inserisce un em di spazio verticale. Il secondo imposta l'immagine a metà della larghezza del blocco di testo, quindi se i margini cambiano, la figura si ridimensiona con essi e non trabocca mai nel margine. All'interno di una minipagina o di un layout a due colonne, preferisci `0.5\linewidth`, poiché `\textwidth` è più ampio dello spazio effettivamente disponibile.

Anche le lunghezze sono impostabili. `\setlength{\parindent}{0pt}` rimuove il rientro del paragrafo e lo stesso comando regola la maggior parte delle lunghezze dei layout con nome.

L'errore comune è dimensionare le figure in centimetri. Funziona finché non cambiano la classe del documento, il formato della carta o i margini, quindi ogni figura deve essere risintonizzata manualmente. Le larghezze espresse come frazioni di `\textwidth` o `\linewidth` sopravvivono intatte a tutte queste modifiche, motivo per cui i template le utilizzano quasi esclusivamente.