---

title: "Yerel öncelikli ve bulut LaTeX editörleri: gerçekte neyle işlem yapıyorsunuz"
description: "Cloud LaTeX editörleri kolaylık sağlamak için mülkiyeti değiştirirler. Yerel öncelikli, diskteki dosyalar, gerçek bir araştırma editörü, gerçek Git, çevrimdışı çalışma ve yalnızca gerçekleştirdiğiniz eylemler için ağ ve ayrıca tarayıcıya ait olanlar anlamına gelir."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Cloud LaTeX editörleri basit bir nedenden dolayı kazandı: sıfır kurulum. Bir sekme açın, derleyin.
Yıllar boyunca bu, TeX dağıtımıyla mücadele etmenin en kolay yoluydu.
dizüstü bilgisayar ve birçok insan hala onu tercih ediyor.

Ancak kurulum artık çoğu belge için zor kısım değil. Gibi motorlar
Tectonic, bir masaüstü uygulaması içinde gönderilebilir ve talep üzerine paketleri çekebilir;
yükleme ve derleme işlemi yaklaşık olarak bir bulut hesabı oluşturmak için gereken süredir.
Sorulmaya değer soru, aboneliğin size hâlâ ne kazandırdığı ve ne satın alacağınızdır.
bunun için teslim ol.

## Bulutta nelerden vazgeçersiniz

Taslağınız başka birinin veri tabanında bulunuyor. Dışa aktarma genellikle şu ana kadar işe yarar:
planlar değişir, bir şirket satın alınır veya bir özellik kaybolur;
son tarih geçerliliğini koruyor.

Aktif olmayan şifreleme, dışarıdakileri dışarıda tutar. Hizmetin kendisi hâlâ görebiliyor
altyapısından geçen taslaklar, hibeler ve yayınlanmamış sonuçlar.

Gecikme başka bir sessiz maliyettir. Makinenizde gerçekleştirilen bir tuş vuruşu neredeyse
her zaman daha hızlı. Derleme kuyrukları ve ücretsiz katman zaman aşımları yalnızca
yapı senin değil.

Çevrimdışı ise diğer boşluktur. Uçuşta, hastane bodrumunda veya güvenli bir yerde
Açık ağa sahip olmayan bir laboratuvarda, tarayıcı düzenleyicisi yalnızca boş bir sekmedir.

Barındırılan bazı düzenleyiciler ayrıca tam geçmişi, değişiklikleri izlemeyi veya Git/GitHub senkronizasyonunu da ekler
ücretli katmanların gerisinde. Yerel Git hangi planı satın aldığınızla ilgilenmez.

## Hangi yerel öncelikli değişiklikler

Projeler, açabileceğiniz bir klasördeki düz dosyalardır. Tarih gerçek olabilir Git sen
herhangi bir terminalden inceleyin. Derleme CPU'nuzda sıra olmadan çalışır. Dosyalarınız
ve Git geçmişi satıcı hesabının sağlıklı kalmasına bağlı değildir.

Canlı çok kullanıcılı yazma hala tarayıcı araçlarının kazandığı yerdir. Çok fazla araştırma
haftalar farklı görünüyor: tek başına taslak hazırlama, seyahat, sınırlı ağlar, istemek
mülkiyet veya tüm projeyi indeksleyen tam bir belge düzenleyiciye ihtiyaç duymak.
Laboratuvarlar zaten kod için çekme isteklerini dallandırıyor ve açıyor. Makaleler aynısını kullanabilir
İmleci paylaşması gerekmeyen ortak yazarlar için eşzamansız model.

## Ağ hâlâ kuruluyor (kasıtlı olarak)

Yerel araçlar hâlâ ilk kullanım paketlerine, şablon paketlerine, alıntılara ulaşıyor
meta veriler, açarsanız barındırılan yapay zeka, Git uzaktan kumandaları ve güncellemeler. Önemli olan şu
varsayılan: taslak oluşturma ve önbelleğe alınan derlemeler diskte kalır.

