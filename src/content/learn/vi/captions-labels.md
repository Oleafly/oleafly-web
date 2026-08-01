---

title: "Chú thích khớp với số"
description: "Đặt nhãn sau chú thích để số dính vào."
category: "floats-and-ink"
order: 4
level: "beginner"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Chú thích khớp với số

Tham chiếu chéo là một trong những điều LaTeX làm tốt hơn trình xử lý văn bản. Bạn không bao giờ gõ "Hình 3" bằng tay. Thay vào đó, bạn gắn nhãn vào hình và để LaTeX điền số ở mọi nơi nó được đề cập, để các con số vẫn chính xác cho dù bạn sắp xếp lại, chèn hay xóa bao nhiêu. Cơ chế này có một quy tắc mà hầu hết mọi người đều gặp phải ít nhất một lần: thứ tự của `\caption` và `\label` là quan trọng.

## Tại sao thứ tự lại quan trọng

Lệnh `\caption` thực hiện hai công việc. Nó in văn bản chú thích bên dưới hình hoặc bảng của bạn, và nó bước vào bộ đếm, biến cái float này thành Hình 3. Lệnh `\label` thực hiện một điều ngu ngốc hơn mọi người mong đợi: nó ghi lại bất kỳ số nào được gán gần đây nhất, bất kể điều đó xảy ra là gì. Nó không biết nó ở "bên trong một hình". Vì vậy nhãn phải đặt sau chú thích:

```latex
\caption{A neat diagram.}
\label{fig:neat}
```

Nếu bạn đặt `\label` trước `\caption`, chú thích vẫn chưa bước vào bộ đếm hình, do đó nhãn sẽ ghi lại toàn bộ số gần đây nhất từ ​​một nơi khác, thường là phần hiện tại. Sau đó, văn bản của bạn sẽ nói "xem Hình 2.4" khi hình này thực sự là Hình 7. Đây là triệu chứng kinh điển: các tham chiếu trỏ đến số phần thay vì số hình hầu như luôn có nghĩa là nhãn được đặt quá sớm. Thói quen an toàn nhất là viết `\label` trên dòng ngay sau `\caption`, mọi lúc, bằng cả hình và bảng.

## Tham chiếu nhãn

Trong văn bản của bạn, hãy viết tài liệu tham khảo như thế này:

```latex
Figure~\ref{fig:neat}
```

`\ref{fig:neat}` mở rộng thành số trống và bạn tự cung cấp từ "Hình". `~` giữa chúng là một khoảng trắng không ngắt, giúp LaTeX không bao giờ kết thúc một dòng sau "Hình" và bắt đầu dòng tiếp theo bằng "3". Các tiền tố như `fig:`, `tab:`, `sec:` và `eq:` là quy ước thuần túy, LaTeX không diễn giải chúng nhưng chúng giữ cho nhãn của bạn có thể đọc được và ngăn hình và bảng vô tình chia sẻ tên.

Lưu ý rằng `\pageref{fig:neat}` cung cấp số trang mà hình đã xuất hiện, hữu ích trong các tài liệu dài mà phần nổi có thể trôi xa khỏi phần đề cập của nó. Để biết thông tin đầy đủ về các lệnh tham chiếu, hãy xem [mọi lệnh được giải thích](/learn/every-command-explained/).

## Biên dịch hai lần và những cạm bẫy khác

Các tham chiếu được giải quyết trong suốt quá trình chạy trình biên dịch: lượt đầu tiên ghi các vị trí nhãn vào tệp `.aux` và lượt thứ hai đọc lại chúng. Cho đến lần vượt qua thứ hai đó, các tham chiếu sẽ được in dưới dạng dấu hỏi đậm, vì vậy `??` trong tệp PDF của bạn thường chỉ có nghĩa là "biên dịch lại", chứ không phải là có gì đó bị hỏng. Hầu hết các biên tập viên, bao gồm cả Oleafly, đều tự động chạy lại thẻ cho bạn. Nếu `??` tồn tại trong các lần biên dịch lặp đi lặp lại, nhãn không tồn tại. Nguyên nhân có thể là do lỗi đánh máy trong tên nhãn hoặc `\chú thích` bạn đã xóa trong khi để lại `\nhãn`.