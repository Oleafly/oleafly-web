---

title: "Các phương trình không phù hợp"
description: "đa dòng và chia nhỏ khi thước đo quá hẹp."
category: "notation-depth"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Phương trình không phù hợp

Sớm hay muộn, một đạo hàm sẽ tạo ra một phương trình rộng hơn khối văn bản và LaTeX sẽ để nó chạy vào lề thay vì đoán xem nơi nào sẽ phá vỡ nó. Hai môi trường `amsmath` cho phép bạn tự đặt dấu ngắt: `multline` cho một biểu thức dài duy nhất và `split` cho dấu ngắt cần được căn chỉnh.

## nhiều dòng

```latex
\begin{multline}
 a + b + c + d + e + f \\
 + g + h + i + j
\end{multline}
```

`multiline` phù hợp với một công thức dài không có điểm căn chỉnh tự nhiên. Bạn chọn dấu ngắt bằng `\\` và môi trường xử lý bố cục: dòng đầu tiên được đặt căn lề trái, dòng cuối cùng căn lề phải và mọi dòng ở giữa đều được căn giữa. Toàn bộ biểu thức nhận được một số phương trình, được đặt ở dòng cuối cùng. Quy ước là bị ngắt trước toán tử nhị phân, vì vậy `+` mở dòng tiếp tục và người đọc nhìn thoáng qua sẽ thấy biểu thức tiếp tục.

## tách ra

```latex
\begin{equation}
\begin{split}
 a &= b + c \\
 &\quad + d + e
\end{split}
\end{equation}
```

`split` cũng tạo ra một số duy nhất, nhưng căn chỉnh các dòng của nó theo cách `align` thực hiện, với `&` đánh dấu điểm căn chỉnh. Nó không phải là một môi trường độc lập; nó nằm bên trong `phương trình` hoặc môi trường hiển thị khác cung cấp số. Ở đây, `&` nằm trước dấu bằng trên dòng đầu tiên và phần tiếp theo bắt đầu bằng `&\quad`, một điểm căn chỉnh trống theo sau là một phần tư khoảng trắng, do đó, dòng thứ hai thụt lề ngay sau dấu bằng. Vết thụt lề đó cho người đọc biết đây vẫn là vế phải, không phải là một phương trình mới.

## Lựa chọn giữa chúng

Sử dụng `multiline` khi phương trình là một tổng dài không có cấu trúc nào cần căn chỉnh. Sử dụng `split` khi có dấu bằng mà phần tiếp theo sẽ bị treo. Nếu bạn có nhiều phương trình thực sự riêng biệt thì cả hai phương trình đều không đúng; đó là công việc dành cho `căn chỉnh`, được đề cập trong [các phương trình nhiều dòng thẳng hàng](/learn/align-equations/).

Trước khi đạt được một trong hai điều đó, hãy cân nhắc việc viết lại phép toán. Việc đặt tên một biểu thức con trong câu trước, phân tích nhân tử hoặc chia thành hai phương trình thường kiểm soát được độ rộng và đọc tốt hơn. Thích điều đó hơn là thu nhỏ loại. Một màn hình bị ép cho vừa vặn hầu như luôn cho kết quả tệ hơn một màn hình bị ngắt hoàn toàn.

Một lỗi cần biết: `split` được sử dụng riêng mà không có `phương trình` kèm theo, dừng lại với "Lỗi amsmath gói". Gói nó trước, sau đó biên dịch. Cả hai môi trường đều có thể thử nghiệm nhanh chóng trong [sân chơi trực tiếp](/live/).