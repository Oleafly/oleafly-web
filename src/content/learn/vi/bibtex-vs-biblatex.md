---

title: "BibTeX cổ điển hoặc biblatex"
description: "Phần phụ trợ, phong cách và những gì thay đổi hàng ngày."
category: "cite-your-sources"
order: 3
level: "intermediate"
tags: ["citations"]
featured: true
updated: 2026-07-25
---

# BibTeX cổ điển hoặc biblatex

LaTeX có hai hệ thống trích dẫn đọc cùng một tệp `.bib` nhưng khác nhau ở hầu hết mọi thứ khác. BibTeX cổ điển có từ những năm 1980: một chương trình nhỏ bên ngoài định dạng tài liệu tham khảo của bạn bằng cách sử dụng các tệp kiểu được viết bằng ngôn ngữ dựa trên ngăn xếp của chính chương trình đó. biblatex là sự thay thế hiện đại: định dạng diễn ra trong chính LaTeX, với một chương trình trợ giúp có tên `biber` thực hiện việc sắp xếp và xử lý dữ liệu. Những cái tên giống nhau đến khó hiểu. Hãy nhớ rằng "BibTeX" vừa là chương trình cũ vừa là hệ thống cũ, trong khi "biblatex" là gói LaTeX sử dụng `biber` làm phần phụ trợ.

| | BibTeX | biblatex + biber |
| --- | --- | --- |
| Tuổi | Cổ điển | Hiện đại |
| Phong cách | `.bst` | `.bbx`/`.cbx` |
| Unicode | Dễ vỡ | Mạnh mẽ |
| Hỗ trợ tạp chí | Phổ quát | Đang phát triển |

## Sự khác biệt có ý nghĩa gì trong thực tế

Hàng phong cách quan trọng nhất. Kiểu BibTeX là các tệp `.bst` mà hầu như không ai có thể đọc hoặc sửa đổi, vì vậy bạn hãy lấy những gì tạp chí cung cấp. Kiểu biblatex là LaTeX thông thường, được chia thành các thành phần thư mục (`.bbx`) và trích dẫn (`.cbx`), và những thay đổi nhỏ như bỏ URL hoặc thay đổi dấu câu là những tùy chỉnh trên một dòng. Hàng Unicode quan trọng nếu tham chiếu của bạn chứa tên có dấu hoặc chữ viết không phải tiếng Latinh. BibTeX cổ điển xử lý chúng trừ khi mọi ký tự được thoát dưới dạng `\'{e}` và bạn bè, trong khi biber xử lý nguyên bản UTF-8. Hàng cuối cùng là lý do tại sao BibTeX cổ điển vẫn tồn tại: hầu hết các tạp chí và hội nghị vẫn phân phối tệp `.bst` và mong đợi chuỗi công cụ cổ điển, đồng thời các hệ thống gửi thường từ chối bất kỳ thứ gì khác.

## Tài liệu biblatex trông như thế nào

```latex
\usepackage[backend=biber,style=numeric]{biblatex}
\addbibresource{refs.bib}
...
\cite{knuth84}
\printbibliography
```

So với mẫu cổ điển, `\addbibresource{refs.bib}` (có phần mở rộng) di chuyển vào phần mở đầu, `\printbibliography` thay thế `\bibliography{refs}` và không có dòng `\bibliographystyle` vì kiểu này là một tùy chọn gói. Bản dựng phải chạy `biber` thay vì `bibtex`; chạy sai chương trình phụ trợ là nguyên nhân phổ biến gây ra [thư mục trống](/learn/bibliography-empty/).

## Cách chọn

Hãy để địa điểm quyết định khi nào có thể. Nếu mẫu gửi tệp `.bst` hoặc hướng dẫn của tác giả đề cập đến BibTeX, hãy sử dụng BibTeX cổ điển và đừng chống lại nó. Khi định dạng là của bạn để kiểm soát, chẳng hạn như với một luận văn, bản in trước hoặc ghi chú bài giảng, biblatex là công cụ tốt hơn: tùy chỉnh rõ ràng hơn, hỗ trợ Unicode thực sự và các loại mục nhập được xây dựng có mục đích cho các nguồn web. Cơ sở dữ liệu `.bib` của bạn hoạt động không thay đổi trong cả hai hệ thống, vì vậy lựa chọn không bao giờ là vĩnh viễn. Các lệnh trích dẫn giữa hai lệnh này khác nhau và [thói quen natbib so với các lệnh biblatex](/learn/natbib-vs-biblatex/) ánh xạ tập hợp này sang tập hợp khác.