---

title: "Overleaf'te geçirilen yıllar, ardından yerel bir araştırma çalışma alanı"
description: "Overleaf işbirliğine dayalı LaTeX'i ana akım haline getirdi ve ücretsiz hesaplar hâlâ ortak çalışmaları, geçmişi, yapay zekayı ve derleme süresini ölçmeye devam ediyor. Tarayıcının zayıf kaldığı yer (özgeçmişler, çatallar, dışa aktarma, çok motorlu çalışma) ve diskinizdeki ücretsiz yerel çalışma alanının doldurduğu yer."
date: 2026-07-31
tags: [overleaf, migration, local-first, research-workspace, free, open-source]
---

Yıllar boyunca "LaTeX'i nasıl başlatabilirim?" sorusunun varsayılan yanıtı [Overleaf](https://www.overleaf.com/) idi. Bir bağlantı paylaşın. Ortak yazarın imlecini izleyin. Bulutta derleyin. Bu rampa gerçek. Çok oyunculu kağıt sprintleri için hala öyle.

Bir tez için, bir iş piyasası paketi için ya da uzun bir kişisel yeniden yazım için orada yaşamaya başladığınızda, ücretsiz ürün size küçük gelmeye başlar. Bir işbirlikçi. Geçmiş saatlerle ölçülür. AI günlük olarak sayılır. Zaman aşımlarını derleyin. Git ve tüm geçmiş, ücretli planların veya ayrılırken kaybettiğiniz kampüs lisansının arkasında yer alır. Tarayıcı, paylaşılan ara belleğe sahip bir tarayıcı olma konusunda mükemmeldir. Hiçbir zaman tam bir araştırma çalışma alanı olarak inşa edilmedi: ATS kontrolleriyle özgeçmişler, proje çatallama, çok formatlı dışa aktarma, LaTeX'in yanında Typst, çevrimdışı haftalar, sınırsız yerel tarih.

Overleaf'in hala açık sekmeyi kazandığı, ücretsiz katmanın ve ürün kapsamının tükendiği ve bu düz dosyalar bir kez indirdiğiniz ücretsiz bir masaüstü uygulamasında ([Oleafly](https://github.com/Oleafly/Oleafly)) yer aldığında nelerin değiştiği buradadır.

## Overleaf'teki hangi yıllar sana gerçekten kazandırdı

**Hala geçerli olan artıları**

- Gerçek zamanlı çok kullanıcılı düzenleme, yorumlar ve sohbet; "bu gece üç kişi, bir özet" için hala en iyi seçenek
- Yalnızca bir bağlantıyı açacak bir ortak yazar için sıfır kurulum
- Büyük şablon galerisi ve yayıncı / kurumsal kas hafızası
- Kampüs SSO'su ve ücretli özelliklerin kampüsteyken kendinizi özgür hissetmesini sağlayan site lisansları
- Görsel/Kod geçişi ve alana "çevrimiçi LaTeX"in ne anlama geldiğini öğreten bir cila

**İnce kaldığı yer (özellikle serbest)**

Yayınlanan bireysel planlar ([Arka sayfadaki fiyatlandırmayı](https://www.overleaf.com/user/subscription/plans) yeniden kontrol edin; sayılar değişiyor):

| Ücretsiz | Ücretli / kuruluş |
| --- | --- |
| **1 ortak çalışan** proje başına | 10 (Öğrenci/Standart) veya sınırsız (Pro) |
| **5 AI kullanımı/gün** | Daha yüksek metreler; ücretli olarak tam Asistan; Pro = maksimum AI |
| **Temel derleme zaman aşımı** | **24×** temel zaman aşımı |
| **Geçmiş: son 24 saat** | Tüm geçmiş |
| Entegrasyonlar (Git/GitHub, Dropbox, Zotero/Mendeley, …) | Birçok planda premium |
| Öğrenci ~$8–10/ay · Standart ~$17–21/ay · Profesyonel ~$33–42/ay · üniversiteler: satış ekibiyle iletişime geçin | |

Yani ücretsiz katman, çoğunlukla solo bulut çalışmaları için gerçek bir düzenleyicidir. İkinci bir ortak yazara, geçen ayın sürümüne, daha uzun derlemelere veya beşten fazla yapay zeka uyarısına ihtiyaç duyduğunuz anda bir demoya dönüşür.

Ödeme duvarıyla ilgili olmayan ikinci bir incelik daha var: Ürünün ne işe yaradığı. Overleaf, bir tarayıcıda işbirliğine dayalı LaTeX belgeleri için optimize eder. Aşağıdakiler için bir yer olarak daha zayıftır:

- Çatal ve kökene sahip bir makale, tez, poster ve özgeçmiş portföyüne sahip olun
- Aynı projeyi diğer araçları kullanmadan Word, HTML, Markdown, PowerPoint (Beamer), EPUB'a aktarın
- Bir iş başvurusu elinizden çıkmadan önce ATS / erişilebilirlik ön kontrolünü çalıştırın
- Typst ve Markdown'ı LaTeX'in yanında tek bir kitaplık ve bir Git modeli altında tutun
- Bir uçakta veya kilitli hastane ağında çevrimdışı çalışın
- Her düzenlemeyi bir onay farkı olarak kullanarak yapay zekayı kendi anahtarınızla veya yerel modelinizle kullanın
- Geçmişi bir terminalde sonsuza kadar açabileceğiniz gerçek Git olarak değerlendirin

Bunlar araştırma masası sorunları. Arka sayfa ilk olarak çok oyunculu oyun için optimize edildi; masanın geri kalanı asla aynı ağırlığa sahip olmadı.

## Kağıt yazımı: her iki taraf

**Arka sayfa.** Paragrafın ortasında bir kağıt taslağını paylaşmak sorunsuzdur. Yorumlar dokümanda yayında. Git'e asla dokunmayacak gruplar için ürünün tamamı budur. Editör yetkilidir. Önizleme çoğu makale için iyidir. Lisans öğrencisi için TeX Live'ı kurmak zorunda olan kişi asla siz değilsiniz.

**Kağıt yazmanın hala acı verdiği yer.** Tam bir dizin etrafında oluşturulmuş bir masaüstü araştırma editörünün yanında proje çapında zeka sınırlıdır: bölümler arasında bir makroyu yeniden adlandırın, '\cref'i ve çok anahtarlı alıntıları canlı kontrol edin, görünümleri 200 sayfalık bir ağaç üzerinde yapılandırın, siz yazarken KaTeX önizlemeleri, '\komutları' göz ardı eden dilbilgisi. Ücretsiz derleme zaman aşımları karmaşık tezleri ısırır. Özgür tarih bir gün sonra buharlaşır. Bir depoyu çatalladığınız gibi, bir gönderim versiyonunu bir deneme dalına gerçekten çatallayamazsınız; bir projeyi bulutta kopyalarsınız ve hangisinin hangisi olduğunu hatırlayacağınızı umarsınız.

**Yapraklı tarafı.** Kağıt, diskteki çok dosyalı bir projedir. Proje genelinde tanıma gitme, referanslar, yeniden adlandırma, canlı referans/alıntı teşhisi (karmaşık `\eqref` / `\cref` ailesi dahil), yapı görünümleri, gerçek argüman şekilleriyle tanımladığınız makrolar için tamamlamalar, mümkün olduğunda TexLab/Tinymist, canlı matematik önizlemeleri, yalnızca düzyazıda çevrimdışı Harper + Hunspell. Eskimeye karşı dayanıklı SyncTeX, formalara ve çıkarılabilir pencereye sahip PDF çalışma alanı. İnsanileştirilmiş hatalarla CPU'nuzda otomatik derleme. Kitap ölçeğinde CI (~6.200 satır) editörün test edilme şeklidir.

**İnsanlar genellikle bunu nasıl bölerler?** Canlı birlikte yazma, Overleaf'te kalır. Derin çoklu dosya yazma, çevrimdışı haftalar, sınırsız yerel derleme ve geçmişi yerel olarak taşıma. Pek çok kişi her ikisini de aynı düz dosyalarda yapıyor.

## Makinelerin okuduğu özgeçmişler ve belgeler

Arka sayfada bir özgeçmiş sınıfı derlenecektir. İş piyasası PDF'sini bir ürün olarak ele almak iyi olmayacaktır: ATS odaklı şablonlar, deterministik seçilebilir metin ve ayrıştırıcı tarzı bir ayıklamanın gerçekte ne gördüğünü (ad, bölümler, riskler) gösteren ve üzerinde işlem yapabileceğiniz puanları gösteren bir Ön Kontrol paneli. Web özgeçmiş oluşturucuları bu hikayeyi aylık bir ücret karşılığında satarlar ve SaaS'larında tuzak düzeni sağlarlar.

Oleafly özgeçmiş odaklı şablonlar, Ön Kontrol ve ücretsiz Git sunar; dolayısıyla "endüstri CV'si", "akademi CV'si" ve "arkadaşlık", "cv_final_v4" adlı üç bulut kopyası değil, tam geçmişi olan çatallanmış projelerdir.

Tek çıktınız paylaşılan bir makale ise bu bölümü atlayın. Başvuruları da aynı masadan gönderiyorsanız boşluğu çabuk fark edeceksiniz.

## Çatallama, klonlama, soy

Bulut "kopyalama projesi" mevcut. Araştırma masalarının istediği şey git çatalına daha yakın: tam tarih, görünür köken, kameraya hazır ağaca dokunmadan deney. Oleafly'nin kütüphanesi projeleri raftaki kitaplar gibi ele alıyor; fork projeyi ve Git geçmişini kopyalar; kartta soy gösterileri. GitHub push/pull yoluyla klon tarzı iş akışları ücretsizdir.

Arka sayfadaki ücretsiz geçmiş 24 saattir. Ücretli geçmiş daha iyidir; bu hala bir hizmet zaman çizelgesidir, hesabın ölmesi durumunda saklayacağınız bir repo değil.

## Dışa aktarma ve aktarma

Dergi portalları PDF ve genellikle kaynak zip dosyası ister. Özel dedektifler Word'ü istiyor. Kurs siteleri PDF istiyor. Konuşmalar slayt istiyor. Kitaplar EPUB istiyor. Overleaf'in dünyası öncelikle bulut LaTeX'ten PDF ve indirme kaynağından oluşuyor. Bu pek çok akademik alanı kapsıyor.

Oleafly'nin dışa aktarma menüsü bağlama duyarlıdır: Her zaman PDF ve kaynak zip; Yönetilen Pandoc aracılığıyla Word, HTML, Markdown, düz metin; Beamer'dan PowerPoint; Kitap benzeri projeler için EPUB; görüntü projeleri için PNG yollarını şekillendirin. Aslına uygunluk değişiklik gösterir (karmaşık LaTeX → DOCX konusunda dürüst olun), ancak yol uygulama içi ve ücretsizdir.

## AI, gün ışığında ölçüm cihazıyla

Arka sayfa ücretsiz: Günde beş AI kullanımı. Ücretli planlar sınırı yükseltir ve Asistanın kilidini açar. Kuruluşlar yapay zekayı herkes için devre dışı bırakabilir.

Oleafly: AI varsayılan olarak kapalıdır. Anahtarınız veya Ollama. Barındırılmak istediğinizde dokuz sağlayıcı. Aracı, günlükleri düzenleyebilir, derleyebilir, okuyabilir, PDF metnini kontrol edebilir, literatürde arama yapabilir. Her yazma bir onay farkıdır; silme işlemlerinin ayrı bir onaya ihtiyacı vardır; Önce Git kontrol noktası. Satır içi Ask-AI. Harici istemciler için MCP. Size jeton satmıyoruz.

Günlük sınır ve abonelik merdiveni veya kendi modelinizi getirin ve incelenebilir düzenlemelerle barındırılan kolaylık. Bir laboratuvara veya IRB'ye açıklayabileceğiniz güven modelini seçin.

## Çok motorlu gerçeklik

Overleaf bir LaTeX (ve arkadaşları) bulutudur. Tystt'in başka bir yerde kendi web hikayesi var. Markdown notları başka bir araçta da yaşıyor.

Oleafly, LaTeX (Tectonic), Typst ve Markdown'u tek bir kitaplıkta, yönetilen derleyicilerle, bir Git modeliyle ve bir PDF yüzeyiyle çalıştırır. Şablonlar motora göre filtrelenir. Bu farklı bir ürün şeklidir; araştırma masasıdır, başka bir LaTeX sekmesi değil.

## Çevrimdışı, gizlilik, sahiplik

Tarayıcı: ağ yok, editör yok. Taslaklar kendi şartları altında sunucularında yayınlanmaktadır. İhracat, (hesap erişimi, plan değişiklikleri, mezuniyet) bitene kadar kaçış yolunuzdur.

Yerel çalışma alanı: düz klasörler, gerçek Git, çevrimdışı düzenleme ve önbelleğe alınmış derlemeler, isteğe bağlı katı çevrimdışı mod. Oleafly hesabı yok. Ürün telemetrisi yok. İstediğiniz zaman paketler, alıntılar, barındırılan yapay zeka, GitHub ve güncellemeler için ağ.

## Overleaf'in hâlâ kazandığı yer

- Bu saatte çok kullanıcılı canlı yazma ve yorumlar
- Sıfır kurulumlu ortak yazarlar
- Kurumsal SSO ve "herkesin zaten Overleaf'i var"
- Varsayılan olarak bir bulut projesini açan yayıncı alışkanlıkları

Oleafly için canlı çok oyunculu oyun yol haritasında. O zamana kadar ortak çalışma yolu Git'tir veya canlı sprint için Overleaf'i ve son hafta için yerel uygulamayı kullanırsınız. Her şey düz dosyalar olduğundan, ileri geri geçiş yapmak bir geçiş projesinden ziyade sıkıcı bir altyapıdır.

## Ücretsiz yerel çalışma alanının öne çıktığı yer

- Tam editör derinliği (proje dizini, makrolar, yapı, matematik önizlemesi, düzyazıya uygun prova, dil sunucuları)
- Eskimeye karşı dayanıklı SyncTeX'e sahip PDF çalışma alanı
- Gerçek Git + ücretsiz GitHub senkronizasyonu + geçmişe sahip proje çatalı
- LaTeX'in yanında Tyst + Markdown
- Alıntı arama/yapıştırma/içe aktarma, diyagram oluşturucu, ön kontrol, çok formatlı dışa aktarma
- Onay farklarıyla anahtarlarınızın altında yapay zeka veya tamamen yerel
- Sonsuza kadar 0 ABD doları, AGPL, bir kez indirin

## Anlık görüntü tablosu

| | Arka sayfa ücretsiz | Arka sayfa ücretli / kampüs | Yapraklı |
| --- | --- | --- | --- |
| Maliyet | 0$'lık huni | Aylık 8$–42$+/ay veya site lisansı | **sonsuza kadar 0$** (AGPL) |
| Hesap | Gerekli | Gerekli | Yok |
| Gerçek zamanlı çok oyunculu | Evet (1 ortak çalışma ücretsiz) | Daha fazla işbirliği | Yol Haritası; bugün = Git |
| Tarih | 24 saat | Tam (plan) | Diskteki Tam Git |
| Git / GitHub | Premium | Premium | Dahili, ücretsiz |
| Derle | Sunucu, temel zaman aşımı | 24× zaman aşımı | Yerel, donanımınız |
| Çevrimdışı | Hayır | Hayır | Evet (önbelleğe alınmış paketler) |
| Motorlar | LaTeX'in ilk bulutu | LaTeX'in ilk bulutu | LaTeX + Typst + Markdown |
| Proje zekası | Tarayıcı düzeyinde | Tarayıcı düzeyinde | Tam çoklu dosya IDE derinliği |
| PDF / SyncTeX | Tarayıcı önizlemesi | Tarayıcı önizlemesi | Tam çalışma alanı + eski harita |
| AI | 5 kullanım/gün | Ölçülen / maks | Anahtarınız veya Ollama; onay farkları |
| Devam Et / ATS ön kontrolü | Kendin Yap | Kendin Yap | Dahili |
| Geçmişi olan çatal | Projeyi kopyala | Projeyi kopyala | Kütüphane çatalı + tam Git |
| İhracat | PDF + kaynak | PDF + kaynak | PDF, kaynak, DOCX, HTML, MD, PPTX, EPUB… |
| Şablonlar | Büyük bulut seti | Büyük bulut seti | 23 paket + 99 paket + özel |
| Veri ana sayfası | Sunucuları | Sunucuları | Diskiniz |

## Drama olmadan ikisini de denemek

1. Arka Sayfa kaynağını sıkıştırın.
2. Oleafly'yi şuradan yükleyin:
   [yayınlar sayfası](https://github.com/Oleafly/Oleafly/releases/latest).
3. İthalat; bir kez derleyin; Bir gün boyunca gerçek bir kağıda veya özgeçmişe yazın.
4. Hala ihtiyacınız olan herhangi bir canlı çok oyunculu oyun için Overleaf projesini saklayın.

Tektonik hala ağır yayıncı derslerine rastlayabilir; bunları bildirin; yol haritasını şekillendiriyorlar. ACM/IEEE/Elsevier tarzı makalelerin ve tezlerin çoğu iyidir.

## Kapanış

Overleaf on yılını kazandı. Ücretsiz çok oyunculu oyun, bu gece üç kişinin aynı paragrafa ihtiyacı olduğunda hâlâ sihir gibi geliyor. Sahiplik, derin düzenleme, çatallar, dışa aktarmalar, çok motorlu çalışma, sınırsız geçmiş ve kontrol ettiğiniz yapay zeka için ücretsiz bir yerel masa daha dürüst bir seçimdir. Oleafly'ı bir kez indirin, hala ihtiyacınız varsa Overleaf'i canlı sprintler için saklayın ve özellik matrisi yerine gerçek kağıtlardan karar verin.