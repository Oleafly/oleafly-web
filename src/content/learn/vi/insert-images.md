---

title: "Thả vào một hình"
description: "đồ họa, chiều rộng, đường dẫn, PDF và PNG."
category: "floats-and-ink"
order: 2
level: "beginner"
tags: ["figures"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Figures check'
  questions:
    - prompt: 'Which package gives you \includegraphics?'
      choices:
        - 'amsmath'
        - 'graphicx'
        - 'babel'
        - 'hyperref only'
      answer: 'B'
      level: beginner
    - prompt: 'Why is width=0.8\textwidth a sensible default?'
      choices:
        - 'It always crops the image'
        - 'It scales with the text width, so it still fits if margins change'
        - 'It converts PNG to PDF'
        - 'It turns floating off'
      answer: 'B'
      level: beginner
    - prompt: 'What does float behavior mean for a figure?'
      choices:
        - 'The image is animated'
        - 'LaTeX may move the figure to a better spot on the page, not always right at the source line'
        - 'Images only appear on page 1'
        - 'You can''t add captions'
      answer: 'B'
      level: beginner
    - prompt: 'For plots and diagrams, which format is usually best?'
      choices:
        - 'A full-size 12-megapixel phone JPG'
        - 'Vector PDF (stays sharp when scaled)'
        - 'BMP only'
        - 'Screenshots of equations instead of real math'
      answer: 'B'
      level: beginner
    - prompt: 'Why is [htbp] usually safer than [h] alone?'
      choices:
        - 'It enables color'
        - 'It gives LaTeX fallbacks (here, top, bottom, float page), so figures are less likely to pile up'
        - 'graphicx requires it'
        - 'It turns captions off'
      answer: 'B'
      level: intermediate
---

# Thả vào một hình

LaTeX không có hỗ trợ hình ảnh tích hợp. Tất cả đều xuất phát từ gói `graphicx`, gói này cung cấp lệnh `\includegraphics` và theo quy ước, hình ảnh được bao bọc trong môi trường `figure` để nó có thể mang chú thích và một con số. Đây là mẫu bạn sẽ sử dụng hàng trăm lần:

```latex
\usepackage{graphicx}
\begin{figure}[htbp]
 \centering
 \includegraphics[width=0.8\textwidth]{figures/pipeline.pdf}
 \caption{System overview.}
 \label{fig:pipeline}
\end{figure}
```

## Mỗi dòng làm gì

Dòng `\usepackage{graphicx}` nằm trong phần mở đầu của bạn, trước `\begin{document}` và chỉ cần xuất hiện một lần cho dù bạn đưa vào bao nhiêu hình ảnh.

Môi trường `figure` làm cho hình ảnh nổi, có nghĩa là LaTeX chọn vị trí nó hạ cánh thay vì cố định nó vào vị trí chính xác này trong văn bản. Các chữ cái `[htbp]` là tùy chọn vị trí của bạn: `h` có nghĩa là ở đây mã xuất hiện, `t` có nghĩa là đầu trang, `b` có nghĩa là cuối trang và `p` có nghĩa là một trang nổi riêng biệt. LaTeX thử chúng theo thứ tự đó và chọn trang đầu tiên tạo ra một trang phù hợp. Nếu hình của bạn trôi dạt đến một nơi đáng ngạc nhiên, đó là hành vi nổi bình thường và [nơi phao thực sự hạ cánh](/learn/position-figures/) sẽ giải thích cách thương lượng với nó.

`\centering` căn giữa hình ảnh theo chiều ngang trong khối văn bản. `width=0.8\textwidth` chia tỷ lệ hình ảnh thành 80 phần trăm chiều rộng văn bản trong khi vẫn duy trì tỷ lệ khung hình của nó, điều này hầu như luôn tốt hơn so với việc chỉ định kích thước tuyệt đối tính bằng centimet, vì nó sẽ điều chỉnh nếu lề của tài liệu thay đổi. Đường dẫn tệp liên quan đến thư mục gốc của dự án, vì vậy `figures/pipeline.pdf` có nghĩa là thư mục `figures` bên cạnh tệp `.tex` chính của bạn. Cuối cùng, `\caption` in chú thích được đánh số và `\label` ghi lại số để `\ref{fig:pipeline}` có thể trích dẫn nó từ văn bản. Nhãn phải đứng sau chú thích vì các lý do được nêu trong [captions and labels](/learn/captions-labels/).

## Nên sử dụng định dạng tệp nào

Ưu tiên PDF cho bất kỳ vectơ nào, nghĩa là sơ đồ, sơ đồ và lưu đồ vì đồ họa vector luôn sắc nét ở mọi mức thu phóng và mọi kích thước in. Sử dụng PNG cho ảnh chụp màn hình và các hình ảnh dựa trên pixel khác. JPG có thể được chấp nhận đối với các bức ảnh, trong đó các thành phần nén của nó không thể nhìn thấy được. Tránh nhúng nội dung nặng văn bản làm ảnh chụp màn hình vì nội dung này bị mờ khi in và không thể tìm kiếm được.

Đồng thời thay đổi kích thước các bức ảnh lớn trước khi đưa chúng vào. Một bức ảnh 12 megapixel được hiển thị ở chiều rộng 8 cm sẽ làm phồng tệp PDF và làm chậm mọi quá trình biên dịch, trong khi một phiên bản được giảm tỷ lệ xuống khoảng 300 dpi ở kích thước in của nó trông giống hệt nhau.

##Những sai lầm cần tránh

Đừng chống lại sự nổi vào ngày đầu tiên bằng cách yêu cầu `[h]` một mình. LaTeX thường sẽ từ chối, sau đó đưa hình và mọi thứ đằng sau nó đến cuối chương. Viết `[htbp]`, đặt mã hình gần đoạn tham chiếu đầu tiên đến nó và để các số và tham chiếu thực hiện việc theo dõi cho bạn.