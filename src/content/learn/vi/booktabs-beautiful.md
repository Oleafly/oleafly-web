---

title: "Bảng ba quy tắc"
description: "quy tắc trên, quy tắc giữa, quy tắc dưới và bỏ qua các dòng dọc."
category: "float-surgery"
order: 3
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
---

# Bảng ba quy tắc

Mở bất kỳ tạp chí được sắp chữ tốt nào và nhìn vào các bảng. Hầu như tất cả chúng đều tuân theo cùng một thiết kế: quy tắc ở trên cùng, quy tắc dưới tiêu đề, quy tắc ở dưới cùng và không có gì khác. Không có đường thẳng đứng, không có lưới. Đây là kiểu `booktabs`, được đặt tên theo gói triển khai nó và việc chuyển sang kiểu này thường là nâng cấp trực quan lớn nhất mà bạn có thể thực hiện đối với các bảng LaTeX. Gói này cung cấp ba lệnh ánh xạ tới ba quy tắc:

```latex
\toprule
...
\midrule
...
\bottomrule
```

Trong một bảng hoàn chỉnh, chúng trông như thế này:

```latex
\usepackage{booktabs}
\begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
\end{tabular}
```

## Quy tắc nào thay thế

Nếu không có `booktabs`, mọi người sẽ vẽ các đường có `\hline` và các thanh dọc trong đặc tả cột, như trong `{|l|c|c|}`. Kết quả là một cái lồng: mọi ô đều được đóng hộp, với văn bản chật chội trái với quy tắc vì `\hline` không thêm chỗ thở. Các lệnh `booktabs` thay thế `\hline` bằng các quy tắc có phần đệm dọc tích hợp sẵn, đồng thời `\toprule` và `\bottomrule` nặng hơn một chút so với `\midrule`, do đó, bảng có khung hiển thị và vách ngăn bên trong nhẹ hơn. Sự khác biệt về khoảng cách và trọng lượng đó là toàn bộ mánh khóe. Dữ liệu có chỗ, tiêu đề được phân tách rõ ràng và không có gì cạnh tranh được với các con số.

Quy tắc dọc đơn giản được bỏ qua. Căn chỉnh cột đã hiển thị cho người đọc nơi một cột kết thúc và cột tiếp theo bắt đầu, đồng thời các đường dọc hầu như chỉ thêm mực mà không làm tăng thêm sự rõ ràng. Tài liệu `booktabs` thậm chí còn từ chối hỗ trợ chúng.

## Quy tắc một phần cho các tiêu đề được nhóm

Khi tiêu đề trải dài trên nhiều cột, ví dụ: "Điểm" nằm trên độ chính xác và F1, hãy sử dụng `\cmidrule` để chỉ gạch chân những cột đó:

```latex
\cmidrule(lr){2-3}
```

Phạm vi `{2-3}` cho biết quy tắc bao gồm những cột nào và tùy chọn `(lr)` cắt bớt một chút ở đầu bên trái và bên phải để các quy tắc lân cận không hợp nhất thành một dòng dài. Điều này kết hợp với `\multicolumn`, được hiển thị trong [các ô trải dài theo hàng hoặc cột](/learn/merged-cells/).

## Số và căn chỉnh

Bảng đo lường đọc tốt nhất khi các dấu thập phân thẳng hàng. Gói `siunitx` cung cấp loại cột `S` tự động căn chỉnh các số trên dấu thập phân, do đó `0,9` và `0,88` nằm chính xác bên dưới nhau ngay cả khi số lượng chữ số khác nhau. Nó đáng được áp dụng khi bảng của bạn chứa dữ liệu thực.

Lỗi phổ biến là các hệ thống trộn: một `\hline` ở đây, một `\midrule` ở đó và một thông số cột có các thanh còn sót lại từ một mẫu. Chọn kiểu ba quy tắc và áp dụng nó cho mọi bảng trong tài liệu. Tính nhất quán là yếu tố tạo nên phong cách có chủ ý. Hướng dẫn đầy đủ về `table` float xung quanh có trong [bảng trông giống như bàn giấy](/learn/create-table/).