---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Przewodnik terenowy po czterech systemach składania wniosków, z którymi się spotkasz."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

# HotCRP, EasyChair, OpenReview, CMT

Twoja praca nie trafia na konferencję. Trafia do systemu przesyłania: strony internetowej, na którą przesyłasz plik PDF, wypełniasz metadane, a później czytasz recenzje. Są cztery osoby, które będziesz spotykać wielokrotnie, a każda z nich ma osobowość.

## Wielka czwórka

| Systemu | Osobowość | Spotkasz go w |
|---|---|---|
| HotCRP | Szybki, minimalny, uwielbiany przez ludzi zajmujących się systemami | Konferencje dotyczące systemów i bezpieczeństwa (SOSP, USENIX) |
| EasyChair | Weteran. Utylitarny, wszędzie | Warsztaty, wiele konferencji CS na całym świecie |
| OtwórzRecenzję | Publiczne, recenzje często widoczne | Miejsca ML (ICLR, NeurIPS) |
| CMT | Koń pociągowy Microsoftu, ciężki w formie | Konferencje dotyczące wizji i ML (CVPR) |

Wszyscy wykonują tę samą podstawową pracę. Różnice tkwią w szczegółach. OpenReview może pokazać Twoje recenzje całemu światu. HotCRP poinformuje Cię e-mailem o każdym komentarzu. CMT posiada siatkę wyboru tematu, której kliknięcie zajmuje dziesięć minut.

## Utwórz konto wcześniej

Zrób to w tygodniu, w którym zdecydujesz się przesłać, a nie w ostatecznym terminie:

- [ ] Utwórz konto z adresem e-mail, który sprawdzasz codziennie
- [ ] Potwierdź, że e-mail weryfikacyjny faktycznie dotarł
- [ ] Sprawdź, czy współautorzy również mają konta (zatwierdzenie profili OpenReview dla nowych użytkowników może zająć kilka dni)
- [ ] Rozpocznij przesyłanie wersji roboczej, aby wiedzieć, jakie pola istnieją

To ostatnie ma znaczenie. W niektórych miejscach zadawane są zaskakujące pytania: oświadczenia dotyczące etyki, listy kontrolne dotyczące powtarzalności, domeny konfliktowe. Lepiej je odkryć za tydzień.

## Przesyłanie wyłącznie plików PDF vs przesyłanie źródła

Większość obiektów wymaga pliku PDF w momencie składania wniosku. Niektórzy, a prawie wszyscy wydawcy w momencie gotowości aparatu, chcą także źródła LaTeX. Utrzymuj swój projekt w porządku, aby móc go zapiąć na żądanie. Oleafly eksportuje bezpośrednio źródłowy plik ZIP, czyli dokładnie taki, jakiego oczekują systemy przesyłania kształtów.

## Pola metadanych

Poza plikiem PDF spodziewaj się wypełnienia:

- **Tytuł i streszczenie** jako zwykły tekst. Przepisz dowolne obliczenia matematyczne LaTeX w słowach lub Unicode.
- **Tematy**, pola wyboru kierujące artykuł do recenzentów. Wybierz szczerze.
- **Konflikty**, osoby i instytucje, które nie powinny Cię recenzować: doradcy, niedawni współautorzy, współpracownicy. Jeśli popełnisz błąd, możesz unieważnić recenzję, więc bądź dokładny.
- **Potwierdzenie anonimowości**, w miejscach z podwójnie ślepą próbą. Zobacz [anonimizację w przypadku podwójnie ślepej recenzji](/learn/anonymization-double-blind/).

## Rzeczywistość obszarowa o 11:59

Każdego wieczoru, w którym kończy się ostateczny termin, tysiące osób przesyła zgłoszenia w ostatniej godzinie, a systemy działają wolno. Przesyłanie, które trwało kilka sekund w porze lunchu, zajmuje kilka minut o 23:50. Poprawka jest prosta i nikt jej nie stosuje: wcześniej prześlij działającą wersję.

## Możesz aktualizować do upływu terminu

Oto część wyzwalająca: poddanie się to nie jeden strzał. W każdym większym systemie możesz zastąpić plik PDF tyle razy, ile chcesz, zanim upłynie termin. Dlatego dzień wcześniej prześlij wersję kompletną, ale niedoskonałą i kontynuuj szlifowanie. Jeśli sieć padnie o 11:58, zamiast tragedii masz w systemie prawdziwe poddanie się.

Następny przystanek po przesłaniu: zrozumienie, co dzieje się po drugiej stronie, w [peer review, wyjaśniono] (/learn/peer-review-explained/).