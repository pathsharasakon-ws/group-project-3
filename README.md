# OCCASION - Smart Fashion E-Commerce

OCCASION เป็นเว็บไซต์ E-Commerce สำหรับแบรนด์แฟชั่นที่ช่วยให้ลูกค้าเลือกเสื้อผ้าได้ง่ายขึ้น ผ่านฟีเจอร์แนะนำไซส์ การแนะนำชุด (Complete Look) และ Smart Wardrobe เพื่อสร้างประสบการณ์การช้อปปิ้งออนไลน์ที่สะดวก เป็นส่วนตัว และช่วยเพิ่มความมั่นใจในการแต่งตัว

> Developed as a MERN Stack project for **Junior Software Developer Batch 13**

---

# Table of Contents

- About Project
- Objectives
- Team Members
- Tech Stack
- Business Model Canvas
- Features
- System Architecture
- Wireframes
- Database Design
- Project Structure
- Git Workflow
- Documents
- Progress Checklist
- Future Improvements
- License

---

# About Project

การซื้อเสื้อผ้าออนไลน์มักมีปัญหา เช่น

- เลือกไซส์ไม่ถูก
- ไม่มั่นใจว่าเสื้อผ้าจะเหมาะกับตัวเองหรือไม่
- ไม่รู้ว่าจะจับคู่เสื้อผ้าอย่างไร
- ใช้เวลานานในการเลือกสินค้า

OCCASION จึงถูกพัฒนาขึ้นเพื่อช่วยให้ผู้ใช้งานสามารถเลือกสินค้าได้ง่ายขึ้น ผ่านระบบแนะนำไซส์ การจัดการตู้เสื้อผ้าส่วนตัว และการแนะนำชุดที่เข้ากัน

---

# Objectives

- พัฒนาเว็บไซต์ E-Commerce ด้วย MERN Stack
- ออกแบบระบบตามหลัก Software Engineering
- พัฒนา RESTful API
- ออกแบบฐานข้อมูลด้วย MongoDB
- รองรับ Responsive Design
- ใช้ Git Flow เพื่อสนับสนุนการทำงานร่วมกันของทีม

---

# Team Members

| Name | Role |
|------|------|
| Nae | Team Leader / Backend Developer |
| Mos | Frontend Developer |
| BM | Frontend Developer |
| Bird | Backend Developer |
| LukNok | Backend Developer |

---

# Tech Stack

## Frontend

- React
- TailwindCSS
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Tools

- Git
- GitHub
- VS Code
- Postman
- Figma

---

# Business Model Canvas

## Customer Segments

- ผู้ที่จับคู่เสื้อผ้าไม่เก่งหรือไม่มีเวลา
- นักช้อปออนไลน์ที่ต้องการความมั่นใจเรื่องไซส์
- ลูกค้าเดิมของแบรนด์ที่ต้องการ Mix & Match เสื้อผ้า

## Value Proposition

- Size Recommendation
- Smart Wardrobe
- Complete Look Recommendation

## Channels

- Responsive Website
- Facebook
- Instagram
- TikTok
- LINE Official Account

## Customer Relationship

- Guest
- Member

## Revenue Streams

- Direct Product Sales
- Complete Look Upselling

---

# Features

## Customer

- Register
- Login
- Forgot Password
- Product List
- Product Detail
- Search Product
- Filter Product
- Size Recommendation
- Complete Look Recommendation
- Shopping Cart
- Checkout
- Wishlist
- Smart Wardrobe
- User Profile
- Order History

## Admin

- Dashboard
- Product CRUD
- Category Management
- Inventory Management
- Revenue Dashboard
- Order Management

---

# System Architecture

```text
React
   │
Axios
   │
Express REST API
   │
Mongoose
   │
MongoDB
```

---

# Wireframes

| Page | Status |
|------|--------|
| Landing Page | ✅ |
| Login | ✅ |
| Register | ✅ |
| Product List | ✅ |
| Product Detail | ✅ |
| Shopping Cart | ✅ |
| Checkout | ✅ |
| User Dashboard | ✅ |
| Admin Dashboard | ✅ |
| Article | ✅ |
| Customer Service | ✅ |
| Terms & Conditions | ✅ |
| Privacy Policy | ✅ |

