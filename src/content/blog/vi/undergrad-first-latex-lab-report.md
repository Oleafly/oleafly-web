---

title: "Báo cáo thí nghiệm đầu tiên của bạn về LaTeX khi còn là sinh viên đại học"
description: "Từ số 0 đến báo cáo tổng hợp: mẫu, phương trình, số liệu, tài liệu tham khảo và đường dẫn biên dịch không yêu cầu quản trị TeX Live bằng tay."
date: 2026-07-02
tags: [students, beginners, lab-report]
---

Bạn không cần phải thành thạo LaTeX để hoàn thành báo cáo thí nghiệm. Bạn cần một mẫu, một
một vài lệnh và nút biên dịch hoạt động ngay trong ngày đầu tiên. Mọi thứ khác có thể
đợi cho đến khi khóa học sau yêu cầu tài liệu lớp luận văn.

Đây là một con đường ngắn ưu tiên một bản PDF rõ ràng hơn là sắp chữ hoàn hảo.

## Bỏ qua cài đặt nhiều gigabyte nếu có thể

Trình soạn thảo nghiên cứu trên máy tính để bàn có công cụ đi kèm (ví dụ:
[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest)) đưa bạn đến bản PDF
mà không cần quản lý TeX Live. Bạn nhận được các mẫu, thẻ lỗi trên đường dây
bị hỏng, PDF bên cạnh nguồn có tính năng nhấp để chuyển và lịch sử tệp không có
khóa học Git riêng biệt. Nếu người hướng dẫn của bạn yêu cầu một sự phân phối cụ thể hoặc
Ở trang sau, hãy làm theo các ghi chú của khóa học. Nếu không thì tối ưu hóa để bắt đầu.

Trình chỉnh sửa đám mây cũng hoạt động tốt khi khóa học đã sử dụng chúng. Mục tiêu là một bản PDF
đúng lúc, không phải là danh tính của chuỗi công cụ.

## Trộm một bộ xương rồi xóa một nửa

Bắt đầu từ một mẫu `bài viết` đơn giản:

```latex
\documentclass[11pt]{article}
\usepackage[margin=1in]{geometry}
\usepackage{amsmath,graphicx}
\begin{document}
\title{Lab 3: RC circuits}
\author{Your Name \and Lab Partner}
\date{Due date}
\maketitle

\section{Objective}
\section{Method}
\section{Results}
\section{Discussion}
\section{Conclusion}
\end{document}
```

Chi tiết hơn: [biên dịch bản PDF đầu tiên của bạn](/learn/first-document/) và
[tham khảo nhanh](/learn/cheatsheet/).

Xóa các phần mà phiếu tự đánh giá của bạn không yêu cầu. Không sao chép luận án 40 gói
lời mở đầu "chỉ trong trường hợp." Các gói bổ sung là cách mà người mới bắt đầu gặp phải lỗi mà họ không thể mắc phải
đọc.

## Các phương trình trong phòng thí nghiệm, không phải trong sách giáo khoa

Nội tuyến: `$F = ma$`. Trưng bày:

```latex
\[
  v = v_0 + at
\]
```

Chỉ đánh số những gì bạn trích dẫn sau này bằng `\eqref`. Nếu TA yêu cầu sự không chắc chắn,
đặt nó trong một câu hoặc một bảng nhỏ, không phải là `căn lề` mười dòng bạn không
hiểu chưa. Phân số: `\frac{a}{b}`. Căn bậc hai: `\sqrt{x}`.

Khi nhật ký biên dịch có nội dung đáng sợ, chỉ sửa lỗi đầu tiên, sau đó
biên dịch lại. Những lỗi về sau thường là tiếng ồn từ lỗi đầu tiên.

## Một con số, làm tốt lắm

Xuất biểu đồ dưới dạng PDF hoặc PNG từ công cụ phân tích của bạn. Bao gồm nó với:

```latex
\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.85\textwidth]{plot.pdf}
  \caption{Measured voltage vs time for trial 2.}\label{fig:vr}
\end{figure}
```

