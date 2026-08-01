---

title: "İnsanlar neden XeLaTeX'e geçiyor?"
description: "Sistem yazı tipleri, karmaşık komut dosyaları, fontspec şablonları."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# İnsanlar neden XeLaTeX'e geçiyor?

LaTeX bir dildir, ancak birkaç motor onu derler ve yapabilecekleri konusunda farklılık gösterirler. Geleneksel motor pdfLaTeX'tir ve iki modern motor XeLaTeX ve LuaLaTeX'tir. İnsanların XeLaTeX'e geçmesinin en büyük nedeni yazı tipleridir: pdfLaTeX yalnızca TeX için özel olarak paketlenmiş yazı tiplerini kullanırken XeLaTeX, sisteminizde yüklü olan ve normal adıyla adreslenen herhangi bir OpenType veya TrueType yazı tipini yükler.

## Geçiş yapmanın üç nedeni

Birincisi sistem yazı tiplerine doğrudan erişimdir. 'fontspec' paketinde yazı tipi seçimi okunabilir bir satırdır ve istediğiniz yazı tipi için TeX'e özgü yazı tipi paketinin bulunmasına gerek yoktur. Hedef ister modern bir görünüm için `\setmainfont{Inter}` olsun, ister dergi gereksinimi için Times New Roman olsun, mekanizma aynıdır:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

'fontspec', XeLaTeX veya LuaLaTeX'i gerektirir; pdfLaTeX altında sadece hatalar var. Yazı tipleri, [projenin yanındaki yazı tipi dosyasında](/learn/install-custom-font/) gösterildiği gibi sistem yerine proje klasörü içinde de dolaşabilir.

İkincisi, yerel Unicode ve karmaşık komut dosyalarıdır. XeLaTeX, UTF-8 girişini doğrudan okur ve Arapça, Devanagari, Çince, Japonca ve Korece dahil olmak üzere pdfLaTeX'in yapamadığı yazma sistemlerini uygun şekillendirmeyle ve "polyglossia" paketi aracılığıyla dil başına doğru tireleme ve yönlendirmeyle yönetir. Belgenizde komut dosyaları karışıksa veya hatta alışılmadık aksanlarla bir isimden alıntı yapılıyorsa, bu tek başına motora karar verir.

Üçüncüsü ise sizin yerinize karar veren şablonlardır. Birçok modern CV, tez ve sunum şablonu ilk satırlarında 'fontspec' veya 'polyglossia'yı yükler ve böyle bir şablon yalnızca XeLaTeX veya LuaLaTeX'te derlenir. İndirilen bir şablon "fontspec" hatasıyla hemen başarısız olursa, çözümü şablonu düzenlemek değil, motoru değiştirmektir.

## Nelerden vazgeçiyorsun

Takaslar mütevazı ama gerçek. pdfLaTeX'e özgü birkaç paket, özellikle de XeLaTeX'in yalnızca kısmen desteklediği "microtype" yazı tipi genişletmesi geçerli değildir. Derlemeler ayrıca biraz daha yavaş çalışır. Bazı eski dergi hatları hala pdfLaTeX varsaymaktadır, bu nedenle XeLaTeX ile oluşturulmuş bir taslağı göndermeden önce mekanın talimatlarını kontrol edin. LuaLaTeX, yazı tipi ve Unicode yeteneklerini paylaşır ve Lua komut dosyası oluşturma özelliğini ekler. İkisi arasında şablonunuz veya mekanınızın adı hangisiyse onu seçin. 'fontspec' üzerine oluşturulan belgeler genellikle her ikisinde de derlenir.

## Pratikte seçim yapmak

Makul bir kural, bir mekanın şablonu onu hedeflediğinde pdfLaTeX'i kullanmak ve yazı tiplerini seçtiğiniz her şey için XeLaTeX'i kullanmaktır: tezler, özgeçmişler, slaytlar ve çok dilli belgeler. Oleafly'nin paket motoru XeTeX tabanlıdır (Tektonik), dolayısıyla 'fontspec' belgeleri herhangi bir motor konfigürasyonu olmadan burada derlenir. Yaygın hata, dönemleri karıştırmaktır; örneğin, 'fontspec'i 'newtxtext' gibi yalnızca pdfLaTeX'e özgü yazı tipi paketleriyle birlikte yüklemek. Belge başına bir yazı tipi sistemi seçtiğinizde motor sorusu çoğunlukla kendi kendine yanıtlanır.