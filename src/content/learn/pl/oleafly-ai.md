---

title: "Asystent w Oleafly"
description: "Twój klucz API, kontekst projektu, różnice, zmiany uwzględniające kompilację."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Asystent w Oleafly

Oleafly zawiera asystenta AI, który działa wewnątrz Twojego projektu, a nie w oddzielnym oknie czatu. W przeciwieństwie do wklejania LaTeX-a do ogólnego chatbota, działa on na własnym kluczu API, może odczytać edytowany projekt i wyświetla każdą proponowaną zmianę do zatwierdzenia przed dotknięciem plików.

## Twój klucz, Twój dostawca

Asystent nie wykonuje żadnych połączeń modelowych za pośrednictwem serwerów Oleafly. Podajesz klucz API dla jednego z dziewięciu obsługiwanych dostawców hostowanych lub kierujesz aplikację na lokalną instalację Ollama i korzystasz z modelu działającego na własnym sprzęcie. Żądania przesyłane są z Twojego komputera do skonfigurowanego przez Ciebie dostawcy, zgodnie z jego warunkami, a Ty płacisz dostawcy bezpośrednio według jego stawek. Który model wybrać i jak skonfigurować klucz lub Ollamę, opisano w [Konfiguracja AI](/docs/ai-setup/).

## Co widzi asystent

Kiedy zadajesz pytanie lub prosisz o edycję, asystent działa na mapie Twojego projektu i czyta pliki istotne dla żądania, takie jak edytowany rozdział, preambuła definiująca makra lub plik `.bib` znajdujący się za pytaniem cytowającym. W tym kontekście może odpowiedzieć na pytanie: „dlaczego Rysunek 3 przenosi się na następną stronę” na temat rzeczywistego Rysunku 3 i dlaczego jego zmiany zwykle odpowiadają zapisowi i poleceniom, których już używa Twój dokument.

## Zmiany, które recenzujesz, a nie zmiany, które po prostu się zdarzają

Asystent nigdy nie zapisuje bezpośrednio w Twoich plikach. Proponuje zmiany jako różnicę, z usuniętymi liniami na czerwono i dodanymi liniami na zielono, a ty akceptujesz lub odrzucasz każdą z nich. Zanim jakakolwiek zaakceptowana zmiana zostanie zastosowana, Oleafly rejestruje punkt kontrolny Git, więc stan przed edycją jest zawsze o krok od [historii Git](/docs/git-history/). Usunięcie pliku jest traktowane osobno i zawsze wymaga wyraźnego potwierdzenia, niezależnie od tego, co robi asystent.

## Zamknięcie pętli za pomocą kompilatora

Ponieważ asystent mieszka obok kompilacji, może sprawdzić swoją pracę. Po edycji może wywołać kompilację, przeczytać dziennik i jeśli zmiana miała na celu naprawienie błędu, sprawdzić, czy błąd zniknął. Może także odczytać tekst skompilowanego pliku PDF, dzięki czemu może potwierdzić, że żądana zmiana rzeczywiście pojawia się w wynikach. Modele nadal tworzą błędny LaTeX, więc przeczytaj, co akceptujesz. Zaletą jest to, że zepsute sugestie są zwykle wychwytywane i poprawiane w pętli, a nie przez Ciebie później.

Codzienne mechanizmy są opisane w dokumentach [chat](/docs/ai-chat/) i [edycja inline](/docs/ai-inline-edit/), a [Tydzień pisania w Oleafly](/learn/oleafly-workflow/) pokazuje, gdzie asystent mieści się w pełnej pętli pisania.