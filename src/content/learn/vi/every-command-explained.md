---

title: "Mọi lệnh \\\\ trong vũ trụ LaTeX, được giải thích"
description: "Tài liệu tham khảo toàn cầu: hàng trăm lệnh và môi trường LaTeX, từ kernel đến amsmath, hyperref, TikZ, biblatex và Beamer, mỗi lệnh được giải thích trên một dòng."
category: "desk-reference"
order: 0
level: "beginner"
tags: ["reference", "commands"]
featured: true
updated: 2026-07-25
---

# Mọi lệnh trong LaTeX đều được giải thích

Trang này xác định mọi lệnh và môi trường LaTeX xuất hiện trong bất kỳ bài học nào trên Oleafly Learn, cộng với vốn từ vựng tiêu chuẩn rộng hơn mà bạn sẽ gặp trong các bài viết thực tế. Kernel, amsmath, hyperref, Graphicx, booktabs, biblatex, TikZ, Beamer và các gói mà các nhà nghiên cứu thực sự tải. Đọc lướt theo danh mục hoặc tìm kiếm trang bằng Ctrl/Cmd-F để tìm lệnh bạn vừa gặp. Mỗi mục là một dòng: nó làm gì và nó quan trọng ở đâu, nó đến từ gói nào.

## Các lớp tài liệu và thiết lập

| Lệnh | Nó làm gì |
| --- | --- |
| `\documentclass{bài viết}` | Dòng đầu tiên của mỗi tài liệu: chọn bố cục tổng thể; bài viết là sự lựa chọn mặc định cho các bài viết. |
| `\documentclass{báo cáo}` | Phân loại cho các báo cáo dài hơn: thêm `\chapter` và bắt đầu phần tóm tắt trên trang riêng của nó. |
| `\documentclass{sách}` | Phân loại sách: chương, bố cục hai mặt, nội dung trước/chính/sau. |
| `\documentclass{letter}` | Lớp dành cho thư từ, với các lệnh `\opening`, `\close` và địa chỉ. |
| `\documentclass{beamer}` | Lớp trình bày slide được xây dựng từ môi trường `frame`. |
| `\documentclass[11pt,a4paper]{article}` | Các tùy chọn lớp phổ biến: cỡ chữ (10pt, 11pt, 12pt), giấy (a4paper, letterpaper), `twocolumn`, `twoside`, `landscape`, `draft`, `titlepage`. |
| `\usepackage{amsmath}` | Tải một gói trong phần mở đầu để thêm tính năng. |
| `\usepackage[margin=1in]{hình học}` | Đặt lề trang và kích thước giấy (hình học). |
| `\tiêu đề{...}` | Lưu tiêu đề tài liệu, được in sau bởi `\maketitle`. |
| `\tác giả{...}` | Lưu trữ danh sách tác giả cho `\maketitle`; phân tách nhiều tác giả bằng `\and`. |
| `\và` | Dấu phân cách giữa các tên tác giả bên trong `\author{...}`. |
| `\ngày{...}` | Lưu ngày được hiển thị bởi `\maketitle`; `\date{}` ẩn nó, `\date{\today}` hiển thị hôm nay. |
| `\hôm nay` | In ngày hiện tại tại thời điểm biên dịch. |
| `\maketitle` | In khối tiêu đề từ `\title`, `\author`, và `\date`. |
| `\cảm ơn{...}` | Đính kèm chú thích cuối trang vào tiêu đề hoặc tên tác giả, ví dụ: để được tài trợ hoặc thông tin liên hệ. |
| `\viện{...}` | Lệnh liên kết tác giả được sử dụng bởi Beamer và lớp Springer LNCS. |
| `\inst{1}` | Điểm đánh dấu chỉ số trên liên kết trong danh sách tác giả LNCS và Beamer: `Ada Lovelace\inst{1}`. |
| `\keywords{...}` | In danh sách từ khóa của bài báo trong nhà xuất bảncác lớp như acmart và llncs. |
| `\địa chỉ{...}` | lớp thư: lưu trữ địa chỉ của người gửi cho tiêu đề thư. |
| `\chữ ký{...}` | lớp chữ cái: lưu trữ tên được in dưới phần đóng. |
| `\opening{Kính gửi ...}` | lớp chữ cái: in lời chào và bắt đầu phần thân chữ cái. |
| `\đóng{Trân trọng,}` | lớp chữ cái: in khối ký tên và chữ ký. |
| `\LaTeX` | In logo LaTeX với các chữ cái được nâng lên và hạ xuống. |
| `\TeX` | In logo TeX với chữ E được hạ thấp. |
| `\đầu vào{tệp}` | Dán một tệp .tex khác vào đúng vị trí, như thể bạn đã gõ nó vào đó. |
| `\include{chương1}` | Nhập tệp chương bắt đầu trên một trang mới; cho phép biên dịch một phần thông qua `\includeonly`. |
| `\includeonly{chương1,chương3}` | Danh sách mở đầu hạn chế những tập tin `\include` thực sự được biên dịch. |
| `\hypersetup{...}` | Định cấu hình các tùy chọn hyperref như màu liên kết và siêu dữ liệu PDF. |
| `\AtBeginDocument{...}` | Chạy mã ngay sau `\begin{document}`, hữu ích cho việc thiết lập muộn. |
| `\AtEndDocument{...}` | Chạy mã ngay trước khi tài liệu kết thúc. |
| `\makealetter` | Tạm thời tạo một chữ cái `@` để bạn có thể sử dụng hoặc vá các lệnh nội bộ. |
| `\makeathother` | Khôi phục `@` về trạng thái bình thường sau `\makealetter`. |
| `\typeout{...}` | In thông báo tới nhật ký biên dịch và thiết bị đầu cuối, thuận tiện cho việc gỡ lỗi. |
| `\bảo vệ` | Bảo vệ một lệnh dễ vỡ bên trong một đối số chuyển động như `\caption` hoặc `\section`. |
| `\listfiles` | Lệnh mở đầu ghi lại mọi tệp đã tải và phiên bản của nó để báo cáo lỗi. |

## Cấu trúc và phân đoạn

| Lệnh | Nó làm gì |
| --- | --- |
| `\phần{...}` | Phân chia cấp độ cao nhất, các chương trên, trong các lớp sách và báo cáo. |
| `\chương{...}` | Tiêu đề chương được đánh số trong sách và lớp báo cáo (không có trong bài viết). |
| `\phần{...}` | Tiêu đề cấp cao nhất được đánh số trong một bài viết. |
| `\tiểu mục{...}` | Tiêu đề được đánh số một cấp bên dưới `\section`. |
| `\tiểu mục{...}` | Tiêu đề được đánh số một cấp bên dưới `\subsection`. |
| `\đoạn{...}` | Tiêu đề cấp thấp nhất: tiêu đề in đậm ở đầu đoạn văn. |
| `\đoạn văn{...}` | Dưới `\đoạn` một cấp độ, hiếm khi cần thiết. |
| `\section*{...}` | Phần được gắn dấu sao in tiêu đề mà không có số hoặc mục nhập TOC. |
| `\phụ lục` | Chuyển đổi cách đánh số để các chương hoặc phần sau trở thành Phụ lục A, B, C. |
| `\trang phụ lục` | In trang chia "Phụ lục" riêng (gói phụ lục). |
| `\bảng nội dung` | In mục lục được xây dựng từ các lệnh phân chia của bạn. |
| `\listoffigures` | In danh sách tất cả các chú thích hình kèm theo số trang. |
| `\listoftables` | In danh sách tất cả các chú thích của bảng kèm theo số trang. |
| `\tiền đề` | Chuyển đổi loại sách cho các trang có sẵn nội dung: số trang roman, chương không đánh số. |
| `\vấn đề chính` | Lớp sách chuyển về nội dung chính: đánh số trang tiếng Ả Rập, đánh số chương. |
| `\backmatter` | Chuyển đổi loại sách cho các trang cuối: các chương không còn được đánh số. |
| `\addcontentsline{toc}{chapter}{...}` | Thêm một mục vào mục lục (hoặc danh sách các hình/bảng) theo cách thủ công. |
| `\addtocontents{toc}{...}` | Viết nội dung tùy ý (như khoảng cách) vào một tệp nội dung. |
| `\setcounter{secnumdeep}{3}` | Kiểm soát mức độ phân chia sâu của các số. |
| `\setcounter{tocdeep}{2}` | Kiểm soát độ sâu của mục lục. |

## Xác định lệnh và môi trường

| Lệnh | Nó làm gì |
| --- | --- |
| `\newcommand{\R}{\mathbb{R}}` | Xác định lệnh của riêng bạn; lỗi nếu tên đã tồn tại. |
| `\renewcommand{...}{...}` | Xác định lại một lệnh hiện có; lỗi nếu nó không tồn tại. |
| `\providecommand{...}{...}` | Chỉ xác định một lệnh nếu nó chưa được xác định; nếu không thì im lặng không làm gì cả. |
| `\NewDocumentCommand` | Định nghĩa lệnh hiện đại với các đối số tùy chọn linh hoạt (LaTeX3/xparse). |
| `\newenvironment{name}{begin code}{end code}` | Xác định môi trường của riêng bạn bằng mã chạy ở `\begin` và `\end`. |
| `\renewenvironment{name}{...}{...}` | Xác định lại môi trường hiện có. |
| `\ensuremath{...}` | Làm cho nội dung toán học của macro hoạt động cả bên trong và bên ngoài chế độ toán học. |
| `\DeclareMathOperator{\E}{E}` | Xác định tên toán tử thẳng đứng; biểu mẫu được gắn dấu sao đặt các giới hạn bên dưới (amsmath). |
| `\DeclareMathOperator*{\argmin}{arg\,min}` | Biểu mẫu được gắn dấu sao: toán tử lấy các giới hạn bên dưới trong phép toán hiển thị (amsmath). |
| `\định lý mới{bổ đề}{Bổ đề}` | Khai báo một môi trường giống như định lý (amsthm). |
| `\foo` | Tên ví dụ cho macro do người dùng xác định trong bài học `\newcommand`, không phải lệnh LaTeX thực sự. |
| `\abs{x}` | Ví dụ về macro do người dùng xác định từ bài học lệnh tùy chỉnh sắp chữ các thanh giá trị tuyệt đối. |
| `\mat{A}` | Ví dụ về macro do người dùng xác định từ bài học lệnh tùy chỉnh cho ký hiệu ma trận in đậm. |
| `\vect{v}` | Ví dụ về macro do người dùng xác định từ bài học lệnh tùy chỉnh cho biểu tượng vectơ in đậm. |
| `\set{...}` | Ví dụ về macro do người dùng xác định từ bài học lệnh tùy chỉnh sắp chữ có kích thước đặt dấu ngoặc nhọn. |
| `\citepair` | Ví dụ về macro trợ giúp trích dẫn do người dùng xác định từ bài học lệnh tùy chỉnh, không phải lệnh tiêu chuẩn. |
| `\E` | Ví dụ về toán tử do người dùng định nghĩa cho kỳ vọng, thường được xác định bằng`\Khai báoMathOperator` hoặc `\lệnh mới`. |
| `\R` | Ví dụ về macro do người dùng xác định cho số thực: `\newcommand{\R}{\mathbb{R}}`. |
| `\argmax`, `\argmin` | Tên toán tử cho arg max / arg min, được xác định trong khóa học này bằng `\DeclareMathOperator*` nên chỉ số dưới nằm bên dưới. |

## Bộ đếm và độ dài

