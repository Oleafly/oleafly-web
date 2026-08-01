---

title: "Wybierz edytor, który faktycznie otworzysz"
description: "Czego potrzebują początkujący: kompilator, podgląd, SyncTeX i pliki, które pozostają na dysku."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Wybierz edytor, który faktycznie otworzysz

Najlepszy edytor LaTeX dla początkującego nie jest najpotężniejszy. To ten, który przy najmniejszym tarciu przenosi Cię z pustego pliku do skompilowanego pliku PDF. Wczesna kompilacja często ma większe znaczenie niż jakakolwiek pojedyncza funkcja. Cztery funkcje pokrywają wszystko, czego potrzebujesz już pierwszego dnia.

Po pierwsze, kompilacja powinna działać bez ręcznego instalowania wielogigabajtowej dystrybucji TeX-a. Po drugie, chcesz mieć podgląd pliku PDF obok siebie za pomocą SyncTeX, więc kliknięcie pliku PDF powoduje przeskok do pasującej linii źródłowej i z powrotem. Po trzecie, Twoje pliki powinny mieć zwykły plik .tex na dysku, abyś mógł je spakować, wysłać e-mailem lub umieścić w Git bez konieczności eksportowania. Po czwarte, błędy powinny pojawiać się w postaci czytelnych komunikatów, a nie tylko surowego dziennika TeX-owego.

## Realistyczne opcje

| Redaktor | Konfiguracja | Działa w trybie offline | Notatki |
| --- | --- | --- | --- |
| Liściaste | Pobierz aplikację | Zawsze edytowanie; kompiluje używa pakietów buforowanych | Dołączony silnik, historia Git, opcjonalna sztuczna inteligencja własnego klucza |
| TeXShop / TeXworks | Najpierw zainstaluj dystrybucję TeX-a | Tak | Minimalne i niezawodne |
| Warsztaty VS Code + LaTeX | Najpierw zainstaluj dystrybucję TeX-a | Tak | Dobre dopasowanie, jeśli już pracujesz w VS Code |
| Na odwrocie | Utwórz konto w przeglądarce | ograniczona | Instalacja zerowa; projekty żyją na swoich serwerach |

Dwa środkowe wiersze mają ukryty koszt: zanim edytor będzie przydatny, samodzielnie instalujesz i utrzymujesz TeX Live lub MiKTeX. Na tym właśnie kończy się wielu początkujących. Opcja przeglądarki usuwa instalację, ale przenosi pliki na konto. Kompromisy omówiono bardziej szczegółowo w artykule [projekt przeglądarki a folder na dysku](/learn/overleaf-vs-local/).

## Rozsądne ustawienie domyślne

Jeśli chcesz mieć pliki lokalne bez administracji TeX-em, zacznij od [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): kompilator dostarcza wewnątrz aplikacji i pobiera pakiety za pierwszym razem, gdy dokument ich potrzebuje. Niezależnie od tego, który edytor wybierzesz, połącz go z [samouczkiem dotyczącym pierwszego dokumentu](/learn/first-document/) i trzymaj [ściągawkę](/learn/cheatsheet/) w pobliżu. Redaktor ma mniejsze znaczenie niż dzisiejsze skompilowanie pierwszej strony.