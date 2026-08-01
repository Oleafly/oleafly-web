---

title: "Cấu trúc luận văn tốt nghiệp bằng LaTeX trước khi cơn hoảng loạn ập đến"
description: "Nội dung chính, chương bao gồm các từ viết tắt, tệp lớp đại học, tốc độ biên dịch và lịch sử Git dành cho sinh viên Thạc sĩ và Tiến sĩ."
date: 2026-06-30
tags: [thesis, graduate, workflow]
---

Luận án là một bài báo dài có tính quan liêu kèm theo. LaTeX xử lý lâu dài
giấy tốt. Bộ máy quan liêu thường là hồ sơ lớp đại học viết năm 2009
và được thử nghiệm lần cuối trên TeX Live khác.

Bắt đầu cấu trúc sớm, ngay cả khi các chương vẫn còn trống. Di chuyển nội dung giữa
các tập tin trong tháng cuối cùng là cách các tham chiếu chéo và đường dẫn hình bị phá vỡ.

## Chấp nhận hồ sơ lớp, rào lại phần còn lại

Đặt trường đại học `.cls` (và các tệp `.bst` / logo bắt buộc) trong dự án.
Đừng viết lại lớp học. Đặt macro, gói và nội dung chương của bạn vào
các tập tin bạn kiểm soát:

```text
thesis/
  main.tex
  macros.tex
  chapters/
  figures/
  university.cls
```

Nếu lớp bị phá vỡ trên một công cụ hiện đại, hãy phân loại với
[tệp lớp đại học sẽ không biên dịch](/learn/fix-broken-template/).
Tài liệu mà văn phòng luận án chấp nhận (pdfLaTeX vs XeLaTeX vs
LuaLaTeX) trước khi bạn đầu tư vào `fontspec`.

## Vấn đề mặt trận mà các ủy ban mong đợi

Số trang La Mã dành cho phần tóm tắt, lời cống hiến, lời cảm ơn, TOC, danh sách
số liệu/bảng; tiếng Ả Rập cho các chương chính. Các lớp sách/báo cáo lộ ra
`\frontmatter` / `\mainmatter`; mẫu dựa trên bài viết cần hướng dẫn
`\đánh số trang`. Hướng dẫn:
[tiếng La Mã rồi tiếng Ả Rập](/learn/front-matter-page-numbers/).

Nội dung trang tiêu đề thường phải khớp với mẫu Word của trường sau đại học.
Sao chép chính xác từ ngữ. Sự sáng tạo ở đây khiến bản PDF bị từ chối bởi một
danh sách kiểm tra.

## Các chương dưới dạng tập tin

Một gốc, nhiều gốc bao gồm:

```latex
\include{chapters/intro}
\include{chapters/background}
\include{chapters/methods}
\include{chapters/results}
\include{chapters/conclusion}
```

Tự mình sở hữu các chương ngay cả khi các đồng tác giả trợ giúp về các bài viết cung cấp luận án.
Giữ các số liệu trong `figures/chapter3/` để đường dẫn luôn ổn định khi bạn sắp xếp lại.
Sử dụng `\includeonly{chapters/methods}` trong khi soạn thảo để biên dịch luận văn đầy đủ
không phải là chi phí của mỗi lần chỉnh sửa phương trình:
[tách tập tin chương](/learn/split-chapter-files/).

Các nhãn phải là duy nhất trong toàn bộ dự án (`eq:ch3-main`, không phải `eq:main` trong
mỗi tập tin). Chế độ xem cấu trúc trên toàn dự án và trợ giúp kiểm tra giới thiệu trực tiếp trên
cây 200 trang.

## Từ viết tắt và ký hiệu

Các gói thuật ngữ rất mạnh mẽ và phức tạp. Đối với nhiều luận văn, một tài liệu được duy trì bằng tay
danh sách các ký hiệu ở mặt trước là đủ. Nếu bạn cần tự động mở rộng
các từ viết tắt, hãy dành ra một ngày để học `bảng thuật ngữ bổ sung` trước tuần học
trình, không phải trong thời gian đó.

Xác định macro toán học trong `macros.tex` và coi tệp đó là luật chung. Ký hiệu
trôi giữa chương 2 và chương 5 là một món quà dành cho người giám khảo có tính mô phạm.

## Thư mục

