---

title: "Yüzenlerin gerçekte nereye indiği"
description: "htbp, neden buraya zorlamak çoğu zaman başarısız oluyor ve ortamı metne yaklaştırıyor."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Yüzen cisimlerin gerçekte nereye indiği

LaTeX'teki şekiller ve tablolar değişkendir; bu, kodun kaynağınızdaki konumunun bir talimat değil, öneri olduğu anlamına gelir. LaTeX, sayfaları eşit şekilde doldurmak, yarı boş sayfalardan kaçınmak ve bir sayfanın ne kadarının resim olabileceği gibi tipografik sınırlara uymak için gezinir. Bu, bir kelime işlemciden kaynaklanan en büyük kültür şokudur ve yerleştirme sistemini anlamak, bununla saatlerce mücadele etmekten tasarruf etmenizi sağlar.

## Htbp'nin anlamı

Her kayan ortam, LaTeX'in koymasına izin verilen isteğe bağlı bir bağımsız değişken listesi alır:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Her mektup bir izindir. 'h', metnin kodun göründüğü noktada "burada" kayan noktaya izin verir. 't' sayfanın üst kısmına, 'b' sayfanın altına ve 'p' yalnızca şekil ve tabloları içeren özel bir kayan sayfaya izin verir. LaTeX, bunları oluşturduğu her sayfa için kabaca bu sırayla değerlendirir ve boşluk ve sayfa dengesiyle ilgili dahili kurallarını karşılayan ilk yerleşimi alır. Harfler, derecelendirilmiş istekleri ifade etmek yerine seçenekler sunar; bu nedenle dördünün de listelenmesi, LaTeX'e kayan noktayı yakın ve mantıklı bir yere yerleştirmek için en fazla alanı sağlar. Argümanı tamamen atlarsanız, varsayılan değer 'h' olmadan '[tbp]' olur, bu nedenle çıplak bir rakam çoğu zaman bir sonraki sayfanın en üstüne atlar.

## Neden "burayı" zorlamak geri teper?

Tek başına "[h]" yazmak bariz bir çözüm gibi görünebilir, ancak genellikle işleri daha da kötüleştirir. Kayan nokta geçerli sayfada kalan alana sığmıyorsa ve verdiğiniz tek izin "h" ise, LaTeX onu bu sayfaya veya yasal olarak başka herhangi bir sayfaya yerleştiremez. Böylece 'h'yi karşılayan bir noktayı bekleyerek kayan noktayı sayfa sayfa ileri taşır. Şamandıraların da düzenli kalması gerekir, böylece sonraki her şekil, sıkışmış olanın arkasında sıraya girer ve tüm yığın sıklıkla bölümün sonunda dışarı atılır. '[h!]' gibi bir ünlem işareti eklemek, LaTeX'e bazı boşluk kurallarını gevşetmesini söyler, ancak var olmayan bir oda yaratamaz.

## Gerçekten işe yarayan alışkanlıklar

Öncelikle, `[htbp]`yi varsayılan olarak tutun ve taslak hazırlarken piksel mükemmelliğinde yerleştirmeyi bırakın, çünkü eklediğiniz veya sildiğiniz her paragraf zaten sayfaları yeniden karıştırır. İkinci olarak, LaTeX bu noktadan itibaren bir yuva aramaya başladığından ve bir kayan nokta daha sonra hareket edebileceğinden, kodundan önce asla hareket edemeyeceğinden, şekil ortamını kaynağa, ona ilk referans veren paragrafın yanına yerleştirin. Üçüncüsü, düzyazınızı referans rakamlarına numaralarına göre yazın, "Şekil 3 boru hattını göstermektedir"de olduğu gibi, asla "aşağıdaki şekil" değil, böylece metin kayan noktanın indiği yerde doğru kalır.

Bir şamandıra yine de kabul edilemez bir yere düşerse, şamandıra bariyerleri ve [Bölümden kaçan şekil](/learn/figure-wrong-position/) kapsamında ele alınan "[H]" yerleşimi de dahil olmak üzere daha güçlü araçlar vardır. Taslak hazırlama sırasında değil, metin sabit hale geldikten sonra, yazmanın sonunda onlara ulaşın.