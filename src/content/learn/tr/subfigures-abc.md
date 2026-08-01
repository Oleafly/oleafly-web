---

title: "a, b, c etiketli paneller"
description: "Çok panelli şekiller için tek başlık altında alt başlık."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# a, b, c etiketli paneller

Makaleler sürekli olarak çok panelli şekillere ihtiyaç duyar: (a) panelindeki mimari, (b)'deki eğitim eğrisi, (c)'deki ablasyon, hepsi aynı şekil numarasını ve bir genel başlığı paylaşıyor. Bunu oluşturmanın temiz yolu, size (a), (b) harflerini, panel başına altyazıları ve referanslamayı otomatik olarak yöneten bir 'alt şekil' ortamı sağlayan 'alt başlık' paketidir.

## Desen

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

İşte her parçanın yaptığı şey. Dıştaki "figure" ortamı normal bir kayan noktadır ve "[htbp]" LaTeX'in deneyebileceği yerleşimleri sırasıyla listeler: burada metinde, sayfanın üstünde, sayfanın altında veya özel kayan sayfada. Her bir "alt şekil", belirtilen genişlikte bir kutudur; burada "0,48\textwidth" (metin genişliğinin yüzde 48'i). 0,48'lik iki panel küçük bir boşluk bırakır ve aralarındaki 'dolgu' uzar, böylece paneller sol ve sağ kenar boşluklarına yaslanır. Her panelin içindeki "genişlik=\satır genişliği", görüntüyü tüm sayfaya göre değil panelin genişliğine göre ölçeklendirir. Bu son ayrıntı insanların en sık yanıldığı noktadır.

Bir 'alt şekil' içindeki '\başlık', o panelin altında küçük "(a) Birinci" stili etiketi üretir. Sondaki, "şekil"in içinde ancak herhangi bir "alt şekil"in dışında yer alan "\başlık", şekil numarasını taşıyan ana başlıktır. Her bir "\etiket"i "\başlık"tan hemen sonra saklayın, çünkü bir etiket, [altyazılar ve etiketler](/learn/captions-labels/) bölümünde açıklandığı gibi, en son verilen numarayı kaydeder.

## Referans panelleri

Yukarıdaki etiketlerle, `\ref{fig:p}` şekil numarasını (örneğin 2) yazdırırken, `\ref{fig:p-a}` 2a'yı yazdırır. Yalnızca harfi istiyorsanız, `\subref{fig:p-a}` yalnızca "a" harfini yazdırır; "paneller (a) ve (b)" gibi cümleler için kullanışlıdır. Bu, resimlerin altına manuel olarak "(a)" yazmanın yerine "alt başlık" koymanın gerçek getirisidir. Panel eklediğinizde veya yeniden sıraladığınızda harfler kendilerini yeniden numaralandırır ve her referans doğru kalır.

## Satırlar, aralıklar ve yaygın bir hata

Üçüncü bir panel için, ya genişlikleri yaklaşık '0,31\textwidth'e küçültün ve her çiftin arasına '\hfill' ile başka bir 'alt şekil' ekleyin ya da alt şekil satırları arasında boş bir satır bırakarak yeni bir satır başlatın. Bununla birlikte, bir satırın içindeki boş bir satır klasik bir hatadır: iki "alt şekil" ortamı arasındaki herhangi bir boş satır, panelleri yan yana yerine dikey olarak istifleyen yeni bir paragraf başlatır. Panelleriniz aynı sıraya oturmayı reddediyorsa, önce başıboş boş bir satır arayın ve satırın sonundaki "%" ifadesinin, paneli sığamayacak kadar genişletebilecek görünmez satır sonu boşluğunu yorumladığını unutmayın.