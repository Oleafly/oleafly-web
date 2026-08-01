---

title: "Toán tử bạn phát minh ra một lần"
description: "Khai báoMathOperator cho argmin, argmax và các tên tương tự."
category: "notation-depth"
order: 3
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Toán tử bạn phát minh ra một lần

LaTeX cung cấp các toán tử được đặt tên như `\sin`, `\log` và `\max` in theo kiểu thẳng đứng với khoảng cách chính xác xung quanh chúng. Nó không đi kèm với `\argmin` hoặc `\argmax`, mặc dù các tài liệu tối ưu hóa sử dụng chúng liên tục. Nếu bạn nhập `argmin` dưới dạng các chữ cái đơn giản trong chế độ toán học, LaTeX sẽ coi nó là tích của sáu biến: các chữ cái in nghiêng, ép lại với nhau, không có khoảng cách toán tử. Hãy tự khai báo toán tử một lần trong phần mở đầu.

## Khai báo toán tử

```latex
\usepackage{amsmath}
\DeclareMathOperator*{\argmin}{arg\,min}
\DeclareMathOperator*{\argmax}{arg\,max}

\[
\theta^\star = \argmin_\theta \mathcal{L}(\theta)
\]
```

Đây là những gì mỗi phần làm. `\DeclareMathOperator` xuất phát từ `amsmath` và tạo một lệnh mới có đối số được sắp chữ dưới dạng văn bản toán tử: các chữ cái La Mã thẳng đứng, với các quy tắc khoảng cách mà LaTeX đã áp dụng cho `\max` và `\lim`. Đối số đầu tiên là tên lệnh bạn sẽ nhập, đối số thứ hai là văn bản thực sự được in. `\,` bên trong `arg\,min` chèn một khoảng trắng mỏng giữa hai từ, đọc tốt hơn là chạy chúng cùng nhau.

Ngôi sao sau `\DeclareMathOperator` rất quan trọng. Một khai báo có gắn dấu sao làm cho toán tử hoạt động giống như `\lim`: trong phép toán hiển thị, bất cứ thứ gì bạn đính kèm với `_` nằm ngay bên dưới toán tử thay vì kéo dài về phía dưới bên phải của nó. Đó chính xác là những gì bạn muốn cho `\argmin_\theta`, trong đó biến được tối ưu hóa sẽ xuất hiện bên dưới. Không có dấu sao, chỉ số dưới vẫn ở bên cạnh, đây là quy ước dành cho các toán tử như `\log_2`. Trong phép toán nội tuyến, chỉ số dưới luôn ở bên cạnh để tránh kéo dài chiều cao của dòng.

## Tái sử dụng mẫu

Kỹ thuật tương tự áp dụng cho bất kỳ toán tử nào mà trường của bạn sử dụng mà LaTeX không biết. Một vài cái phổ biến:

```latex
\DeclareMathOperator{\tr}{tr}
\DeclareMathOperator{\rank}{rank}
\DeclareMathOperator{\diag}{diag}
\DeclareMathOperator*{\esssup}{ess\,sup}
```

Lưu ý rằng `\tr`, `\rank` và `\diag` không được gắn dấu sao vì các chỉ số dưới của chúng, nếu có, sẽ nằm ở bên cạnh. Chỉ các toán tử kiểu giới hạn như `\esssup` mới có dấu sao.

Khai báo các toán tử ở phần mở đầu thay vì viết `\mathrm{argmin}` nội tuyến sẽ mang lại hiệu quả gấp đôi. Ký hiệu vẫn nhất quán trong toàn bộ tài liệu và nếu tạp chí yêu cầu cách hiển thị khác, bạn hãy thay đổi một dòng thay vì tìm kiếm từng phương trình. Hãy thử khai báo và dòng hiển thị cùng nhau trong [live sân chơi](/live/) để xem vị trí chỉ số được gắn dấu sao hoạt động như thế nào.

Một lỗi phổ biến: khai báo một toán tử có tên xung đột với một lệnh hiện có, chẳng hạn như `\max` hoặc `\deg`. LaTeX sẽ dừng với lỗi "đã được xác định". Chọn một tên mới hoặc chỉ sử dụng `\renewcommand` nếu bạn thực sự có ý định thay thế tên gốc.