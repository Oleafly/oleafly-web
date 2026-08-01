---

title: "Panik olmadan kameraya hazır"
description: "Anonimliği kaldırın, finansman ekleyin, yazı tipleri ekleyin ve sayfa sınırına ulaşın: son sürüm kontrol listesi."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Panik olmadan kameraya hazır

Kabul edildi! Kutlamanın ardından son bir son teslim tarihi geliyor: kameraya hazır olmak. Bu ad, yayıncıların sayfalarınızı basılmak üzere fotoğrafladığı zamandan kalma bir kalıntıdır. Bugün bu, tam olarak okuyucuların sonsuza kadar göreceği şekilde, tutanaklara giren son versiyon anlamına geliyor. Bundan sonra hiçbir editör yazım hatalarınızı düzeltemez. O kısım sana düşüyor.

## Gönderim ve kameraya hazır olma arasında neler değişir?

Gönderdiğiniz sürüm incelemeciler için ayarlandı. Kameraya hazır, kalıcı kayıt içindir ve birçok şey tersine döner:

| Ürün | Gönderilen sürüm | Kameraya hazır |
|---|---|---|
| Yazar adları | Gizli (çift kör) | Gerçek isimler, bağlantılar, e-postalar |
| Teşekkürler | Atlandı | Finansman, hibeler, teşekkürler |
| Sayfa sınırı | Sınırı gözden geçir | Genellikle +1 sayfa, ancak tam olarak |
| Telif hakkı bloğu | Yer tutucu veya hiçbiri | Yayıncı bloğu, DOI, ISBN |
| Kendinden alıntılar | Üçüncü şahıs ("Smith ve diğerleri") | Can say "our prior work" |
| Çürütücü vaatler | Söz Verildi | Gerçekte teslim edildi |

Anonimleştirme, adları geri eklemekten daha fazlasıdır. Kimliğinizin etrafında yazdığınız her yeri kaynağında arayın; Her zamanki saklanma noktaları için [çift-kör inceleme için anonimleştirme](/learn/anonymization-double-blind/) konusuna bakın, ardından hepsini tersine çevirin.

## Yine tam sayfa sınırı

Kameraya hazır sınırlar yalnızca sandalyeler tarafından değil, yayıncılar tarafından da uygulanır ve ekstra içerik (yazar engellemesi, teşekkürler) yer kaplar. Aniden altı satırı aşıyorsanız, bunu dürüstçe yapın: boşluk komutlarını kötüye kullanmak yerine metni ve rakamları sıkılaştırın. Yayıncılar biçimlendirmeyi kontrol ettiğinden, [suç içermeyen sayfa sınırları](/learn/page-limits-without-crimes/) bölümündeki teknikler burada iki kez uygulanır.

## Yazı tipleri eklenmelidir

İnsanı ısıran da bu. Yayıncılar otomatik kontroller yürütür ve bir numaralı ret nedeni, genellikle bir çizim aracından dışa aktarılan bir şekil PDF'si tarafından gizlice içeri sokulan gömülü olmayan yazı tipleridir. 'pdffonts yourpaper.pdf' ile kontrol edin: her yazı tipinde "emb: evet" yazmalıdır. Aksi takdirde suçlu neredeyse her zaman bir figürdür; yazı tiplerini gömülü olarak veya düzgün oluşturulmuş bir PDF olarak yeniden dışa aktarın.

## Son düzeltme: önce referanslar

Referanslar entropinin yoğunlaştığı yerdir. Yüklemeden önce:

- [ ] HAYIR "??" günlükte alıntılar veya tanımlanmamış referanslar
- [ ] Her bibliyografya girişinin yeri, yılı ve doğru şekilde yazılmış başlığı vardır
- [ ] Yazar adlarının doğru yazılması (insanlar kendi adlarını fark ederler)
- [ ] yalnızca arXiv'e ait alıntılar, mevcut oldukları yerlerde yayınlanmış sürümlere güncellendi
- Referanslardaki [ ] URL'ler hâlâ çözümleniyor

Daha sonra makalenin tamamını bir kez yüksek sesle okuyun. Yavaştır ve işe yarar.

## Kaynak yükleme tuhaflıkları

Çoğu yayıncı yalnızca PDF'yi değil, LaTeX kaynağınızı da ister ve derleme sistemleri seçicidir: ".bbl"yi dahil edin, standart olmayan paketlerden kaçının, dosya düzenlerini takip edin. Temiz bir kaynak ZIP dosyasını dışa aktarın (Oleafly bunu tek adımda yapar) ve yüklemeden önce boş bir klasörde sıfırdan test derleyin. Yalnızca makinenizdeki başıboş bir dosya nedeniyle oluşuyorsa yayıncının sistemi bunu öğrenecektir.

## Tek oturumluk kontrol listesi

- [ ] İsimler, bağlantılar, e-postalar geri yüklendi ve düzeltildi
- [ ] Teşekkür ve finansman numaraları eklendi
- [ ] Yayıncının e-postasından yapıştırılan telif hakkı bloğu / DOI bilgisi
- [ ] Sayfa sınırına tam olarak ulaşıldı
- [ ] `pdffonts` gömülü tüm yazı tiplerini gösterir
- [ ] Referansların düzeltmeleri
- [ ] Temiz kaynak ZIP sıfırdan derlenir
- [ ] Kalan bir günle birlikte yüklendi

Daha sonra kalıcı olarak yapılır. [Sunumunu](/learn/sunum-your-paper/) hakkında düşünmenin zamanı geldi.