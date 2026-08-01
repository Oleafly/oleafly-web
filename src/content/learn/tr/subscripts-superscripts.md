---

title: "Patlamayan endeksler"
description: "Çok karakterli komut dosyaları, asal sayılar, noktalar için parantezler."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Patlamayan endeksler

Alt simgeler ve üst simgeler, herkesin LaTeX'te öğrendiği ilk matematik sözdizimidir ve aynı zamanda herkesin ürettiği ilk kafa karıştırıcı çıktının kaynağıdır. Alt çizgi `_` sonrakini düşürür, düzeltme işareti `^` yükseltir ve siz aksini söylemediğiniz sürece her ikisi de tam olarak tek bir karaktere uygulanır. Bu tek karakter kuralı, göreceğiniz hemen hemen her karışık dizinin arkasındadır.

## Temel formlar

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

"x_i", alt simge konumuna tek bir "i" koyar ve "x^2", tek bir "2"yi yükseltir. `_` ve `^` yalnızca bir sonraki jetonu aldığından, bir karakterden daha uzun olan her şeyin parantez içine alınması gerekir: `x_{ij}` her iki harfin de alt simgesidir ve `x^{2n}` `2n'nin tamamını yükseltir. Aynı sembole her iki sırayla da hem alt simge hem de üst simge ekleyebilirsiniz ve LaTeX bunları doğru şekilde yığınlar: `x_i^2`. Komut dosyaları da yuvalanır. "x_{i_j}"de "j", kendisi de "x"in alt simgesi olan "i"nin alt simgesidir ve her düzey giderek daha küçük ayarlanır.

Çok karakterli komut dosyaları kaşlı ayraç **kullanmalıdır**: `x_ij`, `x_i` ve ardından `j`dir. LaTeX bunu bir hata olarak bildirmez çünkü 'x_i' ve ardından 'j' değişkeni tamamen yasal bir matematiktir. Formül derlenir, ilk bakışta neredeyse doğru görünür ve farklı bir anlama gelir. Diş teli alışkanlığını erkenden geliştirin. Şüphe duyduğunuzda senaryoyu destekleyin.

Aynı tuzak sınırlarda ve sınırlarda da karşımıza çıkıyor. `\sum_i=1^n` göründüğü gibi değil. Doğru biçim "\sum_{i=1}^{n}" şeklindedir; burada "i=1"in tamamı parantezli bir alt simgedir. Tamamen matematik modunun dışında `_` veya `^` kullanırsanız, [Eksik dolar eklendi](/learn/missing-dollar/) bölümünde anlatılan klasik hatayı alırsınız.

## Asal sayılar ve noktalar

```latex
f' f'' \dot{x} \ddot{x}
```

Türevler için nadiren gerçek bir üst simge istersiniz. Kesme işareti anahtarı bir asal sayı üretir: "f", bir asal sayıyla f, iki asal sayıyla "f" olarak oluşturulur ve LaTeX yükseltme ve aralıklandırma işlemlerini kendisi gerçekleştirir, dolayısıyla "f^{\prime}" işlevine gerek yoktur. Fizik stilindeki zaman türevleri için, "\dot{x}" x'in üzerine tek bir nokta koyar ve "\ddot{x}" iki koyar. Bunlar aksandır, dolayısıyla argümanlarını parantez içinde alırlar.

Bir incelik daha: Eğer bir asal sayının ardından bir üst simgeye ihtiyacınız varsa, onları 'f'^2'de olduğu gibi zincirlemeniz yeterli. LaTeX bunları tek bir üst simge kümesinde birleştirir.

## Çıktınızı kontrol edin

Parantez kuralını içselleştirmenin en hızlı yolu, [canlı oyun alanında](/live/) yan yana `x_ij` ve `x_{ij}` yazmak ve farkın oluşturulmasını izlemektir. Derlenmiş bir belgede bir dizin çok yanlış göründüğünde, kontrol edilmesi gereken ilk şey eksik bir parantez çiftidir.