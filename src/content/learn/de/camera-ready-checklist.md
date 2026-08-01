---

title: "Kamerabereit ohne Panik"
description: "Deanonymisieren, Finanzierung hinzufügen, Schriftarten einbetten und das Seitenlimit erreichen: die Checkliste für die endgültige Version."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Kamerabereit ohne Panik

Akzeptiert! Nach der Feier kommt ein letzter Termin: Kamera bereit. Der Name ist ein Relikt aus der Zeit, als Verleger Ihre Seiten für den Druck fotografierten. Heute bedeutet es die endgültige Fassung, die in das Verfahren eingeht, genau so, wie die Leser sie für immer sehen werden. Danach korrigiert kein Redakteur Ihre Tippfehler. Dieser Teil liegt bei Ihnen.

## Was sich zwischen Einreichung und Kamerabereitschaft ändert

Ihre eingereichte Version wurde für Rezensenten optimiert. Die Kamera ist für die dauerhafte Aufnahme bereit, und einige Dinge drehen sich um:

| Artikel | Eingereichte Version | Kamerabereit |
|---|---|---|
| Autorennamen | Versteckt (doppelblind) | Echte Namen, Zugehörigkeiten, E-Mails |
| Danksagungen | Weggelassen | Finanzierung, Zuschüsse, Dank |
| Seitenlimit | Überprüfungslimit | Oft +1 Seite, aber genau |
| Copyright-Block | Platzhalter oder keiner | Verlagssperre, DOI, ISBN |
| Selbstzitate | Dritte Person („Smith et al.“) | Kann „unsere bisherige Arbeit“ sagen |
| Widerlegungsversprechen | Versprochen | Tatsächlich geliefert |

De-Anonymisierung ist mehr als das erneute Hinzufügen von Namen. Durchsuchen Sie die Quelle nach jedem Ort, an dem Sie über Ihre Identität geschrieben haben. Die üblichen Verstecke finden Sie unter [Anonymisierung für doppelblinde Überprüfung](/learn/anonymization-double-blind/) und kehren Sie sie dann alle um.

## Noch einmal die genaue Seitenbeschränkung

Grenzwerte für die Kamerabereitschaft werden von Herausgebern und nicht nur von Lehrstühlen durchgesetzt, und der zusätzliche Inhalt (Autorensperre, Danksagungen) verschlingt Platz. Wenn Sie plötzlich sechs Zeilen zu Ende haben, tun Sie es ehrlich: Straffen Sie Prosa und Zahlen, anstatt Abstandsbefehle zu missbrauchen. Die Techniken in [Seitenlimits ohne Verbrechen](/learn/page-limits-without-crimes/) gelten hier doppelt, da Verlage die Formatierung überprüfen.

## Schriftarten müssen eingebettet sein

Das ist derjenige, der die Leute beißt. Verlage führen automatisierte Prüfungen durch, und der häufigste Ablehnungsgrund sind nicht eingebettete Schriftarten, die normalerweise durch ein aus einem Plottool exportiertes Abbildungs-PDF eingeschmuggelt werden. Prüfen Sie mit „pdffonts yourpaper.pdf“: Jede Schriftart sollte „emb: ja“ lauten. Wenn man das nicht tut, ist der Täter fast immer eine Figur; Exportieren Sie es erneut mit eingebetteten Schriftarten oder als ordnungsgemäß generiertes PDF.

## Das abschließende Korrekturlesen: Referenzen zuerst

Referenzen sind der Ort, an dem sich die Entropie konzentriert. Bevor Sie hochladen:

- [ ] NEIN "??" Zitate oder undefinierte Referenzen im Protokoll
- [ ] Jeder Bibliographieeintrag enthält Ort, Jahr und korrekt geschriebenen Titel
- [ ] Autorennamen richtig geschrieben (die Leute bemerken ihren eigenen Namen)
- [ ] Nur-arXiv-Zitate wurden auf veröffentlichte Versionen aktualisiert, sofern vorhanden
- [ ] URLs in Referenzen werden weiterhin aufgelöst

Lesen Sie dann den gesamten Aufsatz einmal laut vor. Es ist langsam und es funktioniert.

## Macken beim Hochladen der Quelle

Die meisten Verlage wollen Ihre LaTeX-Quelle, nicht nur das PDF, und ihre Build-Systeme sind wählerisch: Fügen Sie die „.bbl“ ein, vermeiden Sie nicht standardmäßige Pakete, folgen Sie ihrem Dateilayout. Exportieren Sie eine saubere Quell-ZIP-Datei (Oleafly erledigt dies in einem Schritt) und kompilieren Sie sie vor dem Hochladen von Grund auf in einem leeren Ordner. Wenn es nur aufgrund einer verstreuten Datei auf Ihrem Computer erstellt wird, wird das System des Herausgebers dies herausfinden.

## Die One-Sitting-Checkliste

- [ ] Namen, Zugehörigkeiten, E-Mails wiederhergestellt und korrigiert
- [ ] Danksagungen und Finanzierungsnummern hinzugefügt
- [ ] Copyright-Block/DOI-Informationen aus der E-Mail des Herausgebers eingefügt
- [ ] Seitenlimit genau eingehalten
- [ ] `pdffonts` zeigt alle eingebetteten Schriftarten an
- [ ] Referenzen Korrektur gelesen
- [] Sauberes Quell-ZIP wird von Grund auf kompiliert
- [ ] Hochgeladen mit einem freien Tag

Dann ist es erledigt, dauerhaft. Zeit, über die Präsentation nachzudenken (/learn/present-your-paper/).