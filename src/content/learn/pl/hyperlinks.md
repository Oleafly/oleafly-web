---

title: "Linki w pliku PDF"
description: "hyperref, url, href, kolory i metadane PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Linki w pliku PDF

Plik PDF to nie tylko papier na ekranie. Może zawierać aktywne linki: klikalne adresy URL, odsyłacze prowadzące do właściwej ilustracji, cytaty prowadzące do bibliografii oraz zarys paska bocznego utworzony na podstawie nagłówków sekcji. W LaTeX-ie to wszystko zapewnia jeden pakiet: `hyperref`. Załaduj go, a każdy wpis `\ref`, `\cite` i spisu treści w dokumencie stanie się cicho klikalny, bez żadnych zmian w pozostałej części źródła.

## Ładowanie i konfigurowanie hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Opcje w nawiasach kwadratowych kontrolują wygląd linków. Domyślnie hyperref rysuje kolorowy prostokąt wokół każdego łącza, co większość ludzi uważa za brzydkie. Ustawienie „colorlinks=true” powoduje zastąpienie pól kolorowym tekstem, a trzy opcje kolorów dzielą to według typu łącza: „linkcolor” obejmuje wewnętrzne przeskoki, takie jak odniesienia do sekcji i rysunków, „citecolor” obejmuje cytaty, a „urlcolor” obejmuje adresy internetowe. Dzielenie ich ma znaczenie, ponieważ w przeciwnym razie papier gęsty od cytatów może zamienić się w ścianę błękitu.

## adres URL zamiast href

Obydwa polecenia łączące wykonują różne zadania. `\url{...}` drukuje adres czcionką maszynową i umożliwia jego kliknięcie, czyli to, czego oczekuje się od bibliografii lub przypisu, w którym czytelnik powinien zobaczyć, dokąd prowadzi łącze. `\href{adres}{tekst}` ukrywa adres za dowolnym tekstem, który podasz, np. za łączem na stronie internetowej. Preferuj `\url` w dokumentach, które można wydrukować, ponieważ etykieta `\href` uniemożliwia czytnikowi papierowemu wpisanie adresu.

Praktyczny bonus: `\url` wie, jak dzielić długie adresy w wierszach bez wstawiania łącznika, który uszkodziłby adres, czego nie jest w stanie zrobić zwykły adres URL czcionki maszynowej do pisania.

## Metadane PDF

`\hypersetup` pozwala zmienić dowolną opcję hyperref po załadowaniu i jest to także miejsce, w którym ustawia się metadane dokumentu. Pola `pdftitle` i `pdfauthor` wypełniają tytuł i autora, który czytnik PDF wyświetla na pasku okien i we właściwościach pliku. Bez nich czytelnicy często wyświetlają nazwę pliku lub pierwszy nagłówek, który w przesyłanym lub udostępnianym dokumencie wygląda na niedokończony. Możesz wywołać `\hypersetup` w preambule w dowolnym momencie po `\usepackage{hyperref}`.

## Dokumenty do druku

W przypadku dokumentów do druku użyj opcji „ukryj linki”. Przekazanie go jako opcji `\usepackage[hidelinks]{hyperref}` sprawi, że każdy link będzie można kliknąć na ekranie, ale usunie zarówno kolorowe pola, jak i kolorowy tekst, dzięki czemu wydrukowana strona będzie wyglądać zupełnie normalnie. Wiele zajęć z czasopism wymaga właśnie tego.

Częsty błąd, którego należy unikać: hyperref na nowo definiuje wiele wewnętrznych poleceń, dlatego powinien zostać załadowany jako jeden z ostatnich pakietów w preambule. Jeśli Twoje linki prowadzą do niewłaściwych stron lub pojawiają się dziwne błędy w innym pakiecie, pierwszą rzeczą do sprawdzenia jest kolejność ładowania. Zobacz [cross-references](/learn/cross-references/), aby zapoznać się z mechaniką `\label` i `\ref`, którą hyperref umożliwia klikalność.