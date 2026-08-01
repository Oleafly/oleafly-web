---

title: "Định dạng ACM trong thực tế"
description: "Lớp acmart: sigconf, siêu dữ liệu, đánh giá ẩn danh và những điều ngạc nhiên khi biên dịch lần đầu."
category: "venue-formats"
order: 3
level: "intermediate"
tags: ["venues", "acm"]
featured: false
updated: 2026-07-25
---

# Định dạng ACM trong thực tế

ACM đã hợp nhất tất cả các mẫu của mình thành một lớp, `acmart`, vào năm 2017. Một lớp, nhiều mặt: tùy chọn định dạng quyết định xem bạn nhận được bài báo hội nghị hai cột hay bài báo tạp chí một cột.

## Chọn tùy chọn định dạng của bạn

```latex
% Conference proceedings (SIGCHI, SIGPLAN, most SIGs)
\documentclass[sigconf]{acmart}

% Small journal format (TOCE, TAP, ...)
\documentclass[acmsmall]{acmart}

% Large journal format (TOG, ...)
\documentclass[acmlarge]{acmart}
```

`sigconf` là thứ bạn muốn có ở hầu hết mọi hội nghị ACM. CFP của địa điểm nêu tên tùy chọn chính xác; tin tưởng nó hơn thói quen. Nếu bạn vẫn đang quyết định giữa các nhóm địa điểm, [ACM, IEEE và bạn bè](/learn/acm-ieee-and-friends/) sẽ so sánh chúng.

## Siêu dữ liệu là bắt buộc

Không giống như IEEEtran, acmart từ chối nhìn đúng (và nhà xuất bản từ chối chấp nhận nó) nếu không có khối siêu dữ liệu:

```latex
\begin{CCSXML}
... % generated at dl.acm.org/ccs
\end{CCSXML}
\ccsdesc[500]{Software and its engineering~Compilers}

\keywords{compilers, optimization, benchmarks}
```

Các khái niệm CCS đến từ một công cụ chọn trên trang web ACM tạo ra cả dòng XML và dòng `\ccsdesc`. Dán chúng nguyên văn. Từ khóa nằm trong `\keywords`, không phải trong phần tóm tắt. Khối định dạng tham chiếu ACM (hộp trích dẫn màu xám trên trang một) được tạo tự động từ `\acmConference`, `\acmYear` và bạn bè mà nhà xuất bản điền hoặc xác minh vào thời điểm máy ảnh sẵn sàng.

## Gửi mù đôi

Hầu hết các hội nghị ACM đều xem xét ẩn danh. Một tùy chọn xử lý nó:

```latex
\documentclass[sigconf,review,anonymous]{acmart}
```

`anonymous` ẩn tác giả và liên kết, `review` thêm số dòng cho người đánh giá. Tắt cả hai để sẵn sàng cho máy ảnh. Lớp này xử lý các cơ chế, nhưng tính năng ẩn danh còn lớn hơn một lá cờ. Xem [mù đôi được thực hiện đúng](/learn/anonymization-double-blind/).

## Trích dẫn: đánh số hoặc theo năm tác giả

acmart sử dụng natbib bên dưới và hỗ trợ cả hai kiểu:

| Tùy chọn | Kết quả |
|---|---|
| mặc định | Đánh số: [3] |
| `natbib=true` + `\citestyle{acmauthoryear}` | Tác giả-năm: (Lovelace, 1843) |

Một số SIG quy định năm tác giả (theo lịch sử CHI), một số khác được đánh số. Một lần nữa: CFP quyết định.

## Biên soạn những bất ngờ đầu tiên

acmart đang đói gói. Mong đợi những điều này trên một thiết lập mới:

- **Phông chữ Libertine.** Lớp tải Linux Libertine và Biolinum cùng với `newtxmath`. Trên bản cài đặt TeX tối thiểu, chúng sẽ xuất hiện dưới dạng bản tải xuống vào lần đầu tiên bạn biên dịch. Công cụ Tectonic đi kèm của Oleafly tự động tìm nạp chúng trong lần sử dụng đầu tiên, do đó quá trình biên dịch ban đầu mất nhiều thời gian hơn lần thứ hai. Đó là chuyện bình thường, không phải treo đâu.
- **Quy tắc thả nổi nghiêm ngặt.** acmart chặn hoàn toàn một số gói (như `titlesec`) và sẽ báo lỗi nếu bạn tải chúng.
- **`\authorsaddresses{}`** tắt tiếng cằn nhằn ở chân trang "địa chỉ của tác giả" trong bản nháp.

Nếu một gói thực sự không giải quyết được thì cách khắc phục là cách thông thường: [cài đặt gói bị thiếu](/learn/install-missing-package/).

## Lấy ở đâu

Tải xuống mẫu chính thức từ các trang tác giả của acm.org hoặc trang web hội nghị của bạn và luôn cập nhật `acmart.cls`. ACM điều chỉnh nó vài lần trong năm và các bước kiểm tra sẵn sàng cho máy ảnh sẽ chạy theo phiên bản mới nhất.