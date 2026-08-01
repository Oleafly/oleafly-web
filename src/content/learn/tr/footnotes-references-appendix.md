---

title: "Dipnotlar, referanslar ve ekler: kim ne yapıyor?"
description: "Kenarların, kanıtların ve taşan materyallerin her birinin ait olduğu yer ve bunları gerçekte kimin okuduğu."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Dipnotlar, referanslar ve ekler: kim ne yapıyor

Bir kağıdın ana akışa ait olmayan malzemeleri koyabileceği üç yeri vardır ve her birinin ayrı bir görevi vardır. Doğru içeriği doğru yere koyun ve okuyucuların odaklanmasını sağlayın. Bunları karıştırın ve kağıdınız çöp çekmecesi gibi okunsun.

## Dipnotlar: kibarlığı bir yana bırakalım

Dipnot, söylenmeye değer ancak cümleyi yarıda kesmeye değmeyecek bir şey içindir: bir URL, bir açıklama, bir uyarı, "bu gözlem için bir incelemeciye teşekkür ederiz."

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Bunları dikkatli kullanın. Her paragrafında dipnot bulunan bir makale kendi kendisiyle tartışan bir makaledir. İçerik önemliyse, onu metne tanıtın. Önceki çalışmalardan alıntı yapılabilirse, bunun yerine referanslara aittir. Bazı mekanlar, uygun alıntılar yapılması adına URL'ler için dipnotları yasaklıyor; bu nedenle şablonu kontrol edin.

## Referanslar: kanıt izi

Bir eserden alıntı yaptığınızda, bir iddianın arkasındaki delile işaret ediyorsunuz: Bu gerçek orada ortaya çıktı, bu yöntemi onlar ortaya koydu, bu veri seti buradan geliyor. Referans listesi, kimin üzerine inşa ettiğinizin tam haritasıdır ve gözden geçirenler, hem eksik girdiler hem de onları gerçekte desteklemeyen alıntılara iliştirilen iddialar açısından onu dikkatle kontrol ederler.

LaTeX'te mekanizmalar otomatiktir: metinde "\cite{key}", ".bib" dosyanızda bir giriş ve liste kendini oluşturur.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

İş akışının tamamı [alıntı ekleme](/learn/add-citations/) ve [kaynakça oluşturma](/learn/create-bibliography/) bölümündedir. Oleafly, DOI aramasından bir ".bib" girişini doldurabilir; bu, elle yazılan yazar listelerini geride bırakır.

## Ek: taşma odası

Ekte makaleyi destekleyen ancak akışını bozacak materyaller bulunmaktadır: tam provalar, ekstra sonuç tabloları, hiperparametre ızgaraları, bilgi istemi şablonları, veri kümesi belgeleri. Kural, ana makalenin tek başına durması gerektiğidir. Ekleri hiç açmayan bir okuyucunun yine de ikna olması gerekir; Onu açan bir okuyucunun kendisine söz verilen her ayrıntıyı bulması gerekir.

```latex
\appendix
\section{Full proofs}
```

'\ek'ten sonra bölümler otomatik olarak A, B, C harflerini alırlar.

## Ek materyal: PDF'nin dışında

Tamamlayıcı materyal, bir PDF'de hiçbir şekilde bulunamayacak her şeydir: kod, veriler, videolar, etkileşimli demolar. Birçok mekan bunu kendi boyut sınırlarıyla ayrı bir yükleme olarak topluyor. Bunu tekrarlanabilirlik hikayenizin bir parçası olarak değerlendirin ve okuyucuların bunun var olduğunu bilmesi için yöntem bölümünde ona açıkça atıfta bulunun.

## Aslında kim neyi okuyor

| Bölüm | İncelemeci davranışı |
|---|---|
| Dipnotlar | Geçerken okuyun, çabuk unutun |
| Referanslar | Başta kendilerinin olmak üzere eksik işleri tarandı |
| Ek | Gazetedeki bir iddianın kontrol edilmesi gerektiğinde açıldı |
| Tamamlayıcı | Kodunuzu çalıştıran tek incelemeci tarafından açıldı |

Bunun pratikte anlamı şudur: Önemli hiçbir şeyi dipnot veya ekte asla saklamayın. Hakemler ana metni değerlendiriyor ve "cevap Ek F'deydi" ifadesi hiçbir zaman bir incelemeyi yumuşatmadı. En iyi malzemenizi kâğıdın bulabileceği yere koyun ve arkadaki maddenin en iyi yaptığı şeyi yapmasına izin verin: faturaları sessizce tutun.