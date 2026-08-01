---

title: "Nghiên cứu sơ đồ trong TikZ khi PowerPoint sẽ không cắt được"
description: "Khi nào cần vẽ đường ống, ô tô và biểu đồ giao hoán trong TeX để chúng đổi màu cho nhật ký, giữ được sắc nét khi in và tồn tại dưới dạng nguồn trong kho lưu trữ."
date: 2026-07-08
tags: [tikz, figures, research]
---

Sơ đồ PowerPoint trở thành hình chữ nhật mờ trong PDF. Sơ đồ TikZ ở lại
vector, khớp phông chữ tài liệu và đổi màu khi tạp chí yêu cầu thang độ xám
hoặc một giọng khác. Giao dịch trong giờ đầu tiên dốc hơn. Sau đó, nhỏ
các chỉnh sửa là khác biệt về văn bản, không phải khảo cổ học ảnh chụp màn hình.

Bạn không cần TikZ cho mọi hình. Hình ảnh, khung kính hiển vi thô và
các lô dày đặc từ matplotlib thường ở dạng PDF/PNG bao gồm. Sử dụng TikZ khi
hình là cấu trúc: đường ống, máy tự động, hộp kiến trúc, sơ đồ danh mục,
cây đơn giản.

## Bắt đầu từ việc nhỏ

Một đường ống ba nút dạy mô hình:

```latex
\usepackage{tikz}
\usetikzlibrary{positioning,arrows.meta}
\begin{tikzpicture}[node distance=1.5cm]
  \node[draw] (a) {Data};
  \node[draw,right=of a] (b) {Model};
  \node[draw,right=of b] (c) {Loss};
  \draw[-Latex] (a) -- (b) -- (c);
\end{tikzpicture}
```

Các nút tên. Kết nối bằng `--` hoặc các neo rõ ràng (`(a.east)`). Ưu tiên người thân
vị trí (`right=of a`) trên tọa độ kỳ diệu mà bạn sẽ không bao giờ nhớ được.
Bài học: [hình ảnh TikZ đầu tiên](/learn/tikz-intro/),
[nút và mũi tên](/learn/tikz-nodes-arrows/).

## Kiểu dáng đánh bại các tùy chọn một lần

Xác định kiểu một lần để mỗi hộp khớp với nhau:

```latex
\tikzset{
  block/.style={draw, rounded corners, align=center, minimum height=1cm},
  arr/.style={-Latex}
}
```

Khi tạp chí yêu cầu dòng đậm hơn hoặc đơn sắc, hãy thay đổi kiểu dáng, không
hai mươi nút. Màu với các màu được đặt tên hoặc macro bảng màu nhỏ để bạn có thể trao đổi
dấu mà không cần săn mã hex.

## CS và kỹ thuật: sơ đồ phù hợp

Sử dụng thư viện `định vị` (`below=of`, `right=of`) để các hộp chia sẻ một lưới.
Tọa độ tuyệt đối thủ công là cách sơ đồ bị xoay khi bạn chèn một nút. Giữ
văn bản ngắn; đặt chi tiết trong chú thích. Hướng dẫn:
[sơ đồ đã căn chỉnh](/learn/tikz-flowchart/).

Đối với các bản phác thảo hệ thống hoặc mạng lưới thần kinh, hãy tách các "khối" khỏi "chú thích".
Chú thích có thể là các nút phông chữ nhỏ hơn không có viền nên đường dẫn chính vẫn giữ nguyên
có thể đọc được ở chiều rộng hai cột.

##Toán học và lý thuyết: giản đồ giao hoán

`tikz-cd` là đường dẫn thông thường cho các sơ đồ kiểu danh mục mà không cần đặt mọi
nút bằng tay:

```latex
\usepackage{tikz-cd}
\begin{tikzcd}
  A \arrow[r,"f"] \arrow[d,"g"'] & B \arrow[d,"h"] \\
  C \arrow[r,"k"'] & D
\end{tikzcd}
```

Hướng dẫn: [sơ đồ giao hoán](/learn/commutative-diagrams/). Đối với cây và
có sơ đồ chứng minh lý thuyết, thư viện chuyên ngành; bắt đầu đơn giản trước bạn
nhập khẩu một nửa CTAN.

## Ngoại hóa và biên dịch thời gian

