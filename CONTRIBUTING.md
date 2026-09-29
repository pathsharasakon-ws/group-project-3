# Contribution Guidelines - Sprint 1 Archive

เอกสารนี้อธิบายวิธีดูแลผลงาน Sprint 1 หลังปิดงานแล้ว โปรเจกต์เป็น static frontend prototype และเอกสารออกแบบ การเปลี่ยนแปลงหลังจากนี้ควรเน้นแก้ข้อผิดพลาด รักษาหลักฐานของ Sprint 1 และทำให้เอกสารตรงกับสิ่งที่ repository มีจริง

## Branch ที่ใช้จริง

- `develop` เป็น branch ที่รวมผลงาน Sprint 1 ใน repository นี้
- `main` รับงานจาก `develop` ผ่าน Pull Request เมื่อพร้อมส่งมอบ
- งานแก้ไขให้สร้าง branch จาก `develop` เช่น `docs/<topic>`, `fix/<topic>` หรือ `feature/<topic>`

repository นี้ไม่มี branch ชื่อ `sprint-1` จึงไม่ควรใช้คำสั่งหรือเปิด Pull Request เข้า branch ดังกล่าว

## ขั้นตอนแก้ไข

```bash
git switch develop
git pull origin develop
git switch -c docs/update-sprint1-documentation
```

ตรวจเฉพาะไฟล์ที่ตั้งใจแก้ แล้ว commit ด้วยข้อความที่บอกผลลัพธ์ชัดเจน:

```bash
git status
git diff --check
git add README.md CONTRIBUTING.md docs/
git commit -m "docs: align Sprint 1 documentation with delivered prototype"
git push -u origin docs/update-sprint1-documentation
```

เปิด Pull Request เข้า `develop` และให้เพื่อนอย่างน้อยหนึ่งคนตรวจเนื้อหาก่อน merge

## เกณฑ์ตรวจงานเอกสาร

- แยกคำว่า **implemented prototype**, **design artifact** และ **future target** ให้ชัดเจน
- อย่าอ้างว่ามี Backend, Database, API, Authentication หรือ Payment จริง หาก repository ยังไม่มี implementation
- ลิงก์ไฟล์และรูปภาพต้องเปิดได้จาก Markdown
- API, ERD, MongoDB Schema และ Use Case ต้องใช้ชื่อฟิลด์/แนวคิดสอดคล้องกัน หรืออธิบายเมื่อเป็นคนละแบบจำลอง
- ไม่ commit `.DS_Store`, `node_modules`, environment secrets หรือไฟล์ชั่วคราว
- หากแก้ UI ให้เปิดผ่าน static server และตรวจทั้ง desktop/mobile ที่เกี่ยวข้อง

## ขอบเขตการดูแลหลังปิด Sprint 1

การเพิ่มระบบ React/Express/MongoDB หรือ feature ใหม่ควรทำใน repository/sprint ถัดไป งานดังกล่าวไม่ควรถูกเขียนย้อนหลังว่าเป็นสิ่งที่ส่งมอบใน Sprint 1

ดูสถานะรายฟีเจอร์ที่ [docs/SPRINT1_SCOPE.md](docs/SPRINT1_SCOPE.md) และสารบัญเอกสารที่ [docs/README.md](docs/README.md)
