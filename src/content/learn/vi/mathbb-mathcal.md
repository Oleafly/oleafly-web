---

title: "Bảng đen, kịch bản, Fraktur"
description: "mathbb, mathcal, mathfrak, mathrm và thời điểm mỗi bảng chữ cái xuất hiện."
category: "notation-depth"
order: 6
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Bảng đen, kịch bản, Fraktur

Toán học sử dụng nhiều hơn một bảng chữ cái. Các số thực có chữ R đậm trên bảng đen, Lagrangian có chữ L thư pháp, đại số Lie có Fraktur g và mỗi số này là một lệnh riêng biệt trong LaTeX chứ không phải là phông chữ bạn bật. Được sử dụng một cách nhất quán, các bảng chữ cái sẽ cho người đọc biết loại đối tượng mà một chữ cái đặt tên trước câu xung quanh.

```latex
\usepackage{amssymb}

x \in \mathbb{R}^n, \quad
\mathcal{L}(\theta), \quad
\mathfrak{g} = \mathfrak{su}(2), \quad
\int f(x)\,\mathrm{d}x
```

## Bốn bảng chữ cái

| Lệnh | Nhìn | Sử dụng điển hình |
| --- | --- | --- |
| `\mathbb{R}` | Bảng đen | Bộ số |
| `\mathcal{L}` | Thư pháp | Lagrange, mất mát |
| `\mathfrak{g}` | Fraktur | Đại số nói dối |
| `\mathrm{d}` | Thẳng Đứng | Sự khác biệt, tên toán tử |

`\mathbb` tạo ra bảng đen in đậm, các chữ cái đánh đôi hầu như chỉ được sử dụng cho các bộ số: `\mathbb{N}`, `\mathbb{Z}`, `\mathbb{Q}`, `\mathbb{R}`, `\mathbb{C}`. Nó đến từ gói `amssymb` và chỉ bao gồm chữ hoa. Phông chữ không có bảng chữ cái viết thường, vì vậy đối số viết thường sẽ in sai các ký tự hoặc không có gì hữu ích.

`\mathcal` cung cấp các chữ viết hoa thư pháp, sự lựa chọn thông thường cho các hàm Lagrange, hàm mất mát và các họ tập hợp. Nó cũng chỉ bao gồm các chữ hoa và nó hoạt động trong LaTeX lõi mà không có gói bổ sung.

`\mathfrak`, cũng từ `amssymb`, là Fraktur, có sẵn cả hai trường hợp. Chữ thường Fraktur đặt tên cho đại số Lie, và các chữ hoa xuất hiện trong đại số và lý thuyết tập hợp, cho các iđêan và số đếm cùng nhiều thứ khác.

`\mathrm` không phải là một bảng chữ cái trang trí mà là một sự chuyển sang chữ La Mã thẳng đứng bên trong toán học. Đây là công cụ phù hợp cho bất kỳ thứ gì là ký hiệu chứ không phải biến: vi phân trong `\mathrm{d}x`, đơn vị hoặc nhãn phụ văn bản như `x_{\mathrm{max}}`. Đối với các toán tử được đặt tên như tr và xếp hạng, có một cơ chế tốt hơn, được đề cập trong [toán tử bạn phát minh ra một lần](/learn/argmin-argmax/).

## Ghi chú thực tế

Nếu `\mathcal` trông quá đơn giản so với mục đích của bạn, thì gói `mathrsfs` sẽ thêm `\mathscr`, một kiểu chữ hoa mỹ hơn thường được sử dụng cho các chuỗi và đại số sigma. Cả hai có thể cùng tồn tại và biểu thị các đối tượng khác nhau trong cùng một bài báo.

Sai lầm phổ biến là coi những bảng chữ cái này như vật trang trí. Mỗi cái đều mang một ý nghĩa thông thường trong hầu hết các lĩnh vực và người đọc khi nhìn thấy `\mathbb{A}` sẽ mong đợi một cái gì đó giống như tập hợp và mang đậm hương vị số. Kiểm tra các quy ước trong trường của bạn trước khi gán các chữ cái và sau khi được gán, hãy giữ một bảng chữ cái cho mỗi đối tượng cho toàn bộ tài liệu. Cả bốn đều hiển thị cạnh nhau trong vài giây trong [sân chơi trực tiếp](/live/).