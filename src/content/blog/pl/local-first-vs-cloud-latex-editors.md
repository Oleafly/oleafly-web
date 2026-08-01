---

title: "Edytory lokalne a edytory LaTeX w chmurze: czym właściwie handlujesz"
description: "Redaktorzy Cloud LaTeX zamieniają własność na wygodę. Local-first oznacza pliki na dysku, prawdziwy edytor badań, prawdziwy Git, pracę w trybie offline i sieć tylko dla działań, które wykonujesz, plus to, co nadal należy do przeglądarki."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Redaktorzy Cloud LaTeX wygrali z prostego powodu: zerowej konfiguracji. Otwórz kartę, skompiluj.
Przez lata był to najłatwiejszy sposób na walkę z dystrybucją TeX-a na platformie
laptopa i wiele osób nadal go preferuje.

Jednak w przypadku większości dokumentów konfiguracja nie jest już trudną częścią. Silniki jak
Tectonic może wysyłać pliki w aplikacji komputerowej i pobierać pakiety na żądanie, tzw
instalacja i kompilacja to mniej więcej czas potrzebny na utworzenie konta w chmurze. The
pytanie, które warto zadać, brzmi: co nadal kupuje Ci subskrypcja i co
oddać za to.

## Z czego rezygnujesz w chmurze

Twój rękopis znajduje się w bazie danych innej osoby. Eksport zwykle działa, dopóki
plany się zmieniają, firma zostaje przejęta lub funkcja znika, podczas gdy Twój
termin pozostaje niezmieniony.

Szyfrowanie w stanie spoczynku powstrzymuje osoby z zewnątrz. Sama usługa nadal może zobaczyć
projekty, granty i niepublikowane wyniki, które przechodzą przez jego infrastrukturę.

Opóźnienie to kolejny cichy koszt. Naciśnięcie klawisza na Twoim komputerze jest prawie zakończone
zawsze szybciej. Kolejki kompilacji i limity czasu w warstwie bezpłatnej pojawiają się tylko wtedy, gdy
konstrukcja nie jest twoja.

Offline to kolejna luka. W samolocie, w piwnicy szpitala lub w bezpiecznym miejscu
laboratorium bez otwartej sieci, edytor przeglądarki to tylko pusta karta.

Niektórzy redaktorzy hostowani umieszczają także pełną historię, śledzą zmiany lub synchronizują Git/GitHub
za płatnymi poziomami. Lokalnego Gita nie obchodzi, który plan kupiłeś.

## Jakie zmiany lokalne

Projekty to zwykłe pliki w folderze, który można otworzyć. Historia może być prawdziwa. Daj mi to
sprawdzić z dowolnego terminala. Kompilacja działa na twoim procesorze bez kolejki. Twoje pliki
i historia Git nie zależą od tego, czy konto dostawcy działa prawidłowo.

Narzędzia przeglądarki nadal wygrywają z pisaniem na żywo przez wielu użytkowników. Dużo badań
tygodnie wyglądają inaczej: solo draft, podróże, ograniczone sieci, braki
własności lub potrzeba pełnego edytora dokumentów, który indeksuje cały projekt.
Laboratoria już rozgałęziają się i otwierają żądania ściągnięcia kodu. Papiery mogą używać tego samego
wzór asynchroniczny dla współautorów, którzy nie muszą udostępniać kursora.

## Sieć nadal działa (celowo)

Lokalne narzędzia nadal sięgają po pakiety pierwszego użycia, pakiety szablonów i cytaty
metadane, hostowana sztuczna inteligencja, jeśli ją włączysz, piloty Git i aktualizacje. Rzecz w tym, że
ustawienie domyślne: kompilacje robocze i buforowane pozostają na dysku.

