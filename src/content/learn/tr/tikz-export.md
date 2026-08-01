---

title: "Bağımsız TikZ'den PDF veya PNG'ye"
description: "bağımsız sınıf ve önbellekleri dışsallaştırma."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Bağımsız TikZ'den PDF veya PNG'ye

Bir TikZ resmi normalde bir kağıdın içinde bulunur, ancak genellikle diyagramın kendi dosyası olarak kullanılmasına ihtiyaç duyarsınız: onu bir slayt destesinde yeniden kullanmak, Word'de çalışan bir ortak yazara vermek, PNG'nin gerekli olduğu yere yüklemek veya sadece pahalı bir çizimi her belge yapısında yeniden derlemekten kaçınmak için. 'Bağımsız' belge sınıfı tam da bunun için var. Bir resmi, resmin boyutuna göre kırpılmış bir sayfaya dizer:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Sınıf seçenekleri ne işe yarar?

'Tikz' seçeneği sizin için TikZ paketini yükler ve 'bağımsız'a çıktı sayfasını 'tikzpicture' etrafında sıkı bir şekilde kırpmasını söyler, böylece ortaya çıkan PDF tam olarak çizim kadar büyüktür ve sayfa kenar boşlukları yoktur. 'kenarlık=2pt' seçeneği her tarafa iki noktalı bir tampon ekler; bu, sınırlayıcı kutuya tam olarak oturan vuruşların izleyiciler veya yazıcılar tarafından tıraşlanmasını önler. Bu dosyayı herhangi bir belge gibi derlediğinizde çıktı, yalnızca diyagramı içeren küçük, sıkı bir şekilde kırpılmış bir PDF olur.

Bu PDF'yi tercih edin çünkü vektördür: bulanıklaşmadan her boyuta ölçeklenir. Bunu "\includegraphics" ile başka bir belgeye bırakmak, [grafik olarak PDF sayfası](/learn/include-pdf-as-figure/) bölümünde açıklandığı gibi çalışır. Raster kopyaya gerçekten ihtiyaç duyulduğunda çizimi yeniden oluşturmak yerine derlenmiş PDF'yi dönüştürün. 'pdftoppm -png -r 300 şekil.pdf rakam' gibi komut satırı araçları 300 dpi PNG üretir ve 'pdf2svg' veya Inkscape SVG üretir. PNG yazdırılacaksa 300 dpi veya daha yüksek çözünürlükte dışa aktarın.

## Resimleri haricileştirme ile önbelleğe alma

Büyük bir belgenin içinde, TikZ resimleri her derlemede yeniden çizilir ve bir avuç karmaşık olay örgüsü, yapım süresine hakim olabilir. 'Harici' kitaplık, her resmi bir kez kendi PDF'sinde derleyerek ve ardından önbelleğe alınan dosyayı resmin kodu değişene kadar yeniden kullanarak bu sorunu düzeltir:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

'Önek' seçeneği, oluşturulan dosyaları kendi klasörlerinde tutar. Dışsallaştırma, derleyiciyi alt derlemeler oluşturan bir modda çalıştırır, bu nedenle kabuk kaçışının etkinleştirilmesi gerekir ve bazı kurulumlarla zayıf etkileşime girer. Eğer size engel oluyorsa, her büyük resmi kendi "bağımsız" dosyasına taşıyın ve derlenmiş PDF'leri ekleyin. Bu size aynı önbelleğe alma işleminin daha az makineyle elle yapılmasını sağlar. Derleme süreleri genel olarak [PDF için daha kısa bekleme süresi](/learn/speed-up-compilation/) bölümünde ele alınmıştır.

Yaygın olarak yapılan bir hata bir uyarıyı hak ediyor: PNG elde etmek için oluşturulmuş bir diyagramın ekran görüntüsünü almayın. Ekran görüntüleri, slayt önizlemesinde kabul edilebilir görünen ve diğer her yerde bulanık görünen ekran çözünürlüğünü yakalar. Çözünürlüğü sizin seçeceğiniz PDF'den dönüştürün.