---

title: "Đoạn văn, dấu ngắt và khoảng trống"
description: "Các dòng trống, dấu ngắt bắt buộc, vspace và các lệnh giãn cách đáng để biết."
category: "type-and-shape"
order: 3
level: "beginner"
tags: ["formatting", "spacing"]
featured: false
updated: 2026-07-25
---

# Đoạn văn, dấu ngắt và khoảng trống

Trong trình xử lý văn bản, bạn định hình các đoạn văn bằng cách nhấn Enter và đánh dấu các khoảng trống. LaTeX hoạt động khác: văn bản nguồn mô tả cấu trúc và trình biên dịch quyết định khoảng cách. Khi bạn biết cách LaTeX bắt đầu một đoạn văn và cách ghi đè lên nó khi cần, bạn sẽ tránh được những khó khăn về định dạng mà những người mới bắt đầu thường gặp phải.

## Cách hoạt động của đoạn văn

Một dòng trống trong nguồn của bạn sẽ bắt đầu một đoạn văn mới. Đó là toàn bộ quy tắc. Một hay năm dòng trống cũng không có gì khác biệt; LaTeX thu gọn chúng thành một ngắt đoạn duy nhất. Tương tự như vậy, một ngắt dòng duy nhất bên trong nguồn của bạn được coi là một khoảng trắng thông thường, do đó bạn có thể bọc văn bản nguồn của mình ở bất kỳ độ rộng nào bạn muốn và chỉnh lại nó một cách tự do mà không thay đổi kết quả đầu ra.

Lệnh `\par` có nghĩa giống hệt như một dòng trống. Bạn sẽ hiếm khi tự mình gõ nó, nhưng bạn sẽ thấy nó trong các macro và tệp lớp, nơi mà một dòng trống theo nghĩa đen rất khó viết.

`\\` là một cái gì đó hoàn toàn khác: nó buộc ngắt dòng bên trong đoạn hiện tại mà không bắt đầu một đoạn mới. Dòng mới không bị thụt lề đoạn văn và không có thêm khoảng trống theo chiều dọc. Nó tồn tại ở những nơi mà ngắt dòng là nội dung, chẳng hạn như địa chỉ, thơ và các hàng của bảng. Sử dụng nó để kết thúc các đoạn văn thông thường là một lỗi cổ điển của người mới bắt đầu, vì nó tạo ra một đoạn văn không bao giờ thực sự kết thúc và LaTeX có thể phàn nàn rằng "Không có dòng nào ở đây để kết thúc" khi hai đoạn văn đó xếp chồng lên nhau.

```latex
First paragraph.

Second paragraph, with a forced break\\
on this line.
```

## Thêm không gian dọc

Đôi khi bạn muốn có một khoảng trống có chủ ý, chẳng hạn như trước khối chữ ký hoặc giữa các phần logic của trang tiêu đề.

```latex
\vspace{1em}
\bigskip \medskip \smallskip
```

`\vspace{1em}` chèn chính xác khoảng trắng theo chiều dọc mà bạn yêu cầu, trong bất kỳ đơn vị nào mà LaTeX biết (`em`, `pt`, `cm`, v.v.). Ba lệnh bỏ qua là số lượng đặt trước: `\smallskip`, `\medskip` và `\bigskip` chèn các khoảng trống nhỏ, vừa và lớn có kích thước được xác định bởi lớp tài liệu của bạn, giúp chúng nhất quán trong toàn bộ tài liệu. Ưu tiên bỏ qua các giá trị `\vspace` được điều chỉnh thủ công vì chúng sẽ thích ứng nếu bạn thay đổi lớp hoặc kích thước phông chữ.

Một chi tiết hữu ích: `\vspace` ở đầu trang được âm thầm bỏ đi, vì LaTeX coi không gian co dãn ở ranh giới trang là vô ý. Nếu bạn thực sự cần giữ nó, hãy sử dụng `\vspace*{1em}` với dấu sao.

## Khoảng cách giữa tất cả các đoạn văn

Đừng spam `\\` để tạo khoảng trống giữa các đoạn văn. Nếu bạn muốn mỗi đoạn được phân tách bằng dấu cách thay vì được đánh dấu bằng thụt lề, thì đó là quyết định thiết kế cho toàn bộ tài liệu: đặt nó một lần trong phần mở đầu với gói `parskip` hoặc xem xét lại liệu các tiêu đề và cấu trúc có truyền đạt sự phân tách tốt hơn hay không. Xem [thụt lề đoạn](/learn/paragraph-indent/) để biết nửa còn lại của sự cân bằng này.