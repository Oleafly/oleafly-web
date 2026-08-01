---

title: "Tỷ lệ xếp chồng mà vẫn có thể đọc được"
description: "frac, dfrac, tfrac và các phân số tiếp theo với amsmath."
category: "equation-craft"
order: 2
level: "beginner"
tags: ["math"]
featured: false
updated: 2026-07-25
quiz:
  title: 'Fractions check'
  questions:
    - prompt: 'What does \frac{a}{b} produce?'
      choices:
        - 'A footnote labeled a/b'
        - 'A stacked fraction: a on top, b below'
        - 'Bold a over italic b'
        - 'A two-column table'
      answer: 'B'
      level: beginner
    - prompt: 'How does \frac size change inline vs display?'
      choices:
        - 'Same size always'
        - 'Smaller and tighter inline; fuller size in display math'
        - 'Always huge inline'
        - 'It only works in display'
      answer: 'B'
      level: beginner
    - prompt: 'When would you reach for \dfrac?'
      choices:
        - 'To force a full-size (display-style) fraction even in a sentence'
        - 'To draw a chemical diagram'
        - 'To start a chapter'
        - 'To turn amsmath off'
      answer: 'A'
      hint: 'The d is for display style.'
      explanation: 'Use it sparingly in a sentence. Tall fractions push the line spacing around.'
      level: intermediate
    - prompt: 'Why use \cfrac for continued fractions?'
      choices:
        - 'It''s shorter to type than \frac'
        - 'Nested \frac gets tiny each level; \cfrac keeps each level readable'
        - 'It works outside math mode'
        - 'It numbers equations for you'
      answer: 'B'
      level: intermediate
    - prompt: 'If \dfrac is undefined, what''s the usual fix?'
      choices:
        - 'Buy a commercial font'
        - 'Load amsmath in the preamble'
        - 'Switch to \documentclass{book}'
        - 'Delete every dollar sign'
      answer: 'B'
      level: beginner
---

# Tỷ lệ xếp chồng vẫn có thể đọc được

Phân số là nơi đầu tiên đầu ra LaTeX vượt trội rõ ràng so với trình xử lý văn bản: tử số và mẫu số xếp chồng lên nhau thực sự với quy tắc giữa chúng, có kích thước phù hợp với phép toán xung quanh. Lệnh cốt lõi là `\frac`. Điều quan trọng là kích thước của nó thay đổi như thế nào theo ngữ cảnh và cách ghi đè lên điều đó khi lựa chọn tự động làm ảnh hưởng đến khả năng đọc.

## frac, dfrac, tfrac

```latex
\frac{a}{b} % default
\dfrac{a}{b} % display-style even inline
\tfrac{a}{b} % text-style in display
```

`\frac{a}{b}` nhận hai đối số có dấu ngoặc nhọn, tử số trước, mẫu số thứ hai và sắp xếp chúng xếp chồng lên nhau theo quy tắc ngang. Kích thước của nó phụ thuộc vào ngữ cảnh. Trong phép toán hiển thị (bên trong `\[ ... \]` hoặc môi trường `phương trình`), phân số được đặt ở kích thước đầy đủ. Trong toán học nội tuyến (bên trong `$ ... $`), nó được đặt nhỏ hơn và gọn hơn, do đó nó không buộc các dòng của đoạn văn phải tách ra.

Đôi khi bạn muốn ghi đè lên điều đó. `\dfrac`, từ `amsmath`, buộc phải hiển thị kiểu: phân số xếp chồng có kích thước đầy đủ ngay cả ở giữa câu. Hãy sử dụng nó một cách tiết kiệm vì phần nội tuyến cao sẽ kéo dài khoảng cách dòng xung quanh nó. `\tfrac` thì ngược lại: nó buộc kiểu văn bản nhỏ ngay cả trong phép toán hiển thị, điều này rất hữu ích cho các hệ số đơn giản như một nửa phía trước một biểu thức lớn, trong đó một ngăn xếp kích thước đầy đủ sẽ thu hút quá nhiều sự chú ý.

Cả hai đối số đều có thể chứa phép toán tùy ý, bao gồm các phân số khác: `\frac{1}{1 + \frac{1}{x}}` lồng nhau và LaTeX tự động thu gọn phân số bên trong. Tuy nhiên, khi lồng sâu hơn, sẽ có một công cụ tốt hơn.

## Phân số tiếp tục

```latex
a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2}}
```

`\frac` lồng nhau được thu nhỏ ở mọi cấp độ, do đó, đến tầng thứ ba của một phân số tiếp theo, các chữ số hầu như không thể đọc được. `\cfrac`, cũng từ `amsmath`, giữ mọi cấp độ ở kích thước hiển thị đầy đủ và căn chỉnh các tử số, đây là cách được chấp nhận để sắp chữ các phân số tiếp theo. Bạn có thể chuyển một vị trí tùy chọn, `\cfrac[l]{1}{...}`, để đẩy tử số sang trái thay vì căn giữa.

## Phán quyết thực tế

Tất cả `\dfrac`, `\tfrac` và `\cfrac` đều yêu cầu `\usepackage{amsmath}` trong phần mở đầu; `\frac` đơn giản hoạt động mà không cần nó. Nếu bạn nhận được "Chuỗi điều khiển không xác định" trên `\dfrac`, thì dòng gói bị thiếu.

Đối với văn bản nội tuyến, đôi khi dạng gạch chéo đơn giản là dễ đọc hơn so với phân số xếp chồng: viết `(a/b)` hoặc `a/b` giữ cho chiều cao dòng đồng đều và đọc tốt đối với các tỷ lệ đơn giản. Một nguyên tắc nhỏ là xếp các phân số trong phép hiển thị, nơi có khoảng trống theo chiều dọc và thích dùng dấu gạch chéo nội tuyến trừ khi phân số đó là điểm của câu. Nhập một đoạn văn theo cả hai cách trong [sân chơi trực tiếp](/live/) và so sánh; sự khác biệt về khoảng cách dòng có thể nhìn thấy ngay lập tức. Nếu các dấu phân cách toán học như `$` và `\[` vẫn chưa quen, hãy bắt đầu với [thông tin cơ bản về chế độ toán học](/learn/math-mode/).