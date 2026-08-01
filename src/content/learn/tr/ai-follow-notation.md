---

title: "Modele sembol tablonuzu verin"
description: "Makrolar ve kısa bir gösterim listesi sayesinde değişkenler sabit kalır."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Modele sembol tablonuzu verin

Bir modelden matematiksel metni taslağını veya düzeltmesini isteyin; notasyon kayarken düzyazı genellikle iyi sonuç verir. `\vect{x}` vektörünüz bir paragrafta `\mathbf{x}`, diğerinde ise `\vec{x}` olarak döner. `\E[X]` olarak yazdığınız beklenti `\mathbb{E}(X)` olarak geri gelir. Her değişken derlenir, dolayısıyla hiçbir hata olmaz. Tutarsızlık yalnızca okuyucu aynı nesnenin üç farklı şekilde yazıldığını fark ettiğinde ortaya çıkar. Model, var olan tüm gösterim kurallarını ve talimatlar olmaksızın bunların hepsinden örnekleri görmüştür. Açıkça sizinkini verin.

## Makrolar gösterimi uygulanabilir hale getirir

Temel çalışma yapay zekadan bağımsızdır ve yine de yapmaya değer: yinelenen her sembolü bir makro aracılığıyla yönlendirin, böylece kaynak ham "\boldsymbol{x}" yerine "\vect{x}" der. Bu, her kavrama bir ad verir, bir tanımı düzenleyerek tüm makaleyi yeniden biçimlendirmenize olanak tanır ve modele, değişkenler icat etmek yerine bağlı kalabileceği küçük bir sözcük dağarcığı verir. Makroların tanımlanması [Özel komutlar](/learn/custom-commands/) bölümünde ele alınmaktadır.

## İsteme ne yapıştırılmalı

Gerçek isteğinizin yanı sıra kompakt bir gösterim bloğu ekleyin: makro tanımları ve her satırda her birinin ne işe yaradığını belirten bir yorum.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Daha sonra kısıtlamayı doğrudan belirtin: "Bu kavramlar için yalnızca bu makroları kullanın. Listelenen herhangi bir şey için yeni gösterim sunmayın ve listelenmeyen bir simgeye ihtiyacınız varsa, onu icat etmek yerine söyleyin." Modeller somut, kontrol edilebilir talimatları belirsiz bir "tarzıma uy" ifadesinden çok daha iyi takip eder. Tam makale için, bloğu giriş bölümünün yanında kısa bir açıklama olarak tutun, böylece güncel ve yapıştırmaya hazır kalır.

## Mekanik olarak doğrulayın

Makro katman kontrolü ucuz hale getirir. Her vektörün `\vect{...}` olması gerekiyorsa, model çıktısındaki herhangi bir ham `\mathbf{` veya `\vec{`, matematiği yeniden okumak yerine metin aramasıyla bulabileceğiniz bir ihlaldir. Bu aramayı yapıştırdığınız her şeyin üzerinde çalıştırın, başıboş kalanları düzeltin ve kağıda ne kadar model destekli düzenleme gelirse gelsin notasyon aynı kalır.

## Oleafly'nin İçinde

[Oleafly'deki asistan](/learn/oleafly-ai/), makrolarınızın bulunduğu giriş bölümü de dahil olmak üzere proje dosyalarını okur, bu nedenle genellikle tanımlanmış komutları size söylenmeden alır. Açık talimat yine de yardımcı olur: Bir makronun var olduğunu görmek, onun zorunlu olduğunun söylenmesinden daha zayıftır. İsteğinize bir satır ekleyin ("başlangıçtaki notasyon makrolarını kullanın") ve değişiklikler gerçekleşmeden önce kırmızı/yeşil farkını gözden geçirin. Bu, kaynağın dışına sürüklenmeyi önler.