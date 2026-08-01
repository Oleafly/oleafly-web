---

title: "Zotero thành tệp .bib"
description: "BibTeX tốt hơn, tự động xuất, khóa tồn tại trên máy."
category: "cite-your-sources"
order: 6
level: "intermediate"
tags: ["citations", "zotero"]
featured: false
updated: 2026-07-25
---

# Zotero thành file .bib

Zotero rất giỏi trong việc thu thập tài liệu tham khảo: nó lấy siêu dữ liệu và tệp PDF từ nút trình duyệt và giữ mọi thứ có thể tìm kiếm được. Mặt khác, LaTeX chỉ đọc các tệp `.bib`. Cầu nối giữa hai thứ này là plugin Better BibTeX. Nó biến một bộ sưu tập Zotero thành một tệp `.bib` luôn cập nhật và quan trọng không kém là giữ cho các khóa trích dẫn ổn định để các lệnh `\cite` của bạn không bao giờ bị hỏng.

## Tại sao xuất tích hợp không đủ

Zotero có thể tự xuất BibTeX nhưng nó sẽ tạo lại các khóa trích dẫn mỗi lần và một khóa thay đổi từ `knuth_literate_1984` thành `knuth_literate_1984-1` âm thầm phá vỡ mọi `\cite` sử dụng tên cũ. Quá trình xuất cũng là ảnh chụp nhanh một lần, vì vậy tệp sẽ cũ ngay khi bạn thêm giấy. BibTeX tốt hơn khắc phục cả hai vấn đề: khóa được tạo từ công thức bạn chọn, có thể được ghim để chúng không bao giờ thay đổi và quá trình xuất có thể tự động làm mới.

## Thiết lập đường ống

Đầu tiên, cài đặt Better BibTeX từ trang web của nó thông qua hộp thoại Công cụ, Plugin của Zotero, sau đó khởi động lại Zotero. Thứ hai, quyết định công thức khóa trích dẫn trong tùy chọn Better BibTeX. Mẫu tạo ra các khóa như `knuth1984` hoặc `knuth1984literate` rất dễ nhập và dễ nhận biết trong nguồn. Thứ ba, nhấp chuột phải vào bộ sưu tập thuộc bài viết của bạn, chọn Xuất Bộ sưu tập, chọn định dạng BibTeX Tốt hơn và đánh dấu vào "Tiếp tục cập nhật" trước khi lưu tệp vào thư mục dự án của bạn, chẳng hạn như `refs.bib`. Từ đó trở đi, việc thêm hoặc chỉnh sửa một mục trong Zotero sẽ ghi lại tệp trong vòng vài giây.

Cuối cùng, trỏ tài liệu của bạn vào tệp đã xuất bằng `\bibliography{refs}` hoặc `\addbibresource{refs.bib}`, chính xác như với cơ sở dữ liệu viết tay. Hệ thống dây điện được trình bày trong [Từ khóa .bib đến trích dẫn trong văn bản](/learn/add-cites/).

## Phân công lao động

Hãy coi Zotero là cơ sở dữ liệu chính và tệp `.bib` là một tạo phẩm được tạo ra nằm trong kho lưu trữ của bài báo. Cam kết `.bib` cùng với `.tex` có nghĩa là đồng tác giả hoặc bạn trên một máy khác có thể biên dịch bài viết mà không cần cài đặt Zotero. Không chỉnh sửa thủ công tệp đã xuất. Lần xuất tự động tiếp theo sẽ ghi đè các thay đổi của bạn. Thay vào đó, hãy sửa siêu dữ liệu trong Zotero và quá trình chỉnh sửa sẽ diễn ra. Nếu một mục vẫn có vẻ sai sau khi xuất, hãy chạy nó qua [Trình xác thực BibTeX](/tools/bibtex-validator/) để xem kiểu đó không hài lòng ở trường nào.

Một thói quen giúp ngăn ngừa hầu hết những nỗi đau trong tương lai: khi một phím xuất hiện trong bản thảo, hãy ghim nó vào Better BibTeX (nhấp chuột phải vào mục, phím Better BibTeX, Pin BibTeX). Khóa được ghim vẫn tồn tại sau khi thay đổi công thức, di chuyển máy và sắp xếp lại thư viện, đó chính xác là những gì khóa trích dẫn cần thực hiện.