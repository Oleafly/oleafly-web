---

title: "Macro giữ ký hiệu trung thực"
description: "lệnh mới, NewDocumentCommand, một tệp macro được chia sẻ."
category: "runtime"
order: 4
level: "intermediate"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Macro giữ ký hiệu trung thực

Mỗi tờ giấy đều có ký hiệu lặp lại: số thực, toán tử kỳ vọng, giá trị tuyệt đối với các thanh có kích thước phù hợp. Nếu bạn nhập `\mathbb{R}` ở bốn mươi vị trí và sau đó cố vấn của bạn thích `\mathbf{R}` hơn, bạn có bốn mươi chỉnh sửa cần thực hiện và bạn sẽ bỏ lỡ một chỉnh sửa. Macro biến ký hiệu đó thành một lệnh có tên duy nhất, được xác định một lần. Thay đổi định nghĩa và toàn bộ tài liệu sẽ theo sau. Đó là cách bạn giữ cho ký hiệu được trung thực: nguồn không thể mất đồng bộ với chính nó.

## Định nghĩa lệnh bằng newcommand

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\E}[1]{\mathbb{E}\left[#1\right]}
\newcommand{\abs}[1]{\left\lvert #1 \right\rvert}
```

Định nghĩa đầu tiên là loại đơn giản nhất: `\R` bây giờ chỉ là tốc ký thuần túy và gõ `\R` ở bất kỳ đâu sẽ tạo ra `\mathbb{R}`.

Hình thức thứ hai có một đối số. `[1]` sau tên khai báo rằng `\E` chấp nhận một đối số và `#1` đánh dấu nơi đối số đó nằm trong phần mở rộng. Vì vậy `\E{X}` trở thành `\mathbb{E}\left[X\right]`. Định nghĩa đòi hỏi nhiều điều hơn là sự ngắn gọn: cặp `\left[` và `\right]` làm cho các dấu ngoặc phát triển để vừa với bất cứ thứ gì bên trong, do đó `\E{\frac{X}{n}}` tự động nhận được các dấu ngoặc cao. Macro `\abs` thực hiện tương tự với `\lvert` và `\rvert`, cặp thanh dọc chính xác cho giá trị tuyệt đối. Bạn có thể khai báo tối đa chín đối số và gọi chúng là `#1` đến `#9`.

Nếu một lệnh đã tồn tại, `\newcommand` từ chối xác định lại lệnh đó và dừng lại với một lỗi, điều này bảo vệ bạn khỏi âm thầm phá vỡ thứ gì đó. Để cố tình thay thế một lệnh hiện có, hãy sử dụng `\renewcommand` thay thế.

##Giao diện hiện đại

LaTeX hiện tại cũng cung cấp lệnh định nghĩa phong phú hơn:

```latex
\NewDocumentCommand{\citepair}{mm}{\cite{#1}, \cite{#2}}
```

`\NewDocumentCommand` sử dụng chuỗi đặc tả đối số thay vì số đếm. Ở đây `mm` có nghĩa là hai đối số bắt buộc, vì vậy `\citepair{knuth84}{lamport94}` trích dẫn cả hai khóa. Ngôn ngữ đặc tả còn đi xa hơn `\newcommand` có thể: `o` khai báo một đối số tùy chọn trong dấu ngoặc vuông, `s` phát hiện một biến thể hình sao và `O{default}` cung cấp một giá trị mặc định cho một đối số tùy chọn. Đối với bất kỳ điều gì ngoài sự thay thế đơn giản, hãy tiếp cận giao diện này.

## Chia sẻ định nghĩa

Giữ một `macros.sty` được chia sẻ giữa các chương. Đặt các định nghĩa của bạn vào một tệp đó, tải nó với `\usepackage{macros}` từ mỗi tài liệu và mọi chương của luận văn, cùng với các trang trình bày và phiên bản giấy, tất cả đều thống nhất về ký hiệu. Khi cộng tác viên tham gia, họ sẽ đọc một tệp ngắn để tìm hiểu các quy ước của bạn thay vì đảo ngược chúng từ văn bản. Điều này kết hợp một cách tự nhiên với [thiết lập nhiều tệp](/learn/split-chapter-files/).

Mẹo đặt tên: đặt tên macro có ý nghĩa như `\abs` hoặc `\norm` thay vì tên dựa trên hình thức như `\bigbars`. Tên phải nói lên ý nghĩa của ký hiệu, vì vậy định nghĩa có thể tự do thay đổi hình thức của nó. Và chống lại việc xác định macro cho thứ bạn sử dụng hai lần; khoản hoàn trả bắt đầu vào khoảng lần sử dụng thứ ba.