Một bài báo có 20 số liệu TikZ sẽ làm chậm quá trình biên dịch đầy đủ. Tùy chọn:

- Đặt mỗi hình vào một tập tin riêng và `\input` nó.
- Sử dụng thư viện `external` để hình ảnh trở thành tệp PDF được lưu trong bộ nhớ cache.
- Soạn thảo bằng `\tikzexternaldisable` khi bạn chỉ quan tâm đến văn xuôi.

Xuất cho các slide: biên dịch tài liệu TikZ `độc lập` thành PDF, chuyển đổi sang PNG
chỉ khi công cụ boong không thể lấy PDF. Giữ `.tex` làm nguồn thông tin chính xác.

## Công cụ canvas so với TikZ viết tay

Một số trình soạn thảo nghiên cứu bao gồm một khung sơ đồ phát ra TikZ có thể chỉnh sửa (đối với
ví dụ Trình soạn thảo sơ đồ của Oleafly: vẽ, chỉnh sửa mã, biên dịch hình,
chèn). Điều đó rất hữu ích cho hình học mà bạn có thể kéo. TikZ viết tay vẫn thắng
cho các sơ đồ giao hoán chặt chẽ và các lưới có tính đều đặn cao. Dù bằng cách nào, hãy cam kết
Nguồn TikZ, không chỉ là PNG.

## Giữ sơ đồ trong repo

Lưu nguồn hình bên cạnh tờ giấy:

```text
figures/
  pipeline.tex
  pipeline.pdf   % optional build product; often gitignored
```

Khi tạp chí muốn dòng dày hơn, bạn chỉnh sửa nguồn và biên dịch lại. Khi một
đồng tác giả "cải thiện" ảnh chụp màn hình trong công cụ trình chiếu, bạn đã mất đi điều duy nhất
phiên bản có thể chỉnh sửa

## Các chế độ lỗi thường gặp

Tràn trong hai cột là phổ biến. Chia tỷ lệ bằng `\resizebox` như là phương sách cuối cùng;
thiết kế lại cho chiều rộng đầu tiên. Phông chữ không khớp là một nguyên nhân khác: thích tài liệu mặc định hơn
phông chữ trên các họ phông chữ được mã hóa cứng bên trong TikZ trừ khi tạp chí yêu cầu.
Kiểm tra độ tương phản cho các cuộc đàm phán, vì màu xám vô hình trên máy chiếu là màu cổ điển
bẫy. Và các mũi tên không được gắn nhãn buộc chú thích phải giải thích mọi khía cạnh, có nghĩa là
sơ đồ không đầy đủ.

## Lớp và lớp phủ

Đối với các bài nói và bài viết có chung một hình, hãy xây dựng sơ đồ theo lớp: cơ sở
hộp đầu tiên, sau đó là mũi tên, sau đó nhãn. Nhận xét các lớp trong khi gỡ lỗi
vị trí. Lớp phủ Beamer (`\pause`, `\onslide`) có thể hiển thị bước quy trình bằng cách
bước từ cùng một nguồn TikZ nếu bạn giữ tên nút ổn định.

## Khả năng truy cập và in

Đừng mã hóa ý nghĩa chỉ bằng màu đỏ và màu xanh lá cây. Sử dụng hình dạng hoặc kiểu đường là tốt.
Kiểm tra hình trong thang độ xám. Chú thích vẫn có ý nghĩa nếu người đọc
mù màu hoặc in trên máy in đen trắng trong phòng thí nghiệm.

## Một quy trình làm việc hiệu quả

Phác thảo trên giấy trong ba mươi giây, sau đó xây dựng TikZ nhỏ nhất thể hiện
yêu cầu bồi thường. Xác định kiểu một lần và sử dụng lại chúng. Biên dịch hình một mình cho đến khi nó
có vẻ đúng, thả nó vào tờ giấy và để chú thích mang tuyên bố đó. Cam kết
`.tex`.

PowerPoint phù hợp cho một cuộc họp trong phòng thí nghiệm chỉ diễn ra một lần. Đối với bản PDF, một tạp chí sẽ in,
nguồn vector bạn có thể đổi màu sẽ đánh bại một vòng khác là "bạn có thể gửi bản chỉnh sửa được không
tập tin?"