Trong văn bản: `figure~\ref{fig:vr} hiển thị...`. Chú thích bên dưới hình. Nhãn
sau chú thích. Nếu hình nổi đến trang sai, hãy thu nhỏ chiều rộng một chút
trước khi bạn đấu tranh với các lựa chọn vị trí trong một giờ:
[vị trí thả nổi](/learn/figure-wrong-position/).

## Bàn không đau khổ

Đối với một vài hàng, một `bảng` đơn giản là đủ. Đặt chú thích ở trên bằng `table`
+ `\chú thích`. Căn chỉnh các số để TA có thể quét chúng. Bạn không cần
`booktabs` cấp xuất bản trong phòng thí nghiệm 1, nhưng hãy tránh dùng dòng thẳng đứng nếu có thể.

## Tài liệu tham khảo không có quy trình viết thư mục tiến sĩ

Đối với ba trích dẫn, một danh sách thủ công sẽ hoạt động:

```latex
\begin{thebibliography}{9}
\bibitem{textbook}
  Author, \emph{Title}, year.
\end{thebibliography}
```

Để biết thêm, hãy xuất `.bib` từ Google Scholar hoặc Zotero và xóa các phím để
chúng ngắn và dễ đọc. Các trích dẫn bị hỏng in dưới dạng `[?]`:
[xóa dấu trích dẫn bí ẩn](/learn/cite-question-mark/).

Trích dẫn sách hướng dẫn thực hành và sách giáo khoa theo yêu cầu của khóa học (IEEE, APA-ish, hoặc
một danh sách được đánh số đơn giản). Phù hợp với nhịp đập của phiếu tự đánh giá phù hợp với một tạp chí.

## Lỗi thường gặp của người mới bắt đầu

- Quên `\usepackage{graphicx}` trước `\includegraphics`
- Các ký tự đặc biệt như `%` và `_` trong văn bản không thoát
- Dấu phân cách toán học `$` không khớp
- Tên tệp có dấu cách (`myplot.pdf`) bao gồm dấu ngắt
- Chỉnh sửa thư mục khác với thư mục bạn biên dịch

Chậm lại, sửa dòng nhật ký đầu tiên, biên dịch lại.

## Nộp bản PDF, giữ nguyên nguồn

Gửi những gì LMS yêu cầu (thường là PDF). Giữ `.tex` và các số liệu trong một
thư mục bạn vẫn có sau khi khóa học kết thúc. Tương lai bạn sẽ tái sử dụng bộ xương
cho báo cáo tiếp theo. Nếu trình soạn thảo của bạn tự động giữ lịch sử Git, thậm chí
tốt hơn: bạn có thể khôi phục phiên bản trước khi xóa phương trình đúng.

## Buổi đầu tiên kéo dài 90 phút

Nếu bạn bắt đầu tối nay:

1. Mở mẫu hoặc dán khung bên trên.
2. Điền tiêu đề, tên, tiêu đề phần từ phiếu tự đánh giá.
3. Thêm một phương trình mà bạn đã biết là đúng.
4. Xuất một lô; bao gồm nó; chú thích nó; trích dẫn nó trong Kết quả.
5. Thêm hai tài liệu tham khảo theo yêu cầu của khóa học.
6. Biên dịch cho đến khi PDF trông giống như một báo cáo chứ không phải một bài viết trống.

Dừng lại khi đề mục đã được đề cập. Đừng dành cả đêm cho các lựa chọn gói.

## Khi có thứ gì đó bị hỏng

Chỉ đọc lỗi đầu tiên. Các cách sửa lỗi phổ biến: thiếu `$`, thiếu gói cho
đồ họa, tên tệp sai, thêm `}`. Lưu một bản sao của phiên bản biên dịch trước
những chỉnh sửa lớn để bạn có thể quay lại. Nếu lời mở đầu của một người bạn cùng lớp phù hợp với khóa học,
mượn các gói tối thiểu mà họ đã sử dụng chứ không phải toàn bộ luận án.

## Thành công trông như thế nào

Bản PDF mở ra, lề trông hợp lý, các số liệu có chú thích, các phương trình đều có
có thể đọc được và các mục trong phiếu tự đánh giá có tiêu đề rõ ràng. Lần đầu như thế là đủ
Báo cáo thí nghiệm LaTeX. Sự hoàn hảo về kiểu chữ có thể chờ đợi một bài báo thực sự cần
nó.