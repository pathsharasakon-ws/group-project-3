# 🤝 Contributing Guidelines

ยินดีต้อนรับสู่โปรเจกต์ **OCCASION** 🎉

เอกสารฉบับนี้จัดทำขึ้นเพื่อกำหนดแนวทางการทำงานร่วมกันของทีม เพื่อให้ทุกคนพัฒนาโปรเจกต์ไปในทิศทางเดียวกัน ลดปัญหา Merge Conflict และสามารถติดตามการเปลี่ยนแปลงของโค้ดได้อย่างเป็นระบบ

---

# 🌳 Git Flow

โปรเจกต์นี้ใช้ Git Flow ดังนี้

```
main
│
└── develop
    ├── feature/setup
    ├── feature/content
    ├── feature/auth
    ├── feature/product
    ├── feature/cart
    ├── feature/lookbook
    ├── feature/admin
    ├── bugfix/*
    └── hotfix/*
```

## Branch หลัก

### `main`

- สำหรับเวอร์ชันที่พร้อมใช้งานหรือพร้อมส่งอาจารย์
- ห้าม Commit หรือ Push โดยตรง

### `develop`

- Branch หลักสำหรับการพัฒนา
- สมาชิกทุกคนต้องสร้าง Branch ใหม่จาก `develop`
- ทุก Pull Request ต้อง Merge กลับเข้า `develop`

---

# 👥 Feature Branch (Sprint 1)

| Branch | ผู้รับผิดชอบ | รายละเอียด |
|---------|--------------|------------|
| `feature/setup` | Nae | Setup React, Tailwind CSS, React Router และโครงสร้างโปรเจกต์ |
| `feature/content` | Mos | Landing Page, About, Contact, Customer Service, FAQ, Articles, Terms & Conditions, Privacy Policy และ Shared Components |
| `feature/auth` | LukNok | Login, Register, Forgot Password, Profile |
| `feature/product` | BM | Product List, Product Detail, Search, Filter, Wishlist, Recommendation |
| `feature/cart` | Bird | Shopping Cart, Checkout, Payment, Order Summary |
| `feature/lookbook` | Nae | Lookbook, Outfit Collection |
| `feature/admin` | Nae | Admin Dashboard, Product CRUD, Inventory, Order Management |

---

# 🌱 Branch Naming Convention

สร้าง Branch ใหม่จาก `develop` เสมอ

```
feature/<feature-name>

bugfix/<bug-name>

hotfix/<bug-name>

refactor/<task-name>
```

ตัวอย่าง

```
feature/product
feature/cart
feature/auth
bugfix/login
hotfix/payment
```

---

# 🔄 Workflow

## 1. เปลี่ยนไปที่ develop

```bash
git checkout develop
```

---

## 2. ดึงโค้ดล่าสุด

```bash
git pull origin develop
```

---

## 3. สร้าง Branch ใหม่

ตัวอย่าง

```bash
git checkout -b feature/product
```

---

## 4. พัฒนา Feature

เขียนโค้ดและทดสอบให้เรียบร้อย

---

## 5. เพิ่มไฟล์เข้า Git

```bash
git add .
```

---

## 6. Commit

```bash
git commit -m "feat: create product page"
```

ตัวอย่าง

```bash
git commit -m "feat: create landing page"

git commit -m "fix: resolve login validation"

git commit -m "docs: update README"
```

---

## 7. Push ขึ้น GitHub

ครั้งแรก

```bash
git push -u origin feature/product
```

ครั้งต่อไป

```bash
git push
```

---

## 8. เปิด Pull Request

```
feature/product
        │
        ▼
     develop
```

---

## 9. Code Review

ก่อน Merge

- ตรวจสอบการทำงาน
- ตรวจสอบ Responsive
- ไม่มี Error
- ไม่มี Merge Conflict

เมื่อผ่านการ Review แล้ว จึง Merge เข้า `develop`

---

# 🔄 หาก develop มีการอัปเดต

หากระหว่างทำงานมีการ Merge งานของเพื่อนเข้า `develop`

ให้อัปเดต Branch ของตนเอง

```bash
git checkout develop

git pull origin develop

git checkout feature/product

git merge develop
```

หากเกิด Merge Conflict

```bash
git add .

git commit

git push
```

---

# 📝 Commit Message Convention

| Prefix | ความหมาย |
|---------|-----------|
| `feat:` | เพิ่มฟีเจอร์ใหม่ |
| `fix:` | แก้ไข Bug |
| `docs:` | แก้ไขเอกสาร |
| `style:` | ปรับแต่ง CSS หรือรูปแบบโค้ด |
| `refactor:` | ปรับปรุงโครงสร้างโค้ด |
| `test:` | เพิ่มหรือแก้ไข Test |
| `chore:` | งานทั่วไป เช่น ติดตั้ง Package |

ตัวอย่าง

```
feat: create landing page

feat: add product card

fix: resolve login validation

docs: update README

style: improve navbar responsive

refactor: separate auth component

chore: install axios
```

---

# 📂 Project Structure

```
client/
│
├── assets/
├── components/
├── pages/
├── hooks/
├── context/
├── services/
└── App.jsx

server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
└── services/
```

---

# 📌 Naming Convention

## Components

ใช้ PascalCase

```
Navbar.jsx

Footer.jsx

ProductCard.jsx

HeroBanner.jsx
```

---

## Pages

```
LandingPage.jsx

ProductPage.jsx

ProfilePage.jsx

CheckoutPage.jsx
```

---

## Functions

ใช้ camelCase

```
getProducts()

loginUser()

calculatePrice()
```

---

# ♻ Shared Components

Component ที่ใช้ร่วมกันให้เก็บไว้ที่

```
client/src/components/
```

เช่น

- Navbar
- Footer
- Button
- SearchBar
- Modal

เพื่อให้ทุกคนสามารถนำไปใช้งานร่วมกันได้ และหลีกเลี่ยงการสร้าง Component ซ้ำ

---

# 🔒 Environment Variables

- ห้าม Push ไฟล์ `.env`
- หากเพิ่ม Environment Variable ใหม่ ให้แก้ไข `.env.example` ทุกครั้ง

---

# 🚫 ห้าม

- Push เข้า `main`
- Commit ลง `develop` โดยตรง
- Merge เข้า `develop` โดยไม่เปิด Pull Request
- Push ไฟล์ `.env`
- Push โฟลเดอร์ `node_modules`
- Push โค้ดที่ยังมี Error
- ลบไฟล์ของสมาชิกคนอื่นโดยไม่แจ้ง

---

# ✅ Definition of Done

ก่อนเปิด Pull Request ทุกครั้ง

- Build ผ่าน
- ไม่มี Error
- Responsive
- ไม่มี `console.log()`
- ไม่มีโค้ดที่ไม่ได้ใช้งาน
- Commit Message ถูกต้อง
- ดึงโค้ดล่าสุดจาก `develop` แล้ว
- ไม่มี Merge Conflict
- Pull Request พร้อมสำหรับการ Review

---

# 🎯 เป้าหมายของทีม

พัฒนาเว็บไซต์ **OCCASION – Smart Fashion E-Commerce** ด้วย MERN Stack ตามหลัก Software Engineering โดยใช้ Git Flow เพื่อให้ทุกคนสามารถทำงานร่วมกันได้อย่างมีประสิทธิภาพ และส่งมอบงานที่มีคุณภาพ
