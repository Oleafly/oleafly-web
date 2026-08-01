---

title: "Pratikte IEEE formatı"
description: "IEEEtran konferans ve dergi modları, yazar blokları ve iki sütunlu bilgiler."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Uygulamada IEEE formatı

Küçük atölyelerden amiral gemisi dergilere kadar IEEE mekanları tek bir sınıf dosyasını paylaşır: "IEEEtran". Bir kere öğrenirseniz yüzlerce mekan açılır.

## Konferans ve günlük modu

Aynı sınıf, seçeneklere bağlı olarak farklı düzenler üretir:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Konferans modu size klasik görünümü verir: 10pt Times, iki sütun, varsayılan olarak sayfa numarası yoktur. Günlük modu başlık düzenini değiştirir, sonuna yazar biyografileri ekler ve boşlukları ayarlar. Her zaman mekanınızın istediği modu kullanın, bunlar birbirinin yerine kullanılamaz. Daha kapsamlı IEEE ve ACM karşılaştırması için bkz. [ACM, IEEE ve arkadaşlar](/learn/acm-ieee-and-friends/).

## IEEE yolunu yazar

Konferans modunun kendi yazar işaretlemesi vardır. `\\` ve manuel ortalamayla bununla mücadele etmeyin:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` adları tutar, `\IEEEauthorblockA` bağlantıları tutar ve `\and` yazarları sütunlara ayırır.

## İki sütunla yaşamak

İki sütunlu düzen, ilk kez gelenlerin sıkışıp kaldığı yerdir. Kurallar:

| Sorun | Düzelt |
|---|---|
| Geniş figür veya masa | `figure*` / `tablo*` kullanın, sayfanın en üstüne çıkın |
| Uzun denklem taşmaları | Kes şunu, iki sütunlu taktikleri [bir veya iki sütunda](/learn/one-column-or-two/) |
| Son sayfanın sütunları düzensiz | Bunları `\IEEEtriggeratref` veya `balance` paketiyle manuel olarak dengeleyin |
| URL kenar boşluğuna giriyor | Daha iyi kırma için `\usepackage{url}` veya `xurl` |

Yıldızlı kayan ortamlar, geniş içerik için tartışılamaz:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

'Figür*'ün '[h]' yerleşimini reddettiğini, her zaman sayfanın en üstüne çıktığını unutmayın. Bununla savaşmak yerine bunun için plan yapın.

## Kaynakça

IEEE sayısal alıntıları kendi BibTeX stiliyle kullanır:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

Eşleşen 'IEEEtran.bst' sınıfla birlikte gönderilir. İnceleyenlerin dikkatine göre "sade" veya "ieeetr" yerine "ieeetr" kullanmayın; kameraya hazır kontrol listesi yine de bunu yakalayacaktır.

## Gerçek şablonu nereden edinebilirim?

Her zaman resmi kaynaktan başlayın: ieee.org adresindeki IEEE Şablon Seçici veya konferansın kendi yazar seti sayfası. Konferans organizatörleri bazen şablonu yamalar (telif hakkı bildirimi, ekstra altbilgiler), böylece mekanın sürümü genel bir kopyadan üstün gelir. Oleafly'nin [şablon galerisi](/templates/), birlikte verilen Tektonik motor üzerinde kutudan çıktığı gibi derlenen IEEE tarzı bir konferans başlatıcı içerir; resmi sete girmeden önce taslak hazırlamak için kullanışlıdır.

## Yaygın olarak karşılaşılanlar kontrol listesi

- PdfLaTeX uyumlu kodla derleyin, IEEEtran fontspec'ten önce gelir ve klasik motorlar bekler
- 'Geometri' eklemeyin veya kenar boşluklarını değiştirmeyin; bunları sınıf tam olarak ayarlar
- Bazı dergi gönderimlerinde `\maketitle`dan sonra `\IEEEpeerreviewmaketitle` gerekir
- Makinenizdeki şablonda hata oluşursa, onu herhangi bir [bozuk şablon](/learn/fix-broken-template/) gibi önceliklendirin