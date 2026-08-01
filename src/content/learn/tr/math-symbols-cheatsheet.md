---

title: "Sembol masası kartı"
description: "Vurgular, büyük operatörler, sayı kümeleri ve esnek sınırlayıcılar tek sayfada."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Sembol masa kartı

Bu sayfa bir dersten ziyade bir referans kartıdır. Günlük matematiğin çoğunu kapsayan aksanlar, büyük operatörler, sayı kümeleri ve sınırlayıcıların tümü tek bir yerde. Buradaki her komut yalnızca matematik modunda çalışır ve sayı kümelerinin giriş kısmında `\usepackage{amssymb}` olması gerekir. Yunan alfabesi ve temel ilişkiler için bkz. [Yunanca ve gündelik semboller](/learn/greek-letters/). Matematik modunun nasıl çalıştığını öğrenmek için [matematik modunun temelleri](/learn/math-mode/) ile başlayın.

## Vurgular

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Komut | | Geleneksel anlam |
| --- | --- | --- |
| `\şapka{x}` | inceltme işaretli x | Tahminciler, birim vektörler, operatörler |
| `\bar{x}` | çubuklu x | Örnek araçlar, karmaşık eşlenikler |
| `\tilde{x}` | yaklaşık işaretiyle x | Yaklaşımlar, dönüştürülmüş değişkenler |
| `\vec{x}` | oklu x | vektörler |
| `\dot{x}`, `\ddot{x}` | bir veya iki nokta | Birinci ve ikinci zaman türevleri |
| `\widehat{xyz}`, `\overline{xyz}` | gergin vurgu | Çok harfli ifadelerdeki vurgular |

Sade vurgular tek bir harfe uyuyor; 'geniş' ve 'aşırı' varyantlar diş tellerinin içindekileri kapsayacak şekilde esner.

## Büyük operatörler

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Komut | Anlamı |
| --- | --- |
| `\sum_{i=1}^n` | Alt ve üst sınırlarla toplam |
| `\prod_{i=1}^n` | Ürün |
| `\int_a^b` | Belirli integral |
| `\noint` | Kontur integrali |
| `\lim_{x \to 0}` | Sınırı |
| `\max_{x}`, `\inf_{x}` | Bir değişkene göre maksimum, infimum |

Sınırlar, bir karakterden uzun olduğunda parantez içine alınarak sıradan alt simge ve üst simge söz dizimi ile eklenir. Matematik gösteriminde toplamlar, ürünler ve limitler sınırlarını sembolün üstüne ve altına yerleştirir. İntegraller kendilerininkini bir kenarda tutar. Standart sözleşme budur.

## Sayı kümeleri

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Bunlar kara tahtada kalın harflerle yazılmış doğal sayılar, tam sayılar, rasyonel sayılar, gerçek sayılar ve karmaşık sayılardır. `\mathbb` alfabesi ve akrabaları [Blackboard, script, Fraktur](/learn/mathbb-mathcal/)'da ele alınmıştır.

## Sınırlayıcılar

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` ve `\right` sınırlayıcılarını kapalı malzemenin yüksekliğine kadar büyütür, böylece parantez uzun bir kesri metin yüksekliğinde kırpmak yerine onu sarar. Çiftler halinde gelmeleri gerekir. Yalnızca bir tarafı göstermek için "\sağ" ile kapatın ve görünmez ortak eşleşmeyi karşılar. Parantez özel karakterler olduğundan küme parantezleri `\{` ve `\}` olarak yazılır. İç çarpımlar için köşeli ayraçlar "\langle" ve "\rangle"dır; asla klavyenin yanlış şekil ve aralıkla ilişki sembolleri olan küçük ve büyük işaretleri değildir.

Oluşturulan formu kaynağın yanında görmek için bu kartın herhangi bir satırı [canlı oyun alanına](/live/) yapıştırılabilir.