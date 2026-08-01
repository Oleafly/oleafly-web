---

title: "LaTeX evrenindeki her \\\\komutun açıklaması"
description: "Küresel referans: çekirdekten amsmath, hyperref, TikZ, biblatex ve Beamer'a kadar her biri tek satırda açıklanan yüzlerce LaTeX komutu ve ortamı."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# LaTeX evrenindeki her \komutun açıklaması

Bu sayfa, Oleafly Learn'deki herhangi bir derste görünen her LaTeX komutunu ve ortamını ve ayrıca gerçek ödevlerde karşılaşacağınız daha geniş standart kelimeleri tanımlar. Kernel, amsmath, hyperref, Graphicx, Booktabs, Biblatex, TikZ, Beamer ve araştırmacıların gerçekte yüklediği paketler. Kategoriye göre göz atın veya az önce karşılaştığınız komutu Ctrl/Cmd-F tuşlarıyla sayfada arayın. Her giriş bir satırdır: ne işe yarar, nerede önemlidir, hangi paketten gelir.

## Belge sınıfları ve kurulumu

| Komut | Ne işe yarar |
| --- | --- |
| `\documentclass{makale}` | Her belgenin ilk satırı: genel düzeni seçer; makale makaleler için varsayılan seçimdir. |
| `\documentclass{rapor}` | Daha uzun raporlar için sınıf: `\bölüm'ü ekler ve özeti kendi sayfasında başlatır. |
| `\documentclass{kitap}` | Kitaplar için sınıf: bölümler, iki taraflı düzen, ön/ana/arka konu. |
| `\documentclass{mektup}` | "\opening", "\closeing" ve adres komutlarıyla yazışma sınıfı. |
| `\documentclass{beamer}` | 'Çerçeve' ortamlarından oluşturulan slayt sunumları için sınıf. |
| `\documentclass[11pt,a4paper]{makale}` | Ortak sınıf seçenekleri: yazı tipi boyutu (10pt, 11pt, 12pt), kağıt (a4kağıt, letterpaper), 'iki sütun', 'iki taraflı', 'yatay', 'taslak', 'başlık sayfası'. |
| `\usepackage{amsmath}` | Özellik eklemek için giriş bölümüne bir paket yükler. |
| `\usepackage[margin=1in]{geometri}` | Sayfa kenar boşluklarını ve kağıt boyutunu (geometri) ayarlar. |
| `\başlık{...}` | Daha sonra '\maketitle' ile yazdırılacak belge başlığını saklar. |
| `\yazar{...}` | `\maketitle` için yazar listesini saklar; birden fazla yazarı "\ve" ile ayırın. |
| `\ve` | `\yazar{...}` içindeki yazar adları arasındaki ayırıcı. |
| `\tarih{...}` | '\maketitle' ile gösterilen tarihi saklar; `\date{}` onu gizler, `\date{\today}` ise bugünü gösterir. |
| `\bugün` | Derleme zamanında geçerli tarihi yazdırır. |
| `\maketitle` | `\title`, `\author` ve `\date` den başlık bloğunu yazdırır. |
| `\teşekkürler{...}` | Bir başlığa veya yazar adına dipnot ekler, ör. Finansman veya iletişim bilgileri için. |
| `\enstitü{...}` | Beamer ve Springer LNCS sınıfı tarafından kullanılan yazar bağlılığı komutu. |
| `\inst{1}` | LNCS ve Beamer yazar listelerindeki bağlı kuruluş üst simge işaretçisi: `Ada Lovelace\inst{1}`. |
| `\anahtar kelimeler{...}` | Yayıncıdaki gazetenin anahtar kelime listesini yazdırıracmart ve llncs gibi sınıflar. |
| `\adres{...}` | Letter sınıfı: antetli kağıt için gönderenin adresini saklar. |
| `\imza{...}` | Letter sınıfı: kapanışın altına basılan adı saklar. |
| `\opening{Sevgili ...}` | letter class: selamlamayı yazdırır ve harf gövdesini başlatır. |
| `\closeing{Saygılarımla,}` | Letter sınıfı: İmza ve imza bloğunu yazdırır. |
| `\LaTeX` | LaTeX logosunu yükseltilmiş ve alçaltılmış harflerle yazdırır. |
| `\TeX` | TeX logosunu E'si alçaltılmış halde yazdırır. |
| `\girdi{dosya}` | Başka bir .tex dosyasını sanki oraya yazmışsınız gibi yapıştırır. |
| `\include{bölüm1}` | Yeni bir sayfadan başlayarak bir bölüm dosyası girer; '\includeonly' yoluyla kısmi derlemelere olanak sağlar. |
| `\includeonly{bölüm1,bölüm3}` | Hangi '\include' dosyalarının gerçekten derleneceğini kısıtlayan giriş listesi. |
| `\hypersetup{...}` | Bağlantı renkleri ve PDF meta verileri gibi hiperref seçeneklerini yapılandırır. |
| `\AtBeginDocument{...}` | Kodu `\begin{document}'dan hemen sonra çalıştırır; geç kurulum için kullanışlıdır. |
| `\AtEndDocument{...}` | Belge bitmeden hemen önce kodu çalıştırır. |
| `\makeatletter` | Dahili komutları kullanabilmeniz veya ekleyebilmeniz için geçici olarak `@` harfini bir harf haline getirir. |
| `\makeatother` | `\makeatletter`dan sonra `@` karakterini normale döndürür. |
| `\typeout{...}` | Derleme günlüğüne ve terminale hata ayıklama için kullanışlı bir mesaj yazdırır. |
| `\koru' | '\caption' veya '\section' gibi hareketli bir argümanın içindeki hassas bir komutu korur. |
| `\listedosyaları` | Hata raporları için yüklenen her dosyayı ve sürümünü günlüğe kaydeden Giriş komutu. |

## Yapı ve bölümlere ayırma

| Komut | Ne işe yarar |
| --- | --- |
| `\parça{...}` | Kitap ve rapor sınıflarında bölümlerin üzerindeki en üst düzey bölünme. |
| `\bölüm{...}` | Kitap ve rapor sınıflarında numaralandırılmış bölüm başlığı (makalede değil). |
| `\bölüm{...}` | Bir makalede numaralandırılmış üst düzey başlık. |
| `\alt bölüm{...}` | "\section"ın bir düzey altında numaralandırılmış başlık. |
| `\altalt bölüm{...}` | "\subsection"ın bir düzey altında numaralandırılmış başlık. |
| `\paragraf{...}` | En alt düzey başlık: paragrafın başında yer alan kalın başlık. |
| `\alt paragraf{...}` | "\paragraf"ın bir düzey altı, nadiren ihtiyaç duyulur. |
| `\bölüm*{...}` | Yıldızlı bölümleme, başlığı bir sayı veya içindekiler girişi olmadan yazdırır. |
| `\ek` | Numaralandırmayı değiştirerek aşağıdaki bölümlerin veya kısımların Ek A, B, C olmasını sağlar. |
| `\eksayfa` | Ayrı bir "Ekler" bölme sayfası (ek paketi) yazdırır. |
| `\içindekiler tablosu` | Kesitleme komutlarınızdan oluşturulan içindekiler tablosunu yazdırır. |
| `\listoffigures` | Sayfa numaralarıyla birlikte tüm şekil başlıklarının bir listesini yazdırır. |
| `\listoftables` | Sayfa numaralarıyla birlikte tüm tablo başlıklarının bir listesini yazdırır. |
| `\ön madde` | Ön içerik sayfaları için kitap sınıfı geçişi: roman sayfa numaraları, numarasız bölümler. |
| `\ana konu' | Kitap sınıfı ana içeriğe geri döner: arapça sayfa numaraları, numaralı bölümler. |
| `\artık madde` | Son sayfalar için kitap sınıfı geçişi: bölümlerin numaralandırılması durdurulur. |
| `\addcontentsline{toc}{chapter}{...}` | İçindekiler listesine (veya şekiller/tablolar listesine) manuel olarak bir giriş ekler. |
| `\addtocontents{toc}{...}` | İçerik dosyasına rastgele materyal (boşluk gibi) yazar. |
| `\setcounter{seknumderinliği}{3}` | Kesitleme numaralarının ne kadar derine gideceğini kontrol eder. |
| `\setcounter{tocderinlik}{2}` | İçindekiler tablosunun ne kadar derine ineceğini kontrol eder. |

## Komutları ve ortamları tanımlama

