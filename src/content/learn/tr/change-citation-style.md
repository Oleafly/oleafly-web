---

title: "Sayısal, yazar yılı, dergi stilleri"
description: "Veritabanını yeniden yazmaya gerek kalmadan stilleri değiştirin."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Sayısal, yazar yılı, dergi stilleri

Alıntı stili iki şeyi kontrol eder: metin içi işaretleyicinin neye benzediği, örneğin '[12]' ve '(Knuth, 1984)' gibi ve referans listesindeki her girişin nasıl biçimlendirildiği. İyi haber şu ki stil, ".bib" veritabanınızdan tamamen ayrı. Önsözdeki bir satırı değiştirerek bir makaleyi sayısaldan yazar yılına çevirebilir veya farklı bir dergi için yeniden biçimlendirebilirsiniz. Girişleriniz olduğu gibi kalır.

## Klasik BibTeX ile tarzı değiştirme

BibTeX'te stil, bir ".bst" dosyasını adlandıran "\bibliographystyle{...}" komutunda bulunur. Argümanı değiştirin ve yeniden derleyin:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Dergiler ve konferanslar genellikle kendi ".bst" dosyalarını gönderirler; örneğin "IEEEtran.bst" veya "ACM-Reference-Format.bst". Bu dosyayı 'main.tex' dosyanızın yanına koyun ve onu '\ bibliographystyle' olarak adlandırın. Bir ".bst" dosyasının tek bakışta oluşturulduğunu unutmayın; eğer mekan yazar yılı alıntıları istiyorsa, '\citep' ve '\citet' gibi komutları almak için 'natbib' paketine de ihtiyacınız var.

## biblatex ile tarzı değiştirme

Biblatex'te stil, paketin kendisinde bir seçenektir:

```latex
\usepackage[style=authoryear]{biblatex}
```

Diğer yaygın değerler, "[3-6]", "stil=alfabetik" gibi sıkıştırılmış aralıklar için "stil=sayısal", "stil=sayısal-comp" ve eklenti paketlerinden "stil=apa" veya "stil=ieee"dir. Biblatex stilleri eski ".bst" dili yerine LaTeX'te yazıldığı için, noktalama işaretlerini değiştirmek veya URL'leri bırakmak gibi ince ayarlar yapmak çok daha kolaydır.

## Geçişten sonra düzgün şekilde yeniden derleyin

Herhangi bir stil değişikliğinden sonra, eski yardımcı dosyalar hala önceki stile göre biçimlendirilmiş verileri içerir, bu nedenle tam bir döngü çalıştırın: bir kez derleyin, arka ucu çalıştırın (klasik BibTeX için "bibtex", biblatex için "biber"), ardından çapraz referansların yerleşmesi için iki kez daha derleyin. Oleafly bu döngüyü sizin için çalıştırır, ancak manuel geçişten sonra alıntılar eski görünüyorsa, ".aux" ve ".bbl" dosyalarını silmek ve sıfırdan yeniden oluşturmak sorunu giderir.

## Hangi aileyi kullanmalısınız?

Hedef mekan BibTeX'i bekleyen bir ".bst" dosyası veya sınıf sağlıyorsa klasik BibTeX'i kullanın; çoğu dergide durum hâlâ budur. Bir tezde veya ön baskıda olduğu gibi formatı kendiniz kontrol ediyorsanız biblatex daha yetenekli bir seçimdir. Takaslar [Klasik BibTeX veya biblatex](/learn/bibtex-vs-biblatex/) ve [natbib alışkanlıkları ve biblatex komutları](/learn/natbib-vs-biblatex/) arasındaki komut farklılıkları kapsamında ele alınmaktadır.