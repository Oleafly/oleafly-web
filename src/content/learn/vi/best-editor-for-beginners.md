---

title: "Chọn một trình soạn thảo bạn thực sự sẽ mở"
description: "Những gì người mới bắt đầu cần: trình biên dịch, bản xem trước, SyncTeX và các tệp vẫn còn trên đĩa."
category: "open-the-loop"
order: 6
level: "beginner"
tags: ["tools"]
featured: true
updated: 2026-07-25
---

# Chọn một trình soạn thảo bạn sẽ thực sự mở

Trình soạn thảo LaTeX tốt nhất cho người mới bắt đầu không phải là trình soạn thảo mạnh mẽ nhất. Nó là công cụ đưa bạn từ một tệp trống sang một tệp PDF được biên dịch với ít rắc rối nhất. Biên dịch sớm và thường quan trọng hơn bất kỳ tính năng nào. Bốn khả năng đáp ứng những gì bạn cần vào ngày đầu tiên.

Đầu tiên, quá trình biên dịch sẽ hoạt động mà không cần cài đặt bản phân phối TeX nhiều gigabyte bằng tay. Thứ hai, bạn muốn có bản xem trước PDF song song với SyncTeX, do đó, một cú nhấp chuột vào tệp PDF sẽ chuyển đến dòng nguồn phù hợp và quay lại. Thứ ba, các tệp của bạn phải ở dạng `.tex` đơn giản trên đĩa để bạn có thể nén chúng, gửi chúng qua email hoặc đặt chúng vào Git mà không cần bước xuất. Thứ tư, lỗi sẽ xuất hiện dưới dạng thông báo có thể đọc được chứ không chỉ ở dạng nhật ký TeX thô.

## Các lựa chọn thực tế

| Biên tập viên | Thiết lập | Hoạt động ngoại tuyến | Ghi chú |
| --- | --- | --- | --- |
| Oleafly | Tải ứng dụng | Chỉnh sửa luôn; biên dịch sử dụng các gói được lưu trong bộ nhớ cache | Công cụ đi kèm, lịch sử Git, AI khóa riêng của bạn tùy chọn |
| TeXShop / TeXworks | Trước tiên hãy cài đặt bản phân phối TeX | Có | Tối thiểu và đáng tin cậy |
| Hội thảo về Mã VS + LaTeX | Trước tiên hãy cài đặt bản phân phối TeX | Có | Rất phù hợp nếu bạn đã làm việc trong VS Code |
| Trang sau | Tạo tài khoản trên trình duyệt | Hạn chế | Không cài đặt; dự án trực tiếp trên máy chủ của họ |

Hai hàng ở giữa có chung một chi phí ẩn: trước khi trình chỉnh sửa trở nên hữu ích, bạn phải tự cài đặt và bảo trì TeX Live hoặc MiKTeX. Đó là nơi mà nhiều người mới bắt đầu trì hoãn. Tùy chọn trình duyệt sẽ xóa thiết lập nhưng chuyển tệp của bạn vào tài khoản. Sự cân bằng được đề cập sâu hơn trong [dự án trình duyệt và thư mục trên đĩa](/learn/overleaf-vs-local/).

## Một mặc định hợp lý

Nếu bạn muốn các tệp cục bộ không cần quản trị TeX, hãy bắt đầu với [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest): trình biên dịch sẽ được đưa vào bên trong ứng dụng và tải các gói xuống khi tài liệu cần chúng lần đầu tiên. Cho dù bạn chọn trình soạn thảo nào, hãy ghép nối nó với [hướng dẫn tài liệu đầu tiên](/learn/first-document/) và giữ [cheatsheet](/learn/cheatsheet/) ở gần. Hôm nay người biên tập không quan trọng bằng việc biên soạn trang đầu tiên của bạn.