---

title: "Một bài báo cần bao nhiêu bài toán"
description: "Ký hiệu là độ chính xác, kỷ luật ký hiệu, khi nào cần đánh số phương trình và luôn nhất quán."
category: "paper-anatomy"
order: 9
level: "intermediate"
tags: ["writing", "math"]
featured: false
updated: 2026-07-25
---

# Một bài báo cần bao nhiêu bài toán

Chính xác như yêu cầu của bạn và không thêm một biểu tượng nào nữa. Toán trong một bài báo không phải là một tín hiệu phức tạp; nó là một công cụ chính xác. Những bài viết hay nhất sử dụng ký hiệu trong đó văn xuôi sẽ mơ hồ và văn xuôi ở đó ký hiệu sẽ ồn ào.

## Ký hiệu là độ chính xác, không phải để trang trí

Viết $f: \mathcal{X} \to \mathcal{Y}$ khi người đọc cần biết chính xác tên miền và tên miền. Viết "mô hình ánh xạ hình ảnh tới nhãn" khi không có. Một đoạn văn có thể là tiếng Anh đơn giản nhưng được hiển thị dưới dạng súp ký hiệu trông không chặt chẽ, có vẻ lảng tránh và người đánh giá dịch lại để kiểm tra xem có điều gì thực sự được xác nhận hay không. Trước khi chính thức hóa một tuyên bố, hãy hỏi: phiên bản biểu tượng có loại trừ việc đọc sai phiên bản văn xuôi cho phép không? Nếu không, hãy giữ lại văn xuôi.

## Xác định mọi ký hiệu một lần và không bao giờ xác định lại nó

Trí nhớ làm việc của người đọc là nguồn tài nguyên khan hiếm nhất của bạn. Kỷ luật:

- Giới thiệu từng ký hiệu trong lần sử dụng đầu tiên: “gọi $n$ là số lượng mẫu.”
- Một ý nghĩa cho mỗi ký hiệu cho toàn bộ bài báo. Nếu $\alpha$ là tỷ lệ học trong Phần 3 thì nó không thể là mức ý nghĩa trong Phần 5.
- Đối với những bài viết nặng về ký hiệu, một bảng ký hiệu nhỏ sớm sẽ có ích.

| Thói quen | Tác dụng với người đọc |
|---|---|
| Biểu tượng được xác định ở lần sử dụng đầu tiên | Không bao giờ phải săn lùi |
| Một biểu tượng, một ý nghĩa | Không bao giờ đoán trước bối cảnh |
| Bảng ký hiệu | Có bản đồ cho toàn bộ tờ báo |

## Chỉ đánh số phương trình khi bạn tham chiếu chúng

Một số phương trình là một lời hứa: "chúng tôi sẽ chỉ lại điều này." Việc đánh số mọi thứ sẽ chôn vùi những phương trình quan trọng bên dưới những phương trình không quan trọng.

```latex
\begin{equation}
  \mathcal{L} = \mathcal{L}_{\text{task}} + \lambda \mathcal{L}_{\text{reg}}
  \label{eq:loss}
\end{equation}
```

Tham chiếu nó với `\eqref{eq:loss}`. Để hiển thị phép toán mà bạn không bao giờ trích dẫn, hãy sử dụng `\[ ... \]` hoặc môi trường được gắn dấu sao và bỏ qua số. Cơ chế tham chiếu được đề cập trong [tài liệu tham khảo chéo](/learn/cross-references/).

## Môi trường định lý, trong một hơi thở

Nếu bài viết của bạn chứng minh được điều gì đó, hãy gói gọn các tuyên bố trong môi trường `định lý`, `bổ đề` và `chứng minh` thay vì in đậm "Định lý 1" bằng tay: chúng tự đánh số, tham chiếu chéo rõ ràng và báo hiệu chính xác những gì được khẳng định so với những gì là bình luận. Việc thiết lập và sử dụng có ngay trong [định lý và chứng minh](/learn/theorems-proofs/).

## Sự nhất quán là một nửa trận chiến

Chọn các quy ước và giữ chúng cho toàn bộ bài viết:

- Vectơ in đậm ($\mathbf{x}$) hoặc có mũi tên, không bao giờ cả hai.
- Ma trận in hoa đậm, vô hướng in nghiêng chữ thường.
- Đặt trên bảng đen hoặc thư pháp ($\mathbb{R}$, $\mathcal{D}$), một cách nhất quán.
- Quy ước về hình, bảng giống như trong văn bản.

Macro tùy chỉnh làm cho tính nhất quán trở nên rẻ hơn: xác định `\newcommand{\vx}{\mathbf{x}}` một lần và thay đổi ký hiệu muộn chỉ là chỉnh sửa một dòng thay vì tìm kiếm trên toàn trang giấy.

## Hiệu chỉnh đến địa điểm

Địa điểm lý thuyết mong đợi những tuyên bố chính thức và bằng chứng đầy đủ. Địa điểm được áp dụng yêu cầu thiết lập sự cố rõ ràng và có thể có một chức năng bị mất. Đọc ba bài báo được chấp nhận từ địa điểm mục tiêu của bạn và phù hợp với mật độ của chúng. Để biết cơ chế viết bất kỳ nội dung nào trong số đó, hãy bắt đầu với [chế độ toán học](/learn/math-mode/) và giữ [báo cáo ký hiệu toán học](/learn/math-symbols-cheatsheet/) mở trong một tab.