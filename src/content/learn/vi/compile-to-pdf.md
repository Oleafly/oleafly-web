---

title: "Tại sao bạn biên dịch nhiều lần"
description: "Tệp phụ trợ, thẻ thư mục và lý do tại sao tài liệu tham khảo được in ?? trong lần chạy đầu tiên."
category: "open-the-loop"
order: 5
level: "beginner"
tags: ["compile"]
featured: false
updated: 2026-07-25
---

# Tại sao bạn biên dịch nhiều lần

Sớm hay muộn bạn sẽ biên soạn một tài liệu, mở tệp PDF và tìm `??` nơi cần có số hình hoặc trích dẫn. Không có gì bị hỏng. Một lần biên dịch duy nhất là một lần truyền qua tệp của bạn và một số thông tin thực sự không thể được biết trong một lần truyền.

Đây là vấn đề thu nhỏ. Ở trang 2 bạn viết "xem Hình \ref{fig:results}", nhưng hình đó lại ở trang 7. Khi máy sắp chữ trang 2 thì nó chưa đến trang 7 nên chưa biết hình sẽ ra số mấy. Điều tương tự cũng áp dụng cho mục lục, trong đó cần đánh số trang của từng phần trước khi hoàn thành trang một.

## Động cơ giải quyết nó như thế nào

Công cụ LaTeX đọc tệp `.tex` của bạn, phân giải mọi macro và viết tệp PDF. Bên cạnh tệp PDF, nó cũng ghi các tệp trợ giúp nhỏ: `.aux` cho nhãn và trích dẫn, `.toc` cho mục lục, `.bbl` cho thư mục được định dạng. Những tập tin này là những ghi chú mà công cụ để lại cho tương lai của nó.

1. Ở lần chuyển đầu tiên, công cụ sắp chữ văn bản của bạn và ghi mọi `\label` và `\cite` mà nó gặp vào tệp `.aux`, in `??` bất cứ nơi nào nó cần một số mà nó chưa biết.
2. Nếu bạn trích dẫn bất cứ điều gì, một công cụ thư mục (bibtex hoặc biber) sẽ đọc tệp `.aux`, tra cứu từng trích dẫn trong cơ sở dữ liệu `.bib` của bạn và ghi danh sách tham chiếu được định dạng vào tệp `.bbl`.
3. Ở lần thứ hai và đôi khi là lần thứ ba, công cụ sẽ đọc lại các tệp trợ giúp đó, do đó, các tham chiếu chéo, mục lục và nhãn trích dẫn cuối cùng sẽ phân giải thành số thực.

Các thiết lập hiện đại tự động chạy các thẻ này cho bạn, vì vậy trong thực tế, bạn hiếm khi tự mình gõ lệnh. Nhưng việc biết chu trình sẽ giải thích triệu chứng: một `??` mới sau khi thêm nhãn hoặc trích dẫn chỉ có nghĩa là các tệp trợ giúp chưa bắt kịp và một trình biên dịch nữa sẽ sửa nó.

## Động cơ trên mỗi dòng

Một số chương trình có thể đóng vai trò là "động cơ". pdfLaTeX là sự lựa chọn cổ điển với sự hỗ trợ tạp chí rộng rãi nhất. XeLaTeX bổ sung đầy đủ Unicode và cho phép bạn sử dụng các phông chữ được cài đặt trên hệ thống của mình. LuaLaTeX cũng hỗ trợ Unicode và nhúng ngôn ngữ kịch bản cho các gói nâng cao. Tectonic là một công cụ hiện đại tải xuống các gói theo yêu cầu vào lần đầu tiên bạn cần chúng. Oleafly gói nó để dự án mới biên dịch mà không cần cài đặt bản phân phối TeX trước.

Đối với hầu hết các tài liệu, sự khác biệt hầu như không quan trọng; chọn bất cứ mẫu hoặc địa điểm nào bạn mong đợi và tiếp tục. Xem [engines so sánh](/learn/engines-compared/) khi bạn cần lựa chọn có chủ ý.

## Khi điều gì đó thực sự thất bại

Quá trình biên dịch không thành công sẽ tạo ra một nhật ký dài và bản năng tự nhiên là đọc nó từ dưới lên. Chống lại điều đó. Đọc lỗi đầu tiên trong nhật ký và chỉ sửa lỗi đó; các lỗi sau này thường là tiếng ồn xếp tầng do lỗi đầu tiên gây ra. Nếu tham chiếu vẫn in `??` sau hai lần biên dịch thành công liên tiếp, thủ phạm thông thường là lỗi đánh máy trong tên `\label` hoặc `\ref` chứ không phải là thiếu thẻ.