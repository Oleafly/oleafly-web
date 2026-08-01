---

title: "Trợ lý bên trong Oleafly"
description: "Khóa API của bạn, bối cảnh dự án, các khác biệt, các chỉnh sửa nhận biết biên dịch."
category: "human-plus-model"
order: 5
level: "beginner"
tags: ["ai", "oleafly"]
featured: true
updated: 2026-07-25
---

# Trợ lý bên trong Oleafly

Oleafly bao gồm một trợ lý AI hoạt động bên trong dự án của bạn thay vì trong một cửa sổ trò chuyện riêng biệt. Không giống như dán LaTeX vào một chatbot thông thường, nó chạy trên khóa API của riêng bạn, có thể đọc dự án mà nó đang chỉnh sửa và hiển thị mọi thay đổi được đề xuất để phê duyệt trước khi chạm vào tệp của bạn.

## Chìa khóa của bạn, nhà cung cấp của bạn

Trợ lý không thực hiện cuộc gọi mô hình nào thông qua máy chủ của Oleafly. Bạn cung cấp khóa API cho một trong chín nhà cung cấp dịch vụ lưu trữ được hỗ trợ hoặc trỏ ứng dụng tới bản cài đặt Ollama cục bộ và sử dụng mô hình chạy trên phần cứng của riêng bạn. Các yêu cầu sẽ chuyển từ máy của bạn đến nhà cung cấp mà bạn đã định cấu hình, theo các điều khoản của nhà cung cấp đó và bạn thanh toán trực tiếp cho nhà cung cấp theo mức giá của họ. Việc chọn mô hình nào và cách thiết lập khóa hoặc Ollama sẽ được đề cập trong [AI setup](/docs/ai-setup/).

## Những gì trợ lý có thể nhìn thấy

Khi bạn đặt câu hỏi hoặc yêu cầu chỉnh sửa, trợ lý sẽ làm việc từ bản đồ dự án của bạn và đọc các tệp có liên quan đến yêu cầu, chẳng hạn như chương bạn đang chỉnh sửa, lời mở đầu xác định macro của bạn hoặc tệp `.bib` đằng sau câu hỏi trích dẫn. Bối cảnh đó là lý do tại sao nó có thể trả lời "tại sao Hình 3 nổi sang trang tiếp theo" về Hình 3 thực tế của bạn và tại sao các chỉnh sửa của nó có xu hướng khớp với ký hiệu và lệnh mà tài liệu của bạn đã sử dụng.

## Các chỉnh sửa bạn xem xét, không phải các chỉnh sửa vừa xảy ra

Trợ lý không bao giờ ghi trực tiếp vào tập tin của bạn. Nó đề xuất các thay đổi dưới dạng khác biệt, với các dòng bị xóa màu đỏ và các dòng được thêm vào màu xanh lục, và bạn chấp nhận hoặc từ chối từng dòng. Trước khi áp dụng bất kỳ thay đổi được chấp nhận nào, Oleafly ghi lại điểm kiểm tra Git, do đó trạng thái trước khi chỉnh sửa luôn cách một bước trong [Lịch sử Git](/docs/git-history/). Việc xóa một tệp được xử lý riêng biệt và luôn yêu cầu bạn xác nhận rõ ràng, bất kể trợ lý đang làm gì khác.

## Đóng vòng lặp bằng trình biên dịch

Vì trợ lý sống bên cạnh công trình nên nó có thể kiểm tra công việc của chính mình. Sau khi chỉnh sửa, nó có thể kích hoạt quá trình biên dịch, đọc nhật ký và nếu thay đổi đó nhằm khắc phục lỗi, hãy kiểm tra xem lỗi đó có biến mất hay không. Nó cũng có thể đọc văn bản của tệp PDF đã biên dịch để có thể xác nhận thay đổi được yêu cầu thực sự hiển thị ở đầu ra. Các mô hình vẫn tạo ra LaTeX sai, vì vậy hãy đọc những gì bạn chấp nhận. Ưu điểm là các đề xuất bị lỗi có xu hướng được phát hiện và sửa chữa trong vòng lặp chứ không phải do bạn thực hiện sau đó.

Cơ chế hoạt động hàng ngày tồn tại trong các tài liệu dành cho [chat](/docs/ai-chat/) và [inline edit](/docs/ai-inline-edit/) và [Một tuần viết bằng Oleafly](/learn/oleafly-workflow/) cho biết vị trí của trợ lý phù hợp với một vòng viết đầy đủ.