---

title: "HotCRP, EasyChair, OpenReview, CMT"
description: "Hướng dẫn thực địa về bốn hệ thống đệ trình mà bạn sẽ thực sự gặp."
category: "ship-your-paper"
order: 2
level: "beginner"
tags: ["submission", "tools"]
featured: false
updated: 2026-07-25
---

# HotCRP, EasyChair, OpenReview, CMT

Bài viết của bạn không đi đến hội nghị. Nó đi đến một hệ thống gửi: một trang web nơi bạn tải lên bản PDF, điền siêu dữ liệu và sau đó đọc các bài đánh giá của bạn. Có bốn người bạn sẽ gặp đi gặp lại và mỗi người đều có một tính cách.

## Tứ đại

| Hệ thống | Tính cách | Bạn sẽ gặp nó tại |
|---|---|---|
| HotCRP | Nhanh chóng, tối giản, được mọi người trong hệ thống yêu thích | Hội thảo về hệ thống và bảo mật (SOSP, USENIX) |
| EasyChair | Cựu chiến binh. Tiện dụng, ở mọi nơi | Hội thảo, nhiều hội nghị CS trên toàn thế giới |
| Đánh giá mở | Đối mặt với công chúng, các đánh giá thường được hiển thị | Địa điểm ML (ICLR, NeurIPS) |
| CMT | Xe ngựa của Microsoft, hình thức nặng nề | Hội nghị Tầm nhìn và ML (CVPR) |

Tất cả đều làm công việc cốt lõi giống nhau. Sự khác biệt sống trong các chi tiết. OpenReview có thể hiển thị đánh giá của bạn với mọi người. HotCRP sẽ gửi email cho bạn về mọi bình luận. CMT có một mạng lưới lựa chọn chủ đề mà bạn phải mất 10 phút để nhấp qua.

## Tạo tài khoản sớm

Thực hiện việc này vào tuần bạn quyết định nộp hồ sơ, không phải vào đêm hết hạn:

- [ ] Tạo tài khoản bằng email bạn kiểm tra hàng ngày
- [ ] Xác nhận email xác minh thực sự đến
- [ ] Kiểm tra xem đồng tác giả cũng có tài khoản (Hồ sơ OpenReview có thể mất vài ngày để phê duyệt cho người dùng mới)
- [ ] Bắt đầu gửi bản nháp để bạn biết những trường nào tồn tại

Điều cuối cùng quan trọng. Một số địa điểm đặt những câu hỏi bất ngờ: tuyên bố về đạo đức, danh sách kiểm tra khả năng tái tạo, các lĩnh vực xung đột. Tốt hơn là khám phá chúng một tuần.

## Chỉ PDF so với tải lên nguồn

Hầu hết các địa điểm đều muốn có bản PDF tại thời điểm gửi. Một số và hầu hết tất cả các nhà xuất bản tại thời điểm sẵn sàng cho máy ảnh cũng muốn có nguồn LaTeX của bạn. Giữ dự án của bạn đủ gọn gàng để nén theo yêu cầu. Oleafly xuất trực tiếp ZIP nguồn, đây chính xác là điều mà hệ thống gửi hình dạng mong đợi.

## Các trường siêu dữ liệu

Ngoài bản PDF, bạn có thể điền vào:

- **Tiêu đề và tóm tắt**, dưới dạng văn bản thuần túy. Viết lại bất kỳ phép toán LaTeX nào bằng word hoặc Unicode.
- **Chủ đề**, các hộp kiểm chuyển bài viết của bạn đến người đánh giá. Hãy chọn một cách trung thực.
- **Xung đột**, những người và tổ chức không nên đánh giá bạn: cố vấn, đồng tác giả gần đây, đồng nghiệp. Việc hiểu sai điều này có thể làm mất hiệu lực việc xem xét, vì vậy hãy thật kỹ lưỡng.
- **Xác nhận ẩn danh**, tại các địa điểm mù đôi. Xem [ẩn danh để đánh giá mù đôi](/learn/anonymization-double-blind/).

## Thực tế AoE 11:59

Mỗi đêm deadline, hàng nghìn người nộp đơn vào giờ cuối cùng và hệ thống trở nên chậm chạp. Quá trình tải lên mất vài giây vào bữa trưa mất vài phút lúc 11:50 tối. Cách khắc phục rất đơn giản và không ai làm theo: gửi sớm phiên bản hoạt động.

## Bạn có thể cập nhật đến thời hạn

Đây là phần giải phóng: sự phục tùng không phải là một lần. Trên mọi hệ thống chính, bạn có thể thay thế tệp PDF của mình bao nhiêu lần tùy thích trước khi hết thời hạn. Vì vậy, hãy gửi một phiên bản hoàn chỉnh nhưng không hoàn hảo vào ngày hôm trước và tiếp tục trau chuốt. Nếu mạng ngừng hoạt động lúc 11:58, bạn có một bản đệ trình thực sự trong hệ thống thay vì một thảm kịch.

Điểm dừng tiếp theo sau khi gửi: tìm hiểu điều gì xảy ra ở phía bên kia, trong [đánh giá ngang hàng, giải thích](/learn/peer-review-explained/).