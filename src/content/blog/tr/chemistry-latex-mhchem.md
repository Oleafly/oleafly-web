---

title: "LaTeX'teki kimya kağıtları: formüller, şemalar ve SI birimleri"
description: "Kimya ve kimya mühendisliği öğrencileri için mhchem ile reaksiyonlar, yapılar, deney tabloları, SI birimleri, bibliyografyalar ve özel taslaklar."
date: 2026-06-22
tags: [chemistry, research]
---

Kimyagerler genellikle iki nedenden dolayı LaTeX'te yer alıyor: dergi ısrar ediyor:
veya bir ortak çalışan zaten bu şekilde çalışıyor. Her iki durumda da ağrı noktaları görünüyor
tanıdık: reaksiyon şemaları, izotop etiketleri, durum tabloları ve
dergiler ve patentlerle dolu bibliyografya.

Bu kılavuz, ilk dergi gönderimlerine kadar olan lisans raporlarını kapsar. Olacak
karmaşık doğal ürünler için ChemDraw'ın yerini almaz. El yazmasını saklayacak
ve derleyiciyle mücadelenin deneysel bölümü.

## mhchem ile reaksiyonlar

'mhchem' formüller ve reaksiyonlar için olağan cevaptır:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Sürüm 4'ü sabitleyin, böylece sözdizimi ortak yazarlar arasında veya Arka Sayfa arasında kaymaz
ve yerel bir TeX kurulumu. Daha uzun izlenecek yol:
[kimyasal formüller](/learn/chemistry-notation/).

Reaktiflerin okun üstünde ve altında olduğu çok adımlı şemalar, birden fazlasına ihtiyaç duyar.
satır içi '\ce'. mhchem formülleri yönetir; düzen genellikle bir günlük şeması ister
çevre veya harici bir figür. Yirmi adımlık toplam sentezi tıka basa doldurmayın
bir dizi hat içi kimya hattına aktarın.

## Yapılar: chemfig veya harici çizimler

'chemfig' saf TeX'te basit yapılar çiziyor ve her şeyi saklıyor
vektör-yerel. Karmaşık doğal ürünler neredeyse her zaman ChemDraw'dan daha iyidir,
Marvin veya benzeri, PDF'ye aktarılır, ardından `\includegraphics`. Vektör PDF'yi tercih edin
bir ekran görüntüsü PNG üzerine, böylece bağ çizgileri baskıda ve iki sütunda keskin kalır
düzen.

Dosyaları bileşik kimliğe göre adlandırın (`cmpd-12.pdf`). Düzenlenebilir ChemDraw kaynağını koruyun
git yalnızca makaledeki PDF'yi tutsa bile laboratuvar arşivinde.

## Deneysel bölümler ve uzun tablolar

Durum tabloları (sıcaklık, solvent, verim, katalizör yükleme) iyi çalışıyor
sayısal sütunlar için "booktabs" ve genellikle "siunitx" ile:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Bir tablo bir sayfadan daha uzun sürüyorsa son tarihten önce 'uzun tablo'ya geçin
Hafta, derginin 7pt yazı tiplerinden şikayet etmesinden sonra değil. Başlık şunu söylemeli
"verim"in ne anlama geldiğini (izole edilmiş, NMR, GC) dolayısıyla okuyucular tahmin edemez.

## Birimler ve spektroskopi parçacıkları

Bir birim stili seçin ve ona bağlı kalın: "siunitx" veya grup ise manuel "\mathrm"
bu konuda zaten anlaştık. Deneysel bölümlerdeki NMR ve HRMS parçacıkları
genellikle dikkatli aralıklarla düz metin. Kırılgan bir makro dili icat etmeyin
Laboratuvar zaten bir tane paylaşmadığı sürece makalenin ortasında.

Önemli rakamları dizüstü bilgisayarın yaptığı gibi raporlayın. LaTeX mutlu bir şekilde yazdıracak
yazarsanız yanlış kesinlik.

## Şemalar ve rakamlar

