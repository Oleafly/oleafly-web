---

title: "Dlaczego kompilujesz więcej niż raz"
description: "Pliki Aux, przepustki bibliograficzne i dlaczego drukuje się odniesienia? w pierwszym biegu."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Dlaczego kompilujesz więcej niż raz

Prędzej czy później skompilujesz dokument, otworzysz plik PDF i znajdziesz „?” w miejscu, w którym powinien znajdować się numer ryciny lub cytat. Nic nie jest zepsute. Pojedyncza kompilacja to jedno przejście pliku, a niektórych informacji naprawdę nie można poznać w jednym przebiegu.

Oto problem w miniaturze. Na stronie 2 piszesz „zobacz rysunek \ref{fig:results}”, ale figura ta ląduje na stronie 7. Kiedy silnik pisze stronę 2, nie osiągnął jeszcze strony 7, więc nie ma pojęcia, jaki numer otrzyma figura. To samo dotyczy spisu treści, który wymaga podania numeru strony każdej sekcji, zanim strona pierwsza zostanie ukończona.

## Jak silnik to rozwiązuje

Silnik LaTeX odczytuje plik `.tex`, rozpoznaje każde makro i zapisuje plik PDF. Oprócz pliku PDF zapisuje także małe pliki pomocnicze: `.aux` dla etykiet i cytatów, `.toc` dla spisu treści, `.bbl` dla sformatowanej bibliografii. Pliki te to notatki, które silnik pozostawia dla siebie w przyszłości.

1. Przy pierwszym przebiegu silnik składa twój tekst i zapisuje wszystkie napotkane `\label` i `\cite` do pliku `.aux`, wyświetlając `??` tam, gdzie potrzebuje numeru, którego jeszcze nie zna.
2. Jeśli cokolwiek cytujesz, narzędzie bibliograficzne (bibtex lub biber) odczytuje plik `.aux`, wyszukuje każdy cytat w bazie danych `.bib` i zapisuje sformatowaną listę referencyjną do pliku `.bbl`.
3. Przy drugim, a czasami trzecim przebiegu, silnik ponownie wczytuje te pliki pomocnicze, dzięki czemu odsyłacze, wpisy w spisie treści i etykiety cytatów ostatecznie przekształcają się w liczby rzeczywiste.

Nowoczesne konfiguracje uruchamiają te przepustki automatycznie, więc w praktyce rzadko wpisujesz polecenia samodzielnie. Ale znajomość cyklu wyjaśnia symptom: świeże „?” po dodaniu etykiety lub cytatu oznacza po prostu, że pliki pomocnicze jeszcze nie nadrobiły zaległości i kolejna kompilacja to naprawia.

## Silniki w jednej linii każdy

Rolę „silnika” może pełnić kilka programów. pdfLaTeX to klasyczny wybór z najszerszą obsługą czasopism. XeLaTeX dodaje pełny Unicode i pozwala używać czcionek zainstalowanych w systemie. LuaLaTeX obsługuje również Unicode i osadza język skryptowy dla zaawansowanych pakietów. Tectonic to nowoczesny silnik, który pobiera pakiety na żądanie, gdy są potrzebne po raz pierwszy. Oleafly pakuje go w pakiety, dzięki czemu nowy projekt kompiluje się bez wcześniejszej instalacji dystrybucji TeX-a.

W przypadku większości dokumentów różnice nie mają większego znaczenia; wybierz cokolwiek oczekuje Twój szablon lub miejsce i przejdź dalej. Zobacz [porównanie silników](/learn/porównanie silników/), jeśli musisz dokonać świadomego wyboru.

## Kiedy coś faktycznie się nie powiedzie

Nieudana kompilacja powoduje zrzucenie długiego dziennika i naturalnym odruchem jest przeczytanie go od dołu do góry. Sprzyj temu. Przeczytaj pierwszy błąd w logu i napraw tylko ten; późniejsze błędy są bardzo często szumem kaskadowym spowodowanym pierwszym. Jeśli odniesienia nadal wypisują „???” po dwóch kolejnych udanych kompilacjach, częstym winowajcą jest literówka w nazwie `\label` lub `\ref`, a nie brakujący przebieg.