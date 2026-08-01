---

title: "Thuật toán và danh sách nguồn"
description: "bản phác thảo thuật toán2e và danh sách cho mã thực."
category: "field-kits"
order: 3
level: "intermediate"
tags: ["code"]
featured: false
updated: 2026-07-25
---

# Thuật toán và danh sách nguồn

Các bài viết trình bày mã ở hai dạng riêng biệt và LaTeX có một công cụ riêng cho từng dạng. Mã giả là một bản phác thảo lý tưởng hóa của một thuật toán, sắp chữ với các từ khóa và toán học, và gói `algorithm2e` xử lý nó. Danh sách nguồn là mã thực được sao chép nguyên văn bằng phông chữ đơn cách và gói `danh sách` xử lý những mã đó. Chọn sai công cụ là nguyên nhân gây ra xung đột thông thường, vì vậy sẽ giúp nhìn thấy cả hai.

## Mã giả với thuật toán2e

```latex
\usepackage[ruled,vlined]{algorithm2e}
\begin{algorithm}
\caption{Train}
\While{not converged}{
 Update $\theta$\;
}
\end{algorithm}
```

Các tùy chọn gói thiết lập kiểu trực quan: `ruled` vẽ các quy tắc ngang bên trên và bên dưới thuật toán và đặt chú thích ở trên cùng, quy ước mà hầu hết các địa điểm đều mong đợi, trong khi `vline` vẽ một đường thẳng đứng nhỏ đánh dấu phạm vi của mỗi khối, do đó, việc lồng ghép vẫn có thể đọc được mà không bị thụt lề quá nhiều. Môi trường `thuật toán` là một float, giống như một hình vẽ, vì vậy nó mang `\caption` cung cấp cho nó một số để `\ref` trích dẫn.

Bên trong, `\while{condition}{body}` sắp xếp vòng lặp với từ khóa in đậm, điều kiện và nội dung dưới dạng một khối thụt lề. `\For`, `\If`, và `\Return` theo cùng một mẫu. Các câu lệnh kết thúc bằng `\;`, in ra dấu kết thúc của dòng và bắt đầu một dòng mới. Quên nó là lỗi cổ điển của người mới bắt đầu: các dòng chạy cùng nhau. Bởi vì đây là LaTeX thông thường, nên toán học như `$\theta$` hoạt động nội tuyến, đó là mục đích của mã giả: mô tả quy tắc cập nhật bằng ký hiệu thay vì bằng bất kỳ ngôn ngữ cụ thể nào.

## Mã thực có danh sách

```latex
\usepackage{listings}
\begin{lstlisting}[language=Python]
def f(x):
 return x**2
\end{lstlisting}
```

Môi trường `lstlisting` tái tạo chính xác nội dung của nó, giữ nguyên khoảng trắng và xử lý các ký tự đặc biệt theo nghĩa đen, do đó bạn có thể dán mã mà không cần thoát bất cứ thứ gì. Tùy chọn `ngôn ngữ=Python` bật tính năng đánh dấu từ khóa cho ngôn ngữ đó và `danh sách` biết hàng tá ngôn ngữ khác. Theo mặc định, đầu ra là đơn giản. Hầu hết mọi người thêm `\lstset{basicstyle=\ttfamily\small, number=left}` một lần vào phần mở đầu để có được phông chữ đơn cách ở kích thước hợp lý với số dòng. Để bao gồm một tệp trực tiếp thay vì dán, `\lstinputlisting[ngôn ngữ=Python]{train.py}` đọc tệp đó từ đĩa, giúp bài viết được đồng bộ hóa với nguồn thực tế. Nếu bạn muốn làm nổi bật màu sắc, độ trung thực cao, gói `minted` là giải pháp thay thế mạnh mẽ hơn, nhưng phải trả giá bằng việc yêu cầu một công cụ bên ngoài và bộ thoát vỏ.

## Lựa chọn giữa chúng

Sử dụng mã giả trong nội dung giấy để truyền đạt ý tưởng và dành danh sách nguyên văn cho các tạo phẩm trong đó mã chính xác quan trọng, chẳng hạn như phụ lục hoặc mô tả công cụ. Một lỗi phổ biến là đặt `lstlisting` bên trong khung Beamer mà không có tùy chọn `[fragile]`, lỗi này không thành công với lỗi mờ; cảnh báo tương tự cũng xuất hiện trong [bộ bài Beamer đầu tiên](/learn/beamer-basics/).