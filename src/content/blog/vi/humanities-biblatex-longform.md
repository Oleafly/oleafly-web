---

title: "Nhân văn và dạng dài: biblatex, chú thích cuối trang và sách chương"
description: "Chú thích cuối trang, trích dẫn linh hoạt, nguồn lưu trữ, cấu trúc nhiều chương và quyền sở hữu nhiều năm đối với lịch sử, văn học, triết học và kinh điển."
date: 2026-07-05
tags: [humanities, biblatex, thesis]
---

Các bản thảo nhân văn quan tâm đến hình thức trích dẫn nhiều như lập luận. Một số
Phong cách IEEE ở đây sai; chú thích cuối trang, tiêu đề tác giả và nguồn lưu trữ là
chuẩn mực. LaTeX đáng để học khi bạn có nhiều hơn một bài viết hội thảo và một
số ít sách trong thư mục.

Hướng dẫn này dành cho sinh viên xếp các chương luận văn hoặc soạn thảo một bài viết dài
với những chú thích thực tế. Nếu bạn chỉ cần ba mục MLA, bạn có thể dừng sớm.

## Ưu tiên biblatex vì tính linh hoạt

`biblatex` xử lý các chú thích cuối trang, kiểu dài dòng và tốc ký tốt hơn cổ điển
BibTeX cho hầu hết các quy trình công việc nhân văn:

```latex
\usepackage[backend=biber,style=verbose-ibid]{biblatex}
\addbibresource{sources.bib}
```

Các lựa chọn thay thế phổ biến bao gồm `tiêu đề tác giả`, `dài dòng`, phong cách dành riêng cho tạp chí,
hoặc bất cứ điều gì bộ phận của bạn yêu cầu. Hãy ghép sổ tay trước, sau đó chọn
phong cách biblatex gần nhất. Bối cảnh:
[BibTeX hoặc biblatex](/learn/bibtex-vs-biblatex/).

Chạy **biber** (hoặc phần phụ trợ mà phong cách của bạn cần), không chỉ pdflatex. trống
thư mục hầu như luôn là lỗi phụ trợ hoặc đường dẫn. Xác thực các mục nhập
trước khi gửi: [Trình xác thực BibTeX](/tools/bibtex-validator/).

## Nguồn lưu trữ và web

Thư, bản thảo và trang web cần các trường ghi lại các mục `@article`
không quan tâm đến:

- `@unpublished` hoặc biblatex `@online` cho các nguồn web có `urldate`
- vị trí lưu trữ, bộ sưu tập, folio cho bản thảo
- chìa khóa ổn định bạn vẫn sẽ hiểu sau hai năm

Các mục chưa hoàn chỉnh sẽ thất bại một cách lặng lẽ cho đến khi thư mục trông thưa thớt. Thích một cái
`.bib` (hoặc một tập hợp nhỏ theo dự án) trên văn bản chú thích cuối trang dán sao chép trôi đi
không đồng bộ với tác phẩm được trích dẫn.

## Chú thích cuối trang và chú thích cuối trang

Nhiều phong cách nhân văn muốn có chú thích cuối trang. phong cách dài dòng của `biblatex` và
`\footcite` / trích dẫn chú thích cuối trang tự động bao gồm rất nhiều vấn đề. Nếu
bộ phận muốn có chú thích cuối, hãy cấu hình điều đó sớm. Chuyển đổi ba chương của
chú thích trích dẫn tuần nộp là khốn khổ.

Giữ những phần phụ đáng kể ngắn gọn. Nếu chú thích cuối trang là một đoạn văn đầy đủ, hãy hỏi liệu
nó thuộc về văn bản chính. Người đọc lướt qua.

## Chương và phiên bản quan trọng

Các dự án dài như sách cần có `cuốn sách`, `hồi ký` hoặc một lớp luận văn đại học với
`\include` mỗi chương:

```latex
\include{chapters/ch1-intro}
\include{chapters/ch2-archive}
```

Tham chiếu chéo đến các chương khác nên sử dụng `\ref` / `\cref`, không được mã hóa cứng
Chuỗi "xem Chương 4" bị hỏng khi bạn sắp xếp lại. Cấu trúc khung nhìn liệt kê
tiêu đề trên các tập tin sẽ giúp ích cho bản nháp 200 trang. Việc biên dịch với
`\includeonly` trong khi bạn sửa lại một chương.

Các phiên bản quan trọng và văn bản song song có các gói chuyên dụng. Đừng phát minh ra một
bố cục với các trang nhỏ thô cho đến khi bạn kiểm tra xem một lớp được duy trì có
đã tồn tại cho ngôn ngữ của bạn.

