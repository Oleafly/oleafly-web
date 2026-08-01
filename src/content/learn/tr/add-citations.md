---

title: ".bib anahtarından metin içi alıntıya"
description: "Alıntı ve kaynakça komutlarıyla olağan BibTeX döngüsü."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# .bib anahtarından metin içi alıntıya

LaTeX'te bir kaynağa atıfta bulunmak iki parçayı içerir: her çalışmayı bir kez açıklayan düz metinli bir veritabanı ve belgenizdeki bir girdiyi anahtarıyla işaret eden bir "\cite" komutu. LaTeX alıntıyı numaralandırır, referans listesini formatlar ve bölümleri yeniden sıraladığınızda veya kaynak eklediğinizde her şeyin tutarlı kalmasını sağlar. Asla elle "[12]" yazmazsınız ve hiçbir şeyi kendiniz yeniden numaralandırmazsınız.

## Belgedeki komutlar

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` metin içi işaretleyiciyi alıntının ait olduğu yere ekler. Gerisini alttaki iki komut halleder: "\bibliographystyle{plain}" alıntıların ve referansların nasıl biçimlendirileceğini seçer ve "\bibliography{refs}" veritabanı dosyasını adlandırır (".bib" uzantısı olmadan) ve genellikle "\end{document}"tan hemen önce referans listesinin yazdırılması gereken yeri işaretler. Yalnızca gerçekten alıntı yaptığınız kaynaklar listede görünür.

## Veritabanındaki giriş

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Bu, 'main.tex' dosyanızın yanında ayrı bir dosya olan 'refs.bib'de bulunur. '@'dan sonraki kelime giriş türüdür, 'knuth84' alıntı anahtarıdır ve geri kalanı stilin biçimlendirilmiş referansı oluşturmak için kullandığı alanlardır. Anahtar, iki dosya arasındaki tek bağlantı olduğundan, büyük harfler de dahil olmak üzere "\cite" argümanıyla tam olarak eşleşmesi gerekir. [BibTeX doğrulayıcısını](/tools/bibtex-validator/) kullanarak tüm veritabanını eksik alanlar ve hatalı biçimlendirilmiş girişler açısından kontrol edebilirsiniz.

## Neden tek bir derleme yeterli değil?

Bibliyografya ayrı bir program tarafından oluşturulmuştur. İlk LaTeX geçişinde belge, belirtilen anahtarların listesini yardımcı bir dosyaya yazar. Daha sonra 'bibtex' programı bu listeyi okur, eşleşen girdileri 'refs.bib'den çıkarır ve bunları formatlar. İki LaTeX geçişi daha, sonucu tekrar katlar ve metin içi işaretçileri çözer. Oleafly bu döngüyü sizin için her derlemede çalıştırır. Elle oluşturursanız ve orta adımı atlarsanız alıntılar kalın soru işaretleri olarak görünür; bu durumda [Gizemli alıntı işaretlerini temizleme](/learn/citation-question-mark/) konusuna bakın.

## Buradan nereye gidilir?

Tek bir ".bib" dosyası yazdığınız her makaleye hizmet edebilir, bu nedenle onu dikkatli bir şekilde oluşturmanız faydalı olacaktır. [Kullanabilecek bir .bib oluşturun](/learn/create-bibliography/), on yıl boyunca geçerliliğini koruyan giriş türlerini, gerekli alanları ve anahtarları kapsar. Bir mekan farklı bir görünüm istediğinde, [Sayısal, yazar-yıl, dergi stilleri](/learn/change-citation-style/) bölümünde açıklandığı gibi herhangi bir giriş yerine bir satırı değiştirirsiniz.