---

title: "Verpassen Sie keine Konferenztermine mehr: AoE, Abstracts und Countdowns"
description: "Warum Konferenzfristen alle verwirren (AoE, Abstract-Registrierung, Terminverschiebung), wie der offene ccf-deadlines-Datensatz hilft und wie man einen Countdown neben dem Manuskript führt."
date: 2026-07-21
tags: [conferences, deadlines]
---

Jeder Forscher kennt eine Geschichte über eine Deadline, die eigentlich zwölf Stunden betrug
früher als sie dachten. Das Papier war fertig. Das Portal war nicht. Das Übliche
Schuld daran sind Zeitzonen, abstrakte Registrierung und verschobene Daten
das Labor-Wiki aktualisiert.

Dies ist ein praktischer Leitfaden zum Lesen von Calls for Papers, zum Verfolgen von Veranstaltungsorten usw
Halten Sie den Countdown dort, wo Sie tatsächlich schreiben.

## AoE ist nicht Ihre Zeitzone

„Anywhere on Earth“ (AoE) bedeutet UTC-12: Die Frist vergeht, wenn sie abgelaufen ist
Mitternacht auf der Westseite der Internationalen Datumsgrenze. Das ist großzügig
im Vergleich zu einem harten Mittag in New York, aber nur, wenn man richtig umrechnet.

Vertrauen Sie keinem Screenshot der Kalender-App einer anderen Person. Konvertieren von
offizieller Anruf. Wenn auf der Website „23:59 AoE, 14. März“ steht, beziehen Sie sich auf den Morgen des 15. März
Kalifornien ist schon zu spät, bis Sie den Umbau selbst durchgeführt haben.

## Die abstrakte Frist ist real

Viele CS und benachbarte Veranstaltungsorte erfordern etwa eine Woche lang einen registrierten Titel und eine Zusammenfassung
vor Ablauf der vollständigen Abgabefrist. Verpassen Sie die Abstract-Deadline und die Arbeit
Frist ist irrelevant; Das Portal lässt Sie nicht einreichen.

Ordnen Sie beide Termine derselben Kalenderereignisreihe zu: Zusammenfassung, Vortrag, Gegenargumentation,
Kamerabereit. Die Widerlegungsfristen sind kurz. Kamerabereit landet oft während eines anderen
Ansturm auf die Konferenz.

## Fristen verschieben sich

Verlängerungen und Zweitrundentermine sind über Mailinglisten und soziale Feeds verteilt.
Der offizielle Aufruf (oder das Banner des Einreichungsportals) ist die einzige wertvolle Quelle
vertrauensvoll. Wenn sich ein Datum verschiebt, aktualisieren Sie Ihren Tracker noch am selben Tag. abgestanden
Tabellenkalkulationen sorgen für falsche Ruhe.

## Der offene Datensatz, der die Erkennung behebt

