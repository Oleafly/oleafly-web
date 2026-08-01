---

title: "thói quen natbib và lệnh biblatex"
description: "Các trích dẫn trong ngoặc đơn và văn bản cũng như các tên thay thế chúng."
category: "cite-your-sources"
order: 8
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# thói quen natbib và lệnh biblatex

Trích dẫn theo năm của tác giả cần có hai loại lệnh trích dẫn. Đôi khi các tác giả là một phần trong câu của bạn, như trong "Knuth (1984) đã giới thiệu về lập trình chữ viết." Đôi khi trích dẫn được đặt trong ngoặc đơn, như trong "Lập trình biết chữ kết hợp mã và văn xuôi (Knuth, 1984)." `\cite` đơn giản không thể tạo ra sự khác biệt đó, đó là lý do tại sao gói `natbib` tồn tại và tại sao biblatex lại gửi bộ tên riêng cho cùng một ý tưởng. Nếu bạn đã học một cái và được giao một mẫu bằng cách sử dụng cái kia thì trang này là bảng dịch.

## Lệnh natbib

```latex
\usepackage{natbib}
\citet{knuth84}  % Knuth (1984)
\citep{knuth84}  % (Knuth, 1984)
\citep*{knuth84} % (Knuth, Lamport, and Mittelbach, 1984): full author list
```

Cách ghi nhớ là `\citet` là một trích dẫn *văn bản* đọc như một phần của câu, trong khi `\citep` là một trích dẫn *ngoặc* được đặt trong ngoặc. Các biến thể được gắn dấu sao in danh sách tác giả đầy đủ thay vì "et al.", điều này đôi khi được yêu cầu khi bạn trích dẫn một tác phẩm lần đầu tiên. natbib cũng cung cấp `\citeauthor` chỉ cho tên, `\citeyear` chỉ cho năm và một đối số tùy chọn cho số trang, như trong `\citep[p.~42]{knuth84}`. natbib là một gói thời tiền xử lý: nó hoạt động với BibTeX cổ điển và kiểu `.bst` tương thích, chẳng hạn như `plainnat` hoặc `apalike`.

## Tương đương với biblatex

biblatex bao trùm cùng một mặt bằng với những tên gọi khác nhau. `\textcite{knuth84}` tạo ra dạng văn bản "Knuth (1984)", `\parencite{knuth84}` tạo ra dấu ngoặc đơn "(Knuth, 1984)" và `\cite{knuth84}` đơn giản tạo ra một trích dẫn đơn giản có hình thức chính xác phụ thuộc vào kiểu được tải. Cũng có những từ tương tự trực tiếp cho những phần còn lại: `\citeauthor`, `\citeyear`, và các chú thích trước và chú thích sau cho những thứ như số trang, được viết `\parencite[see][p.~42]{knuth84}`. Nếu bộ nhớ cơ có vấn đề, biblatex thậm chí còn có tùy chọn gói `natbib=true` xác định `\citet` và `\citep` làm bí danh, giúp việc di chuyển gần như dễ dàng.

## Di chuyển tài liệu từ natbib sang biblatex

Tệp `.bib` của bạn không cần thay đổi gì cả. Cả hai hệ thống đều đọc cùng một cơ sở dữ liệu. Quá trình di chuyển chỉ chạm vào phần mở đầu và bản dựng. Xóa `\usepackage{natbib}` và dòng `\bibliographystyle`, sau đó tải `\usepackage[backend=biber,style=authoryear]{biblatex}` và trỏ nó vào cơ sở dữ liệu của bạn bằng `\addbibresource{refs.bib}`. Thay thế `\bibliography{refs}` ở cuối tài liệu bằng `\printbibliography`. Cuối cùng, hãy đảm bảo bản dựng chạy `biber` thay vì `bibtex`, vì biblatex lưu trữ dữ liệu của nó ở định dạng khác và phần phụ trợ cũ sẽ âm thầm không tạo ra gì. Nếu bạn không muốn chạm vào nội dung văn bản, hãy giữ nguyên tên lệnh natbib thông qua tùy chọn tương thích và chỉ thay đổi phần mở đầu.

## Chọn cái nào

Nếu mẫu nhật ký đã tải natbib, hãy tiếp tục sử dụng nó. Việc đấu tranh với một tập tin lớp hiếm khi có giá trị. Đối với các tài liệu mới mà bạn chọn, biblatex linh hoạt hơn và xử lý Unicode tốt hơn. Sự so sánh rộng hơn nằm trong [BibTeX cổ điển hoặc biblatex](/learn/bibtex-vs-biblatex/) và việc chuyển đổi các kiểu sau đó được đề cập trong [Số, năm tác giả, kiểu tạp chí](/learn/change-cite-style/).