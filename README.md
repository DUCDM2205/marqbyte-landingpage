# MarqByte Landing Page — v1.0

Kho 100 landing page tiếng Việt, 10 ngành nghề, 20 thiết kế chủ lực và 80 mẫu mở rộng. React + Vite; GitHub Actions tự kiểm tra, build và triển khai GitHub Pages.

## 1. Chạy trên máy tính với VS Code

Cài Node.js 22 LTS (hoặc phiên bản tương thích Vite), mở đúng thư mục có `package.json`, mở Terminal rồi chạy:

```bash
npm ci
npm run dev
```

Mở địa chỉ Local được Terminal hiển thị. Những lần sau chỉ chạy `npm run dev`. Nhấn Ctrl+C để dừng. Không mở trực tiếp `index.html` bằng cách double-click: đây là source React cần dev server hoặc build.

```bash
npm test
npm run build
npm run preview
```

`npm test` kiểm tra 100 mẫu, 10 ngành, mã/tên/tiêu đề duy nhất, 20 layout, ảnh JPEG, 9 section và các điểm điều hướng của từng demo. `npm run build` tạo thư mục `dist`.

## 2. Đưa lên repository GitHub mới, GitHub tự build

1. Giải nén ZIP. Mở thư mục `marqbyte-landing-page` bên trong.
2. Tạo repository GitHub mới, đặt tên tùy ý, ví dụ `marqbyte-landing-page`. Chọn nhánh chính `main`. Dùng repository Public nếu tài khoản không có gói hỗ trợ Pages cho repository Private.
3. Upload **toàn bộ nội dung bên trong** thư mục này lên **thư mục gốc repository**. Cấp ngoài cùng phải thấy `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `src`, `public`, `scripts`, `.github`. Không upload nguyên thư mục bao ngoài thành một cấp thư mục lồng.
4. Đặc biệt phải có `.github/workflows/deploy.yml`. Không upload chỉ riêng `src`; không upload `node_modules` hoặc ZIP. Nếu kéo thả bằng trình duyệt bị bỏ sót thư mục `.github`, dùng **Add file → Create new file**, nhập `.github/workflows/deploy.yml`, rồi sao chép đúng nội dung từ file tương ứng trong ZIP và commit.
5. Commit với nội dung: `Initial MarqByte Landing Page — 100 templates`.
6. Vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
7. Mở tab **Actions → Deploy MarqByte Landing Page**. Nếu lượt chạy đầu thất bại vì Pages chưa bật, chọn **Re-run all jobs**, hoặc **Run workflow** sau khi hoàn tất bước 6.
8. Khi cả job `build` và `deploy` xanh, mở URL được GitHub hiển thị ở **Settings → Pages** hoặc environment **github-pages**. URL phụ thuộc tên tài khoản/repository thực tế.

Mỗi lần commit vào `main`, GitHub sẽ tự chạy `npm ci`, kiểm tra dữ liệu, build React và deploy. Không phải tự upload `dist`.

### Upload bằng Git trên máy tính (nếu đã cài Git)

Chạy từ thư mục chứa package.json. Thay URL ví dụ bằng URL repository thật:

```bash
git init
git add .
git commit -m "Initial MarqByte Landing Page - 100 templates"
git branch -M main
git remote add origin https://github.com/TEN-TAI-KHOAN/TEN-REPO.git
git push -u origin main
```

Nếu repo đã có README/commit hoặc remote khác, không dùng force push. Clone repo trước rồi copy nội dung source vào thư mục đã clone, commit và push.

## 3. Tính năng đã có

- Trang chủ, kho template, 10 trang ngành, trang chi tiết từng mẫu.
- 100 demo có nội dung tiếng Việt, ảnh nằm trong source, 20 bộ bố cục và 5 thứ tự section.
- Tìm kiếm không phân biệt dấu, lọc ngành/phong cách/mục tiêu/chủ lực, sắp xếp và phân trang.
- Lưu yêu thích vào localStorage của trình duyệt; không có tài khoản hoặc đồng bộ giữa thiết bị.
- Khung demo thật bằng iframe: desktop, mobile 390px (co lại khi màn hình nhỏ hơn), mở toàn màn hình.
- Menu mobile, tab dịch vụ, bộ ảnh trước/sau, FAQ, chọn gói và form mô phỏng trong demo.
- Form yêu cầu tự điền mã template và ngành, có dịch vụ bổ sung, tạo tóm tắt, sao chép, liên kết Zalo.
- Font hệ thống hỗ trợ tiếng Việt; không phụ thuộc Google Fonts/CDN font.
- Giảm chuyển động theo thiết lập reduced-motion của thiết bị.

## 4. Những gì chưa kết nối

- **Form không gửi dữ liệu** tới email, Sheets hay backend. Nó chỉ tạo bản tóm tắt trên màn hình. Khách tự sao chép rồi gửi qua Zalo.
- Không có trang quản trị, đăng nhập, thanh toán, tải source tự động, email tự động hay tracking thực tế.
- Các gói, thương hiệu, lời nhận xét và số liệu trong mockup SaaS là nội dung giả lập. Không sử dụng như thành tích/chứng nhận thật.
- Kho phục vụ khách thuê triển khai; người muốn nhận source tự vận hành có thể ghi nhu cầu trong form. Chưa có luồng mua/tải source trực tiếp.
- Đây là một thư viện React dùng chung các thành phần, **không phải 100 repository độc lập**. Mỗi template có dữ liệu, route và theme riêng; các mẫu mở rộng tái sử dụng bộ bố cục đã chốt.

## 5. Sửa nội dung

| File | Nội dung |
|---|---|
| `src/config.js` | Tên kho, Zalo, email, website MarqByte |
| `src/data.json` | 10 ngành và toàn bộ 100 template |
| `src/main.jsx` | Website thư viện: danh sách, bộ lọc, chi tiết, yêu thích, form |
| `src/Demo.jsx` | 20 hero layout và các phần demo dùng chung |
| `src/styles.css` | Giao diện thư viện, responsive |
| `src/demo.css` | Giao diện từng bộ layout, responsive demo |
| `public/images/` | Ảnh nội bộ; thay ảnh tại đây hoặc sửa đường dẫn trong data.json |
| `.github/workflows/deploy.yml` | Quy trình GitHub tự build/deploy |
| `DANH_SACH_100_TEMPLATE.md` | Danh mục mã mẫu, thương hiệu, phân khúc |
| `IMAGE_CREDITS.md` | Nguồn ảnh minh họa |

Màu gốc MARQBYTE đối chiếu từ website người dùng cung cấp: `#138A44`, `#0B6431`, `#151C18`, `#657068`, `#E1E7E2`, `#F1F7EE`, `#D7F79B`.

