---

title: "Một trang PDF dưới dạng đồ họa"
description: "bao gồm đồ họa với lựa chọn trang và các trang pdf cho phụ lục."
category: "float-surgery"
order: 6
level: "intermediate"
tags: ["figures"]
featured: false
updated: 2026-07-25
---

# Một trang PDF dưới dạng đồ họa

PDF là định dạng hình tốt nhất mà LaTeX có thể sử dụng. Không giống như PNG hoặc JPG, PDF lưu trữ dữ liệu vectơ, do đó, các dòng và nhãn luôn sắc nét ở mọi mức thu phóng và phông chữ bên trong nó sẽ di chuyển cùng với tệp. Các công cụ như Matplotlib, Inkscape và draw.io đều xuất PDF, có nghĩa là sơ đồ bạn đã vẽ ở nơi khác có thể thả thẳng vào tài liệu của bạn. Nhưng các tệp PDF có một nhược điểm mà hình ảnh không có: một tệp PDF có thể chứa nhiều trang và bạn phải cho LaTeX biết bạn muốn trang nào.

## Kéo một trang ra khỏi tệp PDF nhiều trang

`\includegraphics` của gói `graphicx` chấp nhận tùy chọn `page` cùng với các phím định cỡ thông thường:

```latex
\includegraphics[page=1,width=\textwidth]{diagram.pdf}
```

Ở đây `page=1` chọn trang đầu tiên của `diagram.pdf` và `width=\textwidth` chia tỷ lệ trang đó theo toàn bộ chiều rộng của khối văn bản. Nếu bạn bỏ qua `trang`, LaTeX sẽ âm thầm sử dụng trang một, đây thường là trang bạn muốn nhưng có thể làm bạn ngạc nhiên khi một tập lệnh vẽ đồ thị ghi nhiều hình vào một tệp. Bạn có thể bao gồm cùng một tệp PDF nhiều lần với các giá trị `trang` khác nhau, một lần cho mỗi môi trường hình, mỗi giá trị có chú thích và nhãn riêng.

Gói lệnh trong môi trường `figure` bình thường để lệnh có chú thích và số, chính xác như cách bạn làm đối với [bất kỳ hình ảnh nào khác](/learn/insert-images/). Trang được bao gồm sẽ được cắt thành hộp giới hạn của riêng nó, vì vậy nếu tệp PDF nguồn của bạn có lề rộng, hình sẽ trông có vẻ đệm. Tái xuất bằng hộp giới hạn chặt chẽ hoặc cắt nó một lần bằng công cụ như `pdfcrop`, thay vì xử lý khoảng trắng bằng khoảng cách âm.

## Chèn toàn bộ tài liệu bằng trang pdf

Đôi khi bạn không muốn một con số nào cả. Bạn muốn toàn bộ trang, nguyên văn, được đưa vào tài liệu của bạn: bản PDF bổ sung, biểu mẫu có chữ ký, bảng câu hỏi được xuất bản trong phụ lục luận văn. Đó là công việc của gói `pdfpages`:

```latex
\usepackage{pdfpages}
\includepdf[pages=-]{supplement.pdf}
```

Giá trị `pages=-` có nghĩa là mọi trang. Bạn cũng có thể viết `pages=2-5` cho một phạm vi hoặc `pages={1,3,7}` cho một danh sách cụ thể. Mỗi trang được chèn sẽ điền vào trang đầu ra của riêng nó, giữ nguyên bố cục ban đầu và tham gia đánh số trang trong tài liệu của bạn để phụ lục đọc liên tục. Thêm tùy chọn `pagecommand={}` nếu đầu trang hoặc chân trang từ lớp tài liệu của bạn đang in phía trên các trang được chèn và bạn muốn chúng bị chặn hoặc tùy chỉnh.

## Công cụ nào cho công việc gì

Sử dụng `\includegraphics[page=...]` khi nội dung PDF phải hoạt động giống như một hình, nghĩa là nó nổi, có chú thích và được tham chiếu từ văn bản. Sử dụng `\includepdf` khi các trang phải tự đứng ở kích thước đầy đủ. Lỗi phổ biến là sử dụng `pdfpages` cho sơ đồ, điều này cung cấp cho bạn một trang đầy đủ không có chú thích, không được tham chiếu mà bạn không thể trích dẫn bằng `\ref`. Nếu người đọc từng nhìn thấy "xem Hình 3", thì nó thuộc về môi trường hình.