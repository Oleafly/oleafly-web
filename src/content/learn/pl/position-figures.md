---

title: "Gdzie pływaki faktycznie lądują"
description: "htbp, dlatego wymuszenie tutaj często zawodzi, przybliżając środowisko do tekstu."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Gdzie faktycznie lądują pływaki

Rysunki i tabele w LaTeX-ie to liczby zmiennoprzecinkowe, co oznacza, że ​​pozycja kodu w źródle jest sugestią, a nie instrukcją. LaTeX przesuwa elementy pływające, aby strony były równomiernie wypełnione, aby uniknąć w połowie pustych stron i przestrzegać ograniczeń typograficznych, takich jak wielkość strony, jaką mogą stanowić obrazy. Jest to największy szok kulturowy wywołany edytorem tekstu, a zrozumienie systemu rozmieszczania pozwala zaoszczędzić wiele godzin walki z nim.

## Co oznacza htbp

Każde środowisko typu float pobiera opcjonalną listę argumentów, w której LaTeX może je umieścić:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Każda litera jest pozwoleniem. `h` pozwala na użycie pływaka „tutaj” w miejscu tekstu, w którym pojawia się kod. `t` pozwala na górę strony, `b` pozwala na dół strony, a `p` pozwala na wydzieloną stronę pływającą zawierającą tylko rysunki i tabele. LaTeX ocenia je mniej więcej w tej kolejności dla każdej tworzonej strony, wybierając pierwsze miejsce, które spełnia wewnętrzne zasady dotyczące odstępów i równowagi stron. Litery zapewniają opcje, a nie wyrażają rankingowe życzenia, więc wypisanie wszystkich czterech daje LaTeXowi najwięcej miejsca na umieszczenie pływaka w bliskim i rozsądnym miejscu. Jeśli całkowicie pominiesz argument, wartością domyślną będzie `[tbp]`, bez `h` i dlatego naga cyfra tak często przeskakuje na górę następnej strony.

## Dlaczego zmuszanie „tutaj” przynosi odwrotny skutek

Samo pisanie „[h]” wydaje się oczywistym rozwiązaniem, ale zwykle pogarsza sytuację. Jeśli element zmiennoprzecinkowy nie mieści się na pozostałej przestrzeni bieżącej strony, a „h” jest jedynym zezwoleniem, jakie udzieliłeś, LaTeX nie może umieścić go na tej stronie ani legalnie umieścić na żadnej innej. Zatem przenosi element pływający do przodu, strona po stronie, czekając na miejsce spełniające „h”. Pływaki również muszą być uporządkowane, więc każda następna figurka ustawia się w kolejce za zakleszczoną, a cały stos często wyrzuca się na koniec rozdziału. Dodanie wykrzyknika, jak w „[h!]”, mówi LaTeX-owi, aby złagodził niektóre zasady dotyczące odstępów, ale nie może utworzyć pokoju, który nie istnieje.

## Nawyki, które naprawdę działają

Po pierwsze, zachowaj `[htbp]` jako domyślny i odpuść sobie idealne rozmieszczenie pikseli podczas pisania, ponieważ każdy dodany lub usunięty akapit i tak powoduje przetasowanie stron. Po drugie, umieść środowisko figur w źródle obok akapitu, który po raz pierwszy się do niego odwołuje, ponieważ LaTeX zaczyna szukać domu od tego punktu, a element zmiennoprzecinkowy może przesunąć się później, ale nigdy wcześniej niż jego kod. Po trzecie, napisz swoją prozę, odwołując się do liczb, jak na „Rysunku 3 przedstawia rurociąg”, nigdy „na rysunku poniżej”, aby tekst pozostał poprawny wszędzie tam, gdzie wyląduje pływak.

Jeśli pływak nadal kończy się w miejscu nie do przyjęcia, istnieją silniejsze narzędzia, w tym bariery pływakowe i umiejscowienie „[H]”, opisane w [figurce uciekającej z sekcji](/learn/figure-wrong-position/). Sięgaj po nie pod koniec pisania, gdy tekst jest już stabilny, a nie w trakcie jego redagowania.