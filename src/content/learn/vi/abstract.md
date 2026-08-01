---

title: "Khối trừu tượng"
description: "vị trí môi trường trừu tượng cho các lớp bài báo và tạp chí."
category: "paper-bones"
order: 4
level: "beginner"
tags: ["structure"]
featured: false
updated: 2026-07-25
---

# Khối trừu tượng

Phần tóm tắt là bản tóm tắt ngắn nằm giữa tiêu đề và phần đầu tiên của bạn. Gần như mọi địa điểm đều yêu cầu một. LaTeX cung cấp cho nó một môi trường chuyên dụng thay vì để bạn giả mạo nó bằng một tiêu đề in đậm. Lớp cần biết văn bản nào là trừu tượng để các lớp tạp chí có thể sắp chữ nó theo một kiểu riêng biệt (thường nhỏ hơn và thụt lề) và do đó hệ thống gửi có thể tự động trích xuất nó.

## Môi trường

```latex
\begin{abstract}
 We present a short abstract of at most 200 words.
\end{abstract}
```

Mọi thứ giữa `\begin{abstract}` và `\end{abstract}` đều trở thành khối trừu tượng. Trong lớp `bài viết` tiêu chuẩn, nó xuất hiện dưới dạng một đoạn văn được thu hẹp, có tiêu đề ở giữa bên dưới tiêu đề. Viết văn xuôi đơn giản bên trong nó. Toán nội tuyến cũng được, nhưng hãy bỏ qua bất cứ điều gì nặng nề: không trích dẫn nếu địa điểm tổ chức cấm chúng, không có chú thích cuối trang, không có từ viết tắt không xác định. Các bản tóm tắt thường xuất hiện một mình trong cơ sở dữ liệu và kết quả tìm kiếm, tách biệt khỏi phần còn lại của bài báo.

## Nó đi đâu

Đặt sau `\maketitle` (hoặc theo yêu cầu của lớp tạp chí). Thứ tự thông thường ở đầu bài viết là `\maketitle`, sau đó là tóm tắt, rồi `\section{Giới thiệu}`. Môi trường phải đứng sau `\begin{document}`, vì nó tạo ra kết quả; đặt nó trong phần mở đầu là một lỗi biên dịch.

Các lớp tạp chí và hội thảo thường thay đổi hợp đồng này và các mẫu của chúng vượt trội hơn so với mặc định. Một số lớp, bao gồm một số biến thể ACM và IEEE, muốn phần tóm tắt được khai báo trước `\maketitle` để chúng có thể đặt nó bên trong bố cục tiêu đề của riêng chúng. Những người khác thay thế hoàn toàn môi trường bằng một lệnh như `\abstract{...}`. Nguyên tắc nhỏ: nếu bạn đang sử dụng mẫu của một địa điểm, hãy đặt phần tóm tắt ở bất cứ nơi nào có tệp ví dụ của mẫu và không gây tranh cãi với lớp. [Bài học về khối tiêu đề](/learn/title-page/) đề cập đến bộ máy `\maketitle` mà bộ máy này bị treo.

## Các lớp không có phần tóm tắt

Lớp `book` không định nghĩa môi trường trừu tượng nào cả, trên lý thuyết rằng thay vào đó, sách có lời nói đầu. Nếu bạn cần một tiêu đề trong luận văn kiểu báo cáo, lớp `báo cáo` sẽ hỗ trợ nó hoặc bạn có thể sắp chữ một tiêu đề ở giữa không đánh số, theo sau là một đoạn văn thông thường, đó là tất cả những gì môi trường thực sự làm được.

Một lỗi phổ biến: để trống một dòng giữa `\maketitle` và phần tóm tắt là được, nhưng để trống phần tóm tắt không phải là lỗi biên dịch, do đó, một trình giữ chỗ bị lãng quên như "TODO" sẽ được gửi đến người đánh giá thường xuyên hơn bất kỳ ai thừa nhận. Biên dịch, xem trang đầu tiên của bản PDF và đọc phần tóm tắt ở đó ít nhất một lần trước khi gửi. Để biết lời khuyên về những gì bản tóm tắt thực sự nên nói, chứ không phải nơi nó đi đến, hãy xem [cách viết một bản tóm tắt](/learn/write-an-abstract/).