---

title: "Limity stron bez przestępstw typograficznych"
description: "Legalne sposoby przekraczania limitu, hacki, które powodują oznaczanie dokumentów i dlaczego miejsca to sprawdzają."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Limity stron bez przestępstw typograficznych

Twoja praca ma 10,4 strony. Limit wynosi 10. Od tego, co stanie się w ciągu następnej godziny, zależy, czy poprawisz artykuł, czy dopuścisz się naruszenia formatowania, które spowoduje odrzucenie go z biurka.

## Ściśnij treść, a nie format

Pracuj nad tą listą w odpowiedniej kolejności. Każdy krok jest niewidoczny przy formatowaniu warcabów, ponieważ zmienia papier, a nie szablon.

1. **Najpierw doprecyzuj prozę.** Pół strony nadmiaru to zwykle rozwlekła sekcja poświęcona pracy i trzy zbędne zdania przejściowe. Wycinanie słów poprawia jakość papieru. Cięcie białych znaków nie.
2. **Polowanie na wdowy.** Akapit, którego ostatnia linijka zawiera jedno lub dwa słowa, marnuje całą linię. Przepisanie jednego zdania w tym akapicie przywraca je.
3. **Zmień rozmiar cyfr szczerze.** Wiele figurek ma ogromne marginesy wewnętrzne. Przytnij białe znaki w samym rysunku lub upuść dwukolumnową figurę do jednej kolumny, jeśli pozostanie czytelna.
4. **Smukłe stoły.** Tabele `booktabs` bez pionowych linii są bardziej zwarte i wyglądają lepiej, zobacz [piękne stoły](/learn/booktabs-beautiful/), a skrócone nagłówki kolumn kupują rzeczywistą szerokość.
5. **Używaj rysunków wektorowych.** Wykresy PDF są wyraźnie zmniejszane, dzięki czemu można je zmniejszyć bardziej niż pikselowane pliki PNG, zanim zmniejszy się ich czytelność. Rozmyte figury rastrowe mają swoje własne problemy, zobacz [rozmyte czcionki w plikach PDF](/learn/fuzzy-font-pdf/).
6. **Przenieś materiał do załącznika lub suplementu,** jeśli miejsce na to pozwala. Dowody, dodatkowe ablacje i tabele hiperparametrów są klasycznymi kandydatami do przepełnienia. Sprawdź czy dodatek wlicza się do limitu, wiele obiektów go wyklucza, inne nie.

## Zbrodnie

Zmieniają one szablon zamiast papieru. Komitety programowe uruchamiają automatyczne sprawdzanie formatu właśnie dlatego, że ludzie je wypróbowują:

| Przestępczość | Jak zostaje złapany |
|---|---|
| `\vspace{-8pt}` posypane wszędzie | Widocznie ciasne odstępy, różnice w stosunku do domyślnych klas |
| `\usepackage[margin=...]{geometria}` | Automatyczny pomiar marży |
| Zmniejszanie `\baselinestretch` lub rozmiaru czcionki | Liczba wierszy na kolumnę, sondy dotyczące rozmiaru czcionki |
| `\small` lub `\footnotesize` w tekście głównym lub podpisach | Sondy rozmiaru czcionki, gałki oczne recenzenta |
| Ujemne `\itemsep`, listy pokruszone | Ciasny wygląd, heurystyka sprawdzania |
| Zmiana nazwy pliku klasy z zmianami w środku | Suma kontrolna względem oficjalnej klasy |

## Dlaczego miejsca faktycznie to sprawdzają

Limit stron to umowa o uczciwości: każdy autor otrzymuje tę samą przestrzeń, a każdy recenzent zobowiązuje się do przeczytania ograniczonej ilości stron. Artykuł, który oszukuje, aby uzyskać 10 stron, jest w rzeczywistości 11-stronicowym artykułem konkurującym z uczciwymi 10-stronicowymi artykułami. Dlatego też naruszenia traktuje się jako kwestię uczciwości, a nie kwestię stylu. Wiele miejsc jest odrzucanych bez recenzji i nie ma odwołania mówiącego „ale treść była dobra”.

## Uczciwa ostateczność

Jeżeli ujędrniłeś prozę, odchudziłeś pływaki, przeniosłeś próbki do załącznika i nadal jesteś skończony: wytnij wynik. Bolesne, ale skupiona 10-stronicowa recenzja i tak jest lepsza niż ta przepełniona. Recenzenci mogą wyczuć gęstość i [wybór miejsca](/learn/choose-your-venue/) w dłuższym formacie jest zawsze opcją przy następnym zgłoszeniu.