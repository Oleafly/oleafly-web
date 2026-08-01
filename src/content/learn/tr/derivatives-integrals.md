---

title: "Türevler ve integraller"
description: "Adi ve kısmi türevler, belirli integraller, diferansiyellerden önceki ince uzaylar."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Türevler ve integraller

Matematik notasyonu, LaTeX'in geçimini sağlamaya başladığı yerdir. Yığılmış türev kesirleri, limitli integral işaretleri ve değişkenlerin üzerindeki noktaların her biri bir veya iki komuttur. Bu ders, yazacağınız hemen hemen her türev ve integrali üreten bir avuç komutun yanı sıra cilalı kağıtları kaba taslaklardan ayıran küçük aralık alışkanlığını kapsar.

## Türevler

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Sıradan bir türev sadece bir kesirdir: `\frac{dy}{dx}` `dy`yi `dx` üzerine yığar. Kısmi türevler için, 'd'yi '\partial' ile değiştirin, bu da kıvırcık kısmi sembolü yazdırır; `\frac{\partial f}{\partial x}` standart biçimdir. Yüksek dereceli kısmiler aynı modeli izler; örneğin `\frac{\partial^2 f}{\partial x \partial y}`.

'\nabla' degrade sembolünü verir ve sıradan bir sembol olduğu için onu herhangi bir şey gibi yükseltebilirsiniz: Laplace için '\nabla^2 f'. Kompakt gösterim için, 'f'(x)' doğrudan kesme işareti anahtarını kullanır ve LaTeX bir veya daha fazla ''' işaretini uygun şekilde yükseltilmiş asal sayılara dönüştürür. Newton'un zaman türevleri için nokta gösterimi, argümanın üzerine bir veya iki nokta yerleştiren `\dot{x}` ve `\ddot{x}` vurgu komutlarından gelir.

Tek stil seçeneği: bazı dergiler "d" diferansiyelinin "\mathrm{d}" şeklinde yazılmasını ister. Sizinki böyleyse, girişte `\newcommand{\dd}{\mathrm{d}}` ifadesini bir kez tanımlayın ve `\frac{\dd y}{\dd x}` yazın, böylece seçimi daha sonra değiştirebilirsiniz.

## İntegraller

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

'\int' integral işaretidir ve tanıdık alt simge ve üst simge sözdizimi sınırları ekler: alt sınır için '_a', üst sınır için '^b'. Satır içi matematikte, çizgiyi kompakt tutmak için sınırlar işaretin yanında bulunur; ekran matematiğinde hala standart kural olan integral işaretinin yanında (toplamların aksine) duruyorlar. Çift ve üçlü integraller, kontur integralleri için "\oint" ile birlikte tekrarlanan işaretleri doğru şekilde yerleştiren "\iint" ve "\iiint" komutlarını alırlar.

'dx'ten önceki '\,' ince bir alandır. O olmadan, 'f(x)dx' integrali doğrudan diferansiyele yönlendirir ve gözün bunları çözmesi gerekir. İnce uzay yaygın olarak takip edilen bir gelenektir, bu yüzden bunu bir alışkanlık haline getirin: integrand, sonra `\,`, sonra diferansiyel.

## Deneyin ve yaygın bir hata

Bu parçacıklar, siz [canlı oyun alanına](/live/) yazdıkça oluşturulur; bu, türev yığınını bir belgeye girmeden önce kontrol etmenin hızlı bir yoludur; `$` ve `\[` sınırlayıcıları hâlâ yeniyse [matematik modu temelleri](/learn/math-mode/) konusuna bakın.

Buradaki en yaygın hata, yığılmış bir "\frac" istendiğinde ekran matematiğinde "d/dx" tarzı türevleri eğik çizgiyle yazmak veya çoklu karakter sınırlarında parantezleri unutmak: "\int_a^b+1" üst simgeye yalnızca "b"yi koyar. İfadenin tamamının yükseltilmesi için `\int_a^{b+1}' yazın.