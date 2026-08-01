---

title: "Dự án trình duyệt và thư mục trên đĩa"
description: "Sự tiện lợi của đám mây so với quyền sở hữu cục bộ, công việc ngoại tuyến và Git thực."
category: "local-studio"
order: 1
level: "beginner"
featured: true
updated: 2026-07-25
---

# Dự án trình duyệt và thư mục trên đĩa

Khi bắt đầu viết LaTeX, bạn phải đối mặt với một quyết định sớm: dự án của bạn nằm trong tab trình duyệt trên máy chủ của người khác hay trong một thư mục trên đĩa của chính bạn? Cả hai mô hình đều tạo ra cùng một bản PDF. Chúng khác nhau ở chỗ ai nắm giữ nguồn, điều gì xảy ra khi mạng ngừng hoạt động và bạn kiểm soát bao nhiêu chuỗi công cụ xung quanh.

## Mỗi mẫu máy mang lại cho bạn điều gì

| | Đám mây (ví dụ: Overleaf) | Địa phương (Oleafly, TeX Live) |
| --- | --- | --- |
| Thiết lập | Ngay lập tức, không cần cài đặt | Một lần cài đặt |
| Ngoại tuyến | Hạn chế | Chỉnh sửa luôn hoạt động; biên dịch chạy với các gói được lưu trong bộ nhớ cache |
| Quyền riêng tư | Nhà cung cấp lưu trữ dự án của bạn | Các tập tin vẫn còn trên đĩa của bạn |
| Git | Thông qua cầu đồng bộ | Bản địa, một kho lưu trữ thực sự trong thư mục |
| Hợp tác | Con trỏ thời gian thực | Git, bản vá, thư mục dùng chung |
| Chi phí | Cấp miễn phí cộng với đăng ký | Miễn phí |

Dự án đám mây là một hàng trong cơ sở dữ liệu mà dịch vụ hiển thị cho bạn. Dự án cục bộ là một thư mục bạn có thể mở trong trình quản lý tệp, sao chép vào ổ USB, tìm kiếm bằng bất kỳ công cụ nào và phiên bản bằng Git thông thường. Sự khác biệt đó nghe có vẻ trừu tượng cho đến khi thời hạn trùng với thời điểm ngừng hoạt động, thay đổi tường phí hoặc chuyến bay.

## Khi đám mây là lựa chọn đúng đắn

Đồng chỉnh sửa theo thời gian thực là lợi thế thực sự của đám mây. Nếu ba đồng tác giả cần nhập cùng một đoạn văn trong giờ cuối cùng trước thời hạn và không ai trong số họ cài đặt phần mềm thì trình soạn thảo trình duyệt là câu trả lời thiết thực. Hiện tại không có gì cục bộ thay thế các con trỏ đồng thời.

## Khi địa phương là lựa chọn đúng đắn

Local thắng khi bản nháp nhạy cảm hoặc chưa được xuất bản, khi bạn làm việc trên máy bay hoặc mạng bị hạn chế, khi số liệu và dữ liệu của bạn lớn hoặc khi bạn muốn lịch sử phiên bản không phụ thuộc vào cấp đăng ký. Kho lưu trữ Git cục bộ ghi lại các thay đổi của bạn cho dù ngày mai có dịch vụ nào tồn tại hay không và cùng một thư mục hoạt động với thiết bị đầu cuối, trình chỉnh sửa mã hoặc bản sao của cộng tác viên.

Oleafly được xây dựng cho phía cục bộ của bảng này: trình biên dịch được đưa vào bên trong ứng dụng, các dự án là các thư mục đơn giản có lịch sử Git thực và AI tùy chọn chạy bằng khóa riêng của bạn. Một bản so sánh dài hơn có trên [blog](/blog/local-first-vs-cloud-latex-editor/) và các tài liệu đề cập đến [cách hai mô hình có thể hoạt động cùng nhau](/docs/why-oleafly/) thông qua GitHub.