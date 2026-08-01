---

title: "Bức ảnh TikZ đầu tiên của bạn"
description: "Các nút, các cạnh, một đường ống ba hộp vẫn giữ nguyên vectơ."
category: "floats-and-ink"
order: 6
level: "intermediate"
tags: ["tikz", "figures"]
featured: false
updated: 2026-07-25
---

# Bức ảnh TikZ đầu tiên của bạn

TikZ là ngôn ngữ vẽ nằm trong tài liệu LaTeX của bạn. Thay vì nhập sơ đồ được xuất từ ​​một công cụ khác, bạn mô tả nó bằng văn bản và trình biên dịch sẽ vẽ nó. Lợi ích là đầu ra là đồ họa vector sử dụng phông chữ riêng của tài liệu của bạn, do đó các nhãn khớp chính xác với văn bản xung quanh và luôn sắc nét ở bất kỳ mức thu phóng nào. Chi phí là bạn viết tọa độ và tùy chọn thay vì kéo hộp. Đối với các sơ đồ được xây dựng từ các hộp và mũi tên, sự đánh đổi thường có giá trị. Đây là quy trình gồm ba hộp, hình ảnh chuẩn đầu tiên:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[node distance=1.5cm]
 \node[draw, rounded corners] (a) {Input};
 \node[draw, rounded corners, right=of a] (b) {Model};
 \node[draw, rounded corners, right=of b] (c) {Output};
 \draw[-Latex] (a) -- (b);
 \draw[-Latex] (b) -- (c);
\end{tikzpicture}
```

## nút

Nút là một phần nội dung, thường là văn bản, được đặt ở một vị trí, tùy ý có hình dạng được vẽ xung quanh nó. Trong `\node[draw, round Corners] (a) {Input};` các tùy chọn trong ngoặc vuông nói rằng vẽ đường viền của nút và làm tròn các góc của nó, `(a)` đặt tên cho nút mà bạn có thể tham khảo sau và `{Input}` là văn bản bên trong. Nút thứ hai sử dụng `right=of a`, từ thư viện `positioning`, đặt nó ở bên phải nút `a` ở khoảng cách được đặt bởi `node distance=1,5cm` trong các tùy chọn của môi trường. Đặt các nút tương đối với nhau thay vì ở tọa độ tuyệt đối và toàn bộ sơ đồ sẽ điều chỉnh khi một nhãn dài hơn.

## Các cạnh

Một cạnh là một đường nối hai điểm. Vì các nút được đặt tên nên bạn kết nối chúng theo tên: `\draw (a) -- (b);` vẽ một đường thẳng từ nút `a` đến nút `b`. TikZ bắt đầu và kết thúc dòng ở viền nút chứ không phải ở tâm của chúng. Tùy chọn `[-Latex]` đặt kiểu đầu mũi tên từ thư viện `arrows.meta`, tạo cho đường thẳng một đầu mũi tên liền nét ở đích. Mẹo này áp dụng một lần cho mỗi đường dẫn, ở cuối đường dẫn, đó là lý do tại sao ví dụ này sử dụng hai lệnh `\draw`. Một đường dẫn `(a) -- (b) -- (c)` sẽ chỉ đặt một đầu mũi tên tại `c`.

## Đi đâu tiếp theo

Bao bọc `tikzpicture` trong môi trường `figure` khi nó cần chú thích và số, giống hệt như một hình ảnh. Mã TikZ không hiển thị trong các bản xem trước trong trang này, vì vậy hãy biên dịch đoạn mã trong dự án để xem kết quả. Trong Oleafly, Trình soạn thảo sơ đồ cũng có thể tạo ra TikZ có thể chỉnh sửa làm điểm bắt đầu. Lỗi phổ biến nhất dành cho người mới bắt đầu là quên dấu chấm phẩy kết thúc mỗi lệnh TikZ, điều này tạo ra một lỗi dài khó hiểu. Khi sơ đồ vượt quá ba hộp, hãy tiếp tục với [nút và mũi tên](/learn/tikz-nodes-arrows/) và [hộp lưu đồ đã căn chỉnh](/learn/tikz-flowchart/).