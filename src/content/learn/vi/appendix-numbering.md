---

title: "Phụ lục được đánh số lại rõ ràng"
description: "phụ lục, chương A/B, bộ đếm luôn nhất quán."
category: "long-form"
order: 3
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Phụ lục được đánh số lại rõ ràng

Phần phụ lục chứa tài liệu hỗ trợ nội dung chính nhưng có thể làm gián đoạn nội dung: các bằng chứng dài, công cụ khảo sát, bảng bổ sung, chi tiết triển khai. Người đọc mong đợi các phụ lục sẽ được đánh chữ A, B, C thay vì tiếp tục đánh số chương và mong đợi tài liệu bên trong cũng tuân theo, vì vậy hình trong Phụ lục A là Hình A.1 chứ không phải Hình 47. Trong LaTeX đó là một công tắc chuyển đổi đơn lẻ, không phải là công việc tái cấu trúc.

## Công tắc

```latex
\appendix
\chapter{Extra proofs} % becomes Appendix A
\section{Lemma details}
```

`\appendix` là một khai báo, không phải là môi trường: không có gì để đóng. Từ điểm nó xuất hiện, bộ đếm phân chia sẽ được đặt lại và chuyển sang các chữ cái. Trong các lớp `báo cáo` và `sách`, mỗi `\chapter` sau nó trở thành Phụ lục A, Phụ lục B, v.v., và `\section` bên trong trở thành A.1. Bạn vẫn chỉ viết tiêu đề của riêng mình; nhãn "Phụ lục A" và chữ đến từ lớp, chính xác như số chương trước khi chuyển đổi.

Trong `bài viết` không có chương, thay vào đó, `\appendix` sẽ gắn nhãn lại `\section`: phần đầu tiên sau khi nó trở thành Phụ lục A. Mọi thứ ở phía dưới vẫn tự động nhất quán. Mục lục liệt kê các tiêu đề được đánh chữ và `\label` được đặt trong phụ lục phân giải từ `\ref` thành "A" hoặc "A.2" mà không cần xử lý đặc biệt nào.

## Cái gì đánh số lại và cái gì không

Trong `báo cáo` và `sách`, các hình, bảng, phương trình được đánh số trong các chương nên không mất chữ: hình đầu tiên của Phụ lục B là Hình B.1. Trong `bài viết`, các bộ đếm đó chạy liên tục trong toàn bộ tài liệu và `\phụ lục` không chạm vào chúng, vì vậy việc đánh số phương trình chỉ đơn giản là tiếp tục. Đó là điều bình thường đối với một bài viết ngắn; chỉ đấu tranh nếu một địa điểm yêu cầu rõ ràng các số có tiền tố A.

## Khi bạn muốn nhiều hơn nữa

Gói `phụ lục` bổ sung thêm các cải tiến mà công tắc đơn giản còn thiếu. Môi trường `phụ lục` của nó có thể in từ "Phụ lục" trong mỗi tiêu đề và trong mục lục (`\usepackage[toc,titletoc,title]{appendix}`) và nó có thể chèn một trang phân cách thông báo các phụ lục. Đối với một luận án có mẫu chưa xử lý được vấn đề này, các tùy chọn đó sẽ giúp bạn không phải thực hiện thao tác thủ công.

Một lỗi phổ biến là tự mình viết nhãn vào tiêu đề, như trong `\chapter{Phụ lục A: Chứng minh bổ sung}`. Lớp này thêm nhãn riêng của mình, do đó kết quả đầu ra có nội dung "Phụ lục A Phụ lục A: Bằng chứng bổ sung". Chỉ đặt tiêu đề cho tiêu đề và để bộ máy đánh số thực hiện công việc của nó. Nếu bạn có một phụ lục duy nhất thì "Phụ lục A" duy nhất là một câu hỏi về văn phong; hầu hết các địa điểm đều chấp nhận nó và một số địa điểm thích một `\chapter*{Phụ lục}` không có chữ cái.