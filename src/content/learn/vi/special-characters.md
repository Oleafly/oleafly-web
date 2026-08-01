---

title: "Ký tự phá nguồn"
description: "Cách gõ phần trăm, đô la, ký hiệu, dấu gạch dưới, dấu ngoặc nhọn mà không ngắt dòng."
category: "type-and-shape"
order: 7
level: "beginner"
tags: ["formatting", "errors"]
featured: false
updated: 2026-07-25
---

# Ký tự phá nguồn

LaTeX dự trữ một số ký tự hàng ngày làm cú pháp và nhập một ký tự mà bạn muốn nói là ký tự chữ sẽ dừng quá trình biên dịch hoặc âm thầm đọc sai kết quả đầu ra. Mỗi ký tự dành riêng có một lối thoát và toàn bộ tập hợp nằm gọn trong một chiếc bàn nhỏ.

| Char | Mã |
| --- | --- |
| % | `\%` |
| $ | `\$` |
| & | `\&` |
| # | `\#` |
| _ | `\_` |
| { } | `\{` `\}` |
| ~ | `\textasciitilde` |
| \ | `\textbackslash` |

## Nhân vật làm gì không thoát

`%` bắt đầu một nhận xét, vì vậy mọi thứ từ nó đến cuối dòng đều bị loại bỏ. Đó là lỗi "câu của tôi biến mất" thông thường: viết 50% trong báo cáo và phần còn lại của dòng biến mất mà không có lỗi nào cả. `$` chuyển đổi chế độ toán học, do đó, một chữ đi lạc sẽ âm thầm in nghiêng văn bản hoặc phát sinh các lỗi khác xa với lỗi đánh máy. `&` là tab căn chỉnh trong bảng và khối `align`; bên ngoài chúng không thành công với "Tab căn chỉnh sai vị trí". `#` đánh dấu các tham số macro. `_` và `^` thuộc chế độ toán học và trong văn bản chúng đưa ra "Thiếu $ được chèn", [có bài học riêng](/learn/missing-dollar/). `~` là một khoảng trắng không bị ngắt, vì vậy dấu ngã được nhập vào URL hoặc đường dẫn sẽ lặng lẽ trở thành một khoảng trắng. `\` bắt đầu mọi lệnh, đó là lý do tại sao nó không thể tự thoát: `\\` là ngắt dòng và ký tự chữ cần `\textbackslash`.

## Trốn thoát trong thực tế

Đối với sáu ký tự đầu tiên, ký tự thoát là tiền tố dấu gạch chéo ngược và nó hoạt động tương tự bên trong các lệnh khác:

```latex
The run reached 87\% accuracy; results are in
\texttt{results\_v2.csv}, and the job cost \$40.
```

Lưu ý rằng dấu gạch dưới cần thoát ngay cả bên trong `\texttt`. Hai lối thoát kiểu lệnh, `\textasciitilde` và `\textbackslash`, phải được theo sau bởi `{}` hoặc một khoảng trắng khi có một chữ cái tiếp theo, để tên lệnh không nuốt từ theo sau.

Đối với toàn bộ đoạn mã, đường dẫn hoặc URL, hãy bỏ qua việc thoát hoàn toàn. `\verb|...|` và môi trường `verbatim` in nội dung của chúng chính xác như đã nhập, với mọi ký tự đặc biệt được loại bỏ và `\url{...}` của gói `url` xử lý các liên kết hoàn chỉnh bằng dấu ngã.

Những ký tự khó chịu nhất là những ký tự thất bại trong âm thầm và `%` dẫn đầu danh sách đó. Văn bản được dán là thủ phạm thông thường: URL, lệnh shell và số liệu tài chính đều mang các ký tự dành riêng. Khi một câu bị thiếu trong bản PDF, hãy tìm kiếm dòng nguồn đó để tìm `%` trống trước bất kỳ nội dung nào khác.