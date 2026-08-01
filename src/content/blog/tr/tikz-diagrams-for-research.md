---

title: "PowerPoint kesemediğinde TikZ'de araştırma şemaları"
description: "Dergi için yeniden renklendirmek, baskıda net kalmak ve depoda kaynak olarak yaşamak için TeX'te boru hatları, otomatlar ve değişmeli diyagramlar ne zaman çizilmeli?"
date: 2026-07-08
tags: [tikz, figures, research]
---

PowerPoint diyagramları PDF'de bulanık dikdörtgenlere dönüşür. TikZ diyagramları kalıyor
vektör, belge yazı tiplerini eşleştirin ve bir günlük gri tonlama istediğinde yeniden renklendirin
veya farklı bir aksan. Ticaretin ilk saati daha dik. Bundan sonra küçük
düzenlemeler metin farklılıklarıdır, ekran görüntüsü arkeolojisi değildir.

Her rakam için TikZ'ye ihtiyacınız yok. Fotoğraflar, ham mikroskop çerçeveleri ve
matplotlib'deki yoğun grafikler genellikle PDF/PNG'nin içerdiği şekilde kalır. TikZ'yi aşağıdaki durumlarda kullanın:
şekil yapıdır: boru hatları, otomatlar, mimari kutular, kategori diyagramları,
basit ağaçlar.

## Minik başla

Üç düğümlü bir işlem hattı modeli öğretir:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Düğümleri adlandırın. `--` veya açık bağlantılarla (`(a.east)`) bağlanın. Akrabayı tercih et
asla hatırlamayacağınız sihirli koordinatların üzerine yerleştirme (`sağ=a`).
Dersler: [ilk TikZ resmi](/learn/tikz-intro/),
[düğümler ve oklar](/learn/tikz-nodes-arrows/).

## Stiller tek seferlik seçenekleri yener

Her kutunun eşleşmesi için stilleri bir kez tanımlayın:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Günlük daha kalın çizgiler veya monokrom istediğinde stili değiştirin,
yirmi düğüm. Değiştirebilmeniz için adlandırılmış renklerle veya küçük bir palet makrosuyla renklendirin
altıgen kodları avlamadan vurgular.

## Bilgisayar Bilimleri ve mühendislik: hizalayan akış şemaları

Kutuların bir ızgarayı paylaşması için "konumlandırma" kütüphanesini ("aşağı=of", "sağ=of") kullanın.
Manuel mutlak koordinatlar, bir düğüm eklediğinizde diyagramların nasıl bozulduğudur. Tut
metin kısa; ayrıntıları başlığa koyun. Kılavuz:
[hizalanmış akış şemaları](/learn/tikz-flowchart/).

Sinir ağı veya sistem çizimleri için "blokları" "ek açıklamalardan" ayırın.
Ek açıklamalar kenarlıksız daha küçük yazı tipi düğümleri olabilir, böylece ana yol kalır
iki sütun genişliğinde okunabilir.

## Matematik ve teori: değişmeli diyagramlar

'tikz-cd', kategori tarzı diyagramlar için her şeyi yerleştirmeden olağan yoldur.
elle düğüm:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Kılavuz: [değişmeli diyagramlar](/learn/komütatif-diyagramlar/). Ağaçlar için ve
kanıt-teorik diyagramlar, özel kütüphaneler mevcuttur; senden önce basit başla
CTAN'ın yarısını ithal ediyoruz.

## Zamanı dışsallaştırın ve derleyin

Yirmi TikZ rakamı içeren bir makale tam derlemeyi yavaşlatacaktır. Seçenekler:

- Her şekli kendi dosyasına koyun ve "\girin".
- Resimlerin önbelleğe alınmış PDF'ler haline gelmesi için "harici" kitaplığı kullanın.
- Yalnızca düz yazıyla ilgilendiğinizde `\tikzexternaldisable` ile taslak oluşturun.

Slaytlar için dışa aktarma: "bağımsız" bir TikZ belgesini PDF'ye derleyin, PNG'ye dönüştürün
yalnızca deste aracı PDF alamıyorsa. Gerçeğin kaynağı olarak ".tex"i koruyun.

## Kanvas araçları ve elle yazılmış TikZ

Bazı araştırma editörleri düzenlenebilir TikZ yayan bir diyagram tuvali içerir (örn.
örnek Oleafly'nin Diyagram Oluşturucusu: çizin, kodu değiştirin, şekli derleyin,
ekleyin). Bu, sürükleyebileceğiniz geometri için kullanışlıdır. Elle yazılmış TikZ hâlâ kazanıyor
sıkı değişmeli diyagramlar ve son derece düzenli ızgaralar için. Her iki durumda da, taahhüt edin
TikZ kaynağı yalnızca bir PNG değil.

## Diyagramları depoda tut

Şekil kaynaklarını kağıdın yanında saklayın:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Günlük daha kalın satırlar istediğinde kaynağı düzenleyip yeniden derlersiniz. ne zaman bir
ortak yazar bir slayt aracındaki ekran görüntüsünü "iyileştirir", tek kaybınızı kaybedersiniz
düzenlenebilir sürüm.

## Yaygın arıza modları

İki sütunda taşma yaygındır. Son çare olarak "\resizebox" ile ölçeklendirin;
önce genişliğe göre yeniden tasarlayın. Yazı tipi uyumsuzluğu başka bir sorundur: varsayılan belgeyi tercih et
dergi gerektirmediği sürece TikZ içindeki sabit kodlu yazı tipi aileleri üzerindeki yazı tipleri.
Konuşmaların kontrastını kontrol edin çünkü projektörlerdeki görünmez gri bir klasiktir
tuzak. Etiketsiz oklar, başlığı her kenarı açıklamaya zorlar, bu da şu anlama gelir:
Diyagram eksik.

## Katmanlar ve kaplamalar

Aynı rakamı paylaşan konuşmalar ve bildiriler için diyagramı katmanlar halinde oluşturun: temel
önce kutular, sonra oklar ve ardından etiketler. Hata ayıklama sırasında katmanlara yorum yapın
yerleştirme. Beamer katmanları (`\pause`, `\onslide`) bir boru hattını adım adım ortaya çıkarabilir
Düğüm adlarını sabit tutarsanız aynı TikZ kaynağından adım atın.

## Erişilebilirlik ve yazdırma

Anlamı yalnızca kırmızı ve yeşille kodlamayın. Şekil veya çizgi stilini de kullanın.
Şekli gri tonlamalı olarak kontrol edin. Altyazılar yine de okuyucuya anlamlı gelmelidir.
renk körü veya siyah beyaz laboratuvar yazıcısında yazdırma.

## Çalışan bir iş akışı

Otuz saniye boyunca kağıda taslak çizin, ardından resmi gösteren en küçük TikZ'yi oluşturun.
iddia. Stilleri bir kez tanımlayın ve yeniden kullanın. Şekli tek başına derleyin
doğru görünüyor, kağıda bırakın ve başlığın iddiayı taşımasına izin verin. Taahhüt
".tex".

PowerPoint bir defaya mahsus laboratuvar toplantısı için uygundur. Bir derginin yazdıracağı PDF için,
Yeniden renklendirebileceğiniz vektör kaynağı, "düzenlenebilir olanı gönderebilir misiniz?" sorusunun bir tur daha geçmesini sağlar
dosya?"