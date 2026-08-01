---

title: "Tarayıcı projesi ve diskteki klasör"
description: "Yerel sahiplik, çevrimdışı çalışma ve gerçek Git ile karşılaştırıldığında bulut kolaylığı."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Tarayıcı projesi ve diskteki klasör

LaTeX yazmaya başladığınızda erken bir kararla karşı karşıya kalırsınız: projeniz başka birinin sunucusundaki bir tarayıcı sekmesinde mi yoksa kendi diskinizdeki bir klasörde mi yaşıyor? Her iki model de aynı PDF'yi üretir. Kaynağın kimin elinde olduğu, ağ çöktüğünde ne olacağı ve çevredeki araç zincirinin ne kadarını kontrol ettiğiniz konusunda farklılık gösterirler.

## Her modelin size sunduğu şey

| | Bulut (örn. Arka Sayfa) | Yerel (Oleafly, TeX Live) |
| --- | --- | --- |
| Kurulum | Anında, yüklenecek bir şey yok | Tek kurulum |
| Çevrimdışı | Sınırlı | Düzenleme her zaman işe yarar; derlemeler önbelleğe alınmış paketlerle çalıştırılır |
| Gizlilik | Sağlayıcı projelerinizi saklar | Dosyalar diskinizde kalır |
| Git | Bir senkronizasyon köprüsü aracılığıyla | Native, klasörde gerçek bir depo |
| İşbirliği | Gerçek zamanlı imleçler | Git, yamalar, paylaşılan klasörler |
| Maliyet | Ücretsiz katman artı abonelikler | Ücretsiz |

Bulut projesi, hizmetin sizin için oluşturduğu veritabanındaki bir satırdır. Yerel proje, bir dosya yöneticisinde açabileceğiniz, bir USB sürücüsüne kopyalayabileceğiniz, herhangi bir araçla arayabileceğiniz ve normal Git ile sürümünü kullanabileceğiniz bir dizindir. Bu fark, son teslim tarihi bir kesinti, ödeme duvarı değişikliği veya uçuşla çakışana kadar soyut görünebilir.

## Bulut doğru seçim olduğunda

Gerçek zamanlı ortak düzenleme, bulutun gerçek avantajıdır. Üç ortak yazarın son teslim tarihinden önceki son saat içinde aynı paragrafı yazması gerekiyorsa ve hiçbiri yazılım yüklemeyecekse, bir tarayıcı düzenleyici pratik cevaptır. Şu anda yerel hiçbir şey eşzamanlı imleçlerin yerini alamaz.

## Yerel doğru seçim olduğunda

Taslak hassas olduğunda veya yayınlanmadığında, uçaklarda veya kısıtlı ağlarda çalıştığınızda, rakamlarınız ve verileriniz büyük olduğunda veya bir abonelik katmanına bağlı olmayan sürüm geçmişi istediğinizde yerel kazanır. Yerel bir Git deposu, yarın herhangi bir hizmet mevcut olsa da olmasa da değişikliklerinizi kaydeder ve aynı klasör bir terminal, bir kod düzenleyici veya bir ortak çalışanın klonuyla çalışır.

Oleafly bu tablonun yerel tarafı için oluşturulmuştur: derleyici uygulamanın içinde gönderilir, projeler gerçek Git geçmişine sahip düz klasörlerdir ve isteğe bağlı yapay zeka kendi anahtarınızla çalışır. Daha uzun bir karşılaştırmayı [blogda](/blog/local-first-vs-cloud-latex-editors/) bulabilirsiniz ve dokümanlar GitHub aracılığıyla [iki modelin birlikte nasıl çalışabileceğini](/docs/why-oleafly/) kapsar.