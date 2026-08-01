---

title: "Hộp ngang quá đầy"
description: "Các dòng chọc vào lề và khi nào cần quan tâm."
category: "log-literacy"
order: 3
level: "intermediate"
tags: ["errors"]
featured: false
updated: 2026-07-25
---

#Hộp ngang quá đầy

## Triệu chứng

Nhật ký báo cáo nội dung như `Overfull \hbox (14,2pt too wide) trong đoạn ở dòng 87--92` và trong bản PDF, một dòng của đoạn đó nhô ra lề phải. Tài liệu vẫn được biên dịch, vì đây là một cảnh báo chứ không phải là một lỗi, nhưng dòng nhô ra vẫn hiển thị khi in và người đánh giá sẽ nhận thấy. Ở chế độ nháp (`\documentclass[draft]{...}`) LaTeX đánh dấu mỗi người phạm tội bằng một hình chữ nhật màu đen, giúp dễ dàng phát hiện ra họ.

##Tại sao nó lại xảy ra

TeX chia các đoạn văn thành các dòng bằng cách cân nhắc mọi điểm ngắt có thể có và chọn cách sắp xếp có tổng "độ xấu" ít nhất, trong đó độ xấu đo lường mức độ giãn nở hoặc co lại của các khoảng trắng trên một dòng. Đôi khi không có sự sắp xếp nào được chấp nhận: một URL dài không chứa điểm ngắt nào cả, phép toán nội tuyến được coi là gần như không thể phá vỡ được hoặc một từ dài không có mục nhập dấu gạch nối. Thay vì kéo dài các khoảng trống vượt quá khả năng chịu đựng của nó và tạo ra một đường kẻ có khoảng cách rõ ràng, TeX cho phép đường kẻ chạy dài và cho bạn biết về điều đó. Hộp quá đầy là TeX từ chối làm cho đoạn văn trở nên xấu xí theo một cách khác.

## Cách khắc phục, từ tốt nhất đến tệ nhất

Cách khắc phục tốt nhất là biên tập. Viết lại câu, di chuyển từ dài ra khỏi cuối dòng hoặc tách một câu thành hai thường loại bỏ vấn đề mà không cần bất kỳ mã nào và thường cải thiện văn xuôi.

Đối với URL, hãy gói địa chỉ trong `\url{...}` từ gói `url` hoặc `hyperref` để địa chỉ có thể ngắt ở dấu gạch chéo và dấu chấm, đồng thời tải gói `xurl` khi bạn cần ngắt ở hầu hết mọi ký tự. Đối với công thức nội tuyến rộng, hãy hiển thị nó hoặc sử dụng môi trường có thể ngắt dòng, chẳng hạn như `multline` từ `amsmath` khi bản thân phương trình quá dài so với dòng.

Hai cải tiến cấp độ mở đầu giúp ích trên toàn cầu. Việc tải `microtype` cho phép các ký tự nhô ra một phần và mở rộng phông chữ một chút, điều này giải quyết được nhiều trường hợp cận biên mà bạn không nhận ra. Việc đặt chính xác ngôn ngữ tài liệu thông qua `babel` hoặc `polyglossia` sẽ mang lại cho TeX các mẫu gạch nối phù hợp, vì một từ mà nó không thể gạch nối là một từ mà nó không thể ngắt.

##Khi nào cần quan tâm

Con số trong cảnh báo là vượt mức. Bất cứ điều gì dưới khoảng 2pt đều vô hình đối với người đọc và an toàn có thể bỏ qua trong bản nháp. Hàng chục điểm cần được khắc phục trước khi bất kỳ ai khác nhìn thấy bản PDF. Quy trình làm việc hợp lý là bỏ qua các hộp quá đầy trong khi viết, sau đó quét nhật ký một lần trước khi gửi và sửa số ít còn lại, lớn nhất trước tiên. Chống lại sự `\cẩu thả` và các thủ thuật dung sai toàn cầu khác: họ đánh đổi một vài dòng nhô ra để có khoảng cách lỏng lẻo, không đồng đều trên toàn bộ tài liệu.