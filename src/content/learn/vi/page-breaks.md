---

title: "Buộc hoặc từ chối ngắt trang"
description: "trang mới, xóa trang, ngắt trang mềm, ngắt trang."
category: "the-page"
order: 4
level: "beginner"
tags: ["layout"]
featured: false
updated: 2026-07-25
---

# Buộc hoặc từ chối ngắt trang

LaTeX quyết định nơi trang kết thúc. Hầu hết thời gian, nó quyết định tốt, nhưng đôi khi bạn cần phải ghi đè lên nó: tiêu đề của một phần tự nó nằm ở cuối trang, một bảng hạ cánh quá muộn một dòng hoặc bạn muốn mỗi chương của báo cáo bắt đầu mới. LaTeX cung cấp cho bạn một tập lệnh nhỏ để thực hiện việc này, từ mệnh lệnh cứng rắn đến gợi ý lịch sự.

```latex
\newpage % end page
\clearpage % end page + flush floats
\cleardoublepage
\pagebreak[3] % soft request
\nopagebreak
```

## Những giai đoạn khó khăn

`\newpage` kết thúc trang hiện tại ngay lập tức và bắt đầu một trang mới. Đây là công cụ đơn giản nhất và là công cụ bạn sẽ sử dụng nhiều nhất khi soạn thảo.

`\clearpage` thực hiện điều tương tự nhưng trước tiên sẽ xóa tất cả các float đang chờ xử lý. Các hình và bảng trong LaTeX là các số float: chúng di chuyển đến bất cứ nơi nào thuật toán tìm thấy chỗ trống, đôi khi là các trang sau thời điểm bạn viết chúng. `\clearpage` buộc mọi phần nổi đã được xếp hàng cho đến nay trên trang trước khi tiếp tục, vì vậy đây là lệnh phù hợp ở cuối chương hoặc trước phần mà bạn không muốn có phần chậm trễ. Nếu các số liệu dường như chồng chất ở cuối tài liệu của bạn, thì một `\clearpage` được đặt đúng chỗ thường là cách chữa trị; xem [tại sao các hình chuyển động](/learn/figure-wrong-position/) để biết toàn bộ câu chuyện.

`\cleardoublepage` tiến thêm một bước nữa trong tài liệu hai mặt: sau khi xóa các phần nổi, nó đảm bảo trang tiếp theo là trang bên phải (lẻ), chèn một trang trống bên trái nếu cần. Các chương sách theo truyền thống sẽ mở ở bên phải và lớp `sách` sẽ gọi điều này cho bạn ở mỗi `\chương`.

## Các yêu cầu mềm

`\pagebreak[n]` không ra lệnh. Nó hỏi. Số tùy chọn từ 0 đến 4 cho biết mức độ mạnh mẽ: `\pagebreak[1]` có nghĩa là "ngắt ở đây sẽ tốt", `\pagebreak[4]` có nghĩa là "ngắt ở đây, dấu chấm". Các giá trị ở giữa cho phép LaTeX cân nhắc mong muốn của bạn dựa trên phán đoán khoảng cách của chính nó, điều này thường tạo ra các trang trông đẹp hơn so với `\trang mới` cứng, bởi vì `\pagebreak` kéo dài nội dung để lấp đầy trang thay vì để lại một khoảng trống.

`\nopagebreak` là yêu cầu ngược lại: nó không khuyến khích việc ngắt tại thời điểm đó. Nó rất hữu ích ngay sau một tiêu đề hoặc trước một danh sách ngắn mà bạn muốn giữ lại cùng với phần giới thiệu của nó. Giống như `\pagebreak` nó chấp nhận cường độ tùy chọn từ 0 đến 4.

## Khi nào cần đạt được những thứ này

Lỗi phổ biến là đưa `\trang mới` vào một bản nháp để sửa bố cục, sau đó xem mọi cách sửa lỗi đều trở nên sai khi văn bản phát triển. Việc ngắt trang phụ thuộc vào mọi thứ trước chúng, do đó, việc ngắt trang thủ công trông hoàn hảo ngày hôm nay có thể để lại một nửa trang trống sau lần sửa đổi tiếp theo của bạn. Quy trình làm việc hợp lý là viết toàn bộ tài liệu trước và chỉ thêm dấu ngắt trong lần chuyển cuối cùng, ưu tiên `\pagebreak[3]` mềm hơn các lệnh cứng ở bất kỳ vị trí chính xác nào có thể thương lượng được.