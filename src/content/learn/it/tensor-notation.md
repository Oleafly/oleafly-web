---

title: "Indici impilati"
description: "Gruppi vuoti per il posizionamento del tensore e le convenzioni dei campi di corrispondenza."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Indici impilati

La notazione tensore nella relatività e nella geometria differenziale distingue gli indici superiori da quelli inferiori, e anche l'ordine orizzontale degli indici ha un significato: una volta che gli indici vengono alzati e abbassati con una metrica, l'oggetto con prima un indice superiore non è lo stesso di quello con prima un indice inferiore. Il posizionamento predefinito degli script di LaTeX ignora questa distinzione, quindi i documenti pesanti in termini di tensori si basano su un piccolo trucco con gruppi vuoti.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## Il trucco del gruppo vuoto

Scrivendo "T^i_j" si collocano l'apice e il pedice nella stessa fessura orizzontale, impilati uno sopra l'altro. Per scaglionarli, inserisci `{}`, un gruppo vuoto: `T^{i}{}_{j}` collega `i` come apice a T, quindi collega `j` come pedice al gruppo vuoto che segue, in modo che il pedice si trovi dopo l'apice anziché sotto di esso. Ogni `{}` apre un nuovo slot di script e puoi concatenarne quanti ne ha bisogno il tensore, come in `T^{i}{}_{j}{}^{k}`.

La seconda riga mostra il profitto su un oggetto reale. In `R^{\mu}{}_{\nu\rho\sigma}` la mu occupa la prima posizione dell'indice e i tre indici inferiori lo seguono. Questo è il layout standard per il tensore di Riemann. Se si comprime lo sfalsamento, l'ordine dell'indice diventa ambiguo. Quando ogni indice si trova su un livello, come nella metrica `g_{\mu\nu}`, non è necessario alcun trucco e un singolo gruppo di pedici li contiene tutti.

Lo stesso `{}` risolve anche un semplice errore. `T^i^k` interrompe la compilazione con "Doppio apice", perché un atomo non può contenere due apici. `T^{i}{}^{k}` assegna al secondo apice il proprio slot e viene compilato in modo pulito.

## Convenzioni e coerenza

Il fatto che gli indici siano sfalsati o impilati è una convenzione di campo. La relatività generale vacilla quasi universalmente. Altre aree vanno bene con gli indici in pila quando nessuna metrica sposta gli indici. Abbina le abitudini del tuo campo e, se stai inviando da qualche parte, abbina il modello del diario prima dei tuoi gusti. Il pacchetto `tensor` può automatizzare il posizionamento con un comando `\tensor`, ma i gruppi vuoti manuali sono portatili, non necessitano di pacchetti e sopravvivono invariati a qualsiasi sistema di invio.

La coerenza conta più della scelta stessa. Decidi una volta come sono disposti gli indici di ciascun tensore. Per quelli che scrivi costantemente, inserisci una macro di preambolo attorno ad essi in modo che un cambiamento tardivo di convenzione sia una modifica piuttosto che una ricerca nell'intero documento. Confronta i moduli sfalsati e impilati fianco a fianco nel [parco giochi live](/live/).