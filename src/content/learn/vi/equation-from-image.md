---

title: "Ảnh bảng trắng đến nguồn"
description: "Cắt, OCR hoặc đa phương thức, biên dịch, sửa các chỉ số bằng mắt."
category: "human-plus-model"
order: 2
level: "beginner"
tags: ["ai", "math"]
featured: false
updated: 2026-07-25
---

# Ảnh bảng trắng đến nguồn

Một dẫn xuất trên bảng trắng, một trang quét ghi chú bài giảng, một phương trình ở dạng PDF mà bạn không thể sao chép từ đó: việc gõ lại toán học vào LaTeX bằng tay rất chậm và dễ mắc lỗi. Các công cụ hiện đại có thể thực hiện hầu hết việc đó từ một bức ảnh. Quá trình chuyển đổi hiện thực sự tốt, nhưng hãy coi đầu ra là bản nháp chứ không phải bản chép lời hoàn chỉnh. Quy trình làm việc bên dưới được xây dựng xung quanh điều đó.

## Bắt đầu bằng một bức ảnh đẹp hơn

Chất lượng hình ảnh quyết định kết quả nhiều hơn việc lựa chọn công cụ. Hãy chụp thẳng thay vì chụp theo một góc, vì đường cơ sở bị lệch làm cho chỉ số phụ và chỉ số trên trở nên mơ hồ. Có được ánh sáng đồng đều mà không bị chói trên bảng và cắt xén chặt chẽ theo phương trình duy nhất mà bạn muốn, vì các sơ đồ xung quanh và các dấu phân tán sẽ trở thành biểu tượng ảo giác. Nếu một bức ảnh có ba phương trình, hãy cắt nó thành ba hình ảnh và chuyển đổi từng hình ảnh một; kết quả trên mỗi phương trình luôn tốt hơn kết quả trên từng trang.

## Chuyển đổi bằng công cụ bạn có

Ba loại công cụ thực hiện công việc này. Các dịch vụ OCR phương trình chuyên dụng có độ chính xác cao trên đầu vào sạch. Các mô hình đa phương thức chung chấp nhận một hình ảnh trong cuộc trò chuyện và trả về LaTeX khi được hỏi và bạn có thể trả lời "chỉ số dưới thứ hai phải là j chứ không phải i" để có phiên bản chính xác. Oleafly đã tích hợp sẵn tính năng chuyển hình ảnh sang LaTeX, chạy qua khóa API của riêng bạn với bất kỳ nhà cung cấp nào mà bạn đã định cấu hình, do đó, đoạn mã có thể chuyển từ ảnh chụp màn hình sang nguồn mà không cần rời khỏi trình chỉnh sửa. Xem [AI setup](/docs/ai-setup/) để biết cấu hình. Với đầu vào rõ ràng, ba phương pháp tiếp cận đều hội tụ, đó là lý do tại sao lời khuyên về hình ảnh ở trên quan trọng hơn quyết định về công cụ.

## Biên dịch ngay lập tức

Dán kết quả đầu ra vào tài liệu của bạn bên trong môi trường `phương trình` và biên dịch trước khi thực hiện bất kỳ điều gì khác. Lỗi chuyển đổi được chia thành hai loại và trình biên dịch sẽ tìm loại đầu tiên cho bạn: dấu ngoặc nhọn không cân bằng, dấu phân cách `\left` và `\right` không khớp, cũng như các lệnh không xác định đều không thành công và cách khắc phục chỉ mang tính cơ học. [Thiếu ký hiệu đô la](/learn/missing-dollar/) bao gồm những lỗi phổ biến nhất trong số những lỗi này.

## Sau đó đọc lại toán học

Loại lỗi thứ hai biên dịch hoàn hảo và sai. Đọc phương trình được kết xuất dựa trên ký hiệu gốc theo ký hiệu, đặc biệt chú ý đến các vị trí chuyển đổi bị trượt đáng tin cậy: chỉ số dưới và chỉ số trên, trong đó các ký hiệu nhỏ mờ cùng nhau và `x_i` trở thành `x_j`; số nguyên tố và mũ biến mất hoặc di chuyển; các cặp trông giống nhau chẳng hạn như `1`, `l` và `I` hoặc `\rho` và `p`; và giới hạn của tổng và tích phân. Đây chính xác là những chi tiết làm thay đổi ý nghĩa của một công thức trong khi vẫn khiến nó hợp lý về mặt đánh máy. Hai phút so sánh cho mỗi phương trình là toàn bộ chi phí và rẻ hơn nhiều so với việc người đánh giá tìm thấy chỉ mục sai trên bản in.