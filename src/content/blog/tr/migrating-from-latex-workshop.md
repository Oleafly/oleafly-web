---

title: "LaTeX Workshop'un Ötesinde: makinenizdeki bir araştırma editörü"
description: "Proje çapında zeka, SyncTeX, çevrimdışı redaksiyon, paket derleyiciler, gerçek Git ve alıntılar içeren, amaca yönelik oluşturulmuş bir araştırma editörü. VS Code + LaTeX Workshop hâlâ tariflere, uzaktan kumandaya ve uzantı pazarına sahiptir."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

VS Code'daki [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) mükemmel. Ücretsiz, MIT, özenle korunuyor. Haftanız serbest biçimli derleme tarifleri, texdoc, Docker/WSL/remote, Live Share veya tam uzantılı pazar yeri ile geçiyorsa bu yığını koruyun. Bu yaşam için inşa edilmiştir.

Bu gönderi, belge öncelikli bir uygulama istediğiniz durumlar içindir: çok dosyalı belgeler, derleyiciler, PDF, Git, alıntılar, şekiller ve redaksiyon zaten birbirine bağlanmıştır. Ücretsiz ve açık kaynak (AGPL). LaTeX, Typst, Markdown. Düz klasörler. Hesap yok.

Özellik haritası ve kısayollar: [LaTeX Workshop'tan geliyor](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## Editör

LaTeX, Typst, Markdown ve BibTeX genelinde proje çapında bir dizine sahip CodeMirror 6.

Aslında her gün ne elde edersiniz:

- Tanıma gidin, referansları bulun, etiketleri ve makroları yeniden adlandırın (çatışma uyarıları)
- Bozuk referanslar, hatalı alıntılar, eksik içerikler (`\cref`, `\eqref`, aralık referansları, …) için canlı kontroller
- Yerel + proje yapısı görünümleri; filtrele ve atla
- Projenizin tanımladığı anahtarlar, yollar ve makrolar için tamamlamalar (`\yenikomut`, xparse bağımsız değişken şekilleri)
- `.tex`, `.ltx`, `.sty`, `.cls` desteği; argüman parçacıkları; ortam kontrolleri
- LaTeX için TexLab (katılım kurulumu); Typst için Tinymist gemileri
- Birleşik teşhis: sözdizimi, derleme, dil hizmeti, referanslar, alıntılar, yazım, dil bilgisi
- Canlı KaTeX matematik önizlemeleri; kaynak düzenlenebilir kalır
- Harper + Hunspell yalnızca düzyazıda çevrimdışı (komutlar ve matematik maskeli)
- Ortak yapılar için görsel mod; Vim; eğik çizgi komutları; çoklu dosya sekmeleri
- Sırada büyük bir derlemeden paket bilinçli komut tamamlama yer alıyor (LaTeX Workshop'un atıfla birlikte sunulan MIT verileri)

PDF çalışma alanı: sürekli kaydırma, yayılma, arama, taslak, ayrılabilir pencere. Bölüm dosyaları arasında çift yönlü SyncTeX. Yeniden oluşturma işlemi beklenirken eşleme hala çalışıyor. Son iyi PDF kalır. Derlenmiş kaynak kümesini geri aldığınızda önizleme, tam yeniden derleme olmadan güncel hale gelebilir.

Kitap ölçeğinde CI: ~6.200 satırlık taslak, çok aileli matematik, bölümler, alıntılar, düzeltmeler, kaydırma/yazma/yapıştırma/geri alma/tamamlama/yeniden derleme/SyncTeX'te performans bütçeleri.

LaTeX Workshop, genel bir IDE'nin güçlü bir uzantısıdır. Oleafly bu belge döngüsünü önceden monte edilmiş olarak gönderiyor, bu nedenle her dönem ayarlardan ve pazar seçimlerinden aynı yığını kablolamanız gerekmiyor.

## Uygulamadaki derleyiciler

Tectonic (LaTeX) ve Typst uygulamayla birlikte gelir. İhtiyacınız olduğunda yönetilen Pandoc aracılığıyla işaretleme. İlk önce önbellek paketlerini derleyin; bundan sonra önbelleğe alınan yapılar çevrimdışı çalışır. Çevrimdışı mod, derleyiciyi önbelleğe kilitleyebilir.

Otomatik derleme (geri çevrilebilir, iptal edilebilir, en son kazançlar). 'Cmd/Ctrl-Enter' yeniden derlenir. Durdur düğmesi. Hatta insanlaştırılmış hata kartları. Daha yeni bir derleme çalışırken son iyi PDF.

Tarifler, latexmk zincirleri, kabuktan kaçış ve özel `.latexmkrc`, LaTeX Workshop'un kaptan köşkünde kalır. Çoğu makale ve tez yalnızca güvenilir, denetlenen bir motora ihtiyaç duyar.

Şablonlar: 23 adet başlangıç ​​paketi (IEEE, ACM, Elsevier, Beamer, tez, özgeçmiş, Typst boşlukları,…) artı indirilebilir paketlerde 99 adet. Herhangi bir projeyi şablon olarak kaydedin. Bir model kurulduğunda isteğe bağlı AI şablonu oluşturma.

## Kütüphane, Git, araştırma araçları

Kitap olarak projeler: kapak rengi, motor rozeti, çatal kökeni, son PDF sayfasının fareyle üzerine gelindiğinde önizlemesi, yer imleri, her belgede `/docs' araması. Fork, riskli bir yeniden yazma işlemi için tam Git geçmişini gönderim kopyasının yanında tutar.

İlk günden itibaren gerçek Git. Aşamalandırma, yan yana farklar (çalışma ağacı düzenlenebilir), atma, geri yükleme. Başarılı derlemeler ve boşta yapılan düzenlemelerden sonra otomatik kontrol noktaları; Yapay zeka, ilk yazma işleminden önce kontrol noktasını çalıştırır. GitHub isteğe bağlıdır (PAT veya cihaz akışı OAuth). Terminal "git log" uygulamayla eşleşiyor.

DOI / arXiv / title → dedupe → `.bib` → `\cite` komutunu yapıştırın. BibTeX, RIS, EndNote, Zotero RDF'yi toplu içe aktarın. arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex'te Atıf Arama. Düzenlenebilir TikZ'ye Diyagram Oluşturucu. Doğrulayıcı, tablolar, denklemler, laboratuvar araması, son tarihler, PDF'den LaTeX'e, görüntü modeliyle görüntüden LaTeX'e.

## İsteğe Bağlı Yapay Zeka

Siz yapılandırana kadar kapalı. OpenAI, Antropik, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Anahtarlar diskte şifrelenmiştir. İstekler seçtiğiniz sağlayıcıya gider.

Asistan günlükleri düzenler, derler, okur, PDF metnini çıkarır, literatürde arama yapar, planları tutar. Yazmalar onay farklarıdır. Silme işlemlerinin ayrı bir onaya ihtiyacı vardır. Bir seçimde satır içi Ask-AI. Claude Code, Cursor ve arkadaşları için Loopback MCP. Yapay zeka kapalıyken editör, derleme, Git ve alıntılar çalışmaya devam eder.

## Ön kontrol, dışa aktarma, gizlilik

Ön kontrol: yapı, tanımsız referanslar, yinelenen etiketler, ayrıştırıcı tarzı çıkarma önizlemesi, ekran okuyucu odaklı bulgular. Her risk bayrağı, kara kutu puanına güvenmek yerine kendinizin kontrol edebileceğiniz yeterli bağlamla birlikte gelir.

Dışa aktar: Her zaman PDF; Pandoc mevcut olduğunda DOCX/HTML/Markdown; Desteler için PowerPoint; Kitaplar için EPUB; aktarım için kaynak ZIP.

Oleafly hesabı yok. Ürün telemetrisi yok. Kilitlenme raporları, incelediğiniz önceden doldurulmuş bir GitHub sorununu açar. Paketler, şablonlar, barındırılan yapay zeka, alıntılar, güncellemeler, GitHub için ağ. Düzenleme, önbelleğe alınmış derleme, dilbilgisi, yazım denetimi ve yerel Git çevrimdışı çalışır.

## LaTeX Workshop hala uygun olduğunda

- Serbest biçimli tarifler, latexmk, kabuktan kaçış, `.latexmkrc`
- editördeki texdoc
- Docker, WSL, uzaktan geliştirme
- Canlı Paylaşım ve canlı çok kullanıcılı düzenleme
- Belge dışı çalışmalar için VS Code pazarında yaşamak

Oleafly halka açık betadır. Ağır yayıncı sınıfı dosyaları hâlâ Tektonik'i tetikleyebilir; onları rapor edin.

## Deneyin

1. Şu adresten indirin:
   [yayınlar sayfası](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS imzalı/noter tasdikli; Windows SmartScreen'i bir kez kullanabilir).
2. `.tex`, `.bib` ve şekillerinizi içe aktarın (veya bir şablondan başlayın).
3. Bir kez derleyin, ardından bir gün boyunca gerçek bir kağıda yazın.

VS Code'u kurulu tutun. Her iki uygulamada da aynı dosyalar çalışır. Oleafly'de gerçek bir kağıt üzerinde bir gün daha iyi geçiyorsa, daha fazla projeyi aktarın; Belirli bir ağaç için tarifler ve uzaktan kumanda hala kazanıyorsa o ağacı Atölye'de bırakın.