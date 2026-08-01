---

title: "Oleafly'de bir hafta yazı yazmak"
description: "Kitaplık, şablonlar, derleme, SyncTeX, alıntılar, Git geçmişi, isteğe bağlı yapay zeka."
category: "local-studio"
order: 6
level: "beginner"
tags: ["oleafly", "workflow"]
featured: true
updated: 2026-07-25
---

# Oleafly'de bir hafta yazı yazmak

Oleafly'de boş bir projeden ortak yazara gönderebileceğiniz bir taslağa kadar bir makale aslında günlük olarak böyle görünüyor. Uygulamanın hesaba ve sunucuya ihtiyacı yoktur: Bir proje, diskinizdeki ".tex", ".bib" ve şekil dosyalarından oluşan bir klasördür ve aşağıdaki her şey bu klasörde çalışır.

## Birinci gün: Bir şablonla başlayın

IEEE ve ACM makaleleri veya tez iskeleti gibi yaygın formatlar için Kütüphane'de boş olarak veya bir [şablon](/şablonlar/)'dan bir proje oluşturun. Bir şablon, sınıf seçenekleri ve giriş bölümü zaten mantıklı olan, size anında bir derleme belgesi verir; bu, ilk gün giriş satırını satır satır bir araya getirmekten daha iyidir. Herhangi bir şey yazmadan önce PDF aldığınızı onaylamak için derleme tuşuna bir kez basın.

## Hafta ortası: yazma-derleme döngüsü

Haftanın çoğu düzenleyici ile PDF bölmesi arasında bir döngüdür. Düzenleyici, projenizde bulunan komutları, ortamları, etiketleri ve alıntı anahtarlarını otomatik olarak tamamlar ve eğik çizgi komutları, şekiller ve tablolar gibi daha büyük yapıları siz onların ortak metnini ezberlemenize gerek kalmadan ekler. Sık sık derleme yapın, çünkü iki dakika önce yazdığınız metindeki yeni bir hatayı tespit etmek kolaydır, ancak bir öğleden sonra değişiklik yaptıktan sonra ortaya çıkan bir hatayı bulmak kolay değildir. SyncTeX iki bölmeyi birbirine bağlar: kaynak satırına atlamak için PDF'deki bir paragrafa tıklayın veya kaynaktan PDF'ye atlayın; bu, uzun bir belgenin belirli sayfalarını gözden geçirirken çok önemlidir.

## Devam ettikçe alıntılar

Projede bir `.bib` dosyası bulundurun ve yazarken `\cite{...}` ile alıntı yapın, anahtarların otomatik tamamlama tarafından sağlanmasına izin verin. Yazma sırasında referans eklemek ucuzdur. Üç haftalık "alıntı gerekli" yer tutucularının yeniden oluşturulması gerekli değildir. Girişler Zotero'dan veya bir yayıncının dışa aktarımından geliyorsa, [BibTeX doğrulayıcı](/tools/bibtex-validator/) eksik alanları tuhaf görünümlü referanslar olarak ortaya çıkmadan önce yakalar. İşlem hattının tamamı [.bib anahtarından metin içi alıntıya](/learn/add-citations/) bölümünde açıklanmıştır.

## Törensiz tarih

Oleafly, her başarılı derlemeden sonra Git işlemini otomatik olarak kaydedebilir, böylece hafta, inceleyebileceğiniz veya geri alabileceğiniz çalışma durumlarının bir zaman çizelgesini geride bırakır. Taslak paylaşılmaya değer olduğunda klasörü özel bir GitHub deposuna aktarın; [Put the paper on GitHub](/learn/sync-with-github/) kurulumu gösterir.

## İsteğe bağlı: asistan

Barındırılan bir sağlayıcı için bir API anahtarı eklerseniz veya uygulamayı yerel Ollama'ya yönlendirirseniz, bir asistan projenizle ilgili soruları yanıtlayabilir, onay farklarının arkasında düzenlemeler önerebilir ve kendi çalışmasını kontrol etmek için derleme yapabilir. İsteğe bağlı: Yukarıdaki her adım onsuz çalışır. Ayrıntılar [Assistant inside Oleafly](/learn/oleafly-ai/) bölümünde yer alır ve uygulamanın arkasındaki daha geniş tasarım amacı ise [Başlarken](/docs/getting-started/) ve [Felsefe](/docs/philosophy/) bölümündedir.