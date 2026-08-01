---

title: "Văn bản lâm sàng và cấp phép: quyền riêng tư, bản nháp có thể theo dõi và LaTeX ngoại tuyến"
description: "Tại sao y tế, sức khỏe cộng đồng và người viết tài trợ lại quan tâm đến nơi lưu trữ bản nháp và cách biên tập viên nghiên cứu địa phương với Git thực, biên dịch ngoại tuyến và không có tài khoản nào phù hợp với chu kỳ đánh giá."
date: 2026-07-14
tags: [medicine, grants, privacy, local-first]
---

Các bản thảo lâm sàng và tường thuật cấp phép thường bao gồm các chi tiết nhạy cảm, thậm chí
trước khi việc hủy nhận dạng là quyết định cuối cùng. Đặt mọi thao tác nhấn phím vào bên thứ ba
trình soạn thảo là một quyết định chính sách cũng như một ưu tiên về công cụ. IRB, sử dụng dữ liệu
các thỏa thuận và bộ phận CNTT của bệnh viện không quan tâm đến việc trình chỉnh sửa đám mây có thuận tiện hay không
11 giờ tối.

Bài đăng này nói về việc soạn thảo và sắp chữ theo cách bạn có thể giải thích cho
tuân thủ. Hãy coi nó như lời khuyên về quy trình làm việc chứ không phải đánh giá pháp lý.

## Tệp đơn giản dễ lý giải hơn

Một thư mục `.tex` và các số liệu có thể nằm bên trong một đĩa được mã hóa, một bệnh viện
hình ảnh máy tính xách tay hoặc máy có air-gap. Bạn có thể chỉ ra sự tuân thủ tại một đường dẫn.
Các dự án trình duyệt yêu cầu phải tin tưởng vào mô hình truy cập, đường dẫn xuất và
danh sách bộ xử lý phụ.

[Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) được xây dựng để
theo mục đích: không có tài khoản, không đo từ xa sản phẩm, dự án như các thư mục thông thường
với kho lưu trữ Git thực sự. [Trang bảo mật](/privacy/) ngắn vì
tài liệu không cần máy chủ Oleafly tồn tại. Mạng dành cho các hành động của bạn
lấy (gói, tra cứu trích dẫn tùy chọn, AI được lưu trữ nếu bạn bật nó, GitHub),
không phải cho mỗi lần nhấn phím của bản nháp.

Nếu chính sách cấm AI trên đám mây, hãy tắt trợ lý hoặc trỏ trợ lý vào một địa phương
mô hình. Trình soạn thảo, vòng lặp biên dịch và Git vẫn hoạt động.

## Theo dõi các thay đổi mà không cần sống trong Word

Các PI cấp vẫn yêu cầu "theo dõi các thay đổi". Trong vùng đất LaTeX, điều đó thường có nghĩa là
Lịch sử Git cộng với nhận xét PDF từ đồng tác giả hoặc bản xuất Word ngắn cho
người từ chối cài đặt bất cứ thứ gì. Giữ `.tex` làm nguồn thông tin chính xác;
xem [đồng tác giả chỉ nói được Word](/learn/collaborator-uses-word/).

Trong Oleafly, mọi dự án đều là kho lưu trữ Git ngay từ ngày đầu tiên: điểm kiểm tra tự động
sau khi biên dịch thành công và chỉnh sửa không hoạt động, các khác biệt song song, chỉ bằng một cú nhấp chuột
khôi phục, GitHub tùy chọn khi bạn muốn có một điều khiển từ xa riêng. Bạn có thể rẽ nhánh toàn bộ
gói ứng dụng vào dự án thứ hai (toàn bộ lịch sử) để thử cắt giảm rủi ro
mà không cần chạm vào bản sao nộp. Nếu bạn sử dụng trợ lý AI tùy chọn, nó sẽ
điểm kiểm tra trước lần chỉnh sửa đầu tiên và chỉ thay đổi vùng đất thông qua phê duyệt
khác biệt.

Tên cam kết sau mục tiêu hoặc phần (`aim2-methods-cut`) để PI có thể đọc lướt
lịch sử mà không đọc khác biệt như một kỹ sư phần mềm.

## Ngoại tuyến rất hữu ích trong bệnh viện

Mạng lâm sàng chặn các miền SaaS ngẫu nhiên. Trình biên dịch cục bộ tiếp tục ghi
có thể thực hiện được giữa các phiên EHR. Oleafly vận chuyển Tectonic (và Typst) trong ứng dụng;
gói bộ nhớ đệm sau lần sử dụng đầu tiên và chế độ ngoại tuyến có thể từ chối mạng đối với
trình biên dịch. Kiểm tra chính tả và ngữ pháp chạy cục bộ trên văn xuôi (chúng bỏ qua các lệnh và
toán). Đó là những hạn chế mà bộ phận CNTT của bệnh viện thường quan tâm, do đó,
biên tập viên nghiên cứu đến thường xuyên.

