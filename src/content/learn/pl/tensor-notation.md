---

title: "Ułożone indeksy"
description: "Puste grupy do umieszczania tensorów i dopasowywania konwencji pól."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Skumulowane indeksy

Notacja tensorowa w teorii względności i geometrii różniczkowej odróżnia indeksy górne od dolnych, a pozioma kolejność indeksów również ma znaczenie: gdy indeksy są podnoszone i obniżane za pomocą metryki, obiekt z górnym indeksem nie jest tym samym, co ten z dolnym indeksem. Domyślne rozmieszczenie skryptów LaTeX-a ignoruje to rozróżnienie, więc dokumenty zawierające dużo tensorów opierają się na małej sztuczce z pustymi grupami.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## Sztuczka z pustą grupą

Zapisanie `T^i_j` umieszcza indeks górny i dolny w tej samej poziomej szczelinie, ułożone jeden nad drugim. Aby je nałożyć na siebie, wstaw `{}`, pustą grupę: `T^{i}{}_{j}` dołącza `i` jako indeks górny do T, a następnie dołącza `j` jako indeks dolny do pustej grupy, która następuje, więc indeks dolny ląduje po indeksie górnym, a nie pod nim. Każde `{}` otwiera nowe miejsce na skrypt i możesz połączyć tyle, ile potrzebuje tensor, tak jak w `T^{i}{}_{j}{}^{k}`.

Druga linia pokazuje wypłatę na prawdziwym obiekcie. W `R^{\mu}{}_{\nu\rho\sigma}` mu zajmuje pierwszą pozycję indeksu, a za nią podążają trzy dolne indeksy. To jest standardowy układ tensora Riemanna. Zwiń układ schodkowy, a kolejność indeksów stanie się niejednoznaczna. Kiedy każdy indeks znajduje się na jednym poziomie, jak w metryce `g_{\mu\nu}`, nie jest potrzebna żadna sztuczka i pojedyncza grupa indeksów dolnych zawiera je wszystkie.

To samo `{}` rozwiązuje również zwykły błąd. `T^i^k` zatrzymuje kompilację z "Double superscript", ponieważ jeden atom nie może przyjąć dwóch indeksów górnych. `T^{i}{}^{k}` daje drugiemu indeksowi górnemu własne miejsce i kompiluje się czysto.

## Konwencje i spójność

To, czy indeksy są naprzemienne, czy skumulowane, jest konwencją pola. Ogólna teoria względności zaskakuje niemal powszechnie. Inne obszary są w porządku w przypadku indeksów skumulowanych, gdy żadna metryka nie zmienia indeksów. Dopasuj zwyczaje swojej branży, a jeśli już gdzieś zgłaszasz, dopasuj szablon czasopisma do własnego gustu. Pakiet `tensor` może zautomatyzować rozmieszczanie za pomocą polecenia `\tensor`, ale ręcznie puste grupy są przenośne, nie wymagają pakietu i przetrwają każdy system przesyłania w niezmienionej formie.

Konsekwencja jest ważniejsza niż sam wybór. Zdecyduj raz, jak rozmieszczone są indeksy każdego tensora. W przypadku tych, które piszesz ciągle, umieść wokół nich makro preambuły, aby późna zmiana konwencji była jedną edycją, a nie przeszukiwaniem całego dokumentu. Porównaj formularze ułożone i ułożone obok siebie na [żywym placu zabaw](/live/).