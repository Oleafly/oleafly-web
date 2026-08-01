---

title: "PDF의 다른 부분을 가리킵니다."
description: "label 및 ref, 그리고 자동 이름을 위한 Cleveref."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# PDF의 다른 부분을 가리킵니다.

"그림 3 참조"를 손으로 입력하는 것은 지킬 수 없는 약속입니다. 종이 앞부분에 숫자 하나를 추가하고, 틀린 후에는 손으로 입력한 모든 숫자를 추가합니다. LaTeX는 두 부분으로 구성된 메커니즘으로 이 문제를 해결합니다. `\label`은 번호가 매겨진 항목에 사용자가 선택한 이름을 첨부하고, `\ref`는 그 항목의 결과가 무엇이든 인쇄합니다. 이름을 참조하면 컴파일러는 숫자를 정직하게 유지합니다.

## 라벨 및 참조

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}`는 `sec:methods` 키 아래에 가장 최근에 할당된 번호(여기서는 해당 섹션)를 기록합니다. 나중에 `\ref{sec:methods}`는 해당 숫자를 인쇄하고 `\eqref`는 방정식에 괄호 규칙을 추가하여 "1"이 아닌 "(1)"을 인쇄하는 amsmath 변형입니다.

이 예에서는 두 가지 세부 사항이 매우 중요합니다. 첫째, 그림 내부에서 레이블은 `\caption` 뒤에 와야 합니다. 캡션은 그림 카운터의 단계이기 때문입니다. 대신 현재 섹션 번호를 자동으로 선택하기 전에 배치된 레이블입니다. 둘째, `Figure~\ref{...}`의 `~`는 줄 바꿈되지 않는 공백으로, "Figure"가 한 줄을 끝내고 "3"이 다음 줄을 시작하도록 하는 대신 단어와 해당 숫자를 같은 줄에 유지합니다.

`sec:`, `fig:`, `eq:` 접두사는 순수한 관례입니다. LaTeX에서는 이를 요구하지 않지만 키를 읽을 수 있게 만들고 편집기가 자동 완성하여 레이블을 종류별로 그룹화합니다.

## 왜 보이나요??

레이블을 추가한 후 첫 번째 컴파일에서 `\ref`는 `??`를 인쇄합니다. 숫자는 이전 실행 중에 작성된 `.aux` 파일을 통해 확인되므로 새 레이블이 표시되려면 한 번 더 컴파일해야 합니다. [두 번 이상 컴파일하는 이유](/learn/compile-to-pdf/)에서 메커니즘을 설명합니다. 두 번의 연속 컴파일 후에도 살아남는 `??`는 거의 항상 `\ref`의 키가 `\label`의 키와 일치하지 않음을 의미합니다.

## 클레레프가 당신을 위해 단어를 씁니다

Cleveref 사용(하이퍼참조 후 로드):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}`은 유형 이름이 포함된 "그림 3"을 인쇄하고 레이블이 대신 테이블이나 방정식으로 판명되면 적용됩니다. `\Cref`는 문장 시작을 대문자로 표시하고 `\cref{eq:a,eq:b,eq:c}`는 목록을 범위로 압축합니다. 로드 순서에 유의하세요. Cleveref는 일반적인 규칙과 반대되는 [hyperref](/learn/hyperlinks/) 뒤에 와야 하는 몇 가지 패키지 중 하나입니다. 일찍 채택하세요. 손으로 쓴 "Figure~\ref" 문구로 가득한 종이에 `\cref`를 추가하는 것은 지루한 일입니다.