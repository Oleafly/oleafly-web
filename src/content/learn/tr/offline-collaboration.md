---

title: "Canlı imleç olmadan birlikte yazma"
description: "Yamalar, paylaşılan klasörler artı Git ve ayrı bölüm dosyalarına sahip olma."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Canlı imleç olmadan birlikte yazma

Ortak yazarın imleç hareketini izlediğiniz gerçek zamanlı işbirliğine dayalı düzenleme, bulut editörlerinin sattığı modeldir. Pek çok iyi makale bu olmadan yazılıyor. Yazarlar yerel olarak çalıştığında Git üzerinde oluşturulan eşzamansız işbirliği güvenilir bir modeldir: her kişi kendi makinesinde düzenleme yapar ve değişiklikler karakter karakter yerine kasıtlı olarak birleştirilir. Biraz daha fazla koordinasyon gerektirir ve bunun karşılığını çevrimdışı çalışma, tam geçmiş ve kimsenin sunucusuna bağımlılık olmadan öder.

## Omurga olarak Git

Standart kurulum, genellikle GitHub'da herkesin alıp ittiği paylaşılan bir depodur. Her yazar oturumlar halinde çalışır: en son durumu çekin, yazın, taahhüt edin, iletin. LaTeX düz metin olduğundan Git, makalenin farklı bölümlerindeki paralel değişiklikleri otomatik olarak birleştirir ve kurulum birkaç dakika sürer. [Put the paper on GitHub](/learn/sync-with-github/) bunu kapsar. Bir ortak çalışan Git ana bilgisayarını kullanamadığında veya kullanmadığında, yamalar boşluğu doldurur: "git format-patch", taahhütleri e-postayla gönderebileceğiniz küçük dosyalara dönüştürür ve alıcı bunları "git am" ile uygulayarak yazarlığı ve geçmişi olduğu gibi korur. Bu eski bir iş akışıdır ve hâlâ e-postanın çalıştığı her yerde çalışır.

Hibrit, bir ortak yazarın senkronize edilmiş bir klasörde ısrar etmesi durumunda da çalışır: kolaylık sağlamak için paylaşılan kopyayı Dropbox veya Syncthing'de saklayın, ancak Git geçmişini bir kişinin korumasına ve birleştirmeleri gerçekleştirmesine izin verin. `.git' dizinindeki bozuk depolardaki senkronizasyon çakışmaları nedeniyle, iki kişinin canlı Git ödemelerini aynı senkronize edilmiş klasöre yönlendirmeyin.

## Belgeyi dosyaya bölün

İnsanlar aynı dosyaya nadiren dokunduğunda birleştirmeler nadir hale gelir. Taslağı bölün, böylece her bölüm veya kısım kendi dosyasında yer alır ve ince bir 'main.tex' dosyasından '\input{chapters/methods}' ile alınır. Mekanikler [Belgeyi dosyalara bölme](/learn/split-chapter-files/) bölümünde bulunmaktadır. Daha sonra sahipliği atayın: her ortak yazar kendi dosyalarında taslak hazırlar ve bir entegratör, notasyon ve ton tutarlılığı için önsözü, birleştirmeyi ve son okumayı yönetir. Bu, yazılım ekiplerinin birbirlerinin üzerine basmaktan nasıl kaçındıklarını yansıtıyor ve aynı nedenlerle işe yarıyor.

## Aslında yanlış giden ne

Kaçınılması gereken başarısızlık modu, iki kişinin aynı paragrafı aynı zaman aralığında düzenlemesidir. Git bunu bir çakışma olarak işaretleyecektir ve LaTeX çakışmaları okunabilir ancak çözülmesi sıkıcıdır, bu nedenle en ucuz çözüm sosyaldir: "Bugün tanıtımdayım" diyen kısa bir mesaj neredeyse hepsini engeller. Gerisini iki yazma alışkanlığı azaltır. Kaynak satırı başına bir cümle tutun, böylece komşu cümlelerdeki paralel düzenlemeler hiçbir şekilde çakışmaz ve her yazma oturumundan hemen önce çekin, böylece her zaman en son metni düzenlersiniz.