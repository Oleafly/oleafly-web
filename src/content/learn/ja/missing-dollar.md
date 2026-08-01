---

title: "不足しているドルが挿入されました"
description: "テキストモードに漏れた添え字と数学コマンド。"
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# 不足しているドルが挿入されました

「$ の挿入がありません」は最も一般的な LaTeX エラーであり、その名前は誤解を招きます。LaTeX はお金を要求しているのではなく、数学のみの構文がテキスト モードで表示されたことを示しています。回復するために「$」自体を挿入し、コンパイルを続行し、ダウンストリームに奇妙な斜体の出力を残すことがよくあるため、このメッセージは肩をすくめるのではなく、真の修正に値します。

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## 何がきっかけで起こるのか

2 人のキャラクターとコマンドのクラスは数学モードのみに属します。アンダースコア「_」とキャレット「^」は下付き文字と上付き文字を作成し、「\alpha」、「\frac」、「\leq」などのコマンドは数学記号を生成します。プレーンテキストの場合、エラーが発生します。典型的なケースは、ファイル名や遺伝子名などのアンダースコアを含む識別子です。文中の「DNA_seq」が「_」でトリップします。

修正方法は、意図した内容によって異なります。アンダースコアがリテラル文字の場合はエスケープします。 `DNA\_seq` は実際のアンダースコアを使用して名前を出力します。添字を意味する場合は、数学を意味するため、式をラップします。 `$x_i$` は、数学斜体で正しい間隔で下付き文字 i を使用して x を設定します。テキスト内でエスケープする必要がある文字の完全なリストには [独自のレッスン](/learn/special-characters/) があり、数学区切り文字自体は [数学モードの基本](/learn/math-mode/) でカバーされています。

## ログが奇妙な場所を指している場合

報告された行番号は、LaTeX が問題を認識した場所であり、必ずしも問題の原因となった場所ではありません。通常の原因は、先ほど閉じられていない `$` です。数学モードを開いて閉じなかったので、LaTeX は何か強制的に問題が発生するまで (多くの場合段落の終わりまで) 数学モードで実行され続けました。数学モードでは段落区切りは無効であるため、表示数学内の空白行でも同じエラーが発生します。したがって、フラグが立てられた行に問題がないように見えたら、奇数のドル記号を上に向かってスキャンし、すべての `\[` に一致する `\]` があることを確認します。

構文の強調表示は、暴走箇所を素早く見つける方法です。どの LaTeX エディタでも数式領域の色が異なるため、突然数式カラーでレンダリングされた段落は、一目で閉じられていないドルを正確に示します。

最後の注意: LaTeX は欠落している `$` を挿入することで回復するため、PDF は依然としてビルドされることがよくあります。 PDF をエラーが無害である証拠として受け取らないでください。通常、回復された出力には、テキストがあるべき箇所に斜体があったり、スペースが乱れたりしているため、ログがきれいになるまでソースを修正してください。