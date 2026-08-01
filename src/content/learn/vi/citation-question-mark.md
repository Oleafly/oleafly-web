---

title: "Xóa dấu trích dẫn bí ẩn"
description: "Lỗi chính tả, thiếu thẻ, đường dẫn sai, BibTeX và Biber không khớp."
category: "cite-your-sources"
order: 5
level: "beginner"
tags: ["citations", "errors"]
featured: true
updated: 2026-07-25
---

# Xóa dấu trích dẫn bí ẩn

## Triệu chứng

Tài liệu được biên dịch, nhưng ở vị trí trích dẫn sẽ xuất hiện, bạn sẽ nhận được một dấu chấm hỏi đậm, `[?]` và nhật ký chứa các dòng như `Cảnh báo LaTeX: Citation 'knuth84' không xác định`. Đôi khi mọi trích dẫn đều bị ảnh hưởng, đôi khi chỉ một hoặc hai. Bởi vì đây là một cảnh báo chứ không phải là một lỗi nên PDF vẫn được xây dựng và rất dễ bỏ sót các dấu cho đến khi người đọc chỉ ra.

##Tại sao nó lại xảy ra

LaTeX không giải quyết trực tiếp các trích dẫn. Trong lần đầu tiên nó ghi lại từng khóa được yêu cầu vào một tệp phụ. Sau đó, một chương trình phụ trợ (`bibtex` hoặc `biber`) sẽ tìm kiếm các khóa đó trong cơ sở dữ liệu `.bib` của bạn và ghi các mục nhập được định dạng. Hai lần chuyển LaTeX tiếp theo sẽ gấp kết quả trở lại. Dấu chấm hỏi có nghĩa là tại thời điểm chuyển lần cuối, không có mục nhập được định dạng nào tồn tại cho khóa đó. Mọi nguyên nhân gây ra triệu chứng này đều là một cách nào đó phá vỡ đường ống đó.

## Giải quyết các nguyên nhân theo thứ tự

Hãy kiểm tra chìa khóa trước. `\cite{knuth84}` và `@article{knuth1984,...}` là các chuỗi khác nhau và kết quả khớp chính xác, kể cả chữ hoa chữ thường. Tìm kiếm tệp `.bib` của bạn để tìm khóa có tên trong cảnh báo; lỗi đánh máy ở hai bên là thủ phạm phổ biến nhất và cảnh báo thiếu phím đầu tiên trong nhật ký là lỗi cần theo đuổi.

Tiếp theo, hãy đảm bảo đã chạy toàn bộ chu trình biên dịch. Trình tự là LaTeX, sau đó là `bibtex` hoặc `biber`, sau đó là LaTeX hai lần nữa. Một trình biên dịch đơn lẻ không bao giờ có thể giải quyết được các trích dẫn vì phần phụ trợ chưa chạy. Oleafly tự động điều khiển toàn bộ chu trình, nhưng quá trình xây dựng thủ công hoặc trình chỉnh sửa bị định cấu hình sai có thể dừng sau lần vượt qua đầu tiên.

Thứ ba, xác minh đường dẫn cơ sở dữ liệu. `\bibliography{refs}` và `\addbibresource{refs.bib}` phân giải liên quan đến tệp chính, do đó cơ sở dữ liệu trong thư mục con phải được viết là `bib/refs` hoặc `bib/refs.bib`. Một đường dẫn sai sẽ thất bại một cách âm thầm và thường kéo theo toàn bộ danh sách tham chiếu; hãy xem [Thư mục trống](/learn/bibliography-empty/) để biết lỗi lớn hơn đó.

Cuối cùng, khớp phần phụ trợ với hệ thống. Tài liệu tải biblatex phải được xử lý bằng `biber`. Việc cung cấp cho nó `bibtex` cổ điển không tạo ra kết quả có thể sử dụng được và mỗi trích dẫn vẫn là một dấu chấm hỏi cho dù bạn có biên dịch lại bao nhiêu lần.

## Nếu vẫn thất bại

Các tập tin phụ trợ cũ có thể vẫn ở trạng thái cũ, bị hỏng. Xóa các tệp `.aux`, `.bbl` và `.blg` bên cạnh tài liệu của bạn và xây dựng lại từ đầu. Tệp `.blg` cũng đáng để đọc trước khi bạn xóa nó: đó là nhật ký riêng của chương trình phụ trợ và nó nêu tên rõ ràng các cơ sở dữ liệu bị thiếu cũng như các mục nhập không đúng định dạng.