---

title: "Matematik öğrencileri: tutarlı kalan teoremler, ispatlar ve gösterimler"
description: "saf ve uygulamalı matematik yazıları için amsthm stilleri, lemma numaralandırma, makro hijyen, uzun türetmeler ve çoklu dosya alışkanlıkları."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Matematik kağıtları gösterim artı kanıt yapısından oluşur. LaTeX varsayılandır çünkü her ikisi de
argüman bir sayfadan uzun sürdüğünde Word'de acı verici hale gelir. Derleyici
zor kısmı değil. Tutarlılık şudur: Bir sayı eklediğinizde atlayan teorem sayıları
lemma, üç farklı anlama gelen 'V' harfi ve cümleyi terk eden deliller
Sonraki satırda kayan QED işareti.

Bu, dersler, arXiv notları ve tez bölümleri için pratik bir kurulumdur.
İhtiyacınız olanı çalın; canın acıyana kadar gerisini görmezden gel.

## amsthm erken, ilk lemmadan önce

Özel kalın "Teoremi" icat etmeden önce "amsthm"i yükleyin. headings:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Bölüme göre numaralandırma, bir öğenin üstüne malzeme eklediğinizde referansların sabit kalmasını sağlar.
sonuç. Önemler ve önermeler için bir sayacın ("[teorem]') paylaşılması yaygındır
saf matematikte; uygulamalı makaleler bazen her şeyi bağımsız olarak numaralandırır. Birini seç
ve tüm belge boyunca buna bağlı kalın.

Ders: [teorem ve ispat blokları](/learn/theorems-proofs/).

## Temiz bir şekilde biten deliller

Prova sonu işaretinin doğru yere gelmesi için "Prova" ortamını kullanın:

```latex
\begin{proof}
  ...
\end{proof}
```

Son satır görüntülenen bir denklemse, kutunun görünmesi için "\qedhere" ile bitirin
aşağıdaki satırda yetim değil. İç içe geçmiş ispatlar (bir ispatın içindeki iddia) çalışır
girintili olanlardan ziyade kendi kısa kanıtları olan "iddia" ortamları daha iyidir
asla kapanmayan düzyazı.

Eğitmenin adımların elle işaretlenmesini istediği ödevlerde yine de LaTeX'i kullanın.
temiz gönderim PDF'si, ancak kaba işleri ayrı bir not dosyasında saklayın, böylece
Yeniden yazarken tek doğru satırı silmeyin.

## Makro hijyen

Sembolleri bir kez tanımlayın:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Eğer iki kavram aynı harfi paylaşıyorsa, makrolarla belirsizliği giderin (`\VectSpace` vs.
'V'yi farklı yazı tipleriyle yeniden kullanmak yerine `\RandomVar`). Ortak yazarlar şunları yapmayacak:
Hangi yazı tipinin hangi nesne anlamına geldiğini tahmin edin. Bir notasyon sayfası bir ekranın ötesine geçtiğinde,
onu "notation.tex" ve "\input" içine koyun, böylece herkes bir dosyayı düzenleyebilir.

Yapay zeka araçları yeni semboller icat etmeyi seviyor. Bunlardan birini kullanıyorsanız makro bloğunuzu şuraya yapıştırın:
istem ve talep yalnızca tanımlanmış adları kullanır. Aynı disiplin geçerli
AI olmadan: yeni sembol → sayfaya ekle → sonra yazın.

## Uzun türetmeler için hizalama

'hizala' ve 'böl' çok satırlı hesaplamaların okunabilir olmasını sağlar. Yalnızca satırları numaralandırın
'\eqref' ile alıntı yapacaktır. Numaralandırılmış denklemlerden oluşan bir duvarı takip etmek, bir denklem duvarını takip etmekten daha zordur.
iki etiketli satırla kısa anlatım.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

Tek sayı taşıması gereken tek bir çok satırlı denklem için "bölme"yi kullanın
'denklem'in içinde. Durumlarda, "vakalar" veya "hizalanmış", ev yapımı bir diziyi yener
borular.

## Yeniden sıralamadan sağ çıkan çapraz referanslar

Hiçbir zaman "Teorem 2.3'e göre" ifadesini çıplak metin olarak yazmayın. '\ref' kullanın veya 'cleveref' ile birlikte,
`\cref{thm:main}`. Etiketler başlık veya teorem başlık satırından sonra gelir, değil
önce. İki bölüm "thm:main" gibi etiketleri paylaşıyorsa, bölüme göre önek
(`ch3-thm:main`) yoksa dosyaları birleştirdiğinizde sessiz yanlış hedefler elde edersiniz.

Çoklu dosyada proje genelinde tanıma gitme ve canlı kırık referans kontrolleri yardımı
tezler. Bu artık normal bir araştırma editörü alanıdır, lüks değil.

## Çok dosyalı notlar ve tezler

Kök dosya ve bölüm girişleriyle uzun bir ödev seti bile daha kolaydır. Tezler
neredeyse her zaman bölüm başına "\include" ve bir bölüm taslağı hazırlarken "\includeonly" olmasını istersiniz
bir seferde bölüm. Rakamları "figures/ch3/" altında tutun, böylece bölümleri yeniden sıralamak
yolları kesmeyin.

Tam tezin derlenmesi yavaşlar. Taslak şekil modu, ağır TikZ'yi dışsallaştırın ve
Mümkün olduğunda yalnızca düzenlediğiniz bölümü derleyin. Bkz.
[bölüm dosyalarını böl](/learn/split-chapter-files/) ve
[derlemeyi hızlandırın](/learn/speed-up-compilation/).

## PDF teslim edildiğinde

Ders çalışmalarının hala sıkıcı bir kabuğa ihtiyacı var: müfredat başına kenar boşlukları, sayfa numaraları,
unvan ve bazen de akademik dürüstlük beyanı.
[hızlı referans](/learn/cheatsheet/) bu konuyu ele alıyor, böylece dikkatinizi odaklanabilirsiniz
kanıt.

Kaynağı saklayın. '.tex' içermeyen işaretli bir PDF, bir sonraki sorunla karşılaşıldığında çıkmaz sokaktır
set aynı başlangıcı yeniden kullanır. Git geçmişine (veya bir araştırma dosyasına) sahip yerel bir klasör
kontrol noktalarını sizin için derleyen düzenleyici) `final_v3_really.pdf`yi geçiyor
masaüstü.