Pek çok kimya dergisi şemaları (tepkileri) şekillerden (grafikler, grafikler) ayırır.
ORTEP, spektrum). Günlük sınıfının gönderdiği ortamları kullanın ("şema",
`figure`) yani numaralandırma üretimle eşleşir. '\ref' ile çapraz referans ve kararlı
etiketler (`sch:reduction`, `fig:ortep-1`).

## Taslağın güvenliği

Yayınlanmamış rotalar ve endüstriyel iş ortakları, yalnızca bulutta çalışan editörleri
politika sorusu, yalnızca kolaylık sorunu değil. '.tex' ve rakamların tutulması
Git ile diskteki sıradan dosyalar yararlı bir şekilde sıkıcıdır.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) yerel bir
araştırma editörü: paketlenmiş derleyiciler, proje çapında referans ve alıntı kontrolleri, çevrimdışı
yalnızca düzyazıda yazım ve dilbilgisi (bu nedenle `\ce' ve alıntı anahtarları olarak işaretlenmez)
"yazım hataları"), gerçek Git kontrol noktaları, yalnızca onay yoluyla düzenleme yapan isteğe bağlı yapay zeka
farklar. Hesap yok. Taslağın var olması için üçüncü taraf bir düzenleyiciye ihtiyaç yoktur.
Ağ, paketler, alıntı arama veya bunları açarsanız yapay zeka içindir.

## Doğru birincil literatürden alıntı yapın

Kimya bibliyografyaları ağırlıklı olarak dergilere ve patentlere dayanır. Zotero'dan dışa aktar
veya EndNote'u stabil anahtarlarla bir `.bib'e koyun, ardından eksik alanları doğrulayın
gönderim: [BibTeX doğrulayıcı](/tools/bibtex-validator/). Boş kaynakçalar
neredeyse her zaman bir yol veya arka uç hatasıdır, alıntıların kaçırılması değildir.

Dergi stilleri farklılık gösterir (ACS, RSC, Springer). Kaynakça stilini kullanın
şablonla birlikte gönderilir. Sayısal yılı ve yazar yılını bir arada yapıştırmayın
önsöz.

## İşbirliği

Yapabildiğiniz zaman kişilere göre bölümlere sahip olun. Bir kişi ".bib"in sahibidir. katılıyorum
mhchem sürümünü ve yapı-dışa aktarma biçimini önceden belirtin. Birkaç deneme yapıldığında
bölümler paralel olarak büyür, tam PDF'yi her hafta derleyin, böylece entegrasyon
sürprizler erken ortaya çıkıyor.

## Başvuru öncesi kontrol listesi

Son bir geçişe değer:

- mhchem sürümü sabitlendi; formüller, bulunduğunuz uyarılar olmadan derlenir
  görmezden gelmek.
- Yapılar mümkün olduğunca vektöreldir; bileşik kimlikler metin, şemalar ve
  ve SI.
- Tablolar üç kurallı stili kullanır; birimler tutarlı; başlıkta tanımlanan getiriler
  veya notlar.
- Şema/şekil numaralandırması günlük sınıfıyla eşleşir.
- `.bib' doğrulandı; stil şablonla eşleşir.
- Hassas rotalar, laboratuvarla eşleşen erişim kontrolüne sahip yerel bir klasörde kalır
  politika.

## SI ve günlük kontrol listeleri

Pek çok kimya dergisi yazar kontrol listeleri (grafik çözünürlüğü, TOC) yayınlar.
grafik boyutu, bileşik karakterizasyonu). Çizim yapmadan önce bu PDF'ye göz atın
şemalar. Yanlış TOC grafiği en boy oranı bir yönetici için aptalca bir nedendir
reddedilme.

## Destekleyici bilgiler

SI'nın genellikle kendi şablonu veya başlık kuralları vardır. SI kaynaklarını aynı tutun
net dosya adlarıyla ana kağıt olarak repo. Günlük tam olarak gerektiğinde
karakterizasyon, ana metindeki her bileşik sayının gerçekte olup olmadığını kontrol edin
SI'da görünür.

Kimya biçimlendirmesi karmaşıktır çünkü nesneler yoğundur. Tepkileri alın
ve tablolar sağda ve deneysel bölüm dikkatli bir çalışma gibi görünüyor,
bir not defteri PDF'sinden yapıştırın.