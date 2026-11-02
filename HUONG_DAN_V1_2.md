# MarqByte v1.2 — Bản cập nhật 10 mẫu giáo dục đã duyệt

## Kết quả
- Giữ nguyên 200 mẫu đang có; thêm MB-201 đến MB-210. Tổng: 210 mẫu.
- Giáo dục & đào tạo: 30 mẫu. Chín ngành còn lại: 20 mẫu/ngành.
- Mười mẫu mới dùng mười component/layout riêng; có responsive và tương tác như bản preview đã duyệt.
- Tích hợp vào trang chủ, danh sách, chi tiết, demo desktop/mobile và form yêu cầu dịch vụ (tự điền mã mẫu).
- Đây là đợt tích hợp 10 mẫu đã duyệt, chưa phải toàn bộ kế hoạch 1.200 mẫu.

## Cập nhật GitHub
Áp dụng vào source v1.1 hiện tại có 200 mẫu.
1. Giải nén ZIP.
2. Mở đúng thư mục gốc repository, nơi có package.json và vite.config.js.
3. Upload trực tiếp hai thư mục src, scripts và file index.html từ ZIP vào gốc repository. Các file trùng tên cần được ghi đè; giữ nguyên các file khác.
   Không xóa src cũ vì bản cập nhật sử dụng lại font, CSS và ảnh đang có.
   Không upload nguyên thư mục MarqByte_v1.2_Update hay đặt vào UPLOAD_TO_GITHUB.
4. Commit: Add 10 approved education landing pages (MB-201 to MB-210).
5. Mở Actions, đợi workflow deploy đang dùng chạy thành công rồi mở website. Không cần sửa .github/workflows/deploy.yml.
6. Nếu còn giao diện cũ, nhấn Ctrl+Shift+R để tải lại.

## Kiểm tra kết quả
- Menu Kho template hiển thị 210.
- Trang chủ có mục 10 thiết kế giáo dục mới.
- Mở #/templates?collection=education-v2 để xem đúng 10 mẫu vừa thêm.
- Mở #/demo/MB-204, chuyển Desktop/Mobile và bấm Chọn mẫu này: form phải chọn MB-204 — Bandlab IELTS.
- Mã mới: MB-201 Vườn Mơ, MB-202 Horizon School, MB-203 Nói!, MB-204 Bandlab IELTS, MB-205 Beyond Borders, MB-206 Ngoài Kia, MB-207 Chấm Art House, MB-208 CodePlay, MB-209 Practice Works, MB-210 Launch Course.

## Kiểm tra trên máy
Trong terminal tại gốc project:
```bash
npm install
npm run dev
```
Nếu node_modules đã có, chỉ cần npm run dev. Nếu PowerShell chặn npm.ps1, dùng npm.cmd thay npm.
Kiểm tra production: npm test và npm run build.
Đã kiểm tra thành công cả hai lệnh trước khi bàn giao; dữ liệu 200 mẫu cũ và các file CSS cũ được giữ nguyên.

## Phạm vi
Chỉ có file mới/thay đổi trong ZIP. Không cần cập nhật package.json, thư viện, ảnh hay workflow.
Form yêu cầu vẫn là giao diện front-end, tạo nội dung để sao chép/gửi Zalo; chưa tự gửi tới backend.
