# Occasion API Spec — Phase 1

---

## 1. ขอบเขต Phase 1

ระบบ Phase 1 ครอบคลุม:

- Authentication / Member
- Profile & Body Measurements
- Address Book
- Categories / Products / Variants
- Lookbook / Mix & Match
- Favorites
- Cart
- Checkout / Orders
- Payments
- Shipments
- Reviews
- Admin Dashboard
- Product / Variant / Stock Management
- Customer Management
- Admin Audit Logs

---

## 2. Base URL และ Versioning

```text
Base URL: /api/v1
```

ตัวอย่าง:

```http
GET /api/v1/products
POST /api/v1/auth/login
```

หากมี Breaking Change ในอนาคต จะเพิ่ม version เช่น `/api/v2`

---

## 3. Authentication

ระบบใช้ Bearer Token หลัง Login สำเร็จ

```http
Authorization: Bearer <access_token>
```

### Roles

| Role | ความหมาย |
|---|---|
| Guest | ยังไม่ได้ Login |
| Member | ผู้ใช้ที่ Login แล้ว |
| Admin | ผู้ดูแลระบบ |

### กติกา

- Guest ใช้ Public API ได้
- Member ใช้ Public API + Member API
- Admin ใช้ Admin API
- Guest **ห้าม Checkout**
- Backend ต้องตรวจ Role ทุกครั้ง ห้ามเชื่อข้อมูล Role จาก Frontend

---

## 4. รูปแบบ Response กลาง

### Success

```json
{
  "success": true,
  "data": {}
}
```

### Success แบบ List

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "total_pages": 5
  }
}
```

### Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "ข้อมูลไม่ถูกต้อง",
    "details": {}
  }
}
```

---

## 5. HTTP Status Code ที่ใช้

| Status | ใช้เมื่อ |
|---|---|
| 200 OK | อ่าน / แก้ไขสำเร็จ |
| 201 Created | สร้างข้อมูลสำเร็จ |
| 204 No Content | ลบสำเร็จและไม่คืน Body |
| 400 Bad Request | Request ไม่ถูกต้อง |
| 401 Unauthorized | ยังไม่ Login / Token ไม่ถูกต้อง |
| 403 Forbidden | Login แล้วแต่ไม่มีสิทธิ์ |
| 404 Not Found | ไม่พบ Resource |
| 409 Conflict | ข้อมูลซ้ำ / สถานะชนกัน เช่น Email ซ้ำ |
| 422 Unprocessable Entity | Business Rule ไม่ผ่าน เช่น Stock ไม่พอ |
| 500 Internal Server Error | Error ฝั่ง Server |

---

# 6. Authentication APIs

## 6.1 สมัครสมาชิก

### `POST /auth/register`

**Auth:** Public  
**Role:** Guest

### Request

```json
{
  "email": "member@example.com",
  "phone_number": "0812345678",
  "password": "StrongPassword123",
  "first_name": "Somchai",
  "last_name": "Jaidee"
}
```

> `email` หรือ `phone_number` ต้องมีอย่างน้อยหนึ่งค่า

### Response `201`

```json
{
  "success": true,
  "data": {
    "user": {
      "id": "USER_ID",
      "email": "member@example.com",
      "phone_number": "0812345678",
      "first_name": "Somchai",
      "last_name": "Jaidee",
      "role": "member"
    }
  }
}
```

### Errors

- `400` ข้อมูลไม่ครบ
- `409` Email หรือ Phone Number ซ้ำ

### Business Rules

- Password ต้อง Hash ก่อนบันทึก
- ห้ามคืน Password ใน Response
- Role ตอนสมัครต้องเป็น `member`

---

## 6.2 เข้าสู่ระบบ

### `POST /auth/login`

**Auth:** Public  
**Role:** Guest

### Request

```json
{
  "identifier": "member@example.com",
  "password": "StrongPassword123"
}
```

`identifier` ใช้ Email หรือ Phone Number ได้

### Response `200`

