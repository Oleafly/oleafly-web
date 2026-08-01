---

title: "Kaynağa beyaz tahta fotoğrafı"
description: "Endeksleri gözle kırpın, OCR veya multimodal, derleyin, düzeltin."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Kaynağa beyaz tahta fotoğrafı

Beyaz tahtada bir türetme, taranmış bir ders notları sayfası, kopyalayamayacağınız bir PDF'deki bir denklem: matematiğin LaTeX'e elle yeniden yazılması yavaştır ve hataya açıktır. Modern araçlar bunların çoğunu bir fotoğraftan yapabilir. Dönüşüm şu anda gerçekten iyi, ancak çıktıyı bitmiş bir transkripsiyon olarak değil, taslak olarak değerlendirin. Aşağıdaki iş akışı bunun etrafında oluşturulmuştur.

## Daha iyi bir fotoğrafla başlayın

Görüntü kalitesi, sonucu araç seçiminden daha fazla belirler. Çarpık taban çizgileri alt ve üst simgeleri belirsiz hale getirdiğinden, belirli bir açı yerine doğrudan çekim yapın. Tahtada parlama olmadan eşit aydınlatma elde edin ve istediğiniz tek denklemi sıkı bir şekilde kırpın, çünkü çevredeki diyagramlar ve başıboş işaretler halüsinasyonlu sembollere dönüşür. Bir fotoğrafın üç denklemi varsa, onu üç görüntüye kırpın ve bunları birer birer dönüştürün; Denklem başına sonuçlar, tek seferde sayfa sonuçlarından sürekli olarak daha iyidir.

## Sahip olduğunuz araçla dönüştürün

Bu işi üç çeşit alet yapar. Özel denklem OCR hizmetleri temiz girişte doğrudur. Genel çok modlu modeller sohbette bir resmi kabul eder ve istendiğinde LaTeX'e geri döner ve düzeltilmiş bir sürüm elde etmek için "ikinci alt simge j olmalıdır, i değil" yanıtını verebilirsiniz. Oleafly, yapılandırdığınız sağlayıcıyla kendi API anahtarınız üzerinden çalışan yerleşik LaTeX görüntüsüne sahiptir, böylece bir pasaj, düzenleyiciden ayrılmadan ekran görüntüsünden kaynağa gidebilir. Yapılandırma için [AI kurulumu](/docs/ai-setup/) konusuna bakın. Net bir girdiyle üç yaklaşım birbirine yakınlaşır; bu nedenle yukarıdaki fotoğraf tavsiyesi, araç kararından daha önemlidir.

## Hemen derleyin

Çıktıyı bir "denklem" ortamı içindeki belgenize yapıştırın ve başka bir şey yapmadan önce derleyin. Dönüştürme hataları iki türe ayrılır ve derleyici sizin için ilk türü yakalar: dengesiz parantezler, uyumsuz "\sol" ve "\sağ" sınırlayıcılar ve bilinmeyen komutların tümü yüksek sesle başarısız olur ve düzeltmeler mekaniktir. [Eksik dolar işareti](/learn/missing-dollar/) bu hatalardan en yaygın olanı kapsar.

## Daha sonra matematiğin düzeltmelerini yapın

İkinci tür hata mükemmel şekilde derlenir ve yanlıştır. Dönüştürmenin güvenilir şekilde kaydığı yerlere özellikle dikkat ederek, oluşturulan denklemi orijinal sembole göre sembol sembol okuyun: küçük gliflerin birlikte bulanıklaştığı ve "x_i"nin "x_j" haline geldiği alt simgeler ve üst simgeler; kaybolan veya yer değiştiren astarlar ve şapkalar; '1', 'l' ve 'I' veya '\rho' ve 'p' gibi benzer çiftler; toplamlar ve integrallerin sınırları. Bunlar tam olarak bir formülün anlamını değiştirirken onu tipografik olarak makul kılan ayrıntılardır. Denklem başına iki dakikalık karşılaştırma tüm maliyeti oluşturur ve bir incelemecinin basılı olarak yanlış dizini bulmasından çok daha ucuzdur.