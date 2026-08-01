---

title: "Chỉ số xếp chồng"
description: "Các nhóm trống cho vị trí tensor và các quy ước trường phù hợp."
category: "notation-depth"
order: 7
level: "advanced"
tags: ["math"]
featured: false
updated: 2026-07-25
---

# Chỉ số xếp chồng

Ký hiệu tenxơ trong thuyết tương đối và hình học vi phân phân biệt các chỉ số trên với các chỉ số dưới và thứ tự ngang của các chỉ số cũng mang ý nghĩa: khi các chỉ số được nâng lên và hạ xuống bằng một thước đo, đối tượng có chỉ số cao hơn trước sẽ không giống với đối tượng có chỉ số thấp hơn trước. Vị trí tập lệnh mặc định của LaTeX bỏ qua sự khác biệt đó, vì vậy các tài liệu nặng về độ căng sẽ dựa vào một thủ thuật nhỏ với các nhóm trống.

```latex
T^{i}{}_{j}{}^{k}
R^{\mu}{}_{\nu\rho\sigma}
g_{\mu\nu}
```

## Thủ thuật nhóm trống

Viết `T^i_j` đặt chỉ số trên và chỉ số dưới vào cùng một ô ngang, xếp chồng lên nhau. Để sắp xếp chúng, hãy chèn `{}`, một nhóm trống: `T^{i}{__{j}` gắn `i` làm chỉ số trên cho T, sau đó đính kèm `j` làm chỉ số dưới cho nhóm trống theo sau, do đó, chỉ số dưới sẽ nằm sau chỉ số trên thay vì ở dưới nó. Mỗi `{}` sẽ mở ra một khe tập lệnh mới và bạn có thể xâu chuỗi bao nhiêu tùy theo nhu cầu của tenxơ, như trong `T^{i}{></j}{}^{k}`.

Dòng thứ hai hiển thị kết quả thu được trên một vật thể thực. Trong `R^{\mu}{__{\nu\rho\sigma}` mu chiếm vị trí chỉ mục đầu tiên và ba chỉ số thấp hơn theo sau nó. Đó là cách bố trí tiêu chuẩn cho tensor Riemann. Thu gọn bộ đếm và thứ tự chỉ mục trở nên mơ hồ. Khi mọi chỉ mục nằm trên một cấp độ, như trong số liệu `g_{\mu\nu}`, không cần thủ thuật nào và một nhóm chỉ số dưới duy nhất chứa tất cả chúng.

`{}` tương tự cũng giải quyết được một lỗi đơn giản. `T^i^k` dừng quá trình biên dịch bằng "Chỉ số trên kép", vì một nguyên tử không thể có hai chỉ số trên. `T^{i}{}^{k}` cung cấp cho chỉ số trên thứ hai một vị trí riêng và biên dịch rõ ràng.

## Quy ước và tính nhất quán

Việc các chỉ số được so le hay xếp chồng lên nhau là một quy ước trường. Thuyết tương đối tổng quát hầu như không thuyết phục được mọi người. Các khu vực khác vẫn ổn với các chỉ số xếp chồng khi không có số liệu nào di chuyển các chỉ số xung quanh. Phù hợp với thói quen trong lĩnh vực của bạn và nếu bạn đang gửi ở đâu đó, hãy phù hợp với mẫu của tạp chí trước sở thích của bạn. Gói `tensor` có thể tự động hóa vị trí bằng lệnh `\ tensor`, nhưng các nhóm trống thủ công có thể di chuyển được, không cần gói và tồn tại bất kỳ hệ thống gửi nào không thay đổi.

Sự nhất quán quan trọng hơn chính sự lựa chọn. Quyết định một lần cách sắp xếp các chỉ số của mỗi tenxơ. Đối với những tài liệu bạn gõ liên tục, hãy đặt macro mở đầu xung quanh chúng để thay đổi quy ước muộn chỉ là một lần chỉnh sửa thay vì tìm kiếm toàn bộ tài liệu. So sánh các biểu mẫu so le và xếp chồng cạnh nhau trong [sân chơi trực tiếp](/live/).