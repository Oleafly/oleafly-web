---

title: "Ekonomi ve sosyal bilim: dergilerin kabul ettiği regresyon tabloları"
description: "kitap sekmeleri, üç bölümlü, siunitx yıldızları, tahminler altındaki notlar, biblatex alışkanlıkları ve ekonomi, politika ve sosyoloji için çalışma kağıdı versiyonları."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Ampirik sosyal bilim tablolarla yaşar ve ölür. Yanlış hizalanmış bir ondalık sayı veya
eksik önem yıldızı, hiçbir şeyi olmayan bir gözden geçirme ve yeniden gönderme döngüsünü yakabilir
tanımlama stratejinizle ilgilidir. Dergiler neredeyse okunabilirliğe önem veriyor
katsayılar kadar.

Aşağıda Stata veya R'den dışa aktarıp ardından temizleyen öğrenciler ve RA'lar içindir.
LaTeX'i elle kullanın.

## kitap sekmeleri isteğe bağlı değildir

Dikey kurallar ve çift yatay çizgiler 1990'ların Word'üne benziyor. Üçünü kullan
'kitap sekmelerinden' yatay kurallar:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Bkz. [üç kurallı tablolar](/learn/booktabs-beautiful/). R'den dışa aktar
("modelsummary", "estout" tarzı araçlar, daha eski "hayalperest") veya Stata'dan LaTeX'e
parçaları temizleyin, ardından başlık satırını kendiniz temizleyin. Otomatik olarak oluşturulan başlıklar
genellikle son PDF için çok geniş veya çok şifrelidir.

## Rastgele dipnotlar değil, tablonun altındaki notlar

'üç bölümlü' başlığı, tabloyu ve notları aynı genişlikte tutar:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Örnek boyutunu, sabit efektleri, kümelenmiş SE notlarını ve önem yıldızını koyun
efsane burada. Yalnızca bazı okuyucuların görebileceği tek bir hücreye dipnot asmayın.
fark edecek. Panel etiketleri (A/B), başlıkta veya orta kurallarda açık bir şekilde yer alır.
metin, PDF'de hiçbir zaman görünmeyen şekil tarzı bir açıklama değil.

## Sayısal sütunlar ve önem yıldızları

'siunitx' sütun türleri ('S') ondalık noktaya göre hizalanır. Bu tek başına bir
sonuç tablosu kasıtlı görünüyor. Yıldızlar saf sayısal sütunları kırar, böylece
genellikle özel bir formata veya metin benzeri bir sütuna ihtiyaç duyar. Ortak desenler:

Katsayıları ve SE'leri ayrı satırlarda rapor edin (econ'da standart) veya yıldızları sarın
dolayısıyla hizalama hala çalışıyor (özel bir sütun türüyle `0,012^{***}`).

Tablolarda tutarlı olun: aynı yıldız eşikleri, aynı SE stili, aynı sayı
aynı ölçüm için ondalık sayıların sayısı. Gözden geçirenler Tablo 2 ile Tablo 3'ü karşılaştırırlar.
amaç.

Görsel bir ilk taslak iyidir. Tarayıcı
[tablo oluşturucu](/tools/table-generator/) yapının taslağını çizebilir; final
tablo hala 'booktab'lardan ve SE notlarınızdan geçmelidir.

## Regresyon yazılımından kameraya hazır hale

Tipik döngü buna benzer. Tahmin komut dosyasını ve çekirdeği dondurun. Dışa aktar
Tahminlerin LaTeX parçası veya CSV'si. Stabil olan bir masa kabuğuna bırakın
etiketler ("sekme:ana", "sekme:sağlam"). Başlığı yazın ki bir skimmer konuyu bilsin
Notları iki kez okumadan bağımlı değişken, örnek ve tahminci.
Derleyin, ardından sütunları keserek aşırı dolu kutuları düzeltin; yalnızca son olarak döndür
çare.

Tablo bir sayfadan uzunsa "uzun tabloya" (veya bölünmüş panellere) geçin
Son teslim haftasından önce, dergi 7 puntoluk yazı tipleriyle ilgili şikayette bulunduktan sonra değil.

