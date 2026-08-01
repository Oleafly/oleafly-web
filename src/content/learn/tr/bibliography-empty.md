---

title: "Boş kaynakça"
description: "Yol, arka uç, eksik alıntı, basılı bibliyografya ve kaynakça."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Boş kaynakça

## Belirti

Belgeniz önemli bir hata olmadan derleniyor ancak Referanslar bölümü tamamen eksik veya başlık, altında hiçbir şey olmadan görünüyor. Genellikle metindeki her "\cite" aynı zamanda kalın soru işaretiyle gösterilir. Hiçbir şey çökmedi, dolayısıyla takip edilecek bariz bir hata yok, bu da bunu sinir bozucu kılıyor.

## Neden oluyor?

Kaynakça yalnızca LaTeX tarafından üretilmemektedir. LaTeX önce alıntı yapılan anahtarların listesini yardımcı bir dosyaya yazar. Ayrı bir arka uç programı ('bibtex' veya 'biber'), '.bib' veritabanınızı okur ve eşleşen girişleri formatlar. Son olarak LaTeX, bir sonraki geçişte biçimlendirilmiş sonucu tekrar okur. Boş bir kaynakça, bu boru hattının bir yerde bozulduğu anlamına gelir: arka uç hiç çalışmadı, çalıştı ancak veritabanını bulamadı, veritabanını buldu ancak hiçbir anahtar istenmedi veya belge yanlış komutla sonucu istiyor.

## Nedenleri sırayla inceleyin

İlk olarak, veritabanı dosyasının belgede belirtildiği yerde mevcut olduğunu doğrulayın. `\bibliography{refs}` ve `\addbibresource{refs.bib}` her ikisi de ana dosyaya göre `refs.bib`i arar, dolayısıyla bir `bib/` alt klasöründe bulunan bir dosyaya `bib/refs` veya `bib/refs.bib` olarak başvurulmalıdır. Yanlış bir yol sessizce başarısızlığa uğrar.

İkinci olarak, arka ucun gerçekten çalıştığından emin olun. Tek bir derleme asla yeterli değildir; tam döngü LaTeX'tir, ardından "bibtex" veya "biber" ve ardından iki kez daha LaTeX'tir. Oleafly bu döngüyü otomatik olarak çalıştırır, ancak elle çalıştırılan bir yapı veya yanlış yapılandırılmış bir düzenleyici araç zinciri orta adımı atlayabilir ve sonuç kesinlikle boş bir referans listesidir.

Üçüncü olarak, en az bir "\cite" komutunun mevcut olup olmadığını kontrol edin. Arka uç yalnızca belgenin talep ettiği girişleri biçimlendirir; dolayısıyla hiçbir alıntı içermeyen bir taslak, tasarım gereği boş bir liste alır. Taslağın ilk aşamasında, metinde hiçbir şey yazdırmadan veritabanındaki her girişi isteyen '\nocite{*}' ile her şeyi girmeye zorlayabilirsiniz.

Dördüncüsü, komutu sistemle eşleştirin. Klasik BibTeX belgeleri "\bibliographystyle{...}" ve "\bibliography{refs}" ile biter. biblatex belgeleri giriş kısmındaki veritabanını `\addbibresource{refs.bib}` ile yükler ve `\printbibliography` ile yazdırır. İkisini karıştırmak, örneğin biblatex'i yüklemek ama yine de "\bibliyografya"yı çağırmak tam olarak bu başarısızlığa neden olur. Aynı şey yanlış arka ucu çalıştırmak için de geçerli: biblatex'in 'biber'e ihtiyacı var ve onu klasik 'bibtex'le beslemek hiçbir şey kazandırmıyor.

## Arka ucun kendi günlüğünü okuyun

Arka uç, şikayetlerini belgenizin yanındaki bir ".blg" dosyasına yazar ve burada hatalı biçimlendirilmiş girişler, yinelenen anahtarlar ve "Veritabanı dosyasını açamadım" mesajları görünür. Yukarıdaki adımlar doğru görünüyorsa ancak liste hala boşsa, `.blg' günlüğü neredeyse her zaman gerçek suçlunun adını verir. Kaynakçanın kendisi göründükten sonra da devam eden soru işaretleri için bkz. [Gizemli alıntı işaretlerini temizleme](/learn/citation-question-mark/).