---

title: "Gerçekten açacağınız bir düzenleyici seçin"
description: "Yeni başlayanların ihtiyaç duyduğu şeyler: bir derleyici, önizleme, SyncTeX ve diskte kalan dosyalar."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Gerçekten açacağınız bir düzenleyici seçin

Yeni başlayanlar için en iyi LaTeX editörü, en güçlü olanı değildir. Sizi boş bir dosyadan derlenmiş bir PDF'ye en az sürtünmeyle ulaştıran dosyadır. Erken derleme yapmak çoğu zaman tek bir özellikten daha önemlidir. Dört yetenek, ilk gün ihtiyacınız olan şeyleri karşılar.

İlk olarak, derleme işlemi, çoklu gigabaytlık bir TeX dağıtımını elle kurmadan çalışmalıdır. İkinci olarak, SyncTeX ile yan yana bir PDF önizlemesi istiyorsunuz, böylece PDF'ye tıkladığınızda eşleşen kaynak satırına gidip geri dönebilirsiniz. Üçüncüsü, dosyalarınız diskte düz ".tex" olmalıdır, böylece onları sıkıştırabilir, e-postayla gönderebilir veya dışarı aktarma adımı olmadan Git'e koyabilirsiniz. Dördüncüsü, hatalar yalnızca ham TeX günlüğü olarak değil, okunabilir mesajlar olarak da gelmelidir.

## Gerçekçi seçenekler

| Editör | Kurulum | Çevrimdışı çalışıyor | Notlar |
| --- | --- | --- | --- |
| Yapraklı | Uygulamayı indirin | Her zaman düzenleme; derlemeler önbelleğe alınmış paketleri kullanır | Paket motor, Git geçmişi, isteğe bağlı olarak kendi anahtarınız olan yapay zeka |
| TeXShop / TeXworks | Önce bir TeX dağıtımı kurun | Evet | Minimal ve güvenilir |
| VS Kodu + LaTeX Atölyesi | Önce bir TeX dağıtımı kurun | Evet | Zaten VS Code'da çalışıyorsanız iyi bir seçim |
| Arka sayfa | Tarayıcıda bir hesap oluşturun | Sınırlı | Sıfır kurulum; projeler sunucularında yayında |

Ortadaki iki satırın gizli bir maliyeti vardır: Düzenleyici kullanışlı olmadan önce TeX Live veya MiKTeX'i kendiniz kurar ve bakımını yaparsınız. Yeni başlayanların çoğunun durduğu yer burasıdır. Tarayıcı seçeneği kurulumu kaldırır ancak dosyalarınızı bir hesaba taşır. Bu ödünler [tarayıcı projesi ve diskteki klasör](/learn/overleaf-vs-local/) bölümünde daha ayrıntılı olarak ele alınmaktadır.

## Makul bir varsayılan

TeX yönetimi olmadan yerel dosyalar istiyorsanız [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) ile başlayın: derleyici uygulamanın içinde gönderilir ve bir belgenin onlara ilk ihtiyaç duyduğu anda paketleri indirir. Hangi düzenleyiciyi seçerseniz seçin, bunu [ilk belge eğitimi](/learn/first-document/) ile eşleştirin ve [alıntı sayfasını](/learn/cheatsheet/) yakınınızda bulundurun. Editör bugün ilk sayfanızı derlemekten daha az önemlidir.