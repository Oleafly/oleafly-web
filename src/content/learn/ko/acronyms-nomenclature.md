---

title: "약어 및 기호 목록"
description: "용어집-추가 스케치 또는 손으로 만든 목록이면 충분합니다."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 약어 및 기호 목록

긴 문서에는 약어가 누적되며 이를 둘러싼 규칙은 엄격합니다. 두문자어는 처음 사용할 때 전체 이름을 표기하고 나중에는 축약하며, 논문의 경우 일반적으로 머리글에 약어 목록이 필요합니다. 이를 수동으로 유지하는 것은 예측 가능한 방식으로 실패합니다. 두 장의 순서를 바꾸면 첫 번째 사용이 이동하고 갑자기 "ML(기계 학습)"이 나타나기 세 페이지 전에 "ML"이 나타납니다. `glossaries-extra` 패키지는 첫 번째 사용을 추적합니다.

## 자동화된 경로

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

`acronym` 옵션은 약어 지원을 활성화하고 `\makeglossaries`는 컴파일 중에 항목을 수집하는 기계를 켭니다. 각 `\newacronym`은 세 가지 인수, 즉 텍스트에 입력할 키, 짧은 형식, 긴 형식을 사용합니다. 서문이나 `\input` 별도의 파일에 모두 정의하여 한 곳에 보관하도록 하세요.

본문에는 약어 자체를 입력하지 않습니다.

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

문서의 첫 번째 `\gls{ml}`는 "ML(기계 학습)"을 인쇄하고 이후의 모든 항목은 "ML"만 인쇄합니다. 패키지는 소스에서의 위치가 아닌 사용법을 추적하기 때문에 구조 조정이 이동하는 곳마다 확장이 첫 번째 사용을 따릅니다. `\printglossaries`는 일반적으로 목차 뒤, 어디에 배치하든 수집된 약어 목록을 인쇄합니다. 관련 명령은 이에 대한 문법을 ​​다룹니다: 복수형의 경우 `\glspl`, 문장의 대문자 시작의 경우 `\Gls`.

캐치는 빌드입니다. LaTeX 패스 사이에 `makeglossaries` 도우미를 실행하여 항목을 정렬하고 형식을 지정해야 합니다. 그렇지 않으면 `\printglossaries`는 자동으로 아무것도 생성하지 않습니다. 전체 latexmk 설정은 이를 자동으로 처리합니다. 더 간단한 파이프라인은 그렇지 않을 수 있으며, Glossaries-extra는 이에 대한 대체 기능을 제공합니다. 목록이 표시되지 않기를 고집한다면 누락된 도우미 실행이 문서의 버그보다 훨씬 앞서 있는 첫 번째 용의자입니다.

## 손으로 만든 경로

간단한 기호 목록의 경우 직접 관리하는 '설명' 환경이면 충분합니다.

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

각 `\item[...]`은 대괄호 인수를 다음 설명과 함께 굵은 레이블로 인쇄합니다. 이는 정확히 표기법 목록의 모양입니다. 최초 사용 추적은 없지만 기호 목록에는 거의 필요하지 않습니다. 기호는 관계없이 수학에서 처음 나타나는 위치에 정의됩니다.

정직한 조언은 도구를 규모에 맞추라는 것입니다. 5개의 약어가 있는 문서는 손으로 관리하기가 더 쉽습니다. 40페이지가 포함된 200페이지짜리 논문은 그렇지 않으며 패키지는 설정 비용을 여러 배 이상 지불합니다. [목록 강의](/learn/lists/)에서는 `설명` 환경을 더 자세히 다룹니다.