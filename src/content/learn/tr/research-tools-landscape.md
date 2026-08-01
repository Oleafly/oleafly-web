---

title: "Araştırma yazma araç kutusu, o zaman ve şimdi"
description: "Daktilolardan ve e-posta gidiş dönüşlerinden Overleaf, Zotero, Typst ve yerel öncelikli çalışma alanlarına kadar."
category: "research-101"
order: 9
level: "beginner"
tags: ["research", "basics", "tools"]
featured: false
updated: 2026-07-25
---

# Araştırma yazma araç kutusu o zaman ve şimdi

Her nesil araştırmacı, araçlarının kalıcı olduğunu düşünüyor. Asla öyle değiller. Makalelerin nasıl yazıldığına ve araç kutusunun bugün nasıl göründüğüne dair kısa bir tur; böylece kendinizinkini bilinçli olarak seçebilirsiniz.

## Önceki zamanlar

1980'lerde makaleler **daktiloda yazıldı**, denklemler elle yazıldı ve dergilere postalandı. Ardından kelime işlemciler geldi: hassas numaralandırmaya sahip onlarca yıllık **Word şablonları**, resim olarak yapıştırılan denklemler ve bir paragraf hareket ettiğinde patlayan şekil düzenleri. İşbirliği, **dosyaları ileri geri e-postayla göndermek** anlamına geliyordu: `paper_final_v3_REALLY_FINAL_jw_edits.docx` şaka değil, tarih oldu. LaTeX tüm bunlarla birlikte varlığını sürdürdü (bkz. [45 yıllık TeX](/learn/history-of-tex-latex/)) ancak siz onu bir terminalde derleyip e-postayla da paylaştınız.

## Bugünün araç kutusu

| Araç | Kategori | Ne konuda iyi |
| --- | --- | --- |
| Arka sayfa | Bulut LaTeX düzenleyici | Tarayıcıda gerçek zamanlı ortak düzenleme, sıfır kurulum |
| TeXstudio / TeXmaker | Yerel LaTeX IDE | Klasik masaüstü düzenleme, ücretsiz |
| VS Kodu + LaTeX Atölyesi | Yerel IDE | Zaten VS Code'da yaşıyorsanız güçlü |
| Yapraklı | Yerel öncelikli çalışma alanı | Derleyicilerle birlikte LaTeX, Typst ve Markdown |
| Zotero | Referans yöneticisi | Alıntıların toplanması, düzenlenmesi ve dışa aktarılması |
| Google Akademik | Keşif | Makaleleri arama ve alıntıları izleme |
| arXiv | Keşif + önbaskılar | En yeni çalışmaları ücretsiz olarak okuyabilirsiniz, bkz. [baskı öncesi dünya](/learn/what-is-arxiv/) |
| Tipst | Yeni dizgi sistemi | Hiçbir mekanın .tex gerektirmediği durumlarda hızlı, modern belgeler |

**Keşif** araçları makaleleri bulur, **referans yöneticileri** bulduklarınızı düzenler ve **editörler** bunların hepsini PDF'ye dönüştürür. Sonunda her birinden biriyle karşılaşacaksınız.

## Bulut ve yerel, açıkçası

**Overleaf** kurulumu tamamen kaldırarak LaTeX'i ana akım haline getirdi ve gerçek zamanlı işbirlikçi düzenlemesi gerçekten onun harika özelliğidir. Ortak yazarlarınız aynı anda aynı belgeyi yazmak istiyorsa Overleaf gibi bulut araçları bugün bu konuda çok daha iyi.

**Önce yerel** araçlar işi tersine çevirir: dosyalarınız makinenizde düz dosyalar olarak yayınlanır, bir trende veya hastane güvenlik duvarı arkasında çalışabilirsiniz, hiçbir şey aboneliğe veya sunucunun hayatta kalmasına bağlı değildir ve sürüm geçmişi gerçektir [Git](/learn/oleafly-workflow/), özel bir zaman çizelgesi değil. Yerel LaTeX'in klasik sıkıntısı, çok gigabaytlık bir TeX dağıtımı kurmaktı. Değişen kısım budur.

## Oleafly'nin sığdığı yer

Oleafly ücretsiz, açık kaynaklı, yerel öncelikli bir masaüstü çalışma alanıdır. LaTeX ve Typst için derleyiciler paket halinde gelir, dolayısıyla kurulacak bir dağıtım yoktur. Alıntılar [DOI veya arXiv ID](/learn/open-access-doi-explained/) aracılığıyla alınabilir, projeler dürüst geçmişe sahip Git depolarıdır, mekan şablonları yerleşiktir ve isteğe bağlı bir yapay zeka asistanı istediğiniz zaman yardımcı olur. Amaç, yerel yolu bulut yolu kadar düşük sürtünmeli hale getirmektir. Ticaret konusunda adil olmak gerekirse: Canlı eşzamanlı ortak düzenleme için Overleaf daha güçlü bir seçim olmaya devam ediyor. Dosyalarınızın sahipliği ve çevrimdışı çalışma açısından yerel öncelik kazanır. Birçok kişi hem yerel olarak taslak hazırlıyor hem de Git aracılığıyla senkronize ediyor.

## Acı çekmeden seçim yapmak

Bu ay sizin için en fazla sürtünmeyi ortadan kaldıran şeyle başlayın. .tex dosyaları tablodaki her araçta taşınabilir. Bu taşınabilirlik, [LaTeX vs Word](/learn/latex-vs-word/) kapsamında ele alınan düz metin yazmanın gerçek avantajıdır. Ardından [ilk belgenizi](/learn/first-document/) yazın ve çalışmayla birlikte araç kutusunun büyümesine izin verin.