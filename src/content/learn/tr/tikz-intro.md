---

title: "İlk TikZ resminiz"
description: "Düğümler, kenarlar, vektör olarak kalan üç kutulu bir boru hattı."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# İlk TikZ resminiz

TikZ, LaTeX belgenizin içinde yaşayan bir çizim dilidir. Başka bir araçtan dışa aktarılan bir diyagramı içe aktarmak yerine, onu metinde açıklarsınız ve derleyici onu çizer. Bunun getirisi, çıktının belgenizin kendi yazı tiplerini kullanan vektör grafikleri olmasıdır, böylece etiketler çevredeki metinle tam olarak eşleşir ve her yakınlaştırmada keskin kalır. Bunun maliyeti, kutuları sürüklemek yerine koordinatları ve seçenekleri yazmanızdır. Kutulardan ve oklardan oluşturulan diyagramlar için, genellikle buna değer. İşte üç kutulu bir boru hattı, kanonik ilk resim:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## Düğümler

Düğüm, bir konuma yerleştirilen ve isteğe bağlı olarak etrafına bir şekil çizilen, genellikle metin olan bir içerik parçasıdır. `\node[draw, yuvarlatılmış köşeler] (a) {Input};`ta köşeli parantez içindeki seçenekler düğümün kenarlığını çizip köşelerini yuvarlayacağını söyler, `(a)` düğüme daha sonra başvurabileceğiniz bir ad verir ve `{Input}` içindeki metindir. İkinci düğüm, "konumlandırma" kitaplığından "right=of a"yı kullanır ve bu, onu ortam seçeneklerinde "düğüm mesafesi=1,5 cm" tarafından belirlenen mesafede "a" düğümünün sağına yerleştirir. Düğümleri mutlak koordinatlar yerine birbirine göre yerleştirin; bir etiket uzadığında tüm diyagram ayarlanır.

## Kenarlar

Kenar, iki noktayı birleştiren çizgidir. Düğümler adlandırıldığı için onları ada göre bağlarsınız: `\draw (a) -- (b);`, `a' düğümünden `b' düğümüne düz bir çizgi çizer. TikZ, çizgiyi merkezlerinden ziyade düğüm sınırlarında başlatır ve bitirir. '[-Latex]' seçeneği, 'arrows.meta' kitaplığından ok ucu stilini ayarlayarak çizgiye hedefinde düz bir ok ucu verir. İpucu her yol için bir kez uygulanır ve bu nedenle örnekte iki "\draw" komutu kullanılır. Tek bir '(a) -- (b) -- (c)' yolu yalnızca 'c'ye ok ucu koyar.

## Bundan sonra nereye gitmeli

Bir resim yazısı ve bir sayıya ihtiyaç duyduğunda, tıpkı bir resim gibi, "tikzpicture"ı bir "şekil" ortamına sarın. TikZ kodu bu sayfa içi önizlemelerde oluşturulmaz, bu nedenle sonucu görmek için pasajı bir projede derleyin. Oleafly'de Diyagram Oluşturucu ayrıca başlangıç ​​noktası olarak düzenlenebilir TikZ üretebilir. Yeni başlayanların en yaygın hatası, her TikZ komutunu sonlandıran noktalı virgülün unutulmasıdır, bu da uzun ve kafa karıştırıcı bir hataya neden olur. Bir diyagram üç kutuyu aştığında, [düğümler ve oklar](/learn/tikz-nodes-arrows/) ve [hizalanmış akış şeması kutuları](/learn/tikz-flowchart/) ile devam edin.