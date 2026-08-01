---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Gerçekte karşılaşacağınız dört gönderim sistemine ilişkin bir saha rehberi."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

# HotCRP, EasyChair, OpenReview, CMT

Makaleniz konferansa gitmiyor. Bir gönderim sistemine gider: PDF'yi yüklediğiniz, meta verileri doldurduğunuz ve daha sonra incelemelerinizi okuduğunuz bir web sitesi. Tekrar tekrar karşılaşacağınız dört kişi var ve her birinin bir kişiliği var.

## Büyük dörtlü

| Sistem | Kişilik | Onunla şu adreste tanışacaksınız: |
|---|---|---|
| SıcakCRP | Hızlı, minimal, sistem insanları tarafından sevilen | Sistemler ve güvenlik konferansları (SOSP, USENIX) |
| Kolay Sandalye | Gazi. Faydalı, her yerde | Atölye çalışmaları, dünya çapında birçok bilgisayar bilimi konferansı |
| İncelemeyi Aç | Halka açık, incelemeler sıklıkla görünür | ML mekanları (ICLR, NeurIPS) |
| CMT | Microsoft'un beygir gücü, form ağırlıklı | Vizyon ve ML konferansları (CVPR) |

Hepsi aynı temel işi yapıyor. Farklılıklar ayrıntılarda yaşar. OpenReview incelemelerinizi dünyaya gösterebilir. HotCRP her yorum hakkında size e-posta gönderecektir. CMT'nin tıklanması on dakika süren bir konu seçme tablosu vardır.

## Hesabınızı erkenden oluşturun

Bunu son teslim tarihi gecesi değil, göndermeye karar verdiğiniz hafta yapın:

- [ ] Her gün kontrol ettiğiniz e-postayla hesap oluşturun
- [ ] Doğrulama e-postasının gerçekten ulaştığını onaylayın
- [ ] Ortak yazarların da hesapları olup olmadığını kontrol edin (OpenReview profillerinin yeni kullanıcılar için onaylanması günler sürebilir)
- [ ] Hangi alanların mevcut olduğunu öğrenmek için bir taslak gönderimi başlatın

Bu sonuncusu önemli. Bazı mekanlar sürpriz sorular sorar: etik beyanları, tekrarlanabilirlik kontrol listeleri, çatışma alanları. Onları bir hafta sonra keşfetmek daha iyi.

## Yalnızca PDF ve kaynak yükleme karşılaştırması

Çoğu mekan, gönderim sırasında bir PDF dosyası ister. Bazıları ve neredeyse tüm yayıncılar kamera hazırlığındayken LaTeX kaynağınızı da istiyor. Talep üzerine fermuarı kapatacak kadar projenizi düzenli tutun. Oleafly, kaynak ZIP'i doğrudan dışa aktarır; bu, tam olarak şekil gönderme sistemlerinin beklediği şeydir.

## Meta veri alanları

PDF'nin ötesinde aşağıdakileri doldurmayı bekleyin:

- **Başlık ve özet**, düz metin olarak. Herhangi bir LaTeX matematiğini kelimelerle veya Unicode olarak yeniden yazın.
- **Konular**, makalenizi hakemlere yönlendiren onay kutuları. Dürüstçe seç.
- **Çatışmalar**, sizi incelememesi gereken kişiler ve kurumlar: danışmanlar, yeni ortak yazarlar, meslektaşlar. Bunu yanlış yapmak incelemeyi geçersiz kılabilir; bu nedenle dikkatli olun.
- **Anonimlik onayı**, çift kör mekanlarda. Bkz. [çift-kör inceleme için anonimleştirme](/learn/anonymization-double-blind/).

## 11:59 etki alanı gerçekliği

Her son teslim gecesinde son saatte binlerce kişi başvuru yapıyor ve sistemler yavaşlıyor. Öğle yemeğinde saniyeler süren yüklemeler 23:50'de birkaç dakika sürer. Çözüm basit ve kimse bunu takip etmiyor: Çalışan bir sürümü erken gönderin.

## Son tarihe kadar güncelleme yapabilirsiniz

İşte özgürleştirici kısım: teslimiyet tek atış değil. Her büyük sistemde, son teslim tarihi dolmadan PDF'nizi istediğiniz kadar değiştirebilirsiniz. Bu nedenle, eksiksiz ama kusurlu bir versiyonu bir gün önce gönderin ve cilalamaya devam edin. Eğer ağ 11:58'de ölürse sistemde bir trajedi yerine gerçek bir teslimiyet söz konusu olur.

Gönderimden sonraki sonraki durak: diğer tarafta ne olduğunu anlamak, [akran değerlendirmesi, açıklandı](/learn/peer-review-explained/).