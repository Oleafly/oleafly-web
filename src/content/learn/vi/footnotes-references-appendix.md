---

title: "Chú thích, tài liệu tham khảo và phụ lục: ai làm gì"
description: "Mỗi phần phụ, bằng chứng và tài liệu tràn đều thuộc về nơi nào và ai thực sự đọc chúng."
category: "paper-anatomy"
order: 6
level: "beginner"
tags: ["writing", "structure", "citations"]
featured: false
updated: 2026-07-25
---

# Chú thích, tài liệu tham khảo và phụ lục: ai làm gì

Một bài báo có ba vị trí để đặt những nội dung không thuộc luồng chính và mỗi vị trí có một công việc riêng biệt. Đặt nội dung phù hợp vào đúng vị trí và người đọc luôn được định hướng. Trộn chúng lại và tờ giấy của bạn trông giống như một ngăn kéo đựng rác.

## Chú thích: lịch sự sang một bên

Chú thích cuối trang dành cho điều gì đó đáng nói nhưng không đáng để ngắt câu vì: URL, lời làm rõ, lời cảnh báo, "chúng tôi cảm ơn người đánh giá vì nhận xét này".

```latex
We use the standard split.\footnote{Available at
\url{https://example.org/data}.}
```

Sử dụng chúng một cách tiết kiệm. Một bài báo có chú thích cho mỗi đoạn văn là một bài báo đang tranh luận với chính nó. Nếu nội dung là cần thiết, hãy quảng bá nó vào văn bản. Nếu nó là tác phẩm có thể trích dẫn trước đó thì thay vào đó nó thuộc về tài liệu tham khảo. Và một số địa điểm cấm chú thích cuối trang cho các URL có lợi cho các trích dẫn thích hợp, vì vậy hãy kiểm tra mẫu.

## Tài liệu tham khảo: dấu vết bằng chứng

Khi bạn trích dẫn một tác phẩm, bạn đang chỉ ra bằng chứng đằng sau một tuyên bố: thực tế này được thiết lập ở đó, phương pháp này được họ giới thiệu, tập dữ liệu này đến từ đây. Danh sách tham khảo là bản đồ đầy đủ về những người mà bạn đang xây dựng và những người đánh giá sẽ kiểm tra nó một cách cẩn thận, cả những mục bị thiếu lẫn những tuyên bố được ghim vào các trích dẫn không thực sự hỗ trợ chúng.

Trong LaTeX, cơ chế này diễn ra tự động: `\cite{key}` trong văn bản, một mục nhập trong tệp `.bib` của bạn và danh sách sẽ tự hiển thị.

```latex
Transformers \cite{vaswani2017attention} replaced recurrence
with attention.
```

Quy trình làm việc đầy đủ bao gồm [thêm trích dẫn](/learn/add-cites/) và [tạo thư mục](/learn/create-bibliography/). Oleafly có thể điền vào mục nhập `.bib` từ tra cứu DOI, điều này đánh bại danh sách tác giả gõ tay.

## Phụ lục: phòng tràn

Phụ lục chứa tài liệu hỗ trợ bài viết nhưng sẽ phá vỡ dòng chảy của nó: bằng chứng đầy đủ, bảng kết quả bổ sung, lưới siêu tham số, mẫu nhắc nhở, tài liệu tập dữ liệu. Quy tắc là giấy chính phải đứng một mình. Một độc giả chưa bao giờ mở phụ lục vẫn nên bị thuyết phục; người đọc mở nó ra sẽ tìm thấy mọi chi tiết mà họ đã hứa.

```latex
\appendix
\section{Full proofs}
```

Sau `\appendix`, các phần sẽ tự động ký tự A, B, C.

## Tài liệu bổ sung: ngoài bản PDF

Tài liệu bổ sung là mọi thứ không thể có trong PDF: mã, dữ liệu, video, bản trình diễn tương tác. Nhiều địa điểm thu thập nó dưới dạng tải lên riêng biệt với giới hạn kích thước riêng. Hãy coi nó như một phần của câu chuyện về khả năng tái tạo của bạn và tham chiếu nó một cách rõ ràng từ phần phương pháp để người đọc biết nó tồn tại.

## Ai thực sự đọc những gì

| Phần | Hành vi của người đánh giá |
|---|---|
| Chú thích | Đọc lướt qua, quên nhanh |
| Tài liệu tham khảo | Quét tìm công việc còn thiếu, đặc biệt là của riêng họ |
| Phụ lục | Được mở khi một yêu cầu trong bài báo cần được kiểm tra |
| Bổ sung | Được mở bởi một người đánh giá chạy mã của bạn |

Điều đó có nghĩa là gì trong thực tế: không bao giờ giấu bất cứ điều gì cần thiết trong chú thích cuối trang hoặc phụ lục. Người đánh giá đánh giá văn bản chính và "câu trả lời nằm ở Phụ lục F" chưa một lần đánh giá nhẹ nhàng. Đặt tài liệu tốt nhất của bạn ở nơi người đọc lướt sẽ tìm thấy nó và để phần sau làm những gì nó làm tốt nhất: lặng lẽ giữ biên lai.