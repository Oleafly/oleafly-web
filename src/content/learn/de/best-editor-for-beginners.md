---

title: "Wählen Sie einen Editor aus, den Sie tatsächlich öffnen möchten"
description: "Was Anfänger brauchen: einen Compiler, Vorschau, SyncTeX und Dateien, die auf der Festplatte bleiben."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Wählen Sie einen Editor aus, den Sie tatsächlich öffnen möchten

Der beste LaTeX-Editor für Anfänger ist nicht der leistungsstärkste. Es ist diejenige, die Sie mit der geringsten Reibung von einer leeren Datei zu einer kompilierten PDF-Datei führt. Frühes Kompilieren ist oft wichtiger als jede einzelne Funktion. Vier Funktionen decken alles ab, was Sie vom ersten Tag an benötigen.

Erstens sollte das Kompilieren funktionieren, ohne dass eine Multi-Gigabyte-TeX-Distribution manuell installiert werden muss. Zweitens möchten Sie eine PDF-Vorschau nebeneinander mit SyncTeX, sodass ein Klick im PDF zur entsprechenden Quellzeile und zurück springt. Drittens sollten Ihre Dateien im reinen „.tex“-Format auf der Festplatte vorliegen, damit Sie sie ohne Exportschritt komprimieren, per E-Mail versenden oder in Git ablegen können. Viertens sollten Fehler als lesbare Meldungen eintreffen, nicht nur als rohes TeX-Protokoll.

## Die realistischen Optionen

| Herausgeber | Einrichtung | Funktioniert offline | Notizen |
| --- | --- | --- | --- |
| Oleafly | Laden Sie die App herunter | Immer bearbeiten; Kompilierungen verwenden zwischengespeicherte Pakete | Gebündelte Engine, Git-Verlauf, optionale KI mit eigenem Schlüssel |
| TeXShop / TeXworks | Installieren Sie zuerst eine TeX-Distribution | Ja | Minimal und zuverlässig |
| VS-Code + LaTeX-Workshop | Installieren Sie zuerst eine TeX-Distribution | Ja | Passt gut, wenn Sie bereits mit VS Code | arbeiten
| Rückseite | Erstellen Sie ein Konto im Browser | Begrenzt | Keine Installation; Projekte leben auf ihren Servern |

In den mittleren beiden Zeilen fallen versteckte Kosten an: Bevor der Editor nützlich ist, müssen Sie TeX Live oder MiKTeX selbst installieren und warten. Das ist der Punkt, an dem viele Anfänger scheitern. Die Browseroption entfernt das Setup, verschiebt Ihre Dateien jedoch in ein Konto. Die Kompromisse werden ausführlicher unter [Browserprojekt vs. Ordner auf der Festplatte](/learn/overleaf-vs-local/) behandelt.

## Ein vernünftiger Standard

Wenn Sie lokale Dateien ohne TeX-Verwaltung benötigen, beginnen Sie mit [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): Der Compiler wird in die App integriert und lädt Pakete herunter, wenn ein Dokument sie zum ersten Mal benötigt. Welchen Editor Sie auch wählen, kombinieren Sie ihn mit dem [Tutorial zum ersten Dokument](/learn/first-document/) und bewahren Sie den [Spickzettel](/learn/cheatsheet/) in der Nähe auf. Der Redakteur ist heute weniger wichtig als das Zusammenstellen Ihrer ersten Seite.