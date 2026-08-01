---

title: "Đơn, một nửa, đôi"
description: "không gian đặt cho toàn bộ tài liệu hoặc một khối cục bộ."
category: "the-page"
order: 2
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Đơn, một nửa, đôi

Theo mặc định, LaTeX đặt văn bản cách dòng đơn, với khoảng cách giữa các dòng được chọn cho phù hợp với phông chữ. Một cuốn sách hoàn thiện trông như thế này, nhưng nhiều tài liệu yêu cầu phải lỏng lẻo hơn: quy định luận văn thường yêu cầu khoảng cách một rưỡi hoặc gấp đôi, và các tạp chí yêu cầu khoảng cách giữa các bản thảo để người đánh giá có chỗ viết nguệch ngoạc. Thay đổi khoảng cách dòng bằng gói `setspace`. Nó điều chỉnh nội dung văn bản mà không phá vỡ các phần của tài liệu nên giữ nguyên khoảng cách.

## Khoảng cách trên toàn tài liệu

```latex
\usepackage{setspace}
\onehalfspacing
% \doublespacing
% \singlespacing
```

Tải gói trong phần mở đầu, sau đó đưa ra một trong ba khai báo. `\onehalfspacing` đặt toàn bộ tài liệu ở khoảng cách một dòng rưỡi, `\doublespacing` tăng gấp đôi nó và `\singlespacing` trở lại bình thường, điều này rất hữu ích nếu bạn cần chuyển trở lại giữa chừng. Các tuyên bố có hiệu lực từ nơi chúng xuất hiện, vì vậy việc đưa một tuyên bố vào phần mở đầu sẽ bao hàm mọi thứ.

Lý do để sử dụng setspace thay vì loay hoay với `\baselinestretch` hoặc `\line Spread` bằng tay là những gì nó cố tình để yên: chú thích cuối trang, chú thích hình và bảng, và các dòng nổi luôn có khoảng cách đơn, đó chính xác là những gì hướng dẫn luận án và quy ước đánh máy mong đợi. Một đoạn mở rộng toàn cầu ngây thơ cũng sẽ tăng gấp đôi khoảng cách cho chú thích cuối trang của bạn và điều đó đọc rất tệ.

Nếu bạn cần một thừa số mà các phím tắt không bao gồm, `\setstretch{1.25}` chấp nhận bất kỳ hệ số nhân nào. Lưu ý rằng "dải cách kép" theo nghĩa của trình xử lý văn bản tương ứng với độ dài khoảng 1,66 trong thuật ngữ LaTeX và `\doublespacing` đã tính đến điều đó, vì vậy hãy chống lại sự thôi thúc viết `\setstretch{2}` trừ khi quy định thực sự yêu cầu điều đó.

## Khoảng cách chỉ cho một khối

Đôi khi chỉ một phần của tài liệu cần có khoảng cách khác nhau: một đoạn trích dẫn dài, một trang khai báo hoặc một bản tóm tắt phải cách dòng đôi trong khi những phần còn lại thì không.

```latex
\begin{spacing}{1.2}
 ...
\end{spacing}
```

Môi trường `spacing` áp dụng hệ số giãn đã cho, ở đây là 1.2, cho văn bản nằm giữa `\begin` và `\end`, sau đó khôi phục mọi nội dung có hiệu lực trước đó. Gói này cũng cung cấp các môi trường `singlespace` và `doublespace` được tạo sẵn cho các trường hợp phổ biến. Vì sự thay đổi nằm trong phạm vi môi trường nên bạn không thể quên chuyển trở lại, đây là chế độ thất bại thông thường khi đưa ra các khai báo trần ở giữa tài liệu.

## Một lời cảnh báo

Không sử dụng khoảng cách dòng để đếm số trang. Kéo dài đến 1.1 để làm cho bài báo trông dài hơn là thủ thuật lâu đời nhất trong cuốn sách và những địa điểm có định dạng nghiêm ngặt sẽ chạy các bước kiểm tra tự động để phát hiện ra điều đó. [Hướng dẫn giới hạn trang](/learn/page-limits-without-crimes/) bao gồm các lựa chọn thay thế hợp pháp. Tiết kiệm không gian cài đặt cho mục đích của nó: đáp ứng yêu cầu về khoảng cách rõ ràng, sau đó chuyển về khoảng cách đơn cho phiên bản sẵn sàng cho máy ảnh.