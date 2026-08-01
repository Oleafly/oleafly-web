---

title: "Nơi phao thực sự hạ cánh"
description: "htbp, tại sao buộc phải ở đây thường không thành công, di chuyển môi trường đến gần văn bản hơn."
category: "floats-and-ink"
order: 3
level: "intermediate"
tags: ["figures", "tables"]
featured: false
updated: 2026-07-25
---

# Nơi phao thực sự hạ cánh

Các hình và bảng trong LaTeX là các số float, có nghĩa là vị trí của mã trong nguồn của bạn là một gợi ý chứ không phải một hướng dẫn. Các chuyển động của LaTeX di chuyển xung quanh để giữ cho các trang được lấp đầy đồng đều, tránh các trang trống một nửa và tôn trọng các giới hạn về kiểu chữ như lượng trang có thể là hình ảnh. Đây là cú sốc văn hóa lớn nhất đến từ một người xử lý văn bản và việc hiểu được hệ thống sắp xếp sẽ giúp bạn tiết kiệm được hàng giờ chống chọi với nó.

##htbp nghĩa là gì

Mọi môi trường float đều có một danh sách đối số tùy chọn trong đó LaTeX được phép đặt nó:

```latex
\begin{figure}[htbp] % here, top, bottom, page of floats
```

Mỗi chữ cái là một sự cho phép. `h` cho phép thả nổi "ở đây", tại điểm trong văn bản nơi mã xuất hiện. `t` cho phép ở đầu trang, `b` cho phép ở cuối trang và `p` cho phép một trang nổi chuyên dụng chỉ chứa các hình và bảng. LaTeX đánh giá chúng một cách đại khái theo thứ tự đó cho mỗi trang mà nó xây dựng, lấy vị trí đầu tiên đáp ứng các quy tắc nội bộ của nó về khoảng cách và cân bằng trang. Các chữ cái cung cấp các tùy chọn thay vì thể hiện các mong muốn được xếp hạng, vì vậy việc liệt kê cả bốn sẽ mang lại cho LaTeX nhiều không gian nhất để đặt phao ở đâu đó gần gũi và hợp lý. Nếu bạn bỏ qua hoàn toàn đối số, mặc định là `[tbp]`, không có `h`, đó là lý do tại sao một hình trần thường nhảy lên đầu trang tiếp theo.

## Tại sao buộc "ở đây" lại phản tác dụng

Chỉ viết `[h]` có vẻ như là cách giải quyết rõ ràng nhưng nó thường khiến mọi việc trở nên tồi tệ hơn. Nếu phần nổi không vừa với khoảng trống còn lại trên trang hiện tại và `h` là quyền duy nhất bạn cấp, LaTeX không thể đặt nó trên trang này hoặc đặt nó trên bất kỳ trang nào khác một cách hợp pháp. Vì vậy, nó mang phần nổi về phía trước, trang này sang trang khác, chờ đợi một vị trí thỏa mãn `h`. Các phao cũng phải giữ đúng thứ tự, vì vậy mọi hình sau sẽ xếp hàng sau hình bị kẹt và toàn bộ đống thường bị đổ ra ở cuối chương. Việc thêm dấu chấm than, như trong `[h!]`, yêu cầu LaTeX nới lỏng một số quy tắc giãn cách, nhưng nó không thể tạo khoảng trống không tồn tại.

## Những thói quen thực sự có tác dụng

Trước tiên, hãy giữ `[htbp]` làm mặc định và bỏ qua vị trí pixel hoàn hảo trong khi soạn thảo, vì mọi đoạn bạn thêm hoặc xóa đều sẽ xáo trộn lại các trang. Thứ hai, đặt môi trường hình trong nguồn bên cạnh đoạn tham chiếu đầu tiên đến nó, vì LaTeX bắt đầu tìm kiếm phần gốc từ thời điểm đó trở đi và một float có thể di chuyển muộn hơn nhưng không bao giờ sớm hơn mã của nó. Thứ ba, viết văn xuôi của bạn để tham khảo các số liệu theo số, như trong "Hình 3 cho thấy đường ống", không bao giờ "hình bên dưới", để văn bản vẫn chính xác ở bất cứ nơi nào phao hạ cánh.

Nếu phao vẫn kết thúc ở một vị trí không thể chấp nhận được thì sẽ có các công cụ mạnh hơn, bao gồm các rào chắn phao và vị trí `[H]`, được bao phủ trong [hình chạy trốn khỏi phần](/learn/figure-wrong-position/). Tiếp cận chúng ở cuối bài viết, khi văn bản đã ổn định, không phải trong quá trình soạn thảo.