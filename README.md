# 🛒 E-Commerce Web Application (Sprint 1 Complete)

โปรเจกต์นี้เป็นส่วนหนึ่งของหลักสูตร Generation Thailand Junior Software Developer (JSD13) โดยทีมของเราได้พัฒนาแอปพลิเคชัน E-Commerce (รูปแบบเฉพาะทาง ไม่ใช่ Marketplace) 

---

## 🎯 Sprint 1 Deliverables & Accomplishments

ใน Sprint 1 นี้ ทีมเราได้ออกแบบระบบและโครงสร้างพื้นฐานทั้งหมดเรียบร้อยแล้ว ดังนี้:

### 1. ระบบฐานข้อมูลและการออกแบบ (Database & System Design)
* **Business Model Canvas (BMC)**: กำหนดกลุ่มเป้าหมาย คุณค่าของสินค้า และโมเดลธุรกิจ
* **Use Case Diagram**: แผน감การใช้งานของผู้ใช้และผู้ดูแลระบบ (Admin)
* **Entity-Relationship Diagram (ERD)** & **MongoDB Schema Design**: ออกแบบโครงสร้างข้อมูลที่สอดคล้องกับฟิลด์ข้อมูลทั้งหมด (Users, Products, Cart, Orders)

### 2. ออกแบบโครงร่างส่วนติดต่อผู้ใช้ (App Wireframes)
ออกแบบ UI/UX ครอบคลุมทุกฟีเจอร์หลักของระบบ:
* **Landing Page**: หน้าแรกสำหรับแสดงรายการสินค้าทั้งหมดในระบบ
* **Product Card & List Layouts**: แสดงข้อมูลสินค้าครบถ้วน (ชื่อ, รายละเอียด, ราคา, จำนวน, ปุ่มหยิบใส่ตะกร้า, และแท็กสินค้า)
* **Shopping Cart & Checkout Page**: หน้าตะกร้าสินค้าและหน้ายืนยันคำสั่งซื้อ (จำลองการชำระเงินสำเร็จโดยไม่ต้องใช้ระบบจริง)
* **Order Confirmation**: หน้าสรุปการสั่งซื้อ พร้อมบันทึกวันที่และเวลาสั่งซื้อ (`Purchase Date/Time`)
* **Authentication**: หน้าจอสำหรับสมัครสมาชิก เข้าสู่ระบบ และกู้คืนรหัสผ่าน
* **Dashboards**: หน้าแดชบอร์ดสำหรับผู้ใช้ (ประวัติการสั่งซื้อ/สถานะ) และแดชบอร์ดแอดมิน (กราฟแสดงข้อมูล 2 รูปแบบ เช่น ยอดขาย, ยอดคำสั่งซื้อเฉลี่ย และระบบจัดการคลังสินค้า)

### 3. การพัฒนาหน้าตาเว็บไซต์เบื้องต้น (Frontend Layouts)
* พัฒนาหน้าตาด้วย **Tailwind CSS / CSS** 
* สร้างเลย์เอาต์สำหรับ Product Card และ Product List ที่จัดวางข้อมูลอย่างเป็นระเบียบ (มีสินค้าตัวอย่างอย่างน้อย 3 แบบพร้อมแท็กที่แตกต่างกัน)
* จัดทำหน้าตาสำหรับการ Login, Registration และ Forget Password พร้อมป้ายกำกับฟิลด์ข้อมูลที่ชัดเจน

---

## 👥 ทีมผู้จัดทำ (JSD13 Group Project)
* Mos / https://github.com/drimmonline
* Luknok / https://github.com/Luknok-tky
* BM / https://github.com/Bell914
* Bird / https://github.com/bird-sitthan
