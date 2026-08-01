---

title: "Dấu chấm hỏi thay cho số"
description: "Nhãn cần một thẻ khác; vị trí nhãn sau chú thích."
category: "log-literacy"
order: 5
level: "beginner"
tags: ["errors", "cross-ref"]
featured: false
updated: 2026-07-25
---

# Dấu hỏi thay vì số

Bạn biên dịch và ở vị trí của một hình hoặc số phương trình, bản PDF sẽ hiển thị `??`. Đó không phải là lỗi trong nguồn của bạn. Đó là cách LaTeX hiển thị một tham chiếu mà nó chưa thể giải quyết được và cách khắc phục thường chỉ là biên dịch lại.

## Tại sao một pass là không đủ

LaTeX đọc tài liệu của bạn từ trên xuống dưới chỉ trong một lần. Khi nó gặp một `\label`, nó ghi số hiện tại vào tệp `.aux`; khi gặp `\ref`, nó sẽ tra cứu số từ tệp `.aux` được ghi bởi lần chạy trước. Trên một bản biên dịch mới không có lần chạy trước đó, vì vậy mọi tham chiếu đều được in dưới dạng `??`. Thẻ thứ hai đọc tệp `.aux` đã hoàn chỉnh và điền các số vào. Trình biên dịch đi kèm của Oleafly sẽ tự động chạy lại cho đến khi các số ổn định, nhưng nếu bạn điều khiển `pdflatex` bằng tay, thì công việc biên dịch thứ hai là công việc của bạn.

## Khi ?? sống sót sau lần vượt qua thứ hai

Nếu dấu hỏi vẫn còn, hãy thực hiện ba lần kiểm tra. Đầu tiên, so sánh cách viết của `\ref` với ký tự `\label` theo từng ký tự; các nhãn phân biệt chữ hoa chữ thường và tính khoảng trắng đi lạc. Thứ hai, kiểm tra xem nhãn nằm ở đâu. `\label` ghi lại giá trị của bộ đếm được bước gần đây nhất và trong một float, chính `\caption` là bước của bộ đếm, vì vậy nhãn phải xuất hiện sau chú thích:

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.7\textwidth]{plot.pdf}
  \caption{Convergence of the estimator.}
  \label{fig:convergence}
\end{figure}

Figure~\ref{fig:convergence} shows the effect.
```

Một nhãn được đặt trước chú thích biên dịch mà không có khiếu nại nhưng lại chọn sai bộ đếm, thường là phần hiện tại, do đó tham chiếu in một con số hợp lý nhưng sai thay vì `??`. Biến thể đó tệ hơn vì rất dễ bỏ sót. Thứ ba, nếu tệp `.aux` bị xóa giữa chừng hoặc quá trình biên dịch bị gián đoạn, các nhãn được ghi có thể không đầy đủ; biên dịch lại từ trạng thái sạch.

## Đọc cảnh báo

Nhật ký cho bạn biết bạn đang ở trong trường hợp nào. "Có tài liệu tham khảo không xác định" có nghĩa là ít nhất một `\ref` không tìm thấy gì. "(Các) nhãn có thể đã thay đổi. Chạy lại để có được tham chiếu chéo đúng" nghĩa là một lượt khác sẽ khắc phục được. "Nhãn được xác định nhân lên" có nghĩa là hai lệnh `\label` có chung một tên và LaTeX âm thầm sử dụng một trong số chúng, vì vậy hãy đổi tên cho đến khi mỗi nhãn là duy nhất. Quy ước đặt tên với các tiền tố `eq:`, `fig:` và `tab:` làm cho hiếm khi xảy ra xung đột và nguồn dễ tìm kiếm hơn; bản thân quy trình làm việc của nhãn được đề cập trong [số và con trỏ cho phương trình](/learn/number-equations/).