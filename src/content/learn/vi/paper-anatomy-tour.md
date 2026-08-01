---

title: "Một tờ giấy, từ trên xuống dưới"
description: "Một chuyến tham quan từng phần của bài nghiên cứu và công việc của từng phần."
category: "paper-anatomy"
order: 1
level: "beginner"
tags: ["writing", "structure"]
featured: false
updated: 2026-07-25
---

# Một tờ giấy, từ trên xuống dưới

Các tài liệu nghiên cứu trông có vẻ đáng sợ cho đến khi bạn nhận ra rằng chúng được lắp ráp từ hàng chục bộ phận giống nhau, theo thứ tự gần như giống nhau, mọi lúc. Khi đã biết công việc của từng bộ phận, bạn có thể đọc và viết bài nhanh hơn mà không cần nhìn vào trang giấy trắng. Đây là chuyến tham quan.

## Vấn đề phía trước

| Phần | Đó là một công việc |
|---|---|
| Tiêu đề | Làm cho người đọc bên phải ngừng cuộn. |
| Tác giả | Nói ai đã thực hiện công việc và gửi email cho ai. |
| Tóm tắt | Bán toàn bộ bài báo trong 150-250 từ. |
| Từ khóa | Giúp các công cụ tìm kiếm và người lập chỉ mục gửi thông tin cho bạn một cách chính xác. |

Tiêu đề và bản tóm tắt đóng vai trò quan trọng nhất trong việc tuyển dụng. Chín mươi phần trăm độc giả tiềm năng của bạn sẽ không thấy gì khác, đó là lý do tại sao [bản tóm tắt có bài học riêng](/learn/write-an-abstract/) và [trang tiêu đề có cơ chế LaTeX riêng](/learn/title-page/).

## Cơ thể

| Phần | Đó là một công việc |
|---|---|
| Giới thiệu | Giải thích tại sao vấn đề lại quan trọng và những gì bạn đóng góp. |
| Công việc liên quan | Định vị công việc của bạn trong số mọi thứ đã có trước đó. |
| Phương pháp | Mô tả những gì bạn đã làm đủ chính xác để tái tạo. |
| Thí nghiệm / kết quả | Đưa ra bằng chứng cho thấy phương pháp này có hiệu quả. |
| Thảo luận | Giải thích bằng chứng một cách trung thực, kể cả những điểm yếu. |
| Kết luận | Trình bày lại điều đã rút ra và chỉ ra điều tiếp theo. |

Nội dung là một lập luận được trình bày theo từng giai đoạn: đây là một vấn đề, đây là ý tưởng của chúng tôi, đây là bằng chứng cho thấy nó hoạt động, đây là ý nghĩa của nó. Nếu một phần không thúc đẩy đối số đó thì đó là phần đệm. Xem [phần giới thiệu và công việc liên quan](/learn/introduction-and-rel-work/) và [phần phòng máy](/learn/methods-results-discussion/) để biết thêm về từng phần.

## Vấn đề phía sau

| Phần | Đó là một công việc |
|---|---|
| Lời cảm ơn | Cảm ơn các nhà tài trợ, người trợ giúp và người đánh giá dự thảo. |
| Tài liệu tham khảo | Liệt kê mọi nguồn bạn đã trích dẫn, được định dạng theo quy định của địa điểm. |
| Phụ lục | Giữ lại các bằng chứng, bảng bổ sung và các chi tiết có thể làm gián đoạn dòng chảy. |
| Tài liệu bổ sung | Mang mã, dữ liệu và video không phù hợp với tệp PDF. |

Tài liệu tham khảo không phải là vật trang trí, chúng là dấu vết bằng chứng cho tuyên bố của bạn. Xem [chú thích cuối trang, tài liệu tham khảo và phụ lục](/learn/footnotes-references-appendix/) để biết ai đọc nội dung gì và [các trích dẫn](/learn/add-cites/) để biết cơ chế LaTeX.

## Bộ xương trong LaTeX

Hầu hết điều này ánh xạ trực tiếp đến các lệnh bạn đã biết:

```latex
\title{A Catchy but Honest Title}
\author{First Author \and Second Author}
\maketitle
\begin{abstract}
One paragraph that sells everything below.
\end{abstract}
\section{Introduction}
```

Các lệnh phân đoạn xử lý việc đánh số và mục lục cho bạn, như được đề cập trong [các phần và cấu trúc](/learn/sections/).

## Đi đâu tiếp theo

Nếu bạn là người mới làm quen với thể loại bài báo, hãy bắt đầu với [thực tế bài báo nghiên cứu là gì](/learn/what-is-a-research-paper/). Nếu bạn chuẩn bị viết một phần thì phần còn lại của bài viết này sẽ trình bày từng phần theo thứ tự, từ [tóm tắt](/learn/write-an-abstract/) cho đến [bạn thực sự cần bao nhiêu môn toán](/learn/how-much-math/). Đọc phần bạn đang mắc kẹt, viết nó và lặp lại.