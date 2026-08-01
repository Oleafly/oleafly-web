---

title: "Uyulmayacak denklemler"
description: "ölçü çok dar olduğunda çok satırlı ve bölünmüş."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Sığmayacak denklemler

Er ya da geç bir türetme, metin bloğundan daha geniş bir denklem üretir ve LaTeX, onu nerede kıracağını tahmin etmek yerine, bunun kenar boşluğuna girmesine izin verir. İki "amsmath" ortamı, kesmeyi kendiniz yerleştirmenize olanak tanır: tek bir uzun ifade için "çok satırlı" ve hizalı kalması gereken bir kesme için "bölme".

## çok satırlı

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

'çoklu çizgi' doğal hizalama noktası olmayan uzun bir formüle uygundur. `\\` ile kesmeyi seçersiniz ve düzeni ortam yönetir: ilk satır sola yaslanır, son satır sağa yaslanır ve ortadaki çizgiler ortalanır. İfadenin tamamı, son satıra yerleştirilen bir denklem numarası alır. Kural ikili operatörden önce bozulmaktır, dolayısıyla '+' devam çizgisini açar ve okuyucu bir bakışta ifadenin devam ettiğini görür.

## bölmek

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

'split' de tek bir sayı üretir, ancak satırlarını 'align'ın yaptığı gibi hizalar ve '&' hizalama noktasını işaretler. Bağımsız bir ortam değildir; sayıyı sağlayan 'denklem'in veya başka bir görüntüleme ortamının içinde yaşar. Burada `&` ilk satırdaki eşittir işaretinin önünde yer alır ve devamı `&\quad` ile başlar, boş bir hizalama noktası ve bunu takip eden bir dörtlü boşluk vardır, dolayısıyla ikinci satır eşittir işaretinin hemen ötesine girintilidir. Bu girinti okuyucuya bunun yeni bir denklem değil, hâlâ sağ taraf olduğunu anlatır.

## Aralarında seçim yapma

Denklem, hizalanmaya değer bir yapısı olmayan uzun bir toplam olduğunda 'çoklu çizgi'yi kullanın. Devamın altında yer alması gereken bir eşittir işareti olduğunda 'böl'ü kullanın. Gerçekten ayrı birkaç denkleminiz varsa ikisi de doğru değildir; bu, [hizalanan çok satırlı denklemler](/learn/align-equations/) kapsamında ele alınan bir "hizalama" işidir.

Her ikisine de ulaşmadan önce matematiği yeniden yazmayı düşünün. Önceki cümlede bir alt ifadeyi adlandırmak, çarpanlara ayırmak veya iki denkleme bölmek genellikle genişliği kontrol altına alır ve okumayı da daha iyi hale getirir. Türü küçültmek yerine bunu tercih edin. Sığacak şekilde sıkıştırılmış bir ekran neredeyse her zaman temiz bir kırılmadan daha kötü okur.

Bilinmesi gereken bir hata: Kendi başına kullanılan 'split', bir 'denklem' olmadan, "Paket amsmath Hatası" ile durur. Önce sarın, sonra derleyin. Her iki ortamda da [canlı oyun alanında](/live/) hızlı bir şekilde deneme yapılabilir.