## Trích dẫn và ngôn ngữ

Sử dụng dấu ngoặc kép thích hợp cho ngôn ngữ của bài viết (`csquotes` giúp
dấu ngoặc kép lồng nhau và dấu hiệu nhận biết ngôn ngữ). Chặn trích dẫn dài hơn một vài dòng
nên sử dụng môi trường trích dẫn, không phải thụt lề thủ công làm hỏng
bố cục hai cột hoặc khi lề thay đổi.

Đối với các dự án đa ngôn ngữ, XeLaTeX hoặc LuaLaTeX với `fontspec` và một ngôn ngữ
gói này ít đau đớn hơn so với việc xếp chồng các bản hack `inputenc` của những năm 1990. Chọn phông chữ mà
bao gồm các tập lệnh bạn cần trước khi viết chương ba bằng phông chữ không thể
kết xuất chúng.

## Hình ảnh, bản đồ và ghi chú sử dụng hợp lý

Bản đồ và ảnh bản thảo thường là tệp PDF/PNG bên ngoài, không phải TikZ.
Chú thích có nguồn và trạng thái cho phép. Giữ các bản gốc có độ phân giải cao bên ngoài
lịch sử git nếu chúng lớn; cam kết số liệu nén giấy
thực sự sử dụng và ghi chú vào README về nơi sinh sống của các bậc thầy.

## Quyền sở hữu địa phương theo năm ghi chú

Luận án là một cây hồ sơ nhiều năm. Chỉ giữ nó trong một dự án trình duyệt
gắn với một tài khoản là rủi ro khi sinh viên chuyển trường hoặc mất quyền truy cập
sau khi tốt nghiệp.

Các thư mục đơn giản cộng với Git, được biên dịch cục bộ, tốt hơn.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) nhằm mục đích đó
loại tài liệu dài. Bạn có được chế độ xem cấu trúc qua các chương, trên toàn dự án
giới thiệu và trích dẫn, chính tả và ngữ pháp ngoại tuyến trong văn xuôi (nó bỏ qua các phím trích dẫn) và
điểm kiểm tra Git thực sự mà không cần có tài khoản. Bạn vẫn có thể mở các tập tin tương tự trong
bất kỳ biên tập viên nào khác. Quyền sở hữu là điểm.

## Quy trình làm việc tồn tại qua ủy ban

Cố định kiểu trích dẫn so với sổ tay vào năm thứ nhất và giữ lại một kiểu
cơ sở dữ liệu thư mục với các khóa ổn định. Đặt các tập tin chương dưới sự kiểm soát phiên bản
với một điều khiển từ xa riêng. Nội dung chính (tóm tắt, lời cảm ơn, TOC) nên
tuân theo các quy định của lớp đại học đối với các trang tiếng La Mã/tiếng Ả Rập. Biên dịch bản PDF đầy đủ
hàng tháng ngay cả khi bạn soạn thảo bằng `\includeonly`, do đó, việc giới thiệu giữa các chương sẽ không
làm bạn ngạc nhiên ở phần cuối.

## Nộp trước

- Biber/bibtex chạy sạch; không có trích dẫn `[?]`.
- Kiểu chú thích phù hợp với bộ phận.
- Các tham chiếu chéo chương được cập nhật sau khi sắp xếp lại.
- Phông chữ nhúng; lề phù hợp với danh sách kiểm tra văn phòng luận án.
- Cả nguồn và PDF đều được lưu trữ, không chỉ biên nhận cổng tải lên.

## Lập chỉ mục và quay lại vấn đề

Các dự án cấp sách đôi khi cần một chỉ mục (`imakeidx` và bạn bè). Ngân sách
thời gian cho một lượt lập chỉ mục thực sự; tự động đánh dấu mỗi từ viết hoa tạo ra
rác rưởi. Các phụ lục phiên âm nên đánh số rõ ràng để phần chính
các chương có thể `\ref`.

## Bản dự thảo của ủy ban và bản PDF ký gửi

Bản nháp dòng được đánh số hoặc lề rộng có thể giúp đánh dấu, nhưng bản PDF ký gửi phải
phù hợp với mẫu văn phòng luận án. Giữ tùy chọn lớp hoặc cờ "dự thảo" riêng
vì vậy bạn không phải tự tay chỉnh sửa số tiền ký quỹ vào buổi sáng gửi tiền.

Nhận công cụ trích dẫn ngay sớm. Lập luận xứng đáng được chú ý hơn
hơn là cuộc chiến thư mục tuần trước.