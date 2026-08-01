---

title: ".bib キーから本文中の引用まで"
description: "cite および参考文献コマンドを使用した通常の BibTeX ループ。"
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# .bib キーから本文中の引用まで

LaTeX でソースを引用するには、2 つの要素が必要です。各作品を 1 回説明するプレーンテキスト データベースと、キーによってエントリを指す文書内の `\cite` コマンドです。 LaTeX は引用に番号を付け、参考文献リストをフォーマットし、セクションの順序を変更したり出典を追加したりするときにすべての一貫性を保ちます。 「[12]」を手で入力することはありませんし、自分で番号を付け直すこともありません。

## ドキュメント内のコマンド

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` は、引用が属する場所にテキスト内マーカーを挿入します。残りの部分は下部の 2 つのコマンドで行います。`\bibliographystyle{plain}` は引用と参考文献の形式を選択し、`\bibliography{refs}` はデータベース ファイル (拡張子 `.bib なし) に名前を付け、参考文献リストを印刷する場所 (通常は `\end{document}` の直前) をマークします。実際に引用した情報源のみがリストに表示されます。

## データベース内のエントリ

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

これは、`main.tex` の隣にある別のファイルである `refs.bib` にあります。 `@` の後の単語はエントリ タイプ、`knuth84` は引用キー、残りはフォーマットされた参照を構築するためにスタイルが使用するフィールドです。キーは 2 つのファイル間の唯一のリンクであるため、大文字と小文字の区別も含めて `\cite` の引数と正確に一致する必要があります。 [BibTeX バリデーター](/tools/bibtex-validator/) を使用して、データベース全体の欠落フィールドや不正な形式のエントリをチェックできます。

## 1 回のコンパイルでは不十分な理由

参考文献目録は別のプログラムによって構築されます。最初の LaTeX パスで、文書は引用されたキーのリストを補助ファイルに書き込みます。次に、`bibtex` プログラムはそのリストを読み取り、一致するエントリを `refs.bib` から取り出し、それらをフォーマットします。さらに 2 つの LaTeX パスで結果が折り返され、テキスト内マーカーが解決されます。 Oleafly はコンパイルのたびにこのサイクル全体を実行します。手動で構築して中間のステップをスキップすると、引用は太字の疑問符として表示されます。その場合は、[謎の引用符のクリア](/learn/citation-question-mark/) を参照してください。

## ここからどこへ行くか

単一の `.bib` ファイルは、作成するすべての論文に使用できるため、慎重に作成する価値があります。 [長持ちする .bib を作成する](/learn/create-bibliography/) では、10 年にわたって保存されるエントリの種類、必須フィールド、およびキーについて説明します。会場が別の外観を必要とする場合は、[数値、著者年、ジャーナルのスタイル](/learn/change-citation-style/) で説明されているように、エントリを変更するのではなく 1 行を変更します。