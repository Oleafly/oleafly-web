---

title: "Yalnızca Word konuşan ortak yazarlar"
description: "Yorumlar için PDF veya DOCX alışverişi yaparken .tex'i gerçeğin kaynağı olarak tutun."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Yalnızca Word konuşan ortak yazarlar

Karma araçlı işbirlikleri yaygındır: makaleyi LaTeX'te yazarsınız ve ortak yazar, danışman veya klinik işbirlikçisi yalnızca Microsoft Word'de çalışır. İki format arasında hiçbir şey mükemmel şekilde dönüştürülemez. Hangi dosyanın gerçek makale olduğu konusunda erkenden anlaşın, ardından geri bildirimi iş kaybı olmadan boşluktan geçirmek için bir rutin belirleyin.

## Gerçeğin tek kaynağı

".tex" dosyalarının standart olduğuna ve diğer her şeyin incelenmek üzere türetilmiş bir kopya olduğuna erken karar verin. İki "geçerli sürüm" iki formatta mevcut olduğu anda, birisinin düzenlemeleri kaybolur ve bir Word dosyasını bir LaTeX dosyasıyla gözle uzlaştırmak sefil bir iştir. Bu anlaşmaya göre göreviniz dizgi ve entegrasyondur. Ortak yazarınızın işi, tercih ettikleri araçla sunulan içerik ve yorumlardır.

## Geri bildirim türüne göre dışa aktarmayı seçin

Okumak ve üst düzey yorumlar için derlenmiş PDF'yi gönderin. Her Word kullanıcısı bir PDF'yi açabilir ve herhangi bir PDF okuyucudaki açıklama araçları, kenar boşluğu notlarını ve vurguları kapsar. Bu geri bildirimi elle uygulamak, kaynağın tam kontrolünü elinizde tutmanızı sağlar.

Ortak yazarın izlenen değişikliklerle cümle düzeyinde yeniden yazmalar önermesi gerektiğinde bir DOCX'i dışa aktarın. Pandoc, inceleme amacıyla LaTeX'i Word'e yeterince iyi dönüştürüyor ve Oleafly'de yerleşik DOCX dışa aktarma özelliği var. Dönüşümün yaklaşık olmasını bekleyin: denklemler, çapraz referanslar ve şekil yerleştirme bozulur ve bunu önceden söylemelisiniz ki kimse düzen sorunlarını tek kullanımlık bir kopyada bildirmesin.

## Birleştirme oturumu

Bir ".docx" dosyasındaki geri bildirimin ".tex" dosyasına elle geri gelmesi gerekir. Bunu devam eden bir damlama yerine zamanlanmış bir görev olarak ele alın: ortak yazarın izlenen değişikliklerini toplayın, Word dosyasını ve LaTeX kaynağını yan yana açın ve kabul edilen düzenlemeleri tek tek uygulayın, ilerledikçe Git'e taahhütte bulunun, böylece her geri bildirim turu bir taahhüttür. Bir kural bunun işe yaramasını sağlar: her inceleme turu mevcut kaynağın yeni bir dışa aktarımıyla başlar. Aynı Word dosyasının birden fazla turda yayınlanmasına asla izin vermeyin, çünkü sessizce kağıdı çatallar.

## Taslak Word'de başladığında

Sometimes the flow reverses: the coauthor writes the first draft in Word and you take over the typesetting. Bir kez, erken dönüştürün. Oleafly imports `.docx` into a LaTeX project, and pandoc does the same on the command line. From that point the `.tex` is canonical and the routine above applies. For the version-control backbone that makes all of this recoverable, see [Put the paper on GitHub](/learn/sync-with-github/).