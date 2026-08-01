---

title: "Kiểu số, năm tác giả, kiểu tạp chí"
description: "Hoán đổi kiểu mà không cần viết lại cơ sở dữ liệu."
category: "cite-your-sources"
order: 4
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Kiểu số, năm tác giả, tạp chí

Kiểu trích dẫn kiểm soát hai điều: điểm đánh dấu trong văn bản trông như thế nào, chẳng hạn như `[12]` so với `(Knuth, 1984)` và cách mỗi mục trong danh sách tham chiếu được định dạng. Tin vui là kiểu này hoàn toàn tách biệt với cơ sở dữ liệu `.bib` của bạn. Bạn có thể chuyển một bài báo từ số sang năm tác giả hoặc định dạng lại nó cho một tạp chí khác bằng cách thay đổi một dòng trong phần mở đầu. Các mục nhập của bạn vẫn như cũ.

## Thay đổi phong cách với BibTeX cổ điển

Với BibTeX, kiểu này tồn tại trong lệnh `\bibliographystyle{...}`, lệnh này đặt tên cho tệp `.bst`. Hoán đổi đối số và biên dịch lại:

```latex
\bibliographystyle{plain}    % [1], entries sorted alphabetically
\bibliographystyle{abbrv}    % like plain, but first names and journals abbreviated
\bibliographystyle{alpha}    % labels like [Knu84] built from author and year
\bibliographystyle{ieeetr}   % IEEE-style numeric, in citation order
\bibliographystyle{apalike}  % author-year, needs \usepackage{apalike} or natbib
```

Các tạp chí và hội nghị thường gửi tệp `.bst` của riêng họ, ví dụ: `IEEEtran.bst` hoặc `ACM-Reference-Format.bst`. Đặt tệp đó bên cạnh `main.tex` của bạn và đặt tên nó là `\bibliographystyle`. Lưu ý rằng `.bst` sẽ hoạt động trong một lần xem; nếu địa điểm muốn trích dẫn theo năm của tác giả, bạn cũng cần gói `natbib` để nhận các lệnh như `\citep` và `\citet`.

## Thay đổi phong cách với biblatex

Với biblatex, kiểu dáng là một tùy chọn trên gói:

```latex
\usepackage[style=authoryear]{biblatex}
```

Các giá trị phổ biến khác là `style=numeric`, `style=numeric-comp` cho các phạm vi được nén như `[3-6]`, `style=alphabetic` và `style=apa` hoặc `style=ieee` từ các gói tiện ích bổ sung. Vì kiểu biblatex được viết bằng LaTeX chứ không phải ngôn ngữ `.bst` cũ nên chúng dễ dàng điều chỉnh hơn nhiều, chẳng hạn như thay đổi dấu câu hoặc bỏ URL.

## Biên dịch lại đúng cách sau khi chuyển đổi

Sau bất kỳ thay đổi kiểu nào, các tệp phụ trợ cũ vẫn chứa dữ liệu được định dạng theo kiểu trước đó, vì vậy hãy chạy toàn bộ chu trình: biên dịch một lần, chạy phần phụ trợ (`bibtex` cho BibTeX cổ điển, `biber` cho biblatex), sau đó biên dịch thêm hai lần nữa để giải quyết các tham chiếu chéo. Oleafly chạy chu trình này cho bạn, nhưng nếu các trích dẫn trông cũ kỹ sau khi chuyển đổi thủ công, hãy xóa các tệp `.aux` và `.bbl` rồi xây dựng lại từ đầu.

## Bạn nên sử dụng gia đình nào?

Nếu địa điểm mục tiêu cung cấp tệp `.bst` hoặc một lớp yêu cầu BibTeX, hãy sử dụng BibTeX cổ điển; đó vẫn là tình trạng ở hầu hết các tạp chí. Nếu bạn tự mình kiểm soát định dạng, chẳng hạn như trong luận văn hoặc bản in sẵn, biblatex là lựa chọn hợp lý hơn. Sự cân bằng được đề cập trong [BibTeX cổ điển hoặc biblatex](/learn/bibtex-vs-biblatex/) và sự khác biệt về lệnh trong [thói quen natbib so với lệnh biblatex](/learn/natbib-vs-biblatex/).