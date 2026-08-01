---

title: "Danh sách từ viết tắt và ký hiệu"
description: "bảng thuật ngữ-bản phác thảo bổ sung hoặc danh sách được xây dựng bằng tay khi đủ."
category: "long-form"
order: 4
level: "intermediate"
tags: ["thesis"]
featured: false
updated: 2026-07-25
---

# Danh sách từ viết tắt và ký hiệu

Các tài liệu dài tích lũy các chữ viết tắt và các quy ước xung quanh chúng rất nghiêm ngặt. Một từ viết tắt được đánh vần đầy đủ trong lần sử dụng đầu tiên, được viết tắt sau đó và một luận án thường cần một danh sách các từ viết tắt ở phần đầu. Duy trì điều đó bằng tay sẽ thất bại theo cách có thể dự đoán được. Bạn sắp xếp lại hai chương, lần sử dụng đầu tiên sẽ di chuyển và đột nhiên "ML" xuất hiện ba trang trước khi "máy học (ML)" xuất hiện. Gói `bảng thuật ngữ bổ sung` theo dõi lần sử dụng đầu tiên dành cho bạn.

## Lộ trình tự động

```latex
\usepackage[acronym]{glossaries-extra}
\makeglossaries
\newacronym{ml}{ML}{machine learning}
```

Tùy chọn `viết tắt` cho phép hỗ trợ từ viết tắt và `\makeglossaries` bật máy thu thập các mục trong quá trình biên dịch. Mỗi `\newacronym` nhận ba đối số: khóa bạn sẽ nhập vào văn bản, dạng ngắn và dạng dài. Xác định tất cả chúng trong phần mở đầu hoặc trong một tệp riêng biệt mà bạn `\input`, để chúng tồn tại ở một nơi.

Trong phần nội dung, bạn không bao giờ gõ từ viết tắt:

```latex
\gls{ml} on first use expands; later uses stay short.
\printglossaries
```

`\gls{ml}` đầu tiên trong tài liệu in "machine learning (ML)" và các ký tự sau chỉ in "ML". Bởi vì gói theo dõi việc sử dụng chứ không phải vị trí trong nguồn nên việc mở rộng sẽ theo sau lần sử dụng đầu tiên bất cứ khi nào cơ cấu lại của bạn di chuyển nó. `\printglossaries` in danh sách các từ viết tắt đã thu thập ở bất cứ nơi nào bạn đặt nó, thường là sau mục lục. Các lệnh liên quan bao gồm ngữ pháp xung quanh vấn đề này: `\glspl` cho số nhiều, `\Gls` cho phần đầu câu được viết hoa.

Điều hấp dẫn là việc xây dựng. Giữa các lần chuyển LaTeX, trình trợ giúp `makeglossaries` phải chạy để sắp xếp và định dạng các mục nhập, nếu không `\printglossaries` sẽ âm thầm không tạo ra gì. Thiết lập latexmk đầy đủ tự động xử lý việc này. Các quy trình đơn giản hơn có thể không có và bảng thuật ngữ bổ sung cung cấp giải pháp dự phòng cho chúng. Nếu danh sách của bạn kiên quyết từ chối xuất hiện, thì việc chạy trợ giúp bị thiếu là nghi phạm đầu tiên, trước cả lỗi trong tài liệu của bạn.

## Tuyến đường được xây dựng bằng tay

Đối với một danh sách đơn giản các ký hiệu, môi trường `mô tả` được duy trì bằng tay thường đủ:

```latex
\section*{Notation}
\begin{description}
 \item[$\eta$] learning rate
 \item[$\theta$] model parameters
\end{description}
```

Mỗi `\item[...]` in đối số khung của nó dưới dạng nhãn in đậm với phần giải thích sau, chính xác là hình dạng của một danh sách ký hiệu. Không có theo dõi lần sử dụng đầu tiên, nhưng danh sách ký hiệu hiếm khi cần; các ký hiệu được xác định ở nơi chúng xuất hiện lần đầu tiên trong toán học.

Lời khuyên trung thực là hãy kết hợp công cụ với cân. Một bài báo có năm từ viết tắt sẽ dễ dàng quản lý bằng tay hơn. Một luận án dài 200 trang với bốn mươi trang thì không, và gói đó sẽ trả chi phí thiết lập của nó gấp nhiều lần. [Bài học về danh sách](/learn/lists/) trình bày chi tiết hơn về môi trường `description`.