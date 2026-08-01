---

title: "Dấu đầu dòng, số và danh sách định nghĩa"
description: "phân loại, liệt kê, mô tả, lồng nhau và nhãn mục tùy chỉnh."
category: "type-and-shape"
order: 4
level: "beginner"
tags: ["formatting", "lists"]
featured: false
updated: 2026-07-25
---

# Danh sách dấu đầu dòng, số và định nghĩa

Các danh sách trong LaTeX là các môi trường: bạn mở một danh sách bằng `\begin{...}`, đóng nó bằng `\end{...}` và đánh dấu từng mục bằng `\item`. Sau đó, LaTeX sẽ xử lý việc đánh số, dấu đầu dòng, thụt lề và khoảng cách cho bạn. Phần cuối cùng đó là điểm. Bạn không bao giờ đánh số lại bất cứ thứ gì bằng tay và nếu bạn xóa mục nhập thứ ba của danh sách được đánh số, các mục từ bốn đến mười sẽ âm thầm trở thành từ ba đến chín.

## Ba môi trường danh sách

```latex
\begin{itemize}
 \item Bullet
\end{itemize}

\begin{enumerate}
 \item Numbered
\end{enumerate}

\begin{description}
 \item[Term] Definition style
\end{description}
```

`itemize` tạo ra một danh sách dấu đầu dòng không có thứ tự và là lựa chọn phù hợp khi các mục nhập không có trình tự, chẳng hạn như danh sách các giả định. `liệt kê` các số tự động cho mỗi mục nhập, đây là điều bạn muốn cho các bước diễn ra theo thứ tự hoặc cho các mục bạn dự định tham khảo lại. Bạn thậm chí có thể đặt `\label` sau `\item` trong bảng liệt kê và tham chiếu số của nó sau bằng `\ref`, giống như cách bạn làm với một phần.

`mô tả` là ít được biết đến nhất trong ba nhưng rất hữu ích. Mỗi `\item` nhận một đối số tùy chọn trong dấu ngoặc vuông và đối số đó được in đậm dưới dạng nhãn với văn bản định nghĩa theo sau nó. Đó là môi trường tự nhiên cho các bảng chú giải thuật ngữ, danh sách ký hiệu hoặc bất kỳ cấu trúc "thuật ngữ: giải thích" nào.

## Làm tổ

Môi trường lồng cho danh sách đa cấp. Đặt một khối `\begin{itemize} ... \end{itemize}` hoàn chỉnh bên trong một `\item` của danh sách bên ngoài và LaTeX thụt lề khối đó và tự động chuyển biểu tượng dấu đầu dòng. Điều tương tự cũng xảy ra với `enumerate`, trong đó việc lồng nhau thay đổi kiểu đánh số ở mỗi cấp độ: trước tiên là số Ả Rập, sau đó là chữ cái, sau đó là chữ số La Mã. LaTeX hỗ trợ bốn cấp độ lồng nhau, nhiều hơn bất kỳ nhu cầu tài liệu có thể đọc được nào. Nếu bạn thấy mình có chiều sâu ba cấp độ, tài liệu có thể sẽ là văn xuôi hoặc một bảng biểu.

## Nhãn tùy chỉnh

Bất kỳ mục nào cũng có thể ghi đè điểm đánh dấu của chính nó bằng đối số tùy chọn: `\item[(a)]` in "(a)" thay vì dấu đầu dòng hoặc số. Điều này rất hữu ích cho các trường hợp xảy ra một lần, nhưng nếu bạn muốn sắp xếp lại toàn bộ danh sách, việc thay đổi từng mục bằng tay sẽ không tự động hóa được. Để làm được điều đó, hãy tải gói `enumitem`, gói này cho phép bạn viết những thứ như `\begin{enumerate[label=(\alph*)]` để gắn nhãn lại toàn bộ danh sách ở một nơi và cũng cung cấp cho bạn các tùy chọn để thu hẹp khoảng cách theo chiều dọc.

Một lỗi phổ biến của người mới bắt đầu là để lại một dòng trống giữa các mục `\item` với hy vọng xóa chúng ra. Dòng trống vô hại trong danh sách nhưng nó không có tác dụng gì về mặt trực quan. Khoảng cách được kiểm soát bởi chính môi trường danh sách hoặc bởi các tùy chọn `enumitem`. Một vấn đề khác: mọi môi trường danh sách phải chứa ít nhất một `\item` trước bất kỳ văn bản nào, nếu không bạn sẽ gặp phải lỗi khó hiểu "Đã xảy ra lỗi--có thể là thiếu \item". Bạn có thể thử nghiệm cả ba môi trường trong [sân chơi trực tiếp](/live/).