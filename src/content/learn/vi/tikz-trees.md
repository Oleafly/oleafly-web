---

title: "Cây và đồ thị đơn giản"
description: "cú pháp con và các nút khoảng cách."
category: "draw-in-tex"
order: 3
level: "advanced"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# Cây và đồ thị đơn giản

Hệ thống phân cấp xuất hiện liên tục: cây phân tích, cây quyết định, bố cục tệp, phân loại. Vẽ từng hộp một với tính năng `định vị` có hiệu quả, nhưng việc giữ các ô anh chị em trải đều và các cấp cách đều nhau bằng tay là điều tẻ nhạt. Thay vào đó, thư viện `trees` của TikZ cho phép bạn mô tả chính hệ thống phân cấp, sử dụng các thao tác `con` lồng nhau và tính toán bố cục cho bạn:

```latex
\usetikzlibrary{trees}
\begin{tikzpicture}[
 every node/.style={draw, circle, minimum size=7mm},
 level distance=12mm,
 sibling distance=18mm
]
\node{A}
 child{node{B}}
 child{node{C}
 child{node{D}}
 child{node{E}}};
\end{tikzpicture}
```

##Đọc cú pháp con

Hình ảnh chứa một tuyên bố duy nhất. Nó bắt đầu bằng gốc, `\node{A}`, và mỗi `child{...}` gắn liền với nó khai báo một cây con. Một phần tử con thường chứa một `nút{...}` cho nhãn riêng của nó và có thể chứa các thao tác `con` khác, đó là cách `C` có được các phần tử con `D` và `E`. Việc lồng các dấu ngoặc nhọn phản ánh cách lồng của cây, do đó bạn có thể đọc cấu trúc trực tiếp từ vết lõm. TikZ đặt mỗi cấp độ bên dưới cấp độ trước đó và tự động vẽ các cạnh kết nối. Câu lệnh kết thúc bằng một dấu chấm phẩy sau dấu ngoặc nhọn cuối cùng. Dấu chấm phẩy bị thiếu hoặc thừa bên trong cấu trúc là nguyên nhân thường gây ra lỗi ở đây.

## Ba nút bố trí

Các tùy chọn ở trên cùng kiểm soát hình thức và khoảng cách. `every node/.style={draw, round, min size=7mm}` áp dụng một kiểu cho tất cả các nút cùng một lúc: mỗi nút có một đường viền được vẽ, hình tròn và đường kính tối thiểu là 7 mm để các chữ cái đơn lẻ tạo ra các vòng tròn đồng nhất. `khoảng cách cấp độ = 12 mm` đặt khoảng cách theo chiều dọc giữa cha mẹ và con cái của nó. `khoảng cách anh chị em=18mm` đặt khoảng cách theo chiều ngang giữa những đứa con liền kề của cùng một phụ huynh.

Khoảng cách anh chị em là cái nút bạn sẽ điều chỉnh nhiều nhất. Thư viện `cây` dành cùng chiều rộng cho mọi cây con ở một cấp độ nhất định, vì vậy các cây con rộng có thể xung đột nếu giá trị quá nhỏ. Biện pháp khắc phục tiêu chuẩn là mở rộng khoảng cách gần trên cùng, nơi các cây con rộng nhất, với cài đặt theo từng cấp độ, chẳng hạn như `level 1/.style={sibling distance=36mm}` và `level 2/.style={sibling distance=18mm}`. Nếu các nhãn của bạn khác nhau nhiều về chiều rộng, hãy chuyển từ hình tròn sang hình chữ nhật bằng cách xóa `hình tròn` khỏi kiểu chia sẻ.

## Ngoài những cây nhỏ

Các cạnh chọn kiểu dáng thông qua `edge từ parent/.style`, chẳng hạn như để thêm đầu mũi tên hoặc đường kẻ dày hơn. Đối với những cây có nhiều hơn khoảng chục nút hoặc đối với các đồ thị chung có chu kỳ, thư viện `cây` sẽ trở nên hạn chế. Gói `forest` xử lý các cây lớn bằng cách đóng gói tự động. Thư viện `graphs` với thuật toán `graphdrawing` bao gồm các biểu đồ tùy ý, mặc dù đường dẫn đó yêu cầu LuaLaTeX. TikZ không hiển thị trong các bản xem trước trong trang này, vì vậy hãy biên dịch ví dụ để xem bố cục. Bắt đầu với những điều cơ bản trong [ảnh TikZ đầu tiên của bạn](/learn/tikz-intro/) nếu cú ​​pháp này là mới.