---

title: "Loại lớn hơn và loại nhỏ hơn"
description: "Các tùy chọn lớp như 11pt và các công tắc kích thước cục bộ không làm hỏng khoảng cách dòng."
category: "type-and-shape"
order: 2
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Loại lớn hơn và loại nhỏ hơn

Kích thước loại trong LaTeX được đặt ở hai cấp độ: kích thước cơ sở cho toàn tài liệu được chọn một lần trong tùy chọn lớp và chuyển đổi cục bộ cho các khoảng cần khác nhau. Kích thước cơ sở thúc đẩy mọi thứ khác. Các tiêu đề, chú thích cuối trang và kích thước cục bộ đều được xác định tương ứng với nó.

## Toàn bộ tài liệu

```latex
\documentclass[11pt]{article} % 10pt, 11pt, 12pt common
```

Tùy chọn lớp đặt kích thước của văn bản nội dung. `10pt` là mặc định và `11pt` và `12pt` là các lựa chọn thay thế phổ biến; các lớp tiêu chuẩn chỉ hỗ trợ ba lớp này. Việc thay đổi tùy chọn sẽ điều chỉnh lại tỷ lệ toàn bộ tài liệu, vì kích thước tiêu đề, kích thước chú thích cuối trang và khoảng cách dòng đều bắt nguồn từ cơ sở. Nếu bạn cần kích thước cơ sở vượt quá 12pt, các lớp như `extarticle` hoặc các lớp KOMA-Script chấp nhận nhiều tùy chọn hơn.

## Công tắc cục bộ

```latex
{\large larger} {\Large larger}
{\small smaller} {\footnotesize notes}
{\tiny tiny}
```

Đây là những khai báo chứ không phải là các lệnh có đối số: `\large` thay đổi kích thước từ điểm đó cho đến khi nhóm hiện tại kết thúc và các dấu ngoặc nhọn xung quanh `{\large lớn hơn}` là những gì giới hạn phạm vi tiếp cận của nó. Thang đầy đủ, từ nhỏ nhất đến lớn nhất, là `\tiny`, `\scriptsize`, `\footnotesize`, `\small`, `\normalsize`, `\large`, `\Large`, `\LARGE`, `\huge`, `\Huge`. Mỗi bước ánh xạ tới một kích thước cụ thể tùy thuộc vào tùy chọn lớp, vì vậy `\large` trong `12pt` lớn hơn `\large` trong `10pt`. Hãy coi các nút chuyển là các bước cách xa văn bản nội dung chứ không phải là các kích thước cố định.

Khoảng cách dòng có một sự tinh tế. Công tắc kích thước chỉ điều chỉnh khoảng cách cơ sở cho các đoạn kết thúc khi nó đang hoạt động. Để có khoảng nhiều đoạn ở kích thước lớn hơn, hãy giữ dấu ngắt đoạn bên trong nhóm bằng cách kết thúc bằng `\par` trước dấu ngoặc đóng, như trong `{\large ... \par}`. Nếu không, đoạn cuối cùng giữ khoảng cách dòng ở kích thước bình thường bên dưới các chữ cái quá khổ và các dòng sẽ va chạm nhau.

## Kích thước so với cấu trúc

Chống lại việc sử dụng công tắc kích thước sang tiêu đề giả. `\section` và họ hàng của nó đặt kích thước cho bạn, đồng thời họ cũng đánh số tiêu đề, thêm vào mục lục và tạo dấu trang PDF. Một dòng `{\Large \textbf{...}}` được tạo thủ công không mang lại điều gì trong số đó. Ý tưởng tương tự cũng được áp dụng cho việc nhấn mạnh, được bao hàm trong [nhấn mạnh mà không cần đấu tranh với phông chữ](/learn/bold-italic/). Dành riêng các công tắc kích thước thủ công cho các nhu cầu thực sự của địa phương, chẳng hạn như nhận xét có kích thước chú thích cuối trang dưới bảng hoặc một dòng trên trang tiêu đề. Nếu mọi tiêu đề trong tài liệu cần được định dạng lại, hãy thay đổi lớp hoặc sử dụng gói như `titlesec` thay vì định cỡ từng tiêu đề theo cách thủ công.