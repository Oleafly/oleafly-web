---

title: "Nhấn mạnh mà không cần đấu tranh với phông chữ"
description: "textbf, textit, emph, mono và tại sao emph lồng nhau tốt hơn chữ in nghiêng được mã hóa cứng."
category: "type-and-shape"
order: 1
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Nhấn mạnh mà không cần đấu tranh với phông chữ

Sự nhấn mạnh trong LaTeX xuất phát từ một tập hợp nhỏ các lệnh mà mỗi lệnh lấy văn bản bị ảnh hưởng làm đối số được đặt trong dấu ngoặc nhọn. LaTeX tách biệt hai ý tưởng mà hầu hết các bộ xử lý văn bản hợp nhất: áp dụng một kiểu chữ cụ thể và đánh dấu một khoảng như được nhấn mạnh. Biết lệnh nào sẽ giữ cho tài liệu nhất quán khi kiểu thay đổi.

```latex
\textbf{bold}
\textit{italic}
\emph{emphasis} % preferred in running text
\underline{avoid} % rarely used in body text
\texttt{monospace}
\textsc{Small Caps}
```

## Các lệnh

`\textbf` đặt in đậm, cách xử lý tiêu chuẩn để nhấn mạnh mạnh mẽ và cho các từ đầu đề trong định nghĩa. `\textit` đặt kiểu in nghiêng trực tiếp. `\texttt` chuyển sang phông chữ máy đánh chữ đơn cách, quy ước về tên tệp, lệnh và mã nhận dạng mã trong văn bản đang chạy. `\textsc` đặt chữ hoa nhỏ, phổ biến cho tên tác giả trong thư mục và cho các từ viết tắt thường thống trị một dòng văn bản.

`\underline` tồn tại nhưng nhận được nhận xét của nó trong ví dụ. Gạch chân là một cách thay thế chữ nghiêng trong thời máy đánh chữ, và trong LaTeX, nó cũng có một vấn đề về mặt cơ học: văn bản được gạch chân được đặt trong một hộp nên không thể ngắt dòng và một cụm từ được gạch chân dài sẽ tràn ra lề. Trong kiểu chữ in ấn, chữ in nghiêng thực hiện công việc gạch chân thường làm.

Các lệnh lồng nhau, do đó `\textbf{\textit{bold italic}}` kết hợp cả hai khi phông chữ cung cấp khuôn mặt.

## Tại sao \emph

`\emph` đánh dấu ý nghĩa hơn là hình thức: nó nói "nhấn mạnh điều này" và để ngữ cảnh quyết định như thế nào. Trong văn bản thẳng đứng nó in nghiêng. Văn bản bên trong vốn đã in nghiêng sẽ lật ngược trở lại thẳng đứng, do đó, điểm nhấn bên trong phần nhấn mạnh vẫn hiển thị. `\textit` được mã hóa cứng bên trong văn bản in nghiêng chỉ đơn giản là in nghiêng và phần nhấn mạnh bên trong sẽ biến mất. Mục đích đánh dấu cũng được đền đáp sau này. Một lớp hoặc gói có thể xác định lại điểm nhấn trông như thế nào ở một nơi mà không cần chỉnh sửa trong toàn bộ tài liệu.

Nguyên tắc nhỏ: sử dụng `\emph` để nhấn mạnh khi viết văn xuôi và dành `\textit` cho những thứ thường được in nghiêng bất kể ngữ cảnh, chẳng hạn như tên sách, cụm từ nước ngoài và tên loài.

## Ranh giới và thói quen

Đây đều là các lệnh ở chế độ văn bản và chúng hoạt động sai bên trong các công thức. Các ký hiệu toán học in đậm cần có `\mathbf` hoặc `\boldsymbol`, được bao gồm trong [bold math](/learn/bold-math/). Chống lại sự nhấn mạnh xếp chồng, bởi vì khi mọi thứ đều đậm nét, không có gì nổi bật. Xây dựng tiêu đề từ các lệnh cấu trúc như `\section` thay vì in đậm thủ công, vì cấu trúc cũng cung cấp mục lục và dấu trang PDF. [Loại lớn hơn và nhỏ hơn](/learn/font-size/) đưa ra lập luận tương tự cho kích thước phông chữ.