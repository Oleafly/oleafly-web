---

title: "Bölümden kaçan figür"
description: "Şamandıra bariyerleri, boyutu ve son çare yerleşimi."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# Bölümden kaçan figür

4. Bölüm'ün sonuna bir şekil koyarsınız ve 5. Bölüm'ün ortasına yazdırır veya bölümün sonunda diğer üç rakamla birlikte yığılır. Rakamlar değişkendir: LaTeX, bunların kaynaktaki konumlarını bir hedef olarak değil, bir başlangıç ​​noktası olarak ele alır ve sayfaları dolu tutacak şekilde onları taşır. Şamandıralar da sırayla görünmelidir, bu nedenle yerleştirilemeyen bir şekil, arkasındaki tüm şekilleri bloke eder. Genel yerleştirme sistemi [yüzenlerin gerçekte nereye indiği](/learn/position-figures/) bölümünde anlatılmıştır. Bu ders, bir şamandıranın kabul edemeyeceğiniz bir yere vardığı durumlar için tırmanma merdivenidir.

## Birinci adım: yerleşim seçeneklerini kontrol edin

Ortamın yalnızca "[h]" değil, "[htbp]" yazdığından emin olun. Harfler, kayan noktanın buraya, sayfanın üst kısmına, altına veya özel bir kayan sayfaya yerleştirilmesine izin verir. Yalnızca 'h' verilmesi, kaçak bir rakamın en yaygın nedenidir, çünkü mevcut sayfada yer olmadığında, LaTeX'in hiçbir yerde yasal bir yeri yoktur ve kayan noktayı süresiz olarak ileri taşır.

## İkinci adım: kodu taşıyın

Bir şamandıra kaynak konumundan daha sonra sürüklenebilir, ancak daha erken asla. Şekil çok geç görünüyorsa, ortamı kaynakta yukarıya, ideal olarak ilk '\ref'i içeren paragrafın hemen öncesine taşıyın. Bu tek düzenleme, yerleştirme şikayetlerinin şaşırtıcı bir kısmını düzeltir.

## Üçüncü adım: bölümü çitle çevirin

'Placeins' paketi, metin devam etmeden önce tüm bekleyen kayan öğelerin yerleştirilmesini zorlayan bir komut olan '\FloatBarrier'ı sağlar:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Bariyeri bir bölümün sonuna koyun ve o bölümdeki hiçbir şekil bir sonraki bölüme sızmayacaktır. LaTeX, kayan noktaları temizlemek için ekstra dikey boşluk ekleyebilir; bu genellikle bölüm sonu yakınında kabul edilebilir bir fiyattır.

## Dördüncü adım: H çekici

'Float' paketi, float'ı tamamen ortadan kaldıran büyük bir 'H' belirticisi ekler:

```latex
\usepackage{float}
\begin{figure}[H]
```

Bir "[H]" şekli, büyük bir paragraf gibi tam olarak kodunun bulunduğu yere yazdırılır. Bunun maliyeti ise LaTeX'in artık sayfayı etrafındaki dengeyi sağlayamamasıdır, dolayısıyla şekil kalan alana sığmadığında büyük bir boşlukla karşılaşabilirsiniz. Bunu bir veya iki inatçı dalgalanma için son çare olarak değerlendirin, varsayılan olarak değil.

## Beşinci adım: şekli küçültün

Çok büyük geçişler ertelendi çünkü çok az sayfada bunlara yer var. 'width=0.9\textwidth' değerini '0.7\textwidth' olarak azaltmak veya görüntü dosyasındaki boşlukları kırpmak çoğu zaman LaTeX'in ittiği şekli bölümün sonuna yerleştirmesine olanak tanır.

Tutulmaya değer bir alışkanlık: metin stabil hale geldikten sonra bu ayarı bir kez yapın. Eklediğiniz veya sildiğiniz her paragraf sayfaları yeniden karıştırır, dolayısıyla taslak hazırlama sırasında yerleştirme işlemi yeniden yapacağınız bir çabadır.