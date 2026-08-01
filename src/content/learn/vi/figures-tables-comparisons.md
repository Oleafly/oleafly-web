---

title: "Các số liệu, bảng biểu và so sánh mang lại ý nghĩa cho bài báo"
description: "Chú thích mang đi, bảng so sánh, sơ đồ so với bảng và tính nhất quán về hình ảnh."
category: "paper-anatomy"
order: 5
level: "beginner"
tags: ["writing", "figures", "tables"]
featured: false
updated: 2026-07-25
---

# Các số liệu, bảng biểu và so sánh có ý nghĩa quan trọng

Đây là cách một người đánh giá bận rộn thực sự đọc bài viết của bạn: tóm tắt, sau đó lướt qua từng hình và bảng, sau đó có thể là văn bản. Nếu hình ảnh của bạn tự kể câu chuyện, bạn đã giành được một nửa số đánh giá trước khi một đoạn văn được đọc. Thiết kế chúng giống như chúng là tờ giấy. Đối với nhiều độc giả, họ là như vậy.

## Mỗi hình đều cần có chú thích mang đi

Chú thích có nội dung "Kết quả trên Tập dữ liệu A" làm lãng phí phần nội dung có giá trị nhất trong bài báo. Chú thích có nội dung "Phương pháp của chúng tôi (màu xanh lam) phù hợp với đường cơ sở với chi phí chỉ bằng một nửa; khoảng cách ngày càng mở rộng theo kích thước mô hình" cho người đánh giá lật trang biết chính xác những gì cần kết luận. Viết chú thích như những lời khẳng định, sau đó để hình ảnh chứng minh chúng. Người đọc chỉ có thể đọc chú thích của bạn và xây dựng lại lập luận. Cơ chế tạo chú thích và đánh số có trong [chú thích và nhãn](/learn/captions-labels/).

## Bảng so sánh: yêu thích của người đánh giá

Hai mẫu bảng thống trị các bài báo thực nghiệm:

**Bảng đường cơ sở.** Phương pháp của bạn dựa trên công việc trước đó, mỗi hàng một hàng, số tốt nhất được in đậm. Bao gồm các đường cơ sở rõ ràng ngay cả khi họ thua nặng. Việc bỏ qua một đường cơ sở phổ biến được hiểu là đang che giấu điều gì đó.

**Ma trận dấu kiểm.** Các khả năng ở bên dưới, các phương thức ở trên cùng, các dấu kiểm trong đó một phương thức có thuộc tính. Nó định vị công việc của bạn trong nháy mắt:

| Năng lực | Trước A | Trước B | Của chúng tôi |
|---|---|---|---|
| Không cần đào tạo lại | vâng | không | vâng |
| Hoạt động ở quy mô | không | vâng | vâng |
| Mã nguồn mở | không | không | vâng |

Hãy trung thực. Người đánh giá biết thủ thuật chọn hàng mà phương pháp của bạn sẽ thắng.

## Sơ đồ hay bảng?

Sử dụng biểu đồ khi hình dạng mang thông điệp: xu hướng, điểm giao nhau, đường cong tỷ lệ. Sử dụng bảng khi các con số chính xác mang lại thông điệp: điểm chuẩn mà mọi người sẽ so sánh. Khi nghi ngờ, hãy hỏi người đọc sẽ làm gì với nó. Nếu họ sẽ trích dẫn số, bảng. Nếu họ mô tả xu hướng, hãy vẽ biểu đồ.

## Kiên định là uy tín

Những mâu thuẫn nhỏ về hình ảnh lặng lẽ báo hiệu sự bất cẩn:

- Cùng một họ phông chữ và kích thước trên tất cả các hình, gần bằng kích thước văn bản nội dung sau khi chia tỷ lệ.
- Cùng một màu cho cùng một phương pháp trong mỗi ô. Nếu phương thức của bạn có màu xanh lam trong Hình 2 thì mọi nơi đều có màu xanh lam.
- Các quy ước và đơn vị nhãn trục giống nhau xuyên suốt.
- Dễ đọc ở kích thước in. Nếu bạn phải phóng to để đọc nhãn đánh dấu thì nó quá nhỏ.

Xuất định dạng vector (PDF, SVG) thay vì ảnh chụp màn hình bất cứ khi nào có thể. Các ô bitmap có văn bản mờ là cách nhanh nhất để trông không bị bóng bẩy.

## Xây dựng chúng trong LaTeX

Vị trí, kích thước và sắp xếp hệ thống float được đề cập trong [chèn hình ảnh](/learn/insert-images/) và làm sạch bảng trong [tạo bảng](/learn/create-table/). Đối với sơ đồ, bản phác thảo kiến ​​trúc và sơ đồ, TikZ tạo ra đồ họa vector khớp chính xác với phông chữ tài liệu của bạn. Bắt đầu với [phần giới thiệu TikZ](/learn/tikz-intro/). Nếu TikZ viết tay cảm thấy chậm, Trình soạn thảo sơ đồ của Oleafly có thể giúp phác thảo các số liệu TikZ một cách trực quan mà sau đó bạn tinh chỉnh trong mã.

## Cuộc kiểm tra kéo dài năm phút

Trước khi gửi, người đánh giá hãy tự lật lại: chỉ đọc chú thích theo thứ tự. Họ có kể toàn bộ câu chuyện không? Có bất cứ điều gì được in đậm, tô màu hoặc gắn dấu sao mà không có lời giải thích không? Liệu một người lạ có biết phương pháp nào là của bạn trong mỗi hình không? Hãy khắc phục những gì không thành công rồi gửi.