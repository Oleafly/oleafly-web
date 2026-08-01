---

title: "Tệp lớp đại học sẽ không được biên dịch"
description: "Phân loại: lỗi đầu tiên, động cơ, gói lỗi thời, tìm kiếm nhị phân."
category: "long-form"
order: 6
level: "advanced"
tags: ["thesis", "errors"]
featured: false
updated: 2026-07-25
---

# Tệp lớp đại học sẽ không được biên dịch

Mẫu luận văn đại học là một loại mã kế thừa đặc biệt. Một sinh viên tốt nghiệp đã viết hồ sơ lớp mười lăm năm trước chống lại sự phân phối TeX thời đó, tốt nghiệp và để nó ở trạng thái đóng băng trong khi hệ sinh thái LaTeX tiếp tục phát triển. Khi bạn tải xuống `universitythesis.cls` ngày hôm nay và nó chết kèm theo một màn hình lỗi, lớp học thường không bị hỏng nhiều mà bị mắc kẹt trong thời gian. Tuy nhiên, các dạng lỗi có thể dự đoán được và thứ tự phân loại cố định sẽ giải quyết được hầu hết các dạng lỗi đó.

## Chỉ bắt đầu với lỗi đầu tiên

Lỗi LaTeX xảy ra theo tầng: một lệnh không xác định ở đầu lớp có thể tạo ra hàng tá lỗi xuôi dòng mà không có ý nghĩa gì. Cuộn nhật ký đến dòng đầu tiên bắt đầu bằng `!`, sửa lỗi đó và biên dịch lại trước khi đọc bất kỳ nội dung nào khác. Việc lặp lại vòng lặp này thường xóa được bức tường lỗi đáng sợ sau ba hoặc bốn lần. Nếu lỗi đầu tiên là một lệnh không xác định, [Trình tự điều khiển không xác định](/learn/unknown-control-sequence/) sẽ thực hiện chẩn đoán.

## Kiểm tra động cơ

Nhiều mẫu giả định một công cụ cụ thể và thất bại một cách kỳ lạ đối với bất kỳ công cụ nào khác. Một lớp tải `fontspec` hoặc đặt phông chữ theo tên yêu cầu XeLaTeX hoặc LuaLaTeX; một lớp được xây dựng dựa trên các nguyên hàm dành riêng cho `pdftex` có thể bị lỗi trong cả hai. Tìm nhận xét ở gần đầu tệp lớp hoặc một dòng trong hướng dẫn của trường đại học đặt tên cho công cụ dự định và khớp với nhận xét đó trước khi gỡ lỗi bất kỳ điều gì khác. Sự khác biệt được tóm tắt trong [Công cụ nào cho dự án này](/learn/engines-compared/).

## Hiện đại hóa những gì bạn kiểm soát

Các mẫu cũ tải các gói lỗi thời có các gói thay thế hiện đại đã có trong bản phân phối của bạn và sau đó cả hai sẽ chiến đấu; [Các gói đấu tranh với nhau](/learn/package-conflicts/) liệt kê các cách kết hợp cổ điển. Chiến lược khả thi là giữ nguyên tệp lớp vì các yêu cầu định dạng của trường đại học vẫn tồn tại ở đó và chỉ hiện đại hóa phần mở đầu của riêng bạn: xóa các dòng `\usepackage` lỗi thời, tải `hyperref` muộn và tránh tải lại bất cứ thứ gì mà lớp đã tải.

## Tìm kiếm nhị phân phần mở đầu

Khi lỗi không thể kiểm tra được, hãy nhận xét nửa sau của phần mở đầu và biên dịch lại. Nếu lỗi biến mất, trình kích hoạt nằm ở nửa nhận xét; khôi phục một nửa và lặp lại. Một số phần biên dịch sẽ tách biệt dòng đơn bị lỗi, nhanh hơn nhiều so với việc suy luận về phần mở đầu mà bạn không viết.

## Hãy tìm kiếm trước khi đau khổ

Mọi sinh viên tại trường đại học đó đều biên soạn cùng một lớp, vì vậy lỗi của bạn gần như chắc chắn đã xảy ra trước đó. Tìm kiếm thông báo lỗi chính xác cùng với tên tệp lớp và kiểm tra xem trường đại học hoặc sinh viên kế thừa có duy trì bản vá lỗi trên GitHub hay không. Sử dụng một bản phân nhánh được duy trì, nếu có, sẽ tự mình sửa lại các lỗi đã biết.