---

title: "Fizik tezleri: denklemler, birimler ve çoklu dosya akıl sağlığı"
description: "Fizik ve astronomi öğrencileri için notasyon, siunitx, çok bölümlü projeler, iki sütunlu günlük tuzakları ve çevrimdışı derleme alışkanlıkları."
date: 2026-06-20
tags: [physics, thesis, math]
---

Fizik yazıları sayfa başına çoğu alana göre daha fazla matematik taşır. bu iyi
ta ki bir etiket taşındığı için yarım kalmış bir bölüm tüm derlemeyi bozana kadar,
veya her ortak yazar farklı bir kalın vektör kuralı icat edene kadar.

Bu, Yüksek Lisans/Doktora bölümleri, işbirliği notları ve günlük için pratik bir kurulumdur
hala iki sütun isteyen gönderimler.

## Başlangıçtan itibaren çoklu dosya

Kısa bir tez bile bir kök dosyadan faydalanır ve aşağıdakileri içerir:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Yeniden oluşturmamak için taslak hazırlarken `\includeonly{bölümler/yöntemler}` kullanın
bir denklemi düzeltmek için üç bölüm. Ayrıntılar:
[bir kök dosya, birçok bölüm](/learn/split-chapter-files/).

Rakamları "figures/ch2/" altında tutun ve denklemleri bölüme uygun etiketlerle adlandırın
(`eq:ch2-hamiltonian`) böylece birleşmeler çarpışmaz.

## Birimler metin değildir

Gerekirse elle `$v = 3.0\,\mathrm{m\,s^{-1}}$' yazın veya `siunitx'i yükleyin
ve `\qty{3.0}{m.s^{-1}}` kullanın. Günlükler aralık ve ince boşluklar açısından farklılık gösterir; seçmek
bir paket yolu ve ona bağlı kalın. Karışık stiller hiç bir zaman bir araya gelmeyen iki yazara benziyor
tanıştım.

Değer tabloları için "siunitx" sütun türleri ondalık sayıları hizalar ve birimi korur
başlıklar tutarlı. 'm/s' ve 'ms^{-1}'yi aynı kağıtta
Yöntemlerde belirtilen sebep.

## Dirac, vektörler ve kalın kurallar

Kuantum ve yoğun madde grupları sıklıkla Dirac notasyonuna ihtiyaç duyar. Gibi paketler
"\ket", "\bra", "\braket" için "fizik" veya özel makrolar geçici olarak yenilir
açıların kombinasyonları. Klasik mekanik grupları kalın ve ok arasında tartışıyor
vektörler. Sözleşmeyi giriş bölümünde belgeleyin ve geçici istisnaları reddedin
bölümün ortasında.

Bkz. [Dirac gösterimi](/learn/physics-braket/) ve [bold math](/learn/bold-math/).

Operatörleri bir kez tanımlayın (`\DeclareMathOperator`), böylece diferansiyel operatörler ve
adlandırılmış işlevler yazı tipinde kaymaz.

## Numaralandırma ve çapraz referanslar

Alıntı yapacağınız sayı denklemleri; gerisini numarasız bırakın. Bir sayfa
'(1)(2)(3)...' ifadesini okumak, iki etiketli satır içeren kısa bir anlatıyı okumaktan daha zordur.
Denklemler ve kararlı etiketler için \eqref'i kullanın. Proje çapında referans kontrolü
silinmiş bir etiketi danışmandan önce yakalar.

Teoremler ve lemmalar (eğer kullanıyorsanız) net bir numaralandırma şemasını paylaşmalıdır.
bölüm şablonunun geri kalanı. Ayrıca bakınız
[teoremler ve ispatlar](/learn/teoremler-kanıtlar/).

## İki sütunlu günlük tuzakları

