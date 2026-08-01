---

title: "Times, Arial, Helvetica와 같은 스택"
description: "newtx, helvet 또는fontspec 매핑 저널은 여전히 ​​요구합니다."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Times, Arial, Helvetica와 유사한 스택

저널 및 학회 지침에서는 이러한 글꼴이 누구의 미적 우선 선택이 아닌 수십 년이 지난 후에도 본문 텍스트에는 Times를, 그림에는 Arial을 일상적으로 요구하고 있습니다. LaTeX에는 이러한 요구 사항을 충족하는 두 가지 방법이 있으며, 적용되는 방법은 엔진에 따라 다릅니다. Classic pdfLaTeX는 실제 Times New Roman 또는 Arial 파일을 로드할 수 없으므로 패키지로 제공되는 미터법 호환 복제본을 사용합니다. XeLaTeX 및 LuaLaTeX는 `fontspec`을 통해 실제 시스템 글꼴을 로드합니다.

## 패키지 경로

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext`는 텍스트 글꼴을 Times 복제본으로 전환하고 `newtxmath`는 일치하는 수학을 제공합니다. 페어링이 중요합니다. 텍스트 글꼴만 변경하면 방정식은 기본 Computer Modern으로 유지됩니다. Computer Modern 수학 옆에 있는 Times 단락이 즉시 표시됩니다. `newtx`는 이전 `times` 및 `txfonts` 패키지의 후속 버전이므로 새 문서에서는 피해야 합니다. 이전 스택에서는 수학이 변환되지 않은 채 남아 있었고 일부는 [PDF 뷰어의 흐린 텍스트](/learn/fuzzy-font-pdf/)에 설명된 비트맵 글꼴을 생성합니다.

'helvet'은 Arial이 Helvetica의 측정항목과 일치하도록 설계되었기 때문에 Arial을 대신하는 산세리프 계열로 Helvetica 복제본을 제공합니다. 본문 텍스트는 세리프 계열을 사용하므로 이를 로드해도 문서 글꼴은 변경되지 않습니다. `\renewcommand{\familydefault}{\sfdefault}` 줄은 해당 전환을 수행합니다. `\familydefault`는 LaTeX가 일반 텍스트에 사용하는 계열이고 이를 `\sfdefault`로 설정하면 전체 문서가 Helvetica와 유사해집니다. 산세리프체 제목이나 그림 라벨만 필요한 경우 해당 줄을 생략하세요. Helvetica가 텍스트 글꼴 옆에 약간 크게 실행되면 `\usepackage[scaled=0.92]{helvet}`가 이를 줄로 가져옵니다.

## 글꼴 사양 경로

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

XeLaTeX 또는 LuaLaTeX에서 `fontspec`은 글꼴을 이름으로 지정하고 운영 체제에서 로드하므로 정품 Times New Roman을 기본(serif) 계열로 설정하고 정품 Arial을 sans 계열로 설정합니다. 글꼴은 실제로 컴퓨터에 설치되어 있어야 합니다. 문서가 컴퓨터 간에 또는 CI로 이동할 때 문제가 발생합니다. [프로젝트 옆에 있는 글꼴 파일](/learn/install-custom-font/)에 표시된 것처럼 프로젝트와 함께 이동하는 글꼴은 문제를 방지합니다. 수학은 'unicode-math'에 의해 처리되거나 'newtxmath'를 함께 유지하여 처리되는 별도의 문제입니다. 엔진 장단점은 [사람들이 XeLaTeX로 전환하는 이유](/learn/when-use-xelatex/)에서 다룹니다.

## 경험 법칙

두 경로 중 하나를 선택하기 전에 해당 장소의 자체 클래스 파일에 이미 글꼴이 설정되어 있는지 확인하세요. 대부분 그렇습니다. 말한 클래스 위에 자신의 글꼴 패키지를 쌓으면 기껏해야 경고가 생성됩니다. 클래스가 사용자에게 선택권을 주는 문서에만 글꼴 패키지를 추가하세요.