---

title: "Gösterimi dürüst tutan makrolar"
description: "newcommand, NewDocumentCommand, paylaşılan bir makro dosyası."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Gösterimi dürüst tutan makrolar

Her kağıtta tekrarlanan bir gösterim vardır: gerçek sayılar, bir beklenti operatörü, uygun boyutlu çubuklarla mutlak bir değer. Kırk yere `\mathbb{R}` yazarsanız ve danışmanınız daha sonra `\mathbf{R}`'yi tercih ederse, yapmanız gereken kırk düzenlemeniz vardır ve birini kaçırırsınız. Bir makro, bu gösterimi, bir kez tanımlanan tek bir adlandırılmış komuta dönüştürür. Tanımı değiştirdiğinizde belgenin tamamı takip eder. Gösterimi bu şekilde dürüst tutarsınız: kaynak kendisiyle senkronizasyondan çıkamaz.

## Komutları yeni komutla tanımlama

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

İlk tanım en basit türdür: `\R' artık tamamen kısaltmadır ve herhangi bir yere `\R` yazmak `\mathbb{R}` sonucunu üretir.

İkinci form bir argüman alır. Adın ardından gelen "[1]", "\E"nin bir bağımsız değişkeni kabul ettiğini bildirir ve "#1", bu bağımsız değişkenin genişletmede nereye varacağını belirtir. Yani `\E{X}`, `\mathbb{E}\left[X\right]` olur. Tanım kısalıktan fazlasını satın alır: `\left[` ve `\right]` çifti köşeli parantezlerin içeride ne varsa sığacak şekilde büyümesini sağlar, böylece `\E{\frac{X}{n}}` uzun parantezleri otomatik olarak alır. '\abs' makrosu, mutlak değer için doğru dikey çubuk çifti olan '\lvert' ve '\rvert' ile aynı şeyi yapar. En fazla dokuz bağımsız değişken bildirebilir ve bunlara "#1" ile "#9" arasında başvurabilirsiniz.

Bir komut zaten mevcutsa, "\newcommand" onu yeniden tanımlamayı reddeder ve bir hata vererek durur, bu da sizi sessizce bir şeyi bozmaktan korur. Mevcut bir komutu kasıtlı olarak değiştirmek için bunun yerine "\renewcommand" komutunu kullanın.

## Modern arayüz

Mevcut LaTeX ayrıca daha zengin bir tanım komutu da sunuyor:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` sayı yerine bağımsız değişken belirtimi dizesini kullanır. Burada 'mm' iki zorunlu bağımsız değişken anlamına gelir, dolayısıyla '\citepair{knuth84}{lamport94}' her iki anahtarı da belirtir. Belirtim dili "\yenikomut"tan daha ileri gider: "o" köşeli parantez içinde isteğe bağlı bir bağımsız değişken bildirir, "s" bir yıldız değişkenini algılar ve "O{default}" isteğe bağlı bir bağımsız değişkene varsayılan bir değer verir. Basit değiştirmenin ötesinde herhangi bir şey için bu arayüze ulaşın.

## Tanımları paylaşın

Bölümler arasında paylaşılan bir "macros.sty" tutun. Tanımlarınızı o tek dosyaya koyun, her belgeden ve tezin her bölümünden `\usepackage{macros}' ile yükleyin, ayrıca slaytlar ve basılı versiyon da notasyon konusunda hemfikirdir. Bir ortak çalışan katıldığında, metinden tersine mühendislik yapmak yerine kurallarınızı öğrenmek için kısa bir dosya okur. Bu, doğal olarak [çoklu dosya kurulumu](/learn/split-chapter-files/) ile eşleşir.

Adlandırmayla ilgili bir ipucu: Makrolara "\bigbars" gibi görünüme dayalı adlar yerine "\abs" veya "\norm" gibi anlamlı adlar verin. Ad, gösterimin ne anlama geldiğini belirtmelidir, böylece tanım, görünüşünü değiştirmekte özgürdür. Ve iki kez kullandığınız bir şey için makro tanımlamaya direnin; getirisi üçüncü kullanım civarında başlar.