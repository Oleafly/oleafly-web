---

title: "Các gói đấu tranh với nhau"
description: "hyperref cuối cùng, smartef sau, các cặp lỗi thời, ví dụ tối thiểu."
category: "runtime"
order: 5
level: "advanced"
tags: ["packages", "errors"]
featured: false
updated: 2026-07-25
---

# Các gói đấu nhau

Các gói LaTeX có thể tự do xác định lại các lệnh của nhau và nhiều gói làm như vậy một cách có chủ ý. Đó là cách `hyperref` biến mọi tham chiếu chéo thành một liên kết. Điều đó cũng có nghĩa là hai gói mỗi gói có thể vá cùng một lệnh với các giả định không tương thích và kết quả nằm trong phạm vi từ một lỗi hoàn toàn như `Lệnh \footnote đã được xác định` hoặc `Tùy chọn xung đột cho gói xcolor` cho đến đầu ra sai âm thầm. Xung đột hầu như luôn xuất hiện ngay sau khi bạn thêm gói vào phần mở đầu hoạt động trước đó, đây cũng là manh mối lớn nhất.

## Tải đơn hàng là một nửa trận chiến

Nhiều xung đột được giải quyết hoàn toàn theo thứ tự, vì gói được tải sau sẽ nhận được lời cuối cùng. Quy tắc quan trọng nhất: tải `hyperref` ở gần cuối phần mở đầu. Nó viết lại phần lớn bộ máy tham chiếu chéo của LaTeX và các gói được tải sau nó có thể hoàn tác các bản vá đó. Một danh sách ngắn các trường hợp ngoại lệ thậm chí phải được đưa ra muộn hơn và danh sách bạn thực sự sẽ gặp là `cleveref`, được thiết kế để nằm trên `hyperref` và phải được tải sau nó:

```latex
\usepackage{graphicx}
\usepackage{amsmath}
% ... everything else ...
\usepackage{hyperref}
\usepackage{cleveref} % after hyperref, by design
```

Khi tài liệu của gói chỉ định vị trí liên quan đến gói khác, hãy tin vào điều đó. Những ghi chú đó tồn tại bởi vì ai đó đã gặp phải xung đột mà bạn sắp gặp phải.

## Các gói đã lỗi thời và các gói thay thế của chúng

Một số xung đột xuất phát từ việc tải một gói đã chết bên cạnh gói kế tiếp của nó. Không kết hợp `epsfig` với `graphicx`, `subfigure` với `subcaption` hoặc `times` và `mathptmx` cũ với các gói phông chữ hiện đại như `newtxttext`. Các mẫu cũ là nguồn thông thường: chúng tải bất cứ thứ gì hiện tại khi mẫu được viết và bạn thêm mẫu tương đương hiện đại lên trên. Loại bỏ cái lỗi thời và giữ lại cái thay thế. Gói `nag` có thể gắn cờ việc sử dụng đã lỗi thời cho bạn tại thời điểm biên dịch.

## Xung đột tùy chọn

`Xung đột tùy chọn cho gói X` có nghĩa là gói đã được tải hai lần với các tùy chọn khác nhau, thường là một lần bởi lớp tài liệu của bạn sau lưng bạn. Bạn không thể tải lại nó với các tùy chọn mới, nhưng bạn có thể thêm các tùy chọn trước khi bất kỳ ai tải nó: đặt `\PassOptionsToPackage{table}{xcolor}` trước `\documentclass` và các tùy chọn sẽ được hợp nhất vào bất kỳ lần tải nào đến trước.

## Cô lập bằng một ví dụ tối thiểu

Khi nguyên nhân không rõ ràng, hãy tạo một ví dụ hoạt động tối thiểu: một tài liệu chỉ chứa `\documentclass`, hai gói nghi ngờ và một `\begin{document}...\end{document}` với một dòng văn bản. Nếu lỗi tái diễn, hãy chuyển đổi thứ tự tải và các tùy chọn cho đến khi không còn lỗi nữa. Nếu nó không tái tạo, hãy thêm các gói khác của bạn làm đôi cho đến khi nó quay trở lại. Tìm kiếm nhị phân này hội tụ trong một số phần biên dịch và cung cấp cho bạn một cặp rõ ràng để tìm kiếm. Kỹ thuật tương tự sẽ cứu các phần mở đầu được kế thừa, như được mô tả trong [Tệp lớp đại học sẽ không biên dịch](/learn/fix-broken-template/).