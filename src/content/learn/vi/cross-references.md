---

title: "Chỉ vào các phần khác của PDF"
description: "nhãn và ref, cộng với smartef cho tên tự động."
category: "paper-bones"
order: 5
level: "beginner"
tags: ["structure", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Chỉ vào các phần khác của PDF

Việc gõ "xem Hình 3" bằng tay là một lời hứa bạn không thể giữ được. Thêm một số ở đầu bài và mỗi số viết tay sau số đó sai. LaTeX giải quyết vấn đề này bằng cơ chế gồm hai phần: `\label` gắn tên bạn chọn vào một thứ được đánh số và `\ref` in bất kỳ số nào mà thứ đó có. Bạn đề cập đến tên và trình biên dịch giữ cho các con số luôn trung thực.

## Dán nhãn và giới thiệu

```latex
\section{Methods}\label{sec:methods}
\begin{equation}\label{eq:main} ... \end{equation}
\begin{figure}
 ...
 \caption{...}\label{fig:pipeline}
\end{figure}

See Section~\ref{sec:methods}, Eq.~\eqref{eq:main}, and Figure~\ref{fig:pipeline}.
```

`\label{sec:methods}` ghi lại số được gán gần đây nhất, ở đây là phần, dưới khóa `sec:methods`. Sau đó, `\ref{sec:methods}` in số đó và `\eqref` là biến thể amsmath thêm quy ước dấu ngoặc đơn cho phương trình, in "(1)" thay vì "1".

Hai chi tiết trong ví dụ này rất quan trọng. Đầu tiên, bên trong một hình, nhãn phải đứng sau `\caption`, bởi vì chú thích là các bước của bộ đếm hình; thay vào đó, một nhãn được đặt trước nó sẽ âm thầm lấy số phần hiện tại. Thứ hai, `~` trong `Hình~\ref{...}` là một khoảng trắng không ngắt, giữ từ và số của nó trên cùng một dòng thay vì để "Hình" kết thúc một dòng và "3" bắt đầu dòng tiếp theo.

Các tiền tố `sec:`, `fig:` và `eq:` là quy ước thuần túy. LaTeX không yêu cầu chúng nhưng chúng làm cho các khóa có thể đọc được và cho phép trình soạn thảo tự động hoàn thành nhóm các nhãn của bạn theo loại.

##Tại sao bạn lại thấy??

Trong lần biên dịch đầu tiên sau khi thêm nhãn, `\ref` in `??`. Các số được giải quyết thông qua tệp `.aux` được ghi trong lần chạy trước, vì vậy nhãn mới cần biên dịch thêm một lần nữa để xuất hiện; [tại sao bạn biên dịch nhiều lần](/learn/compile-to-pdf/) giải thích cơ chế. Một `??` tồn tại trong hai lần biên dịch liên tiếp hầu như luôn có nghĩa là khóa trong `\ref` không khớp với khóa trong `\label`.

##smartef viết lời cho bạn

Vớismartef (tải sau hyperref):

```latex
\usepackage{cleveref}
\cref{fig:pipeline}
```

`\cref{fig:pipeline}` in "Hình 3", tên loại được bao gồm và điều chỉnh nếu thay vào đó nhãn hóa ra là một bảng hoặc một phương trình. `\Cref` viết hoa khi bắt đầu câu và `\cref{eq:a,eq:b,eq:c}` nén danh sách thành một dải ô. Lưu ý thứ tự tải:smartef là một trong số ít gói phải theo sau [hyperref](/learn/hyperlinks/), điều ngược lại với quy tắc thông thường. Hãy chấp nhận nó sớm. Việc trang bị thêm `\cref` vào một tờ giấy đầy những cụm từ "Hình~\ref" viết tay thật là tẻ nhạt.