| Lệnh | Nó làm gì |
| --- | --- |
| `\newcounter{examples}` | Tạo một bộ đếm mới, do cha/mẹ tùy ý đặt lại: `\newcounter{examples[section]`. |
| `\setcounter{page}{1}` | Đặt giá trị của bộ đếm, ở đây khởi động lại số trang. |
| `\addtocounter{examples}{2}` | Thêm một giá trị vào bộ đếm mà không in bất cứ thứ gì. |
| `\bộ đếm bước{ví dụ}` | Tăng bộ đếm lên một. |
| `\refstepcounter{examples}` | Tăng bộ đếm và biến nó thành mục tiêu cho `\label` tiếp theo. |
| `\giá trị{ví dụ}` | Đọc giá trị của bộ đếm để sử dụng trong số học hoặc so sánh. |
| `\tiếng Ả Rập{ví dụ}` | In bộ đếm dưới dạng chữ số Ả Rập: 1, 2, 3. |
| `\roman{examples}`, `\Roman{examples}` | In bộ đếm dưới dạng chữ số La Mã viết thường hoặc viết hoa. |
| `\alph{examples}`, `\Alph{examples}` | In bộ đếm dưới dạng chữ thường hoặc chữ in hoa. |
| `\fnsymbol{footnote}` | In bộ đếm dưới dạng ký hiệu chú thích cuối trang: dấu hoa thị, con dao găm, v.v. |
| `\newlength{\mygap}` | Tạo một thanh ghi độ dài mới. |
| `\setlength{\parskip}{6pt}` | Gán một giá trị cho một thanh ghi độ dài. |
| `\addtolength{\textheight}{1cm}` | Thêm vào một chiều dài hiện có. |
| `\settowidth{\mygap}{text}` | Đặt chiều dài bằng chiều rộng tự nhiên của một số văn bản. |
| `\parindent` | Độ dài thụt lề của đoạn văn ở dòng đầu tiên; được đặt bằng `\setlength{\parindent}{0pt}`. |
| `\parskip` | Độ dài của khoảng cách dọc giữa các đoạn văn; được đặt bằng `\setlength`. |
| `\linewidth` | Độ dài của dòng hiện tại, thuận tiện cho việc định cỡ: `width=\linewidth`. |
| `\textwidth` | Chiều dài của toàn bộ chiều rộng khối văn bản trên trang. |
| `\texteight` | Độ dài của chiều cao khối văn bản đầy đủ trên trang. |
| `\băng thông cột` | Chiều rộng của một cột trong bố cục nhiều cột. |
| `\baselineskip` | Khoảng cách theo chiều dọc giữa các đường cơ sở của các đường liên tiếp. |
|`\line Spread{1.3}` | Chia tỷ lệ phần đầu (khoảng cách dòng) cho toàn bộ tài liệu; cần `\selectfont` hoặc lệnh kích thước để có hiệu lực. |

## Đoạn văn, ngắt dòng và gạch nối

| Lệnh | Nó làm gì |
| --- | --- |
| `\\` | Kết thúc dòng hiện tại bên trong đoạn văn, bảng và mảng. |
| `\\[6pt]` | Ngắt dòng có thêm khoảng trống theo chiều dọc sau nó. |
| `\dòng mới` | Ngắt dòng mà không căn chỉnh và không cho phép ngắt trang. |
| `\ngắt dòng` | Yêu cầu ngắt dòng hợp lý ở đây; tùy chọn `[0-4]` đặt yêu cầu. |
| `\nolinebreak` | Không khuyến khích ngắt dòng tại thời điểm này. |
| `\par` | Kết thúc đoạn văn, giống như một dòng trống trong nguồn. |
| `\noindent` | Loại bỏ thụt lề dòng đầu tiên của đoạn văn tiếp theo. |
| `\thụt lề` | Buộc thụt lề dòng đầu tiên ở nơi lẽ ra nó sẽ bị chặn. |
| `\-` | Đánh dấu điểm gạch nối được phép bên trong một từ. |
| `\gạch nối{bộ dữ liệu}` | Danh sách lời mở đầu dạy LaTeX cách gạch nối các từ cụ thể. |
| `\cẩu thả` | Nới lỏng các quy tắc về khoảng cách để các dòng dễ ngắt dòng hơn, tránh các hộp quá đầy. |
| `\cầu kỳ` | Khôi phục các quy tắc giãn cách nghiêm ngặt sau `\sloppy`. |
| `\raggedright` | Căn trái văn bản sau thay vì căn đều nó. |
| `\raggedleft` | Căn phải văn bản sau. |
| `\định tâm` | Căn giữa mọi thứ theo sau trong nhóm hiện tại, ví dụ: hình ảnh của một hình vẽ. |
| `\cùng trang` | Không khuyến khích ngắt trang trong nhóm hiện tại. |
| `\enlargethispage{\baselineskip}` | Chỉ làm cho trang hiện tại cao hơn một chút để chèn thêm một dòng. |
| `~` | Dấu cách không ngắt: `Hình~1` giữ số trên cùng một dòng. |

## Khoảng cách

| Lệnh | Nó làm gì |
| --- | --- |
| `\quad` | Chèn một khoảng trống theo chiều ngang có chiều rộng bằng chữ M. |
| `\qquad` | Chèn hai lần khoảng trắng của `\quad`. |
| `\enspace` | Chèn một nửa `\quad` không gian theo chiều ngang. |
| `\hspace{1cm}` | Chèn không gian ngang; biến mất khi ngắt dòng. |
| `\hspace*{1cm}` | Không gian ngang vẫn tồn tại ngay cả khi ngắt dòng. |
| `\vspace{1cm}` | Chèn không gian theo chiều dọc có độ dài nhất định. |
| `\vspace*{1cm}` | Không gian dọc vẫn tồn tại ngay cả khi ngắt trang. |
| `\smallskip` | Chèn một khoảng cách dọc nhỏ giữa các đoạn văn. |
| `\medskip` | Chèn một khoảng cách dọc vừa phải giữa các đoạn văn. |
| `\bigskip` | Chèn một khoảng cách dọc lớn giữa các đoạn văn. |
| `\hfill` | Không gian theo chiều ngang co giãn giúp đẩy nội dung ra xa nhau để lấp đầy dòng. |
| `\vfill` | Không gian theo chiều dọc co giãn giúp đẩy nội dung ra xa nhau để lấp đầy trang. |
| `\dotfill` | Điền vào dòng còn lại bằng dấu chấm, như trong menu hoặc dòng nội dung. |
| `\hrulefill` | Điền vào dòng còn lại bằng thước ngang. |
| `\kéo dài{2}` | Keo co giãn có trọng lượng, để tạo khoảng cách cân xứng: `\hspace{\stretch{2}}`. |
| `\điền` | Đơn vị chiều dài co giãn; `\hspace{\fill}` là những gì `\hfill` mở rộng. |
| `\phantom{văn bản}` | Chiếm chính xác không gian của đối số nhưng không in được gì. |
| `\hphantom{văn bản}` | Chỉ chiếm chiều rộng của đối số của nó, với chiều cao bằng không. |
| `\vphantom{văn bản}` | Chỉ chiếm chiều cao của đối số, với chiều rộng bằng 0. |
| `\đập{...}` | In đối số của nó nhưng giả vờ như nó có chiều cao và chiều sâu bằng 0. |
| `\thanh chống` | Hỗ trợ vô hình chiều cao của một dòng bình thường, để làm đều chiều cao của hàng. |
| `\mathstrut` | Chế độ toán học có kích thước bằng dấu ngoặc đơn, để căn chỉnh các căn thức và phân số. |

## Hộp và quy tắc

| Lệnh | Nó làm gì |
| --- | --- |
| `\mbox{...}` | hộp ngang không thể phá vỡ; cũng giữ nội dung của nó trên một dòng. |
| `\makebox[3cm][r]{...}` | Hộp có chiều rộng đã đặt với căn chỉnh đã chọn (l, c, r, s). |
| `\fbox{...}` | Vẽ một khung xung quanh nội dung của nó. |
| `\framebox[3cm][c]{...}` | Hộp được đóng khung có chiều rộng cố định với căn chỉnh đã chọn. |
| `\parbox{5cm}{...}` | Hộp đoạn văn: một cột văn bản nhỏ có chiều rộng nhất định. |
| `\raisebox{2pt}{...}` | Chuyển nội dung của nó lên (hoặc xuống với độ dài âm). |
| `\quy tắc{2cm}{0.4pt}` | Vẽ một hình chữ nhật đầy; công cụ phù hợp cho các dòng tùy chỉnh. |
| `\colorbox{màu vàng}{...}` | Đặt văn bản trên hộp nền màu (xcolor). |
| `\fcolorbox{red}{vàng}{...}` | Hộp màu có khung màu (xcolor). |

## Trang, đánh số và tiêu đề

| Lệnh | Nó làm gì |
| --- | --- |
| `\trang mới` | Kết thúc trang hiện tại và bắt đầu một trang mới. |
| `\clearpage` | Bắt đầu một trang mới sau khi xóa tất cả các số liệu và bảng đang chờ xử lý. |
| `\cleardoublepage` | Giống như `\clearpage` nhưng cũng đảm bảo trang tiếp theo là trang bên phải (lẻ). |
| `\ngắt trang` | Yêu cầu ngắt trang tại thời điểm này, kéo dài trang hết chiều cao. |
| `\nopagebreak` | Không khuyến khích việc ngắt trang vào thời điểm này. |
| `\đánh số trang{roman}` | Đặt kiểu số trang (tiếng Ả Rập, tiếng La Mã, tiếng La Mã, chữ cái, Alph), đặt lại bộ đếm về 1. |
| `\pagestyle{fancy}` | Đặt kiểu đầu trang/chân trang đang chạy (thuần túy, trống, tiêu đề, tiêu đề của tôi, ưa thích) cho tất cả các trang tiếp theo. |
| `\thispagestyle{empty}` | Ghi đè kiểu đầu trang/chân trang chỉ cho trang hiện tại. |
| `\trang` | In số trang hiện tại; được sử dụng bên trong đầu trang và chân trang. |
| `\marginpar{...}` | Đặt ghi chú ở lề trang bên cạnh dòng hiện tại. |
| `\fancyhf{}` | Xóa tất cả các trường đầu trang và chân trang ưa thích trước khi thiết lập trường của riêng bạn. |
| `\fancyhead[R]{...}` | Đặt trường tiêu đề Fancyhdr, ở đây là trường bên phải. |
| `\fancyfoot[C]{\thepage}` | Đặt trường chân trang Fancyhdr, ở đây là số trang ở giữa. |
| `\headrulewidth` | macro Fancyhdr cho độ dày quy tắc tiêu đề; gia hạn thành 0pt để xóa dòng. |
| `\footrulewidth` | macro Fancyhdr cho độ dày quy tắc chân trang, 0pt theo mặc định. |
| `\newgeometry{margin=2cm}` | Thay đổi hình học trang giữa tài liệu (hình học). |
| `\khôi phục hình học` | Quay lại hình học mở đầu sau `\newgeometry` (hình học). |

## Ký tự đặc biệt

Mười ký tự dành riêng và cách in chúng, cùng với các ký hiệu văn bản thông dụng.

