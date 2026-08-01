---

title: "Neden birden fazla derleme yapıyorsunuz?"
description: "Aux dosyaları, bibliyografya geçişleri ve referanslar neden yazdırılıyor? ilk çalıştırmada."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Neden birden fazla derleme yapıyorsunuz?

Er ya da geç bir belge derleyecek, PDF'yi açacak ve şekil numarasının ya da alıntının olması gereken yerde “???” bulacaksınız. Hiçbir şey kırık değil. Tek bir derleme, dosyanız üzerinden yapılan bir geçiştir ve bazı bilgiler gerçekten tek geçişte bilinemez.

Minyatürdeki sorun buradadır. 2. sayfada "bkz. Şekil \ref{fig:sonuçlar}" yazarsınız, ancak bu şekil 7. sayfaya çıkar. Motor 2. sayfayı dizdiğinde henüz 7. sayfaya ulaşmamıştır, dolayısıyla şeklin hangi sayıyı alacağına dair hiçbir fikri yoktur. Aynı durum, birinci sayfa tamamlanmadan önce her bölümün sayfa numarasına ihtiyaç duyan içindekiler tablosu için de geçerlidir.

## Motor sorunu nasıl çözüyor?

LaTeX motoru ".tex" dosyanızı okur, her makroyu çözer ve bir PDF yazar. PDF'nin yanı sıra küçük yardımcı dosyalar da yazar: etiketler ve alıntılar için `.aux`, içindekiler tablosu için `.toc`, biçimlendirilmiş kaynakça için `.bbl`. Bu dosyalar, motorun gelecekteki hali için bıraktığı notlardır.

1. İlk geçişte, motor metninizi dizer ve karşılaştığı her `\label` ve `\cite`ı `.aux` dosyasına yazar ve henüz bilmediği bir sayıya ihtiyaç duyduğu her yere `??` yazdırır.
2. Herhangi bir şeyden alıntı yaparsanız, bir kaynakça aracı (bibtex veya biber) `.aux` dosyasını okur, `.bib` veritabanınızdaki her alıntıyı arar ve biçimlendirilmiş referans listesini bir `.bbl` dosyasına yazar.
3. İkinci ve bazen üçüncü geçişte, motor bu yardımcı dosyaları tekrar okur, böylece çapraz referanslar, içindekiler listesi girişleri ve alıntı etiketleri sonunda gerçek sayılara çözümlenir.

Modern kurulumlar bu geçişleri sizin için otomatik olarak çalıştırır; dolayısıyla pratikte komutları nadiren kendiniz yazarsınız. Ancak döngüyü bilmek, belirtiyi açıklıyor: Bir etiket veya alıntı ekledikten sonra yeni bir `??`, yardımcı dosyaların henüz yakalanmadığı anlamına gelir ve bir derleme daha bunu düzeltir.

## Her biri bir satırda motorlar

Birkaç program "motor" rolünü oynayabilir. pdfLaTeX, en geniş günlük desteğine sahip klasik seçimdir. XeLaTeX tam Unicode ekler ve sisteminizde yüklü olan yazı tiplerini kullanmanızı sağlar. LuaLaTeX ayrıca Unicode konuşur ve gelişmiş paketler için bir kodlama dili içerir. Tectonic, paketleri ilk ihtiyaç duyduğunuzda talep üzerine indiren modern bir motordur. Oleafly bunu bir araya getirerek yeni bir projenin önce bir TeX dağıtımı kurmadan derlenmesini sağlar.

Çoğu belge için farklılıkların pek önemi yoktur; şablonunuzun veya mekanınızın beklediğini seçin ve devam edin. Kasıtlı olarak seçim yapmanız gerektiğinde [karşılaştırılan motorlar](/learn/engines-compared/) konusuna bakın.

## Bir şey gerçekten başarısız olduğunda

Başarısız bir derleme uzun bir günlüğün dökümünü yapar ve doğal içgüdü onu aşağıdan yukarıya doğru okumaktır. Buna diren. Günlükteki ilk hatayı okuyun ve yalnızca onu düzeltin; daha sonraki hatalar genellikle ilkinin neden olduğu basamaklı gürültüdür. Eğer referanslar art arda iki başarılı derlemeden sonra hala `??` yazdırıyorsa, bunun genel suçlusu, eksik bir geçişten ziyade `\label` veya `\ref` adında bir yazım hatasıdır.