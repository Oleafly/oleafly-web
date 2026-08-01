---

title: "フィギュアをドロップ"
description: "グラフィックス、幅、パス、PDF と PNG。"
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

# 図をドロップする

LaTeX には画像サポートが組み込まれていません。これらはすべて、`\includegraphics` コマンドを提供する `graphicx` パッケージからのものであり、慣例により、画像はキャプションと番号を含めることができるように `figure` 環境にラップされます。これは何百回も使用するパターンです。

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## 各行の内容

`\usepackage{graphicx}` 行は、プリアンブルの `\begin{document}` の前に記述され、含める画像の数に関係なく 1 回だけ指定する必要があります。

`figure` 環境は画像をフロートにします。これは、LaTeX がテキスト内の正確な位置に画像を固定するのではなく、画像が着地する場所を選択することを意味します。 `[htbp]` 文字は配置の設定です。`h` はコードが表示される場所を意味し、`t` はページの上部を意味し、`b` はページの下部を意味し、`p` はフロートの別のページを意味します。 LaTeX はそれらをこの順序で試行し、適切なページを生成する最初のものを採用します。フィギュアが驚くべき場所に漂流する場合、それは通常のフロートの動作であり、[フロートが実際に着地する場所](/learn/position-figures/) では、それと交渉する方法が説明されています。

`\centering` は、画像をテキスト ブロック内で水平方向の中央に配置します。 `width=0.8\textwidth` は、縦横比を維持しながら画像をテキスト幅の 80% に拡大縮小します。これは、文書の余白が変化しても適応するため、絶対サイズをセンチメートル単位で指定するよりもほとんどの場合優れています。ファイル パスはプロジェクト ルートからの相対パスであるため、`figures/pipeline.pdf` はメインの `.tex` ファイルの隣にある `figures` フォルダーを意味します。最後に、`\caption` は番号付きキャプションを出力し、`\label` は番号を記録するので、`\ref{fig:pipeline}` はテキストから引用できるようになります。 [キャプションとラベル](/learn/captions-labels/) で説明されている理由により、ラベルはキャプションの後に来る必要があります。

## 使用するファイル形式

ベクトル グラフィックスは、どのズームや印刷サイズでも鮮明なままであるため、プロット、図、フローチャートなどのベクトルには PDF を優先します。スクリーンショットやその他のピクセルベースの画像には PNG を使用します。 JPG は、圧縮アーチファクトが目に見えない写真に使用できます。テキストの多いコンテンツをスクリーンショットとして埋め込むことは、絶対に避けてください。印刷するとぼやけて検索できなくなるためです。

また、大きな写真を含める前にサイズを変更してください。 12 メガピクセルの写真を幅 8 センチメートルで表示すると PDF が肥大化してコンパイルが遅くなりますが、印刷サイズで約 300 dpi に縮小されたバージョンでは見た目は同じになります。

## 避けるべき間違い

`[h]` だけを要求して初日にフロートと戦わないでください。 LaTeX は多くの場合拒否し、図とその背後にあるすべてのものを章の最後まで運びます。 `[htbp]` と書き、それを最初に参照する段落の近くに図コードを配置し、番号と参照に追跡させます。