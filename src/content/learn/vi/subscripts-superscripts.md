---

title: "Các chỉ số không bùng nổ"
description: "Niềng răng cho các chữ viết nhiều ký tự, số nguyên tố, dấu chấm."
category: "equation-craft"
order: 4
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Chỉ số không bùng nổ

Chỉ số dưới và chỉ số trên là cú pháp toán học đầu tiên mà mọi người học trong LaTeX và cũng là nguồn gốc của kết quả khó hiểu đầu tiên mà mọi người tạo ra. Dấu gạch dưới `_` làm giảm nội dung theo sau, dấu mũ `^` tăng nội dung đó và cả hai đều áp dụng cho chính xác một ký tự trừ khi bạn nói khác. Quy tắc một ký tự đó nằm sau hầu hết mọi chỉ mục đọc sai mà bạn từng thấy.

##Các hình thức cơ bản

```latex
x_i x^2
x_{ij} x^{2n}
x_i^2 x_{i_j}^{2n}
```

`x_i` đặt một `i` ở vị trí chỉ số dưới và `x^2` tăng lên một `2`. Bởi vì `_` và `^` chỉ lấy mã thông báo tiếp theo, nên bất kỳ ký tự nào dài hơn một ký tự phải được gói trong dấu ngoặc nhọn: `x_{ij}` ghi dưới cả hai chữ cái và `x^{2n}` nâng cao toàn bộ `2n`. Bạn có thể đính kèm cả chỉ số dưới và chỉ số trên vào cùng một ký hiệu theo một trong hai thứ tự và LaTeX sắp xếp chúng một cách chính xác: `x_i^2`. Kịch bản cũng lồng nhau. Trong `x_{i_j}` `j` là chỉ số dưới của `i`, bản thân nó là chỉ số dưới của `x` và mỗi cấp độ được đặt nhỏ dần.

Tập lệnh nhiều ký tự **phải** sử dụng dấu ngoặc nhọn: `x_ij` là `x_i` rồi `j`. LaTeX không báo cáo đây là lỗi, vì `x_i` theo sau là biến `j` là phép toán hoàn toàn hợp pháp. Công thức tổng hợp, nhìn thoáng qua gần như đúng và có ý nghĩa khác. Xây dựng thói quen niềng răng sớm. Khi nghi ngờ, hãy chuẩn bị kịch bản.

Cái bẫy tương tự xuất hiện trong giới hạn và giới hạn. `\sum_i=1^n` không hoạt động như vẻ ngoài của nó. Dạng đúng là `\sum_{i=1}^{n}`, trong đó toàn bộ `i=1` là một chỉ số dưới có dấu ngoặc nhọn. Nếu bạn sử dụng hoàn toàn `_` hoặc `^` bên ngoài chế độ toán học, bạn sẽ gặp phải lỗi cổ điển được đề cập trong [Thiếu đô la được chèn](/learn/missing-dollar/).

## Số nguyên tố và dấu chấm

```latex
f' f'' \dot{x} \ddot{x}
```

Đối với các công cụ phái sinh, bạn hiếm khi muốn có chỉ số trên theo nghĩa đen. Phím dấu nháy đơn tạo ra một số nguyên tố: `f'` hiển thị là f với một số nguyên tố, `f''` có hai số nguyên tố, và LaTeX tự xử lý việc tăng và giãn cách, do đó không cần `f^{\prime}`. Đối với đạo hàm thời gian theo kiểu vật lý, `\dot{x}` đặt một dấu chấm lên trên x và `\ddot{x}` đặt hai dấu chấm. Đây là những dấu trọng âm nên chúng đưa ra lập luận trong dấu ngoặc nhọn.

Một điều tinh tế nữa: nếu bạn cần một chỉ số trên sau một số nguyên tố, chỉ cần xâu chuỗi chúng lại, như trong `f'^2`. LaTeX kết hợp chúng thành một cụm chỉ số trên duy nhất.

## Kiểm tra đầu ra của bạn

Cách nhanh nhất để nội hóa quy tắc dấu ngoặc nhọn là nhập `x_ij` và `x_{ij}` cạnh nhau trong [sân chơi trực tiếp](/live/) và xem sự khác biệt được hiển thị. Bất cứ khi nào một chỉ mục trông có vẻ sai trong một tài liệu được biên dịch, điều đầu tiên cần kiểm tra là thiếu một cặp dấu ngoặc nhọn.