---

title: "Biyoloji ve yaşam bilimleri makaleleri: şekiller, çok panelli plakalar ve ortak yazarlar"
description: "Islak laboratuvar ve hesaplamalı biyoloji için pratik LaTeX: çok panelli şekiller, çözünürlük, ekler, istatistik gösterimi ve birbirinin üzerine yazmadan işbirliği."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Yaşam bilimi el yazmaları şekil önceliklidir. Eleştirmenler, incelemeden önce plakaya göz gezdirirler.
Yazınızı okuyun, bu yüzden figürün iddiayı el sallamadan taşıması gerekiyor
başlık. Rakamlara birinci sınıf muamelesi yaparsanız LaTeX bu sorunu çözer
ekten önce gece saat 2'de yapıştıracağınız bir şey yerine proje dosyaları
son tarih.

Islak laboratuvar ve hesaplamalı gruplar aynı karmaşaya maruz kalıyor: paylaşımsız paneller
ölçek çubukları, lekelerdeki JPEG yapaylıkları, derlenemeyen ekler ve
bir paragrafı düzenleyen düzinelerce ortak yazar. Aşağıda aslında işe yarayan şey var.

## Çok panelli şekiller

Gözden geçirenler (a)(b)(c) panellerinin tek başlık altında olmasını beklemektedir. Şunlardan birini yapabilirsiniz:

1. Plakayı TeX'in (Illustrator, Inkscape, Fiji Export) dışında oluşturun ve bırakın
   tek bir PDF veya PNG'de veya
2. Her panel kendi dosyası olduğunda TeX'te "alt başlık" ile birleştirin:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Yalnızca günlük stili olması durumunda metinde panellere Şekil~\ref{fig:exp}a olarak bakın
buna izin veriyor. Pek çok mekan tek bir şemanın uygulandığı "Şekil 2A"yı tercih ediyor
her yerde. Bu model hakkında daha fazlası:
[paneller a, b, c](/learn/subfigures-abc/).

Kimsenin icat etmemesi için dosyaları tutarlı bir şekilde adlandırın (`fig03_western_a.pdf`)
`final_gel_NEW.png` gönderim haftası.

## Çözünürlük, renk ve dosya formatları

Mikroskopi arşivlerini yüksek çözünürlüklü TIFF veya PDF olarak saklayın. Bildiri PDF'si için
şemalar için vektör grafiklerini ve yeterli dpi'de PNG/PDF'yi kullanın.
tarama verileri. JPEG çevrimiçi açıklamaları ve jelleri atlayın. Sıkıştırma eserleri
deney iyi olsa bile özensiz bilim olarak okuyun.

Altı renkli bir palet tasarlamadan önce renk ücretlerini ve yazdırma kurallarını kontrol edin.
yalnızca kalibre edilmiş monitörünüzde çalışır. Bazı dergiler CMYK istiyor; diğerleri dönüştürür
sormadan kötü bir şekilde. Anahtarın gri tonlamalı güvenli sürümlerini istediklerinde
rakamlar, onlara bunları ver.

Ölçek çubuklarını ve yoğunluk birimlerini yalnızca altyazıya değil, panele de yerleştirin. Eğer
üretim yeniden düzenleme rakamları, yerleşik ölçek çubukları varlığını sürdürüyor; yalnızca altyazılı notlar
çoğu zaman bunu yapmayın.

## Şemalar ve veri panelleri

"Yolun karikatürünü" "leke miktarının belirlenmesinden" ayrı tutun.
Karikatürler TikZ veya harici vektör sanatı olabilir. Veri panelleri yakın durmalıdır
Analizi dışa aktarın, böylece bir incelemeci bir analiz istediğinde analizleri yeniden oluşturabilirsiniz.
farklı normalleştirme. Altyazı notlarındaki analiz komut dosyası yolunu not edin veya
dergi izin verdiğinde tekrarlanabilirlik eki.

## Hala derlenen takviyeler

Devasa masalar, ekstra jeller ve film görüntüleri kendi ekine aittir
belge veya açık bir ek. Baş ağrısını kurtaran birkaç kural:

