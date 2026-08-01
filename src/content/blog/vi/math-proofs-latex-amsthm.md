---

title: "Học sinh toán: các định lý, chứng minh và ký hiệu luôn nhất quán"
description: "phong cách amsthm, đánh số bổ đề, vệ sinh vĩ mô, dẫn xuất dài và thói quen sử dụng nhiều tệp cho các bài viết toán thuần túy và ứng dụng."
date: 2026-07-12
tags: [mathematics, proofs, math]
---

Bài toán là ký hiệu cộng với cấu trúc chứng minh. LaTeX là mặc định vì cả hai
trở nên đau đớn trong Word khi đối số dài hơn một trang. Trình biên dịch là
không phải là phần khó khăn Tính nhất quán là: các số định lý nhảy lên khi bạn chèn một
bổ đề, một chữ cái `V` có nghĩa là ba thứ khác nhau và những bằng chứng để lại
Dấu QED nổi trên dòng tiếp theo.

Đây là một thiết lập thực tế cho các bài tập, ghi chú arXiv và các chương luận văn.
Ăn cắp những gì bạn cần; bỏ qua phần còn lại cho đến khi nó đau.

## amsthm sớm, trước bổ đề đầu tiên

Hãy tải `amsthm` trước khi bạn phát minh ra "Định lý" in đậm đặc biệt. tiêu đề:

```latex
\usepackage{amsthm}
\theoremstyle{plain}
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem*{remark}{Remark}
```

Đánh số theo phần giúp tham chiếu ổn định khi bạn chèn tài liệu phía trên
kết quả. Việc chia sẻ bộ đếm (`[định lý]`) cho các bổ đề và mệnh đề là điều phổ biến
trong toán học thuần túy; giấy tờ ứng dụng đôi khi đánh số mọi thứ một cách độc lập. Chọn một
và bám vào nó cho toàn bộ tài liệu.

Bài học: [định lý và khối chứng minh](/learn/theorems-proofs/).

## Bằng chứng kết thúc rõ ràng

Sử dụng môi trường `proof` để dấu cuối cùng của proof xuất hiện ở đúng vị trí:

```latex
\begin{proof}
  ...
\end{proof}
```

Nếu dòng cuối cùng là một phương trình được hiển thị, hãy kết thúc bằng `\qedhere` để hộp thực hiện
không mồ côi ở dòng sau. Bằng chứng lồng nhau (yêu cầu bên trong bằng chứng) hoạt động
tốt hơn là môi trường `yêu cầu` với các bằng chứng ngắn gọn của riêng chúng hơn là thụt lề
văn xuôi không bao giờ kết thúc.

Đối với bài tập về nhà mà người hướng dẫn muốn đánh dấu các bước bằng tay, vẫn sử dụng LaTeX để
bản PDF gửi rõ ràng, nhưng hãy giữ phần công việc thô trong một tệp ghi chú riêng để bạn thực hiện
không xóa dòng đúng duy nhất trong khi viết lại.

##Vệ sinh vĩ mô

Xác định các ký hiệu một lần:

```latex
\newcommand{\R}{\mathbb{R}}
\newcommand{\N}{\mathbb{N}}
\newcommand{\eps}{\varepsilon}
\DeclareMathOperator{\Hom}{Hom}
\DeclareMathOperator{\Spec}{Spec}
```

Nếu hai khái niệm có chung một chữ cái, hãy phân biệt bằng macro (`\VectSpace` vs
`\RandomVar`) thay vì sử dụng lại `V` với các phông chữ khác nhau. Các đồng tác giả sẽ không
đoán phông chữ nào có nghĩa là đối tượng nào. Khi một bảng ký hiệu vượt qua màn hình,
đặt nó vào `notation.tex` và `\input` để mọi người chỉnh sửa một tệp.

Các công cụ AI thích phát minh ra các biểu tượng mới. Nếu bạn sử dụng một cái, hãy dán khối macro của bạn vào
lời nhắc và yêu cầu nó chỉ sử dụng tên được xác định. Áp dụng kỷ luật tương tự
không có AI: ký hiệu mới → thêm vào trang tính → sau đó nhập.

## Căn chỉnh cho các dẫn xuất dài

`align` và `split` giữ cho các phép tính nhiều dòng có thể đọc được. Chỉ đánh số dòng thôi bạn
sẽ trích dẫn bằng `\eqref`. Một bức tường các phương trình được đánh số khó theo dõi hơn một
câu chuyện ngắn với hai dòng được gắn thẻ.

