---

title: "Klinik ve hibe yazımı: gizlilik, izlenebilir taslaklar ve çevrimdışı LaTeX"
description: "Tıp, halk sağlığı ve hibe yazarları taslağın nerede saklandığını ve gerçek Git'e, çevrimdışı derlemeye ve hiçbir hesaba sahip yerel bir araştırma editörünün inceleme döngülerine nasıl uyduğunu neden önemsiyorlar?"
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Klinik yazılar ve bağış açıklamaları sıklıkla hassas ayrıntılar içerir.
Kimlik gizleme nihai sonuçlanmadan önce. Her tuş vuruşunu üçüncü tarafa vermek
editör bir araç tercihi olduğu kadar bir politika kararıdır. IRB'ler, veri kullanımı
anlaşmalar ve hastane BT'si bir bulut düzenleyicinin uygun olup olmadığını umursamıyor
23:00.

Bu yazı, açıklayabileceğiniz bir şekilde taslak hazırlama ve dizgi ile ilgilidir.
uyumluluk. Bunu yasal inceleme olarak değil, iş akışı tavsiyesi olarak değerlendirin.

## Düz dosyalar hakkında akıl yürütmek daha kolaydır

'.Tex' ve rakamlardan oluşan bir klasör, şifrelenmiş bir diskin, bir hastanenin içinde bulunabilir
dizüstü bilgisayar görüntüsü veya hava boşluklu bir makine. Uyumluluğu bir yola yönlendirebilirsiniz.
Tarayıcı projeleri, satıcının erişim modeline, dışa aktarma yoluna ve
alt işlemciler listesi.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) şu şekilde oluşturulmuştur:
bilerek: hesap yok, ürün telemetrisi yok, projeler sıradan klasörler halinde
gerçek bir Git deposuyla. [Gizlilik sayfası](/privacy/) kısadır çünkü
belgenin var olması için bir Oleafly sunucusuna ihtiyacı yoktur. Ağ, gerçekleştireceğiniz eylemler içindir
take (paketler, isteğe bağlı alıntı arama, etkinleştirirseniz barındırılan yapay zeka, GitHub),
taslağın her tuş vuruşu için değil.

Politika bulut yapay zekasını yasaklıyorsa asistanı kapalı bırakın veya yerel bir yere yönlendirin
modeli. Düzenleyici, derleme döngüsü ve Git hala çalışıyor.

## Değişiklikleri Word'de yaşamadan takip edin

Hibe PI'leri hâlâ "değişiklikleri takip etme" talebinde bulunuyor. LaTeX ülkesinde bu genellikle şu anlama gelir:
Git geçmişi artı ortak yazarlardan PDF yorumları veya kısa bir Word dışa aktarımı
herhangi bir şey kurmayı reddeden kişi. Gerçeğin kaynağı olarak ".tex"i koruyun;
bkz. [yalnızca Word konuşan ortak yazarlar](/learn/collaborator-uses-word/).

Oleafly'da her proje ilk günden itibaren bir Git deposudur: otomatik kontrol noktaları
Başarılı derlemelerden ve boşta yapılan düzenlemelerden sonra, yan yana farklar, tek tıklamayla
özel bir uzaktan kumanda istediğinizde isteğe bağlı GitHub'u geri yükleyin. Bir bütünü çatallayabilirsin
riskli bir kesimi denemek için uygulama paketini ikinci bir projeye (tam geçmiş) aktarın
Gönderim kopyasına dokunmadan. İsteğe bağlı yapay zeka asistanını kullanırsanız
ilk düzenlemeden önce kontrol noktaları ve yalnızca onay yoluyla değişiklik yapılır
farklar.

Bir PI'nin gözden geçirebilmesi için ad, amaçlardan veya bölümlerden sonra işlenir ("aim2-methods-cut")
Bir yazılım mühendisi gibi farkları okumadan geçmiş.

## Çevrimdışı hastanelerde faydalıdır

Klinik ağlar rastgele SaaS alanlarını engeller. Yerel bir derleyici yazmaya devam ediyor
EHR oturumları arasında mümkündür. Oleafly, uygulamada Tectonic'i (ve Typst'i) gönderir;
Paketler ilk kullanımdan sonra önbelleğe alınır ve çevrimdışı mod, ağı
derleyici. Yazım denetimi ve dilbilgisi düzyazıda yerel olarak çalışır (komutları atlarlar ve
matematik). Bunlar hastane BT'sinin genellikle önemsediği kısıtlamalardır, dolayısıyla yerel
araştırma editörleri sık sık karşımıza çıkıyor.

