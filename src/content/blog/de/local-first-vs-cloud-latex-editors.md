---

title: "Local-First vs. Cloud-LaTeX-Editoren: Was Sie tatsächlich handeln"
description: "Cloud-LaTeX-Editoren tauschen Eigentum gegen Bequemlichkeit. Local-First bedeutet Dateien auf der Festplatte, ein echter Rechercheeditor, echtes Git, Offline-Arbeit und Netzwerk nur für die von Ihnen durchgeführten Aktionen sowie das, was noch in den Browser gehört."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Cloud-LaTeX-Editoren haben aus einem einfachen Grund gewonnen: keine Einrichtung. Öffnen Sie einen Tab, kompilieren Sie.
Das war jahrelang der einfachste Ausweg aus dem Kampf gegen eine TeX-Distribution auf einem
Laptop, und viele Leute bevorzugen ihn immer noch.

Bei den meisten Dokumenten ist die Einrichtung jedoch nicht mehr der schwierige Teil. Motoren mögen
Tectonic kann also innerhalb einer Desktop-App versenden und Pakete bei Bedarf abrufen
Die Installation und Kompilierung entspricht in etwa der Zeit, die zum Erstellen eines Cloud-Kontos benötigt wird. Die
Die Frage, die es wert ist, gestellt zu werden, ist, was Ihnen das Abonnement noch bringt und was Sie
dafür abgeben.

## Was Sie in der Cloud aufgeben

Ihr Manuskript befindet sich in der Datenbank einer anderen Person. Der Export funktioniert normalerweise, bis
Pläne ändern sich, ein Unternehmen wird übernommen oder eine Funktion verschwindet, während Ihre
Frist bleibt bestehen.

Die Verschlüsselung im Ruhezustand hält Außenstehende fern. Der Dienst selbst kann weiterhin angezeigt werden
Entwürfe, Zuschüsse und unveröffentlichte Ergebnisse, die über seine Infrastruktur laufen.

Latenz ist ein weiterer stiller Kostenfaktor. Ein Tastendruck auf Ihrem Computer ist fast erledigt
immer bissiger. Kompilierungswarteschlangen und Zeitüberschreitungen im kostenlosen Kontingent werden nur angezeigt, wenn die
Build ist nicht deins.

Offline ist die andere Lücke. Auf einem Flug, im Keller eines Krankenhauses oder in einem Safe
Labor ohne offenes Netzwerk, ein Browser-Editor ist nur ein leerer Tab.

Einige gehostete Editoren stellen auch den vollständigen Verlauf zur Verfügung, verfolgen Änderungen oder synchronisieren Git/GitHub
hinter bezahlten Stufen. Local Git ist es egal, welchen Plan Sie gekauft haben.

## Was sich zuerst lokal ändert

Projekte sind einfache Dateien in einem Ordner, den Sie öffnen können. Geschichte kann echt sein, Git you
Überprüfen Sie von jedem Terminal aus. Die Kompilierung wird ohne Warteschlange auf Ihrer CPU ausgeführt. Ihre Dateien
und der Git-Verlauf hängen nicht davon ab, dass ein Anbieterkonto fehlerfrei bleibt.

Bei der Live-Eingabe durch mehrere Benutzer sind die Browser-Tools nach wie vor die Gewinner. Viel Recherche
Wochen sehen anders aus: Solo-Entwurf, Reisen, eingeschränkte Netzwerke, Wollen
Eigentum oder Sie benötigen einen vollständigen Dokumenteditor, der das gesamte Projekt indiziert.
Labs verzweigen und öffnen bereits Pull-Requests für Code. Papiere können dasselbe verwenden
Asynchrones Muster für Co-Autoren, die keinen gemeinsamen Cursor benötigen.

## Netzwerk passiert immer noch (absichtlich)

Lokale Tools greifen immer noch nach Erstverwendungspaketen, Vorlagenpaketen und Zitaten
Metadaten, gehostete KI, wenn Sie sie aktivieren, Git-Remotes und Updates. Der Punkt ist
Die Standardeinstellung: Entwürfe und zwischengespeicherte Kompilierungen bleiben auf der Festplatte.

