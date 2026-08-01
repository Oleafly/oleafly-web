---

title: "Gerçek bir projedeki dosyalar"
description: ".tex, .bib, .cls, .sty ve oluşturulan çöpleri işlememelisiniz."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Gerçek bir projedeki dosyalar

Derlemeden sonra herhangi bir gerçek LaTeX projesinin klasörünü açtığınızda, yazdığınızdan çok daha fazla dosya bulacaksınız. Bu, yeni başlayanların çoğunu şaşırtıyor ve yanlış şeyi silme korkusu, klasörlerin sonsuza kadar darmadağın olmasına neden oluyor. Bunu açıklığa kavuşturan ayrım: bazı dosyalar düzenlediğiniz kaynaktır, bazıları bir şablon veya paket tarafından sağlanan stillerdir ve geri kalanı derleyicinin her çalıştırmada yeniden oluşturduğu oluşturulmuş karalama alanıdır.

## Yazdığınız dosyalar

".tex" dosyalarınız asıl belgeyi içerir: metin, bölümler, şekiller ve matematik. Bir `.bib` dosyası kaynakça veritabanınızdır; alıntı yapabileceğiniz makale veya kitap başına bir giriş; bakımını elle yapabilir veya Zotero gibi bir referans yöneticisinden dışarı aktarabilirsiniz. Bunlar, yedeklenmeye ve sürüm kontrolüne konulmaya değer dosyalardır çünkü diğer her şey onlardan yeniden oluşturulabilir.

## Bir şablonun size verdiği dosyalar

Bir ".cls" dosyası, "\documentclass{...}" içinde adlandırdığınız belge sınıfını tanımlar. Dergiler ve konferanslar kendi gönderimlerini gönderirler, böylece her gönderim aynı görünür ve neredeyse hiçbir gönderiyi düzenlemezsiniz. Bir ".sty" dosyası bir pakettir: "\usepackage" ile yüklenen yeniden kullanılabilir makrolar ve ayarlar. Özel komutları birkaç belgede paylaşmak istediğinizde yalnızca kendiniz bir tane yazacaksınız. Bir '.bst' dosyası BibTeX alıntı stilini tanımlar ve aynı şekilde genellikle bir mekan tarafından bırakılır.

## Derleyicinin oluşturduğu dosyalar

'.aux' dosyası derleme geçişleri arasındaki çapraz referans ve alıntı verilerini saklar; asla düzenlemeyin ve bir sonraki derleme yeniden yazdığından silmekten çekinmeyin. '.log' dosyası derleyicinin yaptığı her şeyi kaydeder ve yalnızca bir şeyler ters gittiğinde açılmaya değerdir. `.pdf` aslında istediğiniz çıktıdır.

| Uzantı | Rol | Elle düzenlensin mi? |
| --- | --- | --- |
| '.tex' | Kaynak belgeler ve bölümler | Evet |
| `.bib' | Kaynakça veritabanı | Evet (veya Zotero'dan dışa aktarma) |
| `.cls` | Belge sınıfı | Nadiren satıcı şablonları |
| `.sty' | Paketler / stil dosyaları | Kendi makrolarınızı yazarken |
| `.bst` | BibTeX stili | Nadiren |
| '.aux' | Çapraz referans verileri | **No:** oluşturuldu |
| `.log` | Derleyici günlüğü | Hata ayıklarken okuyun |
| `.pdf` | Çıkış | Görüntüle / gönder |

## Ölçeklenen proje düzeni

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

En üst düzeydeki bir "main.tex" giriş noktası görevi görür, bölümler kendi klasörlerinde bulunur ve "\input" veya "\include" ile alınır, resimler "figures/" içinde bulunur ve kaynakça bir "refs.bib"de kalır. Bu düzen, projenin dört sayfalık bir makale veya bir tez olmasına bakılmaksızın yönetilebilir kalır. [Bölünmüş bölüm dosyaları](/learn/split-chapter-files/) parçaların nasıl bağlandığını gösterir.

Git kullanıyorsanız `*.aux`, `*.log` ve oluşturulan diğer dosyaları `.gitignore`a ekleyin, böylece geçmişiniz yalnızca gerçek kaynağı izler. Oleafly projeleri diskteki düz klasörlerdir, dolayısıyla bu tavsiye değişmeden orada da geçerlidir. En yaygın hata bunun tersidir: Tuhaf bir derleme hatası ararken, ".aux" dosyalarını silmek genellikle çözümdür, çünkü bozuk bir çalıştırmadan gelen eski bir dosya, kendisinden sonraki tüm derlemeleri zehirleyebilir.