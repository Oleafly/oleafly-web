---

title: "Índices empilhados"
description: "Grupos vazios para posicionamento de tensores e convenções de campo correspondentes."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Índices empilhados

A notação tensorial na relatividade e na geometria diferencial distingue os índices superiores dos inferiores, e a ordem horizontal dos índices também carrega significado: uma vez que os índices são aumentados e diminuídos com uma métrica, o objeto com um índice superior primeiro não é o mesmo que aquele com um índice inferior primeiro. O posicionamento padrão do script do LaTeX ignora essa distinção, portanto, documentos com muitos tensores dependem de um pequeno truque com grupos vazios.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## O truque do grupo vazio

Escrever `T^i_j` coloca o sobrescrito e o subscrito no mesmo slot horizontal, empilhados um acima do outro. Para escaloná-los, insira `{}`, um grupo vazio: `T^{i}{}_{j}` anexa `i` como um sobrescrito a T e, em seguida, anexa `j` como um subscrito ao grupo vazio a seguir, de modo que o subscrito fique após o sobrescrito em vez de abaixo dele. Cada `{}` abre um novo slot de script, e você pode encadear quantos o tensor precisar, como em `T^{i}{}_{j}{}^{k}`.

A segunda linha mostra o resultado de um objeto real. Em `R^{\mu}{}_{\nu\rho\sigma}` o mu ocupa a primeira posição do índice e os três índices inferiores o seguem. Esse é o layout padrão do tensor de Riemann. Recolha o escalonamento e a ordem do índice se tornará ambígua. Quando cada índice está em um nível, como na métrica `g_{\mu\nu}`, nenhum truque é necessário e um único grupo de subscritos contém todos eles.

O mesmo `{}` também resolve um erro simples. `T^i^k` interrompe a compilação com "Sobrescrito duplo", porque um átomo não pode receber dois sobrescritos. `T^{i}{}^{k}` dá ao segundo sobrescrito seu próprio slot e compila de forma limpa.

## Convenções e consistência

Se os índices são escalonados ou empilhados é uma convenção de campo. A relatividade geral oscila quase universalmente. Outras áreas aceitam índices empilhados quando nenhuma métrica move os índices. Combine os hábitos da sua área e, se estiver enviando para algum lugar, combine o modelo da revista de acordo com seu gosto. O pacote `tensor` pode automatizar o posicionamento com um comando `\tensor`, mas os grupos vazios manuais são portáteis, não precisam de pacote e sobrevivem inalterados a qualquer sistema de envio.

A consistência é mais importante do que a escolha em si. Decida uma vez como os índices de cada tensor são organizados. Para aqueles que você digita constantemente, coloque uma macro de preâmbulo em torno deles para que uma mudança tardia de convenção seja uma edição, em vez de uma busca por todo o documento. Compare formulários escalonados e empilhados lado a lado no [playground ao vivo](/live/).