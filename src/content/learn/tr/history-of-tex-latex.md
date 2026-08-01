---

title: "TeX, LaTeX ve 45 yıllık muhteşem belgeler"
description: "1978'de sinirlenen bir bilgisayar bilimcinin dizgi sistemini nasıl kurduğu araştırması hâlâ devam ediyor."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX ve 45 yıllık harika belgeler

Makale yazmak için kullanacağınız her araç, bir adamın çirkin provalardan duyduğu hayal kırıklığının ürünüdür. Hikaye kısa ve araştırma yazımının neden bu şekilde çalıştığına dair çok şey açıklıyor.

## 1978: Knuth sinirleniyor

Stanford'lu bilgisayar bilimcisi Donald Knuth, *Bilgisayar Programlama Sanatı* adlı destansı kitap serisini yazıyordu. Yayıncı geleneksel metal dizgiden ilk dijital sistemlere geçtiğinde, yeni kanıtlar, özellikle de matematik berbat görünüyordu. Knuth'un tepkisi son derece orantısızdı: Kitapları durdurdu ve yıllarını kendi dizgi sistemi **TeX** ("teknoloji" olarak telaffuz edilir, X Yunanca bir chi'dir) oluşturmak için harcadı ve 1978'de piyasaya sürdü.

TeX, işaretleme komutlarıyla düz metin alan ve tipografi açısından mükemmel sayfalar üreten bir programdı: mükemmel matematik aralığı, zarif paragraf satır kırma, çalışmalar. Knuth sonunda çekirdeğini dondurdu ve bulunan her hata için bir ödül çeki teklif etti. Çok az kişi iddia edildi.

## 1984: Lamport onu kullanılabilir hale getiriyor

Raw TeX, sayfalar için montaj dili gibi güçlü ancak düşük seviyelidir. 1984'te Leslie Lamport (daha sonra dağıtılmış sistemlerde Turing Ödülü sahibi), üstte kullanışlı bir katman olan **LaTeX**'i piyasaya sürdü: şeyleri elle konumlandırmak yerine `\section{Giriş}` ve `\cite{knuth78}` yazarsınız ve numaralandırmayı, referansları ve düzeni sistemin yönetmesine izin verirsiniz. LaTeX, bugün neredeyse herkesin "TeX'te yazdığını" söylerken kastettiği şeydir. [İlk belgeniz](/learn/first-document/) bir LaTeX belgesidir.

## Neden kırk yıl hayatta kaldı?

Kelime işlemciler geldi ve gitti; LaTeX sıkıcı ve mükemmel nedenlerden dolayı kaldı:

- **Matematik.** Yine de hiçbir şey denklemleri bu kadar iyi dizemez. Bkz. [matematik modu](/learn/math-mode/).
- **Düz metin.** Bugün 1985 tarihli bir .tex dosyası açılıyor ve sürüm kontrolüyle temiz bir şekilde çalışıyor.
- **Otomasyon.** Numaralandırma, çapraz referanslar ve kaynakçalar yalnızca 300 sayfada çalışır.
- **Şablonlar.** Yayıncılar kendi house stillerini bir sınıf dosyası olarak kodlar, böylece her gönderim aynı çıkar. Bu nedenle [ACM, IEEE ve arkadaşlarının](/learn/acm-ieee-and-friends/) size .tex şablonları vermesi ve dergilerin hâlâ kendi düzenlerinde derleyebilecekleri .tex kaynaklarını istemelerinin nedeni budur.

## Motor ailesi tek nefeste

Orijinal TeX motoru modern halefleri ortaya çıkardı: **pdfTeX** doğrudan PDF çıktısı ekledi, **XeTeX** Unicode ve sistem yazı tiplerini ekledi ve **LuaTeX** motorun içine bir komut dosyası dili ekledi. Çoğunlukla şablonunuzun beklediği şeyi seçersiniz. Pratik farklılıklar [bu proje için hangi motor](/learn/engines-compared/) ile ilgilidir.

## 2023: Typst'e girin

**Typst**, modernliğin ilk ciddi rakibidir: daha temiz sözdizimi, anında derleme ve daha kolay hata mesajları ile sıfırdan oluşturulmuş yeni bir dizgi dili. Gerçekten hoş ve hızla büyüyor. Sınırları, LaTeX'in güçlü yönlerinin diğer yüzüdür: kırk yıllık paketler ve her şeyden önce yayıncıların kabulü. Mekanlar bugün .tex'i istiyor, bu nedenle LaTeX gönderim dili olmaya devam ederken Typst notlar, raporlar ve çıktısını kontrol ettiğiniz her şey için harikadır. Oleafly, LaTeX, Typst ve Markdown'u yan yana derler; böylece uygulamaları değiştirmeden her birini en iyi olduğu yerde kullanabilirsiniz.

## Paket servis

TeX motordur, LaTeX herkesin yazdığı dildir, Typst genç rakiptir ve eski muhafızların ısrar etmesinin nedenini günlüğe kaydeder. Bunların Overleaf, editörler ve referans yöneticileri arasında nereye uygun olacağı [o zaman ve şimdi araştırma yazma araç kutusunun](/learn/research-tools-landscape/) konusudur.