| Lệnh | Nó làm gì |
| --- | --- |
| `\%` | In dấu phần trăm (`%` trần bắt đầu nhận xét). |
| `\&` | In một ký hiệu (trống `&` là dấu phân cách cột của bảng). |
| `\#` | In một hàm băm (`#` trần đánh dấu các đối số macro). |
| `\_` | In dấu gạch dưới (trần `_` là chỉ số toán học). |
| `\{` và `\}` | In dấu ngoặc nhọn (nhóm dấu ngoặc nhọn). |
| `\$` | In ký hiệu đô la (`$` trần chuyển đổi chế độ toán học). |
| `\textbackslash` | In dấu gạch chéo ngược trong văn bản. |
| `\textasciitilde` | In dấu ngã trong văn bản (trống `~` là khoảng trắng không bị ngắt). |
| `\textasciicircum` | In dấu mũ trong văn bản (`^` trần là chỉ số trên toán học). |
| `\thanh văn bản` | In một thanh dọc trong văn bản. |
| `\textless`, `\textGreater` | In < và > chính xác ở chế độ văn bản. |
| `\ldots`, `\dots` | Dấu chấm lửng với khoảng cách chính xác; `\dots` thích ứng trong chế độ toán học (amsmath). |
| `\textellipsis` | Dấu chấm lửng ở chế độ văn bản mà `\dots` sử dụng bên ngoài toán học. |
| `\textendash`, `\textendash` | Các lệnh được đặt tên cho dấu gạch ngang em và en (đầu ra giống như `---` và `--`). |
| `\textquotedblleft`, `\textquotedbright` | Dấu ngoặc kép cong (thường được gõ dưới dạng cặp dấu ngược và cặp dấu nháy đơn). |
| `\guillemetleft`, `\guillemetright` | Dấu ngoặc kép góc của tiếng Pháp (cách viết cũ hơn: `\guillemotleft`/`\guillemotright`). |
| `\dag`, `\ddag` | Dao găm và dao găm đôi trong văn bản, phổ biến cho các liên kết tác giả. |
| `\S` | Ký hiệu phần, như trong S 2.1 của một văn bản pháp luật. |
| `\P` | Dấu hiệu đoạn (pilcrow). |
| `\ pound` | Dấu hiệu bảng Anh. |
| `\euro` | Ký hiệu Euro (gói eurosym; kernel cũng cung cấp `\texteuro`). |
| `\bản quyền` | Dấu hiệu bản quyền. |
| `\textregistered` | Dấu hiệu nhãn hiệu đã đăng ký. |
| `\texttrademark` | Dấu hiệu nhãn hiệu. |
| `\textdegree` | Ký hiệu độ: `25\textdegree C`. |
| `\textmu` | Micro thẳng đứngký hiệu cho văn bản như micron. |
| `\textperthousand` | Dấu hiệu trên mỗi milimet. |

## Dấu và chữ cái đặc biệt

Đối với các dấu văn bản thời pdfLaTeX; với đầu vào XeLaTeX/LuaLaTeX và UTF-8, bạn thường có thể chỉ cần nhập ký tự.

| Lệnh | Nó làm gì |
| --- | --- |
| `\'{e}` | Giọng cấp tính: e-cấp tính như trong quán cà phê có giọng. |
| `` \`{e} `` | Giọng nghiêm túc. |
| `\^{o}` | Giọng vòng tròn. |
| `\"{u}` | Âm sắc/dieresis. |
| `\~{n}` | Giọng dấu ngã, như trong dấu ngã n của tiếng Tây Ban Nha. |
| `\c{c}` | Cedilla, như trong tiếng Pháp c-cedilla. |
| `\v{s}` | Caron (hacek), phổ biến trong tên tiếng Séc và tiếng Croatia. |
| `\H{o}` | Giọng nói cấp tính kép của Hungary. |
| `\k{a}` | Ogonek, như trong tiếng Ba Lan a-ogonek. |
| `\b{o}` | Thanh dưới giọng. |
| `\d{u}` | Dấu chấm dưới, dùng trong phiên âm. |
| `\r{a}` | Giọng nhẫn, giống như trong tiếng a-ring của người Scandinavi. |
| `\u{o}` | Giọng Breve. |
| `\.{o}` | Dấu chấm trên. |
| `\t{oo}` | Tie giọng nối hai chữ cái. |
| `\i`, `\j` | Không có dấu chấm i và j, để xếp chồng các dấu: `\'{\i}`. |
| `\ae`, `\AE` | Các chữ ghép ae, chữ thường và chữ hoa. |
| `\oe`, `\OE` | Chữ ghép oe, như trong oeuvre của Pháp. |
| `\ss` | Tiếng Đức sắc nét s (eszett). |
| `\o`, `\O` | Chém o, như trong tên tiếng Đan Mạch và tiếng Na Uy. |
| `\l`, `\L` | Ba Lan chém l. |
| `\aa`, `\AA` | A-ring là một chữ cái độc lập, giống như tên của Angstrom. |

## Phông chữ và kích cỡ

| Lệnh | Nó làm gì |
| --- | --- |
| `\textbf{...}` | Văn bản in đậm. |
| `\textit{...}` | Văn bản in nghiêng. |
| `\emph{...}` | Nhấn mạnh phù hợp với ngữ cảnh: in nghiêng trong văn bản thẳng đứng, thẳng đứng trong văn bản in nghiêng. |
| `\textsc{...}` | Văn bản viết hoa nhỏ. |
| `\texttt{...}` | Văn bản máy đánh chữ (dấu cách đơn), phù hợp cho mã và tên tệp. |
| `\textrm{...}` | Văn bản họ La Mã (serif). |
| `\textsf{...}` | Văn bản gia đình Sans-serif. |
| `\textmd{...}` | Trọng lượng trung bình (bình thường), hoàn tác đậm. |
| `\textup{...}` | Hình dạng thẳng đứng, hoàn tác in nghiêng hoặc nghiêng. |
| `\textsl{...}` | Hình dạng nghiêng (xiên), khác với chữ nghiêng thật. |
| `\textnormal{...}` | Đặt lại phông chữ mặc định của tài liệu trong một bước. |
| `\gạch dưới{...}` | Gạch chân văn bản; sử dụng một cách tiết kiệm, nhấn mạnh thường là `\emph`. |
| `\rmfamily`, `\sffamily`, `\ttfamily` | Tuyên bố chuyển đổi họ phông chữ (serif, sans, mono) cho đến khi nhóm kết thúc. |
| `\bfseries`, `\mdseries` | Các tờ khai chuyển sang đậm hoặc trở lại đậm vừa phải. |
| `\itshape`, `\slshape`, `\scshape`, `\upshape` | Khai báo chuyển đổi hình dạng: in nghiêng, nghiêng, viết hoa nhỏ, thẳng đứng. |
| `\ normalfont` | Tuyên bố đặt lại họ, chuỗi và hình dạng về mặc định. |
| `\em` | Mẫu khai báo `\emph`: `{\em like this}`. |
| `\tiny` | Lệnh nhỏ nhất trong mười lệnh kích thước. |
| `\scriptsize` | Kích thước nhỏ thứ hai, kích thước gần bằng chỉ số dưới. |
| `\footnotesize` | Kích thước được sử dụng cho chú thích cuối trang. |
| `\nhỏ` | Hơi nhỏ hơn bình thường. |
| `\bình thường hóa` | Kích thước cơ sở của tài liệu. |
| `\large`, `\Large`, `\LARGE` | Lớn hơn một, hai và ba bước so với bình thường. |
| `\khổng lồ`, `\khổng lồ` | Hai kích thước tiêu chuẩn lớn nhất. |
| `\fontsize{14}{17}\selectfont` | Đặt kích thước phông chữ tùy ý và bỏ qua đường cơ sở, sau đó kích hoạt nó. |
| `\selectfont` | Kích hoạt thuộc tính phông chữ đang chờ xử lýthay đổi (NFSS). |
| `\textsuperscript{...}` | Văn bản nhỏ được nâng lên, như trong các điểm đánh dấu kiểu đầu tiên hoặc chú thích cuối trang. |
| `\textsubscript{...}` | Đã giảm văn bản nhỏ ở chế độ văn bản. |
| `\familydefault` | Macro giữ họ phông chữ mặc định; gia hạn nó để thay đổi phông chữ của toàn bộ tài liệu. |
| `\sfdefault` | Đặt tên macro cho họ sans-serif; `\renewcommand{\familydefault}{\sfdefault}` làm cho tài liệu không có giá trị. |
| `\setmainfont{...}` | Đặt phông chữ nội dung chính theo tên trong XeLaTeX hoặc LuaLaTeX (fontspec). |
| `\setsansfont{...}` | Đặt phông chữ sans-serif theo tên trong XeLaTeX hoặc LuaLaTeX (fontspec). |
| `\setmonofont{...}` | Đặt phông chữ đơn cách theo tên trong XeLaTeX hoặc LuaLaTeX (fontspec). |

## Màu sắc (xcolor)

| Lệnh | Nó làm gì |
| --- | --- |
| `\textcolor{red}{...}` | Tô màu một đoạn văn bản. |
| `\color{blue}` | Mẫu khai báo: tô màu mọi thứ cho đến khi kết thúc nhóm. |
| `\definecolor{thương hiệu}{HTML}{2F6F4F}` | Xác định một màu được đặt tên để sử dụng sau này. |
| `\pagecolor{gray!10}` | Đặt màu nền của toàn bộ trang. |
| `\rowcolor{gray!20}` | Tô màu một hàng trong bảng (xcolor với tùy chọn `table`, thông qua colortbl). |
| `\cellcolor{gray!20}` | Tô màu một ô trong bảng (colortbl). |
| `\rowcolors{2}{gray!10}{white}` | Màu hàng xen kẽ bắt đầu từ một hàng nhất định (tùy chọn xcolor `table`). |

## Đồ họa (graphicx)

| Lệnh | Nó làm gì |
| --- | --- |
| `\includegraphics[width=\linewidth]{plot.pdf}` | Chèn một tập tin hình ảnh; các tùy chọn chính: `width`, `height`, `scale`, `angle`, `trim`+`clip`, `page`. |
| `\graphicspath{{figures/}}` | Cho LaTeX biết thư mục nào cần tìm kiếm tệp hình ảnh. |
| `\rotatebox[origin=c]{90}{...}` | Xoay nội dung của nó theo một góc. |
| `\scalebox{0.8}{...}` | Chia tỷ lệ nội dung của nó theo một yếu tố. |
| `\resizebox{5cm}{!}{...}` | Thay đổi kích thước nội dung theo chiều rộng và/hoặc chiều cao mục tiêu; `!` giữ tỷ lệ khung hình. |
| `\reflectbox{...}` | Phản ánh nội dung của nó theo chiều ngang. |
| `\includepdf[pages=-]{paper.pdf}` | Chèn toàn bộ trang từ một tệp PDF khác (trang pdf). |

## Vào chế độ toán

| Lệnh | Nó làm gì |
| --- | --- |
| `$...$` | Toán nội tuyến trong một câu. |
| `\(...\)` | Dấu phân cách toán học nội tuyến chính thức của LaTeX, tương đương với `$...$`. |
| `\[...\]` | Phương trình hiển thị không được đánh số trên dòng riêng của nó. |
| `$$...$$` | Toán học hiển thị TeX đơn giản; không được khuyến khích trong LaTeX, thay vào đó hãy sử dụng `\[...\]`. |
| `x^2`, `x_i` | `^` tạo chỉ số trên và `_` tạo chỉ số dưới; ghép các tập lệnh nhiều ký tự: `x^{10}`. |

## Toán: chữ cái Hy Lạp

Tất cả những thứ này chỉ hoạt động ở chế độ toán học. Các dạng chữ hoa tồn tại khi chữ viết hoa của Hy Lạp khác với chữ Latinh.

