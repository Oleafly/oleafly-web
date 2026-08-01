---

title: "Vectơ và ký hiệu in đậm"
description: "mathbf, chữ đậm và macro vectơ nhất quán."
category: "notation-depth"
order: 5
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Vectơ và ký hiệu in đậm

Nhiều trường đặt vectơ và ma trận in đậm: **x** cho vectơ, **A** cho ma trận, beta đậm cho vectơ hệ số. Trong LaTeX có hai lệnh in đậm khác nhau dành cho toán học và chúng không thể thay thế cho nhau. Biết nên tiếp cận cái nào và gói gọn lựa chọn trong một macro, giữ cho ký hiệu nhất quán trong toàn bộ luận điểm.

## Hai lệnh

```latex
\mathbf{x} % upright bold (often matrices)
\boldsymbol{\beta} % bold italic Greek (amsmath)
```

`\mathbf` chuyển đối số của nó sang phông chữ La Mã đậm nét thẳng đứng. Nó hoạt động tốt với các chữ cái Latinh, vì vậy `\mathbf{A}` cung cấp cho bạn chữ A in đậm thẳng đứng chắc chắn, mà nhiều văn bản sử dụng cho ma trận. Hạn chế của nó là nó chỉ bao gồm các chữ cái và chữ số: `\mathbf{\beta}` không có ích gì, vì phông chữ La Mã đậm đơn giản là không có ký tự Hy Lạp và bản in beta không thay đổi.

`\boldsymbol`, được cung cấp bởi `amsmath` (về mặt kỹ thuật là bởi bộ máy giống `bm` trong `amsbsy`, mà `amsmath` tải), làm nổi bật bất kỳ biểu tượng nào bạn đưa vào trong khi vẫn giữ nguyên hình dạng của nó. `\boldsymbol{\beta}` tạo ra chữ in nghiêng đậm beta và `\boldsymbol{x}` tạo ra chữ x in nghiêng đậm, phù hợp với kiểu nghiêng của các biến toán học thông thường. Nếu quy ước của bạn là các vectơ được in nghiêng đậm thì đây là lệnh bạn muốn.

Vì vậy, cách phân chia thực tế là: các chữ cái Latinh in đậm thẳng đứng, sử dụng `\mathbf`; bất cứ điều gì bằng tiếng Hy Lạp hoặc chữ in đậm cần in nghiêng, hãy sử dụng `\boldsymbol`.

## Xác định macro một lần

Thay vì gõ các lệnh này trong toàn bộ tài liệu, hãy xác định các macro ngữ nghĩa trong phần mở đầu:

```latex
\newcommand{\vect}[1]{\boldsymbol{#1}}
\newcommand{\mat}[1]{\mathbf{#1}}
```

Bây giờ bạn viết `\vect{x}` cho một vectơ và `\mat{A}` cho một ma trận. `[1]` cho biết mỗi macro nhận một đối số và `#1` là nơi đối số đó xuất hiện. Phần thưởng sẽ đến sau: nếu một tạp chí yêu cầu vectơ phải in đậm thay vì in nghiêng đậm, bạn chỉnh sửa một dòng sao cho `\vect` bao bọc `\mathbf` và mọi vectơ trong bài báo sẽ cập nhật trong lần biên dịch tiếp theo. Điều đó đánh bại việc tìm kiếm và thay thế trên hai trăm phương trình.

Macro cũng làm cho ý định có thể đọc được trong nguồn. Sáu tháng kể từ bây giờ, `\vect{w}` cho bạn biết w là một vectơ; một `\boldsymbol{w}` trần chỉ cho bạn biết nó được in đậm.

##Một lỗi thường gặp

Đừng giả mạo tiếng Hy Lạp in đậm với `\textbf` bên trong toán học và đừng sử dụng `\mathbf` cho nó và cho rằng nó hoạt động. Biên soạn và xem xét kỹ: một phiên bản beta không in đậm bên cạnh những người hàng xóm táo bạo rất dễ bị bỏ sót trên màn hình và rõ ràng trong bản in. Nếu bạn muốn nhanh chóng quan sát ứng viên, hãy dán một dòng như `\boldsymbol{\beta} \mathbf{\beta} \beta` vào [live sân chơi](/live/) và so sánh ba dòng cạnh nhau. Để in đậm toàn bộ phương trình, bao gồm các ký hiệu như `\sum`, hãy xem lệnh `\bm` của gói `bm`, lệnh này xử lý nhiều lớp ký hiệu hơn `\boldsymbol`.

In đậm khi chạy văn bản là một chủ đề khác với các lệnh khác nhau; xem [nhấn mạnh trong văn bản](/learn/bold-italic/).