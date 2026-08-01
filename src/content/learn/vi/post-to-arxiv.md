---

title: "Đăng bản in trước arXiv đầu tiên của bạn"
description: "Xác nhận, danh mục, làm sạch nguồn, giấy phép và chu trình thông báo."
category: "ship-your-paper"
order: 3
level: "intermediate"
tags: ["arxiv", "preprint", "publishing"]
featured: false
updated: 2026-07-25
---

# Đăng bản in trước arXiv đầu tiên của bạn

Đăng lên arXiv giúp tác phẩm của bạn được công khai, có thể trích dẫn và được gắn dấu thời gian. Quá trình này có một số điều kỳ quặc khiến mọi người phải ngạc nhiên ngay lần đầu tiên. Nếu bạn chưa đọc [arXiv là gì](/learn/what-is-arxiv/), hãy bắt đầu từ đó rồi quay lại.

## Xác nhận: người gác cửa

Những người gửi hoàn toàn mới trong hầu hết các danh mục cần có sự chứng thực từ tác giả arXiv đã thành danh. Nếu tài khoản của bạn sử dụng email học thuật và bạn có đồng tác giả có lịch sử arXiv, việc này thường diễn ra tự động hoặc nhanh chóng. Nếu không, hãy hỏi cố vấn của bạn hoặc đồng tác giả; hệ thống cung cấp cho bạn mã chứng thực để gửi chúng. Hãy sắp xếp điều này vài ngày trước khi bạn định đăng bài chứ không phải vào đêm hôm đó.

## Chọn danh mục của bạn

arXiv được tổ chức thành các danh mục được kiểm duyệt như `cs.LG` (học máy), `cs.CL` (tính toán và ngôn ngữ), `math.OC` (tối ưu hóa), `stat.ML`. Bạn chọn một danh mục chính và tùy chọn một số danh mục phụ. Tra cứu nơi các giấy tờ bạn trích dẫn trực tiếp và theo dõi chúng. Danh mục chính xác định danh sách gửi thư nào thông báo bài viết của bạn, do đó, nó quyết định ai sẽ nhìn thấy bài viết đó trước tiên.

## arXiv muốn nguồn của bạn chứ không phải bản PDF của bạn

Đây là cái lớn. Nếu bài viết của bạn được tạo bằng LaTeX, arXiv yêu cầu nguồn LaTeX chứ không chỉ là bản PDF. Hệ thống AutoTeX của họ biên dịch nó trên máy chủ của họ và bản dựng đó là thứ mà độc giả tải xuống. Hậu quả:

- Mọi tệp mà bài viết của bạn cần phải có trong tệp tải lên: số liệu, tệp `.bbl` (arXiv không chạy BibTeX cho bạn, vì vậy hãy bao gồm các tệp `.bbl` được tạo), các tệp kiểu không chuẩn.
- Nếu nó không biên dịch được trên hệ thống của họ thì bạn sửa cho đến khi nó biên dịch được.

## Làm sạch nguồn của bạn trước

Nhận xét của bạn được gửi cùng với nguồn của bạn và bất kỳ ai cũng có thể tải xuống. Bản nháp ghi chú có nội dung `% TODO: tuyên bố này có đúng không?` sẽ được công khai. Trước khi tải lên:

- [ ] Loại bỏ bình luận. Công cụ `arxiv-latex-cleaner` tự động hóa việc này và cũng loại bỏ các tệp không sử dụng.
- [ ] Xóa các hình và phần cũ không sử dụng
- [ ] Kiểm tra tên tập tin đáng xấu hổ (`final_v7_ACTUALLY_final.tex`)
- [ ] Biên dịch bản sao đã được làm sạch từ đầu một lần

Làm việc từ một dự án được Git hỗ trợ sẽ giúp ích ở đây: trong Oleafly, bạn có thể phân nhánh một điểm kiểm tra, làm sạch nguồn và phân biệt với bản gốc để xác nhận không có thay đổi đáng kể nào trước khi xuất ZIP.

## Giấy phép

arXiv yêu cầu bạn chọn giấy phép. Giấy phép tối thiểu chỉ dành cho arXiv là giấy phép mặc định chung và giữ cho các tùy chọn của bạn luôn mở với các tạp chí. CC BY dễ dãi hơn. Nếu bài báo được gửi đến một nhà xuất bản cụ thể, hãy kiểm tra chính sách in trước của họ trước khi chọn bất kỳ thứ gì không thể hủy ngang.

## Chu kỳ thông báo và văn hóa dân gian của nó

arXiv công bố các bài báo mới theo đợt, theo lịch cố định các ngày trong tuần với thời hạn nộp bài. Các bài báo được gửi ngay sau thời điểm giới hạn sẽ xuất hiện ở đầu danh sách tiếp theo và một ngành tiểu thủ công nghiệp nhỏ về văn hóa dân gian tuyên bố các bài báo đứng đầu danh sách sẽ nhận được nhiều sự chú ý hơn. Có lẽ. Đừng mất ngủ vì nó; một bản tóm tắt tốt quan trọng hơn nhiều so với vị trí trong danh sách.

## Phiên bản: v1, v2 và sau khi được chấp nhận

Bài đăng đầu tiên của bạn là v1 và nó là vĩnh viễn: bạn có thể thêm phiên bản nhưng không bao giờ xóa chúng. Đăng v2 khi bạn có những cải tiến thực sự, thường là phiên bản được chấp nhận sau [đánh giá ngang hàng](/learn/peer-review-explained/). Sau khi được chấp nhận, hãy cập nhật bản sao arXiv với nội dung sẵn sàng cho máy ảnh (tôn trọng chính sách của nhà xuất bản) và thêm DOI hoặc địa điểm vào trường tham chiếu tạp chí. Người đọc sẽ cảm ơn bạn vì điều đó.