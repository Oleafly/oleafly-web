---

title: "TOC, şekil listeleri, tablo listeleri"
description: "içindekiler tablosu ve ikinci geçişin neden önemli olduğu."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, şekil listeleri, tablo listeleri

LaTeX'teki içindekiler tablosu sizin oluşturduğunuz veya sürdürdüğünüz bir şey değildir. Tek bir komutu istediğiniz yere bırakırsınız ve LaTeX, daha önce yazdığınız başlıklardaki girişleri bir araya getirir. Aynı şey, başlıklar yerine alt yazıları toplayan şekil listesi ve tablo listesi için de geçerlidir. Bu, yapıyı bildirmenin doğrudan işe yaradığı yerlerden biridir: bir bölümü yeniden adlandırın veya bir şekli hareket ettirin ve ön kısım kendi kendine düzelsin.

## Üç komut

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` içindekiler tablosunu göründüğü yere, genellikle başlık sayfası veya özetin hemen sonrasına yazdırır. Numaralandırılmış her "\bölüm", "\bölüm" ve "\alt bölüm", [başlıklar dersinde](/learn/sections/) açıklanan "derinlik" sayacı tarafından belirlenen derinliğe kadar numarası, başlığı ve sayfasıyla birlikte gösterilir. `\listoffigures` ve `\listoftables`, metni her bir `\caption{...}`dan çekerek şekil ve tablo başlıkları için aynısını yapar. Makalelerde bunlar olağandışıdır, ancak tezler genellikle her ikisini de gerektirir ve TOC'den sonra kendi sayfalarına yerleştirilmelidir.

## İkinci geçiş neden önemlidir?

Yapısal değişikliklerden sonra **iki kez** derleyin. Bu batıl inanç değil. Mekanizma bu şekilde çalışıyor. Derleme sırasında LaTeX 2. sayfada 47. sayfada ne olacağını bilemez, bu nedenle her başlığı ve son sayfa numarasını yardımcı bir dosyaya (`.toc`, `.lof`, `.lot`) yazar. `\tableofcontents` önceki çalıştırmadan kalan dosyayı okur. Yeni bir projede bu dosya henüz mevcut olmadığından ilk derleme boş bir TOC üretir. Bölümleri ekledikten veya taşıdıktan sonra, içindekiler listesi bir sonraki çalıştırmaya kadar eski başlıkları veya yanlış sayfa numaralarını gösterir. İkinci derleme yeni yazılmış dosyayı okur ve her şey sıralanır. Latexmk veya eşdeğer bir paketleyiciyi çalıştıran editörler, tekrar çalıştırmaları sizin için halleder; bu yüzden hiç fark etmemiş olabilirsiniz. İçindekiler Tablonuz yanlış görünüyorsa başka herhangi bir şeyin hatalarını ayıklamadan önce bir kez daha derleyin.

## Yıldızlı bölümler ve İçindekiler

Yıldızlı bölümlerin İçindekiler Tablosunda görünmesi gerekiyorsa `\addcontentsline{toc}{section}{Title}` olması gerekir. `\section*{Teşekkürler}` gibi yıldızlı bir başlık kasıtlı olarak hem numaralandırmayı hem de içindekiler dosyasını atlar; dolayısıyla listelenmesini istiyorsanız girişi kendiniz eklersiniz. Komutun üç argümanı, yazılacak dosya ("toc"), giriş düzeyi ("bölüm") ve görüntülenecek metindir. Kaydedilen sayfa numarasının doğru olması için satırı yıldızlı başlığın hemen sonrasına koyun.

Oluşturulmaya değer bir alışkanlık: Bir PDF'yi paylaşmadan önce, soru işaretleri, eksik girişler veya son bölümünüzden önce sona eren son giriş gibi eski bir yapının belirleyici işaretlerini görmek için İçindekiler Tablosuna bakın. Neredeyse her zaman bir derlemeyle daha iyileştirilir. Onu kendiniz yakalamak, bir incelemecinin onu yakalamasından daha ucuzdur. Aynı yardımcı dosya dansı, [çapraz referanslarda](/learn/cross-references/) ele alınan `\ref' ve arkadaşlara güç verir.