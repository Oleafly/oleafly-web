---

title: "Podaj modelowi swoją tabelę symboli"
description: "Makra i krótka lista notacji, dzięki czemu zmienne pozostają stabilne."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Podaj modelowi swoją tablicę symboli

Poproś modela o napisanie lub poprawienie tekstu matematycznego, a proza ​​zwykle wychodzi dobrze, podczas gdy notacja dryfuje. Twój wektor `\vect{x}` zwraca się jako `\mathbf{x}` w jednym akapicie i `\vec{x}` w innym. Oczekiwanie, które zapiszesz jako `\E[X]`, wróci jako `\mathbb{E}(X)`. Każdy wariant się kompiluje, więc nie ma żadnych błędów. Niespójność pojawia się dopiero wtedy, gdy czytelnik zauważy ten sam obiekt zapisany na trzy różne sposoby. W modelu uwzględniono każdą istniejącą konwencję notacji i, bez instrukcji, próbki z nich wszystkich. Przekaż to wyraźnie.

## Makra umożliwiają egzekwowanie zapisów

Podstawy są niezależne od sztucznej inteligencji i i tak warto je wykonać: kieruj każdy powtarzający się symbol przez makro, tak aby źródło mówiło `\vect{x}`, a nie surowe `\boldsymbol{x}`. To nadaje każdej koncepcji jedną nazwę, pozwala zmienić styl całego artykułu poprzez edycję jednej definicji i zapewnia modelowi niewielkie słownictwo, którego można się trzymać zamiast wymyślać warianty. Definiowanie makr opisano w [Poleceniach niestandardowych](/learn/custom-commands/).

## Co wkleić do zachęty

Do aktualnej prośby dołącz zwarty blok notacji: definicje makr plus jeden komentarz w każdym wierszu informujący, do czego służą poszczególne makra.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Następnie bezpośrednio określ ograniczenie: „Używaj tylko tych makr dla tych pojęć. Nie wprowadzaj nowej notacji dla niczego wymienionego, a jeśli potrzebujesz symbolu, którego nie ma na liście, powiedz to, zamiast go wymyślać”. Modele kierują się konkretnymi, sprawdzalnymi instrukcjami o wiele lepiej niż niejasnym „pasują do mojego stylu”. W przypadku pełnego artykułu umieść blok jako krótki komentarz w notacji obok preambuły, aby był aktualny i gotowy do wklejenia.

## Sprawdź mechanicznie

Warstwa makro sprawia, że ​​sprawdzanie jest tanie. Jeśli każdy wektor musi mieć wartość `\vect{...}`, dowolne surowe `\mathbf{` lub `\vec{` w wynikach modelu stanowi naruszenie, które można znaleźć, przeszukując tekst, zamiast ponownie czytać obliczenia. Przeprowadź wyszukiwanie nad wszystkim, co wkleisz, popraw błędy, a zapis pozostanie jednolity, niezależnie od tego, ile edycji wspomaganych modelem pojawi się w artykule.

## Wewnątrz Oleafly

[Asystent w Oleafly](/learn/oleafly-ai/) czyta pliki projektu, w tym preambułę, w której znajdują się Twoje makra, więc zwykle pobiera zdefiniowane polecenia bez polecenia. Wyraźna instrukcja nadal jest pomocna: zobaczenie istnienia makra jest słabsze niż powiedzenie mu, że jest ono obowiązkowe. Dodaj jedną linię do swojej prośby („użyj makr notacji z preambuły”) i przejrzyj różnicę między kolorem czerwonym/zielonym, zanim wprowadzone zostaną zmiany. To utrzymuje dryf poza źródłem.