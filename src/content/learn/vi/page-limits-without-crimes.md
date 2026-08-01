---

title: "Giới hạn trang không có lỗi đánh máy"
description: "Những cách hợp pháp để đáp ứng giới hạn, những thủ thuật khiến giấy tờ bị gắn cờ và lý do tại sao các địa điểm lại kiểm tra."
category: "venue-formats"
order: 5
level: "advanced"
tags: ["venues", "formatting"]
featured: false
updated: 2026-07-25
---

# Giới hạn trang không có lỗi đánh máy

Bài viết của bạn dài 10,4 trang. Giới hạn là 10. Điều gì xảy ra trong giờ tiếp theo sẽ quyết định liệu bạn có sửa bài viết hay vi phạm định dạng khiến nó bị từ chối trên bàn hay không.

## Bóp nội dung chứ không phải định dạng

Làm việc danh sách này theo thứ tự. Mỗi bước đều không hiển thị đối với trình kiểm tra định dạng vì nó thay đổi giấy chứ không phải mẫu.

1. ** Siết chặt phần văn xuôi trước. ** Nửa trang tràn lề thường là phần công việc liên quan dài dòng và ba câu chuyển tiếp thừa. Cắt chữ cải thiện bài báo. Cắt khoảng trắng thì không.
2. **Săn góa phụ.** Một đoạn văn có dòng cuối cùng chứa một hoặc hai từ sẽ lãng phí cả một dòng. Viết lại một câu trong đoạn văn đó sẽ lấy lại được câu đó.
3. **Thay đổi kích thước các số liệu một cách trung thực.** Nhiều số liệu có lề bên trong rất lớn. Cắt bớt khoảng trắng trong hình hoặc thả hình hai cột vào một cột nếu nó vẫn dễ đọc.
4. **Bảng mỏng.** Các bảng `booktabs` không có quy tắc dọc sẽ nhỏ gọn hơn và trông đẹp hơn, xem [bảng đẹp](/learn/booktabs-beautiful/) và các tiêu đề cột viết tắt có chiều rộng thực.
5. **Sử dụng hình vectơ.** Các biểu đồ PDF được thu nhỏ một cách rõ ràng, do đó bạn có thể thu nhỏ chúng hơn so với các PNG có pixel trước khi mức độ dễ đọc bị giảm. Các số liệu raster mờ có vấn đề riêng, xem [phông chữ mờ trong tệp PDF](/learn/fuzzy-font-pdf/).
6. **Chuyển tài liệu sang phụ lục hoặc phần bổ sung** nếu địa điểm cho phép. Chứng minh, cắt bỏ bổ sung và bảng siêu tham số là những ứng cử viên tràn cổ điển. Kiểm tra xem phụ lục có tính vào giới hạn hay không, nhiều địa điểm loại trừ, một số thì không.

##Những tội ác

Những thay đổi này thay vì mẫu thay vì giấy. Ban chương trình chạy trình kiểm tra định dạng tự động một cách chính xác vì mọi người thử chúng:

| Tội phạm | Làm thế nào nó bị bắt |
|---|---|
| `\vspace{-8pt}` rắc khắp nơi | Khoảng cách chật hẹp rõ ràng, khác với mặc định của lớp |
| `\usepackage[margin=...]{hình học}` | Đo lường ký quỹ tự động |
| Thu hẹp `\baselinestretch` hoặc cỡ chữ | Số dòng trên mỗi cột, thăm dò kích thước phông chữ |
| `\small` hoặc `\footnotesize` trên nội dung hoặc chú thích | Thăm dò kích thước phông chữ, nhãn cầu của người đánh giá |
| Phủ định `\itemsep`, danh sách bị nghiền nát | Nhìn chật chội, kiểm tra heuristic |
| Đổi tên tệp lớp có chỉnh sửa bên trong | Tổng kiểm tra so với lớp chính thức |

## Tại sao địa điểm thực sự kiểm tra

Giới hạn trang là một hợp đồng công bằng: mọi tác giả đều có cùng một khoảng trống và mọi người đánh giá đều cam kết đọc một lượng giới hạn. Một bài báo gian lận tới 10 trang thực sự là một bài báo 11 trang cạnh tranh với những bài báo 10 trang trung thực. Đó là lý do tại sao các hành vi vi phạm được coi là vấn đề về tính chính trực chứ không phải là vấn đề về phong cách. Nhiều địa điểm từ chối mà không xem xét và không có kháng cáo nào nói rằng "nhưng nội dung rất hay".

## Phương án trung thực cuối cùng

Nếu bạn đã thắt chặt văn xuôi, thu gọn các câu phao, chuyển phần chứng minh vào phần phụ lục mà vẫn kết thúc: cắt một kết quả. Thật đau đớn, nhưng dù sao thì một bài viết 10 trang tập trung sẽ tốt hơn một bài viết nhồi nhét. Người đánh giá có thể cảm nhận được mật độ và [chọn địa điểm](/learn/choose-your-venue/) với định dạng dài hơn luôn là một lựa chọn cho lần gửi tiếp theo.