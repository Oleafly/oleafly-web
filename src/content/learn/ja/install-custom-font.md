---

title: "プロジェクトの隣にあるフォント ファイル"
description: "fontspec ローカルの otf または ttf ファミリのパス。"
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# プロジェクトの隣にフォント ファイル

あなたの論文で、それをコンパイルするすべてのマシン (共著者のラップトップ、大学のビルド サーバー、または再インストール後の自分のコンピュータ) にはインストールされていないフォントが使用されているとします。それぞれにシステム全体にフォントをインストールすることは壊れやすいため、許可されない場合があります。フォント ファイルをプロジェクト フォルダーに置き、代わりに `fontspec` を指定すると、ドキュメントに独自のタイポグラフィが適用されます。 pdfLaTeX では `fontspec` が機能しないため、これには XeLaTeX または LuaLaTeX が必要です。理由については、[人々が XeLaTeX に切り替える理由](/learn/when-use-xelatex/) で説明されています。

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

## 各キーの機能

`\setmainfont{MyFont}` はメイン テキスト ファミリを宣言し、ファイル名の作成に使用されるベース名をそれに与えます。 `Path = ./fonts/` は、オペレーティング システムに問い合わせるのではなく、メインの `.tex` ファイルを基準にしてプロジェクト内の `fonts` フォルダー内のファイルを探すように `fontspec` に指示します。 `Extension = .otf` はファイル タイプを 1 回だけ指定するため、ファイルごとに繰り返す必要はありません。 `.ttf` がある場合はそれを使用してください。

残りのキーはフォント形状をファイルにマップします。 In each, the `*` expands to the base name, so `UprightFont = *-Regular` resolves to `MyFont-Regular.otf`, and likewise `MyFont-Bold.otf` and `MyFont-Italic.otf`. These names must match the actual filenames exactly, including capitalization, because case matters on Linux servers even when your local system forgives it.ファミリに太字イタリックがある場合は、「BoldItalicFont = *-BoldItalic」を追加します。 A shape you do not map is a shape the document cannot use: with no `BoldFont` line, `\textbf` has nothing to switch to, and the compiler warns that the bold shape is undefined.

同じ構文が他のファミリでも機能するため、`\setsansfont` と `\setmonofont` はローカルのサンセリフ フォントまたはコード フォントに対して同一のオプション ブロックを受け入れます。

## ライセンスとポータビリティ

ライセンスで再配布が許可されている場合にのみ、フォント ファイルをプロジェクトに同梱してください。 SIL オープン フォント ライセンスなどのオープン ライセンスではこれが許可されており、Google Fonts のフォントは通常適格ですが、商用フォントは通常、共同作業者にコピーを渡すことを禁止しています。その場合、各マシンには独自のライセンス コピーが必要であり、その要件をプロジェクトの Readme に文書化する必要があります。

よくある間違いは、フォルダーの名前を変更したり、別の名前のウェイトをダウンロードした後などに、宣言された名前とファイルの間でサイレントな不一致が発生することです。その後、「フォント 'MyFont- Regular' が見つかりません」というメッセージが表示されてコンパイルが停止します。このような場合は、エラーの予期されるファイル名をフォルダーの内容と 1 文字ずつ比較し、「パス」がまだファイルが存在する場所を指していることを確認します。 Oleafly にバンドルされている Tectonic エンジンは XeTeX ベースであるため、このプロジェクトローカル パターンはシステム フォントをインストールしなくても機能します。