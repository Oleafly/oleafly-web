---

title: "Madde işaretleri, sayılar ve tanım listeleri"
description: "maddeleştirme, numaralandırma, açıklama, iç içe yerleştirme ve özel öğe etiketleri."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Madde işaretleri, sayılar ve tanım listeleri

LaTeX'teki listeler ortamlardır: birini "\begin{...}" ile açarsınız, "\end{...}" ile kapatırsınız ve her girişi "\item" ile işaretlersiniz. LaTeX daha sonra numaralandırmayı, madde işaretlerini, girintiyi ve aralığı sizin için yönetir. Önemli olan bu son kısım. Hiçbir şeyi elle yeniden numaralandırmazsınız ve numaralandırılmış bir listenin üçüncü girişini silerseniz, dörtten ona kadar olan girişler sessizce üçten dokuza kadar olur.

## Üç liste ortamı

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

'itemize' sırasız bir madde işareti listesi oluşturur ve varsayımların listesi gibi girdilerin sırası olmadığında doğru seçimdir. 'numaralandır' her girişi otomatik olarak numaralandırır; bu, sırayla gerçekleşen adımlar veya tekrar başvurmayı planladığınız öğeler için istediğiniz şeydir. Hatta bir numaralandırmada `\öğe`den sonra `\etiket` koyabilir ve daha sonra tıpkı bir bölümde yaptığınız gibi bu numaraya `\ref` ile başvurabilirsiniz.

'açıklama' üçü arasında en az bilinenidir ancak çok faydalıdır. Her bir "\öğe" köşeli parantez içinde isteğe bağlı bir bağımsız değişken alır ve bu bağımsız değişken, onu takip eden tanım metniyle birlikte bir etiket olarak kalın harflerle yazdırılır. Sözlükler, gösterim listeleri veya herhangi bir "terim: açıklama" yapısı için doğal ortamdır.

## Yuvalama

Çok düzeyli listeler için yuva ortamları. Dış listenin bir `\item`inin içine tam bir `\begin{itemize} ... \end{itemize}` bloğu koyun; LaTeX bunu girintiler ve madde işareti sembolünü otomatik olarak değiştirir. Aynı şey, iç içe yerleştirmenin numaralandırma stilini her düzeyde değiştirdiği 'numaralandırma' için de geçerlidir: önce arap rakamları, sonra harfler, sonra romen rakamları. LaTeX, herhangi bir okunabilir belgenin ihtiyaç duyduğundan daha fazla olan dört düzeydeki iç içe yerleştirmeyi destekler. Kendinizi üç seviye derinlikte bulursanız, materyal muhtemelen bunun yerine düz yazı veya tablo olmak ister.

## Özel etiketler

Herhangi bir öğe, isteğe bağlı bağımsız değişkenle kendi işaretçisini geçersiz kılabilir: `\item[(a)]`, madde işareti veya sayı yerine "(a)" yazdırır. Bu, tek seferlik durumlar için kullanışlıdır, ancak tüm listenin yeniden düzenlenmesini istiyorsanız, her öğeyi elle değiştirmek otomasyonu bozar. Bunun için, tüm listeyi tek bir yerde yeniden etiketlemek için "\begin{enumerate}[label=(\alph*)]" gibi şeyler yazmanıza olanak tanıyan ve ayrıca dikey aralığı daraltma seçenekleri sunan "enumitem" paketini yükleyin.

Yeni başlayanların sık yaptığı bir hata, "\item" girdileri arasında boşluk bırakmak ümidiyle boş bir satır bırakmaktır. Boş satır listenin içinde zararsızdır ancak görsel olarak hiçbir şey yapmaz. Aralık, liste ortamının kendisi veya 'enumitem' seçenekleri tarafından kontrol edilir. Bir diğeri: Her liste ortamı herhangi bir metinden önce en az bir `\öğe' içermelidir, aksi halde kafa karıştırıcı "Bir şeyler yanlış - belki de eksik bir \öğe" hatası alırsınız. [Canlı oyun alanında](/live/) her üç ortamı da deneyebilirsiniz.