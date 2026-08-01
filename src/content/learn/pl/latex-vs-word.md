---

title: "Kiedy LaTeX pokonuje Worda (a kiedy nie)"
description: "Wybierz narzędzie dla dokumentu: równania, długie artykuły, cytaty lub krótkie wspólne wersje robocze."
category: "open-the-loop"
order: 2
level: "beginner"
tags: ["basics"]
featured: true
updated: 2026-07-25
---

# Kiedy LaTeX pokonuje Worda (a kiedy nie)

Żadne narzędzie nie jest uniwersalnie lepsze. Procesory tekstu optymalizują się pod kątem bezpośredniej manipulacji: to, co widzisz, to dokument. LaTeX optymalizuje strukturę: opisujesz dokument zwykłym tekstem, a kompilator go składa. To, który model zwycięży, zależy od dokumentu, który masz przed sobą, a nie od lojalności plemiennej.

## Gdzie LaTeX zdobywa wiedzę

Równania są najbardziej przejrzystym przypadkiem. Edytor równań programu Word sprawdza się w przypadku zadania domowego. Staje się to bolesne w przypadku setek ponumerowanych równań z odniesieniami. W LaTeX-ie `\label` i `\ref` zapewniają poprawność każdej liczby, bez względu na to, jak bardzo się reorganizujesz, co szczegółowo omawia lekcja na temat [odsyłaczy](/learn/cross-references/).

Dokumenty o długiej strukturze zachowują się w ten sam sposób. Praca dyplomowa z rozdziałami w oddzielnych plikach, automatycznymi spisami treści i spójnymi stylami nagłówków jest rutynowa w LaTeX-ie i krucha w edytorze tekstu. Cytaty działają według tego samego wzorca: baza danych BibTeX zawierająca kilkaset wpisów dostosowuje się do dowolnego stylu czasopisma, w którym ręcznie prowadzone listy referencyjne szybko ulegają degradacji. Zobacz [dodaj cytaty](/learn/add-citations/), aby zapoznać się z mechaniką.

Dwie cichsze zalety łączą się z czasem. Źródłem LaTeX-a jest zwykły tekst, więc Git może go łatwo różnicować i wersjonować, a to samo źródło generuje po latach ten sam plik PDF na dowolnej maszynie, bez zmiany układu.

## Gdzie Word lub Dokumenty Google są właściwym wyborem

Redaktorzy manipulujący bezpośrednio wygrywają, gdy dokumentem jest współpraca. Jeśli Twoi współautorzy nie mają wiedzy technicznej, pracują tylko nad prześledzonymi zmianami i muszą skomentować tego popołudnia, praktycznym rozwiązaniem jest udostępniony dokument. Wygrywają także w przypadku krótkich, jednorazowych listów, w których konfiguracja LaTeX-a kosztuje więcej niż zwroty ze składu, oraz dla wydawców lub działów HR, które akceptują wyłącznie pliki `.docx`.

## Hybryda, która sprawdza się w praktyce

Zachowaj źródło prawdy w LaTeX-ie i eksportuj wersje robocze dla osób, które ich potrzebują. Plik PDF gromadzi komentarze; DOCX wygenerowany przez Pandoc spełnia wymagania `.docx`. Decyzje podjęte w tych rundach są ponownie łączone w plikach `.tex`, które pozostają wersją kanoniczną. Lekcja na temat [pracy ze współpracownikami korzystającymi z programu Word](/learn/collaborator-uses-word/) omawia tę pętlę.

## Krótka odpowiedź

Używaj LaTeX-a do wszystkiego, co będziesz cytować, numerować, odsyłać lub poprawiać przez miesiące. Użyj edytora tekstu, gdy koszt społeczny LaTeX-a przewyższa korzyści związane ze składem. Obydwa orzeczenia są uzasadnione, a większość badaczy korzysta z obu narzędzi w danym roku.