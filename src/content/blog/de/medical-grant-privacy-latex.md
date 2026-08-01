---

title: "Klinisches Schreiben und Verfassen von Fördermitteln: Datenschutz, nachverfolgbare Entwürfe und Offline-LaTeX"
description: "Warum es Autoren aus den Bereichen Medizin, öffentliche Gesundheit und Fördermittel wichtig ist, wo der Entwurf gespeichert wird, und wie ein lokaler Forschungsredakteur mit echtem Git, Offline-Kompilierung und ohne Konto in die Begutachtungszyklen passt."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Klinische Manuskripte und Förderberichte enthalten oft sogar sensible Details
bevor die Anonymisierung endgültig ist. Jeden Tastendruck einem Dritten überlassen
Der Editor ist ebenso eine politische Entscheidung wie eine Werkzeugpräferenz. IRBs, Datennutzung
Vereinbarungen, und der Krankenhaus-IT ist es egal, dass ein Cloud-Editor praktisch ist
23 Uhr.

In diesem Beitrag geht es um das Entwerfen und Setzen von Texten auf eine Art und Weise, die Sie erklären können
Compliance. Behandeln Sie es als Arbeitsablauf-Ratschlag, nicht als rechtliche Überprüfung.

## Über einfache Dateien lässt sich leichter nachdenken

Ein Ordner mit „.tex“ und Zahlen kann sich auf einer verschlüsselten Festplatte befinden, einem Krankenhaus
Laptop-Image oder eine Maschine mit Luftspalt. Sie können die Compliance auf einen Pfad verweisen.
Browserprojekte erfordern das Vertrauen in das Zugriffsmodell, den Exportpfad usw. eines Anbieters
Liste der Unterauftragsverarbeiter.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) ist darauf ausgelegt
Weg mit Absicht: kein Konto, keine Produkttelemetrie, Projekte als gewöhnliche Ordner
mit einem echten Git-Repository. Die [Datenschutzseite](/privacy/) ist kurz, weil die
Für das Dokument ist kein Oleafly-Server erforderlich. Netzwerk ist für Sie da
take (Pakete, optionale Zitatsuche, gehostete KI, wenn Sie sie aktivieren, GitHub),
nicht für jeden Tastendruck des Entwurfs.

Wenn die Richtlinie Cloud-KI verbietet, lassen Sie den Assistenten ausgeschaltet oder richten Sie ihn auf einen lokalen
Modell. Der Editor, die Kompilierungsschleife und Git funktionieren weiterhin.

## Verfolgen Sie Änderungen, ohne in Word zu leben

Grant-PIs fordern immer noch „Änderungen verfolgen“. Im LaTeX-Land bedeutet das normalerweise
Git-Verlauf plus PDF-Kommentare von Mitautoren oder ein kurzer Word-Export für die
Person, die sich weigert, etwas zu installieren. Behalten Sie „.tex“ als Quelle der Wahrheit bei;
siehe [Mitautoren, die nur Word sprechen](/learn/collaborator-uses-word/).

In Oleafly ist jedes Projekt vom ersten Tag an ein Git-Repo: automatische Prüfpunkte
nach erfolgreichen Kompilierungen und Bearbeitungen im Leerlauf, Side-by-Side-Diffs, Ein-Klick
Wiederherstellen, optional GitHub, wenn Sie eine private Fernbedienung wünschen. Sie können ein Ganzes teilen
Anwendungspaket in ein zweites Projekt (vollständiger Verlauf) zu kopieren, um einen riskanten Schnitt zu versuchen
ohne die Einreichungskopie zu berühren. Wenn Sie den optionalen KI-Assistenten verwenden, ist dies der Fall
Prüfpunkte vor der ersten Bearbeitung und landet Änderungen nur durch Genehmigung
Unterschiede.

Benennen Sie Commits nach Zielen oder Abschnitten („aim2-methods-cut“), damit ein PI sie überfliegen kann
Geschichte ohne das Lesen von Unterschieden wie ein Software-Ingenieur.

## Offline ist in Krankenhäusern nützlich

Klinische Netzwerke blockieren zufällige SaaS-Domänen. Ein lokaler Compiler schreibt weiter
zwischen EHR-Sitzungen möglich. Oleafly liefert Tectonic (und Typst) in der App;
Pakete werden nach der ersten Verwendung zwischengespeichert, und der Offline-Modus kann das Netzwerk für die verweigern
Compiler. Rechtschreibprüfung und Grammatik werden lokal auf Prosa ausgeführt (sie überspringen Befehle und
Mathematik). Das sind die Einschränkungen, um die sich die Krankenhaus-IT normalerweise kümmert, also lokal
Forschungsredakteure tauchen oft auf.

