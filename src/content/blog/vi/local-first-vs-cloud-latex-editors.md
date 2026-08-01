---

title: "Trình soạn thảo LaTeX cục bộ đầu tiên và trên nền tảng đám mây: những gì bạn thực sự giao dịch"
description: "Các biên tập viên Cloud LaTeX trao đổi quyền sở hữu để thuận tiện. Ưu tiên cục bộ có nghĩa là các tệp trên đĩa, trình soạn thảo nghiên cứu thực, Git thực, công việc ngoại tuyến và mạng chỉ dành cho các hành động bạn thực hiện, cộng với những gì vẫn thuộc về trình duyệt."
date: 2026-07-21
tags: [local-first, privacy, research-workspace, editor]
---

Các biên tập viên Cloud LaTeX đã thắng vì một lý do đơn giản: không cần thiết lập. Mở một tab, biên dịch.
Trong nhiều năm, đó là cách dễ dàng nhất để chống lại việc phân phối TeX trên một nền tảng
máy tính xách tay, và nhiều người vẫn thích nó.

Tuy nhiên, việc thiết lập không còn là phần khó khăn đối với hầu hết các tài liệu. Động cơ như
Tectonic có thể vận chuyển bên trong ứng dụng dành cho máy tính để bàn và kéo các gói theo yêu cầu, vì vậy
cài đặt và biên dịch gần bằng thời gian cần thiết để tạo một tài khoản đám mây. các
câu hỏi đáng đặt ra là đăng ký vẫn mua được gì cho bạn và bạn
bàn giao cho nó.

## Những gì bạn từ bỏ trên đám mây

Bản thảo của bạn nằm trong cơ sở dữ liệu của người khác. Xuất khẩu thường hoạt động, cho đến khi
kế hoạch thay đổi, một công ty được mua lại, hoặc một tính năng biến mất, trong khi
thời hạn vẫn được đặt.

Mã hóa ở trạng thái nghỉ giúp ngăn chặn người ngoài. Bản thân dịch vụ vẫn có thể nhìn thấy
dự thảo, tài trợ và kết quả chưa được công bố đi qua cơ sở hạ tầng của nó.

Độ trễ là một chi phí thầm lặng khác. Một lần nhấn phím được xử lý trên máy của bạn gần như
luôn luôn nhanh hơn. Biên dịch hàng đợi và thời gian chờ ở bậc miễn phí chỉ hiển thị khi
bản dựng không phải của bạn.

Ngoại tuyến là khoảng cách khác. Trên chuyến bay, dưới tầng hầm bệnh viện hoặc ở nơi an toàn
lab không có mạng mở, trình chỉnh sửa trình duyệt chỉ là một tab trống.

Một số biên tập viên được lưu trữ cũng đưa toàn bộ lịch sử, theo dõi các thay đổi hoặc đồng bộ hóa Git/GitHub
đằng sau các bậc trả phí. Local Git không quan tâm bạn đã mua gói nào.

## Những thay đổi cục bộ đầu tiên

Dự án là các tệp đơn giản trong một thư mục mà bạn có thể mở. Lịch sử có thể là sự thật Git bạn
kiểm tra từ bất kỳ thiết bị đầu cuối nào. Biên dịch chạy trên CPU của bạn mà không có hàng đợi. Tập tin của bạn
và lịch sử Git không phụ thuộc vào việc tài khoản nhà cung cấp có hoạt động tốt hay không.

Việc gõ trực tiếp cho nhiều người dùng vẫn là nơi mà các công cụ trình duyệt giành chiến thắng. Rất nhiều nghiên cứu
các tuần có vẻ khác: soạn thảo một mình, đi du lịch, mạng lưới bị hạn chế, muốn
quyền sở hữu hoặc cần một trình soạn thảo tài liệu đầy đủ để lập chỉ mục cho toàn bộ dự án.
Các phòng thí nghiệm đã phân nhánh và mở các yêu cầu kéo mã. Giấy tờ có thể sử dụng giống nhau
mẫu không đồng bộ dành cho các đồng tác giả không cần chia sẻ con trỏ.

## Mạng vẫn xảy ra (có mục đích)

Các công cụ cục bộ vẫn tiếp cận các gói sử dụng lần đầu, gói mẫu, trích dẫn
siêu dữ liệu, AI được lưu trữ nếu bạn bật nó, điều khiển từ xa Git và các bản cập nhật. Vấn đề là
mặc định: các bản soạn thảo và biên dịch được lưu vào bộ nhớ đệm vẫn ở trên đĩa.

