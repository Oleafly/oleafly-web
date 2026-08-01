---

title: "Hai tấm trong một hàng"
description: "các trang nhỏ cạnh nhau mà không có cuộc chiến gói."
category: "floats-and-ink"
order: 5
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Hai bảng liên tiếp

Đôi khi bạn muốn có hai hình ảnh cạnh nhau, mỗi hình ảnh có chú thích và số hình riêng. Bạn không cần một gói đặc biệt cho việc đó. Các hộp `minipage` đơn giản bên trong một môi trường `figure` thực hiện công việc và vì cả hai hình ảnh đều nằm trong một hình nổi nên LaTeX không bao giờ có thể tách chúng thành các trang khác nhau.

## Mẫu hình

```latex
\begin{figure}[htbp]
 \centering
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{a.pdf}
 \caption{Left}
 \end{minipage}\hfill
 \begin{minipage}{0.48\textwidth}
 \includegraphics[width=\linewidth]{b.pdf}
 \caption{Right}
 \end{minipage}
\end{figure}
```

`Trang nhỏ` là một hộp hoạt động giống như một trang thu nhỏ: nó có chiều rộng cố định mà bạn chọn và nội dung của nó bao bọc và xếp chồng lên nhau bên trong chiều rộng đó. Ở đây, mỗi trang nhỏ chiếm `0,48\textwidth`, nghĩa là 48 phần trăm chiều rộng văn bản. Điều đó cố tình để lại 4 phần trăm không được xác nhận và `\hfill` giữa hai hộp là không gian có thể co giãn và mở rộng để lấp đầy nó, đẩy một bảng sang lề trái và bảng kia sang bên phải. Nếu bạn đặt cả hai chiều rộng thành `0,5\textwidth`, chúng sẽ có tổng chiều rộng chính xác là dòng không có khoảng trống cho bất kỳ khoảng cách nào và hộp thứ hai sẽ rơi xuống dòng tiếp theo, đó là lý do phổ biến nhất khiến bố cục cạnh nhau xếp chồng lên nhau theo chiều dọc một cách bí ẩn.

Bên trong mỗi trang nhỏ, `width=\linewidth` chia tỷ lệ hình ảnh theo chiều rộng của hộp xung quanh chứ không phải toàn bộ trang. Thay vào đó, việc sử dụng `\textwidth` thường mắc một lỗi khiến mỗi hình ảnh rộng bằng khối văn bản đầy đủ, đảm bảo tràn.

Lưu ý vị trí của chú thích: bên trong mỗi trang nhỏ. Điều đó mang lại cho mỗi bảng một chú thích đầy đủ với số riêng của nó, do đó, hình này tạo ra Hình 3 và Hình 4 xếp thành một hàng. Các tùy chọn vị trí `[htbp]` bên ngoài cho LaTeX biết nó có thể đặt phần nổi ở đây, ở đầu trang, ở cuối trang hoặc trên trang nổi, theo thứ tự ưu tiên đó.

## Căn chỉnh phần trên và trộn nội dung

Nếu hai hình ảnh có chiều cao khác nhau, việc căn chỉnh theo chiều dọc của chúng có thể không giống nhau vì các trang nhỏ căn chỉnh ở giữa theo mặc định. Thay vào đó, hãy viết `\begin{minipage[t]{0.48\textwidth}` để căn chỉnh chúng ở trên cùng. Các trang nhỏ cũng không quan tâm chúng chứa gì, do đó, bố cục tương tự này đặt một hình bên cạnh bảng hoặc hình ảnh bên cạnh một đoạn văn bản giải thích, những gói kiểu hình con này không được thiết kế cho.

## Khi nào nên sử dụng cấu hình phụ thay thế

Điều duy nhất mà mẫu này không thể cung cấp cho bạn là các bảng được gắn nhãn (a) và (b) dưới một chú thích chung và một con số duy nhất. Khi bạn muốn "Hình 5(a)" thay vì hai hình độc lập, hãy chuyển sang [hình con](/learn/subfigures-abc/). Nguyên tắc nhỏ: các trang nhỏ dành cho các hình là lân cận, trong khi các hình phụ dành cho một hình có các bộ phận.