Die Gemeinschaft wird gepflegt
Das Projekt [ccf-deadlines](https://github.com/ccfddl/ccf-deadlines) verfolgt Hunderte
von Veranstaltungsorten als überprüfbares YAML: Fristen, Zeitzonen, Ränge und offizielle Links,
MIT-lizenziert. Da es sich um Daten und nicht um eine einzelne Website handelt, kann jeder erstellen
Filter, Countdowns und Suche darüber hinaus.

Es wird nicht jede Werkstatt in Ihrer Nische umfassen. Setzen Sie für diese weiterhin ein Lesezeichen
offizielle Seite. Verwenden Sie den Datensatz für die großen, wiederkehrenden Veranstaltungsorte, an denen die
Die Community hat die Scraping-Arbeit bereits durchgeführt.

## Countdown neben dem Manuskript

Eine separate Fristen-Website hilft nur, wenn Sie daran denken, sie zu öffnen. Das Nützliche
Der Platz für einen Countdown befindet sich neben dem Papier, das Sie fertigstellen möchten.

Wir veröffentlichen ein kostenloses [Live-Deadline-Board](/deadlines/) zum offenen Datensatz:
Countdowns, CCF- und CORE-Ränge, Feldfilter, Suche, keine Anmeldung. Die
[Oleafly-Desktop-App](https://github.com/Oleafly/Oleafly/releases/latest) stellt
Das gleiche Board ist nur einen Klick von Ihren Projekten entfernt und funktioniert offline über ein Paket
Snapshot erstellt und bei Bedarf aktualisiert. Wenn Sie um 1 Uhr morgens im Editor sind, sollten Sie das tun
Sie benötigen kein zweites Browserprofil, um zu wissen, ob AoE heute Abend oder morgen stattfindet.

Neu im Prozess? [Der Fristenlebenszyklus](/learn/deadline-lifecycle/) umfasst
Abstract-Registrierung, Widerlegungen und von Grund auf für die Kamera bereit.

## Ein Laborritual, das funktioniert

Wenn jemand einen Veranstaltungsort vorschlägt, fügen Sie den offiziellen CFP-Link in den Tracker ein
am selben Tag. Erfassen Sie Abstract- und Paper-Zeiten im AoE und in der lokalen Zone des Labors.
Weisen Sie eine Person zu, das Portal in der Woche zuvor (Datenverschiebung) erneut zu überprüfen. Einfrieren
Wichtige Experimente oder Theoremaussagen früh genug, dass das Schreiben nicht der Fall ist
einziger Pfad zum PDF. Behalten Sie die Versionskontrolle des Papiers, damit „die Einreichung“ erfolgt
„PDF“ ist einem Commit zugeordnet, nicht einem Desktop-Dateinamen.

## Schreiben unter einem harten Anschlag

Bei Fristen geht es nicht um perfekte verwandte Arbeiten. Cut Scope: eine klare Behauptung,
Tabellen, die zusammengestellt werden, Abbildungen mit Bildunterschriften, Bibliographie, die nicht angezeigt wird
„[?]“. Validieren Sie die „.bib“ frühzeitig
([BibTeX-Validator](/tools/bibtex-validator/)). Kompilieren Sie die kamerabereite Klasse
Tage vor der Öffnung des Portals einreichen, nicht Stunden.

Wenn Sie einen lokalen Rechercheeditor mit automatischer Kompilierung und Git-Prüfpunkten verwenden, verwenden Sie
sie. Ein unterbrochener Float um 23:00 Uhr AoE kann wiederhergestellt werden, wenn eine Historie vorhanden ist.

## Nach dem Absenden

Archivieren Sie die genaue PDF-Datei, die Quell-ZIP-Datei und den Commit-Hash. Notieren Sie sich die Einreichungs-ID. Wann
Wenn Bewertungen eintreffen, möchten Sie den Text, den Sie tatsächlich eingereicht haben, und nicht den Zweig
Sie haben „nur für den Fall“ weiter bearbeitet.

## Persönliche vs. Laborverfolgung

Einzelpersonen können auf einem Kalender plus einer Tafel leben. Labore benötigen ein gemeinsames Blatt oder
Kanal mit Eigentümernamen: Wer reicht was ein, Abstract erledigt (Ja/Nein), PDF
eingefroren (ja/nein). Die Person, die „dachte, jemand anderes würde einreichen“, ist ein
Prozessfehler, kein Zeitzonenfehler.

## Werkzeuge sind nicht die Frist

Ein Countdown-Widget schreibt die entsprechende Arbeit nicht. Verwenden Sie zum Entfernen die Platine
Wenn Sie unsicher sind, schützen Sie Schreibblockaden im Kalender auf die gleiche Weise wie Sie
Experimente schützen. Wenn die Arbeit 48 Stunden vor dem
Frist festlegen, den Umfang reduzieren, anstatt eine neue Vorlage zu erfinden.

Die meisten verpassten Fristen sind Prozessfehler. AoE selbst umwandeln, abstrakt behandeln
Registrieren Sie sich als verbindlich und aktualisieren Sie Ihren Tracker, wenn sich die offizielle Seite ändert.
Bewahren Sie den Countdown neben dem Manuskript auf. Datensätze und Tafeln machen Entdeckungen
billig; Das Ritual gehört immer noch dir.