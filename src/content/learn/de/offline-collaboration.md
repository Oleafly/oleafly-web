---

title: "Co-Autor ohne Live-Cursor"
description: "Patches, freigegebene Ordner plus Git und der Besitz separater Kapiteldateien."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Co-Autor ohne Live-Cursor

Kollaboratives Bearbeiten in Echtzeit, bei dem Sie die Cursorbewegungen eines Co-Autors beobachten, ist das Markenzeichen der Modell-Cloud-Editoren. Viele gute Arbeiten werden ohne sie geschrieben. Wenn Autoren lokal arbeiten, ist die auf Git basierende asynchrone Zusammenarbeit das zuverlässige Muster: Jede Person bearbeitet auf ihrem eigenen Computer, und Änderungen werden bewusst und nicht Zeichen für Zeichen zusammengeführt. Es erfordert etwas mehr Koordination und zahlt sich durch Offline-Arbeit, vollständigen Verlauf und keine Abhängigkeit vom Server anderer aus.

## Git als Rückgrat

Das Standard-Setup ist ein gemeinsam genutztes Repository, normalerweise auf GitHub, aus dem jeder zieht und dorthin pusht. Jeder Autor arbeitet in Sitzungen: Den neuesten Stand abrufen, schreiben, festschreiben, pushen. Da es sich bei LaTeX um reinen Text handelt, führt Git parallele Änderungen an verschiedenen Teilen des Dokuments automatisch zusammen, und die Einrichtung dauert nur wenige Minuten. [Stellen Sie das Papier auf GitHub](/learn/sync-with-github/) behandelt es. Wenn ein Mitarbeiter einen Git-Host nicht nutzen kann oder will, füllen Patches die Lücke: „git format-patch“ wandelt Commits in kleine Dateien um, die Sie per E-Mail versenden können, und der Empfänger wendet sie mit „git am“ an, wodurch Urheberschaft und Verlauf erhalten bleiben. Es handelt sich um einen alten Workflow, der immer noch überall dort funktioniert, wo E-Mail funktioniert.

Ein Hybrid funktioniert auch, wenn ein Co-Autor auf einem synchronisierten Ordner besteht: Behalten Sie die freigegebene Kopie der Einfachheit halber in Dropbox oder Syncthing, aber lassen Sie eine Person den Git-Verlauf verwalten und Zusammenführungen durchführen. Richten Sie die Live-Git-Checkouts zweier Personen nicht auf denselben synchronisierten Ordner, da Synchronisierungskonflikte innerhalb des „.git“-Verzeichnisses die Repositorys beschädigen.

## Teilen Sie das Dokument nach Datei auf

Zusammenführungen werden seltener, wenn Personen selten dieselbe Datei berühren. Teilen Sie das Manuskript auf, sodass jedes Kapitel oder jeder Abschnitt in einer eigenen Datei gespeichert ist, die aus einer dünnen „main.tex“ mit „\input{chapters/methods}“ abgerufen wird. Die Mechanik befindet sich in [Ein Dokument in Dateien aufteilen](/learn/split-chapter-files/). Weisen Sie dann die Eigentümerschaft zu: Jeder Co-Autor erstellt Entwürfe in seinen eigenen Dateien, und ein Integrator kümmert sich um die Präambel, die Zusammenführung und den endgültigen Lesevorgang, um die Konsistenz von Notation und Ton zu gewährleisten. Dies spiegelt die Art und Weise wider, wie Softwareteams es vermeiden, sich gegenseitig in die Quere zu kommen, und es funktioniert aus den gleichen Gründen.

## Was eigentlich schief geht

Der zu vermeidende Fehlermodus besteht darin, dass zwei Personen denselben Absatz im selben Zeitfenster bearbeiten. Git markiert es als Konflikt, und LaTeX-Konflikte sind lesbar, aber mühsam zu lösen. Daher ist die günstigste Lösung eine soziale Lösung: Eine kurze Nachricht mit der Aufschrift „Ich bin heute in der Einleitung“ verhindert fast alle Konflikte. Zwei Schreibgewohnheiten reduzieren den Rest. Behalten Sie einen Satz pro Quellzeile bei, damit parallele Änderungen an benachbarten Sätzen überhaupt nicht kollidieren, und ziehen Sie ihn unmittelbar vor jeder Schreibsitzung, damit Sie immer den neuesten Text bearbeiten.