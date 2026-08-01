---

title: "숫자, 저자 연도, 저널 스타일"
description: "데이터베이스를 다시 작성하지 않고도 스타일을 교체할 수 있습니다."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 숫자, 저자 연도, 저널 스타일

인용 스타일은 두 가지를 제어합니다. 즉, `[12]` 대 `(Knuth, 1984)`와 같은 텍스트 내 마커의 모양과 참조 목록의 각 항목 형식이 지정되는 방식입니다. 좋은 소식은 스타일이 `.bib` 데이터베이스와 완전히 분리되어 있다는 것입니다. 서문에서 한 줄을 변경하여 논문을 숫자에서 저자 연도로 전환하거나 다른 저널에 맞게 형식을 변경할 수 있습니다. 귀하의 항목은 그대로 유지됩니다.

## 클래식 BibTeX로 스타일 바꾸기

BibTeX를 사용하면 스타일이 `.bst` 파일 이름을 지정하는 `\bibliographystyle{...}` 명령에 있습니다. 인수를 바꾸고 다시 컴파일합니다.

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

저널과 컨퍼런스는 일반적으로 `IEEEtran.bst` 또는 `ACM-Reference-Format.bst`와 같은 자체 `.bst` 파일을 제공합니다. 해당 파일을 `main.tex` 옆에 두고 이름을 `\bibliographystyle`으로 지정하세요. `.bst`는 한 번에 구워집니다. 장소에서 저자 연도 인용을 원하는 경우 `\citep` 및 `\citet`과 같은 명령을 얻으려면 `natbib` 패키지도 필요합니다.

## biblatex로 스타일 바꾸기

biblatex의 경우 스타일은 패키지 자체의 옵션입니다.

```latex
\usepackage[style=authoryear]{biblatex}
```

다른 일반적인 값은 `[3-6]`, `style=alphabetic`, 추가 기능 패키지의 `style=apa` 또는 `style=ieee`와 같은 압축 범위의 `style=numeric`, `style=numeric-comp`입니다. biblatex 스타일은 기존 `.bst` 언어가 아닌 LaTeX로 작성되었기 때문에 예를 들어 구두점을 변경하거나 URL을 삭제하는 등의 조정이 훨씬 쉽습니다.

## 전환 후 제대로 다시 컴파일

스타일 변경 후에도 이전 보조 파일에는 이전 스타일로 포맷된 데이터가 여전히 포함되어 있으므로 전체 주기를 실행하십시오. 한 번 컴파일하고 백엔드(클래식 BibTeX의 경우 `bibtex`, biblatex의 경우 `biber`)를 실행한 다음 상호 참조가 안정되도록 두 번 더 컴파일하십시오. Oleafly는 이 주기를 실행하지만 수동 전환 후 인용이 오래되어 보이는 경우 '.aux' 및 '.bbl' 파일을 삭제하고 처음부터 다시 작성하면 문제가 해결됩니다.

## 어떤 제품군을 사용해야 합니까?

대상 장소가 '.bst' 파일이나 BibTeX를 기대하는 클래스를 제공하는 경우 클래식 BibTeX를 사용하세요. 대부분의 저널에서는 여전히 그런 상황입니다. 논문이나 사전 인쇄에서와 같이 형식을 직접 제어하는 ​​경우 biblatex가 더 적합한 선택입니다. 장단점은 [Classic BibTeX 또는 biblatex](/learn/bibtex-vs-biblatex/)에서 다루고, 명령 차이점은 [natbib 습관 대 biblatex 명령](/learn/natbib-vs-biblatex/)에서 다룹니다.