Mỗi template trong `data.json` có `id`, `category`, `brand`, `niche`, `title`, `services`, `layout`, `variant`, `style`, `goal`, `color`, `bg`, `images`, `heroDescription`. Giữ ID ổn định để link đã chia sẻ không thay đổi. Nếu mở rộng hơn 100 mẫu về sau, cập nhật bộ kiểm tra số lượng trong `scripts/validate.mjs` và các nhãn thống kê trên giao diện.

## 6. URL và subdomain về sau

Các route hiện dùng hash, ví dụ `#/mau/MB-021` và `#/demo/MB-021`, để refresh/chia sẻ không gặp 404 trên GitHub Pages. `base: './'` giúp build chạy được cả đường dẫn repository lẫn domain gốc. Route hash phù hợp bản front-end này; nếu cần từng mẫu có URL sạch, metadata/OG riêng để làm SEO quy mô lớn, giai đoạn sau nên chuyển sang prerender/SSG và cấu hình hosting tương ứng.

Khi có subdomain thật: cấu hình DNS theo thông tin GitHub Pages cung cấp, đặt Custom domain trong Settings → Pages, thêm chính subdomain đó vào `public/CNAME` để file được đưa vào mọi bản build, bật HTTPS khi GitHub xác nhận. Chưa có CNAME trong source vì Blue chưa cung cấp subdomain chính thức.

## 7. Bàn giao và kiểm tra

Đã kiểm tra render đầy đủ cả 100 demo, build production, bộ lọc ngành, lưu yêu thích, chuyển mobile, menu mobile và form tạo tóm tắt với dữ liệu thử nghiệm. Kiểm tra trình duyệt 20 layout chủ lực ở khung desktop và mobile, trang chủ và kho mẫu; không phát hiện tràn ngang hoặc ảnh tải lỗi trong các khung được kiểm tra. Các mẫu mở rộng dùng cùng quy tắc responsive và được kiểm tra render tự động, không phải kiểm tra thủ công toàn bộ tương tác của 100 mẫu.

Đây là source sẵn sàng đưa lên repository mới; chưa được push hoặc publish vào tài khoản GitHub của Blue. Nội dung thật, backend nhận lead và domain chính thức sẽ cấu hình ở giai đoạn tiếp theo.