```json
{
  "success": true,
  "data": {
    "access_token": "JWT_TOKEN",
    "user": {
      "id": "USER_ID",
      "first_name": "Somchai",
      "last_name": "Jaidee",
      "role": "member"
    }
  }
}
```

### Errors

- `401` Identifier หรือ Password ไม่ถูกต้อง
- `403` บัญชีถูกระงับ (`is_active = false`)

---

# 7. Member Profile APIs

## 7.1 ดูข้อมูลตัวเอง

### `GET /me`

**Auth:** Required  
**Role:** Member / Admin

### Response `200`

```json
{
  "success": true,
  "data": {
    "id": "USER_ID",
    "email": "member@example.com",
    "phone_number": "0812345678",
    "first_name": "Somchai",
    "last_name": "Jaidee",
    "role": "member",
    "body_measurements": {
      "chest": 95,
      "waist": 80,
      "hip": 96,
      "height": 175,
      "weight": 68
    }
  }
}
```

---

## 7.2 แก้ไขข้อมูลส่วนตัว

### `PATCH /me`

**Auth:** Required  
**Role:** Member / Admin

### Request

```json
{
  "first_name": "Somchai",
  "last_name": "Jaidee",
  "phone_number": "0899999999"
}
```

### Business Rules

- User แก้ `role` เองไม่ได้
- Email/Phone ต้องไม่ซ้ำกับ User อื่น

---

## 7.3 แก้ไขสัดส่วนร่างกาย

### `PATCH /me/body-measurements`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "chest": 95,
  "waist": 80,
  "hip": 96,
  "height": 175,
  "weight": 68
}
```

### Business Rules

- ทุกค่าต้องมากกว่าหรือเท่ากับ 0
- ทุก Field เป็น Optional

---

# 8. Address APIs

## 8.1 ดูรายการที่อยู่

### `GET /addresses`

**Auth:** Required  
**Role:** Member

---

## 8.2 เพิ่มที่อยู่

### `POST /addresses`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "recipient": "Somchai Jaidee",
  "phone_number": "0812345678",
  "address_l1": "99/9 ถนนสุขุมวิท เขตวัฒนา",
  "province": "กรุงเทพมหานคร",
  "postal_code": "10110"
}
```

### Response `201`

คืน Address พร้อม `_id`

---

## 8.3 แก้ไขที่อยู่

### `PATCH /addresses/{address_id}`

**Auth:** Required  
**Role:** Member

### Business Rules

- แก้ได้เฉพาะ Address ที่เป็นของ User ปัจจุบัน

---

## 8.4 ลบที่อยู่

### `DELETE /addresses/{address_id}`

**Auth:** Required  
**Role:** Member

### Response

`204 No Content`

---

# 9. Category APIs

## 9.1 ดูหมวดหมู่

### `GET /categories`

**Auth:** Public  
**Role:** Guest / Member

### Response `200`

```json
{
  "success": true,
  "data": [
    {
      "id": "CATEGORY_ID",
      "name": "เสื้อเชิ้ต",
      "slug": "shirts"
    }
  ]
}
```

---

# 10. Product APIs

## 10.1 ดูรายการสินค้า

### `GET /products`

**Auth:** Public

### Query Parameters

| Param | ตัวอย่าง | ความหมาย |
|---|---|---|
| `search` | `shirt` | ค้นหาชื่อสินค้า |
| `category` | `shirts` | Filter ตาม Category Slug |
| `page` | `1` | หน้าที่ต้องการ |
| `limit` | `20` | จำนวนรายการต่อหน้า |

### Business Rules

- Public API แสดงเฉพาะ `is_active = true`
- ห้ามส่งข้อมูลภายในที่ไม่จำเป็น

---

## 10.2 ดูรายละเอียดสินค้า

### `GET /products/{product_id}`

**Auth:** Public

### Response `200`

