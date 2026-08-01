---

title: "Ký hiệu Dirac"
description: "gói phanh dành cho áo lót, lưới và các phần tử ma trận."
category: "field-kits"
order: 2
level: "intermediate"
tags: ["physics"]
featured: false
updated: 2026-07-25
---

# ký hiệu Dirac

Cơ học lượng tử viết các trạng thái dưới dạng ket, các đối ngẫu của chúng dưới dạng áo lót và tích bên trong dưới dạng cặp trong ngoặc. Xây dựng ký hiệu bằng tay từ `\langle`, `|`, và `\rangle` có hiệu quả nhưng việc này tẻ nhạt và dấu phân cách không tăng theo nội dung. Gói `braket` cung cấp các lệnh tập hợp ký hiệu và kích thước mọi thứ cho phù hợp.

```latex
\usepackage{braket}
\braket{\psi|\phi}
\braket{\psi|A|\phi}
\set{\vec{x}|x > 0}
```

## Mỗi lệnh làm gì

`\braket{\psi|\phi}` đặt sản phẩm bên trong đầy đủ: dấu ngoặc nhọn ở bên ngoài, thanh dọc giữa hai trạng thái, tất cả đều khớp với chiều cao. Với hai thanh, `\braket{\psi|A|\phi}` trở thành phần tử ma trận của toán tử A giữa hai trạng thái, dạng được sử dụng cho các giá trị kỳ vọng và tính toán nhiễu loạn. Gói này cũng cung cấp `\bra{\psi}` và `\ket{\phi}` cho riêng hai nửa. Ke trần là cách thông thường để đặt tên cho một bang trong văn xuôi.

`\set{\vec{x}|x > 0}` là phần thưởng từ cùng một gói: ký hiệu xây dựng tập hợp với dấu ngoặc nhọn và thanh ở giữa, hữu ích vượt xa cả vật lý.

Kích thước là lý do thực sự để sử dụng gói. Đặt một phân số hoặc một tổng bên trong `\braket` và các dấu ngoặc và thanh sẽ giãn ra cho khớp. Một `\langle ... \rangle` được tạo thủ công cần `\left` và `\right` trên mọi dấu phân cách và vẫn có xu hướng mất cân đối.

## Các lựa chọn thay thế và hàng xóm

Gói `vật lý` cung cấp một bộ tương tự, bao gồm `\bra`, `\ket`, `\ev` cho các giá trị kỳ vọng và `\mel` cho các phần tử ma trận, cùng với các cách viết tắt cho đạo hàm và cổ góp. Cả hai gói đều xác định `\bra` và `\ket`, vì vậy hãy chọn một gói cho mỗi tài liệu thay vì tải cả hai. Trong một mẫu mà bạn không thể thêm các gói, `\langle \psi | \phi \rangle` với `\left`/`\right` xung quanh nội dung cao sẽ tạo ra cùng một kết quả nhưng gõ nhiều hơn.

Đối với các sơ đồ Feynman, thường tồn tại trong cùng một tài liệu, các gói như `tikz-feynman` được xây dựng trên TikZ; đó là một kỹ năng vẽ riêng biệt, gần giống với [sơ đồ giao hoán](/learn/commutative-diagrams/) hơn bất cứ thứ gì trên trang này.

Lỗi thường gặp là gõ `<\psi|\phi>` bằng các ký tự góc của bàn phím. Đó là các mối quan hệ nhỏ hơn và lớn hơn, do đó LaTeX đặt chúng dưới dạng so sánh và vẽ chúng ở độ cao sai. Dấu ngoặc Dirac thực đến từ `\langle` và `\rangle` hoặc tốt hơn là từ các lệnh trên. Sự khác biệt thể hiện rõ ràng khi bạn đặt cả hai biểu mẫu cạnh nhau trong [sân chơi trực tiếp](/live/).