---

title: "Jahre später war Overleaf ein lokaler Forschungsarbeitsplatz"
description: "Overleaf hat kollaboratives LaTeX zum Mainstream gemacht – und kostenlose Konten messen immer noch Zusammenarbeit, Verlauf, KI und Kompilierzeit. Wo der Browser dünn bleibt (Lebensläufe, Forks, Export, Multi-Engine-Arbeit) und was ein freier lokaler Arbeitsbereich auf Ihrer Festplatte ausfüllt."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Jahrelang war [Overleaf](https://www.overleaf.com/) die Standardantwort auf die Frage „Wie starte ich LaTeX überhaupt?“ Teilen Sie einen Link. Beobachten Sie den Cursor eines Co-Autors. Kompilieren Sie in der Cloud. Diese Auffahrt ist echt. Für Multiplayer-Papiersprints ist dies immer noch der Fall.

Sobald Sie dort für eine Abschlussarbeit, ein Stellenangebot oder ein langes Solo-Umschreiben leben, fühlt sich das kostenlose Produkt langsam klein an. Ein Mitarbeiter. Der Verlauf wird in Stunden gemessen. KI pro Tag gezählt. Zeitüberschreitungen beim Kompilieren. Git und die vollständige Historie stecken hinter kostenpflichtigen Plänen oder einer Campus-Lizenz, die Sie verlieren, wenn Sie gehen. Der Browser eignet sich hervorragend als Browser mit gemeinsam genutztem Puffer. Es wurde nie als vollständiger Forschungsarbeitsbereich erstellt: Lebensläufe mit ATS-Prüfungen, Projektverzweigung, Export in mehrere Formate, Typst neben LaTeX, Offline-Wochen, unbegrenzter lokaler Verlauf.

Hier erhält Overleaf immer noch den offenen Tab, wo das kostenlose Kontingent und der Produktumfang erschöpft sind und was sich ändert, wenn diese einfachen Dateien in einer kostenlosen Desktop-App ([Oleafly](https://github.com/Oleafly/Oleafly)) gespeichert sind, die Sie einmal herunterladen.

## Welche Jahre haben Sie auf Overleaf tatsächlich gekauft?

**Vorteile, die immer noch gelten**

- Mehrbenutzerbearbeitung, Kommentare und Chat in Echtzeit – immer noch die beste Option für „drei Personen, eine Zusammenfassung, heute Abend“
- Keine Installation für einen Co-Autor, der immer nur einen Link öffnet
- Riesige Vorlagengalerie und Muskelspeicher für Herausgeber/Institutionen
- Campus-SSO und Standortlizenzen, mit denen Sie kostenpflichtige Funktionen auch auf dem Campus kostenlos nutzen können
- Visueller/Code-Schalter und eine Politur, die dem Fachgebiet beibrachte, was „Online-LaTeX“ bedeutet

**Wo es dünn bleibt (besonders frei)**

Veröffentlichte Einzelpläne (überprüfen Sie [Overleaf-Preise] noch einmal (https://www.overleaf.com/user/subscription/plans); Zahlen verschieben sich):

| Kostenlos | Bezahlt / org |
| --- | --- |
| **1 Mitarbeiter** pro Projekt | 10 (Student/Standard) oder unbegrenzt (Pro) |
| **5 AI-Nutzungen/Tag** | Höhere Meter; vollwertiger Assistent gegen Bezahlung; Pro = maximale KI |
| **Grundlegendes Zeitlimit für die Kompilierung** | **24×** Basis-Timeout |
| **Verlauf: letzte 24 Stunden** | Vollständige Geschichte |
| Integrationen (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Premium für viele Tarife |
| Student ~8–10 $/Monat · Standard ~17–21 $/Monat · Profi ~33–42 $/Monat · Universitäten: Vertrieb kontaktieren | |

Die kostenlose Version ist also ein echter Editor für größtenteils Solo-Cloud-Arbeiten. Es wird zu einer Demo, sobald Sie einen zweiten Co-Autor, die Version vom letzten Monat, längere Kompilierungen oder mehr als fünf KI-Anstöße benötigen.

Es gibt noch einen zweiten Aspekt, bei dem es nicht um die Paywall geht: Wofür das Produkt gedacht ist. Overleaf optimiert die Zusammenarbeit für LaTeX-Dokumente in einem Browser. Es ist schwächer als Ort für:

- Besitzen Sie ein Portfolio mit Aufsätzen, Abschlussarbeiten, Postern und Lebensläufen mit Aufteilung und Abstammung
- Exportieren Sie dasselbe Projekt in Word, HTML, Markdown, PowerPoint (Beamer) und EPUB, ohne andere Tools verwenden zu müssen
- Führen Sie einen ATS-/Barrierefreiheits-Preflight durch, bevor eine Bewerbung Ihre Hände verlässt
- Behalten Sie Typst und Markdown neben LaTeX unter einer Bibliothek und einem Git-Modell
- Arbeiten Sie offline in einem Flugzeug oder einem gesperrten Krankenhausnetzwerk
- Verwenden Sie KI mit Ihrem eigenen Schlüssel oder lokalen Modell, wobei jede Bearbeitung als Genehmigungsunterschied dient
- Behandeln Sie den Verlauf als echtes Git, das Sie für immer in einem Terminal öffnen können

Das sind Forschungsprobleme. Overleaf zunächst für den Mehrspielermodus optimiert; Der Rest des Schreibtisches hatte nie das gleiche Gewicht.

## Schreiben auf Papier: beidseitig

**Umseitige Seite.** Das Teilen eines Papierentwurfs mitten im Absatz ist reibungslos. Live-Kommentare zum Dokument. Für Gruppen, die Git nie anfassen werden: Das ist das ganze Produkt. Der Herausgeber ist kompetent. Die Vorschau ist für die meisten Artikel in Ordnung. Sie sind nie die Person, die TeX Live für den Studenten installieren muss.

**Wo das Schreiben von Papier immer noch weh tut.** Die projektweite Intelligenz ist neben einem Desktop-Rechercheeditor, der auf einem vollständigen Index basiert, begrenzt: Umbenennen eines Makros über Kapitel hinweg, Live-Überprüfung von „\cref“ und Zitaten mit mehreren Schlüsseln, Strukturansichten über einen 200-Seiten-Baum, KaTeX-Vorschauen während der Eingabe, Grammatik, die „\Befehle“ ignoriert. Kostenlose Kompilierzeitüberschreitungen beißen komplexe Thesen. Der kostenlose Verlauf verschwindet nach einem Tag. Sie können eine Einreichungsversion nicht wirklich wie ein Repo in einen Experimentzweig verzweigen – Sie duplizieren ein Projekt in der Cloud und hoffen, dass Sie sich daran erinnern, welches welches welches ist.

**Oleafly-Seite.** Das Papier ist ein Projekt mit mehreren Dateien auf der Festplatte. Projektweite Go-to-Definition, Referenzen, Umbenennung, Live-Ref/Cite-Diagnose (einschließlich der chaotischen „\eqref“-/„\cref“-Familie), Strukturansichten, Vervollständigungen für Makros, die Sie mit echten Argumentformen definiert haben, TexLab/Tinymist, sofern verfügbar, Live-Mathe-Vorschauen, Offline-Harper + Hunspell nur auf Prosa. PDF-Arbeitsbereich mit veraltetem SyncTeX, Spreads und abnehmbarem Fenster. Automatische Kompilierung auf Ihrer CPU mit humanisierten Fehlern. Der Editor wird im Buchmaßstab mit CI (ca. 6.200 Zeilen) getestet.

**Wie die Leute es normalerweise aufteilen.** Live-Co-Authoring bleibt auf Overleaf. Umfassendes Multi-File-Authoring, Offline-Wochen, unbegrenzte lokale Kompilierung und lokale Verschiebung des Verlaufs. Viele Leute machen beides mit denselben einfachen Dateien.

## Lebensläufe und Dokumente, die Maschinen lesen

Overleaf erstellt einen Lebenslaufkurs. Was es nicht gut macht, ist, das Stellenmarkt-PDF als Produkt zu behandeln: ATS-orientierte Vorlagen, deterministisch auswählbarer Text und ein Preflight-Panel, das zeigt, was ein Extrakt im Parser-Stil tatsächlich sieht (Name, Abschnitte, Risiken) – mit Bewertungen, auf die Sie reagieren können. Web-Lebenslauf-Ersteller verkaufen diese Geschichte gegen eine monatliche Gebühr und fangen das Layout in ihrem SaaS ein.

Oleafly liefert lebenslauforientierte Vorlagen, Preflight und kostenloses Git, sodass „Industrie-Lebenslauf“, „Akademischer Lebenslauf“ und „Stipendium“ abgespaltene Projekte mit vollständigem Verlauf sind – und nicht drei Cloud-Kopien mit dem Namen „cv_final_v4“.

Wenn Ihr einziges Ergebnis ein gemeinsames Papier ist, überspringen Sie diesen Abschnitt. Wenn Sie vom selben Schreibtisch aus auch Bewerbungen verschicken, werden Sie die Lücke schnell bemerken.

## Forking, Klonen, Abstammung

Cloud-„Kopierprojekt“ existiert. Was Forschungsabteilungen wollen, ähnelt eher einem Git-Fork: vollständiger Verlauf, sichtbare Abstammungslinie, Experimentieren, ohne den kamerabereiten Baum zu berühren. Die Bibliothek von Oleafly behandelt Projekte wie Bücher in einem Regal; Fork kopiert das Projekt und seinen Git-Verlauf; Die Abstammung ist auf der Karte angegeben. Workflows im Klonstil über GitHub Push/Pull sind kostenlos.

Der umseitige kostenlose Verlauf beträgt 24 Stunden. Bezahlte Geschichte ist besser; Es handelt sich immer noch um einen Service-Zeitplan und nicht um ein Repo, das Sie behalten, wenn das Konto stirbt.

## Export und Übergabe

Zeitschriftenportale wünschen PDF und oft eine Quell-ZIP-Datei. Privatdetektive wollen Word. Kursseiten wünschen PDF. Vorträge brauchen Folien. Bücher wollen EPUB. Die Welt von Overleaf besteht hauptsächlich aus PDFs aus der Cloud LaTeX plus Download-Quelle. Das deckt einen Großteil der Wissenschaft ab.

Das Exportmenü von Oleafly ist kontextabhängig: PDF und Quell-ZIP immer; Word, HTML, Markdown, Klartext über verwaltetes Pandoc; PowerPoint von Beamer; EPUB für buchähnliche Projekte; Abbildung PNG-Pfade für Bildprojekte. Die Wiedergabetreue variiert (seien Sie ehrlich zu komplexem LaTeX → DOCX), aber der Pfad ist in der App verfügbar und kostenlos.

## AI, mit dem Messgerät bei Tageslicht

Rückseite kostenlos: fünf AI-Anwendungen pro Tag. Bezahlte Pläne erhöhen die Obergrenze und schalten den Assistenten frei. Organisationen können KI für alle deaktivieren.

Oleafly: KI standardmäßig deaktiviert. Dein Schlüssel oder Ollama. Neun Anbieter, wenn Sie gehostet werden möchten. Der Agent kann Protokolle bearbeiten, kompilieren, lesen, PDF-Text prüfen und Literatur durchsuchen. Jeder Schreibvorgang ist ein Genehmigungsunterschied. Löschvorgänge erfordern eine eindeutige Bestätigung; Git-Checkpoint zuerst. Inline Ask-KI. MCP für externe Kunden. Wir verkaufen Ihnen keine Token.

Gehosteter Komfort mit einer täglichen Obergrenze und einer Abonnementsleiter oder mitgebrachtem Modell und begehbaren Änderungen. Wählen Sie das Vertrauensmodell aus, das Sie einem Labor oder einem IRB erklären können.

## Mehrmotorige Realität

Overleaf ist eine LaTeX-Cloud (und Freunde). Typst hat anderswo eine eigene Web-Story. Markdown-Notizen sind in einem weiteren Tool enthalten.

Oleafly führt LaTeX (Tectonic), Typst und Markdown in einer Bibliothek aus, mit verwalteten Compilern, einem Git-Modell und einer PDF-Oberfläche. Vorlagen filtern nach Engine. Das ist eine andere Produktform – ein Forschungstisch, kein weiterer LaTeX-Tab.

## Offline, Privatsphäre, Eigentum

Browser: kein Netzwerk, kein Editor. Drafts leben auf ihren Servern gemäß ihren Bedingungen. Der Export ist Ihr Ausweg, bis er es nicht mehr ist (Kontozugriff, Planänderungen, Abschluss).

Lokaler Arbeitsbereich: einfache Ordner, echtes Git, Offline-Bearbeitung und zwischengespeicherte Kompilierungen, optionaler strenger Offline-Modus. Kein Oleafly-Konto. Keine Produkttelemetrie. Netzwerk für Pakete, Zitate, gehostete KI, GitHub, Updates – wenn Sie danach fragen.

## Wo Overleaf immer noch gewinnt

- Live-Eingabe und Kommentare mehrerer Benutzer zu dieser Stunde
- Co-Autoren ohne Installation
- Institutionelles SSO und „Jeder hat bereits Overleaf“
– Herausgebergewohnheiten, die standardmäßig ein Cloud-Projekt öffnen

Live-Multiplayer für Oleafly ist auf der Roadmap. Bis dahin ist Git der Collab-Pfad, oder Sie behalten Overleaf für den Live-Sprint und die lokale App für die Deep Week. Da es sich bei allem um einfache Dateien handelt, ist das Hin- und Herwechseln eher eine langweilige Infrastruktur als ein Migrationsprojekt.

## Wo ein kostenloser lokaler Arbeitsplatz die Nase vorn hat

- Vollständige Editortiefe (Projektindex, Makros, Struktur, Mathematikvorschau, prosabasiertes Korrekturlesen, Sprachserver)
- PDF-Arbeitsbereich mit veraltetem SyncTeX
- Echtes Git + kostenlose GitHub-Synchronisierung + Projektzweig mit Verlauf
- Typst + Markdown neben LaTeX
- Suchen/Einfügen/Importieren von Zitaten, Diagrammerstellung, Preflight, Export in mehrere Formate
- KI unter Ihren Schlüsseln mit Genehmigungsunterschieden – oder vollständig lokal
- 0 $ für immer, AGPL, einmal herunterladen

## Snapshot-Tabelle

| | Umseitig frei | Rückseite bezahlt / Campus | Oleafly |
| --- | --- | --- | --- |
| Kosten | $0-Trichter | 8 $–42 $/Monat oder Standortlizenz | **$0 für immer** (AGPL) |
| Konto | Erforderlich | Erforderlich | Keine |
| Echtzeit-Multiplayer | Ja (1 Zusammenarbeit kostenlos) | Weitere Kooperationen | Roadmap; heute = Git |
| Geschichte | 24 Stunden | Vollständig (Plan) | Vollständiges Git auf der Festplatte |
| Git / GitHub | Prämie | Prämie | Eingebaut, kostenlos |
| Kompilieren | Server, grundlegendes Timeout | 24× Timeout | Lokal, Ihre Hardware |
| Offline | Nein | Nein | Ja (zwischengespeicherte Pakete) |
| Motoren | LaTeX-erste Cloud | LaTeX-erste Cloud | LaTeX + Typst + Markdown |
| Projektintelligenz | Browsertauglich | Browsertauglich | Volle IDE-Tiefe für mehrere Dateien |
| PDF / SyncTeX | Browservorschau | Browservorschau | Vollständiger Arbeitsbereich + veraltete Karte |
| KI | 5 Anwendungen/Tag | Dosiert / max | Dein Schlüssel oder Ollama; Genehmigungsunterschiede |
| Lebenslauf / ATS-Preflight | DIY | DIY | Eingebaut |
| Gabel mit Geschichte | Projekt kopieren | Projekt kopieren | Bibliothekszweig + vollständiges Git |
| Exportieren | PDF + Quelle | PDF + Quelle | PDF, Quelle, DOCX, HTML, MD, PPTX, EPUB… |
| Vorlagen | Großes Wolkenset | Großes Wolkenset | 23 gebündelt + 99 Packungen + individuell |
| Daten-Startseite | Ihre Server | Ihre Server | Ihre Festplatte |

## Beides ohne Drama ausprobieren

1. Zippen Sie die Overleaf-Quelle.
2. Installieren Sie Oleafly von
   [Veröffentlichungsseite](https://github.com/Oleafly/Oleafly/releases/latest).
3. Import; einmal kompilieren; Schreiben Sie einen Tag lang auf einer echten Arbeit oder einem Lebenslauf.
4. Behalten Sie das Overleaf-Projekt für alle Live-Multiplayer, die Sie noch benötigen.

Tectonic kann immer noch auf schwere Publisher-Klassen stoßen – melden Sie diese; Sie prägen die Roadmap. Die meisten Arbeiten und Abschlussarbeiten im ACM/IEEE/Elsevier-Stil sind in Ordnung.

## Schließung

Overleaf hat sein Jahrzehnt verdient. Der kostenlose Mehrspielermodus fühlt sich immer noch wie Magie an, wenn heute Abend drei Personen denselben Absatz benötigen. Für Eigentum, umfassende Bearbeitung, Forks, Exporte, Multi-Engine-Arbeit, unbegrenzten Verlauf und von Ihnen kontrollierte KI ist ein kostenloser lokaler Schreibtisch die ehrlichere Lösung. Laden Sie Oleafly einmal herunter, behalten Sie Overleaf für Live-Sprints, wenn Sie es noch benötigen, und entscheiden Sie sich anhand echter Papers statt einer Feature-Matrix.