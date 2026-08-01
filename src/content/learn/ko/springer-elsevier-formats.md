---

title: "Springer, Elsevier 및 LNCS 형식"
description: "llncs, Springer Nature 저널 및 elsarticle: 단일 열 클래스 및 카메라 지원 소스."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Springer, Elsevier 및 LNCS 형식

IEEE 및 ACM 생태계 외부에서는 Springer(Springer Nature 포함)와 Elsevier라는 두 출판사가 지배하고 있습니다. 그들의 수업은 2단 컨퍼런스 스타일보다 더 단순해 보이며 이는 의도적으로 설계된 것입니다. 출판사는 최종 버전을 조판합니다.

## LNCS: 진행의 주력

귀하의 컨퍼런스가 컴퓨터 과학 강의 노트(또는 그 형제 LNAI 및 LNBI)에 출판되는 경우 'llncs'에 작성합니다.

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

LNCS 논문은 단일 열로 되어 있으며 `\inst{}` 위 첨자를 사용하여 저자를 기관에 매핑하고 기본 페이지 예산이 매우 빡빡합니다(종종 참고 문헌을 포함하여 12~16페이지). 클래스는 기본적으로 모든 TeX 배포판에 포함되어 있지 않습니다. Springer의 LNCS 페이지에서 작성자 키트를 다운로드하세요. 참고문헌 스타일은 `splncs04`입니다:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## 스프링거 네이처 저널

Springer 저널은 역사적으로 `svjour3`을 사용했으며 저널 패밀리(`sn-mathphys-num`, `sn-basic` 등)별 스타일 옵션을 갖춘 최신 `sn-jnl` 클래스로 마이그레이션해 왔습니다. 저널의 "투고 지침" 페이지에는 정확한 클래스와 옵션이 나와 있습니다. 추측하지 마십시오. 두 개의 Springer 저널이 서로 다른 클래스를 원할 수 있습니다.

## 엘스비어: elsarticle

Elsevier 저널은 `elsarticle`이라는 하나의 클래스를 공유합니다.

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

'preprint' 옵션은 검토를 위해 넉넉한 이중 간격 단일 열을 제공하고 '1p', '3p' 또는 '5p'가 포함된 'final'은 저널의 인쇄 레이아웃을 모방합니다. 참고문헌 스타일은 저널이 사용하는 것과 일치하는 'elsarticle-num'(번호 매기기) 또는 'elsarticle-harv'(저자-연도)입니다.

## 빠른 비교

| 출판사 | 수업 | 열 | 턱받이 스타일 |
|---|---|---|---|
| 스프링거 LNCS | `llncs` | 하나 | `splncs04` |
| 스프링거 네이처 저널 | `sn-jnl`(이전 `svjour3`) | 하나 | 저널별 옵션 |
| 엘스비어 | `엘기사` | 하나(리뷰) | `elsarticle-num` / `-harv` |

## 왜 단일 열인가요? 당신은 조판자가 아니기 때문에

이 클래스는 최종 페이지가 아닌 *원고*를 렌더링합니다. 출판사의 제작팀은 승인된 논문을 저널 하우스 레이아웃에 맞게 다시 조판합니다. 이것이 바로 여기서 "카메라 준비 소스 업로드"가 특정한 것을 의미하는 이유이기도 합니다. 즉, PDF뿐만 아니라 `.tex`, `.bib` 및 그림 파일을 업로드하여 제작에서 종이를 재구성하고 스타일을 변경할 수 있다는 것입니다. 실질적인 결과:

- 소스를 깨끗하게 유지하고 새로운 결제부터 컴파일 가능하게 유지하세요. 절대 경로가 없고 누락된 수치가 없습니다.
- 간격이나 여백을 해킹하지 마십시오. 프로덕션에서는 어쨌든 이를 제거합니다(그리고 [표시될 수 있음](/learn/page-limits-without-crimes/))
- 표준 패키지를 사용합니다. 이국적인 것들은 프로덕션에서 다시 작성되거나 다시 반송됩니다.

이러한 클래스는 상당한 수의 패키지에 의존하므로 최소 설치로 처음 컴파일할 때 여러 패키지를 가져올 수 있습니다. 표시를 거부하는 경우 [누락된 패키지 설치](/learn/install-missing-package/)를 참조하세요. 템플릿에 완전히 오류가 있는 경우 [깨진 템플릿](/learn/fix-broken-template/)처럼 분류하세요.