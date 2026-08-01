---

title: "Zotero in eine .bib-Datei"
description: "Besseres BibTeX, automatischer Export, Schlüssel, die Maschinen überleben."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero in eine .bib-Datei

Zotero ist sehr gut darin, Referenzen zu sammeln: Es ruft Metadaten und PDFs über eine Browserschaltfläche ab und sorgt dafür, dass alles durchsuchbar ist. LaTeX hingegen liest nur „.bib“-Dateien. Die Brücke zwischen beiden ist das Better BibTeX-Plugin. Es wandelt eine Zotero-Sammlung in eine „.bib“-Datei um, die aktuell bleibt und, was ebenso wichtig ist, die Zitierschlüssel stabil hält, damit Ihre „\cite“-Befehle nie kaputt gehen.

## Warum der integrierte Export nicht ausreicht

Zotero kann BibTeX eigenständig exportieren, generiert jedoch jedes Mal Zitierschlüssel neu, und ein Schlüssel, der sich von „knuth_literate_1984“ in „knuth_literate_1984-1“ ändert, unterbricht stillschweigend jedes „\cite“, das den alten Namen verwendet. Beim Export handelt es sich außerdem um einen einmaligen Schnappschuss, sodass die Datei in dem Moment veraltet ist, in dem Sie ein Papier hinzufügen. Besseres BibTeX behebt beide Probleme: Schlüssel werden anhand einer von Ihnen gewählten Formel generiert, können angeheftet werden, sodass sie sich nie ändern, und der Export kann sich automatisch aktualisieren.

## Einrichten der Pipeline

Installieren Sie zunächst Better BibTeX von der Website über den Dialog „Tools, Plugins“ von Zotero und starten Sie dann Zotero neu. Zweitens legen Sie in den Better BibTeX-Einstellungen eine Zitierschlüsselformel fest. Ein Muster, das Schlüssel wie „knuth1984“ oder „knuth1984literate“ erzeugt, ist einfach einzugeben und in der Quelle leicht zu erkennen. Drittens klicken Sie mit der rechten Maustaste auf die Sammlung, die zu Ihrer Arbeit gehört, wählen Sie Sammlung exportieren, wählen Sie das Better BibTeX-Format und aktivieren Sie „Auf dem neuesten Stand halten“, bevor Sie die Datei beispielsweise als „refs.bib“ in Ihrem Projektordner speichern. Von da an führt das Hinzufügen oder Bearbeiten eines Elements in Zotero dazu, dass die Datei innerhalb weniger Sekunden neu geschrieben wird.

Richten Sie Ihr Dokument abschließend mit „\bibliography{refs}“ oder „\addbibresource{refs.bib}“ auf die exportierte Datei, genau wie bei einer handgeschriebenen Datenbank. Die Verkabelung wird in [Vom .bib-Schlüssel zum Zitat im Text](/learn/add-citations/) behandelt.

## Arbeitsteilung

Behandeln Sie Zotero als Master-Datenbank und die „.bib“-Datei als generiertes Artefakt, das im Repository des Papiers gespeichert ist. Das Festschreiben der „.bib“ neben der „.tex“ bedeutet, dass ein Co-Autor oder Sie auf einem anderen Computer das Papier kompilieren können, ohne Zotero überhaupt installiert zu haben. Bearbeiten Sie die exportierte Datei nicht manuell. Beim nächsten automatischen Export werden Ihre Änderungen überschrieben. Korrigieren Sie stattdessen Metadaten in Zotero, und die Korrektur wird übernommen. Wenn ein Eintrag nach dem Export immer noch falsch aussieht, führen Sie ihn durch den [BibTeX-Validator](/tools/bibtex-validator/), um zu sehen, mit welchem ​​Feld der Stil nicht zufrieden ist.

Eine Angewohnheit verhindert die meisten zukünftigen Probleme: Sobald ein Schlüssel in einem Manuskript erscheint, pinnen Sie ihn in Better BibTeX an (klicken Sie mit der rechten Maustaste auf das Element, Better BibTeX, Pin BibTeX-Schlüssel). Angeheftete Schlüssel überstehen Formeländerungen, Maschinenverschiebungen und Bibliotheksumstrukturierungen, und genau das muss ein Zitierschlüssel leisten.