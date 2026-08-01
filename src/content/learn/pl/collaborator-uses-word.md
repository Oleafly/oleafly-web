---

title: "Współautorzy, którzy mówią tylko w programie Word"
description: "Zachowaj .tex jako źródło prawdy podczas wymiany plików PDF lub DOCX na komentarze."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Współautorzy, którzy mówią tylko w programie Word

Powszechna jest współpraca przy użyciu różnych narzędzi: artykuł piszesz w języku LaTeX, a współautor, doradca lub współpracownik kliniczny pracuje tylko w programie Microsoft Word. Nic nie konwertuje idealnie pomiędzy tymi dwoma formatami. Uzgodnij wcześniej, który plik jest prawdziwym dokumentem, a następnie ustal procedurę przekazywania opinii przez lukę bez utraty pracy.

## Jedno źródło prawdy

Zdecyduj wcześniej, że pliki `.tex` są kanoniczne, a cała reszta to kopia pochodna do przeglądu. W chwili, gdy istnieją dwie „aktualne wersje” w dwóch formatach, czyjeś zmiany gubią się, a uzgadnianie naocznie pliku Worda z plikiem LaTeX-a jest marną pracą. Zgodnie z tą umową Twoim zadaniem jest skład i integracja. Zadaniem Twojego współautora jest treść i komentarze, dostarczane w dowolnym narzędziu, które preferuje.

## Wybierz eksport według rodzaju opinii

Do przeczytania i komentarzy na wysokim poziomie wyślij skompilowany plik PDF. Każdy użytkownik programu Word może otworzyć plik PDF, a narzędzia do adnotacji w dowolnym czytniku plików PDF obejmują notatki i wyróżnienia na marginesach. Ręczne stosowanie tych informacji zwrotnych zapewnia pełną kontrolę nad źródłem.

Jeśli współautor musi zaproponować przepisanie na poziomie zdania ze śledzonymi zmianami, wyeksportuj plik DOCX. Pandoc konwertuje LaTeX do Worda na tyle dobrze, że można go przeglądać, a Oleafly ma wbudowany eksport DOCX. Spodziewaj się, że konwersja będzie przybliżona: równania, odsyłacze i rozmieszczenie figur pogorszą się, i powinieneś powiedzieć to od razu, aby nikt nie zgłaszał problemów z układem w jednorazowej kopii.

## Sesja scalania

Informacje zwrotne w pliku `.docx` muszą ręcznie wrócić do `.tex`. Traktuj to jako zaplanowane zadanie, a nie ciągłą strużkę: zbierz prześledzone zmiany przez współautora, otwórz plik Word i źródło LaTeX obok siebie i zastosuj zaakceptowane zmiany jedna po drugiej, zatwierdzając Git na bieżąco, tak aby każda runda opinii była jednym zatwierdzeniem. Dzięki jednej zasadzie jest to wykonalne: każda runda przeglądu rozpoczyna się od nowego eksportu bieżącego źródła. Nigdy nie pozwalaj, aby ten sam plik Worda działał przez wiele rund, ponieważ po cichu rozwidla papier.

## Gdy wersja robocza rozpoczyna się w programie Word

Czasem sytuacja jest odwrotna: współautor pisze pierwszą wersję roboczą w programie Word, a Ty przejmujesz skład. Przekonwertuj go raz, wcześniej. Oleafly importuje plik „.docx” do projektu LaTeX, a pandoc robi to samo w wierszu poleceń. Od tego momentu plik „.tex” jest kanoniczny i obowiązuje powyższa procedura. Aby zapoznać się ze szkieletem kontroli wersji, który umożliwia odzyskanie tego wszystkiego, zobacz [Umieść artykuł w GitHubie](/learn/sync-with-github/).