---

title: "Pusta bibliografia"
description: "Ścieżka, backend, brakujący cytat, bibliografia drukowana a bibliografia."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Pusta bibliografia

## Objaw

Twój dokument kompiluje się bez błędu krytycznego, ale w ogóle brakuje sekcji Odniesienia lub pojawia się nagłówek bez niczego pod nim. Często każde „\cite” w tekście jest jednocześnie pogrubionym znakiem zapytania. Nic się nie zawiesiło, więc nie ma oczywistego błędu do ścigania, co sprawia, że ​​​​jest to frustrujące.

## Dlaczego tak się dzieje

Bibliografia nie jest tworzona wyłącznie przez LaTeX. LaTeX najpierw zapisuje listę cytowanych kluczy do pliku pomocniczego. Oddzielny program backendowy (`bibtex` lub `biber`) odczytuje twoją bazę danych `.bib` i formatuje pasujące wpisy. Na koniec LaTeX wczytuje ten sformatowany wynik z powrotem w następnym przebiegu. Pusta bibliografia oznacza, że ​​ten potok gdzieś się zepsuł: backend nigdy nie działał, działał, ale nie mógł znaleźć bazy danych, znalazł bazę danych, ale nie żądano żadnych kluczy, lub dokument pyta o wynik za pomocą złego polecenia.

## Przeanalizuj przyczyny w odpowiedniej kolejności

Najpierw upewnij się, że plik bazy danych istnieje tam, gdzie jest wskazany w dokumencie. Zarówno `\bibliography{refs}`, jak i `\addbibresource{refs.bib}` szukają `refs.bib` względem pliku głównego, zatem plik znajdujący się w podfolderze `bib/` musi mieć odniesienie `bib/refs` lub `bib/refs.bib`. Zła ścieżka zawodzi cicho.

Po drugie, upewnij się, że backend rzeczywiście działał. Pojedyncza kompilacja nigdy nie wystarczy; pełny cykl to LaTeX, potem „bibtex” lub „biber”, a potem jeszcze dwa razy LaTeX. Oleafly uruchamia ten cykl automatycznie, ale ręcznie sterowana kompilacja lub źle skonfigurowany zestaw narzędzi edytora może pominąć środkowy krok, a wynikiem jest dokładnie pusta lista referencyjna.

Po trzecie, sprawdź, czy obecne jest co najmniej jedno polecenie `\cite`. Backend formatuje tylko wpisy wymagane przez dokument, więc wersja robocza bez jeszcze cytatów otrzymuje z założenia pustą listę. Podczas wczesnego pisania możesz wymusić wszystko za pomocą `\nocite{*}`, który żąda każdego wpisu w bazie danych bez drukowania czegokolwiek w tekście.

Po czwarte, dopasuj polecenie do systemu. Klasyczne dokumenty BibTeX-a kończą się znakami `\bibliographystyle{...}` i `\bibliography{refs}`. Dokumenty biblatex ładują bazę danych w preambule za pomocą `\addbibresource{refs.bib}` i drukują ją za pomocą `\printbibliography`. Mieszanie obu, na przykład ładowanie biblatexu, ale nadal wywoływanie `\bibliography`, powoduje dokładnie ten błąd. To samo dotyczy uruchomienia niewłaściwego backendu: biblatex potrzebuje `biber`, a dodanie do niego klasycznego `bibtex` nic nie daje.

## Przeczytaj własny dziennik backendu

Backend zapisuje swoje skargi w pliku `.blg` obok Twojego dokumentu i tam pojawiają się źle sformułowane wpisy, zduplikowane klucze i komunikaty „Nie mogłem otworzyć pliku bazy danych”. Jeśli powyższe kroki wyglądają prawidłowo, ale lista jest nadal pusta, dziennik `.blg` prawie zawsze wskazuje prawdziwego winowajcę. W przypadku znaków zapytania, które utrzymują się po pojawieniu się samej bibliografii, zobacz [Usuwanie tajemniczych znaków cytowań](/learn/citation-question-mark/).