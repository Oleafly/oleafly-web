---

title: "Soyut blok"
description: "makale ve dergi sınıfları için soyut ortam yerleştirme."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Soyut blok

Özet, başlığınız ile ilk bölümünüz arasında yer alan kısa özettir. Neredeyse her mekan bir tane gerektirir. LaTeX, sizi cesur bir başlıkla taklit etmeye bırakmak yerine, ona özel bir ortam sağlar. Dergi sınıflarının bunu farklı bir tarzda (genellikle daha küçük ve girintili) dizebilmesi ve böylece gönderim sistemlerinin onu otomatik olarak çıkarabilmesi için sınıfın hangi metnin özet olduğunu bilmesi gerekir.

## Çevre

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

`\begin{abstract}` ve `\end{abstract}` arasındaki her şey soyut blok haline gelir. Standart 'makale' sınıfında başlığın altında daraltılmış, ortalanmış başlık paragrafı olarak görünür. İçine sade düzyazı yazın. Satır içi matematik iyidir, ancak ağır olan her şeyi atlayın: mekan yasaklıyorsa alıntı yok, dipnot yok, tanımsız kısaltmalar yok. Özetler genellikle veritabanlarında ve arama sonuçlarında makalenin geri kalanından uzakta tek başına görünür.

## Nereye gidiyor

'\maketitle'dan sonra yerleştirin (veya günlük sınıfının gerektirdiği şekilde). Bir makalenin başındaki olağan sıralama `\maketitle`, ardından özet ve ardından `\section{Giriş}` şeklindedir. Ortam çıktı ürettiği için `\begin{document}'dan sonra gelmelidir; bunu giriş bölümüne koymak bir derleme hatasıdır.

Günlük ve konferans sınıfları bu sözleşmeyi sıklıkla değiştirir ve şablonları varsayılanın önüne geçer. Çeşitli ACM ve IEEE değişkenleri de dahil olmak üzere bazı sınıflar, özetin "\maketitle"dan önce bildirilmesini ister, böylece onu kendi başlık düzenlerine yerleştirebilirler. Diğerleri ortamı tamamen '\abstract{...}' gibi bir komutla değiştirir. Temel kural: Bir mekanın şablonunu kullanıyorsanız, özeti şablonun örnek dosyasının koyduğu yere koyun ve sınıfla kavga etmeyin. [Başlık blokları dersi](/learn/title-page/), bunun askıda kaldığı `\maketitle` mekanizmasını kapsar.

## Özeti olmayan dersler

'Kitap' sınıfı, kitapların önsözlerinin olduğu teorisine dayanarak hiçbir şekilde soyut bir ortam tanımlamaz. Rapor tarzı bir tezde buna ihtiyacınız varsa, 'report' sınıfı bunu destekler veya ortalanmış, numarasız bir başlık ve ardından normal bir paragraf yazabilirsiniz; ortamın gerçekte yaptığı tek şey budur.

Yaygın bir hata: "\maketitle" ile özet arasında boş bir satır bırakmak iyidir, ancak özeti boş bırakmak bir derleme hatası değildir, bu nedenle "TODO" gibi unutulmuş bir yer tutucu, gözden geçirenlere herkesin kabul ettiğinden daha sık gönderilir. PDF'yi derleyin, ilk sayfasına bakın ve göndermeden önce oradaki özeti en az bir kez okuyun. Özetin nereye gideceği yerine gerçekte ne söylemesi gerektiğine dair tavsiye için, bkz. [özet nasıl yazılır](/learn/write-an-abstract/).