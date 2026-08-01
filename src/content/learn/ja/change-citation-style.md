---

title: "数値、著者年、雑誌のスタイル"
description: "データベースを書き換えずにスタイルを交換します。"
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# 数値、著者年、雑誌スタイル

引用スタイルは 2 つのことを制御します。1 つはテキスト内マーカーの外観 (`[12]` と `(Knuth, 1984)` など)、もう 1 つは参考文献リストの各エントリのフォーマットです。良いニュースは、スタイルが `.bib` データベースから完全に分離されていることです。プリアンブルの 1 行を変更することで、論文を数値から著者年に切り替えたり、別のジャーナル用に再フォーマットしたりできます。入力した内容はそのまま残ります。

## 古典的な BibTeX でスタイルを変更する

BibTeX では、スタイルは `\bibliographystyle{...}` コマンド内に存在し、`.bst` ファイルに名前を付けます。引数を交換して再コンパイルします。

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

ジャーナルや会議は通常、「IEEEtran.bst」や「ACM-Reference-Format.bst」などの独自の「.bst」ファイルを配布します。そのファイルを`main.tex`の隣に置き、`\bibliographystyle`に名前を付けます。 `.bst` は 1 回のルックでベイクされることに注意してください。会場が著者年の引用を必要とする場合は、`\citep` や `\citet` などのコマンドを取得するための `natbib` パッケージも必要です。

## ビブラテックスでスタイルを変える

biblatex では、スタイルはパッケージ自体のオプションです。

```latex
\usepackage[style=authoryear]{biblatex}
```

その他の一般的な値は、`[3-6]`、`style=alphabetic`、アドオン パッケージの `style=apa` または `style=ieee` などの圧縮範囲の `style=numeric`、`style=numeric-comp` です。 biblatex スタイルは古い `.bst` 言語ではなく LaTeX で記述されているため、句読点の変更や URL の削除などの調整がはるかに簡単です。

## 切り替え後に適切に再コンパイルする

スタイルを変更した後も、古い補助ファイルには以前のスタイルでフォーマットされたデータが含まれているため、完全なサイクルを実行します。1 回コンパイルし、バックエンド (クラシック BibTeX の場合は `bibtex`、biblatex の場合は `biber`) を実行し、さらに 2 回コンパイルして、相互参照が安定します。 Oleafly はこのサイクルを実行しますが、手動切り替え後に引用が古くなったと思われる場合は、`.aux` ファイルと `.bbl` ファイルを削除して最初から再構築すると問題が解消されます。

## どのファミリーを使用する必要がありますか?

対象の会場が「.bst」ファイルまたは BibTeX を期待するクラスを提供している場合は、従来の BibTeX を使用してください。ほとんどのジャーナルでは依然としてその状況が続いています。論文やプレプリントのように形式を自分で制御する場合は、biblatex がより有効な選択肢です。トレードオフについては [従来の BibTeX または biblatex](/learn/bibtex-vs-biblatex/) で説明されており、コマンドの違いについては [natbib 習慣と biblatex コマンド](/learn/natbib-vs-biblatex/) で説明されています。