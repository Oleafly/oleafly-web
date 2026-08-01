---

title: "Các trang web, video, tập dữ liệu"
description: "các mục nhập linh tinh/trực tuyến và ngày truy cập đối với các URL dễ hỏng."
category: "cite-your-sources"
order: 7
level: "intermediate"
tags: ["citations"]
featured: false
updated: 2026-07-25
---

# Trang web, video, bộ dữ liệu

BibTeX được thiết kế vào những năm 1980 dành cho tạp chí, sách và kỷ yếu hội nghị, vì vậy nó không có ý tưởng ban đầu về trang web, video YouTube hoặc tập dữ liệu trên Zenodo. Bạn vẫn cần phải trích dẫn những điều này liên tục và cách giải quyết tiêu chuẩn là loại mục nhập `@misc`, chấp nhận hầu hết mọi kết hợp trường và cho phép kiểu in chúng một cách hợp lý.

## Mẫu @misc

```bibtex
@misc{oleafly2026,
 author = {{Oleafly Contributors}},
 title = {Oleafly},
 year = {2026},
 howpublished = {\url{https://oleafly.com}},
 note = {Accessed: 2026-07-24}
}
```

Ba chi tiết quan trọng ở đây. Các dấu ngoặc kép xung quanh `{{Oleafly Contributors}}` yêu cầu BibTeX coi toàn bộ chuỗi là một tên bằng chữ; nếu không có họ, nó sẽ phân tích "Người đóng góp" thành họ và viết tắt phần còn lại thành "O. Người đóng góp". Trường `howpublished` là vị trí thông thường cho một URL trong BibTeX cổ điển và việc gói địa chỉ trong `\url{...}` sắp xếp nó theo phông chữ đơn cách và cho phép nó ngắt dòng rõ ràng (tải gói `url` hoặc `hyperref` cho việc này). Trường `ghi chú` chứa ngày truy cập, điều này quan trọng vì nội dung web thay đổi và biến mất. Ngày đó cho người đọc biết phiên bản nào của trang bạn thực sự đã xem.

## Giải pháp thay thế biblatex: @online

Nếu tài liệu của bạn sử dụng biblatex thì sẽ có loại dành riêng. Mục nhập `@online` có các trường `url` và `urldate` thích hợp, do đó, cùng một nguồn sẽ trở thành `url = {https://oleafly.com}` và `urldate = {2026-07-24}` và kiểu định dạng ngày truy cập cho bạn. Ưu tiên `@online` khi kiểu thư mục hỗ trợ nó và quay lại `@misc` khi bạn phải duy trì khả năng tương thích với tệp `.bst` cổ điển. Sự khác biệt giữa hai hệ thống được trình bày trong [BibTeX cổ điển hoặc biblatex](/learn/bibtex-vs-biblatex/).

## Bộ dữ liệu và phần mềm

Các bộ dữ liệu và bản phát hành mã xứng đáng nhận được nhiều hơn một URL trần khi DOI tồn tại. Các kho lưu trữ như Zenodo và Figshare tạo ra DOI để trích dẫn có thể tồn tại lâu hơn bất kỳ thiết lập lưu trữ nào. Đặt DOI vào trường `doi` hoặc trong `howpublished` dưới dạng `\url{https://doi.org/10.5281/...}` đối với phong cách cổ điển. Bao gồm ghi chú `phiên bản` khi tạo phẩm được lập phiên bản, vì "tập dữ liệu" mà người đọc tải xuống trong 5 năm có thể không phải là tập dữ liệu bạn đã phân tích. Nhiều dự án cũng xuất bản một trích dẫn ưa thích, thường ở dạng tệp `CITATION.cff` trong kho lưu trữ. Dùng cách đó vừa lịch sự vừa chính xác hơn là tự mình đoán các trường.

## Video và các nguồn lẻ khác

Đối với một video, hãy đặt kênh hoặc người sáng tạo trong `tác giả`, tiêu đề video trong `tiêu đề`, nền tảng và URL trong `howpublished` và năm tải lên trong `năm`, với ngày truy cập của bạn trong `ghi chú`. Quy tắc chung cho bất kỳ điều gì bất thường đều giống nhau: nắm bắt ai đã tạo ra nó, nó được gọi là gì, người đọc có thể tìm thấy nó ở đâu và khi nào bạn xem, và `@misc` sẽ mang tất cả những điều đó một cách an toàn qua bất kỳ phong cách nào.