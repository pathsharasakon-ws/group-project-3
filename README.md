# OCCASION - Mix & Match Fashion E-Commerce

OCCASION เป็นเว็บไซต์ E-Commerce สำหรับแบรนด์แฟชั่นที่ช่วยให้ลูกค้าค้นหาและเลือกซื้อเสื้อผ้าได้สะดวกขึ้น พร้อมฟีเจอร์ **Lookbook / Mix & Match** สำหรับแนะนำการจับคู่สินค้า รวมถึงระบบจัดการข้อมูลสัดส่วนร่างกาย รายการโปรด ตะกร้าสินค้า คำสั่งซื้อ การชำระเงิน การติดตามการจัดส่ง และรีวิวสินค้า

ระบบแบ่งผู้ใช้งานออกเป็น 3 กลุ่มหลัก ได้แก่ **Guest, Member และ Admin** โดย Guest สามารถเลือกดูสินค้าและจัดการตะกร้าเบื้องต้นได้ แต่ต้องสมัครสมาชิกหรือเข้าสู่ระบบก่อนดำเนินการ Checkout

> Developed as a MERN Stack project for **Junior Software Developer Batch 13**

---

# Table of Contents

- [About Project](#about-project)
- [Objectives](#objectives)
- [Team Members](#team-members)
- [Tech Stack](#tech-stack)
- [Business Model Canvas](#business-model-canvas)
- [User Roles](#user-roles)
- [Features](#features)
- [System Architecture](#system-architecture)
- [Wireframes](#wireframes)
- [Database Design](#database-design)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Git Workflow](#git-workflow)
- [Documents](#documents)
- [Progress Checklist](#progress-checklist)
- [Phase 1 Scope](#phase-1-scope)
- [Future Improvements](#future-improvements)
- [License](#license)

---

# About Project

การซื้อเสื้อผ้าออนไลน์มักมีปัญหา เช่น

- ไม่มั่นใจว่าจะเลือกสินค้าแบบใดให้เข้ากัน
- เลือกไซส์หรือ Variant ได้ไม่เหมาะสม
- ใช้เวลานานในการค้นหาและจับคู่สินค้า
- ต้องการบันทึกสินค้าหรือชุดที่สนใจไว้ดูภายหลัง
- ต้องการติดตามคำสั่งซื้อและสถานะการจัดส่งได้สะดวก

OCCASION จึงถูกพัฒนาขึ้นเป็นระบบ E-Commerce ที่เน้นประสบการณ์การเลือกซื้อเสื้อผ้าและการจับคู่สินค้า ผ่านฟีเจอร์ **Lookbook / Mix & Match** พร้อมระบบสมาชิกและระบบจัดการร้านค้าสำหรับ Admin

Phase 1 ของโครงการเน้นการสร้างระบบ E-Commerce Core ให้สามารถใช้งานได้ครบตั้งแต่การเลือกสินค้าไปจนถึงการสั่งซื้อและติดตามการจัดส่ง

---

# Objectives

- พัฒนาเว็บไซต์ E-Commerce ด้วย MERN Stack
- ออกแบบระบบตามหลัก Software Engineering
- พัฒนา RESTful API ระหว่าง Frontend และ Backend
- ออกแบบฐานข้อมูลด้วย MongoDB และ Mongoose
- รองรับ Responsive Web Design
- รองรับ Guest, Member และ Admin
- รองรับ Lookbook / Mix & Match
- รองรับ Cart, Checkout, Payment และ Order Management
- ใช้ Git และ GitHub เพื่อสนับสนุนการทำงานร่วมกันของทีม
- จัดทำเอกสารระบบให้สมาชิกในทีมสามารถใช้อ้างอิงร่วมกันได้

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
- dbdiagram.io

## API Documentation

- Markdown API Specification

---

# Business Model Canvas

## Customer Segments

- ผู้ที่ต้องการไอเดียในการจับคู่เสื้อผ้า
- ผู้ซื้อเสื้อผ้าออนไลน์
- ลูกค้าที่ต้องการเลือกซื้อสินค้าเป็นชุด
- ลูกค้าเดิมของแบรนด์ที่ต้องการค้นหาและบันทึกสินค้าที่สนใจ

## Value Proposition

- Lookbook / Mix & Match
- Body Measurements Profile
- Product Variant Selection
- Favorites
- Convenient Online Shopping Experience
- Order & Shipment Tracking

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
- Lookbook / Mix & Match Set Sales

---

# User Roles

## Guest

- ค้นหาและเลือกสินค้า
- ดูรายละเอียดสินค้า
- ดู Variant
- ดู Lookbook / Mix & Match
- เพิ่มสินค้าในตะกร้า
- ดูและแก้ไขตะกร้า
- สมัครสมาชิก
- เข้าสู่ระบบ

> Guest สามารถมี Cart ฝั่ง Frontend เช่น `localStorage` แต่ **ไม่สามารถ Checkout ได้**

## Member

Member สามารถใช้งานฟังก์ชันของ Guest ได้ทั้งหมด และมีความสามารถเพิ่มเติม ได้แก่

- จัดการรายการโปรด
- จัดการข้อมูลส่วนตัว
- จัดการข้อมูลสัดส่วนร่างกาย
- จัดการที่อยู่จัดส่ง
- Checkout
- เลือกและยืนยันที่อยู่
- เลือกวิธีชำระเงิน
- ชำระเงิน
- ดูประวัติคำสั่งซื้อ
- ดูรายละเอียดคำสั่งซื้อ
- ติดตามการจัดส่ง
- รีวิวสินค้า

## Admin

- Dashboard
- จัดการหมวดหมู่สินค้า
- จัดการสินค้า
- จัดการ Variant
- จัดการ Stock
- จัดการ Lookbook / Mix & Match
- จัดการคำสั่งซื้อ
- จัดการลูกค้า
- จัดการข้อมูลการจัดส่ง
- ดู Audit Log

---

# Features

## Customer

- Product Search
- Product List
- Product Detail
- Product Variant Selection
- Lookbook / Mix & Match
- Shopping Cart
- Register
- Login

## Member Features

- Favorites
- User Profile
- Body Measurements
- Shipping Addresses
- Shopping Cart
- Checkout
- Payment
- Order History
- Order Detail
- Shipment Tracking
- Product Reviews

## Admin Features

- Dashboard
- Category Management
- Product Management
- Variant Management
- Inventory / Stock Management
- Lookbook / Mix & Match Management
- Order Management
- Customer Management
- Shipment Management
- Audit Log
- Order Management

---

# System Architecture

```text
React + TailwindCSS
        │
      Axios
        │
        ▼
Node.js + Express.js
        │
     Mongoose
        │
        ▼
      MongoDB
```

---

# Core Business Rules

- Guest สามารถเลือกสินค้าและจัดการ Cart ได้ แต่ Checkout ไม่ได้
- Guest ต้อง Register หรือ Login ก่อน Checkout
- Member Cart ถูกจัดเก็บใน Database
- Guest Cart สามารถเก็บใน Frontend เช่น `localStorage`
- Backend เป็น Source of Truth สำหรับราคา Stock ยอดรวม และ Role
- Stock ต้องไม่ติดลบ
- Product Variant SKU ต้องไม่ซ้ำ
- Favorite ต้องเป็น Product หรือ Lookbook อย่างใดอย่างหนึ่ง
- Member สามารถเข้าถึงได้เฉพาะข้อมูลของตนเอง
- Review ต้องอ้างอิงสินค้าที่ Member เคยซื้อจริง
- 1 Order Item สามารถ Review ได้สูงสุด 1 ครั้ง
- Phase 1 กำหนดให้ 1 Order มี Shipment ได้สูงสุด 1 รายการ
- Admin Actions สำคัญควรถูกบันทึกใน Audit Log

---

# Wireframes

| Page | Status |
|---|---|
| Landing Page | ✅ |
| Login | ✅ |
| Register | ✅ |
| Product List | ✅ |
| Product Detail | ✅ |
| Lookbook / Mix & Match | ✅ |
| Shopping Cart | ✅ |
| Checkout | ✅ |
| User Profile | ✅ |
| Order History | ✅ |
| Order Detail | ✅ |
| Admin Dashboard | ✅ |

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
- [x] Use Case Diagram
- [x] Use Case Description
- [x] ER Diagram
- [x] MongoDB Schema
- [x] API Specification

## Frontend

- [ ] Landing Page
- [ ] Login
- [ ] Register
- [ ] Product List
- [ ] Product Detail
- [ ] Lookbook / Mix & Match
- [ ] Shopping Cart
- [ ] Checkout
- [ ] User Profile
- [ ] Body Measurements
- [ ] Address Management
- [ ] Favorites
- [ ] Order History
- [ ] Order Detail
- [ ] Shipment Tracking
- [ ] Product Review
- [ ] Admin Dashboard

## Backend

- [ ] Authentication API
- [ ] Profile API
- [ ] Address API
- [ ] Category API
- [ ] Product API
- [ ] Lookbook API
- [ ] Favorites API
- [ ] Cart API
- [ ] Checkout API
- [ ] Order API
- [ ] Payment API
- [ ] Shipment API
- [ ] Review API
- [ ] Admin Category Management
- [ ] Admin Product Management
- [ ] Admin Variant Management
- [ ] Admin Stock Management
- [ ] Admin Lookbook Management
- [ ] Admin Order Management
- [ ] Admin Customer Management
- [ ] Admin Shipment Management
- [ ] Admin Audit Log

## Deployment

- [ ] Frontend Deployment
- [ ] Backend Deployment
- [ ] MongoDB Atlas
- [ ] Environment Variables Setup
- [ ] Production Testing

---
# Phase 1 Scope

```text
Browse Product
      ↓
Select Variant
      ↓
Cart
      ↓
Login / Register
      ↓
Checkout
      ↓
Payment
      ↓
Order
      ↓
Shipment
      ↓
Review
```

รวมถึง Lookbook / Mix & Match, Favorites, Body Measurements, Address Management, Admin Management และ Audit Log

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
