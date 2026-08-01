---

title: "Klasik BibTeX veya biblatex"
description: "Arka uçlar, stiller ve günden güne değişen şeyler."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# Klasik BibTeX veya biblatex

LaTeX'in aynı ".bib" dosyalarını okuyan ancak hemen hemen her şeyi farklı olan iki alıntı sistemi vardır. Klasik BibTeX'in tarihi 1980'lerden kalmadır: küçük bir harici program, kendi yığın tabanlı dilinde yazılmış stil dosyalarını kullanarak referanslarınızı formatlar. biblatex modern alternatiftir: biçimlendirme LaTeX'in kendisinde gerçekleşir ve sıralama ve veri işleme işlemlerini 'biber' adı verilen bir yardımcı program gerçekleştirir. İsimler kafa karıştırıcı derecede benzer. "BibTeX"in hem eski program hem de genel olarak eski sistem olduğunu, "biblatex"in ise arka uç olarak "biber" kullanan bir LaTeX paketi olduğunu unutmayın.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Yaş | Klasik | Modern |
| Stiller | `.bst` | `.bbx`/`.cbx` |
| Unicode | Kırılgan | Güçlü |
| Günlük desteği | Evrensel | Büyüyor |

## Pratikte farklılıklar ne anlama geliyor?

Stil satırı en önemlisidir. BibTeX stilleri neredeyse hiç kimsenin okuyamayacağı veya değiştiremeyeceği ".bst" dosyalarıdır, dolayısıyla derginin gönderdiğini alırsınız. biblatex stilleri sıradan LaTeX'tir, kaynakça ('.bbx') ve alıntı ('.cbx') bileşenlerine bölünmüştür ve URL'leri bırakmak veya noktalama işaretlerini değiştirmek gibi küçük değişiklikler tek satırlık özelleştirmelerdir. Referanslarınız aksanlı adlar veya Latince olmayan alfabeler içeriyorsa Unicode satırı önemlidir. Klasik BibTeX, her karakterin `\'{e}` ve arkadaş olarak kaçışı yapılmadığı sürece onları yönetirken, biber UTF-8'i yerel olarak yönetir. Son satır, klasik BibTeX'in neden hayatta kaldığını gösteriyor: çoğu dergi ve konferans hala bir ".bst" dosyası dağıtıyor ve klasik araç zincirini bekliyor ve gönderim sistemleri genellikle başka her şeyi reddediyor.

## Biblatex belgesi nasıl görünür?

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

Klasik kalıpla karşılaştırıldığında, "\addbibresource{refs.bib}" (uzantısıyla birlikte) giriş bölümüne taşınır, "\printbibliography", "\bibliography{refs}" yerine geçer ve stil bir paket seçeneği olduğundan "\bibliographystyle" satırı yoktur. Yapının "bibtex" yerine "biber" çalıştırması gerekir; Yanlış arka ucu çalıştırmak, [boş bibliyografyanın](/learn/bibliography-empty/) yaygın bir nedenidir.

## Nasıl seçilir

Bırakın ne zaman yapabileceğine mekan karar versin. Şablon bir ".bst" dosyası gönderiyorsa veya yazar talimatlarında BibTeX'ten bahsediliyorsa, klasik BibTeX'i kullanın ve onunla mücadele etmeyin. Bir tezde, ön baskıda veya ders notlarında olduğu gibi format sizin kontrolünüzde olduğunda biblatex daha iyi bir araçtır: daha temiz özelleştirme, gerçek Unicode desteği ve web kaynakları için amaca yönelik olarak oluşturulmuş giriş türleri. ".bib" veritabanınız her iki sistemde de değişmeden çalışır, dolayısıyla seçim hiçbir zaman kalıcı olmaz. Alıntı komutları ikisi arasında farklılık gösterir ve [natbib alışkanlıkları ve biblatex komutları](/learn/natbib-vs-biblatex/) bir kümeyi diğerine eşler.