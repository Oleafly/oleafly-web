---

title: "실제 ACM 형식"
description: "acmart 클래스: sigconf, 메타데이터, 익명 검토 및 첫 번째 컴파일 놀라움."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# 실제 ACM 형식

ACM은 2017년에 모든 템플릿을 'acmart'라는 하나의 클래스로 통합했습니다. 하나의 클래스, 다양한 얼굴: 형식 옵션에 따라 2열 컨퍼런스 논문 또는 단일 컬럼 저널 기사를 받을지 여부가 결정됩니다.

## 형식 옵션을 선택하세요

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf`는 거의 모든 ACM 회의에 필요한 것입니다. 해당 장소의 CFP는 정확한 옵션을 지정합니다. 습관보다 믿으세요. 여전히 장소 계열 중에서 결정하고 있다면 [ACM, IEEE 및 친구](/learn/acm-ieee-and-friends/)를 비교하세요.

## 메타데이터는 필수입니다.

IEEEtran과 달리 acmart는 메타데이터 블록 없이는 올바르게 보이기를 거부하고 게시자는 이를 수락하기를 거부합니다.

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

CCS 개념은 XML과 `\ccsdesc` 라인을 모두 생성하는 ACM 웹 사이트의 선택기에서 나왔습니다. 그대로 붙여넣으세요. 키워드는 초록이 아닌 `\keywords`에 들어갑니다. ACM 참조 형식 블록(1페이지의 회색 인용 상자)은 `\acmConference`, `\acmYear` 및 친구들로부터 자동으로 생성되며 게시자가 카메라 준비 시간에 이를 채우거나 확인합니다.

## 이중맹검 제출

대부분의 ACM 회의는 익명으로 검토됩니다. 하나의 옵션이 이를 처리합니다.

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

'anonymous'는 저자와 소속을 숨기고, 'review'는 리뷰어에게 줄 번호를 추가합니다. 카메라를 준비하려면 둘 다 꺼야 합니다. 클래스는 메커니즘을 처리하지만 익명화는 플래그보다 더 큽니다. [이중맹검 완료](/learn/anonymization-double-blind/)를 참조하세요.

## 인용: 번호 또는 저자 연도

acmart는 아래에서 natbib을 사용하고 두 가지 스타일을 모두 지원합니다.

| 옵션 | 결과 |
|---|---|
| 기본값 | 번호 매기기: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | 저자 연도: (Lovelace, 1843) |

일부 SIG는 저자 연도(역사적으로 CHI)를 의무화하고 다른 SIG는 번호를 매깁니다. 다시 말하지만 CFP가 결정합니다.

## 첫 번째 컴파일 놀라움

acmart는 패키지에 굶주려 있습니다. 새로운 설정에서는 다음을 기대합니다.

- **Libertine 글꼴.** 이 클래스는 Linux Libertine 및 Biolinum과 `newtxmath`를 로드합니다. 최소 TeX 설치에서는 처음 컴파일할 때 다운로드로 도착합니다. Oleafly의 번들 Tectonic 엔진은 처음 사용할 때 자동으로 이를 가져오므로 초기 컴파일이 두 번째 컴파일보다 오래 걸립니다. 이는 정지가 아니라 정상입니다.
- **엄격한 부동 규칙.** acmart는 일부 패키지(예: `titlesec`)를 완전히 차단하고 로드하면 오류가 발생합니다.
- **`\authorsaddresses{}`**는 초안에서 "저자 주소" 바닥글 잔소리를 침묵시킵니다.

패키지가 실제로 해결되지 않는 경우 일반적인 해결 방법은 [누락된 패키지 설치](/learn/install-missing-package/)입니다.

## 어디서 구할 수 있나요?

acm.org의 작성자 페이지나 컨퍼런스 사이트에서 공식 템플릿을 다운로드하고 'amart.cls'를 최신 상태로 유지하세요. ACM은 1년에 여러 번 이를 개정하며 최신 버전에 대해 카메라 지원 검사가 실행됩니다.