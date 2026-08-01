---

title: "Nhận TeX hoạt động trên mọi hệ điều hành"
description: "Oleafly với công cụ đi kèm hoặc bản cài đặt TeX Live / MiKTeX đầy đủ."
category: "local-studio"
order: 2
level: "beginner"
tags: ["setup"]
featured: false
updated: 2026-07-25
---

# Nhận TeX hoạt động trên mọi hệ điều hành

Việc viết LaTeX cục bộ cần có hệ thống TeX: công cụ biên dịch nguồn của bạn cùng với hàng nghìn gói tài liệu phụ thuộc vào. Có hai cách hợp lý để có được một. Một là một ứng dụng được tích hợp sẵn công cụ giúp bạn biên dịch trong vài phút. Cái còn lại là bản phân phối TeX đầy đủ, cài đặt chuỗi công cụ dòng lệnh hoàn chỉnh mà bất kỳ trình soạn thảo nào cũng có thể sử dụng. Cả hai đường dẫn đều kết thúc ở cùng một vị trí: tệp `.tex` chuyển thành tệp PDF trên máy của bạn.

## Đường dẫn A: một ứng dụng có kèm theo công cụ

Tải xuống [Oleafly](https://github.com/Oleafly/Oleafly/releases/latest) cho Mac, Windows hoặc Linux. Nó tích hợp công cụ Tectonic nên không cần quản lý cài đặt TeX riêng biệt: bạn mở ứng dụng, tạo dự án và biên dịch. Khi một tài liệu sử dụng một gói không có sẵn, Tectonic sẽ tìm nạp nó theo yêu cầu, yêu cầu kết nối mạng vào lần đầu tiên gói nhất định được sử dụng và không có gì sau đó. Đường dẫn này phù hợp với bất kỳ ai muốn viết bài thay vì quản lý cài đặt TeX và nó để lại các tệp `.tex` và `.bib` thông thường trên đĩa mà bất kỳ công cụ nào khác đều có thể đọc được.

## Đường dẫn B: phân phối TeX đầy đủ

Việc cài đặt một bản phân phối sẽ cung cấp cho bạn `pdflatex`, `xelatex`, `lualatex` và trình quản lý gói dưới dạng các lệnh hệ thống. Trên máy Mac, hãy cài đặt MacTeX, được đóng gói TeX Live cho macOS; nếu việc tải xuống nhiều gigabyte không được hoan nghênh, BasicTeX là một lõi nhỏ mà bạn mở rộng thông qua TeX Live Utility khi có nhu cầu. Trên Windows, MiKTeX là lựa chọn phổ biến và có thể cài đặt nhanh các gói bị thiếu trong quá trình biên dịch, trong khi TeX Live hoạt động tốt không kém. Trên Linux, cài đặt `texlive-full` từ trình quản lý gói của bạn cho mọi thứ cùng một lúc hoặc một sơ đồ nhỏ hơn như `texlive-latex-extra` cộng với công cụ `tlmgr` để thêm gói sau. Dự kiến ​​quá trình cài đặt đầy đủ sẽ mất một lúc và vài gigabyte đĩa.

## Xác minh cài đặt

Mở một thiết bị đầu cuối và hỏi phiên bản của động cơ:

```bash
pdflatex --version
# or
xelatex --version
```

Biểu ngữ phiên bản có nghĩa là chuỗi công cụ đã sẵn sàng và đang trên đường đi của bạn. Lỗi cho biết lệnh không được tìm thấy thường có nghĩa là những thay đổi của trình cài đặt đối với PATH của bạn chưa có hiệu lực; khởi động lại thiết bị đầu cuối hoặc đăng xuất và đăng nhập lại trên Windows sẽ giải quyết được.

## Nên đi con đường nào

Chọn ứng dụng nếu bạn đang bắt đầu hoặc chỉ muốn con đường ngắn nhất đến bản PDF được biên dịch. Chọn bản phân phối đầy đủ nếu bạn cần các công cụ cụ thể, bản dựng dòng lệnh hoặc tích hợp với trình chỉnh sửa hiện có. Cả hai cùng tồn tại mà không có xung đột, vì vậy bắt đầu với Đường dẫn A và thêm Đường dẫn B sau đó không tốn kém gì. Dù bằng cách nào thì bước tiếp theo đều giống nhau: biên dịch [tài liệu đầu tiên của bạn](/learn/first-document/).