---

# Database Design

เอกสารทั้งหมดจะถูกจัดเก็บไว้ในโฟลเดอร์ `docs/`

ประกอบด้วย

- Business Model Canvas
- Use Case Diagram
- ER Diagram
- MongoDB Schema
- API Documentation

---

# Project Structure

```text
occasion/

├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── uploads/
│
├── docs/
│   ├── bmc/
│   ├── usecase/
│   ├── er-diagram/
│   ├── schema/
│   ├── wireframes/
│   └── api/
│
├── README.md
├── CONTRIBUTING.md
├── .env.example
└── .gitignore
```

---

# Git Workflow

```text
main
│
develop
├── feature/auth
├── feature/product
├── feature/cart
├── feature/profile
├── feature/admin
├── bugfix/*
└── hotfix/*
```

## Branch Naming

```text
feature/auth
feature/product
feature/cart
feature/profile
feature/admin
bugfix/*
hotfix/*
```

## Commit Convention

```text
feat:
fix:
docs:
style:
refactor:
test:
chore:
```

---

# Documents

```text
docs/

├── Business Model Canvas
├── Use Case Diagram
├── ER Diagram
├── MongoDB Schema
├── Wireframes
└── API Documentation
```

---

# Progress Checklist

## Analysis

- [x] Business Model Canvas
- [ ] Use Case Diagram
- [ ] ER Diagram
- [ ] MongoDB Schema

## Frontend

- [ ] Landing Page
- [ ] Login
- [ ] Register
- [ ] Product List
- [ ] Product Detail
- [ ] Shopping Cart
- [ ] Checkout
- [ ] User Dashboard
- [ ] Admin Dashboard

## Backend

- [ ] Authentication API
- [ ] Product CRUD
- [ ] Cart CRUD
- [ ] Order CRUD

## Deployment

- [ ] Frontend Deployment
- [ ] Backend Deployment
- [ ] MongoDB Atlas

---

# Future Improvements

เพื่อพัฒนา OCCASION ให้เป็นมากกว่าเว็บไซต์ E-Commerce โครงการมีแนวทางการพัฒนาต่อดังนี้

## Personal Color Recommendation

แนะนำสีเสื้อผ้าที่เหมาะกับผู้ใช้งาน โดยอ้างอิงจากโทนสีผิว และสีผม เพื่อช่วยเสริมบุคลิกและความมั่นใจในการแต่งตัว

---

## Daily Outfit Recommendation

แนะนำสีเสื้อผ้าประจำวันตามวันเกิดหรือสีมงคล เพื่อสร้างประสบการณ์การใช้งานที่สนุกและตอบโจทย์ผู้ใช้ที่สนใจเรื่องความเชื่อ

---

## Lookbook Creator

ผู้ใช้สามารถสร้าง Lookbook ของตนเองผ่าน Canvas โดยสามารถลากและวางสินค้า Mix & Match เสื้อผ้า บันทึกชุดโปรด และแชร์ให้ผู้อื่นได้

---

## Community Fashion Sharing

เปิดพื้นที่ให้สมาชิกแชร์ Complete Look จากการแต่งตัวจริง

ผู้ใช้งานสามารถ

- โพสต์รูปการแต่งตัว
- แชร์ไอเดียการแต่งตัว
- กด Like
- แสดงความคิดเห็น
- บันทึกชุดที่ชื่นชอบ

เพื่อสร้างแรงบันดาลใจจากผู้ใช้งานจริง

---

## AI Fashion Assistant

พัฒนา AI เพื่อวิเคราะห์ข้อมูลของผู้ใช้งาน เช่น

- ประวัติการซื้อ
- สีที่ชอบ
- สไตล์การแต่งตัว
- ขนาดตัว

เพื่อแนะนำสินค้าและชุดที่เหมาะสมกับแต่ละบุคคล

---

# License

This project was developed for educational purposes only and is not intended for commercial use.
