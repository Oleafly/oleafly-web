---

title: "Yukarıdan aşağıya bir kağıt"
description: "Bir araştırma makalesinin her bölümünü ve her bir bölümün yaptığı işi kapsayan bir yürüyüş turu."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Yukarıdan aşağıya bir kağıt

Araştırma makaleleri, her seferinde aynı düzine parçadan, hemen hemen aynı sırayla bir araya getirildiklerini fark edene kadar korkutucu görünür. Her bir parçanın işini öğrendikten sonra, makaleleri daha hızlı okuyabilir ve boş bir sayfaya bakmadan yazabilirsiniz. İşte tur.

## Ön mesele

| Bölüm | Bu bir iş |
|---|---|
| Başlık | Doğru okuyucunun kaydırmayı durdurmasını sağlayın. |
| Yazarlar | İşi kimin yaptığını ve kime e-posta göndereceğinizi söyleyin. |
| Özet | Makalenin tamamını 150-250 kelimeyle sat. |
| Anahtar Kelimeler | Arama motorlarının ve indeksleyicilerin sizi doğru şekilde dosyalamasına yardımcı olun. |

Başlık ve özet işe alımın çoğunu yapıyor. Potansiyel okuyucularınızın yüzde doksanı başka hiçbir şey görmeyecek; bu nedenle [özet kendi dersini alır](/learn/write-an-abstract/) ve [başlık sayfasının kendi LaTeX mekaniği vardır](/learn/title-page/).

## Vücut

| Bölüm | Bu bir iş |
|---|---|
| Giriş | Sorunun neden önemli olduğunu ve neye katkıda bulunduğunuzu açıklayın. |
| İlgili çalışmalar | Çalışmanızı daha önce gelen her şeyin arasına yerleştirin. |
| Yöntem | Çoğaltmaya yetecek kadar tam olarak ne yaptığınızı açıklayın. |
| Deneyler / sonuçlar | Yöntemin işe yaradığına dair kanıt gösterin. |
| Tartışma | Kanıtları, zayıf olduğu yerler de dahil, dürüstçe yorumlayın. |
| Sonuç | Çıkarımı yeniden ifade edin ve bir sonraki adıma işaret edin. |

Beden, aşamalar halinde anlatılan bir argümandır: İşte bir sorun, işte fikrimiz, işte işe yaradığının kanıtı, işte anlamı. Bir bölüm bu argümanı ilerletmiyorsa dolgudur. Her biri hakkında daha fazla bilgi için [giriş ve ilgili çalışmalar](/learn/introduction-and-tained-work/) ve [makine odası bölümlerine](/learn/methods-results-discussion/) bakın.

## Arka mesele

| Bölüm | Bu bir iş |
|---|---|
| Teşekkürler | Finansörlere, yardımcılara ve taslakları inceleyenlere teşekkür edin. |
| Referanslar | Alıntı yaptığınız her kaynağı mekan kurallarına göre biçimlendirilmiş olarak listeleyin. |
| Ek | Kanıtları, ekstra tabloları ve akışı bozacak detayları saklayın. |
| Tamamlayıcı malzeme | PDF'ye sığmayan kod, veri ve videoları taşıyın. |

Referanslar dekorasyon değil, iddialarınızın dayandığı delillerdir. Kimin ne okuduğunu görmek için [dipnotlar, referanslar ve ekler](/learn/footnotes-references-appendix/) ve LaTeX mekanizmaları için [alıntılar](/learn/add-citations/) bakın.

## LaTeX'teki iskelet

Bunların çoğu doğrudan zaten bildiğiniz komutlarla eşleşir:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Bölümleme komutları, [bölümler ve yapı](/learn/sections/) bölümünde anlatıldığı gibi numaralandırmayı ve içindekiler tablosunu sizin için yönetir.

## Bundan sonra nereye gitmeli

Makale tür olarak yeniyseniz, [araştırma makalesinin gerçekte ne olduğu](/learn/what-is-a-research-paper/) ile başlayın. Bir tane yazmak üzereyseniz, bu parçanın geri kalanı, [abstracts](/learn/write-an-abstract/)'dan [gerçekte ne kadar matematiğe ihtiyacınız var](/learn/how-moch-math/)'a kadar her bölümü sırayla ele alır. Takıldığınız kısmı okuyun, yazın, tekrarlayın.