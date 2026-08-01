---

title: "Màu sắc tồn tại khi in"
description: "xcolor, thông số kỹ thuật HTML và sử dụng màu cho tín hiệu khi tạp chí chuyển sang thang độ xám."
category: "type-and-shape"
order: 6
level: "beginner"
tags: ["formatting", "color"]
featured: false
updated: 2026-07-25
---

# Màu tồn tại khi in

Màu sắc trong LaTeX xuất phát từ một gói, `xcolor`. Nó cung cấp cho bạn các màu được đặt tên, thông số màu chính xác, hộp nền và cách xác định bảng màu của riêng bạn. Văn bản nội dung trong tạp chí hầu như luôn có màu đen, vì vậy bạn ít cần đến nó hơn bạn nghĩ. Nó vẫn mang lại hiệu quả trong các trang trình bày, bản nháp có chú thích hiển thị và bất kỳ thứ gì phải phù hợp với bảng màu của tổ chức.

## Các lệnh

```latex
\usepackage{xcolor}
\textcolor{red}{warning}
\textcolor[HTML]{2563EB}{brand blue}
\colorbox{gray!15}{highlighted}

\definecolor{brand}{HTML}{2563EB}
```

`\textcolor{red}{warning}` chỉ tô màu văn bản trong đối số thứ hai của nó, sử dụng một trong các tên được xác định trước của xcolor; `đỏ`, `xanh lam`, `xám`, `teal` và vài chục màu khác đều hoạt động hiệu quả. Khi tên không đủ chính xác, mô hình `[HTML]` tùy chọn sẽ chấp nhận mã hex gồm sáu chữ số, giống như mẫu mà nhà thiết kế web hoặc hướng dẫn kiểu đưa cho bạn, vì vậy `2563EB` tái tạo chính xác màu xanh lam cụ thể. Lưu ý rằng xcolor muốn các chữ số hex viết hoa và không có `#`.

`\colorbox{gray!15}{highlighted}` vẽ nền phía sau văn bản thay vì tô màu cho văn bản. Đối số `gray!15` hiển thị cú pháp trộn của xcolor: 15 phần màu xám được pha trộn với 85 phần màu trắng, tạo ra tông màu nhạt được coi là điểm nhấn. Cú pháp tương tự hoạt động ở bất kỳ nơi nào có màu được mong đợi và bạn có thể xâu chuỗi nó, như trong `blue!50!black` để có màu xanh đậm.

## Xác định một lần, sử dụng mọi nơi

`\definecolor{brand}{HTML}{2563EB}` đăng ký tên của riêng bạn. Sau dòng này, `\textcolor{brand}{...}` hoạt động giống như bất kỳ màu tích hợp nào và giá trị hex nằm ở chính xác một vị trí. Khi bảng màu thay đổi, bạn chỉnh sửa một dòng mở đầu thay vì tìm kiếm mã hex thô trong tài liệu. Ý tưởng tương tự như [macro tùy chỉnh](/learn/custom-commands/): xác định một lần, sử dụng lại ở mọi nơi.

## Thang độ xám vẫn có thật

Sử dụng màu sắc để làm tín hiệu chứ không phải để trang trí và cho rằng một số độc giả sẽ không nhìn thấy nó. Rất nhiều tạp chí vẫn in ở thang độ xám, trong đó màu đỏ và xanh lam chuyển thành màu xám tương tự và một phần đáng kể độc giả mắc một số dạng thiếu thị lực màu. Nguyên tắc nhỏ: màu sắc có thể củng cố sự khác biệt nhưng không bao giờ là thứ duy nhất mang lại điều đó. Ghép nối văn bản màu với chữ in đậm hoặc ký hiệu và ghép các đường vẽ màu với các điểm đánh dấu hoặc mẫu gạch ngang riêng biệt.

Một điều nữa về phạm vi. Việc tô màu các tiêu đề hoặc nội dung văn bản bằng tay sẽ nhanh chóng làm cho tài liệu trông tự chế và trong mẫu của địa điểm, tài liệu đó sẽ bị hoàn nguyên. Giữ màu thủ công ở những nơi có ý nghĩa gì đó, chẳng hạn như đánh dấu các thay đổi do người đánh giá yêu cầu trong bản sửa đổi và loại bỏ nó trước phiên bản cuối cùng.