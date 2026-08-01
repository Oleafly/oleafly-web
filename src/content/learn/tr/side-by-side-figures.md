---

title: "Bir satırda iki panel"
description: "paket savaşı olmadan mini sayfalar yan yana."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Tek sıra halinde iki panel

Bazen her birinin kendi başlığı ve kendi şekil numarası olan iki resmin yan yana olmasını istersiniz. Bunun için özel bir pakete ihtiyacınız yok. Tek bir "şekil" ortamındaki düz "mini sayfa" kutuları işi yapar ve her iki görüntü de tek bir kayan yerde yaşadığı için LaTeX bunları hiçbir zaman farklı sayfalara ayıramaz.

## Desen

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

"Mini sayfa" minyatür sayfa gibi davranan bir kutudur: seçtiğiniz sabit bir genişliğe sahiptir ve içeriği bu genişliğin içinde sarılır ve yığılır. Burada her mini sayfa "0,48\textwidth" alır, bu da metin genişliğinin yüzde 48'i anlamına gelir. Bu kasıtlı olarak yüzde 4'ü sahipsiz bırakıyor ve iki kutu arasındaki "hfill", onu doldurmak için genişleyen, bir paneli sol kenar boşluğuna ve diğerini sağa doğru iten gerilebilir alandır. Her iki genişliği de "0,5\textwidth" olarak ayarlarsanız, bunların toplamı herhangi bir ayırmaya yer kalmadan tam olarak çizgi genişliği olur ve ikinci kutu bir sonraki satıra düşer; bu da yan yana düzenlerin gizemli bir şekilde dikey olarak yığılmasının en yaygın nedenidir.

Her mini sayfanın içindeki "genişlik=\satır genişliği", görüntüyü tüm sayfaya değil, çevreleyen kutunun genişliğine göre ölçeklendirir. Bunun yerine `\textwidth` kullanıldığında, her görselin tam metin bloğu kadar geniş olmasına ve taşmayı garanti etmesine neden olan sık karşılaşılan bir hata vardır.

Altyazıların nerede olduğuna dikkat edin: her mini sayfanın içinde. Bu, her panele kendi numarasıyla birlikte tam bir başlık verir, böylece bu şekil, örneğin Şekil 3 ve Şekil 4'ün tek sıra halinde oturmasını sağlar. Dış `[htbp]` yerleştirme seçenekleri, LaTeX'e kayan noktayı tercih sırasına göre buraya, sayfanın üstüne, altına veya kayan sayfaya yerleştirebileceğini söyler.

## Üst kısımları hizalama ve içeriği karıştırma

İki görüntünün yüksekliği farklıysa, mini sayfalar varsayılan olarak merkezlerine hizalandığından dikey hizalamaları hatalı görünebilir. Bunun yerine bunları en üste hizalamak için `\begin{minipage}[t]{0.48\textwidth}` yazın. Mini sayfalar aynı zamanda ne içerdikleriyle de ilgilenmezler; bu nedenle aynı düzen, bir tablonun yanına bir şekil veya açıklayıcı bir metin paragrafının yanına bir resim koyar; alt şekil stili paketler bunun için tasarlanmamıştır.

## Bunun yerine alt şekiller ne zaman kullanılmalı?

Bu desenin size veremeyeceği tek şey, tek bir paylaşılan başlık ve tek bir şekil numarası altında (a) ve (b) etiketli panellerdir. İki bağımsız şekil yerine "Şekil 5(a)" istediğiniz anda [alt şekillere](/learn/subfigures-abc/) geçin. Temel kural: mini sayfalar komşu olan şekiller içindir, alt şekiller ise parçaları olan tek bir şekil içindir.