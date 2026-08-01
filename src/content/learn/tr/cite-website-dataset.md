---

title: "Web sayfaları, videolar, veri kümeleri"
description: "hassas URL'ler için çeşitli/çevrimiçi girişler ve erişim tarihleri."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Web sayfaları, videolar, veri kümeleri

BibTeX 1980'lerde dergiler, kitaplar ve konferans tutanakları için tasarlandı, dolayısıyla bir web sayfası, bir YouTube videosu veya Zenodo'daki bir veri kümesi hakkında hiçbir yerel fikri yok. Hala bunlardan sürekli olarak alıntı yapmanız gerekiyor ve standart geçici çözüm, hemen hemen her alan kombinasyonunu kabul eden ve stilin bunları mantıklı bir şekilde yazdırmasını sağlayan '@misc' giriş türüdür.

## @misc deseni

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Burada üç ayrıntı önemli. `{{Oleafly Contributors}}` etrafındaki çift parantezler BibTeX'e tüm dizeyi tek bir gerçek ad olarak ele almasını söyler; onlar olmadan "Katkıda Bulunanlar" bir soyadı olarak ayrıştırılır ve geri kalanı "O. Katkıda Bulunanlar" olarak kısaltılır. 'howpublished' alanı, klasik BibTeX'te bir URL için olağan yerdir ve adresin '\url{...}' içerisine sarılması, onu tek aralıklı yazı tipinde dizer ve satırlar arasında temiz bir şekilde bölünmesine olanak tanır (bunun için 'url' veya 'hyperref' paketini yükleyin). 'Not' alanı erişim tarihini içerir; bu, web içeriğinin değişip kaybolması nedeniyle önemlidir. Bu tarih, okuyuculara gerçekte sayfanın hangi sürümünü gördüğünüzü bildirir.

## biblatex alternatifi: @online

Belgeniz biblatex kullanıyorsa özel bir tür vardır. Bir "@online" girişi uygun "url" ve "urldate" alanlarını alır, böylece aynı kaynak "url = {https://oleafly.com}" ve "urldate = {2026-07-24}" olur ve stil, erişim tarihini sizin için biçimlendirir. Kaynakça stili desteklediğinde "@çevrimiçi"yi tercih edin ve klasik ".bst" dosyasıyla uyumlu kalmanız gerektiğinde "@çeşitli"ye geri dönün. İki sistem arasındaki farklar [Klasik BibTeX veya biblatex](/learn/bibtex-vs-biblatex/) belgesinde belirtilmiştir.

## Veri kümeleri ve yazılım

Veri kümeleri ve kod yayınları, bir DOI mevcut olduğunda çıplak bir URL'den daha fazlasını hak eder. Alıntıların herhangi bir barındırma kurulumundan daha uzun süre dayanabilmesi için Zenodo ve Figshare gibi depolar DOI'leri günceller. DOI'yi bir "doi" alanına veya klasik stiller için "howpublished" alanına "\url{https://doi.org/10.5281/...}" olarak koyun. Yapının sürümü belirlendiğinde bir "sürüm" notu ekleyin, çünkü bir okuyucunun beş yıl içinde indirdiği "veri kümesi" sizin analiz ettiğiniz veri kümesi olmayabilir. Çoğu proje, genellikle veri havuzundaki bir 'CITATION.cff' dosyasında tercih edilen bir alıntıyı da yayınlar. Bunu kullanmak, alanları kendiniz tahmin etmekten hem kibar hem de daha doğrudur.

## Videolar ve diğer tuhaf kaynaklar

Bir video için kanalı veya içerik oluşturucuyu "yazar" alanına, video başlığını "başlık" alanına, platform ve URL'yi "nasıl yayınlandı" alanına ve yükleme yılını "yıl" alanına, erişim tarihinizi ise "not" alanına yerleştirin. Olağandışı herhangi bir şey için genel kural aynıdır: Bunu kimin yaptığını, adını, okuyucunun onu nerede bulabileceğini ve ne zaman baktığınızı kaydedin; `@misc' bunların tümünü herhangi bir stilde güvenli bir şekilde taşıyacaktır.