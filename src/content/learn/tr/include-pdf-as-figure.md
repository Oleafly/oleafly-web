---

title: "Grafik olarak bir PDF sayfası"
description: "sayfa seçimli grafikler ve ekler için pdf sayfaları içerir."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Grafik olarak bir PDF sayfası

PDF, LaTeX'in kullanabileceği en iyi şekil formatıdır. PNG veya JPG'den farklı olarak PDF, vektör verilerini depolar; böylece çizgiler ve etiketler her yakınlaştırma düzeyinde keskin kalır ve içindeki yazı tipleri dosyayla birlikte hareket eder. Matplotlib, Inkscape ve Draw.io gibi araçların tümü PDF'yi dışa aktarır; bu, başka bir yerde çizdiğiniz diyagramın doğrudan belgenize düşebileceği anlamına gelir. Ancak PDF'ler, görüntülerde olmayan bir kırışıklık getirir: Bir PDF birçok sayfa içerebilir ve LaTeX'e hangisini istediğinizi söylemeniz gerekir.

## Çok sayfalı PDF'den bir sayfa çıkarma

'graphicx' paketinin '\includegraphics', olağan boyutlandırma tuşlarının yanında bir 'sayfa' seçeneğini de kabul eder:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Burada "page=1", "diagram.pdf" dosyasının ilk sayfasını seçer ve "width=\textwidth" bu sayfayı metin bloğunun tam genişliğine ölçeklendirir. 'Sayfa'yı atlarsanız, LaTeX sessizce birinci sayfayı kullanır; bu genellikle istediğiniz şeydir, ancak bir çizim komut dosyası birkaç rakamı tek bir dosyaya yazdığında sizi şaşırtabilir. Aynı PDF'yi farklı "sayfa" değerleriyle birkaç kez, her şekil ortamı için bir kez, her birinin kendi başlığı ve etiketi olacak şekilde ekleyebilirsiniz.

Komutu normal bir "figür" ortamına sarın, böylece bir resim yazısı ve bir sayı alır, tıpkı [başka herhangi bir resimde](/learn/insert-images/) yaptığınız gibi. Dahil edilen sayfa kendi sınırlayıcı kutusuna kırpılır, bu nedenle kaynak PDF'nizin geniş kenar boşlukları varsa şekil dolgulu görünecektir. Negatif boşluklarla boşluklarla mücadele etmek yerine, sıkı bir sınırlayıcı kutuyla yeniden dışa aktarın veya "pdfcrop" gibi bir araçla bir kez kırpın.

## PDF sayfaları içeren tüm belgeleri ekleme

Bazen hiç figür istemezsiniz. Tüm sayfaların harfiyen belgenize bırakılmasını istiyorsunuz: ek bir PDF, imzalı bir form, tez ekinde yayınlanmış bir anket. 'pdfpages' paketinin görevi budur:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

'pages=-' değeri her sayfa anlamına gelir. Ayrıca bir aralık için `pages=2-5` veya belirli bir liste için `pages={1,3,7}` yazabilirsiniz. Eklenen her sayfa kendi çıktı sayfasını doldurur, orijinal düzenini korur ve belgenizin sayfa numaralandırmasına katılır, böylece ek sürekli olarak okunur. Belge sınıfınızdaki üstbilgiler veya altbilgiler eklenen sayfaların üstüne yazdırılıyorsa ve bunların gizlenmesini veya özelleştirilmesini istiyorsanız `pagecommand={}` seçeneğini ekleyin.

## Hangi iş için hangi araç

PDF içeriğinin bir şekil gibi davranması, yani havada asılı kalması, bir resim yazısı taşıması ve metinden referans alması gerektiğinde `\includegraphics[page=...]' kullanın. Sayfaların tam boyutta kendi başlarına durması gerektiğinde `\includepdf`yi kullanın. Yaygın hata, bir diyagram için "pdf sayfaları" kullanmaktır; bu, size "\ref" ile alıntı yapamayacağınız, başlıksız, referanssız bir tam sayfa verir. Eğer okuyucular "Şekil 3'e bakın" ifadesini görürse, bu bir şekil ortamına aittir.