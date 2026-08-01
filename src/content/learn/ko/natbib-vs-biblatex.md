---

title: "natbib 습관과 biblatex 명령"
description: "괄호 및 텍스트 인용과 이를 대체하는 이름입니다."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# natbib 습관과 biblatex 명령

저자 연도 인용에는 두 가지 유형의 인용 명령이 필요합니다. "Knuth(1984)는 문학적 프로그래밍을 도입했습니다."에서처럼 저자가 문장의 일부인 경우도 있습니다. 때때로 인용은 "문학적 프로그래밍은 코드와 산문을 혼합합니다(Knuth, 1984)"에서와 같이 괄호 안에 있습니다. 평범한 `\cite`는 그러한 구별을 할 수 없습니다. 이것이 `natbib` 패키지가 존재하는 이유이며, biblatex가 동일한 아이디어에 대해 자체 이름 세트를 제공하는 이유입니다. 하나를 배웠고 다른 하나를 사용하여 템플릿을 건네받은 경우 이 페이지는 번역 테이블입니다.

## natbib 명령

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

니모닉은 `\citet`이 문장의 일부로 읽는 *텍스트* 인용이고, `\citep`이 괄호로 묶인 *괄호* 인용이라는 것입니다. 별표 표시된 변형은 작품을 처음 인용할 때 가끔 필요한 "et al." 대신 전체 저자 목록을 인쇄합니다. natbib은 또한 `\citep[p.~42]{knuth84}`에서와 같이 이름만 `\citeauthor`로, 연도만 `\citeyear`로, 페이지 번호에 대한 선택적 인수를 제공합니다. natbib은 전처리기 시대 패키지입니다. 이는 클래식 BibTeX 및 `plainnat` 또는 `apalike`와 같은 호환 가능한 `.bst` 스타일과 함께 작동합니다.

## biblatex 등가물

biblatex는 다른 이름으로 동일한 영역을 다룹니다. `\textcite{knuth84}`는 텍스트 형식 "Knuth (1984)"를 생성하고, `\parencite{knuth84}`는 괄호 "(Knuth, 1984)"를 생성하며, 일반 `\cite{knuth84}`는 로드된 스타일에 따라 정확한 모양이 달라지는 단순한 인용을 생성합니다. 나머지 부분에 대해서도 직접적인 유사어가 있습니다: `\citeauthor`, `\citeyear`, 그리고 페이지 번호와 같은 것에 대한 전주와 후주는 `\parencite[see][p.~42]{knuth84}`로 작성됩니다. 근육 기억이 문제인 경우 biblatex에는 `\citet` 및 `\citep`을 별칭으로 정의하는 `natbib=true` 패키지 옵션도 있어 마이그레이션이 거의 고통스럽지 않습니다.

## natbib에서 biblatex로 문서 마이그레이션

`.bib` 파일은 전혀 변경할 필요가 없습니다. 두 시스템 모두 동일한 데이터베이스를 읽습니다. 마이그레이션은 서문과 빌드에만 영향을 미칩니다. `\usepackage{natbib}` 및 `\bibliographystyle` 줄을 제거한 다음 `\usepackage[backend=biber,style=authoryear]{biblatex}`를 로드하고 `\addbibresource{refs.bib}`를 사용하여 데이터베이스를 가리킵니다. 문서 끝 부분의 `\bibliography{refs}`를 `\printbibliography`로 바꾸세요. 마지막으로 빌드가 'bibtex' 대신 'biber'를 실행하는지 확인하세요. 왜냐하면 biblatex는 데이터를 다른 형식으로 저장하고 이전 백엔드는 아무 것도 자동으로 생성하지 않기 때문입니다. 본문 텍스트를 건드리지 않으려면 호환성 옵션을 통해 natbib 명령 이름을 유지하고 서문만 변경하세요.

## 어느 것을 고를까

저널 템플릿이 이미 natbib을 로드한 경우 그대로 유지하세요. 클래스 파일과 싸우는 것은 그만한 가치가 있는 경우가 거의 없습니다. 선택한 새 문서의 경우 biblatex가 더 유연하고 유니코드를 더 잘 처리합니다. 더 광범위한 비교는 [Classic BibTeX 또는 biblatex](/learn/bibtex-vs-biblatex/)에 있으며 이후 스타일 전환은 [숫자, 저자 연도, 저널 스타일](/learn/change-citation-style/)에서 다룹니다.