---

title: "Gói đó chưa được cài đặt"
description: "tlmgr, MiKTeX và tìm nạp theo yêu cầu bằng Tectonic hoặc Oleafly."
category: "runtime"
order: 3
level: "beginner"
tags: ["packages"]
featured: false
updated: 2026-07-25
---

# Gói đó chưa được cài đặt

Sớm hay muộn việc biên dịch cũng dừng lại ở một dòng như `! Lỗi LaTeX: Không tìm thấy tệp 'siunitx.sty'`. Thông báo có ý nghĩa chính xác như nội dung: tài liệu của bạn yêu cầu một gói, thông qua `\usepackage{siunitx}` và trình biên dịch không thể tìm thấy tệp `.sty` của gói trên máy của bạn. Không có gì sai với tài liệu của bạn. Theo mặc định, các bản phân phối LaTeX không gửi mọi gói và cách khắc phục tùy thuộc vào bản phân phối bạn chạy.

## TeX Trực tiếp

TeX Live, bản phân phối tiêu chuẩn trên Linux và macOS (dưới dạng MacTeX), bao gồm trình quản lý gói có tên `tlmgr`. Cài đặt gói bị thiếu từ thiết bị đầu cuối:

```
tlmgr install siunitx
```

Nếu TeX Live đầy đủ đã được cài đặt, có dung lượng nhiều gigabyte, thì mọi thứ đều đã có sẵn và lỗi này sẽ không xảy ra. Nó thường xuất hiện với các sơ đồ cài đặt `cơ bản` hoặc `nhỏ` nhỏ hơn. Lưu ý rằng đối số của `tlmgr` là tên gói, không phải tên tệp, do đó không có phần mở rộng `.sty`.

##MiKTeX

MiKTeX, phổ biến trên Windows, có hai cơ chế. Tính năng cài đặt nhanh chóng của nó sẽ phát hiện tệp bị thiếu trong quá trình biên dịch và đề nghị tìm nạp tệp đó, nhắc bạn hoặc tự động tiếp tục tùy thuộc vào cài đặt. Ngoài ra, hãy mở Bảng điều khiển MiKTeX, chuyển đến tab Gói, tìm kiếm gói và cài đặt ở đó. Nếu quá trình cài đặt đang diễn ra có vẻ như treo một trình biên dịch, thì nó thường đang chờ trên hộp thoại xác nhận ẩn đằng sau một cửa sổ khác.

## Kiến tạo

Công cụ Tectonic, được tích hợp trong Oleafly, bỏ qua bước thủ công: các gói tải xuống theo yêu cầu trong quá trình biên dịch và lưu vào bộ nhớ đệm cục bộ của công cụ. Trình biên dịch đầu tiên sử dụng `siunitx` sẽ tìm nạp nó; biên dịch sau đó sử dụng lại bộ đệm. Lần chạy đầu tiên đó có thể mất nhiều thời gian hơn trong khi tải xuống phần phụ thuộc và cần có kết nối mạng.

## Khi cài không khắc phục được

Nếu người quản lý gói báo cáo rằng không có gói nào như vậy tồn tại, hãy kiểm tra chính tả trên trang của gói trên CTAN, kho lưu trữ gói LaTeX trung tâm tại ctan.org. Hai sự không phù hợp giải thích cho hầu hết các trường hợp cứng đầu. Đầu tiên, tệp và gói có thể có các tên khác nhau, vì gói phân phối có thể chứa một số tệp `.sty`. Việc tìm kiếm CTAN để tìm tên tệp `.sty` chính xác từ thông báo lỗi sẽ giải quyết được vấn đề này. Thứ hai, lỗi đôi khi đặt tên một tệp từ dự án của riêng bạn, chẳng hạn như tệp lớp mà mẫu quên đưa vào và không trình quản lý gói nào có thể cung cấp tệp đó. Tệp phải đến từ bất cứ nơi nào mẫu đã làm.

Lưu ý cuối cùng về lời khuyên cũ: tải xuống một tệp `.sty` đơn độc từ internet vào thư mục dự án của bạn vẫn hoạt động, vì LaTeX tìm kiếm thư mục hiện tại trước, nhưng nó đóng băng gói đó ở một phiên bản ngẫu nhiên và ẩn nó khỏi các bản cập nhật. Ưu tiên người quản lý gói và giữ thủ thuật sao chép thủ công trong trường hợp khẩn cấp gần thời hạn.