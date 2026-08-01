---

title: "Sinh viên kỹ thuật: Các mẫu IEEE và ACM không khiến bạn phải đau đầu vào cuối tuần"
description: "Bắt đầu từ tệp lớp thực, tồn tại các phương trình và phương trình hai cột, lấy tài liệu tham khảo phù hợp và phiên bản bài viết trước khi máy ảnh sẵn sàng."
date: 2026-06-28
tags: [engineering, templates, ieee]
---

Các mẫu IEEE và ACM không phải là trang trí tùy chọn. Họ là người nộp đơn
định dạng. Bắt đầu từ một zip ngẫu nhiên mà ai đó đã tải lên lại ba năm trước là cách
bạn dành cả đêm trước thời hạn để đổi tên phông chữ và theo đuổi
`trình tự điều khiển không xác định` trong một lớp mà bạn không bao giờ có ý định chỉnh sửa.

Điều này dành cho các dự án khóa học, tài liệu thiết kế cao cấp và hội nghị đầu tiên
đệ trình.

## Bắt đầu từ lớp chính thức

Tải xuống lớp học và ví dụ từ hiệp hội hoặc trang hội nghị để biết
*năm nay*. Đặt `.cls`, bất kỳ `.bst` nào và ví dụ `.tex` trong dự án của bạn
gốc. Biên dịch một lần trước khi bạn viết một câu gốc duy nhất để bạn biết
môi trường hoạt động.

[Thư viện mẫu](/templates/) của Oleafly và các gói cài đặt ứng dụng miễn phí
theo dõi các địa điểm chung (IEEE, ACM và bạn bè), sau đó biên dịch bằng gói
công cụ và nắm bắt các giới thiệu và trích dẫn bị hỏng trong trình chỉnh sửa dự án trước đó
sẵn sàng cho máy ảnh. Vẫn xác minh chống lại việc kêu gọi giấy tờ cho năm đó: cột
số lượng, giới hạn trang và thay đổi phong cách thư mục.

Nếu hội nghị cung cấp một lớp đã sửa đổi, hãy sử dụng lớp của họ chứ không phải lớp IEEEtran chung chung
từ bộ nhớ.

## Quy tắc float hai cột

Ở chế độ hai cột, số liệu rộng sử dụng `figure*` và thường chỉ xuất hiện ở
đầu một trang. Đặt float gần tham chiếu đầu tiên và đặt độ rộng thành
`\columnwidth` hoặc `\textwidth` có mục đích. Các cấu hình phụ cạnh nhau cần cẩn thận
chiều rộng hoặc chúng tràn vào lề.

```latex
\begin{figure}[t]
  \centering
  \includegraphics[width=\columnwidth]{block.pdf}
  \caption{System overview.}\label{fig:sys}
\end{figure}
```

Nếu một hình nổi chạy xa ba trang, hãy thu nhỏ nó lại hoặc chia các bảng trước khi bạn chiến đấu
`[H]` trong một giờ: [vị trí thả nổi](/learn/figure-wrong-position/).

## Phương trình trong cột hẹp

Các dẫn xuất dài ngắt quãng trong `\columnwidth`. Sử dụng `multiline` hoặc `split`, hoặc di chuyển
dẫn xuất của một phụ lục. Không thu nhỏ phông chữ phương trình cho đến dòng
không thể đọc được; người đánh giá thông báo. Phương trình chỉ số mà bạn thực sự trích dẫn.

Các thuật toán thuộc về môi trường `thuật toán` / `thuật toán` có kích thước dành cho
cột chứ không phải ảnh chụp màn hình của IDE.

## Tài liệu tham khảo

Kiểu số IEEE và kiểu ACM không đồng ý về chi tiết. Sử dụng thư mục
tạo kiểu cho mẫu đi kèm. Đừng phát minh ra sự kết hợp giữa năm tác giả và
số khung.

Xác thực `.bib` cho các trường bị thiếu trước khi máy ảnh sẵn sàng:
[Trình xác thực BibTeX](/tools/bibtex-validator/). Xuất khẩu học giả lộn xộn; sạch sẽ
phím (`tác giả: năm: từ khóa`) và sửa các tiêu đề được viết hoa TẤT CẢ.

