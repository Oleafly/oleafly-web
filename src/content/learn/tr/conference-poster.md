---

title: "A0'daki posterler"
description: "tikz posteri, ışın posteri veya geometri artı TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Posterler A0'da

Konferans posteri, bir buçuk metre uzaklıktan okunması gereken, genellikle A0 veya A1 olan tek sayfadır. LaTeX formatı iyi kullanıyor çünkü poster makaledeki denklemleri, şekilleri ve kaynakçayı doğrudan yeniden kullanabiliyor. Ancak normal bir belge sınıfı bunu başaramaz: yazı tipleri, kenar boşlukları ve sütun düzeninin tümü poster ölçeğinde sürümlere ihtiyaç duyar. Üç yaklaşım, mevcut hemen hemen her LaTeX posterini kapsıyor.

## Üç seçenek

'Tikzposter' sınıfı, modern bir akademik postere giden en doğrudan yoldur. İçeriği sütunlar halinde düzenlenmiş renkli bloklar halinde düzenler, çeşitli eksiksiz temalar sunar ve büyük kağıt boyutunu ve ölçeklendirilmiş yazı tiplerini kendisi yönetir. Bir iskelet şöyle görünür:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Sınıf seçenekleri 25 puntoluk temel yazı tipini, A0 kağıdı ve dikey yönlendirmeyi ayarlar. Her bir `\column{0.5}`, poster genişliğinin bir kısmını kaplar ve her bir `\block{title}{content}`, bir başlıklı panel haline gelir. "\usetheme" değiştirildiğinde her blok aynı anda yeniden şekillendirilir.

'Beamerposter' paketi Beamer'ı poster boyutlarına kadar genişletir, böylece bir destenin teması, renkleri ve 'blok' ortamları tek bir dev çerçeveye taşınır. Grubunuzun halihazırda Beamer stillerini sürdürdüğü ve birçok üniversite poster şablonunun bunun üzerine oluşturulduğu durumlarda, bu doğal bir seçimdir.

Üçüncü seçenek, A0 boyutlarını ayarlayan "geometri" paketine ve dekorasyon için TikZ'ye sahip düz bir belge sınıfıdır. Bu, her milimetre üzerinde tam kontrol sağlar ve en yoğun şekilde tasarlanmış posterler bu şekilde yapılır, ancak sütun iskelesini kendiniz inşa edersiniz, dolayısıyla bunun için gerçek zamanlı bütçe ayırın.

## Pratik tavsiyeler

Hangi yolu seçerseniz seçin, boş bir dosya yerine, örneğin [galeriden](/templates/) bir çalışma şablonuyla başlayın ve içeriği blok blok değiştirin. Kağıt boyutunu ve yönünü ilk gün ayarlayın çünkü bunları daha sonra değiştirmek, manuel olarak ayarlanmış her genişliği bozar. Gövde metni yazdırıldıktan sonra yaklaşık 24 ila 32 punto olmalıdır; 20 puanın altındaki her şey okunmayacaktır. Vektör figürlerini tercih edin. Bir kağıt sütun için dışa aktarılan çizim, poster genişliğine ölçeklendiğinde lapa haline gelir, bu nedenle şekilleri uzatmak yerine poster boyutunda yeniden oluşturun.

En yaygın başarısızlık, posterin sıkıştırılmış bir kağıt gibi ele alınmasıdır. İlk taslağı hazırladığınız kelime sayısının yaklaşık üçte birini planlayın, argümanı rakamlara bırakın ve dosyayı çiziciye göndermeden önce gerçek yazı tipi boyutunu belirlemek için PDF'nin bir bloğunu A4 üzerine tam ölçekte yazdırarak sonucu kontrol edin.