---

title: "자체적으로 번호가 매겨진 제목"
description: "단락별 섹션, 별표 표시된 양식, secnumlength."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# 자체적으로 번호가 매겨진 제목

워드 프로세서에서는 제목에 손으로 번호를 매기고 이동할 때마다 손으로 다시 번호를 매깁니다. LaTeX는 그렇게 하는 것을 거부합니다. 섹션, 하위 섹션, 장 등 각 제목이 무엇인지 선언하면 번호가 자동으로 지정됩니다. 문서 중간에 새 섹션을 삽입하고 다음 컴파일 시 번호를 다시 매긴 후의 모든 항목과 모든 상호 참조 및 이를 가리키는 모든 목차 항목을 삽입합니다.

## 계층 구조

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

이러한 명령은 고정 래더를 형성합니다. `\section`은 `article` 클래스의 일상적인 일꾼이며, 그 아래에 `\subsection`과 `\subsubsection`이 중첩되어 있습니다. `\chapter`는 `report` 및 `book` 클래스에만 존재합니다. 이것이 정의되지 않은 제어 순서로 인해 논문 장을 기사 템플릿에 붙여넣는 데 실패하는 이유입니다. `\part`는 장 위에 위치하며 긴 책을 제외하면 거의 사용되지 않습니다. `\paragraph`는 특이한 점입니다. 한 줄에 제목을 표시하는 대신 다음 텍스트와 같은 줄에 굵은 런인 제목을 생성하여 처음으로 거의 모든 사람을 놀라게 합니다.

각 명령은 중괄호 안에 제목 텍스트를 가져와 클래스가 선택한 글꼴과 크기로 인쇄하고 번호를 매긴 다음 `\tableofcontents`가 나중에 찾을 수 있도록 기록합니다. 제목 스타일을 인라인으로 지정하지 마세요. 다른 제목 글꼴을 원하는 경우 이는 서문에서 문서 전체에 걸쳐 결정됩니다.

## 숫자 억제

별표 양식에는 숫자가 표시되지 않습니다: `\section*{Acknowledgements}`. 별표는 또한 제목을 목차와 번호 매기기 순서에서 완전히 벗어나도록 유지하므로 별표 표시된 항목이 없는 것처럼 다음 섹션이 계속됩니다. 이것이 바로 짧은 논문의 감사의 말, 서문 또는 독립된 결론에 대해 원하는 것입니다. 별표 표시된 섹션이 여전히 목차에 표시되어야 하는 경우 [목차 강의](/learn/table-of-contents/)에서 한 줄 수정 방법을 다룹니다.

## 번호 매기기 깊이 제어

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumlength`는 번호 매기기 깊이를 결정합니다. 'article'에서 섹션은 레벨 1, 하위 섹션 레벨 2, 하위 하위 섹션 레벨 3이므로 카운터를 2개의 섹션과 하위 섹션으로 설정하지만 하위 섹션 제목은 형식을 유지하면서 번호를 매기지 않은 상태로 둡니다. `toclength`는 목차에 대한 동일한 아이디어입니다. 페이지에 번호가 매겨진 항목과 관계없이 TOC 목록의 깊이를 제어합니다. 두 줄 모두 서문에 속합니다.

일반적인 실수는 레벨을 건너뛰는 것입니다. 예를 들어 더 작은 제목을 좋아하기 때문에 `\section`에서 바로 `\subsubsection`으로 점프하는 것입니다. 번호 매기기는 여전히 작동하지만 "1.0.1"과 같은 이상한 결과를 생성하므로 독자는 구조를 추적할 수 없습니다. 의미에 맞는 제목 수준을 선택하고 수업에서 모양을 처리하도록 합니다. 문서의 뼈대가 어떻게 조화를 이루는지 확실하지 않은 경우 [문서 뼈대 강의](/learn/document-skeleton/)에서 안내해 드립니다.