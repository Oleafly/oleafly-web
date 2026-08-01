---

title: "사람들이 XeLaTeX로 전환하는 이유"
description: "시스템 글꼴, 복잡한 스크립트, 글꼴 사양 템플릿."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# 사람들이 XeLaTeX로 전환하는 이유

LaTeX는 언어이지만 여러 엔진이 이를 컴파일하며 수행할 수 있는 작업이 다릅니다. 전통적인 엔진은 pdfLaTeX이고, 최신 엔진은 XeLaTeX와 LuaLaTeX입니다. 사람들이 XeLaTeX로 이동하는 가장 큰 이유는 글꼴입니다. pdfLaTeX는 TeX용으로 특별히 패키지된 글꼴만 사용하는 반면, XeLaTeX는 시스템에 설치된 모든 OpenType 또는 TrueType 글꼴을 일반 이름으로 로드합니다.

## 전환해야 하는 세 가지 이유

첫 번째는 시스템 글꼴에 직접 액세스하는 것입니다. `fontspec` 패키지를 사용하면 글꼴 선택은 읽을 수 있는 한 줄이며 원하는 서체에 대해 TeX 특정 글꼴 패키지가 존재할 필요가 없습니다. 목표가 현대적인 모습을 위한 `\setmainfont{Inter}`이든 저널 요구 사항을 위한 Times New Roman이든 메커니즘은 동일합니다.

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec`에는 XeLaTeX 또는 LuaLaTeX가 필요합니다. pdfLaTeX에서는 단순히 오류가 발생합니다. [프로젝트 옆에 있는 글꼴 파일](/learn/install-custom-font/)에 표시된 것처럼 글꼴은 시스템 대신 프로젝트 폴더 내부로 이동할 수도 있습니다.

두 번째는 기본 유니코드와 복잡한 스크립트입니다. XeLaTeX는 UTF-8 입력을 직접 읽고 아랍어, 데바나가리, 중국어, 일본어, 한국어를 포함하여 pdfLaTeX가 할 수 없는 쓰기 시스템을 적절한 형태로 처리하고 'polyglossia' 패키지를 통해 언어별 하이픈 연결 및 방향을 수정합니다. 문서에 스크립트가 혼합되어 있거나 특이한 분음 부호가 포함된 이름을 인용하는 경우 이것만으로 엔진이 결정됩니다.

세 번째는 귀하를 결정하는 템플릿입니다. 많은 최신 CV, 논문 및 프리젠테이션 템플릿은 첫 번째 줄에 `fontspec` 또는 `polyglossia`를 로드하며 이러한 템플릿은 XeLaTeX 또는 LuaLaTeX에서만 컴파일됩니다. 다운로드한 템플릿이 `fontspec`을 언급하는 오류와 함께 즉시 실패하는 경우 템플릿을 편집하는 것이 아니라 엔진을 전환하는 것이 해결 방법입니다.

## 당신이 포기한 것

절충안은 크지 않지만 현실적입니다. 몇 가지 pdfLaTeX 관련 패키지는 적용되지 않습니다. 특히 XeLaTeX가 부분적으로만 지원하는 `microtype`의 글꼴 확장은 적용되지 않습니다. 컴파일 속도도 다소 느려집니다. 일부 오래된 저널 파이프라인에서는 여전히 pdfLaTeX를 사용하므로 XeLaTeX로 작성된 원고를 제출하기 전에 해당 장소의 지침을 확인하세요. LuaLaTeX는 글꼴과 유니코드 기능을 공유하고 Lua 스크립팅을 추가합니다. 둘 중에서 템플릿이나 장소 이름을 선택하세요. 'fontspec'을 기반으로 작성된 문서는 일반적으로 두 가지 모두에서 컴파일됩니다.

## 실제로 선택하기

합리적인 규칙은 장소의 템플릿이 이를 대상으로 할 때 pdfLaTeX를 사용하고 논문, CV, 슬라이드 및 다국어 문서 등 글꼴을 선택하는 모든 것에 대해 XeLaTeX를 사용하는 것입니다. Oleafly의 번들 엔진은 XeTeX 기반(Tectonic)이므로 `fontspec` 문서는 엔진 구성 없이 컴파일됩니다. 일반적인 실수는 시대를 혼합하는 것입니다. 예를 들어 `newtxtext`와 같은 pdfLaTeX 전용 글꼴 패키지와 함께 `fontspec`을 로드하는 것입니다. 문서당 하나의 글꼴 시스템을 선택하면 엔진 질문이 대부분 저절로 대답됩니다.