---

title: "Lisans öğrencisi olarak LaTeX'teki ilk laboratuvar raporunuz"
description: "Sıfırdan derleme raporuna: şablon, denklemler, şekiller, referanslar ve TeX Live'ın elle yönetilmesini gerektirmeyen bir derleme yolu."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Bir laboratuvar raporunu tamamlamak için LaTeX'te uzmanlaşmanıza gerek yoktur. Bir şablona ihtiyacınız var
birkaç komut ve ilk gün çalışan bir derleme düğmesi. Diğer her şey olabilir
daha sonraki bir ders tez dersi belgesi isteyene kadar bekleyin.

Bu, mükemmel dizgiden ziyade temiz bir PDF'ye öncelik veren kısa bir yoldur.

## Yapabiliyorsanız çoklu gigabayt kurulumu atlayın

Paket motora sahip bir masaüstü araştırma editörü (örneğin
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) sizi bir PDF'ye götürür
TeX Live'ı yönetmeden. Hatta şablonlar, hata kartları alıyorsunuz
bozuk, tıkla-atla özelliğine sahip kaynağın yanında PDF ve dosya geçmişi
ayrı Git kursu. Eğitmeniniz belirli bir dağıtıma ihtiyaç duyuyorsa veya
Arka sayfadaki ders notlarını takip edin. Aksi halde başlangıç ​​için optimize edin.

Kurs zaten bunları kullandığında bulut editörleri de iyidir. Hedef bir PDF
zamanında, bir takım zinciri kimliği değil.

## Bir iskeleti çalın ve yarısını silin

Basit bir "makale" şablonuyla başlayın:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Daha fazla ayrıntı: [ilk PDF'nizi derleyin](/learn/first-document/) ve
[hızlı başvuru](/learn/cheatsheet/).

Puan anahtarınızın istemediği bölümleri silin. 40 paketlik tezi kopyalamayın
"her ihtimale karşı" önsözü. Ekstra paketler, yeni başlayanların yapamayacakları hataları almasının yoludur
oku.

## Denklemler ders kitabı için değil laboratuvar için

Satır içi: `$F = ma$`. Görüntülemek:

```latex
\[
  v = v_0 + at
\]
```

Yalnızca daha sonra alıntı yaptığınız şeyleri "\eqref" ile numaralandırın. Eğer TA belirsizlik isterse,
onu on satırlık bir hizalamaya değil, bir cümleye ya da küçük bir tabloya koyamazsınız
henüz anladım. Kesirler: `\frac{a}{b}`. Karekökler: `\sqrt{x}`.

Derleme günlüğü korkutucu bir şey söylediğinde yalnızca ilk hatayı düzeltin, ardından
yeniden derleyin. Daha sonraki hatalar genellikle ilkinden kaynaklanan gürültüdür.

## Bir figür, iyi yapılmış

Analiz aracınızdan bir grafiği PDF veya PNG olarak dışa aktarın. Şununla ekleyin:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

Metinde: `Şekil~\ref{fig:vr} şunu gösteriyor...`. Şeklin altındaki başlık. Etiket
başlıktan sonra. Şekil yanlış sayfaya kayarsa genişliği biraz küçültün
Bir saat boyunca yerleştirme seçenekleriyle mücadele etmeden önce:
[kayan yerleşim](/learn/figure-wrong-position/).

## Acı çekmeden sofralar

Birkaç satır için basit bir 'tablo' yeterlidir. Yukarıya "tablo" şeklinde bir başlık ekleyin
+ `\başlık`. Numaraları asistan'ın tarayabileceği şekilde hizalayın. ihtiyacın yok
Laboratuvar 1'de yayın düzeyinde 'kitap sekmeleri' kullanın, ancak mümkünse dikey çizgi çorbasından kaçının.

## Doktora kaynakça iş akışı olmayan referanslar

Üç alıntı için manuel bir liste işe yarar:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Daha fazlası için Google Akademik veya Zotero'dan bir ".bib" dosyasını dışa aktarın ve anahtarları temizleyin.
kısa ve okunaklıdırlar. Bozuk alıntılar `[?]` olarak yazdırılır:
[gizli alıntı işaretleri temizleniyor](/learn/citation-question-mark/).

Laboratuvar kılavuzundan ve ders kitabından dersin istediği şekilde alıntı yapın (IEEE, APA benzeri veya
basit bir numaralandırılmış liste). Değerlendirme listesiyle eşleşmek, bir günlükle eşleşmekten daha iyidir.

## Başlangıç ​​seviyesindeki yaygın hatalar

- `\includegraphics`ten önce `\usepackage{graphicx}` unutuluyor
- Metinde kaçmadan `%` ve `_` gibi özel karakterler
- Eşleşmeyen `$` matematik sınırlayıcıları
- Break'in içerdiği boşluklu dosya adları ("my arsa.pdf")
- Derlediğinizden farklı bir klasörü düzenleme

Yavaşlayın, ilk günlük satırını düzeltin, yeniden derleyin.

## PDF'yi teslim edin, kaynağı saklayın

ÖYS/LMS'nin istediklerini gönderin (genellikle PDF). '.tex'i ve rakamları bir
Kurs bittikten sonra hâlâ sahip olduğunuz klasör. Gelecekte iskeleti yeniden kullanacaksınız
Bir sonraki rapor için. Editörünüz Git geçmişini otomatik olarak tutuyorsa
daha iyisi: doğru denklemi silmeden önceki sürümü kurtarabilirsiniz.

## 90 dakikalık ilk oturum

Bu gece başlıyorsanız:

1. Bir şablon açın veya iskeleti yukarıya yapıştırın.
2. Başlık, isim, bölüm başlıklarını değerlendirme tablosundan doldurun.
3. Doğru olduğunu bildiğiniz bir denklemi ekleyin.
4. Bir grafiği dışa aktarın; onu dahil et; altyazısını yazın; Sonuçlar bölümünde bunu belirtin.
5. Kursun istediği şekilde iki referans ekleyin.
6. PDF, boş bir makaleye değil, bir rapora benzeyene kadar derleyin.

Değerlendirme tablosu dolduğunda durun. Geceyi paket seçenekleriyle geçirmeyin.

## Bir şey kırıldığında

Yalnızca ilk hatayı okuyun. Yaygın düzeltmeler: eksik `$`, eksik paket
grafikler, yanlış dosya adı, fazladan `}`. Daha önce derleme sürümünün bir kopyasını kaydedin
geri dönebilmeniz için büyük düzenlemeler. Bir sınıf arkadaşınızın önsözü ders için işe yararsa,
tez yığınının tamamını değil, kullandıkları minimum paketleri ödünç alın.

## Başarı neye benziyor

PDF açılıyor, kenar boşlukları makul görünüyor, şekillerin başlıkları var, denklemler
okunabilir ve değerlendirme listesi öğeleri net bir şekilde başlıklandırılmıştır. Bu bir ilk için yeterli
LaTeX laboratuvar raporu. Tipografi mükemmelliği gerçekten ihtiyaç duyulan bir makaleyi bekleyebilir
o.