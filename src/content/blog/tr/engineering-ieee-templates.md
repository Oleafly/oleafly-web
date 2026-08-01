---

title: "Mühendislik öğrencileri: Hafta sonları acı çekmeden IEEE ve ACM şablonları"
description: "Gerçek sınıf dosyasından başlayın, iki sütunlu kayan noktalardan ve denklemlerden kurtulun, referansları doğru şekilde alın ve makaleyi kameraya hazır olmadan önce versiyonlayın."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

IEEE ve ACM şablonları isteğe bağlı dekorasyon değildir. Onlar teslimiyet
biçimi. Birisinin üç yıl önce yeniden yüklediği rastgele bir zip dosyasından başlayarak
Son teslim tarihinden önceki geceyi yazı tiplerini yeniden adlandırarak ve yazı tiplerini takip ederek geçirirsiniz.
Asla düzenlemek istemediğiniz bir sınıfta "tanımsız kontrol dizisi".

Bu kurs projeleri, üst düzey tasarım makaleleri ve ilk konferans içindir.
Gönderimler.

## Resmi sınıftan başlayın

Dersi ve örneği topluluktan veya konferans sitesinden indirin.
*bu yıl*. Projenize `.cls`yi, herhangi bir `.bst`yi ve `.tex` örneğini koyun
kök. Tek bir orijinal cümle yazmadan önce bir kez derleyin, böylece
ortam çalışıyor.

Oleafly'nin [şablon galerisi](/templates/) ve ücretsiz uygulama yükleme paketleri
ortak mekanları (IEEE, ACM ve arkadaşlar) takip edin, ardından paketle derleyin
motoru çalıştırın ve daha önce proje düzenleyicide bozuk referansları ve alıntıları yakalayın
kameraya hazır. Yine de o yılın bildiri çağrısına karşı doğrulama yapın: sütun
sayım, sayfa sınırı ve kaynakça stili değişikliği.

Konferans değiştirilmiş bir sınıf gönderirse, genel IEEEtran'ı değil, onlarınkini kullanın.
hafızadan.

## İki sütunlu kayan nokta kuralları

İki sütunlu modda, geniş şekiller "şekil*"i kullanır ve genellikle yalnızca ön tarafta görünür.
bir sayfanın üst kısmı. Şamandırayı ilk referansın yakınına yerleştirin ve genişlikleri
bilerek `\columnwidth` veya `\textwidth`. Yan yana alt şekillerin dikkatli olması gerekir
genişlikler veya kenar boşluğuna taşarlar.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Eğer bir kayan nokta üç sayfa öteye uçarsa, savaşmadan önce onu küçültün veya panelleri bölün.
Bir saat boyunca "[H]": [kayan yerleşim](/learn/figure-wrong-position/).

## Dar sütunlardaki denklemler

Uzun türetmeler "\sütun genişliği"nde kesilir. 'Çok satırlı' veya 'böl' seçeneğini kullanın veya taşıyın
bir ekin türetilmesi. Denklem yazı tipini satıra kadar küçültmeyin
okunamıyor; yorumcular fark eder. Yalnızca alıntı yaptığınız denklemleri numaralandırın.

Algoritmalar, aşağıdakiler için boyutlandırılmış "algoritma" / "algoritmik" ortamlara aittir.
sütun, bir IDE'nin ekran görüntüleri değil.

## Referanslar

IEEE sayısal stilleri ve ACM stilleri ayrıntılar konusunda anlaşamıyor. Kaynakçayı kullanın
şablonun birlikte geldiği stili seçin. Yazar-yılı ve karma bir yazar yılı icat etmeyin.
parantez numaraları.

Kamera hazır olmadan önce eksik alanlar için `.bib` dosyasını doğrulayın:
[BibTeX doğrulayıcı](/tools/bibtex-validator/). Akademik aktarımlar karmaşıktır; temiz
tuşlarını (`yazar:yıl:anahtar kelime`) kullanın ve TAMAMI BÜYÜK HARFLERLE gelen başlıkları düzeltin.