```json
{
  "success": true,
  "data": {
    "id": "PRODUCT_ID",
    "title": "Oxford Shirt",
    "description": "เสื้อเชิ้ต Oxford",
    "images": [
      {
        "id": "IMAGE_ID",
        "image_url": "https://...",
        "display_order": 0
      }
    ],
    "variants": [
      {
        "id": "VARIANT_ID",
        "sku": "SHIRT-WHT-M",
        "size_or_color": "Size M / สีขาว",
        "price": 890,
        "stock_quantity": 25
      }
    ],
    "size_chart": [
      {
        "size_name": "M",
        "garment_chest_actual": 102
      }
    ]
  }
}
```

---

# 11. Lookbook APIs

## 11.1 ดู Lookbook

### `GET /lookbooks`

**Auth:** Public

---

## 11.2 ดูรายละเอียด Lookbook

### `GET /lookbooks/{lookbook_id}`

**Auth:** Public

### Business Rules

- แสดงเฉพาะ Lookbook ที่ `is_active = true`
- `default_variant_id` ต้องเป็น Variant ของ Product ใน Item นั้น

---

# 12. Favorites APIs

## 12.1 ดูรายการโปรด

### `GET /favorites`

**Auth:** Required  
**Role:** Member

---

## 12.2 เพิ่ม Favorite

### `POST /favorites`

**Auth:** Required  
**Role:** Member

### Favorite Product

```json
{
  "product_id": "PRODUCT_ID"
}
```

### Favorite Lookbook

```json
{
  "lookbook_id": "LOOKBOOK_ID"
}
```

### Business Rules

- ต้องส่ง `product_id` หรือ `lookbook_id` **อย่างใดอย่างหนึ่ง**
- ห้ามส่งทั้งสองพร้อมกัน
- ห้าม Favorite รายการเดิมซ้ำ

### Errors

- `409` Favorite ซ้ำ
- `422` ส่ง Product และ Lookbook พร้อมกัน

---

## 12.3 ลบ Favorite

### `DELETE /favorites/{favorite_id}`

**Auth:** Required  
**Role:** Member

---

# 13. Cart APIs

> Guest Cart อยู่ฝั่ง Frontend เช่น `localStorage`  
> API กลุ่มนี้ใช้กับ Member หลัง Login

## 13.1 ดู Cart

### `GET /cart`

**Auth:** Required  
**Role:** Member

---

## 13.2 เพิ่มสินค้าเข้า Cart

### `POST /cart/items`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "product_id": "PRODUCT_ID",
  "variant_id": "VARIANT_ID",
  "lookbook_id": null,
  "is_bundle": false,
  "quantity": 2
}
```

### Business Rules

- `quantity >= 1`
- Product และ Variant ต้องมีอยู่จริง
- Variant ต้องเป็นของ Product ที่ส่งมา
- Stock ต้องเพียงพอ
- Backend ต้องเป็นผู้ตรวจราคาและ Stock

---

## 13.3 แก้จำนวนสินค้าใน Cart

### `PATCH /cart/items/{item_id}`

### Request

```json
{
  "quantity": 3
}
```

### Errors

- `422` Stock ไม่พอ
- `404` ไม่พบ Cart Item

---

## 13.4 ลบสินค้าออกจาก Cart

### `DELETE /cart/items/{item_id}`

**Response:** `204`

---

# 14. Checkout API

## 14.1 Checkout

### `POST /checkout`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "address_id": "ADDRESS_ID",
  "payment_method": "promptpay"
}
```

### Main Processing

Backend ต้อง:

1. ตรวจ User Authentication
2. โหลด Cart ของ User
3. ตรวจ Cart ไม่ว่าง
4. ตรวจ Product/Variant ยัง Active
5. ตรวจ Stock ของทุก Item
6. ตรวจ `address_id` เป็นของ User
7. คำนวณ `price_at_buy` จาก Database
8. คำนวณ `total_amount` จาก Backend
9. สร้าง Order
10. สร้าง Payment
11. ดำเนินการชำระเงิน
12. เมื่อสำเร็จ อัปเดต Order/Payment และตัด Stock
13. Clear Cart ตามเงื่อนไขระบบ

