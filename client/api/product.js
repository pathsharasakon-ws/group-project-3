/**
 * ฐานข้อมูลรายการสินค้า (Products Dataset)
 * ประกอบด้วยข้อมูลสินค้าครบถ้วนทั้ง 20 รายการ สำหรับ OCCASION Fashion E-Commerce
 */
export const productsData = [
  {
    id: 1,
    name: "เสื้อเชิ้ตโอเวอร์ไซส์ สไตล์มินิมอล",
    description: "เสื้อเชิ้ตผ้าคอตตอนเนื้อนุ่ม ระบายอากาศดี ดีไซน์ทรงหลวมทันสมัย ใส่สบายได้ทุกวัน",
    category: "tops",
    categoryName: "Tops",
    price: 450,
    originalPrice: 590,
    quantity: 12,
    tags: [
      { text: "NEW", bg: "bg-accent" },
      { text: "ลด 24%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_6.jpg",
    rating: 4.9,
    reviewsCount: 47,
    sales: 140,
    createdAt: "2026-08-10",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "31 เบจ", hex: "#e8decb" },
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "00 ขาว", hex: "#f8f8f8" }
    ],
    images: [
      "./assets/product/style_6.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 2,
    name: "กางเกงขายาวทรงกระบอก ทรงสวย",
    description: "กางเกงสแล็คทรงกระบอกตรง ทรงสวยช่วยพรางหุ่นให้ดูเพรียว เหมาะสำหรับทำงานและเที่ยว",
    category: "bottoms",
    categoryName: "Bottoms",
    price: 590,
    originalPrice: 790,
    quantity: 8,
    tags: [
      { text: "BEST SELLER", bg: "bg-secondary" },
      { text: "ลด 25%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_7.jpg",
    rating: 4.8,
    reviewsCount: 56,
    sales: 340,
    createdAt: "2026-07-20",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "32 เบจเข้ม", hex: "#c8bca7" },
      { name: "01 เทา", hex: "#7a7a7a" }
    ],
    images: [
      "./assets/product/style_7.jpg",
      "./assets/product/style_2.jpg",
      "./assets/lookbook/lookbook_set1.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 3,
    name: "กระโปรงพลีทสั้น สไตล์เกาหลี",
    description: "กระโปรงทรงพลีทเอวสูง เนื้อผ้าทิ้งตัวสวย มีกางเกงซับในในตัว มั่นใจทุกการเคลื่อนไหว",
    category: "skirts",
    categoryName: "Skirts",
    price: 390,
    originalPrice: 490,
    quantity: 15,
    tags: [
      { text: "HOT", bg: "bg-pink-600" },
      { text: "ลด 20%", bg: "bg-primary" }
    ],
    img: "./assets/product/man_style_1.jpg",
    rating: 4.9,
    reviewsCount: 32,
    sales: 210,
    createdAt: "2026-08-01",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "00 ขาว", hex: "#f8f8f8" },
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "68 น้ำเงิน", hex: "#1e3a5f" }
    ],
    images: [
      "./assets/product/man_style_1.jpg",
      "./assets/product/style_3.jpg",
      "./assets/lookbook/lookbook_set2.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_5.jpg"
    ]
  },
  {
    id: 4,
    name: "เซ็ตชุดลุคประจำวัน เรียบหรู",
    description: "แมตช์คู่เสื้อและกางเกงโทนสีเข้ากันอย่างลงตัว ใส่สบาย สไตล์มินิมอลโมเดิร์น",
    category: "sets",
    categoryName: "Sets",
    price: 350,
    originalPrice: 490,
    quantity: 10,
    tags: [
      { text: "MATCH SET", bg: "bg-primary" },
      { text: "ลด 28%", bg: "bg-accent" }
    ],
    img: "./assets/product/man_style_2.jpg",
    rating: 4.7,
    reviewsCount: 29,
    sales: 180,
    createdAt: "2026-08-05",
    sizes: ["S", "M", "L", "XL", "Free Size"],
    colors: [
      { name: "30 ครีม", hex: "#f5edd6" },
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "57 เขียวขี้ม้า", hex: "#4b5320" }
    ],
    images: [
      "./assets/product/man_style_2.jpg",
      "./assets/product/style_4.jpg",
      "./assets/lookbook/lookbook_3.png",
      "./assets/product/style_2.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_1.jpg"
    ]
  },
  {
    id: 5,
    name: "เสื้อคลุมคาร์ดิแกน ผ้านุ่มพิเศษ",
    description: "เสื้อคลุมผ้าไหมพรมเนื้อละเอียด นุ่มสบาย ไม่ระคายผิว กันหนาวในห้องแอร์ได้ดีเยี่ยม",
    category: "jackets",
    categoryName: "Jackets",
    price: 350,
    originalPrice: 490,
    quantity: 10,
    tags: [
      { text: "PREMIUM", bg: "bg-accent" },
      { text: "ลด 28%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_5.jpg",
    rating: 4.9,
    reviewsCount: 64,
    sales: 290,
    createdAt: "2026-07-15",
    sizes: ["S", "M", "L", "Free Size"],
    colors: [
      { name: "12 ชมพูนู้ด", hex: "#e8c5c8" },
      { name: "31 เบจ", hex: "#e8decb" },
      { name: "09 ดำ", hex: "#2b2b2b" }
    ],
    images: [
      "./assets/product/style_5.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 6,
    name: "เสื้อยืดคอกลม ผ้า Cotton มินิมอล",
    description: "เสื้อยืดผ้าฝ้ายธรรมชาติ 100% สวมใส่สบาย ไม่ย้วยง่าย เหมาะกับทุกวัน",
    category: "tops",
    categoryName: "Tops",
    price: 350,
    originalPrice: 420,
    quantity: 20,
    tags: [
      { text: "BASIC", bg: "bg-secondary" },
      { text: "ลด 16%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_1.jpg",
    rating: 4.6,
    reviewsCount: 88,
    sales: 520,
    createdAt: "2026-06-10",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "00 ขาว", hex: "#f8f8f8" },
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "67 กรมท่า", hex: "#1f293d" }
    ],
    images: [
      "./assets/product/style_1.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 7,
    name: "กางเกงยีนส์ขากระบอกวินเทจ",
    description: "ยีนส์ผ้าเดนิมคุณภาพสูง ทรงกระบอกตรงคลาสสิก สวมใส่ได้ยาวนานไม่มีตกยุค",
    category: "bottoms",
    categoryName: "Bottoms",
    price: 490,
    originalPrice: 650,
    quantity: 9,
    tags: [
      { text: "VINTAGE", bg: "bg-amber-600" },
      { text: "ลด 24%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_2.jpg",
    rating: 4.8,
    reviewsCount: 41,
    sales: 150,
    createdAt: "2026-08-12",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "64 ยีนส์ฟอกเข้ม", hex: "#273c59" },
      { name: "62 ยีนส์ฟอกอ่อน", hex: "#7ba4cc" },
      { name: "09 ยีนส์ดำ", hex: "#242424" }
    ],
    images: [
      "./assets/product/style_2.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 8,
    name: "เสื้อคลุมเบลเซอร์ สไตล์แคชชวล",
    description: "เบลเซอร์กึ่งทางการ ใส่เที่ยวหรือประชุมก็ดูดี ทรงโมเดิร์น สบายตัว คัตติ้งเนี้ยบ",
    category: "jackets",
    categoryName: "Jackets",
    price: 690,
    originalPrice: 890,
    quantity: 7,
    tags: [
      { text: "PROMOTION", bg: "bg-purple-600" },
      { text: "ลด 22%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_3.jpg",
    rating: 5.0,
    reviewsCount: 22,
    sales: 95,
    createdAt: "2026-08-14",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "08 เทาเข้ม", hex: "#4b5563" },
      { name: "31 ครีมเบจ", hex: "#d8cca3" },
      { name: "09 ดำคลาสสิก", hex: "#1f2937" }
    ],
    images: [
      "./assets/product/style_3.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_7.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_4.jpg"
    ]
  },
  {
    id: 9,
    name: "เซ็ตเสื้อยืดและกางเกงขาสั้น Casual",
    description: "ชุดเซ็ตลำลองผ้า Cotton 100% สำหรับวันพักผ่อน สบายและมีสไตล์ คุ้มค่าคุ้มราคา",
    category: "sets",
    categoryName: "Sets",
    price: 390,
    originalPrice: 550,
    quantity: 14,
    tags: [
      { text: "COMBO SET", bg: "bg-emerald-600" },
      { text: "ลด 29%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_4.jpg",
    rating: 4.7,
    reviewsCount: 35,
    sales: 160,
    createdAt: "2026-08-11",
    sizes: ["S", "M", "L", "Free Size"],
    colors: [
      { name: "53 เขียวโอลีฟ", hex: "#606c38" },
      { name: "30 ครีมละมุน", hex: "#fefae0" },
      { name: "09 ดำชาโคล", hex: "#283618" }
    ],
    images: [
      "./assets/product/style_4.jpg",
      "./assets/product/man_style_2.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_5.jpg",
      "./assets/product/style_7.jpg"
    ]
  },
  {
    id: 10,
    name: "เสื้อเชิ้ตคอปกแขนสั้น ทรงหลวม",
    description: "เสื้อเชิ้ตแขนสั้นผ้าเรยอน สัมผัสเย็นสบาย ทิ้งตัวพริ้ว เหมาะกับสภาพอากาศเมืองร้อน",
    category: "tops",
    categoryName: "Tops",
    price: 420,
    originalPrice: 550,
    quantity: 16,
    tags: [
      { text: "TRENDING", bg: "bg-primary" },
      { text: "ลด 23%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_1.jpg",
    rating: 4.8,
    reviewsCount: 38,
    sales: 190,
    createdAt: "2026-08-08",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "00 ขาว", hex: "#ffffff" },
      { name: "31 เบจ", hex: "#e8decb" },
      { name: "67 สีกรม", hex: "#1f293d" }
    ],
    images: [
      "./assets/product/style_1.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_5.jpg"
    ]
  },
  {
    id: 11,
    name: "กางเกงคาร์โก้ขายาว สตรีทแฟชั่น",
    description: "กางเกงสไตล์สตรีททรงหลวม กระเป๋าข้างอเนกประสงค์ ผ้าคอตตอนทวิลหนากำลังดี",
    category: "bottoms",
    categoryName: "Bottoms",
    price: 620,
    originalPrice: 790,
    quantity: 11,
    tags: [
      { text: "STREET LOOK", bg: "bg-amber-600" },
      { text: "ลด 21%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_7.jpg",
    rating: 4.9,
    reviewsCount: 52,
    sales: 280,
    createdAt: "2026-08-04",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "57 เขียวทหาร", hex: "#4b5320" },
      { name: "09 ดำ", hex: "#2b2b2b" },
      { name: "33 กากี", hex: "#c3b091" }
    ],
    images: [
      "./assets/product/style_7.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/man_style_1.jpg"
    ]
  },
  {
    id: 12,
    name: "กระโปรงยีนส์ผ่าหน้า ทรงเอเอวสูง",
    description: "กระโปรงยีนส์ยาวผ่าหน้าเพิ่มความคล่องตัว ทรงเอช่วยเสริมบุคลิกให้ดูเพรียวยาว",
    category: "skirts",
    categoryName: "Skirts",
    price: 480,
    originalPrice: 620,
    quantity: 13,
    tags: [
      { text: "HOT ITEM", bg: "bg-pink-600" },
      { text: "ลด 22%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_2.jpg",
    rating: 4.8,
    reviewsCount: 44,
    sales: 230,
    createdAt: "2026-08-07",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "62 ยีนส์ฟอก", hex: "#7ba4cc" },
      { name: "64 ยีนส์เข้ม", hex: "#273c59" }
    ],
    images: [
      "./assets/product/style_2.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_5.jpg"
    ]
  },
  {
    id: 13,
    name: "เสื้อแจ็คเก็ตยีนส์ ทรงคลาสสิก",
    description: "เสื้อคลุมยีนส์เดนิมฟอกนุ่ม ทรงมาตรฐาน แมตช์กับชุดไหนก็เข้ากันได้ทุกลุค",
    category: "jackets",
    categoryName: "Jackets",
    price: 750,
    originalPrice: 990,
    quantity: 6,
    tags: [
      { text: "DENIM CLASSIC", bg: "bg-primary" },
      { text: "ลด 24%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_3.jpg",
    rating: 5.0,
    reviewsCount: 19,
    sales: 110,
    createdAt: "2026-07-28",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "62 ฟ้าเดนิม", hex: "#5b84b1" },
      { name: "09 ดำยีนส์", hex: "#222222" }
    ],
    images: [
      "./assets/product/style_3.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/style_7.jpg"
    ]
  },
  {
    id: 14,
    name: "เสื้อกล้ามไหมพรม ถักละเอียด",
    description: "เสื้อกล้ามไหมพรมเนื้อบางเบา ทรงเข้ารูปพอดีตัว ใส่เดี่ยวหรือใส่เป็นเสื้อตัวในก็สวย",
    category: "tops",
    categoryName: "Tops",
    price: 290,
    originalPrice: 390,
    quantity: 18,
    tags: [
      { text: "SUMMER PICK", bg: "bg-amber-500" },
      { text: "ลด 25%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_5.jpg",
    rating: 4.7,
    reviewsCount: 60,
    sales: 410,
    createdAt: "2026-08-02",
    sizes: ["Free Size", "S", "M"],
    colors: [
      { name: "30 ครีม", hex: "#f5edd6" },
      { name: "12 นู้ด", hex: "#e8c5c8" },
      { name: "09 ดำ", hex: "#2b2b2b" }
    ],
    images: [
      "./assets/product/style_5.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_1.jpg"
    ]
  },
  {
    id: 15,
    name: "กางเกงขาสั้นเอวสม็อก ผ้ายีนส์บาง",
    description: "กางเกงขาสั้นเอวยางยืดพร้อมเชือกผูก เนื้อผ้านุ่มระบายอากาศดี ใส่พักผ่อนสบายๆ",
    category: "bottoms",
    categoryName: "Bottoms",
    price: 340,
    originalPrice: 450,
    quantity: 22,
    tags: [
      { text: "EASY FIT", bg: "bg-secondary" },
      { text: "ลด 24%", bg: "bg-accent" }
    ],
    img: "./assets/product/man_style_2.jpg",
    rating: 4.6,
    reviewsCount: 37,
    sales: 260,
    createdAt: "2026-08-06",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "62 ยีนส์ฟ้า", hex: "#7ba4cc" },
      { name: "00 ขาวออฟไวท์", hex: "#fafafa" },
      { name: "09 ดำ", hex: "#2b2b2b" }
    ],
    images: [
      "./assets/product/man_style_2.jpg",
      "./assets/product/style_4.jpg",
      "./assets/product/style_7.jpg"
    ]
  },
  {
    id: 16,
    name: "กระโปรงยาวผ้าทิ้งตัว ลายมินิมอล",
    description: "กระโปรงยาวทรงตรงผ้าชีฟองซับใน ทิ้งตัวสวยงาม ใส่ทำงานหรือเดินห้างดูเรียบหรู",
    category: "skirts",
    categoryName: "Skirts",
    price: 450,
    originalPrice: 590,
    quantity: 10,
    tags: [
      { text: "ELEGANT", bg: "bg-primary" },
      { text: "ลด 23%", bg: "bg-accent" }
    ],
    img: "./assets/product/man_style_1.jpg",
    rating: 4.9,
    reviewsCount: 28,
    sales: 140,
    createdAt: "2026-08-09",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "09 ดำลายจุด", hex: "#1a1a1a" },
      { name: "31 เบจธรรมชาติ", hex: "#e8decb" }
    ],
    images: [
      "./assets/product/man_style_1.jpg",
      "./assets/product/style_6.jpg",
      "./assets/product/style_3.jpg"
    ]
  },
  {
    id: 17,
    name: "เสื้อคลุมสเวตเตอร์ ถักลายนูน",
    description: "สเวตเตอร์ผ้าไหมพรมเนื้อหนานุ่ม ลายถักเคเบิลคลาสสิก กันลมกันหนาวได้ดีเยี่ยม",
    category: "jackets",
    categoryName: "Jackets",
    price: 550,
    originalPrice: 720,
    quantity: 9,
    tags: [
      { text: "COZY FIT", bg: "bg-purple-600" },
      { text: "ลด 23%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_5.jpg",
    rating: 4.8,
    reviewsCount: 31,
    sales: 175,
    createdAt: "2026-08-03",
    sizes: ["S", "M", "L", "Free Size"],
    colors: [
      { name: "30 ครีมวานิลลา", hex: "#fefae0" },
      { name: "53 มอคค่า", hex: "#8c6239" },
      { name: "09 ชาโคล", hex: "#2f3542" }
    ],
    images: [
      "./assets/product/style_5.jpg",
      "./assets/product/style_3.jpg",
      "./assets/product/style_1.jpg"
    ]
  },
  {
    id: 18,
    name: "เซ็ตเสื้อเชิ้ตและกางเกงขาสั้นผ้าลินิน",
    description: "ชุดเซ็ตผ้าลินินผสมคอตตอน ระบายความร้อนดีเยี่ยม ลุคสบายสไตล์มินิมอลรีสอร์ท",
    category: "sets",
    categoryName: "Sets",
    price: 590,
    originalPrice: 790,
    quantity: 12,
    tags: [
      { text: "LINEN SET", bg: "bg-emerald-600" },
      { text: "ลด 25%", bg: "bg-primary" }
    ],
    img: "./assets/product/style_4.jpg",
    rating: 4.9,
    reviewsCount: 42,
    sales: 215,
    createdAt: "2026-08-05",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "31 เบจธรรมชาติ", hex: "#d8cca3" },
      { name: "57 เซจกรีน", hex: "#9caf88" },
      { name: "00 ขาวบริสุทธิ์", hex: "#ffffff" }
    ],
    images: [
      "./assets/product/style_4.jpg",
      "./assets/product/man_style_2.jpg",
      "./assets/product/style_6.jpg"
    ]
  },
  {
    id: 19,
    name: "เสื้อโปโลถัก คอวี สไตล์เรโทร",
    description: "เสื้อโปโลผ้าถักเนื้อนุ่ม คอวีแบบไร้กระดุม ดีไซน์เรโทรโมเดิร์น เรียบโก้",
    category: "tops",
    categoryName: "Tops",
    price: 390,
    originalPrice: 490,
    quantity: 17,
    tags: [
      { text: "RETRO CHIC", bg: "bg-amber-600" },
      { text: "ลด 20%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_6.jpg",
    rating: 4.7,
    reviewsCount: 39,
    sales: 195,
    createdAt: "2026-08-08",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "67 สีกรม", hex: "#1f293d" },
      { name: "31 ครีมเบจ", hex: "#e8decb" },
      { name: "09 ดำ", hex: "#2b2b2b" }
    ],
    images: [
      "./assets/product/style_6.jpg",
      "./assets/product/style_1.jpg",
      "./assets/product/style_2.jpg"
    ]
  },
  {
    id: 20,
    name: "กางเกงสแล็คทรงขากระบอกเล็กเข้ารูป",
    description: "กางเกงสแล็คผ้าผสมสแปนเด็กซ์ ยืดหยุ่นคล่องตัว ทรงขากระบอกเล็กใส่แล้วดูสูงโปร่ง",
    category: "bottoms",
    categoryName: "Bottoms",
    price: 520,
    originalPrice: 690,
    quantity: 14,
    tags: [
      { text: "SMART CASUAL", bg: "bg-primary" },
      { text: "ลด 24%", bg: "bg-accent" }
    ],
    img: "./assets/product/style_7.jpg",
    rating: 4.8,
    reviewsCount: 48,
    sales: 310,
    createdAt: "2026-08-11",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "09 ดำสูท", hex: "#1e1e1e" },
      { name: "08 เทาเข้ม", hex: "#3d3d3d" },
      { name: "32 สีกากี", hex: "#b5a386" }
    ],
    images: [
      "./assets/product/style_7.jpg",
      "./assets/product/style_2.jpg",
      "./assets/product/man_style_1.jpg"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.productsData = productsData;
  window.productData = productsData;
}