Mekan beklediğinde veri kümelerinden ve yazılımdan alıntı yapın. Eksik bir DOI daha kolaydır
portalın "kamera hazır güncelle" penceresinden şimdi düzeltebilirsiniz.

## Suç içermeyen sayfa sınırları

Sayfa sınırları gerçektir. Şablonun altındaki kenar boşluklarını ezmeyin,
Sonuçlar bölümünün tamamı için `\scriptsize` kullanın veya metni büyük rakamların içine gizleyin.
İçeriği kesin. Provaları ve ekstra grafikleri bir eke veya genişletilmiş arXiv'e taşıyın
çağrı izin veriyorsa sürüm. Gönderimi okunabilir tutun. Daha uzun kontrol listesi:
[suç içermeyen sayfa sınırları](/learn/page-limits-without-crimes/).

## Sürüm kontrolü artık laboratuvar raporunun bir parçası

Üst düzey tasarım ve konferans makalelerinin her ikisi de her birinden sonra taahhütlerden yararlanır
başarılı derleme. Bir araştırma editörü
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) gerçek Git'i korur
PDF, SyncTeX ve canlı tanılamaların yanında olduğundan zip göndermiyorsunuz
'submission_really_final.zip' adlı dosyalar. Özel uzaktan kumandalar yayınlanmıyor
Politika izin verene kadar herkese açık GitHub'ta çalışın.

Portala yüklediğiniz taahhüdün tamamını etiketleyin veya mesaj gönderin.

## Ekip iş akışları

Öğrenciye ait bölümler. Bir kişi `.bib` ve sınıf dosyasının sahibidir. Birleştir
Grup yeterince büyükse çekme istekleri aracılığıyla. PDF'nin tamamını bir dosyada derleyin
Entegrasyonun yalnızca önceki gecede olmamasını sağlayacak şekilde programlayın.

Bir ekip arkadaşınız yalnızca Word'ü düzenliyorsa onun adına dışa aktarın ve TeX'i kaynak olarak saklayın:
[yalnızca Word konuşan ortak yazarlar](/learn/collaborator-uses-word/).

## Kameraya hazır hafta

Kameraya hazır talimatlar genellikle inceleme formatından farklılık gösterir; bu nedenle yeniden indirin
onlar. Yazar bloğunu, finansmanı ve IEEE/ACM telif hakkı formlarını gerektiği gibi güncelleyin
gerekli. Son sınıf seçenekleriyle yeniden derleyin (genellikle
inceleme). Her şekli dpi ve yazı tipi açısından kontrol edin; eğer yazı tiplerini PDF'ye gömün
Portal bunu gerektiriyor. PDF'yi ve portalın talep ettiği herhangi bir kaynak zip dosyasını yükleyin, ardından
ikisini de arşivle.

## Yazar bloğu ve bağlantıları

IEEE/ACM yazar blokları titizdir: eşit katkı puanı, çoklu
Finansman kuruluşları sayesinde bağlantılar. Örnek dosyanın yazarını kopyalayın
metni dikkatlice işaretleyin ve değiştirin. Kendi `\teşekkürler` yığınınızı oluşturmak,
PDF'deki eksik dolu kutuların ve eksik virgüllerin yaygın kaynağı.

## Kör inceleme

Çağrı çift körse, laboratuvarı tanımlayan isimleri, finansmanı ve
"önceki çalışmalarımızda" diyen alıntılar. Kameraya hazır olmaları için bunları yeniden etkinleştirin.
Elle düzenleme yapmamak için bir 'kör' sınıf seçeneği veya küçük bir geçiş dosyası tutun
Altı yerde kimlik.

## Sonuç olarak

Resmi sınıftan başlayın, iki sütunlu düzene uyun ve
şablonun birlikte geldiği kaynakça stili. Sürüm her şey.
mühendislik içeriği 2019'daki sahte şablon olmadan da yeterince zordur.