### Response `201`

```json
{
  "success": true,
  "data": {
    "order": {
      "id": "ORDER_ID",
      "order_number": "ORD-20260814-001",
      "status": "paid",
      "total_amount": 1780
    },
    "payment": {
      "id": "PAYMENT_ID",
      "method": "promptpay",
      "status": "completed"
    }
  }
}
```

### Errors

- `400` Cart ว่าง / Request ไม่ครบ
- `404` Address ไม่พบ
- `422` Stock ไม่เพียงพอ
- `422` Payment ล้มเหลว

### Business Rules

- Guest Checkout ไม่ได้
- ห้ามใช้ราคา/ยอดรวมที่ Frontend ส่งมาเป็น Source of Truth
- `price_at_buy` ต้องได้จาก Product Variant ณ เวลาสร้าง Order
- Stock หลัง Checkout ห้ามติดลบ

---

# 15. Order APIs

## 15.1 ดูประวัติคำสั่งซื้อ

### `GET /orders`

**Auth:** Required  
**Role:** Member

### Query

`page`, `limit`, `status`

### Business Rule

- คืนเฉพาะ Order ของ User ปัจจุบัน

---

## 15.2 ดูรายละเอียด Order

### `GET /orders/{order_id}`

**Auth:** Required  
**Role:** Member

### Business Rules

- Member เปิดได้เฉพาะ Order ของตัวเอง
- ต้องคืน `price_at_buy` ไม่ใช่ราคาปัจจุบันของ Variant

---

# 16. Payment APIs

## 16.1 ดูสถานะ Payment ของ Order

### `GET /orders/{order_id}/payment`

**Auth:** Required  
**Role:** Member

### Response

```json
{
  "success": true,
  "data": {
    "method": "promptpay",
    "status": "completed",
    "trans_id": "TXN123456",
    "paid_at": "2026-08-14T08:30:00Z"
  }
}
```

---

# 17. Shipment APIs

## 17.1 ติดตามการจัดส่ง

### `GET /orders/{order_id}/shipment`

**Auth:** Required  
**Role:** Member

### Response `200`

```json
{
  "success": true,
  "data": {
    "courier_name": "Kerry Express",
    "tracking_number": "KRY12345678TH",
    "shipped_at": "2026-08-15T03:00:00Z",
    "delivered_at": null
  }
}
```

### Business Rules

- Member ดูได้เฉพาะ Shipment ของ Order ตัวเอง

---

# 18. Review APIs

## 18.1 ดู Review ของสินค้า

### `GET /products/{product_id}/reviews`

**Auth:** Public

### Query

`page`, `limit`

### Business Rules

- Public แสดงเฉพาะ `is_visible = true`

---

## 18.2 สร้าง Review

