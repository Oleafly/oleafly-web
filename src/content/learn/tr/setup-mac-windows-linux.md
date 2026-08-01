---

title: "Herhangi bir işletim sisteminde çalışan bir TeX edinin"
description: "Oleafly, birlikte verilen motorla veya tam TeX Live / MiKTeX kurulumuyla."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Herhangi bir işletim sisteminde çalışan bir TeX edinin

LaTeX'i yerel olarak yazmak bir TeX sistemi gerektirir: kaynağınızı ve belgelerin bağlı olduğu binlerce paketi derleyen motor. Bir tane almanın iki mantıklı yolu var. Bunlardan biri, yerleşik motora sahip olan ve dakikalar içinde derlemenizi sağlayan bir uygulamadır. Diğeri ise herhangi bir düzenleyicinin kullanabileceği eksiksiz komut satırı araç zincirini yükleyen tam bir TeX dağıtımıdır. Her iki yol da aynı yerde biter: makinenizde bir ".tex" dosyasının PDF'ye dönüşmesi.

## Yol A: motorun dahil olduğu bir uygulama

Mac, Windows veya Linux için [Oleafly'ı](https://github.com/Oleafly/Oleafly/releases/latest) indirin. Tectonic motorunu bir araya getirir, dolayısıyla yönetilmesi gereken ayrı bir TeX kurulumu yoktur: uygulamayı açarsınız, bir proje oluşturursunuz ve derlersiniz. Bir belge mevcut olmayan bir paket kullandığında, Tectonic onu talep üzerine getirir; bu, belirli bir paketin ilk kez kullanıldığında bir ağ bağlantısı gerektirmesini ve daha sonra hiçbir şey yapılmasını gerektirmez. Bu yol, TeX kurulumunu yönetmek yerine makale yazmak isteyen herkese uygundur ve diskte başka herhangi bir aracın okuyabileceği sıradan ".tex" ve ".bib" dosyalarını bırakır.

## Yol B: tam bir TeX dağıtımı

Bir dağıtım yüklemek size sistem komutları olarak `pdflatex`, `xelatex`, `lualatex` ve paket yöneticisini verir. Mac'te, macOS için TeX Live paketi olan MacTeX'i yükleyin; Çoklu gigabaytlık indirme hoş karşılanmıyorsa, BasicTeX, ihtiyaçlar ortaya çıktıkça TeX Live Utility aracılığıyla genişletebileceğiniz küçük bir çekirdektir. Windows'ta MiKTeX yaygın tercihtir ve eksik paketleri derleme sırasında anında yükleyebilir, TeX Live ise aynı derecede iyi çalışır. Linux'ta, her şey için aynı anda paket yöneticinizden "texlive-full"u veya daha sonra paketleri eklemek için "texlive-latex-extra" artı "tlmgr" aracı gibi daha küçük bir şema yükleyin. Tam kurulumun biraz zaman almasını ve birkaç gigabayt disk gerektirmesini bekleyebilirsiniz.

## Kurulumu doğrulayın

Bir terminal açın ve bir motora versiyonunu sorun:

```bash
pdflatex --version
# or
xelatex --version
```

Sürüm başlığı, araç zincirinin yolunuzda ve hazır olduğu anlamına gelir. Komutun bulunamadığını belirten bir hata genellikle yükleyicinin PATH'inizde yaptığı değişikliklerin henüz etkili olmadığı anlamına gelir; terminali yeniden başlatmak veya Windows'ta oturumu kapatıp tekrar açmak sorunu çözer.

## Hangi yolu izlemeli

Başlıyorsanız veya derlenmiş bir PDF'ye giden en kısa yolu istiyorsanız uygulamayı seçin. Belirli motorlara, komut satırı yapılarına veya mevcut bir düzenleyiciyle entegrasyona ihtiyacınız varsa tam bir dağıtım seçin. İkisi çatışma olmadan bir arada var olur, dolayısıyla Yol A ile başlayıp daha sonra Yol B'yi eklemek hiçbir maliyet getirmez. Her iki durumda da bir sonraki adım aynıdır: [ilk belgenizi](/learn/first-document/) derleyin.