Các dự án, siêu dữ liệu, bản dựng và lịch sử Git tồn tại cục bộ. Mạng chạy khi
bạn thực hiện một hành động cần nó. Chỉnh sửa và biên dịch được lưu vào bộ nhớ cache sẽ hoạt động
ngoại tuyến. Dán DOI hoặc kích hoạt mô hình đám mây và những yêu cầu đó sẽ được chuyển tới nơi bạn
nhằm vào họ. Hãy nói điều đó một cách rõ ràng trong bất kỳ bài viết nào về quyền riêng tư thay vì giả vờ
mạng không bao giờ xảy ra.

## Chồng giấy xung quanh

Một tuần nghiên cứu gần như không bao giờ “chỉ là một biên tập viên”. Nó thường là sự kết hợp của:

- môi trường viết với thông tin dự án thực tế
- Phân phối và bảo trì gói TeX
- Trình xem PDF với SyncTeX
- Máy khách Git và máy chủ từ xa
- tra cứu trích dẫn và vệ sinh thư mục
- Công cụ ngữ pháp và chính tả
- sơ đồ hoặc hình đường ống
- thời hạn và các công cụ phụ khác

Không gian làm việc nghiên cứu cục bộ sẽ hữu ích khi những phần đó nằm giống nhau
dự án thư mục đơn giản: trình soạn thảo nhận biết dự án (refs, trích dẫn, macro, cấu trúc,
xem trước toán học, kiểm lỗi ngoại tuyến), biên dịch có giám sát, không gian làm việc PDF với
SyncTeX chống lỗi cũ, điểm kiểm tra Git tự động, nhập và xuất, preflight
trước khi gửi, tác nhân tùy chọn phải hiển thị khác biệt.

##Oleafly phù hợp ở đâu

[Oleafly](https://github.com/Oleafly/Oleafly) được xây dựng cho danh mục đó: miễn phí,
không gian làm việc trên máy tính để bàn nguồn mở dành cho LaTeX, Typst và Markdown. Đi kèm
trình biên dịch. Thư viện dự án với fork và tìm kiếm. Trình chỉnh sửa toàn dự án
thông minh (định nghĩa, tài liệu tham khảo, đổi tên, kiểm tra ref/trích dẫn trực tiếp, cấu trúc
các chế độ xem, macro của bạn với các hình dạng đối số, TexLab/Tinymist nếu có). Trực tiếp
xem trước toán học. Ngoại tuyến Harper và Hunspell chỉ bằng văn xuôi. PDF tích hợp với
SyncTeX hai chiều vẫn ánh xạ trong khi quá trình xây dựng lại đang chờ xử lý. Git thật với
điểm kiểm tra tự động và GitHub tùy chọn. Tìm kiếm và dán trích dẫn. Sơ đồ
Trình soạn thảo để TikZ có thể chỉnh sửa. Chuyến bay trước. AI được kiểm soát phê duyệt tùy chọn bằng khóa của bạn
hoặc Ollama địa phương.

[Trang quyền riêng tư](/privacy/) có mục đích ngắn gọn: không có tài khoản Oleafly, không
đo từ xa sản phẩm. Bản nháp trực tiếp trên máy của bạn. AI được lưu trữ, tra cứu trích dẫn và
GitHub trao đổi với các dịch vụ đó theo chính sách của họ, bằng khóa của bạn và
hành động.

Nếu bạn muốn trải nghiệm một chút mà không cần cài đặt, [trình duyệt miễn phí
tools](/tools/) chạy phía máy khách. Ứng dụng dành cho máy tính để bàn là nơi thông minh,
biên dịch, lịch sử và cây dự án thực sự gặp nhau.

## Khi đám mây vẫn thắng

Vẫn ở trong trình duyệt khi tính năng đồng tác giả theo thời gian thực là sản phẩm, khi
cộng tác viên sẽ không cài đặt bất cứ thứ gì hoặc khi tổ chức của bạn đã
được chuẩn hóa trên một trình soạn thảo được lưu trữ để gửi.

Hãy ghép công cụ này với tuần mà bạn thực sự có. Nếu bạn cần nhiều người dùng trực tiếp
gõ, ở lại trình duyệt (hoặc sử dụng Git khi đồng tác giả có thể hoạt động không đồng bộ). Nếu bạn
quan tâm nhiều hơn đến quyền sở hữu, độ sâu ngoại tuyến và trình chỉnh sửa nghiên cứu địa phương đầy đủ,
giữ bản thảo dưới dạng tệp trên đĩa, tạo bản PDF trên máy của bạn và giữ
history trong một kho lưu trữ mà bất kỳ công cụ Git nào cũng có thể mở được.