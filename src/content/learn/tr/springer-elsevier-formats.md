---

title: "Springer, Elsevier ve LNCS formatları"
description: "llncs, Springer Nature dergileri ve elsarticle: tek sütunlu sınıflar ve kameraya hazır kaynak."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer, Elsevier ve LNCS formatları

IEEE ve ACM ekosistemlerinin dışında iki yayıncı hakimdir: Springer (Springer Nature dahil) ve Elsevier. Sınıfları iki sütunlu konferans stillerinden daha sade görünüyor ve bu da tasarım gereği. Yayıncı son sürümü dizer.

## LNCS: işlemlerin en güçlüsü

Konferansınız Bilgisayar Bilimleri Ders Notları'nda (veya onun kardeşleri LNAI ve LNBI) yayınlanıyorsa, 'llncs' olarak yazarsınız:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS makaleleri tek sütunludur, yazarları enstitülerle eşleştirmek için "\inst{}" üst simgelerini kullanır ve oldukça sıkı bir varsayılan sayfa bütçesine sahiptir (referanslar dahil genellikle 12 ila 16 sayfa). Sınıf varsayılan olarak her TeX dağıtımında bulunmaz. Yazar kitini Springer'in LNCS sayfasından indirin. Kaynakça stili 'splncs04'tür:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Springer Nature dergileri

Springer dergileri geçmişte "svjour3" kullanıyordu ve günlük ailesi başına stil seçenekleriyle ("sn-mathphys-num", "sn-basic" ve diğerleri) daha yeni "sn-jnl" sınıfına geçiş yapıyorlar. Derginin "Gönderim kuralları" sayfası tam sınıfı ve seçeneği belirtir. Tahmin etmeyin: iki Springer dergisi farklı sınıflar isteyebilir.

## Elsevier: elsarticle

Elsevier dergileri tek bir sınıfı paylaşır: "elsarticle":

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

'Önbaskı' seçeneği, inceleme için geniş, çift aralıklı tek bir sütun sağlar ve '1p', '3p' veya '5p' içeren 'son', derginin baskı düzenini taklit eder. Bibliyografya stilleri, derginin kullandığı stile uygun olarak "elsarticle-num" (numaralandırılmış) veya "elarticle-harv" (yazar-yılı) şeklindedir.

## Hızlı karşılaştırma

| Yayıncı | Sınıf | Sütunlar | Önlük stili |
|---|---|---|---|
| Springer LNCS | 'Inc'ler' | bir | 'splncs04' |
| Springer Doğa dergileri | `sn-jnl` (eskiden `svjour3`) | bir | günlük seçeneği |
| Elsevier | 'elmakalesi' | bir (inceleme) | 'elarticle-num' / '-harv' |

## Neden tek sütun? Çünkü sen dizgici değilsin

Bu sınıflar son sayfayı değil, *makalenizi* oluşturur. Yayıncının üretim ekibi, kabul edilen makaleleri derginin düzenine göre yeniden düzenler. "Kameraya hazır kaynak yükleme"nin burada belirli bir anlama gelmesinin nedeni de budur: Yalnızca PDF değil, ".tex", ".bib" ve şekil dosyalarınızı da yüklersiniz, böylece üretim kağıdı yeniden oluşturabilir ve yeniden şekillendirebilir. Pratik sonuçlar:

- Kaynağı temiz ve yeni bir ödemeden derlenebilir tutun: mutlak yol yok, eksik rakam yok
- Boşlukları veya kenar boşluklarını kesmeyin. Üretim yine de onu kaldırıyor (ve [işaretlenebilir](/learn/page-limits-without-crimes/))
- Standart paketleri kullanın. Egzotik olanlar prodüksiyon tarafından yeniden yazılır veya size geri döner

Bu sınıflar oldukça fazla sayıda pakete dayanır, bu nedenle minimum kurulumla ilk derlemede birden fazla paket getirilebilir. Biri görünmeyi reddederse, [eksik paketleri yükleme](/learn/install-missing-package/) konusuna bakın. Şablonda doğrudan hata oluşursa herhangi bir [bozuk şablon](/learn/fix-broken-template/) gibi önceliklendirin.