Trích dẫn bộ dữ liệu và phần mềm khi địa điểm mong đợi. Thiếu DOI sẽ dễ dàng hơn
để khắc phục ngay bây giờ hơn trong cửa sổ "cập nhật sẵn sàng cho máy ảnh" của cổng thông tin.

## Giới hạn trang không có tội phạm

Giới hạn trang là có thật. Không đè bẹp lề bên dưới mẫu, đặt
`\scriptsize` cho toàn bộ phần kết quả hoặc ẩn văn bản bên trong các hình lớn.
Cắt nội dung. Di chuyển các bằng chứng và các sơ đồ bổ sung sang phần bổ sung hoặc arXiv mở rộng
phiên bản nếu cuộc gọi cho phép. Giữ cho bài nộp có thể đọc được. Danh sách kiểm tra dài hơn:
[giới hạn trang không có tội phạm](/learn/page-limits-without-crimes/).

## Kiểm soát phiên bản hiện là một phần của báo cáo thí nghiệm

Các tài liệu hội nghị và thiết kế cao cấp đều được hưởng lợi từ các cam kết sau mỗi lần
biên dịch thành công. Một biên tập viên nghiên cứu như
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) giữ Git thật
bên cạnh tệp PDF, SyncTeX và chẩn đoán trực tiếp để bạn không phải gửi zip
các tệp có tên `submission_really_final.zip`. Điều khiển từ xa riêng tư không được xuất bản
ngừng sử dụng GitHub công khai cho đến khi chính sách cho phép.

Gắn thẻ hoặc nhắn tin cho cam kết chính xác mà bạn đã tải lên cổng thông tin.

## Quy trình làm việc của nhóm

Phần riêng của sinh viên. Một người sở hữu `.bib` và tệp lớp. Hợp nhất
thông qua các yêu cầu kéo nếu nhóm đủ lớn. Biên dịch bản PDF đầy đủ trên một
lịch trình nên việc hội nhập không chỉ diễn ra vào đêm hôm trước.

Nếu đồng đội chỉ chỉnh sửa Word, xuất cho họ và giữ TeX làm nguồn:
[đồng tác giả chỉ nói Word](/learn/collaborator-uses-word/).

## Tuần sẵn sàng cho máy ảnh

Hướng dẫn sẵn sàng cho máy ảnh thường khác với định dạng xem lại, vì vậy hãy tải xuống lại
họ. Cập nhật khối tác giả, tài trợ và các biểu mẫu bản quyền IEEE/ACM dưới dạng
được yêu cầu. Biên dịch lại với các tùy chọn lớp cuối cùng (thường khác với
xem xét). Kiểm tra từng con số để tìm dpi và phông chữ; nhúng phông chữ vào PDF nếu
cổng thông tin yêu cầu nó. Tải lên bản PDF và bất kỳ nguồn zip nào mà cổng yêu cầu, sau đó
lưu trữ cả hai.

## Khối tác giả và liên kết

Khối tác giả của IEEE/ACM rất khó tính: điểm đóng góp bằng nhau, nhiều
liên kết, nhờ các cơ quan tài trợ. Sao chép tác giả của tập tin ví dụ
đánh dấu và thay thế văn bản một cách cẩn thận. Việc phát minh ra ngăn xếp `\thanks` của riêng bạn là một
nguồn phổ biến của các hộp thiếu đầy đủ và thiếu dấu phẩy trong PDF.

## Đánh giá mù quáng

Nếu cuộc gọi mang tính mù đôi, hãy loại bỏ tên, nguồn tài trợ để xác định phòng thí nghiệm và
tự trích dẫn rằng "trong tác phẩm trước đây của chúng tôi." Kích hoạt lại chúng để sẵn sàng cho máy ảnh.
Giữ tùy chọn lớp `blind` hoặc một tệp chuyển đổi nhỏ để bạn không chỉnh sửa bằng tay
danh tính ở sáu nơi.

## Dòng dưới cùng

Bắt đầu từ lớp chính thức, tôn trọng bố cục hai cột và khớp với
phong cách thư mục mà mẫu đi kèm. Phiên bản mọi thứ. các
nội dung kỹ thuật đã đủ khó nếu không có mẫu giả từ năm 2019.