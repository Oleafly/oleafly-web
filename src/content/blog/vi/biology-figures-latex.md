---

title: "Các bài báo về sinh học và khoa học đời sống: số liệu, tấm nhiều bảng và đồng tác giả"
description: "LaTeX thực tế dành cho phòng thí nghiệm ẩm ướt và sinh học tính toán: số liệu nhiều bảng, độ phân giải, phần bổ sung, ký hiệu thống kê và cộng tác mà không ghi đè lên nhau."
date: 2026-06-24
tags: [biology, figures, collaboration]
---

Các bản thảo về khoa học đời sống là hình ảnh đầu tiên. Người đánh giá lướt qua đĩa trước khi họ
đọc văn xuôi của bạn, vì vậy nhân vật phải đưa ra lời khẳng định mà không cần vẫy tay
chú thích. LaTeX xử lý tốt việc đó nếu bạn coi các số liệu là hạng nhất
các tệp dự án thay vì thứ gì đó bạn dán vào lúc 2 giờ sáng trước phần bổ sung
thời hạn.

Các nhóm phòng thí nghiệm ướt và tính toán gặp phải tình trạng lộn xộn giống nhau: các bảng không được chia sẻ
thanh tỷ lệ, tạo phẩm JPEG trên các ô, phần bổ sung không biên dịch được và
chục đồng tác giả biên tập một đoạn văn. Dưới đây là những gì thực sự hoạt động.

## Hình nhiều bảng

Người đánh giá mong đợi bảng (a)(b)(c) dưới một chú thích. Bạn có thể:

1. Xây dựng tấm bên ngoài TeX (Illustrator, Inkscape, Fiji xuất) và thả
   trong một tệp PDF hoặc PNG, hoặc
2. Tập hợp trong TeX với `subcaption` khi mỗi bảng là một tệp riêng:

```latex
\usepackage{subcaption}
\begin{figure}[htbp]
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{a.pdf}
    \caption{Control}\label{fig:exp-a}
  \end{subfigure}\hfill
  \begin{subfigure}{0.48\textwidth}
    \includegraphics[width=\linewidth]{b.pdf}
    \caption{Treatment}\label{fig:exp-b}
  \end{subfigure}
  \caption{Overall experiment.}\label{fig:exp}
\end{figure}
```

Chỉ tham khảo các bảng dưới dạng Hình~\ref{fig:exp}a trong văn bản nếu kiểu tạp chí
cho phép nó. Nhiều địa điểm thích "Hình 2A" hơn khi áp dụng một sơ đồ
ở khắp mọi nơi. Thông tin thêm về mẫu đó:
[bảng a, b, c](/learn/subfigures-abc/).

Đặt tên tệp một cách nhất quán (`fig03_western_a.pdf`) để không ai phát minh ra
`final_gel_NEW.png` tuần nộp hồ sơ.

## Định dạng độ phân giải, màu sắc và tệp

Giữ các kho lưu trữ kính hiển vi dưới dạng TIFF hoặc PDF có độ phân giải cao. Đối với giấy PDF
sử dụng đồ họa vector cho sơ đồ và PNG/PDF với dpi đủ cho
dữ liệu raster. Bỏ qua các chú thích và gel dòng JPEG. Tạo tác nén
đọc như khoa học cẩu thả ngay cả khi thí nghiệm vẫn ổn.

Kiểm tra chi phí màu và quy tắc in trước khi bạn thiết kế bảng màu sáu màu
chỉ hoạt động trên màn hình đã hiệu chỉnh của bạn. Một số tạp chí muốn có CMYK; những người khác chuyển đổi
tệ mà không hỏi. Khi họ yêu cầu phiên bản khóa an toàn thang độ xám
số liệu, đưa cho họ những số liệu đó.

Đặt các thanh tỷ lệ và đơn vị cường độ trên bảng điều khiển, không chỉ trong chú thích. Nếu
số liệu bố trí lại sản xuất, thanh tỷ lệ nhúng tồn tại; ghi chú chỉ có chú thích
thường thì không.

## Sơ đồ và bảng dữ liệu

Giữ "phim hoạt hình về con đường" tách biệt khỏi "định lượng vết bẩn".
Phim hoạt hình có thể là TikZ hoặc nghệ thuật vector bên ngoài. Bảng dữ liệu nên ở gần
xuất bản phân tích để bạn có thể tạo lại chúng khi người đánh giá muốn
chuẩn hóa khác nhau. Lưu ý đường dẫn tập lệnh phân tích trong ghi chú chú thích hoặc
bổ sung khả năng tái sản xuất khi tạp chí cho phép.

## Phần bổ sung vẫn được biên dịch

Những chiếc bàn khổng lồ, những loại gel bổ sung và những bức ảnh tĩnh trong phim là những phần bổ sung có chức năng riêng
tài liệu hoặc phụ lục rõ ràng. Một số quy tắc giúp giảm đau đầu:

