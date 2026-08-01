---

title: "Các tiêu đề tự đánh số"
description: "từng phần, các biểu mẫu được gắn dấu sao, secnumdeep."
category: "paper-bones"
order: 2
level: "beginner"
tags: ["structure"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Sections check'
  questions:
    - prompt: 'What does \section{Introduction} mainly do?'
      choices:
        - 'Only bold the next paragraph'
        - 'Print a numbered heading and register it for the TOC / PDF outline'
        - 'Start a new PDF file'
        - 'Insert a citation'
      answer: 'B'
      level: beginner
    - prompt: 'How do you get an unnumbered section heading?'
      choices:
        - '\section*{...}'
        - '\section[none]{...}'
        - '\unnumber{\section{...}}'
        - 'Just write \textbf{...}'
      answer: 'A'
      level: beginner
    - prompt: 'Why use real heading commands instead of hand-bolded lines?'
      choices:
        - 'Bold is illegal in LaTeX'
        - 'Headings drive numbering, the TOC, and navigation. Fake bold doesn''t.'
        - 'Manual bold compiles faster'
        - 'Sections can''t hold math'
      answer: 'B'
      level: beginner
    - prompt: 'What''s the usual next level under \section?'
      choices:
        - '\chapter (even in article)'
        - '\subsection'
        - '\maketitle'
        - '\bibliography'
      answer: 'B'
      level: beginner
---

# Tiêu đề tự đánh số

Trong trình xử lý văn bản, bạn đánh số các tiêu đề bằng tay và đánh số lại chúng bằng tay mỗi khi bạn di chuyển một tiêu đề. LaTeX từ chối cho phép bạn làm điều đó. Bạn khai báo mỗi tiêu đề là gì, một phần hay một tiểu mục hoặc một chương và việc đánh số sẽ tự thực hiện. Chèn một phần mới vào giữa tài liệu của bạn và mọi thứ sau khi nó được đánh số lại trong lần biên dịch tiếp theo, cùng với mọi tham chiếu chéo và mọi mục nhập mục lục trỏ vào nó.

## Hệ thống phân cấp

```latex
\part{...} % book
\chapter{...} % report/book
\section{...}
\subsection{...}
\subsubsection{...}
\paragraph{...}
```

Các lệnh này tạo thành một bậc thang cố định. `\section` là công việc hàng ngày trong lớp `bài viết`, với `\subsection` và `\subsubsection` lồng bên dưới nó. `\chương` chỉ tồn tại trong các lớp `báo cáo` và `sách`, đó là lý do tại sao việc dán các chương luận văn vào mẫu bài viết không thành công với trình tự điều khiển không xác định. `\part` nằm phía trên các chương và hiếm có ngoài những cuốn sách dài. `\paragraph` là một trong những điều kỳ lạ: nó tạo ra một tiêu đề in đậm chạy dọc trên cùng một dòng với văn bản tiếp theo thay vì một tiêu đề trên dòng riêng của nó, điều này khiến hầu hết mọi người ngạc nhiên ngay lần đầu tiên.

Mỗi lệnh lấy văn bản tiêu đề trong dấu ngoặc nhọn, in nó theo phông chữ và kích thước đã chọn của lớp, đánh số và ghi lại để `\tableofcontents` có thể tìm thấy nó sau. Bạn không bao giờ tạo kiểu cho các tiêu đề nội tuyến. Nếu bạn muốn các phông chữ tiêu đề khác nhau, đó là quyết định trên toàn tài liệu được đưa ra trong phần mở đầu.

## Chặn số

Biểu mẫu được gắn dấu sao sẽ chặn các số: `\section*{Lời cảm ơn}`. Dấu sao cũng giữ tiêu đề nằm ngoài mục lục và hoàn toàn nằm ngoài dãy đánh số, vì vậy phần sau nó vẫn tiếp tục như thể phần được gắn dấu sao không có ở đó. Đây chính xác là những gì bạn muốn cho lời cảm ơn, lời nói đầu hoặc kết luận độc lập trong một bài báo ngắn. Nếu phần được gắn dấu sao vẫn xuất hiện trong TOC thì có một bản sửa lỗi một dòng được đề cập trong [bài học TOC](/learn/table-of-contents/).

## Kiểm soát độ sâu đánh số

```latex
\setcounter{secnumdepth}{2}
\setcounter{tocdepth}{2}
```

`secnumdeep` quyết định việc đánh số sâu như thế nào. Trong `bài viết`, các phần là cấp 1, tiểu mục cấp 2 và tiểu mục cấp 3, vì vậy, hãy đặt bộ đếm thành 2 số các phần và tiểu mục nhưng không đánh số tiêu đề tiểu mục con trong khi vẫn giữ nguyên định dạng của chúng. `tocdeep` là ý tưởng tương tự cho mục lục: nó kiểm soát độ sâu của danh sách TOC, độc lập với nội dung được đánh số trên trang. Cả hai dòng đều thuộc về lời mở đầu.

Một lỗi phổ biến là bỏ qua các cấp độ, ví dụ như nhảy thẳng từ `\section` sang `\subsubsection` vì bạn thích tiêu đề nhỏ hơn. Việc đánh số vẫn hoạt động nhưng tạo ra kết quả kỳ lạ như "1.0.1" và người đọc sẽ mất dấu cấu trúc. Chọn các cấp độ tiêu đề phù hợp với ý nghĩa và để lớp xử lý hình thức. Nếu bạn không chắc khung tài liệu của mình khớp với nhau như thế nào, [bài học về khung tài liệu](/learn/document-skeleton/) sẽ hướng dẫn cụ thể về khung đó.