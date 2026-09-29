# OCCASION Documentation Index

เอกสารชุดนี้ได้รับการตรวจเทียบกับ source code ของ Sprint 1 เมื่อวันที่ 29 กันยายน 2026 จุดประสงค์คือเก็บหลักฐานการออกแบบและอธิบายสถานะให้ตรงกับ frontend prototype ใน repository นี้

## เอกสารหลัก

| เอกสาร | ประเภท | สถานะและวิธีตีความ |
| --- | --- | --- |
| [Sprint 1 Scope and Closeout](SPRINT1_SCOPE.md) | Closeout | แหล่งอ้างอิงหลักว่าส่วนใดทำจริง ส่วนใดเป็น mock และส่วนใดเป็นแผน |
| [Business Model Canvas](bmc/Occasion%20Business%20Model%20Canvas%20v1.png) | Business design | แนวคิดธุรกิจและ value proposition บางรายการเป็นอนาคต เช่น Size Recommendation และ AI-ready Phase 2 |
| [Use Case Diagram](usecase/Occasion%20Use%20Case%20Diagram.png) | System design | ขอบเขตระบบเป้าหมาย ไม่ใช่รายการฟีเจอร์ที่ implement ครบแล้ว |
| [Use Case Description](usecase/Occasion_Use_Case_Description_Phase1.pdf) | System design | รายละเอียด UC-01 ถึง UC-30 สำหรับระบบเป้าหมาย |
| [ERD](er-diagram/Occasion%20ERD.png) | Data design | แบบจำลอง relational เชิงแนวคิด ยังไม่มีฐานข้อมูลจริง |
| [MongoDB Schema](schema/Occasion%20-%20Schema.png) | Data design | แบบจำลอง document database อีกทางเลือกหนึ่ง ยังไม่มี Mongoose models ใน repository |
| [Wireframes](wireframes/) | UI design | Desktop/mobile 26 ภาพ ใช้เป็นแบบอ้างอิง ไม่ได้หมายความว่าทุก interaction ทำงานครบ |
| [Target Architecture](architecture/README.md) | Future reference | แนวทาง React/REST API/MongoDB สำหรับพัฒนาต่อ ไม่ใช่ architecture ที่ทำงานใน Sprint 1 |

## หลักการอ่านเอกสาร

1. ใช้ [Sprint 1 Scope and Closeout](SPRINT1_SCOPE.md) เป็นตัวตัดสินสถานะ implementation
2. BMC, Use Case, ERD และ Schema เป็นผลงานการออกแบบที่ส่งมอบได้ แม้ยังไม่มีระบบหลังบ้าน
3. ERD ใช้โครงสร้างตาราง ส่วน MongoDB Schema ใช้ embedded documents จึงเป็นคนละทางเลือกในการออกแบบ ไม่ควรอ้างว่าทั้งสองเป็นฐานข้อมูลที่ deploy แล้ว
4. หน้าเว็บใน `client/` เป็น prototype ที่ใช้ mock data และ browser-side JavaScript
5. เอกสาร Target Architecture อธิบายทิศทางหลัง Sprint 1 และต้องไม่ใช้เป็นหลักฐานว่า React/Backend ถูก implement แล้ว

## การดูแลไฟล์ภาพและ PDF

ไฟล์ต้นฉบับเป็นหลักฐาน Sprint 1 จึงเก็บไว้โดยไม่แก้เนื้อหาย้อนหลัง หากมี requirement เปลี่ยน ให้เพิ่มเวอร์ชันใหม่และบันทึกเหตุผล แทนการเขียนทับหลักฐานเดิม
