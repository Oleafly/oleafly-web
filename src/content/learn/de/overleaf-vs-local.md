---

title: "Browserprojekt vs. Ordner auf der Festplatte"
description: "Cloud-Komfort im Vergleich zu lokalem Besitz, Offline-Arbeit und echtem Git."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Browserprojekt vs. Ordner auf der Festplatte

Wenn Sie mit dem Schreiben von LaTeX beginnen, stehen Sie vor einer frühen Entscheidung: Befindet sich Ihr Projekt in einem Browser-Tab auf dem Server eines anderen oder in einem Ordner auf Ihrer eigenen Festplatte? Beide Modelle erzeugen das gleiche PDF. Sie unterscheiden sich darin, wer über die Quelle verfügt, was passiert, wenn das Netzwerk ausfällt, und wie viel von der umgebenden Toolchain Sie kontrollieren.

## Was jedes Modell Ihnen bietet

| | Cloud (z. B. Overleaf) | Lokal (Oleafly, TeX Live) |
| --- | --- | --- |
| Einrichtung | Sofort, nichts zu installieren | Eine Installation |
| Offline | Begrenzt | Das Bearbeiten funktioniert immer; Kompilierungen werden mit zwischengespeicherten Paketen ausgeführt |
| Datenschutz | Der Anbieter speichert Ihre Projekte | Dateien bleiben auf Ihrer Festplatte |
| Git | Über eine Synchronisierungsbrücke | Native, ein echtes Repository im Ordner |
| Zusammenarbeit | Echtzeit-Cursor | Git, Patches, freigegebene Ordner |
| Kosten | Kostenloses Kontingent plus Abonnements | Kostenlos |

Ein Cloud-Projekt ist eine Zeile in einer Datenbank, die der Dienst für Sie rendert. Ein lokales Projekt ist ein Verzeichnis, das Sie in einem Dateimanager öffnen, auf ein USB-Laufwerk kopieren, mit einem beliebigen Tool durchsuchen und mit gewöhnlichem Git versionieren können. Dieser Unterschied klingt abstrakt, bis eine Frist mit einem Ausfall, einer Änderung der Paywall oder einem Flug zusammenfällt.

## Wenn die Cloud die richtige Wahl ist

Der eigentliche Vorteil der Cloud ist die gemeinsame Bearbeitung in Echtzeit. Wenn drei Co-Autoren in der letzten Stunde vor Ablauf der Frist denselben Absatz eintippen müssen und keiner von ihnen Software installiert, ist ein Browser-Editor die praktische Antwort. Derzeit ersetzt nichts Lokales simultane Cursor.

## Wenn lokal die richtige Wahl ist

Lokal gewinnt, wenn der Entwurf vertraulich oder unveröffentlicht ist, wenn Sie in Flugzeugen oder eingeschränkten Netzwerken arbeiten, wenn Ihre Zahlen und Daten umfangreich sind oder wenn Sie einen Versionsverlauf wünschen, der nicht von einer Abonnementstufe abhängt. Ein lokales Git-Repository zeichnet Ihre Änderungen auf, unabhängig davon, ob morgen ein Dienst existiert oder nicht, und derselbe Ordner funktioniert mit einem Terminal, einem Code-Editor oder dem Klon eines Mitarbeiters.

Oleafly wurde für die lokale Seite dieser Tabelle entwickelt: Der Compiler wird in der App ausgeliefert, Projekte sind einfache Ordner mit echtem Git-Verlauf und optionale KI wird mit Ihrem eigenen Schlüssel ausgeführt. Ein längerer Vergleich findet sich im [Blog](/blog/local-first-vs-cloud-latex-editors/), und die Dokumente behandeln [wie die beiden Modelle zusammenarbeiten können](/docs/why-oleafly/) über GitHub.