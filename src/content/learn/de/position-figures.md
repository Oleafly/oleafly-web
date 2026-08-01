---

title: "Wo Schwimmkörper tatsächlich landen"
description: "htbp, warum erzwungen hier oft fehlschlägt, wodurch die Umgebung näher an den Text herangeführt wird."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Wo Schwimmkörper tatsächlich landen

Abbildungen und Tabellen in LaTeX sind Gleitkommazahlen, was bedeutet, dass die Position des Codes in Ihrer Quelle ein Vorschlag und keine Anweisung ist. LaTeX verschiebt Floats, um die Seiten gleichmäßig zu füllen, halbleere Seiten zu vermeiden und typografische Beschränkungen zu respektieren, z. B. wie viel von einer Seite Bilder enthalten dürfen. Dies ist der größte Kulturschock, der von einem Textverarbeitungsprogramm ausgeht, und das Verständnis des Platzierungssystems erspart Ihnen stundenlangen Kampf dagegen.

## Was htbp bedeutet

Jede Float-Umgebung benötigt eine optionale Argumentauflistung, wo LaTeX sie ablegen darf:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Jeder Buchstabe ist eine Erlaubnis. „h“ erlaubt den Float „hier“, an der Stelle im Text, an der der Code erscheint. „t“ erlaubt den oberen Rand einer Seite, „b“ erlaubt den unteren Rand einer Seite und „p“ erlaubt eine dedizierte Float-Seite, die nur Abbildungen und Tabellen enthält. LaTeX wertet sie für jede erstellte Seite ungefähr in dieser Reihenfolge aus und nimmt die erste Platzierung, die seinen internen Regeln für Abstand und Seitenbalance entspricht. Die Buchstaben gewähren Optionen, anstatt Rangwünsche auszudrücken. Die Auflistung aller vier gibt LaTeX also den größten Spielraum, den Float an einem nahen und sinnvollen Ort zu platzieren. Wenn Sie das Argument ganz weglassen, ist die Standardeinstellung „[tbp]“ ohne „h“, weshalb auf der nächsten Seite so oft eine leere Zahl an den Anfang springt.

## Warum es nach hinten losgeht, „hier“ zu erzwingen

Allein das Schreiben von „[h]“ scheint die offensichtliche Lösung zu sein, aber es macht die Sache normalerweise noch schlimmer. Wenn der Float nicht in den verbleibenden Platz auf der aktuellen Seite passt und „h“ die einzige von Ihnen erteilte Berechtigung ist, kann LaTeX ihn nicht auf dieser Seite oder legal auf einer anderen Seite platzieren. Daher trägt es den Float Seite für Seite vorwärts und wartet auf eine Stelle, die „h“ erfüllt. Auch die Floats müssen in Ordnung bleiben, sodass sich jede spätere Figur hinter der festsitzenden anstellt und der ganze Stapel am Ende des Kapitels häufig herausfällt. Durch das Hinzufügen eines Ausrufezeichens wie in „[h!]“ wird LaTeX angewiesen, einige seiner Abstandsregeln zu lockern, es kann jedoch kein Raum geschaffen werden, der nicht vorhanden ist.

## Die Gewohnheiten, die tatsächlich funktionieren

Behalten Sie zunächst „[htbp]“ als Standardeinstellung bei und verzichten Sie beim Entwurf auf eine pixelgenaue Platzierung, da jeder Absatz, den Sie hinzufügen oder löschen, die Seiten ohnehin neu anordnet. Zweitens platzieren Sie die Abbildungsumgebung in der Quelle neben dem Absatz, der zuerst darauf verweist, da LaTeX ab diesem Punkt mit der Suche nach einem Zuhause beginnt und ein Float später, aber nie früher als sein Code verschoben werden kann. Drittens: Schreiben Sie Ihre Prosa so, dass sie Zahlen anhand der Nummern referenziert, wie in „Abbildung 3 zeigt die Pipeline“, niemals „die Abbildung unten“, damit der Text überall dort korrekt bleibt, wo der Float landet.

Wenn ein Schwimmer dennoch irgendwo landet, was nicht akzeptabel ist, gibt es stärkere Hilfsmittel, einschließlich Schwimmerbarrieren und der „[H]“-Platzierung, die in [der Figur, die aus dem Abschnitt flieht](/learn/figure-wrong-position/) behandelt werden. Greifen Sie am Ende des Schreibens zu ihnen, wenn der Text stabil ist, und nicht während des Entwurfs.