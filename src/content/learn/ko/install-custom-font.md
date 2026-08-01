---

title: "프로젝트 옆에 있는 글꼴 파일"
description: "글꼴 사양 로컬 otf 또는 ttf 계열의 경로입니다."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# 프로젝트 옆에 있는 글꼴 파일

논문이 컴파일할 모든 컴퓨터(공동 저자의 노트북, 대학 구축 서버 또는 재설치 후 자신의 컴퓨터)에 설치되지 않은 글꼴을 사용한다고 가정해 보겠습니다. 각 글꼴에 시스템 전체에 글꼴을 설치하는 것은 취약하며 때로는 허용되지 않습니다. 프로젝트 폴더에 글꼴 파일을 넣고 'fontspec'을 대신 지정하면 문서에 자체 타이포그래피가 포함됩니다. 'fontspec'은 pdfLaTeX에서 작동하지 않으므로 XeLaTeX 또는 LuaLaTeX가 필요합니다. 그 이유는 [사람들이 XeLaTeX로 전환하는 이유](/learn/when-use-xelatex/)에서 다룹니다.

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## 각 키의 역할

`\setmainfont{MyFont}`는 기본 텍스트 계열을 선언하고 파일 이름을 만드는 데 사용되는 기본 이름을 제공합니다. `Path = ./fonts/`는 `fontspec`에게 운영 체제에 요청하는 대신 기본 `.tex` 파일을 기준으로 프로젝트 내부의 `fonts` 폴더에서 파일을 찾도록 지시합니다. `확장자 = .otf`는 파일 형식을 한 번 지정하므로 파일별로 반복할 필요가 없습니다. 그것이 당신이 가지고 있는 것이라면 `.ttf`를 사용하십시오.

나머지 키는 글꼴 모양을 파일에 매핑합니다. 각각 `*`는 기본 이름으로 확장되므로 `UprightFont = *-Regular`는 `MyFont-Regular.otf`로 해석되고 마찬가지로 `MyFont-Bold.otf` 및 `MyFont-Italic.otf`로 해석됩니다. 로컬 시스템에서 허용되는 경우에도 Linux 서버에서는 대소문자가 중요하므로 이러한 이름은 대문자를 포함하여 실제 파일 이름과 정확하게 일치해야 합니다. 계열에 굵은 이탤릭체가 있는 경우 'BoldItalicFont = *-BoldItalic'을 추가하세요. 매핑하지 않은 모양은 문서에서 사용할 수 없는 모양입니다. `BoldFont` 줄이 없으면 `\textbf`에는 전환할 항목이 없으며 컴파일러는 굵은 모양이 정의되지 않았다고 경고합니다.

다른 계열에도 동일한 구문이 적용되므로 `\setsansfont` 및 `\setmonofont`는 로컬 sans-serif 또는 코드 글꼴에 대해 동일한 옵션 블록을 허용합니다.

## 라이센스 및 이식성

라이센스가 재배포를 허용하는 경우에만 프로젝트와 함께 글꼴 파일을 제공하십시오. SIL Open Font License와 같은 개방형 라이선스는 이를 허용하고 Google Fonts의 글꼴은 일반적으로 적합하지만 상업용 글꼴은 일반적으로 공동작업자에게 사본을 전달하는 것을 금지합니다. 이 경우 각 컴퓨터에는 자체 라이선스 사본이 필요하며 프로젝트 읽어보기에 해당 요구 사항을 문서화해야 합니다.

일반적인 실수는 선언된 이름과 파일 사이의 자동 불일치입니다. 이는 종종 폴더 이름을 바꾸거나 다른 이름의 가중치를 다운로드한 후에 발생합니다. 그런 다음 "'MyFont-Regular' 글꼴을 찾을 수 없습니다"라는 메시지와 함께 컴파일이 중지됩니다. 그런 일이 발생하면 오류가 예상되는 파일 이름을 폴더 내용과 문자별로 비교하고 '경로'가 여전히 파일이 있는 위치를 가리키는지 확인하세요. Oleafly의 번들 Tectonic 엔진은 XeTeX 기반이므로 이 프로젝트 로컬 패턴은 시스템 글꼴을 설치하지 않고도 작동합니다.