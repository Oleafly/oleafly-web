---

title: "Bir sayfadan uzun tablolar"
description: "tekrarlanan uzun tablo üstbilgileri ve altbilgileri."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Bir sayfadan uzun tablolar

Sıradan bir "tablo" ortamı bir kayan noktadır ve kayan noktanın tek bir sayfaya sığması gerekir. Altmış satır verdiğinizde LaTeX ya onu kayan bir sayfaya iter ve taşmasına izin verir ya da sonsuza kadar erteler. Çözüm, elektronik tablo çıktılarında olduğu gibi sayfalar arasında bölünen ve her birinde başlığını tekrarlayan bir tablo dizen "uzun tablo" paketidir.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Başlık blokları nasıl çalışır?

Bir "uzun tablo", gerçek veri satırlarından önce en fazla dört bildirim bloğuyla başlar. `\endfirsthead`in üzerindeki her şey tablonun en başında bir kez basılan başlıktır. `\endfirsthead` ve `\endhead` arasındaki her şey, sonraki her sayfanın üst kısmında tekrarlanan başlıktır; bu nedenle aynı "Anahtar ve Değer" satırı örnekte iki kez görünür. '\endfoot' ile biten blok, tablonun dokunduğu her sayfanın altına yazdırılır, burada sadece bir kapanış '\bottomrule' bulunur. Ayrıca toplamlar satırı gibi yalnızca son satırların altında görünmesi gereken malzeme için "\endlastfoot" da vardır. Devam ipucu istiyorsanız, yaygın bir kalıp ayak bloğunda `\midrule \multicolumn{2}{r}{continued on page} \\` ve son ayakta gerçek `\bottomrule` olur.

Bildirimlerden sonra, normal bir 'tablo' şeklinde yazılan, hücreler arasında '&' ve her satırın sonunda '\\' bulunan veri satırları gelir. 'booktabs' kuralları değişmeden çalışır. Değiştirdikleri şeyler için [üç kurallı tablolara](/learn/booktabs-beautiful/) bakın.

## Kayan nokta değil ve bu ne anlama geliyor?

En önemli davranış farklılığı bir cümlede ifade ediliyor: 'longtable' bir kayan nokta değil. Tam olarak kaynağa yerleştirdiğiniz yerde başlar, sayfaların bittiği yerde kesilir ve hiçbir "[htbp]" argümanı almaz. Bu aynı zamanda altyazıların çalışma şeklini de değiştirir. Bir 'uzun tabloyu' bir 'tablo' ortamına sarmazsınız. Bunun yerine, ilk başlık bloğunun ilk satırı olarak tablonun içine `\caption{...}\\` yazın; bu, diğer tablolarınızla aynı sırayla numaralandırılacaktır.

## Ona güvenmeden önce bilmeniz gereken iki şey

İlk olarak, sütun genişliklerine genel olarak karar verilir, bu nedenle LaTeX'in sütunların kayması durmadan önce birkaç derleme geçişine ihtiyacı olabilir. Düzen yerleşene kadar derlemeye devam edin. İkincisi, 'uzun tablo' iki sütunlu bir düzende kullanılamaz, bu da çoğu konferans şablonu için onu dışlar. Bu belgelerde gerçekçi seçenekler tabloyu küçültmek, parçalara bölmek veya tek sütunlu bir eke taşımaktır.