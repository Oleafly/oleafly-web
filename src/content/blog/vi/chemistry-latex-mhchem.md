---

title: "Đề thi hóa học bằng LaTeX: công thức, sơ đồ và đơn vị SI"
description: "Phản ứng với mhchem, cấu trúc, bảng thí nghiệm, đơn vị SI, thư mục và bản thảo riêng cho sinh viên hóa học và kỹ thuật hóa học."
date: 2026-06-22
tags: [chemistry, research]
---

Các nhà hóa học thường xuất hiện trong LaTeX vì một trong hai lý do: tạp chí khẳng định,
hoặc một cộng tác viên đã làm việc theo cách đó. Dù thế nào đi nữa, các điểm đau trông
quen thuộc: sơ đồ phản ứng, nhãn đồng vị, bảng điều kiện và
thư mục chứa đầy các tạp chí và bằng sáng chế.

Hướng dẫn này bao gồm các báo cáo đại học thông qua việc gửi tạp chí đầu tiên. Nó sẽ
không thay thế ChemDraw cho các sản phẩm tự nhiên phức tạp. Nó sẽ giữ bản thảo
và phần thử nghiệm từ việc đấu tranh với trình biên dịch.

## Phản ứng với mhchem

`mhchem` là câu trả lời thông thường cho các công thức và phản ứng:

```latex
\usepackage[version=4]{mhchem}
\ce{CO2 + C -> 2CO}
\ce{^{14}C}
\ce{H2SO4}
\ce{Fe^2+ <=>[\ce{H2O}] Fe^3+}
```

Ghim phiên bản 4 để cú pháp không bị lệch giữa các đồng tác giả hoặc giữa Overleaf
và cài đặt TeX cục bộ. Hướng dẫn dài hơn:
[công thức hóa học](/learn/chemistry-notation/).

Sơ đồ nhiều bước với thuốc thử ở trên và dưới mũi tên cần nhiều hơn
nội tuyến `\ce`. mhchem xử lý các công thức; bố cục thường muốn có một sơ đồ tạp chí
môi trường hoặc hình ảnh bên ngoài. Đừng nhồi nhét tổng hợp hai mươi bước
thành một loạt các dòng hóa học nội tuyến.

## Kết cấu: chemfig hoặc bản vẽ bên ngoài

`chemfig` vẽ các cấu trúc đơn giản bằng TeX thuần túy và giữ mọi thứ
vector-địa phương. Các sản phẩm tự nhiên phức tạp hầu như luôn tốt hơn như ChemDraw,
Marvin hoặc tương tự, được xuất sang PDF, sau đó là `\includegraphics`. Ưu tiên PDF vector
trên ảnh chụp màn hình PNG để các đường liên kết luôn sắc nét khi in và ở dạng hai cột
bố cục.

Đặt tên file theo ID ghép (`cmpd-12.pdf`). Giữ nguồn ChemDraw có thể chỉnh sửa
trong kho lưu trữ của phòng thí nghiệm ngay cả khi git chỉ giữ bản PDF có trên báo.

## Phần thí nghiệm và bảng dài

Bảng điều kiện (nhiệt độ, dung môi, hiệu suất, chất xúc tác) hoạt động tốt
với `booktabs` và thường là `siunitx` cho các cột số:

```latex
\usepackage{booktabs,siunitx}
\begin{tabular}{l S S}
  \toprule
  {Entry} & {T / \degreeCelsius} & {Yield / \percent} \\
  \midrule
  1 & 25 & 72 \\
  \bottomrule
\end{tabular}
```

Nếu một bảng dài hơn một trang, hãy chuyển sang `bảng dài` trước thời hạn
tuần, không phải sau khi tạp chí phàn nàn về phông chữ 7pt. Chú thích nên nói
"sản lượng" nghĩa là gì (cô lập, NMR, GC) nên người đọc không đoán được.

## Đơn vị và đoạn quang phổ

Chọn một kiểu đơn vị và tuân theo kiểu đó: `siunitx` hoặc thủ công `\mathrm` nếu nhóm
đã đồng ý về điều đó rồi. Các đoạn NMR và HRMS trong phần thử nghiệm được
thường là văn bản đơn giản với khoảng cách cẩn thận. Đừng phát minh ra một ngôn ngữ vĩ mô mỏng manh
giữa bài trừ khi phòng thí nghiệm đã chia sẻ một bài báo.

Báo cáo những con số quan trọng theo cách mà sổ ghi chép thực hiện. LaTeX sẽ vui vẻ in
độ chính xác sai nếu bạn gõ nó vào.

