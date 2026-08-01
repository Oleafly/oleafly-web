---

title: "Biểu tượng Hy Lạp và hàng ngày"
description: "alpha đến Omega, cùng với các toán tử và quan hệ bạn nhập hàng ngày."
category: "equation-craft"
order: 3
level: "beginner"
tags: ["math", "symbols"]
featured: true
updated: 2026-07-25
quiz:
  title: 'Greek letters check'
  questions:
    - prompt: 'How do you get a Greek letter like alpha in math?'
      choices:
        - 'Only Unicode works; backslash names never do.'
        - 'Write a command like $\alpha$ inside math mode.'
        - 'Use \textbf{alpha}.'
        - 'Paste HTML &alpha;.'
      answer: 'B'
      level: beginner
    - prompt: 'How do lowercase and uppercase Greek usually differ in LaTeX?'
      choices:
        - 'There is no capital Greek in math.'
        - 'They are different commands (for example \alpha vs \Gamma).'
        - 'Capitals only work in beamer.'
        - 'Uppercase always needs $$.'
      answer: 'B'
      explanation: 'Plenty of capitals have their own names (\Gamma, \Delta, \Omega). A few just look like Latin letters.'
      level: beginner
    - prompt: 'Where do Greek-letter commands belong?'
      choices:
        - 'Only in the preamble'
        - 'In math mode (inline or display)'
        - 'Only inside \caption'
        - 'Only in the .bib file'
      answer: 'B'
      level: beginner
    - prompt: 'Why load amssymb or amsfonts when you''re writing Greek and relations?'
      choices:
        - 'For color photos'
        - 'Extra symbol fonts and common math symbols that go with the Greek set'
        - 'To replace \section'
        - 'So you only compile once'
      answer: 'B'
      level: beginner
---

# Biểu tượng Hy Lạp và hàng ngày

Hầu hết các ký hiệu bạn gõ hàng ngày là các chữ cái Hy Lạp cùng với một số toán tử và quan hệ. Tất cả đều hoạt động theo cùng một cách: dấu gạch chéo ngược cộng với tên của ký hiệu, chỉ ở chế độ toán học. Trang này là tập hàng ngày. [Bảng ký hiệu toán học](/learn/math-symbols-cheatsheet/) là tài liệu tham khảo đầy đủ hơn.

## Tiếng Hy Lạp (chế độ toán học)

```latex
\alpha \beta \gamma \delta \epsilon \varepsilon
\zeta \eta \theta \vartheta \iota \kappa
\lambda \mu \nu \xi \pi \rho \sigma \tau
\phi \varphi \chi \psi \omega
\Gamma \Delta \Theta \Lambda \Xi \Pi \Sigma \Phi \Psi \Omega
```

Lệnh viết thường sẽ cung cấp chữ cái viết thường: `\alpha`, `\beta`, `\gamma`. Viết hoa chữ cái đầu tiên của lệnh viết hoa: `\Gamma`, `\Delta`, `\Omega`. Không phải mọi chữ viết hoa đều tồn tại như một mệnh lệnh, bởi vì một số chữ viết hoa của tiếng Hy Lạp giống hệt với các chữ cái Latinh. Alpha viết hoa chỉ là A nên không có `\Alpha`. Điều tương tự cũng xảy ra với beta, epsilon và một số thứ khác. Thay vào đó hãy nhập chữ cái Latinh.

Một số chữ cái có dạng biến thể với tiền tố `var`. `\epsilon` là dạng may mắn và `\varepsilon` là dạng xoăn. `\theta` và `\vartheta`, `\phi` và `\varphi`, `\rho` và `\varrho` khác nhau như nhau. Không có hình thức nào đúng hơn. Chọn một lĩnh vực mà bạn ưa thích và sử dụng nó một cách nhất quán trong toàn bộ tài liệu.

Tất cả đều là các lệnh ở chế độ toán học, vì vậy một chữ cái Hy Lạp trong văn bản đang chạy được viết `$\alpha$`. Một `\alpha` trần trong văn bản sẽ dừng quá trình biên dịch với lỗi được nêu trong [Thiếu đô la được chèn](/learn/missing-dollar/).

## Các toán tử và quan hệ hàng ngày

```latex
\pm \cdot \times \div \leq \geq \neq \approx \equiv
\in \subset \subseteq \cup \cap \emptyset
\to \mapsto \Rightarrow \infty \partial \nabla
```

Dòng đầu tiên là số học và so sánh: `\pm` cho dấu cộng-trừ, `\cdot` cho dấu chấm nhân, `\time` cho dấu thập, `\div` cho phép chia, sau đó `\leq`, `\geq` và `\neq` cho phép so sánh, `\approx` cho sự bằng nhau gần đúng và `\equiv` cho sự đồng nhất hoặc bằng nhau. Dòng thứ hai là ngôn ngữ được đặt: `\in` cho thành viên, `\subset` và `\subseteq` cho ngăn chặn, `\cup` và `\cap` cho hợp và giao, và `\emptyset` cho tập trống. Phần thứ ba bao gồm các mũi tên và phân tích: `\to` cho một mũi tên đơn giản trong các giới hạn và loại hàm, `\mapsto` cho vị trí của một phần tử, `\Rightarrow` cho hàm ý, `\infty` cho vô cực, và `\partial` và `\nabla` cho đạo hàm riêng và gradient, được xử lý đầy đủ trong [đạo hàm và tích phân](/learn/dẫn xuất-tích phân/).

Khoảng cách xung quanh tất cả những điều này là tự động. LaTeX biết `\leq` là một mối quan hệ và `\cup` là một phép toán nhị phân và nó cách nhau tương ứng, đó là lý do chính đáng để sử dụng các lệnh thay vì dán các ký hiệu Unicode. Các tên chìm nhanh nhất bằng cách nhập một vài công thức vào [live sân chơi](/live/) và xem chúng hiển thị.