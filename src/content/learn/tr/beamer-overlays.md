---

title: "Tıklandığında satırları ortaya çıkarın"
description: "Özellikleri bindirin, aşırıya kaçmadan yalnızca duraklatın."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Tıklandığında satırları ortaya çıkarın

Bir Beamer çerçevesi birden fazla fiziksel slayttan oluşabilir. Madde işaretlerini birer birer ortaya çıkardığınızda, Beamer aynı çerçeveden her biri biraz daha fazlasını gösteren birkaç PDF sayfası oluşturur. PDF görüntüleyicide ilerlemek bunların üzerinden geçer. Oluşturulan bu sayfalara kaplama adı verilir. Bunları kontrol etmeyi öğrenmek, statik bir desteyi tempolu bir konuşmaya dönüştüren şeydir.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Yer paylaşımı özellikleri

'\item'den sonraki köşeli ayraç gösterimi bir yer paylaşımlı belirtimdir. Öğenin çerçevenin hangi kaplamalarında görüneceğini belirtir. Sayı, bu çerçeve içindeki kaplama indeksidir ve kısa çizgi onu bir aralık haline getirir: '<2->', kaplama 2'den itibaren anlamına gelir, böylece öğe ikinci adımda görünür ve kalır. Çıplak bir `<2>` yalnızca kaplama 2 anlamına gelir, dolayısıyla öğe görünür ve sonra kaybolur. Ayrıca `<1,3>` gibi listeler de verebilirsiniz. Beamer, belirtilen en yüksek sayı kadar kaplama oluşturur, böylece yukarıdaki çerçeve üç PDF sayfası oluşturur.

Kaplama özellikleri birden fazla öğe üzerinde çalışır. `\textbf<2->{anahtar terim}`, kaplama 2'den itibaren metni kalın yapar ve `\only<2>{...}`, içeriğini yalnızca kaplama 2'ye dahil eder. `\only' diğer kaplamalardaki içeriği tamamen kaldırdığından, çevredeki düzen yeniden akıtılır, bu da onu aynı noktada bir şekli diğeriyle değiştirmek için bir araç haline getirir: iki "\only" bloğuna aynı konumu ve ardışık spesifikasyonları verin. Kuzeni `\uncover', içeriği gizlerken alanı ayırır, böylece hiçbir şey değişmez.

## Daha basit bir araç

`\pause` kareyi bu noktada böler. Ondan önceki her şey anında gösterilir, sonraki her şey bir sonraki adımı bekler ve tekrarlanan '\pause' komutları ardışık adımlar oluşturur. Rakamlara ve planlamaya ihtiyaç duymaz, dolayısıyla yukarıdan aşağıya düz bir görünüm için doğru varsayılandır. Açık spesifikasyonlara yalnızca ortaya çıkma sırası kaynak sırasından farklı olduğunda veya öğelerin görünüp kaybolması gerektiğinde ulaşın.

Bir listedeki her öğenin sırayla adım atması gerektiğinde yararlı bir kısayol, artan yer paylaşımı sayılarını otomatik olarak atayan `\begin{itemize}[<+->]`dır.

## Kısıtlama

Kaplamaların aşırı kullanımı kolaydır. Her slayttaki her merminin teker teker tıkladığı bir deste, sunum yapan kişiyi (sürekli tıklama) ve izleyiciyi (ileride okuma yok) yorar. Rezerv kademeli, ilerleme hızının bir türetme oluşturmak veya öncesi ve sonrasını karşılaştırmak gibi bir tartışma taşıdığı birkaç yer için ortaya çıkar. Her kaplama gerçek bir PDF sayfasıdır, dolayısıyla her kareyi son kaplamasına daraltan `\documentclass[handout]{beamer}` ile derlemediğiniz sürece dinleyici notu balonu kopyalar. Çerçeve temelleri [ilk Beamer desteğinde](/learn/beamer-basics/) ele alınmıştır.