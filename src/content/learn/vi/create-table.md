---

title: "Một cái bàn trông giống như một cái bàn giấy"
description: "dạng bảng, quy tắc booktabs, chú thích, nhãn."
category: "floats-and-ink"
order: 1
level: "beginner"
tags: ["tables"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Tables check'
  questions:
    - prompt: 'Which environment builds the cell grid in a classic LaTeX table?'
      choices:
        - 'figure'
        - 'tabular'
        - 'itemize'
        - 'equation'
      answer: 'B'
      level: beginner
    - prompt: 'What is booktabs mainly for?'
      choices:
        - 'Drawing TikZ trees'
        - 'Clean horizontal rules (top, mid, bottom) instead of a heavy grid'
        - 'Building bibliographies'
        - 'Inline math spacing'
      answer: 'B'
      level: beginner
    - prompt: 'Where do \caption and \label usually go for a table float?'
      choices:
        - 'Only in the preamble'
        - 'Inside the table float, with the label after the caption'
        - 'After \end{document}'
        - 'In a separate .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'In a tabular column spec, what does l mean?'
      choices:
        - 'Landscape page'
        - 'Left-aligned column'
        - 'Large font'
        - 'Equation label column'
      answer: 'B'
      level: beginner
---

# Cái bàn trông giống cái bàn giấy

Các bảng trong LaTeX sử dụng hai môi trường lồng nhau với các công việc khác nhau. `Bảng` bên trong xây dựng lưới ô. `Bảng` bên ngoài làm cho lưới đó nổi lên, do đó, nó có thể mang một số, chú thích và nhãn, đồng thời LaTeX có thể đặt nó ở nơi trang có chỗ. Thêm gói `booktabs` cho các quy tắc ngang và kết quả trông giống như một bảng từ một bài báo đã xuất bản chứ không phải ảnh chụp màn hình bảng tính.

```latex
\usepackage{booktabs}
\begin{table}[htbp]
 \centering
 \caption{Results on the test set.}
 \label{tab:results}
 \begin{tabular}{lcc}
 \toprule
 Model & Acc. & F1 \\
 \midrule
 Baseline & 0.81 & 0.79 \\
 Ours & 0.87 & 0.86 \\
 \bottomrule
 \end{tabular}
\end{table}
```

##Môi trường bên ngoài

Danh sách đối số `[htbp]` trong đó LaTeX có thể đặt phần nổi: ở đây trong văn bản, ở đầu trang, ở cuối trang hoặc trên một trang nổi riêng biệt. Nó thử chúng theo thứ tự đó, và việc chấp nhận cả bốn thứ sẽ giữ cho bàn không bị trôi đi xa; cơ chế hoạt động được giải thích trong [nơi phao thực sự hạ cánh](/learn/position-figures/). `\centering` căn giữa lưới theo chiều ngang. `\caption` in chú thích được đánh số và theo quy ước, chú thích của bảng nằm phía trên bảng, không giống như chú thích của hình, nằm ở bên dưới. `\nhãn` phải đứng sau `\caption`, vì nhãn ghi lại số được phát hành gần đây nhất, như được nêu trong [chú thích và nhãn](/learn/captions-labels/). Với nhãn đã có sẵn, `Table~\ref{tab:results}` trong văn bản của bạn luôn in đúng số.

## Lưới bên trong

`{lcc}` sau `\begin{tabular}` khai báo một cột cho mỗi chữ cái: `l` được căn trái, `c` được căn giữa và `r` sẽ được căn phải. Ba chữ cái có nghĩa là ba cột và mỗi hàng phải cung cấp chính xác số ô đó. Trong một hàng, `&` phân tách các ô và `\\` kết thúc hàng. Các cột văn bản thường được căn trái tốt nhất, trong khi các cột số ngắn thường được căn giữa.

Ba quy tắc đến từ `booktabs`. `\toprule` mở bảng, `\midrule` tách hàng tiêu đề khỏi dữ liệu và `\bottomrule` đóng nó. Chúng thay thế lệnh `\hline` đơn giản và đi kèm với khoảng cách được điều chỉnh chính xác ở trên và dưới, đó là lý do tại sao bảng trông có vẻ chuyên nghiệp. Không có đường dọc và không có quy tắc giữa các hàng dữ liệu: kiểu `booktabs` cố tình loại bỏ cả hai. Lý do được trình bày trong [bảng ba quy tắc](/learn/booktabs-beautiful/).

## Ghi chú thực tế

Các lỗi thường gặp nhất dành cho người mới bắt đầu là sự không khớp giữa số lượng dấu phân cách `&` và các cột được khai báo, đồng thời quên `\\` ở cuối hàng, cả hai đều tạo ra thông báo lỗi khó hiểu khi trỏ vào dòng tiếp theo. Nếu bạn không muốn đếm các ô bằng tay, hãy xây dựng lưới một cách trực quan bằng [trình tạo bảng](/tools/table-generator/) và dán kết quả vào tài liệu của bạn.