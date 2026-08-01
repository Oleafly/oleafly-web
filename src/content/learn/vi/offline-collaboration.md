---

title: "Đồng tác giả không có con trỏ trực tiếp"
description: "Các bản vá, thư mục dùng chung cộng với Git và sở hữu các tệp chương riêng biệt."
category: "local-studio"
order: 4
level: "intermediate"
tags: ["workflow", "git"]
featured: false
updated: 2026-07-25
---

# Đồng tác giả không có con trỏ trực tiếp

Chỉnh sửa cộng tác theo thời gian thực, trong đó bạn xem di chuyển con trỏ của đồng tác giả, là mô hình mà các biên tập viên đám mây bán ra. Rất nhiều bài báo hay được viết mà không có nó. Khi các tác giả làm việc cục bộ, sự cộng tác không đồng bộ được xây dựng trên Git là mô hình đáng tin cậy: mỗi người chỉnh sửa trên máy của riêng mình và các thay đổi được hợp nhất có chủ ý thay vì từng ký tự. Nó đòi hỏi sự phối hợp nhiều hơn một chút và hoàn thành công việc ngoại tuyến, lịch sử đầy đủ và không phụ thuộc vào máy chủ của bất kỳ ai.

## Git làm xương sống

Thiết lập tiêu chuẩn là một kho lưu trữ được chia sẻ, thường là trên GitHub, nơi mọi người lấy và đẩy tới. Mỗi tác giả làm việc theo phiên: kéo trạng thái mới nhất, viết, cam kết, đẩy. Vì LaTeX là văn bản thuần túy nên Git tự động hợp nhất các thay đổi song song với các phần khác nhau của bài viết và quá trình thiết lập chỉ mất vài phút. [Đưa bài viết lên GitHub](/learn/sync-with-github/) bao gồm nó. Khi một cộng tác viên không thể hoặc sẽ không sử dụng máy chủ Git, các bản vá sẽ lấp đầy khoảng trống: `git format-patch` biến các cam kết thành các tệp nhỏ mà bạn có thể gửi qua email và người nhận sẽ áp dụng chúng bằng `git am`, giữ nguyên quyền tác giả và lịch sử. Đây là quy trình làm việc cũ và vẫn hoạt động ở mọi nơi có email.

Tính năng kết hợp cũng hoạt động khi đồng tác giả yêu cầu thư mục được đồng bộ hóa: giữ bản sao được chia sẻ trong Dropbox hoặc Syncthing để thuận tiện nhưng hãy để một người duy trì lịch sử Git và thực hiện hợp nhất. Không trỏ các lần kiểm tra Git trực tiếp của hai người vào cùng một thư mục được đồng bộ hóa, vì xung đột đồng bộ hóa bên trong kho lưu trữ bị hỏng của thư mục `.git`.

## Chia tài liệu theo file

Việc hợp nhất trở nên hiếm khi mọi người hiếm khi chạm vào cùng một tệp. Chia nhỏ bản thảo để mỗi chương hoặc phần nằm trong tệp riêng của nó, được lấy từ một `main.tex` mỏng với `\input{chương/phương thức}`. Cơ chế nằm trong [Chia tài liệu thành các tệp](/learn/split-chapter-files/). Sau đó, chỉ định quyền sở hữu: mỗi đồng tác giả soạn thảo trong các tệp riêng của họ và một nhà tích hợp sẽ xử lý phần mở đầu, phần hợp nhất và phần đọc cuối cùng để đảm bảo tính nhất quán của ký hiệu và âm điệu. Điều này phản ánh cách các nhóm phần mềm tránh giẫm đạp lên nhau và nó hoạt động vì những lý do tương tự.

## Điều gì thực sự đã xảy ra

Kiểu thất bại cần tránh là hai người chỉnh sửa cùng một đoạn văn trong cùng một khoảng thời gian. Git sẽ gắn cờ đó là xung đột và các xung đột LaTeX có thể đọc được nhưng tẻ nhạt để giải quyết, vì vậy cách khắc phục rẻ nhất là mang tính xã hội: một thông báo nhanh có nội dung "Hôm nay tôi tham gia phần giới thiệu" sẽ ngăn chặn hầu hết tất cả các xung đột đó. Hai thói quen viết làm giảm phần còn lại. Giữ một câu trên mỗi dòng nguồn, để các chỉnh sửa song song với các câu lân cận hoàn toàn không xung đột và kéo ngay trước mỗi phiên viết để bạn luôn chỉnh sửa văn bản mới nhất.