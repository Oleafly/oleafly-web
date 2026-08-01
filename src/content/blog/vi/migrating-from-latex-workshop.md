---

title: "Beyond LaTeX Workshop: trình soạn thảo nghiên cứu trên máy của bạn"
description: "Trình soạn thảo nghiên cứu được xây dựng có mục đích với trí thông minh trên toàn dự án, SyncTeX, hiệu đính ngoại tuyến, trình biên dịch đi kèm, Git thực và trích dẫn. VS Code + LaTeX Workshop vẫn sở hữu các công thức nấu ăn, điều khiển từ xa và thị trường mở rộng."
date: 2026-07-31
tags: [latex-workshop, migration, local-first, research-workspace, editor]
---

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) trong VS Code thật tuyệt vời. Miễn phí, MIT, được bảo trì cẩn thận. Nếu tuần của bạn chạy trên các công thức biên dịch dạng tự do, texdoc, Docker/WSL/remote, Live Share hoặc thị trường tiện ích mở rộng đầy đủ, hãy giữ nguyên ngăn xếp đó. Nó được xây dựng cho cuộc sống đó.

Bài đăng này dành cho khi bạn muốn có một ứng dụng ưu tiên tài liệu: giấy tờ nhiều tệp, trình biên dịch, PDF, Git, trích dẫn, số liệu và hiệu đính đã được kết nối với nhau. Nguồn mở và miễn phí (AGPL). LaTeX, Typst, Markdown. Các thư mục đơn giản. Không có tài khoản.

