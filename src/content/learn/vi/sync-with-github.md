---

title: "Đưa bài báo lên GitHub"
description: "Ban đầu, bỏ qua các tập tin phụ trợ, kho lưu trữ riêng tư, các thói quen giúp việc hợp nhất đồng tác giả trở nên lành mạnh."
category: "local-studio"
order: 3
level: "intermediate"
tags: ["git", "github"]
featured: false
updated: 2026-07-25
---

# Đưa bài viết lên GitHub

Bản thảo LaTeX là văn bản thuần túy, điều này làm cho nó phù hợp lý tưởng với Git. Mọi bản nháp đều trở thành một cam kết mà bạn có thể quay lại, mọi thay đổi đều hiển thị dưới dạng khác biệt ở cấp độ dòng và GitHub cung cấp cho bạn một bản sao ngoại vi cùng với một cách để đồng tác giả lấy trạng thái hiện tại. Không có điều nào trong số này yêu cầu Git nâng cao. Một bài viết có lẽ cần năm lệnh, được sử dụng nhất quán.

## Thiết lập ban đầu

```bash
git init
# add a .gitignore for *.aux *.log *.out *.toc *.synctex.gz
git add main.tex refs.bib figures/
git commit -m "Initial manuscript"
gh repo create my-paper --private --source=. --push
```

Chạy cái này một lần trong thư mục dự án. Bước .gitignore` quan trọng hơn vẻ ngoài của nó. Mỗi trình biên dịch sẽ tạo lại các tệp `.aux`, `.log`, `.out`, `.toc` và `.synctex.gz`, đồng thời cam kết chúng chôn vùi những thay đổi thực sự của bạn dưới tiếng ồn của máy và tạo ra xung đột hợp nhất vô nghĩa giữa các đồng tác giả. Chỉ theo dõi những gì bạn là tác giả: nguồn `.tex`, cơ sở dữ liệu `.bib`, số liệu và bất kỳ tệp lớp hoặc kiểu nào mà địa điểm đã cung cấp cho bạn. PDF cũng là một sản phẩm xây dựng. Hầu hết các nhóm đều loại bỏ nó và xây dựng lại cục bộ, mặc dù việc đính kèm một bản vào bản phát hành được gắn thẻ là cách hợp lý để đóng băng phiên bản đã gửi. Giữ kho lưu trữ ở chế độ riêng tư cho đến khi tác phẩm được công khai. Một bản thảo chưa được xuất bản không phải là thứ để lập chỉ mục.

## Những thói quen giúp đồng tác giả tỉnh táo

Thực hiện mỗi cam kết một thay đổi hợp lý, chẳng hạn như "sửa đổi phần giới thiệu phần 3" hoặc "thêm bảng cắt bỏ". Sau đó, lịch sử sẽ được đọc như một câu chuyện của tờ báo và một chỉnh sửa tồi có thể được hoàn nguyên mà không gây thiệt hại tài sản thế chấp. Kéo trước khi bạn bắt đầu phiên viết và đẩy khi bạn dừng lại. Xung đột hợp nhất gia tăng theo thời gian các nhánh tách ra. Đừng bao giờ ép buộc một nhánh chung khi các đồng tác giả đã kéo nó: điều đó sẽ viết lại lịch sử dưới chân họ. Giữ các tạo phẩm nhị phân lớn (bộ dữ liệu, video) ra khỏi kho lưu trữ giấy. Liên kết tới kho lưu trữ hoặc sử dụng kho lưu trữ dữ liệu riêng. Git lưu trữ mọi phiên bản của mọi tệp nhị phân mãi mãi.

Một thói quen dành riêng cho LaTeX: viết một câu trên mỗi dòng nguồn làm cho các khác biệt dễ đọc hơn đáng kể, bởi vì chỉnh sửa một từ hiển thị dưới dạng thay đổi một dòng thay vì một đoạn được chỉnh lại.

## Oleafly phù hợp như thế nào

Mỗi dự án Oleafly là một thư mục bình thường trên đĩa, vì vậy các lệnh này hoạt động trên đó không thay đổi. Ứng dụng cũng có thể tự động tạo một cam kết Git sau mỗi lần biên dịch thành công, điều này mang lại cho bạn một mạng lưới an toàn chi tiết giữa các cam kết có chủ ý của bạn. Xem [Lịch sử Git](/docs/git-history/). Để biết các mô hình cộng tác được xây dựng dựa trên điều này, bao gồm trao đổi bản vá và quyền sở hữu chương, hãy xem [Đồng tác giả không có con trỏ trực tiếp](/learn/offline-collaboration/).