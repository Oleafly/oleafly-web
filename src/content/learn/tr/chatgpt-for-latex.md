---

title: "TeX'i derlemek için bilgi istemi modelleri"
description: "Önsözü gönderin, bir fark isteyin, her zaman cevabı derleyin."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# TeX'i derlemek için bilgi istemi modelleri

LaTeX için bir sohbet modeli isteyin; genellikle doğru görünen ve belgenizde derlenemeyen kod alırsınız. Model, hangi sınıfı kullandığınızı, hangi paketleri yüklediğinizi veya hangi makroları tanımladığınızı bilmez; dolayısıyla size ait olmayan bazı genel belgelere yanıt verir. Çıktı, yapıştırdığınız anda eksik paketler veya çakışan tanımlar nedeniyle ölür. Bunların çoğu, üç yönlendirme alışkanlığı ve artı bir katı kuralla önlenebilir: güvenmeden önce derleyin.

## Önsözü gönder

Önsözünüz modelin eksik olduğu bağlamdır. Bunu veya en azından "\documentclass" satırını ve "\usepackage" listesini yapıştırın ve "bu giriş bölümü altında derlenen bir parça" isteyin. Bu alışkanlık en yaygın başarısızlığı engeller: Cevap sessizce "tikz", "siunitx" veya hiç yüklemediğiniz başka bir pakete bağlıdır. Ayrıca modeli, kurulumunuzun gerçekte sağladığı komutlara doğru yönlendirir. Projeniz makroları tanımlıyorsa, [Modele sembol tablonuzu verin](/learn/ai-follow-notation/) kapsamında açıklanan nedenlerden dolayı bunları da ekleyin.

## Cevabın neye bağlı olduğunu sorun

Daimi bir istek ekleyin: "Kodunuz yüklemediğim herhangi bir pakete ihtiyaç duyuyorsa, bunu yanıtınızın en üstünde açıkça listeleyin." Bu, gizli bağımlılıkları görünür bir kontrol listesine dönüştürür. Yanıt bir paketi adlandırdığında, bağımlılığı üç derleme sonra "Tanımlanmamış kontrol sırası" hatası olarak keşfetmek yerine, onu ekleyip eklemeyeceğinize siz karar verirsiniz. Bu hata ve teşhisi [Tanımsız kontrol dizisi](/learn/untanımlanmaktadır-kontrol-sekansı/) bölümünde ele alınmaktadır.

## Yeniden yazma değil, fark isteyin

Mevcut metinde bir değişiklik yapmak istediğinizde, ilgili en küçük parçayı yapıştırın ve modelden, neyi değiştirdiğini belirterek yalnızca isteğin gerektirdiğini değiştirmesini isteyin. Bütün bir dosya verildiğinde modeller özgürce yeniden yazar: dokunulmamış paragrafları yeniden biçimlendirir, giriş satırlarını yeniden sıralar ve ara sıra yere bir şeyler düşürür. Gerçek değişiklik karmaşanın içinde kaybolur. Minimal, tanımlanmış bir düzenleme, gerçekten inceleyebileceğiniz bir düzenlemedir. Oleafly'nin içinde asistan, [Oleafly'nin içindeki Asistan](/learn/oleafly-ai/) bölümünde açıklandığı gibi her düzenlemeyi satır satır onayladığınız kırmızı/yeşil bir fark olarak önererek bu şekli sizin için uygular.

## Güvenmeden önce derleyin

Ne kadar makul görünürse görünsün, derlemediğiniz LaTeX'i asla göndermeyin. Öneriyi belgenize yapıştırın, derleyin ve varsa ilk hatayı okuyun. Bu hata mesajını rahatsız edici kod parçasıyla birlikte modele geri beslemek genellikle çalışan ikinci bir denemeye neden olur. Model destekli herhangi bir değişikliğin tek komutla geri alınabilmesi için projeyi Git'te tutun; bu kurulum [Put the paper on GitHub](/learn/sync-with-github/) bölümünde anlatılmıştır. Model şunu önermektedir; derleyici ortadan kaldırır.