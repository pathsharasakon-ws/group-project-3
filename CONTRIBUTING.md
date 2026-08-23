# Contributing Guidelines

ยินดีต้อนรับสู่โปรเจกต์ OCCASION

เอกสารนี้กำหนดวิธีทำงานร่วมกันของทีม เพื่อลดงานซ้ำ ลด Merge Conflict และช่วยให้สมาชิกทุกคนเข้าใจว่าใครรับผิดชอบส่วนใด

สมาชิกทุกคนควรอ่านเอกสารนี้ก่อนเริ่ม Sprint 2 และก่อนเปิด Pull Request

---

## Table of Contents

- [Team Principles](#team-principles)
- [Sprint 2 Goal](#sprint-2-goal)
- [Feature Ownership](#feature-ownership)
- [Technical Support](#technical-support)
- [Trello Workflow](#trello-workflow)
- [Git Branches](#git-branches)
- [Development Workflow](#development-workflow)
- [Shared File Ownership](#shared-file-ownership)
- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)
- [Frontend Guidelines](#frontend-guidelines)
- [Backend Guidelines](#backend-guidelines)
- [API Response Format](#api-response-format)
- [Form Validation](#form-validation)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)
- [Code Review](#code-review)
- [Testing](#testing)
- [Definition of Done](#definition-of-done)
- [Environment Variables](#environment-variables)
- [Prohibited Actions](#prohibited-actions)
- [Getting Help](#getting-help)

---

# Team Principles

ทีมใช้หลัก Feature Ownership

สมาชิกไม่ได้เป็นเจ้าของเพียงหน้าเว็บ แต่รับผิดชอบให้ Flow ของ Feature ทำงานตั้งแต่ต้นทางถึงปลายทาง

Feature Owner ต้อง:

- เข้าใจว่า Feature รับข้อมูลอะไร
- เข้าใจว่าข้อมูลมาจากไหน
- เข้าใจว่าจะส่งข้อมูลต่อให้ใคร
- ประสานงานกับ Feature ที่เกี่ยวข้อง
- ทดสอบทั้งกรณีสำเร็จและกรณีเกิดปัญหา
- อธิบายพฤติกรรมของโค้ดได้
- ขอความช่วยเหลือเมื่อไม่เข้าใจ

Feature Owner ไม่จำเป็นต้องเขียนทุกอย่างคนเดียว สมาชิกสามารถช่วยกัน Pair Programming, Review และ Debug ได้

---

# Sprint 2 Goal

Sprint 2 มุ่งเน้นการเปลี่ยนส่วนสำคัญของเว็บไซต์จาก Static HTML เป็น React และเชื่อม Product กับ Cart เข้ากับ Express, Mongoose และ MongoDB

เมื่อจบ Sprint 2:

- Product, Product List, Cart และ Checkout ใช้ React
- Admin สามารถดู เพิ่ม แก้ไข และลบสินค้า
- ลูกค้าสามารถดู เพิ่ม แก้จำนวน และลบสินค้าใน Cart
- Product Form ตรวจข้อมูลก่อนบันทึก
- ระบบแสดงข้อความที่เข้าใจง่ายเมื่อข้อมูลไม่ถูกต้อง
- Product และ Cart บันทึกใน MongoDB จริง
- สมาชิกอธิบาย Flow และโค้ดที่ตนเองรับผิดชอบได้

ทีมต้องทำ Required Deliverables ให้สำเร็จก่อนเริ่ม Optional Features

---

# Feature Ownership

| Flow | Owner | Reviewer | Scope |
|---|---|---|---|
| Team Coordination | Nae | Everyone | Trello, Sprint Goal, Integration และ Sprint Demo |
| Technical Setup | Mos | Nae | React, Express, MongoDB และโครงสร้างส่วนกลาง |
| Shared Layout | Mos | Nae | Navbar, Footer, Navigation และ Shared Styling |
| Content | Mos | Nae | Landing, Lookbook, Article, Customer Service, Terms และ Privacy |
| Product Mock Data | Nae | Bird, LukNok | Product Images, Variants และ Lookbook Mapping |
| Admin | Nae | BM | Admin Product UI และ Product Form |
| Product | BM | Mos | Product React Components, Product Model และ Product API |
| Cart | Bird | Mos | Cart/Checkout React Components, Cart Model และ Cart API |
| User and Form | LukNok | Mos | Authentication UI, Profile, Form Validation และ Error Messages |
| Integration Testing | Everyone | Nae | ทดสอบ Flow ร่วมกันก่อน Demo |

Reviewer มีหน้าที่ช่วยตรวจและให้คำแนะนำ ไม่ใช่เขียนงานทั้งหมดแทน Owner

---

# Technical Support

Mos เป็น Technical Setup Owner แต่ไม่จำเป็นต้องทำงานของสมาชิกทุกคน

แนวทางการช่วยเหลือ:

```text
Mos สร้างตัวอย่าง
      |
อธิบายให้ทีม
      |
Owner ทดลองทำส่วนของตนเอง
      |
Reviewer ตรวจ
      |
Owner แก้ไขด้วยตนเอง
```

หากสมาชิกยังไม่ถนัด Backend:

1. ดูตัวอย่างที่ทำงานได้
2. ทดลองเปลี่ยนข้อมูลเล็กน้อย
3. อธิบายว่าแต่ละส่วนทำหน้าที่อะไร
4. สร้างส่วนของตนเองตามรูปแบบ
5. ขอ Review ก่อน Merge

---

# Trello Workflow

บอร์ด Trello ใช้ Lists ตามนี้:

```text
Product Backlog
      |
Sprint Backlog
      |
To Do
      |
In Progress
      |
Code Review
      |
Testing
      |
Done
```

ใช้ `Blocked` เมื่องานไม่สามารถทำต่อได้

## ความหมายของแต่ละ List

### Product Backlog

งานทั้งหมดที่อาจทำในอนาคต แต่ทีมยังไม่ได้เลือกเข้า Sprint

### Sprint Backlog

งานที่ทีมตกลงว่าจะทำให้สำเร็จภายใน Sprint ปัจจุบัน

### To Do

งานที่มีรายละเอียดพร้อม มี Owner และสามารถเริ่มได้

### In Progress

Owner เริ่มลงมือทำแล้ว

สมาชิกแต่ละคนควรมีงาน In Progress ไม่เกิน 1–2 Cards พร้อมกัน

### Code Review

Owner ทำงานและทดสอบเบื้องต้นแล้ว พร้อมให้สมาชิกตรวจโค้ด

### Testing

Code Review ผ่านแล้ว และกำลังทดสอบการทำงานร่วมกับระบบ

### Done

งานผ่าน Acceptance Criteria, Code Review และ Testing แล้ว

### Blocked

งานไม่สามารถทำต่อได้ โดยต้องเขียน Comment ว่า:

- ติดปัญหาอะไร
- ทดลองแก้อะไรแล้ว
- ต้องการความช่วยเหลือจากใคร

## Trello Card Requirements

ทุก Card ควรมี:

- ชื่องานที่เข้าใจง่าย
- Description
- Owner
- Reviewer
- Checklist
- Acceptance Criteria หรือ Done เมื่อ
- Labels
- Branch Name
- Pull Request Link เมื่อเปิด PR

---

# Git Branches

โปรเจกต์ใช้ Branch หลักดังนี้:

```text
main
  |
develop
  |
feature/*
bugfix/*
hotfix/*
refactor/*
docs/*
```

## Main Branch

`main` ใช้สำหรับเวอร์ชันที่พร้อมส่งหรือพร้อมนำเสนอ

ห้าม Push หรือ Commit เข้า `main` โดยตรง

## Develop Branch

`develop` ใช้รวมงานที่ผ่าน Review และ Testing แล้ว

ห้าม Commit เข้า `develop` โดยตรง

## Feature Branch

สร้างจาก `develop` และใช้สำหรับงานหนึ่งเรื่อง

ตัวอย่าง:

```text
feature/react-setup
feature/server-setup
feature/product-model
feature/product-api
feature/product-react
feature/product-mock-data
feature/admin-product-form
feature/cart-model
feature/cart-api
feature/cart-react
feature/auth-react
feature/form-validation
```

หลีกเลี่ยง Branch ที่กว้างเกินไป เช่น:

```text
feature/bm-work
feature/all-product
feature/sprint-2
feature/final
```

## Bugfix Branch

ใช้แก้ปัญหาระหว่างการพัฒนา:

```text
bugfix/cart-total
bugfix/product-form-validation
bugfix/missing-product-image
```

## Hotfix Branch

ใช้แก้ปัญหาเร่งด่วนในเวอร์ชัน Production:

```text
hotfix/checkout-crash
```

Sprint 2 อาจยังไม่จำเป็นต้องใช้ Hotfix

## Documentation Branch

ใช้แก้เอกสาร:

```text
docs/update-readme
docs/update-api-spec
docs/sprint-2-plan
```

---

# Development Workflow

## 1. ตรวจสอบงานใน Trello

ก่อนเริ่ม:

- อ่าน Description
- อ่าน Checklist
- อ่าน Acceptance Criteria
- ตรวจว่า Owner เป็นชื่อของตนเอง
- ถ้าไม่เข้าใจให้ถามก่อนเริ่ม

จากนั้นย้าย Card ไป `In Progress`

## 2. กลับไปที่ Develop

```bash
git switch develop
```

## 3. ดึง Develop ล่าสุด

```bash
git pull origin develop
```

## 4. สร้าง Branch ใหม่

ตัวอย่าง:

```bash
git switch -c feature/product-react
```

## 5. พัฒนาและทดสอบ

ทำเฉพาะงานที่อยู่ใน Trello Card

หากพบว่าต้องเปลี่ยนโครงสร้างกลางหรือข้อมูลของ Feature อื่น ให้แจ้ง Owner ก่อน

## 6. ตรวจไฟล์ที่เปลี่ยน

```bash
git status
```

อย่าใช้ `git add .` โดยไม่ตรวจสอบ เพราะอาจเพิ่ม `.env` หรือไฟล์ที่ไม่เกี่ยวข้อง

## 7. เพิ่มเฉพาะไฟล์ที่เกี่ยวข้อง

ตัวอย่าง:

```bash
git add client/src/components/product
git add client/src/pages/Products
```

## 8. ตรวจสิ่งที่จะ Commit

```bash
git diff --staged
```

ตรวจว่า:

- ไม่มี Password
- ไม่มี `.env`
- ไม่มีไฟล์ที่ไม่เกี่ยวข้อง
- ไม่มี Debug Code ที่ไม่จำเป็น

## 9. Commit

```bash
git commit -m "feat: create product card component"
```

## 10. Push Branch

ครั้งแรก:

```bash
git push -u origin feature/product-react
```

ครั้งถัดไป:

```bash
git push
```

## 11. เปิด Pull Request

เปิด Pull Request จาก Feature Branch ไปที่ `develop`

ห้ามเปิดเข้า `main` เว้นแต่ทีมตกลงเตรียม Release

## 12. ย้าย Trello Card

เมื่อเปิด Pull Request แล้ว:

- เพิ่ม Pull Request Link ลงใน Trello Card
- ย้าย Card ไป `Code Review`
- Assign Reviewer

## 13. แก้ไขตาม Review

Owner เป็นผู้แก้ไขงานของตนเอง

หลังแก้ไข:

- ทดสอบอีกครั้ง
- Commit
- Push
- แจ้ง Reviewer

## 14. Testing

เมื่อ Review ผ่าน ให้ย้าย Card ไป `Testing`

หลังทดสอบผ่านจึงย้ายไป `Done`

---

# Updating a Branch

หาก `develop` มีการเปลี่ยนแปลงระหว่างที่กำลังทำงาน:

```bash
git switch develop
git pull origin develop
git switch feature/product-react
git merge develop
```

หากเกิด Merge Conflict:

1. หยุดและอ่านว่าไฟล์ใด Conflict
2. แจ้ง Owner ของไฟล์กลาง
3. ตกลงว่าควรเก็บส่วนใด
4. แก้ Conflict
5. ทดสอบใหม่
6. Commit การแก้ Conflict
7. Push อีกครั้ง

ห้ามลบโค้ดของสมาชิกคนอื่นเพียงเพื่อให้ Conflict หาย

---

# Shared File Ownership

ไฟล์ส่วนกลางมีผลกับสมาชิกหลายคน จึงต้องแจ้ง Owner และขอ Review ก่อน Merge

## Frontend Shared Files

Owner: Mos

```text
client/package.json
client/src/main.jsx
client/src/App.jsx
client/src/routes/AppRoutes.jsx
client/src/components/layout/Navbar.jsx
client/src/components/layout/Footer.jsx
client/src/services/apiClient.js
```

## Backend Shared Files

Owner: Mos

```text
server/package.json
server/src/app.js
server/src/server.js
server/src/config/database.js
server/src/middleware/errorHandler.js
```

## Product Data Files

Owner: Nae  
Technical Reviewer: BM

```text
server/src/data/products.json
client/src/assets/images/products/
client/src/assets/images/lookbooks/
```

## Documentation

Owner: Nae  
Reviewer: Team Member ที่เกี่ยวข้อง

```text
README.md
CONTRIBUTING.md
docs/api-spec/
docs/schema/
docs/er-diagram/
```

หากต้องการแก้ไฟล์ส่วนกลาง:

1. แจ้ง Owner
2. อธิบายเหตุผล
3. แก้เฉพาะส่วนที่จำเป็น
4. ขอ Owner Review ก่อน Merge

---

# Project Structure

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
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── utils/
│   │   ├── data/
│   │   ├── scripts/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
├── docs/
├── README.md
├── CONTRIBUTING.md
└── .gitignore
```

Static HTML files from Sprint 1 must remain available as references until their React replacements are completed and tested.

ห้ามย้ายหรือลบ Static HTML ของสมาชิกอื่นโดยไม่แจ้ง Owner

---

# Naming Conventions

## React Components

ใช้ PascalCase:

```text
Navbar.jsx
Footer.jsx
ProductCard.jsx
ProductList.jsx
CartItem.jsx
AdminSidebar.jsx
```

## Pages

ใช้ PascalCase:

```text
LandingPage.jsx
ProductListPage.jsx
ProductDetailPage.jsx
CartPage.jsx
CheckoutPage.jsx
LoginPage.jsx
ProfilePage.jsx
```

## JavaScript Functions and Variables

ใช้ camelCase:

```js
getProducts()
addToCart()
calculateSubtotal()
validateProductForm()
```

## Models

ใช้ชื่อเอกพจน์และ PascalCase:

```text
User.js
Product.js
Cart.js
Order.js
Lookbook.js
```

## Controllers

```text
productController.js
cartController.js
orderController.js
```

## Services

```text
apiClient.js
productService.js
cartService.js
orderService.js
```

## Routes

```text
productRoutes.js
cartRoutes.js
orderRoutes.js
```

## API Paths

ใช้คำนามพหูพจน์:

```text
/api/products
/api/orders
/api/users
/api/lookbooks
```

Cart ของผู้ใช้:

```text
/api/users/:userId/cart
```

## MongoDB Collections

ใช้ตัวพิมพ์เล็กและรูปพหูพจน์:

```text
users
products
carts
orders
lookbooks
```

## Standard Terms

ใช้คำต่อไปนี้ให้เหมือนกันทั้งทีม:

```text
Product
Product Variant
Cart
Cart Item
Checkout
Order
Lookbook
Sign Up
Login
Tailwind CSS
E-commerce
```

คำว่า Order ต้องสะกด:

```text
Order
```

ห้ามใช้:

```text
Oder
```

---

# Frontend Guidelines

## Component Responsibility

Component หนึ่งตัวควรมีหน้าที่ชัดเจน

ตัวอย่าง:

```text
ProductCard     แสดงสินค้าหนึ่งรายการ
ProductList     แสดง ProductCard หลายรายการ
CartItem        แสดงสินค้าใน Cart หนึ่งรายการ
CartSummary     แสดง Subtotal และ Total
ProductForm     รับข้อมูล Product
```

## Shared Components

เก็บ Component ที่ใช้หลาย Feature ใน:

```text
client/src/components/common/
```

ตัวอย่าง:

- Button
- Input
- Modal
- Loading
- ErrorMessage
- EmptyState

Layout เก็บใน:

```text
client/src/components/layout/
```

ตัวอย่าง:

- Navbar
- Footer
- AdminSidebar
- PageContainer

## UI States

หน้าที่อ่านข้อมูลควรพิจารณา:

- Loading
- Success
- Empty
- Error

## Static HTML Migration

เมื่อเปลี่ยน Static HTML เป็น React:

1. ใช้ HTML เดิมเป็นต้นแบบ
2. แบ่งส่วนที่ใช้ซ้ำเป็น Components
3. เปลี่ยน `class` เป็น `className`
4. เปลี่ยนข้อมูลที่เขียนซ้ำเป็น Props
5. เชื่อม Event เช่น Button และ Form
6. ทดสอบหน้า React
7. เก็บ HTML เดิมจนกว่าหน้า React ผ่าน Testing

---

# Backend Guidelines

Backend ใช้ลำดับโดยทั่วไปดังนี้:

```text
Route
  |
Controller
  |
Service
  |
Model
  |
MongoDB
```

## Route

กำหนด URL และ HTTP Method

## Controller

รับ Request และส่ง Response

## Service

เก็บ Business Logic ที่ซับซ้อนหรือใช้ซ้ำ

## Model

กำหนดรูปแบบข้อมูลและ Validation ของ MongoDB

## Middleware

ใช้กับงานส่วนกลาง เช่น:

- Error Handling
- Authentication
- Role Checking
- Request Validation

Controller ไม่ควรมีโค้ดทั้งหมดรวมอยู่ในไฟล์เดียวจนอ่านยาก

## Backend as Source of Truth

Backend ต้องเป็นแหล่งข้อมูลหลักสำหรับ:

- Product Price
- Stock
- Cart Total
- User Role
- Order Status

Frontend ไม่ควรเป็นผู้ตัดสินราคาหรือ Stock สุดท้าย

---

# API Response Format

ทุก API ควรใช้รูปแบบคำตอบที่สม่ำเสมอ

## Success

```json
{
  "success": true,
  "data": {}
}
```

## Success List

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 0
  }
}
```

## Error

```json
{
  "success": false,
  "message": "ไม่พบสินค้าที่ต้องการ"
}
```

## Validation Error

```json
{
  "success": false,
  "message": "ข้อมูลสินค้าไม่ถูกต้อง",
  "errors": {
    "name": "กรุณากรอกชื่อสินค้า",
    "price": "ราคาต้องไม่ติดลบ"
  }
}
```

ข้อความ Error ที่แสดงให้ผู้ใช้ต้องเข้าใจง่าย

ไม่ควรแสดง Technical Error โดยตรง เช่น:

```text
ValidationError
MongoServerError
500 Internal Server Error
```

โดยไม่มีคำอธิบาย

---

# Form Validation

Form ต้องตรวจข้อมูลทั้ง Frontend และ Backend

Frontend ช่วยแจ้งผู้ใช้ได้รวดเร็ว ส่วน Backend ป้องกันข้อมูลผิดเข้าสู่ฐานข้อมูล

## Product Form Rules

| Field | Rule |
|---|---|
| Name | ห้ามว่าง |
| Description | ห้ามว่าง |
| Category | ต้องเป็น `tops` หรือ `bottoms` |
| Gender | ใช้ `unisex` สำหรับ Phase 1 |
| Tags | ต้องมีอย่างน้อยหนึ่ง Tag |
| SKU | ห้ามว่างและห้ามซ้ำ |
| Color | ห้ามว่าง |
| Size | ต้องเป็น S, M หรือ L |
| Price | ต้องเป็นตัวเลขและไม่ติดลบ |
| Stock Quantity | ต้องเป็นจำนวนเต็มและไม่ติดลบ |
| Date | ต้องเป็นวันที่ที่ถูกต้อง |
| Image | ต้องมี Image URL หรือ Image Path |

## Cart Rules

- ต้องมี `productId`
- ต้องมี `variantId`
- Quantity ต้องไม่น้อยกว่า 1
- Quantity ต้องไม่เกิน Stock
- Product ต้องมีอยู่จริง
- Variant ต้องเป็นของ Product ที่เลือก
- Backend ต้องอ่านราคาจริงจาก Product

---

# Commit Messages

ใช้รูปแบบ:

```text
<type>: <short description>
```

## Commit Types

| Type | Meaning |
|---|---|
| `feat:` | เพิ่ม Feature |
| `fix:` | แก้ Bug |
| `docs:` | แก้เอกสาร |
| `style:` | แก้รูปแบบ CSS หรือ UI โดยไม่เปลี่ยน Logic |
| `refactor:` | ปรับโครงสร้างโค้ดโดยไม่เพิ่ม Feature |
| `test:` | เพิ่มหรือแก้ Test |
| `chore:` | Setup, Dependency หรืองานดูแลระบบ |

## Examples

```text
feat: create product card component
feat: add cart item endpoint
fix: prevent cart quantity from exceeding stock
docs: update sprint 2 responsibilities
style: improve product card responsive layout
refactor: extract product validation service
test: add product form validation cases
chore: install mongoose
```

Commit Message ควรอธิบายสิ่งที่เปลี่ยน ไม่ใช้ข้อความเช่น:

```text
update
fix
done
final
new code
แก้แล้ว
```

---

# Pull Requests

Pull Request หนึ่งรายการควรครอบคลุมงานหนึ่งเรื่อง

หลีกเลี่ยง Pull Request ที่รวม:

- Product
- Cart
- Auth
- Admin
- Documentation

ไว้พร้อมกันโดยไม่จำเป็น

## Pull Request Title

ใช้รูปแบบเดียวกับ Commit:

```text
feat: create product list with React
fix: correct cart total calculation
docs: update contributing guidelines
```

## Pull Request Description Template

```md
## What was changed?

อธิบายสิ่งที่แก้ไขหรือเพิ่ม

## Why?

อธิบายเหตุผลหรือ Trello Card ที่เกี่ยวข้อง

## How was it tested?

อธิบายขั้นตอนที่ใช้ทดสอบ

## Trello Card

ใส่ Link ของ Trello Card

## Screenshots

แนบภาพก่อนและหลัง หากเป็นงาน UI

## Checklist

- [ ] ฉันทดสอบงานแล้ว
- [ ] ฉันตรวจ `git diff --staged` แล้ว
- [ ] ฉันไม่ได้ Commit `.env`
- [ ] ฉันไม่ได้เพิ่ม Password หรือข้อมูลลับ
- [ ] ฉันสามารถอธิบายโค้ดได้
- [ ] ฉันจัดการ Loading และ Error แล้ว หากเกี่ยวข้อง
- [ ] ฉันอัปเดตเอกสารแล้ว หากจำเป็น
```

---

# Code Review

Reviewer ควรตรวจ:

- งานตรงกับ Trello Card หรือไม่
- ชื่อ Variable และ Function เข้าใจง่ายหรือไม่
- มีโค้ดซ้ำโดยไม่จำเป็นหรือไม่
- มีข้อมูลลับหรือไม่
- Validation ครบหรือไม่
- Error Message เข้าใจง่ายหรือไม่
- Loading และ Empty State ครบหรือไม่
- API ใช้ HTTP Method ถูกต้องหรือไม่
- Database operation ทำงานจริงหรือไม่
- กระทบ Feature อื่นหรือไม่
- Owner อธิบาย Flow ได้หรือไม่

Reviewer ควรอธิบายเหตุผลของ Comment และหลีกเลี่ยงข้อความที่ไม่ชัดเจน เช่น:

```text
ผิด
แก้ใหม่
ไม่ดี
```

ควรใช้:

```text
กรุณาตรวจ quantity ก่อนบันทึก เพราะค่าติดลบจะทำให้ Cart Total ผิด
```

---

# Testing

Owner ต้องทดสอบงานก่อนเปิด Pull Request

## Frontend Testing

ตรวจอย่างน้อย:

- หน้าเปิดได้
- ไม่มี Error ใน Console
- ข้อมูลแสดงถูกต้อง
- Button ทำงาน
- Form ตรวจข้อมูล
- Loading แสดงถูกต้อง
- Empty State แสดงถูกต้อง
- Error State แสดงถูกต้อง
- Responsive เมื่อเป็นงาน UI

## Backend Testing

ตรวจอย่างน้อย:

- Server เปิดได้
- MongoDB เชื่อมต่อได้
- Request ที่ถูกต้องทำงาน
- Request ที่ข้อมูลผิดถูกปฏิเสธ
- ไม่พบข้อมูลแล้วตอบ 404
- Create บันทึกลง MongoDB
- Update เปลี่ยนข้อมูลใน MongoDB
- Delete ลบข้อมูลใน MongoDB
- ไม่มี Password หรือข้อมูลลับใน Response

## Integration Testing

ตรวจ Flow ตั้งแต่ต้นทางถึงปลายทาง:

```text
Admin Product Form
      |
Product API
      |
MongoDB
      |
Product List
```

และ:

```text
Product Page
      |
Add to Cart
      |
Cart API
      |
MongoDB
      |
Cart Page
      |
Checkout
```

---

# Definition of Done

งานถือว่า Done เมื่อ:

- Checklist ใน Trello Card เสร็จครบ
- Acceptance Criteria ผ่าน
- Feature ทำงานตามที่กำหนด
- Owner ทดสอบกรณีสำเร็จแล้ว
- Owner ทดสอบกรณีข้อมูลผิดแล้ว
- Form มี Validation เมื่อเกี่ยวข้อง
- มี Loading, Empty และ Error State เมื่อเกี่ยวข้อง
- UI Responsive เมื่อเป็นงาน Frontend
- Database operation ใช้ MongoDB เมื่อกำหนด
- ไม่มี Error ที่ยังไม่ได้จัดการ
- ไม่มี Debug Code ที่ไม่จำเป็น
- ไม่มี `.env`, Password หรือข้อมูลลับใน Git
- Owner อธิบายโค้ดและ Data Flow ได้
- Pull Request ผ่าน Review
- Integration Testing ผ่าน
- Trello Card ผ่าน Code Review และ Testing

การเขียนโค้ดเสร็จเพียงอย่างเดียวยังไม่ถือว่า Done

---

# Environment Variables

ห้าม Commit ไฟล์ `.env`

ตัวอย่างข้อมูลใน `.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=...
```

Repository ควรมี `.env.example`:

```env
PORT=5000
MONGODB_URI=
CLIENT_URL=http://localhost:5173
JWT_SECRET=
```

เมื่อเพิ่ม Environment Variable ใหม่:

1. เพิ่มชื่อใน `.env.example`
2. ไม่ใส่ค่าจริง
3. อธิบายให้ทีมทราบ
4. ตรวจ `.gitignore`
5. ตรวจ `git status` ก่อน Commit

---

# Prohibited Actions

ห้าม:

- Push เข้า `main` โดยตรง
- Commit เข้า `develop` โดยตรง
- Merge โดยไม่มี Pull Request
- Merge งานของตัวเองโดยไม่มี Reviewer
- Push `.env`
- Push Password, Token หรือ Secret
- Push `node_modules`
- ใช้ `git add .` โดยไม่ตรวจไฟล์
- ลบไฟล์ของสมาชิกอื่นโดยไม่แจ้ง
- เปลี่ยนชื่อ Field ร่วมโดยไม่แจ้งทีม
- แก้ Shared Files พร้อมกันโดยไม่ประสานงาน
- ลบ Static HTML ก่อน React Replacement ผ่าน Testing
- Merge โค้ดที่ Owner อธิบายไม่ได้
- ย้าย Trello Card ไป Done ก่อน Review และ Testing
- ใช้ `Order` สะกดเป็น `Oder`

---

# Getting Help

หากติดปัญหาเกินประมาณ 30–60 นาที:

1. อ่าน Error Message
2. ตรวจว่า Error เกิดที่ Frontend, Backend หรือ Database
3. บันทึกสิ่งที่ทดลองแล้ว
4. แจ้งใน Trello Card
5. ย้าย Card ไป `Blocked` หากทำต่อไม่ได้
6. Tag ผู้ที่เกี่ยวข้อง
7. ขอ Pair Programming หรือ Review

รูปแบบการขอความช่วยเหลือ:

```text
สิ่งที่กำลังทำ:
ปัญหาที่พบ:
ข้อความ Error:
สิ่งที่ทดลองแล้ว:
ผลลัพธ์ที่คาดหวัง:
ต้องการความช่วยเหลือจาก:
```

การขอความช่วยเหลือไม่ถือว่าเป็นความผิด แต่ควรอธิบายปัญหาและสิ่งที่ทดลองแล้วให้ชัดเจน

---

# Team Goal

ทีม OCCASION จะพัฒนา MERN Stack E-commerce Application ที่สมาชิกทุกคนเข้าใจ สามารถอธิบาย และทำงานร่วมกันได้

เป้าหมายไม่ใช่เพียงทำให้ Demo ทำงาน แต่รวมถึง:

- การเข้าใจ Flow ของระบบ
- การสื่อสารอย่างชัดเจน
- การแบ่งงานที่เหมาะสม
- การ Review อย่างสร้างสรรค์
- การทดสอบก่อนส่ง
- การรับผิดชอบงานของตนเอง
- การขอและให้ความช่วยเหลืออย่างเหมาะสม