Projekte, Metadaten, Builds und Git-Verlauf leben lokal. Netzwerk läuft wann
Sie ergreifen eine Aktion, die es erfordert. Bearbeiten und zwischengespeicherte Kompilierung sollten funktionieren
offline. Fügen Sie einen DOI ein oder aktivieren Sie ein Cloud-Modell und diese Anfragen gehen dorthin, wo Sie sind
zielte auf sie. Sagen Sie das deutlich in jedem Datenschutzbericht, anstatt so zu tun
Netzwerk passiert nie.

## Der Stapel um ein Papier

Eine Forschungswoche ist fast nie „nur ein Redakteur“. Normalerweise handelt es sich um eine Mischung aus:

- Schreibumgebung mit echter Projektintelligenz
- TeX-Verteilung und Paketpflege
- PDF-Viewer mit SyncTeX
- Git-Client und Remote-Host
- Zitiersuche und Bibliographiehygiene
- Grammatik- und Rechtschreibhilfe
- Diagramm oder Figurenpipeline
- Fristen und andere Nebentools

Ein lokaler Forschungsarbeitsplatz ist nützlich, wenn diese Teile nebeneinander stehen
Projekt mit einfachem Ordner: ein projektbezogener Editor (Referenzen, Zitate, Makros, Struktur,
Mathe-Vorschau, Offline-Korrektur), überwachte Kompilierung, PDF-Arbeitsbereich mit
veraltetes SyncTeX, automatische Git-Checkpoints, Import und Export, Preflight
Vor dem Absenden optionaler Agent, der Unterschiede anzeigen muss.

## Wo Oleafly passt

[Oleafly](https://github.com/Oleafly/Oleafly) wurde für diese Kategorie entwickelt: kostenlos,
Open-Source-Desktop-Arbeitsbereich für LaTeX, Typst und Markdown. Gebündelt
Compiler. Projektbibliothek mit Fork und Suche. Projektweiter Editor
Intelligenz (Definition, Referenzen, Umbenennung, Live-Referenz-/Zitatprüfungen, Struktur
Ansichten, Ihre Makros mit Argumentformen, TexLab/Tinymist, sofern verfügbar). Lebe
Mathe-Vorschauen. Offline Harper und Hunspell nur in Prosa. Integriertes PDF mit
bidirektionales SyncTeX, das weiterhin zugeordnet wird, während ein Neuaufbau ansteht. Echter Git mit
Auto-Checkpoints und optional GitHub. Zitat suchen und einfügen. Diagramm
Komponist zum editierbaren TikZ. Vorflug. Optionale genehmigungsgesteuerte KI mit Ihrem Schlüssel
oder lokales Ollama.

Die [Datenschutzseite](/privacy/) bleibt absichtlich kurz: kein Oleafly-Konto, nein
Produkttelemetrie. Entwürfe leben auf Ihrem Computer. Gehostete KI, Zitatsuche und
GitHub spricht mit diesen Diensten im Rahmen ihrer Richtlinien, mit Ihren Schlüsseln und Ihrem
Aktionen.

Wenn Sie einen kleinen Vorgeschmack ohne Installation wünschen, ist der [kostenlose Browser
tools](/tools/) werden clientseitig ausgeführt. Die Desktop-App ist der Ort, an dem Intelligenz,
Kompilierung, Verlauf und Projektbaum treffen tatsächlich aufeinander.

## Wenn die Cloud immer noch gewinnt

Bleiben Sie im Browser, wenn Echtzeit-Co-Authoring das Produkt ist, wenn a
Der Mitarbeiter wird nichts installieren, oder wenn Ihre Institution dies bereits getan hat
standardisiert auf einem gehosteten Editor zur Einreichung.

Passen Sie das Tool an die Woche an, die Sie tatsächlich haben. Wenn Sie Live-Mehrbenutzer benötigen
Bleiben Sie beim Tippen im Browser (oder verwenden Sie Git, wenn Co-Autoren asynchron arbeiten können). Wenn Sie
legen mehr Wert auf Eigenverantwortung, Offline-Tiefe und einen vollständigen lokalen Rechercheredakteur,
Bewahren Sie das Manuskript als Dateien auf der Festplatte auf, erstellen Sie das PDF auf Ihrem Computer und behalten Sie es
Verlauf in einem Repo, das jedes Git-Tool öffnen kann.