---

title: "Các liên kết bên trong PDF"
description: "hyperref, url, href, màu sắc và siêu dữ liệu PDF."
category: "paper-bones"
order: 6
level: "intermediate"
tags: ["structure", "hyperref"]
featured: false
updated: 2026-07-25
---

# Liên kết bên trong PDF

PDF không chỉ là tờ giấy trên màn hình. Nó có thể mang các liên kết trực tiếp: các URL có thể nhấp vào, các tham chiếu chéo chuyển sang hình bên phải, các trích dẫn chuyển đến thư mục và một dàn ý thanh bên được tạo từ các tiêu đề phần của bạn. Trong LaTeX, một gói cung cấp tất cả những thứ này: `hyperref`. Tải nó và mọi mục nhập `\ref`, `\cite` và mục lục trong tài liệu của bạn sẽ có thể nhấp vào một cách lặng lẽ mà không có thay đổi nào đối với phần còn lại của nguồn.

## Đang tải và định cấu hình hyperref

```latex
\usepackage[colorlinks=true,linkcolor=blue,citecolor=blue,urlcolor=blue]{hyperref}
\url{https://oleafly.com}
\href{https://oleafly.com}{Oleafly}
\hypersetup{pdftitle={My Paper}, pdfauthor={You}}
```

Các tùy chọn trong dấu ngoặc vuông kiểm soát cách liên kết trông như thế nào. Theo mặc định, hyperref vẽ một hình chữ nhật màu xung quanh mỗi liên kết, điều mà hầu hết mọi người thấy xấu. Thay vào đó, cài đặt `colorlinks=true` sẽ thay thế các hộp bằng văn bản màu và ba tùy chọn màu được chia theo loại liên kết: `linkcolor` bao gồm các bước nhảy nội bộ như tham chiếu phần và hình, `citecolor` bao gồm các trích dẫn và `urlcolor` bao gồm các địa chỉ web. Việc chia nhỏ chúng rất quan trọng vì một bài báo dày đặc các trích dẫn có thể biến thành một bức tường màu xanh lam.

## url so với href

Hai lệnh liên kết thực hiện các công việc khác nhau. `\url{...}` tự in địa chỉ bằng phông chữ máy đánh chữ và làm cho nó có thể nhấp vào được, đó là những gì bạn muốn trong thư mục hoặc chú thích cuối trang nơi người đọc sẽ thấy liên kết đi đến đâu. `\href{address}{text}` ẩn địa chỉ đằng sau bất kỳ văn bản nào bạn cung cấp, chẳng hạn như liên kết trên trang web. Ưu tiên `\url` trong các tài liệu có thể được in vì nhãn `\href` khiến trình đọc giấy không có cách nào để nhập địa chỉ vào.

Một phần thưởng thiết thực: `\url` biết cách ngắt các địa chỉ dài trên các dòng mà không chèn dấu gạch nối có thể làm hỏng địa chỉ, điều mà một URL phông chữ máy đánh chữ đơn giản không thể làm được.

## Siêu dữ liệu PDF

`\hypersetup` cho phép bạn thay đổi bất kỳ tùy chọn hyperref nào sau khi tải và đó cũng là nơi bạn đặt siêu dữ liệu tài liệu. Các trường `pdftitle` và `pdfauthor` điền vào tiêu đề và tác giả mà trình đọc PDF của bạn hiển thị trên thanh cửa sổ và thuộc tính tệp của nó. Nếu không có chúng, người đọc thường hiển thị tên tệp hoặc tiêu đề đầu tiên trông có vẻ chưa hoàn chỉnh trong tài liệu bạn đang gửi hoặc chia sẻ. Bạn có thể gọi `\hypersetup` trong phần mở đầu bất kỳ lúc nào sau `\usepackage{hyperref}`.

## Tài liệu thân thiện với in ấn

Đối với các tài liệu thân thiện với việc in ấn, hãy sử dụng `hidelinks`. Chuyển nó dưới dạng tùy chọn, `\usepackage[hidelinks]{hyperref}`, giữ mọi liên kết có thể nhấp vào trên màn hình nhưng loại bỏ cả hộp màu và văn bản có màu, do đó trang in trông hoàn toàn bình thường. Nhiều lớp tạp chí yêu cầu chính xác điều này.

Một lỗi phổ biến cần tránh: hyperref định nghĩa lại nhiều lệnh nội bộ, do đó nó phải được tải dưới dạng một trong những gói cuối cùng trong phần mở đầu của bạn. Nếu các liên kết của bạn trỏ đến sai trang hoặc bạn gặp lỗi lạ từ gói khác, thứ tự tải là điều đầu tiên cần kiểm tra. Xem [tài liệu tham khảo chéo](/learn/cross-references/) để biết cơ chế `\label` và `\ref` mà hyperref làm cho có thể nhấp được.