Ana ve ek bir derlemeyi paylaşıyorsa etiketler benzersiz olmalıdır. eğer öyleyseler
projeleri ayrı tutun, "Şekil S3"ü düz metin olarak yazın ve "\ref"e güvenmeyin
PDF'ler arasında. Ana metindeki iddiaların hangisini işaret ettiğinin kısa bir listesini tutun
öğeleri tamamlayın, böylece hiçbir şey kaymaz.

Gönderim haftasını derlemeyen bir ek hala sizin
ana PDF temiz görünse bile sorun.

## Çok yazarlı kaos

Biyoloji makalelerinde genellikle farklı LaTeX beceri düzeylerinde birçok ortak yazar bulunur. Sahip
bölümlere göre dosyalar (`results.tex`, `methods.tex`, `figs.tex`), birleştirme
Git ve ".bib" dosyasını kimin elinde tutacağına karar verin (bir kişi mi yoksa paylaşılan bir Zotero grubu mu?)
ihracat).

Bir ortak çalışan için yerel bir proje klasörünü sıkıştırmak, buluttan daha kolaydır
mezun olduktan sonra erişimlerini kaybedecekleri proje. Gerçek Git geçmişi e-postayı yener
birisinin geri dönüştürdüğü `manuscript_JM_edits_FINAL.docx` adlı ekler
TeX'e elle. Başarılı derlemelerden sonra kontrol noktası; birleştirme sırasında geri yükle
yanlış gidiyor; özel bir uzaktan kumanda bulundurun.

Bazı ortak yazarlar yalnızca Word'ü düzenliyorsa onlar için DOCX veya PDF'yi dışa aktarın ve `.tex'i saklayın
gerçeğin kaynağı olarak. Bkz.
[yalnızca Word konuşan ortak yazarlar](/learn/collaborator-uses-word/).

## Yöntemler ve istatistik gösterimi

P değerlerinin hem "$p$" hem de "$p$" olarak görünmemesi için istatistiksel makroları bir kez tanımlayın.
Aynı makalede `p=`:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Testi, n'yi ve çoklu karşılaştırma düzeltmesini yöntemlerde veya tabloda belirtin
notlar, yalnızca üretimde kırpılan bir figür efsanesinde değil. Yoğun
makaleler kısa bir notasyon listesinden yararlanır. Canlı referans/alıntı kontrolü
araştırma editörü silinen panele yönelik bir "ref"i incelemeciden önce yakalar.

## İddiayı taşıyan başlıklar

İyi bir başlık neyin, hangi sistemde ölçüldüğünü ve okuyucunun ne düşündüğünü belirtir.
fark etmeli. "Metni göster" seçeneğinden kaçının. Yöntemleri başlığa bırakmayın
yöntemler bölümüne aittir. Panel harfleri (koyu veya parantez içinde)
ev stiliyle eşleşir.

## Sunum öncesi şekil kontrol listesi

Gönder tuşuna basmadan önce rakamları bir kez yürüyün:

- Sırayla (veya derginin izin verdiği sırayla) belirtilen her ana rakam.
- Etiketli paneller; çubukları önemli oldukları yere ölçeklendirin.
- Kantitatif panellerde JPEG karmaşası yok.
- Ek derler; S-numaraları yeniden karıştırılmadı.
- Renk politikası kontrol edildi; dosya boyutları portal sınırlarının altında.
- Kaynak görselleri ve komut dosyaları hâlâ proje veya laboratuvar arşivinde bulunabilir.

## Western'ler, jeller ve kontrast

PDF için lekeleri aşırı işlemeyin. Dergiler ve okuyucular kontrastı izliyor
oyunlar. Ham dosyaları laboratuvar arşivinde tutun ve
kullanılan nicelik. Panelleri yeniden düzenlerseniz her metin içi paneli güncelleyin
Aynı gün mektup, "sonra" değil.

## Filmler ve etkileşimli ekler

Dergi filmlere izin verdiğinde, onları talimat verdikleri şekilde yayınlayın ve bir
PDF'de hala artı başlık. Kişisel bulut bağlantısına bağlı kalmayın
mezun olduktan sonra ölür.

Rakamlar bu yazıların omurgasını oluşturuyor. LaTeX yalnızca çerçevedir. Emin olun
çerçeve, teslim edilmeden önceki gece başarısız olan şey değildir.