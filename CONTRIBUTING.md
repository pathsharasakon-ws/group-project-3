# 🤝 Contribution Guidelines (Sprint 1 Completed)

ยินดีต้อนรับสู่โปรเจกต์ E-Commerce ของพวกเรา! เอกสารนี้จัดทำขึ้นเพื่อกำหนดแนวทางปฏิบัติและการทำงานร่วมกันของทีมในช่วง **Sprint 1** ที่ผ่านมา ซึ่งเราได้โฟกัสที่การออกแบบระบบ (System & Database Design), การทำ Wireframes และการพัฒนา Frontend Layouts เบื้องต้น

---

## 📌 Team Workflow & Principles (Sprint 1)
ในช่วง Sprint 1 นี้ ทีมเราได้ร่วมมือกันทำตามเป้าหมายหลักดังนี้:
* **Collaborative Planning**: ร่วมกันวางแผนธุรกิจผ่าน Business Model Canvas (BMC) และออกแบบสถาปัตยกรรมระบบ (ERD & MongoDB Schema)
* **UI/UX Design Alignment**: ออกแบบ Wireframes ให้ครบถ้วนตามโจทย์ (Landing Page, Product Card/List, Cart, Checkout, Dashboards และหน้า Auth)
* **Frontend Implementation**: พัฒนา Product Card และ Product List Layouts ด้วย CSS / Tailwind CSS ตามเกณฑ์ประเมิน

---

## 🌿 Git Branching Strategy
เพื่อให้การจัดการโค้ดเป็นระเบียบในช่วงเริ่มต้น:
* `main` / `master`: สำหรับเวอร์ชันสมบูรณ์ที่พร้อมส่งมอบ
* `sprint-1`: Branch หลักที่รวบรวมฟีเจอร์และงานทั้งหมดของ Sprint 1
* `feature/<feature-name>`: Branch ย่อยสำหรับสมาชิกแต่ละคนใช้ทำงานของตัวเอง (เช่น `feature/wireframe-design`, `feature/product-card-layout`)

---

## 🔄 How to Contribute / Submit Your Work

1. **ดึงข้อมูลล่าสุด (Pull Latest Code):**
   ```bash
   git checkout sprint-1
   git pull origin sprint-1

2. **สร้าง Branch ของตัวเองสำหรับงานใหม่:
   ```bash
   git checkout -b feature/ชื่อฟีเจอร์ของคุณ

3. **ตรวจสอบไฟล์ก่อน Commit:
ก่อนทำการบันทึกโค้ด ให้เช็คสถานะไฟล์ทุกครั้งเพื่อป้องกันไฟล์ที่ไม่จำเป็นหลุดขึ้นไป
   ```bash
   git status
   git add <ชื่อไฟล์ที่ต้องการ>

4. **Commit ด้วยข้อความที่สื่อความหมาย:
ใช้คำนำหน้าตามมาตรฐาน (เช่น feat:, docs:, style:)
   ```bash
   git commit -m "feat: implement product card layout with tailwind css"

5. **Push และสร้าง Pull Request (PR):
   ```bash
   git push origin feature/ชื่อฟีเจอร์ของคุณ

ไปที่หน้า GitHub แล้วเปิด Pull Request จาก Branch ของคุณเข้ามาที่ sprint-1

แท็กเพื่อนร่วมทีมเพื่อช่วย Review โค้ดก่อนทำการ Merge
