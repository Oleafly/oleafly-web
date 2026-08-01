---

title: "Các bảng có nhãn a, b, c"
description: "chú thích phụ cho các số liệu nhiều bảng dưới một chú thích."
category: "float-surgery"
order: 4
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Bảng có nhãn a, b, c

Các bài báo liên tục cần các số liệu nhiều bảng: kiến ​​trúc trong bảng (a), đường cong huấn luyện trong (b), cắt bỏ trong (c), tất cả đều có chung một số hình và một chú thích tổng thể. Cách rõ ràng để xây dựng điều này là gói `subcaption`, gói này cung cấp cho bạn môi trường `subfigure` xử lý chữ cái (a), (b), chú thích trên mỗi bảng và tham chiếu tự động.

## Mẫu hình

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{First}\label{fig:p-a}
 \end{subfigure}\hfill
 \begin{subfigure}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Second}\label{fig:p-b}
 \end{subfigure}
 \caption{Overall caption}\label{fig:p}
\end{figure}
```

Đây là những gì mỗi phần làm. Môi trường `figure` bên ngoài là một vùng nổi bình thường và `[htbp]` liệt kê các vị trí mà LaTeX có thể thử, theo thứ tự: ở đây trong văn bản, đầu trang, cuối trang hoặc một trang nổi chuyên dụng. Mỗi `hình con` là một hộp có chiều rộng đã nêu, ở đây `0,48\textwidth` (48 phần trăm chiều rộng văn bản). Hai bảng ở mức 0,48 để lại một khoảng trống nhỏ và `\hfill` giữa chúng trải dài để các bảng nằm ngang với lề trái và phải. Bên trong mỗi bảng, `width=\linewidth` chia tỷ lệ hình ảnh theo chiều rộng của bảng chứ không phải toàn bộ trang. Chi tiết cuối cùng đó là chi tiết mà mọi người thường mắc sai lầm nhất.

`\caption` bên trong một `subfigure` tạo ra nhãn kiểu "(a) First" nhỏ bên dưới bảng điều khiển đó. `\chú thích` ở cuối, bên trong `hình` nhưng bên ngoài bất kỳ `hình con` nào, là chú thích chính mang số hình. Giữ mỗi `\nhãn` ngay sau `\chú thích` của nó, vì nhãn ghi lại bất kỳ số nào được phát hành gần đây nhất, như được giải thích trong [chú thích và nhãn](/learn/captions-labels/).

## Bảng tham chiếu

Với các nhãn ở trên, `\ref{fig:p}` in số hình, giả sử là 2, trong khi `\ref{fig:p-a}` in 2a. Nếu bạn chỉ muốn chữ cái, `\subref{fig:p-a}` chỉ in "a", tiện cho các câu như "panels (a) và (b)". Đó là lợi ích thực sự của `phụ đề` so với việc nhập thủ công "(a)" dưới hình ảnh. Các chữ cái tự đánh số lại khi bạn thêm hoặc sắp xếp lại các bảng và mọi tham chiếu vẫn chính xác.

## Hàng, khoảng cách và một lỗi thường gặp

Đối với bảng thứ ba, hãy thu nhỏ chiều rộng xuống khoảng `0,31\textwidth` và thêm một `hình con` khác với `\hfill` giữa mỗi cặp hoặc bắt đầu một hàng mới bằng cách để lại một dòng trống giữa các hàng cấu hình con. Tuy nhiên, một dòng trống bên trong một hàng là một lỗi cổ điển: bất kỳ dòng trống nào giữa hai môi trường `cấu hình phụ` đều bắt đầu một đoạn mới, xếp các bảng theo chiều dọc thay vì cạnh nhau. Nếu các bảng của bạn từ chối xếp thành một hàng, trước tiên hãy tìm một dòng trống lạc lối và nhớ rằng `%` ở cuối dòng nhận xét khoảng trống cuối dòng vô hình cũng có thể đẩy một bảng quá rộng đến mức không vừa.