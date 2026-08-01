---

title: "Jeder \\\\Befehl im LaTeX-Universum, erklärt"
description: "Die globale Referenz: Hunderte von LaTeX-Befehlen und -Umgebungen, vom Kernel bis zu amsmath, hyperref, TikZ, biblatex und Beamer, jeweils in einer Zeile erklärt."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Jeder \Befehl im LaTeX-Universum, erklärt

Auf dieser Seite werden alle LaTeX-Befehle und -Umgebungen definiert, die in jeder Lektion auf Oleafly Learn vorkommen, sowie das breitere Standardvokabular, das Sie in echten Arbeiten finden. Kernel, amsmath, hyperref, Graphicx, Booktabs, Biblatex, TikZ, Beamer und die Pakete, die Forscher tatsächlich laden. Durchsuchen Sie die Seite nach Kategorie oder durchsuchen Sie die Seite mit Strg/Befehlstaste-F nach dem Befehl, den Sie gerade kennengelernt haben. Jeder Eintrag besteht aus einer Zeile: was er tut und wo es darauf ankommt, aus welchem ​​Paket er stammt.

## Dokumentklassen und Einrichtung

| Befehl | Was es tut |
| --- | --- |
| `\documentclass{article}` | Erste Zeile jedes Dokuments: wählt das Gesamtlayout aus; Artikel ist die Standardauswahl für Aufsätze. |
| `\documentclass{report}` | Klasse für längere Berichte: fügt „\chapter“ hinzu und beginnt die Zusammenfassung auf einer eigenen Seite. |
| `\documentclass{book}` | Klasse für Bücher: Kapitel, zweiseitiges Layout, Vorder-/Haupt-/Hinterteil. |
| `\documentclass{letter}` | Klasse für Korrespondenz, mit „\opening“-, „\closing“- und Adressbefehlen. |
| `\documentclass{beamer}` | Klasse für Folienpräsentationen, die aus „Frame“-Umgebungen erstellt wurden. |
| `\documentclass[11pt,a4paper]{article}` | Allgemeine Klassenoptionen: Schriftgröße (10pt, 11pt, 12pt), Papier (A4-Papier, Briefpapier), „zweispaltig“, „zweiseitig“, „Querformat“, „Entwurf“, „Titelseite“. |
| `\usepackage{amsmath}` | Lädt ein Paket in der Präambel, um Funktionen hinzuzufügen. |
| `\usepackage[margin=1in]{geometry}` | Legt Seitenränder und Papiergröße (Geometrie) fest. |
| `\title{...}` | Speichert den Dokumenttitel, der später von „\maketitle“ gedruckt wird. |
| `\author{...}` | Speichert die Autorenliste für „\maketitle“; Trennen Sie mehrere Autoren mit „\und“. |
| `\und` | Trennzeichen zwischen Autorennamen innerhalb von „\author{...}“. |
| `\date{...}` | Speichert das von „\maketitle“ angezeigte Datum; `\date{}` verbirgt es, `\date{\today}` zeigt heute an. |
| `\heute` | Druckt das aktuelle Datum zur Kompilierzeit. |
| `\maketitle` | Druckt den Titelblock aus „\title“, „\author“ und „\date“. |
| `\Danke{...}` | Fügt einem Titel oder Autorennamen eine Fußnote hinzu, z. B. für Finanzierung oder Kontaktinformationen. |
| `\institute{...}` | Autorenzugehörigkeitsbefehl, der von Beamer und der Springer-LNCS-Klasse verwendet wird. |
| `\inst{1}` | Hochgestellte Zugehörigkeitsmarkierung in LNCS- und Beamer-Autorenlisten: „Ada Lovelace\inst{1}“. |
| `\keywords{...}` | Druckt die Schlüsselwortliste der Zeitung im VerlagKlassen wie acmart und llncs. |
| `\address{...}` | Briefklasse: speichert die Absenderadresse für den Briefkopf. |
| `\signatur{...}` | Buchstabenklasse: speichert den Namen, der unter dem Schluss gedruckt wird. |
| `\opening{Lieber ...}` | Briefklasse: druckt die Anrede und beginnt mit dem Briefkörper. |
| `\closing{Mit freundlichen Grüßen}` | Briefklasse: Druckt den Abzeichnungs- und Signaturblock. |
| `\LaTeX` | Druckt das LaTeX-Logo mit seinen erhabenen und erniedrigten Buchstaben. |
| `\TeX` | Druckt das TeX-Logo mit gesenktem E. |
| `\input{file}` | Fügt eine weitere .tex-Datei ein, als hätten Sie sie dort eingegeben. |
| `\include{chapter1}` | Fügt eine Kapiteldatei ein, beginnend auf einer neuen Seite; ermöglicht Teilkompilierungen über „\includeonly“. |
| `\includeonly{chapter1,chapter3}` | Präambelliste, die einschränkt, welche „\include“-Dateien tatsächlich kompiliert werden. |
| `\hypersetup{...}` | Konfiguriert Hyperref-Optionen wie Linkfarben und PDF-Metadaten. |
| `\AtBeginDocument{...}` | Führt Code direkt nach „\begin{document}“ aus, nützlich für die späte Einrichtung. |
| `\AtEndDocument{...}` | Führt Code aus, kurz bevor das Dokument endet. |
| `\makeatletter` | Macht „@“ vorübergehend zu einem Buchstaben, damit Sie interne Befehle verwenden oder patchen können. |
| `\makeatother` | Stellt „@“ nach „\makeatletter“ wieder auf den Normalwert zurück. |
| `\typeout{...}` | Gibt eine Meldung an das Kompilierungsprotokoll und das Terminal aus, was zum Debuggen nützlich ist. |
| `\protect` | Schützt einen fragilen Befehl innerhalb eines beweglichen Arguments wie „\caption“ oder „\section“. |
| `\listfiles` | Präambelbefehl, der jede geladene Datei und ihre Version für Fehlerberichte protokolliert. |

## Struktur und Gliederung

| Befehl | Was es tut |
| --- | --- |
| `\part{...}` | Unterteilung auf höchster Ebene, oberhalb der Kapitel, in Buch- und Berichtsklassen. |
| `\chapter{...}` | Nummerierte Kapitelüberschrift in Buch- und Berichtsklassen (nicht im Artikel). |
| `\section{...}` | Nummerierte Überschrift der obersten Ebene in einem Artikel. |
| `\subsection{...}` | Nummerierte Überschrift eine Ebene unter „\section“. |
| `\subsubsection{...}` | Nummerierte Überschrift eine Ebene unter „\subsection“. |
| `\paragraph{...}` | Überschrift der untersten Ebene: ein fetter Einlauftitel am Anfang eines Absatzes. |
| `\subparagraph{...}` | Eine Ebene unter „\paragraph“, selten erforderlich. |
| `\section*{...}` | Beim Markieren von Abschnitten wird die Überschrift ohne Nummer oder Inhaltsverzeichniseintrag gedruckt. |
| `\appendix` | Ändert die Nummerierung, sodass die folgenden Kapitel oder Abschnitte zu Anhang A, B, C werden. |
| `\appendixpage` | Druckt eine separate Trennseite „Anhänge“ (Anhangpaket). |
| `\tableofcontents` | Druckt das Inhaltsverzeichnis, das aus Ihren Abschnittsbefehlen erstellt wurde. |
| `\listoffigures` | Druckt eine Liste aller Bildunterschriften mit Seitenzahlen. |
| `\lisoftables` | Druckt eine Liste aller Tabellenüberschriften mit Seitenzahlen. |
| `\frontmatter` | Buchklassenwechsel für die Vorinhaltsseiten: römische Seitenzahlen, nicht nummerierte Kapitel. |
| `\mainmatter` | Buchklassenwechsel zurück zum Hauptinhalt: arabische Seitenzahlen, nummerierte Kapitel. |
| `\backmatter` | Buchklassenwechsel für die Endseiten: Kapitel werden nicht mehr nummeriert. |
| `\addcontentsline{toc}{chapter}{...}` | Fügt manuell einen Eintrag zum Inhaltsverzeichnis (oder einer Liste mit Abbildungen/Tabellen) hinzu. |
| `\addtocontents{toc}{...}` | Schreibt beliebiges Material (z. B. Abstände) in eine Inhaltsdatei. |
| `\setcounter{secnum Depth}{3}` | Steuert, wie tief die Abschnittszahlen gehen. |
| `\setcounter{toc Depth}{2}` | Steuert, wie tief das Inhaltsverzeichnis geht. |

## Definieren von Befehlen und Umgebungen

