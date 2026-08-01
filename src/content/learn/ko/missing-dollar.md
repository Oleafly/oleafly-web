---

title: "누락된 달러 삽입됨"
description: "텍스트 모드로 유출된 첨자 및 수학 명령."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# 누락된 달러가 삽입됨

"Missing $ insert"는 가장 일반적인 LaTeX 오류이며 이름이 오해를 불러일으킵니다. LaTeX는 돈을 쓰라고 요구하는 것이 아니라 텍스트 모드에 수학 전용 구문이 나타난다고 알려줍니다. 복구를 위해 '$' 자체를 삽입하고 컴파일을 계속하며 이상한 기울임꼴 출력을 다운스트림에 남기는 경우가 많으므로 메시지는 어깨를 으쓱하기보다는 실제로 수정할 가치가 있습니다.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## 무엇이 그것을 유발하는가

두 문자와 명령 클래스는 수학 모드에만 속합니다. 밑줄 `_`과 캐럿 `^`은 아래 첨자와 위 첨자를 만들고 `\alpha`, `\frac`, `\leq`와 같은 명령은 수학 기호를 생성합니다. 일반 텍스트로 된 내용 중 하나라도 오류가 발생합니다. 고전적인 경우는 파일 이름이나 유전자 이름과 같이 밑줄이 포함된 식별자입니다. 문장의 `DNA_seq`는 `_`에서 이동합니다.

수정 사항은 의도한 내용에 따라 다릅니다. 밑줄이 리터럴 문자인 경우 이스케이프 처리하세요. `DNA\_seq`는 실제 밑줄로 이름을 인쇄합니다. 아래 첨자를 의미했다면 수학을 의미하므로 표현식을 래핑하십시오. `$x_i$`는 올바른 간격으로 기울임꼴로 x를 아래 첨자 i로 설정합니다. 텍스트에서 이스케이프해야 하는 전체 문자 목록에는 [자체 교훈](/learn/special-characters/)이 있으며 수학 구분 기호 자체는 [수학 모드 기본 사항](/learn/math-mode/)에서 다룹니다.

## 로그가 이상한 곳을 가리킬 때

보고된 줄 번호는 LaTeX에서 문제를 발견한 위치이며 반드시 문제를 일으킨 위치는 아닙니다. 일반적인 범인은 이전에 닫히지 않은 `$`입니다. 수학 모드를 열었지만 결코 닫지 않았기 때문에 LaTeX는 문제가 강제로 발생할 때까지(종종 문단 끝) 수학 모드에서 실행되었습니다. 수학 모드에서는 단락 나누기가 불법이므로 디스플레이 수학 내부의 빈 줄은 동일한 오류를 발생시킵니다. 따라서 플래그가 지정된 행이 무해해 보일 때 홀수 개의 달러 기호를 위쪽으로 스캔하고 모든 `\[`에 일치하는 `\]`이 있는지 확인하십시오.

구문 강조는 폭주를 발견하는 빠른 방법입니다. 모든 LaTeX 편집기는 수학 영역을 다르게 색칠하므로 갑자기 수학 색상으로 렌더링되는 단락은 닫히지 않은 달러를 한눈에 정확히 찾아냅니다.

마지막 주의 사항: LaTeX는 누락된 '$'를 삽입하여 복구하기 때문에 PDF가 계속 빌드되는 경우가 많습니다. 오류가 무해하다는 증거로 PDF를 사용하지 마십시오. 복구된 출력에는 일반적으로 텍스트가 있어야 할 위치에 기울어진 기울임꼴 또는 잘못된 공백이 있으므로 로그가 깨끗해질 때까지 소스를 수정하십시오.