SyncTeX und ein PDF neben der Quelle sind wichtig, wenn Sie eine Seitenbeschränkung festlegen
an einem Pflegestationscomputer mit unzuverlässigem WLAN.

## Vorlagen, Seitenbeschränkungen und Preflight

Bei NIH-Stil- und Foundation-Vorlagen geht es um Ränder, Schriftarten und Seitenränder.
Geometrie- und Schriftartenpakete sind wichtiger als clevere Makros. Als PDF kompilieren und
Überprüfen Sie die Seitenzahl nach jedem größeren Schnitt, nicht am Abend vor dem Portal
schließt. Beginnen Sie mit einer bekannten Vorlage in der Galerie, wenn eine passt. passt immer noch
die aktuelle FOA für Schriftarten, Ränder und Struktur (spezifische Ziele als eine Seite).
bedeutet eine Seite).

Wenn das PDF einem maschinellen Lesegerät (Lebensläufe, einige institutionelle) überstehen muss
Portalen) zeigt Preflight Struktur und Extraktionsergebnisse im Parser-Stil an
bevor Sie absenden. Dabei handelt es sich um heuristische Risikosignale, die Sie lesen und auf die Sie reagieren können.

## Multi-PI-Zusammenarbeit

Eigene Dateien nach Abschnitt oder Ziel. Eine Person besitzt die Master-Datei „.bib“ oder wird gemeinsam genutzt
Zotero-Gruppenexport. Vereinbaren Sie, ob Co-Autoren TeX bearbeiten oder PDF-Kommentare zurückgeben.
Private Remotes nur auf genehmigten institutionellen Git-Hosts, wenn die Richtlinien dies erfordern
es; Nicht jeder Förderentwurf gehört auf den öffentlichen GitHub.

## Bibliographie-Manager

Freigegebene Zotero-Gruppen exportieren eine „.bib“, die mehrere PIs aktualisieren können. Importieren in
das Projekt, fügen Sie DOIs ein, wenn Sie neue Zitate hinzufügen, und validieren Sie fehlende Felder
vor der Einreichung, damit Jahreszahlen im zusammengestellten PDF nicht als „[?]“ auftauchen:
[BibTeX-Validator](/tools/bibtex-validator/). Oleafly vervollständigt und prüft
Zitierschlüssel gegen die Projektbibliographie, während Sie schreiben, also kaputt
„\cite“-Schlüssel werden vor dem Protokoll angezeigt.

## Zahlen und PHI

Fügen Sie niemals identifizierbare Patientendaten in Abbildungen oder Bildunterschriften ein, die für einen bestimmten Zweck bestimmt sind
Repo, das andere klonen können. Verwenden Sie anonymisierte Schaltpläne. Bewahren Sie alles noch auf
empfindlich unter den gleichen Kontrollen wie der klinische Datensatz, nicht neben dem
Öffentliches Methodendiagramm.

## Was das nicht ist

Local-First unterliegt immer noch der IRB-Prüfung, den Datennutzungsvereinbarungen usw
De-Identifikation. Schalten Sie die gehostete KI ein oder drücken Sie eine Fernbedienung, und einige Bytes verlassen die
Maschine gemäß den Richtlinien dieser Dienste. Was sich zuerst lokal ändert, ist die Standardeinstellung
Weg zum Verfassen einer sensiblen Erzählung: ein Ordner, den Sie kontrollieren, ein Editor, der
Läuft offline und der Verlauf kann wiederhergestellt werden, ohne einen Anbieter darum bitten zu müssen
exportieren.

## Praktisches Start-Setup

1. Erstellen Sie ein lokales Projekt. Aktivieren Sie die Offline-Kompilierung, sobald Pakete zwischengespeichert sind.
2. Lassen Sie KI ausgeschaltet, es sei denn, die Politik und das Team einigen sich auf einen Anbieter.
3. Private Remote nur auf einem zugelassenen Host.
4. Abschnittseigentum und ein einziger Bibliografieeigentümer.
5. Überprüfung der Seitenzahl nach jeder größeren Kürzung der Ziele und Forschungsstrategie.

Schreiben Sie so, als würde ein Compliance-Beauftragter fragen, wo sich der Entwurf befindet. Wenn die Antwort
ist „ein Ordner auf dem verschlüsselten Laptop, Git-Verlauf lokal, optional privat“.
Remote“ sind Sie in einer besseren Verfassung als „ein Konto bei einem Dienst, den wir nie haben.“
überprüft.“