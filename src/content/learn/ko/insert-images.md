---

title: "그림 넣기"
description: "그래픽x, 너비, 경로, PDF 대 PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# 그림 넣기

LaTeX에는 내장된 이미지 지원이 없습니다. 이 모든 것은 `\includegraphics` 명령을 제공하는 `graphicx` 패키지에서 제공되며 관례적으로 이미지는 캡션과 숫자를 전달할 수 있도록 `Figure` 환경에 래핑됩니다. 이것은 수백 번 사용할 패턴입니다:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## 각 줄의 역할

`\usepackage{graphicx}` 줄은 `\begin{document}` 앞에 프리앰블에 들어가며, 포함하는 이미지 수에 관계없이 한 번만 나타나야 합니다.

`Figure` 환경은 이미지를 부동(float)으로 만듭니다. 이는 LaTeX가 텍스트의 정확한 위치에 이미지를 고정하는 대신 위치를 선택한다는 의미입니다. `[htbp]` 문자는 선호하는 배치 위치입니다. `h`는 코드가 나타나는 위치를 의미하고 `t`는 페이지 상단을 의미하며 `b`는 페이지 하단을 의미하며 `p`는 별도의 부동 페이지를 의미합니다. LaTeX는 순서대로 시도하고 괜찮은 페이지를 생성하는 첫 번째 항목을 선택합니다. 피규어가 예상치 못한 곳으로 표류한다면 이는 정상적인 플로트 동작이며 [플로트가 실제로 착륙하는 위치](/learn/position-Figures/)에서는 이를 협상하는 방법을 설명합니다.

`\centering`은 텍스트 블록 내에서 이미지를 수평으로 중앙에 배치합니다. `width=0.8\textwidth`는 가로세로 비율을 유지하면서 이미지를 텍스트 너비의 80%로 확장합니다. 이는 문서의 여백이 변경되면 조정되므로 절대 크기를 센티미터 단위로 지정하는 것보다 거의 항상 더 좋습니다. 파일 경로는 프로젝트 루트를 기준으로 하므로 'Figures/pipeline.pdf'는 기본 '.tex' 파일 옆에 있는 'Figures' 폴더를 의미합니다. 마지막으로 `\caption`은 번호가 매겨진 캡션을 인쇄하고 `\label`은 숫자를 기록하므로 `\ref{fig:pipeline}`이 텍스트에서 인용할 수 있습니다. [캡션 및 라벨](/learn/captions-labels/)에서 설명한 이유로 라벨은 캡션 뒤에 와야 합니다.

## 사용할 파일 형식

벡터 그래픽은 어떤 확대/축소 및 인쇄 크기에서도 선명하게 유지되므로 플롯, 다이어그램, 순서도 등 모든 벡터에 대해 PDF를 선호합니다. 스크린샷 및 기타 픽셀 기반 이미지에는 PNG를 사용하세요. JPG는 압축 아티팩트가 보이지 않는 사진에 적합합니다. 텍스트가 많은 콘텐츠는 인쇄 시 흐려지고 검색이 불가능하므로 스크린샷에 삽입하지 마세요.

또한 큰 사진을 포함하기 전에 크기를 조정하세요. 8cm 너비로 표시되는 1200만 픽셀 사진은 PDF를 부풀리고 모든 컴파일 속도를 늦추는 반면, 인쇄 크기에서 약 300dpi로 축소된 버전은 동일해 보입니다.

## 피해야 할 실수

첫날에 혼자 `[h]`를 요구하여 플로트와 싸우지 마십시오. LaTeX는 종종 거절하고 그림과 그 뒤에 있는 모든 것을 장의 끝까지 가져갑니다. `[htbp]`를 작성하고 이를 처음 참조하는 단락 근처에 그림 코드를 배치한 다음 숫자와 참조가 자동으로 추적되도록 합니다.