---

title: "a, b, c 라벨이 붙은 패널"
description: "하나의 캡션 아래 다중 패널 그림에 대한 하위 캡션입니다."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# a, b, c 라벨이 붙은 패널

논문에는 지속적으로 다중 패널 그림이 필요합니다. 패널(a)의 아키텍처, (b)의 훈련 곡선, (c)의 절제, 모두 하나의 그림 번호와 하나의 전체 캡션을 공유합니다. 이를 구축하는 깔끔한 방법은 (a), (b) 문자, 패널별 캡션 및 참조를 자동으로 처리하는 '하위 그림' 환경을 제공하는 'subcaption' 패키지입니다.

## 패턴

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

각 조각이 수행하는 작업은 다음과 같습니다. 외부 `Figure` 환경은 일반적인 부동이며 `[htbp]`는 LaTeX가 시도할 수 있는 배치를 순서대로 나열합니다: 여기 텍스트, 페이지 상단, 페이지 하단 또는 전용 부동 페이지. 각 '하위 그림'은 지정된 너비의 상자입니다. 여기서는 '0.48\textwidth'(텍스트 너비의 48%)입니다. 0.48의 두 패널은 작은 간격을 남기고 패널 사이의 `\hfill`이 늘어나 패널이 왼쪽 및 오른쪽 여백과 같은 높이에 놓이게 됩니다. 각 패널 내에서 `width=\linewidth`는 전체 페이지가 아닌 패널 너비에 맞게 이미지 크기를 조정합니다. 마지막 세부 사항은 사람들이 가장 자주 오해하는 부분입니다.

`하위 그림` 내부의 `\caption`은 해당 패널 아래에 작은 "(a) First" 스타일 레이블을 생성합니다. 'Figure' 안에 있지만 'SubFigure' 외부에 있는 끝에 있는 '\caption'은 그림 번호를 전달하는 주요 캡션입니다. [캡션 및 레이블](/learn/captions-labels/)에 설명된 대로 레이블은 가장 최근에 발행된 번호를 기록하므로 각 `\label`을 `\caption` 바로 뒤에 유지하세요.

## 참조 패널

위의 레이블을 사용하면 `\ref{fig:p}`는 숫자 2를 인쇄하고 `\ref{fig:p-a}`는 2a를 인쇄합니다. 문자만 원할 경우 `\subref{fig:p-a}`는 "a"만 인쇄하므로 "패널 (a) 및 (b)"와 같은 문장에 편리합니다. 이것이 바로 이미지 아래에 "(a)"를 수동으로 입력하는 것보다 `하위 캡션`을 사용하는 것의 실제 이점입니다. 패널을 추가하거나 순서를 바꾸면 문자의 번호가 자동으로 다시 매겨지며 모든 참조는 정확하게 유지됩니다.

## 행, 간격 및 일반적인 실수

세 번째 패널의 경우 너비를 약 `0.31\textwidth`로 축소하고 각 쌍 사이에 `\hfill`을 사용하여 다른 `하위 그림`을 추가하거나 하위 그림 행 사이에 빈 줄을 남겨 새 행을 시작합니다. 그러나 행 안의 빈 줄은 고전적인 실수입니다. 두 '하위 그림' 환경 사이의 빈 줄은 패널을 나란히 쌓는 대신 수직으로 쌓는 새 단락을 시작합니다. 패널이 한 행에 배치되지 않는 경우 먼저 비어 있는 빈 줄을 찾고, 줄 끝에 있는 '%'는 패널을 너무 넓게 밀어서 들어갈 수 없는 보이지 않는 줄 끝 공간을 주석 처리한다는 점을 기억하세요.