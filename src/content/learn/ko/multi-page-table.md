---

title: "한 페이지보다 긴 표"
description: "반복되는 긴 테이블의 머리글과 바닥글."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# 한 페이지보다 긴 테이블

일반적인 '테이블' 환경은 부동 소수점이며 부동 소수점은 단일 페이지에 맞아야 합니다. 60개의 행을 지정하면 LaTeX는 이를 부동 페이지에 밀어넣고 오버플로되도록 하거나 영원히 연기합니다. 해결책은 'longtable' 패키지입니다. 이 패키지는 스프레드시트 인쇄물처럼 여러 페이지에 걸쳐 페이지를 나누고 각 페이지에 헤더를 반복하는 테이블을 조판합니다.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## 헤더 블록의 작동 방식

'longtable'은 실제 데이터 행 앞에 최대 4개의 선언 블록으로 시작됩니다. `\endfirsthead` 위의 모든 내용은 테이블의 시작 부분에 한 번 인쇄되는 헤더입니다. `\endfirsthead`와 `\endhead` 사이의 모든 내용은 모든 후속 페이지의 상단에서 반복되는 헤더입니다. 이것이 바로 예제에서 동일한 "키 및 값" 줄이 두 번 나타나는 이유입니다. `\endfoot`으로 끝나는 블록은 테이블이 닿는 모든 페이지의 맨 아래에 인쇄됩니다. 여기서는 닫는 `\bottomrule`만 인쇄됩니다. 합계 줄과 같이 마지막 행 아래에만 표시되어야 하는 자료에 대한 '\endlastfoot'도 있습니다. 연속 힌트를 원하는 경우 일반적인 패턴은 풋 블록의 `\midrule \multicolumn{2}{r}{다음 페이지에 계속} \\`이고 마지막 풋의 실제 ``bottomrule`입니다.

선언 다음에는 셀 사이에 `&`가 있고 각 행 끝에 `\\`가 있는 일반 `표 형식`과 똑같이 작성된 데이터 행이 옵니다. 'booktabs' 규칙은 변경되지 않고 작동합니다. 대체 내용은 [3가지 규칙 표](/learn/booktabs-beautiful/)를 참조하세요.

## 부동 소수점이 아니며 이것이 의미하는 바

가장 중요한 동작 차이는 한 문장으로 표현됩니다. `longtable`은 float가 아닙니다. 소스에 배치한 위치에서 정확히 시작하고, 페이지가 구분되는 위치에서 중단되며 `[htbp]` 인수를 사용하지 않습니다. 또한 캡션 작동 방식도 변경됩니다. `table` 환경에서는 `longtable`을 래핑하지 않습니다. 대신, 테이블 자체 내부에 `\caption{...}\\`을 첫 번째 헤드 블록의 첫 번째 줄로 넣으면 다른 테이블과 동일한 순서로 번호가 매겨집니다.

## 의존하기 전에 알아야 할 두 가지

첫째, 열 너비는 전역적으로 결정되므로 LaTeX에서는 열 이동이 중지되기 전에 여러 번의 컴파일 단계가 필요할 수 있습니다. 레이아웃이 확정될 때까지 계속 컴파일하십시오. 둘째, 'longtable'은 2열 레이아웃 내에서 사용할 수 없으므로 대부분의 회의 템플릿에서 제외됩니다. 이러한 문서에서 현실적인 옵션은 테이블을 축소하거나 여러 부분으로 분할하거나 1열 부록으로 이동하는 것입니다.