Nhãn phải là duy nhất nếu phần chính và phần bổ sung có chung một biên dịch. Nếu họ là
các dự án riêng biệt, viết "Hình S3" bằng văn bản thuần túy và không dựa vào `\ref`
trên các tệp PDF. Giữ một danh sách ngắn về những tuyên bố trong văn bản chính nào hướng tới
các mặt hàng bổ sung, vì vậy không có gì trôi đi.

Phần bổ sung không được biên soạn trong tuần nộp vẫn là của bạn
vấn đề, ngay cả khi tệp PDF chính trông sạch sẽ.

## Hỗn loạn nhiều tác giả

Các bài viết sinh học thường có nhiều đồng tác giả ở các cấp độ kỹ năng LaTeX khác nhau. Sở hữu
tập tin theo phần (`results.tex`, `methods.tex`, `figs.tex`), hợp nhất thông qua
Git và quyết định ai duy trì `.bib` (một người hoặc một nhóm Zotero được chia sẻ
xuất khẩu).

Thư mục dự án cục bộ dễ nén hơn đối với cộng tác viên hơn là trên đám mây
dự án mà họ mất quyền truy cập sau khi tốt nghiệp. Lịch sử Real Git đánh bại email
tệp đính kèm có tên `manuscript_JM_edits_FINAL.docx` mà ai đó chuyển đổi lại
sang TeX bằng tay. Điểm kiểm tra sau khi biên dịch thành công; khôi phục khi hợp nhất
đi sai hướng; giữ một điều khiển từ xa riêng tư.

Nếu một số đồng tác giả chỉ soạn thảo Word, xuất DOCX hoặc PDF cho họ và giữ nguyên `.tex`
như nguồn gốc của sự thật. Xem
[đồng tác giả chỉ nói Word](/learn/collaborator-uses-word/).

## Phương pháp và ký hiệu thống kê

Xác định macro thống kê một lần để giá trị p không hiển thị dưới dạng cả `$p$` và
`p=` trong cùng một bài báo:

```latex
\newcommand{\pvalue}[1]{$p = #1$}
\newcommand{\ci}[2]{95\% CI $[#1, #2]$}
```

Nêu rõ phép kiểm tra, n và hiệu chỉnh phép so sánh bội trong các phương pháp hoặc bảng
ghi chú, không chỉ trong một huyền thoại hình bị cắt trong quá trình sản xuất. dày đặc
giấy tờ được hưởng lợi từ một danh sách ký hiệu ngắn. Kiểm tra giới thiệu/trích dẫn trực tiếp trong
biên tập viên nghiên cứu bắt được `\ref` vào bảng đã bị xóa trước khi người đánh giá thực hiện.

## Chú thích chứa đựng xác nhận quyền sở hữu

Một chú thích hay cho biết những gì được đo lường, trong hệ thống nào và những gì người đọc
nên chú ý. Tránh "Xem văn bản." Đừng đổ các phương thức vào chú thích rằng
thuộc phần phương pháp. Các chữ cái trong bảng (in đậm hoặc ngoặc đơn) nên
phù hợp với phong cách ngôi nhà.

## Danh sách kiểm tra số liệu trước khi gửi

Trước khi bạn nhấn gửi, hãy xem các số liệu một lần:

- Mỗi số liệu chính được trích dẫn theo thứ tự (hoặc theo thứ tự mà tạp chí cho phép).
- Tấm có dán nhãn; thanh tỷ lệ nơi chúng quan trọng.
- Không có sự lộn xộn JPEG trên bảng định lượng.
- Biên dịch bổ sung; Số S chưa được xáo trộn lại.
- Kiểm tra chính sách màu sắc; kích thước tập tin theo giới hạn cổng thông tin.
- Hình ảnh và tập lệnh nguồn vẫn có thể tìm thấy trong kho lưu trữ của dự án hoặc phòng thí nghiệm.

## Phương Tây, gel và độ tương phản

Không xử lý quá nhiều vết mờ cho tệp PDF. Các tạp chí và độc giả theo dõi sự tương phản
trò chơi. Giữ các tập tin thô trong kho lưu trữ của phòng thí nghiệm và gửi các bảng phù hợp với những gì
định lượng được sử dụng. Nếu bạn sắp xếp lại các bảng, hãy cập nhật mọi bảng trong văn bản
thư trong cùng ngày chứ không phải "sau".

## Phim và phần bổ sung tương tác

Khi tạp chí cho phép chiếu phim, hãy lưu trữ chúng theo cách họ hướng dẫn và đưa ra
vẫn còn có chú thích trong bản PDF. Đừng phụ thuộc vào liên kết đám mây cá nhân mà
chết sau khi tốt nghiệp.

Số liệu là xương sống của các giấy tờ này. LaTeX chỉ là khung. Hãy chắc chắn
khung hình không phải là thứ bị lỗi vào đêm trước khi gửi.