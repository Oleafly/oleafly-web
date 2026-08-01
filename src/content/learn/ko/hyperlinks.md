---

title: "PDF 내부 링크"
description: "하이퍼참조, URL, href, 색상 및 PDF 메타데이터."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# PDF 내부 링크

PDF는 단순한 화면상의 종이가 아닙니다. 클릭 가능한 URL, 올바른 그림으로 이동하는 상호 참조, 참고 문헌으로 이동하는 인용, 섹션 제목에서 작성된 사이드바 개요 등 라이브 링크를 전달할 수 있습니다. LaTeX에서는 'hyperref'라는 하나의 패키지가 이 모든 것을 제공합니다. 그것을 로드하면 문서의 모든 `\ref`, `\cite` 및 목차 항목이 조용히 클릭 가능해지며 소스의 나머지 부분은 변경되지 않습니다.

## 하이퍼참조 로드 및 구성

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

대괄호 안의 옵션은 링크 모양을 제어합니다. 기본적으로 hyperref는 각 링크 주위에 색상이 지정된 직사각형을 그립니다. 이는 대부분의 사람들이 보기 흉하다고 생각합니다. `colorlinks=true`를 설정하면 상자가 색상이 있는 텍스트로 대체되고, 세 가지 색상 옵션이 링크 유형별로 이를 분할합니다. `linkcolor`는 섹션 및 그림 참조와 같은 내부 점프를 다루고, `citecolor`는 인용을 다루고, `urlcolor`는 웹 주소를 덮습니다. 인용이 많은 논문이 그렇지 않으면 파란색 벽으로 바뀔 수 있기 때문에 이를 분할하는 것이 중요합니다.

## URL 대 href

두 연결 명령은 서로 다른 작업을 수행합니다. `\url{...}`은 주소 자체를 타자기 글꼴로 인쇄하고 클릭 가능하게 만듭니다. 이는 독자가 링크가 어디로 가는지 볼 수 있는 참고문헌이나 각주에서 원하는 것입니다. `\href{address}{text}`는 웹페이지의 링크와 같이 사용자가 제공하는 텍스트 뒤에 주소를 숨깁니다. 인쇄될 수 있는 문서에서는 `\url`을 선호하세요. '\href' 라벨은 종이 판독기에 주소를 입력할 방법을 제공하지 않기 때문입니다.

실용적인 보너스: `\url`은 일반 타자기 글꼴 URL이 할 수 없는 일인 주소를 손상시키는 하이픈을 삽입하지 않고 여러 줄에 걸쳐 긴 주소를 나누는 방법을 알고 있습니다.

## PDF 메타데이터

`\hypersetup`을 사용하면 로드 후 하이퍼참조 옵션을 변경할 수 있으며 문서 메타데이터를 설정하는 곳이기도 합니다. `pdftitle` 및 `pdfauthor` 필드는 PDF 리더가 창 표시줄과 파일 속성에 표시하는 제목과 작성자를 채웁니다. 이러한 항목이 없으면 독자는 제출하거나 공유하는 문서에서 완료되지 않은 것처럼 보이는 파일 이름이나 첫 번째 제목을 표시하는 경우가 많습니다. `\usepackage{hyperref}` 이후 언제든지 프리앰블에서 `\hypersetup`을 호출할 수 있습니다.

## 인쇄에 적합한 문서

인쇄용 문서의 경우 'hidelinks'를 사용하세요. 옵션 `\usepackage[hidelinks]{hyperref}`로 전달하면 화면에서 모든 링크를 클릭할 수 있지만 색상 상자와 색상 텍스트가 모두 제거되므로 인쇄된 페이지가 완전히 정상적으로 보입니다. 많은 저널 수업에서는 이것이 바로 필요합니다.

피해야 할 일반적인 실수 중 하나: hyperref는 많은 내부 명령을 재정의하므로 프리앰블의 마지막 패키지 중 하나로 로드되어야 합니다. 링크가 잘못된 페이지를 가리키거나 다른 패키지에서 이상한 오류가 발생하는 경우 로드 순서를 가장 먼저 확인해야 합니다. 하이퍼참조를 클릭 가능하게 만드는 `\label` 및 `\ref` 메커니즘은 [상호 참조](/learn/cross-references/)를 참조하세요.