---

title: "İlk arXiv ön baskınızı yayınlama"
description: "Onay, kategoriler, kaynak temizliği, lisanslar ve duyuru döngüsü."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# İlk arXiv ön baskınızı yayınlama

arXiv'de yayınlamak çalışmanızı herkese açık, alıntı yapılabilir ve zaman damgalı hale getirir. Sürecin herkesi ilk seferinde şaşırtan birkaç tuhaflığı var. [arXiv nedir](/learn/what-is-arxiv/) okumadıysanız oradan başlayın ve sonra geri dönün.

## Onay: kapıdaki fedai

Çoğu kategorideki yepyeni başvuru sahiplerinin deneyimli bir arXiv yazarının onayına ihtiyacı vardır. Hesabınız akademik bir e-posta kullanıyorsa ve arXiv geçmişine sahip ortak yazarlarınız varsa, bu genellikle otomatik veya hızlıdır. Aksi takdirde danışmanınıza veya ortak yazarınıza sorun; sistem size bunları göndermeniz için bir onay kodu verir. Bunu bir gece değil, paylaşım yapmayı planladığınız günden günler önce halledin.

## Kategorilerinizi seçin

arXiv, 'cs.LG' (makine öğrenimi), 'cs.CL' (hesaplama ve dil), 'math.OC' (optimizasyon), 'stat.ML' gibi denetlenen kategoriler halinde düzenlenmiştir. Bir ana kategori ve isteğe bağlı olarak bazı ikincil kategorileri seçersiniz. Alıntı yaptığınız gazetelerin nerede yayınlandığına bakın ve onları takip edin. Birincil kategori, makalenizi hangi posta listesinin duyuracağını belirler, dolayısıyla onu ilk kimin göreceğine karar verir.

## arXiv PDF'nizi değil kaynağınızı istiyor

Bu büyük olan. Kağıdınız LaTeX ile üretilmişse arXiv yalnızca PDF'yi değil LaTeX kaynağını da gerektirir. AutoTeX sistemleri bunu sunucularında derliyor ve okuyucular bu yapıyı indiriyor. Sonuçlar:

- Makalenizin ihtiyaç duyduğu her dosya yüklemede bulunmalıdır: şekiller, `.bbl` dosyası (arXiv sizin için BibTeX'i çalıştırmaz, dolayısıyla oluşturulan `.bbl`yi ekleyin), standart olmayan stil dosyaları.
- Eğer sistemlerinde derlenmiyorsa derlenene kadar düzeltirsiniz.

## Önce kaynağınızı temizleyin

Yorumlarınız kaynağınızla birlikte gönderilir ve herkes onu indirebilir. 'Yapılacak işlerin yüzdesi: bu iddia doğru mu?' yazan taslak not kamuya açıklanacak. Yüklemeden önce:

- [ ] Yorumları kaldır. 'arxiv-latex-cleaner' aracı bunu otomatikleştirir ve kullanılmayan dosyaları da kaldırır.
- [ ] Kullanılmayan şekilleri ve eski bölümleri silin
- [ ] Utanç verici dosya adlarını kontrol edin (`final_v7_ACTUALLY_final.tex`)
- [ ] Temizlenen kopyayı bir kez sıfırdan derleyin

Git destekli bir projeden çalışmak burada yardımcı olur: Oleafly'de ZIP'i dışa aktarmadan önce bir kontrol noktasından ayrılabilir, kaynağı temizleyebilir ve hiçbir şeyin değişmediğini doğrulamak için orijinalden farklılaşabilirsiniz.

## Lisanslar

arXiv sizden bir lisans seçmenizi ister. Minimum yalnızca arXiv lisansı ortak varsayılandır ve günlüklerde seçeneklerinizi açık tutar. CC BY daha hoşgörülüdür. Makale belirli bir yayıncıya gidiyorsa, geri alınamaz bir şey seçmeden önce yayıncının baskı öncesi politikasını kontrol edin.

## Duyuru döngüsü ve folkloru

arXiv, yeni makaleleri toplu olarak, hafta içi sabit bir programa göre ve son teslim tarihiyle duyurur. Kesintinin hemen ardından gönderilen makaleler bir sonraki listenin en üstünde görünür ve küçük bir folklor endüstrisi, listenin en üstünde yer alan makalelerin daha fazla ilgi gördüğünü iddia eder. Belki. Bunun yüzünden uykunuzu kaybetmeyin; İyi bir özet, liste konumundan çok daha önemlidir.

## Sürümler: v1, v2 ve kabul sonrası

İlk gönderiniz v1'dir ve kalıcıdır: sürümler ekleyebilirsiniz ancak bunları asla silemezsiniz. Gerçek iyileştirmeler elde ettiğinizde v2'yi yayınlayın; genellikle [akran değerlendirmesi](/learn/peer-review-explained/) sonrasında kabul edilen sürüm. Kabul edildikten sonra arXiv kopyasını kameraya hazır içerikle güncelleyin (yayıncının politikasına saygı göstererek) ve dergi referans alanına DOI'yi veya yeri ekleyin. Okuyucular bunun için size teşekkür edeceklerdir.