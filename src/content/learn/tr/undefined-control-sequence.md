---

title: "Tanımlanmamış kontrol dizisi"
description: "Bilinmeyen komut adları: yazım hataları, eksik paketler, yanlış motor."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Tanımsız kontrol dizisi

## Belirti

Derleme `! ile durdurulur. Tanımlanmamış kontrol sırası.' Günlük, olayın gerçekleştiği satırı ikiye bölünmüş olarak gösterir: TeX'in okuduğu her şey ve bir satırda rahatsız edici komut ve onun altındaki kaynak satırının geri kalanı dahil. Üst satırdaki son jeton, TeX'in tanımadığı komuttur, bu da bunu tam olarak bulunması daha kolay hatalardan biri haline getirir.

## Neden oluyor?

Kontrol dizisi ters eğik çizgiyle başlayan herhangi bir şeydir. TeX'in sabit bir kelime dağarcığı yoktur: komutlar yalnızca çekirdek, belge sınıfı, bir paket veya kendi "\yenikomutunuz" onları tanımladığı için vardır. TeX ters eğik çizgiyi ve ardından hiçbir şeyin tanımlamadığı bir adı okuduğunda ne demek istediğinizi tahmin edemez ve durur. Hata asla komutun genel olarak "yanlış" olmasıyla ilgili değildir. Bu belgede, bu noktada, bu motorun altında bu ismin bilinmemesiyle ilgilidir.

## Üç kontrolde sorunu düzeltin

İlk önce yazımı kontrol edin. Çoğu durumda `\textbf` yerine `\texbf`, `\label` yerine `\lable` veya iki hesaptaki adı bölen başıboş bir boşluk. Günlüğün satır numarası sizi doğrudan yazım hatasına götürür.

Yazım doğruysa, tanımlayıcı paket muhtemelen eksiktir. `\includegraphics`, `\usepackage{graphicx}` olmadan hiçbir şey yapmaz, `\toprule`, `booktabs`a ve `\SI`, `siunitx`e ihtiyaç duyar. Bu, başka bir belgeden veya bir modelin cevabından bir pasajı kopyaladığınızda en çok acı verir: gövde metni geldi, giriş satırı gelmedi. [Açıklanan her komut](/learn/every-command-explained/) bölümünde hangi paketin bir komutu tanımladığını bulun, `\usepackage' satırını ekleyin ve yeniden derleyin. Paketin kendisi yüklü değilse, bkz. [Eksik bir paketi yükleme](/learn/install-missing-package/).

Paket yüklenmişse ve hata devam ediyorsa motordan şüphelenin. Bazı komutlar yalnızca belirli bir motor altında bulunur: `\fontspec' ve onun akrabaları XeLaTeX veya LuaLaTeX gerektirir ve pdfLaTeX altında tam olarak bu hatayla ölecektir. Belgelerinde bir motoru belirten şablonlar bunu genellikle bu nedenle yapar. [Bu proje için hangi motor](/learn/engines-compared/) farklılıkları açıklıyor.

## Bilmeye değer iki tuhaflık

Sıra önemlidir: kendisini tanımlayan "\usepackage" satırından önce kullanılan komut o noktada hala tanımsızdır, bu nedenle paketi yüklemeyi "\begin{document}" üzerindeki giriş bölümünde tutun. Ve bir hata çoğu zaman diğerini gizler çünkü TeX iyileştikten sonra takip eden her şeyi yanlış okuyabilir. Günlükteki ilk tanımlanmamış kontrol sırasını düzeltin, yeniden derleyin ve ancak bundan sonra geriye kalanlara bakın.