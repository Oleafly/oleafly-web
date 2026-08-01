---

title: "Algoritmalar ve kaynak listeleri"
description: "Algoritma2e taslağı ve gerçek kod için listeler."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Algoritmalar ve kaynak listeleri

Makaleler kodu iki farklı biçimde sunar ve LaTeX'in her biri için ayrı bir aracı vardır. Pseudocode, bir algoritmanın idealize edilmiş bir taslağıdır, anahtar kelimeler ve matematikle dizilir ve "algorithm2e" paketi bunu yönetir. Kaynak listeleri, tek aralıklı bir yazı tipinde kelimesi kelimesine yeniden üretilmiş gerçek kodlardır ve "listings" paketi bunları yönetir. Yanlış aletin seçilmesi olağan sürtüşme kaynağıdır, dolayısıyla her ikisini de görmeye yardımcı olur.

## Algoritma2e ile sözde kod

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Paket seçenekleri görsel stili belirler: "kurallı", algoritmanın üstüne ve altına yatay kurallar çizer ve başlığı en üste yerleştirir; bu, çoğu mekanın beklediği kuraldır; "vlined" ise her bloğun boyutunu belirten küçük bir dikey çizgi çizer, böylece iç içe yerleştirme, ağır girintiler olmadan okunabilir kalır. 'Algoritma' ortamı bir şekil gibi bir kayan noktadır, dolayısıyla kendisine alıntı yapılacak '\ref' için bir sayı veren '\başlık'ı taşır.

İçeride, `\While{condition}{body}`, döngüyü kalın bir anahtar kelimeyle, koşulu ve gövdeyi girintili bir blok olarak yazar. `\For`, `\If` ve `\Return` aynı düzeni izler. İfadeler satırın sonlandırıcısını yazdıran ve yeni bir satır başlatan `\;` ile biter. Bunu unutmak başlangıç ​​seviyesindeki klasik hatadır: çizgiler birlikte ilerler. Bu sıradan bir LaTeX olduğundan, "$\theta$" gibi matematik satır içi çalışır, sözde kod da bunun içindir: güncelleme kuralını belirli bir dil yerine notasyonla açıklamak.

## Listelerle birlikte gerçek kod

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

'Lstlisting' ortamı, boşlukları koruyarak ve özel karakterleri tam anlamıyla işleyerek içeriğini tam olarak yeniden üretir, böylece hiçbir şeyden kaçmadan kodu yapıştırabilirsiniz. 'Language=Python' seçeneği o dil için anahtar kelime vurgulamayı açar ve 'listeler' düzinelerce başka dili tanır. Varsayılan olarak çıktı düzdür. Çoğu kişi, satır numaralarıyla makul boyutta tek aralıklı bir yazı tipi elde etmek için giriş kısmına bir kerelik `\lstset{basicstyle=\ttfamily\small, sayılar=left}' ekler. Bir dosyayı yapıştırmak yerine doğrudan eklemek için, `\lstinputlisting[language=Python]{train.py}` onu diskten okur, bu da kağıdın gerçek kaynakla senkronize olmasını sağlar. Renkli, aslına uygun vurgulama istiyorsanız, harici bir araç ve kabuk kaçışı gerektirme pahasına "dalgalı" paket daha güçlü bir alternatiftir.

## Aralarında seçim yapma

Fikri iletmek için makalenin gövdesinde sahte kod kullanın ve ekler veya araç açıklamaları gibi tam kodun önemli olduğu yapılar için kelimesi kelimesine listeleri ayırın. Yaygın bir hata, Beamer çerçevesinin içine "[fragile]" seçeneği olmadan bir "lstlisting" yerleştirmektir; bu, opak bir hatayla başarısız olur; aynı uyarı [ilk Beamer destesinde](/learn/beamer-basics/)'de de görülüyor.