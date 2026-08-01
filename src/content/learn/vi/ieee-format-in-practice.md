---

title: "Định dạng IEEE trong thực tế"
description: "Chế độ hội nghị và tạp chí của IEEEtran, khối tác giả và các vấn đề hai cột."
category: "venue-formats"
order: 2
level: "intermediate"
tags: ["venues", "ieee"]
featured: false
updated: 2026-07-25
---

# Định dạng IEEE trong thực tế

Các địa điểm của IEEE, từ các hội thảo nhỏ đến các tạp chí hàng đầu, đều chia sẻ một tệp lớp: `IEEEtran`. Tìm hiểu nó một lần và hàng trăm địa điểm sẽ mở ra.

## Chế độ hội nghị và tạp chí

Cùng một lớp tạo ra các bố cục khác nhau tùy thuộc vào các tùy chọn:

```latex
% Conference paper
\documentclass[conference]{IEEEtran}

% Journal article
\documentclass[journal]{IEEEtran}
```

Chế độ hội nghị mang đến cho bạn giao diện cổ điển: Thời gian 10pt, hai cột, không có số trang theo mặc định. Chế độ nhật ký thay đổi bố cục tiêu đề, thêm tiểu sử tác giả ở cuối và điều chỉnh khoảng cách. Luôn sử dụng chế độ mà địa điểm của bạn yêu cầu, chúng không thể thay thế cho nhau. Để có sự so sánh rộng hơn giữa IEEE và ACM, hãy xem [ACM, IEEE và bạn bè](/learn/acm-ieee-and-friends/).

## Tác giả theo cách của IEEE

Chế độ hội nghị có đánh dấu tác giả riêng. Đừng đấu tranh với nó bằng `\\` và căn giữa thủ công:

```latex
\author{
  \IEEEauthorblockN{Ada Lovelace}
  \IEEEauthorblockA{Analytical Engines Lab\\
  University of London\\
  ada@example.edu}
  \and
  \IEEEauthorblockN{Charles Babbage}
  \IEEEauthorblockA{Department of Mathematics\\
  University of Cambridge\\
  cb@example.edu}
}
```

`\IEEEauthorblockN` chứa tên, `\IEEEauthorblockA` chứa các liên kết và `\and` phân tách các tác giả thành các cột.

## Sống với hai cột

Bố cục hai cột là nơi mà những người lần đầu gặp khó khăn. Các quy tắc:

| Vấn đề | Sửa chữa |
|---|---|
| Hình hoặc bàn rộng | Sử dụng `figure*` / `table*`, nổi lên đầu trang |
| Phương trình dài tràn | Hãy phá vỡ nó, xem chiến thuật hai cột trong [một hoặc hai cột](/learn/one-column-or-two/) |
| Các cột ở trang cuối không đồng đều | Cân bằng chúng theo cách thủ công với gói `\IEEEtriggeratref` hoặc gói `balance` |
| URL chạy vào lề | `\usepackage{url}` hoặc `xurl` để phân tích tốt hơn |

Môi trường thả nổi được gắn dấu sao là không thể thương lượng đối với nội dung rộng:

```latex
\begin{figure*}[t]
  \centering
  \includegraphics[width=\textwidth]{pipeline}
  \caption{Full-width figures need the starred environment.}
\end{figure*}
```

Lưu ý rằng `figure*` từ chối vị trí `[h]`, nó luôn nổi lên đầu trang. Lập kế hoạch cho điều đó thay vì chiến đấu với nó.

## Thư mục

IEEE sử dụng các trích dẫn số với kiểu BibTeX riêng:

```latex
\bibliographystyle{IEEEtran}
\bibliography{references}
```

`IEEEtran.bst` phù hợp đi kèm với lớp. Đừng thay thế `plain` hoặc `ieeetr`, người đánh giá lưu ý và danh sách kiểm tra sẵn sàng cho máy ảnh sẽ bắt được nó.

## Lấy mẫu thật ở đâu

Luôn bắt đầu từ nguồn chính thức: Bộ chọn Mẫu của IEEE tại ieee.org hoặc trang bộ công cụ tác giả của chính hội nghị. Những người tổ chức hội nghị đôi khi vá mẫu (thông báo bản quyền, phần chân trang bổ sung), để phiên bản của địa điểm giành chiến thắng trước một bản sao chung. [Thư viện mẫu](/templates/) của Oleafly bao gồm một công cụ khởi động hội nghị kiểu IEEE được biên dịch ngay lập tức trên công cụ Tectonic đi kèm, tiện dụng cho việc soạn thảo trước khi bạn cài đặt bộ công cụ chính thức.

## Danh sách kiểm tra các vấn đề phổ biến

- Biên dịch với mã tương thích với pdfLaTeX, IEEEtran có trước fontspec và mong đợi các công cụ cổ điển
- Không thêm `hình học` hoặc thay đổi lề, lớp đặt chính xác
- Cần có `\IEEEpeerreviewmaketitle` sau `\maketitle` trong một số bài nộp tạp chí
- Nếu mẫu bị lỗi trên máy của bạn, hãy phân loại nó như bất kỳ [mẫu bị hỏng](/learn/fix-broken-template/)