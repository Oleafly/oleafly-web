---

title: "Uzun ömürlü bir .bib oluşturun"
description: "Giriş türleri, zorunlu alanlar, kararlı anahtarlar."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Uzun ömürlü bir .bib oluşturun

Bir `.bib` dosyası, alıntı yapabileceğiniz her şeyin küçük, düz metinli bir veritabanıdır. Her girişin bir türü, bir anahtarı ve bir dizi alanı vardır ve aynı dosya, yazdığınız her makaleye yıllarca hizmet edebilir. Türleri seçme, alanları doldurma ve anahtarları adlandırma konusunda artık biraz disiplin, daha sonra günlük stili aniden hiç kaydetmediğiniz bir alanı istediğinde gerçek acıyı ortadan kaldırır.

## Bir girdinin anatomisi

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

'@'dan sonraki kelime, stile bunun ne tür bir iş olduğunu ve dolayısıyla hangi alanların bekleneceğini söyleyen giriş türüdür. 'knuth84' alıntı anahtarıdır, '\cite{...}' içine yazdığınız tanıtıcıdır. Geriye kalan her şey bir alandır. Stilin adları güvenilir bir şekilde kısaltabilmesi ve sıralayabilmesi için "yazar" alanı "Son, İlk" formunu kullanır ve "sayfalar", LaTeX'in sayfa aralığı çizgisi olarak ayarladığı çift kısa çizgiyi kullanır.

## Gerçekten ihtiyacınız olan giriş türleri

Altı tür neredeyse tüm akademik yazıları kapsar. Dergi makaleleri için `@article`, konferans ve çalıştay makaleleri için `@inproceedings`, kitaplar için `@book`, tezler için `@phdthesis`, kurumsal raporlar ve birçok ön baskı için `@techreport` ve yazılım ve web siteleri de dahil olmak üzere diğer her şey için `@misc` kullanın. Doğru türün seçilmesi önemlidir çünkü stiller her birini farklı şekilde biçimlendirir: bir "@inproceedings" girişi bir "kitap başlığı" (konferans adı) isterken, bir "@article" bir "günlük" ister.

## Zorunlu alanlar ve doğrulayıcıların neden şikayetçi olduğu

Her türün zorunlu alanları vardır ve eksik bir alan, bir bibliyografya girişinin karışık çıkmasının veya bir arka uç uyarısını tetiklemesinin en yaygın nedenidir. '@makale' için esaslar 'yazar', 'başlık', 'dergi' ve 'yıl'dır; "@inproceedings", "yazar", "başlık", "kitap başlığı" ve "yıl" için. 'Yıl' veya 'yazar'ın eksik olması klasik bir başarısızlıktır çünkü yazar-yıl stilleri bunlar olmadan tam anlamıyla bir alıntı etiketi oluşturamaz. 'Cilt', 'sayfalar', 'doi' ve 'yayıncı' gibi isteğe bağlı alanlar, girişleri daha kullanışlı hale getirir; bu nedenle, kaynak önünüzdeyken bunları kaydedin. [BibTeX doğrulayıcı](/tools/bibtex-validator/) ile bir dosyanın tamamını tek seferde kontrol edebilirsiniz.

## On yıl boyunca hayatta kalan anahtarlar

Alıntı anahtarları sonsuza kadar geçerlidir. Her taslak, not ve slayt kümesindeki her "\cite{knuth84}" tam olarak bu dizeye atıfta bulunur, dolayısıyla bir anahtarı yeniden adlandırmak her kullanımın peşine düşmek anlamına gelir. 'authorYEAR' veya 'authorYEARkeyword' gibi bir kural seçin, bunu ilk günden itibaren uygulayın ve yerleşik bir veritabanındaki anahtarları asla "temizlemeyin". Referansları Zotero'da yönetiyorsanız Better BibTeX eklentisi sizin için kararlı anahtarlar oluşturabilir ve sabitleyebilir; bkz. [Zotero'yu .bib dosyasına](/learn/zotero-latex/). Dosyayı bir belgeye bağlamak için [From .bib key to in-text cite](/learn/add-citations/) ile başlayın.