Sayfa sınırını düzeltirken kaynağın yanındaki SyncTeX ve PDF önemlidir
güvenilmez Wi-Fi bağlantısına sahip bir bakım istasyonu bilgisayarında.

## Şablonlar, sayfa sınırları ve ön kontrol

NIH tarzı ve temel şablonlar kenar boşlukları, yazı tipleri ve sayfa başlıkları ile ilgilidir.
Geometri ve yazı tipi paketleri akıllı makrolardan daha önemlidir. PDF'ye derleyin ve
sayfa sayısını portaldan önceki gece değil, her büyük kesintiden sonra kontrol edin
kapanır. Uygun olduğunda galerideki bilinen bir şablondan başlayın; hala eşleşiyor
yazı tipleri, kenar boşlukları ve yapı için mevcut FOA (Tek sayfa olarak Özel Amaçlar)
bir sayfa anlamına gelir).

PDF'nin makine okuyucusunda hayatta kalması gerektiğinde (özgeçmişler, bazı kurumsal
portalları), Ön Kontrol yapıyı ve ayrıştırıcı tarzı çıkarma bulgularını gösterir
göndermeden önce. Bunlar okuyabileceğiniz ve üzerinde işlem yapabileceğiniz buluşsal risk sinyalleridir.

## Çoklu PI işbirliği

Bölümlere veya amaca göre kendi dosyalarınıza sahip olun. Bir kişi ana `.bib'in sahibidir veya paylaşılan
Zotero grup ihracatı. Ortak yazarların TeX'i mi düzenleyeceğini yoksa PDF yorumlarını mı döndüreceğini kabul edin.
Politika gerektirdiğinde yalnızca onaylı kurumsal Git ana bilgisayarlarındaki özel uzaktan kumandalar
o; Her hibe taslağı herkese açık GitHub'a ait değildir.

## Kaynakça yöneticileri

Paylaşılan Zotero grupları, birden fazla PI'nin yenileyebileceği bir `.bib'i dışa aktarır. İçeri aktar
projeye yeni alıntılar eklediğinizde DOI'leri yapıştırın ve eksik alanları doğrulayın
sunulmadan önce yıllar birleştirilmiş PDF'de `[?]` olarak görünmüyor:
[BibTeX doğrulayıcı](/tools/bibtex-validator/). Oleafly tamamlar ve kontrol eder
Proje bibliyografyasına karşı alıntı anahtarları yazarken çok bozuk
`\cite' anahtarları günlükten önce görünür.

## Rakamlar ve PHI

Tanımlanabilir hasta verilerini hiçbir zaman belirli bir amaca yönelik rakamlara veya altyazılara koymayın.
repo diğerleri klonlayabilir. Kimliksiz şemalar kullanın. Herhangi bir şeyi hareketsiz olarak saklayın
klinik veri seti ile aynı kontroller altında hassastır,
genel yöntemler diyagramı.

## Bu ne değil

Yerel öncelikli hâlâ IRB incelemesi, veri kullanım anlaşmaları ve
kimliksizleştirme. Barındırılan yapay zekayı açın veya uzaktan kumandaya basın; bazı baytlar
bu hizmetlerin politikaları kapsamında makine. Hangi yerel öncelikli değişiklikler varsayılandır
Hassas bir anlatı taslağı hazırlamanın yolu: kontrol ettiğiniz bir klasör, kontrol ettiğiniz bir editör
çevrimdışı çalışır ve satıcıdan izin istemeden geçmişi geri yükleyebilirsiniz.
ihracat.

## Pratik başlangıç ​​kurulumu

1. Yerel bir proje oluşturun; paketler önbelleğe alındıktan sonra çevrimdışı derlemeyi etkinleştirin.
2. Politika ve ekip bir sağlayıcı üzerinde anlaşmaya varmadıkça AI'yı kapalı bırakın.
3. Yalnızca onaylı bir ana bilgisayarda özel uzaktan kumanda.
4. Bölüm sahipliği ve tek bibliyografya sahibi.
5. Amaçlar ve araştırma stratejisine ilişkin her büyük kesintiden sonra sayfa sayımı kontrolleri.

Sanki bir uyum görevlisi taslağın nerede yaşadığını soracakmış gibi yazın. Cevap ise
"şifrelenmiş dizüstü bilgisayarda bir klasör, Git geçmişi yerel, isteğe bağlı özel
uzak," asla kullanmadığımız bir hizmetteki hesaptan daha iyi durumdasınız
gözden geçirildi."