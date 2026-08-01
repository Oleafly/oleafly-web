---

title: "Typ większy i mniejszy"
description: "Opcje klas, takie jak 11 punktów i przełączniki rozmiaru lokalnego, które nie niszczą odstępów między wierszami."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Większy i mniejszy typ

Rozmiar czcionki w LaTeX-u jest ustawiany na dwóch poziomach: podstawowy rozmiar całego dokumentu wybrany raz w opcjach klasy oraz lokalne przełączniki dla zakresów, które muszą się różnić. Rozmiar podstawowy napędza wszystko inne. Nagłówki, przypisy i rozmiary lokalne są definiowane w odniesieniu do nich.

## W całym dokumencie

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

Opcja class ustawia rozmiar tekstu podstawowego. „10pt” jest wartością domyślną, a „11pt” i „12pt” są częstymi alternatywami; klasy standardowe obsługują tylko te trzy. Zmiana tej opcji powoduje proporcjonalne przeskalowanie całego dokumentu, ponieważ rozmiary nagłówków, rozmiary przypisów i odstępy między wierszami zależą od podstawy. Jeśli potrzebujesz rozmiaru bazowego przekraczającego 12 punktów, klasy takie jak `extarticle` lub klasy KOMA-Script oferują szerszy zakres opcji.

## Przełączniki lokalne

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Są to raczej deklaracje niż polecenia z argumentami: `\large` zmienia rozmiar od tego momentu aż do końca bieżącej grupy, a nawiasy klamrowe wokół `{\large większy}` ograniczają jego zasięg. Pełna drabina, od najmniejszej do największej, to `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Każdy krok jest odwzorowywany na konkretny rozmiar zależny od opcji klasy, więc `\large` pod `12pt` jest większe niż `\large` pod `10pt`. Pomyśl o przełącznikach jak o kilka kroków od tekstu głównego, a nie o stałych rozmiarach.

Odstępy między wierszami mają jedną subtelność. Przełącznik rozmiaru dostosowuje odległość linii bazowej tylko dla akapitów, które kończą się, gdy jest aktywny. Aby uzyskać większy rozmiar składający się z wielu akapitów, należy zachować podział akapitu wewnątrz grupy, kończąc na `\par` przed nawiasem zamykającym, jak w przypadku `{\large ... \par}`. W przeciwnym razie w ostatnim akapicie zachowane zostaną normalne odstępy między wierszami pod zbyt dużymi literami, a linie będą się kolidować.

## Rozmiary a struktura

Nie używaj przełączników rozmiaru do fałszywych nagłówków. `\Sekcja` i jej odpowiedniki ustalają rozmiar za Ciebie, numerują także nagłówek, dodają go do spisu treści i tworzą zakładki PDF. Ręcznie zbudowana linia `{\Large \textbf{...}}` nic takiego nie daje. Ten sam pomysł dotyczy podkreślenia ujętego w [podkreśleniu bez walki z czcionką](/learn/bold-italic/). Rezerwuj ręczne przełączniki rozmiaru dla naprawdę lokalnych potrzeb, takich jak uwaga wielkości przypisu pod tabelą lub wiersz na stronie tytułowej. Jeśli każdy nagłówek w dokumencie wymaga zmiany stylu, zmień klasę lub użyj pakietu takiego jak `titlesec` zamiast ręcznie zmieniać rozmiar każdego nagłówka.