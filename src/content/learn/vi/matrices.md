---

title: "Ma trận và mảng"
description: "pmatrix, bmatrix, vmatrix và các cột mảng tùy chỉnh."
category: "equation-craft"
order: 7
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Ma trận và mảng

Ma trận trong LaTeX là một lưới gồm các ô: `&` phân tách các cột, `\\` phân tách các hàng và một môi trường bao bọc lưới theo cặp dấu phân cách bên phải. Môi trường ma trận đến từ `amsmath`, vì vậy gói đó cần phải có trong phần mở đầu của bạn trước khi biên dịch bất kỳ môi trường nào trong số này.

```latex
\begin{pmatrix} a & b \\ c & d \end{pmatrix} % ( )
\begin{bmatrix} a & b \\ c & d \end{bmatrix} % [ ]
\begin{vmatrix} a & b \\ c & d \end{vmatrix} % | |
```

## Môi trường ma trận

Cả ba đều có chung một cơ thể. Chỉ có các dấu phân cách xung quanh thay đổi. `pmatrix` bao bọc lưới trong dấu ngoặc đơn, kiểu phổ biến nhất cho ma trận và vectơ. `bmatrix` sử dụng dấu ngoặc vuông và `vmatrix` sử dụng các thanh dọc đơn, ký hiệu chuẩn cho định thức. Ngoài ra còn có `ma trận` đơn giản không có dấu phân cách, `Bmatrix` có dấu ngoặc nhọn và `Vmatrix` có thanh đôi cho định mức. Bên trong, `a & b` lấp đầy hai cột của một hàng, `\\` bắt đầu hàng tiếp theo và mỗi hàng phải có cùng số lượng dấu phân cách `&`.

Các môi trường này phải xuất hiện bên trong chế độ toán học. Gói chúng trong `\[ ... \]` hoặc sử dụng chúng trong một phương trình. Đối với một ma trận nhỏ ở giữa câu, `smallmatrix`, cũng từ `amsmath`, đặt một phiên bản thu gọn không kéo dài dòng: `$\bigl(\begin{smallmatrix} a & b \\ c & d \end{smallmatrix}\bigr)$`.

## Mảng tùy chỉnh

```latex
\begin{array}{r|cc}
 1 & 2 & 3 \\
 \hline
 4 & 5 & 6
\end{array}
```

Khi bạn cần điều khiển theo từng cột, `mảng` là công cụ chung. Đối số bắt buộc của nó là đặc tả cột: ở đây `r|cc` khai báo một cột được căn phải, một quy tắc dọc, sau đó là hai cột được căn giữa. Các chữ cái căn chỉnh là `l`, `c`, và `r`, và `|` vẽ một quy tắc giữa các cột. `\hline` giữa các hàng vẽ một đường ngang trên toàn bộ chiều rộng. `mảng` không có dấu phân cách bên ngoài riêng. Ghép nối nó với `\left(` và `\right)` nếu bạn muốn. Nó là anh em ở chế độ toán học của môi trường `tabular` được sử dụng cho các bảng trong văn bản.

##Những lỗi thường gặp

Lỗi "Tab căn chỉnh bổ sung đã được thay đổi thành \cr" có nghĩa là một hàng có nhiều dấu phân cách `&` hơn số lượng cột cho phép, điều này thường dẫn ngược lại dấu `\\` bị thiếu ở cuối hàng trước đó. "Môi trường pmatrix không xác định" nghĩa là thiếu `\usepackage{amsmath}`. Ma trận được dán bên ngoài chế độ toán học không thành công với thông báo "Thiếu $ được chèn". Xem [thông tin cơ bản về chế độ toán học](/learn/math-mode/) nếu dấu phân cách là mới. Việc so sánh 2 x 2 theo từng kiểu dấu phân cách chỉ mất vài giây trong [sân chơi trực tiếp](/live/).