---

title: "Luận văn vật lý: phương trình, đơn vị và sự tỉnh táo nhiều tập tin"
description: "Ký hiệu, siunitx, dự án nhiều chương, bẫy nhật ký hai cột và thói quen biên soạn ngoại tuyến cho sinh viên vật lý và thiên văn học."
date: 2026-06-20
tags: [physics, thesis, math]
---

Các bản thảo vật lý mang nhiều tính toán trên mỗi trang hơn hầu hết các lĩnh vực. Điều đó ổn thôi
cho đến khi nửa chương bị hỏng toàn bộ phần biên dịch vì một nhãn đã bị di chuyển,
hoặc cho đến khi mỗi đồng tác giả phát minh ra một quy ước vectơ đậm khác nhau.

Đây là một thiết lập thực tế cho các chương Thạc sĩ/Tiến sĩ, ghi chú cộng tác và tạp chí
bài nộp vẫn muốn có hai cột.

## Nhiều tệp ngay từ đầu

Ngay cả một luận án ngắn cũng được hưởng lợi từ tệp gốc và chương bao gồm:

```latex
\documentclass{report} % or the university class
\begin{document}
\include{chapters/intro}
\include{chapters/methods}
\include{chapters/results}
\end{document}
```

Sử dụng `\includeonly{chapters/methods}` trong khi bạn soạn thảo để không phải xây dựng lại
ba chương để sửa một phương trình. Chi tiết:
[một tập tin gốc, nhiều chương](/learn/split-chapter-files/).

Giữ các số liệu trong `figures/ch2/` và đặt tên cho các phương trình bằng nhãn nhận biết theo chương
(`eq:ch2-hamiltonian`) để việc hợp nhất không xung đột.

## Đơn vị không phải là văn bản

Viết `$v = 3.0\,\mathrm{m\,s^{-1}}$` bằng tay nếu bạn phải, hoặc tải `siunitx`
và sử dụng `\qty{3.0}{m.s^{-1}}`. Các tạp chí khác nhau về khoảng cách và khoảng cách mỏng; chọn
một đường dẫn gói và bám vào nó. Phong cách hỗn hợp trông giống như hai tác giả không bao giờ
đã gặp.

Đối với các bảng giá trị, các kiểu cột `siunitx` căn chỉnh số thập phân và giữ nguyên đơn vị
tiêu đề nhất quán. Không trộn lẫn `m/s` và `ms^{-1}` trong cùng một tờ giấy mà không có
lý do nêu trong phương pháp.

## Dirac, vectơ và quy ước in đậm

Các nhóm lượng tử và vật chất ngưng tụ thường cần ký hiệu Dirac. Các gói như
`vật lý` hoặc macro chuyên dụng cho `\ket`, `\bra`, `\braket` beat ad-hoc
sự kết hợp của các góc. Các nhóm cơ học cổ điển tranh luận về mũi tên đậm và mũi tên
vectơ. Ghi lại quy ước trong phần mở đầu và từ chối các trường hợp ngoại lệ đặc biệt
giữa chương.

Xem [ký hiệu Dirac](/learn/physical-braket/) và [bold math](/learn/bold-math/).

Xác định các toán tử một lần (`\DeclareMathOperator`) để các toán tử vi phân và
các hàm được đặt tên không trôi theo phông chữ.

## Đánh số và tham chiếu chéo

Phương trình số bạn sẽ trích dẫn; phần còn lại không đánh số. một trang của
`(1)(2)(3)...` khó đọc hơn một câu chuyện ngắn có hai dòng được gắn thẻ.
Sử dụng `\eqref` cho các phương trình và nhãn ổn định. Kiểm tra tham chiếu toàn dự án
bắt được nhãn đã xóa trước khi cố vấn thực hiện.

Các định lý và bổ đề (nếu bạn sử dụng chúng) nên chia sẻ sơ đồ đánh số rõ ràng với
phần còn lại của mẫu bộ phận. Xem thêm
[định lý và chứng minh](/learn/theorems-proofs/).

