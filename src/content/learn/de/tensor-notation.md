---

title: "Gestapelte Indizes"
description: "Leere Gruppen für Tensorplatzierung und passende Feldkonventionen."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Gestapelte Indizes

Die Tensornotation in der Relativitätstheorie und der Differentialgeometrie unterscheidet obere von unteren Indizes, und auch die horizontale Reihenfolge der Indizes hat eine Bedeutung: Sobald Indizes mit einer Metrik erhöht und gesenkt werden, ist das Objekt mit dem oberen Index zuerst nicht dasselbe wie das Objekt mit dem unteren Index zuerst. Die standardmäßige Skriptplatzierung von LaTeX ignoriert diesen Unterschied, sodass tensorlastige Dokumente auf einen kleinen Trick mit leeren Gruppen angewiesen sind.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## Der Trick mit der leeren Gruppe

Wenn Sie „T^i_j“ schreiben, werden der hochgestellte und der tiefgestellte Index übereinander gestapelt in denselben horizontalen Schlitz eingefügt. Um sie zu versetzen, fügen Sie „{}“, eine leere Gruppe, ein: „T^{i}{}_{j}“ fügt „i“ als hochgestelltes Zeichen an T und dann „j“ als tiefgestelltes Zeichen an die folgende leere Gruppe an, sodass das tiefgestellte Zeichen nach dem hochgestellten Zeichen und nicht darunter landet. Jedes „{}“ öffnet einen neuen Skriptslot, und Sie können so viele verketten, wie der Tensor benötigt, wie in „T^{i}{}_{j}{}^{k}“.

Die zweite Zeile zeigt die Auszahlung an einem realen Objekt. In `R^{\mu}{}_{\nu\rho\sigma}` nimmt das mu die erste Indexposition ein und die drei unteren Indizes folgen ihm. Das ist das Standardlayout für den Riemann-Tensor. Reduzieren Sie die Staffelung, und die Indexreihenfolge wird mehrdeutig. Wenn sich jeder Index auf einer Ebene befindet, wie in der Metrik „g_{\mu\nu}“, ist kein Trick erforderlich und eine einzige Indexgruppe enthält sie alle.

Das gleiche „{}“ behebt auch einen einfachen Fehler. „T^i^k“ stoppt die Kompilierung mit „Doppelter Hochstellung“, da ein Atom nicht zwei hochgestellte Zeichen annehmen kann. „T^{i}{}^{k}“ gibt dem zweiten hochgestellten Zeichen einen eigenen Slot und wird sauber kompiliert.

## Konventionen und Konsistenz

Ob Indizes gestaffelt oder gestapelt sind, ist eine Feldkonvention. Die Allgemeine Relativitätstheorie ist fast überall ins Wanken geraten. In anderen Bereichen sind gestapelte Indizes in Ordnung, wenn keine Metrik die Indizes bewegt. Passen Sie die Gewohnheiten Ihres Fachgebiets an, und wenn Sie irgendwo einreichen, passen Sie die Vorlage der Zeitschrift an, bevor Sie Ihren eigenen Geschmack finden. Das „tensor“-Paket kann die Platzierung mit einem „\tensor“-Befehl automatisieren, aber die manuellen leeren Gruppen sind portierbar, benötigen kein Paket und überdauern jedes Übermittlungssystem unverändert.

Konsistenz ist wichtiger als die Wahl selbst. Entscheiden Sie einmal, wie die Indizes jedes Tensors angeordnet sind. Fügen Sie für diejenigen, die Sie ständig eingeben, ein Präambelmakro ein, damit eine späte Änderung der Konvention nur eine Bearbeitung erfordert und nicht das gesamte Dokument durchsuchen muss. Vergleichen Sie versetzte und gestapelte Formen nebeneinander im [Live-Spielplatz](/live/).