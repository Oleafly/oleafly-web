---

title: "Dieses Paket ist nicht installiert"
description: "tlmgr, MiKTeX und On-Demand-Abruf mit Tectonic oder Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Dieses Paket ist nicht installiert

Früher oder später stoppt eine Kompilierung mit einer Zeile wie „!“ LaTeX-Fehler: Datei „siunitx.sty“ nicht gefunden. Die Meldung bedeutet genau das, was sie sagt: Ihr Dokument hat über „\usepackage{siunitx}“ nach einem Paket gefragt, und der Compiler konnte die „.sty“-Datei des Pakets auf Ihrem Computer nicht finden. An Ihrem Dokument ist nichts falsch. LaTeX-Distributionen liefern standardmäßig nicht jedes Paket aus und die Fehlerbehebung hängt davon ab, welche Distribution Sie ausführen.

## TeX Live

TeX Live, die Standarddistribution für Linux und macOS (als MacTeX), enthält einen Paketmanager namens „tlmgr“. Installieren Sie das fehlende Paket von einem Terminal:

```
tlmgr install siunitx
```

Wenn das vollständige TeX Live installiert wurde, das viele Gigabyte umfasst, ist bereits alles vorhanden und dieser Fehler sollte nicht auftreten. Es erscheint normalerweise bei den kleineren „Basis“- oder „kleinen“ Installationsschemata. Beachten Sie, dass das Argument für „tlmgr“ der Paketname und nicht der Dateiname ist, also keine Erweiterung „.sty“.

## MiKTeX

MiKTeX, das unter Windows üblich ist, verfügt über zwei Mechanismen. Die Funktion „Install-on-the-Fly“ erkennt die fehlende Datei während der Kompilierung und bietet an, sie abzurufen, wobei Sie entweder dazu aufgefordert werden oder je nach Einstellungen automatisch fortfahren. Alternativ können Sie die MiKTeX-Konsole öffnen, zur Registerkarte „Pakete“ gehen, nach dem Paket suchen und es dort installieren. Wenn bei der On-the-Fly-Installation eine Kompilierung hängen bleibt, wartet sie normalerweise auf einen Bestätigungsdialog, der hinter einem anderen Fenster verborgen ist.

## Tektonisch

Die Tectonic-Engine, die Oleafly bündelt, überspringt den manuellen Schritt: Pakete werden bei Bedarf während der Kompilierung heruntergeladen und landen im lokalen Cache der Engine. Die erste Kompilierung, die „siunitx“ verwendet, ruft es ab; Spätere Kompilierungen verwenden den Cache wieder. Die erste Ausführung kann beim Herunterladen von Abhängigkeiten länger dauern und erfordert eine Netzwerkverbindung.

## Bei der Installation wird das Problem nicht behoben

Wenn der Paketmanager meldet, dass kein solches Paket existiert, überprüfen Sie die Rechtschreibung anhand der Seite des Pakets auf CTAN, dem zentralen LaTeX-Paketarchiv auf ctan.org. Die hartnäckigsten Fälle sind auf zwei Nichtübereinstimmungen zurückzuführen. Erstens können die Datei und das Paket unterschiedliche Namen haben, da ein Distributionspaket mehrere „.sty“-Dateien enthalten kann. Das Durchsuchen von CTAN nach dem genauen „.sty“-Dateinamen aus der Fehlermeldung behebt dieses Problem. Zweitens benennt der Fehler manchmal eine Datei aus Ihrem eigenen Projekt, beispielsweise eine Klassendatei, die eine Vorlage vergessen hat einzuschließen, und kein Paketmanager kann diese bereitstellen. Die Datei muss von der Quelle der Vorlage stammen.

Eine letzte Anmerkung zu alten Ratschlägen: Das Herunterladen einer einzelnen „.sty“-Datei aus dem Internet in Ihren Projektordner funktioniert zwar, da LaTeX zuerst das aktuelle Verzeichnis durchsucht, das Paket jedoch in einer zufälligen Version einfriert und es vor Aktualisierungen verbirgt. Bevorzugen Sie den Paketmanager und behalten Sie den Trick des manuellen Kopierens für Notfälle kurz vor Abgabeterminen bei.