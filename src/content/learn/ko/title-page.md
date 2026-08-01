---

title: "제목 블록 및 제목 페이지"
description: "논문의 제목, 논문 및 보고서의 제목 페이지입니다."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# 제목 블록 및 제목 페이지

첫 번째 페이지 상단에 제목, 저자, 날짜 등의 제목 블록이 있는 논문이 열립니다. 대학의 사양에 맞게 전체 제목 페이지가 배치된 논문이 열립니다. LaTeX는 이를 두 가지 다른 문제로 취급합니다. 첫 번째는 `\maketitle`에 의해 자동화되고 두 번째는 `titlepage` 환경이라는 빈 캔버스입니다.

## 제목 블록

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

처음 세 명령은 메타데이터만 저장합니다. 실행 시 PDF에 아무 것도 나타나지 않으므로 서문에 위치할 수 있습니다. `\begin{document}` 뒤에 배치된 `\maketitle`은 저장된 블록이 조판되는 순간입니다. `\author` 내에서 `\\`는 줄을 나누고(이름 아래 소속을 표시하는 일반적인 방법), `\and`는 여러 저자를 구분하여 나란히 배치되도록 합니다. `\date{\today}`는 컴파일한 날짜의 날짜를 인쇄합니다. 날짜 줄을 완전히 생략하려면 `\date{}`를 빈 중괄호로 작성하세요. `\date`를 모두 제외해도 여전히 오늘 날짜가 인쇄됩니다.

`article` 클래스에서 블록은 아래 텍스트와 함께 첫 번째 페이지 상단에 위치합니다. '보고서'와 '책'에서는 자체 페이지를 얻습니다. 저널 및 회의 수업에서는 이 기계를 소속, 이메일 및 ORCID에 대한 자체 명령으로 대체하므로 장소 템플릿 내에서는 표준 명령이 아닌 샘플 파일을 따라야 합니다.

## 손으로 만든 제목 페이지

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

'제목 페이지' 환경은 번호가 없는 하나의 페이지와 완전한 수동 제어를 제공합니다. 이는 논문 규정이 일반적으로 요구하는 것입니다. 예제의 각 부분은 그 자리를 차지합니다. `\centering`은 환경 내에서 뒤따르는 모든 것을 중심에 둡니다. `\vspace*{2cm}`는 제목을 상단 가장자리에서 아래로 밀어냅니다. 페이지 상단의 별표가 없는 `\vspace`는 삭제되기 때문에 별표가 있는 양식이 중요합니다. `{\Large ...}` 주위의 중괄호는 글꼴 크기 변경 범위를 지정하여 그룹이 끝나는 곳에서 끝나고 `\\[1em]`은 그 아래에 추가 em 공간을 추가하여 줄을 바꿉니다. `\vfill`은 남아 있는 모든 높이를 흡수하는 신축 가능한 공간을 삽입하므로 제목의 길이에 관계없이 학위 설명과 날짜가 페이지 하단에 표시됩니다.

하나의 메커니즘을 사용하거나 다른 메커니즘을 사용하십시오. `\maketitle`과 `titlepage` 환경을 결합하면 두 개의 제목 페이지가 생성되며, 고전적인 초보자가 놓치는 것은 조용한 페이지입니다. `\title`과 `\author`를 정의하지만 `\maketitle`을 잊어버리므로 문서가 제목 없이 깔끔하게 컴파일됩니다. [문서 뼈대 강의](/learn/document-skeleton/)는 블록이 파일 전체에서 어디에 맞는지 보여줍니다.