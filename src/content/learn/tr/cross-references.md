---

title: "PDF'nin diğer bölümlerine gelin"
description: "label ve ref, ayrıca otomatik adlar için akıllı ef."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# PDF'nin diğer bölümlerine işaret edin

Elle "Şekil 3'e bakın" yazmak, tutamayacağınız bir sözdür. Kağıdın başına bir rakam ekleyin ve elle yazılan her rakamı yanlış yapın. LaTeX bunu iki parçalı bir mekanizmayla çözer: `\label` numaralı bir şeye sizin seçtiğiniz bir adı ekler ve `\ref` bu şeyin sonundaki sayı ne olursa olsun yazdırır. İsimlere başvuruyorsunuz ve derleyici sayıları dürüst tutuyor.

## Etiket ve ref

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}`, `sec:methods` anahtarının altına en son atanan numarayı (burada bölümün) kaydeder. Daha sonra, `\ref{sec:methods}` bu sayıyı yazdırır ve `\eqref', denklemler için parantez kuralını ekleyen ve "1" yerine "(1)" yazdıran amsmath çeşididir.

Bu örnekteki iki ayrıntı çok önemlidir. İlk olarak, bir şeklin içinde etiketin "\caption"dan sonra gelmesi gerekir, çünkü resim yazısı şekil sayacını adımlayan şeydir; bunun yerine, mevcut bölüm numarasını sessizce almasından önce yerleştirilen bir etiket. İkincisi, 'Şekil~\ref{...}' içindeki '~' bölünmez bir boşluktur; bu, "Şekil"in bir satırı bitirmesine ve "3"ün bir sonraki satırı başlatmasına izin vermek yerine sözcüğü ve numarasını aynı satırda tutar.

'sec:', 'fig:' ve 'eq:' önekleri tamamen gelenekseldir. LaTeX bunlara ihtiyaç duymaz, ancak anahtarları okunabilir hale getirir ve düzenleyicinin etiketlerinizi türe göre otomatik olarak gruplandırmasına olanak tanır.

## Neden görüyorsun?

Bir etiket eklendikten sonraki ilk derlemede `\ref`, `??` yazdırır. Sayılar, önceki çalıştırma sırasında yazılan `.aux` dosyası aracılığıyla çözümlenir, dolayısıyla yeni bir etiketin görünmesi için bir derlemeye daha ihtiyaç vardır; [neden birden fazla derleme yapıyorsunuz](/learn/compile-to-pdf/) mekanizmayı açıklıyor. İki ardışık derlemeden sonra hayatta kalan bir `??` neredeyse her zaman `\ref` içindeki anahtarın `\label` içindeki anahtarla eşleşmediği anlamına gelir.

## akıllıef kelimeyi sizin için yazıyor

Zekief ile (hiperref'ten sonra yükle):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}`, tür adı da dahil olmak üzere "Şekil 3"ü yazdırır ve etiketin bir tablo veya denklem olduğu ortaya çıkarsa uyarlanır. `\Cref` cümle başlangıçlarında büyük harf kullanır ve `\cref{eq:a,eq:b,eq:c}` listeyi bir aralığa sıkıştırır. Yükleme sırasına dikkat edin: akıllıef, genel kuralın tersi olan [hyperref](/learn/hyperlinks/)'den sonra gelmesi gereken birkaç paketten biridir. Erken benimseyin. Elle yazılmış "Şekil~\ref" ifadeleriyle dolu bir kağıda "\cref" eklemek sıkıcı bir iştir.