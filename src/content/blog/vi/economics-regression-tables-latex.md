---

title: "Kinh tế và khoa học xã hội: bảng hồi quy được các tạp chí chấp nhận"
description: "sổ sách, bảng ba phần, ngôi sao siunitx, ghi chú theo ước tính, thói quen biblatex và phiên bản giấy tờ làm việc cho kinh tế, chính trị-khoa học và xã hội học."
date: 2026-06-26
tags: [economics, social-science, tables]
---

Khoa học xã hội thực nghiệm sống và chết bởi những cái bàn. Một số thập phân bị lệch hoặc một
ngôi sao quan trọng bị thiếu có thể ghi một chu trình sửa đổi và gửi lại mà không có gì
để làm với chiến lược nhận dạng của bạn. Các tạp chí hầu như quan tâm đến khả năng đọc
nhiều như các hệ số.

Những gì tiếp theo dành cho sinh viên và RA xuất từ Stata hoặc R rồi dọn dẹp
LaTeX bằng tay.

## tab sách không phải là tùy chọn

Các vạch dọc và các đường ngang đôi trông giống như Word những năm 1990. Sử dụng ba
quy tắc ngang từ `booktabs`:

```latex
\usepackage{booktabs}
\begin{tabular}{lccc}
  \toprule
  & (1) & (2) & (3) \\
  \midrule
  Treatment & 0.12 & 0.09 & 0.08 \\
  \bottomrule
\end{tabular}
```

Xem [bảng ba quy tắc](/learn/booktabs-beautiful/). Xuất từ R
(`modelsummary`, `công cụ kiểu estout`, `stargazer` cũ hơn) hoặc Stata sang LaTeX
các mảnh vỡ, sau đó tự làm sạch hàng tiêu đề. Tiêu đề được tạo tự động là
thường quá rộng hoặc quá khó hiểu đối với bản PDF cuối cùng.

## Ghi chú dưới bàn, không phải ghi chú ngẫu nhiên

`baparttable` giữ cho chú thích, dạng bảng và ghi chú có cùng chiều rộng:

```latex
\begin{table}
\begin{threeparttable}
  \caption{Main results}\label{tab:main}
  \begin{tabular}{...} ... \end{tabular}
  \begin{tablenotes}
    \small
    \item Notes: Robust standard errors in parentheses.
    Sample is ... Fixed effects: ...
  \end{tablenotes}
\end{threeparttable}
\end{table}
```

Đặt cỡ mẫu, hiệu ứng cố định, ghi chú SE được nhóm và ngôi sao có ý nghĩa
huyền thoại đây Đừng treo chú thích ở một ô duy nhất mà chỉ một số người đọc
sẽ chú ý. Nhãn bảng điều khiển (A/B) nằm trong chú thích hoặc ở phần giữa có nội dung rõ ràng
văn bản, không phải ở dạng chú giải kiểu hình không bao giờ xuất hiện trong PDF.

## Cột số và dấu sao có ý nghĩa

Các loại cột `siunitx` (`S`) căn chỉnh theo dấu thập phân. Chỉ riêng điều đó đã tạo nên một
bảng kết quả nhìn có chủ ý. Các ngôi sao phá vỡ các cột số thuần túy, vì vậy bạn
thường cần định dạng tùy chỉnh hoặc cột văn bản. Các mẫu phổ biến:

Báo cáo các hệ số và SE trên các hàng riêng biệt (tiêu chuẩn trong econ) hoặc gói sao
vì vậy việc căn chỉnh vẫn hoạt động (`0,012^{***}` với loại cột chuyên dụng).

Nhất quán giữa các bảng: cùng ngưỡng sao, cùng kiểu SE, cùng số
số thập phân cho cùng một số liệu. Người đánh giá so sánh Bảng 2 với Bảng 3 về
mục đích.

Một bản phác thảo trực quan đầu tiên là ổn. Trình duyệt
[trình tạo bảng](/tools/table-generator/) có thể phác thảo cấu trúc; trận chung kết
bảng vẫn phải đi qua `booktabs` và ghi chú SE của bạn.

## Từ phần mềm hồi quy đến sẵn sàng cho máy ảnh

Vòng lặp điển hình trông như thế này. Đóng băng tập lệnh ước tính và hạt giống. Xuất một
Đoạn LaTeX hoặc CSV ước tính. Thả nó vào một cái vỏ bảng ổn định
nhãn (`tab:main`, `tab:strong`). Viết chú thích để người đọc lướt biết được
biến phụ thuộc, mẫu và công cụ ước tính mà không cần đọc ghi chú hai lần.
Biên dịch, sau đó sửa các hộp quá đầy bằng cách cắt các cột; chỉ xoay lần cuối
khu nghỉ dưỡng.

