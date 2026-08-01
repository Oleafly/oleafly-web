---

title: "한 번만 발명한 연산자"
description: "argmin, argmax 및 유사한 이름에 대해 DeclareMathOperator를 선언합니다."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 한 번만 발명한 연산자

LaTeX에는 `\sin`, `\log`, `\max`와 같은 명명된 연산자가 포함되어 있으며 주위에 올바른 간격을 두고 수직 문자로 인쇄합니다. 최적화 논문에서 지속적으로 사용하더라도 `\argmin` 또는 `\argmax`와 함께 제공되지 않습니다. 수학 모드에서 'argmin'을 일반 문자로 입력하면 LaTeX는 이를 6개 변수의 곱으로 처리합니다. 문자는 연산자 간격 없이 함께 짜여진 이탤릭체로 표시됩니다. 서문에서 연산자를 직접 선언하세요.

## 연산자 선언

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

각 조각이 수행하는 작업은 다음과 같습니다. `\DeclareMathOperator`는 `amsmath`에서 유래하며 인수가 연산자 텍스트로 조판된 새 명령을 만듭니다. 즉, LaTeX는 간격 규칙이 이미 `\max` 및 `\lim`에 적용되는 직립 로마자입니다. 첫 번째 인수는 입력할 명령 이름이고, 두 번째 인수는 실제로 인쇄되는 텍스트입니다. `arg\,min` 안의 `\,`는 두 단어 사이에 얇은 공백을 삽입하므로 함께 실행하는 것보다 읽기가 더 좋습니다.

`\DeclareMathOperator` 뒤의 별표가 중요합니다. 별표 표시된 선언은 연산자가 `\lim`처럼 동작하게 만듭니다. 표시 수학에서 `_`로 연결하는 모든 항목은 오른쪽 아래로 이어지는 대신 연산자 바로 아래에 위치합니다. 이것이 바로 `\argmin_\theta`에 대해 원하는 것입니다. 여기서 최적화되는 변수는 아래에 표시되어야 합니다. 별표가 없으면 아래 첨자가 옆에 남게 되는데, 이는 `\log_2`와 같은 연산자에 대한 관례입니다. 인라인 수학에서는 줄 높이가 늘어나는 것을 방지하기 위해 아래 첨자가 어느 쪽이든 옆에 유지됩니다.

## 패턴 재사용

동일한 기술이 LaTeX가 알지 못하는 현장에서 사용하는 모든 연산자에 적용됩니다. 몇 가지 일반적인 것:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

`\tr`, `\rank` 및 `\diag`는 아래 첨자가 있는 경우 옆에 속하므로 별표가 제거되어 있습니다. `\esssup`과 같은 극한 스타일 연산자만 별표를 얻습니다.

`\mathrm{argmin}`을 인라인으로 작성하는 대신 서문에서 연산자를 선언하면 두 배의 성과를 거둘 수 있습니다. 표기법은 전체 문서에서 일관되게 유지되며, 저널에서 다른 렌더링을 요구하는 경우 모든 방정식을 검색하는 대신 한 줄을 변경하면 됩니다. 별표 표시된 아래 첨자 배치가 어떻게 작동하는지 확인하려면 [라이브 놀이터](/live/)에서 선언과 표시 줄을 함께 사용해 보세요.

흔한 실수: `\max` 또는 `\deg`와 같은 기존 명령과 이름이 충돌하는 연산자를 선언하는 것입니다. LaTeX는 "이미 정의됨" 오류와 함께 중지됩니다. 새로운 이름을 선택하거나 원본을 교체하려는 경우에만 `\renewcommand`를 사용하세요.