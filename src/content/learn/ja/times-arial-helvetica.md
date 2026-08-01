---

title: "Times、Arial、Helvetica のようなスタック"
description: "newtx、helvet、または fontspec マッピングはジャーナルから依然として求められています。"
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# 回、Arial、Helvetica のようなスタック

これらのフォントが審美的な第一選択でなくなってから数十年が経った今でも、ジャーナルや会議のガイドラインでは、本文には Times を、図には Arial を使用することが日常的に求められています。 LaTeX では、このような要件を満たす方法が 2 つあり、どちらが適用されるかはエンジンによって異なります。 Classic pdfLaTeX は実際の Times New Roman または Arial ファイルをロードできないため、パッケージとして出荷されるメトリック互換のクローンを使用します。 XeLaTeX と LuaLaTeX は、`fontspec` を通じて実際のシステム フォントを読み込みます。

## パッケージルート

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` はテキスト フォントを Times クローンに切り替え、`newtxmath` は一致する数学を提供します。組み合わせは重要です。テキストのフォントのみを変更し、数式はデフォルトの Computer Modern のままにしておきます。 「Computer Modern math」の隣にある Times の段落がすぐに表示されます。 `newtx` は、古い `times` および `txfonts` パッケージの後継として維持されているため、新しいドキュメントでは避けるべきです。古いスタックでは数学が変換されないままになっており、一部のスタックでは [PDF ビューアでぼやけたテキスト](/learn/fuzzy-font-pdf/) で説明されているビットマップ フォントが生成されます。

「helvet」は、Sans-serif ファミリとして Helvetica クローンを提供します。これは、Arial の代わりにもなります。これは、Arial が Helvetica のメトリクスに一致するように設計されているためです。本文テキストにはセリフファミリーが使用されているため、ロードしてもドキュメントのフォントは変更されません。 `\renewcommand{\familydefault}{\sfdefault}` 行はその切り替えを実行します。 `\familydefault` は LaTeX が通常のテキストに使用するファミリーであり、これを `\sfdefault` に設定するとドキュメント全体が Helvetica 風になります。サンセリフの見出しや図のラベルだけが必要な場合は、その行を省略してください。 Helvetica がテキスト フォントの隣に少し大きく表示されている場合は、`\usepackage[scaled=0.92]{helvet}` を実行すると、Helvetica が同じ位置に表示されます。

## fontspec ルート

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

XeLaTeX または LuaLaTeX では、「fontspec」はフォントを名前で指定し、オペレーティング システムからロードします。そのため、本物の Times New Roman がメイン (セリフ) ファミリーとして設定され、本物の Arial がサンファミリーとして設定されます。フォントは実際にマシンにインストールされている必要があります。これは、ドキュメントがコンピューター間または CI に移動するときに問題になります。 [プロジェクトの隣にあるフォント ファイル](/learn/install-custom-font/) に示すように、プロジェクトと一緒に移動するフォントを使用すると、問題が回避されます。数学もまた別の問題であり、`unicode-math` によって処理されるか、`newtxmath` を並行して保持することによって処理されます。エンジンのトレードオフについては、[人々が XeLaTeX に切り替える理由](/learn/when-use-xelatex/) で説明されています。

## 経験則

どちらのルートを選択する前に、会場独自のクラスファイルですでにフォントが設定されているかどうかを確認してください。ほとんどがそうです。発話したクラスの上に独自のフォント パッケージをスタックすると、せいぜい警告が生成されます。フォント パッケージは、クラスがユーザーに選択を委ねているドキュメントにのみ追加してください。