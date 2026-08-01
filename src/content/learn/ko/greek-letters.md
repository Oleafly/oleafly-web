---

title: "그리스와 일상의 상징"
description: "알파부터 오메가까지, 그리고 매일 입력하는 연산자와 관계까지."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# 그리스어와 일상의 상징

매일 입력하는 대부분의 기호는 그리스 문자와 몇 가지 연산자 및 관계로 구성됩니다. 모두 같은 방식으로 작동합니다. 즉, 백슬래시와 기호 이름이 더해지며 수학 모드에서만 작동합니다. 이 페이지는 일일 세트입니다. 자세한 내용은 [수학 기호 치트시트](/learn/math-symbols-cheatsheet/)를 참조하세요.

## 그리스어(수학 모드)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

소문자 명령은 소문자를 제공합니다: `\alpha`, `\beta`, `\gamma`. 대문자에 대한 명령의 첫 글자를 대문자로 표기합니다: `\Gamma`, `\Delta`, `\Omega`. 일부 그리스 대문자는 라틴 문자와 동일하기 때문에 모든 대문자가 명령으로 존재하는 것은 아닙니다. 대문자 알파는 단지 A이므로 `\Alpha`가 없습니다. 베타, 엡실론 및 기타 여러 경우에도 마찬가지입니다. 대신 라틴 문자를 입력하세요.

몇몇 문자에는 'var' 접두사가 붙은 변형 형태가 있습니다. `\epsilon`은 월상형이고 `\varepsilon`은 곱슬형입니다. `\theta`와 `\vartheta`, `\phi`와 `\varphi`, `\rho`와 `\varrho`는 같은 방식으로 다릅니다. 어느 형식도 더 정확하지 않습니다. 해당 분야에서 선호하는 것을 선택하여 문서 전반에 걸쳐 일관되게 사용하세요.

이들 모두는 수학 모드 명령이므로 실행 중인 텍스트의 그리스 문자는 `$\alpha$`로 작성됩니다. 텍스트에 `\alpha`만 있으면 [누락된 달러 삽입](/learn/missing-dollar/)에서 다루는 오류와 함께 컴파일이 중지됩니다.

## 일일 연산자 및 관계

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

첫 번째 줄은 산술 및 비교입니다. 더하기 빼기에는 `\pm`, 곱하기에는 `\cdot`, 십자 표시에는 `\times`, 나눗셈에는 `\div`, 비교에는 `\leq`, `\geq`, `\neq`, 근사 동등에는 `\about`, 동일성이나 합동에는 `\equiv`입니다. 두 번째 줄은 언어 설정입니다: 멤버십을 위한 `\in`, 포함을 위한 `\subset` 및 `\subseteq`, 합집합과 교집합을 위한 `\cup` 및 `\cap`, 빈 세트를 위한 `\emptyset`. 세 번째는 화살표와 분석을 다룹니다. 극한 및 함수 유형의 일반 화살표에 대한 `\to`, 요소가 가는 위치에 대한 `\mapsto`, 함축에 대한 `\Rightarrow`, 무한대에 대한 `\infty`, 부분 도함수와 기울기에 대한 `\partial` 및 `\nabla`는 [도함수 및 적분](/learn/derivatives-integrals/)에서 전체 처리됩니다.

이 모든 것 주위의 간격은 자동입니다. LaTeX는 `\leq`가 관계이고 `\cup`이 이진 연산임을 알고 그에 따라 간격을 두므로 유니코드 기호를 붙여넣는 대신 명령을 사용하는 것이 좋습니다. [라이브 놀이터](/live/)에 몇 가지 수식을 입력하고 렌더링되는 모습을 보면 이름이 가장 빨리 이해됩니다.