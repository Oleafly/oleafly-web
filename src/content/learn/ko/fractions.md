---

title: "계속해서 읽을 수 있는 누적 비율"
description: "frac, dfrac, tfrac 및 amsmath가 포함된 연속 분수."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# 읽기 쉬운 누적 비율

분수는 LaTeX 출력이 워드 프로세서를 시각적으로 능가하는 첫 번째 장소입니다. 즉, 주변 수학에 맞게 크기가 조정된 실제 누적 분자와 분모 사이에 규칙이 있습니다. 핵심 명령은 `\frac`입니다. 중요한 것은 컨텍스트에 따라 크기가 어떻게 변하는지, 자동 선택으로 인해 가독성이 저하될 때 이를 재정의하는 방법입니다.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

``\frac{a}{b}`는 두 개의 중괄호 인수(분자가 먼저, 분모가 두 번째)를 취하여 수평 규칙 위에 쌓아서 조판합니다. 크기는 상황에 따라 다릅니다. 표시 수학(`\[ ... \]` 또는 `방정식` 환경 내)에서 분수는 전체 크기로 설정됩니다. 인라인 수학(`$ ... $` 내부)에서는 더 작고 컴팩트하게 설정되므로 단락의 줄을 강제로 분리하지 않습니다.

때때로 당신은 그것을 무시하고 싶을 때가 있습니다. `amsmath`의 `\dfrac`는 표시 스타일을 강제합니다. 즉, 문장 중간에도 전체 크기 누적 분수가 표시됩니다. 키가 큰 분수 인라인은 주변의 줄 간격을 늘리기 때문에 드물게 사용하십시오. `\tfrac`은 그 반대입니다. 디스플레이 수학에서도 작은 텍스트 스타일을 강제합니다. 이는 전체 크기 스택이 너무 많은 관심을 끌 수 있는 큰 표현식 앞의 절반과 같은 간단한 계수에 유용합니다.

두 인수 모두 다른 분수를 포함하여 임의의 수학을 담을 수 있습니다: `\frac{1}{1 + \frac{1}{x}}` 중첩 및 LaTeX는 자동으로 내부 분수를 축소합니다. 하지만 중첩이 깊어지면 더 나은 도구가 있습니다.

## 계속되는 분수

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

중첩된 `\frac`은 모든 수준에서 축소되므로 연속 분수의 3층에서는 숫자를 거의 읽을 수 없습니다. 역시 `amsmath`의 `\cfrac`은 모든 레벨을 전체 표시 크기로 유지하고 분자를 정렬합니다. 이는 연속된 분수를 조판하는 데 허용되는 방법입니다. 선택적 위치 `\cfrac[l]{1}{...}`를 전달하여 분자를 중앙에 맞추는 대신 왼쪽으로 밀 수 있습니다.

## 실무적 판단

모든 `\dfrac`, `\tfrac` 및 `\cfrac`에는 서문에 `\usepackage{amsmath}`가 필요합니다. 일반 `\frac`은 그것 없이도 작동합니다. `\dfrac`에 "정의되지 않은 제어 시퀀스"가 표시되면 패키지 줄이 누락된 것입니다.

인라인 텍스트의 경우 때로는 슬래시 형식이 쌓인 분수보다 더 읽기 쉽습니다. `(a/b)` 또는 `a/b`를 쓰면 줄 높이가 균일하게 유지되고 간단한 비율에 대해 잘 읽힙니다. 경험상 좋은 규칙은 수직 공간이 있는 디스플레이 수학에서 분수를 쌓고 분수가 문장의 요점이 아닌 한 슬래시 인라인을 선호하는 것입니다. [라이브 놀이터](/live/)에서 양방향으로 단락을 입력하고 비교합니다. 줄 간격의 차이가 즉시 표시됩니다. `$` 및 `\[`와 같은 수학 구분 기호가 아직 익숙하지 않다면 [수학 모드 기본 사항](/learn/math-mode/)부터 시작하세요.