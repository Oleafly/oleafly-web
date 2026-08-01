---

title: "Nút và mũi tên"
description: "Các nút được đặt tên, vị trí tương đối, đầu mũi tên."
category: "draw-in-tex"
order: 1
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Nút và mũi tên

Gần như mọi sơ đồ TikZ đều rút gọn thành hai thành phần. Nút là một phần nội dung được định vị, thường là hộp hoặc vòng tròn được gắn nhãn. Cạnh là một đường hoặc mũi tên nối hai nút. Khi bạn có thể đặt các nút và nối chúng, lưu đồ, đường ống và sơ đồ khối đều giống nhau ở các kích cỡ khác nhau. Ví dụ dưới đây đặt hai hộp được đặt tên và vẽ một mũi tên có nhãn giữa chúng:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}
\node[draw] (src) {Source};
\node[draw, right=2cm of src] (dst) {Sink};
\draw[-{Latex}] (src) -- node[above] {edge} (dst);
\end{tikzpicture}
```

## Đặt tên và đặt nút

Trong `\node[draw] (src) {Source};`, các tùy chọn dấu ngoặc sẽ tạo kiểu cho nút và `draw` có nghĩa là vẽ đường viền của nó, nếu không có nó thì bạn sẽ có được văn bản nổi. `(src)` là tên của nút và `{Source}` là nội dung của nút. Tên là phần quan trọng: nó cho phép các lệnh khác tham chiếu đến nút này mà không cần biết tọa độ của nó.

Nút thứ hai cho thấy lý do tại sao điều đó lại quan trọng. `right=2cm của src` xuất phát từ thư viện `positioning` và đặt `dst` ở bên phải của `src` hai cm, được đo giữa các đường viền của chúng. Thư viện cũng cung cấp các kết hợp `left=of`, `above=of`, `below=of` và các kết hợp đường chéo như `phía trên bên phải=of`. Xây dựng sơ đồ theo cách này (mỗi nút tương ứng với nút hiện có) và bố cục vẫn giữ nguyên khi văn bản thay đổi kích thước. Các tọa độ tuyệt đối như `\node at (4,2)` vẫn có tác dụng nhưng sơ đồ được xây dựng trên chúng cần được đánh số lại theo cách thủ công mỗi khi một hộp phát triển.

## Vẽ mũi tên

`\draw (src) -- (dst);` vẽ một đường thẳng giữa hai nút được đặt tên và TikZ tự động bắt đầu và kết thúc đường thẳng ở viền nút thay vì ở tâm của chúng. Tùy chọn `[-{Latex}]` chỉ định các đầu mũi tên: không có gì trước dấu gạch nối có nghĩa là không có đầu mũi tên và `Latex` sau khi chọn một đầu mũi tên đặc từ thư viện `arrows.meta` tại đích. Viết `{Latex}-{Latex}` sẽ tạo ra một mũi tên hai đầu.

Đường giữa `nút [ở trên] {cạnh}` là nhãn được gắn vào chính dòng đó. Một nút được viết bên trong một đường dẫn được đặt tại điểm đó của đường dẫn, theo mặc định là ở giữa và `ở trên` dịch chuyển nó ngay phía trên dòng để văn bản không nằm trên nét. Đây là cách tiêu chuẩn để chú thích các chuyển đổi và luồng dữ liệu.

## Thói quen mang lại kết quả

Đặt tên cho mọi nút, ngay cả trong các sơ đồ nhỏ. Các nút không được đặt tên không thể kết nối được và các sơ đồ nhỏ hiếm khi có kích thước nhỏ. Thích vị trí tương đối từ `định vị` hơn tọa độ tuyệt đối vì lý do tương tự. Mọi câu lệnh TikZ đều kết thúc bằng dấu chấm phẩy. Bỏ sót một lỗi là lỗi TikZ phổ biến nhất và các thông báo thường chỉ ra vấn đề thực sự. Để sắp xếp nhiều hộp thành các hàng và cột gọn gàng, hãy tiếp tục với [hộp lưu đồ đã căn chỉnh](/learn/tikz-flowchart/).