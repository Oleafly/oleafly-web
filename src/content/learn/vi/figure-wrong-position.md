---

title: "Hình người chạy trốn khỏi phần"
description: "Rào cản nổi, kích thước và vị trí lựa chọn cuối cùng."
category: "float-surgery"
order: 5
level: "intermediate"
tags: ["figures", "errors"]
featured: false
updated: 2026-07-25
---

# Hình người chạy trốn khỏi phần

Bạn đặt một hình ở cuối Phần 4 và nó in ra ở giữa Phần 5, hoặc xếp chồng lên ba hình khác ở cuối chương. Các hình là các số float: LaTeX coi vị trí của chúng trong nguồn là điểm bắt đầu chứ không phải đích và di chuyển chúng để giữ cho các trang luôn đầy. Các phao cũng phải xuất hiện theo thứ tự, vì vậy một hình không thể đặt sẽ chặn mọi hình phía sau nó. Hệ thống sắp xếp chung được đề cập đến [nơi phao thực sự hạ cánh](/learn/position-figures/). Bài học này là bậc thang leo thang khi phao kết thúc ở một nơi nào đó mà bạn không thể chấp nhận được.

## Bước một: kiểm tra các tùy chọn vị trí

Đảm bảo môi trường chỉ nói `[htbp]` chứ không phải chỉ `[h]`. Các chữ cái cấp quyền đặt float ở đây, ở đầu trang, ở cuối hoặc trên một trang float chuyên dụng. Chỉ cấp `h` là nguyên nhân phổ biến nhất dẫn đến số chạy trốn, bởi vì khi trang hiện tại không còn chỗ trống, LaTeX không có vị trí hợp pháp ở bất kỳ đâu và chuyển số float về phía trước vô thời hạn.

## Bước hai: di chuyển mã

Một chiếc phao có thể trôi muộn hơn vị trí nguồn của nó nhưng không bao giờ sớm hơn. Nếu hình xuất hiện quá muộn, hãy di chuyển môi trường lên trong nguồn, lý tưởng nhất là ngay trước đoạn chứa `\ref` đầu tiên của nó. Bản chỉnh sửa này khắc phục được một số khiếu nại về vị trí đáng ngạc nhiên.

## Bước ba: rào phần

Gói `placeins` cung cấp `\FloatBarrier`, một lệnh buộc tất cả các float đang chờ xử lý phải được đặt trước khi văn bản tiếp tục:

```latex
\usepackage{placeins}
% ...
\FloatBarrier
\section{Next section}
```

Đặt rào chắn ở cuối phần và không hình nào từ phần đó có thể rò rỉ sang phần tiếp theo. LaTeX có thể chèn thêm không gian theo chiều dọc để sắp xếp các phần nổi, thường là mức giá có thể chấp nhận được khi gần phần ngắt.

## Bước bốn: búa H

Gói `float` thêm một công cụ xác định `H` viết hoa để loại bỏ hoàn toàn phần nổi:

```latex
\usepackage{float}
\begin{figure}[H]
```

Hình `[H]` in chính xác vị trí mã của nó, giống như một đoạn văn lớn. Cái giá phải trả là LaTeX không còn có thể cân bằng trang xung quanh nó nữa, do đó bạn có thể có một khoảng trống lớn khi hình không vừa với khoảng trống còn lại. Hãy coi đó là giải pháp cuối cùng cho một hoặc hai phao cứng đầu, không phải là vỡ nợ.

## Bước năm: thu nhỏ hình

Các float rất lớn bị trì hoãn vì ít trang có chỗ cho chúng. Việc giảm `width=0.9\textwidth` thành `0.7\textwidth` hoặc cắt bớt khoảng trắng khỏi tệp hình ảnh, thường cho phép LaTeX đặt một hình mà nó đã đẩy đến cuối chương.

Một thói quen đáng lưu giữ: thực hiện điều chỉnh này một lần, sau khi văn bản ổn định. Mỗi đoạn văn bạn thêm hoặc xóa sẽ xáo trộn lại các trang, do đó, việc sắp xếp vị trí trong quá trình soạn thảo là nỗ lực bạn sẽ làm lại.