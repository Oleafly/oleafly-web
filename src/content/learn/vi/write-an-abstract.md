---

title: "Tóm tắt kiếm được nhấp chuột"
description: "Công thức bốn câu dành cho phần tóm tắt, cộng với LaTeX và những lỗi cần tránh."
category: "paper-anatomy"
order: 2
level: "beginner"
tags: ["writing", "abstract"]
featured: false
updated: 2026-07-25
---

# Tóm tắt kiếm được nhấp chuột

Phần tóm tắt của bạn là phần duy nhất của bài báo mà hầu hết mọi người sẽ đọc. Người đánh giá sử dụng nó để quyết định mức độ khó chịu, các công cụ tìm kiếm sử dụng nó để xếp hạng bạn và các nhà nghiên cứu bận rộn sử dụng nó để quyết định xem tệp PDF có đáng mở hay không. Công việc của nó rất đơn giản và tàn bạo: bán toàn bộ tờ báo trong 150-250 từ.

## Công thức bốn câu

Bạn có thể soạn thảo một bản tóm tắt chắc chắn bằng cách trả lời bốn câu hỏi theo thứ tự. Mỗi câu trả lời là một hoặc hai câu.

| Câu | Hỏi nó trả lời |
|---|---|
| Bối cảnh | Đây là lĩnh vực có vấn đề gì và tại sao nó lại quan trọng? |
| Khoảng trống | Những gì còn thiếu hoặc bị hỏng trong các phương pháp tiếp cận hiện tại? |
| Đóng góp | Bạn đã xây dựng, chứng minh hoặc khám phá điều gì? |
| Kết quả | Số tiêu đề hoặc phát hiện là gì? |

Ví dụ: "Đào tạo các mô hình lớn rất tốn kém. Các phương pháp nén hiện tại đánh đổi quá nhiều độ chính xác để lấy tốc độ. Chúng tôi giới thiệu một kỹ thuật cắt tỉa để duy trì độ chính xác bằng cách nhắm mục tiêu vào các đầu chú ý dư thừa. Trên ba điểm chuẩn, nó cắt giảm chi phí suy luận xuống 40% với mức giảm độ chính xác dưới 0,5%. " Bốn câu, cả tờ giấy.

Mở rộng từng nhịp nếu cần nhưng vẫn giữ trật tự. Người đọc mong đợi kênh: rộng, hẹp, của chúng tôi, bằng chứng.

## Tóm tắt và giới thiệu

Mọi người nhầm lẫn những điều này liên tục. Phần tóm tắt chính là đoạn giới thiệu phim: nó cố tình làm hỏng phần kết vì các nhà nghiên cứu muốn biết kết quả trước khi đầu tư một giờ. Phần giới thiệu là màn một: nó xây dựng lập luận một cách chậm rãi, trích dẫn tài liệu và đưa ra từng nhận định. Đừng bao giờ viết một bản tóm tắt mang tính trêu chọc ("chúng tôi khám phá liệu...") khi bạn có thể nêu kết quả. Xem [phần giới thiệu và công việc liên quan](/learn/introduction-and-rel-work/) để biết màn một.

##LaTeX

Môi trường `abstract` theo sau `\maketitle` trong hầu hết các lớp bài viết:

```latex
\maketitle
\begin{abstract}
Training large models is expensive. Existing compression
methods trade too much accuracy for speed. We introduce...
\end{abstract}
```

Một số lớp tạp chí muốn phần tóm tắt trước `\maketitle` hoặc sử dụng lệnh riêng của chúng, vì vậy hãy kiểm tra mẫu. Thông tin thêm về vấn đề xung quanh trong [bài học về trang tiêu đề](/learn/title-page/).

##Những lỗi thường gặp

- **Trích dẫn trong phần tóm tắt.** Tóm tắt được hiển thị riêng lẻ, trong cơ sở dữ liệu và dịch vụ lập chỉ mục, trong đó `[12]` không trỏ đến gì cả. Đặt tên cho tác phẩm trước bằng chữ nếu bạn cần và lưu `\cite` cho phần nội dung.
- **Tuyên bố mơ hồ.** "Cải thiện đáng kể hiệu suất" không cho người đọc biết điều gì. "Cắt giảm chi phí suy luận 40%" kiếm được nhấp chuột. Đặt số cụ thể tốt nhất của bạn vào.
- **Viết trước.** Bản tóm tắt tóm tắt một bài báo đã tồn tại. Hãy soạn thảo sớm nếu điều đó giúp bạn suy nghĩ nhưng hãy viết lại lần cuối khi bạn biết mình thực sự đã thể hiện điều gì.
- **Thổi phồng ngân sách từ ngữ.** Địa điểm thực thi giới hạn, thường là 150-250 từ. Mọi câu không phải là ngữ cảnh, khoảng trống, sự đóng góp hoặc kết quả đều có thể bị xóa.

## Tự kiểm tra nhanh

Che mọi thứ ngoại trừ bản tóm tắt của bạn và đưa nó cho đồng nghiệp. Nếu họ có thể cho bạn biết bạn đã làm gì và tại sao nó lại quan trọng thì điều đó sẽ hiệu quả. Nếu họ nói "nghe có vẻ thú vị, bạn đã tìm thấy gì?", câu kết quả của bạn bị thiếu hoặc mơ hồ. Sửa một câu đó và phần tóm tắt thường rơi vào đúng vị trí.