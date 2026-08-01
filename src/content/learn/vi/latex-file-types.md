---

title: "Các tập tin trong một dự án thực tế"
description: ".tex, .bib, .cls, .sty và các tệp rác được tạo ra mà bạn không nên cam kết."
category: "open-the-loop"
order: 4
level: "beginner"
tags: ["basics", "files"]
featured: false
updated: 2026-07-25
---

# Các tập tin trong một dự án thực

Mở thư mục của bất kỳ dự án LaTeX thực nào sau khi biên dịch và bạn sẽ tìm thấy nhiều tệp hơn những gì bạn đã viết. Điều này gây ngạc nhiên cho hầu hết những người mới bắt đầu và nỗi sợ xóa nhầm thứ sẽ khiến các thư mục trở nên lộn xộn mãi mãi. Sự khác biệt giúp làm rõ điều đó: một số tệp là nguồn bạn chỉnh sửa, một số là kiểu do mẫu hoặc gói cung cấp và phần còn lại được tạo ra không gian trống mà trình biên dịch tạo lại trong mỗi lần chạy.

## Các tập tin bạn viết

Các tệp `.tex` của bạn chứa tài liệu thực tế: văn bản, các phần, số liệu và phép toán. Tệp `.bib` là cơ sở dữ liệu thư mục của bạn, một mục nhập trên mỗi bài báo hoặc cuốn sách mà bạn có thể trích dẫn; bạn có thể duy trì nó bằng tay hoặc xuất nó từ trình quản lý tham chiếu như Zotero. Đây là những tệp đáng để sao lưu và đưa vào kiểm soát phiên bản vì mọi thứ khác đều có thể được xây dựng lại từ chúng.

## Các tập tin mà mẫu cung cấp cho bạn

Tệp `.cls` xác định một lớp tài liệu, thứ bạn đặt tên trong `\documentclass{...}`. Các tạp chí và hội nghị đều tự gửi bài nên mọi bài gửi đều trông giống hệt nhau và bạn hầu như không bao giờ chỉnh sửa bài nào. Tệp `.sty` là một gói: các macro và cài đặt có thể sử dụng lại được tải bằng `\usepackage`. Bạn sẽ chỉ tự viết một lệnh khi muốn chia sẻ các lệnh tùy chỉnh trên nhiều tài liệu. Tệp `.bst` mô tả kiểu trích dẫn BibTeX và cũng thường được một địa điểm thả vào.

## Các tập tin mà trình biên dịch tạo ra

Tệp `.aux` lưu trữ dữ liệu tham chiếu chéo và trích dẫn giữa các lần biên dịch; không bao giờ chỉnh sửa nó và cứ thoải mái xóa nó đi vì lần biên dịch tiếp theo sẽ viết lại nó. Tệp `.log` ghi lại mọi thứ mà trình biên dịch đã thực hiện và chỉ đáng mở khi có sự cố. `.pdf` là kết quả đầu ra mà bạn thực sự mong muốn.

| Gia hạn | Vai trò | Chỉnh sửa bằng tay? |
| --- | --- | --- |
| `.tex` | Nguồn tài liệu và chương | Có |
| `.bib` | Cơ sở dữ liệu thư mục | Có (hoặc xuất từ ​​Zotero) |
| `.cls` | Lớp tài liệu | Hiếm khi có mẫu nhà cung cấp |
| `.sty` | Gói / tập tin kiểu | Khi viết macro của riêng bạn |
| `.bst` | Phong cách BibTeX | Hiếm |
| `.aux` | Dữ liệu tham khảo chéo | **Không:** đã tạo |
| `.log` | Nhật ký trình biên dịch | Đọc khi gỡ lỗi |
| `.pdf` | Đầu ra | Xem / gửi |

## Bố cục dự án có quy mô

```text
paper/
 main.tex
 chapters/
 figures/
 refs.bib
```

Một `main.tex` ở cấp cao nhất đóng vai trò là điểm đầu vào, các chương nằm trong thư mục riêng và được kéo vào bằng `\input` hoặc `\include`, hình ảnh nằm trong `figures/` và thư mục nằm trong một `refs.bib`. Bố cục này vẫn có thể quản lý được cho dù dự án là một bài báo dài bốn trang hay một luận án. [Tách các tập tin chương](/learn/split-chapter-files/) hiển thị cách các phần kết nối với nhau.

Nếu bạn sử dụng Git, hãy thêm `*.aux`, `*.log` và các tệp được tạo khác vào `.gitignore` để lịch sử của bạn chỉ theo dõi nguồn thực. Các dự án Oleafly là các thư mục đơn giản trên đĩa, vì vậy lời khuyên này được áp dụng không thay đổi ở đó. Lỗi phổ biến nhất là lỗi ngược lại: trong khi tìm kiếm một lỗi biên dịch kỳ lạ, việc xóa các tệp `.aux` thường là cách khắc phục, bởi vì một tệp cũ do quá trình chạy bị hỏng có thể đầu độc mọi trình biên dịch sau nó.