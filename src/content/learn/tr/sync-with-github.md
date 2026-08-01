---

title: "Makaleyi GitHub'a koyun"
description: "Başlatın, yardımcı dosyaları, özel depoyu ve ortak yazar birleştirmelerini mantıklı tutan alışkanlıkları göz ardı edin."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Makaleyi GitHub'a koy

LaTeX taslağı düz metindir ve bu da onu Git için ideal kılar. Her taslak, geri dönebileceğiniz bir taahhüt haline gelir, her değişiklik satır düzeyinde bir fark olarak görünür ve GitHub size tesis dışı bir kopya artı ortak yazarların mevcut durumu almaları için bir yol sunar. Bunların hiçbiri gelişmiş Git gerektirmez. Bir makalenin tutarlı bir şekilde kullanılan belki de beş komuta ihtiyacı vardır.

## İlk kurulum

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Bunu proje klasöründe bir kez çalıştırın. `.gitignore` adımı göründüğünden daha önemlidir. Her derleme `.aux`, `.log`, `.out`, `.toc` ve `.synctex.gz` dosyalarını yeniden oluşturur ve bunları işlemek, gerçek değişikliklerinizi makine gürültüsünün altına gömer ve ortak yazarlar arasında anlamsız birleştirme çatışmaları yaratır. Yalnızca yazdıklarınızı takip edin: ".tex" kaynakları, ".bib" veritabanı, şekiller ve mekanın size verdiği tüm sınıf veya stil dosyaları. PDF de bir yapı ürünüdür. Çoğu ekip bunu dışarıda bırakır ve yerel olarak yeniden oluşturur; ancak etiketli bir sürüme bir sürüm eklemek gönderilen sürümü dondurmanın makul bir yoludur. Çalışma herkese açık olana kadar depoyu özel tutun. Yayınlanmamış bir el yazması indekslenecek bir şey değildir.

## Ortak yazarları aklı başında tutan alışkanlıklar

Her birinin "bölüm 3 girişini gözden geçir" veya "ablasyon tablosu ekle" gibi bir mantıksal değişiklik yapmasını sağlayın. Tarih daha sonra makalenin hikayesi olarak okunur ve kötü bir düzenleme, ikincil hasar olmadan geri döndürülebilir. Bir yazma oturumuna başlamadan önce çekin ve durduğunuzda itin. Birleşme çatışmaları şubelerin ayrı geçirdiği zamanla birlikte büyür. Ortak yazarlar onu çektikten sonra paylaşılan bir dalı asla zorla itmeyin: bu onların ayaklarının altındaki tarihi yeniden yazar. Büyük ikili yapıları (veri kümeleri, videolar) kağıt deposundan uzak tutun. Bir arşive bağlantı verin veya ayrı bir veri deposu kullanın. Git, her ikili dosyanın her sürümünü sonsuza kadar saklar.

LaTeX'e özgü bir alışkanlık: Her kaynak satırına bir cümle yazmak, farkları önemli ölçüde daha okunaklı hale getirir, çünkü tek kelimelik düzenleme, yeniden akıtılan bir paragraf yerine tek satırlık bir değişiklik olarak görünür.

## Oleafly nasıl uyuyor?

Her Oleafly projesi diskteki sıradan bir klasördür, dolayısıyla bu komutlar onun üzerinde değişmeden çalışır. Uygulama ayrıca her başarılı derlemeden sonra otomatik olarak bir Git taahhüdü oluşturabilir, bu da size kasıtlı taahhütleriniz arasında ayrıntılı bir güvenlik ağı sağlar. Bkz. [Git geçmişi](/docs/git-history/). Yama değişimi ve bölüm sahipliği de dahil olmak üzere bunun üzerine inşa edilen ortak çalışma modelleri için [Canlı imleç olmadan birlikte yazma](/learn/offline-collaboration/) sayfasına bakın.