| Lệnh | Nó làm gì |
| --- | --- |
| `\alpha` `\beta` `\gamma` `\delta` | Các chữ cái Hy Lạp alpha, beta, gamma, delta. |
| `\epsilon` `\zeta` `\eta` `\theta` | Các chữ cái Hy Lạp epsilon, zeta, eta, theta. |
| `\iota` `\kappa` `\lambda` `\mu` `\nu` | Các chữ cái Hy Lạp iota, kappa, lambda, mu, nu. |
| `\xi` `\pi` `\rho` `\sigma` `\tau` | Các chữ cái Hy Lạp xi, pi, rho, sigma, tau. |
| `\upsilon` `\phi` `\chi` `\psi` `\omega` | Các chữ cái Hy Lạp upsilon, phi, chi, psi, omega. |
| `\Gamma` `\Delta` `\Theta` `\Lambda` `\Xi` `\Pi` | Chữ cái Hy Lạp viết hoa Gamma đến Pi. |
| `\Sigma` `\Upsilon` `\Phi` `\Psi` `\Omega` | Chữ cái Hy Lạp viết hoa Sigma đến Omega. |
| `\varepsilon` `\vartheta` `\varpi` | Các dạng biến thể của epsilon (dạng xoăn được hầu hết các tờ báo sử dụng), theta và pi. |
| `\varrho` `\varsigma` `\varphi` | Các dạng biến thể của rho, sigma (từ cuối) và phi (xoăn mở). |
| `\varGamma` `\varDelta` `\varTheta` `\varLambda` | Các biến thể tiếng Hy Lạp viết hoa in nghiêng (amsmath). |
| `\varXi` `\varPi` `\varSigma` `\varUpsilon` `\varPhi` `\varPsi` `\varOmega` | Các biến thể chữ hoa in nghiêng còn lại của Hy Lạp (amsmath). |

## Toán: toán tử nhị phân

| Lệnh | Nó làm gì |
| --- | --- |
| `\pm`, `\mp` | Dấu cộng trừ và dấu trừ cộng. |
| `\ lần` | Phép nhân chéo, cũng được sử dụng cho các kích thước như 3 x 3. |
| `\div` | Dấu hiệu phân chia (obelus). |
| `\cdot` | Dấu chấm ở giữa để nhân. |
| `\ast`, `\star`, `\bullet`, `\circ` | Các toán tử dấu hoa thị, ngôi sao, dấu đầu dòng và vòng tròn nhỏ; `\circ` cũng là thành phần hàm. |
| `\oplus`, `\ominus` | Dấu cộng được khoanh tròn (tổng trực tiếp, XOR) và dấu trừ được khoanh tròn. |
| `\otimes`, `\oslash`, `\odot` | Dấu thời gian được khoanh tròn (tích tensor), dấu gạch chéo được khoanh tròn, dấu chấm được khoanh tròn. |
| `\wedge`, `\vee` | Nêm (logic AND, tích bên ngoài) và vee (logic OR, nối). |
| `\land`, `\lor` | Bí danh của `\wedge` và `\vee` được đặt tên theo cách đọc logic của chúng. |
| `\cap`, `\cup` | Đặt biển báo giao lộ và đoàn. |
| `\setminus` | Đặt dấu gạch chéo ngược khác biệt: `A \setminus B`. |
| `\upplus` | Liên kết với một dấu cộng, cho liên kết nhiều tập hợp hoặc rời rạc. |
| `\sqcap`, `\sqcup` | Nắp và cốc vuông, gặp nhau và nối nhau theo lý thuyết mạng tinh thể. |
| `\amalg` | Hỗn hợp (sản phẩm lộn ngược), được sử dụng cho các sản phẩm đồng thời. |
| `\dagger`, `\ddagger` | Dao găm và dao găm kép làm toán tử, ví dụ: chuyển đổi liên hợp `A^\dagger`. |
| `\bigtriangleup`, `\bigtriangledown` | Toán tử tam giác, ví dụ: sự khác biệt đối xứng. |
| `\tam giác trái`, `\tam giác phải` | Hình tam giác nằm ngang, ví dụ: quan hệ nhóm con chuẩn tắc. |

## Toán: quan hệ

| Lệnh | Nó làm gì |
| --- | --- |
| `\leq`, `\le` | Dấu nhỏ hơn hoặc bằng (`\le` là bí danh ngắn). |
| `\geq`, `\ge` | Dấu lớn hơn hoặc bằng (`\ge` là bí danh ngắn). |
| `\neq`, `\ne` | Dấu không bằng (`\ne` là bí danh viết tắt). |
| `\ll`, `\gg` | Dấu hiệu nhỏ hơn nhiều và lớn hơn nhiều. |
| `\khoảng` | Dấu hiệu xấp xỉ bằng nhau. |
| `\sim` | Mối quan hệ dấu ngã, đọc là 'được phân phối dưới dạng' hoặc 'tương tự với'. |
| `\simeq` | Dấu tiệm cận bằng (dấu ngã trên bằng). |
| `\công` | Dấu đồng dư (dấu ngã trên hai vạch), được sử dụng cho đẳng cấu. |
| `\tương đương` | Dấu hiệu giống hệt (ba vạch), cũng được sử dụng cho sự đồng đẳng. |
| `\propto` | Ký hiệu tỷ lệ thuận. |
| `\không có triệu chứng` | Mối quan hệ tương đương tiệm cận (các đường cong xếp chồng). |
| `\doteq` | Dấu bằng có dấu chấm, đọc là 'tiếp cận' hoặc 'được định nghĩa là'. |
| `\prec`, `\thành công` | Đi trước và nối tiếp các mối quan hệ, trật tự cong. |
| `\preceq`, `\thành công` | Đi trước hoặc bằng và thành công hoặc bằng. |
| `\tập hợp con`, `\subseteq` | Tập hợp con và dấu hiệu tập hợp con hoặc bằng thích hợp. |
| `\supset`, `\supseteq` | Dấu hiệu superset và superset-hoặc-bằng thích hợp. |
| `\sqsubseteq`, `\sqsupseteq` | Quan hệ tập hợp con vuông và siêu tập hợp, được sử dụng để sắp xếp thông tin. |
| `\in`, `\notin` | Đặt tư cách thành viên và phủ định của nó: `x \in A`. |
| `\ni` | Thành viên đảo ngược: tập hợp chứa phần tử. |
| `\vdash`, `\dashv` | Cửa quay 'chứng minh' và điều ngược lại của nó. |
| `\model` | Cửa quay đôi, đòi hỏi ngữ nghĩa. |
| `\perp` | Quan hệ vuông góc/độc lập. |
| `\song song` | Quan hệ thanh song song. |
| `\giữa` | Thanh dọc có khoảng cách quan hệ, như trong ký hiệu set-builder hoặc 'chia'. |
| `\không` | Phủ định mối quan hệ sau bằng cách in đè dấu gạch chéo: `\not\subset`. |

## Toán: mũi tên

| Lệnh | Nó làm gì |
| --- | --- |
| `\to`, `\rightarrow` | Mũi tên phải, như trong các loại hàm `f: A \to B` và giới hạn `x \to 0`. |
| `\gets`, `\leftarrow` | Mũi tên trái, cũng được dùng để gán trong mã giả. |
| `\leftrightarrow` | Mũi tên đơn hai đầu. |
| `\Mũi tên phải` | Mũi tên phải kép, đọc là 'ngụ ý'. |
| `\Mũi tên trái` | Mũi tên đôi trái, đọc là 'được ngụ ý bởi'. |
| `\Leftrightarrow` | Mũi tên đôi hai đầu, đọc là 'nếu và chỉ nếu'. |
| `\ngụ ý`, `\ngụ ý` | Giãn cách `\Rightarrow` và `\Leftarrow` cho logic (amsmath). |
| `\iff` | Giãn cách `\Leftrightarrow` cho 'nếu và chỉ nếu'. |
| `\mapsto` | Mũi tên bản đồ tới có đuôi thanh: `x \mapsto x^2`. |
| `\longmapsto` | Phiên bản dài của `\mapsto`. |
| `\hookrightarrow` | Mũi tên phải có đuôi móc, để bao gồm/nhúng. |
| `\rightharpoonup` | Cây lao phải (nửa mũi tên), dùng cho sự hội tụ yếu. |
| `\rightleftharpoons` | Cặp đôi lao đối lập nhau, như ở trạng thái cân bằng hóa học. |
| `\leadsto` | Mũi tên phải nguệch ngoạc, 'dẫn đến' (amssymb). |
| `\uparrow`, `\downarrow` | Mũi tên lên và xuống. |
| `\updownarrow` | Mũi tên dọc hai đầu. |
| `\Uparrow`, `\Downarrow`, `\Updownarrow` | Mũi tên dọc xếp đôi. |
| `\near`, `\seaarrow` | Mũi tên chéo hướng đông bắc và đông nam, ví dụ: tăng/giảm đến một giới hạn. |
| `\swarrow`, `\nwarrow` | Mũi tên chéo hướng Tây Nam và Tây Bắc. |
| `\longrightarrow`, `\longleftarrow` | Mũi tên đơn dài. |
| `\Longrightarrow`, `\Longleftarrow`, `\Longleftrightarrow` | Mũi tên đôi dài. |
| `\xrightarrow{f}` | Mũi tên phải có thể mở rộng với nhãn ở trên cùng, tăng dần cho vừa (amsmath). |
| `\xleftarrow{f}` | Mũi tên trái có thể mở rộng có nhãn ở trên cùng (amsmath). |

## Toán: toán tử lớn

| Lệnh | Nó làm gì |
| --- | --- |
| `\sum_{i=1}^{n}` | Dấu hiệu tổng hợp với giới hạn. |
| `\prod_{i=1}^{n}` | Dấu hiệu sản phẩm có giới hạn. |
| `\coprod` | Dấu hiệu sản phẩm lộn ngược (sản phẩm lộn ngược). |
| `\int_0^1` | Dấu tích phân có giới hạn. |
| `\iint` | Dấu tích phân kép (amsmath). |
| `\iiint` | Dấu tích phân ba (amsma). |
| `\oint` | Dấu hiệu tích phân đường viền (vòng kín). |
| `\bigcap`, `\bigcup` | Giao lộ lớn và sự kết hợp trên một nhóm các bộ. |
| `\bigsqcup` | Cốc vuông lớn (ly hợp rời rạc). |
| `\bigvee`, `\bigwedge` | OR lớn và AND lớn trên một tập hợp chỉ mục. |
| `\bigoplus`, `\bigotimes`, `\bigodot` | Dấu cộng, thời gian và dấu chấm được khoanh tròn lớn cho các tổng và tích được lập chỉ mục của các cấu trúc. |
| `\biguplus` | Sự kết hợp lớn với cộng trên một tập hợp chỉ mục. |
| `\giới hạn` | Buộc chỉ số phụ/chỉ số trên của toán tử sau lên trên và dưới: `\int\limits_0^1`. |
| `\nolimits` | Buộc chỉ số phụ/chỉ số trên sang một bên thay vì bên trên và bên dưới. |

## Toán: dấu phân cách và kích thước

