---

title: "Biên dịch bản PDF đầu tiên của bạn"
description: "Một bài viết nhỏ, một bài tổng hợp và ba ý tưởng giúp bạn tận dụng tối đa LaTeX."
category: "open-the-loop"
order: 1
level: "beginner"
tags: ["basics", "compile"]
featured: true
updated: 2026-07-25
quiz:
  title: 'First document check'
  questions:
    - prompt: 'What does compiling a LaTeX file actually do?'
      choices:
        - 'Uploads your paper to a journal.'
        - 'Runs a LaTeX engine over your .tex file and writes a PDF.'
        - 'Turns Word formatting into markdown.'
        - 'Only checks grammar; layout is separate.'
      answer: 'B'
      level: beginner
    - prompt: 'What does \documentclass{article} mainly set?'
      choices:
        - 'Only the title font.'
        - 'The document type and the usual defaults for fonts, margins, and headings.'
        - 'Your bibliography style forever.'
        - 'That math mode is off.'
      answer: 'B'
      level: beginner
    - prompt: 'When do title, author, and date show up on the page?'
      choices:
        - 'As soon as you write \title{...} in the preamble.'
        - 'When you call \maketitle in the body.'
        - 'Only after bibtex runs.'
        - 'Never. Titles are only PDF metadata.'
      answer: 'B'
      explanation: '\title, \author, and \date just store values. \maketitle is what prints them.'
      level: beginner
    - prompt: 'Which three ideas cover most of day-to-day LaTeX?'
      choices:
        - 'Themes, clipart, and track changes.'
        - 'Commands (backslash + braces), environments (begin/end), and a preamble before begin{document}.'
        - 'WYSIWYG, stylesheets, and mail merge.'
        - 'HTML, CSS, and JavaScript.'
      answer: 'B'
      level: beginner
    - prompt: 'Where does visible body content start?'
      choices:
        - 'On the first line of the .tex file'
        - 'After \begin{document}'
        - 'Only inside \section{}'
        - 'After \end{document}'
      answer: 'B'
      level: beginner
---

# Biên dịch bản PDF đầu tiên của bạn

Nếu bạn chỉ từng viết bằng Word hoặc Google Docs, LaTeX sẽ yêu cầu bạn bỏ một thói quen. Thay vì định dạng văn bản khi bạn nhập, bạn mô tả tài liệu của mình bằng văn bản thuần túy và để chương trình sắp chữ giúp bạn. Văn bản thuần túy đó nằm trong tệp `.tex`: một tệp văn bản thông thường mà bạn có thể mở trong bất kỳ trình soạn thảo nào, với các từ của bạn cùng với các lệnh như `\section{...}` cho biết mỗi phần *là*. Biên dịch biến nguồn này thành một bản PDF hoàn chỉnh. Công cụ LaTeX đọc tệp của bạn từ trên xuống dưới, diễn giải mọi lệnh, sắp xếp các trang và ghi tệp PDF. Bạn không bao giờ định dạng đầu ra trực tiếp. Bạn chỉnh sửa nguồn và biên dịch lại.

## Tài liệu thật nhỏ nhất

```latex
\documentclass{article}

\title{My First Document}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle

\section{Introduction}
Hello, \LaTeX! Math works inline like $E = mc^2$ or on its own line:
\[
 x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\]

\end{document}
```

Đọc nó từ trên xuống dưới. `\documentclass{article}` cho công cụ biết đây là loại tài liệu gì, đặt các giá trị mặc định hợp lý cho phông chữ, lề và kiểu tiêu đề. Các dòng `\title`, `\author` và `\date` chỉ lưu trữ siêu dữ liệu; chưa có gì được in và `\today` chỉ đơn giản có nghĩa là ngày của bất kỳ ngày nào bạn biên dịch. `\begin{document}` đánh dấu nơi nội dung thực sự bắt đầu. `\maketitle` là thời điểm khối tiêu đề được lưu trữ xuất hiện trên trang. `\section{Giới thiệu}` in một tiêu đề được đánh số và lặng lẽ ghi lại nó để mục lục có thể tìm thấy nó sau này. Các dòng cuối cùng hiển thị hai mặt của phép toán: `$...$` sắp chữ một công thức bên trong một câu, trong khi `\[ ... \]` cung cấp cho nó một dòng hiển thị ở giữa.

## Ba ý tưởng mang ngôn ngữ

1. Các lệnh bắt đầu bằng dấu gạch chéo ngược và thường nhận đối số trong dấu ngoặc nhọn, vì vậy `\textbf{hello}` có nghĩa là "bộ sắp chữ xin chào in đậm".
2. Các môi trường bao bọc một vùng giữa `\begin{...}` và `\end{...}` và phần thân tệp của bạn chính là một môi trường `tài liệu` lớn.
3. Lời mở đầu là mọi thứ trước `\begin{document}`; nó cấu hình tài liệu nhưng không bao giờ tạo ra văn bản hiển thị.

Hầu hết mọi thứ khác trong LaTeX đều là biến thể của ba thứ này.

## Biên dịch nó

Trong [Oleafly](/docs/getting-started/), tạo một dự án, dán mã nguồn ở trên và biên dịch. Tệp PDF xuất hiện bên cạnh nguồn của bạn và SyncTeX liên kết hai bên: nhấp vào một vị trí trong tệp PDF để chuyển đến dòng nguồn phù hợp hoặc ngược lại. Quá trình biên dịch đầu tiên của một dự án có thể mất nhiều thời gian hơn một chút trong khi công cụ tìm nạp những gì nó cần; các lần chạy sau nhanh hơn.

Một điều có thể mong đợi: sớm hay muộn quá trình biên dịch sẽ thất bại với thông báo lỗi và số dòng. Điều này là hoàn toàn bình thường và thường có nghĩa là lỗi đánh máy trong tên lệnh hoặc thiếu dấu ngoặc đóng. Sửa dòng nó trỏ tới và biên dịch lại.

## Kế tiếp

Tiếp tục với [phần mở đầu, đã giải thích](/learn/preamble-explained/) để xem các dòng thiết lập thực sự làm gì, sau đó là [chế độ toán học](/learn/math-mode/) cho các công thức. Giữ [cheatsheet](/learn/cheatsheet/) mở trong khi bạn viết trang thực đầu tiên của mình.