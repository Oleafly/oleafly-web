---

title: "Định dạng luận án so với định dạng giấy"
description: "Các lớp đại học, bìa sách, các chương, lề bìa và tái sử dụng chất liệu giấy."
category: "venue-formats"
order: 7
level: "intermediate"
tags: ["venues", "thesis"]
featured: false
updated: 2026-07-25
---

# Định dạng luận án so với định dạng giấy

Một bài báo được định dạng cho một nhà xuất bản. Một luận án được định dạng cho một trường cao học, một con quái vật rất khác với những quy tắc rất khác. Nếu bạn chỉ có bài viết viết, mẫu luận văn sẽ làm bạn ngạc nhiên theo những cách cụ thể.

## Ai đặt ra luật lệ

Giấy tờ: địa điểm sẽ trao cho bạn một lớp học ([IEEEtran](/learn/ieee-format-in-practice/), [acmart](/learn/acm-format-in-practice/), llncs) và mọi người trên toàn thế giới đều sử dụng cùng một giấy tờ. Luận văn: trường đại học của bạn yêu cầu lớp học riêng hoặc một trang quy tắc đánh máy (lề, khoảng cách dòng, cách diễn đạt trang tiêu đề) và không có hai trường đại học nào đồng ý. Nhận lớp học chính thức từ khoa của bạn hoặc trang web trường sau đại học trước. Nếu nó đã cũ và từ chối biên dịch, thì điều đó cũng đủ phổ biến để có [bài học riêng](/learn/fix-broken-template/).

## Sự khác biệt về cấu trúc

| Khía cạnh | Giấy | Luận án |
|---|---|---|
| Đơn vị cấp cao nhất | `\phần` | `\chương` |
| Cơ sở lớp học | lớp địa điểm | `sách`/`báo cáo` phái sinh |
| Vấn đề phía trước | tiêu đề + tóm tắt | trang tiêu đề, tuyên bố, tóm tắt, TOC, danh sách các hình và bảng |
| Chiều dài | 8 đến 30 trang | 80 đến 300 trang |
| Bố cục | thường hai cột | cột đơn, khoảng cách rộng rãi |
| Bên | PDF một mặt | thường in hai mặt |

Các chương thay đổi mọi thứ ở phía dưới: việc đánh số trở thành `3.2`, các số liệu trở thành `Hình 3.1` và mỗi chương thường mở ra trên một trang mới (đôi khi ở bên phải).

## Vấn đề phía trước là một nửa trận chiến

Trình tự nội dung chính của luận án thường chạy: trang tiêu đề, tuyên bố về tính nguyên bản, tóm tắt, lời cảm ơn, mục lục, danh sách hình, danh sách bảng, sau đó là chương 1. Hầu hết đều được tự động hóa:

```latex
\frontmatter          % roman page numbers i, ii, iii
\maketitle
\tableofcontents
\listoffigures
\listoftables
\mainmatter           % arabic numbers restart at 1
\chapter{Introduction}
```

Điệu nhảy đánh số trang kiểu La Mã rồi Ả Rập khiến mọi người phải trải qua một lần, [vấn đề đầu và số trang](/learn/front-matter-page-numbers/) bao quát nó một cách chính xác.

## Lề in và đóng gáy hai mặt

Luận văn in thường có hai mặt (tùy chọn lớp `twoside`), điều này làm cho lề không đối xứng: lề trong rộng hơn để đóng bìa. Quy tắc của trường đại học của bạn sẽ có nội dung như "lề trái 35 mm, lề trái 25 mm", trong tài liệu hai mặt có nghĩa là *bên trong*, không phải bên trái. Đừng đấu tranh với điều này bằng `\ hspace` thủ công, tùy chọn lớp cộng với cài đặt `hình học` sẽ xử lý nó:

```latex
\documentclass[12pt,twoside,openright]{report}
\usepackage[inner=35mm,outer=25mm,top=25mm,bottom=25mm]{geometry}
```

`openright` buộc các chương vào các trang bên phải, tiêu chuẩn cho các bản sao đóng bìa.

## Tái sử dụng giấy tờ của bạn làm chương

Hầu hết các luận văn đều tiếp thu các bài báo đã được xuất bản và hầu hết các trường đại học đều cho phép điều đó một cách rõ ràng. Cơ chế: loại bỏ phần mở đầu của từng tờ giấy, hạ cấp các phần của nó nếu cần, thống nhất ký hiệu và macro giữa các chương và hợp nhất các thư mục thành một. Giữ mỗi chương trong tập tin riêng của nó làm cho việc này có thể quản lý được. [Chia các chương thành các tệp](/learn/split-chapter-files/) hiển thị thiết lập `\input`/`\include` giúp giữ cho bản dựng 200 trang luôn hoạt động tốt.

Một cảnh báo trung thực: các lớp luận văn đại học có xu hướng nặng về gói, vì vậy lần biên dịch đầu tiên trên máy mới có thể kéo xuống một loạt gói trước khi thành công. Hãy để nó hoàn thành một lần và các bản dựng tiếp theo sẽ nhanh chóng.