---

title: "Dirac notasyonu"
description: "Sütyenler, ketler ve matris elemanları için braket paketi."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# Dirac notasyonu

Kuantum mekaniği durumları ketler, ikilileri sütyenler ve iç çarpımları parantezli çiftler olarak yazar. Gösterimi `\langle`, `|` ve `\rangle`dan elle oluşturmak işe yarar, ancak sıkıcıdır ve sınırlayıcılar içerikle birlikte büyümez. 'Braket' paketi, notasyonu bir araya getiren ve her şeyi sığacak şekilde boyutlandıran komutlar sağlar.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Her komut ne işe yarar?

`\braket{\psi|\phi}` tam iç çarpımı ayarlar: dış tarafta köşeli ayraçlar, iki durum arasında dikey bir çubuk, hepsinin yüksekliği aynıdır. İki çubukla, `\braket{\psi|A|\phi}` iki durum arasındaki A operatörünün matris elemanı haline gelir; bu form, beklenti değerleri ve pertürbasyon hesaplamaları için kullanılır. Paket aynı zamanda iki yarım için de `\bra{\psi}` ve `\ket{\phi}`'yi tek başına sağlar. Çıplak bir ket, düzyazıda bir durumu adlandırmanın olağan yoludur.

`\set{\vec{x}|x > 0}` aynı paketin bir bonusudur: parantezli ve orta çubuklu set oluşturucu gösterimi, fiziğin çok ötesinde kullanışlıdır.

Paketi kullanmanın asıl nedeni boyutlandırmadır. '\braket' içine bir kesir veya toplam koyun; parantez ve çubuklar eşleşecek şekilde gerilir. Elle oluşturulmuş bir `\langle ... \rangle`, her sınırlayıcıda `\sol' ve `\sağ''a ihtiyaç duyar ve yine de orantısız bir şekilde sapma eğilimindedir.

## Alternatifler ve komşular

'Fizik' paketi, türevler ve komütatörler için kısayolların yanı sıra, beklenti değerleri için '\bra', '\ket', '\ev' ve matris elemanları için '\mel' içeren benzer bir set sunar. Her iki paket de `\bra` ve `\ket`i tanımlar, bu nedenle ikisini birden yüklemek yerine belge başına bir tane seçin. Paket ekleyemediğiniz bir şablonda `\langle \psi | Uzun içeriklerin etrafında `\left`/`\right` ile \phi \rangle`, daha fazla yazarak aynı çıktıyı üretir.

Çoğunlukla aynı belgelerde bulunan Feynman diyagramları için TikZ üzerinde oluşturulan 'tikz-feynman' gibi paketler; bu ayrı bir çizim becerisidir ve ruhen bu sayfadaki herhangi bir şeyden çok [değişmeli diyagramlara](/learn/komütatif-diyagramlar/) daha yakındır.

Yaygın hata, klavyenin açı karakterleriyle `<\psi|\phi>` yazmaktır. Bunlar küçüktür ve büyüktür ilişkileridir, dolayısıyla LaTeX bunları karşılaştırma olarak aralıklarla yerleştirir ve yanlış yüksekliğe çizer. Gerçek Dirac parantezleri `\langle` ve `\rangle`dan ya da daha iyisi yukarıdaki komutlardan gelir. [Canlı oyun alanında](/live/) her iki formu da yan yana koyduğunuz anda fark açıkça ortaya çıkıyor.