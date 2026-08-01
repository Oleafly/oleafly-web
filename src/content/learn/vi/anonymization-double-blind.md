---

title: "Mù đôi được thực hiện đúng"
description: "Những gì cần ẩn danh, cách trích dẫn chính bạn và siêu dữ liệu phản bội bạn."
category: "venue-formats"
order: 6
level: "intermediate"
tags: ["venues", "review"]
featured: false
updated: 2026-07-25
---

# Làm mù đôi đúng cách

Đánh giá mù đôi có nghĩa là người đánh giá không biết ai đã viết bài báo. Viết sai là một trong số ít lỗi định dạng có thể khiến bài viết bị từ chối mà không được đọc, vì vậy hãy coi việc ẩn danh như một danh sách kiểm tra chứ không phải là một sự rung cảm.

##Cái gì phải đi

| Mục | Phải làm gì |
|---|---|
| Tên tác giả và liên kết | Xóa hoặc thay thế bằng "(Các) tác giả ẩn danh" |
| Lời cảm ơn | Xóa để gửi (nhà tài trợ và đồng nghiệp xác định bạn) |
| Liên kết Repo và dự án | Thay thế bằng liên kết ẩn danh, xem bên dưới |
| Chi tiết cụ thể về tổ chức | "cụm trường đại học của chúng tôi" đánh bại "cụm GPU Stanford" |
| Cụm từ "Công việc trước đây của chúng tôi" | Viết lại ở ngôi thứ ba, xem bên dưới |
| Logo, hình mờ, tiêu đề | Loại bỏ bất cứ thứ gì có tên nhóm hoặc phòng thí nghiệm |

Nhiều lớp tự động hóa hàng đầu tiên. Với lớp của ACM, đó là một lựa chọn:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

Các địa điểm khác gửi một biến thể gửi mẫu của họ. Các địa điểm [IEEEtran](/learn/ieee-format-in-practice/) thường chỉ yêu cầu bạn bỏ qua phần tác giả.

## Trích dẫn tác phẩm của chính bạn

Quy tắc rất đơn giản: hãy trích dẫn chính bạn như cách bạn trích dẫn một người lạ.

Sai: "Trong tác phẩm trước [7], chúng tôi đã cho thấy..."
Phải: "Lovelace và cộng sự [7] đã cho thấy..."

Đừng bỏ sót các giấy tờ liên quan của riêng bạn. Người đánh giá mong đợi tác phẩm có liên quan rõ ràng sẽ được trích dẫn và một khoảng trống đáng ngờ có thể loại bỏ ẩn danh của bạn một cách hiệu quả như một cái tên. Ngoại lệ duy nhất là tác phẩm thực sự chưa được xuất bản, thay vào đó bạn có thể tải lên dưới dạng tài liệu bổ sung ẩn danh.

## Hiện vật ẩn danh

Người đánh giá ngày càng mong đợi mã và dữ liệu. Các liên kết GitHub có tính phóng xạ: tên người dùng ở ngay đó. Các tùy chọn hoạt động:

- Các dịch vụ được xây dựng cho mục đích này (anonymous.4open.science là tiêu chuẩn hiện trường)
- Một kho lưu trữ mới trong tài khoản dùng một lần với lịch sử cam kết đã được xóa
- Tệp zip bổ sung được tải lên cùng với bài gửi, với tên tác giả bị xóa khỏi tiêu đề tệp và sổ ghi chép

Kiểm tra zip trước khi tải lên: tệp giấy phép, `TÁC GIẢ`, siêu dữ liệu sổ tay và đường dẫn thư mục chính được mã hóa cứng (`/home/ada/...`) tất cả các tên bị rò rỉ.

## Những tai nạn phản bội bạn

Văn bản trên giấy là ẩn danh, nhưng bản PDF có thể không:

- **Siêu dữ liệu PDF.** Trường Tác giả thường tự động điền từ hệ thống của bạn. Kiểm tra bằng `pdfinfo` hoặc thuộc tính tài liệu của trình xem của bạn và xóa nó bằng `\hypersetup{pdfauthor={}}`.
- **Tên tệp.** `lovelace-sigconf-final.pdf` hoàn tác mọi thứ. Đặt tên là `paper.pdf` hoặc số bài nộp.
- **Nguồn hình.** Các sơ đồ được xuất từ ​​các công cụ có thể nhúng tên người dùng vào siêu dữ liệu hoặc vào đường dẫn hiển thị trong ảnh chụp màn hình.
- **Bản in trước.** Đăng bài lên arXiv trước khi gửi được phép ở nhiều địa điểm và bị cấm ở những nơi khác. CFP nói điều đó. Đọc nó. Đây là [một phần của việc chọn địa điểm](/learn/choose-your-venue/).

## Sẵn sàng cho máy ảnh lật nó lại

Sau khi được chấp nhận, mọi thứ sẽ trả về: tên, liên kết, xác nhận, liên kết kho lưu trữ thực và cụm từ ngôi thứ nhất nếu bạn thích. Dự trù một giờ cho thẻ hủy ẩn danh. Nó chạm đến nhiều địa điểm hơn bạn nhớ và [danh sách kiểm tra sẵn sàng cho máy ảnh](/learn/first-paper-roadmap/) là thời điểm để bắt những người đi trễ.