---

title: "Birbiriyle savaşan paketler"
description: "hiperref son, akıllıef sonra, eski çiftler, minimal örnekler."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Birbiriyle savaşan paketler

LaTeX paketleri birbirlerinin komutlarını yeniden tanımlamakta özgürdür ve çoğu bunu bilinçli olarak yapar. 'Hiperref' bu şekilde her çapraz referansı bir bağlantıya dönüştürür. Bu aynı zamanda, iki paketin her birinin aynı komutu uyumsuz varsayımlarla yamalayabileceği anlamına gelir ve sonuç, 'Komut \dipnot zaten tanımlanmış' veya 'xcolor paketi için seçenek çatışması' gibi açık bir hatadan, tamamen yanlış olan çıktıya kadar değişir. Çatışmalar neredeyse her zaman daha önce çalışan bir giriş kısmına bir paket ekledikten hemen sonra ortaya çıkar ki bu aynı zamanda en büyük ipucudur.

## Yükleme sırası işin yarısıdır

Çoğu çakışma tamamen sırayla çözülür çünkü daha sonra yüklenen paket son sözü alır. En önemli kural: 'hiperref'i giriş bölümünün sonuna yakın bir yere yükleyin. LaTeX'in çapraz referanslama mekanizmasının büyük bölümlerini yeniden yazar ve yüklendikten sonra yüklenen paketler bu yamaları geri alabilir. Kısa bir istisna listesi daha sonra gelecektir ve gerçekte karşılaşacağınız istisna, "hyperref"in üstünde yer alacak şekilde tasarlanmış ve ondan sonra yüklenmesi gereken "zeki"dir:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Bir paketin dokümantasyonu başka bir pakete göre bir konum belirtiyorsa buna inanın. Bu notlar var çünkü birisi sizin yaşamak üzere olduğunuz çatışmaya zaten girmiş durumda.

## Eski paketler ve bunların değiştirilmeleri

Bazı çatışmalar, ölü bir paketin halefinin yanına yüklenmesinden kaynaklanır. 'epsfig'i 'graphicx' ile, 'subfigure'u 'subcaption' ile veya eski 'times' ve 'mathptmx' dolgularını 'newtxtext' gibi modern yazı tipi paketleriyle birleştirmeyin. Eski şablonlar olağan kaynaklardır: Şablon yazıldığında güncel olanı yüklerler ve siz de üstüne modern eşdeğerini eklersiniz. Eski olanı çıkarın ve yenisini saklayın. 'Nag' paketi, derleme zamanında güncel olmayan kullanımı sizin için işaretleyebilir.

## Seçenek çakışmaları

'X paketi için seçenek çatışması', paketin farklı seçeneklerle iki kez yüklendiği anlamına gelir; genellikle bir kez arkanızdaki belge sınıfınız tarafından. Yeni seçeneklerle tekrar yükleyemezsiniz, ancak seçenekleri kimse yüklemeden önce enjekte edebilirsiniz: `\PassOptionsToPackage{table}{xcolor}`'ı `\documentclass''ın önüne koyun ve seçenekler hangisi önce gelirse onunla birleştirilir.

## Minimal bir örnekle izole edin

Sebep açık olmadığında, asgari düzeyde çalışan bir örnek oluşturun: yalnızca "\documentclass", iki şüpheli paket ve tek satırlık metin içeren bir "\begin{document}...\end{document}" içeren bir belge. Hata yeniden oluşursa, yükleme sırasını ve seçenekleri değişmeyene kadar değiştirin. Eğer çoğalmazsa, geri dönene kadar diğer paketlerinizi ikiye bölün. Bu ikili arama birkaç derlemede birleşir ve size aranacak net bir çift verir. Aynı teknik, [Derlenmeyecek üniversite sınıfı dosyalarında](/learn/fix-broken-template/) bölümünde açıklandığı gibi, devralınan girişleri kurtarır.