| Lệnh | Nó làm gì |
| --- | --- |
| `\left( ... \right)` | Cặp dấu phân cách có kích thước tự động phát triển để phù hợp với nội dung của nó. |
| `\left.` và `\right.` | Đối tác vô hình khi chỉ cần một mặt của một cặp có kích thước, như trong thanh đánh giá. |
| `\giữa|` | Dấu phân cách ở giữa có kích thước tự động giữa `\left` và `\right` (như trong xác suất có điều kiện). |
| `\big( \Big( \bigg( \Bigg(` | Dấu phân cách có kích thước thủ công, từ hơi lớn đến rất lớn. |
| `\bigl(...\bigr)` | Dấu phân cách có kích thước với khoảng cách đóng/mở chính xác (cũng như `\Bigl`, `\biggl`, `\Biggl`). |
| `\lfloor`, `\rfloor` | Giá đỡ sàn. |
| `\lceil`, `\rceil` | Giá đỡ trần. |
| `\langle`, `\rangle` | Dấu phân cách khung góc trái và phải. |
| `\|` | Dấu phân cách thanh dọc đôi (thanh định mức). |
| `\lvert`, `\rvert` | Thanh giá trị tuyệt đối có khoảng cách phân cách chính xác (amsmath). |
| `\lVert`, `\rVert` | Thanh đôi cho các chỉ tiêu, với khoảng cách phân cách chính xác (amsmath). |
| `\dấu gạch chéo ngược` | Dấu gạch chéo ngược dưới dạng ký hiệu toán học hoặc dấu phân cách. |

## Toán: dấu và trang trí

| Lệnh | Nó làm gì |
| --- | --- |
| `\hat{x}` | Điểm nhấn chiếc mũ nhỏ trên một biểu tượng. |
| `\kiểm tra{x}` | Giọng Caron (mũ ngược). |
| `\breve{x}` | Giọng Breve (tròn). |
| `\cấp tính{x}`, `\grave{x}` | Điểm nhấn cấp tính và nghiêm trọng trong toán học. |
| `\dấu ngã{x}` | Dấu ngã trên một biểu tượng. |
| `\bar{x}` | Thanh ngắn trên một biểu tượng. |
| `\vec{v}` | Mũi tên nhỏ trên một biểu tượng. |
| `\dot{x}`, `\ddot{x}` | Một hoặc hai dấu chấm trên một ký hiệu, phổ biến cho đạo hàm thời gian. |
| `\dddot{x}` | Ba dấu chấm trên một biểu tượng (amsmath). |
| `\mathring{x}` | Nhấn mạnh vào một biểu tượng. |
| `\widehat{abc}` | Chiếc mũ rộng trải dài trên một số biểu tượng. |
| `\widetilde{abc}` | Dấu ngã rộng trải dài trên một số biểu tượng. |
| `\overrightarrow{AB}` | Kéo dài mũi tên phải qua một biểu thức, như trong vectơ từ A đến B. |
| `\overleftarrow{AB}` | Kéo dài mũi tên trái qua một biểu thức. |
| `\overline{x + y}` | Dòng trên toàn bộ biểu thức. |
| `\gạch dưới{x + y}` | Dòng dưới toàn bộ biểu thức (cũng hoạt động trong văn bản). |
| `\overbrace{...}^{n}` | Dấu ngoặc ngang phía trên một biểu thức, có nhãn tùy chọn ở trên cùng. |
| `\underbrace{...__{n}` | Dấu ngoặc ngang bên dưới một biểu thức, có nhãn tùy chọn bên dưới. |
| `\overset{!}{=}` | Đặt một biểu tượng lên trên một biểu tượng khác, ví dụ: 'phải bằng' (amsmath). |
| `\underset{i}{\max}` | Đặt một biểu tượng bên dưới một biểu tượng khác (amsmath). |
| `\stackrel{\text{def}}{=}` | Lệnh kernel cũ hơn xếp chồng một ký hiệu lên trên một mối quan hệ. |
| `\boldsymbol{\beta}` | Toán in đậm cũng in đậm các chữ cái và ký hiệu Hy Lạp (amsmath). |
| `\chính` | Biểu tượng nguyên tố; `x'` là cách viết tắt thông thường của `x^{\prime}`. |

## Toán: toán tử dạng log

Tất cả các kiểu chữ thẳng đứng với khoảng cách chính xác; những người lấy giới hạn sẽ đặt các chỉ số dưới đây trong phép toán hiển thị.

| Lệnh | Nó làm gì |
| --- | --- |
| `\sin`, `\cos`, `\tan`, `\cot` | Các hàm lượng giác cơ bản. |
| `\giây`, `\csc` | Secant và cosecant. |
| `\arcsin`, `\arccos`, `\arctan` | Hàm lượng giác nghịch đảo. |
| `\sinh`, `\cosh`, `\tanh`, `\coth` | Các hàm hyperbol. |
| `\exp`, `\ln`, `\log`, `\lg` | Hàm mũ và logarit (`\lg` là log cơ số 2 hoặc 10 theo quy ước). |
| `\det`, `\dim`, `\ker`, `\deg` | Xác định, kích thước, hạt nhân, mức độ. |
| `\gcd`, `\hom`, `\arg`, `\Pr` | Ước chung lớn nhất, tập hợp hom, đối số phức, xác suất. |
| `\lim_{x \to 0}` | Toán tử giới hạn, thẳng đứng với chỉ số dưới đây trong phép toán hiển thị. |
| `\limsup`, `\liminf` | Hạn chế cấp trên và cấp dưới. |
| `\inf`, `\sup` | Toán tử tối thiểu và tối cao, sắp chữ thẳng đứng. |
| `\min`, `\max` | Các toán tử tối thiểu và tối đa, sắp chữ thẳng đứng với các giới hạn bên dưới trong phép toán hiển thị. |
| `\bmod` | Toán tử mod nhị phân với khoảng cách toán tử: `a \bmod n`. |
| `\pmod{n}` | Dấu ngoặc đơn '(mod n)'. |
| `\mod{n}` | Dấu 'mod n' không có dấu ngoặc đơn (amsmath). |
| `\tên toán tử{lcm}` | Tên toán tử thẳng đứng một lần không có phần mở đầu (amsmath). |
| `\operatorname*{ess\,sup}` | Toán tử một lần có giới hạn dưới đây (amsmath). |

## Toán: phân số, nhị thức và xếp chồng

| Lệnh | Nó làm gì |
| --- | --- |
| `\frac{a}{b}` | Phân số xếp chồng: tử số trên mẫu số. |
| `\dfrac{a}{b}` | Phân số buộc phải hiển thị đầy đủ kích thước, kể cả nội tuyến (amsmath). |
| `\tfrac{a}{b}` | Phân số buộc phải có kích thước nội tuyến nhỏ, ngay cả trong phép toán hiển thị (amsmath). |
| `\cfrac{a}{b}` | Phân số tiếp tục với các mức lồng nhau có kích thước đầy đủ (amsmath). |
| `\sqrt{x}`, `\sqrt[3]{x}` | Căn bậc hai; đối số tùy chọn đưa ra gốc thứ n. |
| `\binom{n}{k}` | Hệ số nhị thức trong ngoặc đơn (amsmath). |
| `\dbinom{n}{k}`, `\tbinom{n}{k}` | Nhị thức bắt buộc có kích thước hiển thị và kích thước văn bản (amsmath). |
| `{n \choose k}` | Nguyên thủy nhị thức TeX đơn giản; không được khuyến khích trong LaTeX, hãy sử dụng `\binom`. |
| `{a \over b}` | Phân số TeX nguyên thủy; không được khuyến khích trong LaTeX, hãy sử dụng `\frac`. |
| `{a \atop b}` | Xếp chồng TeX đơn giản nguyên thủy không có thanh; không nản lòng, hãy sử dụng `\substack` hoặc `\genfrac`. |
| `\genfrac{(}{)}{0pt}{}{a}{b}` | Trình tạo phân số chung đằng sau `\frac`, `\binom` và những người bạn (amsmath). |
| `\substack{i < n \\ j < m}` | Chỉ số dưới nhiều dòng dưới một toán tử lớn (amsmath). |
| `\sideset{_a^b}{_c^d}{\prod}` | Gắn các chỉ số vào cả bốn góc của một toán tử lớn (amsmath). |
| `\prescript{a}{b}{X}` | Siêu/chỉ số bên trái, như trong ký hiệu đồng vị (mathtools). |

## Toán: khoảng cách và kiểu dáng

| Lệnh | Nó làm gì |
| --- | --- |
| `\,` | Không gian toán học mỏng, giữa một số và đơn vị của nó. |
| `\:` | Không gian toán học trung bình. |
| `\;` | Không gian toán học dày đặc. |
| `\!` | Không gian mỏng âm, kéo các biểu tượng lại gần nhau hơn. |
| `\quad`, `\qquad` | Dấu cách một em và hai em, trong toán học hoặc văn bản. |
| `\displaystyle` | Buộc định cỡ phép toán hiển thị đầy đủ, ví dụ: giới hạn lớn bên trong toán học nội tuyến. |
| `\textstyle` | Buộc định cỡ phép toán nội tuyến bên trong phép toán hiển thị. |
| `\scriptstyle`, `\scriptstyle` | Buộc định cỡ chỉ số dưới và chỉ số dưới. |

## Toán: các chữ cái, bảng chữ cái và các ký hiệu linh tinh

| Lệnh | Nó làm gì |
| --- | --- |
| `\mathbb{R}` | Bảng chữ in đậm cho bộ số (amssymb). |
| `\mathbf{x}` | Chữ in đậm trong toán học, phổ biến cho vectơ và ma trận. |
| `\mathcal{L}` | Chữ in hoa thư pháp, ví dụ: một sự mất mát hoặc Lagrangian. |
| `\mathfrak{g}` | Chữ Fraktur, được sử dụng trong đại số và logic. |
| `\mathscr{F}` | Chữ viết hoa, cong hơn `\mathcal` (mathrsfs). |
| `\mathrm{d}x` | Các chữ cái thẳng đứng (La Mã) trong toán học, cho các đơn vị và tên có nhiều chữ cái. |
| `\mahit{khác}` | Mã định danh nhiều chữ cái in nghiêng với khoảng cách giống như từ. |
| `\mathsf{T}`, `\mathtt{x}` | Sans-serif và chữ đánh máy trong toán học. |
| `\bm{\beta}` | Các ký hiệu toán học đậm, một sự thay thế cho `\boldsymbol` (gói bm). |
| `\text{if } x > 0` | Văn bản thẳng đứng bình thường bên trong toán học với khoảng cách thích hợp (amsmath). |
| `\infty` | Dấu hiệu vô cực. |
| `\một phần` | Dấu hiệu đạo hàm riêng (xoăn d). |
| `\nabla` | Toán tử Nabla (del) cho độ dốc và phân kỳ. |
| `\hbar` | Hằng số Planck giảm, h bằng một thanh. |
| `\ ell` | Chữ viết thường l, được sử dụng để tránh nhầm lẫn với chữ số 1. |
| `\wp` | Weierstrass p. |
| `\Re`, `\Im` | Ký hiệu phần thực và phần ảo (Fraktur R và I). |
| `\aleph` | Aleph, dành cho hồng y vô hạn. |
| `\bộ trống` | Dấu hiệu đặt trống. |
| `\varnothing` | Biến thể tập trống tròn hơn được nhiều tác giả ưa thích (amssymb). |
| `\góc` | Ký hiệu góc. |
| `\góc đo` | Ký hiệu góc đo có hình cung (amssymb). |
| `\tam giác` | Biểu tượng tam giác. |
| `\vuông`, `\blacksquare` | Các ô vuông mở và đầy; phần điền thường kết thúc bằng chứng (amssymb). |
| `\kim cương`, `\hình thoi` | Nhà điều hành kim cương nhỏ; biểu tượng hình thoi (amssymb cho cái sau). |
| `\top`, `\bot` | Ký hiệu trên cùng (đúng) và dưới cùng (sai/không xác định). |
| `\forall`, `\exists` | Phổ quát ('cho tất cả')và các bộ định lượng hiện sinh ('có tồn tại'). |
| `\nexists` | Bộ định lượng hiện sinh phủ định (amssymb). |
| `\neg` | Dấu KHÔNG logic. |
| `\do đó`, `\vì` | Dấu ba chấm 'vì vậy' và 'vì' (amssymb). |
| `\phẳng`, `\tự nhiên`, `\sắc nét` | Tai nạn âm nhạc, cũng được sử dụng trong ký hiệu toán học. |
| `\surd` | Biểu tượng căn bản trần trụi không có đối số. |
| `\dấu kiểm` | Dấu kiểm (amssymb). |
| `\cdots` | Các dấu chấm ở giữa, giữa các toán tử: `x_1 + \cdots + x_n`. |
| `\vdots`, `\ddots` | Các chấm dọc và chéo, chủ yếu ở dạng ma trận. |
| `\dotsb`, `\dotsc` | Dấu chấm ngữ nghĩa: giữa các toán tử nhị phân và giữa các dấu phẩy (amsmath). |

