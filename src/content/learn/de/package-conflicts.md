---

title: "Pakete, die sich gegenseitig bekämpfen"
description: "hyperref last, cleveref after, veraltete Paare, minimale Beispiele."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Pakete, die sich gegenseitig bekämpfen

LaTeX-Paketen steht es frei, die Befehle anderer Pakete neu zu definieren, und viele tun dies bewusst. So verwandelt „hyperref“ jeden Querverweis in einen Link. Es bedeutet auch, dass zwei Pakete jeweils denselben Befehl mit inkompatiblen Annahmen patchen können, und das Ergebnis reicht von einem völligen Fehler wie „Befehl \footnote bereits definiert“ oder „Optionskonflikt für Paket xcolor“ bis hin zu einer stillschweigend falschen Ausgabe. Konflikte tauchen fast immer direkt auf, nachdem Sie ein Paket zu einer zuvor funktionierenden Präambel hinzugefügt haben, was auch der größte Hinweis ist.

## Die Ladereihenfolge ist die halbe Miete

Viele Konflikte werden rein auf Befehl gelöst, da das später geladene Paket das letzte Wort hat. Die wichtigste Regel: Laden Sie „hyperref“ am Ende der Präambel. Es schreibt große Teile der Querverweismaschinerie von LaTeX neu und Pakete, die danach geladen werden, können diese Patches rückgängig machen. Eine kurze Liste der Ausnahmen muss noch später folgen, und die, die Sie tatsächlich treffen werden, ist „cleveref“, das so konzipiert ist, dass es über „hyperref“ sitzt und danach geladen werden muss:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Wenn in der Dokumentation eines Pakets eine Position relativ zu einem anderen Paket angegeben ist, glauben Sie daran. Diese Notizen existieren, weil jemand bereits auf den Konflikt gestoßen ist, den Sie haben werden.

## Veraltete Pakete und deren Ersatz

Einige Konflikte entstehen durch das Laden eines toten Pakets neben seinem Nachfolger. Kombinieren Sie „epsfig“ nicht mit „graphicx“, „subfigure“ mit „subcaption“ oder die alten „times“- und „mathptmx“-Shims mit modernen Schriftartpaketen wie „newtxtext“. Alte Vorlagen sind die übliche Quelle: Sie laden alles, was zum Zeitpunkt des Schreibens der Vorlage aktuell war, und Sie fügen das moderne Äquivalent obendrauf. Entfernen Sie das veraltete und behalten Sie das Ersatzgerät. Das Paket „nag“ kann beim Kompilieren eine veraltete Verwendung für Sie kennzeichnen.

## Optionskonflikte

„Optionskonflikt für Paket X“ bedeutet, dass das Paket zweimal mit unterschiedlichen Optionen geladen wurde, oft einmal von Ihrer Dokumentklasse hinter Ihrem Rücken. Sie können es nicht erneut mit neuen Optionen laden, aber Sie können Optionen einfügen, bevor es jemand lädt: Setzen Sie „\PassOptionsToPackage{table}{xcolor}“ vor „\documentclass“, und die Optionen werden mit dem Ladevorgang zusammengeführt, der zuerst eintritt.

## Isolieren Sie anhand eines Minimalbeispiels

Wenn die Ursache nicht offensichtlich ist, erstellen Sie ein minimales Arbeitsbeispiel: ein Dokument, das nur „\documentclass“, die beiden verdächtigen Pakete und ein „\begin{document}...\end{document}“ mit einer Textzeile enthält. Wenn der Fehler erneut auftritt, ändern Sie die Ladereihenfolge und die Optionen, bis dies nicht mehr der Fall ist. Wenn es nicht reproduziert wird, fügen Sie Ihre anderen Pakete wieder in Hälften hinzu, bis es zurückkehrt. Diese binäre Suche konvergiert in wenigen Kompilierungen und gibt Ihnen ein klares Paar, nach dem Sie suchen können. Die gleiche Technik rettet geerbte Präambeln, wie in [Universitätsklassendateien, die nicht kompiliert werden können](/learn/fix-broken-template/) beschrieben.