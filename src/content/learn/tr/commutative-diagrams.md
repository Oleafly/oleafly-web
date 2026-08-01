---

title: "Değişmeli diyagramlar"
description: "Koordinat çorbası olmayan tikz-cd okları ve etiketleri."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# Değişmeli diyagramlar

Değişmeli diyagram, kategori teorisi, cebir ve topolojideki standart resim olan etiketli oklarla birleştirilen nesnelerin bir ızgarasıdır. Raw TikZ bir tane çizebilir ancak her düğümü koordinata göre yerleştirmek yavaş ve kırılgandır. 'Tikz-cd' paketi TikZ'yi matris benzeri bir sözdizimiyle sarar: nesneleri bir tablo gibi yerleştirirsiniz ve her oku yönüne göre tanımlarsınız.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

## Söz dizimini okuma

Izgara bir matris gibi çalışır: "&" sütunları ayırır ve "\\" satırları ayırır; dolayısıyla bu diyagramın üst satırında A ve B, alt satırında ise C ve D bulunur. Her `\arrow[...]` yazıldığı hücreye aittir ve ondan uzağa işaret eder. İlk seçenek, "r", "l", "u" ve "d" harfleriyle yazılan yöndür: "\arrow[r]" bir hücre sağa, "\arrow[d]" bir hücre aşağıya gider. Harfler köşegenler ve daha uzun erişimler için birleşip tekrarlanır; dolayısıyla "rd" sağdan bir adım aşağıdadır ve "rr" iki sütunu kapsar.

Tırnak içindeki bir etiket ok üzerindedir. Varsayılan olarak bir tarafta bulunur; Kapanış tırnak işaretinden sonra gelen bir asal sayı, "g"''de olduğu gibi onu diğer tarafa çevirir. Örnekte, asal sayılar dört etiketin tamamını karenin dışında tutar; bu, olağan temiz düzenlemedir.

## Daha fazla ok seçeneği

Okun stilini değiştirmek için yön ve etiketten sonra diğer seçenekler yığılır. 'kanca' kuyruğu bir dahil etme okuna dönüştürür, 'iki kafa' bir surj için kafayı ikiye katlar, 'kesikli' varsaymak yerine iddia ettiğiniz bir haritayı işaretler ve 'Sağ Ok' doğal dönüşümler için kullanılan çift şaftlı oku üretir. Tipik bir evrensel özellik okunda `\arrow[rd, dashed, "\exists u"']` ifadesi bulunur. Bir diyagram sıkışık göründüğünde ortamdaki aralıklama seçenekleri yardımcı olur, örneğin `\begin{tikzcd}[column sep=large]'.

## Pratik notlar

"tikz-cd", TikZ'nin kendisini yükler, dolayısıyla ayrı bir "\usepackage{tikz}" satırına gerek yoktur ve diyagramlar standart bir motorla derlenir ve harici bir çizim aracına gerek kalmaz. En yaygın yapısal hata, düzensiz bir ızgaradır: farklı sayıda "&" ayırıcısı olan satırlar, nesneleri yanlış sütunlara kaydırır ve oklar daha sonra tuhaf yerlere düşer. Yukarıdaki gibi çalışan bir kareyle başlayın, her seferinde bir satır veya sütun büyütün ve ilerledikçe yeniden derleyin. Diyagramlarda gözle hata ayıklamak kaynaktan hata ayıklamaktan çok daha kolaydır ve [canlı oyun alanı](/live/) siz yazarken size bu geri bildirimi verir.