## Göndermeden önce

Teoremlerin ve lemmaların tutarlı bir numaralandırma şemasını paylaştığından emin olun;
gövde makro sayfasında tanımlanır ve provalar "kanıt" / "\qedhere" kullanır
ihtiyaç duyulan yerde. Yalnızca alıntı yaptığınız denklemleri numaralandırın. Tüm çapraz referanslar şöyle olmalıdır:
`\ref`/`\cref`, sabit kodlanmış sayılar değil. PDF'yi bir kez açın: gömülü yazı tipleri, kenar boşlukları
kısa bilgiyle eşleşin.

## Ev ödevi vs kağıt

Ev ödevlerinde netlik, paket zekasını yener. Bir makale veya tez bölümü için,
teorem kurulumuna ve makro sayfasına bir kez yatırım yapın, ardından yeniden kullanın. Yeniden inşa etme
bir blog yazısı farklı bir stil önerdiği için projenin ortasında numaralandırma.

## Ortak yazarlarla paylaşma

Okumak için bir PDF ve düzenlemek için bir repo (veya kaynak zip dosyası) gönderin. Eğer bir
ortak yazar yalnızca taranan işaretlemeyi döndürür, aynı gün uygular ve taahhüt eder. Bayat
kağıt yığınları, iki kişinin aynı lemmayı farklı şekilde "düzeltmesi"dir.

Bu kurulum çalışmasından sonra LaTeX çoğunlukla ortadan kayboluyor ve matematiği düşünebilirsiniz.