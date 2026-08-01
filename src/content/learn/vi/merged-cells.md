---

title: "Các ô trải dài theo hàng hoặc cột"
description: "nhiều cột, nhiều hàng, cmidrule dưới các tiêu đề được nhóm."
category: "float-surgery"
order: 2
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Ô trải dài theo hàng hoặc cột

Các bảng thực thường cần các ô được hợp nhất. Tiêu đề như "Điểm" nằm phía trên hai cột chỉ số kéo dài các cột và tên mô hình áp dụng cho hai hàng kết quả kéo dài các hàng. LaTeX xử lý hai hướng bằng các công cụ khác nhau: `\multicolumn` được tích hợp sẵn, trong khi `\multirow` đến từ gói cùng tên. Đây là một bảng nhỏ gọn sử dụng cả hai, cộng với một phần quy tắc từ `booktabs`:

```latex
\usepackage{multirow,booktabs}
\begin{tabular}{lcc}
 \toprule
 & \multicolumn{2}{c}{Scores} \\
 \cmidrule(lr){2-3}
 Model & Acc & F1 \\
 \midrule
 \multirow{2}{*}{Ours} & 0.9 & 0.88 \\
 & 0.91 & 0.89 \\
 \bottomrule
\end{tabular}
```

## Kéo dài cột

`\multicolumn{2}{c}{Scores}` thay thế hai ô thông thường bằng một ô. Đối số đầu tiên là số lượng cột cần hấp thụ, đối số thứ hai là đặc tả cột cho ô này, ở đây `c` để căn giữa và đối số thứ ba là nội dung. Lưu ý `&` duy nhất ở trước nó: cột đầu tiên của hàng đó được cố tình để trống, vì vậy "Điểm" bắt đầu ở cột 2 và bao gồm các cột 2 và 3. Bởi vì đối số thứ hai ghi đè cục bộ loại cột, `\multicolumn{1}{c}{...}` cũng là thủ thuật tiêu chuẩn để căn giữa một ô tiêu đề phía trên một cột được căn trái.

## Quy tắc một phần

`\cmidrule(lr){2-3}` vẽ một quy tắc ngang chỉ trong các cột từ 2 đến 3, giúp liên kết trực quan tiêu đề được nhóm với các cột của nó. Tùy chọn `(lr)` cắt bớt quy tắc một chút ở đầu bên trái và bên phải của nó, do đó, `\ cmidrule` liền kề không chạm vào và đọc dưới dạng điểm đánh dấu nhóm riêng biệt. Đây là lệnh `booktabs` và việc cắt xén là một trong những chi tiết làm cho các bảng này trông như được sắp chữ thay vì được vẽ. Kiểu ba quy tắc đầy đủ được đề cập trong [bảng ba quy tắc](/learn/booktabs-beautiful/).

## Kéo dài hàng

`\multirow{2}{*}{Ours}` in "Của chúng tôi" được căn giữa theo chiều dọc trên 2 hàng. Đối số đầu tiên là số lượng hàng, đối số thứ hai là chiều rộng ô, trong đó `*` có nghĩa là chiều rộng tự nhiên của nội dung và đối số thứ ba là chính nội dung đó. Lệnh chỉ dành không gian trực quan, vì vậy hàng thứ hai vẫn phải cung cấp ô đầu tiên trống, đó là lý do tại sao dòng sau bắt đầu bằng một `&` trống. Quên rằng ô trống sẽ dịch chuyển mọi giá trị trong hàng một cột sang trái và thông báo lỗi căn chỉnh sai chỉ vào dòng sai, vì vậy trước tiên hãy kiểm tra hàng sau `\multirow`.

## Giới hạn thực tế

Các ô đã hợp nhất được giữ tốt nhất ở tiêu đề và nhóm hàng ngắn. Một bảng trong đó các ô dữ liệu trải dài theo cả hai hướng sẽ khó đọc và khó bảo trì hơn vì mỗi hàng được thêm vào buộc bạn phải kể lại các khoảng. Nếu bạn nhận thấy mình đang lồng `\multirow` bên trong `\multicolumn`, thay vào đó hãy xem xét việc cơ cấu lại bảng.