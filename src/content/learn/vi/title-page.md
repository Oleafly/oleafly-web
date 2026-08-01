---

title: "Khối tiêu đề và trang tiêu đề"
description: "đặt tiêu đề cho bài viết, đặt tiêu đề cho luận văn, báo cáo."
category: "paper-bones"
order: 1
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Khối tiêu đề và trang tiêu đề

Một bài báo mở ra với khung tiêu đề: tựa đề, tác giả, ngày tháng, đặt ở đầu trang đầu tiên. Luận văn mở đầu bằng một trang tiêu đề đầy đủ được trình bày theo yêu cầu của trường đại học. LaTeX coi đây là hai vấn đề khác nhau. Cái đầu tiên được tự động hóa bởi `\maketitle` và cái thứ hai là một khung vẽ trống được gọi là môi trường `trang tiêu đề`.

## Khối tiêu đề

```latex
\title{A Study of Examples}
\author{Ada Lovelace\\University of Something}
\date{\today}
\begin{document}
\maketitle
```

Ba lệnh đầu tiên chỉ lưu trữ siêu dữ liệu. Không có gì xuất hiện trong tệp PDF khi chúng chạy, đó là lý do tại sao chúng có thể xuất hiện ở phần mở đầu. `\maketitle`, được đặt sau `\begin{document}`, là thời điểm khối được lưu trữ được sắp chữ. Bên trong `\author`, `\\` ngắt một dòng (cách thông thường để đặt liên kết dưới tên) và `\and` phân tách nhiều tác giả để chúng được đặt cạnh nhau. `\date{\today}` in ngày của bất kỳ ngày nào bạn biên dịch. Viết `\date{}` với dấu ngoặc nhọn trống để bỏ qua hoàn toàn dòng ngày tháng. Bỏ hoàn toàn `\date` vẫn in ngày hôm nay.

Trong lớp `bài viết`, khối nằm ở đầu trang một với văn bản bên dưới. Trong `báo cáo` và `sách` nó có một trang riêng. Các lớp tạp chí và hội nghị thay thế bộ máy này bằng các lệnh riêng cho các đơn vị liên kết, email và ORCID, vì vậy, bên trong mẫu địa điểm, bạn nên làm theo tệp mẫu của nó thay vì các lệnh tiêu chuẩn.

## Trang tiêu đề được tạo thủ công

```latex
\begin{titlepage}
 \centering
 \vspace*{2cm}
 {\Large Thesis Title\\[1em]}
 {\large Author Name\\}
 \vfill
 Submitted for the degree of ...\\
 \today
\end{titlepage}
```

Môi trường `trang tiêu đề` cung cấp cho bạn một trang không được đánh số và kiểm soát hoàn toàn bằng tay, đó là những gì các quy định về luận án thường yêu cầu. Mỗi phần của ví dụ đều có vị trí của nó. `\centering` tập trung vào mọi thứ diễn ra trong môi trường. `\vspace*{2cm}` đẩy tiêu đề từ cạnh trên xuống. Biểu mẫu được gắn dấu sao quan trọng vì `\vspace` không được gắn dấu sao ở đầu trang sẽ bị loại bỏ. Các dấu ngoặc nhọn xung quanh `{\Large ...}` xác định phạm vi thay đổi kích thước phông chữ sao cho nó kết thúc ở nơi nhóm kết thúc và `\\[1em]` ngắt dòng bằng một khoảng trống thừa bên dưới nó. `\vfill` chèn không gian có thể co giãn để hấp thụ bất kỳ chiều cao nào còn lại, do đó, tuyên bố độ và ngày ở cuối trang bất kể tiêu đề dài bao nhiêu.

Sử dụng cơ chế này hay cơ chế khác. Việc kết hợp `\maketitle` với môi trường `titlepage` sẽ tạo ra hai trang tiêu đề, và lỗi cơ bản dành cho người mới bắt đầu là trang yên lặng: xác định `\title` và `\author` nhưng lại quên `\maketitle`, do đó tài liệu biên dịch rõ ràng mà không có tiêu đề nào cả. [Bài học về khung tài liệu](/learn/document-skeleton/) cho biết vị trí của khối trong toàn bộ tệp.