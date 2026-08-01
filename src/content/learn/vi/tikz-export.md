---

title: "TikZ độc lập sang PDF hoặc PNG"
description: "lớp độc lập và bộ đệm bên ngoài."
category: "draw-in-tex"
order: 5
level: "intermediate"
tags: ["tikz"]
featured: false
updated: 2026-07-25
---

# TikZ độc lập sang PDF hoặc PNG

Hình ảnh TikZ thường tồn tại bên trong một tờ giấy, nhưng bạn thường cần sơ đồ dưới dạng tệp riêng: để sử dụng lại nó trong một bản trình chiếu, giao nó cho đồng tác giả làm việc trong Word, tải nó lên khi cần có PNG hoặc đơn giản là để tránh biên dịch lại một bản vẽ đắt tiền trên mỗi bản dựng tài liệu. Lớp tài liệu `độc lập` tồn tại chính xác cho việc này. Nó sắp xếp một hình ảnh trên một trang được cắt theo kích thước của hình ảnh:

```latex
\documentclass[tikz,border=2pt]{standalone}
\begin{document}
\begin{tikzpicture}
 \draw (0,0) -- (1,1);
\end{tikzpicture}
\end{document}
```

## Tùy chọn lớp làm gì

Tùy chọn `tikz` tải gói TikZ cho bạn và yêu cầu `standalone` cắt trang đầu ra thật chặt xung quanh `tikzpicture`, do đó, tệp PDF thu được có kích thước chính xác bằng bản vẽ, không có lề trang. Tùy chọn `border=2pt` thêm phần đệm hai điểm ở tất cả các cạnh, giúp ngăn các nét nằm chính xác trên hộp giới hạn khỏi bị người xem hoặc máy in loại bỏ. Biên dịch tệp này giống như bất kỳ tài liệu nào và đầu ra là một tệp PDF nhỏ, được cắt xén chặt chẽ chỉ chứa sơ đồ.

Thích bản PDF đó hơn vì nó là vectơ: nó có tỷ lệ theo bất kỳ kích thước nào mà không bị mờ. Việc thả nó vào một tài liệu khác có `\includegraphics` hoạt động như được mô tả trong [trang PDF dưới dạng đồ họa](/learn/include-pdf-as-figure/). Khi thực sự cần một bản sao raster, hãy chuyển đổi tệp PDF đã biên dịch thay vì tạo lại bản vẽ. Các công cụ dòng lệnh như `pdftoppm -png -r 300 figure.pdf figure` tạo ra PNG 300 dpi và `pdf2svg` hoặc Inkscape tạo ra SVG. Xuất ở tốc độ 300 dpi trở lên nếu PNG sẽ được in.

## Lưu ảnh vào bộ nhớ đệm bằng ngoại vi

Bên trong một tài liệu lớn, các hình ảnh TikZ được vẽ lại trong mỗi lần biên dịch và một số biểu đồ phức tạp có thể chi phối thời gian xây dựng. Thư viện `external` khắc phục điều này bằng cách biên dịch từng ảnh thành tệp PDF của chính nó một lần, sau đó sử dụng lại tệp đã lưu trong bộ nhớ đệm cho đến khi mã của ảnh thay đổi:

```latex
\usetikzlibrary{external}
\tikzexternalize[prefix=tikz-cache/]
```

Tùy chọn `tiền tố` giữ các tệp được tạo trong thư mục riêng của chúng. Bên ngoài chạy trình biên dịch ở chế độ tạo ra các biên dịch phụ, do đó, nó cần bật tính năng thoát shell và tương tác kém với một số thiết lập. Nếu nó gây khó chịu cho bạn, hãy di chuyển từng bức ảnh lớn vào tệp `độc lập` của riêng nó và bao gồm các tệp PDF đã biên dịch. Điều đó mang lại cho bạn bộ nhớ đệm tương tự bằng tay, với ít máy móc hơn. Thời gian biên dịch nói chung được đề cập trong [chờ bản PDF ngắn hơn](/learn/speed-up-compilation/).

Một lỗi phổ biến đáng được cảnh báo: không chụp ảnh màn hình sơ đồ được hiển thị để lấy PNG. Ảnh chụp màn hình chụp độ phân giải màn hình, trông có thể chấp nhận được khi xem trước trang chiếu và mờ ở mọi nơi khác. Chuyển đổi từ PDF, trong đó độ phân giải là do bạn lựa chọn.