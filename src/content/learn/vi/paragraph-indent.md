---

title: "Thụt lề hoặc khoảng trắng giữa các đoạn văn"
description: "parindent, parskip, noindent cho một dòng."
category: "the-page"
order: 5
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Thụt lề hoặc khoảng cách giữa các đoạn văn

Kiểu chữ có hai cách tiêu chuẩn để hiển thị nơi một đoạn kết thúc và đoạn tiếp theo bắt đầu: thụt lề dòng đầu tiên của mỗi đoạn mới hoặc để lại khoảng trống dọc giữa các đoạn không thụt lề. Sách và tạp chí hầu như luôn sử dụng đầu tiên. Các trang web và tài liệu kinh doanh sử dụng thứ hai. LaTeX mặc định tuân theo quy ước sách, thụt lề mọi đoạn ngoại trừ đoạn đầu tiên sau tiêu đề phần, không có khoảng cách thừa giữa các đoạn. Nếu bạn muốn kiểu khác, bạn thay đổi hai độ dài.

## Hai chiều dài kiểm soát mọi thứ

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{0.8em} % space between paragraphs instead
```

`\parindent` là chiều rộng của thụt lề dòng đầu tiên. Đặt nó thành `0pt` với `\setlength` sẽ loại bỏ vết lõm ở mọi nơi. `\parskip` là khoảng trắng theo chiều dọc được chèn giữa các đoạn văn, thường bằng 0 (cộng với một chút giãn ra); đặt nó thành `0,8em` sẽ tạo ra một khoảng trống rõ ràng, ít hơn một chút so với một dòng trống đầy đủ. Đơn vị `em` chia tỷ lệ theo kích thước phông chữ, giữ khoảng cách tỷ lệ nếu sau này bạn thay đổi [cỡ chữ](/learn/font-size/). Đặt cả hai dòng trong phần mở đầu và toàn bộ tài liệu tuân theo kiểu khối.

Nếu bạn đi theo con đường này, hãy lưu ý rằng một thay đổi `\parskip` đơn giản cũng kéo dài không gian xung quanh các tiêu đề phần, danh sách các mục và mục lục, bởi vì chúng cũng được xây dựng từ các đoạn văn. Đối với bất kỳ nội dung nào dài hơn một ghi chú ngắn, việc tải gói `parskip` (`\usepackage{parskip}`) sẽ áp dụng kiểu tương tự trong khi vá các tác dụng phụ đó cho bạn.

## Loại bỏ một vết thụt lề

Đoạn đơn: đặt `\noindent` ở đầu đoạn, trước từ đầu tiên. Điều này chỉ loại bỏ thụt lề cho một đoạn văn đó và rất hữu ích sau một phương trình được hiển thị, danh sách mã hoặc bảng khi văn bản sau đây là phần tiếp theo của cùng một suy nghĩ chứ không phải là một đoạn văn mới. Tình huống ngược lại, buộc thụt lề trong đó LaTeX bỏ qua một đoạn (chẳng hạn như đoạn đầu tiên sau tiêu đề), được xử lý bằng gói `indentfirst` nhỏ thay vì sửa thủ công.

Trong khi chúng ta đang ở đây: một đoạn văn mới trong LaTeX được tạo bởi một dòng trống trong nguồn chứ không phải bởi `\\`. Lệnh `\\` là ngắt dòng trong cùng một đoạn và việc sử dụng lệnh này để làm giả khoảng cách giữa các đoạn sẽ tạo ra các cảnh báo không đầy đủ và các khoảng trống không đồng đều. [Bài học về đoạn văn và dòng mới](/learn/paragraphs-newlines/) đề cập đầy đủ đến sự khác biệt này.

## Chọn một kiểu và giữ nó

Chọn kiểu thụt lề ** hoặc ** parskip và giữ sự nhất quán. Hai quy ước này là những lựa chọn thay thế, không phải các lớp: các đoạn thụt lề với khoảng cách lớn giữa chúng trông giống như một bản nháp và thụt lề 0 với khoảng cách bằng 0 khiến người đọc không thể biết đoạn văn bắt đầu từ đâu. Nếu bạn đang viết cho một tạp chí hoặc hội nghị, đừng thay đổi độ dài; tệp lớp đã triển khai lựa chọn của nhà xuất bản và ghi đè của bạn sẽ là điều đầu tiên mà trình chỉnh sửa bố cục hoàn nguyên.