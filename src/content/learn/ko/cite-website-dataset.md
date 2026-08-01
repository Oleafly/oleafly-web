---

title: "웹페이지, 비디오, 데이터세트"
description: "취약한 URL에 대한 기타/온라인 항목 및 액세스 날짜."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 웹페이지, 비디오, 데이터세트

BibTeX는 1980년대에 저널, 서적 및 회의록을 위해 설계되었으므로 웹 페이지, YouTube 비디오 또는 Zenodo의 데이터 세트에 대한 기본 아이디어가 없습니다. 여전히 이러한 항목을 지속적으로 인용해야 하며 표준 해결 방법은 거의 모든 필드 조합을 허용하고 스타일을 통해 이를 현명하게 인쇄할 수 있는 `@misc` 항목 유형입니다.

## @misc 패턴

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

여기서는 세 가지 세부 사항이 중요합니다. `{{Oleafly Contributors}}` 주위의 이중 중괄호는 BibTeX에게 전체 문자열을 하나의 리터럴 이름으로 처리하도록 지시합니다. 그것들이 없으면 "Contributors"를 성으로 구문 분석하고 나머지는 "O. Contributors"로 축약합니다. `howpublished` 필드는 클래식 BibTeX의 URL에 대한 일반적인 위치이며, `\url{...}`에 주소를 래핑하면 이를 고정 폭 글꼴로 조판하고 행 전체에 걸쳐 깔끔하게 구분할 수 있습니다(이를 위해서는 `url` 또는 `hyperref` 패키지를 로드하세요). '메모' 필드에는 웹 콘텐츠가 변경되고 사라지기 때문에 중요한 액세스 날짜가 포함됩니다. 해당 날짜는 독자에게 실제로 본 페이지의 버전을 알려줍니다.

## biblatex 대안: @online

문서에서 biblatex를 사용하는 경우 전용 유형이 있습니다. `@online` 항목은 적절한 `url` 및 `urldate` 필드를 사용하므로 동일한 소스는 `url = {https://oleafly.com}` 및 `urldate = {2026-07-24}`가 되고 스타일에 따라 액세스 날짜 형식이 지정됩니다. 참고문헌 스타일이 지원하는 경우 `@online`을 선호하고, 기존 `.bst` 파일과의 호환성을 유지해야 하는 경우 `@misc`로 대체합니다. 두 시스템 간의 차이점은 [Classic BibTeX 또는 biblatex](/learn/bibtex-vs-biblatex/)에 설명되어 있습니다.

## 데이터 세트 및 소프트웨어

DOI가 존재하는 경우 데이터 세트와 코드 릴리스는 기본 URL 이상의 가치가 있습니다. Zenodo 및 Figshare와 같은 저장소는 DOI를 생성하므로 인용은 호스팅 설정보다 오래 지속될 수 있습니다. DOI를 `doi` 필드에 넣거나 클래식 스타일의 경우 `howpublished`에 `\url{https://doi.org/10.5281/...}`로 넣습니다. 아티팩트의 버전이 관리될 때 '버전' 메모를 포함하세요. 독자가 5년 동안 다운로드하는 "데이터 세트"가 분석한 것이 아닐 수도 있기 때문입니다. 많은 프로젝트에서는 선호하는 인용문을 종종 저장소의 'CITATION.cff' 파일에 게시합니다. 이를 사용하는 것은 필드를 직접 추측하는 것보다 정중하고 정확합니다.

## 동영상 및 기타 이상한 출처

동영상의 경우 'author'에 채널이나 제작자를, 'title'에 동영상 제목, 'howpublished'에 플랫폼과 URL, 'year'에 업로드 연도, 'note'에 액세스 날짜를 입력하세요. 특이한 것에 대한 일반적인 규칙은 동일합니다. 누가 그것을 만들었는지, 이름은 무엇인지, 독자가 그것을 찾을 수 있는 곳은 어디인지, 언제 보았는지 기록하면 `@misc`는 모든 스타일을 통해 이 모든 것을 안전하게 전달합니다.