### `POST /products/{product_id}/reviews`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "order_id": "ORDER_ID",
  "order_item_id": "ORDER_ITEM_ID",
  "rating": 5,
  "comment": "คุณภาพดี ไซส์พอดี"
}
```

### Response `201`

```json
{
  "success": true,
  "data": {
    "id": "REVIEW_ID",
    "rating": 5,
    "comment": "คุณภาพดี ไซส์พอดี",
    "is_visible": true
  }
}
```

### Business Rules

- `rating` ต้อง 1-5
- Order ต้องเป็นของ Member คนปัจจุบัน
- `order_item_id` ต้องอยู่ใน Order
- Product ใน Order Item ต้องตรงกับ `product_id`
- แนะนำให้ Review ได้เฉพาะ `Order.status = delivered`
- 1 Order Item Review ได้สูงสุด 1 ครั้ง

### Errors

- `403` ไม่ใช่เจ้าของ Order
- `409` Order Item ถูก Review แล้ว
- `422` Order ยังไม่ Delivered

---

## 18.3 แก้ไข Review

### `PATCH /reviews/{review_id}`

**Auth:** Required  
**Role:** Member

### Request

```json
{
  "rating": 4,
  "comment": "แก้ไขความคิดเห็น"
}
```

### Business Rules

- แก้ได้เฉพาะ Review ของตัวเอง

---

# 19. Admin Dashboard API

## 19.1 Dashboard

### `GET /admin/dashboard`

**Auth:** Required  
**Role:** Admin

### Response ตัวอย่าง

```json
{
  "success": true,
  "data": {
    "total_products": 120,
    "total_members": 350,
    "total_orders": 80,
    "pending_orders": 12
  }
}
```

> Dashboard เป็น Aggregate Query ไม่ต้องสร้าง Collection แยก

---

# 20. Admin Category APIs

## 20.1 สร้าง Category

### `POST /admin/categories`

**Role:** Admin

```json
{
  "name": "เสื้อเชิ้ต",
  "slug": "shirts"
}
```

---

## 20.2 แก้ไข Category

### `PATCH /admin/categories/{category_id}`

**Role:** Admin

---

# 21. Admin Product APIs

## 21.1 สร้าง Product

### `POST /admin/products`

**Role:** Admin

### Request

```json
{
  "category_id": "CATEGORY_ID",
  "title": "Oxford Shirt",
  "description": "เสื้อเชิ้ต Oxford",
  "is_active": true
}
```

---

## 21.2 แก้ไข Product

### `PATCH /admin/products/{product_id}`

**Role:** Admin

---

# 22. Admin Variant APIs

## 22.1 เพิ่ม Variant

### `POST /admin/products/{product_id}/variants`

**Role:** Admin

```json
{
  "sku": "SHIRT-WHT-M",
  "size_or_color": "Size M / สีขาว",
  "price": 890,
  "stock_quantity": 25
}
```

### Business Rules

- SKU ห้ามซ้ำ
- Price ต้องไม่ติดลบ
- Stock ต้องไม่ติดลบ

---

## 22.2 แก้ไข Variant

### `PATCH /admin/products/{product_id}/variants/{variant_id}`

**Role:** Admin

---

# 23. Admin Stock API

## 23.1 ปรับ Stock

### `POST /admin/products/{product_id}/variants/{variant_id}/stock-adjustments`

**Auth:** Required  
**Role:** Admin

### Request

```json
{
  "change_amount": 10,
  "reason": "restock"
}
```

ตัวอย่างลด Stock:

```json
{
  "change_amount": -2,
  "reason": "damaged"
}
```

### Business Rules

- Stock หลังปรับต้องไม่ติดลบ
- ต้องสร้าง `stock_adjustments` ทุกครั้ง
- `admin_id` ให้ Backend ดึงจาก Token
- Reason ที่รองรับใน Phase 1:
  - `restock`
  - `damaged`
  - `returned`
  - `count_adj`

---

# 24. Admin Lookbook APIs

## 24.1 สร้าง Lookbook

### `POST /admin/lookbooks`

**Role:** Admin

### Request

```json
{
  "title": "Summer Casual",
  "banner_url": "https://...",
  "set_price": 1790,
  "discount_percentage": 10,
  "is_active": true,
  "items": [
    {
      "product_id": "PRODUCT_ID",
      "default_variant_id": "VARIANT_ID"
    }
  ]
}
```

### Business Rules

- `default_variant_id` ต้องเป็น Variant ของ `product_id`

---

## 24.2 แก้ไข Lookbook

### `PATCH /admin/lookbooks/{lookbook_id}`

**Role:** Admin

---

# 25. Admin Order APIs

## 25.1 ดู Orders ทั้งระบบ

### `GET /admin/orders`

**Role:** Admin

### Query

`page`, `limit`, `status`, `search`

---

## 25.2 ดูรายละเอียด Order

### `GET /admin/orders/{order_id}`

**Role:** Admin

---

## 25.3 เปลี่ยน Order Status

### `PATCH /admin/orders/{order_id}/status`

**Role:** Admin

### Request

```json
{
  "status": "processing"
}
```

### Order Status

```text
pending
paid
processing
shipped
delivered
cancelled
```

### Business Rules

- Backend ต้อง Validate การเปลี่ยนสถานะ
- Action สำคัญควรถูกบันทึกใน `admin_audit_logs`

---

# 26. Admin Customer APIs

## 26.1 ดูรายการสมาชิก

### `GET /admin/users`

**Role:** Admin

### Query

`page`, `limit`, `search`, `is_active`

---

## 26.2 ดู Member

### `GET /admin/users/{user_id}`

**Role:** Admin

---

## 26.3 เปลี่ยนสถานะบัญชี

### `PATCH /admin/users/{user_id}/status`

**Role:** Admin

### Request

```json
{
  "is_active": false
}
```

### Business Rules

- Admin ไม่ควรแก้ Password ของ Member ผ่าน Endpoint นี้
- ต้องบันทึก Audit Log

---

# 27. Admin Shipment APIs

## 27.1 สร้าง / อัปเดต Shipment

### `PUT /admin/orders/{order_id}/shipment`

**Auth:** Required  
**Role:** Admin

### Request

```json
{
  "courier_name": "Kerry Express",
  "tracking_number": "KRY12345678TH",
  "shipped_at": "2026-08-15T03:00:00Z",
  "delivered_at": null
}
```

### Business Rules

- Phase 1: 1 Order มี Shipment ได้สูงสุด 1 รายการ
- Tracking Number ห้ามซ้ำ
- เมื่อเริ่มจัดส่ง สามารถอัปเดต Order เป็น `shipped`
- เมื่อ `delivered_at` มีค่า สามารถอัปเดต Order เป็น `delivered`

---

# 28. Admin Audit Log API

## 28.1 ดู Audit Log

### `GET /admin/audit-logs`

**Auth:** Required  
**Role:** Admin

### Query

| Param | ความหมาย |
|---|---|
| `page` | หน้า |
| `limit` | จำนวนต่อหน้า |
| `admin_id` | Filter Admin |
| `action` | Filter Action |
| `target_collection` | Filter Collection |

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "LOG_ID",
      "admin_id": "ADMIN_ID",
      "action": "UPDATE_ORDER_STATUS",
      "target_collection": "orders",
      "target_id": "ORDER_ID",
      "created_at": "2026-08-14T08:00:00Z"
    }
  ]
}
```

