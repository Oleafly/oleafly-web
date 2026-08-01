---

title: "O paket yüklü değil"
description: "tlmgr, MiKTeX ve Tectonic veya Oleafly ile isteğe bağlı getirme."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Bu paket kurulu değil

Er ya da geç bir derleme `! gibi bir satırla durur. LaTeX Hatası: 'siunitx.sty' dosyası bulunamadı`. Mesaj tam olarak ne anlama geliyor: Belgeniz `\usepackage{siunitx}` aracılığıyla bir paket istedi ve derleyici, paketin `.sty` dosyasını makinenizde bulamadı. Belgenizde herhangi bir sorun yok. LaTeX dağıtımları varsayılan olarak her paketi göndermez ve düzeltme, çalıştırdığınız dağıtıma bağlıdır.

## TeX Canlı

Linux ve macOS'taki (MacTeX olarak) standart dağıtım olan TeX Live, 'tlmgr' adı verilen bir paket yöneticisi içerir. Eksik paketi bir terminalden yükleyin:

```
tlmgr install siunitx
```

Birçok gigabayt büyüklüğündeki TeX Live'ın tamamı kuruluysa, her şey zaten mevcuttur ve bu hatanın oluşmaması gerekir. Genellikle daha küçük 'temel' veya 'küçük' kurulum şemalarında görünür. 'Tlmgr' argümanının dosya adı değil paket adı olduğunu, dolayısıyla '.sty' uzantısı olmadığını unutmayın.

## MiKTeX

Windows'ta yaygın olan MiKTeX'in iki mekanizması vardır. Anında yükleme özelliği, derleme sırasında eksik dosyayı algılar ve sizi uyararak veya ayarlara bağlı olarak otomatik olarak ilerleyerek onu getirmeyi teklif eder. Alternatif olarak MiKTeX Konsolunu açın, Paketler sekmesine gidin, paketi arayın ve oraya yükleyin. Eğer anında kurulum bir derlemeyi askıda bırakıyor gibi görünüyorsa, genellikle başka bir pencerenin arkasına gizlenmiş bir onay iletişim kutusunu bekliyor demektir.

## Tektonik

Oleafly'nin paketlediği Tectonic motoru manuel adımı atlıyor: paketler derleme sırasında isteğe bağlı olarak indiriliyor ve motorun yerel önbelleğine yerleştiriliyor. 'siunitx'i kullanan ilk derleme onu getirir; daha sonra derler, önbelleği yeniden kullanır. Bağımlılıklar indirilirken bu ilk çalıştırma daha uzun sürebilir ve bir ağ bağlantısı gerektirir.

## Kurulum sırasında sorun çözülmüyor

Paket yöneticisi böyle bir paketin mevcut olmadığını bildirirse, ctan.org adresindeki merkezi LaTeX paket arşivi olan CTAN'daki paketin sayfasında yazımı kontrol edin. İnatçı vakaların çoğunun nedeni iki uyumsuzluktur. İlk olarak, bir dağıtım paketi birden fazla ".sty" dosyası içerebileceğinden, dosya ve paket farklı adlara sahip olabilir. Hata mesajından tam `.sty` dosya adının CTAN'da aranması bu sorunu çözer. İkincisi, hata bazen kendi projenizdeki bir dosyayı, örneğin bir şablonun eklemeyi unuttuğu bir sınıf dosyasını adlandırır ve hiçbir paket yöneticisi bunu sağlayamaz. Dosyanın şablonun geldiği yerden gelmesi gerekir.

Eski tavsiye üzerine son bir not: LaTeX ilk önce geçerli dizini aradığından, internetten proje klasörünüze tek bir `.sty' dosyasını indirmek işe yarar, ancak bu paketi rastgele bir sürümde dondurur ve güncellemelerden gizler. Paket yöneticisini tercih edin ve son teslim tarihlerine yakın acil durumlar için manuel kopyalama hilesini saklayın.