| Komut | Ne işe yarar |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Kendi komutunuzu tanımlar; ad zaten mevcutsa hatalar. |
| `\renewcommand{...}{...}` | Mevcut bir komutu yeniden tanımlar; mevcut değilse hatalar. |
| `\providecommand{...}{...}` | Bir komutu yalnızca önceden tanımlanmamışsa tanımlar; aksi takdirde sessizce hiçbir şey yapmaz. |
| `\YeniBelgeKomutu` | Esnek isteğe bağlı bağımsız değişkenlerle (LaTeX3/xparse) modern komut tanımı. |
| `\newenvironment{name}{begin code}{end code}` | Kendi ortamınızı "\begin" ve "\end" konumlarında çalıştırılan kodla tanımlar. |
| `\renewenvironment{name}{...}{...}` | Mevcut bir ortamı yeniden tanımlar. |
| `\ensuremath{...}` | Bir makronun matematik içeriğinin hem matematik modunun içinde hem de dışında çalışmasını sağlar. |
| `\DeclareMathOperator{\E}{E}` | Dikey bir operatör adını tanımlar; yıldızlı form, sınırları aşağıya koyar (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Yıldızlı form: operatör, ekran matematiğinde (amsmath) aşağıdaki sınırları alır. |
| `\newtheorem{lemma}{Lemma}` | Teorem benzeri bir ortam (amsthm) bildirir. |
| `\foo` | Gerçek bir LaTeX komutu değil, "\yenikomut" dersindeki kullanıcı tanımlı bir makronun örnek adı. |
| `\abs{x}` | Mutlak değer çubuklarını dizen özel komutlar dersinden örnek kullanıcı tanımlı makro. |
| `\mat{A}` | Kalın matris sembolü için özel komutlar dersinden kullanıcı tanımlı makro örneği. |
| `\vect{v}` | Kalın vektör sembolü için özel komutlar dersinden örnek kullanıcı tanımlı makro. |
| `\set{...}` | Boyutlu ayraçları dizen özel komutlar dersinden örnek kullanıcı tanımlı makro. |
| `\citepair' | Standart bir komut değil, özel komutlar dersinden örnek kullanıcı tanımlı alıntı yardımcı makrosu. |
| `\E` | Beklenti için örnek kullanıcı tanımlı operatör, genellikle şununla tanımlanır:`\DeclareMathOperator` veya `\newcommand`. |
| `\R` | Gerçek değerler için örnek kullanıcı tanımlı makro: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | arg max / arg min için operatör adları, bu kursta `\DeclareMathOperator*` ile tanımlanır, böylece aboneler aşağıda yer alır. |

## Sayaçlar ve uzunluklar

| Komut | Ne işe yarar |
| --- | --- |
| `\newcounter{örnekler}` | İsteğe bağlı olarak bir üst öğe tarafından sıfırlanan yeni bir sayaç oluşturur: `\newcounter{examples}[section]`. |
| `\setcounter{sayfa}{1}` | Burada sayfa numaralarını yeniden başlatarak bir sayacın değerini ayarlar. |
| `\addtocounter{örnekler}{2}` | Hiçbir şey yazdırmadan sayaca değer ekler. |
| `\stepcounter{örnekler}` | Bir sayacı birer birer artırır. |
| `\refstepcounter{örnekler}` | Bir sayacı artırır ve onu bir sonraki `\etiket'in hedefi yapar. |
| `\value{örnekler}` | Aritmetikte veya karşılaştırmalarda kullanılmak üzere bir sayacın değerini okur. |
| `\arabic{örnekler}` | Sayacı Arap rakamları olarak yazdırır: 1, 2, 3. |
| `\roman{örnekler}`, `\Roman{örnekler}` | Sayacı küçük veya büyük romen rakamları olarak yazdırır. |
| `\alph{örnekler}`, `\Alph{örnekler}` | Bir sayacı küçük veya büyük harf olarak yazdırır. |
| `\fnsymbol{dipnot}` | Bir sayacı dipnot simgeleri olarak yazdırır: yıldız işareti, hançer vb. |
| `\newlength{\mygap}` | Yeni bir uzunluk kaydı oluşturur. |
| `\setlength{\parskip}{6pt}` | Uzunluk kaydına bir değer atar. |
| `\addtolength{\texttheight}{1cm}` | Mevcut uzunluğa eklenir. |
| `\settowidth{\mygap}{text}` | Bir metnin doğal genişliğine uzunluk ayarlar. |
| `\ebeveyn` | İlk satır paragraf girintisinin uzunluğu; `\setlength{\parindent}{0pt}` ile ayarlayın. |
| `\parşip' | Paragraflar arasındaki dikey boşluğun uzunluğu; '\setlength' ile ayarlayın. |
| `\çizgi genişliği` | Geçerli satırın uzunluğu, boyutlandırma için kullanışlıdır: `genişlik=\satır genişliği`. |
| `\textwidth' | Sayfadaki tam metin bloğu genişliğinin uzunluğu. |
| `\textheight` | Sayfadaki tam metin bloğu yüksekliğinin uzunluğu. |
| `\sütun genişliği` | Çok sütunlu düzende bir sütunun genişliği. |
| `\baselineskip' | Ardışık çizgilerin taban çizgileri arasındaki dikey mesafe. |
|`\linespread{1.3}` | Belgenin tamamı için satır aralığını (satır aralığını) ölçeklendirir; geçerli olması için `\selectfont`a veya bir boyut komutuna ihtiyacı var. |

## Paragraflar, satır sonları ve tireleme

| Komut | Ne işe yarar |
| --- | --- |
| `\\` | Paragrafların, tabloların ve dizilerin içindeki geçerli satırı sonlandırır. |
| `\\[6nokta]` | Arkasında ekstra dikey boşluk bulunan satır sonu. |
| `\yeni satır' | Satırı haklı göstermeden ve sayfa sonuna izin vermeden keser. |
| `\satır sonu` | Burada haklı bir satır sonu talep edilir; isteğe bağlı `[0-4]` ısrarı ayarlar. |
| `\nolinebreak' | Bu noktada satırın kesilmesini engeller. |
| `\par` | Paragrafı, kaynaktaki boş bir satırla aynı şekilde bitirir. |
| `\nogirinti` | Takip eden paragrafın ilk satır girintisini gizler. |
| `\girinti` | Aksi takdirde bastırılacak olan ilk satır girintisini zorlar. |
| `\-` | Bir kelimenin içinde izin verilen bir tireleme noktasını işaretler. |
| `\tireleme{veri kümesi}` | LaTeX'e belirli kelimelerin nasıl tireleneceğini öğreten önsöz listesi. |
| `\özensiz' | Boşluk kurallarını gevşeterek çizgilerin daha kolay kırılmasını sağlar ve kutuların aşırı dolmasını önler. |
| `\telaşlı` | '\sloppy'den sonra katı aralık kurallarını geri yükler. |
| `\raggedright` | Aşağıdaki metni iki yana yaslamak yerine sola hizalar. |
| `\düzensiz sol` | Aşağıdaki metni sağa hizalar. |
| `\ortalama` | Geçerli grup içinde takip eden her şeyi ortalar, ör. bir figürün görüntüsü. |
| `\aynı sayfa` | Geçerli grup içinde sayfa sonlarını engeller. |
| `\enlargethispage{\baselineskip}` | Bir satıra daha sığdırmak için yalnızca geçerli sayfayı biraz daha uzun hale getirir. |
| `~` | Bölünmeyen boşluk: 'Şekil~1' sayıyı aynı satırda tutar. |

## Aralık

| Komut | Ne işe yarar |
| --- | --- |
| `\dörtlü' | Büyük M harfinin genişliği kadar yatay bir boşluk ekler. |
| `\qquad` | `\quad`ın iki katı kadar boşluk ekler. |
| `\boşluk' | Yarım "\dört" yatay boşluk ekler. |
| `\hspace{1cm}` | Yatay boşluk ekler; satır sonunda kaybolur. |
| `\hspace*{1cm}` | Hat kopmasında bile ayakta kalan yatay alan. |
| `\vspace{1cm}` | Belirli bir uzunlukta dikey boşluk ekler. |
| `\vspace*{1cm}` | Sayfa sonunda bile varlığını koruyan dikey alan. |
| `\küçükatlama` | Paragrafların arasına küçük bir dikey boşluk ekler. |
| `\medskip' | Paragraflar arasına orta derecede dikey boşluk ekler. |
| `\bigskip' | Paragraflar arasına büyük bir dikey boşluk ekler. |
| `\hdoldur' | Çizgiyi doldurmak için içeriği birbirinden ayıran esnek yatay alan. |
| `\vdoldur' | Sayfayı doldurmak için içeriği birbirinden ayıran esnek dikey alan. |
| `\dotfill` | Menü veya içindekiler satırında olduğu gibi kalan satırı noktalarla doldurur. |
| `\hrulefill` | Kalan satırı yatay bir cetvelle doldurur. |
| `\stretch{2}` | Orantılı aralık için ağırlığa sahip esnek yapıştırıcı: `\hspace{\stretch{2}}`. |
| `\doldur` | Ünitenin esnek uzunluğu; `\hspace{\fill}`, `\hfill`in genişlediği şeydir. |
| `\fantom{metin}` | Tam olarak argümanının alanını kaplıyor ancak hiçbir şey yazdırmıyor. |
| `\hphantom{metin}` | Sıfır yükseklikle yalnızca argümanının genişliğini alır. |
| `\vfantom{metin}` | Sıfır genişlikle yalnızca argümanının yüksekliğini alır. |
| `\parçala{...}` | Argümanını yazdırır ancak yüksekliği ve derinliği sıfırmış gibi davranır. |
| `\dikme' | Görünmez destek, sıra yüksekliklerini eşitlemek için normal bir çizginin yüksekliğini destekler. |
| `\mathstrut' | Matematik modu, radikalleri ve kesirleri hizalamak için parantez boyutundadır. |

## Kutular ve kurallar

| Komut | Ne işe yarar |
| --- | --- |
| `\mbox{...}` | Kırılmaz yatay kutu; ayrıca içeriğini tek satırda tutar. |
| `\makebox[3cm][r]{...}` | Seçilen hizalamayla (l, c, r, s) ayarlanmış genişlikte kutu. |
| `\fbox{...}` | İçeriğinin etrafına bir çerçeve çizer. |
| `\framebox[3cm][c]{...}` | Seçilen hizalamayla belirlenmiş genişlikte çerçeveli kutu. |
| `\parbox{5cm}{...}` | Paragraf kutusu: belirtilen genişlikte mini bir metin sütunu. |
| `\raisebox{2pt}{...}` | İçeriğini yukarı (veya negatif uzunlukla aşağı) kaydırır. |
| `\kural{2cm}{0.4pt}` | İçi dolu bir dikdörtgen çizer; özel hatlar için iş gücü. |
| `\colorbox{sarı}{...}` | Metni renkli bir arka plan kutusuna (xcolor) yerleştirir. |
| `\fcolorbox{kırmızı}{sarı}{...}` | Renkli çerçeveli (xcolor) renkli kutu. |

## Sayfalar, numaralandırma ve başlıklar

| Komut | Ne işe yarar |
| --- | --- |
| `\yenisayfa` | Geçerli sayfayı sonlandırıp yeni bir sayfa başlatır. |
| `\temizsayfa` | Bekleyen tüm şekil ve tabloların ilk temizliğinden sonra yeni bir sayfa başlatır. |
| `\clearddoublepage` | `\clearpage` gibi ama aynı zamanda sonraki sayfanın sağdaki (tek) sayfa olmasını da sağlar. |
| `\sayfa sonu` | Bu noktada sayfayı tam yüksekliğe kadar uzatarak bir sayfa sonu ister. |
| `\nosayfa sonu` | Bu noktada sayfa sonunu caydırır. |
| `\pagenumbering{roman}` | Sayacı 1'e sıfırlayarak sayfa numarası stilini (Arapça, Roman, Roma, Alfabe, Alfa) ayarlar. |
| `\pagestyle{fantezi}` | Sonraki tüm sayfalar için çalışan üstbilgi/altbilgi stilini (düz, boş, başlıklar, başlıklarım, süslü) ayarlar. |
| `\thispagestyle{boş}` | Yalnızca geçerli sayfanın üstbilgi/altbilgi stilini geçersiz kılar. |
| `\sayfa` | Geçerli sayfa numarasını yazdırır; üstbilgi ve altbilgilerin içinde kullanılır. |
| `\marginpar{...}` | Geçerli satırın yanındaki sayfa kenar boşluğuna bir not koyar. |
| `\fancyhf{}` | Kendinizinkini ayarlamadan önce tüm fantezi hdr üstbilgi ve altbilgi alanlarını temizler. |
| `\fancyhead[R]{...}` | Bir fantezihdr başlık alanı ayarlar, burada sağ taraftadır. |
| `\fancyfoot[C]{\thepage}` | Bir fantezihdr altbilgi alanı ayarlar; burada ortalanmış bir sayfa numarası bulunur. |
| `\headrulewidth` | başlık kuralı kalınlığı için fantezihdr makrosu; çizgiyi kaldırmak için 0pt olarak yenileyin. |
| `\ayak kuralı genişliği` | Altbilgi kuralı kalınlığı için fantezihdr makrosu, varsayılan olarak 0pt. |
| `\newgeometry{margin=2cm}` | Belgenin ortasındaki sayfa geometrisini (geometri) değiştirir. |
| `\restoregeometri` | '\newgeometry' (geometri) sonrasında başlangıç ​​geometrisine geri döner. |

## Özel karakterler

On ayrılmış karakter ve bunların nasıl yazdırılacağı, ayrıca yaygın metin sembolleri.

| Komut | Ne işe yarar |
| --- | --- |
| `\%` | Yüzde işaretini yazdırır (çıplak `%` bir yorumu başlatır). |
| `\&` | Bir ve işareti yazdırır (çıplak `&` tablo sütun ayırıcısıdır). |
| `\#` | Bir karma yazdırır (çıplak `#' makro bağımsız değişkenlerini işaretler). |
| `\_` | Bir alt çizgi yazdırır (çıplak `_' bir matematik alt simgesidir). |
| `\{` ve `\}` | Kıvrımlı parantezleri (çıplak parantez grubu) yazdırın. |
| `\$` | Bir dolar işareti yazdırır (çıplak '$' matematik modunu değiştirir). |
| `\textbackslash' | Metinde ters eğik çizgi yazdırır. |
| `\textasciitilde` | Metinde bir yaklaşık işareti yazdırır (çıplak `~' bölünemez bir boşluktur). |
| `\textasciicircum' | Metinde bir düzeltme işareti yazdırır (çıplak `^' bir matematik üst simgesidir). |
| `\textbar` | Metinde dikey bir çubuk yazdırır. |
| `\textless`, `\textgreater` | Metin modunda < ve > öğelerini doğru şekilde yazdırın. |
| `\ldots`, `\dots` | Doğru aralıklı üç nokta; '\dots' matematik moduna (amsmath) uyum sağlar. |
| `\textellipsis` | '\dots'un matematik dışında kullandığı metin modu üç nokta. |
| `\textemdash`, `\textendash` | Em ve en tire için adlandırılmış komutlar (`---` ve `--` ile aynı çıktı). |
| `\textquotedblleft`, `\textquotedblright` | Kıvırcık çift tırnak işaretleri (genellikle geri tırnak çiftleri ve kesme işareti çiftleri olarak yazılır). |
| `\guillemetleft`, `\guillemetright` | Fransızca açı tırnak işaretleri (eski yazılışı: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Metinde hançer ve çift hançer, yazar bağlantıları için yaygındır. |
| `\S` | Yasal bir belgenin S 2.1'indeki gibi bölüm işareti. |
| `\P` | Paragraf (pilcrow) işareti. |
| `\pound` | İngiliz sterlini işareti. |
| `\euro` | Euro işareti (eurosym paketi; çekirdek aynı zamanda `\texteuro`yu da sağlar). |
| `\telif hakkı` | Telif hakkı işareti. |
| `\textregistered` | Kayıtlı ticari marka işareti. |
| `\textticari marka` | Ticari marka işareti. |
| `\textdegree` | Derece işareti: '25\textdegree C'. |
| `\textmu` | Dik mikroMikron gibi metinler için imza atın. |
| `\textperthousand` | Mil başına işareti. |

## Aksanlar ve özel harfler

pdfLaTeX dönemi metin vurguları için; XeLaTeX/LuaLaTeX ve UTF-8 girişiyle genellikle yalnızca karakteri yazabilirsiniz.

| Komut | Ne işe yarar |
| --- | --- |
| `\'{e}` | Akut vurgu: Kafede olduğu gibi aksanlı e-akut. |
| `` \`{e} `` | Ciddi aksan. |
| `\^{o}` | Çevresel vurgu. |
| `\"{u}` | Çift nokta/dierez. |
| `\~{n}` | Tilde aksanı, İspanyolca n-tilde'deki gibi. |
| `\c{c}` | Cedilla, Fransız c-cedilla'daki gibi. |
| `\v{s}` | Caron (hacek), Çekçe ve Hırvatça adlarda yaygındır. |
| `\H{o}` | Macar çift vurgulu aksanı. |
| `\k{a}` | Ogonek, Lehçe a-ogonek'teki gibi. |
| `\b{o}` | Bar altı aksanı. |
| `\d{u}` | Harf çevirisinde kullanılan nokta altı vurgusu. |
| `\r{a}` | İskandinav a-halkasındaki gibi halka vurgusu. |
| `\u{o}` | Breve aksanı. |
| `\.{o}` | Nokta üstü vurgu. |
| `\t{oo}` | İki harfi birleştiren vurguyu bağlayın. |
| `\i`, `\j` | Vurguları yığınlamak için noktasız i ve j: `\'{\i}`. |
| `\ae`, `\AE` | Ae ligatür, küçük harf ve büyük harf. |
| `\oe`, `\OE` | Oe ligatür, Fransız yapıtlarında olduğu gibi. |
| `\ss` | Almanca diyez s (eszett). |
| `\o`, `\O` | Danimarka ve Norveç adlarında olduğu gibi kesikli o. |
| `\l`, `\L` | Lehçe l'yi kesti. |
| `\aa`, `\AA` | Angstrom'un adında olduğu gibi bağımsız bir harf olarak A halkası. |

## Yazı tipleri ve boyutları

| Komut | Ne işe yarar |
| --- | --- |
| `\textbf{...}` | Kalın metin. |
| `\textit{...}' | İtalik metin. |
| `\emph{...}` | Bağlama uygun vurgu: düz metinde italik, italik metinde dik. |
| `\textsc{...}` | Küçük büyük harflerle metin. |
| `\texttt{...}` | Daktilo (tek aralıklı) metni, kod ve dosya adları için iyidir. |
| `\textrm{...}` | Roma (serif) aile metni. |
| `\textsf{...}` | Sans-serif aile metni. |
| `\textmd{...}` | Orta (normal) ağırlık, kalın geri alma. |
| `\textup{...}` | Dik şekil, italik veya eğimli geri alma. |
| `\textsl{...}` | Gerçek italikten farklı, eğimli (eğik) şekil. |
| `\textnormal{...}' | Tek adımda belgenin varsayılan yazı tipine sıfırlanır. |
| `\altı çizili{...}` | Metnin altını çizer; idareli kullanın, vurgu genellikle "\emph" şeklindedir. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Grup bitene kadar yazı tipi ailesini (serif, sans, mono) değiştiren bildirimler. |
| `\bfseries`, `\mdseries` | Bildirimler kalına veya orta ağırlığa geri dönüyor. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Bildirimlerin şekli değişiyor: italik, eğik, küçük büyük harfler, dik. |
| `\normalyazı tipi` | Bildirge aileyi, seriyi ve şekli varsayılanlara sıfırlıyor. |
| `\onlar` | `\emph` bildirim biçimi: `{\em like this}`. |
| `\küçük` | On boyutlu komutların en küçüğü. |
| `\scriptsize` | İkinci en küçük boyut, kabaca alt simge boyutunda. |
| `\footnotesize` | Dipnotlar için kullanılan boyut. |
| `\küçük` | Normalden biraz daha küçük. |
| `\normalboyut` | Belgenin temel boyutu. |
| `\large`, `\Large`, `\LARGE` | Normalden bir, iki ve üç adım daha büyük. |
| `\kocaman`, `\Kocaman` | En büyük iki standart boyut. |
| `\fontsize{14}{17}\selectfont` | İsteğe bağlı bir yazı tipi boyutu ve taban çizgisi atlamasını ayarlar ve ardından etkinleştirir. |
| `\selectfont' | Bekleyen yazı tipi özelliğini etkinleştirirdeğişiklikler (NFSS). |
| `\textsuperscript{...}` | 1. veya dipnot tarzı işaretçilerde olduğu gibi yükseltilmiş küçük metin. |
| `\textsubscript{...}` | Metin modunda küçük metin azaltıldı. |
| `\ailevarsayılan` | Varsayılan yazı tipi ailesini tutan makro; tüm belgenin yazı tipini değiştirmek için yenileyin. |
| `\sfdefault` | Sans-serif ailesini adlandıran makro; `\renewcommand{\familydefault}{\sfdefault}` belgeyi sanssız hale getirir. |
| `\setmainfont{...}` | Ana gövde yazı tipini XeLaTeX veya LuaLaTeX (fontspec) altında ada göre ayarlar. |
| `\setsansfont{...}` | Sans-serif yazı tipini XeLaTeX veya LuaLaTeX (fontspec) altında ada göre ayarlar. |
| `\setmonofont{...}` | Tek aralıklı yazı tipini XeLaTeX veya LuaLaTeX (fontspec) altında ada göre ayarlar. |

## Renk (xrenk)

| Komut | Ne işe yarar |
| --- | --- |
| `\textcolor{kırmızı}{...}` | Bir metin parçasını renklendirir. |
| `\renk{mavi}` | Bildiri formu: grup bitene kadar her şeyi renklendirir. |
| `\definecolor{marka}{HTML}{2F6F4F}` | Daha sonra kullanılmak üzere adlandırılmış bir renk tanımlar. |
| `\pagecolor{gri!10}` | Tüm sayfanın arka plan rengini ayarlar. |
| `\rowcolor{gri!20}` | Bir tablo satırını renklendirir (xcolor, colortbl aracılığıyla 'tablo' seçeneğiyle birlikte). |
| `\cellcolor{gri!20}` | Bir tablo hücresini renklendirir (colortbl). |
| `\rowcolors{2}{gray!10}{white}` | Belirli bir satırdan başlayarak alternatif satır renkleri (xcolor 'tablo' seçeneği). |

## Grafik (grafikx)

| Komut | Ne işe yarar |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Bir görüntü dosyası ekler; anahtar seçenekler: "genişlik", "yükseklik", "ölçek", "açı", "kırp" + "klip", "sayfa". |
| `\graphicspath{{figures/}}` | LaTeX'e görüntü dosyalarını hangi klasörlerde arayacağını söyler. |
| `\rotatebox[origin=c]{90}{...}` | İçeriğini bir açıyla döndürür. |
| `\scalebox{0.8}{...}` | İçeriğini bir faktöre göre ölçeklendirir. |
| `\resizebox{5cm}{!}{...}` | İçeriği hedef genişliğe ve/veya yüksekliğe göre yeniden boyutlandırır; `!` en boy oranını korur. |
| `\yansıtmakutusu{...}` | İçeriğini yatay olarak yansıtır. |
| `\includepdf[pages=-]{paper.pdf}` | Başka bir PDF'den (pdf sayfaları) tüm sayfaları ekler. |

## Matematik moduna giriliyor

| Komut | Ne işe yarar |
| --- | --- |
| `$...$` | Bir cümle içinde satır içi matematik. |
| `\(...\)` | LaTeX'in resmi satır içi matematik sınırlayıcıları, "$...$"a eşdeğerdir. |
| `\[...\]` | Numarasız görüntülenen denklem kendi satırında. |
| `$$...$$` | Düz TeX ekran matematiği; LaTeX'te önerilmez, bunun yerine `\[...\]' kullanın. |
| 'x^2', 'x_i' | `^` üst simge, `_` ise alt simge yapar; çok karakterli komut dosyalarını destekleyin: `x^{10}`. |

## Matematik: Yunan harfleri

Bunların hepsi yalnızca matematik modunda çalışır. Yunan başkentinin Latin başkentinden farklı olduğu yerlerde büyük harf formları mevcuttur.

| Komut | Ne işe yarar |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Yunan harfleri alfa, beta, gama, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Yunan harfleri epsilon, zeta, eta, teta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Yunan harfleri iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Yunan harfleri xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Yunan harfleri upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Büyük Yunan harfleri Gama'dan Pi'ye kadar. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Büyük Yunan harfleri Sigma'dan Omega'ya kadar. |
| `\varepsilon` `\vartheta` `\varpi` | Epsilonun (çoğu makalenin kullandığı kıvırcık olan), teta ve pi'nin farklı biçimleri. |
| `\varrho` `\varsigma` `\varphi` | Rho, sigma (kelime sonu) ve phi'nin (açık kıvırcık) farklı biçimleri. |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | İtalik büyük harfli Yunanca çeşitleri ( amsmath ). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Geriye kalan italik büyük harfli Yunanca varyantlar ( amsmath ). |

## Matematik: ikili operatörler

| Komut | Ne işe yarar |
| --- | --- |
| `\pm`, `\mp` | Artı-eksi ve eksi-artı işaretleri. |
| `\zamanlar` | Çarpma çarpı işareti, 3 x 3 gibi boyutlar için de kullanılır. |
| `\div' | Bölünme (obelus) işareti. |
| `\cdot` | Çarpma için ortalanmış nokta. |
| `\ast`, `\star`, `\bullet`, `\circ` | Yıldız işareti, yıldız, madde işareti ve küçük daire operatörleri; '\circ' aynı zamanda fonksiyon bileşimidir. |
| `\oplus`, `\ominus` | Daire içine alınmış artı (doğrudan toplam, XOR) ve daire içine alınmış eksi. |
| `\otimes`, `\oslash`, `\odot` | Daire içine alınmış zamanlar (tensör çarpımı), daire içine alınmış eğik çizgi, daire içine alınmış nokta. |
| `\kama`, `\vee` | Takoz (mantıksal VE, dış çarpım) ve vee (mantıksal VEYA, birleştirme). |
| `\ülke`, `\lor` | '\wedge' ve '\vee' takma adları mantıksal okunuşlarına göre adlandırılmıştır. |
| `\başlık`, `\fincan` | Kavşak ve birleşim işaretlerini ayarlayın. |
| `\setminus` | Farkı ters eğik çizgi olarak ayarlayın: `A \setminus B`. |
| `\uplus` | Çoklu küme veya ayrık birleşim için artı ile birleşim. |
| `\sqcap`, `\sqcup` | Kare kapak ve fincan, kafes teorisinde buluşur ve birleşir. |
| `\amalg' | Ortak ürünler için kullanılan amalgamasyon (baş aşağı ürün). |
| `\hançer`, `\ddagger` | Matematik operatörleri olarak hançer ve çift hançer, ör. eşlenik devrik `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Üçgen operatörleri, ör. simetrik fark. |
| `\üçgensol`, `\üçgensağ` | Yan üçgenler, ör. normal alt grup ilişkisi. |

## Matematik: ilişkiler

| Komut | Ne işe yarar |
| --- | --- |
| `\leq`, `\le` | Küçüktür veya eşittir işareti ('\le' kısa takma addır). |
| `\geq`, `\ge` | Büyüktür veya eşittir işareti ('\ge' kısa takma addır). |
| `\neq`, `\ne` | Eşit değildir işareti ('\ne' kısa takma addır). |
| `\ll`, `\gg` | Çok daha az ve çok daha büyük işaretleri. |
| `\yaklaşık` | Yaklaşık olarak eşittir işareti. |
| `\sim` | Tilde ilişkisi, 'şu şekilde dağıtılır' veya 'benzerdir' şeklinde okunur. |
| `\simeq' | Asimptotik olarak eşit işareti (eşitliğin üzerinde yaklaşık işareti). |
| `\kong` | Eşbiçimlilik için kullanılan, uyumlu işaret (iki çubuğun üzerinde tilde). |
| `\eşdeğer' | Aynı (üçlü çubuk) işareti, aynı zamanda uyum için de kullanılır. |
| `\propto` | Orantılı-imzalamak için. |
| `\asymp' | Asimptotik olarak eşdeğer ilişki (yığılmış eğriler). |
| `\doteq' | Noktalı eşittir işareti, 'yaklaşır' veya 'şu şekilde tanımlanır' olarak okunur. |
| `\prec`, `\succ` | İlişkilerin, eğrisel sıralamaların önünde gelir ve onları başarır. |
| `\preceq`, `\succeq` | Önce gelir veya eşittir ve başarılı veya eşittir. |
| `\subset`, `\subseteq` | Uygun alt küme ve alt küme veya eşit işaretleri. |
| `\supset`, `\supseteq` | Uygun üst küme ve üst küme veya eşit işaretleri. |
| `\sqsubseteq`, `\sqsupseteq` | Bilgi sırası için kullanılan kare altküme ve üstküme ilişkileri. |
| `\in`, `\notin` | Üyeliği ve olumsuzluğunu ayarlayın: 'x \ in A'. |
| `\ni` | Ters üyelik: küme elemanı içerir. |
| `\vdash`, `\dashv` | Turnike 'kanıtlıyor' ve bunun tersi. |
| `\modeller` | Çift turnike, anlamsal zorunluluk. |
| `\suçlu' | Dik/bağımsızlık ilişkisi. |
| `\paralel` | Paralel çubuklar ilişkisi. |
| `\orta` | Küme oluşturucu gösteriminde veya 'bölme'de olduğu gibi ilişki aralığına sahip dikey çubuk. |
| `\değil` | Eğik çizginin üstüne basarak aşağıdaki ilişkiyi olumsuzlar: `\değil\subset`. |

## Matematik: oklar

| Komut | Ne işe yarar |
| --- | --- |
| `\to`, `\rightarrow` | Sağ ok, 'f: A \'dan B'ye' fonksiyon türlerinde olduğu gibi ve 'x'i 0'la sınırlandırır. |
| `\alır`, `\leftarrow` | Sol ok, sözde kodda atama için de kullanılır. |
| `\leftrightarrow` | İki başlı tek ok. |
| `\Sağok` | Çift sağ ok, 'ima eder' olarak okunur. |
| `\Sol ok` | Çift sol ok, 'tarafından ima edilmiştir' şeklinde okunur. |
| `\Solsağ ok` | Çift iki başlı ok, 'eğer ve ancak eğer' olarak okunur. |
| `\imali`, `\imaliedby` | Mantık (amsmath) için aralıklı `\Rightarrow` ve `\Leftarrow`. |
| '\if' | 'Eğer ve ancak eğer' için aralıklı `\Leftrightarrow`. |
| `\mapsto` | Çubuk kuyruklu harita oku: `x \mapsto x^2`. |
| `\uzun haritalarto` | '\mapsto'nun uzun versiyonu. |
| `\kancasağok` | Eklemeler/gömmeler için kanca kuyruklu sağ ok. |
| `\rightharpoonup' | Zayıf yakınsama için kullanılan sağ zıpkın (yarım ok). |
| `\rightleftharpoons` | Kimyasal dengede olduğu gibi eşleştirilmiş zıt zıpkınlar. |
| `\yol açar` | Kıvrımlı sağ ok, 'yol açar' (amssymb). |
| `\uparrow`, `\downarrow` | Yukarı ve aşağı oklar. |
| `\yukarı ok' | Çift başlı dikey ok. |
| `\Yukarı Ok`, `\Aşağı Ok`, `\Yukarı Ok` | Çift çizgili dikey oklar. |
| `\nearrow`, `\searrow` | Çapraz oklar kuzeydoğu ve güneydoğu, ör. bir limite kadar artar/azalır. |
| `\swarrow`, `\nwarrow` | Çapraz oklar güneybatı ve kuzeybatı. |
| `\uzunsağok`, `\uzunsolok` | Uzun tek oklar. |
| `\Uzunsağok`, `\Uzunsolok`, `\Uzunsolsağok` | Uzun çift oklar. |
| `\xrightarrow{f}` | Üstünde bir etiket bulunan, sığacak şekilde büyüyen genişletilebilir sağ ok (amsmath). |
| `\xleftarrow{f}` | Üstte bir etiket (amsmath) bulunan genişletilebilir sol ok. |

## Matematik: büyük operatörler

| Komut | Ne işe yarar |
| --- | --- |
| `\sum_{i=1}^{n}` | Sınırlı toplama işareti. |
| `\prod_{i=1}^{n}` | Sınırlı ürün işareti. |
| `\coprod` | Ortak ürün (baş aşağı ürün) işareti. |
| `\int_0^1` | Sınırları olan integral işareti. |
| '\iint' | Çift katlı integral işareti (amsmath). |
| `\iiint` | Üçlü integral işareti (amsmath). |
| `\noint` | Kontur (kapalı döngü) integral işareti. |
| `\bigcap`, `\bigcup` | Bir küme ailesi üzerinde büyük kesişim ve birleşme. |
| `\bigsqcup` | Büyük kare fincan (ayrık birleşim). |
| `\bigvee`, `\bigwedge` | Bir dizin kümesi üzerinde büyük VEYA ve büyük VE. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Yapıların endeksli toplamları ve çarpımları için büyük daire içine alınmış artı, zamanlar ve nokta. |
| `\biguplus` | Bir indeks seti üzerinde artı ile büyük birleşim. |
| `\limitler` | Aşağıdaki operatörün alt/üst simgelerini yukarı ve aşağı zorlar: `\int\limits_0^1`. |
| `\limitler` | Alt/üst simgeleri yukarı ve aşağı yerine yana doğru zorlar. |

## Matematik: sınırlayıcılar ve boyutlandırma

| Komut | Ne işe yarar |
| --- | --- |
| `\sol( ... \sağ)` | İçeriğine uyacak şekilde büyüyen, otomatik boyutlandırılmış sınırlayıcı çifti. |
| `\sol.` ve `\sağ.` | Değerlendirme çubuklarında olduğu gibi, büyüklükteki bir çiftin yalnızca bir tarafı istendiğinde görünmez ortak. |
| `\orta|` | "\left" ve "\right" arasında otomatik olarak boyutlandırılmış orta ayırıcı (koşullu olasılıkta olduğu gibi). |
| `\big( \Big( \bigg( \Bigg(` | Sınırlayıcıların boyutu biraz büyükten çok büyüğe kadar) manuel olarak boyutlandırılır. |
| `\bigl(...\bigr)` | Doğru açma/kapama aralığına sahip boyut sınırlayıcılar (ayrıca `\Bigl`, `\biggl`, `\Biggl`). |
| `\lkat`, `\rkat` | Zemin destekleri. |
| `\lceil`, `\rceil` | Tavan destekleri. |
| `\langle`, `\rangle` | Sol ve sağ açılı ayraç sınırlayıcıları. |
| `\|` | Çift dikey çubuk sınırlayıcı (norm çubuklar). |
| `\lvert`, `\rvert` | Doğru sınırlayıcı aralığına (amsmath) sahip mutlak değer çubukları. |
| `\lVert`, `\rVert` | Normlar için doğru ayırıcı aralığına (amsmath) sahip çift çubuk. |
| `\ters eğik çizgi` | Matematik sembolü veya sınırlayıcı olarak ters eğik çizgi. |

## Matematik: vurgular ve süslemeler

| Komut | Ne işe yarar |
| --- | --- |
| `\şapka{x}` | Bir sembolün üzerinde küçük şapka vurgusu. |
| `\kontrol et{x}` | Caron (ters şapka) vurgusu. |
| `\breve{x}` | Breve (yuvarlak) vurgu. |
| `\acute{x}`, `\grave{x}` | Matematikte akut ve ciddi vurgular. |
| `\tilde{x}` | Bir sembolün üzerinde yaklaşık işareti vurgusu. |
| `\bar{x}` | Bir sembolün üzerindeki kısa çubuk. |
| `\vec{v}` | Bir sembolün üzerindeki küçük ok. |
| `\dot{x}`, `\ddot{x}` | Zaman türevleri için ortak olan, bir sembolün üzerinde bir veya iki nokta. |
| `\dddot{x}` | Bir sembolün üzerinde üç nokta (amsmath). |
| `\mathring{x}` | Bir sembolün üzerindeki halka vurgusu. |
| `\widehat{abc}` | Çeşitli sembollerin üzerine uzanan geniş şapka. |
| `\widetilde{abc}` | Birkaç sembolün üzerine yayılan geniş dalga işareti. |
| `\overrightarrow{AB}` | A'dan B'ye vektörlerde olduğu gibi sağ oku bir ifadenin üzerine uzatma. |
| `\overleftarrow{AB}` | Sol oku bir ifadenin üzerine uzatma. |
| `\overline{x + y}` | Bir ifadenin tamamının üzerine çizgi çizin. |
| `\altı çizili{x + y}` | Tüm ifadenin altındaki çizgi (metinde de çalışır). |
| `\overbrace{...}^{n}` | Üstte isteğe bağlı bir etiket bulunan, bir ifadenin üzerinde yatay ayraç. |
| `\underbrace{...__{n}` | Altında isteğe bağlı bir etiket bulunan, bir ifadenin altındaki yatay ayraç. |
| `\taşma{!}{=}` | Bir sembolü diğerinin üzerine yerleştirir, ör. 'eşit olmalıdır' (amsmath). |
| `\underset{i}{\max}` | Bir sembolü diğerinin altına yerleştirir (amsmath). |
| `\stackrel{\text{def}}{=}` | Bir simgeyi bir ilişki üzerine istifleyen eski çekirdek komutu. |
| `\boldsymbol{\beta}` | Yunan harflerini ve sembollerini de kalınlaştıran cesur matematik (amsmath). |
| `\prime` | Başbakan sembolü; `x'`, `x^{\prime}` için genel kısaltmadır. |

## Matematik: log benzeri operatörler

Tüm dizgiler doğru aralıklarla dik olarak; sınırlayıcılar, ekran matematiğinin altına aboneleri koyar.

| Komut | Ne işe yarar |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Temel trigonometrik fonksiyonlar. |
| `\sn`, `\csc` | Sekant ve kosekant. |
| `\arcsin`, `\arccos`, `\arctan` | Ters trigonometrik fonksiyonlar. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Hiperbolik fonksiyonlar. |
| `\exp`, `\ln`, `\log`, `\lg` | Üstel ve logaritmalar ("\lg", geleneksel olarak log tabanı 2 veya 10'dur). |
| `\det`, `\dim`, `\ker`, `\deg` | Determinant, boyut, çekirdek, derece. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | En büyük ortak bölen, hom-kümeleri, karmaşık argüman, olasılık. |
| `\lim_{x \to 0}` | Limit operatörü, ekran matematiğinde aşağıdaki alt simgeyle dik. |
| `\limsup`, `\liminf` | Üstün ve aşağıyı sınırlayın. |
| `\inf`, `\sup` | Infimum ve supremum operatörleri, dik dizilmiş. |
| `\min`, `\max` | Minimum ve maksimum operatörler, ekran matematiğinde aşağıdaki limitlerle dikey olarak dizilir. |
| `\bmod' | Operatör aralığına sahip ikili mod operatörü: `a \bmod n`. |
| `\pmod{n}` | Parantez içine alınmış sondaki '(mod n)'. |
| `\mod{n}` | 'mod n'yi parantez olmadan takip etmek (amsmath). |
| `\operatöradı{lcm}` | Giriş beyanı olmayan (amsmath) tek seferlik doğrudan operatör adı. |
| `\operatöradı*{ess\,sup}` | Aşağıdaki limitleri alan tek seferlik operatör (amsmath). |

## Matematik: kesirler, binomlar ve yığınlama

| Komut | Ne işe yarar |
| --- | --- |
| `\frac{a}{b}` | Yığılmış kesir: pay/payda. |
| `\dfrac{a}{b}` | Kesir, satır içi bile tam ekran boyutuna zorlandı (amsmath). |
| `\tfrac{a}{b}` | Kesir, ekran matematiğinde (amsmath) bile küçük satır içi boyuta zorlandı. |
| `\cfrac{a}{b}` | Tam boyutlu iç içe düzeylerle (amsmath) devam eden kesir. |
| `\sqrt{x}`, `\sqrt[3]{x}` | Karekök; isteğe bağlı argüman n'inci bir kök verir. |
| `\binom{n}{k}` | Parantez içindeki binom katsayısı (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Ekran boyutu ve metin boyutu zorunlu binomlar (amsmath). |
| `{n \k'yi seç}` | Düz TeX binom ilkel; LaTeX'te önerilmez, '\binom' kullanın. |
| `{a \b'nin üzerinde}` | Düz TeX fraksiyonu ilkel; LaTeX'te önerilmez, '\frac' kullanın. |
| `{a \üstte b}` | Çubuksuz düz TeX istifleme ilkel; önerilmez, '\substack' veya '\genfrac' kullanın. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | '\frac', '\binom' ve arkadaşlarının (amsmath) arkasındaki genel kesir oluşturucu. |
| `\substack{i < n \\ j < m}` | Büyük bir operatörün (amsmath) altındaki çok satırlı alt simge. |
| `\sideset{_a^b}{_c^d}{\prod}` | Büyük bir operatörün (amsmath) dört köşesine de indeksler ekler. |
| `\prescript{a}{b}{X}` | Sol taraftaki üst simgeler/alt simgeler, izotop gösteriminde (matematik araçları) olduğu gibi. |

## Matematik: boşluklar ve stiller

| Komut | Ne işe yarar |
| --- | --- |
| `\,` | Bir sayı ile birimi arasındaki ince matematik uzayı. |
| `\:` | Orta matematik alanı. |
| `\;` | Kalın matematik alanı. |
| `\!` | Sembolleri yakına çeken negatif ince alan. |
| `\quad`, `\qquad` | Matematikte veya metinde bir em ve iki em boşlukları. |
| `\displaystyle` | Tam ekran matematik boyutlandırmasını zorlar, ör. Satır içi matematikte büyük sınırlar. |
| `\textstyle` | Ekran matematiğinin içinde satır içi matematik boyutlandırmayı zorlar. |
| `\scriptstyle`, `\scriptscriptstyle` | Abone simge ve alt simge boyutlandırmayı zorunlu kılın. |

## Matematik: harfler, alfabeler ve çeşitli semboller

| Komut | Ne işe yarar |
| --- | --- |
| `\mathbb{R}` | Sayı kümeleri için karatahta kalın harfler (amssymb). |
| `\mathbf{x}` | Matematikte vektörler ve matrisler için ortak olan kalın dik harfler. |
| `\mathcal{L}` | Kaligrafik büyük harfler, ör. kayıp veya Lagrangian. |
| `\mathfrak{g}` | Cebir ve mantıkta kullanılan Fraktur harfleri. |
| `\mathscr{F}` | Komut dosyası büyük harfleri, "\mathcal" (mathrsfs)'den daha kıvrımlı. |
| `\mathrm{d}x` | Birimler ve çok harfli adlar için matematikte dik (roma) harfler. |
| `\mathit{fark}` | Sözcük benzeri boşluklara sahip, italik çok harfli tanımlayıcı. |
| `\mathsf{T}`, `\mathtt{x}` | Matematikte sans-serif ve daktilo harfleri. |
| `\bm{\beta}` | Kalın matematik sembolleri, '\boldsymbol' (bm paketi) alternatifi. |
| `\text{eğer } x > 0` | Matematik içinde uygun aralıklarla (amsmath) normal dik metin. |
| `\infty' | Sonsuzluk işareti. |
| `\kısmi` | Kısmi türev (kıvırcık d) işareti. |
| `\nabla` | Gradyanlar ve ıraksama için Nabla (del) operatörü. |
| `\hbar` | Bir çubukla azaltılmış Planck sabiti, h. |
| `\ell` | Komut dosyası küçük l harfi, 1 rakamıyla karışıklığı önlemek için kullanılır. |
| `\wp` | Weierstrass s. |
| `\Yeniden`, `\Ben` | Gerçek ve sanal kısım sembolleri (Fraktur R ve I). |
| `\aleph' | Aleph, sonsuz kardinaller için. |
| `\boşküme` | Boş set işareti. |
| `\varhiçbir şey` | Birçok yazarın tercih ettiği yuvarlak boş küme çeşidi (amssymb). |
| `\açı` | Açı sembolü. |
| `\ölçülen açı` | Yaylı ölçülen açı sembolü (amssymb). |
| `\üçgen` | Üçgen sembolü. |
| `\square`, `\blacksquare` | Açık ve dolu kareler; doldurulmuş olan genellikle kanıtları (amssymb) bitirir. |
| `\elmas`, `\pastil` | Küçük elmas operatörü; pastil sembolü (ikincisi için amssymb). |
| `\üst`, `\bot` | Üst (doğru) ve alt (yanlış/tanımsız) semboller. |
| `\forall`, `\var` | Evrensel ("herkes için")ve varoluşsal ("vardır") niceleyiciler. |
| `\nvar' | Olumsuz varoluşsal niceleyici (amssymb). |
| `\neg` | Mantıksal DEĞİL işareti. |
| `\bu nedenle`, `\çünkü` | Üç noktalı 'bu nedenle' ve 'çünkü' işaretleri (amssymb). |
| `\düz`, `\doğal`, `\keskin` | Matematik notasyonunda da kullanılan müzik kazaları. |
| `\surd` | Tartışmasız çıplak radikal sembol. |
| `\onay işareti` | Onay işareti (amssymb). |
| `\cdots' | Operatörler arasında ortalanmış noktalar: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Çoğunlukla matrislerde dikey ve çapraz noktalar. |
| `\dotsb`, `\dotsc` | Anlamsal noktalar: ikili operatörler arasında ve virgüller arasında (amsmath). |

## amsmath ve mathtools görüntüleme araçları

| Komut | Ne işe yarar |
| --- | --- |
| `\etiket{...}` | Otomatik denklem numarasını kendi etiketinizle (amsmath) değiştirir. |
| `\etiket*{...}` | `\tag' gibi ancak çevresindeki parantezleri (amsmath) olmadan. |
| `\etiket` | Numaralandırılmış bir ortamın (amsmath) bir satırındaki denklem numarasını gizler. |
| `\sayı` | "\notag"ın eski eşanlamlısı. |
| `\numberwithin{equation}{section}` | Bölüm başına sayı denklemleri: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Hizalamayı (amsmath) koruyarak bir hizalama bloğunu tam genişlikte bir metin satırıyla keser. |
| `\shortintertext{...}` | Daha az dikey alana sahip `\intertext` gibi (matematik araçları). |
| `\allowdisplaybreaks` | Çok satırlı görüntülerin sayfalar arasında bölünmesini sağlar (amsmath). |
| `\displaybreak` | Görüntünün bu noktasında sayfa sonu ister (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Geniş operatör sınırlamalarının içeriği birbirinden ayırmamasını sağlar (matematik araçları). |
| `\mathclap{...}` | Geniş alt/üst simgeler (matematik araçları) için sıfır genişlikli matematik içeriği. |
| `\coloneqq' | İki nokta üst üste eşittir tanım işareti := doğru aralıkla (matematik araçları). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Yıldızlı otomatik boyutlandırma formuna (matematik araçları) sahip bir sınırlayıcı makroyu tanımlar. |
| `\eqref{eq:kayıp}` | Parantezleriyle (amsmath) bir denklem numarası yazdırır. |
| `\qedburada` | Prova sonu karesini geçerli satıra taşır, örn. görüntülenen bir denklemden sonra (amsthm). |

## Matematik ortamları

| Çevre | Ne işe yarar |
| --- | --- |
| 'denklem' | Görüntülenen, numaralandırılmış bir denklem. |
| 'denklem*' | Görüntülenen, numarasız bir denklem (amsmath). |
| 'hizala' | Her biri numaralandırılmış (amsmath) '&' işaretleriyle hizalanmış birden fazla görüntülenen denklem. |
| 'hizala*' | Sayısız hizalanmış denklemler (amsmath). |
| 'topla' | Hizalamasız, her biri numaralandırılmış (amsmath) çoklu merkezli denklemler. |
| 'hizala' | Sütunlar arasında manuel olarak kontrol edilen boşluklara (amsmath) sahip hizalanmış denklemler. |
| 'bayrakla' | Hizalanmış denklemler sol ve sağ kenar boşluklarına itildi (amsmath). |
| 'bölünmüş' | Uzun bir denklemi, "denklem" (amsmath) içinde, tek bir sayının altındaki hizalı çizgilere böler. |
| 'çok satırlı' | Satırlara bölünmüş uzun bir denklem: soldaki ilk satır, sağdaki son satır (amsmath). |
| 'hizalanmış', 'toplanmış' | Başka bir ekranda (amsmath) kullanılabilen hizalama/toplamanın yapı taşı versiyonları. |
| 'alt denklemler' | İçerisindeki denklemleri 1a, 1b, 1c (amsmath) şeklinde numaralandırır. |
| 'vakalar' | Parçalı işlevlerde (amsmath) olduğu gibi küme ayracı gruplandırılmış durum ayrımları. |
| 'dcase' | kesirlerin tam boyutta kalması için ekran tarzı girişlere sahip "vakalar" (matematik araçları). |
| 'matris' | Sınırlayıcı içermeyen çıplak matris (amsmath). |
| 'pmatris' | Parantez içine alınmış matris (amsmath). |
| 'bmatris' | Matris köşeli parantez içine sarılmıştır (amsmath). |
| 'Bmatris' | Kıvrımlı parantezlerle sarılmış matris (amsmath). |
| 'vmatrix' | Dikey çubuklarla sarılmış matris, standart determinant gösterimi (amsmath). |
| 'Vmatrix' | Matris çift çubuklara sarılmıştır (amsmath). |
| `küçük matris' | Satır içi kullanım için boyutlandırılmış kompakt matris (amsmath). |
| 'dizi' | Sütun başına hizalamaya sahip matematik modu ızgarası, "tablo"nun matematik kuzeni. |
| 'eqnarray' | Eski üç sütunlu denklem ortamı; önerilmez, aralığı yanlıştır, 'hizala'yı kullanın. |

## Çapraz referanslama ve bağlantılar

| Komut | Ne işe yarar |
| --- | --- |
| `\label{fig:setup}` | Bir noktaya (denklem, şekil, bölüm) ad verir, böylece ona başvurabilirsiniz. |
| `\ref{şek:setup}` | Etiketli bir öğenin numarasını yazdırır. |
| `\pageref{şek:setup}` | Etiketin bulunduğu sayfa numarasını yazdırır. |
| `\cref{şek:setup}` | Numarayı VE tür adını otomatik olarak yazdırır: 'şek. 1' (zeki). |
| `\Cref{şek:setup}` | Cümlenin başlangıcı için büyük harfle yazılan `\cref': 'Şekil 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | Bir aralık yazdırır: 'eqs. 1 ila 4' (akıllı). |
| `\labelcref{fig:setup}` | Tür adı (cleveref) olmadan, yalnızca etiket numarasını zekief stilinde yazdırır. |
| `\vref{şek:setup}` | Referans artı gerektiğinde otomatik bir 'sonraki sayfada' ifadesi (varioref). |
| `\autoref{şek:setup}` | hyperref'in yazılan referansı: 'Şekil 1', tüm ifade bağlantılıdır. |
| `\nameref{sn:giriş}` | Başvurulan bölümün başlık metnini (hiperref) yazdırır. |
| `\href{https://example.com}{bağlantı metni}` | Özel metinle (hyperref) tıklanabilir bir bağlantı oluşturur. |
| `\url{https://example.com}` | Daktilo tipinde bir URL yazar ve tıklanabilir hale getirir. |
| `\hyperref[sec:intro]{o bölüm}` | Bir etikete rastgele metin bağlantısı yapar (hiperref). |
| `\hypertarget{spot}{...}` | Belgenin herhangi bir yerinde adlandırılmış bir bağlantı hedefi oluşturur (hiperref). |
| `\hyperlink{spot}{text}` | Bir "\hipertarget"e (hiperref) bağlantılar. |
| `\hayalet bölüm` | Numarasız başlıklara olan bağlantıların doğru yere gelmesini sağlayan bir bağlantı oluşturur (hiperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Başlıklarda matematik için düz metin alternatifi sunarak PDF yer imlerinin geçerli kalmasını sağlar (hiperref). |
| `\pdfbookmark[1]{Title}{name}` | Manuel bir PDF yer imi girişi (hiperref) ekler. |

## Alıntılar ve kaynakça

| Komut | Ne işe yarar |
| --- | --- |
| `\cite{knuth1984}` | Bir bibliyografya girişini anahtara göre alıntılar. |
| `\nocite{anahtar}` | Metinde alıntı yapmadan kaynakçaya bir giriş ekler; `\nocite{*}` her şeyi ekler. |
| `\citep{knuth1984}` | Natbib yazar yılı tarzında parantez içinde alıntı '(Knuth, 1984)'. |
| `\citet{knuth1984}` | Natbib yazar yılı stilinde metinsel alıntı 'Knuth (1984)'. |
| `\citeauthor{knuth1984}` | Yalnızca yazar adlarını (natbib ve biblatex) yazdırır. |
| `\citeyear{knuth1984}` | Yalnızca yılı yazdırır (natbib ve biblatex). |
| `\citealp{knuth1984}` | natbib Kendi alıntınızı oluşturmak için parantezsiz parantezli alıntı. |
| `\citealt{knuth1984}` | yıl boyunca parantezsiz natbib metinsel alıntı. |
| `\parensite{knuth1984}` | biblatex'in parantez içindeki alıntısı, `\citep'in benzeri. |
| `\textcite{knuth1984}` | biblatex'in metinsel alıntısı, `\citet'in benzeri. |
| `\autocite{knuth1984}` | Stilin tercih edilen biçimini (parantez, dipnot vb.) takip eden biblatex alıntısı. |
| `\footcite{knuth1984}` | Biblatex alıntısı dipnotta yer almaktadır. |
| `\fullcite{knuth1984}` | Girişin tam kaynakça metnini satır içi (biblatex) yazdırır. |
| `\citetitle{knuth1984}` | Eserin başlığını (biblatex) yazdırır. |
| `\bibliyografya{refs}` | BibTeX: referans listesini bir .bib dosyasından yazdırır. |
| `\bibliographystyle{plainnat}` | BibTeX: referans formatını seçer; klasik stiller arasında düz, unsrt, alpha, abbrv, ieeetr, acm, apalike bulunur. |
| `\addbibresource{refs.bib}` | biblatex: giriş kısmına bir .bib dosyası kaydeder. |
| `\baskıbibliyografyası` | biblatex: referans listesini yerleştirdiğiniz yere yazdırır. |
| `\bibitem{anahtar}` | Bir 'bibliyografya' ortamında elle yazılmış bir giriş. |
| 'bibliyografya' (ortam) | Elle yazılmışBibTeX'i tamamen atladığınızda kullanılan referans listesi. |

## Kayan noktalar, şekiller ve tablolar

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| 'şekil' (ortam) | Bir resim ve resim yazısı için kayan kapsayıcı; LaTeX son pozisyonu seçer. |
| `şekil*` (ortam) | İki sütunlu bir belgede her iki sütunu kapsayan şekil. |
| 'tablo' (ortam) | Tablo artı başlığı için kayan kapsayıcı; LaTeX son pozisyonu seçer. |
| 'tablo*' (ortam) | İki sütunlu bir belgede her iki sütunu kapsayan tablo. |
| `\begin{figure}[htbp]` | Yerleştirme ipuçları: burada, üstte, altta, kendi sayfanızda; `!` kuralları gevşetir, `[H]` (kayan paket) tam olarak burası anlamına gelir. |
| 'tablo' (ortam) | Satır ve sütunlardan oluşan gerçek ızgara: hücreler "&" ile bölünür, satırlar "\\" ile biter. |
| 'tablo*' (ortam) | Belirtilen toplam genişliğe kadar uzatılmış tablo. |
| 'tabularx' (ortam) | "X" sütunları kalan alanı (tabularx) paylaşan sabit genişlikli tablo. |
| 'dizi' (ortam) | Sütun başına hizalamaya sahip matematik modu ızgarası. |
| 'uzun tablo' (ortam) | Tekrarlanan başlıklara sahip, sayfalara bölünebilen tablo (uzun tablo). |
| 'minisayfa' (ortam) | İçeriği yan yana yerleştirmek için kullanılan, sayfanın içindeki sabit genişlikli mini sayfa. |
| 'alt şekil' (ortam) | Bir şeklin (alt başlık) içinde (a) ve (b) gibi kendi başlığı bulunan bir alt panel. |
| 'sarma şekli' (ortam) | Etrafına gövde metni sarılmış şekil (sarma şekil). |
| 'sidewaysfigure', 'sidewaytable' (ortamlar) | Şamandıralar kendi sayfalarına 90 derece döndürüldü (dönüyor). |
| 'manzara' (çevre) | PDF sayfası otomatik olarak döndürülerek (pdflscape) tüm sayfaları yatay olarak döndürür. |
| 'üç bölümlü' (ortam) | Dipnotların tablo genişliğiyle hizalanması için tabloyu sarar (üç bölümlü tablo). |
| 'tablo notları' (ortam) | Üç bölümlü bir tablonun altındaki notlar listesi, "\tnote{a}" ile işaretlenmiştir. |
| 'ayar kutusu' (ortamve `\ayarkutusu`) | Anahtar/değer seçenekleriyle (ayar kutusu) her türlü içeriği ölçeklendirir, yeniden boyutlandırır veya kırpar. |
| `\başlık{...}` | Bir şekle veya tabloya numaralı bir başlık ekler; arkasına `\label` koyun. |
| `\başlık*{...}` | Numara veya liste girişi olmayan başlık (altyazı paketi). |
| `\captionsetup{...}` | Altyazı yazı tiplerini, etiketleri ve aralığı (altyazı paketi) yapılandırır. |
| `\toprule` | Kitap sekmeleri tablosunun üst kısmındaki ağır kural. |
| `\orta kural` | Booktabs tablosunun başlığı ve gövdesi arasındaki orta kural. |
| `\alt kural` | Kitap sekmeleri tablosunun altındaki ağır kural. |
| `\cmidrule(lr){2-3}` | Seçili sütunları (kitap sekmeleri) kapsayan kısmi kural. |
| `\addlinespace` | Kitap sekmeleri satırları arasında kural yerine küçük ekstra dikey boşluk. |
| `\hline' | Düz bir tabloda tam genişlikte yatay çizgi; Booktabs kuralları genellikle daha iyi görünür. |
| `\cline{2-3}` | Düz bir tablodaki seçili sütunları kapsayan yatay çizgi. |
| `\vline' | Bir tablo satırının bu noktasındaki dikey çizgi; sütun `|` belirticileri olağan yoldur. |
| `\çoklu sütun{2}{c}{Başlık}` | Sütunlardaki hücreleri tek satırda birleştirir. |
| `\multirow{2}{*}{Label}` | Hücreleri satırlar boyunca dikey olarak birleştirir (çok satırlı). |
| `\arraystretch' | Tablo satır yüksekliği faktörü; `\renewcommand{\arraystretch}{1.3}` ile ayarlayın. |
| `\tabcolsep' | Tablo sütununun her iki tarafındaki dolgunun uzunluğu. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Yeniden kullanılabilir bir sütun belirticisini (dizi paketi) tanımlar. |
| `\endfirsthead` | longtable: yalnızca ilk sayfada gösterilen başlığın sonunu işaretler. |
| `\sonbaş` | longtable: takip eden her sayfada tekrarlanan başlığın sonunu işaretler. |
| `\uçayak` | longtable: her sayfa sonunda gösterilen altbilginin sonunu işaretler. |
| `\sonayak` | longtable: yalnızca en sonunda gösterilen altbilginin sonunu işaretler. |
|`\FloatBarrier` | Bu noktanın (plainler) üzerinden sürüklenen şamandıraları durdurur. |

## Dipnotlar

| Komut | Ne işe yarar |
| --- | --- |
| `\dipnot{...}` | Sayfanın altına otomatik numarayla işaretlenmiş bir not koyar. |
| `\dipnot işareti` | '\Dipnot'a izin verilmeyen yerler için yalnızca dipnot işaretçisini yazdırır. |
| `\footnotetext{...}` | Önceki bir "\dipnot işareti"nin metnini sağlar. |

## Teoremler ve ispatlar

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| `\newtheorem{lemma}{Lemma}` | Teorem benzeri bir ortam (amsthm) bildirir. |
| `\newtheorem*{açıklama}{Açıklama}` | Numarasız teorem benzeri bir ortam (amsthm) bildirir. |
| `\theoremstyle{tanım}` | Aşağıdaki '\yeniteorem' bildirimlerinin (amsthm) görünümünü (sade, tanım, açıklama) ayarlar. |
| 'teoremi' (çevre) | Numaralandırılmış teorem bloğu, `\newtheorem{theorem}{Theorem}` tarafından oluşturuldu. |
| 'kanıt' (ortam) | 'Kanıt' yazan kanıt bloğu. ve QED karesi (amsthm) ile biter. |

## Verbatim, kod ve listeler

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| `\verb|kod|` | Satır içi kelimesi kelimesine: tekrarlanan herhangi bir karakterle sınırlandırılarak, tam olarak yazdıklarınızı yazdırır. |
| 'kelimesi kelimesine' (ortam) | Daktilo yazı tipiyle tam olarak yazıldığı gibi yazdırılan metin bloğu. |
| `\verbatiminput{file.txt}` | Bir dosyanın tamamını (kelimesi kelimesine paket) yazdırır. |
| 'lstlisting' (ortam) | İsteğe bağlı sözdizimi vurgulamayla (listeler) kaynak kodu listesi. |
| `\lstinline|kod|` | Listeleme stilinde (listeler) satır içi kod pasajı. |
| `\lstset{language=Python}` | Listeleme varsayılanlarını yapılandırır: dil, numaralandırma, renkler (listeler). |
| `\lstinputlisting{script.py}` | Kaynak dosyasının tamamını bir liste (listeler) olarak yazar. |
| 'yapılmış' (ortam) | Pigmentlerle desteklenen vurgulanmış kod blokları; derleme zamanında (basılmış) '-shell-escape'e ihtiyaç duyar. |
| `\mintinline{python}|kod|` | Satır içi vurgulanmış kod (basılmış). |

## Projektör (slaytlar)

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| 'çerçeve' (ortam) | Bir Beamer slaydı: `\begin{frame}{Slayt başlığı} ... \end{frame}`. |
| `\çerçeve{...}` | Beamer'ın tek komutlu slayt formu; 'çerçeve' ortamı olağan yoldur. |
| `\frametitle{...}` | Slayt başlığını çerçevenin içinden ayarlar. |
| `\framesubtitle{...}` | Çerçeve başlığının altına daha küçük bir altyazı ayarlar. |
| `\başlıksayfası` | Beamer: Bir çerçevenin içinde, başlık meta verilerinizden başlık slaydını yazdırır. |
| `\tableofcontents[currentsection]' | Bulunduğunuz bölümü vurgulayan anahat slaytı. |
| `\duraklat` | Beamer: Bir sonraki slayt adımında çerçevenin geri kalanını ortaya çıkarır. |
| `\onslide<2->` | İçerik, belirli bir yer paylaşımı adımından itibaren görünür. |
| `\yalnızca<2>{...}` | İçerik yalnızca verilen adımlarda bulunur ve başka yerde yer kaplamaz. |
| `\ortaya çıkar<2->{...}` | İçerik, adımından önce görünmez ancak her zaman alanını saklı tutar. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Düzeni değiştirmeden verilen adımlarda içeriği gösterin veya gizleyin. |
| `\uyarı{...}` | Metni temanın uyarı renginde (genellikle kırmızı) vurgular. |
| 'blok' (ortam) | Temanın standart rengindeki başlıklı kutu. |
| 'alertblock' (ortam) | Uyarılar veya önemli noktalar için uyarı rengindeki başlıklı kutu. |
| 'örnek blok' (ortam) | Örnek renkte başlık kutusu, genellikle yeşildir. |
| `sütunlar` (ortam) ve `\column{0.5\textwidth}` | Bir slaytta yan yana yerleşim bölgeleri. |
| `\usetheme{Madrid}` | Beamer: Giriş bölümündeki sunum temasını seçer. |
| `\usecolortheme{denizatı}` | Yalnızca temanın renk paletini değiştirir. |
| `\usefonttheme{serif}` | Yalnızca temanın yazı tipi seçeneklerini değiştirir. |
| `\setbeamertemplate{gezinme sembolleri}{}` | Bir tema öğesini geçersiz kılar, burada gezinme simgeleri kaldırılır. |
|`\setbeamercolor{title}{fg=black}` | Bir tema rengini geçersiz kılar. |
| `\not{...}` | Bir çerçeveye iliştirilmiş konuşmacı notları, yalnızca not çıktısında gösterilir. |

## TikZ ve diyagramlar

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| 'tikzpicture' (ortam) | TikZ çizimleri için tuval; tüm '\draw' ve '\node' komutları bunun içine girer. |
| `\tikz` | Tek seferlik satır içi resim: `\tikz \draw (0,0) daire (2pt);`. |
| `\çiz (0,0) -- (1,1);' | Çizgiler ve şekiller çizen TikZ yol komutu; `[kalın, kırmızı, ->]` gibi seçenekler onu stillendirir. |
| `\doldur` | Bir şekli okşamak yerine dolduran TikZ yol komutu. |
| `\filldraw' | Bir şekli hem dolduran hem de ana hatlarını çizen TikZ yol komutu. |
| `\gölge` | Degradeyle dolduran TikZ yol komutu. |
| `\klip` | Daha sonraki tüm çizimleri iç kısmıyla sınırlayan TikZ yolu. |
| `\yol` | Çizim yapmadan koordinatları hesaplayan TikZ yolu, ör. düğümleri yerleştirmek için. |
| `\düğüm (0,0) {label};' | Metni veya şekilleri koordinatlara yerleştiren TikZ komutu. |
| `\koordinat (a)'nın (1,2);' | Daha sonraki yollarda yeniden kullanılmak üzere bir noktayı adlandırır. |
| `\foreach \i içinde {1,...,5}` | Çizim kodunu bir liste üzerinde tekrarlayan döngü (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | Yeniden kullanılabilir TikZ stillerini modern bir şekilde tanımlar. |
| `\tikzstyle` | Eski stil tanımı sözdizimi; kullanımdan kaldırıldı, '\tikzset' kullanın. |
| `\usetikzlibrary{konumlandırma}` | Giriş kısmına ekstra TikZ özellikleri yükler. |
| `\matris` (TikZ) | Bir tikz resmi içindeki düğümlerin ızgara hizalı düzenlemesi. |
| 'tikzcd' (ortam) | Değişmeli diyagramlar için ızgara; hücreler '&' (tikz-cd) ile bölünür. |
| `\ok[r, "f"]` | Tikz-cd değişmeli diyagramda hücreler arasına bir ok çizer. |

## Birimler (siunitx)

| Komut | Ne işe yarar |
| --- | --- |
| `\num{12345.678}` | Bir sayıyı uygun basamak gruplaması ve ondalık işaretleyicilerle biçimlendirir. |
| `\qty{9.8}{\metre\per\second\squared}` | Birimli sayı, doğru aralıklı (siunitx v3 adı). |
| `\birim{\kilo\gram}` | Tek başına birim (siunitx v3 adı). |
| `\SI{9.8}{\metre\per\second\squared}` | `\qty`nin v2 adı; hala gazetelerde yaygın olarak görülüyor. |
| `\si{\kilo\gram}` | `\unit`in v2 adı. |
| `\sisetup{...}` | Küresel Siunitx yapılandırması. |
| `\DeclareSIUnit{\parsec}{pc}` | Özel bir birimi (siunitx) tanımlar. |

## Sözlükler ve kısaltmalar

| Komut | Ne işe yarar |
| --- | --- |
| `\gls{svm}` | İlk kullanımda genişleterek (sözlükler) bir sözlük veya kısaltma girişi yazdırır. |
| `\Gls{svm}` | Cümle başlangıçları için büyük harfle yazılmış biçim (sözlükler). |
| `\glspl{svm}` | Girişin çoğul biçimi (sözlükler). |
| `\newglossarientry{tree}{name=tree, açıklama={...}}` | Bir sözlük terimini bildirir (sözlükler). |
| `\newacronym{svm}{SVM}{destek vektör makinesi}` | Kısa ve uzun formları (sözlükler) olan bir kısaltma bildirir. |
| `\acrshort{svm}`, `\acrlong{svm}` | İlk kullanımdan (sözlükler) bağımsız olarak kısa veya uzun biçimi zorlayın. |
| `\makeglossaries` | Sözlük/kısaltma işlemeyi (sözlükler) etkinleştiren giriş komutu. |
| `\baskı sözlüğü` | Yerleştirdiğiniz yere bir sözlük listesi (sözlükler) yazdırır. |
| `\sözlükleri yazdır` | Sözlük ve kısaltma listelerini yerleştirdiğiniz yere (sözlükler) yazdırır. |

## Algoritmalar ve sözde kod

Anahtar kelime komutları algpseudocode'dan (algorithmicx); 'algoritma' şamandırası onları sarar.

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| 'algoritma' (ortam) | Bir başlık ve sayı (algoritma) içeren sözde kod için kayan kapsayıcı. |
| 'algoritmik' (ortam) | Sözde kod gövdesinin kendisi, anahtar sözcük komutlarını (algpseudocode) tutar. |
| `\Durum` | Bir sözde kod satırı. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Koşullu blok anahtar kelimeler. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Anahtar kelimeleri bir aralık veya küme üzerinde döngüye alın. |
| `\While{...}`, `\EndWhile` | While döngüsü anahtar kelimeleri. |
| `\Function{Name}{args}`, `\EndFunction` | Fonksiyon tanımlama bloğu. |
| `\Procedure{Name}{args}`, `\EndProcedure` | Prosedür tanımlama bloğu. |
| `\Geri Dön` | Dönüş anahtar sözcüğü. |
| `\Yorum{...}` | Sahte kod satırında sağa hizalanmış yorum. |
| `\Gerektir`, `\Emin Olun` | Bir algoritmanın tepesindeki önkoşullar ve sonkoşullar satırları. |

## Dil, alıntılama ve editoryal paketler

| Komut | Ne işe yarar |
| --- | --- |
| `\selectlanguage{almanca}` | Etkin dili değiştirir: tireleme, altyazılar, tarihler (babel). |
| `\foreignlanguage{fransızca}{...}` | Başka bir dilin kurallarına (babel) göre kısa bir pasaj yazar. |
| `\alıntı{...}` | Doğru şekilde yuvalanan ve yerelleştirilen bağlama duyarlı tırnak işaretleri (csquote'lar). |
| `\todo{Bunu düzeltin}` | Yapılacak işleri işaretleyen kenar boşluğu notu (yapılacak notlar). |
| `\listoftodos` | Tüm yapılacak notlarının (yapılacak notlar) bir listesini yazdırır. |
| `\eksikşekil{...}` | Henüz yapmadığınız bir şekil için yer tutucu kutu (yapılacak notlar). |
| `\xspace` | Makronun sonuna, noktalama işaretleri (xspace) takip etmedikçe boşluk ekler. |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Mevcut bir makronun tanımını yerinde yamalar (etoolbox). |
| `\apptocmd`, `\pretocmd` | Mevcut bir makroya (etoolbox) kod ekleyin veya başına ekleyin. |
| `\newtoggle{taslak}`, `\toggletrue{taslak}`, `\iftoggle{taslak}{...}{...}` | Hafif boole bayrakları (etoolbox). |

## Düzen ve tipografi paketleri tek satırda

| Paket veya komut | Ne işe yarar |
| --- | --- |
| `\setstretch{1.25}` | Tam bir satır aralığı faktörünü (ayar alanı) ayarlar. |
| `\çift aralıklı` | Çift satır aralığına (ayar alanı) geçer. |
| `\bir yarım boşluk` | Bir buçuk satır aralığına (setspace) geçer. |
| `\tek aralık` | Tek satır aralığına (ayar alanı) geri döner. |
| 'aralık' (ortam) | İçeriği için özel bir satır aralığı faktörü ayarlar (ayar alanı). |
| `\titleformat{\section}{...}{...}{...}{...}` | Bölümleme başlığının nasıl görüneceğini yeniden tasarlar (başlık saniyesi). |
| `\titlespace{\section}{0pt}{12pt}{6pt}` | Bir başlığın etrafındaki boşluğu ayarlar (başlık saniyesi). |
| `\setlist[itemize]{noitemsep}` | Liste aralığını ve etiketleri genel olarak veya düzey (enumitem) başına yapılandırır. |
| yaban havucu (paket) | Belgeyi paragrafları bloklayacak şekilde değiştirir: aradaki boşluk, girinti yok. |
| 'mikrotip' (paket) | Gerekçeyi geliştiren ince çıkıntı ve genişleme; sadece yükle. |
| 'çoklu renkler' (ortam) | İki sütunlu sınıf seçeneği (çoklu sütun) olmayan dengeli çok sütunlu metin. |

## Kimya, fizik ve alan gösterimi

| Komut | Ne işe yarar |
| --- | --- |
| `\ce{H2O}` | Kimyasal bir formül veya reaksiyonu (mhchem) yazar. |
| `\chemfig{...}` | Kimyasal yapı diyagramını (chemfig) çizer. |
| `\braket{\phi|\psi}` | Otomatik boyutlandırılmış çubuklara (fren) sahip Dirac bra-ket gösterimi. |

## Yayımcı sınıfı komutları

| Komuta veya ortam | Ne işe yarar |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: IEEE konferans başlık alanında bir yazar adı bloğunu biçimlendirir. |
| `\IEEEauthorblockA{...}` | IEEEtran: IEEE konferans başlık alanında yazar bağlantı bloğunu biçimlendirir. |
| `\ccsdesc[500]{...}` | acmart: makalenin sınıflandırması için bir ACM CCS konseptini beyan eder. |
| 'CCSXML' (ortam) | acmart: ACM sınıflandırma aracından makine tarafından okunabilen ACM CCS kavramları XML'ini içerir. |
| `\Üniversite{...}` | Standart LaTeX'te değil, tez şablonlarında görülen sınıfa özgü meta veri komutu. |

## Genel olarak ortamlar

Ortam, "\begin{name}" ile açılan ve "\end{name}" ile kapatılan bir bölgedir; ikisi arasındaki her şey o ortamın davranışını alır. Hikayenin tamamı [komutlar ve ortamlar](/learn/commands-environments/) bölümünde yer almaktadır. Genel amaçlı olanlar:

| Çevre | Ne işe yarar |
| --- | --- |
| 'belge' | Her belgenin gövdesi `\begin{document}` ile `\end{document}` arasında bulunur. |
| 'soyut' | Kağıdın özetini sınıfın standart başlığı ve düzeniyle yazdırır. |
| `başlık sayfası` | El yapımı bir tam başlık sayfasını sarar; sayfa numarasızdır. |
| 'merkez' | İçeriğini yatay olarak ortalar. |
| 'sola yaslan' | İçeriğini sola, sağa düzensiz bir şekilde hizalar. |
| 'sağa doğru' | İçeriğini sağa, sola düzensiz bir şekilde hizalar. |
| 'öğeleri oluştur' | Madde işaretli liste; her giriş `\item` ile başlar. |
| 'numaralandır' | Numaralandırılmış liste; her giriş `\item` ile başlar. |
| 'açıklama' | Etiketli liste; girişler `\öğe[Etiket]` ile başlar. |
| `\öğe` | Öğelendirme, numaralandırma veya açıklama listelerinde bir girişi başlatır. |
| `alıntı` | Kısa alıntılar için girintili blok, paragraf girintisi yok. |
| `alıntı` | Daha uzun alıntılar için paragraf girintili girintili blok. |
| 'ayet' | Şiir için girintili blok; burada `\\` her dize satırını bitirir. |
| 'özensiz' | Rahat satır kesmeli paragraf dizgisi, çevre biçimi "\özensiz". |
| 'liste' | Öğelerin ve arkadaşların tanımlandığı genel liste oluşturucu. |
| 'üç liste' | Makro tanımlarının içinde kullanılan, etiket veya kenar boşluğu olmayan basit liste. |
| 'dosya içeriği' | Derleme zamanında gövdesini bir dosyaya yazar; .tex'in içine bir .bib göndermek için. |
| 'ekler' | '\ek sayfası' ve ek başına araçları (ek paketi) etkinleştirerek ek bölümlerini sarar. |

## Bundan sonra nereye gitmeli

Bu sayfa sözlüktür. Dersler gramerdir. Yapıştırmaya hazır tek sayfalık bir sayfalık bir sayfa için [kola sayfasını](/learn/cheatsheet/) açık tutun. "\command{...}" ve "\begin{...}" blokları arasındaki fark için [komutlar ve ortamlar](/learn/commands-environments/) bölümünü okuyun. Resmini çizebildiğiniz ancak adlandıramadığınız bir sembol için [matematik sembollerini](/learn/math-symbols-cheatsheet/) kullanın. Herhangi bir matematik modu komutunun neye benzediğini görmek için onu [canlı önizlemeye](/live/) yapıştırın ve işlenmesini izleyin.