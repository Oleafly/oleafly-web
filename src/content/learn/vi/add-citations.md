---

title: "Từ khóa .bib đến trích dẫn trong văn bản"
description: "Vòng lặp BibTeX thông thường với các lệnh trích dẫn và thư mục."
category: "cite-your-sources"
order: 1
level: "beginner"
tags: ["citations"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Citations check'
  questions:
    - prompt: 'What''s the usual BibTeX setup?'
      choices:
        - 'A Word comment plus a footnote'
        - 'A .bib entry and a \cite{key} in the document'
        - 'A bare URL in the text'
        - 'A screenshot from Google Scholar'
      answer: 'B'
      level: beginner
    - prompt: 'What has to match between \cite{...} and the .bib file?'
      choices:
        - 'The journal impact factor'
        - 'The citation key, exactly, including capitalization'
        - 'Only the PDF filename'
        - 'The section number'
      answer: 'B'
      level: beginner
    - prompt: 'What do \bibliographystyle and \bibliography usually control?'
      choices:
        - 'Figure placement and image DPI'
        - 'How references look, which .bib file to read, and where the list prints'
        - 'Math delimiters'
        - 'Page margins only'
      answer: 'B'
      level: beginner
    - prompt: 'Why isn''t one LaTeX pass enough for citations?'
      choices:
        - 'Citations need a browser'
        - 'BibTeX or biber, then more LaTeX passes, turn keys into markers and the reference list'
        - 'You have to reboot'
        - '\cite only works offline'
      answer: 'B'
      level: intermediate
    - prompt: 'Citations show as bold question marks. What''s a common cause?'
      choices:
        - 'The title is too long'
        - 'You skipped the bibliography step, or the key isn''t in the .bib file'
        - 'You used article class'
        - 'Math mode is open'
      answer: 'B'
      level: beginner
---

# Từ khóa .bib đến trích dẫn trong văn bản

Trích dẫn một nguồn trong LaTeX bao gồm hai phần: cơ sở dữ liệu văn bản thuần túy mô tả từng tác phẩm một lần và lệnh `\cite` trong tài liệu của bạn trỏ đến một mục nhập bằng khóa của nó. LaTeX đánh số trích dẫn, định dạng danh sách tham khảo và giữ mọi thứ nhất quán khi bạn sắp xếp lại các phần hoặc thêm nguồn. Bạn không bao giờ gõ "[12]" bằng tay và bạn không bao giờ tự đánh số lại bất cứ thứ gì.

## Các lệnh trong tài liệu

```latex
See \cite{knuth84} for the original discussion.

\bibliographystyle{plain}
\bibliography{refs} % refs.bib
```

`\cite{knuth84}` chèn điểm đánh dấu trong văn bản vào bất cứ nơi nào có trích dẫn. Hai lệnh ở phía dưới thực hiện phần còn lại: `\bibliographystyle{plain}` chọn cách định dạng các trích dẫn và tài liệu tham khảo, đồng thời `\bibliography{refs}` đặt tên cho tệp cơ sở dữ liệu (không có phần mở rộng `.bib` của nó) và đánh dấu nơi danh sách tham chiếu sẽ được in, thường là ngay trước `\end{document}`. Chỉ những nguồn bạn thực sự trích dẫn mới xuất hiện trong danh sách.

## Mục nhập trong cơ sở dữ liệu

```bibtex
@article{knuth84,
 author = {Knuth, Donald E.},
 title = {Literate Programming},
 journal = {The Computer Journal},
 year = {1984}
}
```

Tệp này tồn tại trong `refs.bib`, một tệp riêng biệt bên cạnh `main.tex` của bạn. Từ sau `@` là loại mục nhập, `knuth84` là khóa trích dẫn và phần còn lại là các trường mà kiểu sử dụng để xây dựng tham chiếu được định dạng. Khóa là liên kết duy nhất giữa hai tệp, vì vậy nó phải khớp chính xác với đối số của `\cite`, bao gồm cả cách viết hoa. Bạn có thể kiểm tra toàn bộ cơ sở dữ liệu để tìm các trường bị thiếu và mục nhập không đúng định dạng bằng [trình xác thực BibTeX](/tools/bibtex-validator/).

## Tại sao một lần biên dịch là không đủ

Thư mục được xây dựng bằng một chương trình riêng biệt. Ở lần chuyển LaTeX đầu tiên, tài liệu ghi danh sách các khóa được trích dẫn vào một tệp phụ trợ. Sau đó, chương trình `bibtex` sẽ đọc danh sách đó, lấy các mục nhập phù hợp ra khỏi `refs.bib` và định dạng chúng. Hai lần chuyển LaTeX nữa sẽ gấp kết quả lại và giải quyết các điểm đánh dấu trong văn bản. Oleafly chạy toàn bộ chu trình này cho bạn trong mỗi lần biên dịch. Nếu bạn xây dựng bằng tay và bỏ qua bước giữa, các trích dẫn sẽ hiển thị dưới dạng dấu hỏi đậm; xem [Xóa dấu trích dẫn bí ẩn](/learn/cite-question-mark/) khi điều đó xảy ra.

## Đi đâu từ đây

Một tệp `.bib` có thể phục vụ mọi bài viết bạn viết, vì vậy bạn nên xây dựng nó một cách cẩn thận. [Xây dựng một .bib tồn tại lâu dài](/learn/create-bibliography/) bao gồm các loại mục nhập, trường bắt buộc và khóa tồn tại trong một thập kỷ. Khi một địa điểm muốn có giao diện khác, bạn thay đổi một dòng thay vì bất kỳ mục nào, như được giải thích trong [Số, năm tác giả, kiểu tạp chí](/learn/change-cite-style/).