---

title: "Gestapelde indices"
description: "Lege groepen voor tensorplaatsing en matchingveldconventies."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Gestapelde indices

Tensornotatie in relativiteits- en differentiaalmeetkunde onderscheidt bovenste indices van lagere, en de horizontale volgorde van de indices heeft ook betekenis: zodra indices met een metriek worden verhoogd en verlaagd, is het object met eerst een hogere index niet hetzelfde als dat met eerst een lagere index. De standaard scriptplaatsing van LaTeX negeert dat onderscheid, dus documenten met een hoge spanning vertrouwen op een kleine truc met lege groepen.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## De lege groepstruc

Als u 'T^i_j' schrijft, worden het superscript en het subscript in hetzelfde horizontale vak geplaatst, boven elkaar gestapeld. Om ze te spreiden, voegt u `{}` in, een lege groep: `T^{i}{}_{j}` koppelt `i` als superscript aan T, en koppelt vervolgens `j` als subscript aan de lege groep die volgt, zodat het subscript achter het superscript terechtkomt in plaats van eronder. Elke `{}` opent een nieuw scriptslot, en je kunt er zoveel aan elkaar koppelen als de tensor nodig heeft, zoals in `T^{i}{}_{j}{}^{k}`.

De tweede regel toont de uitbetaling op een echt object. In `R^{\mu}{}_{\nu\rho\sigma}` bezet de mu de eerste indexpositie en volgen de drie lagere indices deze. Dat is de standaardindeling voor de Riemann-tensor. Vouw de spreiding in en de indexvolgorde wordt dubbelzinnig. Wanneer elke index zich op één niveau bevindt, zoals in de metriek `g_{\mu\nu}`, is er geen truc nodig en bevat één enkele subscriptgroep ze allemaal.

Dezelfde `{}` lost ook een gewone fout op. `T^i^k` stopt het compileren met "Double superscript", omdat één atoom niet twee superscripts kan bevatten. `T^{i}{}^{k}` geeft het tweede superscript een eigen slot en compileert netjes.

## Conventies en consistentie

Of indices gespreid of gestapeld zijn, is een veldconventie. De algemene relativiteitstheorie wankelt bijna universeel. Andere gebieden zijn prima met gestapelde indices als er geen metriek is die de indices beweegt. Pas de gewoonten van uw vakgebied aan, en als u ergens iets indient, pas dan de sjabloon van het tijdschrift aan uw eigen smaak aan. Het `tensor`-pakket kan de plaatsing automatiseren met een `\tensor`-commando, maar de handmatige lege groepen zijn draagbaar, hebben geen pakket nodig en overleven elk indieningssysteem onveranderd.

Consistentie is belangrijker dan de keuze zelf. Bepaal één keer hoe de indices van elke tensor zijn gerangschikt. Voor degenen die u voortdurend typt, plaatst u er een preambule-macro omheen, zodat een late wijziging van de conventie één bewerking is in plaats van een zoektocht door het hele document. Vergelijk verspringende en gestapelde vormen naast elkaar in de [live speeltuin](/live/).