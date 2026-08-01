---

title: "Đạo hàm và tích phân"
description: "Đạo hàm thông thường và đạo hàm riêng, tích phân xác định, không gian mỏng trước vi phân."
category: "notation-depth"
order: 2
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Đạo hàm và tích phân

Ký hiệu phép tính là nơi LaTeX bắt đầu kiếm tiền. Các phân số đạo hàm xếp chồng, dấu tích phân có giới hạn và dấu chấm trên các biến đều là một hoặc hai lệnh mỗi lệnh. Bài học này đề cập đến một số lệnh tạo ra hầu hết mọi đạo hàm và tích phân mà bạn từng viết, cùng với thói quen giãn cách nhỏ để phân biệt các tờ giấy bóng loáng với các bản nháp thô.

## Công cụ phái sinh

```latex
\frac{dy}{dx}
\frac{\partial f}{\partial x}
\nabla f \quad \nabla^2 f
f'(x) \quad \dot{x}
```

Đạo hàm thông thường chỉ là một phân số: `\frac{dy}{dx}` xếp `dy` trên `dx`. Đối với đạo hàm riêng, đổi `d` thành `\partial`, in ra ký hiệu từng phần dạng cong; `\frac{\partial f}{\partial x}` là dạng chuẩn. Các phần bậc cao hơn tuân theo cùng một mẫu, ví dụ `\frac{\partial^2 f}{\partial x \partial y}`.

`\nabla` cung cấp biểu tượng gradient và vì đây là biểu tượng thông thường nên bạn có thể nâng nó lên như bất kỳ biểu tượng nào khác: `\nabla^2 f` cho Laplacian. Đối với ký hiệu thu gọn, `f'(x)` sử dụng trực tiếp phím dấu nháy đơn và LaTeX chuyển đổi một hoặc nhiều dấu `'` thành các số nguyên tố được nâng lên đúng cách. Ký hiệu dấu chấm của Newton cho đạo hàm thời gian xuất phát từ các lệnh có dấu `\dot{x}` và `\ddot{x}`, đặt một hoặc hai dấu chấm trên đối số.

Một lựa chọn kiểu: một số tạp chí muốn vi phân `d` thẳng đứng, được viết `\mathrm{d}`. Nếu đúng như vậy, hãy xác định `\newcommand{\dd}{\mathrm{d}}` một lần trong phần mở đầu và viết `\frac{\dd y}{\dd x}` để bạn có thể lật lại lựa chọn sau này.

## Tích phân

```latex
\int_a^b f(x)\,dx
\iint_D f\,dA
```

`\int` là dấu tích phân và cú pháp chỉ số dưới và chỉ số trên quen thuộc gắn các giới hạn: `_a` cho giới hạn dưới, `^b` cho giới hạn trên. Trong phép toán nội tuyến, các giới hạn nằm bên cạnh dấu để giữ cho đường thẳng nhỏ gọn; trong toán hiển thị, chúng vẫn nằm bên cạnh dấu tích phân (không giống như tổng), đây là quy ước tiêu chuẩn. Tích phân kép và tích phân ba có các lệnh riêng, `\iint` và `\iiint`, sắp xếp các dấu lặp lại một cách chính xác, cùng với `\oint` cho tích phân đường viền.

`\,` trước `dx` là một khoảng trắng mỏng. Không có nó, `f(x)dx` chạy tích phân thẳng vào vi phân và mắt phải gỡ rối chúng. Không gian mỏng là một quy ước được tuân theo rộng rãi, vì vậy hãy biến nó thành thói quen: tích phân, rồi `\,`, rồi vi phân.

## Hãy thử và một lỗi thường gặp

Các đoạn mã này hiển thị khi bạn nhập vào [sân chơi trực tiếp](/live/), đây là một cách nhanh chóng để kiểm tra ngăn xếp phái sinh trước khi nó đi vào tài liệu; hãy xem [thông tin cơ bản về chế độ toán học](/learn/math-mode/) nếu dấu phân cách `$` và `\[` vẫn còn mới.

Lỗi phổ biến nhất ở đây là nhập đạo hàm kiểu `d/dx` bằng dấu gạch chéo trong phép toán hiển thị trong đó cần có `\frac` xếp chồng lên nhau hoặc quên dấu ngoặc nhọn ở giới hạn nhiều ký tự: `\int_a^b+1` chỉ đặt `b` trong chỉ số trên. Viết `\int_a^{b+1}` để toàn bộ biểu thức được nâng lên.