Projekty, metadane, kompilacje i historia Git są dostępne lokalnie. Sieć działa, gdy
podejmujesz działanie, które tego potrzebuje. Edycja i kompilacja w pamięci podręcznej powinny działać
nieaktywny. Wklej DOI lub włącz model chmurowy, a żądania zostaną wysłane tam, gdzie Ty
wycelował w nie. Powiedz to wyraźnie w każdym piśmie dotyczącym prywatności, zamiast udawać
sieć nigdy się nie zdarza.

## Stos wokół papieru

Tydzień badawczy prawie nigdy nie jest „tylko redaktorem”. Zwykle jest to mieszanka:

- środowisko pisania z prawdziwą inteligencją projektową
- Dystrybucja TeX-a i utrzymanie pakietów
- Przeglądarka plików PDF z SyncTeX
- Klient Git i zdalny host
- higiena wyszukiwania cytowań i bibliografii
- narzędzia gramatyczne i ortograficzne
- schemat lub rysunek rurociągu
- terminy i inne narzędzia poboczne

Lokalna przestrzeń robocza do celów badawczych jest przydatna, gdy elementy te znajdują się w tym samym miejscu
projekt w zwykłym folderze: edytor obsługujący projekt (referencje, cytaty, makra, struktura,
podgląd matematyki, sprawdzanie offline), nadzorowana kompilacja, obszar roboczy PDF z
nieaktualny SyncTeX, automatyczne punkty kontrolne Git, import i eksport, inspekcja wstępna
przed przesłaniem, opcjonalny agent, który musi pokazywać różnice.

## Gdzie pasuje Oleafly

[Oleafly](https://github.com/Oleafly/Oleafly) jest stworzony dla tej kategorii: bezpłatny,
Przestrzeń robocza typu open source dla LaTeX, Typst i Markdown. W zestawie
kompilatory. Biblioteka projektów z forkiem i wyszukiwaniem. Edytor całego projektu
inteligencja (definicja, odniesienia, zmiana nazwy, weryfikacja ref/cytowań na żywo, struktura
widoki, makra z kształtami argumentów, TexLab/Tinymist, jeśli są dostępne). Na żywo
zapowiedzi matematyczne. Offline Harper i Hunspell tylko w prozie. Zintegrowany plik PDF z
dwukierunkowy SyncTeX, który nadal mapuje podczas oczekiwania na przebudowę. Prawdziwy Git z
automatyczne punkty kontrolne i opcjonalny GitHub. Wyszukaj i wklej cytaty. Schemat
Kompozytor do edytowalnego TikZ. Lot wstępny. Opcjonalna sztuczna inteligencja z bramką zatwierdzenia z Twoim kluczem
lub lokalna Ollama.

[Strona prywatności](/privacy/) celowo jest krótka: brak konta Oleafly, brak
telemetria produktu. Wersje robocze są dostępne na Twoim komputerze. Hostowana sztuczna inteligencja, wyszukiwanie cytatów i
GitHub rozmawia z tymi usługami zgodnie z ich zasadami, za pomocą swoich kluczy i danych
działania.

Jeśli chcesz posmakować bez instalacji, [bezpłatna przeglądarka
narzędzia](/tools/) uruchamiane po stronie klienta. Aplikacja komputerowa to miejsce, w którym inteligencja,
kompilacja, historia i drzewo projektu faktycznie się spotykają.

## Kiedy chmura nadal zwycięża

Pozostań w przeglądarce, gdy produktem jest współtworzenie w czasie rzeczywistym, gdy a
współpracownik nie będzie niczego instalował, lub gdy Twoja instytucja już
standaryzowane w edytorze hostowanym w celu przesłania.

Dopasuj narzędzie do tygodnia, który faktycznie posiadasz. Jeśli potrzebujesz żyć dla wielu użytkowników
podczas pisania, pozostań w przeglądarce (lub użyj Git, jeśli współautorzy mogą pracować asynchronicznie). Jeśli ty
bardziej dbasz o własność, głębię offline i pełny lokalny edytor badań,
zachowaj rękopis jako pliki na dysku, utwórz plik PDF na swoim komputerze i zachowaj
history w repozytorium, które może otworzyć dowolne narzędzie Git.