## Alıntılar: yazar yılı lehçedir

İktisat ve siyaset bilimi mekanlarının çoğu yazar yılı bekliyor. 'biblatex' ile
'tarz=yazaryıl' (ya da derginin tarzı) uzun vadede savaşmaktan daha kolaydır
'.bst' dosyaları. Laboratuvar hala 'natbib' kullanıyorsa sorun değil; sadece karıştırmayın
her ikisi de tek bir girişte toplanır. Genel bakış:
[BibTeX veya biblatex](/learn/bibtex-vs-biblatex/).

Anahtarlar kararlı olmalıdır (`yazar:yıl:anahtar kelime`). Zotero'dan yeniden dışa aktarma
proje ortasındaki yeni anahtarlar, `\cite'ın gönderim haftasını nasıl bozduğudur. Doğrula
Kayıp yıllar ve dergiler için `.bib':
[BibTeX doğrulayıcı](/tools/bibtex-validator/).

## Çalışma kağıtları ve SSRN

Çalışma kağıdı versiyonları aylık olarak değişir. Başlık sayfası tarihini bir makroda tutun:

```latex
\newcommand{\paperdate}{June 2026}
```

PDF'yi yeniden dışa aktardığınızda bunu çarpın. Yerel Git geçmişi bundan daha dürüsttür
Ortak Drive'da `final_final_v7.pdf`. Ana tablo hazır olduğunda taahhüt et
derler; Gönderim sürümünü açıkça etiketleyin veya mesaj gönderin.

Projeyi gerçek bir Git deposu (kontrol noktaları) olarak ele alan bir araştırma editörü
derleme, geri yükleme, isteğe bağlı özel GitHub) deneysel çalışmayla eşleşiyor
zaten sürüm kodu. Makale ve tahmin komut dosyaları yayında olmamalıdır
farklı yedekleme alışkanlıkları altında.

## Tanımlama ve tablo etiği (kısa versiyon)

LaTeX zayıf bir tasarımı düzeltemez ancak güçlü bir tasarımı okunabilir hale getirebilir.
Tahmin ediciyi ve örneği başlıkta belirtin. Şu gerçeği saklamayın
Sütun (3), numunenin yarısını kimsenin okumadığı bir dipnotta bırakıyor. Eğer gösterirsen
sağlamlık tabloları, ana tabloyla aynı bağımlı değişken sırasını korur, böylece
okuyucular tarayabilir.

## Başvuru öncesi kontrol listesi

İnsanı geç ısıran şeyler:

- Üç kurallı tablolar; dikey kural yok.
- Ondalık hizalama; tutarlı yıldızlar ve SE notları.
- Başlık sonucu, örneği ve tahminciyi belirtir.
- Etiketler stabil; metinde `\ref{tab:...}` alıntısı yapılıyor.
- Kaynakça stili mekânla eşleşiyor; '.bib' doğrulandı.
- Çalışma kağıdı tarihi ve Git taahhüdü yüklediğinizle eşleşiyor.

## Çoğaltma paketleri

Daha fazla dergi kod ve veri istiyor. Tablo dışa aktarma komut dosyalarını kağıdın yanında tutun
repo (veya bir taahhüt karması ile bağlantılı). Bir katsayı değiştiğinde, çünkü
temizleme komut dosyası değişti, LaTeX parçasını yeniden oluşturun ve her ikisini de yeniden kaydedin. bir
Kopyalanamayan tablo, temiz görünse bile sorumluluk taşır.

## Seminerler için projektör

Mümkün olduğunda slaytlarda aynı kitap sekmesi parçalarını yeniden kullanın veya PDF'yi dışa aktarın
sofraların mahsulleri. Sayıları elle bir slayt destesine yeniden oluşturmak nasıl
seminer slaytları makaleyle aynı fikirde değil.

Tabloları doğru şekilde değerlendirdiğinizde, tanımlama stratejisi adil bir şekilde dinlenir. Al
yanlış yaparlar ve bir tur boyunca biçimlendirme hakkında tartışarak geçirirsiniz.