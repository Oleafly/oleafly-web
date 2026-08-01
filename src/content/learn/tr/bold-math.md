---

title: "Vektörler ve kalın semboller"
description: "mathbf, kalın sembol ve tutarlı bir vektör makrosu."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vektörler ve kalın semboller

Birçok alan, vektörleri ve matrisleri kalın harflerle ayarlar: bir vektör için **x**, bir matris için **A**, katsayı vektörü için kalın beta. LaTeX'te matematik için iki farklı kalın komut vardır ve bunlar birbirinin yerine kullanılamaz. Hangisine ulaşacağınızı bilmek ve seçimi bir makroya sarmak, notasyonun tüm tez boyunca tutarlı olmasını sağlar.

## İki komut

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` bağımsız değişkenini dik, kalın bir roman yazı tipine dönüştürür. Latin harfleri için iyi çalışır, dolayısıyla `\mathbf{A}` size birçok metnin matrisler için kullandığı sağlam, dik, kalın A harfini verir. Sınırlaması, yalnızca harfleri ve rakamları kapsamasıdır: `\mathbf{\beta}` yararlı hiçbir şey yapmaz, çünkü kalın roman yazı tipinde Yunanca glifler yoktur ve beta değişmeden yazdırılır.

'amsmath' tarafından sağlanan '\boldsymbol' (teknik olarak 'amsbsy'deki 'amsmath'ı yükleyen' bm' benzeri makine tarafından), ona verdiğiniz sembolün şeklini korurken onu cesaretlendirir. `\boldsymbol{\beta}`, kalın italik beta üretir ve `\boldsymbol{x}`, sıradan matematik değişkenlerinin eğik stiliyle eşleşen kalın italik x üretir. Kuralınız vektörlerin kalın italik olması yönündeyse, istediğiniz komut budur.

Yani pratik ayrım şu şekildedir: dik, kalın Latin harfleri, '\mathbf' kullanın; Yunanca veya italik kalması gereken kalın harfler için "\boldsymbol" kullanın.

## Makroları bir kez tanımlayın

Bu komutları belgenin tamamına yazmak yerine, giriş kısmında anlamsal makroları tanımlayın:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Şimdi bir vektör için `\vect{x}` ve matris için `\mat{A}` yazıyorsunuz. "[1]", her makronun bir argüman aldığını ve "#1"in bu argümanın geldiği yer olduğunu söylüyor. Kazancı daha sonra gelir: Eğer bir dergi vektörlerin kalın italik yerine düz kalın olmasını gerektiriyorsa, bir satırı '\vect' '\mathbf'yi saracak şekilde düzenlersiniz ve makaledeki her vektör bir sonraki derlemede güncellenir. Bu, iki yüz denklemde ara ve değiştir yöntemini geride bırakır.

Makrolar ayrıca amacın kaynakta okunabilir olmasını sağlar. Bundan altı ay sonra, `\vect{w}` size w'nin bir vektör olduğunu söyleyecektir; çıplak bir `\boldsymbol{w}` yalnızca kalın olduğunu gösterir.

## Yaygın bir hata

Matematiğin içinde '\textbf' yazan kalın Yunanca harfini taklit etmeyin ve bunun için '\mathbf' kullanmayın ve işe yaradığını varsaymayın. Derleyin ve yakından bakın: Cesur komşuların yanındaki kalın olmayan betanın ekranda gözden kaçırılması kolaydır ve baskıda da açıkça görülür. Adayları hızlıca göz kamaştırmak istiyorsanız, [canlı oyun alanına](/live/) `\boldsymbol{\beta} \mathbf{\beta} \beta` gibi bir satır yapıştırın ve üçünü yan yana karşılaştırın. '\sum' gibi semboller de dahil olmak üzere denklemlerin tamamını kalın harflerle yazmak için, '\boldsymbol'dan daha fazla sembol sınıfını işleyen 'bm' paketinin '\bm' komutuna bakın.

Akan metinde kalın, farklı komutlarla farklı bir konudur; bkz. [metinde vurgu](/learn/bold-italic/).