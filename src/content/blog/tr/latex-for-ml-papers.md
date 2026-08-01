---

title: "Notasyon karışıklığı olmadan makine öğrenimi makaleleri için LaTeX"
description: "Gösterim sayfaları, ablasyon tabloları, algoritmalar, eğitim çalışmalarından rakamlar ve ilk arXiv taslağından kameraya hazır hale gelene kadar kağıdın yanında Git."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Çoğu makine öğrenimi makalesi LaTeX'te aynı şekilde başarısız oluyor: üçüncü sayfada matematik gayet iyi ve
on ikinci sayfaya göre tutarsız. Kayıp bir bölümde 'L', diğer bölümde '\mathcal{L}' olur
bir diğeri ve kalın vektörler yalnızca yazar hatırladığında görünür. İnceleyenler
Bu konuda yorum yapmasalar bile dikkat edin.

Bu, atölye çalışmaları ve konferans makaleleri yazan öğrenciler için pratik bir kılavuzdur.
gönderimler ve DNA'yı eğitim koduyla paylaşan tez bölümleri.

## Birinci günde bir not sayfası seçin

İlgili çalışmayı yazmadan önce yirmi satır makro yazın:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Bu bloğu her ortak yazar dalına yapıştırın. Bir model yeni bir sembol icat ettiğinde,
önce sayfaya ekleyin, sonra kullanın.
[AI takip notasyonu dersi](/learn/ai-follow-notation/) ile aynı fikirdir
döngüdeki dil modeli: model yazı tiplerini icat etmek yerine sayfaya uymalıdır.

Bir araştırma düzenleyicisindeki canlı matematik önizlemesi, o `\mathcal{L}` ve
Siz yazarken 'L' aynı nesne değildir.

## Kameraya hazır durumdaki masalar

Ablasyon tabloları sayfadan düşene kadar büyür. Hayır ile "booktabs"ı tercih et
dikey kurallar, hizalanmış ondalık sayılar için "siunitx" ve sayıları belirten bir başlık
metrik ve bölünme (ImageNet, CIFAR, alan içi vs OOD). Tablo genişliyorsa
sayfalarda yazı tipini 7 puntoya küçültmek yerine 'longtable'ı erken kullanın.

Bir görsel oluşturucu ilk taslağa yardımcı olur:
[tablo oluşturucu](/tools/table-generator/) tarayıcıda çalışır. Final masası
Yine de başlıkta metriği adlandırmalı ve ±'yi std veya se olarak tanımlamalıdır.

Mekan izin verdiğinde ek tablolarda çekirdekleri ve hiperparametre aralıklarını rapor edin.
Ana tablolar taranabilir kalır.

## Algoritmalar ve listeler

Sözde kod tek uzaya değil, "algorithm2e" veya "algorithmicx"e aittir
paragraf. Gerçek eğitim parçacıkları "listelere" veya "basılmış" bir yere aittir.
Gözden geçirenlerin göz atabilmesi için dil ayarı. Ana kağıdı kısa tutun; tüm yapılandırmaları koy
ekte veya taahhüt karması içeren bir repo bağlantısında.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Alıntı yaptığınız sayı algoritmaları. Beş sayfalık PyTorch'u PDF'ye aktarmayın.

## TensorBoard ve matplotlib'den rakamlar

Mümkün olduğunda PDF veya SVG'yi dışa aktarın. 300dpi'deki raster PNG'ler kullanıcı arayüzü için uygundur
ekran görüntüleri, çizgi grafikleri için değil. `\includegraphics` önündeki boşlukları kırpın. Eğer bir
şamandıra bir sonraki bölüme kaçar, "[H]" ile mücadele etmeden önce boyutu ve yerleşimi düzeltir
bir saat boyunca: [kayan yerleşim](/learn/figure-wrong-position/).

Çok panelli ablasyonlar: "alt başlık" ile TeX'te oluşturun veya harici olarak oluşturun ve
bir PDF ekleyin. Şekiller arasında "bizimki" için tutarlı bir renk tutun, böylece skimmer'lar
Efsaneyi bir kez öğrenin.

## İki sütunlu konferans sınıfları

NeurIPS, ICML, ICLR ve CVPR tarzı sınıflar, marjları ve kayan kuralları değiştirir.
Resmi sınıfa karşı erkenden derleyin. Sayfa sınırları gerçektir; ezme
yazı tipleri. Provaları ve ekstra ablasyonları şu durumlarda eke veya ek PDF'ye taşıyın:
çağrıya izin verir.

## İlgili çalışmalar ve alıntılar

Sabit alıntı anahtarları kullanın ve Scholar'dan temiz aktarımlar yapın. '.bib'i doğrulayın:
[BibTeX doğrulayıcı](/tools/bibtex-validator/). Kod ve veri kümelerini belirtin
bağlıdır. Yazar yılı ve sayısal karşılaştırması mekana bağlıdır; şablonu kullan
tarz, melez değil.

## Git kağıdın yanında

Her mimari değişikliği, adlandırabileceğiniz bir taahhüt olmalıdır. Kağıdı işleyin ve
kod aynı proje gibi, iki ayrı yedekleme alışkanlığı değil.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) makaleyi saklıyor
canlı matematik önizlemesine sahip, projeye duyarlı bir düzenleyicinin yanındaki gerçek bir Git deposunda,
dosyalar arası referanslar, alıntı tamamlama ve SyncTeX PDF. Bu, ML kodunun nasıl olduğuyla eşleşiyor
zaten yaşıyor. Unuttuğunuzda onu [kopya kağıdı](/learn/cheatsheet/) ile eşleştirin
bir son tarih altında sözdizimi.

OpenReview veya CMT yüklemesiyle eşleşen taahhüdü etiketleyin. Onu isteyeceksin
çürütme sırasında.

## Çürütücü ve kameraya hazır

Çürütme pencereleri kısadır. "Çürütme deneyleri" için bir dal veya klasör tutun
böylece gönderilen PDF kaynağını kirletmezsiniz. Kameraya hazır genellikle
ekstra sayfa; Bunu her başarısız çalıştırmayı boşaltmak için değil, netlik sağlamak için kullanın.

## Daha geniş etki ve sınırlamalar

Mekan kısa bir sosyal etki veya sınırlama paragrafı gerektirse bile,
sade bir dille yazın. LaTeX belirsiz bir paragrafı kaydetmez. Negatif koy
Ana sayfa sınırı sıkıysa ekte geride kalabileceğiniz sonuçlar,
ve ana metinde bunu yaptığınızı söyleyin, böylece inceleyenler bunları sakladığınızı varsaymazlar.

## Yüklemeden önce

Gösterim sayfasının bölümler arasında tutarlı olup olmadığını kontrol edin; ana tablolar
adlandırılmış ve tanımlanmış metriklerle okunabilir ve algoritmalar ve şekiller alıntılanmıştır
sırayla. Resmi sınıfın yazı tipi olmadan sayfa sınırı dahilinde derlendiğini onaylayın
suçlar için, `.bib` kod ve belirtilen verilerle temizdir ve bir taahhüt karması
yüklenen PDF için kaydedildi.

Makine öğrenimi deneyleri zaten yeterince gürültülü. Gösterimi ve tabloları sessiz tutun.