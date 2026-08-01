---

title: "Tez biçimlendirmesi ve kağıt biçimlendirmesi"
description: "Üniversite dersleri, ön konu, bölümler, cilt kenar boşlukları ve kağıt malzemenin yeniden kullanılması."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Tez biçimlendirmesi ve kağıt biçimlendirmesi

Bir makale bir yayıncı için biçimlendirilmiştir. Bir tez, bir yüksek lisans okulu için biçimlendirilmiştir; çok farklı kurallara sahip, çok farklı bir canavardır. Yalnızca yazılı makaleleriniz varsa tez şablonu sizi belirli şekillerde şaşırtacaktır.

## Kuralları kim belirliyor

Bildiriler: mekan size bir ders verir ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) ve dünya çapındaki herkes aynı dersi kullanır. Tezler: Üniversiteniz kendi sınıfını veya bir sayfa tipografik kuralları (kenar boşlukları, satır aralığı, başlık sayfası ifadeleri) zorunlu kılıyor ve iki üniversite aynı fikirde değil. Resmi dersi önce bölümünüzden veya yüksek lisans sitenizden alın. Eskiyse ve derlenmeyi reddediyorsa, bu [kendi dersine](/learn/fix-broken-template/) sahip olacak kadar yaygındır.

## Yapısal farklılıklar

| Görünüş | Kağıt | Tez |
|---|---|---|
| Üst düzey birim | `\bölüm` | `\bölüm` |
| Sınıf tabanı | mekan sınıfı | 'kitap'/'rapor' türevi |
| Ön madde | başlık + özet | başlık sayfası, beyan, özet, içindekiler listesi, şekil ve tablo listeleri |
| Uzunluk | 8 ila 30 sayfa | 80 ila 300 sayfa |
| Düzen | genellikle iki sütun | tek sütun, geniş aralık |
| Taraflar | tek taraflı PDF | genellikle baskı için iki taraflı |

Bölümler her şeyi değiştirir: numaralandırma '3.2' olur, şekiller 'Şekil 3.1' olur ve her bölüm genellikle yeni (bazen sağdaki) sayfada açılır.

## Ön mesele savaşın yarısıdır

Tezin ön konu sırası tipik olarak şu şekilde yürütülür: başlık sayfası, özgünlük beyanı, özet, teşekkür, içindekiler tablosu, şekiller listesi, tablolar listesi ve ardından 1. bölüm. Çoğu otomatiktir:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

Roma-o zaman-arapça sayfa numaralandırma dansı herkesi bir kez şaşırtıyor, [ön konu ve sayfa numaraları](/learn/front-matter-page-numbers/) bunu düzgün bir şekilde kapsıyor.

## İki taraflı yazdırma ve ciltleme kenar boşlukları

Basılı tezler genellikle iki taraflıdır ("iki taraflı" sınıf seçeneği), bu da kenar boşluklarını asimetrik hale getirir: iç kenar boşluğu ciltlemeyi sürdürmek için daha geniştir. Üniversitenizin kuralları "sol kenar boşluğu 35 mm, diğerleri 25 mm" gibi bir şey söyleyecektir; bu, iki taraflı bir belgede sol değil *iç* anlamına gelir. Bununla manuel '\hspace' ile mücadele etmeyin, sınıf seçeneği ve 'geometri' ayarları bunu halleder:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

'Açık sağ', ciltli kopyalar için standart olan bölümleri sağ taraftaki sayfalara zorlar.

## Makalelerinizi bölümler olarak yeniden kullanma

Tezlerin çoğu yayınlanmış makaleleri kapsar ve çoğu üniversite buna açıkça izin verir. Mekanizma: Her bir makalenin giriş kısmını çıkarın, gerekiyorsa 'bölümünün' rütbesini düşürün, bölümler arasındaki notasyonu ve makroları birleştirin ve bibliyografyaları tek bir yerde birleştirin. Her bölümün kendi dosyasında tutulması bunu yönetilebilir hale getirir. [Bölümleri dosyalara bölmek](/learn/split-chapter-files/), 200 sayfalık bir yapıyı aklı başında tutan `\input`/`\include` kurulumunu gösterir.

Dürüst bir uyarı: üniversite tez dersleri paket ağırlıklı olma eğilimindedir, bu nedenle yeni bir makinedeki ilk derleme, başarılı olmadan önce bir grup paketi aşağı çekebilir. Bir kez bitmesine izin verin, sonraki derlemeler hızlı olur.