---

title: "Một hoặc hai cột"
description: "Tại sao bố cục lại khác nhau tùy theo địa điểm, hai cột có tác dụng gì đối với các số liệu và phương trình cũng như ai là người quyết định."
category: "paper-anatomy"
order: 7
level: "beginner"
tags: ["structure", "formatting"]
featured: false
updated: 2026-07-25
---

# Một hoặc hai cột

Mở mười tờ giấy và bạn sẽ thấy hai nhóm: những trang hai cột dày đặc trông giống như giấy in báo và những trang một cột thoáng đãng trông giống như một cuốn sách. Không tốt hơn. Mỗi loại phát triển đều có lý do và hầu như bạn không bao giờ có quyền lựa chọn.

## Tại sao địa điểm lại khác nhau

Bố cục hai cột là truyền thống của hội nghị, ra đời khi các thủ tục tố tụng được in và ngân sách trang eo hẹp. Các cột hẹp chứa nhiều từ hơn trên mỗi trang và độ dài dòng ngắn sẽ dễ quét hơn. Hầu hết các hội nghị CS (ACM, IEEE và bạn bè) vẫn sử dụng chúng.

Bố cục một cột chiếm ưu thế trong các tạp chí, bản in trước và luận văn. Chúng mang lại không gian dễ thở cho các phương trình, số liệu và bảng biểu, đồng thời chúng thân thiện hơn với việc đọc dạng dài. Các máy chủ in sẵn và nhiều địa điểm ML đã chuyển sang một cột một phần chính xác vì lý do này.

| Bố cục | Nhà điển hình | Tính cách |
|---|---|---|
| Hai cột | Kỷ yếu hội nghị | Dày đặc, có thể quét được, giới hạn trang |
| Một cột | Tạp chí, bản thảo, luận văn | Rộng rãi, dễ đọc, thân thiện với phương trình |

## Hai cột có tác dụng gì với số liệu của bạn

Trong tài liệu hai cột, một `hình' bình thường nổi trong một cột, cột này thường quá hẹp đối với một biểu đồ chi tiết. Biến thể được gắn dấu sao trải dài cả hai cột:

```latex
\begin{figure*}
  \centering
  \includegraphics[width=\textwidth]{wide-results.pdf}
  \caption{A figure that needs the full page width.}
\end{figure*}
```

Thủ thuật tương tự đối với các bảng rộng có `table*`. Một nhược điểm: các phần nổi được gắn dấu sao thường nằm ở đầu trang và không thể sử dụng vị trí ở dưới cùng hoặc ở đây, vì vậy hãy lên kế hoạch sớm cho các số liệu rộng của bạn. Thông tin cơ bản về kích thước có trong [chèn hình ảnh](/learn/insert-images/).

## Phương trình trở nên chật chội

Một cột rộng khoảng 3,3 inch là nơi không phù hợp cho các phương trình dài. Trong các bài viết hai cột, bạn sẽ phá vỡ các phương trình thường xuyên hơn, viết tắt mạnh mẽ hơn và dựa vào môi trường nhiều dòng. Nếu bài viết của bạn nặng về phương trình và bạn phải lựa chọn địa điểm, một cột sẽ giúp bạn tiết kiệm thời gian định dạng thực sự. Xem [chế độ toán học](/learn/math-mode/) để biết công cụ.

## Màn hình và trình đọc màn hình thích một cột

Đối với bất kỳ nội dung nào không phải là bản nộp giấy chính thức (báo cáo, tài liệu, sơ yếu lý lịch, bản in trước mà mọi người sẽ đọc trên máy tính xách tay và điện thoại), một cột sẽ thắng. Các tệp PDF không chỉnh lại dòng, do đó, các trang hai cột buộc trình đọc màn hình và trình trích xuất văn bản phải đoán thứ tự đọc và chúng buộc con người phải cuộn lên xuống trong mỗi trang. Các hệ thống phân tích sơ yếu lý lịch nổi tiếng với việc xáo trộn bố cục nhiều cột. Dành hai cột cho những địa điểm có nhu cầu.

## Lớp tài liệu quyết định cho bạn

Đây là phần thư giãn: bạn hầu như không bao giờ cấu hình phần này bằng tay. Địa điểm sẽ đưa cho bạn một lớp học hoặc mẫu và bố cục đi kèm với nó.

```latex
\documentclass{article}              % one column
\documentclass[twocolumn]{article}   % two columns
\documentclass[sigconf]{acmart}      % venue class, layout included
```

Viết nội dung của bạn một lần và chuyển đổi mẫu sẽ phản ánh lại mọi thứ. Đó chính là mục đích của LaTeX: cùng một nguồn biên dịch thành phiên bản hội nghị hai cột và bản in trước một cột với thay đổi một dòng. Giữ các số liệu của bạn ở định dạng vectơ và phương trình của bạn trong môi trường tiêu chuẩn và việc hoán đổi bố cục gần như không gây đau đớn.