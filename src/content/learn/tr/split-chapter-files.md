---

title: "Bir kök dosya, birçok bölüm"
description: "vs girdiyi dahil etme, yalnızca dahil etme ve her seferinde bir bölüm taslağı hazırlama."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Bir kök dosya, birçok bölüm

Tek bir ".tex" dosyasındaki tez, ikinci bölüm civarında bir yerde çalışmak için perişan hale gelir: düşünmenin yerini kaydırmak alır ve her derleme her şeyi işler. Standart tedavi, her bölümün kendi dosyasında olduğu, sınıfı ve girişi tutan tek bir kök dosyadır. Kök dosya bunları bir araya getirir.

## Kök dosya

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

'main.tex' derlediğiniz tek dosyadır. Her bir "\include", her platformda eğik çizgileri kullanarak ".tex" uzantısı olmayan başka bir dosyayı adlandırır ve içeriğini o noktada içeri çeker. Bölüm dosyalarının kendisi yalnızca içeriği içerir ve genellikle "\chapter{...}" ile başlar. Kendilerine ait bir "\documentclass" ve bir "document" ortamı yoktur, çünkü bunlar belge değil, bu belgenin parçalarıdır.

## girişe karşı dahil et

İki dahil etme komutu farklı davranır ve farklılıklar hangisinin nerede kullanılacağına karar verir. '\include', materyalden önce bölümlere uygun yeni bir sayfa başlatır ve dahil edilen her dosya için ayrı bir '.aux' dosyası yazar; bu da seçici derlemeyi mümkün kılar. '\input' düz bir metin yapıştırmasıdır: sayfa sonu yoktur, ayrı bir '.aux' yoktur ve başka bir girişin içine yerleştirilebilir. Bu, kendi dosyasında saklanan büyük bir tablo veya paylaşılan bir [makro dosyası](/learn/custom-commands/) gibi bir bölümden daha küçük parçalar için `\input'u doğru araç haline getirir. Unutulmaması gereken bir yapısal kural, '\include'ın dahil edilen bir dosyanın içine yerleştirilemeyeceği, '\input'un ise her yerde kullanılabileceğidir.

## Her seferinde bir bölüm taslağı hazırlamak

```latex
\includeonly{chapters/methods}
```

Giriş kısmına yerleştirilen "\includeonly", LaTeX'e yalnızca listelenen dosyaları işlemesini ve diğer tüm dosyaların kayıtlı ".aux" verilerini okumaya devam etmesini söyler. Derleme önemli ölçüde hızlanır ve diğer bölümlerin etiketleri ve sayfa sayıları `.aux' dosyalarından tekrar oynatıldığından, taslağını hazırladığınız bölümdeki çapraz referanslar ve numaralandırmalar doğru kalır. Bu ikinci yarı, diğer bölümleri tamamen unutan ve her '\ref'i onlara '??'ye dönüştüren '\include' satırlarını yorumlamak yerine bunu tercih etmenin nedenidir.

Tam derlemeler için "\includeonly" satırını yorumlayın ve eski ".aux" verileri, hariç tutulan bölümlerde yapılan düzenlemelerin gerisinde kalabileceğinden, bir PDF'yi paylaşmadan önce her zaman tam bir derleme çalıştırın. Ortaya çıkan klasördeki hangi dosyaların size ait olduğunu ve hangilerinin oluşturulduğunu öğrenmek için [gerçek bir projedeki dosyalara](/learn/latex-file-types/) bakın.