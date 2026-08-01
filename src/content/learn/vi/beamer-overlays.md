---

title: "Hiển thị các dòng khi nhấp chuột"
description: "Thông số kỹ thuật lớp phủ, chỉ tạm dừng, không làm quá mức."
category: "on-stage"
order: 2
level: "intermediate"
tags: ["beamer"]
featured: false
updated: 2026-07-25
---

# Hiển thị các dòng khi nhấp chuột

Một khung Beamer có thể có nhiều hơn một slide vật lý. Khi bạn hiển thị từng dấu đầu dòng một, Beamer sẽ tạo một số trang PDF từ cùng một khung, mỗi trang hiển thị nhiều hơn một chút. Tiến tới các bước trong trình xem PDF thông qua chúng. Những trang được tạo này được gọi là lớp phủ. Học cách kiểm soát chúng là điều biến một bộ bài tĩnh thành một cuộc nói chuyện có nhịp độ.

```latex
\begin{itemize}
 \item<1-> Always visible from slide 1
 \item<2-> Appears on slide 2
 \item<3-> Appears on slide 3
\end{itemize}

\pause % simpler step-through
```

## Thông số lớp phủ

Ký hiệu khung góc sau `\item` là thông số kỹ thuật lớp phủ. Nó cho biết mục nào được hiển thị trên lớp phủ nào của khung. Số này là chỉ mục lớp phủ trong khung này và dấu gạch nối làm cho nó trở thành một phạm vi: `<2->` nghĩa là từ lớp phủ 2 trở đi, do đó mục sẽ xuất hiện ở bước thứ hai và giữ nguyên. `<2>` trần có nghĩa là chỉ có lớp phủ 2, vì vậy mục này sẽ xuất hiện rồi biến mất. Bạn cũng có thể đưa ra các danh sách như `<1,3>`. Beamer tạo ra nhiều lớp phủ bằng số lượng cao nhất được đề cập, do đó khung bên trên tạo ra ba trang PDF.

Thông số kỹ thuật lớp phủ hoạt động trên nhiều mặt hàng. `\textbf<2->{key term}` in đậm văn bản từ lớp phủ 2 trở đi và `\only<2>{...}` chỉ bao gồm nội dung của nó trên lớp phủ 2. Bởi vì `\only` loại bỏ nội dung hoàn toàn trên các lớp phủ khác, nên bố cục xung quanh sẽ phản chiếu lại, khiến nó trở thành công cụ để thay thế hình này bằng hình khác ở cùng một vị trí: đưa ra hai khối `\only` có cùng vị trí và thông số kỹ thuật liên tiếp. Anh em họ của nó `\uncover` dành không gian trong khi ẩn nội dung nên không có gì thay đổi.

## Công cụ đơn giản hơn

`\pause` chia tách khung hình tại thời điểm đó. Mọi thứ trước nó hiển thị ngay lập tức, mọi thứ sau đó chờ bước tiếp theo và các lệnh `\pause` lặp lại sẽ tạo ra các bước liên tiếp. Nó không cần số và không cần lập kế hoạch, vì vậy đây là chế độ mặc định phù hợp để hiển thị đơn giản từ trên xuống dưới. Chỉ tiếp cận các thông số kỹ thuật rõ ràng khi thứ tự tiết lộ khác với thứ tự nguồn hoặc khi các mục phải xuất hiện và biến mất.

Một phím tắt hữu ích khi mọi mục trong danh sách phải được sắp xếp theo thứ tự là `\begin{itemize[<+->]`, phím tắt này sẽ tự động gán số lượng lớp phủ tăng dần.

## Kiềm chế

Lớp phủ rất dễ bị lạm dụng. Một bộ bài trong đó mỗi dấu đầu dòng trên mỗi trang chiếu lần lượt bấm vào từng dấu đầu dòng khiến người thuyết trình (nhấp chuột liên tục) và khán giả (không đọc trước) đều kiệt sức. Dự trữ từng bước tiết lộ một số chỗ mà nhịp độ mang theo một lập luận, chẳng hạn như xây dựng một dẫn xuất hoặc đối chiếu trước và sau. Mỗi lớp phủ là một trang PDF thực, do đó, bản phân phát sẽ sao chép bong bóng trừ khi bạn biên dịch bằng `\documentclass[handout]{beamer}`, nó sẽ thu gọn mọi khung hình thành lớp phủ cuối cùng. Những vấn đề cơ bản về khung được trình bày trong [bộ bài Beamer đầu tiên](/learn/beamer-basics/).