## công cụ hiển thị amsmath và mathtools

| Lệnh | Nó làm gì |
| --- | --- |
| `\tag{...}` | Thay thế số phương trình tự động bằng nhãn của riêng bạn (amsmath). |
| `\tag*{...}` | Giống như `\tag` nhưng không có dấu ngoặc đơn xung quanh (amsmath). |
| `\notag` | Loại bỏ số phương trình trên một dòng của môi trường được đánh số (amsmath). |
| `\nonumber` | Từ đồng nghĩa cũ hơn của `\notag`. |
| `\numberwithin{phương trình}{section}` | Phương trình số từng phần: (2.1), (2.2) (amsmath). |
| `\intertext{...}` | Ngắt khối căn chỉnh bằng một dòng văn bản có chiều rộng đầy đủ, giữ nguyên căn chỉnh (amsmath). |
| `\shortintertext{...}` | Giống như `\intertext` với ít không gian theo chiều dọc hơn (công cụ toán học). |
| `\allowdisplaybreaks` | Cho phép hiển thị nhiều dòng ngắt giữa các trang (amsmath). |
| `\displaybreak` | Yêu cầu ngắt trang tại thời điểm này của màn hình (amsmath). |
| `\smashoperator{\sum_{i=1}^{n}}` | Cho phép toán tử rộng giới hạn phần nhô ra để chúng không đẩy nội dung ra xa nhau (mathtools). |
| `\mathclap{...}` | Nội dung toán học có độ rộng bằng 0, dành cho phần ghi dưới/ghi đè rộng (công cụ toán học). |
| `\coloneqq` | Dấu hiệu định nghĩa dấu hai chấm bằng := với khoảng cách chính xác (mathtools). |
| `\DeclarePairedDelimiter{\abs}{\lvert}{\rvert}` | Xác định macro dấu phân cách bằng biểu mẫu tự động định cỡ có gắn dấu sao (mathtools). |
| `\eqref{eq:loss}` | In số phương trình với dấu ngoặc đơn của nó (amsmath). |
| `\qedhere` | Di chuyển hình vuông cuối cùng lên dòng hiện tại, ví dụ: sau một phương trình được hiển thị (amsthm). |

## Môi trường toán học

| Môi trường | Nó làm gì |
| --- | --- |
| `phương trình` | Một phương trình được hiển thị, đánh số. |
| `phương trình*` | Một phương trình được hiển thị, không đánh số (amsmath). |
| `căn chỉnh` | Nhiều phương trình được hiển thị được căn chỉnh tại dấu `&`, mỗi phương trình được đánh số (amsmath). |
| `căn chỉnh*` | Căn chỉnh các phương trình không có số (amsmath). |
| `tập hợp` | Nhiều phương trình có tâm không căn chỉnh, mỗi phương trình được đánh số (amsmath). |
| `căn chỉnh` | Căn chỉnh các phương trình với khoảng cách được kiểm soát thủ công giữa các cột (amsmath). |
| `tung hoành` | Các phương trình căn chỉnh được đẩy sang lề trái và lề phải (amsmath). |
| `chia` | Tách một phương trình dài thành các dòng thẳng hàng dưới một số duy nhất, bên trong `phương trình` (amsmath). |
| `đa dòng` | Một phương trình dài được chia thành các dòng: dòng đầu tiên bên trái, dòng cuối cùng bên phải (amsmath). |
| `liên kết`, `tập hợp` | Các phiên bản khối xây dựng của căn chỉnh/thu thập có thể sử dụng được bên trong một màn hình khác (amsmath). |
| `phương trình con` | Đánh số các phương trình bên trong là 1a, 1b, 1c (amsmath). |
| `trường hợp` | Phân biệt trường hợp được nhóm trong dấu ngoặc nhọn, như trong các hàm từng phần (amsmath). |
| `dcase` | `case` với các mục nhập kiểu hiển thị để phân số giữ nguyên kích thước đầy đủ (công cụ toán học). |
| `ma trận` | Ma trận trần không có dấu phân cách (amsmath). |
| `pmatrix` | Ma trận được bọc trong ngoặc đơn (amsmath). |
| `bmatrix` | Ma trận được bọc trong dấu ngoặc vuông (amsmath). |
| `Bmatrix` | Ma trận được bọc trong dấu ngoặc nhọn (amsmath). |
| `vmatrix` | Ma trận được bọc trong các thanh dọc, ký hiệu định thức chuẩn (amsmath). |
| `Vmatrix` | Ma trận được bọc trong thanh đôi (amsmath). |
| `ma trận nhỏ` | Kích thước ma trận nhỏ gọn để sử dụng nội tuyến (amsmath). |
| `mảng` | Lưới chế độ toán học có tính năng căn chỉnh theo từng cột, họ hàng toán học của `tabular`. |
| `eqnarray` | Môi trường phương trình ba cột cũ; chán nản, khoảng cách của nó sai, hãy sử dụng `align`. |

## Tham khảo chéo và liên kết

| Lệnh | Nó làm gì |
| --- | --- |
| `\label{fig:setup}` | Đặt tên cho một vị trí (phương trình, hình vẽ, phần) để bạn có thể tham khảo. |
| `\ref{fig:setup}` | In số của một mục được gắn nhãn. |
| `\pageref{fig:setup}` | In số trang nơi nhãn tồn tại. |
| `\cref{fig:setup}` | Tự động in số VÀ tên loại của nó: 'fig. 1' (thông minh). |
| `\Cref{fig:setup}` | Viết hoa `\cref` ở đầu câu: 'Hình 1' (cleveref). |
| `\crefrange{eq:a}{eq:d}` | In một phạm vi: 'eqs. 1 đến 4' (thông minh). |
| `\labelcref{fig:setup}` | Chỉ in số nhãn theo kiểu khéo léo mà không có tên loại (cleveref). |
| `\vref{fig:setup}` | Tham chiếu cộng với cụm từ 'trên trang tiếp theo' tự động khi cần thiết (varioref). |
| `\autoref{fig:setup}` | tham chiếu đã gõ của hyperref: 'Hình 1', với toàn bộ cụm từ được liên kết. |
| `\nameref{sec:intro}` | In văn bản tiêu đề của phần được tham chiếu (hyperref). |
| `\href{https://example.com}{link text}` | Tạo liên kết có thể nhấp bằng văn bản tùy chỉnh (hyperref). |
| `\url{https://example.com}` | Sắp xếp một URL theo kiểu máy đánh chữ và làm cho nó có thể nhấp được. |
| `\hyperref[sec:intro]{phần đó}` | Tạo liên kết văn bản tùy ý tới một nhãn (hyperref). |
| `\hypertarget{spot}{...}` | Tạo mục tiêu liên kết được đặt tên ở bất kỳ đâu trong tài liệu (hyperref). |
| `\siêu liên kết{spot}{text}` | Liên kết đến một `\hypertarget` (hyperref). |
| `\phantomsection` | Tạo một điểm neo để các liên kết đến các tiêu đề không được đánh số sẽ ở đúng vị trí (hyperref). |
| `\texorpdfstring{$\alpha$}{alpha}` | Cung cấp giải pháp thay thế văn bản thuần túy cho toán học trong các tiêu đề để dấu trang PDF vẫn hợp lệ (hyperref). |
| `\pdfbookmark[1]{Tiêu đề}{name}` | Thêm mục nhập dấu trang PDF thủ công (hyperref). |

## Trích dẫn và thư mục

| Lệnh | Nó làm gì |
| --- | --- |
| `\cite{knuth1984}` | Trích dẫn một mục thư mục theo khóa. |
| `\nocite{key}` | Thêm một mục vào thư mục mà không trích dẫn nó trong văn bản; `\nocite{*}` thêm mọi thứ. |
| `\citep{knuth1984}` | Trích dẫn trong ngoặc '(Knuth, 1984)' theo kiểu natbib theo năm tác giả. |
| `\citet{knuth1984}` | Trích dẫn văn bản 'Knuth (1984)' theo phong cách năm tác giả natbib. |
| `\citeauthor{knuth1984}` | Chỉ in tên tác giả (natbib và biblatex). |
| `\citeyear{knuth1984}` | Chỉ in năm (natbib và biblatex). |
| `\citealp{knuth1984}` | trích dẫn trong ngoặc đơn natbib không có dấu ngoặc đơn để xây dựng trích dẫn của riêng bạn. |
| `\citealt{knuth1984}` | trích dẫn văn bản natbib không có dấu ngoặc đơn quanh năm. |
| `\parencite{knuth1984}` | trích dẫn trong ngoặc đơn của biblatex, tương tự như `\citep`. |
| `\textcite{knuth1984}` | trích dẫn văn bản của biblatex, tương tự như `\citet`. |
| `\autocite{knuth1984}` | trích dẫn biblatex theo dạng ưa thích của phong cách (dấu ngoặc đơn, chú thích cuối trang, v.v.). |
| `\footcite{knuth1984}` | trích dẫn biblatex được đặt trong chú thích cuối trang. |
| `\fullcite{knuth1984}` | In nội tuyến toàn bộ văn bản thư mục của mục nhập (biblatex). |
| `\citetitle{knuth1984}` | In tiêu đề tác phẩm (biblatex). |
| `\thư mục{refs}` | BibTeX: in danh sách tham khảo từ tệp .bib. |
| `\bibliographystyle{plainnat}` | BibTeX: chọn định dạng tham chiếu; phong cách cổ điển bao gồm plain, unsrt, alpha, abbrv, ieeetr, acm, apalike. |
| `\addbibresource{refs.bib}` | biblatex: đăng ký tệp .bib trong phần mở đầu. |
| `\thư mục in` | biblatex: in danh sách tham khảo nơi bạn đặt nó. |
| `\bibitem{key}` | Một mục viết tay bên trong môi trường `thư mục`. |
| `thư mục` (môi trường) | Viết taydanh sách tham khảo được sử dụng khi bạn bỏ qua hoàn toàn BibTeX. |