APS, IOP ve benzer sınıflar kayan nokta davranışını değiştirir. İyi görünen bir figür
'makale'de, kendisini alıntılayan paragrafın yanına oturmayı reddedebilir. Derle
gerçek sınıfa erkenden karşı çıkın, teslimden önceki hafta sonu değil.

Yardımcı olan varsayılanlar:

- iki sütunda yaklaşık `0,45\textwidth` veya `\columnwidth` rakam genişliği
- 'şekil*' olarak geniş şekiller (genellikle yalnızca sayfanın üst kısmında)
- 'çoklu satır' / 'bölünmüş' biçimindeki uzun türetmeler veya bir eke taşınmış

Denklem yazı tipini okunmaz hale gelene kadar küçültmeyin. Gözden geçirenler fark eder.

## Şekiller: çizimler ve şemalar

Mümkün olduğunda grafikleri matplotlib/gnuplot/Root'tan PDF olarak dışa aktarın. Raster PNG'ler
fotoğraflar ve dedektör görüntüleri için yeterli dpi'de. Şemalar TikZ veya olabilir
harici vektör resmi; kaynağı depoda tutun. Öndeki boşlukları kırp
`\includegraphics`.

## Laboratuvar ağı kesildiğinde çevrimdışı

Işın hatları ve temiz odalar istikrarlı Wi-Fi ile bilinmemektedir.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) şunları gönderiyor:
derleyicileri destekler ve SyncTeX'i, PDF çalışma alanını ve matematik önizlemesini yerel tutar. Her
proje otomatik kontrol noktalarına sahip gerçek Git'tir, bu nedenle hatalı bir denklem düzenlemesi bir sorundur
geri yükleyin. Bir tarayıcı düzenleyicisi yüklenmediğinde PDF yine de oluşturulur.

TeX Live, PDF görüntüleyici ve Git by ile benzer bir çevrimdışı yığın oluşturabilirsiniz.
el. Her iki durumda da tezin yeniden derlenmesi için sabit bir portala bağlı olmamalıdır
üçüncü bölüm.

## İşbirliği

Mümkün olduğunda yazara göre kendi bölümleri. Bir notasyon sayfası paylaşın. Tam belgeyi çalıştır
haftalık olarak derlendiğinden bölümler arası referanslar erkenden başarısız olur. Şunun için özel Git uzaktan kumandası:
yayınlanmamış sonuçlar; yalnızca işbirliği politikasının izin verdiği durumlarda halka açıktır.

## Ekler ve tamamlayıcı materyal

Uzun türetmeler ve ekstra grafikler bir ekte veya ayrı bir ekte yer almaktadır.
Dergi iki sütunlu ve sayfa sınırlı olduğunda PDF. Açıkça çapraz referans
("Ek B'ye bakınız") gerçek etiketlerle. Hakemin fermuarı açacağını düşünmeyin
başlıksız gevşek rakamlardan oluşan.

## Danışman kağıt üzerinde düzenleme yaptığında

Mümkünse aynı gün TeX kaynağına işaretleme uygulayın. Kağıt yığınları bayatlıyor.
Eğer iki danışman çelişkili notasyonu işaretlerse, önsöz sayfasını güncelleyin ve bir
tek sayfalık notasyonlu PDF, böylece argüman her taslakta yeniden dava edilmez.

## Ön başvuru

Gösterim sayfası tamamlandı, vektörler ve sütyenler/ketler tutarlı, birimler tek sistem üzerinden
("siunitx" veya üzerinde anlaşmaya varılan bir manuel stil). Bölümler temiz bir şekilde içermelidir
`\ref`/`\eqref` çözümleniyor. Gerçek dergiyi veya tez sınıfını yazı tipi olmadan derleyin
sürprizler. Şekiller dpi ve renk kurallarına uygundur; altyazılar tek başınadır. Arşiv
Gönderilen sürüm için kaynak ve taahhüt karması içeren PDF.

Fizik yazmak yeterince zordur. Alet zinciri sıkıcı kalmalı.