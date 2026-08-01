---

title: "Düğümler ve oklar"
description: "Adlandırılmış düğümler, göreli yerleşim, ok uçları."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Düğümler ve oklar

Neredeyse her TikZ diyagramı iki bileşene indirgenir. Düğüm, içeriğin konumlandırılmış bir parçasıdır; genellikle etiketli bir kutu veya dairedir. Kenar, iki düğümü birbirine bağlayan bir çizgi veya oktur. Düğümleri yerleştirip birleştirebildiğinizde, akış şemaları, boru hatları ve blok diyagramların tümü farklı boyutlarda aynı alıştırmadır. Aşağıdaki örnek, iki adlandırılmış kutu yerleştirir ve aralarına etiketli bir ok çizer:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Düğümleri adlandırma ve yerleştirme

'\node[draw] (src) {Source};'da, köşeli ayraç seçenekleri düğümü şekillendirir ve 'draw', onun kenarlığını çizmek anlamına gelir; bu olmadan kayan metin elde edersiniz. `(src)` düğümün adıdır ve `{Source}` içeriğidir. İsim önemli kısımdır: diğer komutların, koordinatlarını bilmeden bu düğüme başvurmasını sağlar.

İkinci düğüm bunun neden önemli olduğunu gösteriyor. 'right=2cm src', 'positioning' kütüphanesinden gelir ve 'dst'yi, sınırları arasında ölçüldüğünde 'src'nin iki santimetre sağına yerleştirir. Kitaplık ayrıca "sol=of", "yukarı=of", "below=of" ve "sağ üst=of" gibi çapraz kombinasyonlar da sağlar. Bu şekilde bir diyagram oluşturun (her düğüm mevcut olana göre) ve metin boyutu değiştiğinde düzen bozulmadan kalır. '\Düğüm (4,2)'de' gibi mutlak koordinatların hâlâ kullanım alanları vardır, ancak bunların üzerine inşa edilen bir diyagram, bir kutu her büyüdüğünde manuel olarak yeniden numaralandırmayı gerektirir.

## Okun çizilmesi

`\draw (src) -- (dst);` adlı iki düğüm arasına düz bir çizgi çizer ve TikZ çizgiyi otomatik olarak düğümlerin merkezlerinden ziyade sınırlarında başlatıp bitirir. `[-{Latex}]` seçeneği ok uçlarını belirtir: kısa çizgiden önce hiçbir şey olmaması kuyruk ucunun olmadığı anlamına gelir ve hedefteki `arrows.meta` kitaplığından düz bir ok ucu seçtikten sonra `Latex`. `{Latex}-{Latex}` yazmak çift başlı bir ok verir.

Orta yoldaki 'düğüm[yukarıda] {kenar}', satırın kendisine iliştirilmiş bir etikettir. Yolun içine yazılan bir düğüm, varsayılan olarak yolun bu noktasına, yarıya kadar yerleştirilir ve "yukarı", metnin konturun üzerine oturmaması için onu satırın hemen üstüne kaydırır. Bu, geçişlere ve veri akışlarına açıklama eklemenin standart yoludur.

## Faydalı alışkanlıklar

Küçük diyagramlarda bile her düğümü adlandırın. Adsız düğümlere bağlanılamaz ve küçük diyagramlar nadiren küçük kalır. Aynı nedenden dolayı mutlak koordinatlar yerine göreli yerleşimi 'konumlandırma'dan tercih edin. Her TikZ ifadesi noktalı virgülle biter. Bunlardan birini atlamak en yaygın TikZ hatasıdır ve mesajlar genellikle gerçek sorundan çok uzaklara işaret eder. Birçok kutuyu düzenli satırlar ve sütunlar halinde düzenlemek için [hizalanmış akış şeması kutuları](/learn/tikz-flowchart/) ile devam edin.