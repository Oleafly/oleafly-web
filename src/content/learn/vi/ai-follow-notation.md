---

title: "Cung cấp cho mô hình bảng ký hiệu của bạn"
description: "Macro và danh sách ký hiệu ngắn để các biến luôn ổn định."
category: "human-plus-model"
order: 4
level: "intermediate"
tags: ["ai"]
featured: false
updated: 2026-07-25
---

# Cung cấp cho mô hình bảng ký hiệu của bạn

Yêu cầu người mẫu soạn thảo hoặc sửa lại văn bản toán học và văn xuôi thường trở lại ổn định trong khi ký hiệu trôi đi. Vectơ `\vec{x}` của bạn trả về dưới dạng `\mathbf{x}` trong một đoạn và `\vec{x}` trong một đoạn khác. Kỳ vọng bạn viết dưới dạng `\E[X]` sẽ trở lại dưới dạng `\mathbb{E}(X)`. Mỗi biến thể biên dịch nên không có lỗi. Sự mâu thuẫn chỉ xuất hiện khi người đọc nhận thấy cùng một đối tượng được viết theo ba cách khác nhau. Mô hình đã nhìn thấy mọi quy ước ký hiệu tồn tại và không có hướng dẫn, các mẫu từ tất cả chúng. Đưa nó cho bạn một cách rõ ràng.

## Macro làm cho ký hiệu có thể thực thi được

Nền tảng này độc lập với AI và dù sao cũng đáng thực hiện: định tuyến mọi biểu tượng định kỳ thông qua macro, do đó, nguồn cho biết `\vect{x}` thay vì `\boldsymbol{x}` thô. Điều đó đặt tên cho mỗi khái niệm, cho phép bạn sắp xếp lại toàn bộ bài viết bằng cách chỉnh sửa một định nghĩa và cung cấp cho mô hình một vốn từ vựng nhỏ để sử dụng thay vì phát minh ra các biến thể. Việc xác định macro được đề cập trong [Lệnh tùy chỉnh](/learn/custom-commands/).

## Dán nội dung gì vào dấu nhắc

Bên cạnh yêu cầu thực tế của bạn, hãy bao gồm một khối ký hiệu nhỏ gọn: các định nghĩa macro cộng với một nhận xét trên mỗi dòng cho biết mỗi dòng dùng để làm gì.

```latex
% vectors: bold italic \vect{x}
% matrices: bold upright \mat{A}
% expectation: \E{X}
```

Sau đó nêu rõ ràng buộc một cách trực tiếp: "Chỉ sử dụng các macro này cho các khái niệm này. Không đưa ra ký hiệu mới cho bất kỳ thứ gì được liệt kê và nếu bạn cần một ký hiệu chưa được liệt kê, hãy nói như vậy thay vì phát minh ra một ký hiệu." Các mô hình tuân theo những hướng dẫn cụ thể, có thể kiểm tra được tốt hơn nhiều so với những hướng dẫn mơ hồ "phù hợp với phong cách của tôi". Đối với một bài viết đầy đủ, hãy giữ khối dưới dạng một nhận xét ký hiệu ngắn gần phần mở đầu để nó luôn cập nhật và sẵn sàng dán.

## Xác minh một cách máy móc

Lớp macro làm cho việc kiểm tra trở nên rẻ hơn. Nếu mọi vectơ phải là `\vect{...}`, thì bất kỳ `\mathbf{` hoặc `\vec{` thô nào trong đầu ra của mô hình đều là vi phạm mà bạn có thể tìm thấy bằng tìm kiếm văn bản thay vì đọc lại phép toán. Chạy tìm kiếm đó trên bất kỳ thứ gì bạn dán vào, sửa các phần bị phân tán và ký hiệu vẫn thống nhất cho dù có bao nhiêu chỉnh sửa được mô hình hỗ trợ xuất hiện trên bài báo.

## Bên trong Oleafly

[Trợ lý trong Oleafly](/learn/oleafly-ai/) đọc các tệp dự án, bao gồm cả phần mở đầu nơi macro của bạn tồn tại, do đó, nó thường chọn các lệnh đã xác định mà không cần được thông báo. Hướng dẫn rõ ràng vẫn hữu ích: nhìn thấy macro tồn tại yếu hơn so với việc được thông báo là bắt buộc. Thêm một dòng vào yêu cầu của bạn ("sử dụng macro ký hiệu từ phần mở đầu") và xem xét sự khác biệt màu đỏ/xanh lục trước khi thay đổi vùng đất. Điều đó cứ trôi dạt ra khỏi nguồn.