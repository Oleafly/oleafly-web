---

title: "Số và con trỏ cho phương trình"
description: "nhãn, ref, eqref và chỉ đánh số các dòng bạn muốn nói."
category: "equation-craft"
order: 6
level: "beginner"
tags: ["math", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Số và con trỏ cho phương trình

Đánh số một phương trình là một lời hứa rằng bạn sẽ tham khảo nó sau. LaTeX xử lý cả hai nửa lời hứa đó: môi trường `phương trình` gán số và hệ thống nhãn cho phép bạn trỏ vào nó từ bất kỳ đâu trong tài liệu mà không cần phải tự mình nhập số.

```latex
\begin{equation}
 \label{eq:bayes}
 p(\theta \mid y) \propto p(y \mid \theta)\, p(\theta)
\end{equation}
As shown in \eqref{eq:bayes}, ...
```

## Nhãn và tài liệu tham khảo

`\begin{equation}` đánh số dòng được hiển thị. `\label{eq:bayes}` gắn tên `eq:bayes` vào số đó. Bạn có thể chọn tên và tiền tố `eq:` giữ cho nhãn phương trình khác biệt với hình và bảng. Để trích dẫn, `\ref{eq:bayes}` in số trần, trong khi `\eqref{eq:bayes}`, từ `amsmath`, gói nó trong dấu ngoặc đơn để khớp với cách số xuất hiện bên cạnh phương trình. Ưu tiên `\eqref` cho các phương trình để hai kiểu giống nhau.

Bởi vì các số được ghi trên một lần và đọc ở lần tiếp theo, nên một trình biên dịch mới sẽ hiển thị `??` cho đến lần chạy tiếp theo. [Dấu hỏi thay vì số](/learn/equations-show-qq/) bao gồm chu trình đó.

Nếu một phương trình được hiển thị không bao giờ được tham chiếu thì không đánh số nó. Thay vào đó, hãy sử dụng `\[ ... \]` hoặc `phương trình*` được gắn dấu sao để các con số chỉ đánh dấu những dòng mà người đọc có thể cần tìm lại.

## Đánh số thứ tự một số dòng

Theo mặc định, dẫn xuất nhiều dòng trong `căn chỉnh` đánh số mỗi dòng, đây hiếm khi là điều bạn muốn. Hai lệnh điều chỉnh trên mỗi dòng:

```latex
\begin{align}
 a &= b \label{eq:a} \\
 c &= d \notag \\
 e &= f \label{eq:e}
\end{align}
```

`\notag` chặn số trên dòng của nó, vì vậy ở đây bước trung gian không được đánh số trong khi dòng đầu tiên và dòng cuối cùng giữ nguyên số và nhãn của chúng. Đặt mỗi `\label` trên dòng mà nó đặt tên, trước `\\`, để nó liên kết với đúng số. Phím tắt tất cả hoặc không có gì là `align*`, không có con số nào. Toàn bộ dòng môi trường nhiều dòng được đề cập trong [các phương trình nhiều dòng xếp thẳng hàng](/learn/align-equations/).

Lỗi phổ biến là viết số bằng chữ, như trong "xem Phương trình 3", sai lầm này xảy ra ngay khi bạn chèn một phương trình lên trên nó. Luôn xem qua nhãn và để LaTeX đánh số lại trên mỗi lần biên dịch. Bạn có thể xem trực tiếp bản cập nhật đánh số khi bạn thêm và xóa `\notag` trong [playground](/live/).