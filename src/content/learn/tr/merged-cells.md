---

title: "Satırları veya sütunları kapsayan hücreler"
description: "gruplandırılmış başlıklar altında çok sütunlu, çok satırlı, cmidrule."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Satırları veya sütunları kapsayan hücreler

Gerçek tablolar genellikle birleştirilmiş hücrelere ihtiyaç duyar. İki metrik sütunun üzerinde yer alan "Puanlar" gibi bir başlık, sütunları kapsar ve iki sonuç satırına uygulanan model adı, satırları kapsar. LaTeX iki yönü farklı araçlarla ele alır: `\multicolumn` yerleşiktir, `\multirow` ise aynı isimli paketten gelir. İşte her ikisini de kullanan kompakt bir tablo ve ayrıca "booktabs"dan kısmi bir kural:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Yayılan sütunlar

`\multicolumn{2}{c}{Scores}` iki sıradan hücreyi bir hücreyle değiştirir. İlk argüman kaç sütunun emileceğidir, ikincisi sadece bu hücre için bir sütun spesifikasyonudur, burada ortalanmış için 'c' ve üçüncüsü içeriktir. Önündeki tek `&` işaretine dikkat edin: bu satırın ilk sütunu kasıtlı olarak boştur, dolayısıyla "Puanlar" 2. sütunda başlar ve 2. ve 3. sütunları kapsar. İkinci argüman sütun türünü yerel olarak geçersiz kıldığından, `\multicolumn{1}{c}{...}' aynı zamanda tek bir başlık hücresini sola hizalanmış bir sütunun üzerinde ortalamak için standart bir hiledir.

## Kısmi kural

`\cmidrule(lr){2-3}` yalnızca 2'den 3'e kadar olan sütunların altına yatay bir kural çizer ve bu, gruplandırılmış başlığı görsel olarak sütunlarına bağlar. '(lr)' seçeneği kuralı sol ve sağ uçlarından hafifçe kırpar, böylece bitişik '\cmidrule'lar dokunmaz ve ayrı grup işaretçileri olarak okunmaz. Bu bir 'booktabs' komutudur ve kırpma, bu tabloların çizilmiş yerine dizilmiş gibi görünmesini sağlayan ayrıntılardan biridir. Üç kurallı stilin tamamı [üç kurallı tablolarda](/learn/booktabs-beautiful/) ele alınmıştır.

## Satırları yayma

`\multirow{2}{*}{Ours}`, "Bizimki" ifadesini 2 satır boyunca dikey olarak ortalanmış olarak yazdırır. İlk argüman satır sayısıdır, ikincisi hücre genişliğidir; burada "*" içeriğin doğal genişliği anlamına gelir ve üçüncüsü içeriğin kendisidir. Komut yalnızca görsel alanı ayırır, bu nedenle ikinci satırın hala boş bir ilk hücre sağlaması gerekir, bu nedenle sonraki satır çıplak bir `&` ile başlar. Boş hücrenin satırdaki her değeri bir sütun sola kaydırdığını ve yanlış hizalama hata mesajının yanlış satırı gösterdiğini unutmak, bu nedenle önce "\multirow"dan sonraki satırı kontrol edin.

## Pratik bir sınır

Birleştirilmiş hücrelerin başlıklarda ve kısa satır gruplarında tutulması en iyisidir. Veri hücrelerinin her iki yönde de yayıldığı bir tablonun okunması ve bakımı daha zordur çünkü eklenen her satır sizi yayılmaları yeniden saymaya zorlar. Kendinizi `\multicolumn` içine `\multirow`'u yerleştirirken bulursanız, bunun yerine tabloyu yeniden yapılandırmayı düşünün.