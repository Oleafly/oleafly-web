---

title: "Văn bản bị mờ trong trình xem PDF"
description: "Loại 3 bitmap, phông chữ phác thảo, hình vector."
category: "typefaces"
order: 3
level: "intermediate"
tags: ["fonts", "errors"]
featured: false
updated: 2026-07-25
---

# Văn bản mờ trong trình xem PDF

Bản PDF của bạn được biên dịch rõ ràng nhưng văn bản trông mềm mại hoặc lởm chởm trên màn hình và việc phóng to khiến nó tệ hơn thay vì tốt hơn. Không có gì sai với người xem của bạn. Tài liệu chứa phông chữ bitmap. Thay vì lưu trữ các hình dạng chữ cái dưới dạng đường viền có thể mở rộng, nó lưu trữ chúng dưới dạng lưới pixel được hiển thị ở một độ phân giải cố định. Trong thuật ngữ PDF, đây là phông chữ Loại 3. Chúng in ở mức chấp nhận được trên giấy ở độ phân giải mà chúng được tạo ra, đó là lý do tại sao vấn đề vẫn tồn tại trong nhiều thập kỷ, nhưng trên màn hình, chúng bị mờ ở bất kỳ mức thu phóng nào khác với mức thu phóng gốc. Các định dạng phác thảo hiện đại (Loại 1, TrueType, OpenType) có tỷ lệ rõ ràng vì các hình dạng là các đường cong toán học.

## Xác nhận chẩn đoán

Thu phóng là bài kiểm tra nhanh: phông chữ phác thảo luôn sắc nét ở mức 800 phần trăm, bitmap hòa tan thành các pixel hiển thị. Để chắc chắn, hãy mở thuộc tính tài liệu trong trình xem PDF của bạn và xem bảng phông chữ. Trong Adobe Reader, phông chữ này nằm trong Tệp, rồi Thuộc tính, rồi Phông chữ và bất kỳ phông chữ nào được liệt kê là "Loại 3" đều là ảnh bitmap. Việc kiểm tra này quan trọng hơn cả tính thẩm mỹ, vì arXiv và nhiều nhà xuất bản từ chối các bài gửi có chứa phông chữ Loại 3.

## Nguồn gốc của bitmap và cách khắc phục

Nguồn thông thường là thiết lập phông chữ cũ. Các bản cài đặt TeX rất cũ đã biến Máy tính Hiện đại thông qua METAFONT thành bitmap và một số gói cũ cũng như ngăn xếp kỷ nguyên `\usepackage{times}` cổ xưa vẫn chứa các biến thể bitmap. Khắc phục bằng cách thay thế các lệnh phông chữ cũ bằng ngăn xếp hiện đại:

```latex
\usepackage{newtxtext,newtxmath}
```

Điều đó đưa ra một phác thảo Thời gian với phép toán phù hợp, như được trình bày chi tiết trong [các ngăn xếp Thời gian, Arial, giống Helvetica](/learn/times-arial-helvetica/). Nếu bạn muốn giao diện mặc định thay vì Times, `\usepackage{lmodern}` đổi Computer Modern thành giao diện kế thừa phác thảo của nó, Latin Modern. Việc biên dịch bằng XeLaTeX hoặc LuaLaTeX và `fontspec` hoàn toàn tránh được vấn đề, vì các công cụ đó sử dụng phông chữ hệ thống OpenType được phác thảo theo cấu trúc. Một công cụ hiện đại như Tectonic dựa trên XeTeX mà Oleafly đóng gói không tự tạo ra văn bản Loại 3; khi nó xuất hiện ở đó, phông chữ bitmap sẽ xuất hiện thông qua đồ họa đi kèm.

## Phiên bản hình của bài toán tương tự

Văn bản mờ trong PDF không phải lúc nào cũng là phông chữ của tài liệu. Nếu các đoạn văn sắc nét nhưng các nhãn bên trong ô bị mờ thì bản thân hình đó là hình ảnh raster, thường là ảnh chụp màn hình PNG của ô hoặc sơ đồ được xuất ở độ phân giải màn hình. Cách giải quyết là ý tưởng tương tự khi nâng cấp: xuất các số liệu dưới dạng vector PDF từ công cụ vẽ đồ thị, để văn bản của chúng cũng có đường viền. Hướng dẫn định dạng có trong [thả hình](/learn/insert-image/).

Sau khi khắc phục xong, hãy kiểm tra lại bảng phông chữ thay vì tin vào mắt bạn ở chế độ thu phóng mặc định. Chỉ một mục Loại 3 bị bỏ lại bởi một hình hoặc một gói là đủ để trả lại bài gửi.