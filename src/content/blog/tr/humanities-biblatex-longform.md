---

title: "Beşeri bilimler ve uzun biçim: biblatex, dipnotlar ve bölüm kitapları"
description: "Dipnotlar, esnek alıntılar, arşiv kaynakları, çok bölümlü yapı ve tarih, edebiyat, felsefe ve klasikler için çok yıllı sahiplik."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Beşeri bilimler metinleri argüman kadar alıntı şekline de önem verir. Sayısal
IEEE stili burada yanlıştır; dipnotlar, yazar adı ve arşiv kaynakları
norm. LaTeX, bir seminer makalesinden ve bir projeden daha fazlasına sahip olduğunuzda öğrenmeye değerdir.
Bibliyografyada bir avuç kitap var.

Bu kılavuz, tez bölümlerini üst üste dizen veya uzun bir makale taslağı hazırlayan öğrenciler içindir.
gerçek dipnotlarla. Yalnızca üç MLA girişine ihtiyacınız varsa erken durabilirsiniz.

## Esneklik için biblatex'i tercih edin

'biblatex' dipnotları, ayrıntılı stilleri ve stenoları klasikten daha iyi işler
Çoğu beşeri bilimler iş akışı için BibTeX:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Yaygın alternatifler arasında "yazar başlığı", "ayrıntılı", dergiye özgü stiller,
veya departmanınız ne emrediyorsa. Önce el kitabını eşleştirin, ardından
en yakın biblatex stili. Arka plan:
[BibTeX veya biblatex](/learn/bibtex-vs-biblatex/).

Yalnızca pdflatex'i değil, **biber**'i (veya stilinizin ihtiyaç duyduğu arka ucu) çalıştırın. Boş
kaynakçalar neredeyse her zaman bir arka uç veya yol hatasıdır. Girişleri doğrula
gönderimden önce: [BibTeX validator](/tools/bibtex-validator/).

## Arşiv ve web kaynakları

Mektuplar, el yazmaları ve web siteleri "@makale" girişlerini günlüğe kaydeden alanlara ihtiyaç duyar
umursama:

- "urldate" içeren web kaynakları için "@yayınlanmamış" veya biblatex "@çevrimiçi"
- el yazmaları için arşiv konumu, koleksiyon, folio
- iki yıl içinde hala anlayacağınız kararlı anahtarlar

Bibliyografya seyrek görünene kadar eksik girişler sessizce başarısız olur. Birini tercih et
Kayan dipnot metninin üzerine ".bib" (veya projeye göre küçük bir set)
alıntı yapılan eserlerle uyumsuz.

## Dipnotlar ve son notlar

Pek çok beşeri bilimler tarzı dipnot ister. 'biblatex' ayrıntılı stilleri ve
`\footcite` / otomatik dipnot alıntıları çok fazla alan kaplıyor. Eğer
departman son notlar istiyor, bunu erken yapılandırın. Üç bölümün dönüştürülmesi
dipnot alıntıları teslim haftası perişandır.

Önemli kısımları kısa tutun. Dipnot tam bir paragrafsa, şu soruyu sorun:
ana metne aittir. Okuyucular göz gezdiriyor.

## Bölümler ve kritik baskılar

Kitap uzunluğundaki projeler, 'kitap', 'anı' veya bir üniversite tez dersi ister.
Bölüm başına "\include":

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Diğer bölümlere yapılan çapraz referanslarda sabit kod yerine `\ref` / `\cref` kullanılmalıdır
Yeniden sıraladığınızda çürüyen "Bölüm 4'e bakın" dizeleri. Listelenen yapı görünümleri
dosyalar arasındaki başlıklar 200 sayfalık bir taslakta yardımcı olur. İle derlemek de öyle
Bir bölümü gözden geçirirken `\includeonly`.

Kritik basımlar ve paralel metinler özel paketlere sahiptir. Bir şey icat etme
bakımı yapılan bir sınıfın olup olmadığını kontrol edene kadar ham mini sayfalarla düzen
diliniz için zaten mevcut.

## Alıntı ve dil

