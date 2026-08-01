---

title: "Panik başlamadan önce LaTeX'te bir yüksek lisans tezi yapılandırın"
description: "Ön konu, bölümde kısaltmalar, üniversite sınıf dosyaları, derleme hızı ve Yüksek Lisans ve Doktora öğrencileri için Git geçmişi yer almaktadır."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

Tez, bürokrasi eklenmiş uzun bir makaledir. LaTeX uzun işlemleri yönetir
kağıt iyi. Bürokrasi genellikle 2009 yılında yazılmış bir üniversite sınıfı dosyasıdır.
ve en son farklı bir TeX Live'da test edildi.

Bölümler hala boş olsa bile yapıya erken başlayın. İçerik arasında taşıma
Son aydaki dosyalar çapraz referanslar ve şekil yollarının nasıl bozulduğudur.

## Sınıf dosyasını kabul edin, gerisini çitleyin

Üniversitenin `.cls` dosyasını (ve gerekli `.bst` / logo dosyalarını) projeye koyun.
Sınıfı yeniden yazmayın. Makrolarınızı, paketlerinizi ve bölüm içeriğinizi
kontrol ettiğiniz dosyalar:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Eğer sınıf modern bir motorla bozulursa, önceliklendirme
[derlenmeyecek üniversite sınıfı dosyaları](/learn/fix-broken-template/).
Tez ofisinin hangi motoru kabul ettiğini belgeleyin (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) 'fontspec'e yatırım yapmadan önce.

## Komitelerin beklediği ön konu

Özet, ithaf, teşekkür, içindekiler listesi, listeler için Latin sayfa numaraları
şekiller/tablolar; ana bölümler için arapça. Kitap/rapor sınıfları ortaya çıkıyor
`\önmadde` / `\anamadde`; makale tabanlı şablonlar kılavuza ihtiyaç duyar
'\sayfa numaralandırma'. Kılavuz:
[roma sonra arapça](/learn/front-matter-page-numbers/).

Başlık sayfası içeriği genellikle lisansüstü okuldaki bir Word örneğiyle eşleşmelidir.
İfadeyi aynen kopyalayın. Buradaki yaratıcılık PDF'nin bir kişi tarafından reddedilmesini sağlar
kontrol listesi.

## Dosyalar halinde bölümler

Bir kök, çoğu şunları içerir:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Ortak yazarlar tezi besleyen makalelerde yardımcı olsa bile bölümleri kendiniz düzenleyin.
Yeniden sıraladığınızda yolların sabit kalması için rakamları "şekiller/bölüm3/" altında tutun.
Tam tez derlemelerinin taslağını hazırlarken `\includeonly{bölümler/yöntemler}` kullanın
her denklem düzenlemesinin maliyeti değildir:
[bölüm dosyalarını böl](/learn/split-chapter-files/).

Etiketler proje genelinde benzersiz olmalıdır ('eq:ch3-main', 'eq:main' değil)
her dosya). Proje çapında yapı görünümleri ve canlı referans kontrolü yardımı
200 sayfalık ağaç.

## Kısaltmalar ve semboller

Sözlük paketleri güçlü ve karmaşıktır. Birçok tez için elle tutulan bir
Ön taraftaki sembollerin listesi yeterlidir. Otomatik genişletmeye ihtiyacınız varsa
kısaltmalar, haftadan önce 'ekstra sözlükler' öğrenmek için bir gün bütçe ayırın
teslimiyet sırasında değil.

'Macros.tex'te matematik makrolarını tanımlayın ve bu dosyayı paylaşılan yasa olarak değerlendirin. Gösterim
2. bölüm ile 5. bölüm arasında gidip gelen bu durum bilgiçlik taslayan bir araştırmacı için bir hediyedir.

## Kaynakça

Tezin tamamı için bir ".bib" veya dikkatlice birleştirilmiş küçük bir set. Kararlı tuşlar.
Yumuşak sınırlamadan önce doğrula:
[BibTeX doğrulayıcı](/tools/bibtex-validator/). Bölümün tarzını eşleştirin
istiyor (sayısal, yazar yılı, dipnot ağırlıklı beşeri bilimler stilleri). Karıştırmayın
biblatex ve klasik BibTeX tek bir girişte bir araya geliyor.

