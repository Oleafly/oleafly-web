---

title: "Chạy đầu và chân"
description: "mẫu Fancyhdr cho tiêu đề và số trang."
category: "the-page"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Chạy đầu và chân

Đầu chạy là dải văn bản ở đầu mỗi trang và chân chạy là phần tương ứng của nó ở cuối. Trong một cuốn sách hoặc luận án, chúng thường mang tên chương và số trang. Trong một bài báo được gửi, họ có thể đưa ra một phiên bản ngắn gọn của tiêu đề, các tác giả hoặc không có gì cả. Các kiểu trang tích hợp sẵn của LaTeX (`plain`, `empty`, `headings`) bao gồm những điều cơ bản, nhưng khi bạn muốn một sự kết hợp cụ thể, chẳng hạn như tiêu đề của bạn ở bên trái và số trang ở bên phải, bạn hãy tìm đến gói `fancyhdr`.

## Công thức chuẩn

```latex
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[L]{Short title}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
```

Mỗi dòng ở đây thực hiện một công việc. `\usepackage{fancyhdr}` tải gói trong phần mở đầu của bạn. `\pagestyle{fancy}` chuyển toàn bộ tài liệu sang kiểu có thể định cấu hình của Fancyhdr. `\fancyhf{}` xóa mọi trường đầu trang và chân trang, điều này quan trọng vì Fancyhdr có các giá trị mặc định (số trang và dấu phần) mà bạn hầu như không bao giờ muốn trộn lẫn với giá trị mặc định của riêng mình. Bắt đầu từ một bảng xếp hạng sạch sẽ sẽ tránh xa những điều bất ngờ.

Hai dòng tiếp theo sẽ điền lại các trường. `\fancyhead[L]{Short title}` đặt văn bản bằng chữ vào ô bên trái của tiêu đề và `\fancyhead[R]{\thepage}` đặt số trang hiện tại vào ô bên phải. `\thepage` là một lệnh mở rộng đến số trang, do đó nó tự động cập nhật trên mỗi trang. Có một `\fancyfoot[L/C/R]{...}` phù hợp nếu bạn muốn đặt mọi thứ ở cuối.

Cuối cùng, `\headrulewidth` kiểm soát đường ngang mảnh bên dưới tiêu đề. Đặt nó thành `0.4pt` sẽ vẽ một đường chân tóc; đặt nó thành `0pt` để xóa hoàn toàn quy tắc. `\footrulewidth` cũng tồn tại và mặc định là 0.

## Tài liệu hai mặt

Nếu lớp tài liệu của bạn sử dụng `twoside` (mặc định cho `book`), các trang sẽ xen kẽ giữa chẵn và lẻ và các tiêu đề thường phản ánh lẫn nhau. Fancyhdr xử lý việc này bằng các bộ chọn chẵn/lẻ: `\fancyhead[LE,RO]{\thepage}` đặt số trang ở bên trái của các trang chẵn và bên phải của các trang lẻ, đây là nơi ngón tay cái của người đọc tìm thấy nó. Bạn có thể kết hợp điều này với `\leftmark` và `\rightmark`, chứa tiêu đề chương và phần hiện tại, để tái tạo bố cục sách cổ điển.

## Trang chương và giao diện trống rỗng

Các trang mở đầu chương bỏ qua phong cách ưa thích của bạn vì `\chapter` gọi `\thispagestyle{plain}` ở hậu trường. Đó là sự cố ý và hầu hết các thiết kế đều giữ nguyên điều đó. Nếu bạn muốn những trang đó ở trạng thái trống, hãy thêm `\fancypagestyle{plain}{\fancyhf{}}` để xác định lại ý nghĩa của `plain`.

Một cảnh báo phổ biến có thể xảy ra: Fancyhdr có thể phàn nàn rằng `\headheight` quá nhỏ. Cách khắc phục chính xác như những gì thông báo gợi ý, chẳng hạn như `\setlength{\headheight}{14pt}` trong phần mở đầu hoặc chuyển `headheight=14pt` sang [gói hình học](/learn/margins-geometry/) nếu bạn đã sử dụng gói đó. Đó là sự đặt trước bố cục, không phải là lỗi nhưng việc tắt tiếng sẽ giữ cho nhật ký của bạn luôn sạch sẽ và lưới đường cơ sở của bạn trung thực.