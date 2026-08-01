---

title: "TeX, LaTeX và 45 năm tài liệu đẹp đẽ"
description: "Làm thế nào một nhà khoa học máy tính khó chịu vào năm 1978 đã xây dựng hệ thống sắp chữ, nghiên cứu vẫn tiếp tục."
category: "research-101"
order: 8
level: "beginner"
tags: ["research", "basics", "latex"]
featured: false
updated: 2026-07-25
---

# TeX, LaTeX và 45 năm tài liệu đẹp đẽ

Mọi công cụ bạn sử dụng để viết bài đều xuất phát từ sự thất vọng của một người với những bản in thử xấu xí. Câu chuyện rất ngắn và giải thích rất nhiều về lý do tại sao việc viết nghiên cứu lại hiệu quả như vậy.

##1978: Knuth bực mình

Donald Knuth, một nhà khoa học máy tính ở Stanford, đang viết bộ sách hoành tráng *Nghệ thuật lập trình máy tính*. Khi nhà xuất bản chuyển từ cách sắp chữ bằng kim loại truyền thống sang các hệ thống kỹ thuật số đời đầu, các phép chứng minh mới trông rất tệ, đặc biệt là về toán học. Phản ứng của Knuth hết sức không cân xứng: ông đã tạm dừng các cuốn sách và dành nhiều năm để xây dựng hệ thống sắp chữ của riêng mình, **TeX** (phát âm là "tech", X là một chi trong tiếng Hy Lạp), phát hành nó vào năm 1978.

TeX là một chương trình lấy văn bản thuần túy với các lệnh đánh dấu và tạo ra các trang xuất sắc về mặt đánh máy: khoảng cách toán học hoàn hảo, ngắt dòng đoạn trang nhã, và các tác phẩm. Knuth cuối cùng đã đóng băng lõi của nó và đưa ra một khoản tiền thưởng cho mỗi lỗi được tìm thấy. Rất ít người đã được tuyên bố.

##1984: Lamport làm cho nó có thể sử dụng được

Raw TeX mạnh mẽ nhưng ở mức độ thấp, giống như hợp ngữ cho các trang. Năm 1984 Leslie Lamport (sau này là người đoạt giải Turing cho hệ thống phân tán) đã phát hành **LaTeX**, một lớp thân thiện ở trên cùng: thay vì định vị bằng tay những thứ bạn viết `\section{Giới thiệu}` và `\cite{knuth78}` và để hệ thống xử lý việc đánh số, tham chiếu và bố cục. LaTeX là điều mà ngày nay hầu hết mọi người đều ám chỉ khi họ nói rằng họ "viết bằng TeX". [Tài liệu đầu tiên](/learn/first-document/) của bạn là tài liệu LaTeX.

## Tại sao nó tồn tại được bốn thập kỷ

Bộ xử lý văn bản đến rồi đi; LaTeX vẫn tồn tại, vì những lý do tuyệt vời nhưng nhàm chán:

- **Toán học.** Vẫn không có gì sắp xếp được phương trình. Xem [chế độ toán học](/learn/math-mode/).
- **Văn bản thuần túy.** Hôm nay, một tệp .tex 1985 sẽ mở ra và hoạt động trơn tru với tính năng kiểm soát phiên bản.
- **Tự động hóa.** Đánh số, tham chiếu chéo và thư mục chỉ hoạt động ở 300 trang.
- **Mẫu.** Nhà xuất bản mã hóa kiểu nội dung chính xác của họ dưới dạng tệp lớp, do đó mọi bài gửi đều giống hệt nhau. Đó là lý do tại sao [ACM, IEEE và bạn bè](/learn/acm-ieee-and-friends/) đều trao cho bạn các mẫu .tex và tại sao các tạp chí vẫn muốn có nguồn .tex mà họ có thể biên dịch thành bố cục của riêng họ.

## Gia đình động cơ, trong một hơi thở

Công cụ TeX ban đầu đã tạo ra các công cụ kế thừa hiện đại: **pdfTeX** đã thêm đầu ra PDF trực tiếp, **XeTeX** đã thêm Unicode và phông chữ hệ thống, đồng thời **LuaTeX** đã thêm ngôn ngữ tập lệnh bên trong công cụ. Bạn chủ yếu chỉ chọn bất cứ điều gì mẫu của bạn mong đợi. Sự khác biệt thực tế nằm ở [công cụ nào cho dự án này](/learn/engines-compared/).

## 2023: nhập Typst

**Typst** là thách thức hiện đại nghiêm túc đầu tiên: một ngôn ngữ sắp chữ mới được xây dựng từ đầu với cú pháp rõ ràng hơn, biên dịch tức thì và thông báo lỗi thân thiện hơn. Nó thực sự thú vị và phát triển nhanh chóng. Các giới hạn của nó là mặt trái của các điểm mạnh của LaTeX: bốn mươi năm đóng gói và trên hết là sự chấp nhận của nhà xuất bản. Ngày nay, các địa điểm muốn có .tex, vì vậy LaTeX vẫn là ngôn ngữ gửi trong khi Typst phù hợp cho các ghi chú, báo cáo và bất kỳ thứ gì bạn kiểm soát đầu ra. Oleafly biên dịch LaTeX, Typst và Markdown cạnh nhau, do đó bạn có thể sử dụng từng ứng dụng một cách hiệu quả mà không cần chuyển đổi ứng dụng.

## Đồ ăn mang về

TeX là công cụ, LaTeX là ngôn ngữ mà mọi người viết, Typst là đối thủ trẻ và ghi lại lý do khiến người bảo vệ cũ vẫn tồn tại. Trường hợp những điều này phù hợp với Overleaf, các biên tập viên và người quản lý tài liệu tham khảo là chủ đề của [hộp công cụ viết nghiên cứu ngày ấy và bây giờ](/learn/research-tools-landscape/).