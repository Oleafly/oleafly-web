---

title: "정리 및 증명 블록"
description: "amsthm 스타일, 공유 카운터, 교정 종료 표시."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# 정리와 증명 블록

수학적인 글쓰기는 정리, 보조정리, 정의 등 번호가 매겨진 진술을 기반으로 하며, 각각은 본문에서 출발하여 나중에 증명할 때 인용할 수 있도록 번호가 매겨져 있습니다. amsthm 패키지는 기계를 제공합니다. 문서에 필요한 블록 종류를 서문에서 한 번 선언한 다음 일반 환경으로 사용합니다.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## 환경 선언

`\newtheorem{theorem}{정리}[섹션]`은 `정리` 환경을 생성합니다. 첫 번째 인수는 입력할 환경 이름이고, 두 번째 인수는 인쇄되는 제목 텍스트이며, 뒤따르는 '[섹션]'은 섹션 번호 매기기를 연결하므로 섹션 2의 세 번째 정리는 정리 2.3이고 카운터는 새 섹션마다 재설정됩니다.

`\newtheorem{lemma}[theorem]{Lemma}`는 선택적 인수를 다른 위치에 배치합니다. 여기서는 뭔가 다른 의미를 갖습니다. `[theorem]`은 기본형이 자신의 정리 카운터를 유지하는 대신 정리 카운터를 공유한다고 말합니다. 공유 카운터는 단일 시퀀스인 정리 2.1과 Lemma 2.2를 생성합니다. 이는 Lemma 2.1과 Theorem 2.1이 모두 존재하는 병렬 시퀀스보다 따르기가 더 쉽습니다.

`\theoremstyle`은 뒤에 오는 모든 선언의 모양을 설정합니다. '일반' 스타일은 본문을 이탤릭체로 인쇄하는데, 이는 정리, 기본형, 명제에 대한 전통적인 처리 방법입니다. '정의' 스타일은 신체를 똑바로 유지하는데, 이는 정의와 예에 적합합니다. 세 번째 스타일인 'remark'는 더 가볍고 메모와 관찰에 적합합니다. 선언을 각각 사용해야 하는 스타일로 그룹화하세요.

## 블록 사용하기

환경의 선택적 인수는 제목 뒤에 이름을 인쇄하므로 `\begin{theorem}[선택적 이름]`은 정리 2.4(Fubini)와 같은 결과를 낳습니다. `proof` 환경은 이탤릭체 Proof 제목을 인쇄하고 오른쪽에 정렬된 작은 사각형인 교정 끝 표시로 닫힙니다.

`\qedhere`는 증명이 일반 텍스트로 끝나지 않을 때 해당 사각형의 위치를 ​​변경합니다. 증명의 마지막 줄이 표시된 방정식인 경우 자동 표시는 그 아래의 빈 줄에 표시됩니다. 디스플레이 안에 `\qedhere`를 쓰면 방정식의 한 줄에 사각형이 표시됩니다. 예제와 같이 증명이 일반 텍스트로 끝나면 명령은 무해하지만 불필요합니다.

정리 블록은 다른 것과 마찬가지로 번호가 매겨진 객체이므로 환경 내부의 `\label{thm:main}`과 텍스트의 `Theorem~\ref{thm:main}`은 [방정식의 숫자 및 포인터](/learn/number-equations/)에 설명된 일반적인 2단계 규칙을 사용합니다. 일반적인 선언 실수는 여러 단락 정의를 이탤릭체로 설정하는 `\theoremstyle{plain}` 아래에 모든 환경을 넣는 것입니다. 정의와 예시는 '정의' 스타일로 유지하세요.