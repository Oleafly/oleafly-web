---

title: "PDF görüntüleyicide bulanık metin"
description: "3 bitmap, anahat yazı tipleri, vektör şekilleri yazın."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# PDF görüntüleyicide bulanık metin

PDF'niz temiz bir şekilde derleniyor ancak metin ekranda yumuşak veya pürüzlü görünüyor ve yakınlaştırma, durumu iyileştirmek yerine daha da kötüleştiriyor. İzleyicinizde hiçbir sorun yok. Belge bitmap yazı tiplerini içeriyor. Harf şekillerini ölçeklenebilir ana hatlar olarak depolamak yerine, bunları tek bir sabit çözünürlükte oluşturulan piksel ızgaraları olarak depolar. PDF terminolojisinde bunlar Tip 3 yazı tipleridir. Kağıda, oluşturuldukları çözünürlükte kabul edilebilir bir şekilde baskı yapıyorlar, bu yüzden sorun onlarca yıl boyunca devam etti, ancak ekranlarda kendi yerel yakınlaştırma düzeyleri dışında herhangi bir yakınlaştırma düzeyinde bulanıklaşıyorlar. Modern anahat formatları (Tip 1, TrueType, OpenType), şekiller matematiksel eğriler olduğundan temiz bir şekilde ölçeklenir.

## Tanının onaylanması

Yakınlaştırma hızlı bir testtir: anahat yazı tipleri yüzde 800 oranında keskin kalır, bitmapler görünür piksellere dönüşür. Kesinlik için PDF görüntüleyicinizde belge özelliklerini açın ve yazı tipleri paneline bakın. Adobe Reader'da bu Dosya, ardından Özellikler, ardından Yazı Tipleri altındadır ve "Tür 3" olarak listelenen herhangi bir yazı tipi bir bitmaptir. Bu kontrol estetiğin ötesinde önemlidir çünkü arXiv ve birçok yayıncı Type 3 yazı tiplerini içeren gönderimleri reddeder.

## Bitmap'lerin nereden geldiği ve düzeltmeler

Her zamanki kaynak eski bir yazı tipi kurulumudur. Çok eski TeX kurulumları, Computer Modern'i METAFONT aracılığıyla bitmaplere dönüştürdü ve bazı eski paketler ve eski `\usepackage{times}` dönemi yığınları hâlâ bitmap çeşitlerini çekiyor. Eski yazı tipi komutlarını modern bir yığınla değiştirerek sorunu düzeltin:

```latex
\usepackage{newtxtext,newtxmath}
```

Bu, [Times, Arial, Helvetica benzeri yığınlarda](/learn/times-arial-helvetica/) ayrıntılı olarak açıklandığı üzere, eşleşen matematikle birlikte Times'ın bir taslağını verir. Times yerine varsayılan görünümü istiyorsanız, `\usepackage{lmodern}` Computer Modern'i ana hat halefi Latin Modern ile değiştirir. XeLaTeX veya LuaLaTeX ve 'fontspec' ile derlemek, sorunu tamamen ortadan kaldırır çünkü bu motorlar, yapıları gereği ana hatları olan OpenType sistem yazı tiplerini kullanır. Oleafly'nin paketlediği XeTeX tabanlı Tectonic gibi modern bir motor, kendi başına Tip 3 metni oluşturmaz; orada göründüğünde, bitmap yazı tipi, dahil edilen bir grafik aracılığıyla ulaşıyor demektir.

## Aynı problemin şekil versiyonu

PDF'deki bulanık metin her zaman bir belge yazı tipi değildir. Paragraflar keskin ancak çizim içindeki etiketler bulanıksa, şeklin kendisi bir raster görüntüdür; genellikle bir grafiğin PNG ekran görüntüsü veya ekran çözünürlüğünde dışa aktarılan bir diyagramdır. Çözüm bir seviye yukarı aynı fikirdir: çizim aracından rakamları vektör PDF'si olarak dışa aktarın, böylece metinleri de ana hatlarıyla görünür. Biçim kılavuzu [bir rakamı bırakın](/learn/insert-images/) içindedir.

Herhangi bir düzeltmeden sonra, varsayılan yakınlaştırmada gözlerinize güvenmek yerine yazı tipi panelini tekrar kontrol edin. Bir rakamın veya bir paketin geride bıraktığı tek bir Tip 3 girişi, başvurunun geri çevrilmesi için yeterlidir.