Bản đồ tính năng và các phím tắt: [Đến từ LaTeX Workshop](https://github.com/Oleafly/Oleafly/blob/main/docs/ComingFromLatexWorkshop.md).

## Biên tập viên

CodeMirror 6 với chỉ mục toàn dự án trên LaTeX, Typst, Markdown và BibTeX.

Những gì bạn thực sự nhận được hàng ngày:

- Đi tới định nghĩa, tìm tài liệu tham khảo, đổi tên nhãn và macro (cảnh báo xung đột)
- Kiểm tra trực tiếp các giới thiệu bị hỏng, trích dẫn xấu, thiếu bao gồm (`\cref`, `\eqref`, phạm vi giới thiệu, …)
- Quan điểm cấu trúc dự án + địa phương; lọc và nhảy
- Hoàn thành các khóa, đường dẫn và macro mà dự án của bạn xác định (`\newcommand`, hình dạng đối số xparse)
- Hỗ trợ `.tex`, `.ltx`, `.sty`, `.cls`; đoạn đối số; kiểm tra môi trường
- TexLab cho LaTeX (thiết lập chọn tham gia); Tàu Tinymist cho Typst
- Chẩn đoán thống nhất: cú pháp, biên dịch, dịch vụ ngôn ngữ, ref, trích dẫn, chính tả, ngữ pháp
- Xem trước toán học KaTeX trực tiếp; nguồn vẫn có thể chỉnh sửa
- Harper + Hunspell chỉ ngoại tuyến trên văn xuôi (các lệnh và mặt nạ toán học)
- Chế độ trực quan cho các cấu trúc phổ biến; Vim; lệnh gạch chéo; tab nhiều tập tin
- Tiếp theo là việc hoàn thành lệnh nhận biết gói từ một kho dữ liệu lớn (dữ liệu MIT của LaTeX Workshop, được cung cấp với sự phân bổ)

Không gian làm việc PDF: cuộn liên tục, dàn trải, tìm kiếm, phác thảo, cửa sổ có thể tháo rời. SyncTeX hai chiều trên các tệp chương. Ánh xạ vẫn hoạt động trong khi việc xây dựng lại đang chờ xử lý. Bản PDF tốt cuối cùng vẫn còn. Hoàn tác bộ nguồn đã biên dịch và bản xem trước có thể hoạt động hiện tại mà không cần biên dịch lại đầy đủ.

CI quy mô sách: ~6.200 dòng bản thảo, toán nhiều nhóm, chương, trích dẫn, hiệu đính, ngân sách hiệu suất khi cuộn/gõ/dán/hoàn tác/hoàn thành/biên dịch lại/SyncTeX.

LaTeX Workshop là một phần mở rộng mạnh mẽ trong IDE nói chung. Oleafly gửi vòng lặp tài liệu này đã được lắp ráp sẵn, do đó, bạn không phải kết nối cùng một ngăn xếp từ cài đặt và lựa chọn thị trường mỗi học kỳ.

## Trình biên dịch trong ứng dụng

Tectonic (LaTeX) và Typst đi kèm với ứng dụng. Markdown thông qua Pandoc được quản lý khi bạn cần. Đầu tiên biên dịch các gói bộ đệm; sau đó, các bản dựng được lưu trong bộ nhớ đệm sẽ hoạt động ngoại tuyến. Chế độ ngoại tuyến có thể khóa trình biên dịch vào bộ đệm.

Tự động biên dịch (đã gỡ bỏ, có thể hủy, chiến thắng mới nhất). `Cmd/Ctrl-Enter` biên dịch lại. Nút dừng. Thẻ lỗi nhân bản trên đường dây. Bản PDF tốt cuối cùng trong khi bản dựng mới hơn chạy.

Các công thức nấu ăn, chuỗi latexmk, shell-escape và `.latexmkrc` tùy chỉnh đều nằm trong kho điều khiển của LaTeX Workshop. Hầu hết các bài báo và luận văn chỉ cần một công cụ được giám sát đáng tin cậy.

Mẫu: 23 gói khởi đầu đi kèm (IEEE, ACM, Elsevier, Beamer, luận văn, sơ yếu lý lịch, khoảng trống Typst, …) cộng với 99 gói trong các gói có thể tải xuống. Lưu bất kỳ dự án nào dưới dạng mẫu. Tạo mẫu AI tùy chọn khi thiết lập mô hình.

## Thư viện, Git, công cụ nghiên cứu

Các dự án dưới dạng sách: màu bìa, huy hiệu công cụ, dòng nhánh, xem trước di chuột của trang PDF cuối cùng, dấu trang, tìm kiếm `/docs` trong mọi tài liệu. Fork giữ toàn bộ lịch sử Git cho việc viết lại đầy rủi ro bên cạnh bản sao gửi.

Git thực sự từ ngày đầu tiên. Dàn dựng, khác biệt song song (cây làm việc có thể chỉnh sửa), loại bỏ, khôi phục. Điểm kiểm tra tự động sau khi biên dịch thành công và chỉnh sửa không hoạt động; AI chạy điểm kiểm tra trước lần ghi đầu tiên. GitHub tùy chọn (PAT hoặc OAuth luồng thiết bị). Terminal `git log` khớp với ứng dụng.

Dán DOI / arXiv / title → dedupe → `.bib` → `\cite`. Nhập hàng loạt BibTeX, RIS, EndNote, Zotero RDF. Tìm kiếm trích dẫn trên arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex. Trình soạn thảo sơ đồ để TikZ có thể chỉnh sửa. Trình xác thực, bảng biểu, phương trình, tìm kiếm trong phòng thí nghiệm, thời hạn, PDF-to-LaTeX, hình ảnh-LaTeX với mô hình tầm nhìn.

## AI tùy chọn

Tắt cho đến khi bạn cấu hình nó. OpenAI, Anthropic, Z.AI, Groq, OpenRouter, DeepSeek, Mistral, xAI, Ollama. Khóa được mã hóa trên đĩa. Yêu cầu gửi đến nhà cung cấp bạn đã chọn.

Trợ lý chỉnh sửa, biên dịch, đọc nhật ký, trích xuất văn bản PDF, tìm kiếm tài liệu, lập kế hoạch. Viết là sự khác biệt phê duyệt. Việc xóa cần có xác nhận riêng. Hỏi-AI nội tuyến trên một lựa chọn. Loopback MCP cho Mã Claude, Con trỏ và bạn bè. Khi tắt AI, trình soạn thảo, biên dịch, Git và trích dẫn vẫn hoạt động.

## Preflight, xuất khẩu, quyền riêng tư

Preflight: cấu trúc, giới thiệu không xác định, nhãn trùng lặp, bản xem trước trích xuất kiểu trình phân tích cú pháp, các phát hiện hướng đến trình đọc màn hình. Mỗi cờ rủi ro đều có đủ ngữ cảnh để bạn có thể tự kiểm tra thay vì tin vào điểm số hộp đen.

Xuất: PDF luôn; DOCX/HTML/Markdown khi có sẵn Pandoc; PowerPoint cho bộ bài; EPUB cho sách; ZIP nguồn để chuyển giao.

Không có tài khoản Oleafly. Không có sản phẩm đo từ xa. Báo cáo sự cố mở ra sự cố GitHub được điền sẵn mà bạn xem xét. Mạng dành cho các gói, mẫu, AI được lưu trữ, trích dẫn, cập nhật, GitHub. Chỉnh sửa, biên dịch được lưu trong bộ nhớ đệm, ngữ pháp, kiểm tra chính tả và Git cục bộ hoạt động ngoại tuyến.

## Khi LaTeX Workshop vẫn còn phù hợp

- Công thức nấu ăn dạng tự do, latexmk, shell-escape, `.latexmkrc`
- texdoc trong trình soạn thảo
- Docker, WSL, phát triển từ xa
- Chia sẻ trực tiếp và chỉnh sửa trực tiếp cho nhiều người dùng
- Sống trong thị trường VS Code cho công việc phi tài liệu

Oleafly là phiên bản beta công khai. Các tệp lớp nhà xuất bản nặng vẫn có thể vấp phải Tectonic; báo cáo chúng.

## Hãy thử nó

1. Tải xuống từ
   [trang phát hành](https://github.com/Oleafly/Oleafly/releases/latest)
   (macOS đã ký/công chứng; Windows có thể SmartScreen một lần).
2. Nhập `.tex`, `.bib` và số liệu của bạn (hoặc bắt đầu từ một mẫu).
3. Biên soạn một lần, sau đó viết ra giấy thật trong một ngày.

Giữ mã VS được cài đặt. Các tệp giống nhau hoạt động trong cả hai ứng dụng. Nếu một ngày trên một tờ báo thật diễn ra tốt hơn ở Oleafly, hãy chuyển nhiều dự án hơn; nếu công thức nấu ăn và điều khiển từ xa vẫn giành chiến thắng cho một cây nhất định, hãy để cây đó trong Xưởng.