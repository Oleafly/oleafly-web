---

title: "Ağaçlar ve basit grafikler"
description: "çocuk sözdizimi ve aralık düğmeleri."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Ağaçlar ve basit grafikler

Hiyerarşiler sürekli ortaya çıkıyor: ayrıştırma ağaçları, karar ağaçları, dosya düzenleri, sınıflandırmalar. 'Konumlandırma' ile her seferinde bir kutu çizmek işe yarar, ancak kardeşleri elle eşit şekilde dağıtmak ve eşit aralıklarla eşit aralıklarla tutmak sıkıcıdır. TikZ 'ağaçlar' kütüphanesi bunun yerine iç içe geçmiş 'alt' işlemleri kullanarak hiyerarşinin kendisini tanımlamanıza olanak tanır ve düzeni sizin için hesaplar:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

## Alt söz dizimini okuma

Resimde tek bir ifade yer alıyor. Kök ile başlar, `\düğüm{A}` ve ona eklenen her `çocuk{...}` bir alt ağaç bildirir. Bir çocuk genellikle kendi etiketi için bir "düğüm{...}" içerir ve başka "çocuk" işlemleri de içerebilir, bu şekilde "C", "D" ve "E" çocuklarını alır. Parantezlerin iç içe geçmesi ağacın iç içe geçmesini yansıtır, böylece yapıyı doğrudan girintiden okuyabilirsiniz. TikZ, her seviyeyi bir önceki seviyenin altına yerleştirir ve bağlantı kenarlarını otomatik olarak çizer. One ifadesi son parantezden sonra tek noktalı virgülle biter. Yapının içinde eksik veya fazladan bir noktalı virgül, buradaki hataların olağan nedenidir.

## Üç düzen düğmesi

Üstteki seçenekler görünümü ve aralığı kontrol eder. `every node/.style={draw, Circle, minimum size=7mm}' tüm düğümlere aynı anda bir stil uygular: her biri çizilmiş bir kenarlığa, dairesel bir şekle ve tek harflerin tek tip daireler oluşturması için minimum 7 mm çapa sahip olur. "seviye mesafesi=12 mm", ebeveyn ile çocukları arasındaki dikey boşluğu ayarlar. "kardeş mesafesi=18 mm", aynı ebeveynin bitişik çocukları arasındaki yatay boşluğu ayarlar.

Kardeş mesafesi en çok ayarlayacağınız düğmedir. 'Ağaçlar' kütüphanesi, belirli bir seviyedeki her alt ağaç için aynı genişliği ayırır, böylece değer çok küçükse geniş alt ağaçlar çarpışabilir. Standart çözüm, "level 1/.style={sibling distance=36mm}" ve "level 2/.style={sibling distance=18mm}" gibi seviye başına ayarlarla, alt ağaçların en geniş olduğu üst kısımdaki aralığı genişletmektir. Etiketlerinizin genişliği çok farklıysa, paylaşılan stilden "daire"yi kaldırarak dairelerden dikdörtgenlere geçin.

## Küçük ağaçların ötesinde

Kenarlar, örneğin ok uçları veya daha kalın çizgiler eklemek için "üst/.stilden kenar" aracılığıyla stili alır. Yaklaşık bir düzine düğümün ötesindeki ağaçlar veya döngüleri olan genel grafikler için "ağaçlar" kütüphanesi sınırlayıcı hale gelir. 'Orman' paketi, otomatik paketleme ile büyük ağaçları işler. 'Grafik çizimi' algoritmalarına sahip 'grafikler' kütüphanesi rastgele grafikleri kapsar, ancak bu yol LuaLaTeX gerektirir. TikZ bu sayfa içi önizlemelerde görüntülenmez; bu nedenle düzeni görmek için örneği derleyin. Bu sözdizimi yeniyse [ilk TikZ resminiz](/learn/tikz-intro/) bölümündeki temel bilgilerle başlayın.