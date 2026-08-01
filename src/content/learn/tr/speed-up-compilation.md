---

title: "PDF için daha kısa bekleme süresi"
description: "Taslak rakamlar, yalnızca TikZ'nin haricileştirilmesini ve yerel CPU'yu içerir."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# PDF için daha kısa bekleme süresi

Derlenmesi doksan saniye süren bir tez, yazma şeklinizi değiştirir. Küçük düzenlemelerden sonra yeniden derlemeyi bırakırsınız, hatalar görünmeden birikir ve LaTeX'i keyifli hale getiren geri bildirim döngüsü ortadan kalkar. Optimize etmeden önce zamanın nereye gittiğini bilin. Çoğu uzun belgede yapıya hakim olan, paketlerin sayısı değil, bir avuç ağır varlık, her şeyden önce büyük resimler ve karmaşık TikZ resimleridir. Aşağıdaki teknikler doğrudan bunlara saldırır.

## Taslak hazırlarken rakamları atlayın

'Taslak' seçeneği, LaTeX'in her görüntüyü aynı boyutta boş bir kutuyla değiştirmesini sağlar; bu, görüntü işlemeyi atlarken düzeni ve sayfa sonlarını korur:

```latex
\documentclass[draft]{article}
```

Sınıf düzeyindeki 'taslak' aynı zamanda bazılarının yararlı bulduğu, bazılarının ise gürültülü bulduğu aşırı dolu çizgileri siyah çubuklarla işaretler. Efekti görüntülerle sınırlamak için, seçeneği "\usepackage[draft]{graphicx}" olarak pakete veya "\includegraphics[draft]{...}" ile tek bir suçluya iletin. Taslak yapı, seçeneği bilmeyen kişilere bozuk görüneceğinden, PDF'yi paylaşmadan önce onu kaldırmayı unutmayın. Taslak modundan bağımsız olarak, [bir rakamı düşürün](/learn/insert-images/) bölümünde açıklandığı gibi büyük fotoğrafların ölçeğini bir kez küçültün, çünkü 40 megabaytlık bir resim her derlemede size sonsuza kadar mal olur.

## Yalnızca geçerli bölümü derle

Bölümleriniz "\include" ile alınmış ayrı dosyalarda yaşıyorsa, "\includeonly" komutu derlemeyi adlandırdığınız dosyalarla sınırlandırır:

```latex
\includeonly{chapters/04-results}
```

Bunu giriş bölümüne koyun ve LaTeX diğerlerinin `.aux' dosyalarını okurken sadece o bölümü derler, böylece belgenin geri kalanındaki sayfa numaraları ve çapraz referanslar yaklaşık olarak doğru kalır. Bu, bir tez için en büyük tasarruftur ve rutin olarak bir dakikalık bir derlemeyi saniyelere dönüştürür. Bu, uzun belgeleri [bir belgeyi dosyalara bölme](/learn/split-chapter-files/) bölümünde açıklandığı gibi yapılandırmanın nedenlerinden biri olan "\input" ile değil, yalnızca "\include" ile çalışır.

## Pahalı resimleri önbelleğe alın

TikZ resimleri her derlemede sıfırdan yeniden çizilir. "\usetikzlibrary{external}" artı "\tikzexternalize" ile yüklenen "harici" kitaplık, her resmi bir kez kendi PDF'sinde derler ve kod değişene kadar yeniden kullanır. Kurulumun keskin kenarları vardır ve büyük resimleri bağımsız dosyalara taşımanın manuel alternatifi de aynı şekilde çalışır; her ikisi de [bağımsız TikZ'den PDF veya PNG'ye](/learn/tikz-export/) kapsamındadır.

## Daha az geçiş, daha hızlı ütüleme

Kaynakça ve çapraz referans çözümlemesi birden fazla geçiş gerektirir, ancak düzyazı taslağı hazırlarken bunlara nadiren ihtiyaç duyarsınız, bu nedenle tek bir hızlı geçiş yeterlidir ve tüm sıra, siz referansları kontrol edene kadar bekleyebilir. Donanım ve yerellik de önemlidir: Yerel bir motor, yükleme veya kuyruk olmadan kendi CPU'nuz üzerinde derlenir; Oleafly'ın derlemeleri bu şekilde çalıştırır.

"\includeonly"yi ve taslak şekilleri birlikte uygulayın; büyük bir tez bile genellikle birkaç saniyeden kısa sürede geri gelir; bu, her paragraftan sonra yeniden derlemeye başladığınız noktadır.