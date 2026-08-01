---

title: "Times, Arial, Helvetica benzeri yığınlar"
description: "newtx, helvet veya fontspec eşlemeleri dergileri hâlâ istiyor."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, Helvetica benzeri yığınlar

Dergi ve konferans yönergeleri, bu yazı tiplerinin kimsenin estetik ilk tercihi olmayı bırakmasından onlarca yıl sonra dahi, rutin olarak ana metin için Times'ı veya şekiller için Arial'ı talep ediyor. LaTeX'te bu tür bir gereksinimi karşılamanın iki yolu vardır ve hangisinin geçerli olduğu motorunuza bağlıdır. Klasik pdfLaTeX gerçek Times New Roman veya Arial dosyalarını yükleyemez, bu nedenle paket olarak gönderilen metrik uyumlu klonları kullanır. XeLaTeX ve LuaLaTeX gerçek sistem yazı tiplerini 'fontspec' aracılığıyla yükler.

## Paket rotası

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

'newtxtext' metin yazı tipini Times kopyasına dönüştürür ve 'newtxmath' eşleşen matematik sağlar. Eşleştirme önemlidir: Yalnızca metin yazı tipini değiştirin ve denklemler varsayılan Computer Modern'de kalır. Bilgisayar Modern matematiğinin yanında bir Times paragrafı hemen görülebilir. 'newtx', yeni belgelerde kaçınmanız gereken eski 'times' ve 'txfonts' paketlerinin devam eden devamıdır. Eski yığınlar matematiği dönüştürülmeden bıraktı ve bazıları [PDF görüntüleyicideki bulanık metin](/learn/fuzzy-font-pdf/) bölümünde açıklanan bit eşlem yazı tiplerini üretiyor.

'helvet' sans-serif ailesi olarak bir Helvetica klonu sağlar; Arial, Helvetica'nın metrikleriyle eşleşecek şekilde tasarlandığından Arial'ın yerine de geçer. Gövde metni serif ailesini kullandığından, yüklenmesi belge yazı tipini değiştirmez. `\renewcommand{\familydefault}{\sfdefault}` satırı bu anahtarı gerçekleştirir: `\familydefault` LaTeX'in sıradan metin için kullandığı ailedir ve onu `\sfdefault` olarak ayarlamak tüm belgeyi Helvetica'ya benzer hale getirir. Yalnızca sans-serif başlıklara veya şekil etiketlerine ihtiyacınız varsa bu satırı atlayın. Helvetica metin yazı tipinizin yanında biraz büyük görünüyorsa, `\usepackage[scaled=0.92]{helvet}` onu hizaya getirir.

## Fontspec rotası

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

XeLaTeX veya LuaLaTeX altında, 'fontspec' yazı tiplerini adlarına göre adresler ve bunları işletim sisteminden yükler, böylece bu, orijinal Times New Roman'ı ana (serif) ailesi ve orijinal Arial'ı sans ailesi olarak ayarlar. Yazı tiplerinin aslında makineye yüklenmesi gerekir. Bir belge bilgisayarlar arasında veya CI'ya taşındığında bu durum can sıkıcıdır. [Projenin yanındaki yazı tipi dosyasında](/learn/install-custom-font/) gösterildiği gibi, projeyle birlikte seyahat eden bir yazı tipi sorunu ortadan kaldırır. Matematik yine ayrı bir konudur, 'unicode-math' tarafından veya 'newtxmath'ın yanında tutularak ele alınır. Motordaki değişimler [insanlar neden XeLaTeX'e geçiyor](/learn/when-use-xelatex/) bölümünde ele alınıyor.

## Temel kural

Her iki rotayı da seçmeden önce, mekanın kendi sınıf dosyasının zaten yazı tiplerini ayarlayıp ayarlamadığını kontrol edin. Çoğu öyle. Kendi yazı tipi paketlerinizi konuşulan bir sınıfın üstüne yerleştirmek en iyi ihtimalle uyarılar üretir. Yazı tipi paketlerini yalnızca sınıfı seçimi size bırakan belgelere ekleyin.