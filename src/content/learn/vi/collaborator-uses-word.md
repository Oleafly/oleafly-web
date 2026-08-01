---

title: "Đồng tác giả chỉ nói Word"
description: "Giữ .tex làm nguồn đáng tin cậy trong khi trao đổi PDF hoặc DOCX để lấy nhận xét."
category: "local-studio"
order: 5
level: "intermediate"
tags: ["workflow", "word"]
featured: false
updated: 2026-07-25
---

# Đồng tác giả chỉ nói Word

Cộng tác bằng công cụ hỗn hợp là phổ biến: bạn viết bài bằng LaTeX và đồng tác giả, cố vấn hoặc cộng tác viên lâm sàng chỉ làm việc trong Microsoft Word. Không có gì chuyển đổi hoàn hảo giữa hai định dạng. Hãy thống nhất sớm xem tập tin nào là giấy thật, sau đó đặt ra thói quen chuyển phản hồi qua khoảng trống mà không làm mất việc.

## Một nguồn sự thật

Hãy sớm quyết định rằng các tệp `.tex` là tệp chuẩn và mọi thứ khác đều là bản sao phái sinh để xem xét. Thời điểm hai "phiên bản hiện tại" tồn tại ở hai định dạng, các chỉnh sửa của ai đó bị mất và việc đối chiếu tệp Word với tệp LaTeX bằng mắt là một công việc khốn khổ. Theo thỏa thuận này, công việc của bạn là sắp chữ và tích hợp. Công việc của đồng tác giả của bạn là nội dung và nhận xét, được cung cấp bằng bất kỳ công cụ nào họ thích.

## Chọn xuất theo loại phản hồi

Để đọc và nhận xét cấp cao, hãy gửi bản PDF đã biên dịch. Mọi người dùng Word đều có thể mở một tệp PDF và các công cụ chú thích trong bất kỳ trình đọc PDF nào đều bao gồm các ghi chú bên lề và phần đánh dấu. Việc áp dụng phản hồi đó bằng tay giúp bạn có toàn quyền kiểm soát nguồn.

Khi đồng tác giả cần đề xuất viết lại ở cấp độ câu với những thay đổi được theo dõi, hãy xuất DOCX. Pandoc chuyển đổi LaTeX sang Word đủ tốt cho mục đích đánh giá và Oleafly đã tích hợp sẵn tính năng xuất DOCX. Dự kiến ​​việc chuyển đổi sẽ mang tính gần đúng: các phương trình, tham chiếu chéo và vị trí hình ảnh bị suy giảm và bạn nên nói trước để không ai báo cáo các vấn đề về bố cục trong bản sao vứt đi.

## Phiên hợp nhất

Phản hồi trong `.docx` phải được gửi lại bằng tay vào `.tex`. Hãy coi đây là một nhiệm vụ được lên lịch chứ không phải là một nhiệm vụ nhỏ giọt đang diễn ra: thu thập các thay đổi được theo dõi của đồng tác giả, mở tệp Word và nguồn LaTeX cạnh nhau và áp dụng từng chỉnh sửa được chấp nhận, cam kết với Git khi bạn thực hiện để mỗi vòng phản hồi là một cam kết. Một quy tắc giúp điều này có thể thực hiện được: mỗi vòng đánh giá bắt đầu từ lần xuất mới của nguồn hiện tại. Đừng bao giờ để cùng một tệp Word tồn tại qua nhiều vòng vì nó sẽ âm thầm phân chia tờ giấy.

## Khi bản nháp bắt đầu trong Word

Đôi khi quy trình bị đảo ngược: đồng tác giả viết bản nháp đầu tiên trong Word và bạn đảm nhận việc sắp chữ. Chuyển đổi nó một lần, sớm. Oleafly nhập `.docx` vào dự án LaTeX và pandoc cũng thực hiện tương tự trên dòng lệnh. Từ thời điểm đó, `.tex` là chuẩn và quy trình trên được áp dụng. Để biết nền tảng kiểm soát phiên bản giúp tất cả những điều này có thể phục hồi được, hãy xem [Đưa bài viết lên GitHub](/learn/sync-with-github/).