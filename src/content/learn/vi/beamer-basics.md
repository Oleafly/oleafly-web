---

title: "Bộ bài Beamer đầu tiên"
description: "Chủ đề, khung tiêu đề, dàn ý, một slide kết quả."
category: "on-stage"
order: 1
level: "intermediate"
tags: ["beamer"]
featured: true
updated: 2026-07-25
---

# Bộ bài Beamer đầu tiên

Beamer là lớp tài liệu LaTeX tiêu chuẩn để thuyết trình. Thay vì các trang, tài liệu tạo ra các slide và mọi thứ bạn đã biết đều được áp dụng: cùng một phép toán, các số liệu giống nhau, các lệnh thư mục giống nhau. Chiến thắng thực tế của các tác giả bài báo là việc tái sử dụng. Các phương trình và sơ đồ TikZ từ bản thảo dán vào bài nói không thay đổi. Đây là một bộ bài tối thiểu nhưng đầy đủ:

```latex
\documentclass{beamer}
\usetheme{Madrid}
\title{Talk Title}
\author{You}
\begin{document}
\frame{\titlepage}
\begin{frame}{Outline}
 \tableofcontents
\end{frame}
\begin{frame}{Results}
 \begin{itemize}
 \item Finding one
 \item Finding two
 \end{itemize}
\end{frame}
\end{document}
```

## Khung, không phải trang

Đơn vị cốt lõi là khung và mỗi môi trường `khung` sẽ trở thành một trang trình bày. Đối số tùy chọn trong dấu ngoặc nhọn, như trong `\begin{frame}{Results}`, đặt tiêu đề của trang chiếu. Trang trình bày đầu tiên sử dụng tốc ký `\frame{\titlepage}`, trong đó `\titlepage` hiển thị siêu dữ liệu được khai báo trong phần mở đầu bởi `\title` và `\author`. Bạn cũng có thể thêm `\institute` và `\date` và chúng xuất hiện trong cùng một bố cục. Một khung có kích thước nhỏ hơn đáng kể so với một trang, khoảng 128 mm x 96 mm khung vẽ, do đó, nội dung tràn ra là dấu hiệu để chia tài liệu thành hai khung thay vì thu nhỏ phông chữ.

## Chủ đề và dàn ý

`\usetheme{Madrid}` chọn một thiết kế hình ảnh hoàn chỉnh: màu sắc, thanh đầu trang và chân trang cũng như cách vẽ tiêu đề khung. Beamer cung cấp hàng tá chủ đề. `Madrid`, `Berlin` và `default` cố tình đơn giản là những lựa chọn phổ biến và việc hoán đổi chủ đề là thay đổi một dòng sẽ định hình lại toàn bộ bộ bài. Nhiều hội nghị và phòng thí nghiệm phân phối chủ đề riêng của họ. Trong trường hợp đó, bạn thả tệp kiểu của họ vào dự án và đặt tên cho nó ở đây.

Khung dàn ý gọi `\tableofcontents`, liệt kê cấu trúc từng phần của bài nói. Một nhược điểm: nó liệt kê các lệnh `\section` và ví dụ tối thiểu này không có lệnh nào, vì vậy đường viền hiển thị trống cho đến khi bạn thêm các dòng như `\section{Method}` giữa các khung. Các phần trong Beamer không in tiêu đề trên slide; chúng tồn tại để cấu trúc đường viền và các thành phần điều hướng mà một số chủ đề hiển thị.

## Nội dung trên slide

Bên trong một khung, `itemize` hoạt động giống như trong bất kỳ tài liệu nào và mỗi `\item` trở thành một dấu đầu dòng. Các slide chứa ít văn bản hơn nhiều so với giấy, vì vậy hãy giữ các mục ở dòng đơn nếu có thể và chuyển chi tiết vào nội dung bạn nói. Các số liệu, bảng biểu và phép toán đều hoạt động bên trong các khung, mặc dù đầu ra Beamer không hiển thị trong các bản xem trước trong trang này, vì vậy hãy biên dịch tài liệu để xem nó.

Lỗi ban đầu phổ biến nhất là nội dung nguyên văn: `\verb` và danh sách mã bị hỏng bên trong các khung thông thường do cách các khung xử lý nội dung của chúng. Cách khắc phục là tùy chọn dễ hỏng, được viết `\begin{frame[fragile]`, trên bất kỳ khung nào chứa mã. Khi bản thảo được phác thảo, tiết lộ từng bước là công cụ tiếp theo để tìm hiểu, được đề cập trong [tiết lộ dòng khi nhấp chuột](/learn/beamer-overlays/).