---

title: "Podpowiadaj modele do kompilacji TeX-a"
description: "Wyślij preambułę, zażądaj różnicy, zawsze kompiluj odpowiedź."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Podpowiadaj modele do kompilacji TeX-a

Zapytaj model czatu o LaTeX, a zazwyczaj otrzymasz kod, który wygląda dobrze i nie da się go skompilować w dokumencie. Model nie wie, jakiej klasy używasz, jakie pakiety ładujesz ani jakie makra zdefiniowałeś, więc odpowiada w przypadku jakiegoś ogólnego dokumentu, który nie jest Twój. Dane wyjściowe następnie giną z brakującymi pakietami lub kolidującymi definicjami w momencie wklejenia. Większości z nich można uniknąć dzięki trzem nawykom podpowiadania i jednej twardej zasadzie: skompiluj, zanim zaufasz.

## Wyślij preambułę

Twoja preambuła stanowi kontekst, którego brakuje modelowi. Wklej go lub przynajmniej linię `\documentclass` i listę `\usepackage` i poproś o „fragment, który kompiluje się pod tą preambułą”. Ten jeden nawyk blokuje najczęstszą awarię: odpowiedź po cichu zależy od `tikz`, `siunitx` lub innego pakietu, którego nigdy nie załadowałeś. Kieruje także model w kierunku poleceń faktycznie dostarczanych przez konfigurację. Jeśli w Twoim projekcie zdefiniowano makra, dołącz je również z powodów omówionych w artykule [Podaj modelowi swoją tablicę symboli](/learn/ai-follow-notation/).

## Zapytaj, od czego zależy odpowiedź

Dodaj stałe żądanie: „Jeśli Twój kod potrzebuje pakietu, którego nie załadowałem, wypisz go wyraźnie na górze odpowiedzi”. To zamienia ukryte zależności w widoczną listę kontrolną. Kiedy w odpowiedzi zostanie nazwana pakiet, ty decydujesz, czy go dodać, zamiast odkrywać zależność w wyniku błędu „Niezdefiniowana sekwencja sterująca” kompilowanego trzy razy później. Ten błąd i jego diagnostyka są omówione w [Niezdefiniowana sekwencja sterująca](/learn/unknown-control-sequence/).

## Poproś o różnicę, a nie o przepisanie

Jeśli chcesz zmienić istniejący tekst, wklej najmniejszy odpowiedni fragment i poproś model, aby zmienił tylko to, czego wymaga żądanie, podając, co się zmieniło. Mając cały plik, modelki swobodnie przepisują: formatują nietknięte akapity, zmieniają kolejność linii preambuły i czasami upuszczają coś na podłogę. Prawdziwa zmiana znika w momencie rezygnacji. Minimalna, opisana edycja to taka, którą możesz faktycznie sprawdzić. W Oleafly asystent wymusza ten kształt, proponując każdą edycję jako różnicę w kolorze czerwonym/zielonym, którą zatwierdzasz linia po linii, zgodnie z opisem w [Asystent w Oleafly](/learn/oleafly-ai/).

## Skompiluj, zanim zaufasz

Nigdy nie wysyłaj LaTeX-a, którego nie skompilowałeś, bez względu na to, jak wiarygodny jest jego tekst. Wklej sugestię do swojego dokumentu, skompiluj i przeczytaj pierwszy błąd, jeśli taki występuje. Przesłanie tego komunikatu o błędzie z powrotem do modelu wraz z fragmentem naruszającym zasady zwykle skutkuje drugą działającą próbą. Trzymaj projekt w Git, aby wszelkie zmiany wspomagane modelem można było wycofać jednym poleceniem. Konfiguracja opisana w [Umieść artykuł w GitHubie](/learn/sync-with-github/). Model proponuje; kompilator usuwa.