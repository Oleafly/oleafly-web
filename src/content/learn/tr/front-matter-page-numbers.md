---

title: "Roma sonra arapça sayfalar"
description: "Komitelerin hâlâ beklediği ön konu numaralandırması."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Romalı sonra arapça sayfalar

Hemen hemen her tezi veya ders kitabını açtığınızda aynı kuralı göreceksiniz: başlık sayfası, özet, içindekiler tablosu ve teşekkürler küçük romen rakamlarıyla i, ii, iii olarak numaralandırılmıştır ve ardından ilk gerçek bölüm sıradan arap rakamlarıyla sayfa 1'den başlar. Ön konu ayrı bir ön sıra olarak ele alınır ve lisansüstü okullar bu sözleşmeyi açıkça kontrol eder. LaTeX'te tam olarak iki komut gerekir.

## Desen

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` aynı anda iki şey yapar: rakam stilini küçük harfli romana çevirir ve sayfa sayacını 1'e sıfırlar, böylece başlık sayfası sayfa i olur. Ondan sonra koyduğunuz her şey, genellikle "\maketitle", özet, [içindekiler tablosu](/learn/table-of-contents/) ve şekil veya tablolardan oluşan listeler ii, iii, iv vb. şekilde numaralandırılır.

Ardından, ilk bölümden hemen önce, `\pagenumbering{arabic}` stili geri değiştirir ve sayacı yeniden sıfırlar, böylece `\chapter{Giriş}` yeni bir 1. sayfada açılır. Bütün mesele sıfırlamadır: o olmadan girişiniz 7. sayfa gibi bir yerde başlar ki bu, komitelerin veya alıntı sözleşmelerinin beklediği gibi değildir.

'Book' ve 'report' sınıflarındaki '\chapter' her zaman yeni bir sayfa başlattığından, geçişten önce açık bir '\newpage'e ihtiyacınız yoktur. Bölümlerin olmadığı bir sınıfta numaralandırma değişikliğinin sayfanın ortasına gelmemesi için önce `\clearpage'i eklersiniz.

## Bunu sizin için yapan sınıflar

Bazı tez sınıfları `\frontmatter` / `\mainmatter` / `\backmatter` sağlar. Bunlar 'kitap' sınıfından gelir ve aynı şeyi söylemenin daha üst düzey yoludur. '\frontmatter', roman numaralandırmasına geçer ve bölümleri numarasız hale getirir (böylece Önsöz'de "Bölüm 1" etiketi olmaz). `\mainmatter` Arapçaya geçer ve numaralandırılmış bölümleri geri yükler. '\backmatter', sondaki ek benzeri materyal için bölüm numaralandırmasını tekrar kapatır. Üniversitenizin şablonu 'kitap' veya 'anı' üzerine oluşturulmuşsa, ham '\sayfa numaralandırma' yerine bu komutları tercih edin, çünkü şablon bunlara ön konu için farklı başlıklar gibi ekstra davranışlar ekleyebilir. Bu iki yaklaşım çelişmiyor ancak her ikisini de kullanmanın bir anlamı yok.

## Kontrol edilecek bir şey

Roma rakamlı sayfalar içindekiler tablonuzla uyumlu olmalıdır. Özetiniz ToC'de "iv" sayfası olarak görünüyor ancak "2" olarak yazdırılıyorsa, bunun genel nedeni, kapsaması gereken içerikten sonra yapılan bir "\pagenumbering" çağrısı veya eksik bir ikinci derlemedir: ToC'deki sayfa numaraları ".aux" dosyasından gelir, bu nedenle numaralandırmanın doğru olup olmadığına karar vermeden önce [iki kez derlemeniz](/learn/compile-to-pdf/) gerekir. Derleyin, tekrar derleyin ve ardından ToC'yi gerçek sayfalarla karşılaştırın.