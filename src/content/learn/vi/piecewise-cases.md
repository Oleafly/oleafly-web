---

title: "Định nghĩa từng phần"
description: "Môi trường trường hợp cho các điều kiện theo một hàm duy nhất."
category: "notation-depth"
order: 1
level: "intermediate"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Định nghĩa từng phần

Hàm từng phần đưa ra các công thức khác nhau trên các phần khác nhau trong miền của nó: giá trị tuyệt đối, kích hoạt ReLU, biểu khung thuế. Quy ước sắp chữ là một dấu ngoặc đơn cao bên trái với một hàng cho mỗi kiểu chữ, mỗi hàng hiển thị công thức và điều kiện áp dụng công thức đó. Gói `amsmath` cung cấp môi trường `case`, tạo ra chính xác bố cục này mà không cần bất kỳ kích thước khung giằng thủ công nào.

## Môi trường trường hợp

```latex
\[
f(x) =
\begin{cases}
 x^2 & x \ge 0 \\
 -x & x < 0
\end{cases}
\]
```

Đọc từng dòng này: toàn bộ nội dung nằm bên trong `\[ ... \]`, vì vậy nó hiển thị toán học trên dòng riêng của nó. `f(x) =` là phép toán thông thường và sau đó `\begin{cases}` sẽ mở khối từng phần. Bên trong, mỗi hàng có hai cột cách nhau bởi `&`: công thức ở bên trái, điều kiện ở bên phải. Các hàng kết thúc bằng `\\`, ngoại trừ hàng cuối cùng không cần. Khi biên dịch, LaTeX vẽ một dấu ngoặc nhọn bên trái đủ cao để trải dài cả hai hàng và căn chỉnh các công thức trong một cột và các điều kiện trong một cột khác.

`&` đang làm việc thực sự ở đây. Nếu không có nó, mỗi hàng sẽ là một đốm màu duy nhất và các điều kiện sẽ không xếp hàng theo chiều dọc. Với nó, `x^2` và `-x` có chung cạnh trái, còn `x \ge 0` và `x < 0` có chung cạnh trái, điều này làm cho định nghĩa có thể quét được.

Hai điều phải được thực hiện để biên dịch này. Đầu tiên, `\usepackage{amsmath}` trong phần mở đầu, vì `case` không phải là một phần của LaTeX cốt lõi. Thứ hai, môi trường phải ở trong chế độ toán học. `case` xây dựng nội dung toán học nhưng không tự mở chế độ toán học. Nếu thiếu một trong hai, bạn sẽ gặp lỗi "Trường hợp môi trường không xác định" hoặc lỗi "Thiếu $ được chèn". Phần sau được giải thích trong [Thiếu đô la được chèn](/learn/missing-dollar/).

## Thêm từ

Hầu hết các định nghĩa từng phần được công bố đều bao gồm từ "nếu" và thường là "nếu không" cuối cùng. Vì cột điều kiện ở chế độ toán học, nên các từ đơn giản cần `\text{...}` xuất hiện ở phông chữ tài liệu với khoảng cách thích hợp:

```latex
\[
f(x) =
\begin{cases}
 x^2 & \text{if } x \ge 0 \\
 -x & \text{otherwise}
\end{cases}
\]
```

Lưu ý khoảng trắng bên trong `\text{if }`. Chế độ toán học bỏ qua các khoảng trắng bạn nhập, nhưng các khoảng trắng bên trong `\text` là có thật, do đó, việc đặt một dấu cách trước dấu ngoặc đóng sẽ tách "if" khỏi điều kiện theo sau.

## Biến thể và một lỗi thường gặp

Nếu các công thức là phân số cao và trông chật chội, gói `mathtools` sẽ cung cấp `dcase`, một công cụ thay thế tùy ý giúp đặt từng công thức theo kiểu hiển thị. Ngoài ra còn có `rcase` cho tình huống ảnh phản chiếu trong đó dấu ngoặc nhọn thuộc về bên phải.

Lỗi thường gặp nhất là quên `\\` giữa các hàng, điều này âm thầm hợp nhất hai trường hợp thành một dòng dài. Nếu đầu ra được biên dịch của bạn hiển thị các điều kiện chạy trong công thức, hãy đếm số lần ngắt hàng của bạn trước tiên. Bạn có thể thử nghiệm môi trường sống trong [sân chơi](/live/).