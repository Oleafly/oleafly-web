---

title: "Bir veya iki sütun"
description: "Yerleşimlerin mekana göre neden farklılık gösterdiği, iki sütunun şekillere ve denklemlere ne yaptığı ve kimin karar verdiği."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Bir veya iki sütun

On gazete açtığınızda iki kabile göreceksiniz: gazete kağıdına benzeyen iki sütunlu yoğun sayfalar ve kitap gibi görünen tek sütunlu havadar sayfalar. İkisi de daha iyi değil. Her biri bir nedenden dolayı evrimleşti ve seçim neredeyse hiçbir zaman size ait değil.

## Mekanlar neden farklı?

İki sütunlu düzen, bildirilerin basıldığı ve sayfa bütçelerinin kısıtlı olduğu zamanlarda doğan konferans geleneğidir. Dar sütunlar sayfa başına daha fazla kelime barındırır ve kısa satır uzunluklarının taranması daha kolaydır. Çoğu CS konferansı (ACM, IEEE ve arkadaşlar) hala bunları kullanıyor.

Tek sütunlu düzenler dergilerde, ön baskılarda ve tezlerde hakimdir. Denklemlere, şekillere ve tablolara nefes alma alanı sağlarlar ve uzun süreli okumalar için daha uygundurlar. Ön baskı sunucuları ve birçok ML mekanı kısmen tam da bu nedenle tek sütuna sürüklendi.

| Düzen | Tipik ev | Kişilik |
|---|---|---|
| İki sütunlu | Konferans bildirileri | Yoğun, taranabilir, sayfa sınırlı |
| Tek sütunlu | Dergiler, önbaskılar, tezler | Geniş, okunabilir, denklem dostu |

## Rakamlarınıza iki sütun ne yapar?

İki sütunlu bir belgede, normal bir "şekil" bir sütunun içinde yüzer ve bu genellikle ayrıntılı bir çizim için çok dardır. Yıldızlı değişken her iki sütunu da kapsar:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Aynı yöntem "table*" içeren geniş tablolar için de geçerlidir. Tek bir nokta: yıldızlı kayan noktalar genellikle sayfanın üst kısmında yer alır ve alt veya buraya yerleşimi kullanamaz, bu nedenle geniş rakamlarınızı önceden planlayın. Boyutlandırmayla ilgili temel bilgiler [resim ekleme](/learn/insert-images/) bölümünde mevcuttur.

## Denklemler sıkışıklaşıyor

Yaklaşık 3,3 inç genişliğindeki bir sütun, uzun denklemler için düşmanca bir yerdir. İki sütunlu makalelerde denklemleri daha sık çözecek, daha agresif bir şekilde kısaltacak ve çok satırlı ortamlara yöneleceksiniz. Makaleniz denklem ağırlıklıysa ve yer seçeneğiniz varsa, tek sütun size gerçek biçimlendirme süresinden tasarruf sağlayacaktır. Araçlar için [matematik moduna](/learn/math-mode/) bakın.

## Ekranlar ve ekran okuyucular bir sütunu tercih eder

Resmi bir makale sunumu olmayan herhangi bir şey için (raporlar, belgeler, özgeçmişler, insanların dizüstü bilgisayarlarda ve telefonlarda okuyacağı ön baskılar) tek sütun kazanır. PDF'ler yeniden akıtılmaz, bu nedenle iki sütunlu sayfalar ekran okuyucuları ve metin çıkarıcıları okuma sırasını tahmin etmeye zorlar ve insanları her sayfada yukarı ve aşağı kaydırmaya zorlar. Özgeçmiş ayrıştırma sistemleri, çok sütunlu düzenleri karıştırmasıyla ünlüdür. Talep eden mekanlar için iki sütun ayırın.

## Belge sınıfı sizin adınıza karar verir

İşte işin rahatlatıcı kısmı: Bunu neredeyse hiçbir zaman elle yapılandırmazsınız. Mekan size bir sınıf veya şablon verir ve düzen de onunla birlikte gelir.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

İçeriğinizi bir kez yazın; şablonları değiştirmek her şeyin yeniden akışını sağlar. LaTeX'in amacı budur: aynı kaynak, iki sütunlu bir konferans sürümü ve tek satırlık bir değişiklikle tek sütunlu bir ön baskı olarak derlenir. Şekillerinizi vektör formatlarında ve denklemlerinizi standart ortamlarda tutun; düzen değişimi neredeyse sorunsuzdur.