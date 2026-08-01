---

title: "Zotero'yu bir .bib dosyasına dönüştürün"
description: "Daha iyi BibTeX, otomatik dışa aktarma, makinelerde hayatta kalan anahtarlar."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero'yu bir .bib dosyasına dönüştürün

Zotero referans toplama konusunda çok iyidir: bir tarayıcı düğmesinden meta verileri ve PDF'leri alır ve her şeyin aranabilir olmasını sağlar. LaTeX ise yalnızca `.bib` dosyalarını okur. İkisi arasındaki köprü Better BibTeX eklentisidir. Zotero koleksiyonunu güncel kalan bir ".bib" dosyasına dönüştürür ve aynı derecede önemli olan alıntı anahtarlarını sabit tutar, böylece "\cite" komutlarınız asla bozulmaz.

## Yerleşik dışa aktarma neden yeterli değil?

Zotero, BibTeX'i kendi başına dışa aktarabilir, ancak her seferinde alıntı anahtarlarını yeniden oluşturur ve 'knuth_literate_1984'ten 'knuth_literate_1984-1'e değişen bir anahtar, eski adı kullanan her '\cite'ı sessizce bozar. Dışa aktarma aynı zamanda tek seferlik bir anlık görüntü olduğundan, kağıt eklediğiniz anda dosya eskir. Better BibTeX her iki sorunu da çözer: anahtarlar seçtiğiniz bir formülden oluşturulur, hiçbir zaman değişmemeleri için sabitlenebilir ve dışa aktarma işlemi otomatik olarak kendini yenileyebilir.

## Boru hattının kurulumu

Öncelikle Better BibTeX'i kendi web sitesinden Zotero'nun Araçlar, Eklentiler iletişim kutusunu kullanarak yükleyin ve ardından Zotero'yu yeniden başlatın. İkinci olarak Better BibTeX tercihlerinde bir alıntı anahtarı formülüne karar verin. 'Knuth1984' veya 'knuth1984literate' gibi anahtarlar üreten bir modelin yazılması ve kaynakta tanınması kolaydır. Üçüncü olarak, makalenize ait olan koleksiyona sağ tıklayın, Koleksiyonu Dışa Aktar'ı seçin, Better BibTeX formatını seçin ve dosyayı proje klasörünüze örneğin 'refs.bib' olarak kaydetmeden önce "Güncelleştir" seçeneğini işaretleyin. O andan itibaren, Zotero'da bir öğenin eklenmesi veya düzenlenmesi, dosyayı birkaç saniye içinde yeniden yazar.

Son olarak, tıpkı elle yazılmış bir veritabanında olduğu gibi, belgenizi "\bibliography{refs}" veya "\addbibresource{refs.bib}" ile dışa aktarılan dosyaya yönlendirin. Bağlantılar [.bib anahtarından metin içi alıntıya](/learn/add-citations/) bölümünde ele alınmıştır.

## İşbölümü

Zotero'yu ana veri tabanı olarak ve `.bib' dosyasını ise makalenin deposunda yaşayan oluşturulmuş bir yapı olarak ele alın. ".bib" dosyasının ".tex" ile birlikte kaydedilmesi, ortak yazarın veya başka bir makinedeki sizin, Zotero'yu hiç kurmadan makaleyi derleyebileceği anlamına gelir. Dışa aktarılan dosyayı elle düzenlemeyin. Bir sonraki otomatik dışa aktarma, değişikliklerinizin üzerine yazar. Bunun yerine meta verileri Zotero'da düzeltin ve düzeltmenin akmasını sağlayın. Bir giriş dışa aktarıldıktan sonra hala yanlış görünüyorsa stilin hangi alandan memnun olmadığını görmek için bunu [BibTeX doğrulayıcı](/tools/bibtex-validator/) aracılığıyla çalıştırın.

Bir alışkanlık, gelecekteki sıkıntıların çoğunu önler: Bir taslakta bir anahtar göründüğünde, onu Better BibTeX'e sabitleyin (öğeye sağ tıklayın, Better BibTeX, BibTeX anahtarını sabitle). Sabitlenmiş anahtarlar formül değişikliklerine, makine hareketlerine ve kütüphane yeniden düzenlemelerine karşı dayanıklıdır; bu da tam olarak bir alıntı anahtarının yapması gereken şeydir.