Makalenin dili için uygun tırnak işaretlerini kullanın ("csquotes" bu konuda yardımcı olur)
iç içe tırnak işaretleri ve dile duyarlı işaretler). Birkaç satırdan uzun alıntıları engelle
araya giren manuel girinti yerine bir alıntı ortamı kullanılmalıdır
iki sütunlu düzenlerde veya kenar boşlukları değiştiğinde.

Çok dilli projeler için "fontspec" ve bir dil içeren XeLaTeX veya LuaLaTeX
Paket, 1990'ların 'girdi' hack'lerini istiflemekten daha az acı verici. Şunları seçin:
üçüncü bölümü uygun olmayan bir yazı tipiyle yazmadan önce ihtiyacınız olan senaryoları ele alın.
onları render edin.

## Resimler, haritalar ve adil kullanım notları

Haritalar ve el yazması fotoğrafları genellikle TikZ değil, harici PDF/PNG içerir.
Kaynak ve izin durumunu içeren başlık. Yüksek çözünürlüklü master'ları dışarıda tutun
eğer büyüklerse git geçmişi; sıkıştırılmış rakamları kağıda aktarın
aslında kullanıyor ve README'ye ustaların nerede yaşadığına dair bir not koyuyor.

## Yıllarca süren notların yerel sahipliği

Tez, çok yıllı bir dosya ağacıdır. Yalnızca bir tarayıcı projesinde tutmak
tek hesaba bağlı olmak, öğrencilerin kurum değiştirmesi veya erişimi kaybetmesi riski taşır
mezun olduktan sonra.

Düz klasörler artı yerel olarak derlenen Git daha iyi eskir.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) bunu hedefliyor
bir tür uzun belge. Proje genelinde bölümler arasında yapı görünümleri elde edersiniz
referanslar ve alıntılar, düzyazıda çevrimdışı yazım ve dil bilgisi (alıntı anahtarlarını atlar) ve
hesap olmadan gerçek Git kontrol noktaları. Aynı dosyaları hâlâ açabilirsiniz.
başka herhangi bir editör. Önemli olan mülkiyettir.

## Bir komiteden sağ çıkan iş akışı

Birinci yılda el kitabına göre alıntı stilini dondurun ve bir tane saklayın
Sabit anahtarlara sahip bibliyografya veritabanı. Bölüm dosyalarını sürüm kontrolü altına alın
özel bir uzaktan kumandayla. Ön konu (özet, teşekkür, içindekiler)
Latin/Arapça sayfalar için üniversitenin sınıf kurallarına uyun. PDF'nin tamamını derleyin
"\includeonly" ile taslak hazırlasanız bile aylık olarak, dolayısıyla bölümler arası referanslar değişmez
sonunda sizi şaşırtın.

## Ön başvuru

- Biber/bibtex temiz çalıştırıldı; `[?]` alıntısı yok.
- Dipnot stili bölüme uygundur.
- Yeniden sıralamanın ardından bölüm çapraz referansları güncellendi.
- Gömülü yazı tipleri; kenar boşlukları tez ofisinin kontrol listesiyle eşleşiyor.
- Yalnızca yükleme portalı makbuzu değil, hem kaynak hem de PDF arşivlendi.

## İndeksleme ve arka madde

Kitap sınıfı projeleri bazen bir dizine ('imakeidx' ve arkadaşlar) ihtiyaç duyar. Bütçe
gerçek bir indeksleme geçişi zamanı; Büyük harfle yazılan her kelimenin otomatik olarak işaretlenmesi
çöp. Transkripsiyon eklerinde ana metnin açık bir şekilde numaralandırılması gerekir.
bölümler `\ref` olabilir.

## Komite taslakları ve mevduat PDF'si karşılaştırması

Numaralandırılmış satır taslakları veya geniş kenar boşlukları işaretlemeye yardımcı olabilir, ancak bırakılan PDF'nin
Tez ofisi örneğiyle eşleşin. Bir sınıf seçeneğini veya ayrı bir "taslak" bayrağını saklayın
yani para yatırma sabahı marjları elle düzenlemiyorsunuz.

Alıntı motorunu hemen erken edinin. Argüman daha fazla ilgiyi hak ediyor
geçen haftaki bibliyografya kavgasından daha fazlası.