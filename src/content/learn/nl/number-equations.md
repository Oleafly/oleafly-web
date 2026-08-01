---

title: "Getallen en aanwijzingen voor vergelijkingen"
description: "label, ref, eqref en nummer alleen de regels die u bedoelt."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Getallen en aanwijzingen voor vergelijkingen

Het nummeren van een vergelijking is een belofte dat u er later naar zult verwijzen. LaTeX verwerkt beide helften van die belofte: de 'vergelijkingsomgeving' wijst het nummer toe, en het labelsysteem laat je ernaar verwijzen vanaf elke plek in het document zonder ooit het nummer zelf te typen.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Etiketten en referenties

`\begin{vergelijking}` nummert de weergegeven regel. `\label{eq:bayes}` koppelt de naam `eq:bayes` aan dat nummer. De naam kunt u zelf kiezen, en een voorvoegsel `eq:` zorgt ervoor dat vergelijkingslabels onderscheidend zijn van figuren en tabellen. Om het maar te citeren: `\ref{eq:bayes}` drukt het kale getal af, terwijl `\eqref{eq:bayes}`, van `amsmath`, het tussen haakjes plaatst om overeen te komen met hoe het getal naast de vergelijking verschijnt. Geef de voorkeur aan `\eqref` voor vergelijkingen, zodat de twee stijlen overeenkomen.

Omdat getallen bij de ene keer worden geregistreerd en bij de volgende worden gelezen, toont een nieuwe compilatie `??` tot de volgende run. [Vraagtekens in plaats van cijfers](/learn/equations-show-qq/) bestrijkt die cyclus.

Als er nooit naar een weergegeven vergelijking wordt verwezen, nummer deze dan niet. Gebruik in plaats daarvan `\[ ... \]` of de `vergelijking*` met ster, zodat cijfers alleen de regels markeren die een lezer mogelijk opnieuw moet vinden.

## Enkele regels uitgelijnd nummeren

Bij meerregelige afleidingen in 'align' wordt elke regel standaard genummerd, wat zelden is wat u wilt. Twee commando's passen dat per regel aan:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` onderdrukt het nummer op de regel, dus hier blijft de tussenstap ongenummerd terwijl de eerste en laatste regel hun nummers en labels behouden. Plaats elk `\label` op de regel die het noemt, vóór de `\\`, zodat het zich aan het juiste nummer bindt. De alles-of-niets sneltoets is `align*`, wat niets telt. De volledige familie van meerlijnige omgevingen wordt behandeld in [meerlijnige vergelijkingen die op één lijn staan](/learn/align-equations/).

De veelgemaakte fout is het schrijven van het letterlijke getal, zoals in "zie vergelijking 3", dat wordt verbroken op het moment dat u er een vergelijking erboven invoegt. Ga altijd door een label en laat LaTeX bij elke compilatie opnieuw nummeren. Je kunt de nummeringsupdate live bekijken terwijl je `\notag` toevoegt en verwijdert in de [playground](/live/).