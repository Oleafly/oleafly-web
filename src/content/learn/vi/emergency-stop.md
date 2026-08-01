---

title: "Lập luận dừng khẩn cấp và bỏ chạy"
description: "Hủy bỏ nghiêm trọng do thiếu đầu, niềng răng hoặc bao gồm xấu."
category: "log-literacy"
order: 6
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

# Dừng khẩn cấp và tranh cãi bỏ chạy

## Triệu chứng

Việc biên dịch chết hoàn toàn. Nhật ký kết thúc bằng `! Dừng khẩn cấp.` hoặc hiển thị `Đối số bỏ chạy?`, theo sau là một đoạn văn bản dài của chính bạn, thường có một dòng đồng hành như `Tệp đã kết thúc trong khi quét bằng cách sử dụng \textbf` hoặc `Đoạn kết thúc trước khi \foo hoàn thành`. Không giống như hầu hết các lỗi LaTeX, không có tệp PDF nào cả và số dòng được báo cáo thường chỉ ở cuối tệp thay vì ở lỗi thực sự.

##Tại sao nó lại xảy ra

Cả hai thông báo đều xuất phát từ cùng một vấn đề: TeX bắt đầu đọc nội dung nào đó phải đóng và đạt đến cuối dữ liệu nhập trước khi mã thông báo đóng xuất hiện. Khi bạn viết `\textbf{`, TeX sẽ thu thập mọi thứ phù hợp với `}` làm đối số. Nếu dấu ngoặc nhọn đó không bao giờ xuất hiện, TeX sẽ tiếp tục nuốt văn bản qua các đoạn văn và phần cho đến khi hết tệp. "Đối số chạy trốn" là TeX cho bạn thấy nó đã nuốt phải thứ gì. “Dừng khẩn cấp” là TeX bỏ cuộc vì không thể tiếp tục nếu thiếu mảnh ghép còn thiếu. Thiếu `\end{document}`, môi trường không được đóng hoặc `\đầu vào` của một tệp không tồn tại sẽ tạo ra cùng một trạng thái đầu cuối.

## Cách tìm vị trí thực

Đừng tin vào số dòng; nó đánh dấu nơi TeX hết đầu vào, không phải nơi bắt đầu mất cân bằng. Thay vào đó, hãy đọc khối `Runawayargument?` trong nhật ký. Một vài từ đầu tiên của văn bản bị nuốt sẽ cho bạn biết quá trình chạy trốn bắt đầu từ đâu trong tài liệu và dòng `Tệp đã kết thúc trong khi quét sử dụng ...` đặt tên cho lệnh có đối số không bao giờ được đóng. Tìm kiếm lệnh đó gần văn bản được trích dẫn và đếm dấu ngoặc nhọn của nó.

Nếu nhật ký không hữu ích, hãy tìm kiếm tài liệu theo dạng nhị phân. Chú thích nửa sau của phần nội dung (hoặc gói nó trong `\iffalse ... \fi`) và biên dịch lại. Nếu lỗi biến mất thì vấn đề nằm ở phần bạn đã gỡ bỏ; tiếp tục giảm một nửa cho đến khi đoạn bị lỗi được cô lập. Điều này nghe có vẻ thô thiển, nhưng trên một tài liệu lớn, nó tìm thấy một dấu ngoặc đơn bị thiếu trong một số ít các bản biên dịch.

## Những nghi phạm thông thường

Kiểm tra xem `{` không có `}` ở vùng gần chữ in đậm, in nghiêng, chú thích cuối trang và chú thích vì các lệnh đó có dấu ngoặc nhọn đối số mà bạn nhập bằng tay. Kiểm tra xem mọi `\begin{...}` có một `\end{...}` trùng khớp với cùng tên môi trường hay không. Xác nhận tệp kết thúc bằng `\end{document}` và mọi `\input` và `\include` đều đặt tên cho một tệp tồn tại ở đường dẫn đó. Trợ giúp của người chỉnh sửa ở đây: Oleafly làm nổi bật các cặp dấu ngoặc nhọn và môi trường phù hợp khi bạn nhập, giúp nắm bắt hầu hết các dấu ngoặc nhọn này trước khi trình biên dịch nhìn thấy chúng.