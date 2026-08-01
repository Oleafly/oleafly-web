---

title: "Üç kurallı tablolar"
description: "üst kural, orta kural, alt kural ve dikey çizgileri atlama."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Üç kurallı tablolar

İyi hazırlanmış herhangi bir günlüğü açın ve tablolara bakın. Hemen hemen hepsi aynı tasarımı izliyor: üstte bir kural, başlığın altında bir kural, altta bir kural ve başka hiçbir şey yok. Dikey çizgiler yok, ızgara yok. Bu, adını onu uygulayan paketten alan "booktabs" stilidir ve buna geçiş yapmak genellikle LaTeX tablolarında yapabileceğiniz en büyük görsel yükseltmedir. Paket, üç kuralla eşleşen üç komut sağlar:

```latex
\toprule
...
\midrule
...
\bottomrule
```

Tam bir tabloda şöyle görünürler:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Kurallar neyin yerini alıyor

'Kitap sekmeleri' olmadan, insanlar sütun spesifikasyonunda '{|l|c|c|}' gibi '\hline' ve dikey çubuklarla çizgiler çizerler. Sonuç bir kafestir: '\hline' nefes alacak yer bırakmadığından her hücre kutu içine alınır ve metin kurallara aykırı olarak sıkıştırılır. 'Booktabs' komutları, '\hline' yerine yerleşik dikey dolgu içeren kurallar koyar ve '\toprule' ve '\bottomrule', '\midrule'dan biraz daha ağırdır, dolayısıyla tablo görünür bir çerçeveye ve daha hafif bir iç bölmeye sahiptir. İşin püf noktası bu aralık ve ağırlık farkı. Verilerde yer var, başlık net bir şekilde ayrılmış ve hiçbir şey sayılarla rekabet edemiyor.

Dikey kurallar basitçe atlanmıştır. Sütun hizalaması zaten okuyucuya bir sütunun nerede bitip diğerinin nerede başladığını gösterir ve dikey çizgiler çoğunlukla netlik katmadan mürekkep ekler. 'booktabs' belgeleri onları desteklemeyi reddedecek kadar ileri gidiyor.

## Gruplandırılmış başlıklar için kısmi kurallar

Bir başlık birkaç sütunu kapsıyorsa, örneğin "Puanlar" doğruluğun ve F1'in üzerinde yer alıyorsa, yalnızca bu sütunların altını çizmek için "\cmidrule" komutunu kullanın:

```latex
\cmidrule(lr){2-3}
```

"{2-3}" aralığı, kuralın hangi sütunları kapsadığını belirtir ve "(lr)" seçeneği, komşu kuralların tek bir uzun çizgide birleşmemesi için sol ve sağ uçlardan biraz kırpar. Bu, [satırları veya sütunları kapsayan hücrelerde](/learn/merged-cells/) gösterilen "\multicolumn" ile eşleşir.

## Sayılar ve hizalama

Bir ölçüm tablosu, ondalık noktalar aynı hizada olduğunda en iyi şekilde okunur. "siunitx" paketi, ondalık işaretçisindeki sayıları otomatik olarak hizalayan bir "S" sütun türü sağlar; böylece "0,9" ve "0,88", farklı basamak sayılarında bile birbirinin altına doğru şekilde oturur. Tablolarınız gerçek verileri taşıdığında benimsemeye değer.

Yaygın hata sistemleri karıştırmaktır: burada bir "\hline", burada bir "\orta kural" ve şablondan kalan çubukların bulunduğu bir sütun özelliği. Üç kurallı stili seçin ve bunu belgedeki her tabloya uygulayın. Tutarlılık, stilin kasıtlı görünmesini sağlayan şeylerin çoğudur. Çevredeki "tablo" kayan noktasının tam açıklaması [kağıt masa gibi görünen bir tablo](/learn/create-table/) bölümünde bulunmaktadır.