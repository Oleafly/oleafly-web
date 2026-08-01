---

title: "Odkryj linie po kliknięciu"
description: "Nakładaj specyfikacje, tylko pauzuj, bez przesadzania."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Odsłoń linie po kliknięciu

Ramka Beamer może składać się z więcej niż jednego fizycznego slajdu. Kiedy odsłaniasz wypunktowania pojedynczo, Beamer generuje kilka stron PDF z tej samej ramki, a każda z nich wyświetla nieco więcej. Przechodzenie przez nie w przeglądarce plików PDF. Te wygenerowane strony nazywane są nakładkami. Nauka ich kontrolowania zmienia statyczną talię w dynamiczną rozmowę.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Specyfikacje nakładki

Notacja w nawiasie ostrokątnym po `\item` jest specyfikacją nakładki. Określa, na jakich nakładkach ramki widoczny jest dany element. Liczba jest indeksem nakładki w tej ramce, a łącznik tworzy zakres: „<2->” oznacza od nakładki 2 wzwyż, więc element pojawia się w drugim kroku i pozostaje. Puste „<2>” oznaczałoby tylko nakładkę 2, więc element pojawiałby się, a następnie znikał. Możesz także podać listy takie jak `<1,3>`. Beamer tworzy tyle nakładek, ile jest podanej największej liczby, więc powyższa ramka tworzy trzy strony PDF.

Specyfikacje nakładek dotyczą nie tylko przedmiotów. `\textbf<2->{key term}` pogrubia tekst począwszy od nakładki 2, a `\only<2>{...}` uwzględnia jego zawartość wyłącznie na nakładce 2. Ponieważ `\only` usuwa całkowicie zawartość innych nakładek, otaczający układ zmienia się, co czyni go narzędziem do zastępowania jednej figury inną w tym samym miejscu: nadaj dwóm `\tylko` blokom tę samą pozycję i kolejne specyfikacje. Jego kuzyn „\uncover” rezerwuje przestrzeń, ukrywając zawartość, więc nic się nie przesuwa.

## Prostsze narzędzie

`\pauza` dzieli klatkę w tym miejscu. Wszystko przed nim pokazuje się od razu, wszystko po czeka na kolejny krok, a powtarzane komendy `\pause` tworzą kolejne kroki. Nie wymaga numeracji ani planowania, jest więc właściwym rozwiązaniem domyślnym w przypadku zwykłego boniowania od góry do dołu. Sięgaj po wyraźne specyfikacje tylko wtedy, gdy kolejność ujawniania różni się od kolejności źródłowej lub gdy elementy muszą się pojawiać i znikać.

Przydatnym skrótem, gdy każdy element na liście ma być uporządkowany, jest `\begin{itemize}[<+->]`, które automatycznie przypisuje rosnące numery nakładek.

## Powściągliwość

Nakładki łatwo można nadużywać. Talia, w której każdy punkt na każdym slajdzie klika pojedynczo, wyczerpuje prezentera (ciągłe klikanie) i publiczność (bez czytania z wyprzedzeniem). Rezerwowe ujawnianie informacji schodkowych w kilku miejscach, w których tempo niesie ze sobą argument, na przykład budowanie wyprowadzenia lub kontrastowanie przed i po. Każda nakładka jest prawdziwą stroną PDF, więc materiały informacyjne kopiują dymki, chyba że skompilujesz je za pomocą `\documentclass[handout]{beamer}`, który zwija każdą klatkę do ostatecznej nakładki. Podstawy ram są omówione w [pierwszym decku Beamer](/learn/beamer-basics/).