---

title: "Trình tự điều khiển không xác định"
description: "Tên lệnh không xác định: lỗi chính tả, gói bị thiếu, công cụ sai."
category: "log-literacy"
order: 1
level: "beginner"
tags: ["errors"]
featured: true
updated: 2026-07-25
---

# Trình tự điều khiển không xác định

## Triệu chứng

Quá trình biên dịch dừng lại với `! Trình tự điều khiển không xác định.` Sau đó, nhật ký hiển thị dòng nơi sự việc xảy ra, được chia làm hai: mọi thứ TeX đã đọc và bao gồm lệnh vi phạm trên một dòng và phần còn lại của dòng nguồn bên dưới nó. Mã thông báo cuối cùng ở dòng trên đó là lệnh TeX không nhận ra, điều này khiến đây trở thành một trong những lỗi dễ xác định chính xác hơn.

##Tại sao nó lại xảy ra

Trình tự điều khiển là bất kỳ thứ gì bắt đầu bằng dấu gạch chéo ngược. TeX không có từ vựng cố định: các lệnh chỉ tồn tại do kernel, lớp tài liệu, gói hoặc `\newcommand` của chính bạn đã xác định chúng. Khi TeX đọc dấu gạch chéo ngược theo sau là một tên chưa được xác định, nó không thể đoán được ý của bạn và dừng lại. Lỗi không bao giờ là do lệnh "sai" nói chung. Đó là về việc cái tên đó không được biết đến trong tài liệu này, tại thời điểm này, dưới động cơ này.

## Khắc phục sự cố sau ba lần kiểm tra

Kiểm tra chính tả trước. `\texbf` thay vì `\textbf`, `\lable` thay vì `\label` hoặc một khoảng trắng phân tách tên trong hai tài khoản trong hầu hết các trường hợp. Số dòng của nhật ký sẽ đưa bạn thẳng đến lỗi đánh máy.

Nếu đúng chính tả thì gói xác định có thể bị thiếu. `\includegraphics` sẽ không làm gì nếu không có `\usepackage{graphicx}`, `\toprule` cần `booktabs`, và `\SI` cần `siunitx`. Điều này khó khăn nhất khi bạn sao chép một đoạn trích từ một tài liệu khác hoặc từ câu trả lời của mô hình: nội dung văn bản xuất hiện, còn dòng mở đầu thì không. Tìm gói nào xác định lệnh trong [Mọi lệnh được giải thích](/learn/every-command-explained/), thêm dòng `\usepackage` và biên dịch lại. Nếu bản thân gói chưa được cài đặt, hãy xem [Cài đặt gói bị thiếu](/learn/install-missing-package/).

Nếu gói đã được tải và lỗi vẫn còn, hãy nghi ngờ động cơ. Một số lệnh chỉ tồn tại trong một công cụ cụ thể: `\fontspec` và họ hàng của nó yêu cầu XeLaTeX hoặc LuaLaTeX và sẽ chết trong pdfLaTeX với chính xác lỗi này. Các mẫu chỉ định một công cụ trong tài liệu của chúng thường làm như vậy vì lý do này. [Công cụ nào cho dự án này](/learn/engines-compared/) giải thích sự khác biệt.

## Hai điều kỳ quặc đáng biết

Vấn đề về thứ tự: lệnh được sử dụng trước dòng `\usepackage` xác định nó vẫn chưa được xác định tại thời điểm đó, vì vậy hãy tiếp tục tải gói ở phần mở đầu, phía trên `\begin{document}`. Và một lỗi này thường che giấu một lỗi khác, vì sau khi TeX khôi phục nó có thể đọc sai mọi thứ tiếp theo. Sửa chuỗi điều khiển không xác định đầu tiên trong nhật ký, biên dịch lại và chỉ sau đó xem những gì còn lại.