## Phao, hình và bảng

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `hình` (môi trường) | Vùng chứa nổi cho hình ảnh cộng với chú thích; LaTeX chọn vị trí cuối cùng. |
| `hình*` (môi trường) | Hình bao trùm cả hai cột trong tài liệu hai cột. |
| `bảng` (môi trường) | Vùng chứa nổi cho chú thích dạng bảng cộng; LaTeX chọn vị trí cuối cùng. |
| `bảng*` (môi trường) | Bảng bao gồm cả hai cột trong tài liệu hai cột. |
| `\bắt đầu{hình[htbp]` | Gợi ý vị trí: tại đây, trên cùng, dưới cùng, trang riêng; `!` nới lỏng các quy tắc, `[H]` (gói float) có nghĩa chính xác ở đây. |
| `dạng bảng` (môi trường) | Lưới thực tế gồm các hàng và cột: các ô được chia bởi `&`, các hàng kết thúc bằng `\\`. |
| `dạng bảng*` (môi trường) | Bảng được kéo dài đến tổng chiều rộng được chỉ định. |
| `tabularx` (môi trường) | Bảng có chiều rộng cố định có các cột `X` chia sẻ khoảng trống còn lại (tabularx). |
| `mảng` (môi trường) | Lưới chế độ toán học có căn chỉnh theo từng cột. |
| `bảng dài` (môi trường) | Bảng có thể ngắt giữa các trang với các tiêu đề lặp lại (bảng dài). |
| `trang nhỏ` (môi trường) | Trang mini có chiều rộng cố định bên trong trang, dùng để đặt nội dung cạnh nhau. |
| `cấu hình phụ` (môi trường) | Một bảng phụ có chú thích riêng, như (a) và (b), bên trong một hình (chú thích phụ). |
| `wrapfigure` (môi trường) | Hình có nội dung bao quanh nó (wrapfig). |
| `sidewaysfigure`, `sidewaystable` (môi trường) | Phao xoay 90 độ trên trang riêng của chúng (xoay). |
| `cảnh quan` (môi trường) | Xoay toàn bộ trang sang ngang, với trang PDF được tự động xoay (pdflscape). |
| `ba phần` (môi trường) | Bao bọc một bảng để các chú thích cuối trang phù hợp với chiều rộng của bảng (có thể chia thành ba phần). |
| `tablenotes` (môi trường) | Danh sách ghi chú trong bảng ba phần, được đánh dấu bằng `\tnote{a}`. |
| `hộp điều chỉnh` (môi trườngvà `\ adjustmentbox`) | Chia tỷ lệ, thay đổi kích thước hoặc cắt bất kỳ nội dung nào bằng các tùy chọn khóa-giá trị (hộp điều chỉnh). |
| `\chú thích{...}` | Thêm chú thích được đánh số vào hình hoặc bảng; đặt `\label` sau nó. |
| `\caption*{...}` | Chú thích không có số hoặc mục danh sách (gói phụ đề). |
| `\captionsetup{...}` | Định cấu hình phông chữ phụ đề, nhãn và khoảng cách (gói phụ đề). |
| `\toprule` | Quy tắc nặng nề ở đầu bảng booktabs. |
| `\giữa` | Quy tắc trung bình giữa tiêu đề và nội dung của bảng booktabs. |
| `\bottomrule` | Quy tắc nặng nề ở cuối bảng booktabs. |
| `\cmidrule(lr){2-3}` | Quy tắc một phần bao trùm các cột đã chọn (tab sách). |
| `\addlinespace` | Khoảng cách dọc nhỏ hơn giữa các hàng của tab sách, thay vì một quy tắc. |
| `\hline` | Đường ngang có chiều rộng đầy đủ trong một bảng đơn giản; quy tắc của tab sách thường trông đẹp hơn. |
| `\cline{2-3}` | Đường ngang kéo dài các cột được chọn trong một bảng đơn giản. |
| `\vline` | Đường thẳng đứng tại điểm này của một hàng trong bảng; các công cụ xác định cột `|` là cách thông thường. |
| `\multicolumn{2}{c}{Header}` | Hợp nhất các ô trên các cột trong một hàng. |
| `\multirow{2}{*}{Label}` | Hợp nhất các ô theo chiều dọc trên các hàng (nhiều hàng). |
| `\arraystretch` | Hệ số chiều cao hàng bàn; được đặt bằng `\renewcommand{\arraystretch}{1.3}`. |
| `\tabcolsep` | Chiều dài của phần đệm ở mỗi bên của cột dạng bảng. |
| `\newcolumntype{C}{>{\centering\arraybackslash}X}` | Xác định một bộ xác định cột có thể tái sử dụng (gói mảng). |
| `\endfirsthead` | longtable: đánh dấu phần cuối của tiêu đề chỉ hiển thị trên trang đầu tiên. |
| `\endhead` | longtable: đánh dấu phần cuối của tiêu đề được lặp lại ở mỗi trang tiếp theo. |
| `\endfoot` | longtable: đánh dấu phần cuối của footer được hiển thị ở mỗi lần ngắt trang. |
| `\endlastfoot` | longtable: đánh dấu phần cuối của footer chỉ hiển thị ở phần cuối. |
|`\FloatBarrier` | Dừng phao trôi qua điểm này (placeins). |

## Chú thích cuối trang

| Lệnh | Nó làm gì |
| --- | --- |
| `\chú thích cuối trang{...}` | Đặt ghi chú ở cuối trang, được đánh dấu bằng số tự động. |
| `\chú thích` | Chỉ in điểm đánh dấu chú thích cuối trang, đối với những vị trí không cho phép `\footnote`. |
| `\footnotetext{...}` | Cung cấp văn bản cho `\footnotemark` trước đó. |

## Định lý và chứng minh

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `\định lý mới{bổ đề}{Bổ đề}` | Khai báo một môi trường giống như định lý (amsthm). |
| `\newtheorem*{remark}{Remark}` | Khai báo một môi trường giống như định lý không đánh số (amsthm). |
| `\theoremstyle{định nghĩa}` | Đặt giao diện (thuần túy, định nghĩa, nhận xét) cho các khai báo `\newtheorem` sau (amsthm). |
| `định lý` (môi trường) | Khối định lý được đánh số, được tạo bởi `\newtheorem{theorem}{Theorem}`. |
| `bằng chứng` (môi trường) | Khối bằng chứng in ra 'Bằng chứng.' và kết thúc bằng bình phương QED (amsthm). |

## Nguyên văn, mã và danh sách

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `\động từ|mã|` | Nguyên văn nội tuyến: in chính xác những gì bạn nhập, được phân cách bằng bất kỳ ký tự lặp lại nào. |
| `verbatim` (môi trường) | Khối văn bản được in chính xác như đánh máy, kiểu chữ máy đánh chữ. |
| `\verbatiminput{file.txt}` | In nguyên văn toàn bộ tập tin (gói nguyên văn). |
| `lstlisting` (môi trường) | Danh sách mã nguồn có tô sáng cú pháp tùy chọn (danh sách). |
| `\lstinline|code|` | Đoạn mã nội tuyến theo kiểu danh sách (danh sách). |
| `\lstset{ngôn ngữ=Python}` | Định cấu hình mặc định của danh sách: ngôn ngữ, đánh số, màu sắc (danh sách). |
| `\lstinputlisting{script.py}` | Sắp xếp toàn bộ tệp nguồn dưới dạng danh sách (danh sách). |
| `minted` (môi trường) | Các khối mã được đánh dấu được hỗ trợ bởi Pygments; cần `-shell-escape` tại thời điểm biên dịch (đúc). |
| `\mintinline{python}|code|` | Mã được đánh dấu nội tuyến (đúc). |

## Beamer (slide)

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `khung` (môi trường) | Một slide Beamer: `\begin{frame}{Slide title} ... \end{frame}`. |
| `\frame{...}` | Dạng slide một lệnh của Beamer; môi trường `frame` là cách thông thường. |
| `\frametitle{...}` | Đặt tiêu đề slide từ bên trong khung. |
| `\framesubtitle{...}` | Đặt phụ đề nhỏ hơn dưới tiêu đề khung. |
| `\trang tiêu đề` | Beamer: bên trong khung, in slide tiêu đề từ siêu dữ liệu tiêu đề của bạn. |
| `\tableofcontents[currentsection]` | Trang trình bày phác thảo làm nổi bật phần bạn đang xem. |
| `\tạm dừng` | Beamer: hiển thị phần còn lại của khung ở bước trượt tiếp theo. |
| `\trượt<2->` | Nội dung xuất hiện từ bước lớp phủ nhất định trở đi. |
| `\chỉ<2>{...}` | Nội dung chỉ tồn tại ở các bước nhất định và không có chỗ trống ở nơi khác. |
| `\khám phá<2->{...}` | Nội dung là vô hình trước bước của nó nhưng luôn dành không gian cho nó. |
| `\visible<2->{...}`, `\invisible<2>{...}` | Hiển thị hoặc ẩn nội dung ở các bước nhất định mà không thay đổi bố cục. |
| `\cảnh báo{...}` | Đánh dấu văn bản bằng màu cảnh báo của chủ đề, thường là màu đỏ. |
| `khối` (môi trường) | Hộp tiêu đề có màu tiêu chuẩn của chủ đề. |
| `alertblock` (môi trường) | Hộp có tiêu đề có màu cảnh báo, dành cho cảnh báo hoặc điểm chính. |
| `exampleblock` (môi trường) | Hộp có tiêu đề trong màu ví dụ, thường là màu xanh lá cây. |
| `cột` (môi trường) và `\column{0.5\textwidth}` | Các vùng bố trí cạnh nhau trên một slide. |
| `\usetheme{Madrid}` | Beamer: chọn chủ đề thuyết trình ở phần mở đầu. |
| `\usecolortheme{seahorse}` | Chỉ hoán đổi bảng màu của chủ đề. |
| `\usefonttheme{serif}` | Chỉ hoán đổi các lựa chọn phông chữ của chủ đề. |
| `\setbeamertemplate{ký hiệu điều hướng}{}` | Ghi đè một thành phần chủ đề, ở đây sẽ xóa các biểu tượng điều hướng. |
|`\setbeamercolor{title}{fg=black}` | Ghi đè một màu chủ đề. |
| `\ghi chú{...}` | Ghi chú của người thuyết trình được gắn vào khung, chỉ hiển thị ở đầu ra ghi chú. |

## TikZ và sơ đồ

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `tikzpicture` (môi trường) | Canvas cho bản vẽ TikZ; tất cả các lệnh `\draw` và `\node` đều nằm trong đó. |
| `\tikz` | Ảnh nội tuyến một lần chụp: `\tikz \draw (0,0) hình tròn (2pt);`. |
| `\rút (0,0) -- (1,1);` | Lệnh đường dẫn TikZ vẽ các đường và hình dạng; các tùy chọn như `[dày, đỏ, ->]` tạo kiểu cho nó. |
| `\điền` | Lệnh đường dẫn TikZ lấp đầy hình dạng thay vì vuốt nó. |
| `\điền vào` | Lệnh đường dẫn TikZ vừa điền vừa phác thảo một hình dạng. |
| `\bóng` | Lệnh đường dẫn TikZ lấp đầy một dải màu. |
| `\clip` | Đường dẫn TikZ hạn chế tất cả các bản vẽ sau này vào bên trong nó. |
| `\path` | Đường dẫn TikZ tính toán tọa độ mà không cần vẽ, ví dụ: để đặt các nút. |
| `\nút tại (0,0) {nhãn};` | Lệnh TikZ đặt văn bản hoặc hình dạng tại tọa độ. |
| `\tọa độ (a) tại (1,2);` | Đặt tên một điểm để sử dụng lại trong các đường dẫn sau này. |
| `\foreach \i trong {1,...,5}` | Vòng lặp lặp lại mã vẽ trên danh sách (TikZ/pgffor). |
| `\tikzset{mystyle/.style={...}}` | Xác định phong cách TikZ có thể tái sử dụng theo cách hiện đại. |
| `\tikzstyle` | Cú pháp định nghĩa kiểu cũ; không được dùng nữa, hãy sử dụng `\tikzset`. |
| `\usetikzlibrary{định vị}` | Tải các tính năng bổ sung của TikZ trong phần mở đầu. |
| `\ma trận` (TikZ) | Sự sắp xếp các nút theo dạng lưới bên trong tikzpicture. |
| `tikzcd` (môi trường) | Lưới biểu đồ giao hoán; các ô được chia bởi `&` (tikz-cd). |
| `\arrow[r, "f"]` | Vẽ một mũi tên giữa các ô trong sơ đồ giao hoán tikz-cd. |

