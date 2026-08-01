---

title: "Thư mục trống"
description: "Đường dẫn, phần phụ trợ, trích dẫn bị thiếu, thư mục in và thư mục."
category: "log-literacy"
order: 4
level: "beginner"
tags: ["errors", "citations"]
featured: false
updated: 2026-07-25
---

# Thư mục trống

## Triệu chứng

Tài liệu của bạn biên dịch không có lỗi nghiêm trọng nhưng phần Tài liệu tham khảo bị thiếu hoàn toàn hoặc tiêu đề xuất hiện mà không có gì bên dưới. Thông thường, mọi `\cite` trong văn bản đều hiển thị dưới dạng dấu hỏi đậm cùng một lúc. Không có gì bị lỗi nên không có lỗi rõ ràng nào để theo đuổi, đó là điều khiến điều này trở nên khó chịu.

##Tại sao nó lại xảy ra

Thư mục không chỉ do LaTeX tạo ra. Đầu tiên LaTeX ghi danh sách các khóa được trích dẫn vào một tệp phụ trợ. Một chương trình phụ trợ riêng biệt (`bibtex` hoặc `biber`) đọc cơ sở dữ liệu `.bib` của bạn và định dạng các mục nhập phù hợp. Cuối cùng, LaTeX đọc lại kết quả được định dạng đó ở lần chuyển tiếp theo. Thư mục trống có nghĩa là đường dẫn này bị hỏng ở đâu đó: phần phụ trợ không bao giờ chạy, nó chạy nhưng không thể tìm thấy cơ sở dữ liệu, nó tìm thấy cơ sở dữ liệu nhưng không có khóa nào được yêu cầu hoặc tài liệu đang yêu cầu kết quả bằng lệnh sai.

## Giải quyết các nguyên nhân theo thứ tự

Trước tiên, hãy xác nhận tệp cơ sở dữ liệu tồn tại ở nơi tài liệu cho biết. `\bibliography{refs}` và `\addbibresource{refs.bib}` đều tìm kiếm `refs.bib` liên quan đến tệp chính, do đó, một tệp nằm trong thư mục con `bib/` phải được tham chiếu là `bib/refs` hoặc `bib/refs.bib`. Một con đường sai lầm sẽ thất bại một cách lặng lẽ.

Thứ hai, hãy đảm bảo phần phụ trợ thực sự chạy. Một lần biên dịch không bao giờ là đủ; chu trình đầy đủ là LaTeX, sau đó là `bibtex` hoặc `biber`, sau đó là LaTeX hai lần nữa. Oleafly tự động chạy chu trình này, nhưng bản dựng thủ công hoặc chuỗi công cụ soạn thảo bị định cấu hình sai có thể bỏ qua bước giữa và kết quả chính xác là một danh sách tham chiếu trống.

Thứ ba, kiểm tra xem có tồn tại ít nhất một lệnh `\cite` hay không. Phần phụ trợ chỉ định dạng các mục mà tài liệu yêu cầu, do đó, bản nháp không có trích dẫn nào vẫn nhận được danh sách trống theo thiết kế. Trong quá trình soạn thảo ban đầu, bạn có thể buộc mọi thứ phải nhập bằng `\nocite{*}`, lệnh này yêu cầu mọi mục nhập trong cơ sở dữ liệu mà không cần in bất kỳ nội dung nào trong văn bản.

Thứ tư, khớp lệnh với hệ thống. Tài liệu BibTeX cổ điển kết thúc bằng `\bibliographystyle{...}` và `\bibliography{refs}`. Các tài liệu biblatex tải cơ sở dữ liệu trong phần mở đầu bằng `\addbibresource{refs.bib}` và in nó bằng `\printbibliography`. Việc kết hợp cả hai, chẳng hạn như tải biblatex nhưng vẫn gọi `\bibliography`, sẽ tạo ra chính xác lỗi này. Điều tương tự cũng xảy ra khi chạy sai chương trình phụ trợ: biblatex cần `biber` và việc cung cấp cho nó `bibtex` cổ điển không mang lại kết quả gì.

## Đọc nhật ký riêng của chương trình phụ trợ

Phần phụ trợ ghi các khiếu nại của nó vào tệp `.blg` bên cạnh tài liệu của bạn và đó là nơi hiển thị các mục nhập không đúng định dạng, khóa trùng lặp và thông báo "Tôi không thể mở tệp cơ sở dữ liệu". Nếu các bước trên có vẻ đúng nhưng danh sách vẫn trống, nhật ký `.blg` hầu như luôn nêu tên thủ phạm thực sự. Đối với các dấu hỏi vẫn tồn tại sau khi thư mục xuất hiện, hãy xem [Xóa dấu trích dẫn bí ẩn](/learn/cite-question-mark/).