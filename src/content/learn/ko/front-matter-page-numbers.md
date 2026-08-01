---

title: "로마어와 아랍어 페이지"
description: "위원회가 여전히 기대하는 머리말 번호 매기기."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# 로마자 다음 아랍어 페이지

거의 모든 논문이나 교과서를 열면 동일한 규칙을 볼 수 있습니다. 제목 페이지, 초록, 목차 및 감사의 말은 소문자 로마 숫자로 i, ii, iii로 번호가 매겨져 있으며, 첫 번째 실제 장은 일반 아라비아 숫자로 1페이지에서 다시 시작됩니다. 머리말은 별도의 예비 순서로 취급되며 대학원에서는 이 규칙을 명시적으로 확인합니다. LaTeX에서는 정확히 두 개의 명령이 필요합니다.

## 패턴

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}`은 두 가지 작업을 동시에 수행합니다. 즉, 숫자 스타일을 소문자 로마자로 전환하고 페이지 카운터를 1로 재설정하여 제목 페이지가 페이지 i가 됩니다. 그 뒤에 배치하는 모든 것, 일반적으로 `\maketitle`, 초록, [목차](/learn/table-of-contents/) 및 그림이나 표 목록에는 ii, iii, iv 등의 번호가 붙습니다.

그런 다음 첫 번째 장 직전에 `\pagenumbering{arabic}`이 스타일을 다시 전환하고 카운터를 다시 재설정하므로 `\chapter{Introduction}`이 새로운 페이지 1에서 열립니다. 재설정이 전체 요점입니다. 재설정이 없으면 소개가 7페이지와 같이 시작될 것인데, 이는 위원회나 인용 규칙에서 기대하는 것과 다릅니다.

`book` 및 `report` 클래스의 `\chapter`는 항상 새 페이지를 시작하므로 전환하기 전에 명시적인 `\newpage`가 필요하지 않습니다. 장이 없는 수업에서는 `\clearpage`를 먼저 추가하여 번호 매기기 변경이 페이지 중간에 발생하지 않도록 합니다.

## 당신에게 도움이 되는 수업

일부 논문 클래스는 `\frontmatter` / `\mainmatter` / `\backmatter`를 제공합니다. 이는 `book` 클래스에서 왔으며 동일한 내용을 말하는 더 높은 수준의 방법입니다. `\frontmatter`는 로마자 번호 매기기로 전환하고 장의 번호를 매기지 않습니다(그래서 서문에는 "1장" 레이블이 없습니다). `\mainmatter`는 아랍어로 전환되고 번호가 매겨진 장을 복원합니다. `\backmatter`는 끝에 있는 부록과 같은 자료에 대해 장 번호 매기기를 다시 끕니다. 대학의 템플릿이 `book` 또는 `memoir`을 기반으로 구축된 경우 원시 `\pagenumbering`보다 이러한 명령을 선호하세요. 왜냐하면 템플릿이 머리말에 대한 다른 헤더와 같은 추가 동작을 여기에 연결할 수 있기 때문입니다. 두 접근 방식은 충돌하지 않지만 둘 다 사용할 이유는 없습니다.

## 꼭 확인해야 할 점

로마 번호로 된 페이지는 목차와 일치해야 합니다. 초록이 ToC에서 "iv" 페이지로 표시되지만 "2"로 인쇄되는 경우, 일반적인 원인은 다루어야 하는 내용 뒤에 `\pagenumbering` 호출이 있거나 두 번째 컴파일이 누락되었기 때문입니다. ToC의 페이지 번호는 `.aux` 파일에서 나오므로 번호 매기기가 올바른지 판단하기 전에 [두 번 컴파일](/learn/compile-to-pdf/)해야 합니다. 컴파일하고 다시 컴파일한 다음 ToC를 실제 페이지와 비교합니다.