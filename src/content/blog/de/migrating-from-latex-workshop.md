---

title: "Beyond LaTeX Workshop: ein Forschungseditor auf Ihrem Computer"
description: "Ein speziell entwickelter Forschungseditor mit projektweiter Intelligenz, SyncTeX, Offline-Korrekturlesen, gebündelten Compilern, echtem Git und Zitaten. VS Code + LaTeX Workshop besitzt weiterhin Rezepte, Remote und den Erweiterungsmarktplatz."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) in VS Code ist ausgezeichnet. Kostenlos, MIT, sorgfältig gepflegt. Wenn Ihre Woche auf Freiform-Kompilierungsrezepten, Texdoc, Docker/WSL/Remote, Live Share oder dem Marktplatz für Vollerweiterungen läuft, behalten Sie diesen Stapel. Es ist für dieses Leben gebaut.

Dieser Beitrag ist für den Fall gedacht, dass Sie eine Document-First-App benötigen: Dokumente mit mehreren Dateien, Compiler, PDF, Git, Zitate, Abbildungen und Korrekturlesen, die bereits miteinander verbunden sind. Kostenlos und Open Source (AGPL). LaTeX, Typst, Markdown. Einfache Ordner. Kein Konto.

Funktionskarte und Verknüpfungen: [Kommt vom LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## Der Herausgeber

CodeMirror 6 mit einem projektweiten Index für LaTeX, Typst, Markdown und BibTeX.

Was Sie tatsächlich jeden Tag bekommen:

- Zur Definition gehen, Referenzen finden, Beschriftungen und Makros umbenennen (Konfliktwarnungen)
- Live-Prüfungen auf fehlerhafte Referenzen, fehlerhafte Zitate, fehlende Includes (`\cref`, `\eqref`, Bereichsreferenzen, …)
- Lokale + Projektstrukturansichten; Filtern und springen
- Vervollständigungen für Schlüssel, Pfade und Makros, die Ihr Projekt definiert („\newcommand“, xparse-Argumentformen)
- Unterstützung für „.tex“, „.ltx“, „.sty“, „.cls“; Argumentationsschnipsel; Umweltprüfungen
- TexLab für LaTeX (Opt-in-Setup); Tinymist wird für Typst versendet
- Einheitliche Diagnose: Syntax, Kompilierung, Sprachdienst, Referenzen, Zitate, Rechtschreibung, Grammatik
- Live-KaTeX-Mathe-Vorschauen; Die Quelle bleibt editierbar
- Harper + Hunspell offline nur in Prosa (Befehle und Mathematik maskiert)
- Visueller Modus für gängige Strukturen; Vim; Slash-Befehle; Registerkarten für mehrere Dateien
- Als nächstes landet die paketbewusste Befehlsvervollständigung aus einem großen Korpus (MIT-Daten des LaTeX Workshops, mit Quellenangabe versehen)

PDF-Arbeitsbereich: kontinuierliches Scrollen, Doppelseiten, Suche, Gliederung, abnehmbares Fenster. Bidirektionales SyncTeX über Kapiteldateien hinweg. Die Zuordnung funktioniert weiterhin, solange ein Neuaufbau ansteht. Das letzte gute PDF bleibt bestehen. Wenn Sie den kompilierten Quellsatz rückgängig machen, kann die Vorschau ohne eine vollständige Neukompilierung auf den aktuellen Stand gebracht werden.

CI im Buchmaßstab: Manuskript mit ca. 6.200 Zeilen, Mehrfamilienmathematik, Kapitel, Zitate, Korrekturlesen, Leistungsbudgets für Scrollen/Eingeben/Einfügen/Rückgängigmachen/Vervollständigen/Neukompilieren/SyncTeX.

LaTeX Workshop ist eine starke Erweiterung in einer allgemeinen IDE. Oleafly liefert diese Dokumentenschleife bereits vormontiert aus, sodass Sie nicht jedes Semester denselben Stapel aus Einstellungen und Marktplatzauswahlen verkabeln müssen.

## Compiler in der App

Tectonic (LaTeX) und Typst werden mit der App ausgeliefert. Markdown über verwaltetes Pandoc, wenn Sie es brauchen. Kompilieren Sie zunächst die Cache-Pakete. Danach funktionieren zwischengespeicherte Builds offline. Der Offline-Modus kann den Compiler an den Cache sperren.

Automatische Kompilierung (entprellt, abbrechbar, letzte Gewinne). „Cmd/Strg-Enter“ neu kompilieren. Stopp-Taste. Humanisierte Fehlerkarten auf der Linie. Letztes gutes PDF, während ein neuerer Build ausgeführt wird.

Rezepte, Latexmk-Ketten, Shell-Escape und benutzerdefinierte „.latexmkrc“ bleiben im Steuerhaus von LaTeX Workshop. Die meisten Arbeiten und Abschlussarbeiten benötigen lediglich eine zuverlässige überwachte Engine.

Vorlagen: 23 gebündelte Starter (IEEE, ACM, Elsevier, Beamer, Abschlussarbeit, Lebensläufe, Typst-Leerzeichen, …) plus 99 in herunterladbaren Paketen. Speichern Sie jedes Projekt als Vorlage. Optionale Generierung von KI-Vorlagen beim Einrichten eines Modells.

## Bibliothek, Git, Recherchetools

Projekte als Bücher: Einbandfarbe, Motorabzeichen, Abstammungslinie, Hover-Vorschau der letzten PDF-Seite, Lesezeichen, „/docs“-Suche in jedem Dokument. Fork speichert neben der Einreichungskopie den vollständigen Git-Verlauf für eine riskante Neufassung.

Echter Git vom ersten Tag an. Staging, Side-by-Side-Diffs (Arbeitsbaum editierbar), Verwerfen, Wiederherstellen. Automatische Prüfpunkte nach erfolgreichen Kompilierungen und Bearbeitungen im Leerlauf; Die KI führt vor dem ersten Schreibvorgang einen Checkpoint aus. GitHub optional (PAT oder Device-Flow OAuth). Terminal „Git Log“ stimmt mit der App überein.

DOI / arXiv / title einfügen → deduplizieren → „.bib“ → „\cite“. Batch-Import von BibTeX, RIS, EndNote, Zotero RDF. Zitatsuche in arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Diagramm-Composer zum bearbeitbaren TikZ. Validator, Tabellen, Gleichungen, Laborsuche, Fristen, PDF-zu-LaTeX, Bild-zu-LaTeX mit einem Vision-Modell.

## Optionale KI

Aus, bis Sie es konfigurieren. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Auf der Festplatte verschlüsselte Schlüssel. Anfragen gehen an den von Ihnen gewählten Anbieter.

Der Assistent bearbeitet, kompiliert, liest Protokolle, extrahiert PDF-Text, durchsucht Literatur und führt Pläne. Schreibvorgänge sind Genehmigungsunterschiede. Löschvorgänge erfordern eine separate Bestätigung. Inline Ask-AI für eine Auswahl. Loopback-MCP für Claude Code, Cursor und Freunde. Auch bei ausgeschalteter KI funktionieren Editor, Kompilierung, Git und Zitate weiterhin.

## Preflight, Export, Datenschutz

Preflight: Struktur, undefinierte Referenzen, doppelte Beschriftungen, Extraktionsvorschau im Parser-Stil, Screenreader-orientierte Ergebnisse. Jede Risikokennzeichnung enthält ausreichend Kontext, sodass Sie sie selbst überprüfen können, anstatt sich auf einen Black-Box-Score zu verlassen.

Export: PDF immer; DOCX/HTML/Markdown, wenn Pandoc verfügbar ist; PowerPoint für Decks; EPUB für Bücher; Quell-ZIP-Adresse für die Übergabe.

Kein Oleafly-Konto. Keine Produkttelemetrie. Absturzberichte öffnen ein vorausgefülltes GitHub-Problem, das Sie überprüfen. Netzwerk für Pakete, Vorlagen, gehostete KI, Zitate, Updates, GitHub. Bearbeitung, zwischengespeicherte Kompilierung, Grammatik, Rechtschreibprüfung und lokales Git funktionieren offline.

## Wenn LaTeX Workshop noch passt

- Freiform-Rezepte, latexmk, Shell-Escape, „.latexmkrc“.
- texdoc im Editor
- Docker, WSL, Remote-Entwicklung
- Live Share und Live-Mehrbenutzerbearbeitung
- Leben auf dem VS Code-Marktplatz für nicht dokumentarische Arbeit

Oleafly ist eine öffentliche Betaversion. Schwere Dateien der Publisher-Klasse können Tectonic immer noch zum Stolpern bringen; melde sie.

## Probieren Sie es aus

1. Laden Sie es herunter
   [Veröffentlichungsseite](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS signiert/notariell beglaubigt; Windows darf einmal SmartScreen verwenden).
2. Importieren Sie Ihre „.tex“-, „.bib“- und Abbildungen (oder beginnen Sie mit einer Vorlage).
3. Einmal kompilieren und dann einen Tag lang auf einem echten Papier schreiben.

Lassen Sie VS Code installiert. Dieselben Dateien funktionieren in beiden Apps. Wenn ein Tag auf einer echten Zeitung in Oleafly besser läuft, verschieben Sie mehr Projekte; Wenn Rezepte und Fernbedienung für einen bestimmten Baum immer noch gewinnen, belassen Sie diesen Baum im Workshop.