---

title: "Yazı tipiyle kavga etmeden vurgu"
description: "textbf, textit, emph, mono ve neden emph'in sabit kodlu italiklerden daha iyi yuvalandığı."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Yazı tipiyle kavga etmeden vurgu

LaTeX'teki vurgu, her biri etkilenen metni parantezli bir argüman olarak alan küçük bir komut kümesinden gelir. LaTeX, çoğu kelime işlemcinin birleştirdiği iki fikri birbirinden ayırır: belirli bir yazı tipi uygulamak ve bir aralığı vurgulandığı gibi işaretlemek. Stiller değiştiğinde belgelerin tutarlı kalmasını sağlayan komutun hangisi olduğunu bilmek.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Komutlar

'\textbf', tanımlardaki güçlü vurgu ve başlıklar için standart tedavi olan kalın yazı tipini belirler. `\textit` italik yazı tipini doğrudan ayarlar. '\texttt', metin akışındaki dosya adları, komutlar ve kod tanımlayıcıları için kullanılan tek aralıklı daktilo yazı tipine geçiş yapar. '\textsc', bibliyografyalardaki yazar adları ve aksi takdirde metnin bir satırına hakim olacak kısaltmalar için yaygın olan küçük büyük harfler ayarlar.

`\underline` mevcut ancak örnekte yorumunu alıyor. Altını çizmek, daktilo döneminde italik yerine kullanılan bir yöntemdir ve LaTeX'te de mekanik bir sorun vardır: Altı çizili metin bir kutuya yerleştirilir, bu nedenle satırların üzerinden geçemez ve altı çizili uzun bir ifade kenar boşluğundan taşar. Basılı tipografide italik yazı, eskiden altını çizmenin yaptığı işi yapar.

Komutlar iç içe olduğundan, yazı tipi yüzü sağladığında `\textbf{\textit{kalın italik}}` her ikisini de birleştirir.

## Neden \emph

'\emph' görünüşten ziyade anlamı işaret eder: "bunu vurgula" der ve bunun nasıl yapılacağına bağlam karar verir. Dik metinde italik yazdırır. Zaten italik olan metnin içinde tekrar dik duruma döner, böylece vurgu içindeki vurgu görünür kalır. İtalik metnin içindeki sabit kodlu '\textit' italik kalır ve iç vurgu kaybolur. Markalama amacı daha sonra da karşılığını verir. Bir sınıf veya paket, belgenin tamamında düzenleme yapmadan vurgunun nasıl görüneceğini tek bir yerde yeniden tanımlayabilir.

Temel kural: Düzyazı yazarken vurgu için "\emph" kullanın ve kitap başlıkları, yabancı ifadeler ve tür adları gibi bağlamdan bağımsız olarak geleneksel olarak italik olan şeyler için "\textit"i ayırın.

## Sınırlar ve alışkanlıklar

Bunların hepsi metin modu komutlarıdır ve formüllerin içinde hatalı davranırlar. Kalın matematik sembollerinin, [bold math](/learn/bold-math/) kapsamındaki `\mathbf` veya `\boldsymbol`a ihtiyacı vardır. Vurguları üst üste koymaya karşı koyun, çünkü her şey kalın yazıldığında hiçbir şey göze çarpmaz. Yapı aynı zamanda içindekiler tablosunu ve PDF yer işaretlerini de beslediği için, manüel kalın yerine "\bölüm" gibi yapısal komutlardan başlıklar oluşturun. [Daha büyük ve daha küçük tür](/learn/font-size/), yazı tipi boyutları için aynı argümanı sunar.