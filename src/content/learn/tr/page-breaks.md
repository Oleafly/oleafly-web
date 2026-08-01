---

title: "Sayfa sonunu zorunlu kılma veya reddetme"
description: "yeni sayfa, temizleme sayfası, geçici sayfa sonu, sayfa sonu yok."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Sayfa sonunu zorunlu kılın veya reddedin

LaTeX sayfaların nerede biteceğine karar verir. Çoğu zaman iyi karar verir, ancak bazen bunu geçersiz kılmanız gerekir: bir bölüm başlığı sayfanın alt kısmında kalır, bir tablo bir satır çok geç gelir veya bir raporun her bölümünün yeni bir başlangıç ​​yapmasını istersiniz. LaTeX bunun için size sert bir emirden kibar bir öneriye kadar değişen küçük bir komut seti verir.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Zor molalar

`\newpage` mevcut sayfayı hemen bitirir ve yeni bir sayfa başlatır. Taslak hazırlarken en kör ve en çok kullanacağınız araçtır.

`\clearpage` aynı şeyi yapar ancak önce tüm bekleyen değişkenleri temizler. LaTeX'teki şekiller ve tablolar değişkendir: algoritmanın yer bulduğu her yere, bazen de onları yazdığınız noktadan sonraki sayfalara sürüklenirler. `\clearpage', ilerlemeden önce o ana kadar sıraya alınmış olan her kayan noktayı sayfaya zorlar; dolayısıyla bu, bir bölümün sonunda veya başıboş dolaşılmasını istemediğiniz bir bölümün öncesinde doğru komuttur. Belgenizin sonunda rakamlar birikiyor gibi görünüyorsa, iyi yerleştirilmiş bir "açık sayfa" genellikle çözümdür; Hikayenin tamamı için [figürler neden hareket ediyor](/learn/figure-wrong-position/) konusuna bakın.

`\cleardoublepage` iki taraflı belgelerde bir adım daha ileri gider: kayan öğeleri temizledikten sonra, gerekirse boş bir sol sayfa ekleyerek bir sonraki sayfanın sağ (tek) sayfa olmasını sağlar. Kitap bölümleri geleneksel olarak sağda açılır ve "kitap" sınıfı bunu sizin için her "\bölümde" çağırır.

## Yumuşak istekler

`\pagebreak[n]` komut vermiyor. diye soruyor. 0'dan 4'e kadar olan isteğe bağlı sayı ne kadar güçlü olduğunu belirtir: `\pagebreak[1]` "burada bir ara vermek iyi olur" anlamına gelir, `\pagebreak[4]` ise "burada ara ver" anlamına gelir. Orta değerler, LaTeX'in isteğinizi, genellikle sert bir "\yeni sayfa"dan daha iyi görünen sayfalar üreten kendi boşluk kararına göre tartmasına olanak tanır, çünkü "\pagebreak", içeriği boşluk bırakmak yerine sayfayı dolduracak şekilde genişletir.

`\nopagebreak' ise tam tersi bir istektir: bu noktada bir ara verilmesini engeller. Bir başlığın hemen ardından veya girişiyle birlikte tutulmasını istediğiniz kısa bir listeden önce kullanışlıdır. '\pagebreak' gibi, 0'dan 4'e kadar isteğe bağlı bir gücü kabul eder.

## Bunlara ne zaman ulaşmalı

Yaygın hata, düzeni düzeltmek için taslağın içine "\yeni sayfa" serpiştirmek ve ardından metin büyüdükçe her düzeltmenin yanlış olmasını izlemektir. Sayfa sonları önlerindeki her şeye bağlıdır, bu nedenle bugün mükemmel görünen bir manuel ara, bir sonraki revizyonunuzdan sonra yarı boş bir sayfa bırakabilir. Aklı başında iş akışı, önce belgenin tamamını yazmak ve yalnızca son geçiş sırasında aralar eklemek, tam konumun tartışılabilir olduğu durumlarda sert komutlar yerine yumuşak "\pagebreak[3]" komutunu tercih etmektir.