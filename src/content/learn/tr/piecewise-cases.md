---

title: "Parçalı tanımlar"
description: "Tek bir fonksiyon altındaki koşullar için vaka ortamı."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Parçalı tanımlar

Parçalı bir işlev, etki alanının farklı bölümlerine ilişkin farklı formüller verir: mutlak değer, ReLU aktivasyonu, vergi dilimi planı. Dizgi kuralı, her durumda bir satır bulunan tek bir uzun sol parantezdir; her satır, formülü ve uygulandığı koşulu gösterir. 'Amsmath' paketi, herhangi bir manuel destek boyutlandırması olmadan tam olarak bu düzeni üreten 'vakalar' ortamını sağlar.

## Vaka ortamı

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Bu satırı satır satır okumak: her şey `\[ ... \]` içinde yer alır, yani matematik kendi satırında görüntülenir. 'f(x) =' sıradan bir matematiktir ve ardından '\begin{cases}' parçalı bloğu açar. İçeride, her satırın "&" ile ayrılmış iki sütunu vardır: solda formül, sağda koşul. Satırlar `\\` ile biter ancak son satırın buna ihtiyacı yoktur. LaTeX derlendiğinde, her iki satırı da kapsayacak kadar uzun bir sol parantez çizer ve formülleri bir sütuna, koşulları ise başka bir sütuna hizalar.

`&` burada gerçek iş yapıyor. O olmasaydı her satır tek bir damla olurdu ve koşullar dikey olarak sıralanmazdı. Bununla birlikte, "x^2" ve "-x" bir sol kenarı paylaşır ve "x \ge 0" ve "x < 0" kendi sol kenarlarını paylaşır, bu da tanımı taranabilir kılar.

Bunun derlenmesi için iki şeyin mevcut olması gerekir. İlk olarak girişte `\usepackage{amsmath}' kullanın, çünkü `cases' LaTeX'in çekirdeğinin bir parçası değildir. İkincisi, ortamın matematik modunda olması gerekir. 'vakalar' matematik içeriği oluşturur ancak matematik modunu tek başına açmaz. Bunlardan herhangi biri eksikse, "Ortam durumları tanımsız" veya "Eksik $ eklendi" hatası alırsınız. İkincisi [Eksik dolar eklendi](/learn/missing-dollar/) bölümünde açıklanmıştır.

## Kelimeleri ekleme

Yayınlanan parçalı tanımların çoğu "eğer" kelimesini ve genellikle son olarak "aksi halde" kelimesini içerir. Koşul sütunu matematik modu olduğundan, düz kelimelerin belge yazı tipinde uygun aralıklarla çıkması için `\text{...}' gerekir:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

'\text{if }' içindeki boşluğa dikkat edin. Matematik modu yazdığınız boşlukları yok sayar, ancak `\text` içindeki boşluklar gerçektir, dolayısıyla kapanış ayracının önüne bir tane koymak "if" ifadesini sonraki koşuldan ayırır.

## Değişkenler ve yaygın bir hata

Formüller uzun kesirlerse ve sıkışık görünüyorsa, "mathtools" paketi, her formülü görüntüleme stilinde ayarlayan bir değiştirme özelliği olan "dcases"i sunar. Ayrıca desteğin sağ tarafa ait olduğu ayna görüntüsü durumu için 'rvakalar' da vardır.

En sık yapılan hata, iki durumu sessizce tek bir uzun satırda birleştiren satırlar arasında `\\` unutulmasıdır. Derlenmiş çıktınız formüllerle çalışan koşulları gösteriyorsa ilk önce satır sonlarınızı sayın. [Oyun alanında](/live/) ortamı canlı olarak deneyebilirsiniz.