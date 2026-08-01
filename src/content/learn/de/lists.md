---

title: "Aufzählungszeichen, Zahlen und Definitionslisten"
description: "Aufschlüsselung, Aufzählung, Beschreibung, Verschachtelung und benutzerdefinierte Elementbezeichnungen."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Aufzählungszeichen, Zahlen und Definitionslisten

Listen in LaTeX sind Umgebungen: Sie öffnen eine mit „\begin{...}“, schließen sie mit „\end{...}“ und markieren jeden Eintrag mit „\item“. LaTeX übernimmt dann die Nummerierung, die Aufzählungszeichen, die Einrückung und den Abstand für Sie. Der letzte Teil ist der Punkt. Sie nummerieren nie etwas von Hand neu, und wenn Sie den dritten Eintrag einer nummerierten Liste löschen, werden die Einträge vier bis zehn stillschweigend zu drei bis neun.

## Die drei Listenumgebungen

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

„itemize“ erzeugt eine ungeordnete Aufzählungsliste und ist die richtige Wahl, wenn die Einträge keine Reihenfolge haben, wie zum Beispiel eine Liste von Annahmen. „Aufzählen“ nummeriert jeden Eintrag automatisch, was Sie für Schritte wünschen, die in der richtigen Reihenfolge ausgeführt werden, oder für Elemente, auf die Sie zurückgreifen möchten. Sie können sogar ein „\label“ nach einem „\item“ in einer Aufzählung einfügen und später mit „\ref“ auf seine Nummer verweisen, genau wie Sie es bei einem Abschnitt tun würden.

„Beschreibung“ ist die am wenigsten bekannte der drei, aber sehr nützlich. Jedes „\item“ benötigt ein optionales Argument in eckigen Klammern, und dieses Argument wird als Beschriftung fett gedruckt, gefolgt vom Definitionstext. Es ist die natürliche Umgebung für Glossare, Notationslisten oder beliebige „Begriff:Erklärungs“-Strukturen.

## Verschachtelung

Nest-Umgebungen für mehrstufige Listen. Fügen Sie einen vollständigen „\begin{itemize} ... \end{itemize}“-Block in ein „\item“ einer äußeren Liste ein und LaTeX rückt ihn ein und wechselt das Aufzählungszeichen automatisch. Dasselbe gilt für „enumerate“, wobei durch die Verschachtelung der Nummerierungsstil auf jeder Ebene geändert wird: zuerst arabische Zahlen, dann Buchstaben, dann römische Ziffern. LaTeX unterstützt vier Verschachtelungsebenen, was mehr ist, als jedes lesbare Dokument benötigt. Wenn Sie sich in einer Tiefe von drei Ebenen befinden, möchte das Material wahrscheinlich stattdessen Prosa oder eine Tabelle sein.

## Benutzerdefinierte Etiketten

Jedes einzelne Element kann seine eigene Markierung mit dem optionalen Argument überschreiben: „\item[(a)]“ gibt „(a)“ anstelle des Aufzählungszeichens oder der Zahl aus. Dies ist praktisch für einmalige Fälle, aber wenn Sie eine ganze Liste neu gestalten möchten, wird die Automatisierung durch manuelles Ändern jedes Elements zunichte gemacht. Laden Sie dazu das Paket „enumitem“, mit dem Sie Dinge wie „\begin{enumerate}[label=(\alph*)]“ schreiben können, um die gesamte Liste an einer Stelle neu zu beschriften, und das Ihnen auch Optionen zum Verkleinern des vertikalen Abstands bietet.

Ein häufiger Fehler von Anfängern besteht darin, eine Leerzeile zwischen „\item“-Einträgen zu lassen, in der Hoffnung, einen Abstand zwischen ihnen zu schaffen. Die Leerzeile ist innerhalb einer Liste harmlos, hat aber optisch keine Auswirkung. Der Abstand wird durch die Listenumgebung selbst oder durch „enumitem“-Optionen gesteuert. Noch etwas: Jede Listenumgebung muss vor jedem Text mindestens ein „\item“ enthalten, sonst erhalten Sie die verwirrende Fehlermeldung „Etwas stimmt nicht – vielleicht fehlt ein \item“. Sie können mit allen drei Umgebungen im [Live-Spielplatz](/live/) experimentieren.