# Cập nhật MarqByte Landing Page v1.1

Đây là gói cập nhật trên bản v1.0 Friday đã bàn giao, không phải source hoàn chỉnh.

## Cách upload GitHub

1. Giải nén ZIP.
2. Mở thư mục UPLOAD_TO_GITHUB.
3. Trong repository hiện tại, đứng tại trang gốc có package.json.
4. Chọn Add file → Upload files.
5. Kéo THƯ MỤC src, THƯ MỤC scripts và FILE index.html bên trong UPLOAD_TO_GITHUB vào trang upload. Không kéo nguyên thư mục UPLOAD_TO_GITHUB bao ngoài.
6. Commit với nội dung: Add 100 templates and refine Vietnamese typography and landing UI.
7. GitHub Actions tự kiểm tra/build/deploy. Khi Actions xanh, tải lại website; nếu còn thấy CSS cũ, dùng Ctrl+F5.

Upload file là ghi đè đúng đường dẫn và bổ sung file mới. KHÔNG xóa thư mục src cũ: gói này chỉ chứa một số file trong src, các file Demo.jsx, demo.css, styles.css, config.js vẫn cần được giữ lại. Không xóa ảnh cũ trong public/images. Không cần sửa package.json, package-lock.json hay .github/workflows/deploy.yml.

## Thay đổi

- Thêm MB-101 đến MB-200: tổng 200 mẫu, 20 mẫu/ngành. Giữ nguyên dữ liệu và mã mẫu MB-001 đến MB-100.
- Các mẫu mới tiếp tục dùng 20 bố cục và ảnh minh họa nội bộ hiện có; không phải thêm 100 bộ bố cục hoàn toàn độc lập.
- Đóng kèm Be Vietnam Pro 400/500/600/700 và Lora 400/500/600 dưới dạng WOFF, đã kiểm tra bảng ký tự tiếng Việt. Giấy phép OFL nằm cùng thư mục font.
- Thay font trên kho và demo; chỉnh line-height, khoảng cách chữ, vùng tiêu đề để dấu tiếng Việt có đủ không gian.
- Áp dụng CSS hoàn thiện cho cả 200 mẫu: nền xuyên suốt, bớt mảng nền tương phản, giảm khung viền lặp lại, khoảng trắng có nhịp, bộ ảnh và form liên kết với nội dung. Các hướng hero theo ngành vẫn được giữ.
- Cập nhật số lượng toàn giao diện; phân trang rút gọn để 17 trang kết quả không làm chật màn hình nhỏ.
- Form và chức năng front-end giữ cách hoạt động như trước; chưa kết nối nhận lead thực tế.

## File thay thế / bổ sung

| Đường dẫn | Mục đích |
|---|---|
| src/main.jsx | Nhãn 200 mẫu, 20/ngành, phân trang; import CSS/font mới |
| src/data.json | Toàn bộ dữ liệu 200 mẫu (bắt buộc ghi đè) |
| src/refinement.css | Hoàn thiện UI/UX và responsive của kho và tất cả demo |
| src/fonts.css | Khai báo font nội bộ |
| src/fonts/* | 7 file font và 2 giấy phép OFL |
| scripts/validate.mjs | Kiểm tra 200 mẫu thay vì 100; phải upload để Actions không báo sai số lượng |
| index.html | Meta description 200 mẫu |

## Kiểm tra đã hoàn thành

- npm test: render đủ 200 mẫu, 20 mẫu/ngành, ID/tên/tiêu đề duy nhất, đủ 9 section/demo, ảnh hợp lệ, các điểm điều hướng.
- npm run build: thành công.
- Kiểm tra bộ font có đủ ký tự tiếng Việt trước khi đóng gói.
- Kiểm tra trình duyệt trang chủ/kho mẫu và 20 mẫu mới đại diện cho các bố cục ở mobile: không tràn ngang, không ảnh lỗi.
- Kiểm tra desktop/mobile mẫu spa mới; lọc ngành hiển thị 20 kết quả và tìm kiếm MB-200.

Bản cập nhật được chuẩn bị từ source v1.0 của Friday. Nếu bạn đã tự chỉnh nội dung trong main.jsx hoặc data.json sau đó, hãy lưu bản đang dùng để đối chiếu trước khi ghi đè.
