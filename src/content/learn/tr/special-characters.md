---

title: "Kaynağı bozan karakterler"
description: "Çizgiyi bozmadan yüzde, dolar, ve işareti, alt çizgi, parantez nasıl yazılır?"
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Kaynağı bozan karakterler

LaTeX, sözdizimi olarak bir avuç günlük karakteri ayırır ve gerçek karakteri kast ettiğiniz yere bir tane yazmak ya derlemeyi durdurur ya da çıktıyı sessizce yönetir. Her ayrılmış karakterin bir kaçışı vardır ve setin tamamı küçük bir masaya sığar.

| Karakter | Kod |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash' |

## Kaçamayan karakterler ne yapar?

`%` bir yorum başlatır, böylece ondan satırın sonuna kadar olan her şey atılır. Bu olağan "cezam kayboldu" hatasıdır: bir rapora %50 yazarsanız satırın geri kalanı hiçbir hata olmadan kaybolur. '$' matematik modunu değiştirir, böylece başıboş bir tanesi metni sessizce italikleştirir veya yazım hatasından uzak hatalara neden olur. `&` tablolardaki ve 'hizalama' bloklarındaki hizalama sekmesidir; bunların dışında "Yanlış yerleştirilmiş hizalama sekmesi" ile başarısız oluyor. '#' makro parametrelerini işaretler. `_` ve `^` matematik moduna aittir ve metinde "Eksik $ eklendi" ifadesini yükseltirler, bu da [kendi dersine sahiptir](/learn/missing-dollar/). `~` bölünemez bir boşluktur, dolayısıyla bir URL'ye veya yola yazılan yaklaşık işareti sessizce boşluk haline gelir. `\` her komutu başlatır, bu yüzden kendisinden kaçamaz: `\\` bir satır sonudur ve değişmez karakterin `\textbackslash'a ihtiyacı vardır.

## Pratikte kaçış

İlk altı karakter için kaçış, ters eğik çizgi önekidir ve diğer komutlarda da aynı şekilde çalışır:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Alt çizginin "\texttt" içinde bile çıkarılması gerektiğini unutmayın. İki komut stili kaçışı, `\textasciitilde` ve `\textbackslash`, ardından bir harf geldiğinde `{}` veya bir boşluk gelmelidir, böylece komut adı sonraki kelimeyi yutmaz.

Tüm kod parçaları, yollar veya URL'ler için kaçış işlemini tamamen atlayın. `\verb|...|` ve `verbatim` ortamı, içeriklerini tam olarak yazıldığı gibi yazdırır, her özel karakter devre dışı bırakılır ve `url` paketinin `\url{...}` tilde işaretleriyle tamamlanan bağlantıları işler.

En çok ısıran karakterler sessizce başarısız olanlardır ve listenin başında `%` yer alıyor. Yapıştırılan metin olağan suçludur: URL'ler, kabuk komutları ve mali rakamların tümü ayrılmış karakterler taşır. PDF'de bir cümle kaybolduğunda, her şeyden önce kaynağın o satırında yalnızca "%" ifadesini arayın.