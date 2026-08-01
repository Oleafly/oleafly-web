---

title: "Studenti di matematica: teoremi, dimostrazioni e notazione che rimane coerente"
description: "stili amsthm, numerazione dei lemmi, igiene delle macro, derivazioni lunghe e abitudini multi-file per resoconti di matematica pura e applicata."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Gli elaborati di matematica sono notazioni e strutture di dimostrazione. LaTeX è l'impostazione predefinita perché entrambi
diventa doloroso in Word quando l'argomento dura più di una pagina. Il compilatore è
non la parte difficile. La coerenza è: numeri di teorema che saltano quando inserisci a
lemma, una lettera "V" che significa tre cose diverse e dimostrazioni che lasciano il
Marchio QED mobile sulla riga successiva.

Questa è una configurazione pratica per corsi, appunti su arXiv e capitoli di tesi.
Ruba ciò di cui hai bisogno; ignora il resto finché non fa male.

## amsthm presto, prima del primo lemma

Carica `amsthm` prima di inventare un "Teorema" in grassetto ad hoc. intestazioni:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

La numerazione per sezione mantiene stabili i riferimenti quando si inserisce materiale sopra a
risultato. È comune condividere un contatore (`[teorema]`) per lemmi e proposizioni
in matematica pura; i documenti applicati a volte numerano tutto in modo indipendente. Scegline uno
e attenersi ad esso per l'intero documento.

Lezione: [teoremi e dimostrazioni](/impara/teoremi-dimostrazioni/).

## Prove che finiscono in modo pulito

Utilizza l'ambiente "prova" in modo che il segno di fine prova arrivi nel posto giusto:

```latex
\begin{proof}
  ...
\end{proof}
```

Se l'ultima riga è un'equazione visualizzata, termina con "\qedhere" così fa la casella
non orfano nella riga seguente. Le prove nidificate (affermazione all'interno di una prova) funzionano
meglio come ambienti "claim" con le proprie brevi dimostrazioni che come ambienti indentati
prosa che non si chiude mai.

Per i compiti in cui l'insegnante desidera passaggi segnati a mano, utilizza comunque LaTeX
il PDF di invio pulito, ma conserva il lavoro approssimativo in un file di note separato in modo da farlo
non eliminare l'unica riga corretta durante la riscrittura.

##Macroigiene

Definire i simboli una volta:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Se due nozioni condividono una lettera, disambiguate con le macro (`\VectSpace` vs
`\RandomVar`) invece di riutilizzare `V` con caratteri diversi. I coautori no
indovina quale carattere significa quale oggetto. Quando un foglio di annotazione supera uno schermo,
inseriscilo in `notation.tex` e `\input` in modo che tutti modifichino un file.

Gli strumenti di intelligenza artificiale adorano inventare nuovi simboli. Se ne usi uno, incolla il blocco macro in
il prompt e richiede l'utilizzo solo di nomi definiti. Si applica la stessa disciplina
senza AI: nuovo simbolo → aggiungi al foglio → quindi digita.

## Allinea per derivazioni lunghe

"align" e "split" mantengono leggibili i calcoli su più righe. Il numero ti allinea solo
citerà con `\eqref`. Un muro di equazioni numerate è più difficile da seguire di un
breve racconto con due righe contrassegnate.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

Per una singola equazione su più righe che dovrebbe contenere un numero, utilizzare "split".
all'interno di "equazione". Per quanto riguarda i casi, `cases` o `aligned` sono migliori di un array fatto in casa di
tubi.

## Riferimenti incrociati che sopravvivono al riordino

Non scrivere mai "secondo il Teorema 2.3" come semplice testo. Utilizzare `\ref` o, con `cleveref`,
`\cref{thm:principale}`. Le etichette vanno dopo la didascalia o la riga del titolo del teorema, non
prima. Se due capitoli condividono etichette come `thm:main`, prefisso per capitolo
(`ch3-thm:main`) altrimenti otterrai destinazioni silenziose errate quando unisci i file.

Il go-to-definition a livello di progetto e i controlli in tempo reale dei riferimenti non funzionanti aiutano su più file
tesi. Adesso questo è il normale territorio degli editori di ricerca, non un lusso.

## Appunti e tesi multifile

Anche un lungo set di compiti è più semplice con un file root e input di sezione. Tesi
quasi sempre vuoi `\include` per capitolo e `\includeonly` mentre ne crei uno
capitolo alla volta. Mantieni le figure sotto `figures/ch3/` così fa il riordino dei capitoli
non interrompere i percorsi.

La compilazione completa della tesi diventa lenta. Modalità figura bozza, esternalizza TikZ pesante e
compila solo il capitolo che stai modificando quando puoi. Vedi
[file di capitoli divisi](/learn/split-chapter-files/) e
[velocizzare la compilazione](/learn/speed-up-compilation/).

## Quando il PDF è da consegnare

I corsi hanno ancora bisogno di un guscio noioso: margini del programma, numeri di pagina,
titolo e talvolta una dichiarazione di integrità accademica. Il
[riferimento rapido](/learn/cheatsheet/) copre questo argomento in modo che tu possa dedicare attenzione
la prova.

Mantieni la fonte. Un PDF contrassegnato senza `.tex` è un vicolo cieco quando si presenta il problema successivo
set riutilizza lo stesso preambolo. Una cartella locale con la cronologia Git (o un file search
editor che checkpoints compila per te) batte `final_v3_really.pdf` sul file
desktop.

## Prima di inviare

Assicurati che teoremi e lemmi condividano uno schema di numerazione coerente, ogni simbolo al suo interno
il corpo è definito nel foglio macro e le prove utilizzano `proof` / `\qedhere`
dove necessario. Numera solo le equazioni che citi. Tutti i riferimenti incrociati dovrebbero esserlo
`\ref`/`\cref`, numeri non codificati. Apri il PDF una volta: caratteri incorporati, margini
corrispondere al brief.

## Compiti contro carta

Per i compiti, la chiarezza batte l’intelligenza del pacchetto. Per un articolo o un capitolo di tesi,
investire una volta nella configurazione del teorema e nel foglio macro, quindi riutilizzarli. Non ricostruire
numerazione a metà progetto perché un post sul blog suggeriva uno stile diverso.

## Condivisione con i coautori

Invia un PDF da leggere e un repository (o zip dei sorgenti) da modificare. Se a
coauthor restituisce solo il markup scansionato, lo applica lo stesso giorno e si impegna. Stanco
le pile di carta sono il modo in cui due persone "aggiustano" lo stesso lemma in modo diverso.

Dopo il lavoro di configurazione, LaTeX scompare per lo più e puoi pensare ai conti.