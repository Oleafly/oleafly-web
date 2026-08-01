---

title: "Mô hình nhắc nhở để biên dịch TeX"
description: "Gửi lời mở đầu, yêu cầu một sự khác biệt, luôn biên soạn câu trả lời."
category: "human-plus-model"
order: 1
level: "beginner"
tags: ["ai"]
featured: true
updated: 2026-07-25
---

# Mô hình nhắc nhở biên dịch TeX

Hãy hỏi mô hình trò chuyện về LaTeX và bạn thường sẽ nhận được mã có vẻ đúng nhưng không thể biên dịch được trong tài liệu của mình. Mô hình không biết bạn sử dụng lớp nào, bạn tải gói nào hoặc bạn đã xác định macro nào, do đó, nó trả lời một số tài liệu chung không phải của bạn. Sau đó, đầu ra sẽ bị thiếu các gói hoặc các định nghĩa xung đột ngay khi bạn dán nó vào. Hầu hết những điều đó có thể tránh được nhờ ba thói quen nhắc nhở, cộng với một quy tắc cứng: biên dịch trước khi bạn tin tưởng.

## Gửi lời mở đầu

Lời mở đầu của bạn là bối cảnh mà mô hình thiếu. Dán nó, hoặc ít nhất là dòng `\documentclass` và danh sách `\usepackage` và yêu cầu "một đoạn biên dịch theo phần mở đầu này". Thói quen này ngăn chặn lỗi phổ biến nhất: câu trả lời âm thầm phụ thuộc vào `tikz`, `siunitx` hoặc một số gói khác mà bạn chưa bao giờ tải. Nó cũng hướng mô hình tới các lệnh mà thiết lập của bạn thực sự cung cấp. Nếu dự án của bạn xác định macro, hãy bao gồm cả các macro đó, vì những lý do được đề cập trong [Cung cấp cho mô hình bảng ký hiệu của bạn](/learn/ai-follow-notation/).

## Hỏi câu trả lời phụ thuộc vào điều gì

Thêm một yêu cầu thường trực: "Nếu mã của bạn cần bất kỳ gói nào tôi chưa tải, hãy liệt kê nó rõ ràng ở đầu câu trả lời của bạn." Điều đó biến các phần phụ thuộc ẩn thành một danh sách kiểm tra hiển thị. Khi câu trả lời đặt tên cho một gói, bạn sẽ quyết định có thêm gói đó hay không, thay vì phát hiện ra phần phụ thuộc là lỗi `Chuỗi điều khiển không xác định` ba lần biên dịch sau đó. Lỗi đó và chẩn đoán của nó được đề cập trong [Trình tự điều khiển không xác định](/learn/unknown-control-sequence/).

## Yêu cầu một sự khác biệt, không phải viết lại

Khi bạn muốn thay đổi văn bản hiện có, hãy dán đoạn mã nhỏ nhất có liên quan và yêu cầu mô hình chỉ thay đổi những gì yêu cầu, nêu rõ những gì nó đã thay đổi. Với toàn bộ tập tin, các mô hình có thể viết lại một cách tự do: họ định dạng lại các đoạn văn chưa được chỉnh sửa, sắp xếp lại các dòng mở đầu và đôi khi làm rơi thứ gì đó xuống sàn. Sự thay đổi thực sự biến mất bên trong thùng rác. Bản chỉnh sửa tối thiểu được mô tả là bản chỉnh sửa mà bạn thực sự có thể xem lại. Bên trong Oleafly, trợ lý thực thi hình dạng này cho bạn bằng cách đề xuất mọi chỉnh sửa dưới dạng khác biệt màu đỏ/xanh lá cây mà bạn phê duyệt theo từng dòng, như được mô tả trong [Trợ lý bên trong Oleafly](/learn/oleafly-ai/).

## Biên dịch trước khi tin tưởng

Không bao giờ gửi LaTeX mà bạn chưa biên soạn, cho dù nó có vẻ hợp lý đến đâu. Dán đề xuất vào tài liệu của bạn, biên dịch và đọc lỗi đầu tiên nếu có. Việc cung cấp thông báo lỗi đó trở lại mô hình cùng với đoạn mã vi phạm thường tạo ra lần thử thứ hai hoạt động. Giữ dự án dưới Git để mọi thay đổi có sự hỗ trợ của mô hình có thể được khôi phục bằng một lệnh, thiết lập được đề cập trong [Đưa bài báo lên GitHub](/learn/sync-with-github/). Mô hình đề xuất; trình biên dịch xử lý.