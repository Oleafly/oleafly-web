---

title: "Sẵn sàng cho máy ảnh mà không cần lo lắng"
description: "Hủy ẩn danh, thêm tiền tài trợ, nhúng phông chữ và đạt giới hạn trang: danh sách kiểm tra phiên bản cuối cùng."
category: "ship-your-paper"
order: 5
level: "intermediate"
tags: ["camera-ready", "submission", "checklist"]
featured: false
updated: 2026-07-25
---

# Sẵn sàng cho máy ảnh mà không cần hoảng sợ

Đã chấp nhận! Sau lễ kỷ niệm là thời hạn cuối cùng: chuẩn bị máy ảnh. Cái tên này là di tích từ khi các nhà xuất bản chụp ảnh các trang của bạn để in. Ngày nay nó có nghĩa là phiên bản cuối cùng đi vào quá trình tố tụng, chính xác như độc giả sẽ thấy mãi mãi. Không có trình soạn thảo nào sửa lỗi chính tả của bạn sau này. Phần đó thuộc về bạn.

## Những thay đổi nào giữa việc gửi và sẵn sàng cho máy ảnh

Phiên bản bạn gửi đã được điều chỉnh cho người đánh giá. Máy ảnh sẵn sàng để ghi lại vĩnh viễn và có một số thứ thay đổi:

| Mục | Phiên bản đã gửi | Sẵn sàng cho máy ảnh |
|---|---|---|
| Tên tác giả | Ẩn (mù đôi) | Tên thật, liên kết, email |
| Lời cảm ơn | Bỏ qua | Tài trợ, tài trợ, cảm ơn |
| Giới hạn trang | Giới hạn đánh giá | Thường +1 trang, nhưng chính xác |
| Khối bản quyền | Giữ chỗ hoặc không có gì | Khối nhà xuất bản, DOI, ISBN |
| Tự trích dẫn | Người thứ ba ("Smith và cộng sự.") | Có thể nói "công việc trước đây của chúng tôi" |
| Lời hứa phản bác | Đã hứa | Thực tế đã giao hàng |

Khử ẩn danh không chỉ là thêm lại tên. Tìm kiếm nguồn cho mọi nơi bạn viết xung quanh danh tính của mình; xem [ẩn danh để đánh giá mù đôi](/learn/anonymization-double-blind/) để biết các điểm ẩn thông thường, sau đó đảo ngược tất cả.

## Giới hạn trang chính xác, một lần nữa

Các giới hạn dành cho máy ảnh được thực thi bởi các nhà xuất bản chứ không chỉ ghế và nội dung bổ sung (khối tác giả, lời cảm ơn) sẽ ngốn dung lượng. Nếu bạn đột nhiên vượt quá sáu dòng, hãy thực hiện một cách trung thực: thắt chặt văn xuôi và số liệu thay vì lạm dụng các lệnh giãn cách. Các kỹ thuật trong [giới hạn trang không có tội](/learn/page-limits-without-crimes/) áp dụng gấp đôi ở đây vì nhà xuất bản kiểm tra định dạng.

## Phông chữ phải được nhúng

Đây là kẻ hay cắn người. Các nhà xuất bản tiến hành kiểm tra tự động và lý do từ chối số một là các phông chữ không được nhúng, thường được đưa vào dưới dạng PDF hình được xuất từ ​​một công cụ vẽ đồ thị. Kiểm tra với `pdffonts yourpaper.pdf`: mọi phông chữ phải có nội dung "emb: Yes". Nếu không, thủ phạm hầu như luôn là một nhân vật; xuất lại nó với các phông chữ được nhúng hoặc dưới dạng PDF được tạo chính xác.

## Hiệu đính cuối cùng: tài liệu tham khảo trước

Tài liệu tham khảo là nơi tập trung entropy. Trước khi bạn tải lên:

- [ ] KHÔNG "??" trích dẫn hoặc tài liệu tham khảo không xác định trong nhật ký
- [ ] Mỗi mục thư mục đều có địa điểm, năm và tiêu đề được viết đúng cách
- [ ] Tên tác giả viết đúng (mọi người để ý tên mình)
- [] Các trích dẫn chỉ dành cho arXiv được cập nhật lên các phiên bản đã xuất bản nếu chúng tồn tại
- [ ] URL trong tài liệu tham khảo vẫn giải quyết được

Sau đó đọc to toàn bộ tờ giấy một lần. Nó chậm và nó hoạt động.

## Vấn đề về tải lên nguồn

Hầu hết các nhà xuất bản muốn nguồn LaTeX của bạn, không chỉ PDF và hệ thống xây dựng của họ rất kén chọn: bao gồm `.bbl`, tránh các gói không chuẩn, tuân theo bố cục tệp của họ. Xuất ZIP nguồn sạch (Oleafly thực hiện việc này trong một bước) và biên dịch thử từ đầu trong một thư mục trống trước khi tải lên. Nếu nó chỉ được xây dựng do có một tệp lạc trên máy của bạn thì hệ thống của nhà xuất bản sẽ phát hiện ra.

## Danh sách kiểm tra một lần

- [] Tên, liên kết, email được khôi phục và sửa
- [ ] Lời cảm ơn và số tiền tài trợ đã được thêm vào
- [ ] Khối bản quyền / Thông tin DOI được dán từ email của nhà xuất bản
- [ ] Đã đáp ứng chính xác giới hạn trang
- [ ] `pdffonts` hiển thị tất cả các phông chữ được nhúng
- [ ] Tài liệu tham khảo đã được hiệu đính
- [] Biên dịch ZIP nguồn sạch từ đầu
- [ ] Đã tải lên với một ngày rảnh rỗi

Sau đó, nó được thực hiện, vĩnh viễn. Đã đến lúc suy nghĩ về việc [trình bày nó](/learn/trình bày-giấy của bạn/).