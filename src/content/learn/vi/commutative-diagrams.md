---

title: "Biểu đồ giao hoán"
description: "mũi tên và nhãn tikz-cd không có súp tọa độ."
category: "draw-in-tex"
order: 4
level: "advanced"
tags: ["tikz", "math"]
featured: false
updated: 2026-07-25
---

# biểu đồ giao hoán

Biểu đồ giao hoán là một mạng lưới các đối tượng được nối với nhau bằng các mũi tên có nhãn, hình ảnh tiêu chuẩn trong lý thuyết phạm trù, đại số và cấu trúc liên kết. TikZ thô có thể vẽ một nút, nhưng việc đặt mọi nút theo tọa độ sẽ chậm và dễ gãy. Gói `tikz-cd` bao bọc TikZ theo cú pháp giống ma trận: bạn bố trí các đối tượng giống như một bảng và mô tả từng mũi tên theo hướng của nó.

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
 A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
 C \arrow[r,"k"'] & D
\end{tikzcd}
```

##Đọc cú pháp

Lưới hoạt động giống như một ma trận: `&` phân tách các cột và `\\` phân tách các hàng, vì vậy sơ đồ này có A và B ở hàng trên cùng và C và D ở dưới cùng. Mỗi `\arrow[...]` thuộc về ô chứa nó và trỏ ra khỏi ô đó. Tùy chọn đầu tiên là hướng, được đánh vần bằng các chữ cái `r`, `l`, `u` và `d`: `\arrow[r]` sang bên phải một ô, `\arrow[d]` xuống một ô. Các chữ cái kết hợp và lặp lại để tạo đường chéo và khoảng cách dài hơn, vì vậy `rd` là một bậc xuống bên phải và `rr` kéo dài hai cột.

Một nhãn trong dấu ngoặc kép cưỡi mũi tên. Theo mặc định, nó nằm ở một bên; một số nguyên tố sau dấu ngoặc kép kết thúc, như trong `"g"'`, lật nó sang phía bên kia. Trong ví dụ này, các số nguyên tố giữ tất cả bốn nhãn ở bên ngoài hình vuông, đây là cách sắp xếp gọn gàng thông thường.

## Thêm tùy chọn mũi tên

Các tùy chọn khác xếp chồng lên nhau sau hướng và nhãn để thay đổi kiểu mũi tên. `hook` uốn đuôi thành một mũi tên bao gồm, `hai đầu` nhân đôi đầu để phóng chiếu, `nét đứt` đánh dấu bản đồ mà bạn đang khẳng định thay vì giả định và `Rightarrow` tạo ra mũi tên hai trục dùng để biến đổi tự nhiên. Một mũi tên thuộc tính phổ quát điển hình có nội dung `\arrow[rd, nét đứt, "\exists u"']`. Khi sơ đồ có cảm giác chật chội, các tùy chọn khoảng cách trên môi trường sẽ giúp ích, ví dụ: `\begin{tikzcd[column sep=large]`.

## Ghi chú thực tế

`tikz-cd` tự tải TikZ nên không cần dòng `\usepackage{tikz}` riêng biệt và biên dịch sơ đồ bằng một công cụ tiêu chuẩn và không cần công cụ vẽ bên ngoài. Lỗi cấu trúc phổ biến nhất là lưới không đồng đều: các hàng có số lượng dấu phân cách `&` khác nhau sẽ dịch chuyển các đối tượng vào các cột sai và sau đó các mũi tên sẽ hạ cánh ở những vị trí kỳ lạ. Bắt đầu từ một hình vuông làm việc như hình trên, tăng dần từng hàng hoặc cột và biên dịch lại khi bạn thực hiện. Việc gỡ lỗi bằng mắt dễ dàng hơn nhiều so với việc gỡ lỗi từ nguồn và [sân chơi trực tiếp](/live/) sẽ cung cấp cho bạn phản hồi đó khi bạn nhập.