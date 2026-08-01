---

title: "문장에 포함된 수학(또는 단독으로)"
description: "인라인 수학, 디스플레이 수학, 방정식 환경 및 번호 매기기가 가치가 있는 경우."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# 문장 안에 있는(또는 단독으로) 수학

LaTeX는 수학을 자체 글꼴과 간격 규칙이 있는 별도의 모드로 처리합니다. 모든 변수, 수식 및 기호는 문장에서 n이 단독이든 전체 방정식이든 관계없이 수학 모드 내에 있어야 합니다. 두 가지 종류가 있습니다. 인라인 수학은 단락 내에서 흐르고, 디스플레이 수학은 숫자가 있든 없든 자체 라인의 중앙에 위치합니다.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## 인라인 수학

`$E=mc^2$`와 같은 한 쌍의 달러 기호는 수식을 줄 내부의 텍스트 크기로 설정합니다. 문자는 수학적으로 기울임꼴로 표시되며 등호 주위의 간격은 자동으로 처리됩니다. `\(E=mc^2\)`는 LaTeX 기본 형식과 동일합니다. 이는 동일한 출력을 생성하며 여는 구분 기호와 닫는 구분 기호가 다르기 때문에 닫히지 않은 구분 기호는 더 명확한 오류 메시지를 제공합니다. 단일 변수 이름에도 인라인 수학을 사용하면 산문의 n이 방정식의 n과 일치합니다.

## 수학 표시

`\[ ... \]`는 숫자 없이 중앙에 있는 줄에 수식을 배치합니다. 다시는 참조하지 않는 일회성 방정식에 대한 올바른 선택입니다. 이전 `$$ ... $$` 형식을 사용하지 마세요. LaTeX가 아닌 일반 TeX이며 일부 상황에서는 약간 잘못된 수직 간격을 생성합니다.

## 번호가 매겨진 방정식

`equation` 환경은 여백에 숫자가 있는 수식을 표시합니다. `\label{eq:energy}`는 해당 숫자에 이름을 붙이고, 다른 곳에서는 `Equation~\ref{eq:energy}`를 쓰거나 `amsmath`가 로드된 상태에서 `\eqref{eq:energy}`를 쓰면 괄호 자체가 추가됩니다. `~`는 줄 바꿈되지 않는 공백이므로 단어와 숫자가 한 줄에 유지됩니다. 참조는 두 번째 컴파일에서 확인됩니다. 출력에 '??'가 표시되면 [숫자 대신 물음표](/learn/equations-show-qq/)를 참조하세요.

## 로드할 패키지

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

거의 모든 수학 문서는 이 세 가지를 로드합니다. `amsmath`는 `align` 및 `\eqref`를 포함하여 대부분의 강의에서 가정하는 환경과 명령을 제공합니다. `amssymb` 및 `amsfonts`는 기호 글꼴과 `\mathbb`와 같은 추가 알파벳을 추가합니다. 서문에 한 줄만 넣고 잊어버리세요.

고전적인 초보자 오류는 수학 모드 외부의 수학 구문입니다. 일반 텍스트의 밑줄은 [자체 교훈](/learn/missing-dollar/)이 있는 "Missing $ insert"로 컴파일을 중지합니다. 두 가지 모드에 대한 느낌을 얻으려면 [라이브 놀이터](/live/)에서 `$x_i$` 인라인과 `\[ ... \]` 안에 동일한 수식이 포함된 문장을 입력하고 각각이 페이지에 어떻게 배치되는지 비교해 보세요.