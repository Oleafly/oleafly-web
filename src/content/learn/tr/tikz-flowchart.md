---

title: "Hizalanmış akış şeması kutuları"
description: "Kitaplığı, sütunların bir kenarı paylaşacağı şekilde konumlandırma."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Hizalanmış akış şeması kutuları

Bir akış şemasının amatörce görünmesinin tek bir nedeni vardır: neredeyse aynı hizada olan kutular. TikZ sorunu yapısal olarak ortadan kaldırıyor, çünkü her kutu diğerine göre yerleştiriliyor, böylece bir kutu sütunu göz kararı yerine yapı yoluyla bir ekseni paylaşıyor. İkinci bileşen adlandırılmış bir stildir, dolayısıyla tüm kutular şekilleri ve minimum boyutları konusunda hemfikirdir. İşte dikey üç adımlı bir akış:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Bir stili bir kez tanımlamak

'box/.style={...}' satırı, 'box' adında yeniden kullanılabilir bir stil oluşturur. İçeriği sıradan düğüm seçenekleridir: "çiz" düğüme bir kenarlık verir, "yuvarlak köşeler" onu yumuşatır, "hizala=ortala" çok satırlı metni düğümün içinde ortalar ve "minimum genişlik=2,8 cm" her kutuyu en azından bu genişliğe zorlar, böylece kısa etiketler küçük kutulara küçülmez. O andan itibaren `\düğüm[kutusu]` tüm kümeyi uygular. Dolgu rengini veya daha geniş bir genişliği istediğinizde, bir çizgiyi değiştirdiğinizde grafiğin tamamı güncellenir. Bu sizin yeniden çizdiğiniz bir diyagram değil, sürdürdüğünüz bir diyagramdır.

## İki yönde aralık

'düğüm mesafesi=10 mm ve 14 mm', 'konumlandırma' kitaplığı tarafından kullanılan varsayılan boşlukları ayarlar: ilk değer dikey mesafedir, ikincisi ise yatay mesafedir. Bu yerine getirildiğinde, `below=of i', proses kutusunu giriş kutusunun 10 mm altına, uçtan uca ve mükemmel bir şekilde merkeze yerleştirir. İkinci bir sütunda 'p'nin sağı' kullanılır ve 14 mm yana inilir. Her yerleşim mevcut bir düğümü zincirlediğinden, bir adım eklemek bir düğüm eklemek ve bir "aşağı=of" referansını güncellemek anlamına gelir. Aşağı yöndeki her şey onunla birlikte değişir. Ayrıca "aşağı=15 mm i" örneğinde olduğu gibi düğüm başına mesafeyi de geçersiz kılabilirsiniz.

## Adımları bağlama

Her `\draw[-Latex] (i) -- (p);`, adlandırılmış bir düğümden diğerine bir ok çizer ve `-Latex`, hedef uçtaki `arrows.meta` kitaplığından düz bir ok ucu seçer. Oklar düğüm sınırlarına otomatik olarak bağlanır. Bir karar dalı için, belirli bağlantı noktalarından çizim yapın, örneğin sağ taraftan ayrılmak için '(p.doğu)' ve grafiğin köşelere ihtiyacı olduğunda '-- ++(2,0) |-' gibi kıvrımlarla rota çizin.

TikZ çıktısı bu sayfa içi önizlemelerde oluşturulmaz, bu nedenle onu görmek için pasajı derleyin. Akış şemalarındaki klasik hata, "sadece bu seferlik" mutlak koordinatlara sahip birkaç kutu yerleştirmektir: bu kutular, bir sonraki düzenlemeden sonra yanlış hizalanan kutulardır. Her yerleşimi göreceli tutun ve temel yerleşim seçenekleri için [düğümler ve oklara](/learn/tikz-nodes-arrows/) bakın.