---

title: "pt, em, chiều rộng văn bản"
description: "Đơn vị tuyệt đối và tương đối phông chữ bạn thực sự đặt."
category: "desk-reference"
order: 3
level: "intermediate"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# pt, em, chiều rộng văn bản

Gần như mọi lệnh bố cục trong LaTeX đều có độ dài: khoảng cách dọc, chiều rộng hình ảnh, lề, độ dày của quy tắc. Độ dài là một số cộng với một đơn vị và việc lựa chọn đơn vị sẽ quyết định xem bố cục có thích ứng hay không khi kích thước phông chữ hoặc hình dạng trang thay đổi hoặc ngắt quãng trong ngày.

| Đơn vị | Ý nghĩa |
| --- | --- |
| `pt` | Điểm (cơ sở) |
| `em` | Chiều rộng tương đối của phông chữ |
| `cũ` | Chiều cao tương đối của phông chữ |
| `cm` / `mm` / `in` | Tuyệt đối |
| `\textwidth` | Chiều rộng của khối văn bản |
| `\linewidth` | Chiều rộng của cột/trang nhỏ hiện tại |

## Đơn vị tuyệt đối và tương đối

`pt` là điểm của máy in, đơn vị cơ sở của TeX. Kích thước phông chữ và nhiều giá trị mặc định bên trong được nêu bằng điểm và một inch là 72,27 pt theo tính toán của TeX. `cm`, `mm` và `in` là các đơn vị tuyệt đối quen thuộc, phù hợp khi yêu cầu thực sự mang tính vật lý, chẳng hạn như lề một inch bắt buộc.

`em` và `ex` chia tỷ lệ với phông chữ hiện tại: em gần bằng kích thước phông chữ được biểu thị bằng chiều rộng và ex có chiều cao bằng chiều cao của chữ thường x. Lợi thế của họ là tỷ lệ. `\vspace{1em}` vẫn nhất quán về mặt trực quan nếu tài liệu chuyển từ loại 10pt sang loại 12pt, trong đó `\vspace{12pt}` được mã hóa cứng trở nên quá chật hoặc quá lỏng.

## Độ dài mà tài liệu cung cấp cho bạn

`\textwidth` là chiều rộng của khối văn bản của trang. `\linewidth` là chiều rộng của vùng chứa hiện tại, bằng `\textwidth` trong văn bản thông thường nhưng thu hẹp bên trong một trang nhỏ, một danh sách hoặc một cột. Một số thập phân ở phía trước chia tỷ lệ thành một và đó là cách tiêu chuẩn để định cỡ các số liệu:

```latex
\vspace{1em}
\includegraphics[width=0.5\textwidth]{f.pdf}
```

Dòng đầu tiên chèn một em không gian theo chiều dọc. Cái thứ hai đặt hình ảnh có chiều rộng bằng một nửa khối văn bản, vì vậy nếu lề thay đổi, hình sẽ thay đổi tỷ lệ theo chúng và không bao giờ tràn vào lề. Bên trong một trang nhỏ hoặc bố cục hai cột, hãy ưu tiên `0,5\linewidth`, vì `\textwidth` ở đó rộng hơn không gian bạn thực sự có.

Độ dài cũng có thể ổn định được. `\setlength{\parindent}{0pt}` loại bỏ thụt lề đoạn văn và lệnh tương tự sẽ điều chỉnh hầu hết độ dài bố cục được đặt tên.

Lỗi phổ biến là định cỡ số liệu tính bằng centimet. Nó hoạt động cho đến khi loại tài liệu, khổ giấy hoặc lề thay đổi và sau đó mọi hình ảnh đều cần được điều chỉnh lại bằng tay. Độ rộng được biểu thị dưới dạng phân số của `\textwidth` hoặc `\linewidth` tồn tại trong tất cả những thay đổi đó mà không bị ảnh hưởng, đó là lý do tại sao các mẫu hầu như chỉ sử dụng chúng.