---

title: "Lợi nhuận trong một gói"
description: "hình học cho kích thước trang, lề, độ lệch đóng gáy."
category: "the-page"
order: 1
level: "beginner"
tags: ["layout"]
featured: true
updated: 2026-07-25
---

# Lợi nhuận trong một gói

Lề mặc định của LaTeX trông rất lớn, đặc biệt là trên giấy A4. Đó là theo thiết kế: các giá trị mặc định nhắm đến độ dài dòng thoải mái khoảng 66 ký tự, rất phù hợp để đọc nhưng hiếm khi là mẫu của trường đại học, tạp chí hoặc sở thích của riêng bạn. Thay vì điều chỉnh hàng tá độ dài ở mức độ thấp bằng tay, bạn thiết lập trang bằng gói `hình học` và mô tả bố cục bạn muốn một cách đơn giản.

## Hai cách bạn thực sự sẽ sử dụng nó

```latex
\usepackage[margin=1in]{geometry}
% or
\usepackage[a4paper,top=2.5cm,bottom=2.5cm,left=2.5cm,right=2.5cm]{geometry}
```

Biểu mẫu đầu tiên là biểu mẫu nhanh: `margin=1in` đặt tất cả bốn lề thành một inch trong một tùy chọn duy nhất và hình học sẽ tính toán lại chiều rộng và chiều cao của văn bản cho phù hợp. Đây là giao diện "luận án Hoa Kỳ" tiêu chuẩn và là mặc định hợp lý cho các bản nháp.

Hình thức thứ hai giải thích mọi thứ. `a4paper` khai báo kích thước giấy vật lý (sử dụng `letterpaper` cho US Letter). Nếu không có nó, hình học sẽ kế thừa bất cứ điều gì lớp tài liệu giả định, điều này có thể không khớp với những gì trình xem PDF hoặc máy in của bạn mong đợi. Các tùy chọn `top`, `bottom`, `left` và `right` sau đó đặt từng lề một cách độc lập, do đó, bố cục bất đối xứng cũng dễ dàng như bố cục đối xứng. Bạn có thể kết hợp các đơn vị một cách tự do: `in`, `cm`, `mm` và `pt` đều hoạt động.

Mọi thứ xảy ra ở phần mở đầu, trước `\begin{document}`. Geometry đọc các tùy chọn của nó một lần và lấy toàn bộ bố cục trang từ chúng, đó là lý do tại sao nó ít xảy ra lỗi hơn so với điều chỉnh thủ công.

## Bù đóng bìa cho bản in

Nếu tài liệu sẽ được in và đóng bìa, lề bên trong cần có thêm khoảng trống để văn bản không biến mất vào gáy. Thêm `bindoffset=0,5cm` vào các tùy chọn và hình học sẽ dịch chuyển khối văn bản ra ngoài trên mỗi trang. Trong tài liệu `twoside`, nó luân phiên dịch chuyển một cách chính xác giữa các trang bên trái và bên phải, việc chuyển sang bên phải bằng tay rất tẻ nhạt.

##Những việc không nên làm

Tránh kết hợp hình học với `\setlength{\textwidth}{...}` thủ công trừ khi bạn biết lý do. Bố cục trang của LaTeX là một trang web có độ dài phụ thuộc lẫn nhau (`\textwidth`, `\oddsidemargin`, `\headheight` và các bạn bè) và hình học quản lý tất cả chúng như một hệ thống nhất quán. Việc thay đổi trực tiếp một độ dài sau khi tải hình học thường khiến các độ dài khác không còn phù hợp nữa và kết quả là bạn có văn bản tràn trang hoặc lề khác với những gì bạn yêu cầu. Nếu bạn cần thay đổi giữa tài liệu, hình học sẽ cung cấp `\newgeometry{...}` và `\restoregeometry` để thực hiện chính xác điều đó.

Một lưu ý trước khi điều chỉnh bất cứ điều gì: nếu bạn đang viết cho một tạp chí hoặc hội nghị, tệp lớp đã mã hóa các lề cần thiết và việc thêm hình học lên trên có thể sẽ vi phạm định dạng gửi. Lưu điều chỉnh lề cho các tài liệu mà bạn kiểm soát bố cục, chẳng hạn như luận văn, ghi chú hoặc CV và kiểm tra xem [lớp tài liệu](/learn/document-skeleton/) đã cung cấp cho bạn những gì trước tiên.