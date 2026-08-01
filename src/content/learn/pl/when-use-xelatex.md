---

title: "Dlaczego ludzie przechodzą na XeLaTeX"
description: "Czcionki systemowe, złożone skrypty, szablony specyfikacji czcionek."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Dlaczego ludzie przechodzą na XeLaTeX

LaTeX jest językiem, ale kompiluje go kilka silników i różnią się one możliwościami. Tradycyjnym silnikiem jest pdfLaTeX, a dwa nowoczesne to XeLaTeX i LuaLaTeX. Najważniejszym powodem, dla którego ludzie przechodzą na XeLaTeX, są czcionki: pdfLaTeX używa tylko czcionek spakowanych specjalnie dla TeX-a, podczas gdy XeLaTeX ładuje dowolną czcionkę OpenType lub TrueType zainstalowaną w twoim systemie, oznaczoną jej zwykłą nazwą.

## Trzy powody, dla których warto się zmienić

Pierwszym z nich jest bezpośredni dostęp do czcionek systemowych. W pakiecie `fontspec` wybór czcionki to jedna czytelna linia i dla żądanego kroju pisma nie musi istnieć żaden pakiet czcionek specyficzny dla TeX-a. Niezależnie od tego, czy celem jest `\setmainfont{Inter}` dla nowoczesnego wyglądu, czy Times New Roman dla wymagań czasopisma, mechanizm jest taki sam:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` wymaga XeLaTeX lub LuaLaTeX; w pdfLaTeX po prostu pojawiają się błędy. Czcionki mogą również przemieszczać się wewnątrz folderu projektu zamiast do systemu, jak pokazano w [pliku czcionki obok projektu](/learn/install-custom-font/).

Drugi to natywny Unicode i złożone skrypty. XeLaTeX odczytuje bezpośrednio dane wejściowe w formacie UTF-8 i obsługuje systemy zapisu, których nie potrafi pdfLaTeX, w tym arabski, dewanagari, chiński, japoński i koreański, z odpowiednim kształtowaniem i, poprzez pakiet `polisglossia`, poprawnym dzieleniem wyrazów i kierunkiem dla każdego języka. Jeśli Twój dokument zawiera kombinację skryptów lub nawet po prostu cytuje nazwę z nietypowymi znakami diakrytycznymi, tylko to decyduje o silniku.

Trzeci to szablony, które decydują za Ciebie. Wiele nowoczesnych szablonów CV, prac dyplomowych i prezentacji ładuje w pierwszych wierszach „fontspec” lub „polyglossia”, a taki szablon kompiluje się tylko w XeLaTeX lub LuaLaTeX. Jeśli pobrany szablon natychmiast zakończy się niepowodzeniem i wyświetli się komunikat o błędzie „fontspec”, rozwiązaniem będzie zmiana silnika, a nie edycja szablonu.

## Z czego się poddajesz

Kompromisy są skromne, ale realne. Kilka pakietów specyficznych dla pdfLaTeX nie ma zastosowania, w szczególności rozszerzenie czcionek `mikrotypów`, które XeLaTeX obsługuje tylko częściowo. Kompilacje również działają nieco wolniej. Niektóre starsze potoki czasopism nadal zakładają pdfLaTeX, więc sprawdź instrukcje miejsca przed przesłaniem manuskryptu zbudowanego w XeLaTeX. LuaLaTeX udostępnia możliwości czcionek i Unicode oraz dodaje skrypty Lua. Wybierz spośród nich dowolną nazwę szablonu lub miejsca. Dokumenty zbudowane na podstawie `fontspec` zwykle kompilują się na obu.

## Wybór w praktyce

Rozsądną zasadą jest używanie formatu pdfLaTeX, gdy szablon obiektu jest na to ukierunkowany, oraz XeLaTeX do wszystkiego, gdzie wybierasz czcionki: prac dyplomowych, CV, slajdów i dokumentów wielojęzycznych. Silnik dołączony do Oleafly jest oparty na XeTeX (Tectonic), więc dokumenty `fontspec` kompilują się tam bez żadnej konfiguracji silnika. Częstym błędem jest mieszanie wymazań, na przykład ładowanie `fontspec` razem z pakietami czcionek obsługującymi tylko pdfLaTeX, takimi jak `newtxtext`. Wybierz jeden system czcionek na dokument, a pytania dotyczące silnika w większości przypadków odpowiedzą same.