## Hız

Tam tezin derlenmesi yavaşlar. Şekiller için taslak modu, "\includeonly" ve
TikZ, satın alma saatlerini geriye doğru dışsallaştırıyor. Notlar:
[PDF için daha kısa bekleme süresi](/learn/speed-up-compilation/).

Haftada bir "tam derleme" ritüeli tutun, böylece bölümler arası başarısızlıkları görmeye devam edin
erken.

## Yedekleme geçmişle aynı değildir

Dropbox kopyası bir yedektir. Git, argümanın nasıl değiştiğinin hikayesidir.
Bir bölüm derlendiğinde taahhütte bulunun. Özel bir GitHub veya GitLab uzaktan kumandasına aktarın.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) bir işlemi başlatır
proje başına gerçek repo, başarılı derlemeler ve boşta yapılan düzenlemelerden sonraki kontrol noktaları,
ve proje çapında yapı görünümlerinin ve SyncTeX'in yanında tek tıklamayla geri yükleme yapar
bunlar hala bölüm dosyalarında çalışıyor. Bu, alışkanlığın atlanmasını zorlaştırır.
Aynı disiplini herhangi bir editör ve dikkatli Git ile elde edebilirsiniz; tez
on sekizinci ayda 'git init'i hatırlamaya bağlı olmamalıdır.

## Komite geribildirim döngüleri

Kaynağı açmayacak okuyucular için PDF'yi dışa aktarın. Sorunlardaki yorumları takip edin veya
paylaşılan bir belgedir ancak düzenlemeleri TeX'te uygular. Bir komite üyesi geri döndüğünde
Taranmış biçimlendirme PDF'si, dosyayı tarih ve sürümle adlandırın, böylece hangisi olduğunu bilirsiniz
kaynak, atıfta bulunulduğunu taahhüt eder.

## Yumuşak ciltli ve sert ciltli kontrol listesi

Yazdırmadan veya yatırmadan önce:

- Sınıf dosyası ve motor, tez ofisi kurallarıyla eşleşir.
- Ön konu sayfa numaralandırması doğru; Gerektiğinde imza sayfası mevcuttur.
- Tüm `\ref`/`\cite` çözümlemeleri; hayır '[?]'.
- Gerektiğinde listelenen şekil ve tablolar; başlıklar tutarlı.
- Kenar boşlukları ve yazı tipi boyutu kontrol listesi PDF'sini geçer (bir test sayfası yazdırın).
- Kaynak + PDF + taahhüt karması yatırıldıktan sonra arşivlendi.

## Şekiller, tablolar ve sayfaların "listesi"

Birçok tez ofisi şekil ve tablolardan oluşan bir listeye ihtiyaç duyar. Altyazılar şöyle olmalıdır:
tutarlı olun ve yöntemler bölümünün tamamını 20 satırlık bir başlığa sığdırmayın. Kullanım
listeler için kısa başlıklar ve gövdede daha uzun açıklayıcı başlıklar
class isteğe bağlı kısa altyazıları destekler.

## İntihal ve önceki yayınlar

Bölümler yayınlanmış makaleleri yeniden karıştırıyorsa, üniversitenin katılım kurallarına uyun
ve ortak yazarlık izni. Önceki makalelerin kabul edilen PDF'lerini ve tezi saklayın
Sürüm kontrolünde nelerin değiştiğine dair bir not içeren bölüm (gösterim, genişletilmiş
deneyler, birleşik giriş).

## Yazdığınız ay değil, bu ay başlayın

Taslağı teklif ettiğinizde iskeleti oluşturun. Derlenen boş bölümler
ilerleme olarak sayın. Son aşamadaki paniklerin çoğu, yapısal borç artı inatçı bir borçtur.
sınıf dosyası, bilimde bir boşluk değil. Bu borcu erken ödeyin.