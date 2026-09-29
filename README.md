# OCCASION - Sprint 1 Frontend Prototype

OCCASION เป็นต้นแบบเว็บไซต์ E-Commerce เสื้อผ้าและ Lookbook ของทีม JSD13 โปรเจกต์นี้เก็บผลงาน **Sprint 1** ซึ่งเน้นการวางแนวคิดธุรกิจ ออกแบบระบบ ทำ Wireframes และสร้างหน้าเว็บต้นแบบด้วย HTML, Tailwind CSS/CSS และ JavaScript

> **สถานะโปรเจกต์:** ปิดงาน Sprint 1 แล้วในฐานะ frontend prototype และ design documentation ไม่ใช่ระบบ production และไม่มี Backend, REST API หรือฐานข้อมูลที่ทำงานจริงใน repository นี้

## สิ่งที่ส่งมอบจริงใน Sprint 1

| ส่วนงาน | สถานะ | หลักฐานใน repository |
| --- | --- | --- |
| Business Model Canvas | แบบออกแบบเสร็จ | [`docs/bmc`](docs/bmc/) |
| Use Case Diagram และ Use Case Description | แบบออกแบบเสร็จ | [`docs/usecase`](docs/usecase/) |
| ERD และ MongoDB Schema | แบบออกแบบเสร็จ ยังไม่ได้สร้างฐานข้อมูลจริง | [`docs/er-diagram`](docs/er-diagram/) และ [`docs/schema`](docs/schema/) |
| Desktop/Mobile Wireframes | แบบออกแบบเสร็จ 26 ภาพ | [`docs/wireframes`](docs/wireframes/) |
| Customer frontend prototype | มีหน้า Landing, Product, Cart, Checkout mock, Auth, Profile และบทความ | [`client`](client/) |

หน้าเว็บบางส่วนมี interaction ฝั่ง browser เช่น ค้นหา/กรองสินค้า, carousel, pagination, เลือก variant, ตะกร้าบาง flow และแบบฟอร์ม Profile แต่ข้อมูลส่วนใหญ่เป็น mock data ใน JavaScript หรือ HTML และไม่ถูกบันทึกผ่าน server

> **หมายเหตุ:** Admin UI, หน้า Lookbook และร่าง API Spec เป็นงานนอกขอบเขต Sprint 1 จึงถูกแยกออกจาก baseline นี้ (Pull Request #46) ยังดูได้จาก branch `feature/admin`, `feature/lookbook` และ Git history ที่ commit `832d70f`

## สิ่งที่ยังไม่ได้ implement ใน repository นี้

- React application, Express server และ MongoDB connection
- Authentication/authorization และ password reset ที่ทำงานจริง
- REST API
- การชำระเงิน การจัดส่ง รีวิว และ Audit Log ที่บันทึกจริง
- Personalized Size Recommendation และ AI/Mix & Match ที่ประมวลผลจริง
- Automated test suite, CI/CD และ production deployment

รายการขอบเขตพร้อมสถานะรายฟีเจอร์อยู่ที่ [Sprint 1 Scope and Closeout](docs/SPRINT1_SCOPE.md) และสารบัญเอกสารทั้งหมดอยู่ที่ [Documentation Index](docs/README.md)

## เปิดต้นแบบในเครื่อง

ใช้ static web server เพราะหน้าเว็บโหลด navbar, footer และข้อมูล JSON ด้วย `fetch()`:

```bash
git clone https://github.com/pathsharasakon-ws/group-project-3.git
cd group-project-3
git switch develop
python3 -m http.server 5500 -d client
```

จากนั้นเปิด `http://localhost:5500/`

หากต้องแก้ Tailwind CSS:

```bash
npm ci --prefix client
npm run watch --prefix client
```

## โครงสร้างหลัก

```text
group-project-3/
├── client/                  # Static customer prototype
├── docs/
│   ├── bmc/                 # Business Model Canvas
│   ├── er-diagram/          # Conceptual relational ERD
│   ├── schema/              # Proposed MongoDB schemas
│   ├── usecase/             # Use Case diagram and descriptions
│   └── wireframes/          # Desktop/mobile wireframes
├── README.md
└── CONTRIBUTING.md
```

## ทีมผู้จัดทำ

- Nay - [@pathsharasakon-ws](https://github.com/pathsharasakon-ws)
- Mos - [@drimmonline](https://github.com/drimmonline)
- Luknok - [@Luknok-tky](https://github.com/Luknok-tky)
- BM - [@Bell914](https://github.com/Bell914)
- Bird - [@bird-sitthan](https://github.com/bird-sitthan)

ประวัติ Git เป็นแหล่งอ้างอิงการเปลี่ยนแปลงและผู้ร่วมพัฒนาราย commit
