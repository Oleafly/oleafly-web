---

title: "Các định dạng Springer, Elsevier và LNCS"
description: "llncs, tạp chí Springer Nature và elsarticle: các lớp một cột và nguồn sẵn sàng cho máy ảnh."
category: "venue-formats"
order: 4
level: "intermediate"
tags: ["venues", "publishers"]
featured: false
updated: 2026-07-25
---

# Định dạng Springer, Elsevier và LNCS

Bên ngoài hệ sinh thái IEEE và ACM, hai nhà xuất bản chiếm ưu thế: Springer (bao gồm Springer Nature) và Elsevier. Các lớp học của họ trông đơn giản hơn so với kiểu hội nghị hai cột và đó là do thiết kế. Nhà xuất bản sắp chữ bản cuối cùng.

## LNCS: công cụ tố tụng

Nếu hội nghị của bạn xuất bản trong Bài giảng về Khoa học Máy tính (hoặc các anh chị em của nó là LNAI và LNBI), bạn viết bằng `llncs`:

```latex
\documentclass{llncs}
\usepackage{graphicx}

\title{Contribution Title}
\author{Ada Lovelace\inst{1} \and Charles Babbage\inst{2}}
\institute{University of London \and University of Cambridge}
```

Các bài viết của LNCS là một cột duy nhất, sử dụng chỉ số trên `\inst{}` để liên kết các tác giả với các viện và có ngân sách trang mặc định cực kỳ chặt chẽ (thường từ 12 đến 16 trang bao gồm cả tài liệu tham khảo). Lớp này không có trong mọi bản phân phối TeX theo mặc định. Tải xuống bộ tác giả từ trang LNCS của Springer. Phong cách thư mục của nó là `splncs04`:

```latex
\bibliographystyle{splncs04}
\bibliography{references}
```

## Tạp chí thiên nhiên Springer

Các tạp chí Springer trước đây đã sử dụng `svjour3` và đã chuyển sang lớp `sn-jnl` mới hơn với các tùy chọn kiểu cho mỗi họ tạp chí (`sn-mathphys-num`, `sn-basic` và các loại khác). Trang "Hướng dẫn gửi bài" của tạp chí nêu tên chính xác lớp và tùy chọn. Đừng đoán: hai tạp chí Springer có thể muốn có các lớp khác nhau.

## Elsevier: elsarticle

Các tạp chí Elsevier chia sẻ một lớp, `elsarticle`:

```latex
\documentclass[preprint,12pt]{elsarticle}
% later: \documentclass[final,3p,twocolumn]{elsarticle}
```

Tùy chọn `preprint` cung cấp một cột đơn cách đều nhau rộng rãi để xem xét và `cuối cùng` với `1p`, `3p` hoặc `5p` bắt chước bố cục in của tạp chí. Kiểu thư mục là `elsarticle-num` (được đánh số) hoặc `elsarticle-harv` (năm tác giả), phù hợp với những gì tạp chí sử dụng.

## So sánh nhanh

| Nhà xuất bản | Lớp | Cột | Kiểu yếm |
|---|---|---|---|
| Springer LNCS | `llncs` | một | `splncs04` |
| Tạp chí thiên nhiên Springer | `sn-jnl` (là `svjour3`) | một | tùy chọn mỗi tạp chí |
| Khác | `bài viết` | một (đánh giá) | `elsarticle-num` / `-harv` |

## Tại sao lại là một cột? Bởi vì bạn không phải là người sắp chữ

Các lớp này hiển thị *bản thảo* của bạn chứ không phải trang cuối cùng. Nhóm sản xuất của nhà xuất bản sắp chữ lại các bài báo đã được chấp nhận vào bố cục nhà của tạp chí. Đó cũng là lý do tại sao "tải lên nguồn sẵn sàng cho máy ảnh" ở đây có nghĩa là một cái gì đó cụ thể: bạn tải lên các tệp `.tex`, `.bib` và figure, chứ không chỉ là tệp PDF, để quá trình sản xuất có thể xây dựng lại và định dạng lại giấy. Hậu quả thực tế:

- Giữ nguồn sạch và có thể biên dịch được từ lần kiểm tra mới: không có đường dẫn tuyệt đối, không thiếu số liệu
- Không hack khoảng cách, lề. Dù sao thì việc sản xuất cũng loại bỏ nó (và nó có thể [bị gắn cờ](/learn/page-limits-without-crimes/))
- Sử dụng gói tiêu chuẩn. Những nội dung kỳ lạ sẽ được nhà sản xuất viết lại hoặc trả lại cho bạn

Các lớp này dựa trên một số lượng lớn các gói, do đó, một bản cài đặt tối thiểu có thể lấy một số gói trong lần biên dịch đầu tiên. Nếu một gói từ chối xuất hiện, hãy xem [cài đặt các gói bị thiếu](/learn/install-missing-package/). Nếu mẫu bị lỗi hoàn toàn, hãy phân loại nó như bất kỳ [mẫu bị hỏng](/learn/fix-broken-template/).