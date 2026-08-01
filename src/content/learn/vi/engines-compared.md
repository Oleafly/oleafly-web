---

title: "Động cơ nào cho dự án này"
description: "pdfLaTeX, XeLaTeX, LuaLaTeX, Tectonic: Unicode, phông chữ, tạp chí phù hợp."
category: "runtime"
order: 1
level: "intermediate"
tags: ["engines"]
featured: true
updated: 2026-07-25
---

# Engine nào cho dự án này

Công cụ là chương trình thực sự biến nguồn `.tex` của bạn thành PDF. Bản thân LaTeX là một lớp macro chạy trên một lớp macro và có một số lớp để bạn lựa chọn. Chúng chấp nhận hầu hết các tài liệu giống nhau, nhưng chúng khác nhau về cách xử lý văn bản và phông chữ Unicode, đồng thời một mẫu được viết cho một công cụ có thể bị lỗi hoàn toàn trong một công cụ khác. Chọn một lần cho mỗi dự án và gắn bó với nó.

| Động cơ | Unicode | Phông chữ hệ thống | Ghi chú |
| --- | --- | --- | --- |
| pdfLaTeX | Một phần | Không | Khả năng tương thích tạp chí tối đa |
| XeLaTeX | Có | Có (`fontspec`) | Tuyệt vời cho tài liệu đa ngôn ngữ |
| LuaLaTeX | Có | Có | Hiện đại, có kịch bản |
| Kiến tạo | Xe-like | Có | Tự động tìm nạp gói; Oleafly mặc định |

## Công dụng của mỗi động cơ

pdfLaTeX là hậu duệ trực tiếp của TeX ban đầu và vẫn là giả định mặc định của hầu hết các tạp chí, hội nghị và hệ thống gửi bài. Nó có trước Unicode, vì vậy đầu vào có dấu cần các quy ước `inputenc` và phông chữ được giới hạn ở các phông chữ TeX được đóng gói đặc biệt. Đổi lại, nó nhanh và được hỗ trợ toàn cầu, đồng thời có hàng thập kỷ mẫu nhắm đến nó.

XeLaTeX đọc UTF-8 nguyên bản và thông qua gói `fontspec`, sử dụng bất kỳ phông chữ nào được cài đặt trên hệ thống của bạn theo tên, chẳng hạn như `\setmainfont{Georgia}`. Điều đó làm cho nó trở thành sự lựa chọn thiết thực cho các tài liệu trộn chữ viết, cho các ngôn ngữ ngoài Tây Âu và cho bất kỳ ai có yêu cầu về phông chữ cụ thể. [Khi nào nên sử dụng XeLaTeX](/learn/when-use-xelatex/) đi sâu hơn.

LuaLaTeX cung cấp hỗ trợ phông chữ và Unicode tương tự, đồng thời nhúng ngôn ngữ tập lệnh Lua, vì vậy các gói có thể tính toán mọi thứ tại thời điểm biên dịch mà trước đây không thể thực hiện được. Nó là sự kế thừa lâu dài trong số các công cụ truyền thống, nhưng phải trả giá bằng việc biên dịch chậm hơn một chút.

Tectonic là một bản dựng hiện đại, khép kín của động cơ XeTeX. Tính năng nổi bật của nó là xử lý phụ thuộc tự động: khi tài liệu cần gói mà bạn không có, Tectonic sẽ tải xuống gói đó theo yêu cầu thay vì bị lỗi. Oleafly gói Tectonic làm công cụ mặc định của nó vì lý do chính xác này, do đó, bản cài đặt mới sẽ biên dịch các tài liệu trong thế giới thực mà không cần bất kỳ quản trị TeX nào.

##Quyết định thế nào

Thực hiện theo mẫu. Nếu một lớp tạp chí hoặc mẫu luận văn ghi lại một công cụ, hãy sử dụng công cụ đó. Mẫu mã hóa các giả định của công cụ theo cách xuất hiện dưới dạng lỗi khó hiểu ở những nơi khác, như được mô tả trong [Tệp lớp đại học sẽ không biên dịch](/learn/fix-broken-template/). Nếu tài liệu là của bạn ngay từ đầu, nguyên tắc chung rất đơn giản: pdfLaTeX khi một địa điểm bảo thủ sẽ biên dịch nguồn của bạn và XeLaTeX, LuaLaTeX hoặc Tectonic khi bạn cần Unicode thực hoặc phông chữ thực. Dù bạn chọn gì, hãy gắn bó với nó trong suốt vòng đời của tài liệu. Khoảng cách tinh tế và sự khác biệt về phông chữ khiến việc chuyển đổi giữa dự án trở nên lãng phí thời gian.