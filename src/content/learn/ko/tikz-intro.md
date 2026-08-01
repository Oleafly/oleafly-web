---

title: "첫 번째 TikZ 사진"
description: "노드, 에지, 벡터를 유지하는 3박스 파이프라인."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# 첫 번째 TikZ 사진

TikZ는 LaTeX 문서 내에 있는 그리기 언어입니다. 다른 도구에서 내보낸 다이어그램을 가져오는 대신 텍스트로 설명하면 컴파일러가 이를 그립니다. 결과적으로 출력은 문서 고유의 글꼴을 사용하는 벡터 그래픽이므로 레이블이 주변 텍스트와 정확히 일치하고 어떤 확대/축소에서도 선명하게 유지됩니다. 비용은 상자를 드래그하는 대신 좌표와 옵션을 작성하는 것입니다. 상자와 화살표로 구성된 다이어그램의 경우 대개 그만한 가치가 있습니다. 다음은 표준적인 첫 번째 그림인 3박스 파이프라인입니다.

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## 노드

노드는 특정 위치에 배치되고 선택적으로 주위에 모양이 그려지는 콘텐츠(일반적으로 텍스트)입니다. `\node[draw, rounded Corners] (a) {Input};`에서 대괄호 안의 옵션은 노드의 테두리를 그리고 모서리를 둥글게 하는 것을 의미하며, `(a)`는 노드에 나중에 참조할 수 있는 이름을 제공하고 `{Input}`은 내부 텍스트입니다. 두 번째 노드는 `positioning` 라이브러리의 `right=of a`를 사용하여 환경 옵션의 `node distance=1.5cm`에 의해 설정된 거리에 `a` 노드 오른쪽에 배치됩니다. 절대 좌표가 아닌 서로 상대적으로 노드를 배치하면 하나의 레이블이 길어지면 전체 다이어그램이 조정됩니다.

## 가장자리

모서리는 두 점을 연결하는 선입니다. 노드에 이름이 지정되어 있으므로 이름으로 연결합니다: `\draw (a) -- (b);`는 노드 `a`에서 노드 `b`까지 직선을 그립니다. TikZ는 중심이 아닌 노드 경계에서 선을 시작하고 끝냅니다. `[-Latex]` 옵션은 `arrows.meta` 라이브러리에서 화살표 끝 스타일을 설정하여 선의 대상에 실선 화살촉을 제공합니다. 팁은 경로당 한 번씩, 끝 부분에 적용됩니다. 이것이 바로 예제에서 두 개의 `\draw` 명령을 사용하는 이유입니다. 단일 `(a) -- (b) -- (c)` 경로는 `c`에만 화살촉을 배치합니다.

## 다음은 어디로 갈까?

이미지와 마찬가지로 캡션과 숫자가 필요한 경우 'tikzpicture'를 'Figure' 환경으로 래핑합니다. TikZ 코드는 이러한 인페이지 미리보기에서 렌더링되지 않으므로 프로젝트에서 코드 조각을 컴파일하여 결과를 확인하세요. Oleafly에서 Diagram Composer는 편집 가능한 TikZ를 시작점으로 생성할 수도 있습니다. 가장 일반적인 초보자 오류는 모든 TikZ 명령을 끝내는 세미콜론을 잊어버리는 것입니다. 이로 인해 길고 혼란스러운 오류가 발생합니다. 다이어그램이 세 개의 상자를 넘어서 커지면 [노드 및 화살표](/learn/tikz-nodes-arrows/) 및 [정렬된 순서도 상자](/learn/tikz-flowchart/)를 계속 진행하세요.