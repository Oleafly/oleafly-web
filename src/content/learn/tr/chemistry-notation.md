---

title: "Kimyasal formüller ve yapılar"
description: "mhchem reaksiyonları ve bir chemfig taslağı."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Kimyasal formüller ve yapılar

Kimyasal gösterim LaTeX'in varsayılanlarıyla savaşır. Matematik modu, öğe sembollerini sanki değişkenlermiş gibi italik hale getirir ve metin modunda hiçbir alt simge yoktur. İki paket işi bölüyor. 'mhchem' formülleri ve reaksiyonları basit bir kimyacının notasyonuna göre diziyor ve 'chemfig' yapısal diyagramlar çiziyor.

## mhchem ile formüller ve reaksiyonlar

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

'Versiyon=4' seçeneği geçerli sözdizimini seçer. Kimyasal olan her şey, içeriğini bir kimyagerin yazdığı şekilde okuyan '\ce{...}' içine girer. `\ce{H2O}`da 2 otomatik olarak bir alt simge haline gelir ve öğe sembolleri, geleneğin gerektirdiği gibi dik kalır. Reaksiyonda, '+' uygun aralıklarla yerleştirilir, '->' bir reaksiyon oku haline gelir ve CO'dan önceki 2 stokiyometrik bir katsayı olarak tanınır, böylece taban çizgisinde tam boyutta kalır.

Aynı gösterim ölçeklenir. Yükler üst simge olarak hareket eder, dolayısıyla '\ce{SO4^2-}' 2- yüküyle sülfat verir. Maddenin halleri '\ce{H2O(l)}'de olduğu gibi parantez içinde eklenir; denge okları `<=>` yazılır; ve "\ce{^{14}C}" sembolün önüne bir izotop numarası yerleştirir. '\ce' hem metin hem de matematik modunda çalışır, böylece bir formül hiçbir ekstra sınırlayıcı olmadan cümle içinde yer alabilir.

## Chemfig içeren yapılar

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` yapıları kompakt bir doğrusal koddan çizer. Atomlar sembolleri olarak yazılır ve '-' bir sonraki atoma bir bağ çizer. Parantez içindeki sayı bağın yönünü doğudan saat yönünün tersine 45 derecelik adımlarla belirler: "[2]" düz yukarıyı ve "[6]" düz aşağıyı gösterir. Parantezler mevcut atomdan dallar açar, böylece ana zincir sağa doğru devam ederken 'C(-[2]H)(-[6]H)' bir hidrojeni yukarıya ve bir aşağı doğru büyütür. Örnek düz çizilmiş metandır: dört hidrojene bağlı merkezi bir karbon. Çift ve üçlü bağlar '=' ve '~' olarak yazılır ve siklik ve aromatik yapılar için özel bir halka sözdizimi vardır.

## Pratik notlar

İki aleti kendi şeritlerinde tutun. Formül veya denklem olarak soldan sağa okunan herhangi bir şey için "mhchem"i, molekülün geometrisi nokta olduğunda "chemfig"i kullanın. Her ikisi de standart bir LaTeX motoruyla derlenir ve harici çizim programı gerektirmez.

Başlangıç ​​düzeyindeki olağan hata, formülleri basit matematik modunda yazmaktır. `$H_2O$` derlenir, ancak H ve O'yu değişkenler gibi italik olarak ayarlar; bu da geleneksel olarak yanlıştır. `\ce{H2O}` daha az yazımla dik formu üretir. Her iki paketi de [canlı oyun alanında](/live/) deneyebilirsiniz.