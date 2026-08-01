---

title: "Cartigli e frontespizi"
description: "maketitle per articoli, frontespizio per tesi e relazioni."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Cartigli e frontespizi

Un articolo si apre con un cartiglio: titolo, autori, data, posto in alto alla prima pagina. Una tesi si apre con un frontespizio completo disposto secondo le specifiche dell'università. LaTeX li tratta come due problemi diversi. Il primo è automatizzato da "\maketitle" e il secondo è una tela bianca chiamata ambiente "titlepage".

## Il cartiglio

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

I primi tre comandi memorizzano solo i metadati. Non appare nulla nel PDF quando vengono eseguiti, motivo per cui possono essere inseriti nel preambolo. `\maketitle`, posto dopo `\begin{document}`, è il momento in cui il blocco memorizzato viene composto. All'interno di "\author", "\\" interrompe una riga (il modo usuale per inserire un'affiliazione sotto un nome) e "\and" separa più autori in modo che siano affiancati. `\date{\today}` stampa la data di qualunque giorno compili. Scrivi `\date{}` con parentesi graffe vuote per omettere completamente la riga della data. Tralasciando del tutto `\date` viene comunque stampata la data odierna.

Nella classe "article" il blocco si trova nella parte superiore della prima pagina con il testo che segue di seguito. In "report" e "book" ottiene una pagina propria. I diari e le lezioni di conferenza sostituiscono questo meccanismo con i propri comandi per affiliazioni, email e ORCID, quindi all'interno di un modello di sede dovresti seguire il suo file di esempio anziché i comandi standard.

## Un frontespizio realizzato a mano

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

L'ambiente `titlepage` ti offre una pagina non numerata e il pieno controllo manuale, che è ciò che solitamente richiedono i regolamenti della tesi. Ogni pezzo dell'esempio guadagna il suo posto. `\centering` centra tutto ciò che segue nell'ambiente. `\vspace*{2cm}` spinge il titolo verso il basso dal bordo superiore. La forma con asterisco è importante perché un `\vspace` senza asterisco nella parte superiore di una pagina viene scartato. Le parentesi graffe attorno a `{\Large ...}` riguardano la modifica della dimensione del carattere in modo che termini dove finisce il gruppo e `\\[1em]` interrompe la riga con un em extra di spazio sotto di essa. `\vfill` inserisce uno spazio estensibile che assorbe l'eventuale altezza rimasta, in modo che la dichiarazione di laurea e la data arrivino in fondo alla pagina, indipendentemente dalla lunghezza del titolo.

Utilizzare un meccanismo o l'altro. Combinando `\maketitle` con un ambiente `titlepage` si ottengono due frontespizi, e il classico errore da principiante è quello silenzioso: definire `\title` e `\author` ma dimenticare `\maketitle`, quindi il documento viene compilato in modo pulito senza alcun titolo. La [lezione sullo scheletro del documento](/learn/document-skeleton/) mostra dove si inserisce il blocco nel file nel suo insieme.