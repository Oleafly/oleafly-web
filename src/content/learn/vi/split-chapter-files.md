---

title: "Một tập tin gốc, nhiều chương"
description: "bao gồm so với đầu vào, chỉ bao gồm và soạn thảo từng chương một."
category: "long-form"
order: 1
level: "intermediate"
tags: ["thesis"]
featured: true
updated: 2026-07-25
---

# Một file gốc, nhiều chương

Một luận điểm trong một tệp `.tex` sẽ trở nên khó khăn khi làm việc ở đâu đó trong chương thứ hai: việc cuộn thay thế suy nghĩ và mọi trình biên dịch đều xử lý mọi thứ. Cách chữa tiêu chuẩn là một tệp gốc chứa lớp và phần mở đầu, với mỗi chương trong tệp riêng của nó. Tệp gốc ghép chúng lại với nhau.

## Tệp gốc

```latex
% main.tex
\documentclass{report}
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

`main.tex` là tệp duy nhất bạn từng biên dịch. Mỗi `\include` đặt tên cho một tệp khác mà không có phần mở rộng `.tex`, sử dụng dấu gạch chéo lên trên mọi nền tảng và kéo nội dung của nó vào tại thời điểm đó. Bản thân các tệp chương chỉ chứa nội dung, thường bắt đầu bằng `\chapter{...}`. Chúng không có môi trường `\documentclass` và không có `document` của riêng mình, bởi vì chúng là các mảnh của tài liệu này, không phải tài liệu.

## bao gồm so với đầu vào

Hai lệnh bao gồm hoạt động khác nhau và sự khác biệt sẽ quyết định nên sử dụng lệnh nào ở đâu. `\include` bắt đầu một trang mới trước tài liệu phù hợp với các chương và viết một tệp `.aux` riêng cho mỗi tệp được bao gồm, đây là điều giúp có thể biên dịch có chọn lọc. `\input` là một văn bản dán đơn giản: không ngắt trang, không có `.aux` riêng biệt và nó có thể được lồng bên trong một đầu vào khác. Điều đó làm cho `\input` trở thành công cụ phù hợp cho các đoạn nhỏ hơn một chương, chẳng hạn như một bảng lớn được lưu trong tệp riêng của nó hoặc [tệp macro](/learn/custom-commands/). Một quy tắc cấu trúc cần nhớ là `\include` không thể được lồng bên trong một tệp được bao gồm, trong khi `\input` có thể được sử dụng ở bất cứ đâu.

## Soạn thảo từng chương một

```latex
\includeonly{chapters/methods}
```

Được đặt trong phần mở đầu, `\includeonly` yêu cầu LaTeX chỉ xử lý các tệp được liệt kê trong khi vẫn đọc dữ liệu `.aux` đã lưu của tất cả các tệp khác. Quá trình biên dịch nhanh hơn đáng kể và vì nhãn và số trang của các chương khác được phát lại từ các tệp `.aux` của chúng nên các tham chiếu chéo và đánh số trong chương bạn đang soạn thảo vẫn chính xác. Nửa sau đó là lý do để thích điều này hơn là nhận xét các dòng `\include`, nó hoàn toàn quên mất các chương khác và biến mọi `\ref` thành chúng thành `??`.

Nhận xét dòng `\includeonly` dành cho các bản dựng đầy đủ và luôn chạy một bản biên dịch hoàn chỉnh trước khi chia sẻ tệp PDF, vì dữ liệu `.aux` cũ có thể bị tụt hậu so với các chỉnh sửa được thực hiện trong các chương bị loại trừ. Để biết tệp nào trong thư mục kết quả là của bạn và tệp nào được tạo, hãy xem [các tệp trong dự án thực tế](/learn/latex-file-types/).