## Sơ đồ so với số liệu

Nhiều tạp chí hóa học phân biệt sơ đồ (phản ứng) với số liệu (đồ thị,
ORTEP, quang phổ). Sử dụng các môi trường mà lớp tạp chí cung cấp (`sơ đồ`,
`figure`) nên việc đánh số phù hợp với sản xuất. Tham chiếu chéo với `\ref` và ổn định
nhãn (`sch:reduction`, `fig:ortep-1`).

## An toàn của dự thảo

Các tuyến đường chưa được xuất bản và các đối tác công nghiệp biến các biên tập viên chỉ dùng trên nền tảng đám mây thành một
câu hỏi chính sách, không chỉ là một câu hỏi thuận tiện. Giữ `.tex` và số liệu
vì các tệp thông thường trên đĩa bằng Git thật nhàm chán theo một cách hữu ích.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) là một địa phương
biên tập viên nghiên cứu: trình biên dịch đi kèm, kiểm tra trích dẫn và giới thiệu trên toàn dự án, ngoại tuyến
chính tả và ngữ pháp chỉ ở văn xuôi (vì vậy các phím `\ce` và trích dẫn không được gắn cờ là
"lỗi chính tả"), điểm kiểm tra Git thực, AI tùy chọn chỉ chỉnh sửa thông qua phê duyệt
khác biệt. Không có tài khoản. Bản nháp không cần trình chỉnh sửa của bên thứ ba tồn tại.
Mạng dành cho các gói, tra cứu trích dẫn hoặc AI nếu bạn bật chúng.

## Trích dẫn đúng tài liệu tiểu học

Thư mục hóa học chủ yếu dựa vào các tạp chí và bằng sáng chế. Xuất từ Zotero
hoặc EndNote thành `.bib` với các khóa ổn định, sau đó xác thực các trường còn thiếu trước
gửi: [Trình xác thực BibTeX](/tools/bibtex-validator/). Thư mục trống
hầu như luôn là lỗi đường dẫn hoặc lỗi phụ trợ, không thiếu trích dẫn.

Phong cách tạp chí khác nhau (ACS, RSC, Springer). Sử dụng phong cách thư mục
mẫu đi kèm. Không dán số và năm tác giả lại với nhau
lời mở đầu.

## Sự hợp tác

Sở hữu các phần của từng người khi bạn có thể. Một người sở hữu `.bib`. Đồng ý về
phiên bản mhchem và định dạng xuất cấu trúc lên phía trước. Khi một số thử nghiệm
các phần phát triển song song, biên dịch bản PDF đầy đủ mỗi tuần để tích hợp
điều bất ngờ xuất hiện sớm.

## Danh sách kiểm tra trước khi gửi

Đáng để vượt qua lần cuối:

- phiên bản mhchem được ghim; công thức biên dịch mà không có cảnh báo bạn đã
  phớt lờ.
- Cấu trúc là vector nếu có thể; ID phức hợp khớp với văn bản, lược đồ,
  và SI.
- Bàn sử dụng kiểu ba quy tắc; đơn vị nhất quán; sản lượng được xác định trong chú thích
  hoặc ghi chú.
- Đánh số sơ đồ/hình phù hợp với lớp tạp chí.
- `.bib` được xác thực; phong cách phù hợp với mẫu.
- Các tuyến nhạy cảm nằm trong một thư mục cục bộ với quyền kiểm soát truy cập phù hợp với phòng thí nghiệm
  chính sách.

## SI và danh sách kiểm tra tạp chí

Nhiều tạp chí hóa học xuất bản danh sách kiểm tra tác giả (độ phân giải đồ họa, TOC
kích thước đồ họa, đặc tính ghép). Đọc lướt bản PDF đó trước khi bạn vẽ
đề án. Tỷ lệ khung hình đồ họa TOC sai là một lý do ngớ ngẩn đối với quản trị viên
sự từ chối.

##Thông tin hỗ trợ

SI thường có mẫu hoặc quy tắc tiêu đề riêng. Giữ nguyên các nguồn SI
repo làm bài viết chính với tên tập tin rõ ràng. Khi tạp chí yêu cầu đầy đủ
mô tả đặc tính, hãy kiểm tra xem mọi số ghép trong văn bản chính có thực sự
xuất hiện trong SI.

Định dạng hóa học phức tạp vì các đối tượng dày đặc. Nhận phản ứng
và các bảng bên phải và phần thử nghiệm đọc như một công việc cẩn thận, không phải một
dán từ một cuốn sổ tay PDF.