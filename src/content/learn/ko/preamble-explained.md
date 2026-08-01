---

title: "위의 모든 내용은 시작됩니다{문서}"
description: "패키지, 메타데이터 및 로드 순서: 프리앰블에 속하는 것과 포함되지 않는 것"
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# 위의 모든 내용은 시작{document}

`\documentclass{...}`와 `\begin{document}` 사이의 모든 내용은 **서문**입니다. 눈에 보이는 텍스트가 생성되지 않습니다. 실행을 구성합니다. 글꼴, 여백, 패키지, 사용자 정의 명령 및 문서 메타데이터가 모두 여기에 있으므로 완성된 문서의 서문이 소개보다 길어지는 경우가 많습니다. 각 줄의 기능을 알게 되면 복사된 템플릿은 더 이상 마법이 아닌 체크리스트가 됩니다.

## 해부학

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

`\documentclass`의 옵션은 전역 기본값을 설정합니다. `11pt`는 다른 모든 항목의 기본 글꼴 크기이고 `a4paper`는 용지 크기를 선언합니다. 두 인코딩 라인은 역사적 동반자입니다. 'inputenc'는 엔진에 소스 파일이 UTF-8임을 알려주고, 'fontenc'는 글꼴 인코딩을 선택하여 악센트가 있는 문자가 합성이 아닌 실제 글리프가 되도록 합니다. 현재 LaTeX는 이미 UTF-8 입력을 가정하므로 새 문서에서는 이 줄이 생략된 것을 볼 수 있지만 무해하며 템플릿은 호환성을 위해 이를 유지합니다.

중간 블록은 기능 패키지를 로드합니다. [geometry](/learn/margins-geometry/)는 하나의 옵션으로 여백을 설정하고, `amsmath` 및 `amssymb`는 거의 모든 기술 문서에 필요한 수학 환경과 기호를 제공하고, `graphicx`는 그림에 `\includegraphics`를 활성화하고, `booktabs`는 테이블을 전문적으로 보이게 만드는 규칙을 제공합니다. 마지막으로 [hyperref](/learn/hyperlinks/)는 참조 및 인용을 클릭할 수 있게 만들고 의도적으로 마지막에 로드됩니다. 왜냐하면 다른 많은 패키지의 내부를 재정의하기 때문입니다.

`\title`, `\author` 및 `\date` 줄은 메타데이터만 저장합니다. `\maketitle`이 본문에서 실행될 때까지 아무 것도 인쇄되지 않습니다. 이것이 바로 이것이 프리앰블에 위치할 수 있는 이유입니다.

## 경험 법칙

몇 가지 습관이 서문을 건강하게 유지합니다. 작업당 하나의 패키지를 로드하고 마진을 설정하는 두 가지 방법과 같이 동일한 영역을 놓고 싸우는 패키지 스택을 방지합니다. 끝에 와야 하는 클레레레프와 같은 몇 가지 문서화된 예외를 포함하여 끝에 하이퍼참조를 유지하세요. 클래스 옵션에 문서 전체 선택 항목을 분산시키지 말고 누구나 볼 수 있는 곳에 '11pt' 또는 'twocolumn'을 한 번 선언하도록 합니다. 그리고 [맞춤 매크로](/learn/custom-commands/)가 몇 줄을 초과하면 여러 문서가 하나의 정의 세트를 공유할 수 있도록 매크로를 `.sty` 파일로 이동하세요.

가장 유용한 규율은 부정적인 것입니다. 왜 프리앰블 라인이 있는지 모른다면 문서가 프리앰블 라인에 의존하기 전에 알아내십시오. 복사된 서문에는 데드라인이 누적되고, 데드라인은 패키지 충돌이 숨어 있는 곳입니다. [문서 뼈대](/learn/document-skeleton/) 및 [엔진 비교](/learn/engines-compared/)도 참조하세요.