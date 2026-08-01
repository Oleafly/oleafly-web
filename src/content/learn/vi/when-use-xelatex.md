---

title: "Tại sao mọi người chuyển sang XeLaTeX"
description: "Phông chữ hệ thống, tập lệnh phức tạp, mẫu phông chữ."
category: "runtime"
order: 2
level: "intermediate"
tags: ["engines"]
featured: false
updated: 2026-07-25
---

# Tại sao mọi người chuyển sang XeLaTeX

LaTeX là một ngôn ngữ, nhưng một số công cụ biên dịch nó và chúng khác nhau về những gì chúng có thể làm. Công cụ truyền thống là pdfLaTeX và hai công cụ hiện đại là XeLaTeX và LuaLaTeX. Lý do lớn nhất khiến mọi người chuyển sang XeLaTeX là phông chữ: pdfLaTeX chỉ sử dụng các phông chữ được đóng gói riêng cho TeX, trong khi XeLaTeX tải bất kỳ phông chữ OpenType hoặc TrueType nào được cài đặt trên hệ thống của bạn, được xử lý bằng tên thông thường của nó.

## Ba lý do để chuyển đổi

Đầu tiên là truy cập trực tiếp vào phông chữ hệ thống. Với gói `fontspec`, lựa chọn phông chữ là một dòng có thể đọc được và không cần tồn tại gói phông chữ dành riêng cho TeX cho kiểu chữ bạn muốn. Cho dù mục tiêu là `\setmainfont{Inter}` cho giao diện hiện đại hay Times New Roman cho yêu cầu về tạp chí thì cơ chế đều giống nhau:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
```

`fontspec` yêu cầu XeLaTeX hoặc LuaLaTeX; dưới pdfLaTeX nó chỉ đơn giản là có lỗi. Phông chữ cũng có thể di chuyển bên trong thư mục dự án thay vì hệ thống, như được hiển thị trong [tệp phông chữ bên cạnh dự án](/learn/install-custom-font/).

Thứ hai là Unicode gốc và các tập lệnh phức tạp. XeLaTeX đọc trực tiếp dữ liệu đầu vào UTF-8 và xử lý các hệ thống chữ viết mà pdfLaTeX không thể, bao gồm tiếng Ả Rập, Devanagari, tiếng Trung, tiếng Nhật và tiếng Hàn, với định dạng phù hợp và thông qua gói `polyglossia`, sửa dấu gạch nối và hướng cho mỗi ngôn ngữ. Nếu tài liệu của bạn trộn lẫn các tập lệnh hoặc thậm chí chỉ trích dẫn một tên có dấu phụ khác thường, thì điều này sẽ quyết định công cụ.

Thứ ba là các mẫu quyết định cho bạn. Nhiều mẫu CV, luận văn và bản trình bày hiện đại tải `fontspec` hoặc `polyglossia` trong dòng đầu tiên của chúng và mẫu như vậy chỉ biên dịch trên XeLaTeX hoặc LuaLaTeX. Nếu mẫu đã tải xuống bị lỗi ngay lập tức với lỗi đề cập đến `fontspec`, thì việc chuyển đổi công cụ là cách khắc phục chứ không phải chỉnh sửa mẫu.

## Những gì bạn từ bỏ

Sự đánh đổi tuy khiêm tốn nhưng thực tế. Một số gói dành riêng cho pdfLaTeX không được áp dụng, đáng chú ý nhất là tính năng mở rộng phông chữ của `microtype`, XeLaTeX chỉ hỗ trợ một phần. Biên dịch cũng chạy chậm hơn một chút. Một số nguồn tạp chí cũ hơn vẫn sử dụng pdfLaTeX, vì vậy hãy kiểm tra hướng dẫn của địa điểm trước khi gửi bản thảo do XeLaTeX xây dựng. LuaLaTeX chia sẻ phông chữ và khả năng Unicode, đồng thời thêm tập lệnh Lua. Giữa hai cái đó, hãy chọn mẫu hoặc tên địa điểm của bạn. Các tài liệu được xây dựng trên `fontspec` thường biên dịch trên cả hai.

## Lựa chọn trong thực tế

Một quy tắc hợp lý là sử dụng pdfLaTeX khi mẫu của địa điểm nhắm mục tiêu đến nó và XeLaTeX cho mọi thứ mà bạn chọn phông chữ: luận văn, CV, trang trình bày và tài liệu đa ngôn ngữ. Công cụ đi kèm của Oleafly dựa trên XeTeX (Tectonic), vì vậy các tài liệu `fontspec` biên dịch ở đó mà không cần bất kỳ cấu hình công cụ nào. Lỗi phổ biến là trộn lẫn các thời đại, ví dụ như tải `fontspec` cùng với các gói phông chữ chỉ dành cho pdfLaTeX như `newtxttext`. Chọn một hệ thống phông chữ cho mỗi tài liệu và câu hỏi của công cụ sẽ tự trả lời.