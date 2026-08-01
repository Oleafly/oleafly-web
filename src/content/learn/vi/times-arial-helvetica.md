---

title: "Ngăn xếp kiểu Times, Arial, Helvetica"
description: "các tạp chí ánh xạ newtx, helvet hoặc fontspec vẫn yêu cầu."
category: "typefaces"
order: 1
level: "intermediate"
tags: ["fonts"]
featured: false
updated: 2026-07-25
---

# Ngăn xếp kiểu Times, Arial, Helvetica

Các hướng dẫn của tạp chí và hội nghị vẫn thường xuyên yêu cầu Times cho nội dung hoặc Arial cho số liệu, nhiều thập kỷ sau khi những phông chữ đó không còn là lựa chọn thẩm mỹ đầu tiên của bất kỳ ai. Trong LaTeX có hai cách để đáp ứng yêu cầu đó và cách nào áp dụng tùy thuộc vào công cụ của bạn. PDFLaTeX cổ điển không thể tải các tệp Times New Roman hoặc Arial thực tế, do đó, nó sử dụng các bản sao tương thích với hệ mét được vận chuyển dưới dạng gói. XeLaTeX và LuaLaTeX tải phông chữ hệ thống thực thông qua `fontspec`.

## Lộ trình trọn gói

```latex
\usepackage{newtxtext,newtxmath} % Times-like
\usepackage{helvet}
\renewcommand{\familydefault}{\sfdefault}
```

`newtxtext` chuyển phông chữ văn bản sang phông chữ Times và `newtxmath` cung cấp phép toán phù hợp. Vấn đề ghép nối: chỉ thay đổi phông chữ văn bản và các phương trình vẫn ở mặc định Máy tính hiện đại. Đoạn Times bên cạnh Toán học hiện đại của Máy tính sẽ hiển thị ngay lập tức. `newtx` là gói kế thừa được duy trì cho các gói `time` và `txfonts` cũ mà bạn nên tránh trong các tài liệu mới. Các ngăn xếp cũ khiến phép toán không được chuyển đổi và một số tạo ra phông chữ bitmap được mô tả trong [văn bản mờ trong trình xem PDF](/learn/fuzzy-font-pdf/).

`helvet` cung cấp một bản sao Helvetica dưới dạng họ sans-serif, cũng là viết tắt của Arial, vì Arial được thiết kế để phù hợp với các số liệu của Helvetica. Việc tải nó không làm thay đổi phông chữ của tài liệu vì văn bản nội dung sử dụng họ serif. Dòng `\renewcommand{\familydefault}{\sfdefault}` thực hiện chuyển đổi đó: `\familydefault` là họ mà LaTeX sử dụng cho văn bản thông thường và việc đặt nó thành `\sfdefault` làm cho toàn bộ tài liệu giống Helvetica. Bỏ qua dòng đó nếu bạn chỉ cần tiêu đề sans-serif hoặc nhãn hình. Nếu Helvetica chạy hơi lớn bên cạnh phông chữ văn bản của bạn, `\usepackage[scaled=0.92]{helvet}` sẽ đưa nó vào dòng.

## Lộ trình phông chữ

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\setsansfont{Arial}
```

Trong XeLaTeX hoặc LuaLaTeX, `fontspec` xử lý các phông chữ theo tên và tải chúng từ hệ điều hành, do đó, điều này đặt Times New Roman chính hãng làm họ (serif) chính và Arial chính hãng là họ sans. Các phông chữ thực sự phải được cài đặt trên máy. Điều đó xảy ra khi tài liệu di chuyển giữa các máy tính hoặc vào CI. Phông chữ đi kèm với dự án sẽ tránh được sự cố, như được hiển thị trong [tệp phông chữ bên cạnh dự án](/learn/install-custom-font/). Toán học lại là một mối quan tâm riêng biệt, được xử lý bởi `unicode-math` hoặc bằng cách giữ `newtxmath` bên cạnh. Sự cân bằng về động cơ được đề cập trong [lý do mọi người chuyển sang XeLaTeX](/learn/when-use-xelatex/).

## Nguyên tắc chung

Trước khi chọn một trong hai tuyến, hãy kiểm tra xem tệp lớp riêng của địa điểm đã đặt phông chữ chưa. Hầu hết đều như vậy. Xếp chồng các gói phông chữ của riêng bạn lên trên một lớp đã nói sẽ tạo ra cảnh báo tốt nhất. Chỉ thêm các gói phông chữ vào các tài liệu có lớp để bạn lựa chọn.