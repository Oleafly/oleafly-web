---

title: "TOC, danh sách hình, danh sách bảng"
description: "mục lục và lý do tại sao lượt vượt qua thứ hai lại quan trọng."
category: "paper-bones"
order: 3
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# TOC, danh sách hình, danh sách bảng

Mục lục trong LaTeX không phải là thứ bạn xây dựng hoặc duy trì. Bạn thả một lệnh vào nơi bạn muốn và LaTeX sẽ tập hợp các mục từ các tiêu đề bạn đã viết. Điều tương tự cũng xảy ra với danh sách các hình và danh sách bảng, thu thập chú thích thay vì tiêu đề. Đây là một trong những nơi mà việc khai báo cấu trúc có tác dụng trực tiếp: đổi tên một phần hoặc di chuyển một hình và vấn đề phía trước sẽ tự khắc phục.

## Ba lệnh

```latex
\tableofcontents
\listoffigures
\listoftables
```

`\tableofcontents` in TOC tại điểm nó xuất hiện, thường là ngay sau trang tiêu đề hoặc phần tóm tắt. Mỗi `\chapter`, `\section` và `\subsection` được đánh số sẽ hiển thị cùng với số, tiêu đề và trang, theo độ sâu được thiết lập bởi bộ đếm `tocdeep` được mô tả trong [bài học tiêu đề](/learn/sections/). `\listoffigures` và `\listoftables` thực hiện tương tự đối với chú thích hình và bảng, kéo văn bản từ mỗi `\caption{...}`. Trong các bài viết, chúng không bình thường, nhưng các luận văn thường yêu cầu cả hai, được đặt trên trang riêng của chúng sau TOC.

## Tại sao lượt vượt qua thứ hai lại quan trọng

Biên dịch **hai lần** sau khi thay đổi cấu trúc. Đó không phải là mê tín. Đó là cách cơ chế hoạt động. Trong quá trình biên dịch, LaTeX không thể biết ở trang 2 điều gì sẽ kết thúc ở trang 47, vì vậy, nó ghi mọi tiêu đề và số trang cuối cùng của nó vào một tệp phụ (`.toc`, `.lof`, `.lot`). `\tableofcontents` đọc tệp còn sót lại từ lần chạy trước. Trên một dự án mới, tệp đó chưa tồn tại, do đó, lần biên dịch đầu tiên tạo ra một TOC trống. Sau khi bạn thêm hoặc di chuyển các phần, TOC sẽ hiển thị tiêu đề cũ hoặc số trang sai cho đến lần chạy tiếp theo. Trình biên dịch thứ hai đọc tệp mới được viết và mọi thứ đều được sắp xếp. Các trình soạn thảo chạy latexmk hoặc một trình bao bọc tương đương sẽ xử lý các lần chạy lại cho bạn, đó là lý do tại sao bạn có thể chưa bao giờ nhận thấy. Nếu TOC của bạn có vẻ sai, hãy biên dịch lại một lần nữa trước khi gỡ lỗi bất kỳ điều gì khác.

## Các phần được gắn dấu sao và TOC

Các phần được gắn dấu sao cần có `\addcontentsline{toc}{section}{Title}` nếu chúng xuất hiện trong TOC. Một tiêu đề được gắn dấu sao như `\section*{Lời cảm ơn}` cố tình bỏ qua cả việc đánh số và tệp nội dung, vì vậy nếu bạn muốn nó được liệt kê, bạn hãy tự thêm mục nhập vào. Ba đối số của lệnh là tệp cần ghi vào (`toc`), cấp độ của mục nhập (`section`) và văn bản sẽ hiển thị. Đặt dòng ngay sau tiêu đề có gắn dấu sao sao cho đúng số trang đã ghi.

Một thói quen đáng hình thành: trước khi bạn chia sẻ một bản PDF, hãy xem qua TOC để biết các dấu hiệu nhận biết của một bản dựng cũ, chẳng hạn như dấu chấm hỏi, mục nhập bị thiếu hoặc mục nhập cuối cùng chưa đến chương cuối cùng của bạn. Nó hầu như luôn được chữa khỏi bằng một lần biên dịch nữa. Tự mình bắt thì rẻ hơn là người đánh giá bắt. Các quyền hạn khiêu vũ của tệp phụ tương tự `\ref` và bạn bè, được đề cập trong [tham chiếu chéo](/learn/cross-references/).