---

title: "Vraagtekens in plaats van cijfers"
description: "Etiketten hebben nog een pas nodig; plaatsing van labels na bijschriften."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Vraagtekens in plaats van cijfers

U compileert, en waar een cijfer of vergelijkingsnummer zou moeten staan, toont de PDF `??`. Dat is geen fout in uw bron. Het is de manier waarop LaTeX een verwijzing weergeeft die het nog niet kan oplossen, en de oplossing wordt meestal gewoon opnieuw gecompileerd.

## Waarom één pas niet genoeg is

LaTeX leest uw document in één keer van boven naar beneden. Wanneer het een `\label` tegenkomt, schrijft het het huidige nummer naar het `.aux`-bestand; wanneer het een `\ref` tegenkomt, zoekt het het nummer op uit het `.aux`-bestand dat door de vorige run is geschreven. Bij een nieuwe compilatie is er geen eerdere run, dus elke referentie wordt afgedrukt als `??`. De tweede keer leest het voltooide `.aux`-bestand en vult de cijfers in. De gebundelde compiler van Oleafly wordt automatisch opnieuw uitgevoerd totdat de cijfers zich vestigen, maar als je `pdflatex` met de hand aanstuurt, is de tweede compilatie jouw taak.

## Wanneer ?? overleeft een tweede passage

Als de vraagtekens blijven bestaan, voer dan drie controles uit. Vergelijk eerst de spelling in `\ref` karakter voor karakter met `\label`; labels zijn hoofdlettergevoelig en een spatie telt. Ten tweede, controleer waar het label zich bevindt. `\label` registreert de waarde van de meest recent getrapte teller, en in een float is het `\caption` die de teller opstapt, dus het label moet na het onderschrift komen:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Een label dat vóór het bijschrift wordt geplaatst, wordt zonder klachten samengesteld, maar pakt de verkeerde teller op, meestal de huidige sectie, zodat de referentie een plausibel maar verkeerd nummer afdrukt in plaats van '??'. Die variant is erger omdat je hem gemakkelijk over het hoofd ziet. Ten derde, als het `.aux`-bestand halverwege de run werd verwijderd of een compilatie werd onderbroken, kunnen de opgenomen labels onvolledig zijn; opnieuw compileren vanuit een schone staat.

## De waarschuwingen lezen

De log vertelt je in welk geval je zit. "Er waren ongedefinieerde referenties" betekent dat minstens één `\ref` niets heeft gevonden. "Label(s) zijn mogelijk gewijzigd. Opnieuw uitvoeren om de kruisverwijzingen goed te krijgen" betekent dat een nieuwe poging het probleem zal oplossen. "Label vermenigvuldig gedefinieerd" betekent dat twee `\label`-opdrachten dezelfde naam delen, en LaTeX gebruikt er stilletjes één, dus hernoem de naam totdat elk label uniek is. Een naamgevingsconventie met de voorvoegsels `eq:`, `fig:` en `tab:` zorgt ervoor dat botsingen zeldzaam zijn en dat de bron makkelijker te doorzoeken is; de labelworkflow zelf wordt behandeld in [getallen en aanwijzingen voor vergelijkingen](/learn/number-equations/).