---

title: "Các trang tiếng La Mã rồi tiếng Ả Rập"
description: "Vấn đề đánh số trước mà các ủy ban vẫn mong đợi."
category: "long-form"
order: 2
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Trang La Mã rồi tiếng Ả Rập

Mở hầu hết mọi luận văn hoặc sách giáo khoa và bạn sẽ thấy quy ước tương tự: trang tiêu đề, tóm tắt, mục lục và lời cảm ơn được đánh số i, ii, iii bằng chữ số La Mã viết thường, và sau đó chương thực đầu tiên bắt đầu lại ở trang 1 bằng số Ả Rập thông thường. Vấn đề phía trước được xử lý như một trình tự sơ bộ, riêng biệt và các trường sau đại học kiểm tra quy ước này một cách rõ ràng. Trong LaTeX cần chính xác hai lệnh.

## Mẫu hình

```latex
\begin{document}
\pagenumbering{roman}
\maketitle
\tableofcontents
\pagenumbering{arabic}
\chapter{Introduction}
...
\end{document}
```

`\pagenumbering{roman}` thực hiện hai việc cùng một lúc: nó chuyển kiểu chữ số sang chữ La Mã thường và đặt lại bộ đếm trang về 1, do đó trang tiêu đề trở thành trang i. Mọi thứ bạn đặt sau nó, thường là `\maketitle`, phần tóm tắt, [mục lục](/learn/table-of-contents/) và bất kỳ danh sách hình hoặc bảng nào, đều được đánh số ii, iii, iv, v.v.

Sau đó, ngay trước chương đầu tiên, `\pagenumbering{arabic}` chuyển kiểu trở lại và đặt lại bộ đếm, vì vậy `\chapter{Giới thiệu}` sẽ mở ra trên một trang mới 1. Việc đặt lại là toàn bộ vấn đề: nếu không có nó, phần giới thiệu của bạn sẽ bắt đầu ở trang 7, đây không phải là điều mà các ủy ban hoặc hội nghị trích dẫn mong đợi.

Bởi vì `\chapter` trong lớp `book` và `report` luôn bắt đầu một trang mới, bạn không cần có `\newpage` rõ ràng trước khi chuyển đổi. Trong lớp không có chương, trước tiên bạn phải thêm `\clearpage` để thay đổi đánh số không xuất hiện ở giữa trang.

## Lớp học làm việc đó cho bạn

Một số lớp luận án cung cấp `\frontmatter` / `\mainmatter` / `\backmatter`. Chúng đến từ lớp `book` và là cách cấp cao hơn để nói điều tương tự. `\frontmatter` chuyển sang đánh số La Mã và làm cho các chương không được đánh số (vì vậy Lời nói đầu không có nhãn "Chương 1"). `\mainmatter` chuyển sang tiếng Ả Rập và khôi phục các chương được đánh số. `\backmatter` tắt tính năng đánh số chương một lần nữa đối với tài liệu giống như phụ lục ở cuối. Nếu mẫu của trường đại học của bạn được xây dựng trên `sách` hoặc ` hồi ký`, hãy ưu tiên các lệnh này hơn `\đánh số trang` thô, vì mẫu có thể gắn thêm hành vi vào chúng, chẳng hạn như các tiêu đề khác nhau cho nội dung phía trước. Hai cách tiếp cận này không xung đột nhau, nhưng không có lý do gì để sử dụng cả hai.

## Một điều cần kiểm tra

Các trang đánh số La Mã phải phù hợp với mục lục của bạn. Nếu phần tóm tắt của bạn hiển thị là trang "iv" trong ToC nhưng được in là "2", thì nguyên nhân thông thường là lệnh gọi `\pagenumbering` được đặt sau nội dung mà lẽ ra nó phải che phủ hoặc thiếu phần biên dịch thứ hai: số trang trong ToC đến từ tệp `.aux`, vì vậy bạn cần [biên dịch hai lần](/learn/compile-to-pdf/) trước khi đánh giá xem cách đánh số có đúng hay không. Biên dịch, biên dịch lại, sau đó so sánh ToC với các trang thực tế.