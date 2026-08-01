---

title: "클래식 BibTeX 또는 biblatex"
description: "백엔드, 스타일, 그리고 매일 바뀌는 것."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# 클래식 BibTeX 또는 biblatex

LaTeX에는 동일한 `.bib` 파일을 읽지만 그 외 거의 모든 부분이 다른 두 가지 인용 시스템이 있습니다. Classic BibTeX는 1980년대부터 시작되었습니다. 작은 외부 프로그램이 자체 스택 기반 언어로 작성된 스타일 파일을 사용하여 참조 형식을 지정합니다. biblatex는 최신 대체품입니다. 서식 지정은 LaTeX 자체에서 이루어지며, 정렬 및 데이터 처리를 수행하는 'biber'라는 도우미 프로그램이 사용됩니다. 이름이 헷갈릴 정도로 비슷해요. "BibTeX"는 오래된 프로그램이자 느슨하게는 오래된 시스템인 반면, "biblatex"는 'biber'를 백엔드로 사용하는 LaTeX 패키지라는 점을 기억하세요.

| | 비브텍스 | 비블라텍스 + 비버 |
| --- | --- | --- |
| 나이 | 클래식 | 현대 |
| 스타일 | `.bst` | `.bbx`/`.cbx` |
| 유니코드 | 깨지기 쉬운 | 강한 |
| 저널 지원 | 유니버설 | 성장 |

## 실제로 차이점이 의미하는 것

스타일 행이 가장 중요합니다. BibTeX 스타일은 거의 누구도 읽거나 수정할 수 없는 `.bst` 파일이므로 저널에서 제공하는 내용을 사용하세요. biblatex 스타일은 일반적인 LaTeX이며 참고문헌(`.bbx`)과 인용(`.cbx`) 구성 요소로 나뉘며 URL 삭제 또는 구두점 변경과 같은 작은 변경은 한 줄 사용자 정의입니다. 참조에 악센트가 있는 이름이나 라틴어가 아닌 스크립트가 포함된 경우 유니코드 행이 중요합니다. Classic BibTeX는 모든 문자가 `\'{e}` 및 친구로 이스케이프되지 않는 한 이를 엉망으로 만드는 반면, biber는 기본적으로 UTF-8을 처리합니다. 마지막 행은 고전적인 BibTeX가 살아남은 이유입니다. 대부분의 저널과 컨퍼런스는 여전히 `.bst` 파일을 배포하고 고전적인 툴체인을 기대하며 제출 시스템은 종종 다른 것을 거부합니다.

## biblatex 문서의 모습

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

클래식 패턴과 비교하면 `\addbibresource{refs.bib}`(확장 포함)는 프리앰블로 이동하고 `\printbibliography`는 `\bibliography{refs}`를 대체하며 스타일은 패키지 옵션이므로 `\bibliographystyle` 줄이 없습니다. 빌드는 `bibtex` 대신 `biber`를 실행해야 합니다. 잘못된 백엔드를 실행하는 것은 [빈 참고문헌](/learn/bibliography-empty/)의 일반적인 원인입니다.

## 선택하는 방법

가능한 시기는 장소에서 결정하도록 하세요. 템플릿이 `.bst` 파일을 제공하거나 작성자 지침에 BibTeX가 언급되어 있는 경우 기존 BibTeX를 사용하고 이에 맞서지 마세요. 논문, 사전 인쇄 또는 강의 노트와 같이 형식을 제어할 수 있는 경우 biblatex가 더 나은 도구입니다. 깔끔한 사용자 정의, 실제 유니코드 지원 및 웹 소스를 위해 특별히 만들어진 항목 유형입니다. `.bib` 데이터베이스는 두 시스템 모두에서 변경되지 않고 작동하므로 선택은 영구적이지 않습니다. 인용 명령은 둘 사이에 다르며 [natbib 습관 대 biblatex 명령](/learn/natbib-vs-biblatex/)은 한 세트를 다른 세트에 매핑합니다.