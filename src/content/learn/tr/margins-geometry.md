---

title: "Tek pakette marjlar"
description: "sayfa boyutu, kenar boşlukları, ciltleme ofseti için geometri."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Tek pakette marjlar

LaTeX'in varsayılan marjları, özellikle A4 kağıtta çok büyük görünüyor. Bu tasarım gereğidir: Varsayılanlar yaklaşık 66 karakterlik rahat bir satır uzunluğunu hedefler; bu, okumak için harikadır ancak nadiren bir üniversite şablonunun, bir derginin veya kendi zevkinizin gerektirdiği şeydir. Yarım düzine düşük seviyeli uzunluğu elle ayarlamak yerine, sayfayı 'geometri' paketiyle hazırlar ve istediğiniz düzeni basit terimlerle anlatırsınız.

## Aslında onu kullanacağınız iki yol

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

İlk biçim hızlı olanıdır: 'margin=1in' tek bir seçenekte dört kenar boşluğunun tümünü bir inç olarak ayarlar ve geometri, metin genişliğini ve yüksekliğini eşleşecek şekilde yeniden hesaplar. Bu, standart "ABD tezi" görünümüdür ve taslaklar için makul bir varsayılandır.

İkinci form her şeyi açıklıyor. 'a4paper' fiziksel kağıt boyutunu belirtir (US Letter için 'letterpaper' kullanın). Bu olmadan geometri, belge sınıfının varsaydığı şeyi devralır ve bu, PDF görüntüleyicinizin veya yazıcınızın beklediğiyle eşleşmeyebilir. Daha sonra "üst", "alt", "sol" ve "sağ" seçenekleri her kenar boşluğunu bağımsız olarak ayarlar; böylece asimetrik düzenler de simetrik düzenler kadar kolaydır. Birimleri serbestçe karıştırabilirsiniz: "in", "cm", "mm" ve "pt" hepsi işe yarar.

Her şey giriş bölümünde, `\begin{belge}'den önce gerçekleşir. Geometri, seçeneklerini bir kez okur ve tüm sayfa düzenini bunlardan çıkarır; bu nedenle, manuel ayarlamaya göre hataya daha az eğilimlidir.

## Basılı kopyalar için ciltleme ofseti

Belge yazdırılıp ciltlenecekse, metnin sırtta kaybolmaması için iç kenar boşluğunun fazladan alana ihtiyacı vardır. Seçeneklere `bindingoffset=0,5cm` eklediğinizde geometri, metin bloğunu her sayfada dışa doğru kaydırır. 'İki taraflı' bir belgede, sol ve sağ sayfalar arasında geçiş doğru şekilde yapılır ve bu da sağa elle yapılması sıkıcıdır.

## Ne yapılmamalı

Nedenini bilmiyorsanız geometriyi manuel `\setlength{\textwidth}{...}` ile karıştırmaktan kaçının. LaTeX'in sayfa düzeni birbirine bağımlı uzunluklardan oluşan bir ağdır (`\textwidth`, `\oddsidemargin`, `\headheight` ve arkadaşlar) ve geometri bunların hepsini tek bir tutarlı sistem olarak yönetir. Geometriyi yükledikten hemen sonra bir uzunluğu değiştirmek genellikle diğerlerinin uyumunu bozar ve sonuçta sayfanın dışına taşan metin veya istediğinizden farklı kenar boşlukları elde edersiniz. Belge ortasında bir değişikliğe ihtiyacınız varsa geometri tam olarak bunun için `\newgeometry{...}` ve `\restoregeometry` sağlar.

Herhangi bir şeyi ayarlamadan önce bir uyarı: Bir dergi veya konferans için yazıyorsanız, sınıf dosyası zaten gerekli kenar boşluklarını kodlamaktadır ve üstüne geometri eklemek muhtemelen gönderim formatını ihlal edecektir. Tez, notlar veya özgeçmiş gibi düzeni kontrol ettiğiniz belgeler için kenar boşluğu ayarlamalarından tasarruf edin ve ilk olarak [document class](/learn/document-skeleton/)'ın size zaten ne verdiğini kontrol edin.