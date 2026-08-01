---

title: "Thẻ bàn biểu tượng"
description: "Dấu trọng âm, toán tử lớn, bộ số và dấu phân cách co dãn trên một trang."
category: "equation-craft"
order: 8
level: "beginner"
tags: ["math", "cheatsheet"]
featured: true
updated: 2026-07-25
---

# Thẻ bàn biểu tượng

Trang này là một thẻ tham khảo hơn là một bài học. Dấu, toán tử lớn, tập hợp số và dấu phân cách bao gồm hầu hết các công việc toán học hàng ngày, tất cả đều ở cùng một nơi. Mọi lệnh ở đây chỉ hoạt động ở chế độ toán học và các bộ số cần có `\usepackage{amssymb}` trong phần mở đầu. Để biết bảng chữ cái tiếng Hy Lạp và các mối quan hệ cơ bản, hãy xem [các ký hiệu tiếng Hy Lạp và hàng ngày](/learn/greek-letters/). Để biết cách hoạt động của chế độ toán học, hãy bắt đầu với [thông tin cơ bản về chế độ toán học](/learn/math-mode/).

## Dấu

```latex
\hat{x} \bar{x} \tilde{x} \vec{x} \dot{x} \ddot{x}
\widehat{xyz} \overline{xyz}
```

| Lệnh | Hiển thị dưới dạng | Ý nghĩa thông thường |
| --- | --- | --- |
| `\hat{x}` | x có dấu mũ | Công cụ ước tính, vectơ đơn vị, toán tử |
| `\bar{x}` | x có thanh | Phương tiện mẫu, liên hợp phức tạp |
| `\dấu ngã{x}` | x với dấu ngã | Xấp xỉ, biến đổi |
| `\vec{x}` | x có mũi tên | Vectơ |
| `\dot{x}`, `\ddot{x}` | một hoặc hai dấu chấm | Đạo hàm lần thứ nhất và lần thứ hai |
| `\widehat{xyz}`, `\overline{xyz}` | giọng kéo dài | Dấu trọng âm trên các biểu thức nhiều chữ cái |

Các dấu trọng âm đơn giản phù hợp với một chữ cái duy nhất; các biến thể `wide` và `over` kéo dài để mở rộng bất cứ thứ gì có trong dấu ngoặc nhọn.

## Các nhà khai thác lớn

```latex
\sum_{i=1}^n \prod_{i=1}^n \int_a^b \oint
\lim_{x \to 0} \max_{x} \inf_{x}
```

| Lệnh | Ý nghĩa |
| --- | --- |
| `\sum_{i=1}^n` | Tổng có giới hạn dưới và giới hạn trên |
| `\prod_{i=1}^n` | Sản phẩm |
| `\int_a^b` | Tích phân xác định |
| `\oint` | Tích phân đường viền |
| `\lim_{x \to 0}` | Giới hạn |
| `\max_{x}`, `\inf_{x}` | Tối đa, tối thiểu trên một biến |

Giới hạn đính kèm với cú pháp chỉ số dưới và chỉ số trên thông thường, được đặt trong dấu ngoặc nhọn khi dài hơn một ký tự. Trong phép toán hiển thị, tổng, tích và giới hạn đặt giới hạn của chúng ở trên và dưới ký hiệu. Tích phân giữ của họ ở bên cạnh. Đó là quy ước tiêu chuẩn.

## Bộ số

```latex
\mathbb{N} \mathbb{Z} \mathbb{Q} \mathbb{R} \mathbb{C}
```

Đây là các số tự nhiên, số nguyên, số hữu tỉ, số thực và số phức được in đậm trên bảng đen. Bảng chữ cái `\mathbb` và họ hàng của nó được trình bày trong [Blackboard, script, Fraktur](/learn/mathbb-mathcal/).

## Dấu phân cách

```latex
\left( \frac{a}{b} \right)
\left\{ x : x > 0 \right\}
\langle v, w \rangle
```

`\left` và `\right` phát triển dấu phân cách của chúng theo chiều cao của vật liệu kèm theo, do đó, các dấu ngoặc đơn xung quanh phần cao bao bọc nó thay vì cắt nó ở độ cao văn bản. Họ phải đi theo cặp. Để chỉ hiển thị một bên, hãy đóng bằng `\right.` và đối tác vô hình đáp ứng việc ghép nối. Các dấu ngoặc nhọn là các ký tự đặc biệt nên các dấu ngoặc nhọn được viết `\{` và `\}`. Dấu ngoặc nhọn cho các sản phẩm bên trong là `\langle` và `\rangle`, không bao giờ là dấu nhỏ hơn và lớn hơn của bàn phím, là các ký hiệu quan hệ có hình dạng và khoảng cách sai.

Bạn có thể dán bất kỳ hàng nào của thẻ này vào [sân chơi trực tiếp](/live/) để xem biểu mẫu được hiển thị bên cạnh nguồn.