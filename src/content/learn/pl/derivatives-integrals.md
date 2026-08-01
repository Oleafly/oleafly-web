---

title: "Pochodne i całki"
description: "Pochodne zwyczajne i cząstkowe, całki oznaczone, cienkie przestrzenie przed różniczkami."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Pochodne i całki

Notacja rachunku różniczkowego to miejsce, w którym LaTeX zaczyna na siebie zarabiać. Ułamki pochodne skumulowane, znaki całkowe z granicami i kropki nad zmiennymi to jedno lub dwa polecenia. W tej lekcji omówimy kilka poleceń, które dają prawie każdą pochodną i całkę, jaką kiedykolwiek napiszesz, a także nawyk małych odstępów, który oddziela wypolerowany papier od szorstkich szkiców.

## Instrumenty pochodne

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Zwykła pochodna to tylko ułamek: `\frac{dy}{dx}` układa `dy` nad `dx`. W przypadku pochodnych cząstkowych zamień `d` na `\partial`, co spowoduje wypisanie częściowego symbolu kręconego; `\frac{\partial f}{\partial x}` jest formą standardową. Części składowe wyższego rzędu mają ten sam wzór, na przykład `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` daje symbol gradientu, a ponieważ jest to zwykły symbol, możesz go podnieść jak wszystko inne: `\nabla^2 f` dla Laplaciana. W przypadku zapisu zwartego „f”(x)” używa bezpośrednio klawisza apostrofu, a LaTeX konwertuje jeden lub więcej znaków „” na odpowiednio podniesione liczby pierwsze. Zapis kropkowy Newtona dla pochodnych czasu pochodzi z poleceń akcentujących `\dot{x}` i `\ddot{x}`, które umieszczają jedną lub dwie kropki nad argumentem.

Wybór jednego stylu: niektóre czasopisma chcą, aby różnica `d` była zapisana pionowo `\mathrm{d}`. Jeśli tak, zdefiniuj `\newcommand{\dd}{\mathrm{d}}` raz w preambule i napisz `\frac{\dd y}{\dd x}`, aby móc później zmienić wybór.

## Całki

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` jest znakiem całki, a znana składnia indeksu dolnego i górnego dołącza granice: `_a` dla dolnej granicy, `^b` dla górnej. W matematyce wbudowanej granice znajdują się obok znaku, aby linia była zwarta; w matematyce wyświetlającej nadal znajdują się obok znaku całek (w przeciwieństwie do sum), co jest standardową konwencją. Całki podwójne i potrójne otrzymują własne polecenia, `\iint` i `\iiint`, które prawidłowo rozdzielają powtarzające się znaki, wraz z `\oint` dla całek konturowych.

`\,` przed `dx` to cienka spacja. Bez tego „f(x)dx” wprowadza całkę prosto do mechanizmu różnicowego i oko musi je rozplątać. Cienka przestrzeń jest powszechnie stosowaną konwencją, więc wyrób sobie nawyk: całka, potem `\,`, a na końcu różnica.

## Wypróbuj i częsty błąd

Te fragmenty są renderowane podczas wpisywania w [żywym placu zabaw](/live/), co pozwala szybko sprawdzić stos pochodny, zanim trafi on do dokumentu; zobacz [podstawy trybu matematycznego](/learn/math-mode/), jeśli ograniczniki `$` i `\[` są wciąż nowe.

Najczęstszym błędem jest wpisywanie pochodnych w stylu `d/dx` z ukośnikiem w matematyce wyświetlania tam, gdzie potrzebny był skumulowany `\frac` lub zapominanie o nawiasach klamrowych w przypadku limitów wieloznakowych: `\int_a^b+1` umieszcza tylko `b` w indeksie górnym. Napisz `\int_a^{b+1}`, aby całe wyrażenie zostało podniesione.