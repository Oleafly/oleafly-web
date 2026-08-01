---

title: "Paragraflar, aralar ve boşluk"
description: "Boş satırlar, zorunlu aralar, vspace ve bilmeye değer boşluk komutları."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Paragraflar, aralar ve boşluk

Bir kelime işlemcide, Enter tuşuna basarak ve boşlukları gözleyerek paragrafları şekillendirirsiniz. LaTeX farklı çalışır: kaynak metin yapıyı tanımlar ve derleyici boşluğa karar verir. LaTeX'in bir paragrafa nasıl başladığını ve gerektiğinde onu nasıl geçersiz kılacağınızı öğrendikten sonra, yeni başlayanların genellikle paragrafla yaşadığı biçimlendirme kavgalarından kaçınırsınız.

## Paragraflar nasıl çalışır?

Kaynağınızdaki boş bir satır yeni bir paragraf başlatır. Bütün kural budur. Bir veya beş satır boş, hiç fark etmez; LaTeX bunları tek bir paragraf sonuna daraltır. Benzer şekilde, kaynağınızın içindeki tek satır sonu sıradan bir boşluk olarak kabul edilir, böylece kaynak metninizi istediğiniz genişlikte sarabilir ve çıktıyı hiçbir şekilde değiştirmeden serbestçe yeniden akıtabilirsiniz.

'\par' komutu boş bir satırla tamamen aynı anlama gelir. Bunu nadiren kendiniz yazacaksınız, ancak makrolarda ve sınıf dosyalarında, gerçek anlamda boş bir satır yazmanın zor olduğu yerlerde göreceksiniz.

`\\` tamamen farklı bir şeydir: yeni bir paragraf başlatmadan mevcut paragrafın içinde satır sonu yapılmasını zorlar. Yeni satırda paragraf girintisi ve fazladan dikey boşluk olmaz. Adresler, şiirler ve tablo satırları gibi satır sonlarının içerik olduğu yerler için mevcuttur. Bunu sıradan paragrafları bitirmek için kullanmak başlangıç ​​seviyesindeki klasik bir hatadır, çünkü aslında hiç bitmeyen bir paragraf üretir ve LaTeX, iki tanesi üst üste geldiğinde "Burada sona erecek satır yok" şeklinde şikayette bulunabilir.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Dikey alan ekleme

Bazen, örneğin bir imza bloğundan önce veya bir başlık sayfasının mantıksal bölümleri arasında kasıtlı bir boşluk olmasını istersiniz.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}`, LaTeX'in bildiği herhangi bir birime (`em`, `pt`, `cm` vb.) tam olarak istediğiniz dikey alanı ekler. Üç atlama komutu önceden belirlenmiş miktarlardır: `\smallskip`, `\medskip` ve `\bigskip` boyutları belge sınıfınız tarafından tanımlanan küçük, orta ve büyük boşlukları ekler, bu da bunların belge genelinde tutarlı olmasını sağlar. Elle ayarlanmış "\vspace" değerleri yerine atlamaları tercih edin, çünkü sınıfı veya yazı tipi boyutunu değiştirdiğinizde uyum sağlarlar.

Yararlı bir ayrıntı: LaTeX sayfa sınırlarındaki esnek alanın kasıtsız olduğunu varsaydığından, sayfanın üst kısmındaki "\vspace" sessizce bırakılır. Gerçekten korunmasını istiyorsanız yıldızla birlikte `\vspace*{1em}` kullanın.

## Tüm paragraflar arasındaki boşluk

Paragraflar arasında boşluk bırakmak için `\\` spam yapmayın. Her paragrafın bir girinti ile işaretlenmek yerine bir boşlukla ayrılmasını istiyorsanız, bu belge çapında bir tasarım kararıdır: bunu 'parskip' paketinin giriş bölümünde bir kez ayarlayın veya başlıkların ve yapının ayrımı daha iyi iletip iletemeyeceğini yeniden düşünün. Bu dengelemenin diğer yarısı için [paragraf girintisine](/learn/paragraph-indent/) bakın.