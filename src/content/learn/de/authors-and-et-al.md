---

title: "Autorenlisten, Reihenfolge usw."
description: "Was et al. Mittel, Autoren-Reihenfolge-Konventionen nach Fachgebieten und die Kreditmaschinerie."
category: "paper-anatomy"
order: 8
level: "beginner"
tags: ["writing", "publishing"]
featured: false
updated: 2026-07-25
---

# Autorenlisten, Reihenfolge usw.

Die Autorenliste sieht aus wie der einfachste Teil einer Arbeit. Es handelt sich eigentlich um ein dichtes kleines Kreditbuch mit bereichsspezifischen Regeln. Eine Fehlinterpretation ist ein klassischer Anfängerfehler.

## Was „et al.“ bedeutet

„Et al.“ ist lateinisch, die Abkürzung für *et alii*, „und andere“. Wenn in einem Zitat „Vaswani et al. 2017“ steht, sind damit Vaswani und die übrigen Autoren gemeint, die der Kürze halber nicht genannt werden. Es handelt sich um eine Zitierkonvention, nicht um ein Urteil: Die anderen Autoren sind genauso wichtig, es gibt einfach keinen Platz, jedes Mal acht Namen aufzulisten.

Zitationsstile werden mechanisch abgeschnitten. Viele Stile nennen bis zu zwei oder drei Autoren und wechseln dann zu „First et al.“ darüber hinaus. Ihr Bibliografiestil erledigt dies automatisch, was ein weiterer Grund dafür ist, [BibTeX Zitate verwalten zu lassen](/learn/add-citations/), anstatt sie von Hand einzugeben.

## Die Autorenreihenfolge ist ein Code, und der Code variiert je nach Feld

| Konvention | Wo | Wie man es liest |
|---|---|---|
| Der Erstautor hat am meisten getan | Die meisten Informatik, Biologie, Medizin | Der erste Platz ist der Preis |
| Letzter Autor ist der PI | Laborbasierte Wissenschaften, ein Großteil von ML | Leitender Autor, der die Gruppe und die Finanzierung leitet |
| Alphabetisch | Theorie CS, Mathematik, Wirtschaftswissenschaften | Die Bestellung enthält überhaupt keine Informationen |

Dies ist wichtig, wenn Lebensläufe bereichsübergreifend gelesen werden: Eine mittlere Position in einem alphabetisch geordneten Feld sagt nichts aus, während sie in einem Erstautorenfeld auf eine unterstützende Rolle hinweist. Wenn Sie Zweifel an einer bestimmten Arbeit haben, sollten Sie nicht zu viele Schlussfolgerungen ziehen. Vereinbaren Sie beim Verfassen Ihrer eigenen Texte frühzeitig den Auftrag, idealerweise vor Beginn des Schreibens. Streitigkeiten über die Autorenreihenfolge zum Zeitpunkt der Einreichung sind ein wirklich miserables Genre des akademischen Dramas.

## Die unterstützende Besetzung von Symbolen

Moderne Autorenblöcke enthalten zusätzliche Anmerkungen:

- **Korrespondierender Autor**, oft mit einem Umschlagsymbol oder einem Sternchen gekennzeichnet: die Person, die die Einreichung bearbeitet und die E-Mails des Lesers beantwortet.
- **Gleicher Beitrag**, normalerweise ein Dolch oder Sternchen mit einer Fußnote wie „Diese Autoren haben gleichermaßen beigetragen.“ Häufig, wenn zwei Personen die Arbeit wirklich gemeinsam leiteten.
- **Zugehörigkeiten**, abgeglichen durch hochgestellte Zahlen, wenn die Autoren institutionenübergreifend sind.

```latex
\author{Ada Lovelace\thanks{Equal contribution.} \and
        Charles Babbage\thanks{Equal contribution.} \and
        Mary Somerville\thanks{Corresponding author.}}
```

Veranstaltungsortklassen haben jeweils ihr eigenes Autoren-Markup. Kopieren Sie daher das Muster aus der Vorlage. Die allgemeine Mechanik der Titelseite finden Sie in [der Titelseitenlektion](/learn/title-page/).

## ORCID: Ihre permanente ID

Namen kollidieren und ändern sich. Eine ORCID iD ist eine dauerhafte Kennung (eine 16-stellige Nummer bei orcid.org), die Sie über Namensänderungen, Institutionen und jeden J. Smith in Ihrem Fachgebiet hinweg verfolgt. Viele Zeitschriften verlangen mittlerweile eine solche vom jeweiligen Autor. Registrieren Sie sich einmalig, fügen Sie es den Einreichungen bei und Ihr Publikationsnachweis bleibt ein Leben lang eindeutig.

## Die eine Regel, die sich nie ändert

Unabhängig von der Ordnungskonvention gilt für die Urheberschaft selbst eine gemeinsame Norm: Alle aufgeführten Personen haben einen sinnvollen Beitrag zum Werk geleistet, und alle, die einen sinnvollen Beitrag geleistet haben, werden aufgeführt. Schenkungsautorenschaft und Geisterautorenschaft gelten in den meisten Ethikkodizes als Fehlverhalten. Die Ordnung ist Politik; Die Liste ist Integrität.