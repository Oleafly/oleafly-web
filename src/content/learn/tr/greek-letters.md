---

title: "Yunan ve gündelik semboller"
description: "Alfa'dan Omega'ya, artı günlük olarak yazdığınız operatörler ve ilişkiler."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# Yunanca ve gündelik semboller

Her gün yazdığınız sembollerin çoğu Yunan harfleri artı bir avuç operatör ve ilişkiden oluşur. Hepsi aynı şekilde çalışır: ters eğik çizgi artı sembolün adı, yalnızca matematik modunda. Bu sayfa günlük settir. [Matematik sembolleri hile sayfası](/learn/math-symbols-cheatsheet/) daha kapsamlı bir referanstır.

## Yunanca (matematik modu)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Küçük harf komutu küçük harfi verir: `\alpha`, `\beta`, `\gamma`. Büyük harf olarak komutun ilk harfini büyük yapın: `\Gamma`, `\Delta`, `\Omega`. Her büyük harf bir komut olarak mevcut değildir çünkü bazı Yunan harfleri Latin harfleriyle aynıdır. Büyük harf alfa yalnızca A'dır, dolayısıyla `\Alpha' yoktur. Aynı şey beta, epsilon ve diğerleri için de geçerli. Bunun yerine Latin harfini yazın.

Birkaç harfin "var" önekiyle farklı biçimleri vardır. '\epsilon' yarım ay şeklinde, '\varepsilon' ise kıvırcık olanıdır. `\theta` ve `\vartheta`, `\phi` ve `\varphi`, `\rho` ve `\varrho` aynı şekilde farklıdır. Her iki biçim de daha doğru değildir. Alanınızda en uygun olanı seçin ve onu belge boyunca tutarlı bir şekilde kullanın.

Bunların hepsi matematik modu komutlarıdır, dolayısıyla çalışan metinde Yunanca harf "$\alpha$" olarak yazılır. Metindeki çıplak bir "\alpha", [Eksik dolar eklendi](/learn/missing-dollar/) kapsamındaki hatayla derlemeyi durdurur.

## Günlük operatörler ve ilişkiler

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

İlk satır aritmetik ve karşılaştırmadır: artı-eksi için "\pm", çarpma noktası için "\cdot", çarpı için "\times", bölme için "\div", ardından karşılaştırmalar için "\leq", "\geq" ve "\neq", yaklaşık eşitlik için "\approx" ve özdeşlik veya eşlik için "\equiv". İkinci satır ayar dilidir: üyelik için "\in", kapsama için "\subset" ve "\subseteq", birleşim ve kesişim için "\cup" ve "\cap" ve boş küme için "\emptyset". Üçüncüsü okları ve analizi kapsar: limitler ve fonksiyon türlerindeki düz ok için "\to", bir öğenin nereye gittiği için "\mapsto", çıkarım için "\Rightarrow", sonsuzluk için "\infty" ve kısmi türevler ve gradyanlar için "\partial" ve "\nabla", bunlar [türevler ve integraller](/learn/türevler-integrals/) içinde tam olarak ele alınır.

Tüm bunların etrafındaki boşluklar otomatiktir. LaTeX, "\leq"in bir ilişki, "\cup"ın ise ikili bir işlem olduğunu bilir ve her birini buna göre boşluk bırakır; bu, Unicode sembollerini yapıştırmak yerine komutları kullanmak için iyi bir nedendir. [Canlı oyun alanına](/live/) birkaç formül yazıp bunların oluşturulmasını izleyerek adlar en hızlı şekilde akılda kalır.