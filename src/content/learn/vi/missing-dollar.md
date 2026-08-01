---

title: "Thiếu đô la được chèn vào"
description: "Các chỉ số và lệnh toán học bị rò rỉ sang chế độ văn bản."
category: "log-literacy"
order: 2
level: "beginner"
tags: ["errors", "math"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Missing dollar check'
  questions:
    - prompt: 'What does Missing $ inserted usually mean?'
      choices:
        - 'You need a payment method'
        - 'Math-only syntax showed up in text mode'
        - 'A PDF font license expired'
        - 'You forgot \maketitle'
      answer: 'B'
      level: beginner
    - prompt: 'Which characters often trigger this in text mode?'
      choices:
        - 'Comma and period'
        - 'Underscore _ and caret ^ (and many math commands)'
        - 'Space and tab'
        - 'The @ in every email address'
      answer: 'B'
      level: beginner
    - prompt: 'How do you print a literal underscore in text (say a gene name)?'
      choices:
        - 'DNA_seq unchanged'
        - 'DNA\_seq'
        - 'DNA\&seq'
        - 'DNA\section{seq}'
      answer: 'B'
      level: beginner
    - prompt: 'The flagged line looks fine. What should you check next?'
      choices:
        - 'Printer drivers'
        - 'An earlier unclosed $ or mismatched math delimiters above that line'
        - 'Only the bibliography style'
        - 'Whether the file is named main.tex'
      answer: 'B'
      level: intermediate
    - prompt: 'Why isn''t a successful PDF proof the error was harmless?'
      choices:
        - 'PDFs never show math'
        - 'LaTeX often recovers by inserting $, which leaves wrong italics or spacing'
        - 'Compilers ignore all errors'
        - 'SyncTeX deletes the log'
      answer: 'B'
      level: beginner
---

# Thiếu đô la được chèn vào

"Thiếu $ được chèn" là lỗi LaTeX phổ biến nhất và tên của nó gây hiểu nhầm: LaTeX không yêu cầu bạn tiêu tiền mà cho bạn biết rằng cú pháp chỉ toán học xuất hiện ở chế độ văn bản. Nó tự chèn `$` để khôi phục, tiếp tục biên dịch và thường để lại kết quả in nghiêng kỳ lạ ở cuối dòng, vì vậy thông báo xứng đáng được sửa chữa thực sự hơn là một cái nhún vai.

```latex
% bad
DNA_seq
% good
DNA\_seq
$x_i$
```

## Điều gì gây ra nó

Hai ký tự và một lớp lệnh chỉ thuộc về chế độ toán học. Dấu gạch dưới `_` và dấu mũ `^` tạo chỉ số dưới và chỉ số trên, đồng thời các lệnh như `\alpha`, `\frac` và `\leq` tạo ra các ký hiệu toán học. Bất kỳ trong số chúng ở dạng văn bản thuần túy đều gây ra lỗi. Trường hợp cổ điển là một mã định danh chứa dấu gạch dưới, chẳng hạn như tên tệp hoặc tên gen: `DNA_seq` trong một câu ngắt quãng trên `_`.

Việc sửa chữa phụ thuộc vào ý của bạn. Nếu dấu gạch dưới là ký tự chữ, hãy thoát khỏi nó: `DNA\_seq` in tên bằng dấu gạch dưới thực. Nếu bạn muốn nói đến chỉ số dưới, thì bạn có nghĩa là toán học, vì vậy, hãy gói biểu thức: `$x_i$` đặt dấu x với chỉ số dưới i, in nghiêng toán học với khoảng cách chính xác. Danh sách đầy đủ các ký tự cần thoát trong văn bản có [bài học riêng](/learn/special-characters/) và bản thân các dấu phân cách toán học cũng được đề cập trong [các khái niệm cơ bản về chế độ toán học](/learn/math-mode/).

## Khi nhật ký trỏ đến một nơi nào đó lạ

Số dòng được báo cáo là nơi LaTeX nhận thấy sự cố, không nhất thiết là do bạn gây ra sự cố. Thủ phạm thông thường là một `$` chưa được tiết lộ trước đó: bạn đã mở chế độ toán học và không bao giờ đóng nó, vì vậy LaTeX vẫn tiếp tục ở chế độ toán học cho đến khi có điều gì đó buộc phải xảy ra sự cố, thường là ở cuối đoạn văn. Một dòng trống bên trong phép toán hiển thị sẽ gây ra lỗi tương tự, vì việc ngắt đoạn là không hợp lệ trong chế độ toán học. Vì vậy, khi dòng được gắn cờ trông có vẻ vô hại, hãy quét lên trên để tìm số lẻ ký hiệu đô la và kiểm tra xem mọi `\[` có khớp với `\]` hay không.

Làm nổi bật cú pháp là cách nhanh chóng để phát hiện lỗi chạy trốn: bất kỳ trình soạn thảo LaTeX nào cũng tô màu các vùng toán học khác nhau, do đó, một đoạn văn đột nhiên hiển thị bằng màu toán học sẽ xác định chính xác đồng đô la chưa được tiết lộ trong nháy mắt.

Lưu ý cuối cùng: vì LaTeX phục hồi bằng cách chèn `$` bị thiếu nên một bản PDF thường vẫn được tạo. Đừng lấy bản PDF làm bằng chứng cho thấy lỗi đó là vô hại. Đầu ra được khôi phục thường có chữ nghiêng lệch lạc hoặc khoảng cách bị sai ở vị trí lẽ ra phải có văn bản của bạn, vì vậy hãy sửa nguồn cho đến khi nhật ký sạch sẽ.