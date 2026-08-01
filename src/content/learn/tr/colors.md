---

title: "Baskıdan sağ çıkan renk"
description: "xcolor, HTML özellikleri ve günlükler gri tonlamaya geçtiğinde sinyal için renk kullanma."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Baskıdan sağ çıkan renk

LaTeX'teki renkler tek bir paketten, "xcolor"dan gelir. Size adlandırılmış renkler, tam renk özellikleri, arka plan kutuları ve kendi paletinizi tanımlamanın bir yolunu sunar. Dergilerdeki gövde metni neredeyse her zaman siyahtır, dolayısıyla ona düşündüğünüzden daha az ihtiyaç duyarsınız. Slaytlarda, görünür açıklamalara sahip taslaklarda ve bir kuruluşun paletiyle eşleşmesi gereken her şeyde yine de karşılığını verir.

## Komutlar

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` xcolor'un önceden tanımlanmış adlarından birini kullanarak yalnızca ikinci bağımsız değişkenindeki metni renklendirir; 'kırmızı', 'mavi', 'gri', 'turuncu' ve birkaç düzine daha kutudan çıktığı gibi işe yarar. Bir ad yeterince kesin olmadığında, isteğe bağlı "[HTML]" modeli altı basamaklı bir onaltılık kodu kabul eder; bu, bir web tasarımcısı veya stil kılavuzunun size sağladığıyla aynı şekildedir, böylece "2563EB" belirli bir maviyi tam olarak yeniden üretir. Xcolor'un onaltılık rakamların büyük harfle ve `#' olmadan yazılmasını istediğini unutmayın.

`\colorbox{gray!15}{highlighted}` metnin kendisini renklendirmek yerine metninin arkasında bir arka plan çizer. 'Gri!15' argümanı xcolor'un karıştırma sözdizimini gösterir: 15 kısım gri ile 85 kısım beyaz harmanlanır, bu da vurgu olarak okunan soluk renk tonunu verir. Aynı sözdizimi, bir rengin beklendiği her yerde çalışır ve koyu mavi için "mavi!50!siyah"ta olduğu gibi onu zincirleyebilirsiniz.

## Bir kez tanımlayın, her yerde kullanın

`\definecolor{brand}{HTML}{2563EB}` size ait bir adı kaydeder. Bu satırdan sonra `\textcolor{brand}{...}' herhangi bir yerleşik renk gibi çalışır ve onaltılık değer tam olarak tek bir yerde bulunur. Palet değiştiğinde, belgede ham onaltılık kodları aramak yerine bir giriş satırını düzenlersiniz. [Özel makrolar](/learn/custom-commands/) ile aynı fikir: bir kez tanımlayın, her yerde yeniden kullanın.

## Gri tonlama hala gerçek

Dekorasyon için değil, sinyal için renk kullanın ve bazı okuyucuların bunu görmeyeceğini varsayın. Pek çok dergi hâlâ gri tonlamalı olarak basılıyor; kırmızı ve mavi, benzer gri tonlara dönüşüyor ve okuyucuların önemli bir kısmında bir tür renk görme eksikliği var. Temel kural: Renk, bir ayrımı güçlendirebilir ancak asla onu taşıyan tek şey olmamalıdır. Renkli metni kalın veya bir sembolle eşleştirin ve renkli çizim çizgilerini farklı işaretleyiciler veya kesikli desenlerle eşleştirin.

Kapsamla ilgili bir şey daha. Başlıkları veya gövde metnini elle renklendirmek, belgenin hızlı bir şekilde ev yapımı görünmesini sağlar ve bir mekanın şablonunda yine de eski haline döner. Bir revizyonda gözden geçirenin talep ettiği değişiklikleri işaretlemek gibi bir anlam ifade eden yerler için manuel rengi koruyun ve onu son sürümden önce kaldırın.