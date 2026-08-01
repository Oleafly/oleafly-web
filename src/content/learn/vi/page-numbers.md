---

title: "Số trang bật hoặc tắt"
description: "đơn giản, trống rỗng, La Mã và Ả Rập, loại bỏ các con số trên trang tiêu đề."
category: "type-and-shape"
order: 5
level: "beginner"
tags: ["formatting"]
featured: false
updated: 2026-07-25
---

# Bật hoặc tắt số trang

Số trang xuất hiện theo mặc định trong `bài viết`: các lớp tiêu chuẩn sử dụng kiểu trang `plain`, căn giữa số ở cuối mỗi trang. Thông thường điều đó là tốt và bạn không bao giờ nghĩ về nó. Ba tình huống mà bạn nghĩ đến là ẩn số trên trang tiêu đề, tắt đánh số hoàn toàn và chuyển đổi giữa chữ số La Mã và chữ số Ả Rập trong một tài liệu dài hơn.

## Ẩn số trên trang tiêu đề

Trang tiêu đề có số "1" lẻ loi ở cuối trông có vẻ chưa hoàn thiện. Cách khắc phục là một dòng được đặt ngay sau khi đặt tiêu đề:

```latex
\maketitle
\thispagestyle{empty}
```

`\thispagestyle{empty}` chỉ thay đổi kiểu trang cho trang hiện tại và `empty` là kiểu tích hợp không in gì ở đầu trang hoặc chân trang. Thứ tự quan trọng: nó phải đứng sau `\maketitle` trên cùng một trang, vì `\maketitle` tự đặt lại kiểu trang. Lưu ý rằng trang vẫn được tính; trang tiếp theo sẽ được đánh số 2. Nếu bạn sử dụng `\begin{titlepage}...\end{titlepage}` thay vì `\maketitle`, số đó sẽ bị chặn đối với bạn và trang tiếp theo bắt đầu từ 1.

## Kiểu dáng và hệ thống đánh số

```latex
\pagestyle{plain} % number at bottom
\pagestyle{empty} % nothing
\pagenumbering{roman}
\pagenumbering{arabic}
```

Hai cặp lệnh này kiểm soát những thứ khác nhau và việc trộn lẫn chúng với nhau là một sai lầm kinh điển. `\pagestyle{...}` kiểm soát vị trí số xuất hiện và những gì xung quanh nó: `plain` cung cấp số ở giữa chân trang, `empty` xóa đầu trang và chân trang khỏi mọi trang kể từ thời điểm đó. Nó không nói gì về con số trông như thế nào.

`\pagenumbering{...}` kiểm soát cách viết số: `roman` tạo ra i, ii, iii, trong khi `arabic` tạo ra 1, 2, 3. Ngoài ra còn có `Roman` cho I, II, III và `alph` cho a, b, c, mặc dù bạn hiếm khi cần đến chúng. `\đánh số trang` cũng đặt lại bộ đếm trang về 1. Việc đặt lại đó là một tính năng, không phải lỗi: nó cho phép một luận án đánh số phần mở đầu từ i đến vi và sau đó bắt đầu chương một ở trang 1.

Nếu bạn muốn toàn quyền kiểm soát vị trí, chẳng hạn như số ở góc hoặc ghép với tiêu đề đang chạy, thì đó là công việc của gói Fancyhdr thay vì các phần dựng sẵn này. Xem [đầu và chân chạy](/learn/headers-footers/).

##Lỗi thường gặp

Viết `\pagestyle{empty}` khi ý bạn là `\thispagestyle{empty}` âm thầm xóa số khỏi toàn bộ tài liệu và bạn có thể không nhận thấy cho đến khi người đánh giá hỏi tại sao các trang của bạn không được đánh số. Hãy nhớ quy tắc: `\thispagestyle` là ngoại lệ trên một trang, `\pagestyle` là chuyển đổi trên toàn tài liệu.

Nội dung chính của luận án: [Hướng dẫn bằng tiếng La Mã/tiếng Ả Rập](/learn/front-matter-page-numbers/).