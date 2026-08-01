---

title: "Komuta mı yoksa çevre mi?"
description: "Makrolar argümanlar alır; ortamlar bölgeleri sarar."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Komuta mı yoksa çevre mi?

LaTeX'te düz metnin ötesinde yazdığınız her şey iki şekilden birini alır: komut veya ortam. İlk hata mesajınıza ulaşana kadar bu ayrım kulağa akademik geliyor. LaTeX'in şikayetlerinin yarısı birinin ait olduğu yerde diğerinin kullanılmasıyla ilgili. Hangi şekle baktığınızı görmeyi öğrenmek, hem belgeleri hem de hataları okunabilir hale getirir.

## Komutlar

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Komut, ters eğik çizgi ve ardından gelen bir addır ve göründüğü noktada bir değişiklik gerçekleştirir. `\textbf{argument}` bir argümanı parantez içinde alır ve onu kalın harflerle yazar; etki diş telleriyle başlar ve biter. Komutlar birkaç ayraç bağımsız değişkeni alabilir ve çoğu, `\documentclass[11pt]{article}` örneğinde olduğu gibi, kendilerinden önce köşeli parantez içinde isteğe bağlı bir bağımsız değişkeni de kabul eder.

İlk iki satır, komutların oluşturabileceğiniz bir şey olduğunu gösterir. `\newcommand{\foo}{bar}`, uzantısı `bar` metni olan `\foo` adında yeni bir komut tanımlar ve bundan sonra herhangi bir yere `\foo` yazıldığında `bar` oluşturulur. [Özel makroların](/learn/custom-commands/) arkasındaki mekanizma budur ve paketler de bu şekilde çalışır: Bir paket büyük ölçüde komut tanımlarından oluşan bir dosyadır.

Erkenden bilmeye değer bir tuhaflık: `\LaTeX` gibi bir komut, kendisinden sonraki boşluğu yutar, dolayısıyla `\LaTeX eğlencelidir` sözcükleri birlikte çalıştırarak yazdırır. Alanı korumak için `\LaTeX{} eğlencelidir' veya `\LaTeX\ is` yazın.

## Ortamlar

```latex
\begin{center}
 Centered block
\end{center}
```

Ortam, belgenin bir bölgesini eşleşen bir "\begin{...}" ve "\end{...}" çifti arasına sarar ve davranışını içindeki her şeye uygular. Burada 'merkez' ortam bloğun her satırını ortalar. Ortamlar, açıldıkları sıranın tersi yönde kapanmaları koşuluyla iç içe yerleştirilebilir ve bağımsız değişkenler de alabilirler: `\begin{tabular}{ll}` bir tabloyu açar ve ona bir sütun belirtimi iletir.

Ortamların dengede olması gerektiğinden, belirgin bir şekilde başarısızlığa uğrarlar. `\begin{itemize} \end{document}` ile sona erdi gibi bir hata, ortamın açıldığı ve hiç kapatılmadığı anlamına gelir. Eksik `\end`i bulun; hata adlarının bulunduğu satıra bakmayın.

## Temel kural

Eğer bir bölgeyi başlangıcı ve bitişi net bir şekilde sarıyorsa muhtemelen bir ortamdır. Eğer küçük bir oyuncu değişikliği ya da geçiş ise bu bir komuttur. Hatta iki şekil örtüşüyor: her 'foo' ortamı, başlık altında bir '\foo' ve '\endfoo' komut çifti olarak uygulanır. En çok karşılaşacağınız komutlar ve ortamlar hakkında bir tur için [her komutun açıklamasına](/learn/every-command-explained/) bakın veya [canlı oyun alanında](/live/) her iki şekli de deneyin.