---

# 29. Authorization Matrix

| API Group | Guest | Member | Admin |
|---|:---:|:---:|:---:|
| Auth Register / Login | ✅ | - | - |
| Categories | ✅ | ✅ | ✅ |
| Products | ✅ | ✅ | ✅ |
| Lookbooks | ✅ | ✅ | ✅ |
| Favorites | ❌ | ✅ | - |
| Cart | ❌* | ✅ | - |
| Checkout | ❌ | ✅ | - |
| Member Orders | ❌ | ✅ | - |
| Payment Status | ❌ | ✅ | - |
| Shipment Tracking | ❌ | ✅ | - |
| Product Reviews - Read | ✅ | ✅ | ✅ |
| Product Reviews - Create/Edit | ❌ | ✅ | - |
| Admin Dashboard | ❌ | ❌ | ✅ |
| Admin Catalog Management | ❌ | ❌ | ✅ |
| Admin Stock | ❌ | ❌ | ✅ |
| Admin Orders | ❌ | ❌ | ✅ |
| Admin Customers | ❌ | ❌ | ✅ |
| Admin Shipment | ❌ | ❌ | ✅ |
| Audit Logs | ❌ | ❌ | ✅ |

`* Guest Cart จัดการฝั่ง Frontend และไม่มี Cart API ฝั่ง Server ใน Phase 1`

---

# 30. Business Rules กลางที่ทีมต้องยึดร่วมกัน

