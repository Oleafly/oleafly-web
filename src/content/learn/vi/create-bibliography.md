---

title: "Xây dựng một .bib tồn tại lâu dài"
description: "Loại mục nhập, trường bắt buộc, khóa ổn định."
category: "cite-your-sources"
order: 2
level: "beginner"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Xây dựng một .bib tồn tại lâu dài

Tệp `.bib` là một cơ sở dữ liệu văn bản thuần túy nhỏ chứa mọi thứ bạn có thể trích dẫn. Mỗi mục có một loại, một khóa và một tập hợp các trường và cùng một tệp có thể phục vụ mọi bài viết bạn viết trong nhiều năm. Bây giờ, một chút kỷ luật trong cách bạn chọn loại, điền trường và khóa tên sẽ giúp bạn thực sự bớt đau khổ sau này khi kiểu nhật ký đột nhiên muốn có một trường mà bạn chưa bao giờ ghi lại.

## Giải phẫu của một mục

```bibtex
@article{knuth84,
  author  = {Knuth, Donald E.},
  title   = {Literate Programming},
  journal = {The Computer Journal},
  year    = {1984},
  volume  = {27},
  number  = {2},
  pages   = {97--111}
}
```

Từ sau `@` là loại mục nhập, cho biết kiểu này thuộc loại công việc nào và do đó sẽ mong đợi những trường nào. `knuth84` là khóa trích dẫn, phần điều khiển bạn nhập bên trong `\cite{...}`. Mọi thứ khác là một lĩnh vực. Trường `tác giả` sử dụng biểu mẫu `Cuối cùng, Đầu tiên` để kiểu có thể viết tắt và sắp xếp tên một cách đáng tin cậy, đồng thời `trang` sử dụng dấu gạch nối kép mà LaTeX sắp chữ làm dấu gạch ngang phạm vi trang.

## Các loại mục bạn thực sự cần

Sáu loại bao gồm hầu hết tất cả các bài viết học thuật. Sử dụng `@article` cho các bài viết trên tạp chí, `@inproceedings` cho các bài viết hội nghị và hội thảo, `@book` cho sách, `@phdthesis` cho luận án, `@techreport` cho các báo cáo của tổ chức và nhiều bản in trước, và `@misc` cho bất kỳ thứ gì khác, bao gồm cả phần mềm và trang web. Việc chọn đúng loại rất quan trọng vì các kiểu định dạng mỗi kiểu một cách khác nhau: mục nhập `@inproceedings` muốn có `booktitle` (tên hội nghị), trong khi `@article` muốn có `journal`.

## Các trường bắt buộc và lý do người xác thực phàn nàn

Mỗi loại đều có các trường bắt buộc và việc thiếu một trường là lý do phổ biến nhất khiến mục nhập thư mục bị sai hoặc gây ra cảnh báo phụ trợ. Đối với `@bài viết`, các yếu tố cần thiết là `tác giả`, `tiêu đề`, `tạp chí` và `năm`; cho `@inproceedings`, `tác giả`, `tiêu đề`, `tên sách` và `năm`. Thiếu `năm` hoặc `tác giả` là một thất bại kinh điển, bởi vì phong cách tác giả theo năm thực sự không thể xây dựng nhãn trích dẫn mà không có chúng. Các trường tùy chọn như `volume`, `pages`, `doi` và `publisher` làm cho các mục nhập trở nên hữu ích hơn, vì vậy hãy ghi lại chúng trong khi nguồn ở trước mặt bạn. Bạn có thể kiểm tra toàn bộ tệp cùng lúc bằng [trình xác thực BibTeX](/tools/bibtex-validator/).

## Chìa khóa tồn tại sau một thập kỷ

Chìa khóa trích dẫn là mãi mãi. Mỗi `\cite{knuth84}` trong mọi bản nháp, ghi chú và bản trình chiếu đều đề cập đến chuỗi chính xác đó, vì vậy việc đổi tên một khóa có nghĩa là phải tìm kiếm mọi cách sử dụng. Chọn một quy ước chẳng hạn như `authorYEAR` hoặc `authorYEARkeyword`, áp dụng quy ước đó ngay từ ngày đầu tiên và không bao giờ "dọn sạch" các khóa trong cơ sở dữ liệu đã thiết lập. Nếu bạn quản lý các tài liệu tham khảo trong Zotero, plugin Better BibTeX có thể tạo và ghim các khóa ổn định cho bạn; xem [Zotero thành tệp .bib](/learn/zotero-latex/). Để kết nối tệp vào tài liệu, hãy bắt đầu bằng [Từ khóa .bib đến trích dẫn trong văn bản](/learn/add-cites/).