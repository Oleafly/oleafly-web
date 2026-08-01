---

title: "Mọi thứ ở trên đều bắt đầu{document}"
description: "Gói, siêu dữ liệu và thứ tự tải: cái gì thuộc phần mở đầu và cái gì không."
category: "open-the-loop"
order: 3
level: "beginner"
tags: ["basics", "preamble"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Preamble check'
  questions:
    - prompt: 'What is the preamble?'
      choices:
        - 'Everything after \end{document}'
        - 'Everything between \documentclass{...} and \begin{document}'
        - 'Only the bibliography file'
        - 'The PDF outline panel'
      answer: 'B'
      level: beginner
    - prompt: 'Does preamble material print as body text on its own?'
      choices:
        - 'Yes. Every package prints a banner page.'
        - 'No. It configures the run; visible text starts in the body.'
        - 'Only if you use article.'
        - 'Only on the second compile.'
      answer: 'B'
      level: beginner
    - prompt: 'Why is hyperref usually loaded late in the preamble?'
      choices:
        - 'Loading it earlier is illegal.'
        - 'It rewrites a lot of commands, so it wants other packages loaded first.'
        - 'It only works after \maketitle.'
        - 'Loaded early, it disables amsmath.'
      answer: 'B'
      level: intermediate
    - prompt: 'Which of these belongs in the preamble?'
      choices:
        - 'A multi-paragraph introduction'
        - '\usepackage{amsmath} and \title{...}'
        - '\section{Results}'
        - 'The main \includegraphics for a figure'
      answer: 'B'
      level: beginner
    - prompt: 'What do options like 11pt on \documentclass mostly control?'
      choices:
        - 'Journal acceptance rate'
        - 'Global defaults such as base font size (and often paper size)'
        - 'Which OS you compiled on'
        - 'How many figures you''re allowed'
      answer: 'B'
      level: beginner
---

# Mọi thứ ở trên đều bắt đầu{document}

Mọi thứ giữa `\documentclass{...}` và `\begin{document}` đều là **lời mở đầu**. Nó không tạo ra văn bản có thể nhìn thấy. Nó cấu hình chạy. Phông chữ, lề, gói, lệnh tùy chỉnh và siêu dữ liệu tài liệu đều có ở đây, đó là lý do tại sao phần mở đầu của một bài báo dành cho người trưởng thành thường dài hơn phần giới thiệu của nó. Khi bạn biết từng dòng làm gì, mẫu được sao chép sẽ không còn là điều kỳ diệu nữa và trở thành danh sách kiểm tra.

## Giải phẫu

```latex
\documentclass[11pt,a4paper]{article}

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,amssymb}
\usepackage{graphicx,booktabs}
\usepackage{hyperref} % load late

\title{Title}
\author{You}
\date{\today}
```

Các tùy chọn trên `\documentclass` đặt mặc định chung: `11pt` là kích thước phông chữ cơ bản mà mọi thứ khác đều chia theo tỷ lệ và `a4paper` khai báo kích thước giấy. Hai dòng mã hóa là những đồng hành lịch sử: `inputenc` cho công cụ biết tệp nguồn của bạn là UTF-8 và `fontenc` chọn mã hóa phông chữ để các ký tự có dấu là các ký tự thực chứ không phải là các ký tự tổng hợp. LaTeX hiện tại đã giả định đầu vào UTF-8, vì vậy bạn sẽ thấy những dòng này bị bỏ qua trong các tài liệu mới, nhưng chúng vô hại và các mẫu sẽ giữ chúng để tương thích.

Khối giữa tải các gói khả năng. [geometry](/learn/margins-geometry/) đặt lề trong một tùy chọn, `amsmath` và `amssymb` cung cấp môi trường và ký hiệu toán học gần như mọi nhu cầu của tài liệu kỹ thuật, `graphicx` kích hoạt `\includegraphics` cho số liệu và `booktabs` cung cấp các quy tắc giúp bảng trông chuyên nghiệp hơn. Cuối cùng, [hyperref](/learn/hyperlinks/) làm cho các tài liệu tham khảo và trích dẫn có thể nhấp vào được và được tải có chủ ý sau cùng, vì nó xác định lại phần bên trong của nhiều gói khác.

Các dòng `\title`, `\author` và `\date` chỉ lưu trữ siêu dữ liệu. Không có gì được in cho đến khi `\maketitle` chạy trong phần nội dung, đó là lý do tại sao những phần này có thể nằm ở phần mở đầu.

## Quy tắc chung

Một vài thói quen giữ lời mở đầu khỏe mạnh. Tải một gói cho mỗi công việc và chống lại việc xếp chồng các gói cạnh tranh trên cùng một lãnh thổ, chẳng hạn như hai cách đặt lợi nhuận. Giữ hyperref ở cuối, với một số ngoại lệ được ghi lại nhưsmartef phải xuất hiện sau nó. Đặt các lựa chọn trên toàn tài liệu trong các tùy chọn lớp thay vì phân tán chúng, vì vậy `11pt` hoặc `twocolumn` được khai báo một lần ở nơi bất kỳ ai cũng có thể nhìn thấy. Và khi [macro tùy chỉnh](/learn/custom-commands/) của bạn dài hơn một vài dòng, hãy di chuyển chúng sang tệp `.sty` để nhiều tài liệu có thể chia sẻ một bộ định nghĩa.

Kỷ luật hữu ích nhất là tiêu cực: nếu bạn không biết tại sao lại có dòng mở đầu, hãy tìm hiểu trước khi tài liệu của bạn phụ thuộc vào nó. Các phần mở đầu được sao chép sẽ tích lũy các dòng chết và các dòng chết là nơi ẩn chứa xung đột gói. Xem thêm [bộ khung tài liệu](/learn/document-skeleton/) và [các công cụ được so sánh](/learn/engines-compared/).