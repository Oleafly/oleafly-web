---

title: "Acil durdurma ve kaçak tartışma"
description: "Eksik uçlar, diş telleri veya kötü dahil etmeler nedeniyle ölümcül iptaller."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Acil durdurma ve kaçak tartışması

## Belirti

Derleme doğrudan ölür. Günlük `! ile bitiyor! Acil durdurma.' veya 'Kaçak argüman?' ve ardından kendi metninizin uzun bir bölümü gelir; genellikle '\textbf' kullanımı taranırken dosya sona erdi' veya '\foo tamamlanmadan önce paragraf sona erdi' gibi bir tamamlayıcı satır bulunur. Çoğu LaTeX hatasının aksine, hiçbir PDF yoktur ve bildirilen satır numarası çoğunlukla gerçek hatadan ziyade dosyanın sonunu gösterir.

## Neden oluyor?

Her iki mesaj da aynı sorundan geliyor: TeX kapatılması gereken bir şeyi okumaya başladı ve kapanış jetonu gelmeden girişin sonuna ulaştı. `\textbf{` yazdığınızda, TeX argüman olarak eşleşen `}`ye kadar her şeyi toplar. Bu parantez hiç gelmezse TeX, dosya bitene kadar paragraflar ve bölümler boyunca metni yutmaya devam eder. "Kaçak argüman" TeX'in size neyi yuttuğunu göstermesidir. "Acil durdurma", TeX'in eksik parça olmadan devam edemeyeceği için vazgeçmesidir. Eksik bir `\end{belge}`, kapatılmamış bir ortam veya var olmayan bir dosyanın `\girdisi` aynı terminal durumunu üretir.

## Gerçek konum nasıl bulunur?

Satır numarasına güvenmeyin; dengesizliğin başladığı yeri değil, TeX'in girdinin bittiği yeri gösterir. Bunun yerine, günlükteki 'Kaçak argüman?' bloğunu okuyun. Yutulan metnin ilk birkaç kelimesi size kaçağın belgenin neresinde başladığını söyler ve 'Dosya tarama sırasında sona erdi ...' satırı argümanı hiçbir zaman kapatılmayan komutu adlandırır. Alıntılanan metnin yakınında bu komutu arayın ve parantezlerini sayın.

Günlük yardımcı olmazsa belgede ikili arama yapın. Gövdenin ikinci yarısını yorumlayın (veya onu `\iffalse ... \fi` içine sarın) ve yeniden derleyin. Hata ortadan kalkıyorsa sorun kaldırdığınız yarıdadır; hatalı paragraf izole edilene kadar yarıya indirmeye devam edin. Bu kaba görünebilir, ancak büyük bir belgede bir avuç dolusu derlemede tek bir eksik ayraç buluyor.

## Olağan şüpheliler

Kalın, italik, dipnotlar ve altyazıların yakınında `}` olmadan `{` olup olmadığını kontrol edin, çünkü bu komutlar elle yazdığınız bağımsız değişken ayraçlarını alır. Her `\begin{...}`in aynı ortam adıyla eşleşen bir `\end{...}` olup olmadığını kontrol edin. Dosyanın "\end{document}" ile bittiğini ve her "\input" ve "\include" öğesinin o yolda bulunan bir dosyayı adlandırdığını doğrulayın. Editörler bu konuda yardımcı olur: Oleafly siz yazarken eşleşen parantezleri ve ortam çiftlerini vurgular; bu da bunların çoğunu derleyici onları görmeden yakalar.