```latex
\begin{align}
  f(x)
  &= g(x) + h(x) \label{eq:decomp} \\
  &= \cdots
\end{align}
```

Đối với một phương trình nhiều dòng phải chứa một số, hãy sử dụng `split`
bên trong `phương trình`. Đối với các trường hợp, `cases` hoặc `aligned` đánh bại một mảng tự tạo
đường ống.

## Tham chiếu chéo vẫn tồn tại khi được sắp xếp lại

Đừng bao giờ viết "theo Định lý 2.3" dưới dạng văn bản đơn giản. Sử dụng `\ref` hoặc, với `cleveref`,
`\cref{thm:main}`. Các nhãn đặt sau chú thích hoặc dòng tiêu đề định lý, không phải
trước đây. Nếu hai chương có chung nhãn như `thm:main`, tiền tố theo chương
(`ch3-thm:main`) nếu không bạn sẽ nhận được các mục tiêu sai im lặng khi hợp nhất các tệp.

Trợ giúp về việc kiểm tra chuyển tiếp theo định nghĩa trên toàn dự án và kiểm tra tham chiếu bị hỏng trực tiếp trên nhiều tệp
luận văn. Đó là lãnh thổ của biên tập viên nghiên cứu bình thường bây giờ, không phải là một điều xa xỉ.

## Ghi chú và luận văn nhiều tập tin

Ngay cả một bài tập về nhà dài cũng dễ dàng hơn với tập tin gốc và đầu vào từng phần. luận văn
hầu như luôn muốn `\include` mỗi chương và `\includeonly` khi bạn soạn thảo một chương
từng chương một. Giữ các số liệu ở dưới `figures/ch3/` để sắp xếp lại các chương
không phá vỡ đường dẫn.

Quá trình biên dịch luận án đầy đủ bị chậm. Chế độ hình nháp, ngoại hóa TikZ nặng và
chỉ biên dịch chương bạn đang chỉnh sửa khi có thể. Xem
[tách tập tin chương](/learn/split-chapter-files/) và
[tăng tốc độ biên dịch](/learn/speed-up-compilation/).

## Khi có bản PDF

Khóa học vẫn cần cái vỏ nhàm chán: lề mỗi giáo trình, số trang,
tiêu đề, và đôi khi là một tuyên bố về tính liêm chính trong học tập. các
[tham khảo nhanh](/learn/cheatsheet/) trình bày nội dung đó để bạn có thể chú ý vào
bằng chứng.

Giữ nguyên nguồn. Một bản PDF được đánh dấu không có `.tex` là ngõ cụt khi gặp sự cố tiếp theo
set sử dụng lại lời mở đầu tương tự. Một thư mục cục bộ có lịch sử Git (hoặc một nghiên cứu
trình soạn thảo mà các điểm kiểm tra biên dịch cho bạn) đánh bại `final_v3_really.pdf` trên
máy tính để bàn.

## Trước khi bạn gửi

Đảm bảo các định lý và bổ đề có chung một sơ đồ đánh số mạch lạc, mọi ký hiệu trong
phần nội dung được xác định trong bảng macro và bằng chứng sử dụng `proof` / `\qedhere`
nơi cần thiết. Chỉ đánh số các phương trình bạn trích dẫn. Tất cả các giới thiệu chéo phải được
`\ref`/`\cref`, không phải số được mã hóa cứng. Mở tệp PDF một lần: nhúng phông chữ, lề
phù hợp với bản tóm tắt.

## Bài tập về nhà vs giấy

Đối với bài tập về nhà, sự rõ ràng sẽ đánh bại sự thông minh trong gói. Đối với một bài báo hoặc chương luận án,
đầu tư vào thiết lập định lý và bảng macro một lần, sau đó sử dụng lại. Đừng xây dựng lại
đánh số giữa dự án vì một bài đăng trên blog đã gợi ý một phong cách khác.

## Chia sẻ với đồng tác giả

Gửi một bản PDF để đọc và một kho lưu trữ (hoặc zip nguồn) để chỉnh sửa. Nếu một
đồng tác giả chỉ trả về đánh dấu đã quét, áp dụng nó trong cùng ngày và cam kết. Cũ
chồng giấy là cách hai người "sửa" bổ đề giống nhau một cách khác nhau.

Sau công việc thiết lập đó, LaTeX hầu như biến mất và bạn có thể nghĩ về phép toán.