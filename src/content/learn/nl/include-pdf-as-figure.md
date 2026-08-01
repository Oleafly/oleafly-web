---

title: "Een PDF-pagina als afbeelding"
description: "inclusief afbeeldingen met paginaselectie, en pdf-pagina's voor bijlagen."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Een PDF-pagina als afbeelding

PDF is het beste figuurformaat dat LaTeX kan gebruiken. In tegenstelling tot PNG of JPG slaat een PDF vectorgegevens op, zodat lijnen en labels op elk zoomniveau scherp blijven en de lettertypen erin met het bestand meegaan. Tools als Matplotlib, Inkscape en draw.io exporteren allemaal PDF, wat betekent dat het diagram dat u elders tekent rechtstreeks in uw document terecht kan komen. Maar PDF's brengen één rimpel met zich mee die afbeeldingen niet hebben: een PDF kan veel pagina's bevatten, en je moet LaTeX vertellen welke je wilt.

## Eén pagina uit een PDF met meerdere pagina's halen

Het pakket `\includegraphics` van het `graphicx`-pakket accepteert een `page`-optie naast de gebruikelijke formaatsleutels:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Hier selecteert `page=1` de eerste pagina van `diagram.pdf`, en `width=\textwidth` schaalt die pagina naar de volledige breedte van het tekstblok. Als je `page` weglaat, gebruikt LaTeX stilletjes pagina één, wat meestal is wat je wilt, maar je kan verrassen als een plotscript verschillende cijfers in één enkel bestand schrijft. U kunt dezelfde PDF meerdere keren opnemen met verschillende 'pagina'-waarden, één keer per figuuromgeving, elk met zijn eigen bijschrift en label.

Plaats het commando in een normale 'figure'-omgeving, zodat het een bijschrift en een nummer krijgt, precies zoals je zou doen voor [elke andere afbeelding] (/learn/insert-images/). De opgenomen pagina wordt bijgesneden tot het eigen kader, dus als uw bron-PDF royale marges heeft, ziet de afbeelding er opgevuld uit. Exporteer opnieuw met een strak kader, of snijd het één keer bij met een tool als `pdfcrop`, in plaats van de witruimte te bestrijden met een negatieve spatiëring.

## Hele documenten invoegen met pdf-pagina's

Soms wil je helemaal geen figuur. U wilt dat hele pagina's woordelijk in uw document worden geplaatst: een aanvullende pdf, een ondertekend formulier, een gepubliceerde vragenlijst in een scriptiebijlage. Dat is de taak van het pakket `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

De waarde `pages=-` betekent elke pagina. U kunt ook `pages=2-5` schrijven voor een bereik of `pages={1,3,7}` voor een specifieke lijst. Elke ingevoegde pagina vult zijn eigen uitvoerpagina, behoudt de oorspronkelijke lay-out en neemt deel aan de paginanummering van uw document, zodat de bijlage continu wordt gelezen. Voeg de `pagecommand={}` optie toe als kop- of voetteksten van uw documentklasse bovenop de ingevoegde pagina's worden afgedrukt en u deze onderdrukt of aangepast wilt hebben.

## Welk gereedschap voor welke klus

Gebruik `\includegraphics[page=...]` wanneer de PDF-inhoud zich als een figuur moet gedragen, wat betekent dat de inhoud zweeft, een bijschrift draagt ​​en er vanuit de tekst naar wordt verwezen. Gebruik `\includepdf` als de pagina's op volledige grootte op zichzelf moeten staan. De veelgemaakte fout is het gebruik van `pdfpages` voor een diagram, waardoor je een volledige pagina zonder ondertiteling krijgt, zonder verwijzingen, die je niet kunt citeren met `\ref`. Als lezers ooit "zie Figuur 3" zullen zien, hoort het thuis in een figuuromgeving.