---

title: "LaTeX cho các tài liệu học máy không có ký hiệu lộn xộn"
description: "Bảng ký hiệu, bảng cắt bỏ, thuật toán, số liệu từ quá trình đào tạo và Git bên cạnh bài báo từ bản thảo arXiv đầu tiên đến khi sẵn sàng cho máy ảnh."
date: 2026-06-18
tags: [machine-learning, research, math]
---

Hầu hết các bài viết ML đều thất bại theo cách tương tự trong LaTeX: phép toán ở trang ba vẫn ổn và
không nhất quán ở trang mười hai. Thất bại là `L` ở một phần, `\mathcal{L}` ở
khác và các vectơ in đậm chỉ xuất hiện khi tác giả nhớ lại. Người đánh giá
để ý ngay cả khi họ không bình luận về nó.

Đây là tài liệu hướng dẫn thực hành dành cho sinh viên viết báo cáo hội thảo, hội thảo
các bài nộp và các chương luận văn có chung DNA với mã đào tạo.

## Chọn một bảng ký hiệu vào ngày đầu tiên

Trước khi bạn viết tác phẩm liên quan, hãy viết hai mươi dòng macro:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
\DeclareMathOperator*{\argmax}{arg\,max}
\newcommand{\loss}{\mathcal{L}}
\newcommand{\expect}{\mathbb{E}}
\newcommand{\kl}{\mathrm{KL}}
```

Dán khối đó vào mọi nhánh đồng tác giả. Khi một người mẫu phát minh ra một biểu tượng mới,
thêm nó vào trang tính trước, sau đó sử dụng nó. các
[Bài học về ký hiệu theo sau AI](/learn/ai-follow-notation/) cũng có ý tưởng tương tự với một
mô hình ngôn ngữ trong vòng lặp: mô hình phải tuân theo bảng tính, không phát minh ra phông chữ.

Bản xem trước toán học trực tiếp trong trình chỉnh sửa nghiên cứu giúp bạn nắm bắt được `\mathcal{L}` đó và
`L` không phải là đối tượng giống nhau khi bạn gõ.

## Những chiếc bàn vẫn sẵn sàng cho máy ảnh

Các bảng cắt bỏ phát triển cho đến khi chúng rơi ra khỏi trang. Thích `booktabs` không có
quy tắc dọc, `siunitx` cho số thập phân được căn chỉnh và chú thích cho biết
số liệu và sự phân chia (ImageNet, CIFAR, trong miền so với OOD). Nếu bảng kéo dài
các trang, hãy sử dụng `longtable` sớm thay vì thu nhỏ phông chữ xuống 7pt.

Trình tạo trực quan giúp ích cho bản phác thảo đầu tiên:
[trình tạo bảng](/tools/table-generator/) chạy trong trình duyệt. Bàn cuối cùng
vẫn nên đặt tên số liệu trong chú thích và xác định ± là std hoặc se.

Báo cáo hạt giống và phạm vi siêu tham số trong bảng phụ lục khi địa điểm cho phép.
Các bảng chính vẫn có thể quét được.

## Thuật toán và danh sách

Mã giả thuộc `algorithm2e` hoặc `algorithmicx`, không thuộc monospace
đoạn văn. Các đoạn đào tạo thực sự thuộc về `danh sách` hoặc `đúc` với một
bộ ngôn ngữ để người đánh giá có thể đọc lướt. Giữ bài viết chính ngắn gọn; đặt cấu hình đầy đủ
trong phần phụ lục hoặc liên kết repo có hàm băm xác nhận.

```latex
\begin{algorithm}
\caption{Training step}\label{alg:step}
...
\end{algorithm}
```

Thuật toán số bạn trích dẫn. Đừng đổ năm trang PyTorch vào PDF.

## Số liệu từ TensorBoard và matplotlib

Xuất PDF hoặc SVG khi bạn có thể. Raster PNG ở 300dpi là phù hợp cho giao diện người dùng
ảnh chụp màn hình, không phải cho các ô đường. Cắt bớt khoảng trắng trước `\includegraphics`. Nếu một
float chuyển sang phần tiếp theo, sửa kích thước và vị trí trước khi bạn chiến đấu `[H]`
trong một giờ: [vị trí thả nổi](/learn/figure-wrong-position/).

Cắt bỏ nhiều bảng: xây dựng trong TeX với `phụ đề` hoặc soạn thảo bên ngoài và
bao gồm một bản PDF. Giữ màu sắc nhất quán cho "của chúng tôi" trên các số liệu để skimmer
học truyền thuyết một lần.

## Lớp hội nghị hai cột

Các lớp kiểu NeurIPS, ICML, ICLR và CVPR thay đổi lề và quy tắc thả nổi.
Biên dịch sớm so với lớp chính thức. Giới hạn trang là có thật; đừng nghiền nát
phông chữ. Di chuyển các bằng chứng và phần cắt bỏ bổ sung vào phụ lục hoặc bản PDF bổ sung khi
cuộc gọi cho phép.

## Công việc liên quan và trích dẫn

Sử dụng khóa trích dẫn ổn định và xuất khẩu Scholar sạch sẽ. Xác thực `.bib`:
[Trình xác thực BibTeX](/tools/bibtex-validator/). Trích dẫn mã và tập dữ liệu bạn
phụ thuộc vào. Năm tác giả và số tùy thuộc vào địa điểm; sử dụng mẫu
phong cách, không phải là một sự lai tạp.

## Git bên cạnh tờ giấy

Mọi thay đổi về kiến ​​trúc phải là một cam kết mà bạn có thể đặt tên. Xử lý giấy và
mã giống như cùng một dự án, không phải hai thói quen sao lưu riêng biệt.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) giữ bài báo
trong kho Git thực bên cạnh trình soạn thảo nhận biết dự án với bản xem trước toán học trực tiếp,
giới thiệu tệp chéo, hoàn thành trích dẫn và SyncTeX PDF. Điều đó phù hợp với cách mã ML
đã sống rồi. Ghép nối nó với [cheatsheet](/learn/cheatsheet/) khi bạn quên
cú pháp theo một thời hạn.

Gắn thẻ cam kết phù hợp với nội dung tải lên OpenReview hoặc CMT. Bạn sẽ muốn nó
trong lúc phản bác.

## Phản bác và sẵn sàng cho máy ảnh

Khoảng thời gian phản bác rất ngắn. Giữ một nhánh hoặc thư mục cho "thí nghiệm bác bỏ"
để bạn không làm ô nhiễm nguồn PDF đã gửi. Máy ảnh sẵn sàng thường cho phép
trang bổ sung; sử dụng nó cho rõ ràng, không phải để loại bỏ mỗi lần chạy thất bại.

## Tác động và hạn chế rộng hơn

Ngay cả khi địa điểm yêu cầu một đoạn giới hạn hoặc tác động xã hội ngắn,
viết nó bằng ngôn ngữ đơn giản. LaTeX sẽ không lưu lại một đoạn văn mơ hồ. Đặt tiêu cực
kết quả bạn có thể để ở phần phụ lục nếu giới hạn trang chính chặt chẽ,
và nói rằng bạn đã viết trong văn bản chính để người đánh giá không cho rằng bạn đã giấu chúng.

## Trước khi tải lên

Kiểm tra xem bảng ký hiệu có nhất quán giữa các phần không, các bảng chính có
có thể đọc được với các số liệu được đặt tên và ± được xác định, đồng thời các thuật toán và số liệu được trích dẫn
theo thứ tự. Xác nhận lớp chính thức biên dịch trong giới hạn trang không có phông chữ
tội phạm, `.bib` sạch sẽ với mã và dữ liệu được trích dẫn và hàm băm cam kết là
được ghi lại cho tệp PDF đã tải lên.

Các thí nghiệm ML đã đủ ồn ào rồi. Giữ yên lặng các ký hiệu và bảng biểu.