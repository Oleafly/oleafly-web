---

title: "종이 테이블처럼 생긴 테이블"
description: "표 형식, 북탭 규칙, 캡션, 레이블."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# 종이 테이블을 닮은 테이블

LaTeX의 테이블은 서로 다른 작업을 가진 두 개의 중첩 환경을 사용합니다. 내부 `표`는 셀 그리드를 구성합니다. 외부 '테이블'은 해당 그리드를 부동 소수점으로 만들어 숫자, 캡션 및 레이블을 전달할 수 있으므로 LaTeX는 페이지 공간이 있는 곳에 배치할 수 있습니다. 수평 규칙에 'booktabs' 패키지를 추가하면 결과는 스프레드시트 스크린샷이 아닌 출판된 논문의 표처럼 보입니다.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

## 외부 환경

`[htbp]` 인수는 LaTeX가 float를 배치할 수 있는 위치를 나열합니다. 여기 텍스트, 페이지 상단, 하단 또는 별도의 float 페이지에 있습니다. 이 순서대로 시도하고 네 가지를 모두 허용하면 테이블이 멀리 표류하는 것을 방지할 수 있습니다. 메커니즘은 [수레가 실제로 착륙하는 위치](/learn/position-Figures/)에 설명되어 있습니다. `\centering`은 그리드를 수평으로 중앙에 배치합니다. `\caption`은 번호가 매겨진 캡션을 인쇄하며, 관례에 따라 표 캡션은 아래에 있는 그림 캡션과 달리 표 위에 표시됩니다. `\label`은 `\caption` 뒤에 와야 합니다. 라벨은 [캡션 및 라벨](/learn/captions-labels/)에서 다루는 것처럼 가장 최근에 발행된 번호를 기록하기 때문입니다. 레이블이 있으면 텍스트의 `Table~\ref{tab:results}`는 항상 올바른 숫자를 인쇄합니다.

## 내부 그리드

`\begin{tabular}` 뒤의 `{lcc}`는 문자당 하나의 열을 선언합니다. `l`은 왼쪽 정렬, `c`는 가운데 정렬, `r`은 오른쪽 정렬입니다. 세 글자는 세 개의 열을 의미하며 모든 행은 정확하게 해당 개수의 셀을 제공해야 합니다. 행 내에서 `&`는 셀을 구분하고 `\\`는 행을 끝냅니다. 텍스트 열은 일반적으로 왼쪽 정렬로 가장 잘 읽히는 반면, 짧은 숫자 열은 일반적으로 가운데 정렬됩니다.

세 가지 규칙은 'booktabs'에서 나옵니다. `\toprule`은 테이블을 열고, `\midrule`은 헤더 행을 데이터에서 분리하고, `\bottomrule`은 테이블을 닫습니다. 이는 일반 `\hline` 명령을 대체하고 위와 아래의 간격이 올바르게 조정되어 제공되므로 테이블이 전문적으로 설정된 것처럼 보입니다. 수직선이 없고 데이터 행 사이에 규칙이 없습니다. `booktabs` 스타일은 의도적으로 두 가지를 모두 생략합니다. 추론은 [3가지 규칙 테이블](/learn/booktabs-beautiful/)에 정리되어 있습니다.

## 실용적인 참고 사항

가장 자주 발생하는 초보자 오류는 `&` 구분 기호 수와 선언된 열 간의 불일치, 행 끝의 잊어버린 `\\`입니다. 두 가지 모두 다음 줄을 가리키는 혼란스러운 오류 메시지를 생성합니다. 셀 수를 직접 계산하지 않으려면 [테이블 생성기](/tools/table-generator/)를 사용하여 시각적으로 그리드를 만들고 결과를 문서에 붙여넣으세요.