---

title: "Undefinierte Steuersequenz"
description: "Unbekannte Befehlsnamen: Tippfehler, fehlende Pakete, falsche Engine."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Undefinierte Steuersequenz

## Das Symptom

Die Kompilierung stoppt mit „!“ Undefinierte Kontrollsequenz.“ Das Protokoll zeigt dann die Zeile, in der es passiert ist, in zwei Teile geteilt: alles, was TeX bis einschließlich des fehlerhaften Befehls gelesen hat, in einer Zeile und den Rest der Quellzeile darunter. Das letzte Token in dieser oberen Zeile ist der Befehl, den TeX nicht erkannt hat, was es zu einem der einfacheren Fehler macht, ihn genau zu lokalisieren.

## Warum es passiert

Eine Kontrollsequenz ist alles, was mit einem Backslash beginnt. TeX hat kein festes Vokabular: Befehle existieren nur, weil der Kernel, die Dokumentklasse, ein Paket oder Ihr eigener „\newcommand“ sie definiert hat. Wenn TeX einen Backslash gefolgt von einem Namen liest, für den nichts definiert ist, kann es nicht erraten, was Sie gemeint haben, und stoppt. Der Fehler liegt nie darin, dass der Befehl generell „falsch“ ist. Es geht darum, dass dieser Name in diesem Dokument zu diesem Zeitpunkt unter dieser Engine unbekannt ist.

## Beheben Sie das Problem in drei Schritten

Überprüfen Sie zunächst die Rechtschreibung. „\texbf“ statt „\textbf“, „\lable“ statt „\label“ oder ein Leerzeichen, das in den meisten Fällen einen Namen in zwei Konten aufteilt. Die Zeilennummer des Protokolls führt Sie direkt zum Tippfehler.

Wenn die Schreibweise richtig ist, fehlt wahrscheinlich das definierende Paket. „\includegraphics“ macht nichts ohne „\usepackage{graphicx}“, „\toprule“ benötigt „booktabs“ und „\SI“ benötigt „siunitx“. Das macht sich am härtesten bemerkbar, wenn Sie einen Ausschnitt aus einem anderen Dokument oder aus der Antwort eines Modells kopieren: Der Haupttext kam mit, die Präambelzeile nicht. Finden Sie heraus, welches Paket einen Befehl in [Jeder Befehl erklärt](/learn/every-command-explained/) definiert, fügen Sie die Zeile „\usepackage“ hinzu und kompilieren Sie neu. Wenn das Paket selbst nicht installiert ist, lesen Sie [Ein fehlendes Paket installieren](/learn/install-missing-package/).

Wenn das Paket geladen ist und der Fehler weiterhin besteht, liegt ein Verdacht auf die Engine vor. Einige Befehle existieren nur unter einer bestimmten Engine: „\fontspec“ und seine Verwandten erfordern XeLaTeX oder LuaLaTeX und werden unter pdfLaTeX mit genau diesem Fehler abstürzen. Vorlagen, die in ihrer Dokumentation eine Engine angeben, tun dies normalerweise aus diesem Grund. [Welche Engine für dieses Projekt](/learn/engines-compared/) erklärt die Unterschiede.

## Zwei wissenswerte Macken

Die Reihenfolge ist wichtig: Ein Befehl, der vor der Zeile „\usepackage“ verwendet wird, die ihn definiert, ist zu diesem Zeitpunkt noch undefiniert. Laden Sie das Paket daher weiterhin in der Präambel über „\begin{document}“. Und ein Fehler verbirgt oft einen anderen, da TeX nach der Wiederherstellung möglicherweise alles Folgende falsch liest. Korrigieren Sie die erste undefinierte Steuersequenz im Protokoll, kompilieren Sie sie erneut und schauen Sie sich erst dann an, was übrig bleibt.