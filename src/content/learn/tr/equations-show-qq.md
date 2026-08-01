---

title: "Sayılar yerine soru işaretleri"
description: "Etiketlerin başka bir geçişe ihtiyacı var; başlıklardan sonra etiket yerleştirme."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Sayılar yerine soru işaretleri

Derlersiniz ve bir şekil veya denklem numarasının olması gereken yerde PDF `??` gösterir. Bu kaynağınızdaki bir hata değil. LaTeX henüz çözemediği bir referansı bu şekilde oluşturur ve düzeltme genellikle yeniden derlenir.

## Neden tek geçiş yeterli değil

LaTeX, belgenizi tek geçişte yukarıdan aşağıya okur. `\label` ile karşılaştığında geçerli sayıyı `.aux` dosyasına yazar; '\ref' ile karşılaştığında, önceki çalıştırmada yazılan '.aux' dosyasındaki numarayı arar. Yeni bir derlemede önceki çalıştırma yoktur, dolayısıyla her referans `???' olarak yazdırılır. İkinci geçiş, tamamlanan ".aux" dosyasını okur ve içindeki sayıları doldurur. Oleafly'nin derleyicisi, sayılar yerleşene kadar otomatik olarak yeniden çalışır, ancak "pdflatex"i elle çalıştırırsanız, ikinci derleme sizin işinizdir.

## Ne zaman ?? ikinci geçişte hayatta kalır

Soru işaretleri devam ediyorsa üç kontrol yapın. İlk olarak, `\ref`deki yazımı `\label` karakteriyle karakter karakter karşılaştırın; Etiketler büyük/küçük harfe duyarlıdır ve başıboş boşluklar sayılır. İkinci olarak, etiketin nerede bulunduğunu kontrol edin. `\label` en son adım atılan sayacın değerini kaydeder ve kayan noktalı sayılarda sayacı adımlayan `\caption`dır, dolayısıyla etiket başlıktan sonra gelmelidir:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Altyazının önüne yerleştirilen bir etiket şikayet etmeden derlenir ancak yanlış sayacı, genellikle de geçerli bölümü alır, böylece referans `??' yerine makul ancak yanlış bir sayı yazdırır. Bu varyant daha kötüdür çünkü gözden kaçırılması kolaydır. Üçüncüsü, eğer `.aux' dosyası çalışma ortasında silinmişse ya da derleme kesintiye uğramışsa, kaydedilen etiketler eksik olabilir; temiz bir durumdan yeniden derleyin.

## Uyarıları okuma

Günlük size hangi durumda olduğunuzu söyler. "Tanımlanmamış referanslar vardı", en az bir "\ref"in hiçbir şey bulamadığı anlamına gelir. "Etiketler değişmiş olabilir. Çapraz referansları doğru şekilde almak için yeniden çalıştırın", başka bir geçişin sorunu çözeceği anlamına gelir. "Etiket çoğaltma tanımlı", iki "\label" komutunun bir adı paylaştığı ve LaTeX'in sessizce bunlardan birini kullandığı anlamına gelir; bu nedenle, her etiket benzersiz olana kadar yeniden adlandırın. 'eq:', 'fig:' ve 'tab:' öneklerini içeren bir adlandırma kuralı, çarpışmaları nadir hale getirir ve kaynağın aranmasını kolaylaştırır; etiket iş akışının kendisi [denklemler için sayılar ve işaretçiler](/learn/number-equations/) bölümünde ele alınmıştır.