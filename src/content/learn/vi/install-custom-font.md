---

title: "Một tập tin phông chữ bên cạnh dự án"
description: "Đường dẫn fontspec cho các họ otf hoặc ttf cục bộ."
category: "typefaces"
order: 2
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Một file font bên cạnh dự án

Giả sử luận án của bạn sử dụng một phông chữ không được cài đặt trên mọi máy sẽ biên dịch nó: máy tính xách tay của đồng tác giả, máy chủ xây dựng của trường đại học hoặc máy tính của riêng bạn sau khi cài đặt lại. Việc cài đặt phông chữ trên toàn hệ thống trên mỗi phông chữ là điều không dễ thực hiện và đôi khi không được phép. Hãy đặt các tập tin phông chữ vào thư mục dự án và thay vào đó trỏ `fontspec` vào chúng để tài liệu mang kiểu chữ riêng của nó. Điều này yêu cầu XeLaTeX hoặc LuaLaTeX, vì `fontspec` không hoạt động trong pdfLaTeX. Những lý do được đề cập trong [tại sao mọi người chuyển sang XeLaTeX](/learn/when-use-xelatex/).

```latex
\usepackage{fontspec}
\setmainfont{MyFont}[
 Path = ./fonts/,
 Extension = .otf,
 UprightFont = *-Regular,
 BoldFont = *-Bold,
 ItalicFont = *-Italic
]
```

## Công dụng của mỗi phím

`\setmainfont{MyFont}` khai báo họ văn bản chính và đặt cho nó tên cơ sở được sử dụng để xây dựng tên tệp. `Path = ./fonts/` yêu cầu `fontspec` tìm kiếm các tệp trong thư mục `fonts` bên trong dự án, liên quan đến tệp `.tex` chính, thay vì hỏi hệ điều hành. `Extension = .otf` nêu loại tệp một lần để nó không cần phải lặp lại trên mỗi tệp. Sử dụng `.ttf` nếu đó là những gì bạn có.

Các phím còn lại ánh xạ hình dạng phông chữ vào tập tin. Trong mỗi tên, `*` mở rộng thành tên cơ sở, do đó `UprightFont = *-Regular` phân giải thành `MyFont-Regular.otf`, và tương tự như vậy `MyFont-Bold.otf` và `MyFont-Italic.otf`. Những tên này phải khớp chính xác với tên tệp thực tế, bao gồm cả cách viết hoa, vì chữ hoa chữ thường vẫn quan trọng trên máy chủ Linux ngay cả khi hệ thống cục bộ của bạn chấp nhận nó. Nếu họ có chữ in nghiêng đậm, hãy thêm `BoldItalicFont = *-BoldItalic`. Hình dạng bạn không ánh xạ là hình dạng mà tài liệu không thể sử dụng: không có dòng `BoldFont`, `\textbf` không có gì để chuyển sang và trình biên dịch cảnh báo rằng hình dạng in đậm không được xác định.

Cú pháp tương tự cũng áp dụng cho các họ khác, vì vậy `\setsansfont` và `\setmonofont` chấp nhận các khối tùy chọn giống hệt nhau cho phông chữ sans-serif hoặc phông chữ mã cục bộ.

## Cấp phép và tính di động

Chỉ gửi các tệp phông chữ cùng với dự án nếu giấy phép cho phép phân phối lại. Các giấy phép mở như Giấy phép Phông chữ Mở SIL cho phép điều đó và các phông chữ từ Google Fonts thường đủ điều kiện nhưng các phông chữ thương mại thường cấm chuyển bản sao cho cộng tác viên, trong trường hợp đó mỗi máy cần có bản sao được cấp phép riêng và bạn nên ghi lại yêu cầu đó trong readme của dự án.

Lỗi phổ biến là sự không khớp thầm lặng giữa tên được khai báo và tệp, thường là sau khi đổi tên thư mục hoặc tải xuống trọng lượng có tên khác. Quá trình biên dịch sau đó dừng lại với "Không thể tìm thấy phông chữ 'MyFont-Regular'". Khi điều đó xảy ra, hãy so sánh từng ký tự tên tệp dự kiến ​​của lỗi với nội dung thư mục và xác nhận `Đường dẫn` vẫn trỏ đến nơi tệp tồn tại. Vì công cụ Tectonic đi kèm của Oleafly dựa trên XeTeX nên mẫu dự án cục bộ này hoạt động ở đó mà không cần cài đặt phông chữ hệ thống.