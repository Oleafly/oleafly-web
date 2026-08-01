---

title: "Chờ đợi bản PDF ngắn hơn"
description: "Số liệu dự thảo, chỉ bao gồm, TikZ bên ngoài, CPU cục bộ."
category: "long-form"
order: 5
level: "intermediate"
tags: ["thesis", "compile"]
featured: false
updated: 2026-07-25
---

# Chờ PDF ngắn hơn

Một luận án mất 90 giây để biên soạn sẽ thay đổi cách bạn viết. Bạn ngừng biên dịch lại sau những chỉnh sửa nhỏ, các lỗi chồng chất không thể nhìn thấy và vòng phản hồi khiến LaTeX trở nên dễ chịu biến mất. Trước khi tối ưu hóa, hãy biết thời gian trôi qua. Trong hầu hết các tài liệu dài, không phải số lượng gói mà là một số nội dung nặng, trên hết là các hình ảnh lớn và hình ảnh TikZ phức tạp, thống trị bản dựng. Các kỹ thuật dưới đây tấn công trực tiếp vào chúng.

## Bỏ qua số liệu khi soạn thảo

Tùy chọn `draft` làm cho LaTeX thay thế mọi hình ảnh bằng một hộp trống có cùng kích thước, giúp giữ nguyên bố cục và ngắt trang trong khi bỏ qua quá trình xử lý hình ảnh:

```latex
\documentclass[draft]{article}
```

`Bản nháp` cấp lớp cũng đánh dấu các dòng quá đầy bằng các thanh màu đen, điều mà một số người thấy hữu ích và những người khác thấy ồn ào. Để hạn chế hiệu ứng đối với hình ảnh, thay vào đó, hãy chuyển tùy chọn cho gói dưới dạng `\usepackage[draft]{graphicx}` hoặc cho một thủ phạm duy nhất với `\includegraphics[draft]{...}`. Hãy nhớ xóa nó trước khi chia sẻ tệp PDF, vì bản dựng nháp có vẻ bị hỏng đối với bất kỳ ai không biết tùy chọn này. Độc lập với chế độ nháp, hãy thu nhỏ các bức ảnh lớn một lần, như được mô tả trong [thả hình](/learn/insert-image/), vì hình ảnh 40 megabyte sẽ khiến bạn mất phí cho mỗi lần biên dịch mãi mãi.

## Chỉ biên dịch chương hiện tại

Nếu các chương của bạn tồn tại trong các tệp riêng biệt được kéo bằng `\include`, thì lệnh `\includeonly` sẽ hạn chế việc xây dựng các tệp bạn đặt tên:

```latex
\includeonly{chapters/04-results}
```

Đặt nó vào phần mở đầu và LaTeX chỉ biên dịch chương đó trong khi đọc các tệp `.aux` của những chương khác, vì vậy số trang và tham chiếu chéo từ phần còn lại của tài liệu vẫn gần đúng. Đây là khoản tiết kiệm lớn nhất cho một luận án, thường xuyên biến bản dựng dài một phút thành giây. Nó chỉ hoạt động với `\include` chứ không phải `\input`, đây là một trong những lý do để cấu trúc các tài liệu dài như được mô tả trong [chia tài liệu thành các tệp](/learn/split-chapter-files/).

## Cache hình ảnh đắt tiền

Hình ảnh TikZ được vẽ lại từ đầu trong mỗi lần biên dịch. Thư viện `external`, được tải bằng `\usetikzlibrary{external}` cộng với `\tikzexternalize`, biên dịch từng ảnh thành tệp PDF của chính nó một lần và sử dụng lại cho đến khi mã thay đổi. Thiết lập có các cạnh sắc nét và giải pháp thay thế thủ công là di chuyển các ảnh lớn thành các tệp độc lập cũng hoạt động tốt; cả hai đều được đề cập trong [TikZ sang PDF hoặc PNG độc lập](/learn/tikz-export/).

## Ít đường chuyền hơn, sắt nhanh hơn

Việc phân giải thư mục và tham chiếu chéo cần thực hiện nhiều lần, nhưng trong khi soạn thảo văn xuôi, bạn hiếm khi cần đến chúng, vì vậy chỉ cần thực hiện một bước nhanh là đủ và toàn bộ trình tự có thể đợi cho đến khi bạn kiểm tra tài liệu tham khảo. Phần cứng và vị trí cũng quan trọng: một công cụ cục bộ biên dịch trên CPU của riêng bạn mà không cần tải lên hoặc xếp hàng, đó là cách Oleafly chạy các bản dựng.

Áp dụng `\includeonly` và các số liệu phác thảo cùng nhau và thậm chí một luận điểm lớn thường hoàn thành sau vài giây, đó là thời điểm bạn bắt đầu biên dịch lại sau mỗi đoạn văn.