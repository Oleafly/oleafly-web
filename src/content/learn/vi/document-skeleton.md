---

title: "Một bộ xương bạn có thể tái sử dụng"
description: "Loại, lời mở đầu, tiêu đề, phần, thư mục: hình dạng của hầu hết mọi tờ báo."
category: "open-the-loop"
order: 7
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Document skeleton check'
  questions:
    - prompt: 'What are the three main parts of a typical LaTeX document?'
      choices:
        - 'Abstract, figures, and appendix only'
        - 'The class line, the preamble, and the body between begin/end{document}'
        - 'Header, footer, and sidebar'
        - 'A .bib file, a style file, and a PDF'
      answer: 'B'
      level: beginner
    - prompt: 'Which class do you usually pick for a short paper or homework?'
      choices:
        - 'beamer'
        - 'article'
        - 'book'
        - 'no class at all'
      answer: 'B'
      level: beginner
    - prompt: 'Why does pasting \chapter into an article often blow up?'
      choices:
        - 'article turns off all numbering'
        - 'article has no \chapter; chapters live in report/book-style classes'
        - 'You forgot graphicx'
        - 'Chapters only work offline'
      answer: 'B'
      level: beginner
    - prompt: 'If you put real text before \begin{document}, what error do you usually see?'
      choices:
        - 'Undefined control sequence for \par'
        - 'Missing \begin{document}'
        - 'Overfull hbox'
        - 'Citation undefined'
      answer: 'B'
      explanation: 'The preamble is for setup only. It shouldn''t print body text.'
      level: beginner
    - prompt: 'What happens to text after \end{document}?'
      choices:
        - 'It becomes a second PDF page'
        - 'LaTeX ignores it'
        - 'It gets moved into the abstract'
        - 'It always fatal-errors'
      answer: 'B'
      level: beginner
---

# Một bộ xương bạn có thể tái sử dụng

Loại bỏ nội dung và hầu hết mọi tài liệu LaTeX đều có cùng một khung: khai báo lớp, phần mở đầu của quá trình thiết lập và phần nội dung nằm giữa `\begin{document}` và `\end{document}`. Khi bạn đã biết hình dạng này, hãy bắt đầu một dự án mới bằng cách dán bộ xương, thay đổi tiêu đề và viết.

```latex
\documentclass[11pt]{article}
% preamble: packages, macros, metadata
\title{...}
\author{...}
\begin{document}
\maketitle
% body: sections, figures, bibliography
\end{document}
```

Đọc từ trên xuống dưới: `\documentclass[11pt]{article}` chọn loại tài liệu và đặt kích thước phông chữ cơ bản làm tùy chọn. Mọi thứ khác trong thiết kế đều bắt nguồn từ sự lựa chọn này. Vùng giữa dòng lớp và `\begin{document}` là [preamble](/learn/preamble-explained/), nơi các gói được tải và siêu dữ liệu như `\title` và `\author` được lưu trữ. `\begin{document}` đánh dấu nơi nội dung hiển thị bắt đầu, `\maketitle` sắp xếp khối tiêu đề được lưu trữ và phần nội dung theo sau là các phần, hình ảnh và cuối cùng là thư mục. `\end{document}` đóng tài liệu. Bất cứ điều gì sau đó đều bị bỏ qua một cách âm thầm, đôi khi ẩn đi một đoạn văn bản mà ai đó đã dán nhầm chỗ.

## Lựa chọn lớp học

| Lớp | Sử dụng |
| --- | --- |
| `bài viết` | Giấy tờ, bài tập về nhà, ghi chú |
| `báo cáo` | Báo cáo dài hơn với các chương |
| `sách` | Sách và nhiều luận văn |
| `máy chiếu` | Trang trình bày |

Lớp học không mang tính thẩm mỹ; nó thay đổi những lệnh tồn tại. `bài viết` không có `\chapter` nên việc dán các chương luận văn vào đó sẽ thất bại ngay lập tức. `báo cáo` thêm các chương và đặt tiêu đề cho trang riêng. `sách` giả định in hai mặt và mở các chương ở trang bên phải. `beamer` tái cấu trúc mọi thứ xung quanh các khung cho slide. Các tạp chí và hội nghị đưa ra các lớp học riêng của họ và khi bạn viết bài cho một địa điểm, lớp học đó sẽ thay thế hoàn toàn quyết định này.

Có hai sai lầm khiến hầu hết các bộ xương bị gãy. Văn bản được đặt trước `\begin{document}` gây ra lỗi "Thiếu \begin{document}", vì phần mở đầu chỉ có thể định cấu hình chứ không bao giờ in. Và một `\end{document}` bị thiếu khiến trình biên dịch chờ ở cuối tệp với một thông báo vô ích về việc kết thúc đầu vào. Khi một trong hai xuất hiện, hãy kiểm tra khung của tài liệu trước khi nghi ngờ nội dung.

Các vảy xương. Một ghi chú dài bốn trang giữ nội dung nội dung; luận án sẽ di chuyển mỗi chương vào tệp riêng của nó và kéo chúng vào từ thư mục gốc, như được hiển thị trong [tệp chương chia nhỏ](/learn/split-chapter-files/). Khung xung quanh họ không thay đổi.