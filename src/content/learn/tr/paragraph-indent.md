---

title: "Paragraflar arasında girinti veya boşluk"
description: "tek bir satır için parindent, yaban havucu, noindent."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Paragraflar arasında girinti veya boşluk

Tipografide bir paragrafın nerede bittiğini ve bir sonrakinin nerede başladığını göstermenin iki standart yolu vardır: her yeni paragrafın ilk satırını girintili yapın veya paragraflar arasında girintisiz dikey boşluk bırakın. Kitaplar ve dergiler neredeyse her zaman ilkini kullanır. Web sayfaları ve iş belgeleri ikincisini kullanır. LaTeX varsayılan olarak kitap kuralını benimser; bölüm başlığından sonraki ilk paragraf hariç her paragrafı paragraflar arasında fazladan boşluk bırakmadan girintiler. Diğer stili istiyorsanız iki uzunluğu değiştirirsiniz.

## Her şeyi kontrol eden iki uzunluk

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` ilk satır girintisinin genişliğidir. '\setlength' ile '0pt' olarak ayarlamak her yerde girintiyi kaldırır. '\parskip' paragraflar arasına eklenen dikey boşluktur, normalde sıfırdır (artı biraz uzatılır); bunu "0,8em" olarak ayarlamak, tam boş bir satırdan biraz daha az, görünür bir boşluk sağlar. 'Em' birimi yazı tipi boyutuyla ölçeklenir; bu, daha sonra [yazı tipi boyutunu](/learn/font-size/) değiştirirseniz aralığı orantılı tutar. Her iki satırı da giriş kısmına koyun ve belgenin tamamı blok stilini takip etsin.

Bu yola giderseniz, basit bir "\parskip" değişikliğinin aynı zamanda bölüm başlıkları, liste öğeleri ve içindekiler tablosu etrafındaki alanı da genişlettiğini unutmayın, çünkü bunlar da paragraflardan oluşturulmuştur. Kısa bir nottan daha uzun herhangi bir şey için, bunun yerine "parskip" paketini ("\usepackage{parskip}`") yüklemek, bu yan etkileri sizin için yamarken aynı stili uygular.

## Tek bir girintiyi bastırmak

Tek paragraf: `\noindent'i en başına, ilk kelimenin önüne koyun. Bu, yalnızca o paragrafın girintisini bastırır ve aşağıdaki metin yeni bir paragraf yerine aynı düşüncenin devamı olduğunda görüntülenen bir denklem, kod listesi veya tablodan sonra kullanışlıdır. LaTeX'in bir girintiyi atladığı (bir başlıktan sonraki ilk paragraf gibi) bir girintiyi zorlayan ters durum, manuel düzeltme yerine küçük "indentfirst" paketi tarafından ele alınır.

Hazır buradayken: LaTeX'te yeni bir paragraf, `\\` ile değil, kaynaktaki boş bir satırla oluşturulur. `\\` komutu aynı paragraf içindeki satır sonudur ve paragraf aralığını taklit etmek için bu komutun kullanılması yetersiz uyarılara ve eşit olmayan boşluklara neden olur. [Paragraflar ve yeni satırlar dersi](/learn/paragraphs-newlines/) bu ayrımı tam olarak kapsar.

## Bir stil seç ve onu tut

Girinti **veya** yaban havucu stilini seçin ve tutarlı kalın. Bu iki gelenek katmanlar değil alternatiflerdir: Aralarında büyük boşluklar olan girintili paragraflar taslak gibi görünür ve sıfır boşluklu sıfır girinti okuyucunun paragrafların nerede başladığını görememesine neden olur. Bir dergi ya da konferans için yazıyorsanız her iki uzunluğu da değiştirmeyin; sınıf dosyası zaten yayıncının seçimini uyguluyor ve geçersiz kılmanız, düzen düzenleyicinin geri döndürdüğü ilk şey olacak.