| Befehl | Was es tut |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Definiert Ihren eigenen Befehl; Fehler, wenn der Name bereits existiert. |
| `\renewcommand{...}{...}` | Definiert einen vorhandenen Befehl neu; Fehler, wenn es nicht existiert. |
| `\providecommand{...}{...}` | Definiert einen Befehl nur, wenn er noch nicht definiert ist; sonst tut sich stillschweigend nichts. |
| `\NewDocumentCommand` | Moderne Befehlsdefinition mit flexiblen optionalen Argumenten (LaTeX3/xparse). |
| `\newenvironment{Name}{Anfangscode}{Endcode}` | Definiert Ihre eigene Umgebung mit Code, der unter „\begin“ und „\end“ ausgeführt wird. |
| `\renewenvironment{name}{...}{...}` | Definiert eine bestehende Umgebung neu. |
| `\ensuremath{...}` | Sorgt dafür, dass der mathematische Inhalt eines Makros sowohl innerhalb als auch außerhalb des Mathematikmodus funktioniert. |
| `\DeclareMathOperator{\E}{E}` | Definiert einen aufrechten Operatornamen; Die Sternform setzt unten Grenzen (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Sternchenform: Der Operator nimmt die unten aufgeführten Grenzwerte in der Anzeigemathematik (amsmath) an. |
| `\newtheorem{lemma}{Lemma}` | Deklariert eine theoremähnliche Umgebung (amsthm). |
| `\foo` | Beispielname für ein benutzerdefiniertes Makro in der Lektion „\newcommand“, kein echter LaTeX-Befehl. |
| `\abs{x}` | Beispiel eines benutzerdefinierten Makros aus der Lektion „Benutzerdefinierte Befehle“, das Absolutwertbalken setzt. |
| `\mat{A}` | Beispiel eines benutzerdefinierten Makros aus der Lektion „Benutzerdefinierte Befehle“ für ein fettes Matrixsymbol. |
| `\vect{v}` | Beispiel eines benutzerdefinierten Makros aus der Lektion „Benutzerdefinierte Befehle“ für ein fettes Vektorsymbol. |
| `\set{...}` | Beispiel eines benutzerdefinierten Makros aus der Lektion „Benutzerdefinierte Befehle“, das große Klammern setzt. |
| `\citepair` | Beispiel eines benutzerdefinierten Zitierhilfemakros aus der Lektion „Benutzerdefinierte Befehle“, kein Standardbefehl. |
| `\E` | Beispiel eines benutzerdefinierten Operators für die Erwartung, normalerweise definiert mit`\DeclareMathOperator` oder `\newcommand`. |
| `\R` | Beispiel eines benutzerdefinierten Makros für die reellen Zahlen: „\newcommand{\R}{\mathbb{R}}“. |
| `\argmax`, `\argmin` | Operatornamen für arg max/arg min, in diesem Kurs mit „\DeclareMathOperator*“ definiert, sodass Indizes unten stehen. |

## Zähler und Längen

| Befehl | Was es tut |
| --- | --- |
| `\newcounter{examples}` | Erstellt einen neuen Zähler, der optional von einem übergeordneten Element zurückgesetzt werden kann: „\newcounter{examples}[section]“. |
| `\setcounter{page}{1}` | Legt den Wert eines Zählers fest, hier beginnend mit den Seitenzahlen. |
| `\addtocounter{examples}{2}` | Fügt einem Zähler einen Wert hinzu, ohne etwas zu drucken. |
| `\stepcounter{examples}` | Erhöht einen Zähler um eins. |
| `\refstepcounter{examples}` | Erhöht einen Zähler und macht ihn zum Ziel für das nächste „\label“. |
| `\value{examples}` | Liest den Wert eines Zählers zur Verwendung in Arithmetik oder Vergleichen. |
| `\arabic{examples}` | Druckt einen Zähler als arabische Ziffern: 1, 2, 3. |
| `\roman{examples}`, `\Roman{examples}` | Druckt einen Zähler als klein- oder großgeschriebene römische Ziffern. |
| `\alph{examples}`, `\Alph{examples}` | Druckt einen Zähler als Klein- oder Großbuchstaben. |
| `\fnsymbol{footnote}` | Druckt einen Zähler als Fußnotensymbole: Sternchen, Dolch usw. |
| `\newlength{\mygap}` | Erstellt ein neues Längenregister. |
| `\setlength{\parskip}{6pt}` | Weist einem Längenregister einen Wert zu. |
| `\addtolength{\textheight}{1cm}` | Fügt einer vorhandenen Länge hinzu. |
| `\settowidth{\mygap}{text}` | Legt eine Länge auf die natürliche Breite eines Texts fest. |
| `\parindent` | Länge des Absatzeinzugs in der ersten Zeile; gesetzt mit `\setlength{\parindent}{0pt}`. |
| `\parskip` | Länge der vertikalen Lücke zwischen Absätzen; gesetzt mit `\setlength`. |
| `\linewidth` | Länge der aktuellen Zeile, praktisch für die Größenanpassung: `width=\linewidth`. |
| `\textwidth` | Länge der gesamten Textblockbreite auf der Seite. |
| `\textheight` | Länge der gesamten Textblockhöhe auf der Seite. |
| `\columnwidth` | Breite einer Spalte in einem mehrspaltigen Layout. |
| `\baselineskip` | Vertikaler Abstand zwischen den Grundlinien aufeinanderfolgender Linien. |
|`\linespread{1.3}` | Skaliert den Zeilenabstand für das gesamte Dokument; benötigt „\selectfont“ oder einen Größenbefehl, um wirksam zu werden. |

## Absätze, Zeilenumbrüche und Silbentrennung

| Befehl | Was es tut |
| --- | --- |
| `\\` | Beendet die aktuelle Zeile innerhalb von Absätzen, Tabellen und Arrays. |
| `\\[6pt]` | Zeilenumbruch mit zusätzlichem vertikalen Abstand danach. |
| `\newline` | Bricht die Zeile um, ohne sie auszurichten und ohne einen Seitenumbruch zuzulassen. |
| `\linebreak` | Fordert hier einen gerechtfertigten Zeilenumbruch an; optional „[0-4]“ legt die Beharrlichkeit fest. |
| `\nolinebreak` | Von einem Zeilenumbruch an dieser Stelle wird abgeraten. |
| `\par` | Beendet den Absatz, genau wie eine Leerzeile in der Quelle. |
| `\noindent` | Unterdrückt den Einzug der ersten Zeile des folgenden Absatzes. |
| `\indent` | Erzwingt den Einzug der ersten Zeile, wo er sonst unterdrückt würde. |
| `\-` | Markiert eine zulässige Silbentrennungsstelle innerhalb eines Wortes. |
| `\hyphenation{data-set}` | Präambelliste, die LaTeX beibringt, wie man bestimmte Wörter trennt. |
| `\sloppy` | Lockert die Abstandsregeln, sodass Zeilen leichter abbrechen und überfüllte Kästchen vermieden werden. |
| `\wählerisch` | Stellt strenge Abstandsregeln nach „\sloppy“ wieder her. |
| `\raggedright` | Richtet den folgenden Text linksbündig aus, statt ihn auszurichten. |
| `\raggedleft` | Richtet den folgenden Text rechtsbündig aus. |
| `\centering` | Zentriert alles, was innerhalb der aktuellen Gruppe folgt, z.B. das Bild einer Figur. |
| `\samepage` | Verhindert Seitenumbrüche innerhalb der aktuellen Gruppe. |
| `\enlargethispage{\baselineskip}` | Macht nur die aktuelle Seite etwas größer, um eine weitere Zeile hineinzuquetschen. |
| `~` | Geschütztes Leerzeichen: „Figure~1“ hält die Zahl in derselben Zeile. |

## Abstand

| Befehl | Was es tut |
| --- | --- |
| `\quad` | Fügt einen horizontalen Abstand von etwa der Breite eines Großbuchstabens M ein. |
| `\qquad` | Fügt das Doppelte des Leerzeichens von „\quad“ ein. |
| `\enspace` | Fügt einen halben „\quad“ horizontalen Raum ein. |
| `\hspace{1cm}` | Fügt horizontalen Raum ein; verschwindet bei einem Zeilenumbruch. |
| `\hspace*{1cm}` | Horizontaler Raum, der auch bei einem Zeilenumbruch erhalten bleibt. |
| `\vspace{1cm}` | Fügt vertikalen Raum einer bestimmten Länge ein. |
| `\vspace*{1cm}` | Vertikaler Raum, der auch bei einem Seitenumbruch erhalten bleibt. |
| `\smallskip` | Fügt eine kleine vertikale Lücke zwischen den Absätzen ein. |
| `\medskip` | Fügt eine mittlere vertikale Lücke zwischen den Absätzen ein. |
| `\bigskip` | Fügt eine große vertikale Lücke zwischen den Absätzen ein. |
| `\hfill` | Dehnbarer horizontaler Raum, der den Inhalt auseinanderschiebt, um die Zeile zu füllen. |
| `\vfill` | Dehnbarer vertikaler Raum, der den Inhalt auseinanderschiebt, um die Seite auszufüllen. |
| `\dotfill` | Füllt die verbleibende Zeile mit Punkten, wie in einer Menü- oder Inhaltszeile. |
| `\hrulefill` | Füllt die verbleibende Zeile mit einer horizontalen Linie. |
| `\stretch{2}` | Dehnbarer Kleber mit Gewicht, für proportionalen Abstand: „\hspace{\stretch{2}}“. |
| `\fill` | Die dehnbare Länge der Einheit; „\hspace{\fill}“ ist das, worauf „\hfill“ erweitert wird. |
| `\phantom{text}` | Nimmt genau den Platz seines Arguments ein, gibt aber nichts aus. |
| `\hphantom{text}` | Nimmt nur die Breite seines Arguments ein, mit einer Höhe von Null. |
| `\vphantom{text}` | Nimmt nur die Höhe seines Arguments ein, mit einer Breite von Null. |
| `\smash{...}` | Gibt sein Argument aus, tut jedoch so, als hätte es eine Höhe und Tiefe von Null. |
| `\strut` | Unsichtbar unterstützt die Höhe einer normalen Linie, um Zeilenhöhen auszugleichen. |
| `\mathstrut` | Strebe im Mathematikmodus in der Größe einer Klammer, um Radikale und Brüche auszurichten. |

## Boxen und Regeln

| Befehl | Was es tut |
| --- | --- |
| `\mbox{...}` | Unzerbrechliche horizontale Box; hält seinen Inhalt auch in einer Zeile. |
| `\makebox[3cm][r]{...}` | Box mit einer festgelegten Breite und ausgewählter Ausrichtung (l, c, r, s). |
| `\fbox{...}` | Zeichnet einen Rahmen um seinen Inhalt. |
| `\framebox[3cm][c]{...}` | Gerahmte Box mit festgelegter Breite und ausgewählter Ausrichtung. |
| `\parbox{5cm}{...}` | Ein Absatzfeld: eine Minispalte mit Text der angegebenen Breite. |
| `\raisebox{2pt}{...}` | Verschiebt seinen Inhalt nach oben (oder nach unten mit einer negativen Länge). |
| `\rule{2cm}{0.4pt}` | Zeichnet ein gefülltes Rechteck; Das Arbeitstier für individuelle Linien. |
| `\colorbox{gelb}{...}` | Platziert Text auf einem farbigen Hintergrundfeld (xcolor). |
| `\fcolorbox{rot}{gelb}{...}` | Farbige Box mit farbigem Rahmen (xcolor). |

## Seiten, Nummerierung und Kopfzeilen

| Befehl | Was es tut |
| --- | --- |
| `\newpage` | Beendet die aktuelle Seite und beginnt eine neue. |
| `\clearpage` | Startet eine neue Seite, nachdem zunächst alle ausstehenden Abbildungen und Tabellen geleert wurden. |
| `\cleardoublepage` | Wie „\clearpage“, stellt aber auch sicher, dass die nächste Seite eine rechte (ungerade) Seite ist. |
| `\pagebreak` | Fordert an dieser Stelle einen Seitenumbruch an, wodurch die Seite auf die volle Höhe gestreckt wird. |
| `\nopagebreak` | Von einem Seitenumbruch wird an dieser Stelle abgeraten. |
| `\pagenumbering{roman}` | Legt den Seitenzahlenstil fest (arabisch, römisch, römisch, alph, alph) und setzt den Zähler auf 1 zurück. |
| `\pagestyle{fancy}` | Legt den Stil der laufenden Kopf-/Fußzeile (einfach, leer, Überschriften, Myheadings, schick) für alle folgenden Seiten fest. |
| `\thispagestyle{empty}` | Überschreibt den Kopf-/Fußzeilenstil nur für die aktuelle Seite. |
| `\thepage` | Druckt die aktuelle Seitenzahl; Wird in Kopf- und Fußzeilen verwendet. |
| `\marginpar{...}` | Fügt eine Notiz am Seitenrand neben der aktuellen Zeile ein. |
| `\fancyhf{}` | Löscht alle fancyhdr-Kopf- und Fußzeilenfelder, bevor eigene Felder festgelegt werden. |
| `\fancyhead[R]{...}` | Legt ein fancyhdr-Header-Feld fest, hier das rechte. |
| `\fancyfoot[C]{\thepage}` | Legt ein fancyhdr-Fußzeilenfeld fest, hier eine zentrierte Seitenzahl. |
| `\headrulewidth` | fancyhdr-Makro für die Dicke der Header-Regel; Erneuern Sie den Wert auf 0pt, um die Zeile zu entfernen. |
| `\footrulewidth` | fancyhdr-Makro für die Dicke der Fußzeilenregel, standardmäßig 0pt. |
| `\newgeometry{margin=2cm}` | Ändert die Seitengeometrie mitten im Dokument (Geometrie). |
| `\restoregeometry` | Kehrt zur Präambelgeometrie nach „\newgeometry“ (Geometrie) zurück. |

## Sonderzeichen

Die zehn reservierten Zeichen und wie man sie ausdruckt, plus allgemeine Textsymbole.

| Befehl | Was es tut |
| --- | --- |
| `\%` | Gibt ein Prozentzeichen aus (bloßes „%“ beginnt einen Kommentar). |
| `\&` | Gibt ein kaufmännisches Und aus (das bloße „&“ ist das Tabellenspaltentrennzeichen). |
| `\#` | Gibt einen Hash aus (bloßes „#“ markiert Makroargumente). |
| `\_` | Gibt einen Unterstrich aus (das bloße „_“ ist ein mathematischer Index). |
| `\{` und `\}` | Drucken Sie geschweifte Klammern (Gruppe der bloßen Klammern). |
| `\$` | Gibt ein Dollarzeichen aus (ein bloßes „$“ schaltet den Mathematikmodus um). |
| `\textbackslash` | Gibt einen Backslash im Text aus. |
| `\textasciitilde` | Druckt eine Tilde im Text (das bloße „~“ ist ein geschütztes Leerzeichen). |
| `\textasciicircum` | Gibt ein Caretzeichen im Text aus (das bloße „^“ ist ein hochgestelltes mathematisches Zeichen). |
| `\textbar` | Druckt einen vertikalen Balken im Text. |
| `\textless`, `\textgreater` | Drucken Sie < und > im Textmodus korrekt. |
| `\ldots`, `\dots` | Ellipse mit korrektem Abstand; „\dots“ passt sich im Mathematikmodus (amsmath) an. |
| `\textellipsis` | Die Auslassungspunkte im Textmodus, die „\dots“ außerhalb der Mathematik verwendet. |
| `\textemdash`, `\textendash` | Benannte Befehle für den Gedankenstrich „em“ und „en“ (gleiche Ausgabe wie „---“ und „--“). |
| `\textquotedblleft`, `\textquotedblright` | Geschweifte doppelte Anführungszeichen (normalerweise als Backtick-Paare und Apostroph-Paare eingegeben). |
| `\guillemetleft`, `\guillemetright` | Französische Anführungszeichen (ältere Schreibweise: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Dolch und Doppeldolch im Text, üblich für Autorenzugehörigkeiten. |
| `\S` | Abschnittszeichen, wie in S 2.1 eines Rechtsdokuments. |
| `\P` | Absatzzeichen (Pilcrow). |
| `\pounds` | Britisches Pfund-Zeichen. |
| `\euro` | Euro-Zeichen (Eurosym-Paket; der Kernel stellt auch „\texteuro“ bereit). |
| `\copyright` | Copyright-Zeichen. |
| `\textregistered` | Eingetragenes Markenzeichen. |
| `\texttrademark` | Markenzeichen. |
| `\textdegree` | Gradzeichen: „25\textGrad C“. |
| `\textmu` | Aufrechtes MikroZeichen für Text wie Mikrometer. |
| `\textperthousand` | Promillezeichen. |

## Akzente und Sonderbuchstaben

Für Textakzente aus der pdfLaTeX-Ära; Bei XeLaTeX/LuaLaTeX- und UTF-8-Eingaben können Sie normalerweise nur das Zeichen eingeben.

| Befehl | Was es tut |
| --- | --- |
| `\'{e}` | Akuter Akzent: e-akut wie im Café mit Akzent. |
| `` \`{e} `` | Gravis. |
| `\^{o}` | Zirkumflex-Akzent. |
| `\"{u}` | Umlaut/dierese. |
| `\~{n}` | Tilde-Akzent, wie im Spanischen n-tilde. |
| `\c{c}` | Cedilla, wie im Französischen c-cedilla. |
| `\v{s}` | Caron (hacek), häufig in tschechischen und kroatischen Namen. |
| `\H{o}` | Ungarischer doppelter akuter Akzent. |
| `\k{a}` | Ogonek, wie auf Polnisch a-ogonek. |
| `\b{o}` | Bar-under-Akzent. |
| `\d{u}` | Punkt-unter-Akzent, der in der Transliteration verwendet wird. |
| `\r{a}` | Ringakzent, wie im skandinavischen a-ring. |
| `\u{o}` | Breve-Akzent. |
| `\.{o}` | Punktierter Akzent. |
| `\t{oo}` | Krawattenakzent, der zwei Buchstaben verbindet. |
| `\i`, `\j` | Punktloses i und j zum Stapeln von Akzenten: „\'{\i}“. |
| `\ae`, `\AE` | Die ae-Ligatur, Klein- und Großbuchstaben. |
| `\oe`, `\OE` | Die oe-Ligatur, wie im französischen Oeuvre. |
| `\ss` | Deutsches scharfes s (eszett). |
| `\o`, `\O` | Durchgestrichenes o, wie in dänischen und norwegischen Namen. |
| `\l`, `\L` | Polnisches aufgeschlitztes l. |
| `\aa`, `\AA` | A-Ring als eigenständiger Buchstabe, wie in Angstroms Namen. |

## Schriftarten und Größen

| Befehl | Was es tut |
| --- | --- |
| `\textbf{...}` | Fettgedruckter Text. |
| `\textit{...}` | Kursiver Text. |
| `\emph{...}` | Hervorhebung, die sich dem Kontext anpasst: kursiv bei aufrechtem Text, aufrecht bei kursivem Text. |
| `\textsc{...}` | Text in Kapitälchen. |
| `\texttt{...}` | Schreibmaschinentext (Monospace), gut für Code und Dateinamen. |
| `\textrm{...}` | Römischer (Serifen-)Familientext. |
| `\textsf{...}` | Familientext ohne Serifen. |
| `\textmd{...}` | Mittleres (normales) Gewicht, rückgängig machende Fettschrift. |
| `\textup{...}` | Aufrechte Form, rückgängig kursiv oder schräg. |
| `\textsl{...}` | Schräge (schräge) Form, im Gegensatz zur echten Kursivschrift. |
| `\textnormal{...}` | Setzt in einem Schritt auf die Standardschriftart des Dokuments zurück. |
| `\underline{...}` | Unterstreicht Text; sparsam verwenden, die Betonung liegt normalerweise auf „\emph“. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Deklarationen zum Wechseln der Schriftfamilie (Serif, Sans, Mono), bis die Gruppe endet. |
| `\bfseries`, `\mdseries` | Deklarationen wechseln zu Fett oder zurück zu Mittelgewicht. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Deklarationen ändern ihre Form: kursiv, schräg, Kapitälchen, aufrecht. |
| `\normalfont` | Deklaration zum Zurücksetzen von Familie, Serie und Form auf die Standardwerte. |
| `\em` | Deklarationsform von „\emph“: „{\em like this}“. |
| `\tiny` | Kleinster der zehn Größenbefehle. |
| `\scriptsize` | Zweitkleinste Größe, ungefähr tiefgestellte Größe. |
| `\footnotesize` | Die für Fußnoten verwendete Größe. |
| `\small` | Etwas kleiner als normal. |
| `\normalsize` | Die Basisgröße des Dokuments. |
| `\large`, `\Large`, `\LARGE` | Ein, zwei und drei Schritte größer als normal. |
| `\huge`, `\Huge` | Die beiden größten Standardgrößen. |
| `\fontsize{14}{17}\selectfont` | Legt eine beliebige Schriftgröße und einen Grundliniensprung fest und aktiviert ihn dann. |
| `\selectfont` | Aktiviert das ausstehende SchriftartattributÄnderungen (NFSS). |
| `\textsuperscript{...}` | Erhabener kleiner Text, wie bei Markierungen im 1.- oder Fußnotenstil. |
| `\textsubscript{...}` | Kleiner Text im Textmodus abgesenkt. |
| `\familydefault` | Makro, das die Standardschriftfamilie enthält; Erneuern Sie es, um die Schriftart des gesamten Dokuments zu ändern. |
| `\sfdefault` | Makro zur Benennung der serifenlosen Familie; `\renewcommand{\familydefault}{\sfdefault}` macht das Dokument sans. |
| `\setmainfont{...}` | Legt die Hauptschriftart nach Namen unter XeLaTeX oder LuaLaTeX fest (fontspec). |
| `\setsansfont{...}` | Legt die serifenlose Schriftart nach Namen unter XeLaTeX oder LuaLaTeX fest (fontspec). |
| `\setmonofont{...}` | Legt die Monospace-Schriftart nach Namen unter XeLaTeX oder LuaLaTeX fest (fontspec). |

## Farbe (xcolor)

| Befehl | Was es tut |
| --- | --- |
| `\textcolor{red}{...}` | Färbt einen Textabschnitt. |
| `\color{blau}` | Erklärungsformular: Färbt alles bis zum Ende der Gruppe. |
| `\definecolor{brand}{HTML}{2F6F4F}` | Definiert eine benannte Farbe für die spätere Verwendung. |
| `\pagecolor{gray!10}` | Legt die Hintergrundfarbe der gesamten Seite fest. |
| `\rowcolor{gray!20}` | Färbt eine Tabellenzeile (xcolor mit der Option „table“, über colortbl). |
| `\cellcolor{gray!20}` | Färbt eine Tabellenzelle (colortbl). |
| `\rowcolors{2}{gray!10}{white}` | Abwechselnde Zeilenfarben beginnend bei einer bestimmten Zeile (xcolor-Option „Tabelle“). |

## Grafiken (graphicx)

| Befehl | Was es tut |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Fügt eine Bilddatei ein; Schlüsseloptionen: „Breite“, „Höhe“, „Skalierung“, „Winkel“, „Trimmen“ + „Clip“, „Seite“. |
| `\graphicspath{{figures/}}` | Teilt LaTeX mit, welche Ordner nach Bilddateien durchsucht werden sollen. |
| `\rotatebox[origin=c]{90}{...}` | Dreht seinen Inhalt um einen Winkel. |
| `\scalebox{0.8}{...}` | Skaliert seinen Inhalt um einen Faktor. |
| `\resizebox{5cm}{!}{...}` | Ändert die Größe des Inhalts auf eine Zielbreite und/oder -höhe; „!“ behält das Seitenverhältnis bei. |
| `\reflectbox{...}` | Spiegelt seinen Inhalt horizontal. |
| `\includepdf[pages=-]{paper.pdf}` | Fügt ganze Seiten aus einem anderen PDF (pdfpages) ein. |

## Aufruf des Mathematikmodus

| Befehl | Was es tut |
| --- | --- |
| `$...$` | Inline-Mathe innerhalb eines Satzes. |
| `\(...\)` | Die offiziellen Inline-Mathetrennzeichen von LaTeX, äquivalent zu „$...$“. |
| `\[...\]` | Nicht nummerierte Gleichung wird in einer eigenen Zeile angezeigt. |
| `$$...$$` | Einfache TeX-Anzeigemathematik; Da in LaTeX davon abgeraten wird, verwenden Sie stattdessen „\[...\]“. |
| `x^2`, `x_i` | „^“ erzeugt hochgestellte Zeichen und „_“ erzeugt tiefgestellte Zeichen; Skripte mit mehreren Zeichen in geschweiften Klammern: „x^{10}“. |

## Mathe: Griechische Buchstaben

All dies funktioniert nur im Mathematikmodus. Es gibt Großbuchstaben, bei denen sich die griechische Hauptstadt von der lateinischen unterscheidet.

| Befehl | Was es tut |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Griechische Buchstaben Alpha, Beta, Gamma, Delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Griechische Buchstaben Epsilon, Zeta, Eta, Theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Griechische Buchstaben Iota, Kappa, Lambda, Mu, Nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Griechische Buchstaben xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Griechische Buchstaben Upsilon, Phi, Chi, Psi, Omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Griechische Großbuchstaben Gamma bis Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Griechische Großbuchstaben Sigma bis Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Variantenformen von Epsilon (die in den meisten Artikeln verwendete geschwungene Form), Theta und Pi. |
| `\varrho` `\varsigma` `\varphi` | Variantenformen von Rho, Sigma (Wortfinal) und Phi (offenes geschweiftes Wort). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Kursive griechische Varianten in Großbuchstaben (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Die übrigen kursiven griechischen Großbuchstabenvarianten (amsmath). |

## Mathe: binäre Operatoren

| Befehl | Was es tut |
| --- | --- |
| `\pm`, `\mp` | Plus-Minus- und Minus-Plus-Zeichen. |
| `\times` | Multiplikationskreuz, wird auch für Dimensionen wie 3 x 3 verwendet. |
| `\div` | Teilungszeichen (Obelus). |
| `\cdot` | Zentrierter Punkt zur Multiplikation. |
| `\ast`, `\star`, `\bullet`, `\circ` | Sternchen-, Stern-, Kugel- und Kleinkreisoperatoren; „\circ“ ist auch eine Funktionskomposition. |
| `\oplus`, `\ominus` | Eingekreistes Plus (Direktsumme, XOR) und eingekreistes Minus. |
| `\otimes`, `\oslash`, `\odot` | Eingekreiste Zeiten (Tensorprodukt), eingekreister Schrägstrich, eingekreister Punkt. |
| `\wedge`, `\vee` | Wedge (logisches UND, äußeres Produkt) und V (logisches ODER, Verknüpfung). |
| `\land`, `\lor` | Aliase von „\wedge“ und „\vee“, benannt nach ihrer logischen Lesart. |
| `\cap`, `\cup` | Setzen Sie Kreuzungs- und Vereinigungszeichen. |
| `\setminus` | Differenz-Backslash festlegen: „A \setminus B“. |
| `\uplus` | Vereinigung mit einem Plus, für mehrteilige oder disjunkte Vereinigung. |
| `\sqcap`, `\sqcup` | Quadratische Kappe und Becher treffen aufeinander und verbinden sich in der Gittertheorie. |
| `\amalg` | Verschmelzung (umgedrehtes Produkt), verwendet für Nebenprodukte. |
| `\dagger`, `\ddagger` | Dolch und Doppeldolch als mathematische Operatoren, z.B. konjugieren transponieren `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Dreiecksoperatoren, z.B. symmetrischer Unterschied. |
| `\triangleleft`, `\triangleright` | Seitliche Dreiecke, z.B. normale Untergruppenbeziehung. |

## Mathe: Beziehungen

| Befehl | Was es tut |
| --- | --- |
| `\leq`, `\le` | Kleiner-gleich-Zeichen („\le“ ist der Kurzalias). |
| `\geq`, `\ge` | Größer-als-gleich-Zeichen („\ge“ ist der Kurzalias). |
| `\neq`, `\ne` | Ungleichheitszeichen („\ne“ ist der Kurzalias). |
| `\ll`, `\gg` | Viel-weniger-als- und viel-größer-als-Zeichen. |
| `\ungefähr` | Ungefähres Gleichheitszeichen. |
| `\sim` | Tilde-Relation, gelesen als „ist verteilt als“ oder „ist ähnlich“. |
| `\simeq` | Asymptotisches Gleichheitszeichen (Tilde über Gleichheit). |
| `\cong` | Kongruent-zu-Zeichen (Tilde über zwei Balken), wird für Isomorphie verwendet. |
| `\equiv` | Identisches Zeichen (Dreifachstrich), wird auch für die Kongruenz verwendet. |
| `\propto` | Proportional-Vorzeichen. |
| `\asymp` | Asymptotisch-äquivalente Beziehung (gestapelte Kurven). |
| `\doteq` | Gleichheitszeichen mit einem Punkt, gelesen als „Annäherungen“ oder „ist definiert als“. |
| `\prec`, `\succ` | Vorhergehende und nachfolgende Beziehungen, gekrümmte Ordnungen. |
| `\preceq`, `\succeq` | Vorhergehend oder gleich und Erfolgreich oder gleich. |
| `\subset`, `\subseteq` | Richtige Teilmenge und Teilmenge-oder-Gleichheitszeichen. |
| `\supset`, `\supseteq` | Richtige Obermengen- und Obermengen-oder-Gleichheitszeichen. |
| `\sqsubseteq`, `\sqsupseteq` | Quadratische Teilmengen- und Obermengenbeziehungen, die zur Informationsordnung verwendet werden. |
| `\in`, `\notin` | Legen Sie die Mitgliedschaft und ihre Negation fest: `x \in A`. |
| `\ni` | Umgekehrte Zugehörigkeit: Die Menge enthält das Element. |
| `\vdash`, `\dashv` | Drehkreuz „beweist“ und das Gegenteil. |
| `\models` | Doppeltes Drehkreuz, semantische Folgerung. |
| `\perp` | Senkrechte / Unabhängigkeitsbeziehung. |
| `\parallel` | Barrenbeziehung. |
| `\mid` | Vertikaler Balken mit Beziehungsabstand, wie in der Set-Builder-Notation oder „Divides“. |
| `\nicht` | Negiert die folgende Beziehung durch Überdrucken eines Schrägstrichs: „\not\subset“. |

## Mathe: Pfeile

| Befehl | Was es tut |
| --- | --- |
| `\to`, `\rightarrow` | Pfeil nach rechts, wie in den Funktionstypen „f: A \to B“ und begrenzt „x \to 0“. |
| `\gets`, `\leftarrow` | Pfeil nach links, wird auch für die Zuweisung im Pseudocode verwendet. |
| `\leftrightarrow` | Zweiköpfiger Einzelpfeil. |
| `\Rightarrow` | Doppelter Rechtspfeil, gelesen als „impliziert“. |
| `\Linkspfeil` | Doppelter Pfeil nach links, gelesen als „wird impliziert durch“. |
| `\Leftrightarrow` | Doppelter Pfeil mit zwei Spitzen, gelesen als „wenn und nur wenn“. |
| `\implies`, `\impliedby` | Abstandszeichen „\Rightarrow“ und „\Leftarrow“ für Logik (amsmath). |
| `\iff` | Leerzeichen „\Leftrightarrow“ für „genau dann, wenn“. |
| `\mapsto` | Maps-to-Pfeil mit Balkenende: „x \mapsto x^2“. |
| `\longmapsto` | Lange Version von „\mapsto“. |
| `\hookrightarrow` | Rechter Pfeil mit Hakenschwanz, für Einschlüsse/Einbettungen. |
| `\rightharpoonup` | Rechte Harpune (Halbpfeil), verwendet für schwache Konvergenz. |
| `\rightleftharpoons` | Paarweise gegensätzliche Harpunen, wie im chemischen Gleichgewicht. |
| `\leadsto` | Verschnörkelter rechter Pfeil, „führt zu“ (amssymb). |
| `\uparrow`, `\downarrow` | Aufwärts- und Abwärtspfeile. |
| `\updownarrow` | Vertikaler Doppelpfeil. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Doppelt gezeichnete vertikale Pfeile. |
| `\nearrow`, `\searrow` | Diagonale Pfeile nach Nordosten und Südosten, z.B. bis zu einem Grenzwert ansteigen/abnehmen. |
| `\swarrow`, `\nwarrow` | Diagonale Pfeile nach Südwesten und Nordwesten. |
| `\longrightarrow`, `\longleftarrow` | Lange Einzelpfeile. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Lange Doppelpfeile. |
| `\xrightarrow{f}` | Erweiterbarer rechter Pfeil mit einer Beschriftung oben, die sich an die Größe anpasst (amsmath). |
| `\xleftarrow{f}` | Erweiterbarer linker Pfeil mit einer Beschriftung oben (amsmath). |

## Mathe: große Operatoren

| Befehl | Was es tut |
| --- | --- |
| `\sum_{i=1}^{n}` | Summenzeichen mit Grenzen. |
| `\prod_{i=1}^{n}` | Produktschild mit Grenzen. |
| `\coprod` | Zeichen für Nebenprodukt (umgedrehtes Produkt). |
| `\int_0^1` | Integralzeichen mit Grenzen. |
| `\iint` | Doppeltes Integralzeichen (amsmath). |
| `\iiint` | Dreifaches Integralzeichen (amsmath). |
| `\oint` | Integralzeichen der Kontur (geschlossener Regelkreis). |
| `\bigcap`, `\bigcup` | Großer Schnittpunkt und Vereinigung über eine Mengenfamilie. |
| `\bigsqcup` | Großer quadratischer Becher (disjunkte Vereinigung). |
| `\bigvee`, `\bigwedge` | Großes ODER und großes UND über einem Indexsatz. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Großes eingekreistes Plus, Zeiten und Punkt für indizierte Summen und Produkte von Strukturen. |
| `\biguplus` | Große Vereinigung mit Plus über einem Indexsatz. |
| `\limits` | Erzwingt die Unter-/Hochstellung des folgenden Operators oben und unten: „\int\limits_0^1“. |
| `\nolimits` | Erzwingt tiefgestellte/hochgestellte Zeichen zur Seite statt oben und unten. |

## Mathe: Trennzeichen und Größenbestimmung

| Befehl | Was es tut |
| --- | --- |
| `\left( ... \right)` | Trennzeichenpaar mit automatischer Größe, das sich an den Inhalt anpasst. |
| `\left.` und `\right.` | Unsichtbarer Partner, wenn nur eine Seite eines Größenpaares benötigt wird, wie bei Bewertungsbalken. |
| `\middle|` | Automatisches mittleres Trennzeichen zwischen „\left“ und „\right“ (wie bei der bedingten Wahrscheinlichkeit). |
| `\big( \Big( \bigg( \Bigg(` | Manuell dimensionierte Trennzeichen, von leicht groß bis sehr groß. |
| `\bigl(...\bigr)` | Begrenzte Trennzeichen mit korrektem Öffnungs-/Schließabstand (auch „\Bigl“, „\biggl“, „\Biggl“). |
| `\lfloor`, `\rfloor` | Bodenhalterungen. |
| `\lceil`, `\rceil` | Deckenhalterungen. |
| `\langle`, `\rangle` | Trennzeichen für linke und rechte spitze Klammern. |
| `\|` | Doppelter vertikaler Balkenbegrenzer (Normbalken). |
| `\lvert`, `\rvert` | Absolutwertbalken mit korrektem Trennzeichenabstand (amsmath). |
| `\lVert`, `\rVert` | Doppelte Balken für Normen mit korrektem Trennzeichenabstand (amsmath). |
| `\backslash` | Backslash als mathematisches Symbol oder Trennzeichen. |

## Mathe: Akzente und Dekorationen

| Befehl | Was es tut |
| --- | --- |
| `\hat{x}` | Kleiner Hutakzent über einem Symbol. |
| `\check{x}` | Caron-Akzent (umgedrehter Hut). |
| `\breve{x}` | Breve-Akzent (abgerundet). |
| `\acute{x}`, `\grave{x}` | Akute und schwere Akzente in Mathematik. |
| `\tilde{x}` | Tilde-Akzent über einem Symbol. |
| `\bar{x}` | Kurzer Balken über einem Symbol. |
| `\vec{v}` | Kleiner Pfeil über einem Symbol. |
| `\dot{x}`, `\ddot{x}` | Ein oder zwei Punkte über einem Symbol, üblich bei Zeitableitungen. |
| `\dddot{x}` | Drei Punkte über einem Symbol (Amsmath). |
| `\mathring{x}` | Ringakzent über einem Symbol. |
| `\widehat{abc}` | Breiter Hut, der sich über mehrere Symbole erstreckt. |
| `\widetilde{abc}` | Breite Tilde, die sich über mehrere Symbole erstreckt. |
| `\overrightarrow{AB}` | Den rechten Pfeil über einen Ausdruck strecken, wie in Vektoren von A nach B. |
| `\overleftarrow{AB}` | Den linken Pfeil über einen Ausdruck strecken. |
| `\overline{x + y}` | Linie über einen ganzen Ausdruck. |
| `\underline{x + y}` | Linie unter einem ganzen Ausdruck (funktioniert auch im Text). |
| `\overbrace{...}^{n}` | Horizontale Klammer über einem Ausdruck, mit einer optionalen Beschriftung darüber. |
| `\underbrace{...}_{n}` | Horizontale Klammer unter einem Ausdruck, mit einer optionalen Beschriftung darunter. |
| `\overset{!}{=}` | Platziert ein Symbol über einem anderen, z.B. 'muss gleich sein' (amsmath). |
| `\underset{i}{\max}` | Platziert ein Symbol unter einem anderen (amsmath). |
| `\stackrel{\text{def}}{=}` | Älterer Kernel-Befehl, der ein Symbol über eine Beziehung stapelt. |
| `\boldsymbol{\beta}` | Fettgedruckte Mathematik, die auch griechische Buchstaben und Symbole fett formatiert (amsmath). |
| `\prime` | Primsymbol; „x“ ist die übliche Abkürzung für „x^{\prime}“. |

## Mathe: logarithmische Operatoren

Alles aufrecht mit korrektem Abstand gesetzt; diejenigen, die Grenzwerte einhalten, setzen in der Anzeigemathematik die Indizes unten.

| Befehl | Was es tut |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Die grundlegenden trigonometrischen Funktionen. |
| `\sec`, `\csc` | Sekante und Kosekans. |
| `\arcsin`, `\arccos`, `\arctan` | Inverse trigonometrische Funktionen. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Hyperbolische Funktionen. |
| `\exp`, `\ln`, `\log`, `\lg` | Exponential- und Logarithmenrechnung („\lg“ ist gemäß Konvention die Logarithmusbasis 2 oder 10). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinante, Dimension, Kernel, Grad. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Größter gemeinsamer Teiler, Hom-Mengen, komplexes Argument, Wahrscheinlichkeit. |
| `\lim_{x \to 0}` | Limit-Operator, aufrecht mit dem Index unten in der Anzeigemathematik. |
| `\limsup`, `\liminf` | Begrenzen Sie Ober- und Unterlegene. |
| `\inf`, `\sup` | Infimum- und Supremum-Operatoren, aufrecht gesetzt. |
| `\min`, `\max` | Minimal- und Maximaloperatoren, aufrecht gesetzt mit unten stehenden Grenzwerten in der Anzeigemathematik. |
| `\bmod` | Binärer Mod-Operator mit Operatorabstand: „a \bmod n“. |
| `\pmod{n}` | Nachgestelltes „(mod n)“ in Klammern. |
| `\mod{n}` | Nachgestelltes 'mod n' ohne Klammern (amsmath). |
| `\operatorname{lcm}` | Einmaliger aufrechter Operatorname ohne Präambeldeklaration (amsmath). |
| `\operatorname*{ess\,sup}` | Einmaliger Operator, der die folgenden Grenzen annimmt (amsmath). |

## Mathe: Brüche, Binome und Stapeln

| Befehl | Was es tut |
| --- | --- |
| `\frac{a}{b}` | Gestapelter Bruch: Zähler über Nenner. |
| `\dfrac{a}{b}` | Fraktion wird auf die volle Anzeigegröße gezwungen, sogar inline (amsmath). |
| `\tfrac{a}{b}` | Bruch wird auf eine kleine Inline-Größe gezwungen, auch in der Anzeigemathematik (amsmath). |
| `\cfrac{a}{b}` | Fortsetzungsbruch mit verschachtelten Ebenen in voller Größe (Amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Quadratwurzel; Das optionale Argument gibt eine n-te Wurzel an. |
| `\binom{n}{k}` | Binomialkoeffizient in Klammern (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Erzwungene Binomiale in Anzeigegröße und Textgröße (amsmath). |
| `{n \choose k}` | Einfaches binomiales TeX-Grundelement; In LaTeX wird davon abgeraten, „\binom“ zu verwenden. |
| `{a \over b}` | Einfaches TeX-Bruchprimitiv; In LaTeX wird davon abgeraten, „\frac“ zu verwenden. |
| `{a \atop b}` | Einfaches TeX-Stapelprimitiv ohne Balken; Wenn Sie davon abgeraten werden, verwenden Sie „\substack“ oder „\genfrac“. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Allgemeiner Bruchbildner hinter „\frac“, „\binom“ und Freunden (amsmath). |
| `\substack{i < n \\ j < m}` | Mehrzeiliger Index unter einem großen Operator (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Fügt allen vier Ecken eines großen Operators (amsmath) Indizes hinzu. |
| `\prescript{a}{b}{X}` | Links hochgestellte/tiefgestellte Zeichen, wie in der Isotopennotation (Mathtools). |

## Mathematik: Abstände und Stile

| Befehl | Was es tut |
| --- | --- |
| `\,` | Dünner mathematischer Raum, wie zwischen einer Zahl und ihrer Einheit. |
| `\:` | Mittlerer Mathematikraum. |
| `\;` | Dicker Mathematikraum. |
| `\!` | Negativer dünner Raum, der Symbole näher heranzieht. |
| `\quad`, `\qquad` | Ein-Geviert- und Zwei-Geviert-Leerzeichen, in Mathematik oder Text. |
| `\displaystyle` | Erzwingt die vollständige Anpassung der Display-Mathematik, z. B. Große Grenzen in der Inline-Mathematik. |
| `\textstyle` | Erzwingt die Größenanpassung der Inline-Mathematik innerhalb der Anzeigemathematik. |
| `\scriptstyle`, `\scriptscriptstyle` | Erzwingen Sie die Größe des Index und des Sub-Index. |

## Mathe: Buchstaben, Alphabete und verschiedene Symbole

| Befehl | Was es tut |
| --- | --- |
| `\mathbb{R}` | Fettschrift an der Tafel für Zahlensätze (amssymb). |
| `\mathbf{x}` | Fette aufrechte Buchstaben in der Mathematik, häufig bei Vektoren und Matrizen. |
| `\mathcal{L}` | Kalligrafische Großbuchstaben, z.B. ein Verlust oder Lagrange. |
| `\mathfrak{g}` | Frakturbuchstaben, die in Algebra und Logik verwendet werden. |
| `\mathscr{F}` | Skript-Großbuchstaben, geschwungener als „\mathcal“ (mathrsfs). |
| `\mathrm{d}x` | Aufrechte (romanische) Buchstaben in der Mathematik, für Einheiten und Namen mit mehreren Buchstaben. |
| `\mathit{diff}` | Kursiver Bezeichner aus mehreren Buchstaben mit wortähnlichem Abstand. |
| `\mathsf{T}`, `\mathtt{x}` | Serifenlose und Schreibmaschinenbuchstaben in Mathematik. |
| `\bm{\beta}` | Fettgedruckte mathematische Symbole, eine Alternative zu „\boldsymbol“ (bm-Paket). |
| `\text{wenn } x > 0` | Normaler aufrechter Text innerhalb von Mathematik mit korrektem Abstand (amsmath). |
| `\infty` | Unendlichkeitszeichen. |
| `\partial` | Partielles Ableitungszeichen (geschweiftes d). |
| `\nabla` | Nabla-Operator (del) für Gradienten und Divergenz. |
| `\hbar` | Reduzierte Planck-Konstante, h mit einem Balken. |
| `\ell` | Skript Kleinbuchstabe l, wird verwendet, um Verwechslungen mit der Ziffer 1 zu vermeiden. |
| `\wp` | Weierstraß S. |
| `\Re`, `\Im` | Real- und Imaginärteilsymbole (Fraktur R und I). |
| `\aleph` | Aleph, für unendlich viele Kardinäle. |
| `\emptyset` | Leeres Set-Schild. |
| `\varnothing` | Eine rundere Variante mit leerem Satz, die viele Autoren bevorzugen (amssymb). |
| `\angle` | Winkelsymbol. |
| `\measuredangle` | Symbol für den gemessenen Winkel mit einem Bogen (amssymb). |
| `\triangle` | Dreieckssymbol. |
| `\square`, `\blacksquare` | Offene und gefüllte Quadrate; die ausgefüllten Beweise (amssymb) enden oft. |
| `\diamond`, `\lozenge` | Kleiner Diamantenbetreiber; Rautensymbol (amssymb für Letzteres). |
| `\top`, `\bot` | Obere (wahre) und untere (falsche/undefinierte) Symbole. |
| `\forall`, `\exists` | Universell („für alle“)und existenzielle Quantoren („es existiert“). |
| `\nexistiert` | Negierter Existenzquantor (amssymb). |
| `\neg` | Logisches NICHT-Zeichen. |
| `\daher`, `\because` | Dreipunktzeichen „deshalb“ und „weil“ (amssymb). |
| `\flat`, `\natural`, `\sharp` | Musikalische Vorzeichen, die auch in der mathematischen Notation verwendet werden. |
| `\surd` | Bloßes radikales Symbol ohne Argument. |
| `\checkmark` | Häkchen (amssymb). |
| `\cdots` | Zentrierte Punkte zwischen Operatoren: „x_1 + \cdots + x_n“. |
| `\vdots`, `\ddots` | Vertikale und diagonale Punkte, meist in Matrizen. |
| `\dotsb`, `\dotsc` | Semantische Punkte: zwischen binären Operatoren und zwischen Kommas (amsmath). |

## amsmath- und mathtools-Anzeigetools

| Befehl | Was es tut |
| --- | --- |
| `\tag{...}` | Ersetzt die automatische Gleichungsnummer durch Ihre eigene Bezeichnung (amsmath). |
| `\tag*{...}` | Wie „\tag“, aber ohne die umgebenden Klammern (amsmath). |
| `\notag` | Unterdrückt die Gleichungsnummer in einer Zeile einer nummerierten Umgebung (amsmath). |
| `\nonumber` | Älteres Synonym von „\notag“. |
| `\numberwithin{gleichung}{Abschnitt}` | Zahlengleichungen pro Abschnitt: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Unterbricht einen Ausrichtungsblock mit einer Textzeile in voller Breite und behält dabei die Ausrichtung bei (amsmath). |
| `\shortintertext{...}` | Wie „\intertext“ mit weniger vertikalem Abstand (Mathtools). |
| `\allowdisplaybreaks` | Ermöglicht mehrzeilige Anzeigen, die sich über mehrere Seiten erstrecken (amsmath). |
| `\displaybreak` | Fordert an dieser Stelle einer Anzeige einen Seitenumbruch an (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Ermöglicht einen Überhang großer Operatorgrenzen, sodass Inhalte nicht auseinandergeschoben werden (Mathtools). |
| `\mathclap{...}` | Mathe-Inhalte mit Nullbreite für breite Unter-/Überschriften (Mathtools). |
| `\coloneqq` | Doppelpunkt-Gleichheits-Definitionszeichen := mit korrektem Abstand (Mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Definiert ein Trennmakro mit einem markierten Formular zur automatischen Größenanpassung (Mathtools). |
| `\eqref{eq:loss}` | Gibt eine Gleichungsnummer mit ihren Klammern aus (amsmath). |
| `\qedhere` | Verschiebt das Ende des Beweises auf die aktuelle Zeile, z. B. nach einer angezeigten Gleichung (amsthm). |

## Mathe-Umgebungen

| Umwelt | Was es tut |
| --- | --- |
| „Gleichung“ | Eine angezeigte, nummerierte Gleichung. |
| `Gleichung*` | Eine angezeigte, nicht nummerierte Gleichung (amsmath). |
| `ausrichten` | Mehrere angezeigte Gleichungen, ausgerichtet an „&“-Markierungen, jeweils nummeriert (amsmath). |
| `align*` | Ausgerichtete Gleichungen ohne Zahlen (amsmath). |
| `versammeln` | Mehrere zentrierte Gleichungen ohne Ausrichtung, jeweils nummeriert (amsmath). |
| `alignat` | Ausgerichtete Gleichungen mit manuell gesteuertem Abstand zwischen den Spalten (amsmath). |
| `flalign` | Ausgerichtete Gleichungen werden an den linken und rechten Rand verschoben (amsmath). |
| „gespalten“ | Teilt eine lange Gleichung über ausgerichtete Linien unter einer einzelnen Zahl innerhalb der „Gleichung“ (amsmath). |
| `mehrzeilig` | Eine lange Gleichung, die über mehrere Zeilen verteilt ist: erste Zeile links, letzte Zeile rechts (amsmath). |
| „ausgerichtet“, „gesammelt“ | Bausteinversionen von align/gather, die in einer anderen Anzeige (amsmath) verwendet werden können. |
| `Untergleichungen` | Nummeriert die darin enthaltenen Gleichungen als 1a, 1b, 1c (amsmath). |
| „Fälle“ | Fallunterscheidungen in Klammergruppierung, wie bei stückweisen Funktionen (amsmath). |
| `dcases` | „Fälle“ mit Einträgen im Anzeigestil, damit Brüche in voller Größe bleiben (Mathtools). |
| `Matrix` | Nackte Matrix ohne Trennzeichen (amsmath). |
| `pmatrix` | In Klammern eingeschlossene Matrix (amsmath). |
| `bmatrix` | Matrix in eckige Klammern eingeschlossen (amsmath). |
| `Bmatrix` | Matrix in geschweifte Klammern (amsmath) gewickelt. |
| `vmatrix` | In vertikale Balken eingewickelte Matrix, Standard-Determinantenschreibweise (amsmath). |
| `Vmatrix` | Matrix umhüllt von Doppelstäben (amsmath). |
| `smallmatrix` | Kompakte Matrixgröße für den Inline-Einsatz (amsmath). |
| „Array“ | Raster im Mathematikmodus mit Ausrichtung pro Spalte, der mathematische Cousin von „tabellarisch“. |
| `eqnarray` | Alte dreispaltige Gleichungsumgebung; entmutigt, der Abstand ist falsch, verwenden Sie „align“. |

## Querverweise und Links

| Befehl | Was es tut |
| --- | --- |
| `\label{fig:setup}` | Benennt eine Stelle (Gleichung, Abbildung, Abschnitt), damit Sie darauf verweisen können. |
| `\ref{fig:setup}` | Druckt die Nummer eines beschrifteten Artikels. |
| `\pageref{fig:setup}` | Druckt die Seitenzahl, auf der sich das Etikett befindet. |
| `\cref{fig:setup}` | Gibt die Nummer UND ihren Typnamen automatisch aus: 'fig. 1' (cleveref). |
| `\Cref{fig:setup}` | Großgeschriebenes „\cref“ für den Satzanfang: „Abbildung 1“ (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Gibt einen Bereich aus: 'eqs. 1 bis 4' (cleveref). |
| `\labelcref{fig:setup}` | Druckt nur die Etikettennummer im Cleveref-Stil, ohne den Typnamen (cleveref). |
| `\vref{fig:setup}` | Referenz plus bei Bedarf automatischer „Auf der nächsten Seite“-Satz (Varioref). |
| `\autoref{fig:setup}` | Hyperrefs getippte Referenz: „Abbildung 1“, mit der gesamten Phrase verlinkt. |
| `\nameref{sec:intro}` | Druckt den Titeltext des referenzierten Abschnitts (Hyperref). |
| `\href{https://example.com}{Linktext}` | Erstellt einen anklickbaren Link mit benutzerdefiniertem Text (Hyperref). |
| `\url{https://example.com}` | Setzt eine URL in Schreibmaschinenschrift und macht sie anklickbar. |
| `\hyperref[sec:intro]{dieser Abschnitt}` | Erstellt einen beliebigen Textlink zu einem Label (Hyperref). |
| `\hypertarget{spot}{...}` | Erstellt an einer beliebigen Stelle im Dokument ein benanntes Linkziel (Hyperref). |
| `\hyperlink{spot}{text}` | Verlinkt zu einem „\hypertarget“ (hyperref). |
| `\phantomsection` | Erstellt einen Anker, sodass Links zu nicht nummerierten Überschriften an der richtigen Stelle landen (Hyperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Bietet eine Klartext-Alternative für Mathematik in Überschriften, damit PDF-Lesezeichen gültig bleiben (Hyperref). |
| `\pdfbookmark[1]{Titel}{Name}` | Fügt einen manuellen PDF-Lesezeicheneintrag (Hyperref) hinzu. |

## Zitate und Bibliographie

| Befehl | Was es tut |
| --- | --- |
| `\cite{knuth1984}` | Zitiert einen Bibliographieeintrag nach Schlüssel. |
| `\nocite{key}` | Fügt einen Eintrag zur Bibliographie hinzu, ohne ihn im Text zu zitieren; `\nocite{*}` fügt alles hinzu. |
| `\citep{knuth1984}` | Zitat in Klammern „(Knuth, 1984)“ im Natbib-Autorenjahresstil. |
| `\citet{knuth1984}` | Textzitat „Knuth (1984)“ im Natbib-Autorenjahr-Stil. |
| `\citeauthor{knuth1984}` | Gibt nur die Autorennamen aus (natbib und biblatex). |
| `\citeyear{knuth1984}` | Gibt nur das Jahr aus (natbib und biblatex). |
| `\citealp{knuth1984}` | natbib-Zitat in Klammern ohne Klammern, zum Erstellen Ihres eigenen Zitats. |
| `\citealt{knuth1984}` | Natbib-Textzitat ohne Klammern um das Jahr herum. |
| `\parencite{knuth1984}` | Das Zitat in Klammern von biblatex, das Analogon von „\citep“. |
| `\textcite{knuth1984}` | Das Textzitat von biblatex, das Analogon von „\citet“. |
| `\autocite{knuth1984}` | Biblatex-Zitat, das der bevorzugten Form des Stils folgt (Klammer, Fußnote usw.). |
| `\footcite{knuth1984}` | Biblatex-Zitat in einer Fußnote platziert. |
| `\fullcite{knuth1984}` | Druckt den vollständigen Bibliographietext des Eintrags inline (biblatex). |
| `\citetitle{knuth1984}` | Druckt den Titel des Werks (biblatex). |
| `\bibliography{refs}` | BibTeX: druckt die Referenzliste aus einer .bib-Datei. |
| `\bibliographystyle{plainnat}` | BibTeX: wählt das Referenzformat aus; Zu den klassischen Stilen gehören plain, unsrt, alpha, abbrv, ieeetr, acm und apalike. |
| `\addbibresource{refs.bib}` | biblatex: registriert eine .bib-Datei in der Präambel. |
| `\printbibliography` | biblatex: druckt die Referenzliste dort, wo Sie sie platzieren. |
| `\bibitem{key}` | Ein handgeschriebener Eintrag in einer „thebibliography“-Umgebung. |
| `thebibliography` (Umwelt) | HandgeschriebenReferenzliste, die verwendet wird, wenn Sie BibTeX vollständig überspringen. |

## Floats, Figuren und Tabellen

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| „Figur“ (Umgebung) | Schwebender Container für ein Bild plus Bildunterschrift; LaTeX wählt die endgültige Position. |
| `figur*` (Umgebung) | Abbildung, die beide Spalten in einem zweispaltigen Dokument umfasst. |
| „Tabelle“ (Umgebung) | Floating-Container für eine tabellarische Plus-Beschriftung; LaTeX wählt die endgültige Position. |
| `table*` (Umgebung) | Tabelle, die beide Spalten in einem zweispaltigen Dokument umfasst. |
| `\begin{figure}[htbp]` | Platzierungshinweise: hier, oben, unten, eigene Seite; „!“ lockert die Regeln, „[H]“ (Float-Paket) bedeutet genau hier. |
| „tabellarisch“ (Umgebung) | Das eigentliche Raster aus Zeilen und Spalten: Zellen werden durch „&“ getrennt, Zeilen enden mit „\\“. |
| `tabellar*` (Umgebung) | Tabellarisch auf eine angegebene Gesamtbreite gestreckt. |
| `tabularx` (Umgebung) | Tabelle mit fester Breite, deren „X“-Spalten den verbleibenden Platz (tabularx) teilen. |
| „Array“ (Umgebung) | Mathe-Modus-Raster mit spaltenweiser Ausrichtung. |
| `longtable` (Umgebung) | Tabelle, die seitenübergreifend sein kann, mit sich wiederholenden Überschriften (Langtabelle). |
| `minipage` (Umgebung) | Miniseite mit fester Breite innerhalb der Seite, die zum nebeneinander Platzieren von Inhalten verwendet wird. |
| „Unterfigur“ (Umgebung) | Ein Unterfeld mit eigener Überschrift, wie (a) und (b), innerhalb einer Abbildung (Unterüberschrift). |
| `wrapfigure` (Umgebung) | Abbildung mit umlaufendem Fließtext (wrapfig). |
| „sidewaysfigure“, „sidewaystable“ (Umgebungen) | Floats um 90 Grad auf die eigene Seite gedreht (rotierend). |
| „Landschaft“ (Umwelt) | Dreht ganze Seiten ins Querformat, wobei die PDF-Seite automatisch gedreht wird (pdflscape). |
| „Threeparttable“ (Umgebung) | Umschließt eine Tabelle, sodass die Fußnoten an der Tabellenbreite ausgerichtet sind (dreiteilige Tabelle). |
| `tablenotes` (Umgebung) | Die Notizenliste unter einer dreiteiligen Tabelle, markiert mit „\tnote{a}“. |
| `adjustbox` (Umgebungund `\adjustbox`) | Skaliert, ändert die Größe oder schneidet jeden Inhalt mit Schlüsselwertoptionen (Adjustbox) zu. |
| `\caption{...}` | Fügt einer Abbildung oder Tabelle eine nummerierte Beschriftung hinzu; füge `\label` dahinter ein. |
| `\caption*{...}` | Beschriftung ohne Nummer oder Listeneintrag (Beschriftungspaket). |
| `\captionsetup{...}` | Konfiguriert Beschriftungsschriftarten, Beschriftungen und Abstände (Beschriftungspaket). |
| `\toprule` | Schweres Lineal oben auf einer Booktabs-Tabelle. |
| `\midrule` | Mittlere Regel zwischen der Kopfzeile und dem Hauptteil einer Booktabs-Tabelle. |
| `\bottomrule` | Schwere Linie am Ende einer Booktabs-Tabelle. |
| `\cmidrule(lr){2-3}` | Teilregel, die ausgewählte Spalten (Booktabs) umfasst. |
| `\addlinespace` | Kleiner zusätzlicher vertikaler Abstand zwischen den Buchregisterzeilen anstelle einer Regel. |
| `\hline` | Horizontale Linie in voller Breite in einer einfachen Tabelle; Booktabs-Regeln sehen normalerweise besser aus. |
| `\cline{2-3}` | Horizontale Linie, die ausgewählte Spalten in einer einfachen Tabelle überspannt. |
| `\vline` | Vertikale Linie an dieser Stelle einer Tabellenzeile; Spaltenspezifizierer „|“ sind die übliche Methode. |
| `\multicolumn{2}{c}{Header}` | Führt Zellen spaltenübergreifend in einer Zeile zusammen. |
| `\multirow{2}{*}{Label}` | Führt Zellen vertikal über Zeilen hinweg zusammen (mehrzeilig). |
| `\arraystretch` | Faktor für Tabellenzeilenhöhe; gesetzt mit `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Länge des Abstands auf jeder Seite einer Tabellenspalte. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Definiert einen wiederverwendbaren Spaltenspezifizierer (Array-Paket). |
| `\endfirsthead` | longtable: markiert das Ende der Kopfzeile, die nur auf der ersten Seite angezeigt wird. |
| `\endhead` | longtable: markiert das Ende der Kopfzeile, die auf jeder folgenden Seite wiederholt wird. |
| `\endfoot` | longtable: Markiert das Ende der Fußzeile, die bei jedem Seitenumbruch angezeigt wird. |
| `\endlastfoot` | longtable: markiert das Ende der Fußzeile, die nur ganz am Ende angezeigt wird. |
|`\FloatBarrier` | Verhindert das Abdriften von Schwimmkörpern über diesen Punkt hinaus (Placeins). |

## Fußnoten

| Befehl | Was es tut |
| --- | --- |
| `\footnote{...}` | Fügt unten auf der Seite eine Notiz ein, die mit einer automatischen Nummer gekennzeichnet ist. |
| `\footnotemark` | Druckt nur die Fußnotenmarkierung an Stellen, an denen „\footnote“ nicht zulässig ist. |
| `\footnotetext{...}` | Liefert den Text für ein früheres „\footnotemark“. |

## Theoreme und Beweise

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| `\newtheorem{lemma}{Lemma}` | Deklariert eine theoremähnliche Umgebung (amsthm). |
| `\newtheorem*{remark}{Remark}` | Deklariert eine nicht nummerierte theoremähnliche Umgebung (amsthm). |
| `\theoremstyle{definition}` | Legt das Aussehen (plain, definition, comment) für die folgenden „\newtheorem“-Deklarationen (amsthm) fest. |
| „Theorem“ (Umwelt) | Nummerierter Satzblock, erstellt von „\newtheorem{theorem}{Theorem}“. |
| „Beweis“ (Umwelt) | Proof-Block, der „Proof“ ausgibt. und endet mit dem QED-Quadrat (amsthm). |

## Wörtlich, Code und Auflistungen

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| `\verb|code|` | Inline wörtlich: Gibt genau das aus, was Sie eingeben, getrennt durch wiederholte Zeichen. |
| „verbatim“ (Umgebung) | Textblock, genau wie eingegeben, in Schreibmaschinenschrift gedruckt. |
| `\verbatiminput{file.txt}` | Druckt eine ganze Datei wörtlich (Wortpaket). |
| `lstlisting` (Umgebung) | Auflistung des Quellcodes mit optionaler Syntaxhervorhebung (Listings). |
| `\lstinline|code|` | Inline-Code-Snippet im Listings-Stil (Listings). |
| `\lstset{Sprache=Python}` | Konfiguriert die Standardeinstellungen für Auflistungen: Sprache, Nummerierung, Farben (Auflistungen). |
| `\lstinputlisting{script.py}` | Setzt eine ganze Quelldatei als Auflistung (Auflistungen). |
| „geprägt“ (Umwelt) | Pygments-basierte hervorgehobene Codeblöcke; benötigt „-shell-escape“ zur Kompilierungszeit (geprägt). |
| `\mintinline{python}|code|` | Hervorgehobener Inline-Code (geprägt). |

## Beamer (Folien)

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| „Rahmen“ (Umgebung) | Eine Beamer-Folie: `\begin{frame}{Folientitel} ... \end{frame}`. |
| `\frame{...}` | Beamers Ein-Befehl-Folienformular; Die „Frame“-Umgebung ist der übliche Weg. |
| `\frametitle{...}` | Legt den Folientitel innerhalb eines Rahmens fest. |
| `\framesubtitle{...}` | Legt einen kleineren Untertitel unter dem Bildtitel fest. |
| `\titlepage` | Beamer: Druckt innerhalb eines Frames die Titelfolie aus Ihren Titelmetadaten. |
| `\tableofcontents[aktueller Abschnitt]` | Gliederungsfolie, die den Abschnitt hervorhebt, in dem Sie sich befinden. |
| `\pause` | Beamer: Zeigt den Rest des Bildes beim nächsten Folienschritt an. |
| `\onslide<2->` | Der Inhalt erscheint ab einem bestimmten Overlay-Schritt. |
| `\only<2>{...}` | Der Inhalt existiert nur auf den angegebenen Schritten und nimmt an anderer Stelle keinen Platz ein. |
| `\uncover<2->{...}` | Der Inhalt ist vor seinem Schritt unsichtbar, behält aber immer seinen Platz. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Inhalte zu bestimmten Schritten ein- oder ausblenden, ohne das Layout zu ändern. |
| `\alert{...}` | Hebt Text in der Warnfarbe des Themas hervor, normalerweise rot. |
| „Block“ (Umgebung) | Betiteltes Feld in der Standardfarbe des Themas. |
| `alertblock` (Umgebung) | Betiteltes Feld in der Alarmfarbe für Warnungen oder wichtige Punkte. |
| `exampleblock` (Umgebung) | Betiteltes Feld in der Beispielfarbe, normalerweise grün. |
| `columns` (Umgebung) und `\column{0.5\textwidth}` | Nebeneinander liegende Layoutbereiche auf einer Folie. |
| `\usetheme{Madrid}` | Beamer: wählt in der Einleitung das Thema der Präsentation aus. |
| `\usecolortheme{Seepferdchen}` | Tauscht nur die Farbpalette des Themas aus. |
| `\usefonttheme{serif}` | Tauscht nur die Schriftartenauswahl des Themas aus. |
| `\setbeamertemplate{Navigationssymbole}{}` | Überschreibt ein Designelement und entfernt hier die Navigationssymbole. |
|`\setbeamercolor{title}{fg=black}` | Überschreibt eine Designfarbe. |
| `\note{...}` | An einen Rahmen angehängte Sprechernotizen, die nur in der Notizenausgabe angezeigt werden. |

## TikZ und Diagramme

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| `tikzpicture` (Umgebung) | Leinwand für TikZ-Zeichnungen; Alle „\draw“- und „\node“-Befehle gehen darin ein. |
| `\tikz` | One-Shot-Inline-Bild: „\tikz \draw (0,0) Circle (2pt);“. |
| `\draw (0,0) -- (1,1);` | TikZ-Pfadbefehl, der Linien und Formen zeichnet; Optionen wie „[dick, rot, ->]“ gestalten es. |
| `\fill` | TikZ-Pfadbefehl, der eine Form ausfüllt, anstatt sie zu streichen. |
| `\filldraw` | TikZ-Pfadbefehl, der eine Form sowohl füllt als auch umreißt. |
| `\shade` | TikZ-Pfadbefehl, der mit einem Farbverlauf gefüllt wird. |
| `\clip` | TikZ-Pfad, der alle späteren Zeichnungen auf sein Inneres beschränkt. |
| `\pfad` | TikZ-Pfad, der Koordinaten ohne Zeichnung berechnet, z. B. zum Platzieren von Knoten. |
| `\node at (0,0) {label};` | TikZ-Befehl, der Text oder Formen an Koordinaten platziert. |
| `\koordinate (a) bei (1,2);` | Benennt einen Punkt zur Wiederverwendung in späteren Pfaden. |
| `\foreach \i in {1,...,5}` | Schleife, die das Zeichnen von Code über eine Liste wiederholt (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | Definiert wiederverwendbare TikZ-Stile auf moderne Weise. |
| `\tikzstyle` | Alte Stildefinitionssyntax; veraltet, verwenden Sie „\tikzset“. |
| `\usetikzlibrary{positionierung}` | Lädt zusätzliche TikZ-Funktionen in der Präambel. |
| `\matrix` (TikZ) | Rasterausgerichtete Anordnung von Knoten innerhalb eines Tikzbildes. |
| `tikzcd` (Umgebung) | Gitter für kommutative Diagramme; Zellen geteilt durch „&“ (tikz-cd). |
| `\arrow[r, "f"]` | Zeichnet einen Pfeil zwischen Zellen in einem kommutativen Tikz-CD-Diagramm. |

## Einheiten (siunitx)

| Befehl | Was es tut |
| --- | --- |
| `\num{12345.678}` | Formatiert eine Zahl mit der richtigen Zifferngruppierung und Dezimalmarkierungen. |
| `\qty{9.8}{\meter\per\second\squared}` | Zahl mit Einheit, korrekter Abstand (siunitx v3-Name). |
| `\unit{\kilo\gram}` | Einheit allein (siunitx v3-Name). |
| `\SI{9.8}{\meter\per\second\squared}` | v2-Name von „\qty“; immer noch häufig in Zeitungen zu finden. |
| `\si{\kilo\gram}` | v2-Name von „\unit“. |
| `\sisetup{...}` | Globale siunitx-Konfiguration. |
| `\DeclareSIUnit{\parsec}{pc}` | Definiert eine benutzerdefinierte Einheit (siunitx). |

## Glossare und Akronyme

| Befehl | Was es tut |
| --- | --- |
| `\gls{svm}` | Druckt einen Glossar- oder Akronymeintrag und erweitert ihn bei der ersten Verwendung (Glossare). |
| `\Gls{svm}` | Großgeschriebene Form für Satzanfänge (Glossare). |
| `\glspl{svm}` | Pluralform des Eintrags (Glossare). |
| `\newglossaryentry{tree}{name=tree, description={...}}` | Deklariert einen Glossarbegriff (Glossare). |
| `\newacronym{svm}{SVM}{support vector machine}` | Deklariert ein Akronym mit Kurz- und Langformen (Glossaren). |
| `\acrshort{svm}`, `\acrlong{svm}` | Erzwingen Sie die Kurz- oder Langform unabhängig von der ersten Verwendung (Glossare). |
| `\makeglossaries` | Präambelbefehl, der die Glossar-/Akronymverarbeitung (Glossare) aktiviert. |
| `\printglossary` | Druckt eine Glossarliste dort, wo Sie sie platzieren (Glossare). |
| `\printglossaries` | Druckt das Glossar und die Akronymlisten dort, wo Sie es platzieren (Glossare). |

## Algorithmen und Pseudocode

Schlüsselwortbefehle stammen von algpseudocode (algorithmicx); der „Algorithmus“ float umschließt sie.

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| „Algorithmus“ (Umgebung) | Floating-Container für Pseudocode, mit Beschriftung und Nummer (Algorithmus). |
| „algorithmisch“ (Umgebung) | Der Pseudocode-Körper selbst, der die Schlüsselwortbefehle (algpseudocode) enthält. |
| `\State` | Eine Anweisungszeile Pseudocode. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Bedingte Blockschlüsselwörter. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Schleifen Sie Schlüsselwörter über einen Bereich oder eine Menge. |
| `\While{...}`, `\EndWhile` | While-Schleifenschlüsselwörter. |
| `\Function{Name}{args}`, `\EndFunction` | Funktionsdefinitionsblock. |
| `\Procedure{Name}{args}`, `\EndProcedure` | Prozedurdefinitionsblock. |
| `\Return` | Das Schlüsselwort return. |
| `\Comment{...}` | Rechtsbündiger Kommentar zu einer Pseudocode-Zeile. |
| `\Require`, `\Ensure` | Vorbedingungs- und Nachbedingungszeilen am Anfang eines Algorithmus. |

## Sprach-, Zitat- und Redaktionspakete

| Befehl | Was es tut |
| --- | --- |
| `\selectsprache{deutsch}` | Schaltet die aktive Sprache um: Silbentrennung, Bildunterschriften, Datumsangaben (Babel). |
| `\foreignsprache{französisch}{...}` | Setzt eine kurze Passage nach den Regeln einer anderen Sprache (babel). |
| `\enquote{...}` | Kontextbezogene Anführungszeichen, die korrekt verschachtelt und lokalisiert werden (csquotes). |
| `\todo{Das beheben}` | Randnotiz, in der die zu erledigende Arbeit markiert wird (Todonotes). |
| `\listoftodos` | Druckt eine Liste aller Todo-Notizen (todonotes). |
| `\missingfigure{...}` | Platzhalterfeld für eine Figur, die Sie noch nicht erstellt haben (Todonotes). |
| `\xspace` | Fügt am Ende eines Makros ein Leerzeichen hinzu, sofern kein Satzzeichen folgt (xspace). |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Patcht die Definition eines vorhandenen Makros (etoolbox). |
| `\apptocmd`, `\pretocmd` | Code an ein vorhandenes Makro (etoolbox) anhängen oder ihm voranstellen. |
| `\newtoggle{draft}`, `\toggletrue{draft}`, `\iftoggle{draft}{...}{...}` | Leichte boolesche Flags (etoolbox). |

## Layout- und Typografiepakete in einer Zeile

| Paket oder Befehl | Was es tut |
| --- | --- |
| `\setstretch{1.25}` | Legt einen genauen Zeilenabstandsfaktor (setspace) fest. |
| `\doublespacing` | Wechselt zum doppelten Zeilenabstand (Setspace). |
| `\onehalfspacing` | Schaltet auf eineinhalb Zeilenabstand (Setspace) um. |
| `\singlespacing` | Wechselt zurück zum einfachen Zeilenabstand (Setspace). |
| „Abstand“ (Umgebung) | Legt einen benutzerdefinierten Zeilenabstandsfaktor für seinen Inhalt fest (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Entwirft das Aussehen einer Abschnittsüberschrift neu (titlesec). |
| `\titlespacing{\section}{0pt}{12pt}{6pt}` | Passt den Abstand um eine Überschrift an (Titelsekunden). |
| `\setlist[itemize]{noitemsep}` | Konfiguriert Listenabstände und Beschriftungen global oder pro Ebene (enumitem). |
| `parskip` (Paket) | Schaltet das Dokument auf Blockabsätze um: Leerzeichen dazwischen, kein Einzug. |
| `microtype` (Paket) | Dezente Vorsprünge und Erweiterungen, die die Rechtfertigung verbessern; Laden Sie es einfach. |
| `multicols` (Umgebung) | Ausgewogener mehrspaltiger Text ohne die Klassenoption twocolumn (multicol). |

## Chemie, Physik und Domänennotation

| Befehl | Was es tut |
| --- | --- |
| `\ce{H2O}` | Setzt eine chemische Formel oder Reaktion (mhchem). |
| `\chemfig{...}` | Zeichnet ein chemisches Strukturdiagramm (chemfig). |
| `\braket{\phi|\psi}` | Setzt die Dirac-Braket-Notation mit automatisch angepassten Balken (Braket). |

## Befehle der Publisher-Klasse

| Befehl oder Umgebung | Was es tut |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: formatiert einen Autorennamenblock im Titelbereich der IEEE-Konferenz. |
| `\IEEEauthorblockA{...}` | IEEEtran: Formatiert einen Autorenzugehörigkeitsblock im Titelbereich der IEEE-Konferenz. |
| `\ccsdesc[500]{...}` | acmart: deklariert ein ACM CCS-Konzept für die Klassifizierung des Papiers. |
| „CCSXML“ (Umgebung) | acmart: enthält die maschinenlesbaren ACM CCS-Konzepte XML aus dem ACM-Klassifizierungstool. |
| `\Universität{...}` | Klassenspezifischer Metadatenbefehl, der in Vorlagen für Abschlussarbeiten zu sehen ist, nicht in Standard-LaTeX. |

## Umgebungen im Allgemeinen

Eine Umgebung ist eine Region, die mit „\begin{name}“ geöffnet und mit „\end{name}“ geschlossen wird; Alles zwischen den beiden erhält das Verhalten dieser Umgebung. Die ganze Geschichte finden Sie in [Befehle vs. Umgebungen](/learn/commands-environments/). Die Allzweckgeräte:

| Umwelt | Was es tut |
| --- | --- |
| „Dokument“ | Der Hauptteil jedes Dokuments befindet sich zwischen „\begin{document}“ und „\end{document}“. |
| „abstrakt“ | Druckt die Zusammenfassung der Arbeit mit der Standardüberschrift und dem Standardlayout der Klasse. |
| `Titelseite` | Umhüllt eine handgefertigte vollständige Titelseite; Die Seite ist nicht nummeriert. |
| „Mitte“ | Zentriert den Inhalt horizontal. |
| `flushleft` | Richtet den Inhalt nach links aus, nach rechts unregelmäßig. |
| `flushright` | Richtet den Inhalt rechtsbündig aus, linksbündig ausgerichtet. |
| `itemize` | Liste mit Aufzählungszeichen; Jeder Eintrag beginnt mit „\item“. |
| `aufzählen` | Nummerierte Liste; Jeder Eintrag beginnt mit „\item“. |
| `Beschreibung` | Beschriftete Liste; Einträge beginnen mit „\item[Label]“. |
| `\item` | Startet einen Eintrag in Itemize-, Enumerate- oder Beschreibungslisten. |
| `Zitat` | Eingerückter Block für kurze Zitate, kein Absatzeinzug. |
| „Zitat“ | Eingerückter Block für längere Zitate, mit Absatzeinzügen. |
| „Vers“ | Eingerückter Block für Gedichte, wobei „\\“ jede Verszeile beendet. |
| `sloppypar` | Absätze mit lockerem Zeilenumbruch, der Umgebungsform „\sloppy“. |
| `Liste` | Der allgemeine Listenersteller, über den Itemize und Friends definiert werden. |
| `trivlist` | Einfache Liste ohne Beschriftungen oder Ränder, die in Makrodefinitionen verwendet wird. |
| `Dateiinhalte` | Schreibt seinen Text zur Kompilierungszeit in eine Datei, z.B. um eine .bib innerhalb der .tex zu versenden. |
| `Anhänge` | Umschließt die Anhangskapitel und aktiviert „\appendixpage“ und pro-Anhang-Tools (Anhangpaket). |

## Wohin als nächstes?

Diese Seite ist das Wörterbuch. Der Unterricht ist die Grammatik. Für einen fertigen One-Pager zum Einfügen lassen Sie [das Cheatsheet](/learn/cheatsheet/) geöffnet. Für den Unterschied zwischen „\command{...}“- und „\begin{...}“-Blöcken lesen Sie [Befehle vs. Umgebungen](/learn/commands-environments/). Für ein Symbol, das Sie sich vorstellen, aber nicht benennen können, verwenden Sie [mathematische Symbole](/learn/math-symbols-cheatsheet/). Um zu sehen, wie ein Befehl im Mathematikmodus aussieht, fügen Sie ihn in [die Live-Vorschau] (/live/) ein und sehen Sie zu, wie er gerendert wird.