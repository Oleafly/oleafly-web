---

title: "Bảng dài hơn một trang"
description: "đầu trang và chân trang dài lặp lại."
category: "float-surgery"
order: 1
level: "intermediate"
tags: ["tables"]
featured: false
updated: 2026-07-25
---

# Bảng dài hơn một trang

Môi trường `table` thông thường là một float và một float phải vừa với một trang. Cung cấp cho nó sáu mươi hàng và LaTeX sẽ đẩy nó lên một trang nổi và để nó tràn hoặc trì hoãn nó mãi mãi. Cách khắc phục là gói `longtable`, gói này sắp xếp một bảng chia thành nhiều trang và lặp lại tiêu đề của nó trên mỗi trang, giống như cách bản in bảng tính thực hiện.

```latex
\usepackage{longtable,booktabs}
\begin{longtable}{ll}
 \toprule
 Key & Value \\
 \midrule
 \endfirsthead
 \toprule Key & Value \\ \midrule \endhead
 \bottomrule \endfoot
 a & 1 \\
 % ... many rows
\end{longtable}
```

## Cách khối tiêu đề hoạt động

Một `bảng dài` bắt đầu bằng tối đa bốn khối khai báo trước các hàng dữ liệu thực tế. Mọi thứ ở trên `\endfirsthead` là tiêu đề được in một lần, ở đầu bảng. Mọi thứ giữa `\endfirsthead` và `\endhead` là tiêu đề được lặp lại ở đầu mỗi trang tiếp theo, đó là lý do tại sao cùng một dòng "Khóa & Giá trị" xuất hiện hai lần trong ví dụ. Khối kết thúc bằng `\endfoot` in ở cuối mỗi trang mà bảng chạm vào, ở đây chỉ là `\bottomrule` đóng. Ngoài ra còn có `\endlastfoot` cho nội dung chỉ xuất hiện dưới các hàng cuối cùng, chẳng hạn như dòng tổng. Nếu bạn muốn gợi ý tiếp tục, mẫu phổ biến là `\midrule \multicolumn{2}{r}{continued on next page} \\` ở khối chân và `\bottomrule` thực ở chân cuối cùng.

Sau phần khai báo là các hàng dữ liệu, được viết chính xác như trong một `bảng` thông thường với `&` giữa các ô và `\\` ở cuối mỗi hàng. Các quy tắc `booktabs` hoạt động không thay đổi. Xem [bảng ba quy tắc](/learn/booktabs-beautiful/) để biết chúng thay thế những gì.

## Không phải là float và điều đó ngụ ý gì

Sự khác biệt quan trọng nhất về hành vi được nêu trong một câu: ``longtable` không phải là float. Nó bắt đầu chính xác ở nơi bạn đặt nó trong nguồn, ngắt ở nơi trang bị ngắt và không có đối số `[htbp]`. Điều đó cũng thay đổi cách hoạt động của phụ đề. Bạn không gói `longtable` trong môi trường `table`. Thay vào đó, hãy đặt `\caption{...}\\` bên trong bảng, làm dòng đầu tiên của khối đầu tiên và nó sẽ được đánh số theo cùng thứ tự như các bảng khác của bạn.

## Hai điều cần biết trước khi bạn dựa vào nó

Đầu tiên, độ rộng của cột được quyết định trên toàn cầu, do đó LaTeX có thể cần một vài lần biên dịch trước khi các cột ngừng dịch chuyển. Tiếp tục biên dịch cho đến khi bố cục ổn định. Thứ hai, `bàn dài` không thể được sử dụng trong bố cục hai cột, điều này không phù hợp với hầu hết các mẫu hội nghị. Trong những tài liệu đó, các tùy chọn thực tế là thu nhỏ bảng, chia bảng thành nhiều phần hoặc di chuyển bảng sang phụ lục một cột.