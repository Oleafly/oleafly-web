---

title: "Teorem ve kanıt blokları"
description: "amsthm stilleri, paylaşılan sayaçlar, prova sonu işaretleri."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Teorem ve ispat blokları

Matematiksel yazım, numaralı ifadeler üzerinde çalışır: teoremler, lemmalar ve tanımlar; her biri metinden çıkarılır ve daha sonraki ispatların bunlardan alıntı yapabilmesi için numaralandırılır. 'Amsthm' paketi makineyi besliyor. Belgenizin ihtiyaç duyduğu blok türlerini önsözde bir kez belirtir, ardından bunları sıradan ortamlar olarak kullanırsınız.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Ortamları bildirme

`\yeniteorem{teorem}{Teorem}[bölüm]`, bir 'teorem' ortamı oluşturur. İlk argüman yazacağınız ortam adıdır, ikincisi yazdırılan başlık metnidir ve takip eden '[bölüm]' numaralandırmayı bölümlere bağlar, dolayısıyla bölüm 2'nin üçüncü teoremi Teorem 2.3'tür ve sayaç her yeni bölümde sıfırlanır.

`\newtheorem{lemma}[teorem]{Lemma}' isteğe bağlı argümanı farklı bir anlama geldiği diğer konuma yerleştirir: `[teorem]' lemmaların teorem sayacını kendilerine ait tutmak yerine teorem sayacını paylaştıklarını söyler. Paylaşılan bir sayaç tek bir dizi üretir; Teorem 2.1 ve ardından Lemma 2.2. Bunu takip etmek, Lemma 2.1 ve Teorem 2.1'in her ikisinin de mevcut olduğu paralel dizileri takip etmekten daha kolaydır.

'\theoremstyle', onu takip eden her bildirimin görünümünü belirler. 'Sade' stil, teoremler, lemmalar ve önermeler için geleneksel bir yaklaşım olan gövdeyi italik olarak yazdırır. 'Tanım' stili, tanımlara ve örneklere uygun şekilde vücudu dik tutar. Üçüncü stil olan 'açıklama' ise daha hafiftir ve notlara ve gözlemlere uygundur. Bildirimlerinizi her birinin kullanması gereken stile göre gruplandırın.

## Blokları kullanma

Ortamın isteğe bağlı argümanı başlıktan sonra bir ad yazdırır, dolayısıyla `\begin{teorem}[İsteğe bağlı ad]` Teorem 2.4 (Fubini) gibi bir sonuç verir. 'Prova' ortamı italik bir Prova başlığı yazdırır ve prova sonu işaretiyle, küçük kare sağa hizalı olarak kapanır.

`\qedhere` ispat sıradan metinle bitmediğinde bu kareyi yeniden konumlandırır. Bir ispatın son satırı görüntülenen bir denklemse, otomatik işaret onun altındaki boş bir satıra düşecektir. Ekranın içine `\qedhere` yazmak, kareyi denklemin kendi satırına yerleştirir. Örnekte olduğu gibi bir ispat düz metinle bittiği zaman komut zararsızdır ancak gereksizdir.

Teorem blokları diğerleri gibi numaralandırılmış nesnelerdir, dolayısıyla ortamdaki "\label{thm:main}" ve metindeki "Teorem~\ref{thm:main}", [denklemler için sayılar ve işaretçiler](/learn/number-equations/) bölümünde açıklanan olağan iki geçişli kurallarla çalışır. Yaygın bildirim hatası, her ortamın çok paragraflı tanımları italik olarak ayarlayan "\theoremstyle{plain}" altına yerleştirilmesidir. Tanımları ve örnekleri 'tanım' stili altında tutun.