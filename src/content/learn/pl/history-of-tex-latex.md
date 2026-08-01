---

title: "TeX, LaTeX i 45 lat pięknych dokumentów"
description: "Jak w 1978 roku pewien zirytowany informatyk zbudował system składu, badania nad nim wciąż trwają."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX i 45 lat pięknych dokumentów

Każde narzędzie, którego będziesz używać do pisania artykułów, ma swoje źródło w frustracji jednego człowieka z powodu brzydkich prób w kuchni. Historia jest krótka, ale wiele wyjaśnia, dlaczego pisanie badań działa tak, a nie inaczej.

## 1978: Knuth się denerwuje

Donald Knuth, informatyk ze Stanford, pisał swoją imponującą serię książek *The Art of Computer Programming*. Kiedy wydawca przeszedł z tradycyjnego składu metalowego na wczesne systemy cyfrowe, nowe korekty wyglądały okropnie, zwłaszcza matematyczne. Reakcja Knutha była cudownie nieproporcjonalna: wstrzymał książki i spędził lata na budowaniu własnego systemu składu **TeX** (wymawiane „tech”, X to greckie chi), wypuszczając go w 1978 roku.

TeX był programem, który pobierał zwykły tekst z poleceniami znaczników i tworzył strony doskonałe pod względem typograficznym: idealne odstępy matematyczne, eleganckie łamanie akapitów, dzieła sztuki. Knuth ostatecznie zamroził jego rdzeń i oferuje nagrodę za każdy znaleziony błąd. Zgłoszono bardzo niewiele.

## 1984: Lamport czyni go użytecznym

Raw TeX jest potężny, ale niskopoziomowy, podobnie jak język asemblera dla stron. W 1984 roku Leslie Lamport (późniejszy zdobywca nagrody Turinga za systemy rozproszone) wypuścił **LaTeX**, przyjazną warstwę na wierzchu: zamiast ręcznie układać rzeczy, piszesz `\section{Wprowadzenie}` i `\cite{knuth78}` i pozwalasz systemowi zająć się numeracją, odniesieniami i układem. Prawie wszyscy dzisiaj mają na myśli LaTeX, mówiąc, że „piszą w TeX-ie”. Twój [pierwszy dokument](/learn/first-document/) jest dokumentem LaTeX.

## Dlaczego przetrwał cztery dekady

Edytory tekstu pojawiały się i znikały; LaTeX pozostał z nudnych, doskonałych powodów:

- **Matematyka.** Nadal nic nie składa się również z równań. Zobacz [tryb matematyczny](/learn/math-mode/).
- **Zwykły tekst.** Plik .tex z 1985 r. otwiera się dzisiaj i działa prawidłowo z kontrolą wersji.
- **Automatyzacja.** Numeracja, odsyłacze i bibliografie działają tylko na 300 stronach.
- **Szablony.** Wydawcy kodują swój dokładny styl domu jako plik zajęć, więc każde zgłoszenie wygląda identycznie. Właśnie dlatego [ACM, IEEE i przyjaciele](/learn/acm-ieee-and-friends/) dają wam szablony .tex i dlaczego czasopisma nadal chcą źródeł .tex, które mogą skompilować do własnego układu.

## Rodzina silników jednym tchem

Oryginalny silnik TeX-owy dał początek nowoczesnym następcom: **pdfTeX** dodał bezpośrednie wyjście w formacie PDF, **XeTeX** dodał Unicode i czcionki systemowe, a **LuaTeX** dodał język skryptowy do silnika. Najczęściej wybierasz to, czego oczekuje Twój szablon. Praktyczne różnice polegają na [którym silniku dla tego projektu](/learn/engines-compared/).

## 2023: wpisz Typst

**Typst** to pierwszy poważny współczesny konkurent: nowy język składu zbudowany od podstaw z czystszą składnią, natychmiastową kompilacją i bardziej przyjaznymi komunikatami o błędach. Jest naprawdę przyjemny i szybko rośnie. Jego ograniczenia są drugą stroną mocnych stron LaTeX-a: czterdzieści lat pakietów i przede wszystkim akceptacja wydawcy. Lokale chcą dziś .tex, więc LaTeX pozostaje językiem przesyłania, podczas gdy Typst jest idealny do notatek, raportów i wszystkiego, nad czym masz kontrolę. Oleafly kompiluje LaTeX, Typst i Markdown obok siebie, dzięki czemu możesz używać każdego z nich tam, gdzie najlepiej, bez konieczności przełączania aplikacji.

## Jedzenie na wynos

TeX to silnik, LaTeX to język, w którym wszyscy piszą, Typst to młody rywal, a dzienniki są powodem, dla którego stara gwardia trwa. To, czy pasują one do Overleaf, redaktorów i menedżerów ds. literatury, jest tematem [zestawu narzędzi do pisania badań, dawniej i obecnie](/learn/research-tools-landscape/).