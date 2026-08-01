---

title: "Yazı tahtası, senaryo, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm ve her alfabenin ne zaman göründüğü."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Karatahta, senaryo, Fraktur

Matematik birden fazla alfabe kullanır. Gerçek sayılar karatahta renginde R harfini alır, Lagrangian kaligrafik L harfini alır, Lie cebiri Fraktur g değerini alır ve bunların her biri açtığınız bir yazı tipi yerine LaTeX'te ayrı bir komuttur. Tutarlı bir şekilde kullanıldığında, alfabeler okuyucuya bir harfin çevresindeki cümleden önce ne tür bir nesneyi adlandırdığını söyler.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Dört alfabe

| Komut | Bak | Tipik kullanım |
| --- | --- | --- |
| `\mathbb{R}` | Karatahta | Sayı kümeleri |
| `\mathcal{L}` | Kaligrafi | Lagrangianlar, kayıp |
| `\mathfrak{g}` | Fraktür | Lie cebirleri |
| `\mathrm{d}` | Dik | Diferansiyeller, operatör adları |

`\mathbb` karatahta kalın yazı tipini, neredeyse yalnızca sayı kümeleri için kullanılan çift çizgili harfleri üretir: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. 'amssymb' paketinden gelir ve yalnızca büyük harfleri kapsar. Yazı tipinde küçük harf alfabesi yoktur, bu nedenle küçük harfli bir argüman yanlış glifler yazdırır veya hiçbir işe yaramaz.

'\mathcal' kaligrafik büyük harfleri, Lagrangianlar için olağan seçimi, kayıp fonksiyonlarını ve küme ailelerini verir. Ayrıca yalnızca büyük harfleri kapsar ve ekstra paket olmadan çekirdek LaTeX'te çalışır.

'\mathfrak', yine 'amssymb'den gelen Fraktur'dur ve her iki durum da mevcuttur. Küçük harf Fraktur, Lie cebirlerini adlandırır ve büyük harfler cebirde ve küme teorisinde, diğer şeylerin yanı sıra idealler ve kardinaller için görünür.

'\mathrm' dekoratif bir alfabe değil, matematiğin içinde düz romana geçiştir. Bir değişkenden ziyade gösterim olan her şey için doğru araçtır: "\mathrm{d}x" cinsinden diferansiyel, birimler veya "x_{\mathrm{max}}" gibi metinsel alt etiketler. tr ve rütbe gibi adlandırılmış operatörler için, [bir kez icat ettiğiniz operatörler](/learn/argmin-argmax/) kapsamında ele alınan daha iyi bir mekanizma vardır.

## Pratik notlar

Eğer `\mathcal` amacınız için çok basit görünüyorsa, `mathrsfs` paketi genellikle demetler ve sigma cebirleri için kullanılan daha süslü bir komut dosyası olan `\mathscr`yi ekler. İkisi bir arada var olabilir ve aynı kağıtta farklı nesneleri ifade edebilir.

Yaygın hata, bu alfabeleri dekorasyon olarak ele almaktır. Her biri çoğu alanda geleneksel bir anlam taşır ve `\mathbb{A}` ifadesini gören bir okuyucu, kümeye benzer ve sayılardan oluşan bir şey bekleyecektir. Harfleri atamadan önce alanınızın kurallarını kontrol edin ve atandıktan sonra belgenin tamamı için nesne başına bir alfabe bulundurun. Dördü de [canlı oyun alanında](/live/) saniyeler içinde yan yana işleniyor.