---

title: "pt, em, metin genişliği"
description: "Gerçekte belirlediğiniz mutlak ve yazı tipine bağlı birimler."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, metin genişliği

LaTeX'teki neredeyse her düzen komutu bir uzunluk alır: dikey alan, görüntü genişlikleri, kenar boşlukları, kural kalınlıkları. Uzunluk, bir sayı artı bir birimdir ve birim seçimi, yazı tipi boyutu veya sayfa geometrisi değiştiğinde mizanpajın uyarlanıp uyarlanmayacağına veya değiştiği günü bozup bozmayacağına karar verir.

| Birim | Anlamı |
| --- | --- |
| 'pt' | Nokta (taban) |
| 'onlar' | Yazı tipine bağlı genişlik |
| 'eski' | Yazı tipine bağlı yükseklik |
| 'cm' / 'mm' / 'inç' | Mutlak |
| `\textwidth' | Metin bloğunun genişliği |
| `\çizgi genişliği` | Geçerli sütunun/mini sayfanın genişliği |

## Mutlak ve bağıl birimler

'pt' yazıcının noktası, TeX'in temel birimidir. Yazı tipi boyutları ve birçok dahili varsayılan nokta olarak belirtilir ve TeX'in hesaplamasına göre bir inç 72,27 puntodur. "cm", "mm" ve "inç", zorunlu bir inçlik kenar boşluğu gibi bir gereksinimin gerçekten fiziksel olduğu durumlarda uygun olan tanıdık mutlak birimlerdir.

'em' ve 'ex' geçerli yazı tipiyle ölçeklenir: em kabaca genişlik olarak ifade edilen yazı tipi boyutudur ve ex ise küçük x harfinin yüksekliğiyle ilgilidir. Avantajları orantılılıktır. Belge 10 punto türünden 12 punto türüne geçtiğinde, sabit kodlu bir "\vspace{12pt}" çok sıkı veya çok gevşek hale gelirse, "\vspace{1em}" görsel olarak tutarlı kalır.

## Belgenin size verdiği uzunluklar

`\textwidth` sayfanın metin bloğunun genişliğidir. `\linewidth` geçerli kabın genişliğidir; sıradan metinde `\textwidth`e eşittir ancak bir mini sayfa, liste veya sütun içinde daraltılır. Ön taraftaki ondalık sayı her ikisini de ölçeklendirir ve bu, rakamları boyutlandırmanın standart yoludur:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

İlk satır bir em dikey boşluk ekler. İkincisi, görüntüyü metin bloğunun genişliğinin yarısına ayarlar; böylece kenar boşlukları değişirse şekil onlarla birlikte yeniden ölçeklenir ve hiçbir zaman kenar boşluğuna taşmaz. Bir mini sayfa veya iki sütunlu düzen içinde, "0,5\satır genişliği"ni tercih edin, çünkü "\textwidth" gerçekte sahip olduğunuz alandan daha geniştir.

Uzunluklar da ayarlanabilir. `\setlength{\parindent}{0pt}` paragraf girintisini kaldırır ve aynı komut, adlandırılmış düzen uzunluklarının çoğunu ayarlar.

Yaygın hata rakamları santimetre cinsinden boyutlandırmaktır. Belge sınıfı, kağıt boyutu veya kenar boşlukları değişene kadar çalışır ve ardından her şeklin elle yeniden ayarlanması gerekir. "\textwidth" veya "\linewidth" kesirleri olarak ifade edilen genişlikler, tüm bu değişikliklere dokunulmadan devam eder, bu nedenle şablonlar neredeyse yalnızca bunları kullanır.