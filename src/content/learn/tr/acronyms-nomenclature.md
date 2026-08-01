---

title: "Kısaltmalar ve sembol listeleri"
description: "sözlükler-ekstra taslak veya yeterli olduğunda elle oluşturulmuş bir liste."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Kısaltmalar ve sembol listeleri

Uzun belgelerde kısaltmalar bulunur ve bunların etrafındaki kurallar katıdır. Bir kısaltma ilk kullanımda tam olarak yazılır, daha sonra kısaltılır ve bir tezin genellikle ön konuda bir kısaltmalar listesi olması gerekir. Bunu elle sürdürmek öngörülebilir bir şekilde başarısız olur. İki bölümü yeniden sıralarsınız, ilk kullanım değişir ve aniden "ML", "makine öğrenimi (ML)" görünmeden üç sayfa önce görünür. 'Sözlükler-ekstra' paketi sizin için ilk kullanımı izler.

## Otomatik rota

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

'Kısaltma' seçeneği kısaltma desteğini etkinleştirir ve '\makeglossaries' derleme sırasında girişleri toplayan makineyi açar. Her bir `\newacronym` üç argüman alır: metne yazacağınız bir anahtar, kısa form ve uzun form. Hepsini giriş bölümünde veya '\giriş' yaptığınız ayrı bir dosyada tanımlayın, böylece tek bir yerde yaşamalılar.

Metinde hiçbir zaman kısaltmanın kendisini yazmazsınız:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

Belgedeki ilk `\gls{ml}` "makine öğrenimi (ML)" yazdırır ve sonraki her biri yalnızca "ML" yazdırır. Paket, kaynaktaki konum yerine kullanımı izlediğinden, yeniden yapılandırmanız onu nereye taşırsa taşısın, genişletme ilk kullanımı takip eder. `\printglossaries`, toplanan kısaltmaların listesini nereye koyarsanız koyun, genellikle içindekiler bölümünden sonra yazdırır. İlgili komutlar bununla ilgili dilbilgisini kapsar: çoğullar için `\glspl`, büyük harfle başlayan cümle başlangıcı için `\Gls`.

Önemli olan yapıdır. LaTeX geçişleri arasında, girişleri sıralamak ve biçimlendirmek için "makeglossaries" yardımcısının çalışması gerekir, aksi takdirde "\printglossaries" sessizce hiçbir şey üretmez. Tam latexmk kurulumları bunu otomatik olarak gerçekleştirir. Daha basit işlem hatları bunu yapmayabilir ve sözlükler-ekstra onlar için bir geri dönüş sunar. Listeniz inatla görünmeyi reddediyorsa, eksik yardımcı çalıştırma ilk şüphelidir ve belgenizdeki bir hatanın çok ötesindedir.

## Elle oluşturulmuş rota

Basit bir sembol listesi için, elle tutulan bir 'açıklama' ortamı genellikle yeterlidir:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Her bir `\öğe[...]`, parantez argümanını kalın bir etiket olarak ve aşağıdaki açıklamayla birlikte yazdırır; bu, tam olarak bir gösterim listesinin şeklidir. İlk kullanım takibi yoktur, ancak bir sembol listesinin nadiren buna ihtiyacı vardır; semboller matematikte ilk göründükleri yerde tanımlanır.

Dürüst tavsiye, aleti ölçeğe göre eşleştirmektir. Beş kısaltmalı bir kağıdı elle yönetmek daha kolaydır. Kırk sayfalık 200 sayfalık bir tez öyle değil ve orada paket, kurulum maliyetini kat kat amorti ediyor. [Listeler dersi](/learn/lists/) "açıklama" ortamını daha ayrıntılı olarak ele alır.