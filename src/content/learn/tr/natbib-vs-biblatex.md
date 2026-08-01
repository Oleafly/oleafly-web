---

title: "natbib alışkanlıkları vs biblatex komutları"
description: "Parantez içi ve metinsel alıntılar ve bunların yerine geçen isimler."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib alışkanlıkları ve biblatex komutları

Yazar yılı alıntısı, alıntı komutunun iki çeşidini gerektirir. Bazen yazarlar cümlenizin bir parçasıdır, örneğin "Knuth (1984) okuryazar programlamayı tanıttı." Bazen alıntı, "Okuryazar programlama kodu ve düzyazıyı karıştırır (Knuth, 1984)" örneğinde olduğu gibi parantez içindedir. Basit "\cite" bu ayrımı yapamaz; "natbib" paketinin var olmasının nedeni budur ve biblatex'in aynı fikirler için kendi ad kümesini göndermesinin nedeni de budur. Birini öğrendiyseniz ve diğerini kullanarak bir şablon aldıysanız, bu sayfa çeviri tablosudur.

## Natbib komutları

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Anımsatıcı, `\citet`in cümlenin bir parçası olarak okunan *metinsel* bir alıntı olduğu, `\citep`in ise parantez içine alınmış *parantezli* bir alıntı olduğudur. Yıldızlı seçenekler, bir eserden ilk kez alıntı yaptığınızda bazen gerekli olan "et al." yerine tam yazar listesini yazdırır. natbib ayrıca yalnızca adlar için `\citeauthor`, yalnızca yıl için `\citeyear` ve sayfa numaraları için `\citep[p.~42]{knuth84}` gibi isteğe bağlı bir argüman sunar. natbib bir önişlemci dönemi paketidir: klasik BibTeX ve 'plainnat' veya 'apalike' gibi uyumlu bir '.bst' stiliyle çalışır.

## Biblatex eşdeğerleri

biblatex farklı isimlerle aynı zemini kaplıyor. `\textcite{knuth84}`, "Knuth (1984)" metin biçimini üretir, `\parensite{knuth84}`, "(Knuth, 1984)" parantezini üretir ve düz `\cite{knuth84}`, tam görünümü yüklenen stile bağlı olan çıplak bir alıntı üretir. Geri kalanı için de doğrudan analoglar var: `\citeauthor`, `\citeyear` ve sayfa numaraları gibi şeyler için `\parensite[see][p.~42]{knuth84}` yazılan ön notlar ve son notlar. Sorun kas hafızasıysa, biblatex'in "\citet" ve "\citep"i takma adlar olarak tanımlayan bir "natbib=true" paket seçeneği bile vardır, bu da geçişi neredeyse ağrısız hale getirir.

## Bir belgeyi natbib'den biblatex'e taşıma

`.bib` dosyanızda hiçbir değişiklik yapılması gerekmez. Her iki sistem de aynı veritabanını okur. Geçiş yalnızca giriş kısmına ve yapıya dokunuyor. `\usepackage{natbib}` ve `\bibliographystyle` satırını kaldırın, ardından `\usepackage[backend=biber,style=authoryear]{biblatex}` dosyasını yükleyin ve `\addbibresource{refs.bib}` ile veritabanınıza yönlendirin. Belgenin sonundaki `\bibliography{refs}` ifadesini `\printbibliography` ile değiştirin. Son olarak, yapının "bibtex" yerine "biber" çalıştırdığından emin olun, çünkü biblatex verilerini farklı bir formatta saklar ve eski arka uç sessizce hiçbir şey üretmeyecektir. Gövde metnine dokunmamayı tercih ederseniz, uyumluluk seçeneğini kullanarak natbib komut adlarını koruyun ve yalnızca giriş kısmı değişir.

## Hangisini seçmeli

Günlük şablonu zaten natbib'i yüklüyorsa onunla kalın. Bir sınıf dosyasıyla mücadele etmek nadiren buna değer. Seçtiğiniz yeni belgeler için biblatex daha esnektir ve Unicode'u daha iyi işler. Daha kapsamlı karşılaştırma [Klasik BibTeX veya biblatex](/learn/bibtex-vs-biblatex/)'de bulunur ve daha sonra stil değiştirme işlemi [Sayısal, yazar-yıl, dergi stilleri](/learn/change-citation-style/) kapsamında ele alınır.