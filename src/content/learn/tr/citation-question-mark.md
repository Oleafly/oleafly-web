---

title: "Gizemli alıntı işaretlerini temizleme"
description: "Yazım hataları, eksik paslar, yanlış yol, BibTeX ile Biber arasındaki uyumsuzluk."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Gizemli alıntı işaretlerini temizleme

## Belirti

Belge derlenir, ancak bir alıntının görünmesi gereken yerde kalın bir soru işareti alırsınız, `[?]` ve günlükte `LaTeX Uyarısı: Alıntı 'knuth84' tanımsız` gibi satırlar bulunur. Bazen her alıntı etkilenir, bazen yalnızca bir veya iki alıntı. Bu bir hatadan çok bir uyarı olduğundan, PDF yine de oluşturulur ve okuyucu işaret edene kadar işaretlerin gözden kaçırılması kolaydır.

## Neden oluyor?

LaTeX alıntıları doğrudan çözümlemez. İlk geçişte, istenen her anahtarı bir yardımcı dosyaya kaydeder. Daha sonra bir arka uç programı ("bibtex" veya "biber") bu anahtarları ".bib" veritabanınızda arar ve biçimlendirilmiş girişler yazar. İki LaTeX geçişi daha, sonuçları tekrar katlar. Soru işareti, son geçiş anında o anahtar için biçimlendirilmiş bir girişin mevcut olmadığı anlamına gelir. Bu semptomun her nedeni, bu boru hattını kırmanın bir yoludur.

## Nedenleri sırayla inceleyin

Önce anahtarın kendisini kontrol edin. `\cite{knuth84}` ve `@article{knuth1984,...}' farklı dizelerdir ve büyük/küçük harf de dahil olmak üzere eşleşme tamdır. Uyarıda adı geçen anahtarı `.bib` dosyanızda arayın; Her iki taraftaki bir yazım hatası en yaygın suçludur ve takip edilmesi gereken uyarı, günlükteki ilk eksik anahtar uyarısıdır.

Daha sonra, tam derleme döngüsünün çalıştığından emin olun. Sıra LaTeX'tir, ardından "bibtex" veya "biber", ardından iki kez daha LaTeX'tir. Tek bir derleme hiçbir zaman alıntıları çözümleyemez çünkü arka uç henüz çalışmamıştır. Oleafly tüm döngüyü otomatik olarak yürütür, ancak manuel derleme veya yanlış yapılandırılmış bir düzenleyici ilk geçişten sonra durabilir.

Üçüncüsü, veritabanı yolunu doğrulayın. `\bibliography{refs}` ve `\addbibresource{refs.bib}` ana dosyaya göre çözümlenir, bu nedenle alt klasördeki veritabanının `bib/refs` veya `bib/refs.bib` olarak yazılması gerekir. Yanlış bir yol sessizce başarısızlığa uğrar ve genellikle tüm referans listesini de beraberinde götürür; Bu daha büyük başarısızlık için [Boş bibliyografyaya](/learn/bibliography-empty/) bakın.

Son olarak arka ucu sistemle eşleştirin. Biblatex yükleyen bir belgenin 'biber' ile işlenmesi gerekir. Onu klasik "bibtex" ile beslemek, kullanılabilir bir çıktı üretmez ve kaç kez yeniden derlerseniz derleyin, her alıntı bir soru işareti olarak kalır.

## Her şey başarısız olursa

Eski yardımcı dosyalar eski, bozuk bir duruma tutunabilir. Belgenizin yanındaki `.aux`, `.bbl` ve `.blg` dosyalarını silin ve sıfırdan yeniden oluşturun. `.blg` dosyası da silmeden önce okunmaya değerdir: bu, arka ucun kendi günlüğüdür ve eksik veritabanlarını ve hatalı biçimlendirilmiş girişleri açıkça adlandırır.