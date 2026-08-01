---

title: "Derivadas e integrais"
description: "Derivadas ordinárias e parciais, integrais definidas, espaços finos antes das diferenciais."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Derivadas e integrais

A notação de cálculo é onde o LaTeX começa a ganhar seu sustento. Frações derivadas empilhadas, sinais integrais com limites e pontos sobre variáveis ​​têm um ou dois comandos cada. Esta lição cobre alguns comandos que produzem quase todas as derivadas e integrais que você escreverá, além do pequeno hábito de espaçamento que separa papéis polidos de rascunhos.

## Derivados

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Uma derivada comum é apenas uma fração: `\frac{dy}{dx}` empilha `dy` sobre `dx`. Para derivadas parciais, troque `d` por `\partial`, que imprime o símbolo parcial encaracolado; `\frac{\partial f}{\partial x}` é o formato padrão. Parciais de ordem superior seguem o mesmo padrão, por exemplo `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` fornece o símbolo do gradiente, e como é um símbolo comum você pode aumentá-lo como qualquer outra coisa: `\nabla^2 f` para o Laplaciano. Para notação compacta, `f'(x)` usa a chave de apóstrofo diretamente, e o LaTeX converte uma ou mais marcas `'` em números primos devidamente elevados. A notação de ponto de Newton para derivadas de tempo vem dos comandos de acento `\dot{x}` e `\ddot{x}`, que colocam um ou dois pontos sobre o argumento.

Uma escolha de estilo: alguns periódicos querem o diferencial `d` na vertical, escrito `\mathrm{d}`. Se o seu tiver, defina `\newcommand{\dd}{\mathrm{d}}` uma vez no preâmbulo e escreva `\frac{\dd y}{\dd x}` para que você possa inverter a escolha mais tarde.

## Integrais

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` é o sinal integral, e a sintaxe familiar de subscrito e sobrescrito atribui os limites: `_a` para o limite inferior, `^b` para o superior. Na matemática inline, os limites ficam ao lado do sinal para manter a linha compacta; na matemática de exibição, eles ainda ficam ao lado do sinal de integrais (ao contrário de somas), que é a convenção padrão. Integrais duplas e triplas recebem seus próprios comandos, `\iint` e `\iiint`, que espaçam os sinais repetidos corretamente, junto com `\oint` para integrais de contorno.

O `\,` antes de `dx` é um espaço fino. Sem ele, `f(x)dx` executa o integrando direto no diferencial e o olho tem que desembaraçá-los. O espaço fino é uma convenção amplamente seguida, então crie o hábito: integrando, depois `\,` e depois o diferencial.

## Experimente e um erro comum

Esses trechos são renderizados conforme você digita no [live playground](/live/), que é uma maneira rápida de verificar uma pilha derivada antes que ela entre em um documento; veja [noções básicas do modo matemático](/learn/math-mode/) se os delimitadores `$` e `\[` ainda são novos.

O erro mais comum aqui é digitar derivadas no estilo `d/dx` com uma barra na matemática de exibição onde um `\frac` empilhado era desejado, ou esquecer chaves nos limites de vários caracteres: `\int_a^b+1` coloca apenas o `b` no sobrescrito. Escreva `\int_a^{b+1}` para que toda a expressão seja elevada.