## Bẫy tạp chí hai cột

APS, IOP và các lớp tương tự thay đổi hành vi nổi. Một con số trông ổn
trong `bài viết` có thể từ chối ngồi cạnh đoạn trích dẫn nó. Biên dịch
so với lớp thật sớm, không phải cuối tuần trước khi nộp bài.

Mặc định giúp:

- chiều rộng hình khoảng `0,45\textwidth` hoặc `\columnwidth` trong hai cột
- các số liệu rộng là `figure*` (thường chỉ ở phần đầu trang)
- dẫn xuất dài trong `multline` / `split`, hoặc chuyển sang phần phụ lục

Không thu nhỏ phông chữ phương trình cho đến khi không thể đọc được. Người đánh giá thông báo.

## Hình: sơ đồ và sơ đồ

Xuất các ô dưới dạng PDF từ matplotlib/gnuplot/Root khi bạn có thể. Raster PNG là
đối với ảnh chụp và hình ảnh máy dò, ở mức đủ dpi. Sơ đồ có thể là TikZ hoặc
nghệ thuật vector bên ngoài; giữ nguồn trong repo. Cắt khoảng trắng trước
`\bao gồm đồ họa`.

## Ngoại tuyến khi mạng phòng thí nghiệm ngừng hoạt động

Đường truyền và phòng sạch không được biết đến là có Wi‑Fi ổn định.
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) vận chuyển
biên dịch và giữ SyncTeX, không gian làm việc PDF và bản xem trước toán học cục bộ. Mỗi
dự án là Git thực sự với các điểm kiểm tra tự động, vì vậy việc chỉnh sửa phương trình sai là một
khôi phục đi. Tệp PDF vẫn được tạo khi trình chỉnh sửa trình duyệt không tải.

Bạn có thể tập hợp một ngăn xếp ngoại tuyến tương tự bằng TeX Live, trình xem PDF và Git bằng cách
tay. Dù bằng cách nào, luận án không nên phụ thuộc vào một cổng bị khóa để biên dịch lại
chương ba.

## Sự hợp tác

Sở hữu các chương của tác giả khi có thể. Chia sẻ một bảng ký hiệu. Chạy toàn bộ tài liệu
biên dịch hàng tuần nên việc tham khảo nhiều chương sẽ thất bại sớm. Điều khiển từ xa Git riêng cho
kết quả chưa được công bố; chỉ công khai khi chính sách cộng tác cho phép.

## Phụ lục và tài liệu bổ sung

Các đạo hàm dài và các đồ thị bổ sung nằm trong phần phụ lục hoặc phần bổ sung riêng
PDF khi tạp chí có hai cột và giới hạn trang. Tham khảo chéo một cách rõ ràng
("xem Phụ lục B") có nhãn thật. Đừng cho rằng trọng tài sẽ mở zip
những hình vẽ rời rạc không có chú thích.

##Khi cố vấn chỉnh sửa trên giấy

Áp dụng đánh dấu cho nguồn TeX ngay trong ngày nếu có thể. Những chồng giấy đã cũ đi.
Nếu hai cố vấn đánh dấu ký hiệu xung đột, hãy cập nhật bảng mở đầu và gửi
ký hiệu một trang PDF để lập luận không bị kiện tụng lại mỗi bản nháp.

## Nộp trước

Bảng ký hiệu hoàn chỉnh, vectơ và dấu ngoặc/kets nhất quán, các đơn vị thông qua một hệ thống
(`siunitx` hoặc kiểu thủ công đã được thống nhất). Các chương nên bao gồm rõ ràng với
Đang giải quyết `\ref`/`\eqref`. Biên soạn tạp chí thực tế hoặc lớp luận văn không có phông chữ
những điều ngạc nhiên. Các số liệu đáp ứng quy tắc dpi và màu sắc; chú thích đứng một mình. Lưu trữ
nguồn và PDF với hàm băm cam kết cho phiên bản đã gửi.

Viết vật lý đã đủ khó rồi. Chuỗi công cụ sẽ nhàm chán.