Projeler, meta veriler, derlemeler ve Git geçmişi yerel olarak yayınlanır. Ağ ne zaman çalışır?
bunu gerektiren bir eylemde bulunursunuz. Düzenleme ve önbelleğe alınmış derleme çalışmalıdır
çevrimdışı. Bir DOI yapıştırın veya bir bulut modelini etkinleştirin; bu istekler gittiğiniz yere gider
onları hedef aldı. Rol yapmak yerine bunu herhangi bir gizlilik yazısında açıkça söyleyin
ağ asla gerçekleşmez.

## Bir kağıdın etrafındaki yığın

Bir araştırma haftası neredeyse hiçbir zaman "sadece bir editör" değildir. Genellikle aşağıdakilerin bir karışımıdır:

- gerçek proje zekasına sahip yazma ortamı
- TeX dağıtımı ve paket bakımı
- SyncTeX'li PDF görüntüleyici
- Git istemcisi ve uzak ana bilgisayar
- alıntı arama ve kaynakça hijyeni
- dilbilgisi ve yazım araçları
- diyagram veya şekil boru hattı
- son teslim tarihleri ve diğer yan araçlar

Yerel bir araştırma çalışma alanı, bu parçalar aynı yerde durduğunda faydalıdır
düz klasör projesi: projeyi tanıyan bir düzenleyici (refs, alıntılar, makrolar, yapı,
matematik önizlemesi, çevrimdışı prova), denetimli derleme, PDF çalışma alanı
eskimeye karşı dayanıklı SyncTeX, otomatik Git kontrol noktaları, içe ve dışa aktarma, ön kontrol
göndermeden önce, farkları göstermesi gereken isteğe bağlı aracı.

## Oleafly'nin sığdığı yer

[Oleafly](https://github.com/Oleafly/Oleafly) bu kategori için tasarlanmıştır: ücretsiz,
LaTeX, Typst ve Markdown için açık kaynaklı masaüstü çalışma alanı. Paketlenmiş
derleyiciler. Çatal ve arama özellikli proje kütüphanesi. Proje çapında düzenleyici
istihbarat (tanım, referanslar, yeniden adlandırma, canlı referans/alıntı kontrolleri, yapı
görünümler, argüman şekillerine sahip makrolarınız, mevcut olduğunda TexLab/Tinymist). Canlı
matematik önizlemeleri. Çevrimdışı Harper ve Hunspell yalnızca düzyazıda. Entegre PDF
Yeniden oluşturma beklemedeyken hala eşleme yapan çift yönlü SyncTeX. Gerçek Git ile
otomatik kontrol noktaları ve isteğe bağlı GitHub. Alıntı arama ve yapıştırma. Diyagram
Besteciden düzenlenebilir TikZ'ye. Ön kontrol. Anahtarınızla birlikte isteğe bağlı onay kapılı yapay zeka
veya yerel Ollama.

[Gizlilik sayfası](/privacy/) bilerek kısa kalıyor: Oleafly hesabı yok, hayır
ürün telemetrisi. Taslaklar makinenizde yayınlanır. Barındırılan yapay zeka, alıntı arama ve
GitHub, anahtarlarınız ve şifrenizle bu hizmetlerle kendi politikaları kapsamında konuşur.
eylemler.

Yüklemeden küçük bir tat istiyorsanız, [ücretsiz tarayıcı
araçlar](/tools/) istemci tarafında çalışır. Masaüstü uygulaması zekanın,
derleme, tarih ve proje ağacı aslında buluşuyor.

## Bulut hâlâ kazandığında

Ürün gerçek zamanlı birlikte yazma olduğunda tarayıcıda kalın.
ortak çalışan hiçbir şey yüklemeyecek veya kurumunuz zaten
gönderim için barındırılan bir editörde standartlaştırılmıştır.

Aracı gerçekte sahip olduğunuz haftayla eşleştirin. Canlı çok kullanıcıya ihtiyacınız varsa
yazarak, tarayıcıda kalın (veya ortak yazarlar eşzamansız çalışabildiğinde Git'i kullanın). eğer sen
Sahiplik, çevrimdışı derinlik ve tam yerel araştırma editörüne daha fazla önem verin,
Taslağı diskte dosyalar olarak saklayın, PDF'yi makinenizde oluşturun ve saklayın.
herhangi bir Git aracının açabileceği bir depodaki geçmiş.