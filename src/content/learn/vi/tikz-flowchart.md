---

title: "Hộp lưu đồ đã căn chỉnh"
description: "thư viện định vị để các cột chia sẻ một cạnh."
category: "draw-in-tex"
order: 2
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Hộp sơ đồ được căn chỉnh

Một sơ đồ trông có vẻ nghiệp dư vì một lý do chính xác: các hộp gần như xếp thành hàng. TikZ tránh được vấn đề về mặt cấu trúc, bởi vì mọi hộp đều được đặt tương đối với hộp khác, do đó, một cột của các hộp chia sẻ một trục theo cách xây dựng thay vì bằng nhãn cầu. Thành phần thứ hai được đặt tên theo kiểu, vì vậy tất cả các hộp đều giống nhau về hình dạng và kích thước tối thiểu. Đây là quy trình ba bước theo chiều dọc:

```latex
\usetikzlibrary{positioning,arrows.meta}

\begin{tikzpicture}[
 box/.style={draw, rounded corners, align=center, minimum width=2.8cm},
 node distance=10mm and 14mm
]
\node[box] (i) {Input};
\node[box, below=of i] (p) {Process};
\node[box, below=of p] (o) {Output};
\draw[-Latex] (i) -- (p);
\draw[-Latex] (p) -- (o);
\end{tikzpicture}
```

## Xác định kiểu một lần

Dòng `box/.style={...}` tạo một kiểu có thể sử dụng lại được có tên là `box`. Nội dung của nó là các tùy chọn nút thông thường: `draw` tạo cho nút một đường viền, `các góc tròn` làm mềm nó, `align=center` căn giữa văn bản nhiều dòng bên trong nút và `chiều rộng tối thiểu=2,8cm` buộc mọi hộp phải có chiều rộng ít nhất bằng chiều rộng đó để các nhãn ngắn không co lại thành các hộp nhỏ. Từ đó trở đi, `\node[box]` áp dụng toàn bộ. Khi bạn muốn tô màu hoặc có chiều rộng lớn hơn, hãy thay đổi một dòng và toàn bộ biểu đồ sẽ cập nhật. Đó là sơ đồ bạn duy trì chứ không phải sơ đồ bạn vẽ lại.

## Khoảng cách theo hai hướng

`khoảng cách nút=10mm và 14mm` đặt các khoảng trống mặc định được sử dụng bởi thư viện `định vị`: giá trị đầu tiên là khoảng cách dọc, giá trị thứ hai là chiều ngang. Với vị trí đó, `below=of i` đặt hộp quy trình thấp hơn hộp đầu vào 10 mm, từ cạnh này sang cạnh khác và căn giữa hoàn hảo vào hộp đó. Cột thứ hai sẽ sử dụng `right=of p` và cách 14 mm sang một bên. Bởi vì mỗi vị trí nối liền với một nút hiện có nên việc chèn một bước có nghĩa là thêm một nút và cập nhật một tham chiếu `below=of`. Mọi thứ ở hạ nguồn đều dịch chuyển theo nó. Bạn cũng có thể ghi đè khoảng cách trên mỗi nút, như trong `dưới=15mm của i`.

## Kết nối các bước

Mỗi `\draw[-Latex] (i) -- (p);` vẽ một mũi tên từ một nút được đặt tên đến nút tiếp theo, với `-Latex` chọn một đầu mũi tên liền khối từ thư viện `arrows.meta` ở đầu đích. Các mũi tên tự động kết nối tại các đường viền nút. Đối với một nhánh quyết định, hãy vẽ từ các điểm cố định cụ thể, ví dụ: `(p.east)` để rời khỏi phía bên phải và định tuyến với các điểm uốn cong chẳng hạn như `-- ++(2,0) |-` khi biểu đồ cần các góc.

Đầu ra TikZ không hiển thị trong các bản xem trước trong trang này, vì vậy hãy biên dịch đoạn mã để xem. Sai lầm kinh điển trong sơ đồ là đặt một vài hộp có tọa độ tuyệt đối "chỉ lần này thôi": những hộp đó là những hộp cuối cùng bị căn chỉnh sai sau lần chỉnh sửa tiếp theo. Giữ mọi vị trí ở mức tương đối và xem [nút và mũi tên](/learn/tikz-nodes-arrows/) để biết các tùy chọn vị trí cơ bản.