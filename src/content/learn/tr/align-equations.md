---

title: "Sıralanan çok satırlı denklemler"
description: "hizalayın, toplayın, bölün, çok satırlı ve not etiketleyin."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Sıralanan çok satırlı denklemler

Birkaç adımdan oluşan bir türetme, eşittir işaretlerinin tek bir sütunda istiflenmesiyle en iyi şekilde görünür, böylece göz satırdan satıra neyin değiştiğini takip edebilir. 'Amsmath' paketi bunun için 'hizalama' ortamının yanı sıra uyumun istediğiniz gibi olmadığı durumlar için küçük bir akraba ailesi sağlar.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Okumaları nasıl hizala

Her satır "\\" ile biten bir denklemdir; son satırın hiçbirine ihtiyacı yok. `&` hizalama noktasını işaretler ve her satırın `&` işareti aynı sütuna gelir. Eşittir işaretinin hemen önüne `&' işareti koymak standart bir alışkanlıktır, bu nedenle eşittir işaretleri yığılır ve sol taraflar sola doğru sarkar. Her satır kendi denklem numarasını alır; [Denklemler için sayılar ve işaretçiler](/learn/number-equations/) bölümünde gösterildiği gibi, hiçbirini numaralandırmamak için "hizala*" yazın veya yalnızca satırları atlamak için tek tek satırlara "\notag" ekleyin.

Ortam, ekran matematiğini kendi kendine açar, bu nedenle `\[ ... \]` veya `$ ... $` içinde bulunmamalıdır; onu başka bir matematik ortamına yerleştirmek kafa karıştırıcı hatalara neden olur.

## Aile

| Zarf | Amaç |
| --- | --- |
| 'hizala' | Birkaç satır hizalanmış |
| 'hizala*' | Aynı, numarasız |
| 'topla' | Birkaç satır, ortalanmış |
| 'bölünmüş' | Çok satırlı tek denklem numarası |
| 'çok satırlı' | Uzun denklem hizalama olmadan bozuldu |

'topla', ortak hizalama noktası olmayan çeşitli denklemleri işler; her satırı ortalar ve her birini numaralandırır. "split", tek bir sayı altında çok satırlı bir denklem oluşturur ve "denklem"in içinde yer almalıdır. 'çok satırlı' aşırı uzun bir formülü hizalama olmadan bozar, ilk satır sola ve son satır sağa hizalanır. Son ikisi [uymayacak denklemler](/learn/break-long-equations/) bölümünde ayrıntılı olarak ele alınmaktadır.

Hangisinin kullanılacağına iki soru karar verir: çizgiler ayrı denklemler mi yoksa bozuk bir denklem mi ve istiflenmeye değer bir hizalama noktası var mı? Ayırın ve hizalayın: "hizala". Ayrı ve ortalanmış: 'toplamak'. Tek ve hizalanmış: "bölünmüş". Tek ve hizalanmamış: 'çok satırlı'.

## Yaygın hatalar

'&' içermeyen bir satır yine de derlenir, ancak bağımsız olarak ortalanır ve hiçbir şey hizalanmaz. Bir satırdaki iki "&", ikinci bir sütun çiftini başlatır; bu "hizalama", yan yana ayarlanmış ikinci bir denklem sütunu olarak okunur; çıktınızda sağa doğru ilerleyen denklemler varsa, ve işaretlerinizi sayın. Son satırın sonundaki `\\` bloğun altında tek dikey boşluk olarak görünen boş bir satır ekler. Hizalamanın bir araya gelmesini izlemek için [canlı oyun alanına](/live/) üç adımlı bir türetme yazın.