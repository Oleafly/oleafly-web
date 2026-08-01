---

title: "整列されたフローチャート ボックス"
description: "列がエッジを共有するようにライブラリを配置します。"
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# 整列されたフローチャート ボックス

フローチャートが素人っぽく見える理由はまさに 1 つあります。それは、ボックスがほぼ並んでいることです。 TikZ は構造的にこの問題を回避します。すべてのボックスが他のボックスに対して相対的に配置されるため、ボックスの列は目視ではなく構築によって軸を共有します。 2 番目の要素は名前付きスタイルなので、すべてのボックスの形状と最小サイズが一致します。以下に、垂直方向の 3 ステップのフローを示します。

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## スタイルを一度定義する

`box/.style={...}` 行は、`box` という名前の再利用可能なスタイルを作成します。その内容は通常のノード オプションです。「draw」はノードに境界線を与え、「丸い角」はそれを柔らかくし、「align=center」は複数行のテキストをノード内の中央に配置します。「minimum width=2.8cm」は、短いラベルが小さなボックスに縮小しないように、すべてのボックスを少なくともその幅に強制します。それ以降、`\node[box]` はセット全体を適用します。塗りつぶしの色や幅を大きくしたい場合は、1 行を変更するとグラフ全体が更新されます。それはあなたが維持する図であり、再描画するものではありません。

## 2 方向の間隔

`node distance=10mm and 14mm` sets the default gaps used by the `positioning` library: the first value is the vertical distance, the second the horizontal.これを配置すると、「below=of i」はプロセス ボックスを入力ボックスの端から端まで 10 mm 下の位置に、完全に中央に配置します。 2 番目の列は「right=of p」を使用し、14 mm 横に着地します。各配置は既存のノードからチェーンされるため、ステップを挿入するということは、1 つのノードを追加し、1 つの `below=of` 参照を更新することを意味します。下流にあるすべてのものがそれに伴って変化します。 「below=15mm of i」のように、ノードごとの距離をオーバーライドすることもできます。

## ステップを接続する

各 `\draw[-Latex] (i) -- (p);` は、ある名前付きノードから次のノードへ矢印を描画し、`-Latex` は目的地の端にある `arrows.meta` ライブラリから実線の矢印を選択します。矢印はノードの境界で自動的に接続されます。意思決定分岐の場合は、特定のアンカーから描画します。たとえば、右側から離れる場合は `(p.east)` を描き、チャートに角が必要になったら `-- ++(2,0) |-` などのベンドを使用して配線します。

TikZ 出力はこれらのページ内プレビューではレンダリングされないため、スニペットをコンパイルして表示します。フローチャートにおける典型的な間違いは、絶対座標を含むボックスを「一度だけ」配置することです。これらのボックスは、次回の編集後に位置がずれてしまうものです。すべての配置を相対的に保ち、基礎となる配置オプションについては [ノードと矢印](/learn/tikz-nodes-arrows/) を参照してください。