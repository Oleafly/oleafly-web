---

title: "Bir kez icat ettiğiniz operatörler"
description: "Argmin, argmax ve benzer adlar için DeclareMathOperator."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Bir kez icat ettiğiniz operatörler

LaTeX, etraflarında doğru boşluk bırakılarak dik yazıyla yazdırılan "\sin", "\log" ve "\max" gibi adlandırılmış operatörlerle birlikte gelir. Optimizasyon makaleleri bunları sürekli kullansa da "\argmin" veya "\argmax" ile birlikte gönderilmez. Matematik modunda 'argmin'i düz harfler olarak yazarsanız, LaTeX bunu altı değişkenin ürünü olarak ele alır: harfler italik, birbirine sıkıştırılmış ve operatör aralığı olmadan çıkar. Giriş bölümünde operatörü kendiniz bildirin.

## Operatörün bildirilmesi

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

İşte her parçanın yaptığı şey. "\DeclareMathOperator", "amsmath"tan gelir ve argümanı operatör metni olarak dizilmiş yeni bir komut oluşturur: LaTeX'in "\max" ve "\lim" için zaten uyguladığı aralık kurallarıyla dik latin harfler. İlk argüman yazacağınız komut adı, ikincisi ise gerçekte yazdırılan metindir. 'arg\,min' içindeki '\,', iki kelime arasına ince bir boşluk ekler; bu, onları birlikte kullanmaktan daha iyi okunur.

`\DeclareMathOperator`dan sonraki yıldız önemlidir. Yıldızlı bildirim, operatörün "\lim" gibi davranmasına neden olur: ekran matematiğinde, "_" ile eklediğiniz her şey, operatörün sağ alt kısmına doğru gitmek yerine doğrudan altında yer alır. Optimize edilen değişkenin aşağıda görünmesi gereken `\argmin_\theta` için tam olarak istediğiniz şey budur. Yıldız olmadan, alt simge yanda kalır; bu, "\log_2" gibi operatörlerin kuralıdır. Satır içi matematikte, satır yüksekliğinin uzamasını önlemek için alt simge her iki tarafta da kalır.

## Deseni yeniden kullanma

Aynı teknik, alanınızın kullandığı ve LaTeX'in bilmediği tüm operatörleri kapsar. Birkaç yaygın olanı:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

`\tr`, `\rank` ve `\diag`ın yıldız işaretinin kaldırıldığına dikkat edin çünkü alt indisleri varsa yan tarafa aittir. Yalnızca "\esssup" gibi limit tarzı operatörler yıldızı alır.

Satır içi `\mathrm{argmin}' yazmak yerine giriş bölümünde operatörleri belirtmek iki kat sonuç verir. Gösterim tüm belge boyunca tutarlı kalır ve bir günlük farklı bir görüntü oluşturma isterse, her denklemde gezinmek yerine bir satırı değiştirirsiniz. Yıldızlı alt simge yerleşiminin nasıl davrandığını görmek için [canlı oyun alanında](/live/) bildirimi ve görüntüleme satırını birlikte deneyin.

Yaygın bir hata: adı '\max' veya '\deg' gibi mevcut bir komutla çakışan bir operatörün bildirilmesi. LaTeX "zaten tanımlanmış" bir hatayla duracaktır. Yeni bir ad seçin veya yalnızca orijinali gerçekten değiştirmeyi düşünüyorsanız "\renewcommand" komutunu kullanın.