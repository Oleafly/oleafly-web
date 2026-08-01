---

title: "Uygulamada ACM formatı"
description: "Acmart sınıfı: sigconf, meta veriler, anonim inceleme ve ilk derleme sürprizleri."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Uygulamada ACM formatı

ACM, 2017'de tüm şablonlarını tek bir sınıfta, "acmart"ta birleştirdi. Tek sınıf, birçok yüz: iki sütunlu bir konferans makalesi mi yoksa tek sütunlu bir dergi makalesi mi alacağınıza format seçeneği karar verir.

## Format seçeneğinizi seçin

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

'sigconf' neredeyse her ACM konferansında isteyeceğiniz şeydir. Mekanın CFP'si tam seçeneği belirtiyor; alışkanlık yerine ona güvenin. Hala mekan aileleri arasında karar vermeye çalışıyorsanız [ACM, IEEE ve arkadaşlar](/learn/acm-ieee-and-friends/) bunları karşılaştırır.

## Meta veriler zorunludur

IEEEtran'ın aksine, acmart meta veri blokları olmadan doğru görünmeyi reddeder (ve yayıncı da bunu kabul etmeyi reddeder):

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

CCS kavramları, ACM web sitesindeki hem XML hem de "\ccsdesc" satırlarını oluşturan bir seçiciden gelir. Bunları aynen yapıştırın. Anahtar kelimeler özette değil, "\anahtar kelimeler"de bulunur. ACM referans formatı bloğu (birinci sayfadaki gri alıntı kutusu), yayıncının kameraya hazır olduğunda doldurduğu veya doğruladığı "\acmConference", "\acmYear" ve arkadaşlarından otomatik olarak oluşturulur.

## Çift-kör gönderim

Çoğu ACM konferansı anonim olarak gözden geçirilir. Bir seçenek bunu halleder:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

'anonim' yazarları ve bağlantıları gizler, 'inceleme' ise inceleyenler için satır numaraları ekler. Kameraya hazır olmak için her ikisini de çevirin. Mekanizmayı sınıf yönetir, ancak anonimlik bir bayraktan daha büyüktür. Bkz. [çift körleme doğru yapıldı](/learn/anonymization-double-blind/).

## Alıntılar: numaralı veya yazar yılı

acmart, altta natbib'i kullanır ve her iki stili de destekler:

| Seçenek | Sonuç |
|---|---|
| varsayılan | Numaralandırılmış: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Yazar yılı: (Lovelace, 1843) |

Bazı SIG'ler yazar yılını (tarihsel olarak CHI) zorunlu tutarken, diğerleri numaralandırılmıştır. Tekrar ediyorum: CFP karar veriyor.

## İlk derleme sürprizleri

acmart pakete aç. Yeni bir kurulumda şunları bekleyin:

- **Libertine yazı tipleri.** Sınıf, Linux Libertine ve Biolinum'un yanı sıra `newtxmath'ı da yükler. Minimum TeX kurulumunda bunlar ilk derlemenizde indirmeler olarak gelir. Oleafly'nin tektonik motoru bunları ilk kullanımda otomatik olarak getirir, böylece ilk derleme ikinciden daha uzun sürer. Bu normaldir, takılma değil.
- **Katı kayan kurallar.** acmart bazı paketleri ("titlesec" gibi) doğrudan engeller ve yüklerseniz hata verir.
- **`\authorsaddresses{}`** taslaklardaki "yazarların adresleri" altbilgi dırdırını susturur.

Bir paket gerçekten çözülemezse, olağan çözüm şu şekildedir: [eksik paketi yükleyin](/learn/install-missing-package/).

## Nereden alınır

Resmi şablonu acm.org'un yazar sayfalarından veya konferansınızın sitesinden indirin ve 'acmart.cls'yi güncel tutun. ACM yılda birkaç kez revize eder ve kamera hazır kontrolleri en son sürüme göre gerçekleştirilir.