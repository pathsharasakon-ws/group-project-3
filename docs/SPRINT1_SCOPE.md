# Sprint 1 Scope and Closeout

**ตรวจล่าสุด:** 25 กันยายน 2026<br>
**Baseline:** branch `develop` หลัง commit `f356542`<br>
**รูปแบบผลงาน:** static frontend prototype + design documentation

## สรุปสถานะ

Sprint 1 ส่งมอบแนวคิดธุรกิจ แบบจำลองระบบ Wireframes และหน้าเว็บต้นแบบจำนวนมาก งานไม่ได้รวม server, database หรือ production deployment ดังนั้นคำว่า “เสร็จ” ในเอกสารนี้หมายถึงแบบออกแบบหรือหน้าจอต้นแบบเสร็จตามหลักฐาน ไม่ได้หมายถึง end-to-end system พร้อมใช้งานจริง

## Feature Coverage

| กลุ่ม | สิ่งที่มีใน prototype | ข้อจำกัด |
| --- | --- | --- |
| Landing/Navigation | หน้าแรก, navbar/footer, sections และลิงก์ไปหน้าหลัก | static content |
| Product catalog | สินค้าตัวอย่าง, search/filter, pagination, detail view, สี/ไซส์ และ carousel | mock data; ไม่มี Product API/stock จริง |
| Lookbook | รายการ, sort/filter, detail และเพิ่มชุดลง local cart | mock data/localStorage บางส่วน |
| Cart | หน้าว่าง, guest/member layouts และตัวอย่างสินค้า | หลายหน้าคือ visual prototype; state ไม่เชื่อมครบทุกหน้า |
| Checkout | contact/shipping, payment และ confirmation/shipped screens | เดินหน้าด้วย link/button; ไม่มี order/payment transaction จริง |
| Authentication | signup, confirmation, login, forgot/reset password screens | ไม่มีบัญชี, session, OTP หรือ email จริง |
| Profile | profile/address/payment UI และ province data interaction | ข้อมูลอยู่ในหน้า browser; ไม่มี user database |
| Content/Support | article, privacy, terms และ customer service pages | ฟอร์มไม่ส่งเข้า support backend |
| Admin | login mock, dashboard/chart และหน้ารายการ Categories, Products, Stock, Orders, Shipping, Customers, Reviews, Lookbooks, Audit Logs, Settings | เป็น static/mock admin UI; ไม่มี role protection หรือ CRUD API จริง |

## Design Artifacts

### BMC

BMC อธิบายธุรกิจ OCCASION, กลุ่มลูกค้า, Complete Look/Lookbook, membership และช่องทางรายได้ แนวคิด Size Recommendation, cloud/payment/logistics partners และ AI-ready Phase 2 เป็น business/target assumptions ไม่ใช่ implementation ของ Sprint 1

### Use Case

Use Case Diagram และ PDF ระบุ UC-01 ถึง UC-30 ครอบคลุม Guest, Member, Checkout และ Admin ทั้งชุด ใช้เป็น requirement design สำหรับระบบเต็ม ใน prototype มีหน้าจอรองรับหลายกรณี แต่ flow ที่ต้องใช้ backend เช่น account ownership, stock validation, payment, shipment, review และ audit ยังไม่ทำงานจริง

### ERD และ MongoDB Schema

- ERD เป็น relational model ที่แยกตาราง เช่น `users`, `products`, `orders`, `payments`, `shipments` และ `reviews`
- MongoDB Schema เสนอ document model ที่ embed บางข้อมูล เช่น variants, addresses และ order items
- ทั้งสองเป็นแบบออกแบบทางเลือก ไม่มี migration, model หรือ database connection ใน Sprint 1

### API Spec

API Spec เป็น contract draft ของ `/api/v1` สำหรับพัฒนา backend ในอนาคต รายการ endpoint ไม่ใช่ API ที่เรียกใช้งานได้จาก repository นี้

### Wireframes

มี desktop/mobile wireframes 13 คู่ รวม 26 ภาพ สำหรับ Landing, Product List/Detail, Cart, Checkout, Auth, User/Admin Dashboard, Article, Customer Service, Privacy และ Terms บางหน้าถูกสร้างเป็น HTML prototype แล้ว แต่ไม่ควรใช้จำนวน wireframe เป็นหลักฐานว่า business flow ทำงานครบ

## รายการที่อยู่นอก implementation ของ Sprint 1

- React component architecture และ state management
- Express REST API และ middleware
- MongoDB/Mongoose models และ persistence
- Secure authentication, authorization, password hashing และ token/session
- Payment gateway, shipping integration, review verification และ audit logging
- Personalized Size Recommendation/AI processing
- Automated tests, CI/CD, monitoring และ deployed staging/production environment

## Known Prototype Gaps

การตรวจ static references พบข้อจำกัดเดิมที่ควรเก็บเป็นสถานะของ Sprint 1 แทนการอ้างว่า flow สมบูรณ์:

- `cart-page-item-guest.html` อ้างรูปตัวอย่างสามไฟล์ใน `client/images/` ที่ไม่มีอยู่
- `forgot-password.html` ส่ง form ไป `forgot-password-sent.html` แต่ไฟล์ที่มีจริงชื่อ `forgot-password-check-email.html`
- mock catalog ใน `client/admin/js/admin-main.js` ใช้ path รูป `./assets/collection-2026/...` ซึ่งไม่มีใต้ `client/admin/`
- ไม่มี automated test จึงตรวจได้เฉพาะโครงสร้างไฟล์ ลิงก์ และการทำงานใน browser แบบ manual

## เกณฑ์ปิด Sprint 1

- เอกสารทุกชิ้นถูกจัดประเภทเป็น prototype, design artifact หรือ future target
- README และ CONTRIBUTING อ้าง branch และคำสั่งที่มีจริง
- ไม่มีข้อความที่อ้างว่า backend/database/API ถูก implement แล้ว
- ลิงก์ภายใน Markdown เปิดไฟล์ที่มีอยู่จริง
- ไฟล์ต้นฉบับ BMC, ERD, Schema, Use Case และ Wireframes ถูกเก็บเป็นหลักฐานโดยไม่เขียนทับ
