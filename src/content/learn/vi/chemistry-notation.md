---

title: "Công thức và cấu trúc hóa học"
description: "phản ứng mhchem và một bản phác thảo chemfig."
category: "field-kits"
order: 1
level: "intermediate"
tags: ["chemistry"]
featured: false
updated: 2026-07-25
---

# Công thức và cấu trúc hóa học

Ký hiệu hóa học chống lại các giá trị mặc định của LaTeX. Chế độ toán học in nghiêng các ký hiệu phần tử như thể chúng là các biến và chế độ văn bản không có chỉ số nào cả. Hai gói phân chia công việc. `mhchem` sắp xếp các công thức và phản ứng từ ký hiệu đơn giản của nhà hóa học và `chemfig` vẽ sơ đồ cấu trúc.

## Công thức và phản ứng với mhchem

```latex
\usepackage[version=4]{mhchem}
\ce{H2O}
\ce{CO2 + C -> 2CO}
```

Tùy chọn `version=4` chọn cú pháp hiện tại. Mọi thứ hóa chất đều nằm trong `\ce{...}`, nó đọc nội dung của nó theo cách một nhà hóa học viết chúng. Trong `\ce{H2O}` 2 tự động trở thành chỉ số dưới và các ký hiệu phần tử vẫn đứng thẳng, như quy ước yêu cầu. Trong phản ứng, `+` có khoảng cách thích hợp, `->` trở thành mũi tên phản ứng và 2 trước CO được công nhận là hệ số cân bằng hóa học, do đó nó vẫn giữ nguyên kích thước đầy đủ trên đường cơ sở.

Ký hiệu tương tự tăng lên. Các điện tích có dạng chỉ số trên, vì vậy `\ce{SO4^2-}` tạo ra sunfat với điện tích 2- của nó. Các trạng thái của vật chất được đặt trong ngoặc đơn, như trong `\ce{H2O(l)}`; mũi tên cân bằng được viết `<=>`; và `\ce{^{14}C}` đặt số đồng vị trước ký hiệu. `\ce` hoạt động ở cả chế độ văn bản và toán học, do đó, một công thức có thể nằm trong một câu mà không cần thêm dấu phân cách.

## Cấu trúc với chemfig

```latex
\usepackage{chemfig}
\chemfig{H-C(-[2]H)(-[6]H)-H}
```

`\chemfig` vẽ các cấu trúc từ một mã tuyến tính nhỏ gọn. Các nguyên tử được viết dưới dạng ký hiệu của chúng và `-` tạo liên kết với nguyên tử tiếp theo. Một số trong ngoặc đặt hướng của liên kết theo các bước 45 độ ngược chiều kim đồng hồ từ phía đông: `[2]` hướng thẳng lên và `[6]` hướng thẳng xuống. Dấu ngoặc đơn mở ra các nhánh từ nguyên tử hiện tại, do đó `C(-[2]H)(-[6]H)` phát triển một hydro hướng lên trên và một hydro hướng xuống trong khi chuỗi chính tiếp tục ở bên phải. Ví dụ là khí metan được vẽ phẳng: một cacbon trung tâm liên kết với bốn hydro. Liên kết đôi và liên kết ba được viết `=` và `~`, đồng thời có cú pháp vòng dành riêng cho cấu trúc vòng và cấu trúc thơm.

## Ghi chú thực tế

Giữ hai công cụ trong làn đường của họ. Sử dụng `mhchem` cho bất kỳ nội dung nào đọc từ trái sang phải dưới dạng công thức hoặc phương trình và `chemfig` khi hình dạng của phân tử là điểm. Cả hai đều biên dịch bằng công cụ LaTeX tiêu chuẩn và không có chương trình vẽ bên ngoài.

Lỗi thông thường của người mới bắt đầu là viết công thức ở chế độ toán đơn giản. `$H_2O$` biên dịch, nhưng nó đặt H và O ở dạng in nghiêng giống như các biến, điều này là sai theo quy ước. `\ce{H2O}` tạo ra dạng thẳng đứng với ít thao tác gõ hơn. Cả hai gói đều có sẵn để dùng thử trong [sân chơi trực tiếp](/live/).