SyncTeX và một tệp PDF bên cạnh vấn đề nguồn khi bạn sửa giới hạn trang
tại máy tính của trạm điều dưỡng có Wi-Fi không đáng tin cậy.

## Mẫu, giới hạn trang và ánh sáng trước

Các mẫu nền tảng và kiểu NIH tập trung vào lề, phông chữ và giới hạn trang.
Các gói hình học và phông chữ quan trọng hơn các macro thông minh. Biên dịch sang PDF và
kiểm tra số trang sau mỗi lần cắt lớn, không phải vào đêm trước cổng
đóng lại. Bắt đầu từ một mẫu đã biết trong thư viện khi phù hợp; vẫn phù hợp
FOA hiện tại cho phông chữ, lề và cấu trúc (Mục tiêu cụ thể dưới dạng một trang
có nghĩa là một trang).

Khi PDF phải tồn tại trong một trình đọc máy (tiếp tục, một số tổ chức
Portals), Preflight hiển thị các kết quả trích xuất theo kiểu cấu trúc và trình phân tích cú pháp
trước khi bạn gửi. Đó là những tín hiệu rủi ro theo kinh nghiệm mà bạn có thể đọc và hành động.

## Hợp tác đa PI

Tập tin riêng theo phần hoặc mục tiêu. Một người sở hữu chủ `.bib` hoặc được chia sẻ
Xuất khẩu nhóm Zotero. Đồng ý xem đồng tác giả có chỉnh sửa TeX hay trả lại nhận xét PDF hay không.
Điều khiển từ xa riêng tư chỉ trên máy chủ Git của tổ chức đã được phê duyệt khi chính sách yêu cầu
nó; không phải mọi dự thảo tài trợ đều thuộc về GitHub công khai.

## Người quản lý thư mục

Các nhóm Zotero được chia sẻ xuất một `.bib` mà nhiều PI có thể làm mới. Nhập vào
dự án, dán DOI khi bạn thêm các trích dẫn mới và xác thực các trường bị thiếu
trước khi gửi để năm không hiển thị dưới dạng `[?]` trong bản PDF được tổng hợp:
[Trình xác thực BibTeX](/tools/bibtex-validator/). Oleafly hoàn thành và kiểm tra
phím trích dẫn chống lại thư mục dự án trong khi bạn viết, vì vậy bị hỏng
Các phím `\cite` hiển thị trước khi nhật ký xuất hiện.

## Số liệu và PHI

Không bao giờ đưa dữ liệu có thể nhận dạng bệnh nhân vào các số liệu hoặc chú thích dành cho
repo người khác có thể sao chép. Sử dụng sơ đồ không xác định. Lưu trữ mọi thứ vẫn còn
nhạy cảm dưới cùng các biện pháp kiểm soát như tập dữ liệu lâm sàng, không nằm cạnh
sơ đồ phương pháp công cộng

## Đây không phải là gì

Ưu tiên địa phương vẫn nằm trong sự xem xét của IRB, các thỏa thuận sử dụng dữ liệu và
khử nhận dạng. Bật AI được lưu trữ hoặc nhấn điều khiển từ xa và một số byte sẽ rời khỏi
máy theo chính sách của các dịch vụ đó. Những thay đổi cục bộ đầu tiên là mặc định
đường dẫn soạn thảo một câu chuyện nhạy cảm: một thư mục bạn kiểm soát, một trình soạn thảo
chạy ngoại tuyến và lịch sử bạn có thể khôi phục mà không cần yêu cầu nhà cung cấp
xuất khẩu.

## Thiết lập khởi động thực tế

1. Tạo một dự án địa phương; bật biên dịch ngoại tuyến khi các gói được lưu vào bộ nhớ đệm.
2. Tắt AI trừ khi chính sách và nhóm đồng ý về nhà cung cấp.
3. Chỉ điều khiển từ xa riêng tư trên máy chủ được phê duyệt.
4. Quyền sở hữu mục và một chủ sở hữu thư mục duy nhất.
5. Kiểm tra số trang sau mỗi lần cắt giảm lớn về mục tiêu và chiến lược nghiên cứu.

Viết như thể một nhân viên tuân thủ sẽ hỏi nơi dự thảo tồn tại. Nếu câu trả lời
là "một thư mục trên máy tính xách tay được mã hóa, lịch sử Git cục bộ, riêng tư tùy chọn
từ xa", bạn sẽ ở trạng thái tốt hơn "một tài khoản trên một dịch vụ mà chúng tôi chưa bao giờ
được xem xét."