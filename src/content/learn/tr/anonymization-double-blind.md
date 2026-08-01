---

title: "Çift kör doğru yapıldı"
description: "Neyi anonimleştireceğiniz, kendinizden nasıl alıntı yapacağınız ve size ihanet eden meta veriler."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Çift körleme doğru yapıldı

Çift-kör inceleme, hakemlerin makaleyi kimin yazdığını bilmediği anlamına gelir. Yanlış yapmak, bir makalenin okunmadan reddedilmesine yol açabilecek birkaç biçimlendirme hatasından biridir; bu nedenle anonimleştirmeyi bir his olarak değil, bir kontrol listesi olarak ele alın.

## Ne gitmeli

| Ürün | Ne yapmalı |
|---|---|
| Yazar adları ve kurumları | Kaldır veya "Anonim Yazar(lar)"la değiştir |
| Teşekkürler | Gönderim için silin (fon verenler ve meslektaşlarınız sizi tanımlar) |
| Repo ve proje bağlantıları | Anonimleştirilmiş bir bağlantıyla değiştirin, aşağıya bakın |
| Kuruma özel ayrıntılar | "üniversitemizin kümesi" "Stanford GPU kümesini" yener |
| "Önceki çalışmalarımız" ifadesi | Üçüncü şahıs olarak yeniden yazın, aşağıya bakın |
| Logolar, filigranlar, başlıklar | Grup veya laboratuvar adı olan her şeyi soyun |

Birçok sınıf ilk satırı otomatikleştirir. ACM'nin sınıfıyla bu bir seçenektir:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Diğer mekanlar kendi şablonlarının gönderim versiyonunu gönderir. [IEEEtran](/learn/ieee-format-in-practice/) mekanları genellikle yazar engellemesini kaldırmanızı söyler.

## Kendi çalışmanızdan alıntı yapmak

Kural basit: Bir yabancıdan alıntı yaptığınız gibi kendinizden de alıntı yapın.

Yanlış: "Önceki çalışmamızda [7] şunu gösterdik..."
Sağda: "Lovelace ve arkadaşları [7] gösterdi..."

Kendi ilgili belgelerinizi atlamayın. Hakemler ilgili çalışmadan açıkça alıntı yapılmasını bekler ve şüpheli bir boşluk, bir isim kadar etkili bir şekilde anonimliğinizi ortadan kaldırabilir. Bunun tek istisnası, gerçek anlamda yayınlanmamış çalışmalardır; bunları, bunun yerine anonim ek materyal olarak yükleyebilirsiniz.

## Anonim eserler

İncelemeciler giderek daha fazla kod ve veri bekliyor. GitHub bağlantıları radyoaktiftir: kullanıcı adı tam oradadır. İşe yarayan seçenekler:

- Bunun için oluşturulmuş hizmetler (anonymous.4open.science alan standardıdır)
- Temizlenmiş taahhüt geçmişine sahip tek kullanımlık bir hesap altında yeni bir depo
- Dosya başlıklarından ve not defterlerinden yazar adlarının kaldırıldığı, gönderimle birlikte yüklenen ek zip

Yüklemeden önce zip dosyasını kontrol edin: lisans dosyaları, `YAZARLAR`, not defteri meta verileri ve sabit kodlanmış ana dizin yolları (`/home/ada/...`) tüm sızıntı adları.

## Sana ihanet eden kazalar

Basılı metin anonimdir ancak PDF şu şekilde olmayabilir:

- **PDF meta verileri.** Yazar alanı genellikle sisteminizden otomatik olarak doldurulur. `pdfinfo` ya da görüntüleyicinizin belge özelliklerini kontrol edin ve `\hypersetup{pdfauthor={}}` yoluyla temizleyin.
- **Dosya adları.** `lovelace-sigconf-final.pdf` her şeyi geri alır. Bunu 'paper.pdf' veya gönderim numarası olarak adlandırın.
- **Şekil kaynakları.** Araçlardan dışa aktarılan grafikler, kullanıcı adlarını meta verilere veya ekran görüntüsündeki görünür bir yola gömebilir.
- **Önbaskılar.** ArXiv'e göndermeden önce gönderim yapılmasına birçok yerde izin verilirken bazı yerlerde yasaktır. CFP hangisi olduğunu söylüyor. Okuyun. Bu [mekan seçmenin bir parçası](/learn/choose-your-venue/).

## Kameraya hazır onu geri çevirir

Kabul edildikten sonra her şey geri döner: isimler, bağlantılar, teşekkür, gerçek repo bağlantısı ve beğenirseniz birinci şahıs ifadeleri. Anonimleştirme geçişi için bir saatlik bütçe ayırın. Hatırladığınızdan daha fazla yere dokunuyor ve [kameraya hazır kontrol listesi](/learn/first-paper-roadmap/) başıboş olanları yakalamanın tam zamanı.