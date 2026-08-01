---

title: "Áp phích tại A0"
description: "tikzposter, Beamerposter hoặc hình học cộng với TikZ."
category: "on-stage"
order: 3
level: "intermediate"
tags: ["poster"]
featured: false
updated: 2026-07-25
---

# Poster tại A0

Áp phích hội nghị là một trang duy nhất, thường là A0 hoặc A1, phải đọc được từ khoảng cách một mét rưỡi. LaTeX xử lý tốt định dạng vì người đăng có thể sử dụng lại trực tiếp các phương trình, số liệu và thư mục của bài báo. Tuy nhiên, một lớp tài liệu thông thường sẽ không cắt nó: phông chữ, lề và bố cục cột đều cần các phiên bản có tỷ lệ áp phích. Ba cách tiếp cận áp dụng cho hầu hết mọi áp phích LaTeX trong tự nhiên.

## Ba lựa chọn

Lớp `tikzposter` là con đường trực tiếp nhất để có được một tấm áp phích học thuật hiện đại. Nó sắp xếp nội dung thành các khối màu được sắp xếp theo cột, cung cấp một số chủ đề hoàn chỉnh và tự xử lý khổ giấy lớn cũng như phông chữ được chia tỷ lệ. Một bộ xương trông như thế này:

```latex
\documentclass[25pt, a0paper, portrait]{tikzposter}
\title{Poster Title}
\author{You}
\usetheme{Default}
\begin{document}
\maketitle
\begin{columns}
 \column{0.5}
 \block{Motivation}{Text for the first block.}
 \column{0.5}
 \block{Results}{Text for the second block.}
\end{columns}
\end{document}
```

Các tùy chọn lớp đặt phông chữ cơ bản 25 điểm, giấy A0 và hướng dọc. Mỗi `\column{0.5}` chiếm một phần chiều rộng của áp phích và mỗi `\block{title}{content}` trở thành một bảng có tiêu đề. Thay đổi `\usetheme` sẽ định dạng lại mọi khối cùng một lúc.

Gói `beamerposter` mở rộng Beamer sang các kích thước áp phích, do đó, chủ đề, màu sắc và môi trường `khối` của bộ bài được chuyển sang một khung khổng lồ duy nhất. Đó là sự lựa chọn đương nhiên khi nhóm của bạn đã duy trì phong cách Beamer và nhiều mẫu áp phích của trường đại học được xây dựng dựa trên đó.

Tùy chọn thứ ba là một lớp tài liệu đơn giản với gói `hình học` cài đặt kích thước A0, cộng với TikZ để trang trí. Điều này mang lại toàn quyền kiểm soát từng milimet và là cách tạo ra hầu hết các áp phích được thiết kế chuyên nghiệp, nhưng bạn tự xây dựng giàn giáo cột, vì vậy hãy dành thời gian thực cho việc đó.

## Lời khuyên thiết thực

Cho dù bạn chọn cách nào, hãy bắt đầu từ một mẫu đang hoạt động thay vì một tệp trống, ví dụ như một mẫu từ [thư viện](/templates/) và thay thế từng khối nội dung. Đặt kích thước và hướng giấy vào ngày đầu tiên vì việc thay đổi chúng sau này sẽ phá vỡ mọi chiều rộng được điều chỉnh thủ công. Nội dung văn bản sẽ có kích thước khoảng 24 đến 32 điểm sau khi được in; bất cứ điều gì dưới 20 điểm sẽ không được đọc. Ưu tiên các hình vector. Biểu đồ được xuất cho một cột giấy sẽ chuyển sang trạng thái nhão khi được chia tỷ lệ theo chiều rộng áp phích, do đó hãy tạo lại các hình ở kích thước áp phích thay vì kéo dài chúng.

Lỗi phổ biến nhất là coi áp phích như một tờ giấy nén. Lập kế hoạch cho khoảng một phần ba số từ mà bạn soạn thảo lần đầu tiên, để các số liệu mang đối số và kiểm tra kết quả bằng cách in một khối PDF trên A4 ở tỷ lệ đầy đủ để đánh giá kích thước phông chữ thực trước khi gửi tệp tới máy vẽ.