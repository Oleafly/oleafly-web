---

title: "Akronyme und Symbollisten"
description: "Glossare, eine zusätzliche Skizze oder eine selbst erstellte Liste, wenn das ausreicht."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Akronyme und Symbollisten

In langen Dokumenten häufen sich Abkürzungen, und die damit verbundenen Konventionen sind streng. Ein Akronym wird bei der ersten Verwendung vollständig buchstabiert und anschließend abgekürzt, und eine Abschlussarbeit benötigt normalerweise eine Liste der Abkürzungen im Vorwort. Das manuell beizubehalten schlägt auf vorhersehbare Weise fehl. Sie ordnen zwei Kapitel neu an, die erste Verwendung verschiebt sich und plötzlich erscheint „ML“ drei Seiten vor „Machine Learning (ML)“. Das Paket „glossaries-extra“ verfolgt die Erstverwendung für Sie.

## Die automatisierte Route

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

Die Option „acronym“ aktiviert die Unterstützung von Akronymen und „\makeglossaries“ schaltet die Maschine ein, die während der Kompilierung Einträge sammelt. Jedes „\newacronym“ benötigt drei Argumente: einen Schlüssel, den Sie in den Text eingeben, die Kurzform und die Langform. Definieren Sie sie alle in der Präambel oder in einer separaten Datei „\input“, damit sie an einem Ort leben.

Im Textkörper geben Sie niemals das Akronym selbst ein:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Das erste „\gls{ml}“ im Dokument gibt „maschinelles Lernen (ML)“ aus, und jedes spätere „\gls{ml}“ gibt nur „ML“ aus. Da das Paket die Verwendung und nicht die Position in der Quelle verfolgt, folgt die Erweiterung der ersten Verwendung, wohin auch immer Ihre Umstrukturierung sie verschiebt. „\printglossaries“ druckt die gesammelte Liste der Abkürzungen überall dort aus, wo Sie sie platzieren, normalerweise nach dem Inhaltsverzeichnis. Verwandte Befehle decken die entsprechende Grammatik ab: „\glspl“ für Pluralformen, „\Gls“ für einen großgeschriebenen Satzanfang.

Der Haken ist der Aufbau. Zwischen den LaTeX-Durchläufen muss der Helfer „makeglossaries“ ausgeführt werden, um die Einträge zu sortieren und zu formatieren, andernfalls erzeugt „\printglossaries“ stillschweigend nichts. Vollständige Latexmk-Setups handhaben dies automatisch. Bei einfacheren Pipelines ist dies möglicherweise nicht der Fall, und glossaries-extra bietet einen Ersatz dafür. Wenn Ihre Liste sich hartnäckig weigert, angezeigt zu werden, ist der fehlende Hilfslauf der erste Verdacht, weit vor einem Fehler in Ihrem Dokument.

## Die handgefertigte Route

Für eine einfache Liste von Symbolen reicht oft eine manuell gepflegte „Beschreibungs“-Umgebung aus:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Jedes „\item[...]“ gibt sein Klammerargument als fettgedruckte Beschriftung mit der folgenden Erklärung aus, die genau der Form einer Notationsliste entspricht. Es gibt kein First-Use-Tracking, aber eine Symbolliste benötigt selten eines; Symbole werden unabhängig davon dort definiert, wo sie zum ersten Mal in der Mathematik auftauchen.

Der ehrliche Rat ist, das Werkzeug an die Waage anzupassen. Ein Papier mit fünf Akronymen ist handschriftlich einfacher zu verwalten. Eine 200-seitige Abschlussarbeit mit 40 Seiten ist das nicht, und dort amortisiert das Paket seine Einrichtungskosten um ein Vielfaches. Die [Listen-Lektion](/learn/lists/) behandelt die Umgebung „Beschreibung“ ausführlicher.