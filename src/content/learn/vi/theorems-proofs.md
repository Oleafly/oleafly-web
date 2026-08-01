---

title: "Khối định lý và chứng minh"
description: "phong cách amsthm, bộ đếm chung, nhãn hiệu cuối cùng."
category: "field-kits"
order: 4
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Định lý và khối chứng minh

Viết toán học dựa trên các mệnh đề được đánh số: định lý, bổ đề và định nghĩa, mỗi mệnh đề được tách ra khỏi văn bản và được đánh số để các bằng chứng sau này có thể trích dẫn chúng. Gói `amsthm` cung cấp máy móc. Bạn khai báo các loại khối mà tài liệu của bạn cần một lần trong phần mở đầu, sau đó sử dụng chúng làm môi trường thông thường.

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]

\begin{theorem}[Optional name]
 Statement.
\end{theorem}
\begin{proof}
 Argument. \qedhere
\end{proof}
```

## Khai báo môi trường

`\newtheorem{theorem}{Theorem[section]` tạo ra một môi trường `theorem`. Đối số đầu tiên là tên môi trường bạn sẽ nhập, đối số thứ hai là văn bản tiêu đề được in ra và `[phần]` ở cuối liên kết việc đánh số với các phần, vì vậy định lý thứ ba của phần 2 là Định lý 2.3 và bộ đếm sẽ đặt lại ở mỗi phần mới.

`\newtheorem{lemma[theorem]{Lemma}` đặt đối số tùy chọn ở vị trí khác, nơi nó có ý nghĩa khác: `[theorem]` nói rằng các bổ đề chia sẻ bộ đếm định lý thay vì giữ riêng bộ đếm định lý. Bộ đếm dùng chung tạo ra một dãy duy nhất, Định lý 2.1 theo sau là Bổ đề 2.2. Điều đó dễ theo dõi hơn các chuỗi song song trong đó Bổ đề 2.1 và Định lý 2.1 đều tồn tại.

`\theoremstyle` thiết lập giao diện của mọi khai báo theo sau nó. Kiểu `đơn giản` in phần thân bằng chữ in nghiêng, cách xử lý truyền thống cho các định lý, bổ đề và mệnh đề. Kiểu `định nghĩa` giữ cho cơ thể đứng thẳng, phù hợp với định nghĩa và ví dụ. Phong cách thứ ba, `nhận xét`, vẫn nhẹ nhàng hơn và phù hợp với các ghi chú và quan sát. Nhóm các khai báo của bạn theo kiểu mà mỗi người nên sử dụng.

## Sử dụng các khối

Đối số tùy chọn của môi trường sẽ in một tên sau tiêu đề, vì vậy `\begin{theorem[Tên tùy chọn]` mang lại kết quả giống như Định lý 2.4 (Fubini). Môi trường `proof` in tiêu đề Proof in nghiêng và đóng lại bằng dấu kết thúc proof, bộ hình vuông nhỏ nằm ngang bên phải.

`\qedhere` định vị lại hình vuông khi bằng chứng không kết thúc bằng văn bản thông thường. Nếu dòng cuối cùng của phép chứng minh là một phương trình được hiển thị, dấu tự động sẽ nằm ở dòng trống bên dưới nó. Viết `\qedhere` bên trong màn hình sẽ đặt hình vuông lên dòng riêng của phương trình. Khi bằng chứng kết thúc bằng văn bản thuần túy, như trong ví dụ, lệnh này vô hại nhưng không cần thiết.

Các khối định lý là các đối tượng được đánh số giống như bất kỳ đối tượng nào khác, vì vậy `\label{thm:main}` bên trong môi trường và `Theorem~\ref{thm:main}` trong văn bản hoạt động với các quy tắc hai bước thông thường được mô tả trong [số và con trỏ cho phương trình](/learn/number-equations/). Lỗi khai báo phổ biến là đặt mọi môi trường dưới `\theoremstyle{plain}`, đặt định nghĩa nhiều đoạn bằng chữ in nghiêng. Giữ các định nghĩa và ví dụ theo kiểu `định nghĩa`.