---

title: "Lệnh hay môi trường?"
description: "Macro lấy đối số; môi trường bao bọc các vùng."
category: "desk-reference"
order: 2
level: "beginner"
tags: ["basics"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Commands vs environments'
  questions:
    - prompt: 'What makes something a LaTeX command?'
      choices:
        - 'It always wraps many pages'
        - 'A backslash name that substitutes something in place, often with brace arguments'
        - 'It has to live in a .bib file'
        - 'It can''t take optional arguments'
      answer: 'B'
      level: beginner
    - prompt: 'What defines an environment?'
      choices:
        - 'A matching \begin{name} ... \end{name} pair around a region'
        - 'Any bold text'
        - 'Only math mode'
        - 'A single optional star'
      answer: 'A'
      level: beginner
    - prompt: 'Which of these is an environment?'
      choices:
        - '\textbf{hello}'
        - '\begin{center} ... \end{center}'
        - '\cite{knuth84}'
        - '\frac{a}{b}'
      answer: 'B'
      level: beginner
    - prompt: 'What does \begin{itemize} ended by \end{document} usually mean?'
      choices:
        - 'itemize is banned in article'
        - 'You opened an environment and never closed it'
        - 'You need more RAM'
        - 'The bibliography is empty'
      answer: 'B'
      level: beginner
    - prompt: 'Why write \LaTeX{} is fun instead of \LaTeX is fun?'
      choices:
        - 'Every command needs braces'
        - 'Many commands eat the following space; empty braces keep the space'
        - 'It turns hyperref on'
        - 'It forces math mode'
      answer: 'B'
      level: intermediate
---

# Lệnh hay môi trường?

Mọi thứ bạn nhập vào LaTeX ngoài văn bản thuần túy đều có một trong hai hình dạng: lệnh hoặc môi trường. Sự khác biệt nghe có vẻ hàn lâm cho đến khi bạn gặp phải thông báo lỗi đầu tiên. Một nửa số khiếu nại của LaTeX là về việc một cái được sử dụng ở nơi còn lại. Học cách xem bạn đang xem hình dạng nào làm cho cả tài liệu và lỗi đều có thể đọc được.

## Lệnh

```latex
\newcommand{\foo}{bar}
\foo
\textbf{argument}
```

Lệnh là dấu gạch chéo ngược theo sau là tên và nó thực hiện thay thế tại điểm xuất hiện. `\textbf{argument}` nhận một đối số trong dấu ngoặc nhọn và sắp chữ in đậm; hiệu ứng bắt đầu và kết thúc bằng dấu ngoặc nhọn. Các lệnh có thể nhận nhiều đối số trong dấu ngoặc nhọn và nhiều lệnh cũng chấp nhận một đối số tùy chọn trong dấu ngoặc vuông trước chúng, như trong `\documentclass[11pt]{article}`.

Hai dòng đầu tiên cho thấy lệnh là thứ bạn có thể tạo. `\newcommand{\foo}{bar}` định nghĩa một lệnh mới có tên `\foo` có phần mở rộng là văn bản `bar`, và từ đó gõ `\foo` ở bất cứ đâu sẽ tạo ra `bar`. Đây là cơ chế đằng sau [macro tùy chỉnh](/learn/custom-commands/) và cũng là cách các gói hoạt động: một gói phần lớn là một tệp chứa các định nghĩa lệnh.

Một điều kỳ lạ đáng để biết sớm: một lệnh như `\LaTeX` nuốt chửng khoảng trắng sau nó, vì vậy `\LaTeX is fun` in các từ chạy cùng nhau. Viết `\LaTeX{} is fun` hoặc `\LaTeX\ is` để giữ chỗ.

## Môi trường

```latex
\begin{center}
 Centered block
\end{center}
```

Một môi trường bao bọc một vùng của tài liệu giữa cặp `\begin{...}` và `\end{...}` phù hợp và áp dụng hành vi của nó cho mọi thứ bên trong. Ở đây môi trường `center` tập trung vào từng dòng của khối. Các môi trường có thể được lồng vào nhau, miễn là chúng đóng theo thứ tự ngược lại khi mở và chúng cũng có thể nhận các đối số: `\begin{tabular}{ll}` mở một bảng và chuyển cho nó một đặc tả cột.

Bởi vì môi trường phải cân bằng nên chúng thất bại theo một cách đặc biệt. Lỗi chẳng hạn như `\begin{itemize} kết thúc bằng \end{document}` có nghĩa là một môi trường đã được mở và chưa bao giờ đóng. Tìm `\end` còn thiếu; đừng nhìn chằm chằm vào dòng tên lỗi.

## Nguyên tắc chung

Nếu nó bao bọc một vùng có điểm bắt đầu và kết thúc rõ ràng thì đó có thể là một môi trường. Nếu đó là một sự thay thế nhỏ hoặc một sự chuyển đổi thì đó là một lệnh. Hai hình dạng thậm chí còn chồng chéo lên nhau: mọi môi trường `foo` được triển khai dưới dạng một cặp lệnh `\foo` và `\endfoo` bên dưới. Để tham quan các lệnh và môi trường mà bạn sẽ gặp nhiều nhất, hãy xem [mọi lệnh được giải thích](/learn/every-command-explained/) hoặc thử cả hai hình dạng trong [sân chơi trực tiếp](/live/).