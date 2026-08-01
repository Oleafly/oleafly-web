---

title: "첫 번째 PDF를 컴파일하세요"
description: "LaTeX를 최대한 활용할 수 있는 작은 기사, 하나의 컴파일, 세 가지 아이디어입니다."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# 첫 번째 PDF를 컴파일하세요

Word나 Google Docs로만 글을 써본 적이 있다면 LaTeX는 한 가지 습관을 바꾸라고 요청합니다. 입력할 때 텍스트 서식을 지정하는 대신 일반 텍스트로 문서를 설명하고 프로그램에서 이를 조판합니다. 그 일반 텍스트는 `.tex` 파일에 들어 있습니다. 이 파일은 어떤 편집기에서든 열 수 있으며 단어와 각 조각이 *무엇인지* 알려주는 `\section{...}` 같은 명령이 포함된 일반 텍스트 파일입니다. 컴파일하면 이 소스가 완성된 PDF로 변환됩니다. LaTeX 엔진은 파일을 위에서 아래로 읽고, 모든 명령을 해석하고, 페이지를 배치하고, PDF를 작성합니다. 출력을 직접 포맷하지 마십시오. 소스를 편집하고 다시 컴파일합니다.

## 가장 작은 실제 문서

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

위에서 아래로 읽어보세요. `\documentclass{article}`은 엔진에 이것이 어떤 종류의 문서인지 알려주며 글꼴, 여백 및 제목 스타일에 대한 적절한 기본값을 설정합니다. `\title`, `\author` 및 `\date` 줄은 메타데이터만 저장합니다. 아직 아무것도 인쇄되지 않았으며 `\today`는 단순히 컴파일한 날짜를 의미합니다. `\begin{document}`는 실제 콘텐츠가 시작되는 위치를 표시합니다. `\maketitle`은 저장된 제목 블록이 페이지에 나타나는 순간입니다. ``\section{Introduction}'은 번호가 매겨진 제목을 인쇄하고 나중에 목차에서 찾을 수 있도록 조용히 기록합니다. 마지막 줄은 수학의 두 가지 측면을 보여줍니다. `$...$`는 문장 내부의 수식을 조판하는 반면, `\[ ... \]`는 자체적으로 중앙에 표시되는 줄을 제공합니다.

## 언어를 담고 있는 세 가지 아이디어

1. 명령은 백슬래시로 시작하고 일반적으로 중괄호 안에 인수를 취하므로 `\textbf{hello}`는 "hello를 굵은 글씨로 조판"을 의미합니다.
2. 환경은 `\begin{...}`과 `\end{...}` 사이의 영역을 감싸며 파일 본문 자체가 하나의 큰 `document` 환경입니다.
3. 서문은 `\begin{document}` 이전의 모든 것입니다. 문서를 구성하지만 눈에 보이는 텍스트를 생성하지 않습니다.

LaTeX의 다른 거의 모든 것은 이 세 가지의 변형입니다.

## 컴파일해 보세요

[Oleafly](/docs/getting-started/)에서 프로젝트를 생성하고 위의 소스를 붙여넣은 후 컴파일합니다. PDF가 소스 옆에 나타나고 SyncTeX는 양쪽을 연결합니다. PDF의 한 지점을 클릭하여 일치하는 소스 줄로 이동하거나 그 반대로 이동합니다. 프로젝트의 첫 번째 컴파일은 엔진이 필요한 것을 가져오는 동안 조금 더 오래 걸릴 수 있습니다. 나중에 실행하는 것이 더 빠릅니다.

예상할 수 있는 한 가지: 조만간 오류 메시지와 줄 번호와 함께 컴파일이 실패할 것입니다. 이는 완전히 정상적인 현상이며 일반적으로 명령 이름에 오타가 있거나 닫는 중괄호가 누락되었음을 의미합니다. 그것이 가리키는 줄을 수정하고 다시 컴파일하십시오.

## 다음

계속해서 [서문, 설명](/learn/preamble-explained/)을 진행하여 설정 라인이 실제로 무엇을 하는지 확인한 다음 공식에 대한 [수학 모드](/learn/math-mode/)를 확인하세요. 첫 번째 실제 페이지를 작성하는 동안 [치트시트](/learn/cheatsheet/)를 열어 두세요.