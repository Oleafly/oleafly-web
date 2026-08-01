---

title: "재사용할 수 있는 뼈대"
description: "클래스, 서문, 제목, 섹션, 참고문헌: 거의 모든 논문의 모양입니다."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# 재사용할 수 있는 뼈대

내용을 제거하면 거의 모든 LaTeX 문서는 클래스 선언, 설정 서문, `\begin{document}`와 `\end{document}` 사이의 본문 등 동일한 골격을 갖습니다. 이 모양을 알고 나면 뼈대를 붙여넣고 제목을 변경하고 작성하여 새 프로젝트를 시작하십시오.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

위에서 아래로 읽기: `\documentclass[11pt]{article}`은 문서 유형을 선택하고 기본 글꼴 크기를 옵션으로 설정합니다. 디자인의 다른 모든 것은 이 선택에서 비롯됩니다. 클래스 라인과 `\begin{document}` 사이의 영역은 패키지가 로드되고 `\title` 및 `\author`와 같은 메타데이터가 저장되는 [서문](/learn/preamble-explained/)입니다. `\begin{document}`는 보이는 내용이 시작되는 위치를 표시하고, `\maketitle`은 저장된 제목 블록을 조판하고, 본문은 섹션, 그림, 결국 참고문헌으로 이어집니다. `\end{document}`는 문서를 닫습니다. 그 이후의 모든 내용은 자동으로 무시되며, 이로 인해 누군가가 잘못된 위치에 붙여넣은 텍스트 덩어리가 숨겨지는 경우가 있습니다.

## 클래스 선택

| 수업 | 사용 |
| --- | --- |
| `기사` | 논문, 숙제, 메모 |
| '보고' | 장으로 구성된 더 긴 보고서 |
| '책' | 서적 및 다수의 논문 |
| '비머' | 슬라이드 |

수업은 미용적인 것이 아닙니다. 존재하는 명령이 변경됩니다. `article`에는 `\chapter`가 없으므로 논문 장을 붙여넣는 것이 즉시 실패합니다. `report`는 장을 추가하고 제목에 자체 페이지를 제공합니다. 'book'은 양면 인쇄를 가정하고 오른쪽 페이지에 장을 엽니다. 'beamer'는 슬라이드 프레임 주변의 모든 것을 재구성합니다. 저널과 컨퍼런스는 자체 강의를 제공하며, 장소에 글을 쓸 때 해당 강의가 이 결정을 완전히 대체합니다.

두 가지 실수로 대부분의 뼈가 부러졌습니다. `\begin{document}` 앞에 텍스트가 있으면 "\begin{document} 누락" 오류가 발생합니다. 왜냐하면 프리앰블은 구성만 할 수 있고 인쇄할 수 없기 때문입니다. 그리고 `\end{document}`가 누락되면 컴파일러는 입력 끝에 도움이 되지 않는 메시지와 함께 파일 끝에서 기다리게 됩니다. 둘 중 하나가 나타나면 내용을 의심하기 전에 문서의 프레임을 확인하십시오.

뼈대가 확장됩니다. 4페이지 분량의 메모는 본문을 그대로 유지합니다. 논문은 [분할 장 파일](/learn/split-chapter-files/)에 표시된 것처럼 각 장을 자체 파일로 이동하고 루트에서 가져옵니다. 주변의 프레임은 변경되지 않습니다.