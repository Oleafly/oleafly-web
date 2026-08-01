---

title: "Toán nằm trong một câu (hoặc một mình)"
description: "Toán nội tuyến, toán hiển thị, môi trường phương trình và khi đánh số có giá trị."
category: "equation-craft"
order: 1
level: "beginner"
tags: ["math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Math mode check'
  questions:
    - prompt: 'What''s the real difference between inline math ($...$) and display math (\[ ... \])?'
      choices:
        - 'Inline is for Greek letters; display is only for fractions.'
        - 'Inline sits in a sentence; display is centered on its own line.'
        - 'Inline is for the article class; display is for books.'
        - 'You need display math whenever a formula has an exponent.'
      answer: 'B'
      hint: 'Where does the formula sit on the page?'
      explanation: 'Inline math stays in the paragraph. Display math gets its own centered line (and can be numbered).'
      level: beginner
      tags: [math, delimiters]
    - prompt: 'For unnumbered display math today, which form should you use?'
      choices:
        - '$$ ... $$'
        - '\[ ... \]'
        - '\begin{center} ... \end{center}'
        - '\textbf{...}'
      answer: 'B'
      explanation: 'Prefer \[ ... \]. The old $$ ... $$ form is plain TeX and can mess up vertical spacing a bit.'
      level: beginner
    - prompt: 'How do you name a numbered equation so you can point back to it later?'
      choices:
        - 'Put the equation under a section with that name.'
        - 'Add \label{...} inside the equation environment.'
        - 'Type the equation number by hand in the source.'
        - 'Load graphicx and name an image.'
      answer: 'B'
      explanation: '\label stores the number. After another compile, \ref or \eqref prints it.'
      level: beginner
    - prompt: 'Why do most technical papers load amsmath (often with amssymb and amsfonts)?'
      choices:
        - 'Without it, LaTeX won''t print any text.'
        - 'You get the common math environments, symbols, and helpers like \eqref.'
        - 'It replaces the document class.'
        - 'It turns off dollar-sign math mode.'
      answer: 'B'
      level: beginner
    - prompt: 'What happens if you type something like DNA_seq in ordinary text mode?'
      choices:
        - 'LaTeX ignores the underscore.'
        - 'You get a Missing $ inserted error: math syntax showed up outside math mode.'
        - 'The PDF never builds, no recovery at all.'
        - 'It becomes a hyperlink.'
      answer: 'B'
      explanation: 'Underscore and caret are for math. For a real underscore write \_. For a subscript, wrap the math in $...$.'
      level: beginner
---

# Toán nằm trong một câu (hoặc một mình)

LaTeX xử lý toán học như một chế độ riêng biệt với các phông chữ và quy tắc giãn cách riêng. Mọi biến, công thức và ký hiệu đều phải tồn tại trong chế độ toán học, cho dù đó là chữ n đơn độc trong câu hay một phương trình đầy đủ. Có hai loại: toán học nội tuyến chạy trong một đoạn văn và toán học hiển thị nằm ở giữa dòng riêng, có hoặc không có số.

```latex
Inline: $E=mc^2$ or \(E=mc^2\)

Display (unnumbered):
\[
 \int_0^1 x^2 \, dx = \frac{1}{3}
\]

Display (numbered):
\begin{equation}
 \label{eq:energy}
 E = mc^2
\end{equation}
```

## Toán nội tuyến

Một cặp ký hiệu đô la, như trong `$E=mc^2$`, đặt công thức ở kích thước văn bản bên trong dòng. Các chữ cái in nghiêng về toán học và khoảng cách xung quanh dấu bằng được xử lý cho bạn. `\(E=mc^2\)` là dạng gốc LaTeX tương đương. Nó tạo ra đầu ra giống hệt nhau và do các dấu phân cách mở và đóng của nó khác nhau nên một dấu phân cách không được đóng sẽ đưa ra thông báo lỗi rõ ràng hơn. Sử dụng phép toán nội tuyến ngay cả đối với một tên biến duy nhất, để n trong văn xuôi khớp với n trong phương trình của bạn.

## Hiển thị toán học

`\[ ... \]` đặt một công thức trên dòng chính giữa của nó mà không có số. Đó là sự lựa chọn đúng đắn cho các phương trình chỉ xảy ra một lần mà bạn không bao giờ tham khảo lại. Tránh dùng dạng `$$ ... $$` cũ. Nó là TeX đơn giản chứ không phải LaTeX và tạo ra khoảng cách dọc hơi sai trong một số trường hợp.

## Phương trình được đánh số

Môi trường `phương trình` hiển thị công thức với một số ở lề. `\label{eq:energy}` gắn tên vào số đó và ở nơi khác bạn viết `Equation~\ref{eq:energy}` hoặc, với `amsmath` được tải, `\eqref{eq:energy}`, nó sẽ thêm chính các dấu ngoặc đơn. `~` là khoảng trắng không ngắt, do đó từ và số nằm trên một dòng. Các tài liệu tham khảo giải quyết trong lần biên dịch thứ hai. Nếu bạn thấy `??` ở đầu ra, hãy xem [dấu hỏi thay vì số](/learn/equations-show-qq/).

## Các gói cần tải

```latex
\usepackage{amsmath,amssymb,amsfonts}
```

Gần như mọi tài liệu toán học đều tải ba tài liệu này. `amsmath` cung cấp môi trường và lệnh mà hầu hết các bài học này đều sử dụng, bao gồm `align` và `\eqref`. `amssymb` và `amsfonts` thêm phông chữ ký hiệu và bảng chữ cái bổ sung như `\mathbb`. Đặt dòng trong lời mở đầu một lần và quên nó đi.

Lỗi cổ điển của người mới bắt đầu là cú pháp toán học bên ngoài chế độ toán học: dấu gạch dưới trong văn bản thuần túy dừng quá trình biên dịch với "Thiếu $ được chèn", có [bài học riêng](/learn/missing-dollar/). Để cảm nhận về hai chế độ, hãy nhập một câu có `$x_i$` nội tuyến và cùng một công thức bên trong `\[ ... \]` trong [sân chơi trực tiếp](/live/) và so sánh cách mỗi chế độ xuất hiện trên trang.