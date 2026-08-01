---

title: "명령인가, 환경인가?"
description: "매크로는 인수를 취합니다. 환경은 지역을 래핑합니다."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# 명령인가, 환경인가?

일반 텍스트 외에 LaTeX에 입력하는 모든 내용은 명령 또는 환경이라는 두 가지 형태 중 하나를 취합니다. 첫 번째 오류 메시지가 나타날 때까지는 이러한 구별이 학문적으로 들립니다. LaTeX 불만의 절반은 하나가 다른 하나가 속한 곳에서 사용되는 것에 관한 것입니다. 어떤 모양을 보고 있는지 알아보는 방법을 배우면 문서와 오류를 모두 읽을 수 있습니다.

## 명령

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

명령은 백슬래시 뒤에 이름이 오는 형태로, 나타나는 지점에서 대체를 수행합니다. `\textbf{argument}`는 중괄호 안에 하나의 인수를 가져와 굵은 글씨로 조판합니다. 효과는 중괄호로 시작하고 끝납니다. 명령은 여러 개의 중괄호 인수를 사용할 수 있으며, 많은 경우 `\documentclass[11pt]{article}`과 같이 앞에 대괄호로 묶인 선택적 인수도 허용합니다.

처음 두 줄은 명령이 사용자가 만들 수 있는 것임을 보여줍니다. `\newcommand{\foo}{bar}`는 `bar`라는 텍스트를 확장하는 `\foo`라는 이름의 새 명령을 정의하며, 이후 아무 곳에나 `\foo`를 입력하면 `bar`가 생성됩니다. 이는 [사용자 정의 매크로](/learn/custom-commands/)의 메커니즘이자 패키지 작동 방식이기도 합니다. 패키지는 주로 명령 정의 파일입니다.

일찍 알아두어야 할 한 가지 특이한 점은 `\LaTeX`와 같은 명령은 뒤에 있는 공백을 삼키기 때문에 `\LaTeX is fun`은 함께 실행되는 단어를 인쇄한다는 것입니다. 공백을 유지하려면 `\LaTeX{} is fun` 또는 `\LaTeX\ is`라고 씁니다.

## 환경

```latex
\begin{center}
 Centered block
\end{center}
```

환경은 일치하는 `\begin{...}` 및 `\end{...}` 쌍 사이의 문서 영역을 래핑하고 해당 동작을 내부의 모든 항목에 적용합니다. 여기서 'center' 환경은 블록의 각 라인을 중앙에 배치합니다. 환경은 열린 역순으로 닫히면 중첩될 수 있으며 인수도 사용할 수 있습니다. `\begin{tabular}{ll}`은 테이블을 열고 열 사양을 전달합니다.

환경은 균형을 이루어야 하기 때문에 독특한 방식으로 실패합니다. `\begin{itemize} done by \end{document}`와 같은 오류는 환경이 열렸지만 닫히지 않았음을 의미합니다. 누락된 `\end`를 찾으세요. 오류 이름이 표시된 줄을 쳐다보지 마십시오.

## 경험 법칙

명확한 시작과 끝으로 영역을 감싸고 있다면 아마도 환경일 것입니다. 작은 대체나 스위치라면 명령이다. 두 가지 모양은 심지어 겹칩니다. 모든 환경 `foo`는 내부적으로 `\foo` 및 `\endfoo` 명령 쌍으로 구현됩니다. 가장 많이 접하게 될 명령과 환경을 둘러보려면 [모든 명령 설명](/learn/every-command-explained/)을 참조하거나 [라이브 놀이터](/live/)에서 두 가지 모양을 모두 시도해 보세요.