## Đơn vị (siunitx)

| Lệnh | Nó làm gì |
| --- | --- |
| `\num{12345.678}` | Định dạng một số với nhóm chữ số thích hợp và dấu thập phân. |
| `\qty{9,8}{\met\per\second\squared}` | Số có đơn vị, cách đều nhau (tên siunitx v3). |
| `\đơn vị{\kilo\gram}` | Đơn vị một mình (tên siunitx v3). |
| `\SI{9,8}{\met\per\second\squared}` | v2 tên của `\qty`; vẫn được thấy rộng rãi trên báo chí. |
| `\si{\kilo\gram}` | tên v2 của `\đơn vị`. |
| `\sisetup{...}` | Cấu hình siunitx toàn cầu. |
| `\Khai báoSIUnit{\parsec}{pc}` | Xác định một đơn vị tùy chỉnh (siunitx). |

## Thuật ngữ và từ viết tắt

| Lệnh | Nó làm gì |
| --- | --- |
| `\gls{svm}` | In một mục thuật ngữ hoặc từ viết tắt, mở rộng nó trong lần sử dụng đầu tiên (bảng thuật ngữ). |
| `\Gls{svm}` | Dạng viết hoa khi bắt đầu câu (bảng chú giải thuật ngữ). |
| `\glspl{svm}` | Dạng số nhiều của mục nhập (bảng chú giải thuật ngữ). |
| `\newglossaryentry{tree}{name=tree, description={...}}` | Khai báo một thuật ngữ thuật ngữ (bảng chú giải thuật ngữ). |
| `\newacronym{svm}{SVM}{máy vectơ hỗ trợ}` | Khai báo một từ viết tắt với dạng ngắn và dài (bảng thuật ngữ). |
| `\acrshort{svm}`, `\acrlong{svm}` | Buộc sử dụng dạng ngắn hay dài bất kể lần sử dụng đầu tiên (bảng thuật ngữ). |
| `\makeglossaries` | Lệnh mở đầu kích hoạt xử lý bảng thuật ngữ/từ viết tắt (bảng thuật ngữ). |
| `\printglossary` | In một danh sách bảng thuật ngữ nơi bạn đặt nó (bảng thuật ngữ). |
| `\printbảng thuật ngữ` | In danh sách bảng thuật ngữ và từ viết tắt ở nơi bạn đặt nó (bảng thuật ngữ). |

## Thuật toán và mã giả

Các lệnh từ khóa được lấy từ algpseudocode (algorithmicx); float `thuật toán` bao bọc chúng.

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `thuật toán` (môi trường) | Vùng chứa nổi cho mã giả, có chú thích và số (thuật toán). |
| `thuật toán` (môi trường) | Bản thân phần thân mã giả, chứa các lệnh từ khóa (algpseudocode). |
| `\Bang` | Một dòng lệnh của mã giả. |
| `\If{...}`, `\ElsIf{...}`, `\Else`, `\EndIf` | Từ khóa khối có điều kiện. |
| `\For{...}`, `\ForAll{...}`, `\EndFor` | Lặp lại các từ khóa trên một phạm vi hoặc một tập hợp. |
| `\while{...}`, `\Endwhile` | Từ khóa vòng lặp while. |
| `\Function{Name}{args}`, `\EndFunction` | Khối định nghĩa hàm |
| `\Procedure{Name}{args}`, `\EndProcedure` | Khối định nghĩa thủ tục |
| `\Trở về` | Từ khóa trả lại. |
| `\Bình luận{...}` | Nhận xét được căn phải trên một dòng mã giả. |
| `\Yêu cầu`, `\Đảm bảo` | Các dòng tiền điều kiện và hậu điều kiện ở đầu thuật toán. |

## Gói ngôn ngữ, trích dẫn và biên tập

| Lệnh | Nó làm gì |
| --- | --- |
| `\selectlingu{tiếng Đức}` | Chuyển đổi ngôn ngữ hiện hoạt: gạch nối, chú thích, ngày tháng (babel). |
| `\ngoại ngữ{tiếng Pháp}{...}` | Sắp chữ một đoạn văn ngắn theo quy tắc của ngôn ngữ khác (babel). |
| `\enquote{...}` | Dấu ngoặc kép nhận biết ngữ cảnh lồng ghép và bản địa hóa chính xác (csquotes). |
| `\todo{Sửa lỗi này}` | Ghi chú bên lề gắn cờ công việc cần làm (todonotes). |
| `\listoftodos` | In danh sách tất cả các ghi chú việc cần làm (todonotes). |
| `\missingfigure{...}` | Hộp giữ chỗ cho hình bạn chưa tạo (todonnotes). |
| `\xspace` | Ở cuối macro, thêm dấu cách trừ khi có dấu câu theo sau (xspace). |
| `\patchcmd{\cmd}{find}{replace}{ok}{fail}` | Vá định nghĩa của macro hiện có tại chỗ (etoolbox). |
| `\apptocmd`, `\pretocmd` | Nối hoặc thêm thêm mã vào macro hiện có (hộp công cụ điện tử). |
| `\newtoggle{bản nháp}`, `\toggletrue{bản nháp}`, `\iftoggle{bản nháp}{...}{...}` | Cờ boolean nhẹ (etoolbox). |

## Gói bố cục và kiểu chữ trong một dòng

| Gói hoặc lệnh | Nó làm gì |
| --- | --- |
| `\setstretch{1.25}` | Đặt hệ số khoảng cách dòng chính xác (setspace). |
| `\ doublesspace` | Chuyển sang giãn cách dòng đôi (setspace). |
| `\một nửa khoảng cách` | Chuyển sang khoảng cách dòng một rưỡi (không gian cài đặt). |
| `\cách đơn` | Chuyển về giãn cách dòng đơn (setspace). |
| `khoảng cách` (môi trường) | Đặt hệ số khoảng cách dòng tùy chỉnh cho nội dung của nó (setspace). |
| `\titleformat{\section}{...}{...}{...}{...}` | Thiết kế lại giao diện của tiêu đề phân đoạn (titlesec). |
| `\titlespaces{\section}{0pt}{12pt}{6pt}` | Điều chỉnh khoảng trắng xung quanh tiêu đề (titlesec). |
| `\setlist[itemize]{noitemsep}` | Định cấu hình khoảng cách danh sách và nhãn trên toàn cầu hoặc theo cấp độ (enumitem). |
| `parskip` (gói) | Chuyển tài liệu sang chặn các đoạn văn: khoảng cách giữa, không thụt lề. |
| `microtype` (gói) | Sự nhô ra và mở rộng tinh tế giúp cải thiện sự biện minh; chỉ cần tải nó. |
| `multicols` (môi trường) | Văn bản nhiều cột được cân bằng mà không có tùy chọn lớp hai cột (multicol). |

## Hóa học, vật lý và ký hiệu miền

| Lệnh | Nó làm gì |
| --- | --- |
| `\ce{H2O}` | Sắp xếp một công thức hóa học hoặc phản ứng (mhchem). |
| `\chemfig{...}` | Vẽ sơ đồ cấu trúc hóa học (chemfig). |
| `\braket{\phi|\psi}` | Bộ sắp chữ Ký hiệu bra-ket Dirac với các thanh có kích thước tự động (phanh). |

## Lệnh lớp nhà xuất bản

| Lệnh hoặc môi trường | Nó làm gì |
| --- | --- |
| `\IEEEauthorblockN{...}` | IEEEtran: định dạng khối tên tác giả trong khu vực tiêu đề hội nghị IEEE. |
| `\IEEEauthorblockA{...}` | IEEEtran: định dạng khối liên kết tác giả trong khu vực tiêu đề hội nghị IEEE. |
| `\ccsdesc[500]{...}` | acmart: khai báo một khái niệm ACM CCS để phân loại bài báo. |
| `CCSXML` (môi trường) | acmart: chứa XML khái niệm ACM CCS mà máy có thể đọc được từ công cụ phân loại ACM. |
| `\Đại học{...}` | Lệnh siêu dữ liệu dành riêng cho lớp được thấy trong các mẫu luận án, không phải LaTeX tiêu chuẩn. |

## Môi trường nói chung

Môi trường là một vùng được mở bằng `\begin{name}` và đóng bằng `\end{name}`; mọi thứ giữa hai đều có hành vi của môi trường đó. Toàn bộ câu chuyện có trong [lệnh và môi trường](/learn/commands-environments/). Những mục đích chung:

| Môi trường | Nó làm gì |
| --- | --- |
| `tài liệu` | Phần nội dung của mọi tài liệu nằm giữa `\begin{document}` và `\end{document}`. |
| `trừu tượng` | In phần tóm tắt của bài báo với tiêu đề và bố cục tiêu chuẩn của lớp. |
| `trang tiêu đề` | Bao bọc một trang tiêu đề đầy đủ được làm bằng tay; trang này không được đánh số. |
| `trung tâm` | Căn giữa nội dung của nó theo chiều ngang. |
| `tuôn ra` | Căn trái nội dung của nó, rời rạc bên phải. |
| `tuôn ra` | Căn phải nội dung của nó, rời rạc bên trái. |
| `phân loại` | Danh sách có dấu đầu dòng; mỗi mục bắt đầu bằng `\item`. |
| `liệt kê` | Danh sách được đánh số; mỗi mục bắt đầu bằng `\item`. |
| `mô tả` | Danh sách được dán nhãn; các mục bắt đầu bằng `\item[Label]`. |
| `\mục` | Bắt đầu một mục nhập bên trong danh sách liệt kê, liệt kê hoặc mô tả. |
| `trích dẫn` | Khối thụt lề cho các trích dẫn ngắn, không thụt lề đoạn văn. |
| `trích dẫn` | Khối thụt lề cho các trích dẫn dài hơn, có thụt lề đoạn văn. |
| `câu thơ` | Khối thụt lề cho thơ, trong đó `\\` kết thúc mỗi dòng thơ. |
| `cẩu thả` | Sắp chữ các đoạn văn với cách ngắt dòng thoải mái, dạng môi trường `\cẩu thả`. |
| `danh sách` | Trình tạo danh sách chung mà việc phân loại và bạn bè được xác định từ đó. |
| `danh sách ba lần` | Danh sách cơ bản không có nhãn hoặc lề, được sử dụng bên trong các định nghĩa macro. |
| `nội dung tập tin` | Ghi nội dung của nó ra một tệp tại thời điểm biên dịch, ví dụ: để gửi .bib bên trong .tex. |
| `phụ lục` | Bao bọc các chương phụ lục, kích hoạt các công cụ `\appendixpage` và mỗi phụ lục (gói phụ lục). |

## Đi đâu tiếp theo

Trang này là từ điển. Các bài học là ngữ pháp. Để có một máy nhắn tin sẵn sàng dán, hãy mở [áo choàng](/learn/cheatsheet/). Để biết sự khác biệt giữa các khối `\command{...}` và `\begin{...}`, hãy đọc [lệnh so với môi trường](/learn/commands-environments/). Đối với một ký hiệu bạn có thể hình dung nhưng không thể đặt tên, hãy sử dụng [ký hiệu toán học](/learn/math-symbols-cheatsheet/). Để xem lệnh ở chế độ toán học trông như thế nào, hãy dán lệnh đó vào [bản xem trước trực tiếp](/live/) và xem lệnh đó hiển thị.