Một `.bib` cho toàn bộ luận án hoặc một tập hợp nhỏ được kết hợp cẩn thận. Phím ổn định.
Xác thực trước khi giới hạn mềm:
[Trình xác thực BibTeX](/tools/bibtex-validator/). Phù hợp với phong cách của bộ phận
mong muốn (phong cách nhân văn theo số, năm tác giả, chú thích cuối trang). Không trộn
ngăn xếp biblatex và BibTeX cổ điển trong một phần mở đầu.

## Tốc độ

Quá trình biên dịch luận án đầy đủ bị chậm. Chế độ nháp cho số liệu, `\includeonly` và
TikZ ra ngoài mua giờ trở lại. Ghi chú:
[chờ bản PDF ngắn hơn](/learn/speed-up-compilation/).

Thực hiện nghi thức "biên dịch đầy đủ" hàng tuần để bạn vẫn thấy những thất bại xuyên suốt chương
sớm.

## Sao lưu không giống lịch sử

Một bản sao Dropbox là một bản sao lưu. Git là câu chuyện về sự thay đổi của cuộc tranh luận.
Cam kết khi một chương được biên dịch. Đẩy tới điều khiển từ xa GitHub hoặc GitLab riêng tư.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) khởi tạo một
repo thực cho mỗi dự án, điểm kiểm tra sau khi biên dịch thành công và chỉnh sửa nhàn rỗi,
và khôi phục chỉ bằng một cú nhấp chuột, bên cạnh chế độ xem cấu trúc trên toàn dự án và SyncTeX
vẫn hoạt động trên các tập tin chương. Điều đó làm cho thói quen khó bỏ qua hơn.
Bạn có thể đạt được kỷ luật tương tự với bất kỳ trình soạn thảo nào và Git cẩn thận; luận án
không nên phụ thuộc vào việc nhớ `git init` vào tháng thứ mười tám.

## Vòng phản hồi của ủy ban

Xuất PDF cho những độc giả không sử dụng nguồn mở. Theo dõi nhận xét trong các vấn đề hoặc
một tài liệu được chia sẻ nhưng áp dụng các chỉnh sửa trong TeX. Khi một thành viên ủy ban trả lại một
đánh dấu PDF được quét, đặt tên tệp theo ngày và phiên bản để bạn biết đó là gì
nguồn cam kết nó đề cập đến.

## Danh sách kiểm tra bìa mềm và bìa cứng

Trước khi bạn in hoặc gửi tiền:

- Lớp tập và động cơ khớp với nội quy văn phòng.
- Đánh số trang mặt trước đúng; trang chữ ký hiện diện nếu được yêu cầu.
- Tất cả `\ref`/`\cite` giải quyết; không `[?]`.
- Các số liệu và bảng liệt kê nếu cần thiết; chú thích nhất quán.
- Lề và cỡ chữ vượt qua danh sách kiểm tra PDF (in trang kiểm tra).
- Nguồn + PDF + hàm băm cam kết được lưu trữ sau khi gửi tiền.

## Hình, bảng và "danh sách" trang

Nhiều văn phòng luận án yêu cầu một danh sách các số liệu và bảng biểu. Chú thích phải là
nhất quán và không đổ toàn bộ phần phương pháp vào chú thích 20 dòng. sử dụng
tiêu đề ngắn cho danh sách và chú thích giải thích dài hơn trong nội dung nếu
lớp hỗ trợ chú thích ngắn tùy chọn.

## Đạo văn và các ấn phẩm trước đó

Nếu các chương phối lại các bài báo đã xuất bản, hãy tuân theo các quy định của trường đại học về việc đưa vào
và sự cho phép của đồng tác giả. Giữ bản PDF được chấp nhận của mỗi bài báo trước và luận án
chương về kiểm soát phiên bản có ghi chú về những gì đã thay đổi (ký hiệu, mở rộng
thí nghiệm, giới thiệu thống nhất).

## Bắt đầu từ tháng này, không phải tháng bạn viết

Tạo khung khi bạn đề xuất dàn ý. Các chương trống được biên dịch
được tính là tiến bộ. Sự hoảng loạn ở giai đoạn cuối nhất là nợ cấu trúc cộng với sự cứng đầu
tập tin lớp học, không phải là một lỗ hổng trong khoa học. Trả khoản nợ đó sớm.