Nếu bảng dài hơn một trang, hãy chuyển sang `bảng dài` (hoặc bảng chia nhỏ)
trước tuần hạn chót, không phải sau khi tạp chí phàn nàn về phông chữ 7pt.

## Trích dẫn: năm tác giả là phương ngữ

Hầu hết các địa điểm kinh tế và chính trị đều mong đợi năm tác giả. `biblatex` với
`style=authoryear` (hoặc phong cách của tạp chí) về lâu dài thì dễ hơn là đấu tranh
các tập tin `.bst`. Nếu phòng thí nghiệm vẫn sử dụng `natbib` thì không sao; chỉ cần không trộn
cả hai ngăn xếp trong một lời mở đầu. Tổng quan:
[BibTeX hoặc biblatex](/learn/bibtex-vs-biblatex/).

Khóa phải ổn định (`tác giả:năm:từ khóa`). Tái xuất từ Zotero theo
khóa mới giữa dự án là cách `\cite` ngắt tuần nộp bài. Xác thực
`.bib` cho các năm và tạp chí bị thiếu:
[Trình xác thực BibTeX](/tools/bibtex-validator/).

## Giấy tờ làm việc và SSRN

Phiên bản giấy làm việc thay đổi hàng tháng. Giữ ngày của trang tiêu đề trong macro:

```latex
\newcommand{\paperdate}{June 2026}
```

Hãy khắc phục sự cố khi bạn xuất lại tệp PDF. Lịch sử Git cục bộ trung thực hơn
`final_final_v7.pdf` trên bộ nhớ dùng chung. Cam kết khi đặt bảng chính
biên dịch; gắn thẻ hoặc nhắn tin cho phiên bản gửi một cách rõ ràng.

Một biên tập viên nghiên cứu coi dự án như một kho lưu trữ Git thực sự (các điểm kiểm tra
sau khi biên dịch, khôi phục, GitHub riêng tư tùy chọn) phù hợp với cách hoạt động thực nghiệm
đã có mã phiên bản. Bài viết và kịch bản dự toán không nên tồn tại
theo thói quen sao lưu khác nhau.

## Nhận dạng và đạo đức trong bảng (phiên bản ngắn)

LaTeX không thể sửa chữa một thiết kế yếu, nhưng nó có thể làm cho một thiết kế mạnh mẽ có thể đọc được.
Nêu rõ công cụ ước tính và mẫu trong chú thích. Đừng che giấu sự thật rằng
cột (3) bỏ một nửa mẫu vào chú thích cuối trang không ai đọc. Nếu bạn hiển thị
các bảng độ bền, hãy giữ nguyên thứ tự các biến phụ thuộc như bảng chính để
độc giả có thể quét.

## Danh sách kiểm tra trước khi gửi

Những điều khiến người ta muộn màng:

- Bảng ba quy tắc; không có quy tắc dọc.
- Căn chỉnh thập phân; sao nhất quán và ghi chú SE.
- Chú thích nêu kết quả, mẫu, ước tính.
- Nhãn ổn định; văn bản trích dẫn `\ref{tab:...}`.
- Phong cách thư mục phù hợp với địa điểm; `.bib` đã được xác thực.
- Ngày làm việc và cam kết Git khớp với những gì bạn đã tải lên.

## Gói sao chép

Nhiều tạp chí muốn có mã và dữ liệu. Giữ các tập lệnh xuất bảng bên cạnh giấy
repo (hoặc được liên kết với hàm băm xác nhận). Khi hệ số thay đổi vì
tập lệnh dọn dẹp đã thay đổi, tạo lại đoạn LaTeX và gửi lại cả hai. A
bảng không thể sao chép được là một trách nhiệm pháp lý ngay cả khi nó trông sạch sẽ.

## Beamer dành cho hội thảo

Sử dụng lại các đoạn `booktabs` tương tự trong các trang trình bày khi bạn có thể hoặc xuất PDF
cây trồng của các bảng. Xây dựng lại các con số bằng tay thành một slide là cách
slide hội thảo không đồng ý với bài báo.

Hãy lập bảng đúng và chiến lược nhận dạng sẽ được lắng nghe công bằng. Nhận
họ sai và bạn phải mất một thời gian để tranh luận về việc định dạng.