# OCCASION — Mix & Match Fashion E-commerce

OCCASION เป็นเว็บไซต์ E-commerce แฟชั่นแบบ Unisex ที่ช่วยให้ลูกค้าค้นหา เลือกซื้อ และจับคู่เสื้อผ้าได้สะดวกขึ้นผ่านฟีเจอร์ Lookbook / Mix & Match

ระบบรองรับการเลือกสินค้าและตัวเลือกสีหรือไซซ์ การจัดการตะกร้า การ Checkout และระบบจัดการสินค้าสำหรับ Admin

> Group Project for Junior Software Developer Bootcamp — Batch 13

---

## Table of Contents

- [About the Project](#about-the-project)
- [Project Objectives](#project-objectives)
- [Team Members](#team-members)
- [Technology](#technology)
- [User Roles](#user-roles)
- [Core Features](#core-features)
- [System Architecture](#system-architecture)
- [Core Business Rules](#core-business-rules)
- [Sprint 1 Status](#sprint-1-status)
- [Sprint 2 Goal](#sprint-2-goal)
- [Product Data](#product-data)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Project Documents](#project-documents)
- [Git Workflow](#git-workflow)
- [Progress](#progress)
- [Phase 1 Scope](#phase-1-scope)
- [Future Improvements](#future-improvements)

---

# About the Project

การเลือกซื้อเสื้อผ้าออนไลน์อาจมีปัญหา เช่น:

- ไม่แน่ใจว่าสินค้าชิ้นใดสามารถนำมาจับคู่กันได้
- เลือกสีหรือไซซ์ไม่เหมาะสม
- ใช้เวลานานในการค้นหาและเปรียบเทียบสินค้า
- ต้องการบันทึกสินค้าหรือชุดที่สนใจ
- ต้องการตรวจสอบตะกร้าและยอดรวมก่อน Checkout
- ต้องการติดตามคำสั่งซื้อหลังจากยืนยันการสั่งซื้อ

OCCASION จึงถูกออกแบบเป็นระบบ E-commerce สำหรับแฟชั่นแบบ Unisex โดยมี Lookbook / Mix & Match เป็นฟีเจอร์สำคัญสำหรับแนะนำการจับคู่ Tops และ Bottoms

---

# Project Objectives

- พัฒนาเว็บไซต์ E-commerce ด้วย MERN Stack
- เปลี่ยน Static HTML Prototype เป็น React
- สร้าง REST API ด้วย Node.js และ Express
- จัดเก็บข้อมูลด้วย MongoDB และ Mongoose
- รองรับ Product Variants เช่น สีและไซซ์
- รองรับ Product, Cart และ Checkout Flow
- รองรับ Guest, Member และ Admin
- ตรวจสอบข้อมูลใน Form และแสดงข้อความที่เข้าใจง่าย
- พัฒนา Responsive Web Design
- ฝึกการทำงานร่วมกันด้วย Git, GitHub, Trello และ Pull Request
- ให้สมาชิกสามารถอธิบาย Flow และโค้ดที่ตนเองรับผิดชอบได้

---

# Team Members

ทีมใช้หลัก Feature Ownership โดยสมาชิกไม่ได้รับผิดชอบเพียงหน้าเว็บ แต่รับผิดชอบให้ Flow ของ Feature ทำงานตั้งแต่ต้นทางถึงปลายทาง

| Name | Team Role | Feature Ownership |
|---|---|---|
| Nae | Team Leader / Full-stack Developer | Admin Panel, Product Mock Data, Lookbook Data, Integration และ Sprint Demo |
| Mos | Technical Setup / Frontend Developer | React Setup, Shared Components, Layout, Landing และ Content Pages |
| BM | Product Developer | Product List, Product Detail, Product Model และ Product API |
| Bird | Cart Developer | Shopping Cart, Checkout, Cart Model และ Cart API |
| LukNok | User Developer | Authentication UI, Profile, Form Validation และ Testing |

Feature Owner ไม่จำเป็นต้องเขียนทุกส่วนเพียงคนเดียว แต่ต้อง:

- เข้าใจข้อมูลที่ Feature รับเข้ามา
- เข้าใจข้อมูลที่ต้องส่งต่อ
- ประสานงานกับ Feature ที่เกี่ยวข้อง
- ทดสอบ Flow ที่ตนเองรับผิดชอบ
- อธิบายพฤติกรรมของโค้ดได้

---

# Technology

## Sprint 1 Prototype

- HTML
- CSS
- JavaScript
- Tailwind CSS

## Sprint 2 Target

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express
- Mongoose

### Database

- MongoDB

### Development Tools

- Git
- GitHub
- Trello
- Postman
- Figma
- dbdiagram.io
- Visual Studio Code

---

# User Roles

## Guest

Guest สามารถ:

- ดูรายการสินค้า
- ดูรายละเอียดสินค้า
- เลือกสีและไซซ์
- ดู Lookbook
- เพิ่มสินค้าเข้าตะกร้า
- แก้จำนวนสินค้าในตะกร้า
- ลบสินค้าออกจากตะกร้า
- สมัครสมาชิก
- Login

Guest Cart สามารถเก็บใน Frontend เช่น `localStorage` ได้ แต่ Guest ต้องสมัครสมาชิกหรือ Login ก่อน Checkout ตามข้อตกลงของระบบ Phase 1

## Member

Member สามารถใช้ความสามารถของ Guest และสามารถ:

- จัดการข้อมูล Profile
- จัดการที่อยู่จัดส่ง
- จัดการรายการโปรด
- Checkout
- ดูประวัติ Order
- ดูรายละเอียด Order
- ติดตาม Shipment
- Review สินค้าที่เคยซื้อ

## Admin

Admin สามารถ:

- ดู Admin Dashboard
- ดู เพิ่ม แก้ไข และลบสินค้า
- จัดการ Product Variants
- จัดการ Stock
- จัดการ Lookbook
- จัดการ Order
- จัดการข้อมูลลูกค้า
- จัดการ Shipment
- ดู Audit Log

---

# Core Features

## Product

- Product List
- Product Detail
- Product Card
- Product Variants
- Color Selection
- Size Selection
- Product Tags
- Stock Information
- Search and Filter

## Lookbook

- แสดงการจับคู่ Tops และ Bottoms
- สินค้าแต่ละชิ้นสามารถอยู่ในหลาย Lookbooks
- Phase 1 กำหนดให้สินค้าตัวอย่างแต่ละชิ้นปรากฏใน 2 Looks

## Cart

- เพิ่มสินค้าเข้า Cart
- เลือก Product Variant
- แก้จำนวน
- ลบสินค้า
- คำนวณ Subtotal
- คำนวณ Total
- ตรวจสอบ Stock

## Checkout

- แสดงรายการสินค้า
- แสดง Order Summary
- แสดงยอดรวม
- ยืนยันข้อมูลก่อนสร้าง Order
- สามารถจำลอง Payment สำเร็จได้โดยไม่ต้องเชื่อมระบบจ่ายเงินจริง

## Admin Product Management

- ดูรายการสินค้า
- เพิ่มสินค้า
- แก้ไขสินค้า
- ลบสินค้า
- ตรวจสอบ Product Form
- จัดการสี ไซซ์ ราคา SKU และ Stock

---

# System Architecture

```text
React + Tailwind CSS
          |
        Axios
          |
          v
Node.js + Express
          |
       Mongoose
          |
          v
       MongoDB
```

Flow การอ่านข้อมูลสินค้า:

```text
React ขอรายการสินค้า
          |
          v
Express รับคำขอ
          |
          v
Mongoose อ่านข้อมูลจาก MongoDB
          |
          v
Express ส่งข้อมูลกลับ
          |
          v
React แสดง Product List
```

Flow การเพิ่มสินค้าเข้า Cart:

```text
เลือก Product
      |
เลือกสีและไซซ์
      |
กด Add to Cart
      |
ส่ง productId + variantId + quantity
      |
Server ตรวจ Product, Variant และ Stock
      |
บันทึก Cart ใน MongoDB
      |
แสดง Cart ที่อัปเดตแล้ว
```

---

# Core Business Rules

- Backend เป็นแหล่งข้อมูลหลักสำหรับราคา Stock ยอดรวม และ Role
- Stock ต้องไม่ติดลบ
- Price ต้องไม่ติดลบ
- Product Variant SKU ต้องไม่ซ้ำ
- ผู้ใช้ต้องเลือกสีและไซซ์ก่อนเพิ่มสินค้าเข้า Cart
- Cart Item ต้องระบุ Product และ Variant
- Quantity ใน Cart ต้องไม่น้อยกว่า 1
- Quantity ใน Cart ต้องไม่เกิน Stock
- เมื่อเพิ่ม Product Variant เดิมซ้ำ ระบบควรเพิ่ม Quantity ใน Cart Item เดิม
- Member สามารถเข้าถึงข้อมูลของตนเองเท่านั้น
- Guest สามารถจัดการ Cart ได้ แต่ต้อง Login ก่อน Checkout
- Favorite ต้องอ้างอิง Product หรือ Lookbook อย่างใดอย่างหนึ่ง
- Review ต้องอ้างอิงสินค้าที่ Member เคยซื้อจริง
- Order Item หนึ่งรายการ Review ได้สูงสุดหนึ่งครั้ง
- Phase 1 กำหนดให้หนึ่ง Order มี Shipment ได้สูงสุดหนึ่งรายการ
- Admin Actions ที่สำคัญควรถูกบันทึกใน Audit Log

---

# Sprint 1 Status

Sprint 1 เน้นการวิเคราะห์ ออกแบบ และสร้าง Static UI Prototype ด้วย HTML, CSS, JavaScript และ Tailwind CSS

## Analysis and Design

- [x] Business Model Canvas
- [x] Use Case Diagram
- [x] Use Case Description
- [x] Entity-Relationship Diagram
- [x] MongoDB Schema Design
- [x] API Specification
- [x] Desktop Wireframes

## Static UI Prototype

- [x] Landing Page
- [x] Navbar and Footer
- [x] Login
- [x] Registration
- [x] Forgot Password
- [x] Profile
- [x] Product List
- [x] Product Detail
- [x] Lookbook
- [x] Shopping Cart
- [x] Checkout
- [x] Admin Dashboard
- [x] Content Pages

Static HTML files will be retained as UI references during the Sprint 2 React migration. They should not be deleted until their React replacements are completed and tested.

---

# Sprint 2 Goal

Sprint 2 focuses on converting the core E-commerce Flow from Static HTML into React and connecting Product and Cart operations to Express, Mongoose and MongoDB.

## Required Deliverables

- [ ] React application is set up
- [ ] Express server is set up
- [ ] Mongoose connects to MongoDB without errors
- [ ] Product component is implemented with React
- [ ] Product List component is implemented with React
- [ ] Cart component is implemented with React
- [ ] Checkout component is implemented with React
- [ ] Product Form validates submitted data
- [ ] Meaningful validation messages are displayed
- [ ] Admin can create a Product
- [ ] Admin can read Products
- [ ] Admin can update a Product
- [ ] Admin can delete a Product
- [ ] Customer can read their Cart
- [ ] Customer can add a Product Variant to their Cart
- [ ] Customer can update Cart Item Quantity
- [ ] Customer can remove a Cart Item
- [ ] Product and Cart operations interact with MongoDB
- [ ] Every member can explain the Flow and code they own

## Sprint 2 Priorities

### High Priority

- React Setup
- Express and MongoDB Setup
- Product Model and API
- Product List and Product Detail
- Admin Product Management
- Product Form Validation
- Cart Model and API
- Cart and Checkout
- Product-to-Cart Integration

### After the Required Flow Works

- Landing Page React Migration
- Authentication UI React Migration
- Profile React Migration
- Lookbook React Migration

### Optional During Sprint 2

- Article React Migration
- Customer Service React Migration
- Terms and Conditions React Migration
- Privacy Policy React Migration
- Advanced Lookbook Features
- Advanced Admin Dashboard
- Payment
- Shipment
- Review
- Rewards
- AI Features

---

# Product Data

Sprint 2 will start with 10 Unisex Products:

- 5 Tops
- 5 Bottoms
- 2 Colors per Product
- Sizes S, M and L
- 6 Variants per Product
- Approximately 60 Product Variants

Each Product should appear in 2 Lookbook Looks.

## Product Example

```js
{
  name: "Oversized T-Shirt",
  description: "เสื้อยืดทรง Oversized สำหรับการแต่งตัวแบบ Casual",
  category: "tops",
  gender: "unisex",
  tags: ["casual", "minimal"],
  imageUrl: "/images/products/oversized-tshirt-white.jpg",
  variants: [
    {
      sku: "TOP-001-WHT-S",
      color: "white",
      size: "S",
      price: 590,
      stockQuantity: 10
    },
    {
      sku: "TOP-001-WHT-M",
      color: "white",
      size: "M",
      price: 590,
      stockQuantity: 8
    }
  ]
}
```

## Add-to-Cart Data

When a customer adds a Product to the Cart, the Frontend sends:

```js
{
  productId: "PRODUCT_ID",
  variantId: "VARIANT_ID",
  quantity: 1
}
```

The Backend must retrieve the actual Product price and Stock from MongoDB.

---

# Project Structure

The following structure is the Sprint 2 target structure:

```text
occasion/
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       │   └── images/
│       │       ├── products/
│       │       └── lookbooks/
│       ├── components/
│       │   ├── common/
│       │   ├── layout/
│       │   ├── product/
│       │   ├── lookbook/
│       │   ├── cart/
│       │   ├── checkout/
│       │   ├── user/
│       │   └── admin/
│       ├── pages/
│       │   ├── Landing/
│       │   ├── Products/
│       │   ├── Lookbook/
│       │   ├── Cart/
│       │   ├── Checkout/
│       │   ├── Auth/
│       │   ├── Profile/
│       │   ├── Orders/
│       │   ├── Admin/
│       │   └── NotFound/
│       ├── services/
│       │   ├── apiClient.js
│       │   ├── authService.js
│       │   ├── productService.js
│       │   ├── lookbookService.js
│       │   ├── cartService.js
│       │   └── orderService.js
│       ├── context/
│       ├── hooks/
│       ├── routes/
│       ├── utils/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── utils/
│   │   ├── data/
│   │   │   └── products.json
│   │   ├── scripts/
│   │   │   └── seedProducts.js
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
├── docs/
│   ├── api-spec/
│   ├── bmc/
│   ├── er-diagram/
│   ├── schema/
│   ├── usecase/
│   └── wireframes/
│
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

---

# Getting Started

The React and Express setup will be completed during Sprint 2. Update this section if the setup commands change.

## Prerequisites

- Node.js
- npm
- MongoDB or MongoDB Atlas
- Git

## Clone the Repository

```bash
git clone <repository-url>
cd group-project-3
```

## Start the Client

After the React migration setup is completed:

```bash
cd client
npm install
npm run dev
```

## Start the Server

After the Express setup is completed:

```bash
cd server
npm install
npm run dev
```

## Current Sprint 1 Tailwind Command

The current Static HTML Prototype uses:

```bash
cd client
npm install
npm run watch
```

---

# Environment Variables

Do not commit `.env` files or passwords to Git.

The Server should provide a `.env.example` containing variable names without secret values:

```env
PORT=5000
MONGODB_URI=
CLIENT_URL=http://localhost:5173
```

When a new environment variable is introduced:

1. Add its name to `.env.example`
2. Explain its purpose
3. Do not commit the real value
4. Notify the team

---

# API Documentation

The API specification is located at:

```text
docs/api-spec/Occasion - api-spec.md
```

Sprint 2 will prioritize:

```text
GET    /api/products
GET    /api/products/:productId
POST   /api/products
PUT    /api/products/:productId
DELETE /api/products/:productId

GET    /api/users/:userId/cart
POST   /api/users/:userId/cart/items
PUT    /api/users/:userId/cart/items/:itemId
DELETE /api/users/:userId/cart/items/:itemId
```

API endpoint names may be refined during Sprint 2, but the Frontend and Backend must use the same agreed contract.

---

# Project Documents

Project documents are stored in the `docs/` directory:

```text
docs/
├── api-spec/
├── bmc/
├── er-diagram/
├── schema/
├── usecase/
└── wireframes/
```

The directory contains:

- Business Model Canvas
- Use Case Diagram
- Use Case Description
- Entity-Relationship Diagram
- MongoDB Schema Design
- API Specification
- Desktop Wireframes

---

# Git Workflow

```text
main
  |
develop
  |
  ├── feature/react-setup
  ├── feature/server-setup
  ├── feature/product-model
  ├── feature/product-api
  ├── feature/product-react
  ├── feature/admin-product-form
  ├── feature/cart-model
  ├── feature/cart-api
  ├── feature/cart-react
  ├── feature/auth-react
  └── feature/form-validation
```

Team members must:

1. Create a Feature Branch from `develop`
2. Work on one clear task
3. Test their work
4. Open a Pull Request into `develop`
5. Request at least one Review
6. Move the Trello Card through Code Review and Testing
7. Merge only after the Review passes

Do not push directly to `main` or `develop`.

For complete contribution rules, see [CONTRIBUTING.md](CONTRIBUTING.md).

---

# Progress

## Sprint 1

- [x] Project analysis
- [x] Database design
- [x] API design
- [x] Desktop wireframes
- [x] Static HTML prototype
- [x] Tailwind CSS prototype

## Sprint 2

### Setup

- [ ] React Setup
- [ ] React Router Setup
- [ ] Shared Layout Setup
- [ ] Express Setup
- [ ] MongoDB Connection
- [ ] Mongoose Setup
- [ ] Environment Variables

### Product

- [ ] Product Mock Data
- [ ] Product Images
- [ ] Product Model
- [ ] Product API
- [ ] Product Card React Component
- [ ] Product List React Component
- [ ] Product Detail React Page
- [ ] Product Variant Selection
- [ ] Product Form Validation

### Admin

- [ ] Admin Product List
- [ ] Create Product
- [ ] Update Product
- [ ] Delete Product

### Cart and Checkout

- [ ] Cart Model
- [ ] Cart API
- [ ] Cart React Components
- [ ] Add to Cart
- [ ] Update Cart Item
- [ ] Delete Cart Item
- [ ] Cart Summary
- [ ] Checkout React Page

### Integration and Testing

- [ ] Product-to-Cart Integration
- [ ] MongoDB CRUD Testing
- [ ] Error State Testing
- [ ] Form Validation Testing
- [ ] Sprint Demo Preparation

## Sprint 3

- [ ] Connect all required CRUD operations
- [ ] Deploy React application
- [ ] Deploy Express API
- [ ] Connect deployed Frontend and Backend
- [ ] Production testing
- [ ] Final presentation and Demo

---

# Phase 1 Scope

```text
Browse Products
       |
Select Product Variant
       |
Add to Cart
       |
Update or Remove Cart Items
       |
Login or Register
       |
Checkout
       |
Confirm Order
       |
Simulate Payment
       |
View Order Status
```

Phase 1 also includes:

- Lookbook / Mix & Match
- Profile
- Address Management
- Favorites
- Admin Product Management
- Admin Order Management
- Stock Management
- Shipment Tracking
- Product Reviews
- Audit Log

The team will complete the required Product and Cart Flow before implementing optional or advanced features.

---

# Future Improvements

The following features are outside the current Sprint 2 priority:

- Personal Color Recommendation
- Daily Outfit Recommendation
- Lookbook Creator
- Community Fashion Sharing
- Rewards System
- AI Fashion Assistant
- Real Payment Integration
- Multiple Shipments per Order
- Advanced Inventory Analytics
- Advanced Admin Dashboard

---

# License and Educational Use

This project is created for educational purposes as part of the Junior Software Developer Bootcamp.

Product images from third-party websites must be treated as temporary references unless the team has permission to use them. Before public deployment, third-party product images should be replaced with:

- Images created by the team
- Properly licensed images
- Royalty-free images
- Original generated images

The project must not imply an official relationship with any third-party fashion brand.
