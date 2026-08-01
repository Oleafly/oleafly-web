---

title: "Yığılmış endeksler"
description: "Tensör yerleştirme ve eşleştirme alanı kuralları için boş gruplar."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Yığılmış endeksler

Görelilik ve diferansiyel geometrideki tensör gösterimi, üst endeksleri alt endekslerden ayırır ve endekslerin yatay sırası da anlam taşır: endeksler bir metrikle yükseltilip alçaltıldığında, önce üst endeksi olan nesne, önce alt endeksi olan nesneyle aynı değildir. LaTeX'in varsayılan komut dosyası yerleştirmesi bu ayrımı göz ardı eder, bu nedenle tensör ağırlıklı belgeler boş gruplarla küçük bir numaraya dayanır.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## Boş grup numarası

'T^i_j' yazmak, üst simgeyi ve alt simgeyi aynı yatay yuvaya, üst üste istiflenmiş şekilde yerleştirir. Bunları kademeli hale getirmek için, boş bir grup olan `{}` ekleyin: `T^{i}{__{j}`, 'i'yi T'ye üst simge olarak ekler, ardından 'j'yi takip eden boş gruba bir alt simge olarak ekler, böylece alt simge, üst simgenin altına değil, altına gelir. Her `{}` yeni bir komut dosyası yuvası açar ve `T^{i}{__{j}{}^{k}`'da olduğu gibi tensörün ihtiyaç duyduğu kadar zincirleme yapabilirsiniz.

İkinci satır gerçek bir nesnenin getirisini gösterir. `R^{\mu}{__{\nu\rho\sigma}`da mu ilk indeks pozisyonunu işgal eder ve onu daha düşük üç indeks takip eder. Riemann tensörünün standart düzeni budur. Kademeyi daralttığınızda indeks sırası belirsiz hale gelir. Her indeks, `g_{\mu\nu}` metriğinde olduğu gibi tek bir seviyede yer aldığında, hiçbir hileye gerek yoktur ve hepsini tek bir abone grubu tutar.

Aynı `{}` aynı zamanda basit bir hatayı da çözer. 'T^i^k' derlemeyi "Çift üst simge" ile durdurur çünkü bir atom iki üst simge alamaz. `T^{i}{}^{k}` ikinci üst simgeye kendi yuvasını verir ve temiz bir şekilde derlenir.

## Kurallar ve tutarlılık

Endekslerin kademeli mi yoksa istiflenmiş mi olduğu bir alan kuralıdır. Genel görelilik neredeyse evrensel olarak sendeliyor. Hiçbir metrik endeksleri hareket ettirmediğinde diğer alanlar yığılmış endekslerle uyumludur. Alanınızın alışkanlıklarına uyun, eğer bir yere yazı gönderiyorsanız kendi zevkinize göre derginin şablonunu eşleştirin. 'Tensor' paketi yerleştirmeyi bir '\tensor' komutuyla otomatikleştirebilir, ancak manuel boş gruplar taşınabilirdir, pakete ihtiyaç duymazlar ve herhangi bir gönderim sisteminde değişmeden kalırlar.

Tutarlılık seçimin kendisinden daha önemlidir. Her tensörün indekslerinin nasıl düzenleneceğine bir kez karar verin. Sürekli olarak yazdıklarınız için, etraflarına bir giriş makrosu koyun, böylece geç bir gelenek değişikliği, tüm belgeyi taramak yerine tek bir düzenleme olur. [Canlı oyun alanında](/live/) kademeli ve istiflenmiş formları yan yana karşılaştırın.