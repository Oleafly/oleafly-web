---

title: "지속되는 .bib 구축"
description: "항목 유형, 필수 필드, 안정적인 키."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 지속되는 .bib 구축

`.bib` 파일은 인용할 수 있는 모든 내용을 담은 작은 일반 텍스트 데이터베이스입니다. 각 항목에는 유형, 키 및 필드 집합이 있으며 동일한 파일이 수년간 작성하는 모든 논문에 사용될 수 있습니다. 유형을 선택하고, 필드를 채우고, 키 이름을 지정하는 방법에 대해 약간의 규율을 적용하면 나중에 저널 스타일에서 갑자기 기록하지 않은 필드를 원할 때 실질적인 고통을 덜 수 있습니다.

## 항목 분석

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

`@` 뒤의 단어는 항목 유형으로, 이것이 어떤 작업인지, 따라서 어떤 필드를 예상하는지 스타일에 알려줍니다. `knuth84`는 인용 키이며, `\cite{...}` 안에 입력하는 핸들입니다. 다른 모든 것은 필드입니다. `author` 필드는 스타일이 안정적으로 이름을 축약하고 정렬할 수 있도록 `Last, First` 형식을 사용하고, `pages`는 LaTeX가 페이지 범위 대시로 조판하는 이중 하이픈을 사용합니다.

## 실제로 필요한 항목 유형

6가지 유형은 거의 모든 학술 작문을 포괄합니다. 저널 논문에는 `@article`을, 컨퍼런스 및 워크숍 논문에는 `@inproceedings`, 도서에는 `@book`, 논문에는 `@phdesis`, 기관 보고서 및 여러 사전 인쇄에는 `@techreport`, 소프트웨어와 웹사이트를 포함한 기타 항목에는 `@misc`를 사용하세요. 스타일이 각 스타일의 형식을 다르게 지정하기 때문에 올바른 유형을 선택하는 것이 중요합니다. `@inproceedings` 항목은 `booktitle`(컨퍼런스 이름)을 원하는 반면, `@article`은 `저널`을 원합니다.

## 필수 필드 및 검증인이 불만을 제기하는 이유

각 유형에는 필수 필드가 있으며, 누락된 항목은 참고문헌 항목이 엉망으로 나오거나 백엔드 경고를 유발하는 가장 일반적인 이유입니다. `@article`의 경우 필수 항목은 `author`, `title`, `journal`, `year`입니다. `@inproceedings`, `author`, `title`, `booktitle`, `year`의 경우. '연도' 또는 '저자'가 누락되는 것은 전형적인 실패입니다. 저자 연도 스타일은 말 그대로 인용 라벨을 구성할 수 없기 때문입니다. `volume`, `pages`, `doi` 및 `publisher`와 같은 선택 필드는 항목을 더 유용하게 만들어주므로 소스가 앞에 있는 동안 기록하세요. [BibTeX 유효성 검사기](/tools/bibtex-validator/)를 사용하면 전체 파일을 한 번에 확인할 수 있습니다.

## 10년이 지나도 살아남는 열쇠

인용 키는 영원합니다. 모든 초안, 메모 및 슬라이드 데크의 모든 `\cite{knuth84}`는 정확한 문자열을 참조하므로 키 이름을 바꾸는 것은 모든 용도를 찾아내는 것을 의미합니다. `authorYEAR` 또는 `authorYEARkeyword`와 같은 규칙을 선택하여 첫날부터 적용하고 설정된 데이터베이스의 키를 "정리"하지 마십시오. Zotero에서 참조를 관리하는 경우 Better BibTeX 플러그인이 안정적인 키를 생성하고 고정할 수 있습니다. [Zotero를 .bib 파일로 변환](/learn/zotero-latex/)을 참조하세요. 파일을 문서에 연결하려면 [.bib 키에서 텍스트 내 인용으로](/learn/add-citations/)부터 시작하세요.