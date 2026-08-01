---

title: "İlk Beamer güvertesi"
description: "Tema, başlık çerçevesi, taslak, bir sonuç slaydı."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# İlk Beamer güvertesi

Beamer, sunumlar için standart LaTeX belge sınıfıdır. Belge, sayfalar yerine slaytlar üretir ve zaten bildiğiniz her şey aktarılır: aynı matematik, aynı şekiller, aynı kaynakça komutları. Makale yazarları için pratik kazanç yeniden kullanımdır. Taslaktaki denklemler ve TikZ diyagramları değişmeden konuşmaya yapıştırılıyor. İşte minimal ama eksiksiz bir deste:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Sayfalar değil, çerçeveler

Çekirdek birim çerçevedir ve her "kare" ortamı bir slayt haline gelir. Parantez içindeki isteğe bağlı bağımsız değişken, `\begin{frame}{Results}` örneğinde olduğu gibi, slaydın başlığını belirler. İlk slaytta "\frame{\titlepage}" kısaltması kullanılır; burada "\titlepage", girişte "\title" ve "\author" tarafından bildirilen meta verileri işler. Ayrıca `\institute` ve `\date`i de ekleyebilirsiniz; bunlar aynı düzende görünür. Bir çerçeve, bir sayfadan fark edilir derecede daha az, kabaca 128 mm x 96 mm tuval tutar; dolayısıyla taşan içerik, yazı tipini küçültmek yerine, malzemeyi iki çerçeveye bölmenin bir işaretidir.

## Temalar ve taslak

`\usetheme{Madrid}` eksiksiz bir görsel tasarım seçer: renkler, üst bilgi ve alt bilgi çubukları ve çerçeve başlıklarının nasıl çizildiği. Beamer düzinelerce tema gönderiyor. 'Madrid', 'Berlin' ve kasıtlı olarak sade 'varsayılan' yaygın seçimlerdir ve temayı değiştirmek, tüm desteyi yeniden şekillendiren tek satırlık bir değişikliktir. Birçok konferans ve laboratuvar kendi temasını dağıtır. Bu durumda stil dosyasını projeye bırakır ve buraya adlandırırsınız.

Anahat çerçevesinde konuşmanın bölümsel yapısını listeleyen '\tableofcontents' adı verilir. Dikkat edilmesi gereken bir nokta: `\section' komutlarını listeliyor ve bu minimal örnekte hiçbir komut yok, dolayısıyla siz çerçevelerin arasına `\section{Method}` gibi satırlar ekleyene kadar taslak boş görünüyor. Beamer'daki bölümlerin başlıkları slaytlara yazdırılmaz; bazı temaların görüntülediği ana hatları ve gezinme öğelerini yapılandırmak için mevcutturlar.

## Slaytlardaki içerik

Çerçevenin içinde "itemize" herhangi bir belgede olduğu gibi çalışır ve her "\öğe" bir madde işaretine dönüşür. Slaytlar, kağıda göre çok daha az metni tolere eder; bu nedenle, mümkün olduğunca öğeleri tek satırda tutun ve ayrıntıları söylediklerinize taşıyın. Şekiller, tablolar ve matematik de çerçevelerin içinde çalışır, ancak Beamer çıktısı bu sayfa içi önizlemelerde oluşturulmaz, bu yüzden görmek için desteyi derleyin.

En yaygın erken hata kelimesi kelimesine içeriktir: `\verb' ve çerçevelerin içeriklerini işleme şekli nedeniyle kod listeleri sıradan çerçevelerin içinde bozulur. Düzeltme, kod içeren herhangi bir çerçeveye `\begin{frame}[fragile]` yazılan kırılgan seçenektir. Destenin taslağı hazırlandığında, [tıklandığında çizgileri ortaya çıkar](/learn/beamer-overlays/) kapsamında öğrenilecek bir sonraki araç adım adım gösterimlerdir.