1. **Guest Checkout ไม่ได้** — ต้อง Login/Register ก่อน
2. Backend เป็น Source of Truth สำหรับ **Price, Stock, Total Amount และ Role**
3. `price_at_buy` ต้องบันทึกราคาจาก Variant ณ เวลาสร้าง Order
4. Stock ห้ามติดลบ
5. Member เข้าถึงได้เฉพาะ Order / Address / Favorite / Review ของตัวเอง
6. Favorite ต้องเลือก Product หรือ Lookbook อย่างใดอย่างหนึ่ง
7. SKU ต้องไม่ซ้ำ
8. Tracking Number ต้องไม่ซ้ำ
9. 1 Order มี Shipment ได้สูงสุด 1 รายการใน Phase 1
10. Review ต้องอ้าง Order Item ที่ Member เคยซื้อจริง
11. 1 Order Item รีวิวได้สูงสุด 1 ครั้ง
12. Review Rating ต้อง 1-5
13. Admin-only Endpoint ต้องตรวจ Role ฝั่ง Backend
14. การเปลี่ยนแปลงสำคัญของ Admin ควรสร้าง `admin_audit_logs`
15. Password ห้ามเก็บหรือส่งกลับแบบ Plain Text
16. Frontend ห้ามส่ง `user_id` / `admin_id` แล้วให้ Backend เชื่อมโดยตรง — Backend ต้องดึง Identity จาก Token

---

# 31. Naming Convention

### URL

ใช้ lowercase + plural nouns

```text
/products
/orders
/reviews
/admin/users
```

### JSON Field

ใช้ `snake_case`

```json
{
  "first_name": "Somchai",
  "order_number": "ORD-001",
  "tracking_number": "ABC123"
}
```

### MongoDB Collection

ใช้ lowercase plural

```text
users
products
orders
admin_audit_logs
```

---

# 32. Endpoint Summary

```text
AUTH
POST   /auth/register
POST   /auth/login

PROFILE
GET    /me
PATCH  /me
PATCH  /me/body-measurements

ADDRESSES
GET    /addresses
POST   /addresses
PATCH  /addresses/:address_id
DELETE /addresses/:address_id

CATALOG
GET    /categories
GET    /products
GET    /products/:product_id
GET    /lookbooks
GET    /lookbooks/:lookbook_id

FAVORITES
GET    /favorites
POST   /favorites
DELETE /favorites/:favorite_id

CART
GET    /cart
POST   /cart/items
PATCH  /cart/items/:item_id
DELETE /cart/items/:item_id

CHECKOUT
POST   /checkout

ORDERS
GET    /orders
GET    /orders/:order_id
GET    /orders/:order_id/payment
GET    /orders/:order_id/shipment

REVIEWS
GET    /products/:product_id/reviews
POST   /products/:product_id/reviews
PATCH  /reviews/:review_id

ADMIN
GET    /admin/dashboard

POST   /admin/categories
PATCH  /admin/categories/:category_id

POST   /admin/products
PATCH  /admin/products/:product_id

POST   /admin/products/:product_id/variants
PATCH  /admin/products/:product_id/variants/:variant_id

POST   /admin/products/:product_id/variants/:variant_id/stock-adjustments

POST   /admin/lookbooks
PATCH  /admin/lookbooks/:lookbook_id

GET    /admin/orders
GET    /admin/orders/:order_id
PATCH  /admin/orders/:order_id/status

GET    /admin/users
GET    /admin/users/:user_id
PATCH  /admin/users/:user_id/status

PUT    /admin/orders/:order_id/shipment

GET    /admin/audit-logs
```

---

## 33. Definition of Done สำหรับ API

Endpoint ถือว่าเสร็จเมื่อ:

- Request Validation ครบ
- Authentication / Authorization ถูกต้อง
- Business Rule ถูกตรวจฝั่ง Backend
- Status Code ตรงตาม Spec
- Response Shape ตรงกับ Spec
- Error Format เป็นมาตรฐานเดียวกัน
- มี Test สำหรับ Happy Path และ Error สำคัญ
- API Spec ถูกอัปเดตหาก Contract เปลี่ยน

---

**Document:** Occasion API Spec  
**Phase:** 1  
**Base URL:** `/api/v1`
