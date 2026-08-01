---

title: "Phương trình nhiều dòng thẳng hàng"
description: "căn chỉnh, tập hợp, phân chia, nhiều dòng và không gắn thẻ."
category: "equation-craft"
order: 5
level: "intermediate"
tags: ["math", "amsmath"]
featured: true
updated: 2026-07-25
---

# Phương trình nhiều dòng xếp hàng

Đạo hàm của một số bước trông đẹp nhất khi có các dấu bằng xếp chồng lên nhau trong một cột, để mắt có thể theo dõi những gì đã thay đổi từ dòng này sang dòng khác. Gói `amsmath` cung cấp môi trường `align` cho điều đó, cùng với một gia đình nhỏ gồm họ hàng trong trường hợp việc căn chỉnh không phải là điều bạn muốn.

```latex
\usepackage{amsmath}
\begin{align}
 a &= b + c \\
 d &= e + f + g
\end{align}
```

## Cách căn chỉnh đọc

Mỗi dòng là một phương trình, kết thúc bằng `\\`; dòng cuối cùng không cần. `&` đánh dấu điểm căn chỉnh và `&` của mỗi dòng nằm trong cùng một cột. Đặt `&` ngay trước dấu bằng là thói quen tiêu chuẩn, do đó, các dấu bằng xếp chồng lên nhau và các cạnh bên trái sẽ lệch về bên trái. Mỗi dòng nhận được số phương trình riêng của nó; viết `căn chỉnh*` thành số không hoặc thêm `\notag` vào các dòng riêng lẻ để bỏ qua những dòng đó, như được hiển thị trong [số và con trỏ cho phương trình](/learn/number-equations/).

Môi trường tự mở hiển thị toán học nên nó không được nằm bên trong `\[ ... \]` hoặc `$ ... $`; việc lồng nó vào một môi trường toán học khác sẽ tạo ra những lỗi khó hiểu.

##Gia đình

| Env | Mục đích |
| --- | --- |
| `căn chỉnh` | Một số dòng, căn chỉnh |
| `căn chỉnh*` | Giống nhau, không đánh số |
| `tập hợp` | Một số dòng, căn giữa |
| `chia` | Số phương trình đơn nhiều dòng |
| `đa dòng` | Phương trình dài bị hỏng mà không căn chỉnh |

`thu thập` xử lý một số phương trình không có điểm căn chỉnh chung; nó căn giữa từng dòng và đánh số từng dòng. `split` xây dựng một phương trình nhiều dòng dưới một số duy nhất và phải nằm bên trong `phương trình`. `multline` phá vỡ một công thức quá dài mà không căn chỉnh, dòng đầu tiên tuôn ra bên trái và dòng cuối cùng bên phải. Hai phương trình cuối cùng được xử lý chi tiết trong [các phương trình không phù hợp](/learn/break-long-equations/).

Hai câu hỏi quyết định nên sử dụng cái nào: các đường thẳng là phương trình riêng biệt hay một phương trình bị hỏng và có điểm căn chỉnh nào đáng xếp chồng lên nhau không? Tách biệt và căn chỉnh: `align`. Tách biệt và tập trung: `tập hợp`. Đơn và căn chỉnh: `split`. Đơn và không được căn chỉnh: `multiline`.

##Những lỗi thường gặp

Một dòng không có `&` vẫn được biên dịch, nhưng nó ở giữa một cách độc lập và không có gì xếp hàng. Hai `&` trên một dòng bắt đầu một cặp cột thứ hai, `align` đọc là cột thứ hai của các phương trình được đặt cạnh nhau; nếu đầu ra của bạn có các phương trình di chuyển sang phải, hãy đếm ký hiệu và ký hiệu của bạn. Dấu `\\` ở dòng cuối cùng thêm một hàng trống, xuất hiện dưới dạng khoảng trống dọc kỳ lạ bên dưới khối. Nhập dẫn xuất ba bước vào [sân chơi trực tiếp](/live/) để xem sự liên kết với nhau.