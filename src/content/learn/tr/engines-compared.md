---

title: "Bu proje için hangi motor"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tektonik: Unicode, yazı tipleri, günlük uyumu."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Bu proje için hangi motor

Motor aslında ".tex" kaynağınızı PDF'ye dönüştüren programdır. LaTeX'in kendisi, bir makro katmanın üzerinde çalışan bir makro katmandır ve aralarından seçim yapabileceğiniz birkaç tane vardır. Hemen hemen aynı belgeleri kabul ederler, ancak Unicode metin ve yazı tiplerini işleme biçimleri farklıdır ve bir motor için yazılan bir şablon, bir başka motor için tamamen başarısız olabilir. Proje başına bir kez seçin ve ona bağlı kalın.

| Motor | Unicode | Sistem yazı tipleri | Notlar |
| --- | --- | --- | --- |
| pdfLaTeX | Kısmi | Hayır | Maksimum günlük uyumluluğu |
| XeLaTeX | Evet | Evet (`fontspec`) | Çok dilli belgeler için harika |
| LuaLaTeX | Evet | Evet | Modern, yazılabilir |
| Tektonik | Xe benzeri | Evet | Otomatik paket getirme; Yağlı varsayılan |

## Her motor ne işe yarar?

pdfLaTeX, orijinal TeX'in doğrudan devamıdır ve çoğu derginin, konferansın ve gönderim sisteminin varsayılan varsayımı olmaya devam etmektedir. Unicode'dan önce geldiği için vurgulu giriş 'inputenc' kurallarına ihtiyaç duyar ve yazı tipleri özel olarak paketlenmiş TeX yazı tipleriyle sınırlıdır. Buna karşılık hızlıdır ve evrensel olarak desteklenir ve onlarca yıllık şablonlar onu hedefler.

XeLaTeX, UTF-8'i yerel olarak okur ve 'fontspec' paketi aracılığıyla, sisteminizde yüklü olan '\setmainfont{Georgia}' gibi herhangi bir yazı tipini adıyla kullanır. Bu, onu, alfabeleri karıştıran belgeler, Batı Avrupa dillerinin ötesindeki diller ve belirli yazı tipi gereksinimleri olan herkes için pratik bir seçim haline getiriyor. [XeLaTeX ne zaman kullanılmalı](/learn/when-use-xelatex/) daha da derinleşiyor.

LuaLaTeX aynı Unicode ve yazı tipi desteğini sunar ve Lua komut dosyası dilini içerir, böylece paketler derleme zamanında imkansız olan şeyleri hesaplayabilir. Biraz daha yavaş derlemeler pahasına, geleneksel motorlar arasında uzun vadeli bir haleftir.

Tektonik, XeTeX motorunun modern, bağımsız bir yapısıdır. Ayırt edici özelliği, otomatik bağımlılık yönetimidir: Bir belge sizde olmayan bir pakete ihtiyaç duyduğunda, Tectonic başarısız olmak yerine onu talep üzerine indirir. Oleafly, tam da bu nedenle Tectonic'i varsayılan motoru olarak paketliyor, böylece yeni bir kurulum, herhangi bir TeX yönetimi olmadan gerçek dünya belgelerini derliyor.

## Nasıl karar verilir?

Şablonu takip edin. Bir günlük sınıfı veya tez şablonu bir motoru belgeliyorsa onu kullanın. Şablonlar, [Derlenmeyecek üniversite sınıfı dosyaları](/learn/fix-broken-template/) bölümünde açıklandığı gibi, motor varsayımlarını başka yerlerde kafa karıştırıcı hatalar olarak ortaya çıkacak şekilde kodlar. Belge sıfırdan size aitse temel kural basittir: muhafazakar bir mekan kaynaklarınızı derleyeceğinde pdfLaTeX ve gerçek Unicode veya gerçek yazı tiplerine ihtiyacınız olduğunda XeLaTeX, LuaLaTeX veya Tectonic. Neyi seçerseniz seçin, belgenin ömrü boyunca onunla kalın. İnce aralıklar ve yazı tipi farklılıkları, projenin ortasında geçiş yapmayı zamanın kötü kullanılmasına neden olur.